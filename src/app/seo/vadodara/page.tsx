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
  title: 'SEO Agency in Vadodara | AI-Native SEO Company | FactoryJet',
  description:
    'SEO agency in Vadodara for engineering, petrochemical, pharma, and manufacturing firms. Win business across India, win export orders, and get named in Google AI answers. No lock-in. Serving Makarpura, Nandesari, Halol, and Savli.',
  keywords: [
    'seo agency in vadodara',
    'seo company in vadodara',
    'seo services in vadodara',
    'best seo company in vadodara',
    'seo expert in vadodara',
    'b2b seo vadodara',
    'industrial seo vadodara',
    'seo company in baroda',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency in Vadodara | AI-Native SEO Company | FactoryJet',
    description:
      'SEO agency in Vadodara for engineering, petrochemical, pharma, and manufacturing firms. Win business across India, win export orders, and get named in Google AI answers. No lock-in. Serving Makarpura, Nandesari, Halol, and Savli.',
    url: 'https://factoryjet.com/seo/vadodara',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Agency in Vadodara' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Vadodara | FactoryJet',
    description: 'SEO agency in Vadodara for engineering, petrochem, pharma, and manufacturing. Win business across India and win export orders. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/vadodara', languages: seoCityAlternatesIN['vadodara'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/vadodara#localbusiness',
  name: 'FactoryJet SEO Agency in Vadodara',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO agency in Vadodara for engineering, petrochemical, pharmaceutical, and manufacturing firms. We give you a fast site Google can read, the right search plan to win business across India and abroad, and a place in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/vadodara',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Vadodara', addressRegion: 'Gujarat', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Makarpura' },
    { '@type': 'City', name: 'Nandesari' },
    { '@type': 'City', name: 'Halol' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 22.3072, longitude: 73.1812 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500', bestRating: '5', worstRating: '1' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/vadodara#service',
  serviceType: 'SEO Services in Vadodara',
  name: 'SEO Agency in Vadodara by FactoryJet',
  description: 'SEO agency in Vadodara for engineering, petrochemical, pharma, and manufacturing firms. Win business across India, win export orders, and get named in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/vadodara',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Vadodara' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does SEO cost in Vadodara?', acceptedAnswer: { '@type': 'Answer', text: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' } },
    { '@type': 'Question', name: 'Can you do SEO for a Vadodara engineering or transformer manufacturer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and selling to other businesses is where we do our best work. We go after the searches that buying teams, power companies, and big project contractors actually use, write clear pages about what you can make, and add the trust signals that get you on a buyer’s shortlist. These deals take a long time, and good content keeps paying off.' } },
    { '@type': 'Question', name: 'Do you handle export SEO for engineered goods and pharma?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For firms exporting machines, rail equipment, and medicines, we go after the simple English searches overseas buyers use, write content about your certificates and what you can make so buyers and regulators trust you, and get you named in Google AI answers and ChatGPT. We chase orders from abroad, not "near me" searches.' } },
    { '@type': 'Question', name: 'Do you cover Makarpura, Nandesari, Halol, and the GIDC estates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We match your SEO to your area, whether that is the Makarpura engineering belt, the Nandesari and Koyali chemical cluster, the Halol pharma zone, or the Savli industrial area, with local targeting and your free Google listing where it helps.' } },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/vadodara#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/vadodara',
};

const VAD_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Vadodara site: how fast it loads, whether Google can find and read it, the links pointing to you, and where you stand against the engineering, petrochem, or pharma rivals you lose orders to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Vadodara search plan tied to sales. The searches buyers across India use for engineering and chemicals, the simple English searches that win export orders, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code that helps Google understand your site, speed, and links between pages. Then we improve the pages that win you customers, plus your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for technical and buying teams, plus real links from genuine Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report. The searches that moved, visits that turn into customers, the enquiries and quote requests we can trace, and the next three things. (Monthly)' },
];

const VAD_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Vadodara Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const VAD_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Vadodara?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Vadodara?', answer: 'Your own brand and basic capability searches usually move in 30 to 60 days. Tough industrial and export searches take four to six months, because you win them with deep, trustworthy content. We show early signs of progress from week one. Vadodara is also a quieter search market than the big metros, so good SEO often ranks faster here.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Vadodara SEO agencies?', answer: 'We are a small team that uses AI plus senior people, and we understand selling to other businesses, where most local agencies only know retail. AI does the research and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Vadodara clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Vadodara SEO plan include?', answer: 'A fast site Google can read, better pages that win customers, and the right search plan for your market, whether that is winning business across India or export orders abroad. Bigger plans add content written by a real editor, real links from trusted sites, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build technical and capability content for industrial buyers?', answer: 'Yes. For engineering, petrochem, and pharma firms we write pages about what you can make, your products, how they are used, your spec sheets, and your certificates, all in the words that buying teams and big project contractors actually use. This is what gets you shortlisted, and it is also what Google AI answers quote.' },
  { category: 'included', question: 'Can you handle product and catalogue SEO for a manufacturer?', answer: 'Yes. We improve your product, grade, and application pages, add the hidden product details Google reads, and go after the supplier and parts searches buyers use. We work on WordPress, Shopify, and custom sites, and connect with IndiaMART-style B2B sourcing where it helps.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that holds up for technical and buying teams and answers the buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Even buying and engineering teams now start their research in AI search. We lay out content as clear questions and answers, add the hidden code that builds trust, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can find, read, and trust, plus the hidden code that helps Google understand it. On-page SEO is what people see on each page, like headings, words, how deep the content goes, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. A fast site both ranks better and turns more visitors into customers, so it is part of the technical work, never an optional extra. We make your site quick on mobile, since most searches in India happen on a phone, even for business research.' },
  { category: 'local', question: 'Can you do SEO for a Vadodara engineering or transformer manufacturer?', answer: 'Yes, and selling to other businesses is where we do our best work. We go after the searches that buying teams, power companies, and big project contractors actually use, write content about what you can make, and add the trust signals that get you on a buyer’s shortlist. These deals take a long time to win, and good content keeps paying off.' },
  { category: 'local', question: 'Do you handle export SEO for engineered goods, rolling stock, or pharma?', answer: 'Yes. For firms exporting machines, rail equipment, and medicines, we go after the simple English searches overseas buyers use, write content about your certificates and what you can make so buyers and regulators trust you, and get you named in Google AI answers. We chase orders from abroad, not "near me" searches.' },
  { category: 'local', question: 'Do you do B2B SEO for chemical and petrochem makers in Nandesari or Koyali?', answer: 'Yes. Chemical and petrochem makers sell to factories across India, so we go after grade, ingredient, and use-case searches all over the country, write the product and spec pages buyers look for, and add the trust signals buying teams want to see.' },
  { category: 'local', question: 'Do you cover Makarpura, Halol, Savli, and the GIDC estates?', answer: 'Yes. We match your SEO to your area, whether that is the Makarpura engineering belt, the Nandesari and Koyali petrochem cluster, the Halol pharma zone, or the Savli industrial area, with local targeting and your free Google listing where it helps.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The searches that moved and why, visits that turn into customers, the enquiries and quote requests we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By enquiries, quote requests, and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your sales.' },
  { category: 'reporting', question: 'Who works on my Vadodara account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },
];

const VAD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Vadodara Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const VAD_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'Plan for India and export', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real links, no spammy tricks', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function VadodaraSeoPage() {
  return (
    <>
      <Script id="vad-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="vad-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="vad-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Vadodara', url: 'https://factoryjet.com/seo/vadodara' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · VADODARA"
          headline="The SEO Agency in Vadodara Built for Engineering, Industry, and Export"
          lead="Vadodara is one of India's big factory cities. About a third of the country's power equipment is built here, the IOCL refinery at Koyali sits at the heart of a huge petrochemical cluster, and firms like L&T, ABB, Alstom, and Alembic sell to power companies, big project contractors, and buyers around the world. These are slow, careful business deals, not quick buys. FactoryJet does SEO for those buyers and exporters, with monthly reports you can actually read."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="B2B + export" badgeCity="Vadodara" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO built for factories and exporters." />

        <CityContextSection
          eyebrow="VADODARA MARKET"
          headline="Why SEO in Vadodara Is About Selling to Businesses"
          leadParagraphs={[
            "Vadodara is not a shopping town, it is one of India's big engineering and chemical cities. The Makarpura belt makes a large share of the country's power equipment, with L&T, ABB, and Siemens among the names here. The IOCL refinery at Koyali and the Nandesari estate sit at the heart of a major petrochemical and chemical cluster, while Halol and Alembic make Vadodara a serious pharma centre and Savli builds rail equipment for export.",
            "That means a Vadodara business almost never sells to a walk-in customer. It sells to buying teams, power companies, big project contractors, large equipment makers, and overseas buyers, through long, careful deals built around tight specs. The SEO that works here is about winning business orders and export orders, not the local map and not retail. Most local agencies are set up for the opposite.",
            "It is also a quiet opportunity. Far fewer Vadodara firms compete on Google than in the big metros, so a maker or exporter with a clean, fast site, real content about what they can make, and a place in Google AI answers can own its category quickly. That is exactly where FactoryJet works.",
          ]}
          stats={[
            { value: '~35%', label: "of India's power transmission and distribution equipment is made in Vadodara", sourceUrl: 'https://vadodara.nic.in/economy/', sourceLabel: 'Vadodara District' },
            { value: '13.7 MTPA', label: 'capacity of the IOCL Gujarat Refinery at Koyali, anchoring the petrochem cluster', sourceUrl: 'https://iocl.com/', sourceLabel: 'IOCL' },
            { value: '50+ countries', label: 'export reach of Vadodara engineering majors like ABB and Alstom', sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · VADODARA"
          headline="What 'SEO' Actually Means for a Vadodara Business"
          lead="Vadodara sells to three markets. Makers supply power companies and big equipment makers across India, exporters ship machines and medicines worldwide, and a smaller local economy serves the city. Each one searches differently, so we match your plan to the buyer you actually sell to."
          body={
            <>
              <p>
                For Vadodara&apos;s engineering, power-equipment, and chemical makers in Makarpura, Nandesari, and
                Koyali, SEO is about winning business across India. Buying teams, power companies, and big project
                contractors check out suppliers for weeks against a spec sheet. You win by showing up for searches about
                what you can make, your products, grades, and how they are used, by publishing clear pages and spec
                sheets, and by earning the trust signals that get you on a buyer’s shortlist.
              </p>
              <p>
                For Vadodara&apos;s exporters of machines, rail equipment, and medicines, SEO is a worldwide game built
                on trust. Overseas buyers and regulators need content about your certificates, what you can make, and
                how you follow the rules, all in clear simple English, plus a place in Google AI answers. For local
                services and the city&apos;s growing IT base in Alkapuri, it is the local map plus searches from across
                India.
              </p>
              <p>
                Every FactoryJet Vadodara plan covers a fast site Google can read, the right search plan for your
                market, and Google AI answers as standard, then adds content and links over time. You keep every page,
                plan, and link we build.
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
                  { type: 'Supply India’s factories', need: 'Searches about what you make, products, and uses, across India', area: 'POWER EQUIPMENT · CHEMICALS (MAKARPURA · NANDESARI)', colour: '#F05A28' },
                  { type: 'Export engineered goods', need: 'Simple English, certificates, named by AI', area: 'ENGINEERING · RAIL · PHARMA → 50+ COUNTRIES', colour: '#F3A07A' },
                  { type: 'Serve the city', need: 'Local map plus searches from across India', area: 'LOCAL SERVICES · IT (ALKAPURI)', colour: '#0F0F12' },
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
          headline="Why Vadodara Businesses Choose FactoryJet for SEO"
          lead="Most Vadodara SEO agencies are set up for retail and sell 12-month contracts. FactoryJet uses AI plus senior people, is founder-led, works month to month, and understands selling to other businesses, where the buyer is a buying team, not a walk-in customer."
          pillars={[
            { icon: '01', title: 'Built for selling to businesses.', body: 'We go after the searches that buying teams and big project contractors use, and write the content that gets you shortlisted. Most local agencies only know retail and miss this completely.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link tricks, no bought links, no throwaway pages. For an engineering or pharma exporter, a Google punishment is a trust problem with overseas buyers and regulators. We build SEO that lasts.' },
            { icon: '03', title: 'Month to month. Reports you read.', body: 'One page a month. The searches that moved, the visits that turned into customers, the enquiries and quote requests we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Vadodara SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={VAD_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · INDIA + EXPORT + AI ANSWERS" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Vadodara SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and enquiries, from live FactoryJet work in Gujarat and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating, including business engineering and consulting clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Vadodara Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Vadodara. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the business and export plan most Vadodara agencies do not run.' }}
          columns={VAD_COMPARISON_COLUMNS}
          rows={VAD_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid
          eyebrow="VADODARA × SEO"
          headline="SEO for Vadodara's Key Industries"
          lead="From Makarpura power equipment to Nandesari chemicals to Halol pharma, Vadodara's industries compete on very different searches. FactoryJet has done SEO for technical, business buyers."
          sectors={[
            { name: 'Power & Heavy Engineering', description: 'Makarpura transformer and power-equipment makers serving power companies and big project contractors. Searches about what you can make and your products, for long buyer-approval cycles, across India and abroad.' },
            { name: 'Petrochemicals & Chemicals', description: 'Nandesari and Koyali makers supplying factories across India. Grade, ingredient, and use-case searches, with the trust signals buying teams look for.' },
            { name: 'Pharmaceuticals', description: 'Halol and Alembic firms exporting to strict markets. Simple English searches, content about certificates and quality, and being named by AI for distributors and buying teams.' },
            { name: 'Rail & Transport Equipment', description: 'Savli rail-equipment makers exporting worldwide. Searches about what you can make and tenders, for metro and rail buyers in India and abroad.' },
            { name: 'Fertilizers & Agri-Chemicals', description: 'GSFC and farm-input makers selling across India through dealers and government. Product and use-case content at national scale.' },
            { name: 'Local Services & IT', description: "Vadodara's growing IT base in Alkapuri plus clinics, consultants, and shops. Searches from across India for IT, and the local map for city services." },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Vadodara Businesses" lead="The questions we answer on every Vadodara SEO call, here in plain words." categories={VAD_FAQ_CATEGORIES} items={VAD_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Industrial Search in Vadodara?"
          sub="Your buyers are buying teams, power companies, big project contractors, and overseas importers, and they check out suppliers on Google and AI before a quote request ever lands. Far fewer Vadodara firms compete on Google than in the big metros, so the window to own your category is open now. Start with a free check, and we will show you exactly where you stand."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
