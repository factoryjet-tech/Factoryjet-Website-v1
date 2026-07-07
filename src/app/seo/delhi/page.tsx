import type { Metadata } from 'next';
import Script from 'next/script';
import { seoCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
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
  title: 'SEO Company in Delhi | Best SEO Services Delhi NCR | FactoryJet',
  description:
    'Looking for the best SEO company in Delhi? FactoryJet delivers SEO services in Delhi NCR — local SEO, technical SEO, ecommerce SEO, export SEO, and link building. No long contracts. Book a free call.',
  keywords: [
    'seo company in delhi',
    'seo company in delhi ncr',
    'seo services in delhi',
    'best seo company in delhi',
    'top seo company in delhi',
    'seo agency delhi',
    'seo expert delhi',
    'digital marketing company in delhi',
    'local seo delhi',
    'ecommerce seo delhi',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Delhi | Best SEO Services Delhi NCR | FactoryJet',
    description:
      'Expert SEO services in Delhi NCR — local SEO, technical SEO, ecommerce SEO, and link building. 500+ businesses, 4.9-star rating. No long contracts. Start with a free check.',
    url: 'https://factoryjet.com/seo/delhi',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Delhi NCR' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Delhi NCR | FactoryJet',
    description: 'Expert SEO services in Delhi for exporters, traders, wholesalers, and local businesses. No lock-in. Book a free SEO check today.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/delhi', languages: seoCityAlternatesIN['delhi'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/delhi#localbusiness',
  name: 'FactoryJet — SEO Company in Delhi',
  description:
    'FactoryJet provides SEO services in Delhi NCR for exporters, traders, wholesalers, clinics, coaching institutes, and local businesses across Connaught Place, Nehru Place, Rohini, Dwarka, South Delhi, Noida, and Gurugram.',
  url: 'https://factoryjet.com/seo/delhi',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  
  sameAs: ['https://factoryjet.com'],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/delhi#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Delhi by FactoryJet',
  description:
    'SEO services in Delhi covering local SEO, technical SEO, ecommerce SEO, export SEO, link building, and SEO audits. Serving Connaught Place, Nehru Place, Rohini, Dwarka, South Delhi, Noida, and Gurugram.',
  url: 'https://factoryjet.com/seo/delhi',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
  },
  areaServed: { '@type': 'City', name: 'Delhi' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/delhi#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/delhi',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const DELHI_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Delhi SEO audit — see where you actually stand',
    description:
      'We check your current rankings across Delhi and NCR searches, who is beating you and why, which pages are hurting your site, and how your site loads on mobile. You get a plain-English report — not a 40-page PDF full of numbers nobody reads. We also check where you stand in Google AI answers, which most Delhi agencies still ignore. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical problems that stop Google trusting you',
    description:
      'Slow pages on mobile, broken links, missing titles, duplicate content, crawl errors, bad Core Web Vitals — we fix everything that blocks Google from reading your Delhi site correctly. In a market as competitive as Delhi NCR, a clean technical foundation is not optional. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content matched to how Delhi buyers actually search',
    description:
      'Whether you are an exporter selling to US and EU buyers, a Nehru Place trader with resellers across India, or a clinic serving South Delhi and nearby areas — the searches are different, and the content must match. We write pages that answer your buyer\'s real question better than whoever is ranking now. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn real links from trusted Indian websites',
    description:
      'Links from credible Indian publications, trade directories, and industry partners tell Google your Delhi website deserves the first page. No link farms. No private blog networks. No bought links that get you penalised. Every link we earn stays yours forever. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly report and call — plain English, five minutes to read',
    description:
      'Once a month we call. You see exactly where you rank for your Delhi and NCR target keywords, how many people came from Google, the three things we are doing next. If something is not working, we tell you why and what we are changing. No jargon. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const DELHI_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'delhi-market',    label: 'Delhi Market' },
];

const DELHI_FAQ_ITEMS = [
  /* ── Getting Started ─────────────────────────────────────────── */
  {
    category: 'getting-started',
    question: 'Is an SEO company in Delhi worth it for my business?',
    answer:
      'Yes — if your customers search on Google before they buy, call, or visit. "Seo company in delhi" alone is searched 4,400 times a month, and "seo services in delhi" another 5,400 times. That is buyers with money looking for exactly what agencies sell. But the logic applies to every Delhi business: if someone in Rohini, Gurugram, or anywhere in India types what you sell into Google, and you do not show up, the person who does gets the order.',
  },
  {
    category: 'getting-started',
    question: 'How do I find the best SEO company in Delhi?',
    answer:
      'Ask three things before you pay anyone: Can you show me actual ranking data for a Delhi client — not just a PDF screenshot? Who on your team does the technical work? What happens in the first 30 days? The best SEO agency in Delhi answers all three without hesitation. Walk away from anyone who guarantees page-one rankings in 30 days, leads with cheap packages, or cannot explain what they will actually do.',
  },
  {
    category: 'getting-started',
    question: 'What makes SEO in Delhi different from other Indian cities?',
    answer:
      'Delhi is one of India\'s most competitive SEO markets — and it is also one of the most diverse. An exporter in Okhla, a trader at Nehru Place, a coaching institute in Mukherjee Nagar, and a clinic in South Delhi are chasing completely different buyers across different search intents. A copy-paste plan that works in Jaipur or Lucknow fails in Delhi because the competition is tougher and the buyer mix is wider. You need SEO matched to the specific market you sell into.',
  },
  {
    category: 'getting-started',
    question: 'Do I need a Delhi-based SEO agency or can I work with someone remote?',
    answer:
      'You need someone who understands how Delhi buyers search and what the NCR competitive landscape looks like — not someone physically in Connaught Place. We are not based in Delhi, but we understand Delhi\'s three distinct buyer markets (export, wholesale/pan-India, and local), and we have done SEO across these verticals. Our advantage: 12 years of experience, a small senior team, and no junior on your account.',
  },
  /* ── Our SEO Services ─────────────────────────────────────────── */
  {
    category: 'services',
    question: 'What SEO services do you offer for Delhi and Delhi NCR businesses?',
    answer:
      'The full set: technical SEO (site speed, crawlability, schema, Core Web Vitals), local SEO (Google Business Profile, map rankings, neighbourhood-specific pages for Rohini, Dwarka, South Delhi, Noida, Gurugram), ecommerce SEO (product and category pages, Shopify and WooCommerce), export SEO (English-language content for overseas buyers), content SEO (pages targeting what Delhi customers search), and link building (trusted Indian publications and directories). We combine these based on what your site actually needs.',
  },
  {
    category: 'services',
    question: 'Can you do SEO for a Delhi exporter selling to the US and Europe?',
    answer:
      'Yes — and it is a different job from local SEO. Delhi-based handicraft, jewellery, and clothing exporters need simple English content that overseas buyers and their agents trust, pages about your range, certifications, and minimum orders, and a presence in Google AI answers where procurement teams search. We have done SEO for export-focused businesses. The goal is enquiries from abroad, not just "near me" rankings in Delhi.',
  },
  {
    category: 'services',
    question: 'Can you handle pan-India trade and wholesale SEO from Delhi?',
    answer:
      'Yes. Nehru Place IT traders, Sadar Bazaar and Chandni Chowk wholesalers, and Kashmere Gate auto-parts dealers need to be found by resellers and buyers across the whole of India — not just in Delhi. We target all-India supplier, dealer, and wholesale searches, build category and product pages that make resellers trust you, and add the B2B signals that win orders from IndiaMART and Google alike.',
  },
  {
    category: 'services',
    question: 'Do you offer local SEO in Delhi for clinics, coaching institutes, and shops?',
    answer:
      'Yes. For businesses serving Delhi customers directly — clinics, coaching institutes, gyms, restaurants, retail shops — we manage your Google Business Profile, build area-specific pages for the Delhi neighbourhoods you serve, and get you into the top three on Google Maps. For coaching institutes in Mukherjee Nagar and Rajinder Nagar that pull students from all over India, we also handle the all-India search layer on top.',
  },
  /* ── Results & Timelines ──────────────────────────────────────── */
  {
    category: 'results',
    question: 'How long does SEO take to show results in Delhi?',
    answer:
      'Delhi NCR is a competitive market, so we keep timelines honest. For technical fixes on a site with existing content, you can see ranking movement in 4–8 weeks. For new content pages targeting Delhi and NCR keywords, expect 3–5 months before they hit page one. For highly competitive terms in the central Delhi market, sometimes 6–9 months. The businesses that start SEO now will be those three websites on page one 9 months from today.',
  },
  {
    category: 'results',
    question: 'What kind of SEO results do Delhi businesses typically see?',
    answer:
      'Our clients typically see first-page rankings for their core service terms within 3–6 months, steady month-on-month organic traffic growth, and more enquiries from Google — not just clicks. With Delhi\'s search volumes — "seo services in delhi" alone at 5,400/month — moving from position 8 to position 3 on even one target term makes a real difference to your monthly enquiry count.',
  },
  {
    category: 'results',
    question: 'Can you guarantee page-one rankings in Delhi?',
    answer:
      'No honest SEO company in Delhi or anywhere can guarantee a specific ranking. Google decides that. What we can guarantee is the work that moves hundreds of sites up: fix technical issues, write content that beats your rivals, earn real links. If the work is done right and your site is not penalised, rankings follow. We show you exactly what we are doing each month — the effort is fully visible.',
  },
  {
    category: 'results',
    question: 'How do you measure SEO success for a Delhi business?',
    answer:
      'We measure what matters to your business: rankings for your Delhi and NCR target keywords, how many people came from Google each month, how many turned into enquiries or calls, and how that compares to the previous month. We connect Google Search Console and Google Analytics to your account and give you a one-page monthly report — no inflated vanity metrics.',
  },
  /* ── Cost & Contracts ─────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'How much do SEO services cost in Delhi?',
    answer:
      'We do not sell fixed packages because a Nehru Place trader needs very different work from a South Delhi clinic. We scope a monthly plan to what your site needs and only charge for work that actually moves your rankings. You get a free audit first, and we tell you exactly what your site needs before you commit to anything.',
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long contract with a Delhi SEO agency?',
    answer:
      'Not with us. We work month to month. Pause or stop with 30 days notice. We keep clients because the rankings go up — not because they are locked in. Everything we build — your content pages, your Google Business Profile, your structured data, your earned links — belongs to you and stays with you if you ever leave.',
  },
  {
    category: 'cost',
    question: 'Is it worth paying for affordable SEO services in Delhi or should I spend more?',
    answer:
      'The honest answer: there is a floor below which SEO does not work. Very cheap packages are almost always a waste of money in a market as competitive as Delhi. What matters is the quality of the work, not whether it is expensive or affordable. We charge a fair price and do real work — no link farms, no filler content, no duplicate plans across clients.',
  },
  {
    category: 'cost',
    question: 'What is included in a monthly Delhi SEO plan from FactoryJet?',
    answer:
      'Every month: keyword tracking for your Delhi and NCR target terms, technical checks and fixes, one or two new or updated content pieces, local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page report with a call. The same small senior team does this work every month — nothing is outsourced.',
  },
  /* ── Delhi Market ────────────────────────────────────────────── */
  {
    category: 'delhi-market',
    question: 'Which Delhi NCR areas do you cover for SEO?',
    answer:
      'All of Delhi NCR: Connaught Place, Nehru Place, South Delhi, Rohini, Dwarka, Laxmi Nagar, East Delhi, Okhla, Janakpuri, Karol Bagh, Mukherjee Nagar, Saket, and extending into Noida, Gurugram, Faridabad, and Ghaziabad. For single-location businesses we focus on your area and city-wide terms. For multi-location businesses and pan-India traders, we cover the broader catchment.',
  },
  {
    category: 'delhi-market',
    question: 'Which industries benefit most from SEO in Delhi?',
    answer:
      'Any Delhi business where customers search on Google before they buy. Highest-impact industries: export houses (handicrafts, jewellery, clothing, leather), wholesale and trade (electronics, auto parts, fabric, FMCG), coaching and education (UPSC, bank, SSC), healthcare and clinics, IT and technology companies in Noida and Gurugram, real estate, and professional services (CA, legal, consulting). If someone types what you do into Google, SEO is your highest-ROI long-term channel.',
  },
  {
    category: 'delhi-market',
    question: 'Who is the best SEO agency in Delhi NCR?',
    answer:
      'The best SEO company in Delhi for your business is the one that matches the plan to your actual market — export, wholesale, or local — and has senior people doing the work, not just selling it. FactoryJet is founder-led, works month to month, and handles the SEO services in Delhi that most agencies treat as extras: Google AI answer optimisation, export-buyer content in clear English, and all-India search for traders and wholesalers.',
  },
  {
    category: 'delhi-market',
    question: "I've been burned by a Delhi SEO company before. Why should I trust FactoryJet?",
    answer:
      'Fair question. Most bad experiences in Delhi come from three things: link farms, reports full of metrics that never meant leads, or a team that disappeared after month two. We are small and founder-led — Bhavesh, the founder, is still involved in every client account. You get a real monthly call, a one-page report you can read in five minutes, and month-to-month billing with no lock-in. If it is not working, you leave with everything we built.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DELHI_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison table ────────────────────────────────────────────────────── */

const DELHI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Delhi Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const DELHI_COMPARISON_ROWS = [
  {
    feature: 'Lock-in contract',
    values: ['None, month to month', '6–12 months typical', 'Varies', 'None'],
  },
  {
    feature: 'Export SEO (simple English for overseas buyers)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Pan-India wholesale and trade SEO',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Full technical SEO (speed, schema, crawl)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Local SEO (map rankings across Delhi NCR)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Monthly report + senior team call',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Real link building (no farms or bought links)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'You keep everything we build',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
];

/* ─── Hero right slot — Delhi keyword demand card ─────────────────────────── */

function DelhiKeywordCard() {
  const kws = [
    { term: 'seo services in delhi',       vol: '5,400', kd: 32 },
    { term: 'seo company in delhi ncr',    vol: '4,400', kd: 23 },
    { term: 'seo agency delhi',            vol: '4,400', kd: 33 },
    { term: 'seo expert delhi',            vol: '2,400', kd: 18 },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p
          className="font-fj-mono font-bold uppercase text-fj-neutral-400"
          style={{ fontSize: '10px', letterSpacing: '0.14em' }}
        >
          Delhi NCR · Monthly Search Demand
        </p>
        <span
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold"
          style={{ background: '#F05A28', color: '#fff' }}
        >
          16,600+ / mo
        </span>
      </div>
      <div className="divide-y divide-fj-neutral-100">
        {kws.map((kw) => {
          const pct = Math.min(Math.round((kw.kd / 60) * 100), 100);
          return (
            <div key={kw.term} className="px-5 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <p className="font-fj-body text-[0.8125rem] font-medium leading-snug text-fj-ink" style={{ maxWidth: '62%' }}>
                  {kw.term}
                </p>
                <div className="flex-shrink-0 text-right">
                  <p className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{kw.vol}</p>
                  <p className="font-fj-mono text-[10px] text-fj-neutral-400">searches/mo</p>
                </div>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-fj-neutral-100">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: kw.kd < 35 ? '#F05A28' : '#F3A07A' }}
                />
              </div>
              <p className="mt-1 font-fj-mono text-[10px] text-fj-neutral-400">
                KD {kw.kd}/100 · {kw.kd < 35 ? 'Winnable' : 'Moderate'}
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-t border-fj-neutral-100 px-5 py-3 text-center">
        <p className="font-fj-body text-[0.75rem] text-fj-neutral-400">
          Source: DataForSEO · June 2026 · India
        </p>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function SeoDelhi() {
  return (
    <>
      <Script id="delhi-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="delhi-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="delhi-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home',  url: 'https://factoryjet.com' },
          { name: 'SEO',   url: 'https://factoryjet.com/seo' },
          { name: 'Delhi', url: 'https://factoryjet.com/seo/delhi' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ─── 1. Hero ─────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_delhi_hero" />}
          eyebrow="SEO COMPANY IN DELHI, INDIA"
          headline="The SEO Company in Delhi NCR That Matches Your Plan to Your Market"
          lead="Delhi has three distinct buyer markets — exporters selling to the US and Europe, traders supplying all of India, and businesses serving Delhi locals. One copy-paste SEO plan suits none of them. FactoryJet delivers SEO services in Delhi matched to the market you actually sell into. No long contracts."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Export + Wholesale + Local SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<DelhiKeywordCard />}
        />

        {/* ─── 2. Logo bar ─────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ─── 3. Big Three ────────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY DELHI BUSINESSES TRUST US"
          headline="India's Trusted SEO Company — 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building"
        />

        {/* ─── 4. Delhi market context ─────────────────────────────────────── */}
        <CityContextSection
          eyebrow="DELHI NCR MARKET"
          headline="Why SEO in Delhi Is a Different Game — Three Buyer Markets, Three Strategies"
          leadParagraphs={[
            "Delhi is not one market. Nehru Place is one of Asia's largest electronics and IT hardware markets. Sadar Bazaar and Chandni Chowk collectively form one of India's biggest wholesale corridors. Mukherjee Nagar and Old Rajinder Nagar draw UPSC students from every state in the country. Okhla and the south Delhi export houses ship handicrafts and jewellery to the US and EU. Each of these buyers searches completely differently.",
            "An exporter chasing overseas orders needs simple, trust-building English content that overseas procurement teams find on Google — not local map rankings. A Nehru Place trader needs all-India supplier and dealer searches, not a Google Business Profile for Nehru Place. A Mukherjee Nagar coaching institute needs national student search coverage, not just local clicks from nearby areas. A South Delhi clinic needs the Google map and neighbourhood pages.",
            "This is why a generic SEO package fails every time in Delhi. The businesses that consistently win on Google here have a plan that starts with which buyer they are actually trying to reach — and then builds SEO around that buyer's specific search behaviour. That is exactly how FactoryJet works.",
          ]}
          stats={[
            { value: '₹11L Cr+', label: "Delhi's GSDP — among the largest state economies in India", sourceUrl: 'https://delhiplanning.delhi.gov.in/', sourceLabel: 'Delhi Economic Survey' },
            { value: "Asia's largest", label: 'IT and electronics market at Nehru Place', sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
            { value: '16,600+', label: 'monthly searches for SEO services in Delhi NCR alone', sourceUrl: 'https://dataforseo.com', sourceLabel: 'DataForSEO June 2026' },
          ]}
        />

        {/* ─── 5. Six SEO services ─────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN DELHI"
          headline="Six SEO Services We Deliver for Delhi and NCR Businesses"
          lead="Delhi has too many different buyer types for a one-size-fits-all approach. We combine the services your specific Delhi business needs — local map rankings for clinics and shops, all-India reach for traders, export-buyer content for exporters."
          sectors={[
            {
              name: 'Local SEO for Delhi',
              description:
                'Get your business into the top three on the Google map for Delhi searches. We manage your Google Business Profile, fix your details across every directory, get you real reviews, and build area-specific pages for Rohini, Dwarka, South Delhi, Laxmi Nagar, Janakpuri, and Karol Bagh.',
              example: 'Google map + "near me" rankings.',
            },
            {
              name: 'Technical SEO',
              description:
                'Slow pages, crawl errors, broken links, missing schema, duplicate URLs, and poor Core Web Vitals are the invisible blockers that stop you ranking in Delhi regardless of your content quality. We find and fix all of them — with mobile speed as the first priority.',
              example: 'Fast, crawlable, trusted by Google.',
            },
            {
              name: 'Export SEO',
              description:
                'For Delhi exporters (handicrafts, jewellery, clothing, leather) targeting buyers in the US, UK, and EU. Simple English content about your range, certifications, and terms; Google AI answer presence; and the trust signals that overseas procurement teams look for.',
              example: 'Win overseas enquiries from Google.',
            },
            {
              name: 'Ecommerce SEO',
              description:
                'Product pages, category structure, Shopify and WooCommerce optimisation, and the exact search terms Delhi and NCR shoppers use before they buy. We also handle all-India ecommerce reach for traders and distributors selling across the country.',
              example: 'Shopify, WooCommerce, custom stores.',
            },
            {
              name: 'Link Building',
              description:
                'Links from trusted Indian publications, trade directories, export associations (EPCH, AEPC), and local partners tell Google your Delhi website deserves the first page. We earn real links — no link farms, no private blog networks, no shortcuts that get you penalised.',
              example: 'Real links from credible Indian sites.',
            },
            {
              name: 'SEO Audit',
              description:
                'Not ranking despite having good content or a decent website? Something specific is blocking you. Our Delhi SEO audit identifies exactly what — technical problems, content gaps, missing links, competitor advantages — and gives you a clear priority list in plain English.',
              example: 'Clear audit report, clear action list.',
            },
          ]}
        />

        {/* ─── 6. FactoryJet vs a big Delhi agency ─────────────────────────── */}
        <ServiceExplanation
          eyebrow="FACTORYJET VS A DELHI SEO AGENCY"
          headline="Delhi Has 200+ SEO Agencies. Most of Them Sell the Same Plan to Everyone."
          lead="A generic Delhi agency sells you a package, assigns a junior account manager, and sends a 40-page monthly report full of metrics that never map to actual leads. We do the opposite."
          body={
            <>
              <p>
                Most Delhi SEO agencies — big or small — run the same template for every client. Same keyword research spreadsheet, same link-building playbook, same report format. It does not matter whether you are an exporter from Okhla or a coaching institute in Mukherjee Nagar. Your account looks identical to 20 other accounts on the same server.
              </p>
              <p>
                FactoryJet is a small, senior team where the same people who scope your work do the actual work. No marble office in Connaught Place. No account-management overhead. Every rupee you pay goes into{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">technical fixes</a>,{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">real links</a>, and content that ranks for the Delhi and NCR searches your buyers actually use.
              </p>
              <p>
                And unlike most{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO companies in India</a>, we do not lock you in. Month to month. Cancel with 30 days notice. Everything we build — content pages, Google Business Profile, structured data — stays yours if you ever leave.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Three markets. One plan.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Sell to the world', need: 'Simple English, trust content, Google AI answers', area: 'HANDICRAFTS · JEWELLERY · CLOTHING → US & EU', colour: '#F05A28' },
                  { type: 'Supply all of India', need: 'Supplier & dealer searches, all-India reach', area: 'NEHRU PLACE · SADAR BAZAAR · KASHMERE GATE', colour: '#F3A07A' },
                  { type: 'Serve Delhi and the country', need: 'Top 3 on the map + national student reach', area: 'CLINICS · COACHING · CP RETAIL', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="mb-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.area}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ─── 7. Why Delhi needs SEO ──────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE DELHI SEO OPPORTUNITY"
          headline="Delhi Has 16,600+ Monthly Searches for SEO Services. Most of That Traffic Goes to Three Websites."
          lead="The top three positions on a Google results page capture around 60% of all clicks. In a market as large and as competitive as Delhi NCR, that is the difference between a full pipeline and watching a rival answer the phone. The businesses that invested in SEO 12 months ago are those three websites today."
          pillars={[
            {
              icon: '01',
              title: 'Delhi buyers trust organic results, not ads.',
              body: "76% of Indian users skip paid ads and click organic results. In a city where everyone is sceptical of the hard sell — especially in B2B trade and export — showing up organically is a trust signal no ad budget can fully buy.",
            },
            {
              icon: '02',
              title: 'Technical quality separates winners from the crowd.',
              body: 'Most Delhi businesses — even large traders and exporters — still have slow, poorly structured websites. A company that fixes speed, crawlability, and schema can jump from page four to page one in months. That gap is still wide in Delhi NCR.',
            },
            {
              icon: '03',
              title: "SEO compounds. Delhi's ad costs don't.",
              body: "Google Ads CPCs in Delhi's top verticals keep rising. Every rupee you spend on ads disappears when the budget runs out. Every page you rank, every link you earn, every review you build keeps working. SEO is your long-term unfair advantage in one of India's most expensive ad markets.",
            },
          ]}
        />

        {/* ─── 8. 5-step journey ───────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run SEO for Delhi Businesses, Step by Step"
          lead="We audit before we plan. We fix the foundations before we add content. Every step is visible in a monthly report you can read in five minutes."
          stages={DELHI_JOURNEY}
          closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS"
        />

        {/* ─── 9. Delhi NCR areas ──────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="DELHI NCR AREAS WE COVER"
          headline="SEO Services Across Every Major Delhi NCR Business Zone"
          lead="From the wholesale corridors of Chandni Chowk to the IT parks of Noida and the corporate towers of Gurugram — each part of NCR has its own competitive landscape and search patterns."
          sectors={[
            {
              name: 'Connaught Place & Central Delhi',
              description:
                'Premium retail, professional services, finance, and consulting. High-intent searches from buyers across Delhi. Strong technical SEO and authority content are essential in this corridor.',
            },
            {
              name: 'Nehru Place',
              description:
                "Asia's largest IT and electronics market. All-India reseller and supplier searches dominate. B2B SEO with product-category depth and trust content for distributors and resellers.",
            },
            {
              name: 'Rohini & Dwarka',
              description:
                'High-density residential and local services. Healthcare, retail, education, and food delivery are the high-volume verticals here. Local map rankings and "near me" pages drive most enquiries.',
            },
            {
              name: 'South Delhi',
              description:
                'Premium clinics, high-end retail, schools, and professional services. South Delhi buyers search with high purchase intent and lower price sensitivity. Content quality matters more here.',
            },
            {
              name: 'Noida (NCR)',
              description:
                'IT companies, tech startups, education hubs, and manufacturing. Noida SEO is B2B-heavy — content marketing, technical SEO, and all-India reach for software and services companies.',
            },
            {
              name: 'Gurugram (NCR)',
              description:
                'Corporate HQs, finance, consulting, SaaS, and real estate. Gurugram is among the most competitive B2B SEO markets in India. Authority content and link building from credible sources are the path to page one.',
            },
            {
              name: 'Okhla & Faridabad',
              description:
                'Manufacturing, export houses, and industrial trade. Export SEO for reaching overseas buyers, plus all-India supplier searches for the domestic market. Schema and trust content matter here.',
            },
            {
              name: 'Sadar Bazaar & Chandni Chowk',
              description:
                'Wholesale corridors supplying shops across North India. B2B product-category pages, dealer and distributor search terms, and IndiaMART-complementary SEO are the biggest wins here.',
            },
          ]}
        />

        {/* ─── 10. Industries we serve ─────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="DELHI INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Delhi NCR"
          lead="Every Delhi industry has its own search patterns and buyer journey. We have worked across all of them."
          sectors={[
            {
              name: 'Export Houses',
              description:
                'Handicrafts, jewellery, garments, leather, and carpets from Delhi and NCR. Overseas buyer content, EPCH/AEPC directory presence, and Google AI answer optimisation for international procurement searches.',
            },
            {
              name: 'Wholesale & Trade',
              description:
                'Electronics at Nehru Place, FMCG at Sadar Bazaar, auto parts at Kashmere Gate, fabrics at Gandhi Nagar. All-India supplier and dealer searches, B2B category pages, and IndiaMART-complementary SEO.',
            },
            {
              name: 'Coaching & Education',
              description:
                'UPSC coaching in Mukherjee Nagar, bank and SSC prep in Rajinder Nagar, school chains, and ed-tech companies. National student search catchment, results-focused content, and mobile-first speed.',
            },
            {
              name: 'Healthcare & Clinics',
              description:
                'Hospitals, specialty clinics, diagnostic labs, and dental practices across Delhi. Google map top-three, Google Business Profile management, and E-E-A-T-compliant health content.',
            },
            {
              name: 'IT & Technology',
              description:
                'Software companies in Noida, IT services in Gurugram, and tech startups across NCR. B2B content marketing, all-India service search coverage, and technical SEO for developer-friendly sites.',
            },
            {
              name: 'Real Estate',
              description:
                'Developer websites, broker portals, and co-working spaces across NCR. Neighbourhood-specific landing pages, LocalBusiness schema, and fast mobile experience for high-intent property searchers.',
            },
          ]}
        />

        {/* ─── 11. Results strip ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            aria-hidden="true"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
              RESULTS
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Real SEO results for Delhi businesses — case studies on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are building Delhi-specific case studies: first-page rankings achieved, organic traffic growth month-on-month, and lead volume change from Google. Our broader track record — 500+ businesses, 4.9-star average — is built on the same SEO fundamentals we bring to every Delhi and NCR engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>
                See our full portfolio →
              </a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>
                Read case studies →
              </a>
            </div>
          </div>
        </section>

        {/* ─── 12. Comparison table ────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Delhi Agency vs. a Freelancer vs. Doing It Yourself"
          lead="Four ways to do SEO in Delhi. Here is the honest comparison — what you actually get, what you keep, and what happens when something goes wrong."
          pullQuote={{
            stat: 'No lock-in',
            caption: 'month-to-month billing, every deliverable stays yours — content pages, structured data, Google listings, and links — even if you leave.',
          }}
          columns={DELHI_COMPARISON_COLUMNS}
          rows={DELHI_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        {/* ─── 13. Internal link hub ───────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Delhi Businesses"
          lead="Looking for a specific type of SEO? We cover the full stack — from Google map rankings to technical clean-up to export-buyer content."
          sectors={[
            {
              name: 'Local SEO',
              description: 'Google map rankings, Google Business Profile management, "near me" searches, and area-specific pages across all of Delhi NCR.',
              linkLabel: 'Explore local SEO',
              linkHref: '/seo/local-seo',
            },
            {
              name: 'Technical SEO',
              description: 'Site speed, Core Web Vitals, crawl errors, schema, mobile optimisation — the foundation everything else is built on.',
              linkLabel: 'Explore technical SEO',
              linkHref: '/seo/technical-seo',
            },
            {
              name: 'Ecommerce SEO',
              description: 'Product pages, category structure, Shopify and WooCommerce, and the keywords Delhi online shoppers actually use before they buy.',
              linkLabel: 'Explore ecommerce SEO',
              linkHref: '/seo/ecommerce-seo',
            },
            {
              name: 'Link Building',
              description: 'Earning links from trusted Indian publications, trade directories, and local partners — the signal Google uses to decide who deserves the first page.',
              linkLabel: 'Explore link building',
              linkHref: '/seo/link-building',
            },
            {
              name: 'SEO Audit',
              description: 'A plain-English audit of what is stopping your Delhi website from ranking — with a clear action list you can hand to any developer.',
              linkLabel: 'Explore SEO audit',
              linkHref: '/seo/seo-audit',
            },
            {
              name: 'SEO Hub India',
              description: 'Our full guide to SEO services in India — what to look for, how to compare agencies, and how to tell whether it is working.',
              linkLabel: 'Back to India SEO hub',
              linkHref: '/seo',
            },
          ]}
        />

        {/* ─── 14. Testimonials ────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What business owners say about working with FactoryJet"
          region="in"
        />

        {/* ─── 15. FAQ ─────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="DELHI SEO QUESTIONS"
          headline="Every Question Delhi Business Owners Ask About SEO, Answered Simply"
          lead="We have answered every SEO question a Delhi business owner has asked us over 12 years. Here are the ones that come up most."
          categories={DELHI_FAQ_CATEGORIES}
          items={DELHI_FAQ_ITEMS}
        />

        {/* ─── 16. Final CTA ───────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN DELHI"
          headline="Ready to Reach Page One for Your Delhi and NCR Customers?"
          sub="Start with a free SEO check. We will show you where you rank today — whether you export from Okhla, trade from Nehru Place, run a clinic in South Delhi, or coach students in Mukherjee Nagar. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
