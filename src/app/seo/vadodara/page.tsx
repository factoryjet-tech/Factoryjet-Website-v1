import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
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
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

export const metadata: Metadata = {
  title: 'SEO Company in Vadodara | Best SEO Services | FactoryJet',
  description:
    'SEO company in Vadodara for engineering, petrochemical, pharma, and manufacturing firms. Win business across India, export orders, and Google AI answers.',
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
    title: 'SEO Company in Vadodara | Best SEO Services | FactoryJet',
    description:
      'SEO agency in Vadodara for engineering, petrochemical, pharma and manufacturing firms. Win business across India, export orders and Google AI answers.',
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

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/vadodara#webpage',
  url: 'https://factoryjet.com/seo/vadodara',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/seo/vadodara#localbusiness',
  name: 'FactoryJet SEO Agency in Vadodara',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO agency in Vadodara for engineering, petrochemical, pharmaceutical, and manufacturing firms. We give you a fast site Google can read, the right search plan to win business across India and abroad, and a place in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/vadodara',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Vadodara' },
    { '@type': 'City', name: 'Makarpura' },
    { '@type': 'City', name: 'Nandesari' },
    { '@type': 'City', name: 'Halol' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 22.3072, longitude: 73.1812 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/vadodara#service',
  serviceType: 'SEO Services in Vadodara',
  name: 'SEO Agency in Vadodara by FactoryJet',
  description: 'SEO agency in Vadodara for engineering, petrochemical, pharma, and manufacturing firms. Win business across India, win export orders, and get named in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/vadodara',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Vadodara' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/vadodara#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/vadodara',
};

const VAD_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'An audit of load speed, indexing and backlinks on your Vadodara site, measured against the engineering, petrochem or pharma suppliers who win the orders you lose. Plain words, no jargon. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Vadodara search plan tied to sales. The searches buyers across India use for engineering and chemicals, the simple English searches that win export orders, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'Technical work comes first: product markup, load speed and links between pages. Then we rebuild capability and product pages and set up your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Spec-led content for technical and buying teams, drafted with AI and edited by a person, plus links earned from real Indian and overseas sites. No paid links or link schemes. (Ongoing)' },
  { number: '05', title: 'Report', description: 'Each month, one page: searches that moved, enquiries and quote requests traced to Google, and the three next actions. (Monthly)' },
];

const VAD_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Vadodara Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const VAD_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Vadodara?', answer: 'It depends on the work your site needs and how many rivals chase the same buyers. A Makarpura transformer maker selling to power utilities needs a different plan from an Alkapuri clinic. After a free check we send one written monthly price. Plans run month to month and stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Vadodara?', answer: 'Searches for your company name and your map listing usually shift in 30 to 60 days. Engineering and export searches take four to six months because buying teams trust depth, and depth takes time to publish. We report early progress from week one, long before the first quote request.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Vadodara SEO agencies?', answer: 'We pair AI with senior people. AI covers research and reporting at scale. Experienced staff handle the strategy, technical work and writing for engineers and buyers. We keep no big office or sales floor, so you pay for output.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. It is a monthly plan with 30 days notice to stop. Vadodara firms buy on long cycles, and we earn each renewal with progress, not a 12-month signature.' },
  { category: 'included', question: 'What does a Vadodara SEO plan include?', answer: 'Technical fixes so Google reads a fast site, better product and capability pages, and a search plan for buyers across India and abroad. Higher plans add content, earned links and Google AI answer work, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build technical and capability content for industrial buyers?', answer: 'Yes. For engineering, petrochem, and pharma firms we write pages about what you can make, your products, how they are used, your spec sheets, and your certificates, all in the words that buying teams and big project contractors actually use. This is what gets you shortlisted, and it is also what Google AI answers quote.' },
  { category: 'included', question: 'Can you handle product and catalogue SEO for a manufacturer?', answer: 'Yes. We improve your product, grade, and application pages, add the hidden product details Google reads, and go after the supplier and parts searches buyers use. We work on WordPress, Shopify, and custom sites, and connect with IndiaMART-style B2B sourcing where it helps.' },
  { category: 'included', question: 'Do you write the content?', answer: 'Yes. AI drafts the structure. An editor who can read a spec sheet then writes for buying teams and engineers. You approve every page before it is live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes, at no extra charge. Procurement teams more and more ask AI tools for supplier lists. We format pages as questions and answers, add trust markup, and publish specs and facts AI can quote, so Google AI answers, ChatGPT and Perplexity can name your firm.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO makes the site fast and readable for Google, including code that describes products and certifications. On-page SEO is what visitors read: headings, text and links between pages. We fix technical issues first, then rework the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes. We work on WordPress and Shopify every week, and most custom industrial sites are workable. The first check spots anything in your setup that needs care.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Speed sits inside the technical work on every plan. Plant managers and buyers often check suppliers on a phone between meetings, so we tune mobile load times first. Faster sites rank better and win more quote requests.' },
  { category: 'local', question: 'Can you do SEO for a Vadodara engineering or transformer manufacturer?', answer: 'Yes, and selling to other businesses is where we do our best work. We go after the searches that buying teams, power companies, and big project contractors actually use, write content about what you can make, and add the trust signals that get you on a buyer’s shortlist. These deals take a long time to win, and good content keeps paying off.' },
  { category: 'local', question: 'Do you handle export SEO for engineered goods, rolling stock, or pharma?', answer: 'Yes. For firms exporting machines, rail equipment, and medicines, we go after the simple English searches overseas buyers use, write content about your certificates and what you can make so buyers and regulators trust you, and get you named in Google AI answers. We chase orders from abroad, not "near me" searches.' },
  { category: 'local', question: 'Do you do B2B SEO for chemical and petrochem makers in Nandesari or Koyali?', answer: 'Yes. Chemical and petrochem makers sell to factories across India, so we go after grade, ingredient, and use-case searches all over the country, write the product and spec pages buyers look for, and add the trust signals buying teams want to see.' },
  { category: 'local', question: 'Do you cover Makarpura, Halol, Savli, and the GIDC estates?', answer: 'Yes. We match your SEO to your area, whether that is the Makarpura engineering belt, the Nandesari and Koyali petrochem cluster, the Halol pharma zone, or the Savli industrial area, with local targeting and your free Google listing where it helps.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'A one-page summary, five minutes to read: searches that moved, visits that became enquiries or quote requests, leads traced to Google, and the three actions for next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes. Every page, plan and link sits on your website and stays with you if we part ways. There is no paid tool of ours you must keep to hold rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By enquiries, quote requests and orders. Up front we agree the searches that matter and what counts as a lead, configure Google’s free tools, and report the figures your sales team cares about.' },
  { category: 'reporting', question: 'Who works on my Vadodara account?', answer: 'A small team of senior people. FactoryJet is founder-led, so your calls are with the people doing the strategy and technical work, and nobody junior inherits your account.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Vadodara?',
    answer:
      'For small and mid-size firms, FactoryJet stands up well as the best SEO company in Vadodara. One team builds fast websites and runs the SEO services in Vadodara clients pay for, with a monthly report and no long contract. Measure any provider of the best SEO services in Vadodara on a plan in plain words, results with real numbers and a written price. We run local SEO services in Vadodara too, and the best local SEO services in Vadodara keep your Google Business Profile updated every week, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Vadodara or work with an agency?',
    answer:
      'Both options can work. Hire SEO expert in Vadodara as one person and you get a single skill set, though SEO needs technical work, writing and links together. A small senior team handles all three at a similar monthly cost. Ask for one example with real numbers before you pay.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VAD_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const VAD_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Vadodara Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const VAD_COMPARISON_ROWS = [
  { feature: 'Commitment', values: ['Monthly only', 'Typically 6 to 12 months', 'Varies', 'N/A'] },
  { feature: 'Plan for India and export', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Shows up in AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast, readable site', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'No paid or spam links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports your team can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'All work stays with you', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function VadodaraSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="vad-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="vad-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="vad-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Vadodara', url: 'https://factoryjet.com/seo/vadodara' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_vadodara_hero" />}
          eyebrow="SEO · VADODARA"
          headline="The SEO Agency in Vadodara Built for Engineering, Industry, and Export"
          lead="Vadodara is one of India's big factory cities. About a third of the country's power equipment is built here, the IOCL refinery at Koyali sits at the heart of a huge petrochemical cluster, and firms like L&T, ABB, Alstom, and Alembic sell to power companies, big project contractors, and buyers around the world. These are slow, careful business deals, not quick buys. FactoryJet does SEO for those buyers and exporters, with monthly reports you can actually read."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'Month-to-month plans', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="B2B + export" badgeCity="Vadodara" />}
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best SEO company in Vadodara?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              There is no single best SEO company in Vadodara for every business. Engineering, petrochemical and pharma suppliers here sell to a small number of serious buyers researching quietly for weeks, which is nothing like a local clinic filling appointments. FactoryJet provides SEO services in Vadodara built around which of those you are, with technical depth for B2B suppliers and map visibility for local trade.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average Google review rating. SEO built for factories and exporters." />

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
                what you can make,{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">your products, grades, and how they are used</a>, by publishing clear pages and spec
                sheets, and by earning the trust signals that get you on a buyer’s shortlist.
              </p>
              <p>
                For Vadodara&apos;s exporters of machines, rail equipment, and medicines, SEO is a worldwide game built
                on trust. Overseas buyers and regulators need content about your certificates, what you can make, and
                how you follow the rules, all in clear simple English, plus a place in Google AI answers. For local
                services and the city&apos;s growing IT base in Alkapuri, it is the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">local map</a> plus searches from across
                India.
              </p>
              <p>
                Every FactoryJet Vadodara plan covers{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">a fast site Google can read</a>, the right search plan for your
                market, and Google AI answers as standard, then adds content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page,
                plan, and link we build.
              </p>
              <p>
                Engineering exporters in Chennai face the same buyer research as Vadodara&apos;s. Our page on <a href="/seo/chennai" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">SEO in Chennai</a> covers the car-part makers around Sriperumbudur.
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
            { icon: '02', title: 'Penalty-proof links.', body: 'We avoid link schemes, paid links and filler pages. If Google penalised an engineering or pharma exporter, overseas buyers and regulators would notice. We build rankings meant to last.' },
            { icon: '03', title: 'Monthly terms, readable reports.', body: 'A single page each month: searches that moved, visits that became enquiries and quote requests, and the next three actions. No lock-in, no jargon.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Vadodara SEO, Step by Step" lead="Every Vadodara plan follows the same order: audit, plan, technical repair, content, then a report from week one." stages={VAD_JOURNEY} closingNote="5 STEPS · AI + SENIOR ENGINEERS · MONTHLY · NO PAID LINKS · ALL-INDIA + EXPORT" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Vadodara SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are documenting SEO results for manufacturers in Gujarat and elsewhere in India: rankings, visits and quote requests from live FactoryJet work. The team behind them has built 500+ websites with a 4.9 average Google review rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Vadodara Agency vs. Freelancer vs. DIY"
          lead="Vadodara firms can hire an agency or a freelancer, do it in-house, or work with us. Here is how each compares on terms, scope and ownership."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the business and export plan most Vadodara agencies do not run.' }}
          columns={VAD_COMPARISON_COLUMNS}
          rows={VAD_COMPARISON_ROWS}
          footer="FactoryJet plans renew monthly and end on 30 days notice."
        />

        <IndustriesGrid variant="cards"
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

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Vadodara Businesses" lead="The questions Vadodara manufacturers ask before signing up, answered in plain words." categories={VAD_FAQ_CATEGORIES} items={VAD_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Industrial Search in Vadodara?"
          sub="Your buyers are buying teams, power companies, big project contractors, and overseas importers, and they check out suppliers on Google and AI before a quote request ever lands. Far fewer Vadodara firms compete on Google than in the big metros, so the window to own your category is open now. Start with a free check, and we will show you exactly where you stand."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Month-to-month plans. You own all the work. Reports that take five minutes."
        />
        {/* Hub link-back (silo fix, 31 Jul 2026) */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              Vadodara firms rarely sell only in Vadodara. See{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                SEO services across India
              </a>{' '}
              and the other cities we work in.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
