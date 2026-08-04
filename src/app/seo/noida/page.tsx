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
  title: 'SEO Company in Noida | Best SEO Services | FactoryJet',
  description:
    'SEO company in Noida for IT, software, startups, and online brands. Win the local map, Google results, and Google AI answers. No lock-in.',
  keywords: [
    'seo company in noida',
    'seo agency in noida',
    'seo services in noida',
    'best seo company in noida',
    'seo expert in noida',
    'saas seo noida',
    'ecommerce seo noida',
    'seo company sector 62 noida',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Noida | Best SEO Services | FactoryJet',
    description:
      'SEO company in Noida for IT, software, startups, and online brands. Get into the top three businesses on the map, into Google results, and into Google AI answers. No lock-in. Serving Sector 62, Sector 63, the Expressway, and Greater Noida.',
    url: 'https://factoryjet.com/seo/noida',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Noida' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Noida | FactoryJet',
    description: 'SEO company in Noida for IT, software, startups, and online brands. No lock-in. Honest reports.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/noida', languages: seoCityAlternatesIN['noida'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/noida#webpage',
  url: 'https://factoryjet.com/seo/noida',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/seo/noida#localbusiness',
  name: 'FactoryJet SEO Company in Noida',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description:
    'SEO company in Noida for IT, software, startups, and online brands. We fix your site, get you into the top three businesses on the map, into Google results, and into Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/noida',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Ghaziabad' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 28.5355, longitude: 77.391 }, geoRadius: '40000' },
  serviceType: 'Search Engine Optimisation',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/noida#service',
  serviceType: 'SEO Services in Noida',
  name: 'SEO Company in Noida by FactoryJet',
  description: 'SEO company in Noida for IT, software, startups, and online brands. Get into the top three businesses on the map, into Google results, and into Google AI answers. No lock-in.',
  url: 'https://factoryjet.com/seo/noida',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Noida' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/noida#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/noida',
};

const NOI_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'A full check of your Noida site: how fast it loads, whether Google can find and read every page, the links pointing to you, and where you stand against the Sector 62, Sector 63, and Expressway rivals you lose deals to. In plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'A Noida search plan tied to sales: the compare-this-to-that searches for software firms, category and product searches for online brands, and the Google AI answers your better-funded rivals have not claimed. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'We fix the technical side first: the hidden code, speed, the links between pages, and helping Google find and read every page. Then we improve the pages that win you customers, plus your compare pages and your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Content planned with AI and written by a real editor for tech and founder readers, plus real links from genuine Indian and overseas sites. No spammy link tricks, no bought links. (Ongoing)' },
  { number: '05', title: 'Report', description: 'A one-page monthly report your boss will actually read. The searches that moved, visits that turn into customers, the demos and leads we can trace, and the next three things. (Monthly)' },
];

const NOI_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Noida Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const NOI_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Noida?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up Google. The price depends on how competitive your market is and how much work your site needs, so we give you an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long until I see SEO results in Noida?', answer: 'Searches for your own name and the top three businesses on the map usually move in 30 to 60 days. Tough software and category searches take three to six months, because you are often up against well-funded rivals with their own teams. We show early signs of progress from week one.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Noida SEO agencies?', answer: 'We are a small team that uses AI plus senior people, with no sales floor to pay for. AI does the research, the plans, and the reports at scale; experienced people do the strategy, writing, and technical work that moves rankings. You pay for the work, not the overheads.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'No. SEO runs month to month, with 30 days notice to pause or stop. We keep Noida clients by showing real progress, not by tying them to a 12-month deal.' },
  { category: 'included', question: 'What does a Noida SEO plan include?', answer: 'The technical side (a fast site Google can read), better pages that win customers, and local work including your free Google listing. Bigger plans add content written by a real editor, compare pages, real links from trusted sites, and getting picked up by Google AI answers, plus a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build software and compare pages?', answer: 'Yes, and it is one of our strengths for Noida. We build pages that compare you to rivals, "best tool for X" pages, pages that show how you connect with other tools, and content for people ready to buy. This is where software firms actually earn money from search.' },
  { category: 'included', question: 'Can you do SEO for a Noida online brand?', answer: 'Yes. For online stores we sort out category and product pages, the hidden code that helps Google understand your products, big menus that can confuse Google, and buying guides that bring in shoppers. We work on Shopify and custom stores.' },
  { category: 'included', question: 'Do you write the content?', answer: 'We do. AI builds the first outline; a real editor turns it into writing that holds up for a tech, founder, or developer reader and answers the buyer question directly. You approve every piece before it goes live.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes. Many Noida and software "best tool" searches now show a Google AI answer before anyone clicks. We lay out content as clear questions and answers, add the hidden code that helps Google understand your site, and write facts AI can quote, so Google AI answers, ChatGPT, and Perplexity name your business. It is part of every plan.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: a fast site Google can find and read and trust. On-page SEO is what people see on each page, like titles, headings, the words, and the links between pages. You need both, so we fix the plumbing first, then improve the pages.' },
  { category: 'technical', question: 'Will SEO work on my software, Next.js, or WordPress site?', answer: 'Yes. Heavy software and Next.js sites have quirks that can stop Google finding and reading every page, and that is often why a good product is not showing up. We know how to spot and fix them. We also know WordPress and Shopify inside out. Our first check finds anything about your setup that needs care.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes. A fast site both ranks better and turns more visitors into customers, so it is part of the technical work. We make your site quick on mobile. Where your setup is the thing slowing it down, we tell you the fix honestly.' },
  { category: 'local', question: 'Can you help a Noida software or IT firm beat better-funded rivals?', answer: 'Yes. We go after the searches buyers use when they compare tools, build pages that compare you to rivals, and earn real links from trusted sites, so a small Noida software or IT firm can beat companies with much bigger budgets. It takes three to six months of steady work, but the compare-page searches bring in ready-to-buy visitors sooner.' },
  { category: 'local', question: 'Do you cover Greater Noida and the Expressway sectors?', answer: 'Yes. We treat Greater Noida and the Noida Expressway sectors as one market, with separate targeting and free Google listing work for each area where you have an office or serve customers.' },
  { category: 'local', question: 'Which Noida business areas do you target?', answer: 'We match your SEO to where your buyers are. IT and software in the Sector 62 and 63 corridor and the Expressway sectors, startups and online brands across Sectors 125 to 142, and local services across the city. Naming your area in your site’s hidden details helps you show up for nearby searches.' },
  { category: 'local', question: 'Do you also work with Delhi and Gurgaon businesses?', answer: 'Yes. Noida sits inside Delhi NCR, and we work with businesses across the region. Each gets its own targeting and free Google listing work, with a shared content and link plan where it makes sense.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'One page, a five-minute read. The Noida searches that moved and why, visits that turn into customers, the demos and leads we can trace to Google, and the exact three things we are doing next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes, all of it. Every page, plan, and piece lives on your own website and is yours to keep. If you stop working with us, you keep everything. There is no special software you must keep paying for to hold your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'By demos, leads, and sales, not rankings for their own sake. We agree the searches that matter and what counts as a lead up front, set up Google’s free tools properly, and report on the numbers that map to your sales.' },
  { category: 'reporting', question: 'Who works on my Noida account?', answer: 'A small, senior team. FactoryJet is founder-led, so you talk to the people doing the strategy and the technical work, not a junior who got your account on day two.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Noida?',
    answer:
      'For small and mid-size businesses, FactoryJet makes a strong case as the best SEO company in Noida: the same engineers who build fast websites run the SEO services in Noida clients pay for, with a clear monthly report and no long contract. The best SEO services in Noida pass three checks: a plan in simple words, results with real numbers, and the price in writing. We also run local SEO services in Noida, the best local SEO services in Noida manage your Google Business Profile every week, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Noida or work with an agency?',
    answer:
      'Both can work. If you hire SEO expert in Noida alone, you get one set of skills, and SEO needs technical work, writing, and links together. A small senior team gives you all three for a similar monthly cost. Whichever way you go, ask for one example with real numbers before you pay.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: NOI_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const NOI_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Noida Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const NOI_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'N/A'] },
  { feature: 'Software / compare-page SEO', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you into Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fast site Google can read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Real links, no spammy tricks', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep all content & links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function NoidaSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="noi-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="noi-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="noi-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Noida', url: 'https://factoryjet.com/seo/noida' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Noida', url: 'https://factoryjet.com/seo/noida' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_noida_hero" />}
          eyebrow="SEO · NOIDA"
          headline="The SEO Company in Noida That Brings Leads, Not Just Vanity Numbers"
          lead="Noida is North India's tech and media hub. IT firms and big global teams in the Sector 62 and 63 corridor serve clients all over the world, software and online brands along the Expressway sell across India, and electronics giants and Film City studios fill in the rest. Your rivals here often have big budgets and their own teams. FactoryJet builds SEO that wins by being sharper, not by spending more, with monthly reports your boss will actually read."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Ranks vs funded" badgeCity="Noida" />}
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best SEO company in Noida?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              There is no single best SEO company in Noida for every business. A Sector 63 software firm selling to US clients and a Sector 18 retailer filling a shop need opposite plans. As an SEO agency in Noida working across both, FactoryJet starts by asking who actually buys from you, then builds for that: the local map if your customers are nearby, national and international search if they are not, and AI answers either way.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. SEO that beats bigger budgets." />

        <CityContextSection
          eyebrow="NOIDA MARKET"
          headline="Why SEO in Noida Means Beating Better-Funded Rivals"
          leadParagraphs={[
            "Noida is one of India's most packed tech and media areas. The Sector 62 and 63 corridor and the Expressway sectors are home to more than a thousand IT firms, big global teams for names like Microsoft and Barclays, and the chip-design teams of STMicro and Cadence. That changes the game. Your rivals are not small local businesses with no budget, they are well-funded companies with their own content and growth teams chasing the exact searches you need.",
            "Winning on Google in Noida is about being sharper, not spending more. A software firm competes on the searches buyers use when they compare tools, an online brand on category searches, an IT firm on what it can deliver and how well it works with clients abroad. Electronics factories and the Film City studios make Noida a real tech and media centre, but the businesses that actually buy and benefit from SEO are the IT, software, startup, and online brand teams.",
            "The Noida companies that win on Google do the work their better-funded rivals are too busy to do well: a clean, fast site Google can read, real compare pages, and a place in Google AI answers. That is exactly where FactoryJet works.",
          ]}
          stats={[
            { value: '1,500+', label: 'IT and software firms across Noida and the Expressway corridor', sourceUrl: 'https://www.investindia.gov.in/', sourceLabel: 'Invest India' },
            { value: "World's largest", label: 'mobile factory, the Samsung plant in Sector 81', sourceUrl: 'https://news.samsung.com/in/', sourceLabel: 'Samsung Newsroom' },
            { value: '350+', label: 'TV and news channels run from Film City, Sector 16A', sourceUrl: 'https://en.wikipedia.org/wiki/Film_City,_Noida', sourceLabel: 'Film City Noida' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · NOIDA"
          headline="What 'SEO' Actually Means for a Noida Business"
          lead="Noida businesses sell to three different markets. IT firms and big global teams serve clients all over the world, software and online brands sell across India, and local services serve the city and NCR. Each searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Noida&apos;s IT, software, and big global-team firms in the Sector 62 and 63 corridor and along
                the Expressway, SEO is about compare and tech content. Buyers weigh up tools and suppliers against
                others before they book a demo. You win by showing up for &quot;X vs Y&quot; and &quot;best X for
                Z&quot; searches, by publishing content that earns developer and founder trust, and by mixing buyers
                abroad with buyers across India.
              </p>
              <p>
                For Noida&apos;s online brands and stores, the game is{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">category and product SEO across India</a>, with
                product details Google can read and buying guides that bring in shoppers, not browsers. For local
                services across the city and NCR, it is the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">top three businesses on the map</a>, Google Maps, and
                &quot;near me&quot; searches.
              </p>
              <p>
                Every FactoryJet Noida plan covers{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">the technical side</a>, local SEO, and Google AI answers as standard,
                then adds compare content, product SEO, and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and link we
                build, and the reports are built for a founder, not an analyst.
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
                  { type: 'Serve clients worldwide', need: 'Compare and tech content, abroad', area: 'IT · SaaS · GCCs (SECTOR 62 / 63)', colour: '#F05A28' },
                  { type: 'Sell across India', need: 'Category and product SEO across India', area: 'D2C · ECOMMERCE (EXPRESSWAY)', colour: '#F3A07A' },
                  { type: 'Serve Noida and NCR', need: 'Top three on the map, Maps, near-me searches', area: 'LOCAL SERVICES · CLINICS · RETAIL', colour: '#0F0F12' },
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
          headline="Why Noida Businesses Choose FactoryJet for SEO"
          lead="Noida SEO agencies sell 12-month contracts, junior managers, and reports nobody reads. FactoryJet uses AI plus senior people, is founder-led, works month to month, and is built to take on the well-funded teams you are up against."
          pillars={[
            { icon: '01', title: 'AI plus real people, built for the new Google.', body: 'Noida "best tool" and compare searches more and more show a Google AI answer that names a few sites and skips the rest. We get you ready for AI search from day one with clear, well-structured content, so your product gets named, while most local agencies are still chasing ten blue links.' },
            { icon: '02', title: 'No dodgy tricks. Ever.', body: 'No spammy link networks, no bought links, no throwaway pages. We build SEO that lasts, with a clean fast site, real content, and real links from trusted sites, so you keep ranking long after better-funded rivals burn out their shortcuts.' },
            { icon: '03', title: 'Month to month. Reports your boss reads.', body: 'One page a month. The Noida searches that moved, the visits that turned into customers, the demos and leads we can trace, and the next three things. No lock-in, no jargon, no vanity numbers.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Noida SEO, Step by Step" lead="We check before we plan. We fix the basics before we add content. And we report from week one." stages={NOI_JOURNEY} closingNote="5 STEPS · AI PLUS REAL PEOPLE · MONTH TO MONTH · NO SPAMMY LINKS · COMPARE SEO + TOP THREE ON THE MAP + GOOGLE AI ANSWERS" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Noida SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real SEO results, with rankings, visits, and leads, from live FactoryJet work in Noida and across India. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Noida Agency vs. Freelancer vs. DIY"
          lead="There are four ways to do SEO in Noida. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the compare-page and AI-answer plan most Noida agencies do not run.' }}
          columns={NOI_COMPARISON_COLUMNS}
          rows={NOI_COMPARISON_ROWS}
          footer="FactoryJet SEO plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="NOIDA × SEO"
          headline="SEO for Noida's Key Industries"
          lead="From the Sector 62 IT corridor to Expressway startups, Noida's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'IT Services & Global Teams', description: 'Sector 62 and 63 firms and big global teams serving clients all over the world. Searches about what you can deliver, how you compare, and how well you work with clients abroad, plus real result stories.' },
            { name: 'Software', description: 'Product companies along the Expressway. SEO built around the searches buyers use to compare tools, pages that show how you connect with other tools, and tech content that earns developer and founder trust.' },
            { name: 'Startups & Online Brands', description: 'Paytm-era startups and online brands. Online store and product SEO across India, buying guides, and search built for growth.' },
            { name: 'Electronics & Manufacturing', description: 'Samsung and the phone-making cluster. Content that shows you know your stuff and can be trusted, for buyers across India and abroad who buy in bulk.' },
            { name: 'Media & Broadcasting', description: 'The Film City TV and news hub. Content and search work for studios and streaming and content-tech teams reaching all of India.' },
            { name: 'Local Services & Healthcare', description: 'Clinics, advisers, and shops across Noida and NCR. The top three businesses on the map, Google Maps, and searches from people ready to book.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Noida Businesses" lead="The questions we answer on every Noida SEO call, here in plain words." categories={NOI_FAQ_CATEGORIES} items={NOI_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Outrank Funded Competition in Noida?"
          sub="In Noida you are not up against small local businesses, you are up against well-funded teams chasing your exact searches. The way to win is to be sharper, not to spend more. Start with a free check, and we will show you exactly where you stand and what the first 90 days look like."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we build. Reports you'll read in five minutes."
        />
        {/* Hub link-back (silo fix, 31 Jul 2026) */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              We work well beyond Noida. See{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                our SEO services in India
              </a>{' '}
              and how we run a national programme.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
