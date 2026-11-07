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
  title: 'SEO Company in Ahmedabad | Best SEO Services | FactoryJet',
  description:
    'SEO company in Ahmedabad for pharma and denim exporters, chemical makers, and engineering firms. Win orders abroad and across India, and in Google AI answers.',
  keywords: [
    'seo company in ahmedabad',
    'seo agency in ahmedabad',
    'seo services in ahmedabad',
    'best seo company in ahmedabad',
    'seo expert in ahmedabad',
    'b2b seo ahmedabad',
    'export seo ahmedabad',
    'pharma seo ahmedabad',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Company in Ahmedabad | Best SEO Services | FactoryJet',
    description:
      'SEO company in Ahmedabad for pharma and denim exporters, chemical makers and engineering firms. Win orders abroad, across India and in Google AI answers.',
    url: 'https://factoryjet.com/seo/ahmedabad',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Company in Ahmedabad' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Ahmedabad | FactoryJet',
    description: 'SEO company in Ahmedabad for exporters, chemical makers, and engineering firms. Win orders from abroad and win across India. No long contracts.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/ahmedabad', languages: seoCityAlternatesIN['ahmedabad'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-10-21';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/ahmedabad#webpage',
  url: 'https://factoryjet.com/seo/ahmedabad',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/seo/ahmedabad#localbusiness',
  name: 'FactoryJet SEO Company in Ahmedabad',
  image: 'https://factoryjet.com/images/services/seo.webp',
  description: 'SEO company in Ahmedabad for pharma and denim exporters, chemical makers, and engineering firms. We make your site fast and easy for Google to read, build a search plan for orders from abroad and across India, and get you named in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/ahmedabad',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'Sanand' },
    { '@type': 'City', name: 'Changodar' },
  ],
  geo: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 23.0225, longitude: 72.5714 }, geoRadius: '50000' },
  serviceType: 'Search Engine Optimisation',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/ahmedabad#service',
  serviceType: 'SEO Services in Ahmedabad',
  name: 'SEO Company in Ahmedabad by FactoryJet',
  description: 'SEO company in Ahmedabad for pharma and denim exporters, chemical makers, and engineering firms. Win orders from abroad, win across India, and get named in Google AI answers. No long contracts.',
  url: 'https://factoryjet.com/seo/ahmedabad',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'City', name: 'Ahmedabad' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/ahmedabad#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/ahmedabad',
};

const AHM_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check', description: 'We audit your Ahmedabad site for load speed, crawl and indexing gaps, and backlinks, then compare it with the pharma, denim or chemical suppliers who win the orders you miss. Written in plain words. (Week 1)' },
  { number: '02', title: 'Plan', description: 'An Ahmedabad search plan tied to sales: simple English searches that win orders from abroad for pharma and textiles, all-India searches for chemicals and engineering, and the top three businesses on the map for city services. (Week 1 to 2)' },
  { number: '03', title: 'Build', description: 'Technical repairs come first: page speed, crawl errors, internal links, and the markup that tells Google what a product or grade is. Next we rework your best enquiry pages and your free Google listing. (Week 2 to 4)' },
  { number: '04', title: 'Content & Links', description: 'Each month we publish what your buyers look for, such as approval details for pharma or fabric specs for denim, drafted with AI and finished by an editor. Links come from real Indian and overseas sites, never bought. (Ongoing)' },
  { number: '05', title: 'Report', description: 'One page each month: searches that moved, visits that became enquiries, leads traced to Google, and the next three tasks. (Monthly)' },
];

const AHM_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'technical', label: 'Tech & Google' },
  { key: 'local', label: 'Ahmedabad Local' },
  { key: 'reporting', label: 'Reports & Ownership' },
];

const AHM_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much does SEO cost in Ahmedabad?', answer: 'Price follows the work your site needs and how hard your market is. A Changodar pharma exporter chasing US buyers needs more work than a clinic on CG Road. We run a free check first, then quote one exact monthly figure in writing. There are no fixed packages. Billing is month to month, and 30 days notice ends it.' },
  { category: 'pricing', question: 'How long until I see SEO results in Ahmedabad?', answer: 'Your brand name and map listing tend to climb within 30 to 60 days. Export and trade searches, where you compete with suppliers from other countries, need four to six months of content and trust building. From week one you see early markers, such as new pages Google starts to show, well before orders follow.' },
  { category: 'pricing', question: 'Why is FactoryJet different from other Ahmedabad SEO agencies?', answer: 'FactoryJet runs lean. AI handles research and reporting at volume. Senior people handle strategy, writing and technical fixes, the parts that move rankings. There is no large office or sales floor built into your fee, so your money goes into the work.' },
  { category: 'pricing', question: 'Do you require a long-term contract?', answer: 'None. Plans renew each month and stop with 30 days notice. If we cannot show an Ahmedabad client progress, we do not deserve a 12-month lock-in.' },
  { category: 'included', question: 'What does an Ahmedabad SEO plan include?', answer: 'Every plan fixes the technical base so Google can read a fast site, improves the pages that bring enquiries, and sets a search plan for where you sell: overseas, across India, or in the city. Larger plans add content, earned links and work on Google AI answers. You also get a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you build content that overseas buyers trust?', answer: 'Yes. Pharma, denim and textile buyers abroad check approvals, capacity and delivery record before they ask for a quote. We set those facts out in plain English, in the order sourcing agents read them. That earns export enquiries, and it is the material Google AI answers tend to quote.' },
  { category: 'included', question: 'Can you handle catalogue and product SEO for business buyers?', answer: 'Yes. For chemical, dye, and engineering suppliers we sort out the category, product, and detail pages, add the hidden code that helps Google understand your products, and go after the searches buyers use (by supplier, grade, and use). We work on WordPress, Shopify, and custom sites.' },
  { category: 'included', question: 'Do you write the content?', answer: 'Yes. AI drafts the outline. An editor then writes for your buyer, whether a sourcing agent or a plant purchase head, in plain language. Nothing goes live until you approve it.' },
  { category: 'technical', question: 'Do you help me show up in Google AI answers?', answer: 'Yes, on every plan. Export and trade buyers often ask ChatGPT or Perplexity for a supplier shortlist before they search Google. We structure pages as questions and answers, add trust markup, and state facts an AI can quote, so your firm has a chance to be named.' },
  { category: 'technical', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is what Google sees under the hood: speed, crawling, and the markup that explains your products. On-page SEO is what a buyer sees: headings, copy and links between pages. We fix the first, then the second, because good pages on a broken site do not rank.' },
  { category: 'technical', question: 'Will SEO work on my WordPress, Shopify, or custom site?', answer: 'Yes. WordPress and Shopify are routine for us, and most modern custom builds are workable too. The free check flags anything about your setup that needs extra care before we start.' },
  { category: 'technical', question: 'Do you fix site speed?', answer: 'Yes, as part of the technical work. Most Indian searches happen on phones, and many overseas buyers open your catalogue on mobile too. A quick site ranks better and turns more visitors into enquiries.' },
  { category: 'local', question: 'Can you do SEO for an Ahmedabad pharma or denim exporter selling globally?', answer: 'Yes. That is separate work from local SEO. Overseas buyers search in plain English for suppliers, want proof of compliance and capacity, and more and more ask ChatGPT or Google AI for names. We target those buyers, not "near me" searches in the city.' },
  { category: 'local', question: 'Do you handle pan-India B2B SEO for a chemical or dye maker in Vatva or Naroda?', answer: 'Yes. Chemical, dye, and intermediate makers sell all over India, so we go after the searches buyers across India use (by supplier, grade, and use), build the product and detail pages they look for, and add the trust signals that win orders.' },
  { category: 'local', question: 'Can you do SEO for auto-parts or engineering suppliers around Sanand?', answer: 'Yes. We go after the searches that bring in long buyer checks from car makers and big firms, build content that earns trust, and make sure your site shows up when a buying team looks for an approved supplier, in India or abroad.' },
  { category: 'local', question: 'Do you cover Gandhinagar and GIFT City businesses?', answer: 'Yes. We treat Gandhinagar and GIFT City as part of the wider Ahmedabad area, with separate targeting for the banks and finance firms there, alongside your Ahmedabad presence.' },
  { category: 'reporting', question: 'What does your monthly report look like?', answer: 'A single page you can read in five minutes: which searches moved and why, visits that became enquiries, leads traced back to Google, and the three tasks for next month.' },
  { category: 'reporting', question: 'Do I own the content and links you build?', answer: 'Yes. Pages, plans and links sit on your website and stay yours if you leave. No tool or licence of ours is needed to keep your rankings.' },
  { category: 'reporting', question: 'How do you measure success?', answer: 'Enquiries and orders, with rankings as a means to them. Before work starts we agree which searches count and what a lead looks like, set up Google’s free tools, then report against those numbers.' },
  { category: 'reporting', question: 'Who works on my Ahmedabad account?', answer: 'Senior people only. FactoryJet is founder-led, so the person setting your strategy is the person you speak to. Your account is never handed to a junior after the first call.' },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best SEO agency in Ahmedabad?',
    answer:
      'For small and mid-size firms, FactoryJet is a strong choice for the best SEO company in Ahmedabad: one team builds fast sites and runs the SEO services in Ahmedabad clients pay for, with a monthly report and no lock-in. Judge any provider of the best SEO services in Ahmedabad on three things: a plan in plain words, results with real numbers, and a written price. Our local SEO services in Ahmedabad cover your Google Business Profile too, and the best local SEO services in Ahmedabad update it every week, not once a quarter.',
  },
  {
    category: 'pricing',
    question: 'Should I hire SEO expert in Ahmedabad or work with an agency?',
    answer:
      'Either can work. Hire SEO expert in Ahmedabad on your own and you get one person’s skills, while SEO needs technical fixes, writing and links at once. A small senior team covers all three for a similar monthly spend. Ask for one result with real numbers before you pay anyone.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AHM_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const AHM_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Ahmedabad Agency' },
  { label: 'Freelancer' },
  { label: 'DIY' },
] as const;

const AHM_COMPARISON_ROWS = [
  { feature: 'Contract length', values: ['Monthly, no lock-in', 'Often 6 to 12 months', 'Varies', 'N/A'] },
  { feature: 'Plan for abroad, all-India, and local', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Work on Google AI answers', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Technical fixes and speed', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Earned links only', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'One-page monthly report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You own everything built', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
];

export default function AhmedabadSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="ahm-seo-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="ahm-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ahm-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Ahmedabad', url: 'https://factoryjet.com/seo/ahmedabad' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Ahmedabad', url: 'https://factoryjet.com/seo/ahmedabad' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_ahmedabad_hero" />}
          eyebrow="SEO · AHMEDABAD"
          headline="The SEO Company in Ahmedabad That Brings Leads, Not Just Vanity Numbers"
          lead="Ahmedabad runs on exports and factories, not shops. Pharma firms in Changodar and denim mills in Naroda ship to the US, Europe, and more than 100 countries. Chemical and dye makers in Vatva supply factories across India. Car-part and engineering suppliers around Sanand sell to big makers nationwide. One standard SEO plan suits none of them. FactoryJet matches your SEO to the market you actually sell to, with monthly reports you can read in five minutes."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Picked up by Google AI answers', 'No long contracts', '500+ sites done']}
          rightSlot={<HeroBrowserMockup badgeLabel="Global rankings" badgeCity="Ahmedabad" />}
        />

        {/* Answer-first block (BLUF): the direct answer, written to be quoted by
            Google AI Overviews, ChatGPT, Gemini and Perplexity. */}
        <section className="border-y border-fj-ink/10 bg-white px-6 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-fj-display text-2xl font-bold tracking-[-0.02em] text-fj-ink md:text-3xl">
              So, which is the best SEO company in Ahmedabad?
            </h2>
            <p className="mt-4 font-fj-body text-lg leading-relaxed text-fj-ink/80">
              There is no single best SEO company in Ahmedabad for every business. Pharma and denim exporters chasing orders abroad, chemical and engineering firms supplying across India, and local services in Satellite or Prahlad Nagar need very different plans. FactoryJet provides SEO services in Ahmedabad matched to which of those you are, rather than one template applied to all three.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average Google review rating. SEO built for exporters and business buyers." />

        <CityContextSection
          eyebrow="AHMEDABAD MARKET"
          headline="Why SEO in Ahmedabad Is Built for Exporters and Business Buyers"
          leadParagraphs={[
            "Ahmedabad sits in India's top exporting state, and it runs on industry, not shops. Pharma firms like Zydus, Torrent, and Intas export to more than a hundred countries from Changodar, Sanand, and the PHARMEZ zone. The denim mills that earned the city its Manchester of the East name, led by Arvind, supply global brands and sell wholesale across India. Vatva and Naroda make up one of India's largest chemical and dye clusters.",
            "So an Ahmedabad business almost never sells only to the city. Pharma and denim exporters sell to the world and need SEO that wins orders from abroad and builds trust. Chemical, dye, and car-part makers supply factories across India and need SEO that wins buyers across the country. Only a smaller group of clinics, shops, and local services lives on the top three businesses on the map.",
            "The Ahmedabad businesses that win on Google are the ones whose SEO matches the buyer: an exporter showing up for the US wholesale search, a chemical maker showing up for the grade a buying team looks for, named by Google AI answers for what they can make. That is exactly where FactoryJet works.",
          ]}
          stats={[
            { value: 'Manchester of the East', label: "India's denim capital, anchored by Arvind, the country's largest denim maker", sourceUrl: 'https://www.arvind.com/', sourceLabel: 'Arvind Ltd' },
            { value: '100+ countries', label: 'export reach of Ahmedabad pharma majors Zydus, Torrent and Intas', sourceUrl: 'https://www.ibef.org/industry/pharmaceutical-india', sourceLabel: 'IBEF' },
            { value: '~30%', label: "of India's exports come from Gujarat, with Ahmedabad a primary engine", sourceUrl: 'https://www.investindia.gov.in/state/gujarat', sourceLabel: 'Invest India' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO · AHMEDABAD"
          headline="What 'SEO' Actually Means for an Ahmedabad Business"
          lead="Ahmedabad sells to three different markets. Pharma and denim exporters sell to the world, chemical and engineering makers supply India, and clinics and shops serve the city. Each one searches differently, so we match your plan to the market you actually sell to."
          body={
            <>
              <p>
                For Ahmedabad&apos;s pharma, denim, and textile exporters in Changodar, Sanand, and Naroda, SEO is
                about reach and trust. Overseas buyers and regulators research for weeks before an order. You win by
                showing up for the simple English wholesale and supplier searches they use, by publishing clear content
                about your approvals and what you can make, and by being named in Google AI answers, not by chasing
                &quot;near me&quot;.
              </p>
              <p>
                For Ahmedabad&apos;s chemical, dye, and car-part makers in Vatva, Naroda, and Sanand, the game is
                selling across India to other businesses. Buying teams search by grade, ingredient, part, and use. You
                win with{' '}
                <a href="/seo/ecommerce-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">strong product and detail pages</a>, the hidden code that helps Google understand your products,
                and the trust signals that get you on the shortlist. For clinics, shops, and local services, it is the{' '}
                <a href="/seo/local-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">top three businesses on the map</a> and Google Maps. If you still need the store itself, our{' '}
                <a href="/services/ecommerce-development/ahmedabad" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">ecommerce development in Ahmedabad</a> page covers the build.
              </p>
              <p>
                Every FactoryJet Ahmedabad plan covers{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">the technical side</a>, the right search plan for your market, and
                Google AI answers as standard, then adds content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">links</a> over time. You keep every page, plan, and
                link we build.
              </p>
              <p>
                Sanand&apos;s car-part makers sell to the same carmakers as the Sriperumbudur belt near Chennai. Our page on <a href="/seo/chennai" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">SEO in Chennai</a> covers how we plan for that market.
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
                  { type: 'Sell to the world', need: 'Simple English, trust content, named by AI', area: 'PHARMA · DENIM · TEXTILES → US, EU & 100+ COUNTRIES', colour: '#F05A28' },
                  { type: 'Sell across all of India', need: 'Searches buyers use, all-India reach', area: 'CHEMICALS · DYES · AUTO (VATVA · SANAND)', colour: '#F3A07A' },
                  { type: 'Serve the city', need: 'Top three on the map and Google Maps', area: 'CLINICS · RETAIL · SERVICES (SG HIGHWAY · CG ROAD)', colour: '#0F0F12' },
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
          headline="Why Ahmedabad Businesses Choose FactoryJet for SEO"
          lead="Many Ahmedabad agencies sell 12-month contracts run by junior managers. FactoryJet pairs AI with senior people, is founder-led, bills monthly, and knows how export and trade buyers search."
          pillars={[
            { icon: '01', title: 'Ready for AI search.', body: 'Export and trade buyers now ask AI tools for supplier shortlists. We prepare your pages for Google AI answers and ChatGPT from the first month, while many local agencies still report only on the ten blue links.' },
            { icon: '02', title: 'Clean links only.', body: 'No link networks, paid links or thin pages. A Google penalty would hurt a pharma or engineering firm with the overseas buyers and regulators who audit it, so we only build what holds up.' },
            { icon: '03', title: 'Monthly terms, one-page reports.', body: 'Each month you read one page: searches that moved, visits that became enquiries, leads we traced, and the next three tasks. No lock-in and no jargon.' },
          ]}
        />

        <ServiceJourneyRow eyebrow="OUR SEO PROCESS" headline="How We Run Your Ahmedabad SEO, Step by Step" lead="Audit first, plan second. Technical fixes come before new content, and reporting starts in week one." stages={AHM_JOURNEY} closingNote="5 STEPS · AI WITH SENIOR PEOPLE · MONTHLY TERMS · EARNED LINKS ONLY · EXPORT + ALL-INDIA + LOCAL" />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Ahmedabad SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>Ahmedabad case studies with rankings, visits and enquiries are being written up from live FactoryJet work in Gujarat and across India. They draw on the same team behind 500+ websites we have built, rated 4.9 on average on Google.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Ahmedabad Agency vs. Freelancer vs. DIY"
          lead="Four ways to get SEO done in Ahmedabad, compared on contract length, what you get, and what you keep."
          pullQuote={{ stat: 'No lock-in', caption: 'month-to-month SEO with the abroad and all-India business plan most Ahmedabad agencies do not run.' }}
          columns={AHM_COMPARISON_COLUMNS}
          rows={AHM_COMPARISON_ROWS}
          footer="Plans are monthly. Give 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="AHMEDABAD × SEO"
          headline="SEO for Ahmedabad's Key Industries"
          lead="From Changodar pharma to Vatva chemicals to Sanand engineering, Ahmedabad's industries compete on very different searches. FactoryJet has done SEO across each."
          sectors={[
            { name: 'Pharmaceuticals', description: 'Zydus, Torrent, and Intas export to 100+ countries from Changodar, Sanand, and PHARMEZ. Simple English searches, content that shows you follow the rules and check quality, and being named by Google AI answers.' },
            { name: 'Textiles & Denim', description: 'Arvind and Nandan anchor the denim capital, supplying global brands and wholesale across India. Searches global brands use to find suppliers, content that proves what you can make, and product pages built for business buyers.' },
            { name: 'Chemicals & Dyes', description: 'Vatva, Naroda, and Odhav supply factories across India. Searches by supplier, ingredient, and grade, with the trust signals buying teams look for.' },
            { name: 'Auto & Engineering', description: 'Sanand car-makers and their suppliers sell across India and abroad. Searches by what you can make and which parts you supply, built for the long buyer checks big firms run.' },
            { name: 'Banks & Finance', description: 'GIFT City in neighbouring Gandhinagar hosts global banks and 130+ finance startups. Content that shows you know your stuff and can be trusted, for a careful, rule-bound audience.' },
            { name: 'Local Services & Healthcare', description: 'Clinics, CA and consulting firms, and shops on SG Highway and CG Road. The top three businesses on the map, Google Maps, and the searches people use when ready to book.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What India's founders say about working with FactoryJet" region="in" />

        <FAQ eyebrow="FREQUENTLY ASKED QUESTIONS" headline="SEO Questions from Ahmedabad Businesses" lead="What Ahmedabad exporters and manufacturers ask us most, answered in plain words." categories={AHM_FAQ_CATEGORIES} items={AHM_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Win Search in Ahmedabad?"
          sub="Ahmedabad businesses sell to the world and across India, and your buyers research on Google and AI before they ever call. Start with a free check, and we will show you exactly where you stand, whether you export pharma from Changodar, supply chemicals from Vatva, or run a clinic on SG Highway."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Monthly terms. Everything we build is yours. A report you can read in five minutes."
        />
        {/* Hub link-back (silo fix, 31 Jul 2026) */}
        <section className="border-t border-fj-ink/10 bg-fj-cream px-6 py-10 md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-fj-ink/75">
              If you also sell beyond Gujarat, read about{' '}
              <a href="/seo" className="font-semibold text-[#B23E13] underline underline-offset-2">
                our SEO services in India
              </a>{' '}
              for plans that cover the whole country.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
