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
  title: 'SEO Agency in Mumbai | AI-Native SEO Company | FactoryJet',
  description:
    'SEO agency in Mumbai for banks & finance, media, online brands, and gem & pharma exporters. Win across India, abroad, and in Google AI answers. No lock-in. Serving BKC, Nariman Point, Andheri, SEEPZ & Lower Parel.',
  keywords: [
    'seo agency in mumbai',
    'seo company in mumbai',
    'seo services in mumbai',
    'best seo company in mumbai',
    'top seo company in mumbai',
    'seo company in navi mumbai',
    'professional seo services in mumbai',
    'ecommerce seo mumbai',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency in Mumbai | AI-Native SEO Company | FactoryJet',
    description:
      'SEO agency in Mumbai for banks & finance, media, online brands, and gem & pharma exporters. Win across India, abroad, and in Google AI answers. No lock-in. Serving BKC, Nariman Point, Andheri, SEEPZ & Lower Parel.',
    url: 'https://factoryjet.com/seo/mumbai',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Agency in Mumbai' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mumbai | FactoryJet',
    description: 'SEO agency in Mumbai for banks & finance, media, online brands, and exporters. Win across India, abroad, and in Google AI answers. No lock-in.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/mumbai', languages: seoCityAlternatesIN['mumbai'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/mumbai#localbusiness',
  name: 'FactoryJet SEO Agency in Mumbai',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO agency in Mumbai for banks and finance, media, and online brands, and for gem and pharma exporters. We fix your site and help you win across India, abroad, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/mumbai',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Bandra Kurla Complex' },
    { '@type': 'City', name: 'Andheri' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 19.076, longitude: 72.8777 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
  priceRange: '₹₹',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500', bestRating: '5', worstRating: '1' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/mumbai#service',
  serviceType: 'SEO Services in Mumbai',
  name: 'SEO Agency in Mumbai by FactoryJet',
  description: 'SEO agency in Mumbai for banks & finance, media, online brands, and gem & pharma exporters. Win across India, abroad, and in Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/mumbai',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Mumbai' },
  offers: { '@type': 'Offer', price: '19999', priceCurrency: 'INR', description: 'SEO services for Indian businesses start from ₹19,999/month. Month to month, no lock-in.' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does SEO cost in Mumbai?', acceptedAnswer: { '@type': 'Answer', text: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' } },
    { '@type': 'Question', name: 'Can you do SEO for a Mumbai gems, jewellery, or pharma exporter selling globally?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is a different game from local SEO. Exporters near the Bharat Diamond Bourse, SEEPZ, and the big pharma firms need the simple English searches that overseas buyers use, content that builds trust with buyers and regulators, and a presence in AI answers like ChatGPT and Google. We chase orders from abroad, not "near me" searches.' } },
    { '@type': 'Question', name: 'Do you do SEO for a Mumbai bank, fintech, or media brand competing across India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mumbai is a head-office city, so we go after all-India and category searches, build content that shows you lead your field, and add the trust signals that win in banking, finance, fintech, and media. This is national brand SEO, not the local map.' } },
    { '@type': 'Question', name: 'Do you cover Navi Mumbai and Thane in local SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We treat Navi Mumbai (Vashi, Belapur) and Thane as part of greater Mumbai, with separate targeting, Google listing work, and local-map content for each area where you have a presence or serve customers.' } },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/mumbai#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/mumbai',
};

const MUM_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Mumbai site: how fast it loads, whether Google can read it, the links pointing to you, and where you stand against the BKC, Lower Parel, or Andheri rivals you lose to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Mumbai search plan tied to sales: searches that win overseas orders, the all-India brand and category searches for banks, finance, and media, online-store searches for brands, and the Google AI answers your rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code, speed, and links between pages. Then we improve the pages that win you customers, plus your Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for your buyer, plus real links from genuine Indian and overseas sites. No spammy links, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report. The Mumbai searches that moved, visits that turn into customers, the leads we can trace, and the next three things. (Monthly)' },
];

const MUM_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Mumbai Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const MUM_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Mumbai?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Mumbai?', answer: "Mumbai is India's toughest SEO market, so we keep timelines honest. Brand and local-map searches move in 30 to 60 days, and tough all-India or category searches in four to six months. We show early signs of progress from week one, so you can see things heading the right way before the sales arrive." },
  { category: 'pricing', question: 'Why is FactoryJet different from other Mumbai SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no BKC office or sales floor to pay for. AI does the research and reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Mumbai clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Mumbai SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and the right search plan for your market, whether that is selling abroad, winning across India, or local. Bigger plans add content, real links, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content that overseas buyers and national audiences trust?', answer: 'Yes. For exporters we write clear, simple English about who you are and what you can make, so overseas buyers trust you. For banks, finance, and media brands competing across India we build content that shows you lead your field. Both win enquiries, and both are what AI answers quote.' },
  { category: 'included', question: 'Can you do SEO for a Mumbai online store or brand?', answer: 'Yes. For online stores we sort out category and product pages, the hidden product details Google reads, big menus that can confuse Google, and buying guides. Mumbai online brands sell all over India, so we go after all-India demand. We work on Shopify and custom stores.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that sounds human and answers the Mumbai buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Many Mumbai searches now show an AI answer before anyone clicks. We lay out content as clear questions and answers, add the hidden code that builds trust, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan, not an extra.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can read and trust. On-page SEO is what people see on each page, like headings, words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes, we work with whatever you have. We know WordPress and Shopify inside out, and can often work directly on modern custom sites too. Our first check finds anything about your setup that needs care, so there are no surprises.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. Most Mumbai searches happen on a phone, so we make your site quick on mobile as part of the technical work. A fast site both ranks better and turns more visitors into customers, so it is never an optional extra.' },
  { category: 'local', question: 'Can you do SEO for a Mumbai gems, jewellery, or pharma exporter selling globally?', answer: 'Yes, and it is a different game from local SEO. Exporters near the Bharat Diamond Bourse, SEEPZ, and the big pharma firms need the simple English searches that overseas buyers use, content that builds trust with buyers and regulators, and a presence in AI answers like ChatGPT and Google. We chase orders from abroad, not "near me" searches.' },
  { category: 'local', question: 'Do you do SEO for a Mumbai bank, fintech, or media brand competing across India?', answer: 'Yes. Mumbai is a head-office city, so we go after all-India and category searches, build content that shows you lead your field, and add the trust signals that win in banking, finance, fintech, and media. This is national brand SEO, not the local map.' },
  { category: 'local', question: 'Which Mumbai areas do you target?', answer: 'We match your SEO to where your buyers are: banks and corporates in BKC, Nariman Point, and Lower Parel; media and startups in Andheri and Bandra; export and factories in SEEPZ and MIDC Andheri; online brands and shops across the western suburbs. Naming your area in your site’s hidden details helps you show up for nearby searches.' },
  { category: 'local', question: 'Do you cover Navi Mumbai and Thane in local SEO?', answer: 'Yes. We treat Navi Mumbai (Vashi, Belapur) and Thane as part of greater Mumbai, with separate targeting, Google listing work, and local-map content for each area where you have a presence or serve customers.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Mumbai searches that moved and why, visits that turn into customers, the leads we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By leads and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your Mumbai sales.' },
  { category: 'reporting', question: 'Who works on my Mumbai account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },
];

const MUM_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Mumbai Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const MUM_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'Plan for India, abroad, and local', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real links, no spammy tricks', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function MumbaiSeoPage() {
  return (
    <>
      <Script id="mum-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="mum-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="mum-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Mumbai', url: 'https://factoryjet.com/seo/mumbai' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO · MUMBAI"
          headline="The SEO Agency in Mumbai That Brings Leads, Not Just Rankings"
          lead="Mumbai is India's business capital, and most of its business is national or worldwide, not local. Banks, finance, and media brands in BKC and Lower Parel lead the whole country. Gem exporters at the Bharat Diamond Bourse and big pharma firms sell to the world. Online brands ship all over India. Plain local SEO suits almost none of them. We match your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="National + global" badgeCity="Mumbai" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO that wins in Mumbai." />

        <CityContextSection
          eyebrow="MUMBAI MARKET"
          headline="Why SEO in Mumbai Is About All India and the World, Not Just Mumbai"
          leadParagraphs={[
            "Mumbai is India's business capital, and calling it a local market misses the point. It is a head-office city and a gateway for exports. The banks and finance firms in BKC and Nariman Point set the pace for the whole country. The media and advertising cluster in Andheri and Bandra makes content for all of India. The Bharat Diamond Bourse and SEEPZ run on trade with other countries.",
            "So a Mumbai business almost never sells only to Mumbai. A gem exporter sells to the US and Europe and needs simple English content that builds trust. A bank, finance, or media brand competes across India and needs content that shows it leads its field. An online brand ships all over India and needs online-store SEO. Only clinics, shops, and local services live on the local map. The right SEO depends entirely on which of these you are.",
            "The Mumbai businesses that win on Google are rarely the biggest spenders. They are the ones whose SEO matches the buyer, with a cleaner, faster site, content that answers the real question, and a place in Google AI answers their rivals have not started on. That gap is where FactoryJet works.",
          ]}
          stats={[
            { value: '~70%', label: "of India's capital-market transactions run through Mumbai", sourceUrl: 'https://www.india-briefing.com/news/mumbai-india-economy-investment-profile-6704.html/', sourceLabel: 'India Briefing' },
            { value: "World's largest", label: 'diamond bourse, the Bharat Diamond Bourse in BKC', sourceUrl: 'https://en.wikipedia.org/wiki/Bharat_Diamond_Bourse', sourceLabel: 'Bharat Diamond Bourse' },
            { value: '>50%', label: "of India's containerised cargo moves through JNPT near Mumbai", sourceUrl: 'https://en.wikipedia.org/wiki/Jawaharlal_Nehru_Port', sourceLabel: 'JN Port' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · MUMBAI"
          headline="What 'SEO' Actually Means for a Mumbai Business"
          lead="Mumbai sells to three different markets. Exporters sell to the world; banks, finance, media, and online brands lead and sell across India; clinics and shops serve the city. Each searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Mumbai&apos;s gem, jewellery, and pharma exporters around the Bharat Diamond Bourse, SEEPZ, and the
                big pharma firms, SEO is about reach and trust. Overseas buyers and regulators research for weeks before
                an order. You win by showing up for the simple English searches they use, by publishing clear content
                about who you are and what you can make, and by being named in AI answers, not by chasing &quot;near
                me&quot;.
              </p>
              <p>
                For Mumbai&apos;s banks, finance, media, and online brands in BKC, Lower Parel, Andheri, and Bandra, the
                game is national. Banks and media compete on brand and category searches with strong, trustworthy
                content; online brands compete on all-India shopping demand. For clinics, shops, and local services, it
                is the local map and Google Maps.
              </p>
              <p>
                Every FactoryJet Mumbai plan covers the technical side, the right search plan for your market, and
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
                  { type: 'Sell to the world', need: 'Simple English, trust content, named by AI', area: 'GEMS · JEWELLERY · PHARMA (BDB · SEEPZ)', colour: '#F05A28' },
                  { type: 'Lead and sell across India', need: 'Brand, category, and online-store SEO', area: 'FINANCE · MEDIA · ONLINE BRANDS (BKC · LOWER PAREL · ANDHERI)', colour: '#F3A07A' },
                  { type: 'Serve the city', need: 'Local map and Google Maps', area: 'CLINICS · SHOPS · SERVICES (WESTERN SUBURBS)', colour: '#0F0F12' },
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
          headline="Why Mumbai Businesses Choose FactoryJet for SEO"
          lead="Mumbai SEO agencies sell 12-month contracts, junior managers, and 40-page reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is honest about what SEO can and cannot do in India's toughest market."
          pillars={[
            { icon: '01', title: 'AI plus real people, built for the new Google.', body: 'Mumbai searches, national and local, more and more show an AI answer before anyone clicks. We get you ready for AI search from day one with clear, well-structured content, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link networks, no bought links, no throwaway pages. For a bank, pharma, or listed brand, a Google punishment is a trust and rules problem. We build SEO that lasts.' },
            { icon: '03', title: 'Month to month. Reports you read.', body: 'One page a month. The Mumbai searches that moved, the visits that turned into customers, the leads we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Mumbai SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={MUM_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · INDIA + WORLD + LOCAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Mumbai SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and leads, from live FactoryJet work in Mumbai and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating, including Mumbai brands Belle Maison and Bombay Petals.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Mumbai Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Mumbai. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the all-India, overseas, and AI-answer plan most Mumbai agencies do not run.' }}
          columns={MUM_COMPARISON_COLUMNS}
          rows={MUM_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid
          eyebrow="MUMBAI × SEO"
          headline="SEO for Mumbai's Key Industries"
          lead="From BKC finance to Andheri media to the Bharat Diamond Bourse, Mumbai's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Banks, Finance & Fintech', description: 'Banks, insurers, and fintechs in BKC, Nariman Point, and Lower Parel. All-India brand and category searches, trust-building content, and the signals that win long, careful buying journeys.' },
            { name: 'Media, Entertainment & Advertising', description: 'Studios, streaming, and ad agencies in Andheri and Bandra making content for all of India. Brand, campaign, and content SEO at national scale.' },
            { name: 'Gems & Jewellery Export', description: 'The Bharat Diamond Bourse and SEEPZ export cluster. The simple English searches overseas buyers use, trust-building content, and being named by AI for buyers abroad.' },
            { name: 'Pharmaceuticals', description: 'Head-office city for global generic-medicine exporters. Content that shows you follow the rules and can deliver, simple English searches, and being named by AI for buyers and procurement teams.' },
            { name: 'Online Brands & Stores', description: 'Mumbai online brands selling all over India. Category and product SEO, the hidden product details Google reads, buying guides, and pages built to turn visits into sales.' },
            { name: 'Professional Services & Healthcare', description: 'CA, law, and consulting firms, plus clinics and labs. Trust-building content and national reach for services, and the local map and Google Maps for clinics.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Mumbai Businesses" lead="The questions we answer on every Mumbai SEO call, here in plain words." categories={MUM_FAQ_CATEGORIES} items={MUM_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Mumbai?"
          sub="Mumbai is the hardest SEO market in India, and the most valuable. Your buyers are in New York and London, in boardrooms across India, and on a phone in the western suburbs, and they all start on Google or AI. Start with a free check, and we will show you exactly where you stand against your BKC, Andheri, or Bandra rivals."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
