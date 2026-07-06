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
  title: 'SEO Company in Bangalore | Best SEO Services Bengaluru | FactoryJet',
  description:
    'Looking for the best SEO company in Bangalore? FactoryJet delivers SEO services in Bangalore — technical SEO, local SEO, B2B SEO for tech companies, ecommerce SEO, and link building. No long contracts. Book a free call.',
  keywords: [
    'seo company in bangalore',
    'seo company bangalore',
    'seo agency bangalore',
    'best seo company in bangalore',
    'top seo company in bangalore',
    'seo services in bangalore',
    'seo expert bangalore',
    'digital marketing company in bangalore',
    'b2b seo bangalore',
    'startup seo bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Bangalore | Best SEO Services Bengaluru | FactoryJet',
    description:
      'Expert SEO services in Bangalore — local SEO, technical SEO, B2B content SEO for tech companies, and ecommerce SEO. 500+ businesses, 4.9-star rating. No long contracts. Start with a free check.',
    url: 'https://factoryjet.com/seo/bangalore',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Bangalore' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Bangalore | FactoryJet',
    description: 'Expert SEO services in Bangalore for tech companies, startups, D2C brands, and local businesses. No lock-in. Book a free SEO check today.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/bangalore', languages: seoCityAlternatesIN['bangalore'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/bangalore#localbusiness',
  name: 'FactoryJet — SEO Company in Bangalore',
  description:
    'FactoryJet provides SEO services in Bangalore for tech companies, SaaS startups, D2C brands, IT services firms, and local businesses across Koramangala, Indiranagar, Whitefield, Electronic City, HSR Layout, and Marathahalli.',
  url: 'https://factoryjet.com/seo/bangalore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
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
  '@id': 'https://factoryjet.com/seo/bangalore#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Bangalore by FactoryJet',
  description:
    'SEO services in Bangalore covering local SEO, technical SEO, B2B content SEO, ecommerce SEO, and link building for tech companies, startups, and local businesses. Serving Koramangala, Indiranagar, Whitefield, Electronic City, HSR Layout, and Marathahalli.',
  url: 'https://factoryjet.com/seo/bangalore',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
  },
  areaServed: { '@type': 'City', name: 'Bangalore' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/bangalore#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/bangalore',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const BANGALORE_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Bangalore SEO audit — find out what is actually blocking your rankings',
    description:
      'We check your site across Bangalore searches and the specific verticals you compete in — whether that is IT services, SaaS, D2C retail, or local services. Who ranks above you, why, and what their technical and content advantage is. You get a plain-English report with a clear priority list. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical issues — Bangalore buyers are on mobile and fast',
    description:
      'Bengaluru has some of the highest mobile-first search activity in India. Slow pages, crawl errors, poor Core Web Vitals, broken schema, and duplicate content all kill rankings here before content even has a chance. We fix the technical foundation first. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content matched to how Bangalore buyers actually research',
    description:
      'Bangalore B2B buyers research for weeks before contacting you — they read blogs, comparison guides, case studies, and solution pages. We write content that reaches them at every stage of that research — not just bottom-of-funnel service pages. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn real links from trusted Indian and global tech sources',
    description:
      'For Bangalore-based tech and IT companies, links from credible Indian publications, tech media, and industry directories carry significant weight. We earn them through editorial outreach — no link farms, no private blog networks. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly report — what moved, what is next, what it means for leads',
    description:
      'Once a month we call. You see exactly where you rank for your Bangalore target keywords, how many people visited from Google, how many turned into leads, and the three things we are doing next. A plain one-page report, not a dashboard you never open. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const BANGALORE_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'bangalore-market', label: 'Bangalore Market' },
];

const BANGALORE_FAQ_ITEMS = [
  /* ── Getting Started ─────────────────────────────────────────── */
  {
    category: 'getting-started',
    question: 'Is SEO worth it for a Bangalore tech company or startup?',
    answer:
      '"Seo company in bangalore" is searched 4,400 times a month — and that is just buyers looking for SEO help itself. Multiply that across the searches your customers are running for your product or service and you understand the scale of the opportunity. Bangalore B2B buyers do months of research on Google before they contact anyone. If you are not showing up during that research phase, someone else is.',
  },
  {
    category: 'getting-started',
    question: 'How do I find the best SEO company in Bangalore?',
    answer:
      'Ask these three questions before you pay: Can you show me ranking data for a Bangalore tech or B2B client — actual numbers, not a screenshot? Who specifically does the technical work on my site? What will happen in the first 60 days? The top SEO company in Bangalore for your business is the one that gives you straight answers to all three. Avoid anyone who leads with a fixed monthly package and guaranteed page-one rankings.',
  },
  {
    category: 'getting-started',
    question: 'What makes SEO for Bangalore different from other Indian cities?',
    answer:
      "Bangalore is India's tech capital — which means SEO here is heavier on B2B content, longer buyer journeys, and technical credibility than most other Indian cities. Buyers at Koramangala startups, Whitefield IT parks, and Electronic City companies research for weeks. They read comparison guides, long-form blog content, and case studies. The SEO playbook that works in a consumer market like Mumbai does not work the same way here.",
  },
  {
    category: 'getting-started',
    question: 'Do I need a Bangalore-based SEO agency?',
    answer:
      "You need someone who understands how Bangalore tech and B2B buyers research — not someone physically in Koramangala. We are not based in Bangalore, but we understand B2B content SEO, the SaaS buyer journey, and the kind of technical credibility that matters to Bangalore's digitally sophisticated audience. Our advantage: senior people, no lock-in, and a track record across 500+ businesses.",
  },
  /* ── Our SEO Services ─────────────────────────────────────────── */
  {
    category: 'services',
    question: 'What SEO services do you offer for Bangalore businesses?',
    answer:
      'The full set: technical SEO (site speed, Core Web Vitals, schema, crawlability), B2B content SEO (long-form guides, comparison pages, solution content for the Bangalore tech buyer journey), local SEO (Google Business Profile and map rankings for local service businesses), ecommerce SEO (product and category pages for D2C brands), and link building (tech publications, Indian business directories). We combine these based on your specific Bangalore market.',
  },
  {
    category: 'services',
    question: 'Can you do B2B content SEO for a Bangalore IT or SaaS company?',
    answer:
      'Yes — this is a strength. B2B SEO in Bangalore requires content that reaches buyers at every stage of a long research cycle. We build solution pages and blog content targeting the exact questions Bangalore-based decision-makers search during that research. We have done B2B content SEO for software, IT services, and tech companies. The goal: be the site they found and remembered all the way through their buying journey.',
  },
  {
    category: 'services',
    question: 'Can you do local SEO in Bangalore for my clinic, restaurant, or retail store?',
    answer:
      'Yes. For businesses serving Bangalore customers directly — clinics in Indiranagar, restaurants in Koramangala, retail in HSR Layout, or services in Whitefield — we manage your Google Business Profile, build neighbourhood-specific pages, earn real reviews, and get you into the top three on Google Maps. Local search in Bangalore is mobile-first and highly competitive in most service categories.',
  },
  {
    category: 'services',
    question: 'Do you offer technical SEO for Bangalore startups?',
    answer:
      'Yes. Many Bangalore startups have modern tech stacks (React, Next.js, JAMstack) that create specific technical SEO challenges — rendering issues, poor crawlability, missing structured data, and slow LCP on throttled mobile. We understand these stacks and fix the technical SEO issues that generic agencies miss. A fast, crawlable, schema-rich site is the foundation everything else is built on.',
  },
  /* ── Results & Timelines ──────────────────────────────────────── */
  {
    category: 'results',
    question: 'How long does SEO take to work in Bangalore?',
    answer:
      'For technical fixes on a site with existing content, you can see ranking movement in 4–8 weeks. For new content pages targeting Bangalore B2B keywords, expect 3–5 months before they reach page one. For highly competitive SaaS and IT service terms, sometimes 6–9 months. The key advantage of starting now: a page that ranks for "seo company in bangalore" — searched 4,400 times a month at KD 8 — keeps sending traffic for years, with no per-click cost.',
  },
  {
    category: 'results',
    question: 'What results do Bangalore businesses typically see from SEO?',
    answer:
      'Our clients see first-page rankings for their core service terms within 3–6 months, steady month-on-month organic traffic growth, and more inbound enquiries from Google. For Bangalore B2B companies, the big win is often content that reaches buyers mid-research — a potential customer who reads your comparison guide and comes back two weeks later to book a demo.',
  },
  {
    category: 'results',
    question: 'Can you guarantee rankings in Bangalore?',
    answer:
      'No honest SEO company in Bangalore can guarantee specific rankings — Google controls those. What we guarantee is the work: fix your technical issues, write content that outperforms your current competition, and earn real links. If the work is done right and your site is not penalised, rankings follow. We show you the effort and the direction of travel every month.',
  },
  {
    category: 'results',
    question: 'How do you measure SEO success for a Bangalore B2B company?',
    answer:
      'We measure what matters to your pipeline: rankings for target Bangalore keywords, organic traffic month-on-month, how many enquiries and form submissions came from Google, and the quality of those leads. For B2B companies we also track brand search volume over time — a growing brand search is a leading indicator of SEO compounding.',
  },
  /* ── Cost & Contracts ─────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'How much do SEO services cost in Bangalore?',
    answer:
      'We do not sell fixed packages because a Koramangala SaaS startup needs different work from an Indiranagar clinic. We scope a monthly plan to what your specific Bangalore site needs. We give you a free audit first — no payment, no obligation — so you know exactly what we would do and why before you decide.',
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. We work month to month. Pause or stop with 30 days notice. Everything we build — your content pages, your Google Business Profile, your structured data, and your earned links — belongs to you and stays with you regardless of whether you continue. We keep clients because rankings go up, not because they are locked in.',
  },
  {
    category: 'cost',
    question: 'Are affordable SEO services in Bangalore worth paying for?',
    answer:
      'Bangalore has a lot of cheap SEO providers — link farms dressed as agencies. Below a certain budget, you are paying for work that will either do nothing or actively hurt your site with bad links. Good SEO in Bangalore costs more because the competition is higher and the work required is more intensive. We charge a fair price for real work.',
  },
  {
    category: 'cost',
    question: 'What does a monthly Bangalore SEO plan from FactoryJet include?',
    answer:
      'Every month: keyword tracking for your Bangalore target terms, technical checks and fixes, one or two new or updated content pieces (blog, solution page, or comparison guide), local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page report with a monthly call. The same senior team does this every month.',
  },
  /* ── Bangalore Market ────────────────────────────────────────── */
  {
    category: 'bangalore-market',
    question: 'Which Bangalore areas do you cover for SEO?',
    answer:
      'All of Bangalore: Koramangala, Indiranagar, Whitefield, Electronic City, HSR Layout, Marathahalli, Bannerghatta Road, Jayanagar, JP Nagar, MG Road, Hebbal, Yeshwanthpur, and Sarjapur Road. For local service businesses we focus on your specific neighbourhood and city-wide terms. For B2B tech companies we target national and global reach from a Bangalore base.',
  },
  {
    category: 'bangalore-market',
    question: 'Which Bangalore industries benefit most from SEO?',
    answer:
      'Any Bangalore business where buyers search on Google before they decide. Highest-impact: IT services and software development, SaaS companies, D2C ecommerce brands, healthcare and clinics, education and ed-tech, real estate and co-working, and professional services (consulting, CA, legal). For tech companies the biggest missed opportunity is content SEO — being present throughout the long B2B research cycle, not just on the "contact us" page.',
  },
  {
    category: 'bangalore-market',
    question: 'Who is the top SEO company in Bangalore for a tech company?',
    answer:
      'The best SEO agency in Bangalore for a tech company understands B2B content strategy, modern JavaScript frameworks, and long research-cycle buying behaviour. FactoryJet has worked across IT services, SaaS, and software companies. We understand the technical SEO challenges of React and Next.js stacks, and we can write the kind of authoritative B2B content that reaches Bangalore decision-makers before they start talking to sales.',
  },
  {
    category: 'bangalore-market',
    question: "My Bangalore startup has tried SEO before and it didn't work. Why would this be different?",
    answer:
      'Most failed Bangalore SEO comes from three things: no technical foundation (slow site, crawl issues), content that chased generic keywords instead of the specific questions your buyers search, or cheap link-building that got the site penalised. We audit first, fix the technical issues before adding content, and build links the right way. We are also month-to-month — if something is not working after 3 months, we tell you honestly and change the approach, or you walk away with everything we built.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BANGALORE_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison table ────────────────────────────────────────────────────── */

const BANGALORE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bangalore Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const BANGALORE_COMPARISON_ROWS = [
  {
    feature: 'Lock-in contract',
    values: ['None, month to month', '6–12 months typical', 'Varies', 'None'],
  },
  {
    feature: 'B2B content SEO for tech buyers',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO for JS frameworks',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Real link building (no farms)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Local SEO for Bangalore areas',
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
    feature: 'One-page report (no jargon)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
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

/* ─── Hero right slot — Bangalore keyword demand card ─────────────────────── */

function BangaloreKeywordCard() {
  const kws = [
    { term: 'seo company in bangalore', vol: '4,400', kd: 8 },
    { term: 'seo agency bangalore',     vol: '4,400', kd: 38 },
    { term: 'seo services in bangalore', vol: '1,300', kd: 22 },
    { term: 'top seo company bangalore', vol: '720',   kd: 12 },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p
          className="font-fj-mono font-bold uppercase text-fj-neutral-400"
          style={{ fontSize: '10px', letterSpacing: '0.14em' }}
        >
          Bangalore · Monthly Search Demand
        </p>
        <span
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold"
          style={{ background: '#F05A28', color: '#fff' }}
        >
          10,820+ / mo
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
                  style={{ width: `${pct}%`, background: kw.kd < 20 ? '#22c55e' : kw.kd < 35 ? '#F05A28' : '#F3A07A' }}
                />
              </div>
              <p className="mt-1 font-fj-mono text-[10px] text-fj-neutral-400">
                KD {kw.kd}/100 · {kw.kd < 15 ? '🟢 Very Winnable' : kw.kd < 35 ? 'Winnable' : 'Moderate'}
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

export default function SeoBangalore() {
  return (
    <>
      <Script id="bangalore-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bangalore-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="bangalore-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home',      url: 'https://factoryjet.com' },
          { name: 'SEO',       url: 'https://factoryjet.com/seo' },
          { name: 'Bangalore', url: 'https://factoryjet.com/seo/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ─── 1. Hero ─────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_bangalore_hero" />}
          eyebrow="SEO COMPANY IN BANGALORE, INDIA"
          headline="The SEO Company in Bangalore That Gets You Found by the Buyers Who Research Before They Buy"
          lead="Bangalore is India's tech capital — and tech buyers spend weeks researching on Google before they contact anyone. FactoryJet delivers SEO services in Bangalore built for the long B2B research cycle: technical SEO, content that reaches buyers mid-research, and link building that builds real authority. No long contracts."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['B2B + Local + Ecommerce SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<BangaloreKeywordCard />}
        />

        {/* ─── 2. Logo bar ─────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ─── 3. Big Three ────────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY BANGALORE BUSINESSES TRUST US"
          headline="India's Trusted SEO Company — 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building"
        />

        {/* ─── 4. Six SEO services ─────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN BANGALORE"
          headline="Six SEO Services We Deliver for Bangalore Businesses"
          lead="Bangalore is not one market — it is Koramangala startups, Whitefield IT parks, Electronic City manufacturing, Indiranagar retail, and HSR Layout services. We put together the right combination of SEO services for your specific Bangalore business."
          sectors={[
            {
              name: 'B2B Content SEO',
              description:
                'For IT services, SaaS, and software companies in Bangalore. We build solution pages, comparison guides, and blog content that reaches decision-makers during their long research cycle — not just on the "hire us" page. This is where most Bangalore tech companies are leaving the biggest opportunity.',
              example: 'Reach buyers before they talk to sales.',
            },
            {
              name: 'Technical SEO',
              description:
                'Many Bangalore startups run on React, Next.js, and modern JAMstack stacks that create specific crawlability and rendering challenges for Google. We understand these frameworks and fix the technical SEO issues that generic agencies miss — Core Web Vitals, structured data, indexing, and mobile speed.',
              example: 'Fast, crawlable, trusted by Google.',
            },
            {
              name: 'Local SEO for Bangalore',
              description:
                'Get your business into the top three on the Google map for Bangalore searches. We manage your Google Business Profile, fix your details across every directory, get you real reviews, and build area-specific pages for Koramangala, Indiranagar, Whitefield, HSR Layout, and Marathahalli.',
              example: 'Google map + "near me" rankings.',
            },
            {
              name: 'Ecommerce SEO',
              description:
                'For D2C brands and online retailers based in Bangalore. Product pages, category structure, Shopify and WooCommerce optimisation, and the search terms Bangalore shoppers use before they buy. We help ecommerce companies rank higher and sell more from organic search.',
              example: 'Shopify, WooCommerce, custom stores.',
            },
            {
              name: 'Link Building',
              description:
                'Links from trusted Indian tech publications, business directories, and industry partners tell Google your Bangalore website deserves the first page. We earn real links through editorial outreach — no link farms, no bought links, no shortcuts that leave a penalty footprint.',
              example: 'Real links from credible Indian sources.',
            },
            {
              name: 'SEO Audit',
              description:
                'Not ranking despite a good product and decent content? Something specific is blocking you. Our Bangalore SEO audit finds exactly what — rendering issues, content gaps, competitor link advantages, on-page problems — and gives you a clear action list in plain English.',
              example: 'Clear audit report, clear action list.',
            },
          ]}
        />

        {/* ─── 5. FactoryJet vs a big Bangalore agency ─────────────────────── */}
        <ServiceExplanation
          eyebrow="FACTORYJET VS A BANGALORE SEO AGENCY"
          headline="Bangalore Has Hundreds of SEO Vendors. Most Treat Tech Companies Like Any Other Client."
          lead="The best SEO agency in Bangalore for a tech company understands how developers buy, how B2B research cycles work, and what technical SEO looks like on a Next.js or React stack — not just a WordPress blog."
          body={
            <>
              <p>
                Most Bangalore SEO agencies sell the same service to a fintech startup in Koramangala, a garment exporter in Peenya, and a clinic in Indiranagar. The keyword research, the content templates, the reporting format — all identical. That is fine for simple local businesses. It is a waste of budget for a Bangalore tech company with a sophisticated buyer.
              </p>
              <p>
                We work differently. For tech and SaaS companies, we build{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">technical SEO</a>{' '}
                that handles modern JavaScript frameworks, and{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">content that reaches B2B buyers</a>{' '}
                at every stage of their research, not just at the point where they are ready to call. For local Bangalore businesses, we do the map rankings and neighbourhood pages that drive real foot traffic.
              </p>
              <p>
                We are also considerably cheaper than most Bangalore SEO agencies because we run lean — and we do not lock you in. Month to month. Everything we build stays yours. And unlike most{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO companies in India</a>,{' '}
                we have 25 years of experience behind the work, not just a team of recent graduates running templates.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  What makes Bangalore SEO different
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { label: 'Buyer type',        fj: 'B2B researcher + local service buyer', them: 'Treated like all clients' },
                  { label: 'Tech stack',         fj: 'React/Next.js/JAMstack aware',         them: 'WordPress-first lens' },
                  { label: 'Content strategy',   fj: 'Full-funnel B2B research cycle',       them: 'Bottom-funnel service pages' },
                  { label: 'Contract',           fj: 'Month to month, no lock-in',           them: '6–12 months typical' },
                ].map((row) => (
                  <div key={row.label} className="px-7 py-4">
                    <p className="mb-2 font-fj-mono font-bold uppercase tracking-wide text-fj-neutral-400" style={{ fontSize: '10px' }}>
                      {row.label}
                    </p>
                    <div className="flex gap-3">
                      <div className="flex-1 rounded-lg px-3 py-2.5" style={{ background: '#F05A28', color: '#fff' }}>
                        <p className="font-fj-body text-[0.8125rem] font-semibold leading-snug">{row.fj}</p>
                      </div>
                      <div className="flex-1 rounded-lg bg-fj-neutral-50 px-3 py-2.5">
                        <p className="font-fj-body text-[0.8125rem] leading-snug text-fj-neutral-500">{row.them}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ─── 6. Why Bangalore needs SEO ──────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE BANGALORE SEO OPPORTUNITY"
          headline="Bangalore Has 10,000+ Monthly Searches for SEO Services — at One of the Lowest Difficulty Scores in India."
          lead="'Seo company in bangalore' — 4,400 searches a month at a keyword difficulty of just 8 out of 100. That is extraordinarily low for a market this size. Most Bangalore businesses have not yet built the SEO authority their size warrants — which means the gap between where they are and where they could be is still very wide."
          pillars={[
            {
              icon: '01',
              title: 'Bangalore buyers research on Google for weeks before buying.',
              body: "This is especially true in B2B — IT procurement, SaaS selection, digital agency shortlisting. Every search your potential customer runs during that research period is an opportunity for you to show up and build trust. Most Bangalore businesses miss 80% of this window by only having a homepage and a contact page.",
            },
            {
              icon: '02',
              title: 'Technical quality unlocks everything else.',
              body: 'Bangalore startups often have sophisticated products on technically weak sites — poor Core Web Vitals, crawlability issues, missing structured data. Fixing these unlocks fast ranking movement. We have seen Bangalore sites jump multiple pages in 60 days from technical fixes alone.',
            },
            {
              icon: '03',
              title: "Bangalore's SEO window is still open. For now.",
              body: "With KD 8 on the primary search term, Bangalore is still an early-mover market for SEO. Mumbai and Delhi agencies have been building authority for years. Bangalore businesses that invest now will be the ones who are impossible to displace in 18 months.",
            },
          ]}
        />

        {/* ─── 7. 5-step journey ───────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run SEO for Bangalore Businesses, Step by Step"
          lead="We audit before we plan. We fix the technical foundation before we add content. Every step is visible in a monthly report you can read in five minutes."
          stages={BANGALORE_JOURNEY}
          closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS"
        />

        {/* ─── 8. Bangalore areas ──────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="BANGALORE AREAS WE COVER"
          headline="SEO Services Across Every Major Bangalore Business Zone"
          lead="From the startup density of Koramangala to the IT parks of Whitefield and Electronic City — each Bangalore zone has its own competitive landscape and buyer behaviour. We know the difference."
          sectors={[
            {
              name: 'Koramangala',
              description:
                'The startup and restaurant capital of Bangalore. High density of D2C brands, tech startups, co-working spaces, and food businesses. B2B content SEO and local map rankings drive most of the growth here.',
            },
            {
              name: 'Indiranagar',
              description:
                'Premium retail, restaurants, salons, clinics, and boutique fitness. High purchase-intent local search — "near me" and "best in Indiranagar" terms carry significant volume. Local SEO and Google Business Profile are the main levers.',
            },
            {
              name: 'Whitefield',
              description:
                'Large IT parks, MNCs, and enterprise buyers. B2B SEO here needs to reach procurement teams at companies like Wipro, Mphasis, and IBM — content that positions you as an expert in the weeks before they issue an RFP.',
            },
            {
              name: 'Electronic City',
              description:
                'Infosys, HP, and major manufacturing companies. Similar to Whitefield — enterprise B2B buyers doing long research cycles. Solution-page and comparison-guide content strategy works here.',
            },
            {
              name: 'HSR Layout',
              description:
                'High-growth residential and startup area with strong local services demand — fitness, healthcare, food delivery, education. Local SEO, neighbourhood-specific pages, and Google Business Profile management.',
            },
            {
              name: 'Marathahalli & Sarjapur',
              description:
                'IT corridor connecting Whitefield to the city. Large employed professional population with strong search demand for services — healthcare, fitness, food, and home services. Local map rankings + mobile-first content.',
            },
          ]}
        />

        {/* ─── 9. Industries ───────────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="BANGALORE INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Bangalore"
          lead="Every Bangalore industry has its own search patterns, buyer journey, and content requirements. We have worked across all of them."
          sectors={[
            {
              name: 'IT Services & Software',
              description:
                'Development shops, IT services, and managed services companies in Koramangala, Whitefield, and Electronic City. Full-funnel B2B content, technical SEO, and link building from credible tech sources.',
            },
            {
              name: 'SaaS & Technology',
              description:
                'Product companies and SaaS startups across Bangalore. Search-optimised content at every stage of the B2B buyer journey — awareness blog posts, comparison guides, use-case pages, and ROI calculators.',
            },
            {
              name: 'D2C & Ecommerce',
              description:
                'Direct-to-consumer brands based in Bangalore selling across India. Product and collection page SEO, Shopify and WooCommerce optimisation, and content that ranks for category and buying-intent searches.',
            },
            {
              name: 'Healthcare & Clinics',
              description:
                'Hospitals, specialty clinics, dental, physiotherapy, and dermatology across Bangalore. Local map rankings, Google Business Profile, and E-E-A-T-compliant health content.',
            },
            {
              name: 'Real Estate',
              description:
                'Developer sites, broker portals, and co-working companies across Bangalore. Neighbourhood-specific landing pages, project pages, and high-intent buyer search coverage.',
            },
            {
              name: 'Education & Ed-Tech',
              description:
                'Schools, coaching institutes, and ed-tech startups in Bangalore. National student search catchment, course and results-focused content, and brand SEO that drives direct enquiries.',
            },
          ]}
        />

        {/* ─── 10. Results strip ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RESULTS</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Real SEO results for Bangalore businesses — case studies on the way
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We are building Bangalore-specific case studies: first-page rankings achieved, organic traffic growth month-on-month, and the lead volume change from Google. Our broader track record — 500+ businesses, 4.9-star average — is built on the same SEO fundamentals we bring to every Bangalore engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our full portfolio →</a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>Read case studies →</a>
            </div>
          </div>
        </section>

        {/* ─── 11. Comparison table ────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Bangalore Agency vs. a Freelancer vs. Doing It Yourself"
          lead="Four ways to do SEO in Bangalore. Here is the honest comparison — what you actually get, what you keep, and what happens when something goes wrong."
          pullQuote={{
            stat: 'KD 8',
            caption: '"seo company in bangalore" has a keyword difficulty of just 8 out of 100 — one of the lowest KD scores for a major Indian city SEO term. The window is still open.',
          }}
          columns={BANGALORE_COMPARISON_COLUMNS}
          rows={BANGALORE_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        {/* ─── 12. Internal link hub ───────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Bangalore Businesses"
          lead="Looking for a specific type of SEO? We cover the full stack — from B2B content strategy to technical clean-up to ecommerce product pages."
          sectors={[
            {
              name: 'Local SEO',
              description: 'Google map rankings, Google Business Profile management, "near me" searches, and area-specific pages across all of Bangalore.',
              linkLabel: 'Explore local SEO',
              linkHref: '/seo/local-seo',
            },
            {
              name: 'Technical SEO',
              description: 'Site speed, Core Web Vitals, crawl errors, schema, mobile optimisation — including JavaScript framework SEO for React and Next.js sites.',
              linkLabel: 'Explore technical SEO',
              linkHref: '/seo/technical-seo',
            },
            {
              name: 'Ecommerce SEO',
              description: 'Product pages, category structure, Shopify and WooCommerce, and the keywords Bangalore online shoppers use before they buy.',
              linkLabel: 'Explore ecommerce SEO',
              linkHref: '/seo/ecommerce-seo',
            },
            {
              name: 'Link Building',
              description: 'Earning links from trusted Indian tech publications, business directories, and industry partners — the authority signal Google uses to rank you.',
              linkLabel: 'Explore link building',
              linkHref: '/seo/link-building',
            },
            {
              name: 'SEO Audit',
              description: 'A plain-English audit of what is stopping your Bangalore website from ranking — technical, content, and competitive gaps — with a clear action list.',
              linkLabel: 'Explore SEO audit',
              linkHref: '/seo/seo-audit',
            },
            {
              name: 'SEO Hub India',
              description: 'Our full guide to SEO services in India — what to look for, how to compare agencies, and how to tell whether your SEO is working.',
              linkLabel: 'Back to India SEO hub',
              linkHref: '/seo',
            },
          ]}
        />

        {/* ─── 13. Testimonials ────────────────────────────────────────────── */}
        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        {/* ─── 14. FAQ ─────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="BANGALORE SEO QUESTIONS"
          headline="Every Question Bangalore Business Owners Ask About SEO, Answered Simply"
          lead="We have answered every SEO question a Bangalore business owner has asked us over 25 years. Here are the ones that come up most."
          categories={BANGALORE_FAQ_CATEGORIES}
          items={BANGALORE_FAQ_ITEMS}
        />

        {/* ─── 15. Final CTA ───────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN BANGALORE"
          headline="Ready to Reach Page One for Your Bangalore Customers?"
          sub="Start with a free SEO check. We will show you where you rank today, who is beating you and why, and the first three things we would fix — whether you are a Koramangala startup, a Whitefield IT company, or a local business in Indiranagar. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
