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
  title: 'SEO Company in Bangalore | AI-Native SEO Agency | FactoryJet',
  description:
    'SEO company in Bangalore for software (SaaS), IT, startups, and online brands. Win across India, abroad, and in Google AI answers. No lock-in. Serving Koramangala, HSR Layout, Whitefield, and Indiranagar.',
  keywords: [
    'seo company in bangalore',
    'seo agency in bangalore',
    'seo services in bangalore',
    'best seo company in bangalore',
    'best seo agency in bangalore',
    'seo expert in bangalore',
    'saas seo bangalore',
    'top seo company in bangalore',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Bangalore | AI-Native SEO Agency | FactoryJet',
    description:
      'SEO company in Bangalore for software (SaaS), IT, startups, and online brands. Win across India, abroad, and in Google AI answers. No lock-in. Serving Koramangala, HSR Layout, Whitefield, and Indiranagar.',
    url: 'https://factoryjet.com/seo/bangalore',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Bangalore' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Bangalore | FactoryJet',
    description: 'SEO company in Bangalore for software (SaaS), IT, startups, and online brands. Win across India, abroad, and in Google AI answers. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/bangalore', languages: seoCityAlternatesIN['bangalore'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/bangalore#localbusiness',
  name: 'FactoryJet SEO Company in Bangalore',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Bangalore for software (SaaS), IT services, startups, and online brands. We fix your site and help you win across India, abroad, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/bangalore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'HSR Layout' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500', bestRating: '5', worstRating: '1' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/bangalore#service',
  serviceType: 'SEO Services in Bangalore',
  name: 'SEO Company in Bangalore by FactoryJet',
  description: 'SEO company in Bangalore for software (SaaS), IT, startups, and online brands. Win across India, abroad, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/bangalore',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Bangalore' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does SEO cost in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' } },
    { '@type': 'Question', name: 'Can you rank a Bangalore software (SaaS) brand against funded and US rivals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is what we are best at here. We go after the searches where buyers compare one tool with another, build pages that win those searches, and earn real links from trusted sites, so a small Bangalore software brand can beat better-funded rivals. It takes three to six months of steady work, but the compare searches bring in ready-to-buy visitors sooner.' } },
    { '@type': 'Question', name: 'Do you do SEO for a Bangalore online brand or store?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bangalore online brands sell all over India, so we go after all-India demand. We sort out category and product pages, the hidden product details Google reads, big menus that can confuse Google, and buying guides. We work on Shopify and custom stores.' } },
    { '@type': 'Question', name: 'Do you cover the Whitefield and Outer Ring Road IT belt?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We set up local targeting and your free Google listing for Whitefield, the Outer Ring Road, Electronic City, and the Koramangala and HSR startup belt, mixing local trust with the worldwide reach IT firms need.' } },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/bangalore#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/bangalore',
};

const BLR_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Bangalore site: how fast it loads, whether Google can find and read every page, the links pointing to you, and where you stand against the Koramangala, HSR, or Whitefield rivals you lose to, including the funded and US ones. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Bangalore search plan tied to sales: the compare searches for software brands, category searches for online brands, all-India and worldwide for IT firms, and the Google AI answers your funded rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code, speed, links between pages, and helping Google find every page. Then we improve the pages that win you customers, the compare pages, and your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for your buyer, whether that is a founder or a developer, plus real links from genuine Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report your CEO will actually read. The searches that moved, visits that turn into customers, the demos and leads we can trace, and the next three things. (Monthly)' },
];

const BLR_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Bangalore Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const BLR_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Bangalore?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Bangalore?', answer: 'Brand and local-map searches usually move in 30 to 60 days. Tough software and category searches take three to six months, because you are up against well-funded startups with their own in-house teams. We show early signs of progress from week one, so you can see things heading the right way before the sales arrive.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Bangalore SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no Koramangala office or sales floor to pay for. AI does the research and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Bangalore clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Bangalore SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and your free Google listing. Bigger plans add content, the compare pages software brands need, real links from trusted sites, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you do software (SaaS) and compare-page SEO?', answer: 'Yes, and it is one of the things we are best at in Bangalore. We build pages that win the searches where buyers compare one tool with another, plus pages about which tools you connect with, and guides for people who are close to buying. This is where software brands actually earn customers from Google, and most local agencies do not do it well.' },
  { category: 'included', question: 'Can you do SEO for a Bangalore online brand or store?', answer: 'Yes. Bangalore online brands sell all over India, so we go after all-India demand. We sort out category and product pages, the hidden product details Google reads, big menus that can confuse Google, and buying guides. We work on Shopify and custom stores.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that sounds human, holds up for a founder or developer reader, and answers the buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Many Bangalore and "best tool" searches now show an AI answer that names a few sources and skips the rest. We lay out content as clear questions and answers, add the hidden code that helps Google understand your site, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your product. It is part of every plan, not an extra.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can find, read, and trust. On-page SEO is what people see on each page, like headings, words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my software (SaaS), Next.js, or WordPress site?', answer: 'Yes, we work with whatever you have. Modern software sites built with a lot of JavaScript can be hard for Google to read, which is often why a good product is not showing up; we know how to spot and fix that. We know WordPress and Shopify inside out too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. A fast site both ranks better and turns more visitors into customers, so it is part of the technical work, not an optional extra. We make your site quick on mobile. Where the way your site is built is causing deeper speed problems, we tell you honestly what the fix is.' },
  { category: 'local', question: 'Can you rank a Bangalore software (SaaS) brand against funded and US rivals?', answer: 'Yes, and it is what we are best at here. We go after the searches where buyers compare one tool with another, build pages that win those searches, and earn real links from trusted sites, so a small Bangalore software brand can beat better-funded rivals. It takes three to six months of steady work, but the compare searches bring in ready-to-buy visitors sooner.' },
  { category: 'local', question: 'Do you do SEO for a Bangalore online brand or store?', answer: 'Yes. Bangalore online brands, like the ones based in Indiranagar and Koramangala, sell all over India, so we go after all-India demand. We sort out category and product pages, the hidden product details Google reads, buying guides, and pages built to turn visits into sales. We work on Shopify and custom stores.' },
  { category: 'local', question: 'Do you cover the Whitefield and Outer Ring Road IT belt?', answer: 'Yes. We set up local targeting and your free Google listing for Whitefield, the Outer Ring Road, Electronic City, and the Koramangala and HSR startup belt, mixing local trust with the worldwide reach IT firms need.' },
  { category: 'local', question: 'Do you do local SEO for Bangalore real estate and local services?', answer: 'Yes. Real estate, clinics, and local services are the real local-map play in Bangalore. We set up your free Google listing, build pages for each area, and help you collect reviews, so you win the "near me" and area searches.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Bangalore searches that moved and why, visits that turn into customers, the demos and leads we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By demos, leads, and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your sales.' },
  { category: 'reporting', question: 'Who works on my Bangalore account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },
];

const BLR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Bangalore Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const BLR_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'Software (SaaS) and compare-page SEO', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real links, no spammy tricks', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function BangaloreSeoPage() {
  return (
    <>
      <Script id="blr-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="blr-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="blr-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Bangalore', url: 'https://factoryjet.com/seo/bangalore' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · BANGALORE"
          headline="The SEO Company in Bangalore That Brings Leads, Not Just Rankings"
          lead="Bangalore is India's startup and IT capital, and the rivals here are well funded. Koramangala software brands fight HSR startups and US rivals for the same founder and developer searches. Whitefield IT firms work for clients worldwide. Online brands in Indiranagar sell all over India. You win here by being sharper, not by spending more. We match your SEO to the market you actually sell to, with monthly reports your CEO will actually read."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Beats funded rivals" badgeCity="Bangalore" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO that beats funded rivals in Bangalore." />

        <CityContextSection
          eyebrow="BANGALORE MARKET"
          headline="Why SEO in Bangalore Is About Beating Funded Rivals, Not Just the Street"
          leadParagraphs={[
            "Bangalore is India's startup and IT capital, and that changes the SEO game. It is the country's number-one hub for global tech offices, home to roughly 16,000 startups and a third of India's billion-dollar startups, and the place where every big chip and software company has a design team. Your rivals are not small local businesses, they are funded companies with their own content and growth teams chasing the exact searches you need.",
            "So a Bangalore business mostly sells to the world or to all of India, not to the street. An IT services firm works for clients worldwide. A software brand competes on the searches where buyers compare one tool with another. An online brand ships all over India. Only real estate and local services live on the local map. Winning on Google here is about being sharper, not spending more.",
            "The Bangalore companies that win on Google do the work funded rivals are too busy to do well: a cleaner, faster site, real compare pages, and a place in Google AI answers. That is exactly where FactoryJet works.",
          ]}
          stats={[
            { value: '~34%', label: "of India's global capability centres are in Bangalore", sourceUrl: 'https://zinnov.com/', sourceLabel: 'Zinnov' },
            { value: '~16,000', label: 'startups and roughly a third of India unicorns', sourceUrl: 'https://www.startupindia.gov.in/', sourceLabel: 'Startup India' },
            { value: '$64.6B', label: "India's GCC export revenue (FY24), led by Bangalore engineering", sourceUrl: 'https://nasscom.in/', sourceLabel: 'NASSCOM' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · BANGALORE"
          headline="What 'SEO' Actually Means for a Bangalore Business"
          lead="Bangalore sells to three different markets. IT firms build for clients worldwide; software and online brands sell to the world and across India; real estate and local services serve the city. Each searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Bangalore&apos;s IT services firms on the Outer Ring Road, in Whitefield, and Electronic City, SEO
                is about showing what you can do and that you deliver worldwide. You win by showing up for service
                searches, publishing case studies and clear technical content that earns the trust of big clients, and
                mixing worldwide reach with local trust.
              </p>
              <p>
                For Bangalore&apos;s software and online brands in Koramangala, HSR Layout, and Indiranagar, the game is
                compare and category searches. Software buyers weigh one tool against another before they book a demo,
                so you win with &quot;X vs Y&quot; and &quot;best X for Z&quot; pages. Online brands win with all-India
                category and product searches and pages built to turn visits into sales. For real estate and local
                services, it is the local map and Google Maps.
              </p>
              <p>
                Every FactoryJet Bangalore plan covers the technical side, local search, and Google AI answers as
                standard, then adds compare pages, product content, and links over time. You keep every page, plan, and
                link we build, and the reports are written for a founder, not an analyst.
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
                  { type: 'Build for the world', need: 'Show what you do, reach clients worldwide', area: 'IT SERVICES · GLOBAL TECH OFFICES (ORR · WHITEFIELD)', colour: '#F05A28' },
                  { type: 'Sell to the world and India', need: 'Compare-page SEO, online-store SEO, more sales', area: 'SOFTWARE · ONLINE BRANDS (KORAMANGALA · HSR · INDIRANAGAR)', colour: '#F3A07A' },
                  { type: 'Serve Bangalore', need: 'The local map, Google Maps, "near me" searches', area: 'REAL ESTATE · LOCAL SERVICES', colour: '#0F0F12' },
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
          headline="Why Bangalore Businesses Choose FactoryJet for SEO"
          lead="Bangalore SEO agencies sell 12-month contracts, junior managers, and reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is built to beat the funded teams you are up against."
          pillars={[
            { icon: '01', title: 'AI plus real people, built for the new Google.', body: 'Bangalore "best tool" and compare searches more and more show a Google AI answer that names a few sources and skips the rest. We get you ready for AI search from day one so your product gets named, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link networks, no bought links, no throwaway pages. We build SEO that lasts, with a solid technical base, real content, and real links from trusted sites, so you keep ranking after funded rivals burn out their shortcuts.' },
            { icon: '03', title: 'Month to month. Reports your CEO reads.', body: 'One page a month. The Bangalore searches that moved, the visits that turned into customers, the demos and leads we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Bangalore SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={BLR_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · COMPARE PAGES + LOCAL MAP + GOOGLE AI ANSWERS" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Bangalore SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and demos, from live FactoryJet work in Bangalore and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Bangalore Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Bangalore. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the compare-page and Google AI answer plan most Bangalore agencies do not run.' }}
          columns={BLR_COMPARISON_COLUMNS}
          rows={BLR_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="BANGALORE × SEO"
          headline="SEO for Bangalore's Key Industries"
          lead="From Koramangala software to Whitefield IT to Indiranagar online brands, Bangalore's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Software (SaaS)', description: 'Koramangala and HSR product companies. SEO for the searches where buyers compare one tool with another, pages about which tools you connect with, and clear technical content that earns developer and founder trust.' },
            { name: 'IT Services & Global Tech Offices', description: 'Outer Ring Road, Whitefield, and Electronic City firms working for clients worldwide. Service searches and worldwide reach, plus local trust and case-study content.' },
            { name: 'Online Brands & Stores', description: 'Indiranagar and Koramangala brands selling all over India. Category and product SEO, the hidden product details Google reads, buying guides, and pages built to turn visits into sales.' },
            { name: 'Fintech', description: 'Bangalore fintech competing on trust and category. Content that shows you know your stuff and can be trusted, compare pages, and trust signals built for buyers who take their time to decide.' },
            { name: 'Biotech & HealthTech', description: 'Electronic City life-sciences and health software. Content that shows what you can do for buyers abroad and across India, plus local SEO for clinics.' },
            { name: 'Real Estate & Local Services', description: 'Developers, brokers, clinics, and local services. The real local-map play: your free Google listing, pages for each area, and "near me" searches.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Bangalore Businesses" lead="The questions we answer on every Bangalore SEO call, here in plain words." categories={BLR_FAQ_CATEGORIES} items={BLR_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Beat Funded Rivals in Bangalore?"
          sub="In Bangalore you are not up against the shop down the street, you are up against funded teams going after your exact searches. The way to win is to be sharper, not to spend more. Start with a free check, and we will show you exactly where you stand against your Koramangala, HSR, or Whitefield rivals, and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports your CEO will read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
