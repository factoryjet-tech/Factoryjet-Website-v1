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
  title: 'SEO Company in Kolkata | Best SEO Agency | FactoryJet',
  description:
    'SEO company in Kolkata for leather, jute, and tea exporters, B2B suppliers, and local businesses. Win abroad, across India, and in Google AI answers.',
  keywords: [
    'seo company in kolkata',
    'seo agency in kolkata',
    'seo services in kolkata',
    'best seo company in kolkata',
    'seo consultant kolkata',
    'export seo kolkata',
    'pan india b2b seo kolkata',
    'ecommerce seo kolkata',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Kolkata | Best SEO Agency | FactoryJet',
    description:
      'SEO company in Kolkata for leather, jute and tea exporters, Sector V IT firms and local businesses. Win abroad, across India and in Google AI answers.',
    url: 'https://factoryjet.com/seo/kolkata',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Kolkata' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Kolkata | FactoryJet',
    description: 'SEO company in Kolkata for exporters, B2B suppliers, IT firms, and local businesses. No long contracts. Honest reports.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/kolkata', languages: seoCityAlternatesIN['kolkata'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/kolkata#webpage',
  url: 'https://factoryjet.com/seo/kolkata',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/seo/kolkata#localbusiness',
  name: 'FactoryJet SEO Company in Kolkata',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Kolkata for leather, jute, and tea exporters, Sector V IT firms, B2B suppliers, and local businesses. We make your site fast and easy for Google to read, and help you win abroad, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/kolkata',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Bidhannagar' },
    { '@type': 'City', name: 'New Town' },
    { '@type': 'City', name: 'Howrah' },
    { '@type': 'City', name: 'Bantala' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 22.5726, longitude: 88.3639 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/kolkata#service',
  serviceType: 'SEO Services in Kolkata',
  name: 'SEO Company in Kolkata by FactoryJet',
  description: 'SEO company in Kolkata for exporters, B2B suppliers, IT firms, and local businesses. Win abroad, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/kolkata',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Kolkata' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/kolkata#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/kolkata',
};

const KOL_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'An audit of your Kolkata site covering speed, which pages Google has indexed, your backlinks, and how you compare with the Bantala exporters, Sector V IT firms or Gariahat coaching centres in your space. Plain words throughout. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Kolkata search plan tied to sales: simple English searches that win overseas orders for leather, tea, and jute, supplier and wholesale searches for engineering and pharma units, searches from students for coaching, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We start under the hood: markup, speed, internal links and making sure Google can reach every page. After that we sharpen the pages that bring leads and set up your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content for importers, trade buyers or students, outlined with AI and written by an editor, plus links from trusted Indian and overseas sites. We never buy links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A single monthly page: Kolkata searches that moved, visits that became leads, enquiries traced to Google, and the next three jobs. (Monthly)' },
];

const KOL_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Kolkata Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const KOL_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Kolkata?', answer: 'We quote after a free check of your site and the rivals you face. A Bantala leather exporter and a Gariahat coaching centre need very different amounts of work, so fixed packages make no sense. The quote is one written monthly figure. You pay monthly and can leave with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Kolkata?', answer: 'Expect your brand name and Google Maps listing to move within 30 to 60 days. Export and supplier searches are slower, four to six months, since they reward depth of content and trust. Your report shows early signals from week one.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Kolkata SEO agencies?', answer: 'Our team is small and senior, and AI does the repetitive research and reporting. Experienced people handle strategy, writing and technical fixes. With no big office or sales floor to fund, your fee goes on the work.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'There is no lock-in. You renew monthly and can pause or stop with 30 days notice. We would rather earn each month than hold Kolkata clients to a 12-month deal.' },
  { category: 'included', question: 'What does a Kolkata SEO plan include?', answer: 'A sound technical base, sharper pages that bring leads, and a search plan for your market: importers abroad, trade buyers across India, or students and patients in the city. Bigger plans add content, real links and Google AI answer work, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content that overseas buyers trust?', answer: 'Yes. Importers of Bantala leather, Darjeeling tea and jute packaging want to see certificates, production capacity and who runs the firm before they write. We publish those details in plain English, laid out for buyers and their agents. That brings enquiries from abroad and gives AI answers something solid to quote.' },
  { category: 'included', question: 'Can you handle pan-India trade and wholesale SEO?', answer: 'Yes. For Kolkata engineering, pharma, and food-processing units, we go after supplier, dealer, and wholesale searches across the whole country, build category and product pages, and add the trust signals that buyers and resellers look for.' },
  { category: 'included', question: 'Do you write the content?', answer: 'Yes. AI produces a first outline, and an editor writes the piece for the person deciding, whether an importer in Europe or a parent choosing a coaching centre. You approve it before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes, in every plan. More Kolkata searches now show an AI summary above the links. We set pages out as questions and answers, add trust markup, and include facts AI can quote, which gives ChatGPT, Perplexity and Google AI answers a reason to name you.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Think of technical SEO as the wiring: speed, crawling, and the code that tells Google what each page covers. On-page SEO is the room itself: headings, words and links between pages. Both matter, and we always fix the wiring first.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes. WordPress, Shopify and most custom sites are fine. Our first check notes anything unusual about your setup so nothing surprises you later.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Most Kolkata searches happen on a phone, so we make your site quick on mobile as part of the technical work. A fast site both ranks better and turns more visitors into customers, so it is never an optional extra.' },
  { category: 'local', question: 'Can you do SEO for a Kolkata leather or tea exporter selling to the US and EU?', answer: 'Yes. Export SEO and local SEO are different jobs. A buyer in Germany looking for leather goods or Darjeeling tea searches in plain English, wants to know who you are and what you can produce, and may ask ChatGPT first. We build for that buyer, not for "near me" searches.' },
  { category: 'local', question: 'Do you handle pan-India B2B SEO for a Kolkata engineering or pharma supplier?', answer: 'Yes. Engineering, pharma, and food-processing units sell all over India, so we go after supplier, dealer, and wholesale searches across the whole country, build the category and product pages buyers look for, and add the trust signals that win orders. A bit of local-map work for nearby buyers sits on top.' },
  { category: 'local', question: 'Can you do SEO for a Sector V or New Town IT firm?', answer: 'Yes. Sector V and New Town hold East India\'s largest IT corridor, and mid-size IT and SaaS firms there buy SEO as a lead channel. We go after the searches your buyers use across India and abroad, build content that answers their real question, and get you named in Google AI answers.' },
  { category: 'local', question: 'Do you cover local SEO for Kolkata coaching, clinics, and shops?', answer: 'Yes. For Gariahat coaching centres, clinics, and shops we work on your free Google listing, the top three businesses on the map, and local-map content for each area where you have a presence or serve customers. This is the bread-and-butter local SEO most Kolkata businesses search for.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, five minutes to read. It lists the Kolkata searches that moved, visits that turned into leads, enquiries traced to Google, and the three jobs planned for next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Everything we build is yours. Content, plans and links stay on your site whether or not you keep working with us, and no software subscription is needed to hold rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: "By leads and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google's free tools properly, and report on the numbers that map to your Kolkata sales." },
  { category: 'reporting', question: 'Who works on my Kolkata account?', answer: 'Senior people. FactoryJet is founder-led, so you deal directly with whoever sets the strategy and does the technical work, and no junior takes over after onboarding.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Kolkata?',
    answer:
      'For small and mid-size firms, FactoryJet has a good claim to be the best SEO company in Kolkata. Our engineers build fast websites and run the SEO services in Kolkata clients pay for, with a clear monthly report and no long contract. Test anyone offering the best SEO services in Kolkata on a plain-word plan, results with real numbers and a written price. We also offer local SEO services in Kolkata, and the best local SEO services in Kolkata work on your Google Business Profile every week, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Kolkata or work with an agency?',
    answer:
      'Both routes work. Hire SEO expert in Kolkata as a single person and you get one set of skills, yet SEO needs technical work, writing and links together. A small senior team supplies all three at a similar monthly cost. Either way, ask for one real-number example first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: KOL_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const KOL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Kolkata Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const KOL_COMPARISON_ROWS = [
  { feature: 'Minimum term', values: ['Month to month', 'Usually 6 to 12 months', 'Varies', 'N/A'] },
  { feature: 'SEO for selling abroad in simple English', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'AI answer readiness', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Speed and crawl fixes', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Top three on the map and free Google listing', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Short, readable reports', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Ownership of content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function KolkataSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="kol-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="kol-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="kol-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Kolkata', url: 'https://factoryjet.com/seo/kolkata' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Kolkata', url: 'https://factoryjet.com/seo/kolkata' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_kolkata_hero" />}
          eyebrow="SEO · KOLKATA"
          headline="The SEO Company in Kolkata That Brings Orders, Not Just Rankings"
          lead="Kolkata sells in three directions at once. Leather, jute, and tea houses ship to buyers in the US, Europe, and Japan. Engineering and pharma units supply the whole of India. Coaching centres, clinics, and shops serve the city. One copy-paste SEO plan fits none of them. FactoryJet matches your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Ready for Google AI answers', 'No lock-in', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Top 3 on the map" badgeCity="Kolkata" />}
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best SEO company in Kolkata?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              There is no single best SEO company in Kolkata for every business. A jute or leather exporter chasing buyers in Europe and a Salt Lake coaching centre filling seats need different plans entirely. As an SEO agency in Kolkata that handles both, FactoryJet matches the work to the market you actually sell to: local map visibility for city trade, national and export search for everyone else, and AI answers for buyers who now ask ChatGPT first.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average Google review rating. SEO that wins in Kolkata." />

        <CityContextSection
          eyebrow="KOLKATA MARKET"
          headline="Why SEO in Kolkata Is a Different Game"
          leadParagraphs={[
            "Kolkata is East India's trade and services capital, and it runs on export houses, engineering and pharma units, a fast-growing IT belt, and a deep base of local businesses. Bantala is a world-class leather export hub, Sector V and New Town make up East India's largest IT corridor, and the city is a major centre for tea trade, jute, and coaching. Each one chases a different kind of search.",
            "That is exactly why a copy-paste SEO plan fails in Kolkata. An exporter at Bantala selling to the US, a Sector V IT firm chasing leads across India, and a Gariahat coaching centre pulling in local students are after completely different searches, buyers, and places. Winning means matching your SEO to your own market and buyer, not running the same plan agencies sell to everyone.",
            "The Kolkata businesses that win on Google are rarely the biggest spenders. They are the ones with a faster site, content that answers the buyer's real question, and a place in Google AI answers their rivals have not even started on. That gap is where FactoryJet works.",
          ]}
          stats={[
            { value: '₹20L Cr+', label: "West Bengal's GSDP, among India's larger state economies", sourceUrl: 'https://www.ibef.org/states/west-bengal', sourceLabel: 'IBEF' },
            { value: '~1,500 firms', label: "Sector V plus New Town, East India's largest IT hub", sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
            { value: '450+ clusters', label: 'MSME clusters: leather (Bantala), jute, tea, engineering', sourceUrl: 'https://www.wbmsme.gov.in/', sourceLabel: 'WB MSME' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · KOLKATA"
          headline="What 'SEO' Actually Means for a Kolkata Business"
          lead="Kolkata sells in three directions at once. Exporters sell to the world, engineering and pharma units supply all of India, and coaching centres, clinics, and shops serve the city. Each one searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Kolkata&apos;s Bantala leather, Darjeeling tea, and jute eco-packaging exporters, SEO is about
                reach and trust. Overseas buyers and their agents research for weeks before an order. You win by
                showing up for the simple English searches they use, by publishing clear{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">category and product pages</a> and
                trust content, and by being named in Google AI answers, not by chasing &quot;near me&quot;.
              </p>
              <p>
                For Kolkata&apos;s engineering, pharma, and food-processing units, the game is selling to businesses
                all over India. You win with supplier, dealer, and wholesale searches across the whole country, B2B
                pages, and{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">a fast site</a> that
                Google and buyers can read. For coaching centres, clinics, and shops, it is the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">top three
                businesses on the map</a> and your free Google Business Profile.
              </p>
              <p>
                Every FactoryJet Kolkata plan covers the technical side, the right search plan for your market, and
                Google AI answers as standard, then adds content and real{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and
                link we build.
              </p>
              <p>
                For East India firms that also sell in the South, our page on <a href="/seo/chennai" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">SEO in Chennai</a> covers the car-part, IT and hospital searches there.
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
                  { type: 'Sell to the world', need: 'Simple English, your range, trust content, named by AI', area: 'LEATHER · TEA · JUTE → US, EU & JAPAN', colour: '#F05A28' },
                  { type: 'Supply all of India', need: 'Supplier and dealer searches, all-India reach', area: 'ENGINEERING · PHARMA · FOOD PROCESSING', colour: '#F3A07A' },
                  { type: 'Serve the city', need: 'Top three on the map and Google Business Profile', area: 'COACHING · CLINICS · GARIAHAT SHOPS', colour: '#0F0F12' },
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
          headline="Why Kolkata Businesses Choose FactoryJet for SEO"
          lead="Plenty of Kolkata agencies tie clients to 12-month contracts and 40-page reports. FactoryJet pairs AI with senior people, is founder-led, bills monthly, and tells you plainly what SEO can and cannot do in your market."
          pillars={[
            { icon: '01', title: 'Built for AI summaries.', body: 'Kolkata searches more often show an AI answer before any click. We structure your content for AI search from the first month, whether you export from Bantala or sell software from Sector V.' },
            { icon: '02', title: 'No shortcuts.', body: 'No link networks, bought links or throwaway pages. Agencies that promise page one in 30 days are the ones whose clients get penalised. Export house or coaching centre, we build rankings that last.' },
            { icon: '03', title: 'Monthly plan, short report.', body: 'One page each month listing Kolkata searches that moved, visits that became customers, leads we traced, and three next steps. Cancel in any month.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Kolkata SEO, Step by Step" lead="Five steps in a fixed order: audit, plan, repair, publish, report. Reporting starts in week one." stages={KOL_JOURNEY} closingNote="5 STEPS · SENIOR PEOPLE WITH AI · NO LOCK-IN · NO PAID LINKS · EXPORT + ALL-INDIA + CITY" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Kolkata SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>Kolkata and wider India SEO case notes, covering rankings, visits and leads from live FactoryJet work, are being prepared. Our team has built 500+ websites and averages a 4.9 Google review rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Kolkata Agency vs. Freelancer vs. DIY"
          lead="Kolkata businesses have four SEO options. This table compares them on lock-in, scope of work and ownership."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the abroad, all-India, and AI-answer plan most Kolkata agencies do not run.' }}
          columns={KOL_COMPARISON_COLUMNS}
          rows={KOL_COMPARISON_ROWS}
          footer="No fixed term: 30 days notice pauses or ends any FactoryJet plan."
        />

        <IndustriesGrid variant="cards"
          eyebrow="KOLKATA × SEO"
          headline="SEO for Kolkata's Key Industries"
          lead="From Bantala leather export to Sector V IT to Darjeeling tea brands, Kolkata's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Leather & Footwear Export (Bantala)', description: 'The Kolkata Leather Complex at Bantala ships to EU and US buyers. Simple English searches, B2B product catalogs, and being named by Google AI answers, not the local map.' },
            { name: 'Jute & Eco-Packaging', description: 'Jute bags and eco-packaging ride a global sustainability wave. We chase the export and content searches buyers worldwide use, with product pages that turn interest into orders.' },
            { name: 'Tea & Premium D2C (Darjeeling GI)', description: 'Darjeeling tea is known the world over. Premium D2C tea brands win with Shopify and ecommerce SEO, simple English searches, and international discovery, not "near me".' },
            { name: 'IT & SaaS (Sector V, New Town)', description: "East India's largest IT corridor. Mid-size IT services and SaaS firms buy SEO as a lead channel: content that answers the buyer question, plus a spot in Google AI answers." },
            { name: 'Pharma & Engineering', description: 'Engineering goods and pharma units supply businesses across India. Supplier, dealer, and wholesale searches with the regulatory and trust content B2B buyers look for.' },
            { name: 'Coaching, Healthcare & Local Services', description: 'Coaching centres, clinics, and shops need the top three businesses on the map and a strong free Google listing. This is the bread-and-butter local SEO most Kolkata businesses search for.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Kolkata Businesses" lead="Straight answers to the questions Kolkata businesses raise on a first call." categories={KOL_FAQ_CATEGORIES} items={KOL_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Kolkata?"
          sub="Your buyers are in New York, London, and Tokyo, in suppliers and resellers across India, and in students choosing a coaching centre, and they all start on Google or AI. Start with a free check, and we will show you exactly where you stand, whether you export from Bantala, build software in Sector V, or run a clinic in South Kolkata."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No lock-in. All content and links stay yours. Five-minute monthly reports."
        />
        {/* Hub link-back (silo fix, 31 Jul 2026) */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              Kolkata is one market of many. See{' '}
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
