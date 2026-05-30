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
  title: 'SEO Company in Pune | AI-Native SEO Agency | FactoryJet',
  description:
    'SEO company in Pune for IT firms, car-part makers, pharma, coaching classes, and online brands. Win abroad, across India, and in Google AI answers. No lock-in.',
  keywords: [
    'seo company in pune',
    'seo agency in pune',
    'seo services in pune',
    'best seo company in pune',
    'best seo agency in pune',
    'seo expert in pune',
    'seo consultant in pune',
    'pune seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Pune | AI-Native SEO Agency | FactoryJet',
    description:
      'SEO company in Pune for IT firms, car-part makers, pharma, coaching classes, and online brands. Win abroad, across India, and in Google AI answers. No lock-in. Serving Hinjewadi, Kharadi, Chakan, and Koregaon Park.',
    url: 'https://factoryjet.com/seo/pune',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Pune' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Pune | FactoryJet',
    description: 'SEO company in Pune for IT, car parts, pharma, coaching, and online brands. Win abroad, across India, and in Google AI answers. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/pune', languages: seoCityAlternatesIN['pune'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/pune#localbusiness',
  name: 'FactoryJet SEO Company in Pune',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Pune for IT firms, car-part makers, pharma, coaching classes, and online brands. We fix your site and help you win abroad, across India, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/pune',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Hinjewadi' },
    { '@type': 'City', name: 'Kharadi' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Chakan' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 18.5204, longitude: 73.8567 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/pune#service',
  serviceType: 'SEO Services in Pune',
  name: 'SEO Company in Pune by FactoryJet',
  description: 'SEO company in Pune for IT firms, car-part makers, pharma, coaching classes, and online brands. Win abroad, across India, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/pune',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Pune' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/pune#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/pune',
};

const PUN_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Pune site: how fast it loads, whether Google can read it, the links pointing to you, and where you stand against the Hinjewadi, Chakan, or Koregaon Park rivals you lose to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Pune search plan tied to sales: searches that win work from abroad for IT and pharma, the part searches that win orders across India for car parts and engineering, admissions searches for schools and colleges, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code, speed, and links between pages. Then we improve the pages that win you customers, plus your skill or product pages and your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for business buyers and shoppers alike, plus real links from genuine Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report. The Pune searches that moved, visits that turn into customers, the leads and enquiries we can trace, and the next three things. (Monthly)' },
];

const PUN_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Pune Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const PUN_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Pune?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Pune?', answer: 'Brand and local-map searches move in 30 to 60 days. Tough searches from abroad, business searches, or admissions searches take 4 to 6 months. Pune is less crowded than Mumbai or Bangalore, so good SEO often shows results faster here. We show early signs of progress from week one.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Pune SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no big office or sales floor to pay for. AI does the research, planning, and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Pune clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Pune SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and the right search plan for your market, whether that is selling abroad, winning across India, bringing in students, or local. Bigger plans add content, real links, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you do B2B and capability content for IT and engineering firms?', answer: 'Yes. For IT, car-part, and engineering firms we build pages about your skills, services, and products in the words that big buyers use. This is what gets you on the shortlist, and it is also what Google AI answers quote.' },
  { category: 'included', question: 'Can you do ecommerce SEO for a Pune D2C brand?', answer: 'Yes. Smart online brands in Koregaon Park and Kalyani Nagar sell online and locally. We sort out category and product pages, add the hidden product details Google reads, and build helpful buying guides. We work on Shopify and custom stores.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that sounds human, whether the reader is a business buyer or a shopper, and answers the question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. More and more Pune searches now show an AI answer before anyone clicks. We lay out content as clear questions and answers, add the hidden code that helps Google understand your site, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can read and trust, and the hidden code that helps Google understand your site. On-page SEO is what people see on each page, like headings, words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or Next.js site?', answer: 'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. A fast site both ranks better and turns more visitors into customers, so it is part of the technical work. We make your site quick on mobile, since most searches in India happen on a phone, even for business research.' },
  { category: 'local', question: 'Can you do SEO for a Pune IT firm or GCC delivering to global clients?', answer: 'Yes. For IT firms in Hinjewadi and Kharadi we mix searches that win work from clients abroad with content that shows you are a real, trusted Pune firm. We go after searches about the services and skills buyers look for, and write the proof and case studies big buyers expect. Tough searches from abroad take 4 to 6 months.' },
  { category: 'local', question: 'Do you handle pan-India B2B SEO for an auto-component maker in Chakan or PCMC?', answer: 'Yes. Car parts and engineering work is a strong fit. We go after the part and skill searches that big carmakers and their buyers use, build clear product and spec-sheet pages, and plan for the long, careful way that business buyers shop. We cover supplier sites in Chakan, Talegaon, and Pimpri-Chinchwad.' },
  { category: 'local', question: 'Can you rank a Pune coaching institute or college for a national student catchment?', answer: 'Yes. Pune draws students from all over India and abroad, so we go after searches about courses, results, and admissions, make sure everything works well on a phone, and build the reviews and rankings that bring in students. This is all-India SEO, not just local.' },
  { category: 'local', question: 'Which Pune areas do you target?', answer: 'We match your SEO to where your buyers are. IT in Hinjewadi, Wakad, and Kharadi; cars and factories in Chakan, Talegaon, and PCMC; smart online brands and hotels in Koregaon Park, Kalyani Nagar, and Viman Nagar; and schools and colleges across the city. Naming your area in your site’s hidden details helps you show up for nearby searches.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Pune searches that moved and why, visits that turn into customers, the leads and enquiries we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By leads, enquiries, and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your Pune sales.' },
  { category: 'reporting', question: 'Who works on my Pune account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PUN_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const PUN_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Pune Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const PUN_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'Plan for abroad, India, and local', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real links, no spammy tricks', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function PuneSeoPage() {
  return (
    <>
      <Script id="pun-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="pun-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="pun-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Pune', url: 'https://factoryjet.com/seo/pune' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · PUNE"
          headline="The SEO Company in Pune for IT, Auto, Education, and Online Brands"
          lead="Pune runs on three engines. IT firms in Hinjewadi and Kharadi deliver to clients all over the world. Car-part makers in Chakan and PCMC supply carmakers across India and abroad. The Oxford of the East draws students from every state, and smart online brands fill Koregaon Park. Each one searches Google in a different way. We match your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Global + B2B" badgeCity="Pune" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO built for Pune's economy." />

        <CityContextSection
          eyebrow="PUNE MARKET"
          headline="Why SEO in Pune Has to Match the City's Engines"
          leadParagraphs={[
            "Pune runs on three different engines: IT firms in Hinjewadi and Kharadi, a car-parts and engineering cluster in Chakan and Pimpri-Chinchwad, and one of India's biggest groups of colleges and coaching classes. Each engine searches Google in a completely different way, and most SEO agencies use the same one-size-fits-all plan for all of them.",
            "A Hinjewadi IT firm delivers to clients around the world and needs to be found both abroad and at home. A car-part maker in Chakan supplies carmakers across India and abroad and needs the part searches that business buyers use. A coaching class or college draws students from across India and even overseas and needs admissions searches. A Koregaon Park online brand needs online-store SEO and the local map. Matching the plan to the engine is the whole job.",
            "Pune is less crowded than Mumbai or Bangalore, which means good SEO often shows results faster here. The businesses that move now, while rivals run the same generic plans, grab that head start. That is where FactoryJet works.",
          ]}
          stats={[
            { value: '800+', label: 'IT companies in the Hinjewadi Rajiv Gandhi Infotech Park', sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
            { value: '350+', label: 'global capability centres across Pune (Kharadi, Hinjewadi, Baner)', sourceUrl: 'https://nasscom.in/', sourceLabel: 'NASSCOM' },
            { value: 'Auto hub', label: 'the Chakan-PCMC corridor, with 750+ component makers and major OEMs', sourceUrl: 'https://autoclusterpune.org/', sourceLabel: 'Auto Cluster Pune' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · PUNE"
          headline="What 'SEO' Actually Means for a Pune Business"
          lead="Pune sells to three markets. IT and pharma deliver to the world, car parts and engineering supply India, and schools and online brands serve students from across the country and the city. Each searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Pune&apos;s IT firms and pharma exporters in Hinjewadi, Kharadi, and beyond, SEO is about reach and
                trust. Big buyers and regulators research for weeks before they decide. You win by showing up for the
                searches about your services, skills, and products, by publishing case studies and proof of what you can
                do, and by being trusted both abroad and as a real Pune firm.
              </p>
              <p>
                For Pune&apos;s car-part and engineering makers in Chakan, Talegaon, and PCMC, the game is selling across
                India to other businesses. Big carmakers and their buyers search by part, by component, and by skill. For
                coaching classes and colleges, it is searches about admissions. For smart online brands in Koregaon Park,
                it is{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">online-store SEO</a> and the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">top three businesses on the map</a>.
              </p>
              <p>
                Every FactoryJet Pune plan covers{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">the technical side</a>, the right search plan for your market, and Google
                AI answers as standard, then adds content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and link we
                build.
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
                  { type: 'Deliver to the world', need: 'Be found abroad, show your skills', area: 'IT · GCCs · PHARMA (HINJEWADI · KHARADI)', colour: '#F05A28' },
                  { type: 'Supply India', need: 'Part searches that business buyers use', area: 'AUTO · ENGINEERING (CHAKAN · PCMC)', colour: '#F3A07A' },
                  { type: 'Serve students and the city', need: 'Admissions searches, online stores, the local map', area: 'EDUCATION · D2C (KOREGAON PARK)', colour: '#0F0F12' },
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
          headline="Why Pune Businesses Choose FactoryJet for SEO"
          lead="Pune SEO agencies sell 12-month contracts, junior managers, and reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is built around Pune's real engines: IT, cars, education, and smart online brands."
          pillars={[
            { icon: '01', title: 'AI plus real people, built for the new Google.', body: 'More and more Pune searches now show an AI answer before anyone clicks. We get you ready for AI search from day one with clear, well-structured content, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link tricks, no bought links, no throwaway pages. We build SEO that lasts, with a solid technical base, real content, and real links from trusted sites, so you rank next year, not just next quarter.' },
            { icon: '03', title: 'Month to month. Reports you read.', body: "One page a month. The Pune searches that moved, the visits that turned into customers, the leads we can trace, and the next three things. And because Pune is less crowded, your budget goes further here than in Mumbai or Bangalore." },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Pune SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={PUN_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · ABROAD + INDIA + ADMISSIONS + LOCAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Pune SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and enquiries, from live FactoryJet work in Pune and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating, including our Pune client Formative Concepts.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Pune Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Pune. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the abroad, India-wide, and admissions plan most Pune agencies do not run.' }}
          columns={PUN_COMPARISON_COLUMNS}
          rows={PUN_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="PUNE × SEO"
          headline="SEO for Pune's Key Industries"
          lead="From Hinjewadi IT to Chakan car parts to the city's colleges, Pune's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'IT & Global Capability Centres', description: 'Firms in Hinjewadi and Kharadi delivering to clients around the world. Searches about your services and skills, plus content that shows you are a real, trusted Pune firm with case studies to prove it.' },
            { name: 'Cars & Car Parts', description: 'Carmakers and their suppliers in Chakan, Talegaon, and PCMC. Searches about parts and skills for the long, careful way that business buyers across India and abroad shop.' },
            { name: 'Pharma & Life Sciences', description: 'Pune pharma and vaccine makers selling abroad. Content that shows you follow the rules and can deliver, simple English searches, and being named by Google AI answers for buyers and procurement teams.' },
            { name: 'Education & Coaching', description: 'The Oxford of the East: colleges, universities, and coaching classes drawing students from every state. Searches about courses, results, and admissions, all built for the phone first.' },
            { name: 'Online Brands & Premium Retail', description: 'Brands in Koregaon Park, Kalyani Nagar, and Viman Nagar. Online-store and brand SEO, the hidden product details Google reads, buying guides, and the top three businesses on the map for high-end searches.' },
            { name: 'Heavy Engineering & Manufacturing', description: 'The Kirloskar, Thermax, and Forbes Marshall heritage. Searches that win orders across India and abroad, content that shows your skills, and SEO aimed at company buyers.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Pune Businesses" lead="The questions we answer on every Pune SEO call, here in plain words." categories={PUN_FAQ_CATEGORIES} items={PUN_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Pune?"
          sub="Pune is less crowded than Mumbai or Bangalore, which means good SEO ranks faster and costs less here. The businesses that move now, while rivals run the same generic plans, grab that head start. Start with a free check, and we will show you exactly where you stand, whether you deliver IT from Hinjewadi, supply parts from Chakan, or run a college drawing students from every state."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
