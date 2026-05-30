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
  title: 'SEO Company in Delhi | AI-Native SEO Agency | FactoryJet',
  description:
    'SEO company in Delhi for handicraft and jewellery exporters, Nehru Place IT traders, wholesalers, and coaching institutes. Win abroad, all over India, and in Google AI answers. No long contracts. Serving Nehru Place, Sadar Bazaar, Okhla, and Karol Bagh.',
  keywords: [
    'seo company in delhi',
    'seo agency in delhi',
    'seo services in delhi',
    'best seo company in delhi',
    'seo expert in delhi',
    'export seo delhi',
    'pan india b2b seo delhi',
    'ecommerce seo delhi',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Delhi | AI-Native SEO Agency | FactoryJet',
    description:
      'SEO company in Delhi for handicraft and jewellery exporters, Nehru Place IT traders, wholesalers, and coaching institutes. Win abroad, all over India, and in Google AI answers. No long contracts. Serving Nehru Place, Sadar Bazaar, Okhla, and Karol Bagh.',
    url: 'https://factoryjet.com/seo/delhi',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Delhi' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Delhi | FactoryJet',
    description: 'SEO company in Delhi for exporters, traders, wholesalers, and coaching institutes. No long contracts. Honest reports.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/delhi', languages: seoCityAlternatesIN['delhi'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/delhi#localbusiness',
  name: 'FactoryJet SEO Company in Delhi',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Delhi for handicraft and jewellery exporters, Nehru Place IT traders, wholesalers, and coaching institutes. We make your site fast and easy for Google to read, and help you win abroad, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/delhi',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'City', name: 'Nehru Place' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Noida' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 28.6139, longitude: 77.209 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500', bestRating: '5', worstRating: '1' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/delhi#service',
  serviceType: 'SEO Services in Delhi',
  name: 'SEO Company in Delhi by FactoryJet',
  description: 'SEO company in Delhi for exporters, traders, wholesalers, and coaching institutes. Win abroad, all over India, and in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/delhi',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Delhi' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does SEO cost in Delhi?', acceptedAnswer: { '@type': 'Answer', text: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' } },
    { '@type': 'Question', name: 'Can you do SEO for a Delhi handicraft or jewellery exporter selling to the US and EU?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is a different job from local SEO. Exporters need the simple English searches that overseas buyers use, content that shows who you are and what you can make so buyers trust you, and a place in Google AI answers and ChatGPT. We chase orders from abroad, not "near me" searches.' } },
    { '@type': 'Question', name: 'Do you handle pan-India trade SEO for a Nehru Place or Sadar Bazaar wholesaler?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Traders and wholesalers sell all over India, so we go after supplier, dealer, and wholesale searches across the whole country, build the category and product pages buyers look for, and add the trust signals that win orders from resellers.' } },
    { '@type': 'Question', name: 'Can you rank a Delhi coaching institute for a national student catchment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mukherjee Nagar and Old Rajinder Nagar draw students from all over India, so we go after searches about results, courses, and how to join, make the site work well on a phone, and build the reviews and brand trust that bring in students. This is all-India SEO, not just local.' } },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/delhi#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/delhi',
};

const DEL_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Delhi site: how fast it loads, whether Google can read it, the links pointing to you, and where you stand against the Nehru Place, Sadar Bazaar, or export-house rivals you lose deals to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Delhi search plan tied to sales: simple English searches that win overseas orders for handicrafts and jewellery, supplier and wholesale searches for traders, searches from students for coaching, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code that helps Google understand your site, speed, the links between your pages, and helping Google find and read every page. Then we improve the pages that win you customers, plus your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for your buyer, plus real links from trusted Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report. The Delhi searches that moved, visits that turn into customers, the leads we can trace, and the next three things. (Monthly)' },
];

const DEL_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Delhi Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const DEL_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Delhi?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Delhi?', answer: 'Delhi is one of the toughest SEO markets in India, so we keep timelines honest. Brand searches and the top three businesses on the map move in 30 to 60 days, and tough "service plus Delhi" searches in four to six months. We show early signs of progress from week one.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Delhi SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no Connaught Place office or sales floor to pay for. AI does the research and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Delhi clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Delhi SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and the right search plan for your market, whether that is selling abroad, supplying all of India, or local. Bigger plans add content, real links, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content that overseas buyers trust?', answer: 'Yes. For handicraft, jewellery, and clothing exporters we write clear, simple English about who you are, your certificates, and what you can make, set out the way overseas buyers and their agents like to see it. This wins enquiries from abroad, and it is also what AI answers quote.' },
  { category: 'included', question: 'Can you handle pan-India trade and wholesale SEO?', answer: 'Yes. For Nehru Place IT traders, Sadar Bazaar wholesalers, and Kashmere Gate car-parts sellers, we go after supplier, dealer, and wholesale searches across the whole country, build category and product pages, and add the trust signals resellers look for.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that sounds human and answers the Delhi buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Many Delhi searches now show an AI answer before anyone clicks. We lay out content as clear questions and answers, add the hidden code that helps Google understand your site, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan, not an extra.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can find, read, and trust. On-page SEO is what people see on each page, like headings, words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Most Delhi searches happen on a phone, so we make your site quick on mobile as part of the technical work. A fast site both ranks better and turns more visitors into customers, so it is never an optional extra.' },
  { category: 'local', question: 'Can you do SEO for a Delhi handicraft or jewellery exporter selling to the US and EU?', answer: 'Yes, and it is a different job from local SEO. Exporters need the simple English searches that overseas buyers use, content that shows who you are and what you can make so buyers and their agents trust you, and a place in Google AI answers and ChatGPT. We chase orders from abroad, not "near me" searches.' },
  { category: 'local', question: 'Do you handle pan-India trade SEO for a Nehru Place or Sadar Bazaar wholesaler?', answer: 'Yes. Traders and wholesalers sell all over India, so we go after supplier, dealer, and wholesale searches across the whole country, build the category and product pages buyers look for, and add the trust signals that win orders from resellers. A bit of local-map work for walk-in buyers sits on top.' },
  { category: 'local', question: 'Can you rank a Delhi coaching institute for a national student catchment?', answer: 'Yes. Mukherjee Nagar and Old Rajinder Nagar draw students from all over India, so we go after searches about results, courses, and how to join, make the site work well on a phone, and build the reviews and brand trust that bring in students. This is all-India SEO, not just local.' },
  { category: 'local', question: 'Do you cover Gurgaon and Noida (NCR) in local SEO?', answer: 'Yes. We treat Gurgaon and Noida as part of greater Delhi NCR, with separate targeting, work on your free Google listing, and local-map content for each area where you have a presence or serve customers.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Delhi searches that moved and why, visits that turn into customers, the leads we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: "By leads and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google's free tools properly, and report on the numbers that map to your Delhi sales." },
  { category: 'reporting', question: 'Who works on my Delhi account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },
];

const DEL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Delhi Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const DEL_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'SEO for selling abroad in simple English', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Top three on the map and free Google listing', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function DelhiSeoPage() {
  return (
    <>
      <Script id="del-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="del-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="del-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Delhi', url: 'https://factoryjet.com/seo/delhi' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · DELHI"
          headline="The SEO Company in Delhi That Brings Leads, Not Just Vanity Numbers"
          lead="Delhi does not have one buyer, it has three. Handicraft and jewellery exporters sell to the US and Europe. Nehru Place IT traders and Sadar Bazaar wholesalers supply the whole of India. Clinics, coaching institutes, and shops serve the city and students from all over the country. One copy-paste SEO plan suits none of them well. FactoryJet matches your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Top 3 on the map" badgeCity="Delhi" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO that wins in Delhi." />

        <CityContextSection
          eyebrow="DELHI MARKET"
          headline="Why SEO in Delhi Is a Different Game"
          leadParagraphs={[
            "Delhi is India's capital and one of its biggest state economies, and it runs on trade and services more than factories. Nehru Place is one of Asia's largest markets for computers and electronics, Sadar Bazaar and Chandni Chowk make up one of India's biggest wholesale hubs, and the city is the country's capital for civil-services coaching. The fight for every business search on Google here is brutal.",
            "That is exactly why a copy-paste SEO plan fails in Delhi. A handicraft exporter selling to the US, a Nehru Place IT trader supplying resellers across India, and a Mukherjee Nagar coaching institute pulling in students nationwide are chasing completely different searches, buyers, and places. Winning means matching your SEO to your own market and buyer, not running the same plan agencies sell to everyone.",
            "The Delhi businesses that win on Google are rarely the biggest spenders. They are the ones with a cleaner, faster site, content that answers the buyer's real question, and a place in Google AI answers their rivals have not even started on. That gap is where FactoryJet works.",
          ]}
          stats={[
            { value: '₹11L Cr+', label: "Delhi's GSDP, among the largest state economies in India", sourceUrl: 'https://delhiplanning.delhi.gov.in/', sourceLabel: 'Delhi Economic Survey' },
            { value: "Asia's largest", label: 'IT and electronics market, at Nehru Place', sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
            { value: '#1', label: 'per-capita income among major Indian states and UTs', sourceUrl: 'https://mospi.gov.in/', sourceLabel: 'MoSPI' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · DELHI"
          headline="What 'SEO' Actually Means for a Delhi Business"
          lead="Delhi does not have one buyer, it has three. Exporters sell to the world, traders and wholesalers supply all of India, and clinics, coaches, and shops serve the city. Each one searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Delhi&apos;s handicraft, jewellery, and clothing exporters around Okhla and the city&apos;s export
                houses, SEO is about reach and trust. Overseas buyers and their agents research for weeks before an
                order. You win by showing up for the simple English searches they use, by publishing clear content
                about your range and who you are, and by being named in Google AI answers, not by chasing &quot;near
                me&quot;.
              </p>
              <p>
                For Delhi&apos;s traders and wholesalers, the Nehru Place IT market, Sadar Bazaar and Chandni Chowk
                wholesale, and Kashmere Gate car parts, the game is selling to businesses all over India. You win with
                supplier, dealer, and wholesale searches across the whole country, category and product pages, and
                content that makes resellers trust you. For clinics, coaching, and shops, it is the top three
                businesses on the map and Google Maps, plus all-India searches from students for the coaching hubs.
              </p>
              <p>
                Every FactoryJet Delhi plan covers the technical side, the right search plan for your market, and
                Google AI answers as standard, then adds content and links over time. You keep every page, plan, and
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
                  { type: 'Sell to the world', need: 'Simple English, your range, trust content, named by AI', area: 'HANDICRAFTS · JEWELLERY · CLOTHING → US & EU', colour: '#F05A28' },
                  { type: 'Supply all of India', need: 'Supplier and dealer searches, all-India reach', area: 'NEHRU PLACE · SADAR BAZAAR · KASHMERE GATE', colour: '#F3A07A' },
                  { type: 'Serve the city and the country', need: 'Top three on the map and Google Maps, plus student searches', area: 'CLINICS · COACHING · CP SHOPS', colour: '#0F0F12' },
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
          headline="Why Delhi Businesses Choose FactoryJet for SEO"
          lead="Delhi SEO agencies sell 12-month contracts, junior managers, and 40-page reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is honest about what SEO can and cannot do in one of India's toughest markets."
          pillars={[
            { icon: '01', title: 'AI plus real people, built for the new Google.', body: 'Delhi searches more and more show an AI answer before anyone clicks. We get you ready for AI search from day one with clear, well-structured content, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link networks, no bought links, no throwaway pages. In a market watched as closely as Delhi, the agencies promising rank-in-30-days are the ones who get clients punished by Google. We build SEO that lasts.' },
            { icon: '03', title: 'Month to month. Reports you read.', body: 'One page a month. The Delhi searches that moved, the visits that turned into customers, the leads we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Delhi SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={DEL_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · ABROAD + ALL-INDIA + LOCAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Delhi SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and leads, from live FactoryJet work in Delhi and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Delhi Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Delhi. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the abroad, all-India, and AI-answer plan most Delhi agencies do not run.' }}
          columns={DEL_COMPARISON_COLUMNS}
          rows={DEL_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="DELHI × SEO"
          headline="SEO for Delhi's Key Industries"
          lead="From Nehru Place IT trade to Sadar Bazaar wholesale to handicraft export houses, Delhi's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Computers & Electronics Trade', description: 'Nehru Place, the largest computer-hardware market in Asia. All-India reseller and supplier searches, plus a spot in the top three businesses on the map for walk-in buyers.' },
            { name: 'Wholesale & Trade', description: 'Sadar Bazaar, Chandni Chowk, and Khari Baoli supply shops across North India and beyond. Supplier, wholesale, and dealer searches with content that makes resellers trust you.' },
            { name: 'Handicraft, Jewellery & Clothing Export', description: 'The export bodies EPCH and AEPC are based in Delhi; the buyers are in the US and EU. Simple English searches, trust content, and being named by Google AI answers, not the local map.' },
            { name: 'Coaching & Exam Prep', description: 'Mukherjee Nagar and Old Rajinder Nagar pull in UPSC students from across India. Searches about results and how to join, a site that works well on a phone, and brand SEO.' },
            { name: 'Car Parts & Trade', description: 'Kashmere Gate and Mayapuri supply mechanics and workshops across North India. Searches for parts and what you can supply, plus the kind of business-to-business intent you see on IndiaMART.' },
            { name: 'Healthcare & Professional Services', description: 'Clinics and labs need the top three on the map and Google Maps; CA, law, and consulting firms need trust-building content and all-India reach.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Delhi Businesses" lead="The questions we answer on every Delhi SEO call, here in plain words." categories={DEL_FAQ_CATEGORIES} items={DEL_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Delhi?"
          sub="Your buyers are in New York and London, in resellers across India, and in students choosing a coaching institute, and they all start on Google or AI. Start with a free check, and we will show you exactly where you stand, whether you export from Okhla, trade from Nehru Place, or run a clinic in South Delhi."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
