import type { Metadata } from 'next';
import Script from 'next/script';
import { seoSubServiceAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
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
  title: 'Technical SEO Services in India | Fast, Search-Ready Sites | FactoryJet',
  description:
    'Technical SEO services in India to make your site fast and easy for Google to find, read, and trust. Full audit, faster pages, schema added, errors fixed.',
  keywords: [
    'technical seo services',
    'technical seo company',
    'technical seo agency',
    'technical seo audit',
    'technical seo services india',
    'site speed seo',
    'core web vitals',
    'crawlability',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Technical SEO Services in India | Fast, Search-Ready Sites | FactoryJet',
    description:
      'Technical SEO services in India to make your site fast and easy for Google to find, read, and trust. We run a full technical SEO audit, speed your site up, fix what Google cannot read, and add the hidden code that explains your pages. No long contracts.',
    url: 'https://factoryjet.com/seo/technical-seo',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet Technical SEO Services in India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services in India | FactoryJet',
    description: 'Technical SEO services to make your site fast and easy for Google to find, read, and trust. Full audit, faster pages, hidden code added, errors fixed. No long contracts.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/technical-seo', languages: seoSubServiceAlternatesIN['technical-seo'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/technical-seo#service',
  serviceType: 'Technical SEO',
  name: 'Technical SEO Services by FactoryJet',
  description: 'Technical SEO services in India: full technical SEO audit, site speed, making sure Google can find and read every page, the hidden code that explains your pages, a tidy site structure and sitemap, and fixing broken or duplicate pages. No lock-in.',
  url: 'https://factoryjet.com/seo/technical-seo',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'Country', name: 'India' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/technical-seo#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/technical-seo',
};

const TECH_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: "Full check of your site's tech health", description: 'We run a full technical SEO audit: how fast your site loads, what Google can and cannot read, broken or duplicate pages, the hidden code, and how tidy your site structure is. (Week 1)' },
  { number: '02', title: 'Fix what Google cannot read', description: 'We clear the things blocking Google: pages it is told to skip, broken links, duplicate pages, and bad redirects. We make sure Google can find and read every page that matters. (Week 1 to 3)' },
  { number: '03', title: 'Speed the site up', description: 'We make your pages load fast, especially on phones and slow connections. Smaller images, cleaner code, and quicker loading, so people do not leave and Google rewards you. (Week 2 to 5)' },
  { number: '04', title: 'Add the hidden code and tidy the structure', description: 'We add the hidden code that explains your pages to Google, build a clear map of your site, and connect your pages with sensible internal links. (Week 3 to 6)' },
  { number: '05', title: 'Simple monthly report', description: 'One page you can read in five minutes: how fast your site is, how many pages Google can now read, what we fixed, and the three things we will do next. (Monthly)' },
];

const TECH_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'crawl', label: 'How Google Reads Your Site' },
  { key: 'vs', label: 'Tech vs On-Page' },
  { key: 'choosing', label: 'Choosing & Reports' },
];

const TECH_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much do technical SEO services cost in India?', answer: 'We do not sell fixed packages. We look at what your site needs and only charge for work that helps Google read and trust your site. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long does technical SEO take to work?', answer: 'Some wins are fast. Speed and crawl fixes can show up in days once Google re-reads your site. Bigger gains, like more pages getting found and more traffic, usually take three to six months to settle. We share simple early signs from the first month, like how fast your pages load and how many pages Google can now read.' },
  { category: 'pricing', question: 'Is technical SEO a one-time job or ongoing?', answer: 'The first big clean-up is mostly one-off: we fix the base, speed things up, and add the hidden code. After that, sites pick up new errors over time as you add pages and content, so a light monthly check keeps things healthy. We can do the one-off fix and then a small ongoing plan, or just the fix. You choose.' },
  { category: 'pricing', question: 'Do I have to sign a long contract?', answer: 'No. You pay month to month and can pause or stop with 30 days notice. We keep clients by making their site fast and easy for Google to read, not by tying them down. Everything we fix stays yours.' },
  { category: 'included', question: 'What do your technical SEO services include?', answer: 'A fast site, especially on phones. Making sure Google can find and read every page. Adding the hidden code that explains your pages. A tidy site structure with a clear map of your site and sensible internal links. Fixing broken or duplicate pages and bad redirects. You also get a monthly call and a one-page report.' },
  { category: 'included', question: 'Will you make my site faster?', answer: 'Yes. We make your pages load fast on phones and slow connections by shrinking images, cleaning up code, and loading things in a smarter order. A faster site keeps more visitors and helps your rankings, because Google checks speed too, especially on mobile.' },
  { category: 'included', question: 'What is the hidden code you add to my pages?', answer: 'It is called schema, but in plain words it is a small bit of code that explains your pages to Google, like telling it this is a product, this is the price, this is a review. People never see it, but it helps Google understand your site and can get you those richer-looking results with stars and prices.' },
  { category: 'included', question: 'Do you fix broken and duplicate pages?', answer: 'Yes. We find broken links and error pages, fix or redirect them, and clear up duplicate pages that confuse Google about which one to show. We also tidy up redirects so people and Google are not bounced around. Clean pages are easier for Google to read and trust.' },
  { category: 'crawl', question: 'What does it mean that Google can find and read my pages?', answer: 'Google sends a little reader, called a crawler, around the web to look at pages. If your pages are slow, blocked, or hidden behind broken links, the reader gives up and your pages never show in search. We make sure that reader can find and read every page you want people to see.' },
  { category: 'crawl', question: 'Why are some of my pages not showing in Google?', answer: 'Usually one of a few reasons: the page is accidentally told to skip, it loads too slowly, it is a duplicate, or your site map and links do not point to it. We find out exactly which one it is in the technical SEO audit and fix it, so the pages you care about get found.' },
  { category: 'crawl', question: 'What is a sitemap and do I need one?', answer: 'A sitemap is simply a list of all your important pages that you hand to Google, like giving someone a map so they do not miss a room in your house. Yes, you want one, kept up to date. We build it, submit it to Google, and make sure it only lists the pages you want found.' },
  { category: 'crawl', question: 'My site uses a lot of JavaScript. Can Google still read it?', answer: 'Sometimes yes, sometimes not fully. Sites built with React, Next.js, or lots of JavaScript can load content in a way Google struggles to read, so pages go missing from search. We check what Google actually sees and fix the setup so your content shows up, not a blank page.' },
  { category: 'vs', question: "What's the difference between technical SEO and on-page SEO?", answer: 'Technical SEO is the plumbing: making your site fast, making sure Google can find and read every page, and adding the hidden code that explains your pages. On-page SEO is the part people see: your words, headings, and pictures. Technical SEO is the base everything stands on. If Google cannot read your site or it loads slowly, even great words and pages will not rank. We fix the base first, then the pages.' },
  { category: 'vs', question: 'Do I need technical SEO if my content is already good?', answer: 'Often yes. Great content cannot rank if Google cannot read it or your site is slow. We see plenty of sites with lovely pages that stay hidden because of a technical problem. Fixing the base lets your good content finally get seen, so the two work best together.' },
  { category: 'vs', question: 'Which should I do first, technical or on-page SEO?', answer: 'The base first. If Google cannot read your site or it loads slowly, there is no point polishing the words yet, because no one will see them. We fix the plumbing, then improve the pages. That order gets you results faster and stops you paying for content that stays hidden.' },
  { category: 'vs', question: 'Does technical SEO help my sales too, not just rankings?', answer: 'Yes. A fast site wins more customers, not just rankings. People leave slow pages before they load, especially on phones. When your site is quick and easy to use, more visitors stay, more of them buy or call, and Google rewards you on top. The speed work pays off twice.' },
  { category: 'choosing', question: 'How do I pick a good technical SEO company?', answer: 'Look for a technical SEO company that explains things in plain words, not jargon. A good one runs a real technical SEO audit, fixes the base before chasing rankings, hands your developer a clear, ordered to-do list, and never locks you into a year. Ask them to explain your first fixes in plain words. If they cannot, keep looking.' },
  { category: 'choosing', question: 'Should I hire a freelancer or a technical SEO agency?', answer: 'A freelancer can fix a few things, but technical SEO done well needs speed, crawling, the hidden code, structure, and error fixes handled together, which is a lot for one person. A technical SEO agency gives you all of it for a fair monthly fee, and you can pause or grow any time. We run lean, so you get the team without the big agency bill.' },
  { category: 'choosing', question: 'Can you work with my own developer, or do the fixes for me?', answer: 'Both. We can do the fixes ourselves, or we explain each one in plain words and hand your developer a clear, ordered to-do list so they know exactly what to do and why. We also send a one-page monthly report: how fast your site is, how many pages Google can now read, what we fixed, and the three things we will do next. Either way you get a fast, search-ready site, and nothing is left as a mystery.' },
  { category: 'choosing', question: 'Do I keep everything you build?', answer: 'Yes, all of it. The fixes, the faster code, the hidden code, the sitemap, and the to-do list belong to your business and stay with you. If you ever leave us, you keep everything. There is no special software you have to keep paying for.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TECH_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const TECH_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Agency' },
  { label: 'Freelancer' },
  { label: 'Do it yourself' },
] as const;

const TECH_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'None'] },
  { feature: 'Makes your site easy for Google to read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fixes site speed', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Adds the hidden code', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
  { feature: 'Run by senior people, founder-led', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <Script id="tech-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="tech-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Technical SEO', url: 'https://factoryjet.com/seo/technical-seo' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="TECHNICAL SEO SERVICES · INDIA"
          headline="Technical SEO Services in India — Make Your Site Fast, Crawlable, and Trusted by Google"
          lead="The technical side of SEO is making your site fast and easy for Google to find, read, and trust. It is the base everything else stands on. A slow site that Google cannot read will not rank, no matter how good your content is. We run a full technical SEO audit, speed your site up, fix the things Google cannot read, add the hidden code that explains your pages, and tidy up your site so the right pages get found. No long contracts, and everything we fix stays yours."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Faster on phones', 'Google can read every page', 'No long contracts']}
          rightSlot={<HeroBrowserMockup badgeLabel="Fast & search-ready" badgeCity="India" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="India's Trusted Technical SEO Agency — 500+ Sites, 4.9 Average Rating" />

        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Do for You"
          lead="Technical SEO is not one trick. It is a set of fixes that make your site fast and easy for Google to find, read, and trust. We work on all the parts under the hood. Here is everything we cover."
          sectors={[
            { name: 'A fast site, especially on phones', description: 'We make your pages load fast on phones and slow connections by shrinking images, cleaning up code, and loading things in a smarter order. People do not wait for slow pages, and Google checks speed too.', example: 'Quick to load, even on mobile.' },
            { name: 'Google can find and read every page', description: 'Google sends a little reader around the web to look at pages. We clear anything blocking it, like skipped pages, broken links, and bad redirects, so it can find and read every page you want people to see.', example: 'Nothing important left hidden.' },
            { name: 'The hidden code that explains your pages', description: 'This is called schema, but in plain words it is a small bit of code that tells Google what your pages are about, like this is a product, this is a review. People never see it, but it helps Google understand you.', example: 'Schema added, in plain words.' },
            { name: 'A tidy structure and a clear map of your site', description: 'We connect your pages with sensible internal links and hand Google a clear map of your site, called a sitemap, so it can reach every page that matters and nothing gets missed.', example: 'Internal links + sitemap done right.' },
            { name: 'No broken or duplicate pages', description: 'We find broken links and error pages, fix or redirect them, and clear up duplicate pages that confuse Google about which one to show. Clean pages are easier for Google to read and trust.', example: 'Errors and redirects fixed.' },
            { name: 'Works great on phones', description: 'Most people use Google on their phone, and so does Google when it judges your site. We make sure your pages look right, tap right, and load fast on a small screen, not just on a computer.', example: 'Mobile-first, the way Google checks.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="TECHNICAL SEO · THE BASE"
          headline="What technical SEO is, in plain words"
          lead="Think of your site like a house. The words and pictures are the furniture people see. Technical SEO is the plumbing and wiring behind the walls. Nobody admires it, but if it is broken, nothing works."
          body={
            <>
              <p>
                Technical SEO is the plumbing of your website. It is the part nobody sees: how fast your pages load,
                whether Google can find and read them, and the hidden code that explains what each page is about. Get
                it right and everything else works better.
              </p>
              <p>
                Here is the catch. If Google cannot read your site, or it loads slowly, great content still will not
                rank. You can write the best pages in the world, but if the plumbing is broken, no one ever sees them.
                That is why so many good sites stay stuck.
              </p>
              <p>
                So we fix this base first, then improve the pages. Technical SEO is the foundation under the rest of
                your{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO plan</a>, from{' '}
                <a href="/seo/local-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">local SEO</a> to{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">link building</a>. We make your site fast and easy for Google to read,
                clear out the errors, and add the hidden code. Once the plumbing works, your content finally gets the
                chance to rank.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>What technical SEO covers</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Speed', need: 'Fast on phones and slow connections', colour: '#F05A28' },
                  { type: 'Reading', need: 'Google can find and read every page', colour: '#F3A07A' },
                  { type: 'Trust', need: 'The hidden code that explains your site', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Businesses Pick FactoryJet for Technical SEO"
          lead="Plenty of agencies chase rankings before the base is fixed. We fix the plumbing first, explain everything in plain words, and remember that a fast site does more than rank. It wins you more customers too."
          pillars={[
            { icon: '01', title: 'We fix the base first.', body: 'There is no point polishing the words if Google cannot read your site or it loads slowly. We fix the plumbing first, then improve the pages, so you get results faster and stop paying for content that stays hidden.' },
            { icon: '02', title: 'We explain it in plain words.', body: 'No jargon dumped on you. We explain every fix in plain words, or hand your developer a clear, ordered to-do list so they know exactly what to do and why. Nothing is left as a mystery.' },
            { icon: '03', title: 'A fast site wins more customers too.', body: 'Speed is not just for rankings. People leave slow pages before they load, especially on phones. When your site is quick, more visitors stay and more of them buy or call, so the work pays off twice.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run Your Technical SEO, Step by Step"
          lead="We check before we plan. We fix the base first. And we report in plain words, so you always know what we are doing and why."
          stages={TECH_JOURNEY}
          closingNote="5 STEPS · FASTER SITE · GOOGLE CAN READ IT · NO LONG CONTRACTS"
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Technical SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real technical results: sites we made faster, more pages getting found by Google, and errors cleared out. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating from our clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. an Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to handle technical SEO. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'a faster site, pages Google can read, the hidden code added, and reports you can actually read, run month to month. Cancel any time, and you keep everything we fix.' }}
          columns={TECH_COMPARISON_COLUMNS}
          rows={TECH_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO IT'S FOR"
          headline="Technical SEO for Sites That Need a Solid Base"
          lead="If Google is struggling to read your site, or it loads slowly, technical SEO is the fastest way to open up the rankings your content deserves. These are the sites we help most."
          sectors={[
            { name: 'Sites with lots of pages', description: 'Big sites where it is easy for pages to go missing, get duplicated, or fall out of Google. We make sure the pages you care about get found.' },
            { name: 'Online stores', description: 'Shops with many products, filters, and categories that confuse Google. We tidy the structure, fix duplicates, and add the hidden code for products and reviews.' },
            { name: 'Sites that load slowly', description: 'If your pages are slow, you lose visitors and rankings. We shrink images, clean up code, and make your site fast, especially on phones.' },
            { name: 'Custom or app-like sites', description: 'Sites built with React, Next.js, or lots of JavaScript can hide content from Google. We check what Google actually sees and fix the setup so your pages show up.' },
            { name: 'Sites that dropped after a redesign', description: 'A new look can break links, redirects, and structure overnight. We find what broke and fix it, so your traffic comes back instead of staying down.' },
            { name: 'Big sites Google is not fully showing', description: 'If lots of your pages are missing from Google, something technical is in the way. We find out exactly what and clear it, so more of your pages get found.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="COMMON QUESTIONS" headline="Technical SEO Questions, Answered Simply" lead="The questions every owner asks before starting technical SEO, answered without the confusing words." categories={TECH_FAQ_CATEGORIES} items={TECH_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready for a Fast, Search-Ready Site?"
          sub="Start with a free check. We will show you how fast your site is today, what Google cannot read yet, and what we will fix first."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep everything we fix. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
