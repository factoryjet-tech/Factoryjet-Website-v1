import type { Metadata } from 'next';
import Script from 'next/script';
import { seoCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
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
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

export const metadata: Metadata = {
  title: 'SEO Company in Hyderabad | AI-Native SEO Agency | FactoryJet',
  description:
    'SEO company in Hyderabad for IT and SaaS firms, pharma and life-sciences suppliers, and local businesses. Win locally, across India, and in Google AI answers.',
  keywords: [
    'seo company in hyderabad',
    'seo agency in hyderabad',
    'seo services in hyderabad',
    'best seo company in hyderabad',
    'local seo services in hyderabad',
    'seo expert hyderabad',
    'pharma seo hyderabad',
    'saas seo hyderabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Hyderabad | AI-Native SEO Agency | FactoryJet',
    description:
      'SEO company in Hyderabad for HITEC City IT and SaaS firms, Genome Valley pharma and life-sciences suppliers, real estate, and local businesses. Win locally, across India, and in Google AI answers. No long contracts.',
    url: 'https://factoryjet.com/seo/hyderabad',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Hyderabad' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Hyderabad | FactoryJet',
    description: 'SEO company in Hyderabad for IT and SaaS firms, pharma suppliers, real estate, and local businesses. No long contracts. Honest reports.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/hyderabad', languages: seoCityAlternatesIN['hyderabad'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/hyderabad#localbusiness',
  name: 'FactoryJet SEO Company in Hyderabad',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Hyderabad for HITEC City IT and SaaS firms, Genome Valley pharma and life-sciences suppliers, real estate, and local businesses. We make your site fast and easy for Google to read, and help you win locally, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/hyderabad',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'HITEC City' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'Kokapet' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 17.385, longitude: 78.4867 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/hyderabad#service',
  serviceType: 'SEO Services in Hyderabad',
  name: 'SEO Company in Hyderabad by FactoryJet',
  description: 'SEO company in Hyderabad for IT and SaaS firms, pharma suppliers, real estate, and local businesses. Win locally, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/hyderabad',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Hyderabad' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/hyderabad#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/hyderabad',
};

const HYD_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Hyderabad site: how fast it loads, whether Google can read it, the links pointing to you, and where you stand against the HITEC City SaaS, Genome Valley pharma, or Kokapet real-estate rivals you lose deals to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Hyderabad search plan tied to sales: locality and map searches that win real-estate, healthcare, and coaching leads, supplier and distributor searches for pharma and life sciences, content searches for SaaS and IT, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code that helps Google understand your site, speed, the links between your pages, and helping Google find and read every page. Then we improve the pages that win you customers, plus your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for your buyer, plus real links from trusted Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report. The Hyderabad searches that moved, visits that turn into customers, the leads we can trace, and the next three things. (Monthly)' },
];

const HYD_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Hyderabad Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const HYD_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Hyderabad?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Hyderabad?', answer: 'Hyderabad is one of India\'s more competitive SEO markets, so we keep timelines honest. Brand searches and the top three businesses on the map move in 30 to 60 days, and tougher "service plus Hyderabad" searches in four to six months. We show early signs of progress from week one.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Hyderabad SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no HITEC City office or sales floor to pay for. AI does the research and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Hyderabad clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Hyderabad SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and the right search plan for your market, whether that is local leads, supplying all of India, or selling software. Bigger plans add content, real links, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content that pharma and life-sciences buyers trust?', answer: 'Yes. For Genome Valley and Pharma City suppliers we write clear, simple English about who you are, your approvals, and what you can supply, set out the way B2B buyers and their teams like to see it. This wins enquiries across India and abroad, and it is also what AI answers quote.' },
  { category: 'included', question: 'Can you handle SEO for an IT or SaaS firm?', answer: 'Yes. For HITEC City and Gachibowli IT and SaaS firms, we build the content, product, and category pages your buyers search for across India and the world, and get you named in Google AI answers, which is where more and more software research now starts.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that sounds human and answers the Hyderabad buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Many Hyderabad searches now show an AI answer before anyone clicks. We lay out content as clear questions and answers, add the hidden code that helps Google understand your site, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan, not an extra.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can find, read, and trust. On-page SEO is what people see on each page, like headings, words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Most Hyderabad searches happen on a phone, so we make your site quick on mobile as part of the technical work. A fast site both ranks better and turns more visitors into customers, so it is never an optional extra.' },
  { category: 'local', question: 'Can you do local SEO services in Hyderabad for real estate, clinics, or coaching?', answer: 'Yes, and it is the most winnable wedge in the city. For real-estate brands, hospitals and clinics, and coaching centres we work on your free Google listing, the top three businesses on the map, and locality searches for Gachibowli, Kondapur, and Kokapet. This is the bread-and-butter local SEO most Hyderabad businesses search for.' },
  { category: 'local', question: 'Do you handle pharma and life-sciences SEO near Genome Valley and Pharma City?', answer: 'Yes. Pharma, bulk-drug, and life-sciences units supply buyers across India and abroad, so we go after supplier and distributor searches, build regulatory and trust content, and make sure you have a fast, well-built site that buyers and AI engines can read and quote.' },
  { category: 'local', question: 'Can you do SEO for a HITEC City or Gachibowli SaaS firm?', answer: 'Yes. HITEC City and Gachibowli hold one of India\'s biggest IT and SaaS belts, and these firms buy SEO as a core lead channel. We go after the content and product searches your buyers use across India and the world, and get you named in Google AI answers where software research now starts.' },
  { category: 'local', question: 'Do you cover the new growth corridors like Kokapet and the Financial District?', answer: 'Yes. We treat Gachibowli, Kokapet, Kondapur, and the Financial District as separate local targets, with their own map work, free Google listing, and locality content for each area where you have a presence or serve customers.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Hyderabad searches that moved and why, visits that turn into customers, the leads we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: "By leads and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google's free tools properly, and report on the numbers that map to your Hyderabad sales." },
  { category: 'reporting', question: 'Who works on my Hyderabad account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Hyderabad?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case as the best SEO company in Hyderabad: the same engineers who build fast websites run the SEO services in Hyderabad clients pay for, with a clear monthly report and no long contract. The best SEO services in Hyderabad pass three checks: a plan in simple words, results with real numbers, and the price in writing. We also run local SEO services in Hyderabad — the best local SEO services in Hyderabad manage your Google Business Profile every week, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Hyderabad or work with an agency?',
    answer:
      'Both can work. If you hire SEO expert in Hyderabad alone, you get one set of skills — and SEO needs technical work, writing, and links together. A small senior team gives you all three for a similar monthly cost. Whichever way you go, ask for one example with real numbers before you pay.',
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

const HYD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Hyderabad Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const HYD_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'SEO for selling abroad in simple English', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Top three on the map and free Google listing', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function HyderabadSeoPage() {
  return (
    <>
      <Script id="hyd-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="hyd-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="hyd-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Hyderabad', url: 'https://factoryjet.com/seo/hyderabad' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · HYDERABAD"
          headline="The SEO Company in Hyderabad Built for the New, AI-First Google"
          lead="Hyderabad has three search markets in one city. SaaS and IT firms in HITEC City sell across India and the world. Pharma and life-sciences units near Genome Valley supply buyers everywhere. Real-estate, healthcare, and coaching businesses serve the city. One generic SEO plan wins none of them. FactoryJet matches your SEO to the buyer you actually sell to, and gets you named in Google AI answers, not just ranked."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Top 3 on the map" badgeCity="Hyderabad" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO that wins in Hyderabad." />

        <CityContextSection
          eyebrow="HYDERABAD MARKET"
          headline="Why SEO in Hyderabad Is a Different Game"
          leadParagraphs={[
            "Hyderabad, often called Cyberabad, is one of India's most competitive search markets. It runs on a huge IT and SaaS belt in HITEC City and Gachibowli, a world-class pharma and life-sciences cluster around Genome Valley and Pharma City, fast-growing real estate, and a deep base of local businesses. Each one chases a different kind of search.",
            "That is exactly why a generic SEO plan fails in Hyderabad. A Gachibowli SaaS firm chasing leads across the world, a Genome Valley bulk-drug supplier selling to businesses, and a Kokapet real-estate brand pulling in local buyers are after completely different searches, buyers, and places. Winning means matching your SEO to your own market and buyer, not running the same plan agencies sell to everyone.",
            "The Hyderabad businesses that win on Google are rarely the biggest spenders. They are the ones with a faster site, content that answers the buyer's real question, and a place in Google AI answers their rivals have not even started on. That gap is where FactoryJet works.",
          ]}
          stats={[
            { value: '₹2.41L Cr', label: "IT exports: Hyderabad is India's #2 IT exporter, 1,500+ firms", sourceUrl: 'https://www.india-briefing.com/', sourceLabel: 'India Briefing' },
            { value: '~1/3', label: "of India's pharma output and global vaccine doses; Genome Valley 200+ firms", sourceUrl: 'https://www.cbre.co.in/', sourceLabel: 'CBRE' },
            { value: '355+ GCCs', label: "India's #2 GCC hub, with 200,000+ professionals", sourceUrl: 'https://www.jll.com/', sourceLabel: 'JLL' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · HYDERABAD"
          headline="What 'SEO' Actually Means for a Hyderabad Business"
          lead="Hyderabad has three search markets in one city. Local businesses serve the city, pharma and life-sciences units supply India and the world, and SaaS and IT firms sell software. Each one searches differently, so we match your plan to the buyer you actually sell to."
          body={
            <>
              <p>
                For Hyderabad&apos;s real-estate brands, hospitals and clinics, and coaching centres, SEO is about
                local leads. You win the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">top three
                businesses on the map</a> and your free Google Business Profile, plus locality searches for
                Gachibowli, Kondapur, and Kokapet. This is the most winnable wedge in the city.
              </p>
              <p>
                For Hyderabad&apos;s pharma, bulk-drug, and life-sciences units around Genome Valley and Pharma City,
                the game is supplying businesses across India and the world. You win with supplier and distributor
                searches, regulatory trust content, and{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">a fast, well-built site</a> that
                buyers and AI engines can read. For SaaS, IT services, and online brands, it is content,{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">product and category pages</a>, and
                AI-answer visibility.
              </p>
              <p>
                Every FactoryJet Hyderabad plan covers the technical side, the right search plan for your market, and
                Google AI answers as standard, then adds content and real{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and
                link we build.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Three markets. One plan.</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Serve the city', need: 'Top three on the map, Google Business Profile, locality searches', area: 'REAL ESTATE · HEALTHCARE · COACHING', colour: '#F05A28' },
                  { type: 'Supply India and the world', need: 'Supplier searches, regulatory trust content, fast site', area: 'PHARMA · BULK DRUGS · LIFE SCIENCES', colour: '#F3A07A' },
                  { type: 'Sell software and D2C', need: 'Content, product pages, AI-answer visibility', area: 'SAAS · IT SERVICES · ONLINE BRANDS', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500 mb-1" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.area}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Hyderabad Businesses Choose FactoryJet for SEO"
          lead="Hyderabad SEO agencies sell 12-month contracts, junior managers, and 40-page reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is honest about what SEO can and cannot do in one of India's toughest markets."
          pillars={[
            { icon: '01', title: 'AI plus senior people, built for AI search.', body: 'Hyderabad searches more and more show an AI answer before anyone clicks. We get you ready for AI search from day one with clear, well-structured content, whether you sell SaaS from HITEC City or supply pharma from Genome Valley, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No spammy tricks. Ever.', body: 'No spammy link networks, no bought links, no throwaway pages. In a market watched as closely as Hyderabad, the agencies promising rank-in-30-days are the ones who get clients punished by Google. We build SEO that lasts.' },
            { icon: '03', title: 'Month to month. Reports you read.', body: 'One page a month. The Hyderabad searches that moved, the visits that turned into customers, the leads we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Hyderabad SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={HYD_JOURNEY} closingNote="5 STEPS · AI PLUS SENIOR PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · LOCAL + ALL-INDIA + GLOBAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Hyderabad SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and leads, from live FactoryJet work in Hyderabad and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Hyderabad Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Hyderabad. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the local, all-India, and AI-answer plan most Hyderabad agencies do not run.' }}
          columns={HYD_COMPARISON_COLUMNS}
          rows={HYD_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="HYDERABAD × SEO"
          headline="SEO for Hyderabad's Key Industries"
          lead="From HITEC City SaaS to Genome Valley pharma to real-estate growth corridors, Hyderabad's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'IT, SaaS & Startups (HITEC City, Gachibowli)', description: "One of India's biggest IT and SaaS belts. Firms buy SEO as a core lead channel: content that answers the buyer question, product pages, and a spot in Google AI answers." },
            { name: 'Pharma, Bulk Drugs & Life Sciences (Genome Valley, Pharma City)', description: 'Suppliers ship across India and abroad. Supplier and distributor searches, regulatory trust content, and a fast site that B2B buyers and AI engines can read.' },
            { name: 'Real Estate & Construction', description: "One of Hyderabad's biggest local-search categories. Project-level landing pages, locality searches for Gachibowli, Kokapet, and the Financial District, and a strong free Google listing." },
            { name: 'Healthcare & Diagnostics', description: 'Hospitals, clinics, and diagnostic labs need the top three businesses on the map, a strong free Google listing, and clear treatment content patients search for.' },
            { name: 'Education, Coaching & Edtech', description: 'Coaching centres and edtech firms win course and admission searches, a site that works well on a phone, and the reviews and brand trust that bring in students.' },
            { name: 'D2C, Retail & Professional Services', description: 'Online brands, retailers, and CA, legal, and consulting firms need product and category pages, local-map work, and trust-building content for their buyers.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Hyderabad Businesses" lead="The questions we answer on every Hyderabad SEO call, here in plain words." categories={HYD_FAQ_CATEGORIES} items={HYD_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Hyderabad?"
          sub="Your buyers are choosing software in HITEC City, sourcing bulk drugs from Genome Valley, and looking for a home in Kokapet, and they all start on Google or AI. Start with a free check, and we will show you exactly where you stand, whether you sell SaaS from Gachibowli, supply pharma from Pharma City, or run a clinic in Banjara Hills."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
