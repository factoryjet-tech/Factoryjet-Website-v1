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
  title: 'SEO Company in Mumbai, India | Best SEO Services Mumbai | FactoryJet',
  description:
    'Looking for the best SEO company in Mumbai? FactoryJet delivers expert SEO services in Mumbai — local SEO, technical SEO, ecommerce SEO, and link building. No long contracts. Book a free call.',
  keywords: [
    'seo company in mumbai india',
    'seo services in mumbai',
    'best seo company in mumbai',
    'seo agency in mumbai',
    'seo company mumbai',
    'local seo services mumbai',
    'ecommerce seo mumbai',
    'technical seo mumbai',
    'digital marketing seo mumbai',
    'seo packages mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Mumbai, India | Best SEO Services Mumbai | FactoryJet',
    description:
      'Expert SEO services in Mumbai — local SEO, technical SEO, ecommerce SEO, and link building. 500+ businesses, 4.9-star rating. No long contracts. Start with a free check.',
    url: 'https://factoryjet.com/seo/mumbai',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Mumbai India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Mumbai India | FactoryJet',
    description: 'Expert SEO services in Mumbai for local businesses, D2C brands, and enterprise. No lock-in. Book a free SEO check today.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/mumbai', languages: seoCityAlternatesIN['mumbai'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/* ─── Schemas ─────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://factoryjet.com/seo/mumbai#localbusiness',
  name: 'FactoryJet — SEO Company in Mumbai',
  description:
    'FactoryJet provides SEO services in Mumbai for local businesses, D2C brands, ecommerce stores, and enterprises across BKC, Andheri, Bandra, Worli, Thane, and Navi Mumbai.',
  url: 'https://factoryjet.com/seo/mumbai',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
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
  '@id': 'https://factoryjet.com/seo/mumbai#service',
  serviceType: 'SEO Services',
  name: 'SEO Services in Mumbai by FactoryJet',
  description:
    'SEO services in Mumbai covering local SEO, technical SEO, ecommerce SEO, link building, and SEO audits. Serving BKC, Andheri, Bandra, Worli, Thane, Navi Mumbai and all of Greater Mumbai.',
  url: 'https://factoryjet.com/seo/mumbai',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet Technologies',
    url: 'https://factoryjet.com',
    telephone: '+919699977699',
  },
  areaServed: { '@type': 'City', name: 'Mumbai' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/mumbai#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/mumbai',
};

/* ─── Journey ─────────────────────────────────────────────────────────────── */

const MUMBAI_JOURNEY: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Mumbai SEO audit — see where you actually stand',
    description:
      'We check your current rankings across Mumbai searches, who is beating you and why, which pages are hurting your site, and how your site loads on mobile. You get a plain-English report, not a PDF packed with numbers you will never read. (Week 1)',
  },
  {
    number: '02',
    title: 'Fix the technical problems first',
    description:
      'Slow pages, broken links, missing titles, duplicate content, crawl errors, bad Core Web Vitals — we fix everything that is stopping Google from trusting your site. Mumbai is a competitive market. A clean technical foundation is table stakes. (Weeks 1–2)',
  },
  {
    number: '03',
    title: 'Build content that Mumbai buyers are actually searching for',
    description:
      'We write and update pages around the exact terms your Mumbai customers type into Google — service names, neighbourhood names, real questions. We do not stuff keywords in. We answer questions better than whoever is already ranking. (Weeks 2–6)',
  },
  {
    number: '04',
    title: 'Earn real links from trusted Indian websites',
    description:
      'Links from trusted Indian publications, trade directories, and local partners are the signals Google uses to decide who deserves the first page in Mumbai. We earn them the right way — no link farms, no private blog networks. (Month 2 onwards)',
  },
  {
    number: '05',
    title: 'Monthly call and one-page report',
    description:
      'Once a month we call. You will see exactly where you rank for your Mumbai keywords, how many people visited from Google, and the three things we are doing next. No jargon. Just what changed and what is coming. (Monthly)',
  },
];

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */

const MUMBAI_FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'services',        label: 'Our SEO Services' },
  { key: 'results',         label: 'Results & Timelines' },
  { key: 'cost',            label: 'Cost & Contracts' },
  { key: 'mumbai-market',   label: 'Mumbai Market' },
];

const MUMBAI_FAQ_ITEMS = [
  /* ── Getting Started ─────────────────────────────────────────── */
  {
    category: 'getting-started',
    question: 'Is SEO worth it for a Mumbai business?',
    answer:
      'Yes — if your customers search on Google before they buy. Mumbai alone has enormous search volume: "seo company in mumbai india" is searched 8,100 times a month. That is real buyers with money, looking for exactly what you sell. If a rival shows up on page one and you do not, they get the call. And unlike ads, SEO keeps working after you stop paying for it.',
  },
  {
    category: 'getting-started',
    question: 'How do I find a good SEO company in Mumbai?',
    answer:
      'Ask three things: Can you show me the ranking history of a current Mumbai client — not a screenshot? Do your senior people do the work or is it outsourced? What exactly will happen in the first 90 days? Good agencies answer all three without hesitation. Be cautious of any agency that leads with guaranteed rankings or talks mostly about links without mentioning your site speed and content.',
  },
  {
    category: 'getting-started',
    question: 'What makes Mumbai SEO different from SEO in other Indian cities?',
    answer:
      'Mumbai is the most competitive SEO market in India. Every major national brand, every funded startup, and hundreds of local businesses are fighting for the same first page. Keyword difficulty on most Mumbai terms runs 10–30 points higher than Pune or Jaipur. You need strong technical SEO and real content and links — not just a title tag tweak.',
  },
  {
    category: 'getting-started',
    question: 'Do I need a Mumbai-based agency or can I work with someone remote?',
    answer:
      'You need someone who understands how Mumbai buyers search and which neighbourhoods matter to your business — not someone physically in Andheri. We are not based in Mumbai, but we have delivered SEO across BFSI, real estate, fashion, F&B, and healthcare clients. Our advantage: 25 years of experience, a small senior team, and no junior on your account. We also cost less than a mid-size Mumbai agency, without the lock-in.',
  },
  /* ── Our SEO Services ─────────────────────────────────────────── */
  {
    category: 'services',
    question: 'What SEO services do you offer for Mumbai businesses?',
    answer:
      'The full set: technical SEO (site speed, crawlability, schema, Core Web Vitals), local SEO (Google Business Profile, map rankings, "near me" searches across BKC, Andheri, Bandra, Worli, Thane, Navi Mumbai), ecommerce SEO (product pages, categories, Shopify and WooCommerce), content SEO (pages around what Mumbai buyers search for), link building (trusted Indian mentions and links), and SEO audits. We put these together based on what your specific site needs.',
  },
  {
    category: 'services',
    question: 'Do you do local SEO for Mumbai businesses?',
    answer:
      'Yes. If your customers come from specific parts of Mumbai, we handle the Google Business Profile, match your details across every directory, build area-specific pages, and help you get more real reviews. For businesses with multiple branches across Greater Mumbai, we set up a listing and a page for each location so they help each other instead of competing.',
  },
  {
    category: 'services',
    question: 'Can you help my ecommerce business rank on Google in Mumbai?',
    answer:
      'Yes. Ecommerce SEO in Mumbai is a large part of what we do. We work on product titles and descriptions, category pages, technical issues like duplicate URLs and slow images, and the exact terms Mumbai shoppers use before they buy. We work with Shopify, WooCommerce, and custom-built stores. If you sell online and want to be found before your rivals, this is the right fit.',
  },
  {
    category: 'services',
    question: 'Do you offer technical SEO services in Mumbai?',
    answer:
      'Yes. Technical SEO is often the fastest win for Mumbai businesses that already have decent content. We check site speed on mobile (how most Mumbai users browse), Core Web Vitals, indexing problems, duplicate content, broken internal links, structured data, and crawl errors. These are the invisible things Google checks before it decides whether to show your site at all.',
  },
  /* ── Results & Timelines ──────────────────────────────────────── */
  {
    category: 'results',
    question: 'How long does SEO take to show results in Mumbai?',
    answer:
      'For technical fixes on a site with existing content, you can see ranking movement in 4–8 weeks. For new content pages targeting Mumbai keywords, expect 3–5 months before they hit page one. For highly competitive terms in BKC or central Mumbai, sometimes 6–9 months. SEO is not fast — but a page that ranks for "seo services in mumbai" keeps bringing leads for years, with no per-click cost.',
  },
  {
    category: 'results',
    question: 'What kind of results do Mumbai businesses typically see?',
    answer:
      'Our clients typically see first-page rankings for their core service terms within 3–6 months, steady month-on-month organic traffic growth, and more enquiries from Google — not just clicks. Because Mumbai search volumes are high, moving from position 8 to position 3 on a term searched 3,600 times a month makes a real difference to your pipeline.',
  },
  {
    category: 'results',
    question: 'Can you guarantee Google rankings?',
    answer:
      'No honest SEO company in Mumbai or anywhere else can guarantee a specific ranking — Google controls that. What we can guarantee is the work that has moved hundreds of sites up: fix your technical issues, write better content than your rivals, and earn real links. If the work is done right and your site is not penalised, rankings follow. We show you exactly what we are doing every month so you can see the effort and the direction of travel.',
  },
  {
    category: 'results',
    question: 'How do you measure SEO success?',
    answer:
      'We measure what matters to your business: rankings for your Mumbai target keywords, how many people came from Google each month, how many turned into enquiries or calls, and how that compares to the previous month. We connect Google Search Console and Google Analytics to your account and give you a one-page monthly report — no inflated vanity metrics, no rank-tracking screenshots of keywords nobody searches for.',
  },
  /* ── Cost & Contracts ─────────────────────────────────────────── */
  {
    category: 'cost',
    question: 'How much do SEO services cost in Mumbai?',
    answer:
      'We do not sell fixed packages because a local café in Bandra needs very different work from a D2C brand in Lower Parel. We scope a monthly plan to what your site needs and only charge for work that actually moves your rankings. You get a free audit first, and we will tell you exactly what your site needs before you commit to anything.',
  },
  {
    category: 'cost',
    question: 'Do I have to sign a long contract?',
    answer:
      'No. We work month to month. You can pause or stop with 30 days notice. We keep clients because the rankings go up, not because they are locked in. Everything we build — your content pages, your Google Business Profile, your structured data — belongs to you and stays with you, whatever happens.',
  },
  {
    category: 'cost',
    question: 'Are your SEO packages different for Mumbai compared to other Indian cities?',
    answer:
      'The work is more intensive in Mumbai because the competition is higher. A plan that would rank you in Nashik in 3 months might take 5–6 months in Andheri. We account for that when we scope your plan. The price reflects the real effort required — not a generic package applied to every city the same way.',
  },
  {
    category: 'cost',
    question: 'What is included in your monthly Mumbai SEO plan?',
    answer:
      'Every month: keyword tracking for your Mumbai target terms, technical checks and fixes, one or two new or updated content pieces, local SEO maintenance where applicable, link-building outreach, Google Search Console and Analytics monitoring, and a one-page report with a call. We do not outsource any of this — the same small senior team does the work every month.',
  },
  /* ── Mumbai Market ────────────────────────────────────────────── */
  {
    category: 'mumbai-market',
    question: 'Which Mumbai areas do you cover for SEO?',
    answer:
      'All of Greater Mumbai: BKC, Andheri East and West, Bandra, Worli, Lower Parel, Malad, Powai, Goregaon, Dadar, Chembur, Thane, and Navi Mumbai. For single-location businesses we focus on your immediate area and city-wide terms. For multi-location businesses we build a page and Google listing for each branch.',
  },
  {
    category: 'mumbai-market',
    question: 'My business is in BKC — can you get me on the first page of Google?',
    answer:
      'BKC is one of the most competitive areas in Mumbai for finance, consulting, and professional services. The path to page one: a technically clean site, content that answers exactly what BKC buyers search for, and links from credible Indian sources that tell Google you belong there. We have done this in competitive Mumbai verticals. Book a free call and we will tell you what it would specifically take for your business.',
  },
  {
    category: 'mumbai-market',
    question: 'Which Mumbai industries benefit most from SEO?',
    answer:
      'Any Mumbai business where customers search on Google before they buy. Highest search volumes are in finance and BFSI, real estate, fashion and retail, restaurants and F&B, healthcare and clinics, IT and SaaS, and education. If you are a D2C brand, a local service business, a clinic, or a professional services firm in Mumbai, SEO is almost certainly your highest-ROI channel that you are not fully using yet.',
  },
  {
    category: 'mumbai-market',
    question: "I've been burned by an SEO company in Mumbai before. Why should I trust you?",
    answer:
      'Fair question. Most bad SEO experiences in Mumbai come from one of three things: fake link farms, a report full of numbers that never meant calls, or a team that disappeared after month three. We are a small founder-led team — Bhavesh, the founder, is still involved in every client. You get a real monthly call, a one-page report you can read in five minutes, and month-to-month billing with no lock-in. If it is not working, you leave with everything we built. We are motivated to show you results every single month.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MUMBAI_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

/* ─── Comparison table ────────────────────────────────────────────────────── */

const MUMBAI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Mumbai Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const MUMBAI_COMPARISON_ROWS = [
  {
    feature: 'Lock-in contract',
    values: ['None, month to month', '6–12 months typical', 'Varies', 'None'],
  },
  {
    feature: 'Full technical SEO',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Content written by SEO experts',
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
    feature: 'Local SEO for Mumbai areas',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ag" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Monthly call with senior people',
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

/* ─── Hero right slot — Mumbai keyword demand card ────────────────────────── */

function MumbaiKeywordCard() {
  const kws = [
    { term: 'seo company in mumbai india', vol: '8,100', kd: 24 },
    { term: 'seo services in mumbai',      vol: '3,600', kd: 28 },
    { term: 'best seo company in mumbai',  vol: '1,900', kd: 31 },
    { term: 'seo agency in mumbai',        vol: '1,300', kd: 29 },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-fj-neutral-100 px-5 py-3.5">
        <p
          className="font-fj-mono font-bold uppercase text-fj-neutral-400"
          style={{ fontSize: '10px', letterSpacing: '0.14em' }}
        >
          Mumbai · Monthly Search Demand
        </p>
        <span
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-fj-mono text-[10px] font-bold"
          style={{ background: '#F05A28', color: '#fff' }}
        >
          14,900+ / mo
        </span>
      </div>
      {/* Rows */}
      <div className="divide-y divide-fj-neutral-100">
        {kws.map((kw) => {
          const bar = Math.round((kw.kd / 60) * 100);
          const pct = Math.min(bar, 100);
          return (
            <div key={kw.term} className="px-5 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <p
                  className="font-fj-body text-[0.8125rem] font-medium leading-snug text-fj-ink"
                  style={{ maxWidth: '62%' }}
                >
                  {kw.term}
                </p>
                <div className="flex-shrink-0 text-right">
                  <p className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{kw.vol}</p>
                  <p className="font-fj-mono text-[10px] text-fj-neutral-400">searches/mo</p>
                </div>
              </div>
              {/* Difficulty bar */}
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-fj-neutral-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: kw.kd < 35 ? '#F05A28' : '#F3A07A',
                  }}
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

export default function SeoMumbaiPage() {
  return (
    <>
      <Script
        id="mumbai-seo-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="mumbai-seo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="mumbai-seo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home',   url: 'https://factoryjet.com' },
          { name: 'SEO',    url: 'https://factoryjet.com/seo' },
          { name: 'Mumbai', url: 'https://factoryjet.com/seo/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ─── 1. Hero — fits single viewport ──────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_mumbai_hero" />}
          eyebrow="SEO COMPANY IN MUMBAI, INDIA"
          headline="The SEO Company in Mumbai That Gets You to Page One and Keeps You There"
          lead="Mumbai is India's most competitive search market — 14,900+ monthly searches just for SEO help here. We deliver local SEO, technical SEO, ecommerce SEO, and link building for Mumbai businesses that want leads from Google. No long contracts."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Local + Technical + Ecommerce SEO', 'No lock-in contracts', '500+ businesses served']}
          rightSlot={<MumbaiKeywordCard />}
        />

        {/* ─── 2. Logo bar ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ─── 3. Big Three trust stats ─────────────────────────────────────── */}
        <BigThreeTrustBlock
          variant="statement"
          eyebrow="WHY MUMBAI BUSINESSES TRUST US"
          headline="India's Trusted SEO Company — 500+ Sites Ranked, 4.9 Average Rating, 25 Years Building"
        />

        {/* ─── 4. Six SEO services ──────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="SEO SERVICES IN MUMBAI"
          headline="Six SEO Services We Deliver for Mumbai Businesses"
          lead="Mumbai is not one market — it is BKC finance, Andheri logistics, Bandra retail, Worli real estate, Thane services, and Navi Mumbai tech. We put together the right combination of SEO services for your business, your area, and your budget."
          sectors={[
            {
              name: 'Local SEO for Mumbai',
              description:
                'Get your business into the top three on the Google map for Mumbai searches. We manage your Google Business Profile, fix your details everywhere online, get you more real reviews, and build area-specific pages for BKC, Andheri, Bandra, Worli, Thane, and Navi Mumbai.',
              example: 'Google map + "near me" rankings.',
            },
            {
              name: 'Technical SEO',
              description:
                'Slow pages, crawl errors, broken links, missing schema, duplicate URLs, and poor Core Web Vitals are the invisible blockers that stop you from ranking in Mumbai no matter how good your content is. We find and fix all of them.',
              example: 'Fast, crawlable, and trusted by Google.',
            },
            {
              name: 'Ecommerce SEO',
              description:
                'Product pages, category structure, Shopify and WooCommerce optimisation, and the search terms Mumbai shoppers use before they buy. We help D2C brands and online retailers in Mumbai rank higher and sell more from organic search.',
              example: 'Shopify, WooCommerce, custom stores.',
            },
            {
              name: 'Content SEO',
              description:
                'Pages that answer the real questions Mumbai buyers type into Google. We research the exact terms your customers use, write content that beats what is already ranking, and update your existing pages so they climb instead of staying stuck.',
              example: 'Keyword-matched content that converts.',
            },
            {
              name: 'Link Building',
              description:
                'Links from trusted Indian publications, trade directories, and local partners tell Google your Mumbai website deserves the first page. We earn real links — no link farms, no private blog networks. Every link we get is one you keep forever.',
              example: 'Real links from credible Indian sites.',
            },
            {
              name: 'SEO Audit',
              description:
                'Not ranking despite having a good website? Something is wrong. Our Mumbai SEO audit finds exactly what — technical problems, content gaps, missing links, on-page issues — and gives you a clear action list in plain English.',
              example: 'Clear audit report, clear action list.',
            },
          ]}
        />

        {/* ─── 5. FactoryJet vs a big Mumbai agency ─────────────────────────── */}
        <ServiceExplanation
          eyebrow="FACTORYJET VS A MUMBAI SEO AGENCY"
          headline="Most Mumbai SEO Agencies Are Too Big to Actually Care About Your Business"
          lead="A 50-person Mumbai agency sounds impressive. In practice, your account goes to the most junior person on the team — and the founder you met in the pitch has moved on to the next sale."
          body={
            <>
              <p>
                Big Mumbai agencies sell on brand but deliver on headcount. Once you sign, your account moves to a junior executive following a template. We are the opposite — a small, senior team where the same people who scope your work do the work. Every month.
              </p>
              <p>
                We also cost significantly less than a mid-size Mumbai agency, not because we do less, but because we run lean. No marble lobbies in BKC. No account management overhead. Every rupee you pay goes into{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">
                  technical fixes
                </a>
                ,{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">
                  real links
                </a>
                , and content that ranks.
              </p>
              <p>
                And unlike most{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">
                  SEO companies in India
                </a>
                , we do not lock you in. Month to month. Cancel with 30 days notice. Everything we build — your content pages, your Google Business Profile, your structured data — stays yours if you ever leave.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  How we compare
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { label: 'Team size',         fj: 'Small, senior, founder-led',   them: 'Large, junior-heavy' },
                  { label: 'Who does the work', fj: 'Same people every month',      them: 'Whoever is free' },
                  { label: 'Contract',          fj: 'Month to month, no lock-in',  them: '6–12 months typical' },
                  { label: 'You keep',          fj: 'Everything, always',           them: 'Depends on the clause' },
                ].map((row) => (
                  <div key={row.label} className="px-7 py-4">
                    <p
                      className="mb-2 font-fj-mono font-bold uppercase tracking-wide text-fj-neutral-400"
                      style={{ fontSize: '10px' }}
                    >
                      {row.label}
                    </p>
                    <div className="flex gap-3">
                      <div
                        className="flex-1 rounded-lg px-3 py-2.5"
                        style={{ background: '#F05A28', color: '#fff' }}
                      >
                        <p className="font-fj-body text-[0.8125rem] font-semibold leading-snug">
                          {row.fj}
                        </p>
                      </div>
                      <div className="flex-1 rounded-lg bg-fj-neutral-50 px-3 py-2.5">
                        <p className="font-fj-body text-[0.8125rem] leading-snug text-fj-neutral-500">
                          {row.them}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ─── 6. Why Mumbai needs SEO ──────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE MUMBAI SEO OPPORTUNITY"
          headline="Mumbai Has 14,900+ Monthly Searches for SEO Companies Alone. Most of That Traffic Goes to Three Websites."
          lead="The top three positions on a Google results page capture around 60% of all clicks. In a market as large as Mumbai, that is the difference between a full pipeline and watching a rival answer the phone. The businesses that invested in SEO 12 months ago are those three websites today."
          pillars={[
            {
              icon: '01',
              title: 'Mumbai buyers trust Google, not ads.',
              body: "76% of Indian users skip paid ads and click organic results. In a city where everyone is sceptical of the hard sell, showing up organically is a trust signal no ad budget can fully replicate.",
            },
            {
              icon: '02',
              title: 'Competition is fierce — which means the gap is large.',
              body: 'Most Mumbai businesses still have basic or broken technical SEO. A company that fixes the fundamentals — site speed, crawlability, schema — can move from page four to page one in months, not years.',
            },
            {
              icon: '03',
              title: "SEO is the only marketing channel that compounds.",
              body: "Every rupee you spend on Google Ads disappears when the budget runs out. Every page you rank, every link you earn, every review you build keeps working. In Mumbai's high-cost ad market, SEO is your unfair long-term advantage.",
            },
          ]}
        />

        {/* ─── 7. 5-step journey ────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run SEO for Mumbai Businesses, Step by Step"
          lead="We start with what is broken, fix the foundations, then build the content and links that compound over time. Here is the exact sequence."
          stages={MUMBAI_JOURNEY}
          closingNote="5 STEPS · AUDIT FIRST · MONTHLY REPORTS · NO LONG CONTRACTS"
        />

        {/* ─── 8. Mumbai neighbourhood grid ────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="MUMBAI AREAS WE COVER"
          headline="SEO Services Across Every Major Mumbai Business Zone"
          lead="From the financial towers of BKC to the street-level retail of Andheri, each Mumbai area has its own competitive landscape, buyer behaviour, and search patterns. We know the difference."
          sectors={[
            {
              name: 'BKC & Bandra',
              description:
                'Financial services, consulting, fintech, and professional services. The most competitive SEO terrain in India — strong technical SEO and real link authority are non-negotiable here.',
            },
            {
              name: 'Andheri',
              description:
                'Logistics, manufacturing, media, and service businesses across East and West Andheri. High search volume, mix of B2B and B2C intent. "Near me" and directory listings matter a lot here.',
            },
            {
              name: 'Worli & Lower Parel',
              description:
                'Real estate, luxury retail, hospitality, and D2C brands. Buyers in these corridors search with high purchase intent — the right ranking converts fast.',
            },
            {
              name: 'Thane',
              description:
                'Manufacturing, healthcare, education, and retail. Thane keywords carry lower competition than central Mumbai with strong local volume — a fast-mover opportunity for businesses in the city.',
            },
            {
              name: 'Navi Mumbai',
              description:
                'IT, logistics, APMC trade, and growing residential retail. Navi Mumbai is an underserved SEO market — most businesses here still rank on basic optimisation, which means early movers win.',
            },
            {
              name: 'Powai & Vikhroli',
              description:
                'Tech companies, startups, and enterprise brands. Buyers are digitally savvy and research-led — content quality and topical authority matter more here than anywhere else in Mumbai.',
            },
            {
              name: 'Malad & Goregaon',
              description:
                'Retail, fashion, media production, and mid-market services. "Near me" search volume in this corridor is growing fast as more buyers shift to mobile-first discovery.',
            },
            {
              name: 'Dadar & Chembur',
              description:
                'Healthcare, education, retail, and local services. Strong search volume, lower competition than the western suburbs — good ROI for businesses that act now.',
            },
          ]}
        />

        {/* ─── 9. Industries grid ───────────────────────────────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="MUMBAI INDUSTRIES WE SERVE"
          headline="SEO Services Built for the Industries That Drive Mumbai"
          lead="Every Mumbai industry has its own search patterns, buyer journey, and content requirements. We have worked across all of them."
          sectors={[
            {
              name: 'Finance & BFSI',
              description:
                'Mutual funds, insurance, lending, and wealth management. BFSI SEO in Mumbai requires E-E-A-T signals, expert author pages, and compliance-aware content that Google trusts.',
            },
            {
              name: 'Real Estate',
              description:
                'Developer websites, broker portals, and co-working spaces. Real estate SEO in Mumbai is about neighbourhood-specific landing pages, LocalBusiness schema, and fast mobile experience.',
            },
            {
              name: 'Fashion & Retail',
              description:
                'D2C brands, multi-brand retail, and fashion ecommerce. We optimise product pages, collection structure, and seasonal content for Mumbai fashion and lifestyle searches.',
            },
            {
              name: 'Food & Beverage',
              description:
                'Restaurants, cloud kitchens, cafés, and food delivery brands. F&B SEO in Mumbai means Google map rankings, review management, and "near me" content for every outlet.',
            },
            {
              name: 'Healthcare & Clinics',
              description:
                'Hospitals, clinics, dentists, labs, and health-tech startups. Healthcare SEO follows strict content credibility standards — we know which signals Google trusts in this vertical.',
            },
            {
              name: 'IT & Technology',
              description:
                'Software companies, SaaS, IT services, and AI startups. B2B tech SEO in Mumbai is content-heavy — buyers research for weeks before they contact you, and you need to be there throughout.',
            },
          ]}
        />

        {/* ─── 10. Results strip ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p
              className="font-fj-mono font-medium uppercase text-[#F05A28]"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              RESULTS
            </p>
            <h2
              className="fj-display mt-3 font-semibold text-fj-ink"
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Real SEO results for Indian businesses — Mumbai case studies on the way
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600"
              style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
            >
              We are building Mumbai-specific case studies: first-page rankings achieved, organic traffic growth month-on-month, and the lead volume change from Google. Our broader track record — 500+ businesses, 4.9-star average — is built on the same SEO fundamentals we bring to every Mumbai engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]"
                style={{ fontSize: '0.9375rem' }}
              >
                See our full portfolio →
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]"
                style={{ fontSize: '0.9375rem' }}
              >
                Read case studies →
              </a>
            </div>
          </div>
        </section>

        {/* ─── 11. Comparison table ─────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Mumbai Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to do SEO in Mumbai. Here is the honest comparison — what you actually get, what you keep, and what happens when something goes wrong."
          pullQuote={{
            stat: 'No lock-in',
            caption:
              'month-to-month billing, every deliverable stays yours — content pages, structured data, Google listings, and links — even if you leave.',
          }}
          columns={MUMBAI_COMPARISON_COLUMNS}
          rows={MUMBAI_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month. 30 days notice to pause or stop. You keep everything we build."
        />

        {/* ─── 12. Internal link hub — other SEO services ───────────────────── */}
        <IndustriesGrid
          variant="cards"
          eyebrow="MORE SEO FROM FACTORYJET"
          headline="Other SEO Services We Offer Mumbai Businesses"
          lead="Looking for a specific type of SEO? We cover the full stack — from Google map rankings to technical clean-up to ecommerce product pages."
          sectors={[
            {
              name: 'Local SEO',
              description:
                'Google map rankings, Google Business Profile management, "near me" searches, and area-specific pages across all of Greater Mumbai.',
              example: 'Explore local SEO',
              linkLabel: 'Explore local SEO',
              linkHref: '/seo/local-seo',
            },
            {
              name: 'Technical SEO',
              description:
                'Site speed, Core Web Vitals, crawl errors, schema, mobile optimisation — the foundation everything else is built on.',
              example: 'Explore technical SEO',
              linkLabel: 'Explore technical SEO',
              linkHref: '/seo/technical-seo',
            },
            {
              name: 'Ecommerce SEO',
              description:
                'Product pages, category structure, Shopify and WooCommerce, and the keywords Mumbai online shoppers actually use before they buy.',
              example: 'Explore ecommerce SEO',
              linkLabel: 'Explore ecommerce SEO',
              linkHref: '/seo/ecommerce-seo',
            },
            {
              name: 'Link Building',
              description:
                'Earning links from trusted Indian publications, trade directories, and local partners — the signal Google uses to decide who deserves the first page.',
              example: 'Explore link building',
              linkLabel: 'Explore link building',
              linkHref: '/seo/link-building',
            },
            {
              name: 'SEO Audit',
              description:
                'A plain-English audit of what is stopping your Mumbai website from ranking — with a clear action list you can hand to any developer.',
              example: 'Explore SEO audit',
              linkLabel: 'Explore SEO audit',
              linkHref: '/seo/seo-audit',
            },
            {
              name: 'SEO Hub India',
              description:
                'Our full guide to SEO services in India — what to look for, how to compare agencies, and how to tell whether it is working.',
              example: 'Back to India SEO hub',
              linkLabel: 'Back to India SEO hub',
              linkHref: '/seo',
            },
          ]}
        />

        {/* ─── 13. Testimonials ─────────────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What business owners say about working with FactoryJet"
          region="in"
        />

        {/* ─── 14. FAQ — Linear Minimal, 5 cats × 4 Qs = 20 total ─────────── */}
        <FAQ
          eyebrow="MUMBAI SEO QUESTIONS"
          headline="Every Question Mumbai Business Owners Ask About SEO, Answered Simply"
          lead="We have answered every SEO question a Mumbai business owner has asked us over 25 years. Here are the ones that come up most."
          categories={MUMBAI_FAQ_CATEGORIES}
          items={MUMBAI_FAQ_ITEMS}
        />

        {/* ─── 15. Final CTA ────────────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO RANK IN MUMBAI"
          headline="Ready to Reach Page One for Your Mumbai Customers?"
          sub="Start with a free SEO check. We will show you where you rank today, who is beating you and why, and the first three things we would fix. No cost, no obligation."
          primaryCta={{ label: 'Book a Free SEO Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month. No lock-in. Everything stays yours. Free audit included."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
