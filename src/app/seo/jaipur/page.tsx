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
  title: 'SEO Company in Jaipur | Best SEO Services | FactoryJet',
  description:
    'SEO company in Jaipur for gem and jewellery exporters, handicraft brands, hotels, and IT firms. Win abroad, on the local map, and in Google AI answers.',
  keywords: [
    'seo company in jaipur',
    'seo agency in jaipur',
    'seo services in jaipur',
    'best seo company in jaipur',
    'seo expert in jaipur',
    'jewellery export seo jaipur',
    'handicraft seo jaipur',
    'ecommerce seo jaipur',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Jaipur | Best SEO Services | FactoryJet',
    description:
      'SEO company in Jaipur for gem and jewellery exporters, handicraft brands, hotels and IT firms. Win abroad, on the local map and in Google AI answers.',
    url: 'https://factoryjet.com/seo/jaipur',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Jaipur' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Jaipur | FactoryJet',
    description: 'SEO company in Jaipur for exporters, handicraft brands, hotels, and IT firms. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/jaipur', languages: seoCityAlternatesIN['jaipur'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/jaipur#webpage',
  url: 'https://factoryjet.com/seo/jaipur',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/seo/jaipur#localbusiness',
  name: 'FactoryJet SEO Company in Jaipur',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Jaipur for gem and jewellery exporters, handicraft brands, hotels, and IT firms. We fix your site, help you win abroad, win the top three businesses on the map, and get named in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/jaipur',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Jaipur' },
    { '@type': 'City', name: 'Sitapura' },
    { '@type': 'City', name: 'Sanganer' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 26.9124, longitude: 75.7873 }, geoRadius: '40000' },
  serviceType: 'Search Engine Optimisation',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/jaipur#service',
  serviceType: 'SEO Services in Jaipur',
  name: 'SEO Company in Jaipur by FactoryJet',
  description: 'SEO company in Jaipur for gem and jewellery exporters, handicraft brands, hotels, and IT firms. Win abroad, win the top three businesses on the map, and get named in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/jaipur',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Jaipur' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/jaipur#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/jaipur',
};

const JAI_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'We review your Jaipur site for speed, indexing and links, and set it against the Johari Bazaar, Sitapura or Sanganer firms that take your enquiries. You get the findings in plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Jaipur search plan tied to sales: the simple English searches that win overseas orders for gems and handicrafts, booking and travel searches for tourism, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'First the technical base: markup, speed and internal links. Then the pages that bring enquiries, your catalogue or room pages, and your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Buyer guides, collection pages and travel content planned with AI and written by an editor, plus links earned from real Indian and overseas sites. Nothing bought, no link schemes. (Ongoing)' },
  { number: '05', title: 'Report', description: 'Your monthly page covers moved searches, visits that became enquiries or bookings, what we traced to Google, and three next steps. (Monthly)' },
];

const JAI_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Jaipur Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const JAI_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Jaipur?', answer: 'Each Jaipur quote is built from a free audit. A Sitapura gem exporter targeting US wholesale buyers needs different work from a heritage hotel chasing direct bookings, so we price after we see your site and rivals. You get one monthly figure in writing, pay month to month, and can stop on 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Jaipur?', answer: 'Searches for your own name and your map listing usually improve in 30 to 60 days. Category and export searches, such as a buyer abroad looking for a coloured gemstone supplier, take four to six months because trust and content take time to build. Early movement shows up in your report from the first week.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Jaipur SEO agencies?', answer: 'Two things. AI does the heavy research and reporting, while senior people do the strategy, copy and fixes. We also carry no big office or sales team, so the fee pays for work on your site.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No contract term. Billing runs month to month and 30 days notice stops it. Jaipur clients stay because the report shows progress.' },
  { category: 'included', question: 'What does a Jaipur SEO plan include?', answer: 'A Jaipur plan starts with a fast, readable site, then better pages for enquiries or bookings, and a search plan for your buyers, whether they sit abroad, arrive as tourists, or live in the city. Higher plans add content, earned links and Google AI answer work, with a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content and catalogues overseas buyers trust?', answer: 'Yes. For gem, jewellery, and handicraft exporters we write clear, simple English about who you are, what you can make, and the certificates you hold, set out the way overseas buyers and sourcing agents expect. This wins enquiries from abroad, and it is also what AI answers quote.' },
  { category: 'included', question: 'Can you build an ecommerce or catalogue store for an exporter?', answer: 'Yes. We sort out category and product pages, add the hidden product details Google reads, and go after the searches your overseas and wholesale buyers use. We work on Shopify and custom stores, so we can improve the store you already run or help you build one that ranks.' },
  { category: 'included', question: 'Do you write the content?', answer: 'Yes. AI sketches the outline, then an editor writes copy a buyer or traveller can trust. You sign off each piece before it is published.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes, and it is included in every plan. Travellers planning a trip and buyers sourcing jewellery often ask an AI tool first. We write pages as clear questions and answers, add trust markup and quotable facts, so ChatGPT, Perplexity and Google AI answers can name you.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO covers speed, whether Google can crawl every page, and code that describes your products or rooms. On-page SEO covers the visible parts: headings, text and internal links. We sort the technical base first and then the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes. Many Jaipur exporters run Shopify or WordPress, and we know both well. Custom builds are usually fine too. Our audit lists any setup issue before work begins.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Buyers abroad and tourists on the move mostly browse on phones, so mobile speed is part of the technical work in every plan. Faster pages rank higher and turn more visits into enquiries.' },
  { category: 'local', question: 'Can you do SEO for a Jaipur gems, jewellery, or handicraft exporter selling to the US and EU?', answer: 'Yes, and it is a different game from local SEO. Exporters need the simple English searches that overseas buyers use, content about who you are and what you can make so buyers and sourcing agents trust you, and a presence in AI answers like ChatGPT and Google. We chase orders from abroad, not "near me" searches.' },
  { category: 'local', question: 'Do you do SEO for Jaipur hotels and tourism businesses?', answer: 'Yes. Tourists in Jaipur come from both India and abroad, so we go after booking and travel searches, sort out your free Google listing and the map, help you collect reviews, and add the hidden code that helps hotels and tour operators win direct bookings instead of losing them to the big booking sites.' },
  { category: 'local', question: 'Can you handle global SEO for an IT firm at Mahindra World City?', answer: 'Yes. For IT and ITeS firms we mix searches that win work from abroad with trust across India and locally. We go after the searches that describe your services and skills, and build the case-study content big buyers expect.' },
  { category: 'local', question: 'Do you cover the Walled City, Sitapura, and Sanganer areas?', answer: 'Yes. We match your SEO to where you work, whether that is shops in the Walled City and MI Road, the Sitapura SEZ gems and IT cluster, or the Sanganer and Bagru block-print hubs, with separate targeting and a free Google listing for each.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'Five minutes, one page: searches that moved, visits that became enquiries or bookings, what we traced to Google, and next month’s three priorities.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'All of it. The pages and links live on your site and stay with you if you leave. You never pay for our software to keep your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'Enquiries, bookings and sales. Rankings matter only when they bring those. We agree target searches and what counts as a lead at the start, set up Google’s free tools, and report on those figures.' },
  { category: 'reporting', question: 'Who works on my Jaipur account?', answer: 'A small senior group. FactoryJet is founder-led, so strategy and technical work come from the people on your calls, never a junior handed your account in week one.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Jaipur?',
    answer:
      'For small and mid-size firms, FactoryJet is a fair pick for the best SEO company in Jaipur. The engineers who build fast websites also run the SEO services in Jaipur our clients pay for, with a monthly report and no lock-in. Any shortlist of the best SEO services in Jaipur should pass three tests: a plain-word plan, results with real numbers, and a written price. We run local SEO services in Jaipur as well, and the best local SEO services in Jaipur update your Google Business Profile weekly, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Jaipur or work with an agency?',
    answer:
      'It depends on scope. Hire SEO expert in Jaipur alone and you buy one skill set, while rankings need technical fixes, writing and links together. A small senior team gives you all three for roughly the same monthly cost. Before paying either, ask to see one result with real numbers.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: JAI_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const JAI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Jaipur Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const JAI_COMPARISON_ROWS = [
  { feature: 'Lock-in period', values: ['None', '6 to 12 months is common', 'Varies', 'N/A'] },
  { feature: 'Plan for selling abroad in simple English', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Named in AI search results', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Quick, crawlable site', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Top three on the map + free Google listing', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Plain-English reporting', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Content and links stay yours', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function JaipurSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="jai-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="jai-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="jai-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Jaipur', url: 'https://factoryjet.com/seo/jaipur' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Jaipur', url: 'https://factoryjet.com/seo/jaipur' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_jaipur_hero" />}
          eyebrow="SEO · JAIPUR"
          headline="The SEO Company in Jaipur That Brings Leads, Not Just Vanity Numbers"
          lead="Jaipur is an export city wrapped in a tourist city. It is the world's largest place for cutting coloured gemstones, the home of Sanganeri and Bagru block-print, and a Pink City that drew over six lakh visitors from abroad last year. Gem and handicraft exporters in Sitapura and Sanganer sell to the US and Europe, hotels serve travellers from everywhere, and IT firms at Mahindra World City work for clients all over the world. One generic SEO plan suits none of them. We match your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Named in Google AI answers', 'Monthly terms', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Wins abroad" badgeCity="Jaipur" />}
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best SEO company in Jaipur?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              There is no single best SEO company in Jaipur for every business. A gem and jewellery exporter selling to overseas buyers, a heritage hotel filling rooms, and a local clinic all search completely differently. FactoryJet works as an SEO agency in Jaipur across all three, and the first thing we do is work out which buyer is actually yours before spending anything on reaching them.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average Google review rating. SEO built for exporters and the Pink City." />

        <CityContextSection
          eyebrow="JAIPUR MARKET"
          headline="Why SEO in Jaipur Is About Selling Abroad and to Travellers"
          leadParagraphs={[
            "Jaipur is not a plain services town. It lives on trade and exports, with tourism on top. It is the world's largest place for cutting and polishing coloured gemstones, where about nine in ten of the world's emeralds are cut. Around it sit the Sanganer and Bagru block-print clusters, the Sitapura SEZ for gems and IT, and a tourist economy built around three UNESCO World Heritage sites.",
            "So a Jaipur business sells to one of three very different markets. Gem, jewellery, and handicraft exporters sell to importers and brands in the US and Europe and need SEO built for selling abroad and for trust. Hotels, heritage venues, and tour operators serve travellers from India and abroad, and live or die by the top three businesses on the map, Google Maps, and direct bookings. IT and local services sell across India and to the city.",
            "The Jaipur businesses that win on Google are the ones whose SEO matches the buyer. An exporter showing up for the search a US wholesale buyer uses, a hotel owning the travel search, an IT firm named by AI for what it can do. That is exactly where FactoryJet works.",
          ]}
          stats={[
            { value: "World's largest", label: 'coloured-gemstone cutting and polishing centre', sourceUrl: 'https://www.gia.edu/gia-news-research/jaipur-india-emerald-cutting-trading-powerhouse', sourceLabel: 'GIA' },
            { value: '6.2 lakh+', label: 'international visitors to Jaipur in 2024', sourceUrl: 'https://www.tourism.rajasthan.gov.in/jaipur.html', sourceLabel: 'Rajasthan Tourism' },
            { value: '35,000+', label: 'jobs at Mahindra World City SEZ, with Infosys, TCS and more', sourceUrl: 'https://en.wikipedia.org/wiki/Mahindra_World_City,_Jaipur', sourceLabel: 'Mahindra World City' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · JAIPUR"
          headline="What 'SEO' Actually Means for a Jaipur Business"
          lead="Jaipur sells to three different markets. Exporters sell to the world, hotels serve travellers from everywhere, and IT and local services serve India and the city. Each searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Jaipur&apos;s gem, jewellery, and handicraft exporters in Johari Bazaar, Sitapura, Sanganer, and
                Bagru, SEO is about reach and trust. Overseas buyers and sourcing teams research for weeks before they
                place an order. You win by showing up for the simple English searches they use, by publishing clear
                content about who you are and what you can make, and by being named in AI answers, not by chasing
                &quot;near me&quot;.
              </p>
              <p>
                For Jaipur&apos;s hotels, heritage venues, and tour operators, the game is travel and booking searches.
                Travellers, from India and abroad, decide on their phones. You win with a strong free Google listing,
                Google Maps, plenty of reviews, and content that catches travel searches and turns them into direct
                bookings. For IT firms and local services, it is a mix of searches that win work from abroad and the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">top
                three businesses on the map</a>.
              </p>
              <p>
                Every FactoryJet Jaipur plan covers{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">the technical side</a>, the right search plan for your market, and
                Google AI answers as standard, then adds content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and
                link we build.
              </p>
              <p>
                Exporters in other cities follow the same buyer research. Our page on <a href="/seo/chennai" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">SEO in Chennai</a> covers the car-part exporters around Sriperumbudur.
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
                  { type: 'Sell to the world', need: 'Simple English, catalogue, trust content, named by AI', area: 'GEMS · JEWELLERY · HANDICRAFTS → US & EU', colour: '#F05A28' },
                  { type: 'Serve travellers', need: 'Travel and booking searches, top three on the map, Google Maps', area: 'HOTELS · TOURS · HERITAGE (WALLED CITY)', colour: '#F3A07A' },
                  { type: 'Sell across India and local', need: 'Searches that win work from abroad plus the top three on the map', area: 'IT (MAHINDRA WORLD CITY) · LOCAL SERVICES', colour: '#0F0F12' },
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
          headline="Why Jaipur Businesses Choose FactoryJet for SEO"
          lead="Jaipur agencies often sell 12-month contracts handled by junior staff. FactoryJet pairs AI with senior people, is founder-led, bills monthly, and plans differently for a US wholesale buyer than for a walk-in."
          pillars={[
            { icon: '01', title: 'Named in AI answers.', body: 'Gem buyers abroad and travellers planning a Rajasthan trip often begin with an AI answer. From day one we shape your pages so Google AI answers and ChatGPT can name you, while most local agencies chase only the blue links.' },
            { icon: '02', title: 'Safe, earned links.', body: 'We do not use link networks, paid links or throwaway pages. One Google penalty can cost an exporter its credibility with buyers abroad. Our work rests on a sound technical base, real content and real links.' },
            { icon: '03', title: 'Pay monthly, read one page.', body: 'Your report fits on one page: moved searches, enquiries and bookings we traced, and the next three steps. You can stop any month, and there is no jargon.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Jaipur SEO, Step by Step" lead="We look before we plan, repair the base before we publish, and send a report from the first week." stages={JAI_JOURNEY} closingNote="5 STEPS · AI + SENIOR TEAM · PAY MONTHLY · NO BOUGHT LINKS · EXPORT + TOURISM + LOCAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Jaipur SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>Write-ups of FactoryJet SEO work in Rajasthan and other states, with rankings, visits and enquiries, are in progress. The same team has built 500+ websites and holds a 4.9 average Google review rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Jaipur Agency vs. Freelancer vs. DIY"
          lead="How the four options for SEO in Jaipur compare: contract terms, the work you get, and who owns it at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the simple-English, sell-abroad plan most Jaipur agencies do not run.' }}
          columns={JAI_COMPARISON_COLUMNS}
          rows={JAI_COMPARISON_ROWS}
          footer="Monthly billing. Pause or cancel with 30 days notice."
        />

        <IndustriesGrid variant="cards"
          eyebrow="JAIPUR × SEO"
          headline="SEO for Jaipur's Key Industries"
          lead="From Johari Bazaar jewellers to Sanganer block-printers to Pink City hotels, Jaipur's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Gems & Jewellery', description: 'Johari Bazaar and the Sitapura SEZ, the world centre for cutting coloured stones. The wholesale and supplier searches overseas buyers use, trust-building content, and being named by AI for buyers abroad.' },
            { name: 'Handicrafts & Block-Print', description: 'Sanganer and Bagru hand block-print and blue pottery. The searches that win export orders and reach online brands in the West, plus catalogue SEO.' },
            { name: 'Tourism & Hospitality', description: 'Pink City hotels, heritage venues, and tour operators. Travel and booking searches, your free Google listing, Google Maps, and plenty of reviews for travellers from India and abroad.' },
            { name: 'IT & ITeS', description: 'Mahindra World City and Sitapura tech firms. Searches that win work from abroad plus trust at home, and the case-study content big buyers expect.' },
            { name: 'Local Services & Healthcare', description: 'Clinics, consultancies, and shops across Malviya Nagar, Mansarovar, and C-Scheme. The top three businesses on the map, Google Maps, and searches from people ready to book.' },
            { name: 'Real Estate & Professional Services', description: 'Developers, brokers, and professional firms. Searches tied to each area and neighbourhood, with pages built to catch enquiries and send them to the right team.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Jaipur Businesses" lead="What Jaipur exporters, hoteliers and shop owners ask before they start, answered plainly." categories={JAI_FAQ_CATEGORIES} items={JAI_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Jaipur?"
          sub="Your buyers are in New York, in London, and on a phone planning a Jaipur trip, and they all start on Google or AI. Start with a free check, and we will show you exactly where you stand, whether you export from Sitapura, print in Sanganer, or run a heritage hotel in the Walled City."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Cancel any month. Keep every page and link. Read your report in five minutes."
        />
        {/* Hub link-back (silo fix, 31 Jul 2026) */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              For firms selling outside Rajasthan, see{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                what our SEO company in India covers
              </a>{' '}
              and how the work is structured.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
