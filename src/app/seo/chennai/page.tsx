import type { Metadata } from 'next';
import Script from 'next/script';
import { seoCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
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
  title: 'SEO Company in Chennai | Best SEO Services Chennai | FactoryJet',
  description:
    'Looking for the best SEO company in Chennai? FactoryJet delivers SEO services in Chennai — technical SEO, local SEO, manufacturing & auto B2B SEO, ecommerce SEO. No long contracts. Book a free call.',
  keywords: [
    'seo company in chennai',
    'seo company chennai',
    'seo services in chennai',
    'best seo company in chennai',
    'seo agency chennai',
    'seo expert chennai',
    'digital marketing company in chennai',
    'local seo chennai',
    'ecommerce seo chennai',
    'manufacturing seo chennai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Chennai | Best SEO Services | FactoryJet',
    description:
      'Expert SEO services in Chennai — local SEO, technical SEO, manufacturing & auto B2B SEO, and ecommerce SEO. 500+ businesses, 4.9-star rating. No long contracts.',
    url: 'https://factoryjet.com/seo/chennai',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Chennai' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Chennai | FactoryJet',
    description: 'Expert SEO in Chennai for manufacturing, auto, IT, real estate, and local businesses. No lock-in. Book a free SEO check.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/chennai', languages: seoCityAlternatesIN['chennai'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/chennai#localbusiness',
  name: 'FactoryJet — SEO Company in Chennai',
  description:
    'FactoryJet provides SEO services in Chennai for manufacturing companies, automotive suppliers, IT services, healthcare providers, and local businesses across Anna Nagar, T. Nagar, Velachery, OMR, Ambattur, and Guindy.',
  url: 'https://factoryjet.com/seo/chennai',
  telephone: '+919699977699',
  email: 'bhavesh@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Madras' },
    { '@type': 'City', name: 'OMR' },
    { '@type': 'City', name: 'Guindy' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
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
  '@id': 'https://factoryjet.com/seo/chennai#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Chennai by FactoryJet',
  description:
    'SEO services in Chennai for manufacturing, automotive, IT services, healthcare, and local businesses. Serving Anna Nagar, T. Nagar, Velachery, OMR, Guindy, Ambattur, and Perungudi.',
  url: 'https://factoryjet.com/seo/chennai',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'City', name: 'Chennai' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/chennai#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/chennai',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const CHN_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Chennai SEO audit — find the exact gap between you and page one',
    description:
      'We audit your site across Chennai search terms in your specific sector — manufacturing, auto, IT, healthcare, or local services. Who ranks above you, why, what the technical and content gap is. Plain-English report with a clear priority list. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical base — Chennai buyers use mobile for everything',
    description:
      'Mobile search dominates in Chennai — from local consumer searches to auto procurement teams checking suppliers. Slow pages, broken schema, crawl errors, and poor Core Web Vitals all cap your ranking potential before content even has a chance. We fix the foundation first. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content that reaches Chennai buyers where they actually research',
    description:
      'A Guindy auto parts supplier, a T. Nagar retail chain, and an OMR IT services company have completely different buyers with completely different search patterns. We research and write for your specific Chennai buyer — not a generic service page template. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn links from trusted Indian and Tamil Nadu sources',
    description:
      'Links from credible Indian manufacturing publications, auto industry directories, Tamil Nadu business associations, and local business listings build the authority Google looks for in Chennai searches. Real editorial links only. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly report and call — your Chennai rankings, five minutes to read',
    description:
      'Once a month we call. You see your keyword rankings for Chennai search terms, organic traffic, enquiries from Google, and the three things we are doing next. A one-page plain-English report — not a jargon-heavy dashboard. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const CHN_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'chennai-market',  label: 'Chennai Market' },
];

const CHN_FAQ_ITEMS = [
  {
    category: 'getting-started',
    question: 'Is SEO worth it for a Chennai business?',
    answer:
      '"Seo company chennai" is searched 3,600 times a month — and "digital marketing company in chennai" another 2,400. That is buyers actively looking for exactly what agencies sell. Multiply that across your own customers\' searches and the scale becomes clear. Chennai\'s manufacturing, auto, and IT sectors are all high-volume B2B research markets where Google is the starting point for procurement decisions.',
  },
  {
    category: 'getting-started',
    question: 'How do I find the best SEO company in Chennai?',
    answer:
      'Three questions before you pay anyone: Can you show me ranking data for a Chennai manufacturing or B2B client? Who specifically does the technical SEO on my site? What will happen in the first 60 days? The best SEO company in Chennai answers all three without hesitation. Avoid fixed-package agencies with guaranteed page-one promises — no honest company offers those.',
  },
  {
    category: 'getting-started',
    question: 'What makes SEO for Chennai different from other Indian cities?',
    answer:
      "Chennai's dominant industries — manufacturing, automotive, IT services, and healthcare — are all B2B-heavy with long procurement research cycles. A Guindy auto parts manufacturer, a Sriperumbudur factory supplier, and a T. Nagar retail chain have completely different buyers, different keywords, and different content requirements. Chennai also has a significant Tamil-language search layer that affects local and consumer searches. Generic SEO misses all of this.",
  },
  {
    category: 'getting-started',
    question: 'Do I need a Chennai-based SEO agency?',
    answer:
      "You need someone who understands Chennai's buyer mix — manufacturing procurement teams, auto OEM suppliers, IT services buyers, and local Tamil Nadu consumers. We are not based in Chennai, but we understand the city's industrial economy, the OMR IT corridor, and what B2B content needs to do in Tamil Nadu's market. Our advantage: 25 years of experience, senior team, and month-to-month billing.",
  },
  {
    category: 'services',
    question: 'What SEO services do you offer for Chennai businesses?',
    answer:
      'Technical SEO (site speed, Core Web Vitals, schema, crawlability), local SEO (Google Business Profile and map rankings for Anna Nagar, T. Nagar, Velachery, and OMR), manufacturing and B2B content SEO (procurement team buyer journeys, supplier pages, certifications content), ecommerce SEO (product and category pages), and link building (Indian manufacturing publications, auto directories, local business listings). We combine these based on your specific Chennai market.',
  },
  {
    category: 'services',
    question: 'Can you do SEO for a Chennai manufacturing or auto supplier company?',
    answer:
      "Yes. Chennai is India's auto and manufacturing capital — with Hyundai, Ford, Saint-Gobain, and BMW manufacturing in the Sriperumbudur and Oragadam corridors. Manufacturing and auto supplier SEO means B2B content targeting procurement teams, supplier qualification pages, certification and capability content, and links from credible Indian manufacturing and auto publications. This is a specialist area we have worked in.",
  },
  {
    category: 'services',
    question: 'Can you do local SEO in Chennai for my clinic, restaurant, or retail store?',
    answer:
      'Yes. For businesses serving Chennai customers directly — clinics in Anna Nagar, restaurants in T. Nagar, retail in Velachery, or services in Adyar — we manage your Google Business Profile, build area-specific pages, earn real reviews, and get you into the top three on Google Maps. Local search in Chennai is growing fast and is still relatively low competition in most service categories.',
  },
  {
    category: 'services',
    question: 'Do you do IT services SEO for Chennai OMR companies?',
    answer:
      "Yes. The OMR (Old Mahabalipuram Road) corridor is Chennai's equivalent of Bangalore's Electronic City — major IT companies, software services, and tech startups. B2B SEO for OMR companies needs content that reaches procurement teams during long research cycles, technical credibility signals, and links from Indian tech publications. We understand the OMR IT buyer journey.",
  },
  {
    category: 'results',
    question: 'How long does SEO take to work in Chennai?',
    answer:
      "Chennai's primary SEO terms have keyword difficulty in the KD 20–53 range — more competitive than Hyderabad but still manageable. For technical fixes on existing content, ranking movement is visible in 4–8 weeks. For new content pages targeting Chennai B2B keywords, expect 3–5 months to reach page one. For the most competitive terms (best seo company in chennai, KD 52), 6–9 months.",
  },
  {
    category: 'results',
    question: 'What SEO results do Chennai businesses typically see?',
    answer:
      'First-page rankings for core Chennai service terms within 3–6 months for most businesses, steady organic traffic growth month-on-month, and more enquiries from Google. For Chennai B2B companies — manufacturing, auto, IT — the biggest gain is often content that reaches procurement teams during the research phase, weeks before they contact anyone.',
  },
  {
    category: 'results',
    question: 'Can you guarantee rankings in Chennai?',
    answer:
      "No honest SEO company in Chennai can guarantee specific rankings — Google decides those. What we guarantee is the quality of the work: fix your technical issues, write content that outperforms your competitors, earn real links. In a market like Chennai where B2B buyers research extensively, showing up consistently during that research phase is what generates leads, not being ranked for one term on one day.",
  },
  {
    category: 'results',
    question: 'How do you measure SEO success for a Chennai B2B company?',
    answer:
      'Rankings for your Chennai target keywords, organic traffic month-on-month, enquiries and RFQ form submissions from Google, and for local businesses — Google Business Profile calls and directions. We also track the quality of organic leads over time, not just quantity. One qualified manufacturing enquiry from Google is worth more than 100 irrelevant clicks.',
  },
  {
    category: 'cost',
    question: 'How much do SEO services cost in Chennai?',
    answer:
      "We do not sell fixed packages because a Guindy auto parts manufacturer needs different work from a T. Nagar retail chain. Our SEO plans for Indian businesses start at ₹19,999 a month, scoped to what your site actually needs. We give you a free audit first — see exactly what we'd do and why before you commit.",
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long-term contract with a Chennai SEO agency?',
    answer:
      'Not with us. Month to month, 30 days notice to pause or stop. Everything we build — your content pages, your structured data, your Google Business Profile, your links — belongs to you and stays with you if you ever leave. We keep clients because rankings improve, not because they are locked in.',
  },
  {
    category: 'cost',
    question: 'Is cheap SEO in Chennai worth it?',
    answer:
      'Very cheap SEO — typically under ₹5,000/month — relies on link farms and template content that either does nothing or creates a penalty risk. Chennai\'s B2B markets (manufacturing, auto, IT) are demanding — procurement buyers are sceptical, and a penalised site is more damaging than no SEO at all. We charge a fair price for real work. You see every rupee in the monthly report.',
  },
  {
    category: 'cost',
    question: 'What does a monthly Chennai SEO plan from FactoryJet include?',
    answer:
      'Every month: keyword tracking for your Chennai target terms, technical checks and fixes, new or updated content, local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page report with a monthly call. The same senior team — no account shuffles.',
  },
  {
    category: 'chennai-market',
    question: 'Which Chennai areas do you cover for SEO?',
    answer:
      'All of Chennai: Anna Nagar, T. Nagar, Velachery, Adyar, OMR (Old Mahabalipuram Road), Perungudi, Sholinganallur, Ambattur, Guindy, Nungambakkam, Egmore, and extending to the Sriperumbudur and Oragadam industrial corridors. For local service businesses we focus on your specific neighbourhood. For B2B manufacturing and IT companies we target national and global searches from a Chennai base.',
  },
  {
    category: 'chennai-market',
    question: 'Which industries benefit most from SEO in Chennai?',
    answer:
      "Any Chennai business where buyers search on Google before they contact you. Highest-impact: manufacturing and auto suppliers (Guindy, Ambattur, Oragadam), IT services and software (OMR corridor), healthcare (Apollo Hospitals, specialty clinics), education (IIT Madras neighbourhood, coaching institutes), retail and e-commerce, and professional services. Chennai's strength is B2B — the manufacturing and auto sectors have procurement teams that research online before issuing RFQs.",
  },
  {
    category: 'chennai-market',
    question: 'Who is the best SEO company in Chennai for a manufacturing business?',
    answer:
      "The best SEO agency in Chennai for a manufacturing company understands B2B procurement research cycles, what a supplier qualification page needs, what certification content builds trust, and where credible manufacturing links come from in India. FactoryJet has worked with manufacturing and B2B industrial businesses. We understand what differentiates an OEM-approved supplier's website from a generic brochure site in Google's eyes.",
  },
  {
    category: 'chennai-market',
    question: 'What is the SEO opportunity in Chennai compared to other Indian cities?',
    answer:
      "Chennai sits between Hyderabad (very low competition) and Mumbai (very high competition). Primary Chennai SEO terms are in the KD 20–53 range — competitive but very winnable with good technical foundations and real content. The biggest opportunity is in manufacturing and auto B2B where most supplier websites are still on templates from 2015 with no structured data, slow mobile experience, and zero content for procurement searches. That gap is huge and still largely unaddressed.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHN_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison ──────────────────────────────────────────────────────────── */

const CHN_COLUMNS = [{ label: 'FactoryJet', isFactoryJet: true }, { label: 'Chennai Agency' }, { label: 'Freelancer' }, { label: 'DIY' }] as const;

const CHN_ROWS = [
  { feature: 'Lock-in contract', values: ['None, month to month', '6–12 months typical', 'Varies', 'None'] },
  { feature: 'Manufacturing & auto B2B SEO', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Technical SEO (schema, CWV, speed)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Local SEO for Chennai areas', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real link building (no farms)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Monthly report + senior team call', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'One-page plain-English report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything we build', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

/* ─── Hero keyword card ───────────────────────────────────────────────────── */

function ChennaiKeywordCard() {
  const kws = [
    { term: 'seo company chennai',           vol: '3,600', kd: 36 },
    { term: 'digital marketing co. chennai', vol: '2,400', kd: 22 },
    { term: 'best seo company in chennai',   vol: '880',   kd: 52 },
    { term: 'seo expert chennai',            vol: '390',   kd: 20 },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p className="font-fj-mono font-bold uppercase text-fj-neutral-400" style={{ fontSize: '10px', letterSpacing: '0.14em' }}>Chennai · Monthly Search Demand</p>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold" style={{ background: '#F05A28', color: '#fff' }}>7,270+ / mo</span>
      </div>
      <div className="divide-y divide-fj-neutral-100">
        {kws.map((kw) => {
          const pct = Math.min(Math.round((kw.kd / 60) * 100), 100);
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
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: kw.kd < 25 ? '#F05A28' : '#F3A07A' }} />
              </div>
              <p className="mt-1 font-fj-mono text-[10px] text-fj-neutral-400">KD {kw.kd}/100 · {kw.kd < 30 ? 'Winnable' : 'Competitive'}</p>
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

export default function SeoChennai() {
  return (
    <>
      <Script id="chn-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="chn-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="chn-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }, { name: 'SEO', url: 'https://factoryjet.com/seo' }, { name: 'Chennai', url: 'https://factoryjet.com/seo/chennai' }]} />

      <main className="bg-fj-cream">

        <Hero
          eyebrow="SEO COMPANY IN CHENNAI, INDIA"
          headline="The SEO Company in Chennai That Understands Manufacturing, Auto, and IT B2B Buyers"
          lead="Chennai is India's manufacturing and auto capital — with procurement teams that research suppliers on Google for weeks before issuing an RFQ. FactoryJet delivers SEO services in Chennai matched to the B2B buyer journeys that define this city's economy. No long contracts."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Manufacturing + IT + Local SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<ChennaiKeywordCard />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="WHY CHENNAI BUSINESSES TRUST US" headline="India's Trusted SEO Company — 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building" />

        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN CHENNAI"
          headline="Six SEO Services We Deliver for Chennai Businesses"
          lead="Chennai's economy runs on manufacturing, auto, and IT — all B2B-heavy with long procurement research cycles. We build SEO matched to how Chennai buyers actually search before they make a decision."
          sectors={[
            { name: 'Manufacturing & Auto B2B SEO', description: 'For auto parts suppliers, OEM component manufacturers, and industrial companies in Guindy, Ambattur, Oragadam, and Sriperumbudur. Supplier qualification pages, certification content, and B2B search terms that procurement teams actually use.', example: 'Win RFQs from Google.' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema, and mobile optimisation. Many Chennai manufacturing websites are technically weak — template sites from 2015 with no structured data, no schema, and poor mobile experience. Fixing this alone delivers fast ranking gains.', example: 'Fast, crawlable, trusted by Google.' },
            { name: 'Local SEO for Chennai', description: 'Google Business Profile management, map rankings, "near me" searches, and area-specific pages for Anna Nagar, T. Nagar, Velachery, Adyar, and OMR. Mobile-first local search is growing fast across all of Chennai.', example: 'Top 3 on Google maps.' },
            { name: 'IT & Software SEO', description: 'For IT services, software, and technology companies in the OMR corridor and Perungudi. B2B content that reaches procurement decision-makers during the research cycle — comparison guides, solution pages, and technical blog content.', example: 'Inbound from enterprise IT buyers.' },
            { name: 'Ecommerce SEO', description: 'For online retailers and D2C brands based in Chennai. Product pages, category structure, Shopify and WooCommerce optimisation, and the search terms Chennai and Tamil Nadu shoppers use before they buy.', example: 'Shopify, WooCommerce, custom stores.' },
            { name: 'SEO Audit', description: 'Not ranking despite decent content? Something specific is blocking you — technical issues, content gaps, missing structured data, or competitor link advantages. Our Chennai SEO audit finds exactly what, with a clear action list.', example: 'Find the blocker. Fix it.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="FACTORYJET VS A CHENNAI SEO AGENCY"
          headline="Chennai Has Many SEO Agencies. Very Few That Understand Manufacturing Procurement Search."
          lead="Most Chennai SEO companies use the same keyword plan for a Guindy auto parts manufacturer, an OMR software company, and a T. Nagar saree shop. The strategies, the content, and the buyer journeys are completely different."
          body={
            <>
              <p>
                Chennai's manufacturing and auto sectors are dominated by B2B procurement decisions — and those procurement teams research online before they call anyone. An auto parts supplier needs content about capabilities, tolerances, certifications, and delivery standards — not a generic "we are the best supplier in Chennai" homepage.
              </p>
              <p>
                We build{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">technical SEO</a>{' '}
                that makes your Chennai site fast and crawlable, and{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">B2B content</a>{' '}
                that reaches procurement teams at every stage of their supplier research. For local Chennai businesses, we do the local map rankings and neighbourhood pages that drive real foot traffic. And unlike most{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO companies in India</a>,{' '}
                we do not lock you in — month to month, everything you build stays yours.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Chennai SEO by sector</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { sector: 'Manufacturing / Auto',  need: 'Supplier pages, certifications, OEM content', zone: 'GUINDY · AMBATTUR · ORAGADAM' },
                  { sector: 'IT / Software',          need: 'Long research-cycle B2B content', zone: 'OMR · PERUNGUDI · SHOLINGANALLUR' },
                  { sector: 'Local services',         need: 'Google map, GBP, "near me", area pages', zone: 'ANNA NAGAR · T. NAGAR · VELACHERY' },
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
          eyebrow="THE CHENNAI SEO OPPORTUNITY"
          headline="7,000+ Monthly Searches for SEO in Chennai — and Most Manufacturing Websites Are Still on 2015 Templates."
          lead="'Seo company chennai' has 3,600 monthly searches. 'Digital marketing company in chennai' another 2,400. But the bigger opportunity is not agencies searching for SEO help — it is the procurement teams, overseas buyers, and B2B customers searching for what Chennai manufacturers and IT companies sell. Most of those websites have not been touched in years."
          pillars={[
            { icon: '01', title: 'Chennai B2B buyers research before every procurement decision.', body: "Auto procurement teams, IT RFP committees, and manufacturing quality teams all spend weeks on Google before they contact a supplier. Most Chennai manufacturers have a brochure website with no content for those searches — a homepage, a contact form, and a 'why us' page from 2016. That is a massive content gap with very little competition." },
            { icon: '02', title: 'Technical quality is the lowest bar in Chennai manufacturing SEO.', body: "The average Chennai manufacturing website scores under 40 on mobile PageSpeed. Core Web Vitals are failing. Schema markup is missing. Fixing these issues moves sites from nowhere to page two or three in 4–6 weeks — before we even write a single new page of content." },
            { icon: '03', title: 'The SEO gap between Chennai and Bangalore is still closing.', body: "Bangalore's tech companies have been investing in SEO for a decade. Chennai's manufacturing and auto companies are 5–7 years behind. That gap is an opportunity for the companies that move now — first-page rankings in a market that your competitors are not yet competing in." },
          ]}
        />

        <ServiceJourneyRow eyebrow="HOW IT WORKS" headline="How We Run SEO for Chennai Businesses, Step by Step" lead="Audit first. Fix the technical base. Build content for your specific buyer. Earn real links. Report every month." stages={CHN_JOURNEY} closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS" />

        <IndustriesGrid
          variant="cards"
          eyebrow="CHENNAI AREAS WE COVER"
          headline="SEO Services Across Every Major Chennai Business Zone"
          lead="From the IT parks of OMR to the manufacturing corridors of Ambattur and Guindy to the retail and residential markets of Anna Nagar and T. Nagar — each Chennai zone is a different SEO problem."
          sectors={[
            { name: 'Anna Nagar & T. Nagar', description: 'Premium retail, residential services, healthcare, and education. High local search volume. Google Business Profile management, "near me" pages, and local map rankings are the main SEO levers.' },
            { name: 'Velachery & Adyar', description: 'Growing residential market with strong local services demand — fitness, healthcare, food, education, and retail. Mobile-first local SEO and neighbourhood-specific pages drive most discovery here.' },
            { name: 'OMR (Old Mahabalipuram Road)', description: "Chennai's IT corridor — major software companies, IT services, and tech startups from Perungudi to Sholinganallur. B2B content SEO reaching procurement teams during long research cycles." },
            { name: 'Guindy & Ambattur', description: 'Traditional manufacturing and industrial estates. Auto components, engineering goods, garments, and industrial suppliers. B2B supplier pages, certification content, and OEM-standard technical SEO.' },
            { name: 'Oragadam & Sriperumbudur', description: "Chennai's new auto manufacturing corridor — Hyundai, BMW, Ford, Renault-Nissan. Supply chain and component supplier SEO — ranking for procurement searches from India's biggest auto OEMs." },
            { name: 'Nungambakkam & Egmore', description: 'Business district, hospitality, healthcare, and professional services. Premium brand searches, hotel and hospitality SEO, and high-intent B2B service buyer coverage.' },
          ]}
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="CHENNAI INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Chennai"
          lead="Every Chennai industry has its own buyer, its own search pattern, and its own content requirement."
          sectors={[
            { name: 'Manufacturing & Engineering', description: 'Auto components, engineering goods, industrial machinery, and garment manufacturing. B2B supplier pages, capability content, OEM certification documentation, and manufacturing directory links.' },
            { name: 'Automotive Supply Chain', description: 'Components, tooling, and sub-assembly suppliers to Hyundai, BMW, Ford, and Renault-Nissan at Oragadam and Sriperumbudur. Supplier qualification content, IATF and ISO certification pages, and OEM search term coverage.' },
            { name: 'IT & Software', description: 'OMR corridor IT companies, software services, and digital businesses. B2B content marketing, full-funnel research-cycle content, and technical SEO for modern web stacks.' },
            { name: 'Healthcare', description: 'Apollo, Fortis, and independent specialty clinics across Chennai. Local map rankings, E-E-A-T-compliant health content, and Google Business Profile management.' },
            { name: 'Education', description: 'IIT Madras neighbourhood coaching institutes, school chains, professional training, and ed-tech. National student catchment SEO, results-focused content, and direct brand search coverage.' },
            { name: 'Retail & Ecommerce', description: 'T. Nagar retail chains, online stores, and D2C brands shipping across Tamil Nadu and India. Product SEO, Shopify and WooCommerce optimisation, and category search coverage.' },
          ]}
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RESULTS</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Real SEO results for Chennai businesses — case studies on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are building Chennai-specific case studies. Our broader track record — 500+ businesses, 4.9-star average — uses the same fundamentals we bring to every Chennai engagement. Manufacturing, IT, or local services: the process is the same, the results are documented.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our full portfolio →</a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>Read case studies →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Chennai Agency vs. a Freelancer vs. Doing It Yourself"
          lead="Four ways to do SEO in Chennai. Here is the honest comparison."
          pullQuote={{ stat: '3,600', caption: '"seo company chennai" gets 3,600 searches a month. That is just buyers looking for SEO help. The businesses found on page one for that term get most of the enquiries.' }}
          columns={CHN_COLUMNS}
          rows={CHN_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Chennai Businesses"
          sectors={[
            { name: 'Local SEO', description: 'Google map rankings, GBP management, "near me" searches, and area pages across all Chennai zones.', linkLabel: 'Explore local SEO', linkHref: '/seo/local-seo' },
            { name: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawl errors, schema — especially important for Chennai manufacturing sites still on legacy templates.', linkLabel: 'Explore technical SEO', linkHref: '/seo/technical-seo' },
            { name: 'Ecommerce SEO', description: 'Product pages, category structure, Shopify and WooCommerce, and the keywords Chennai and Tamil Nadu shoppers use before they buy.', linkLabel: 'Explore ecommerce SEO', linkHref: '/seo/ecommerce-seo' },
            { name: 'Link Building', description: 'Editorial links from Indian manufacturing publications, auto industry directories, and Tamil Nadu business associations.', linkLabel: 'Explore link building', linkHref: '/seo/link-building' },
            { name: 'SEO Audit', description: 'Find exactly what is blocking your Chennai site — technical issues, content gaps, or competitor advantages — with a plain-English action list.', linkLabel: 'Explore SEO audit', linkHref: '/seo/seo-audit' },
            { name: 'SEO Hub India', description: 'Our full guide to SEO services in India — what to look for, how to compare agencies, and how to tell whether your SEO is working.', linkLabel: 'Back to India SEO hub', linkHref: '/seo' },
          ]}
          lead="Looking for a specific type of SEO? We cover the full stack."
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="CHENNAI SEO QUESTIONS" headline="Every Question Chennai Business Owners Ask About SEO, Answered Simply" lead="25 years answering these questions. Here are the ones Chennai businesses ask most." categories={CHN_FAQ_CATEGORIES} items={CHN_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN CHENNAI"
          headline="Ready to Reach Page One for Your Chennai Customers?"
          sub="Start with a free SEO check. We will show you where you rank today, who is beating you and why, and the first three things we would fix — whether you are a Guindy manufacturer, an OMR IT company, or a T. Nagar retailer. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

      </main>
      <SiteFooter locale="in" />
    </>
  );
}
