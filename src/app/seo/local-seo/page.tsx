import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { seoSubServiceAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
  title: 'Local SEO Services in India | Google Business Profile & Map Pack | FactoryJet',
  description:
    'Local SEO services in India to reach the top three on the Google map and win "near me" searches. We manage your Google listing, fix details, grow reviews.',
  keywords: [
    'local seo services',
    'affordable local seo services',
    'local seo company india',
    'local seo agency',
    'google business profile optimization',
    'near me seo',
    'local seo services india',
    'google maps seo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Local SEO Services in India | Google Business Profile & Map Pack | FactoryJet',
    description:
      'Local SEO services in India to put your business in the top three on the Google map and in "near me" searches. We set up and look after your free Google listing, fix your details everywhere, and get you more reviews. No long contracts.',
    url: 'https://factoryjet.com/seo/local-seo',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet Local SEO Services in India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in India | FactoryJet',
    description: 'Local SEO services to reach the top three on the Google map and win "near me" searches. Google listing managed, details fixed, more reviews. No long contracts.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/local-seo', languages: seoSubServiceAlternatesIN['local-seo'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/local-seo#webpage',
  url: 'https://factoryjet.com/seo/local-seo',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/local-seo#service',
  serviceType: 'Local SEO',
  name: 'Local SEO Services by FactoryJet',
  description: 'Local SEO services in India: Google Business Profile setup and management, matching business details across the web, top-three map and "near me" rankings, reviews, local pages, and local links. No lock-in.',
  url: 'https://factoryjet.com/seo/local-seo',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'Country', name: 'India' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/local-seo#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/local-seo',
};

const LOCAL_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'See where you stand', description: 'We look at where you show up on the map today, how good your Google listing is, where your details do not match online, and how your reviews compare to the businesses beating you. (Week 1)' },
  { number: '02', title: 'Fix your listing and details', description: 'We set up your free Google listing the right way, then make your name, address, and phone number match everywhere and remove any double listings. (Week 1 to 3)' },
  { number: '03', title: 'Build your area pages', description: 'We add maps and the right words to your website and build pages for the areas you serve, so you show up for "near me" searches. (Week 2 to 5)' },
  { number: '04', title: 'Reviews and local links', description: 'We help you collect more real reviews and reply to them, and get trusted local websites to link to you. (Ongoing)' },
  { number: '05', title: 'Simple monthly report', description: 'One page you can read in five minutes: where you rank on the map, how many people called or asked for directions, and the three things we will do next. (Monthly)' },
];

const LOCAL_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'gbp', label: 'Your Google Listing' },
  { key: 'ranking', label: 'Showing Up Locally' },
  { key: 'choosing', label: 'Choosing & Reports' },
];

const LOCAL_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much do local SEO services cost in India?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that moves you up the map. The price depends on how competitive your market is and how much work your site needs, so we give you an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long does local SEO take to work?', answer: 'Local SEO is usually the fastest kind of SEO to show results. With a good Google listing and matching details, many businesses start moving up the map in 30 to 60 days. Busy cities and tough trades take three to four months to settle near the top. We show simple early signs from the first month, like how many people viewed your listing and called.' },
  { category: 'pricing', question: 'What is the difference between affordable and cheap local SEO?', answer: 'Good affordable local SEO does the work that lasts: a proper listing, matching details, real reviews, and safe links, at a fair price because we are a small team that uses smart tools. Cheap local SEO often means fake reviews or spammy tricks that can get your Google listing shut down. We are not the cheapest, and we will tell you why.' },
  { category: 'pricing', question: 'Do I have to sign a long contract?', answer: 'No. You pay month to month and can pause or stop with 30 days notice. We keep clients by getting their phone to ring, not by tying them down. Your listing and pages always stay yours.' },
  { category: 'included', question: 'What do your local SEO services include?', answer: 'Setting up and looking after your free Google listing, fixing your details across the web, helping you climb the map and Google Maps, getting you more reviews, building pages for the areas you serve, and getting trusted local links. You also get a monthly call and a one-page report.' },
  { category: 'included', question: 'Do you look after my Google listing for me?', answer: 'Yes. We set up your free Google listing and then look after it every month: posts, photos, the right business type, your services, answers to questions, correct hours, and replies to reviews. Google rewards listings that stay active, so this is where most of the gain comes from.' },
  { category: 'included', question: 'Do you fix wrong or missing business listings?', answer: 'Yes. We check every website that lists your business, fix any wrong name, address, or phone number, remove double listings, and add your business to the directories that matter in India. When your details match everywhere, Google trusts you more.' },
  { category: 'included', question: 'Can you help me get more reviews?', answer: 'Yes, the safe way. We make it easy for happy customers to leave a review and help you reply to every one, even the unhappy ones. We never buy or fake reviews, because that can get your listing shut down.' },
  { category: 'gbp', question: 'Why does my Google listing matter so much?', answer: 'For nearby searches, your Google listing decides whether you show up in that top group of three on the map. Its reviews, photos, business type, and activity all feed into where you rank. A listing nobody looks after is the most common reason a good business stays hidden.' },
  { category: 'gbp', question: 'How do I get into the top three on the map?', answer: 'Google looks at three things: how close you are to the person searching, how well you match what they typed, and how trusted you look (reviews, mentions, links). You cannot change how close you are, so we work on the other two, which is exactly what local SEO does.' },
  { category: 'gbp', question: "A rival shows up above me even though I'm closer. Why?", answer: 'Being close is only one of three things Google looks at. If a rival has more good reviews, a fuller and more active listing, the right business type, and more trusted mentions online, they can beat you even when you are nearer. The good news: those are the parts we can build up for you.' },
  { category: 'gbp', question: 'Do you help me show up for "near me" searches?', answer: 'Yes. "Near me" results are decided by things like a complete Google listing, matching details across the web, and pages for your area. We make sure all of those point to you, so you show up when someone close by is ready to buy.' },
  { category: 'ranking', question: 'What is the difference between local SEO and normal SEO?', answer: 'Normal SEO tries to get your website seen across a whole city or country. Local SEO is about the map and "near me" results, which depend a lot on your Google listing and reviews, not just your website. If your customers come from nearby, local SEO usually brings faster, better leads.' },
  { category: 'ranking', question: "Does local SEO work if I don't have a shop?", answer: 'Yes. Businesses that travel to customers, like plumbers or consultants, can show up without a shop address. We set your listing up to cover the areas you serve and build pages for them, so you show up for "near me" searches without needing a walk-in shop.' },
  { category: 'ranking', question: 'Can I show up in more than one area?', answer: 'Yes. If you have more than one branch or serve several areas, you can show up in each one. We set up a listing for each real location and build a page for each area, so they help each other instead of competing.' },
  { category: 'ranking', question: 'Will this help me show up in Google Maps?', answer: 'Yes. The top-three map results and Google Maps use the same signals, so the work that wins one wins the other. We also tidy up the things people judge you on in Maps, like photos, hours, and recent reviews.' },
  { category: 'choosing', question: 'How do I pick a good local SEO company?', answer: 'Look past the ranking screenshots. A good local SEO company ties its work to calls and visits, looks after your listing every month instead of once, builds reviews and links the safe way, and never locks you into a year. Ask them to explain your first 90 days in plain words. If they cannot, keep looking.' },
  { category: 'choosing', question: 'Should I hire a freelancer or an agency?', answer: 'A freelancer can tidy a listing, but local SEO that lasts needs the listing, the details, reviews, links, and pages handled together, which is a lot for one person to keep up. A team gives you all of it for a fair monthly fee, and you can pause or grow any time. We run lean, so you get the team without the big agency bill.' },
  { category: 'choosing', question: 'What does your monthly report look like?', answer: 'One page you can read in five minutes: where you rank on the map for your main searches, how many people viewed your listing, called, or asked for directions, and the three things we will do next. We set up Google’s free tools and call tracking so the numbers are real customers, not just rankings.' },
  { category: 'choosing', question: 'Do I keep everything you build?', answer: 'Yes, all of it. Your Google listing, your pages, and your reviews belong to your business and stay with you. If you ever leave us, you keep everything. There is no special software you have to keep paying for.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: LOCAL_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const LOCAL_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Local Agency' },
  { label: 'Freelancer' },
  { label: 'Do it yourself' },
] as const;

const LOCAL_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'None'] },
  { feature: 'Looks after your Google listing', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Fixes your details across the web', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Focus on map and "near me"', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Gets you real reviews (no fakes)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep your listing and pages', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
  { feature: 'Run by senior people, founder-led', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
];

export default function LocalSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="local-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="local-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Local SEO', url: 'https://factoryjet.com/seo/local-seo' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Local SEO', url: 'https://factoryjet.com/seo/local-seo' },
        ]} />
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_local_seo_hero" />}
          eyebrow="LOCAL SEO SERVICES · INDIA"
          headline="Local SEO Services in India, Get Found on Google When People Near You Are Ready to Buy"
          lead="When someone close by searches Google for what you sell, Google shows three businesses on a small map right at the top. If yours is not one of the three, people just pick someone else. We help small businesses across India show up there. We set up and look after your free Google listing, make sure your business details are the same everywhere online, help you get more reviews, and build pages that bring in nearby customers. No long contracts, and everything we do stays yours."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Google listing looked after', '"Near me" searches', 'No long contracts']}
          rightSlot={<HeroBrowserMockup badgeLabel="Top 3 on map" badgeCity="India" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="India's Trusted Local SEO Agency, 500+ Sites, 4.9 Average Rating" />

        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Do for You"
          lead="Getting into the top three on the map is not one trick. Google looks at how close you are, how well you match the search, and how trusted you look. We work on all the parts you can control. Here is everything we cover."
          sectors={[
            { name: 'Your Google listing', description: 'This is your free business box on Google, the one that shows your reviews, photos, hours, and phone number. We set it up the right way and keep it fresh every month. It is the number one thing that gets you on the map.', example: 'Set up + looked after every month.' },
            { name: 'Same details everywhere', description: 'Your business name, address, and phone number need to match on every website that lists you. When they do not match, Google gets confused and trusts you less. We fix the mistakes and remove any double listings.', example: 'Name, address, phone, all matching.' },
            { name: 'Top of the map', description: 'Google picks the top three on three things: how close you are, how well you match the search, and how trusted you look. We work on the parts you can control so you move into the top three on Google Maps.', example: 'Climb into the top three.' },
            { name: 'More reviews', description: 'We help you get more real reviews from happy customers and reply to every one, good or bad. We never buy fake reviews, because Google can shut your listing down for that.', example: 'More real reviews, no fakes.' },
            { name: 'Pages for your area', description: 'Pages on your website made for the areas you serve, so you show up when people search "near me" or your area name. We add a map, your details, and the right words.', example: 'Pages built for "near me".' },
            { name: 'Trusted local links', description: 'We get other trusted local websites to mention and link to you, through sponsorships, partners, and local news. Only real links. No spammy shortcuts that get you punished by Google.', example: 'Real links from trusted sites.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="LOCAL SEO · ONGOING"
          headline="Most Agencies Set Up Your Listing Once, Then Disappear"
          lead="Local SEO is not a one-time job. Google gives the top spots to businesses that stay active, so we treat your Google listing like a shop window and keep it looking sharp every month."
          body={
            <>
              <p>
                Many agencies claim your free Google listing, tidy it once, and call it done. A month later the posts
                stop, the photos go stale, reviews sit without a reply, and your spot on the map slips. We do the
                opposite. We look after your listing every month so it keeps climbing instead of sliding back.
              </p>
              <p>
                We also keep your details the same everywhere on the web. When your name, address, and phone number
                match across Google, directories, and{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">your own site</a>, Google trusts you more, and that trust is part of
                what decides the top three on the map.
              </p>
              <p>
                Local SEO works best as one part of your wider{' '}
                <a href="/seo" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">SEO plan</a>, sitting alongside content and{' '}
                <a href="/seo/link-building" className="font-medium text-[#B23E13] underline decoration-1 underline-offset-2 hover:no-underline">trusted local links</a>. Everything we build is yours. Your Google listing, your pages, and your reviews stay with your
                business. There is no lock-in and no special software to keep paying for.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>What looking after your listing means</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Every month', need: 'Posts, photos, replies to reviews, correct hours', colour: '#F05A28' },
                  { type: 'Always', need: 'Your details matching across the web', colour: '#F3A07A' },
                  { type: 'Ongoing', need: 'More real reviews, never fake ones', colour: '#0F0F12' },
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
          headline="Why Small Businesses Pick FactoryJet for Local SEO"
          lead="Plenty of agencies will claim your listing and call it done. We get you seen where buyers actually look, look after your listing every month, and show you the numbers that mean money: phone calls, people asking for directions, and messages. Not just where you sit on a screen."
          pillars={[
            { icon: '01', title: 'We get you seen where people look.', body: "The map and 'near me' results sit above everything else and get most of the clicks. We work to make your business one of the three Google shows at the top." },
            { icon: '02', title: 'We look after your listing every month.', body: 'Photos, posts, replies to reviews, correct hours. Google rewards businesses that stay active, so we keep yours active instead of setting it up once and walking away.' },
            { icon: '03', title: 'We show you calls, not just rankings.', body: 'A high spot on the map means nothing if the phone does not ring. We track the calls, the people asking for directions, and the messages, and show you those numbers in plain words.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run Your Local SEO, Step by Step"
          lead="We check before we plan. We fix the basics first. And we report from week one, so you always know what we are doing and why."
          stages={LOCAL_JOURNEY}
          closingNote="5 STEPS · LISTING LOOKED AFTER · REAL REVIEWS · NO LONG CONTRACTS"
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#B23E13]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Local SEO results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real local results: businesses we moved into the top three, more calls, and more people asking for directions. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating from our clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Local Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to do local SEO. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'a looked-after Google listing, matching details, and a real review plan, run month to month. Cancel any time, and you keep your listing and pages.' }}
          columns={LOCAL_COMPARISON_COLUMNS}
          rows={LOCAL_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="LOCAL SEO BY CITY"
          headline="Want Local SEO Built for Your City?"
          lead="This page explains what local SEO is. If you want work built for your own city, where we know the areas, the rivals, and how people search, start here."
          sectors={[
            { name: 'SEO Agency in Mumbai', description: 'Get to the top of the map across a busy, crowded market, from shops and clinics to local services.', example: 'Explore SEO in Mumbai', linkLabel: 'Explore SEO in Mumbai', linkHref: '/seo/mumbai' },
            { name: 'SEO Agency in Bangalore', description: 'Win the top three against tough rivals in Koramangala, Indiranagar, Whitefield, and more.', example: 'Explore SEO in Bangalore', linkLabel: 'Explore SEO in Bangalore', linkHref: '/seo/bangalore' },
            { name: 'SEO Agency in Pune', description: 'Local rankings built for Pune areas, from Koregaon Park shops to Hinjewadi services.', example: 'Explore SEO in Pune', linkLabel: 'Explore SEO in Pune', linkHref: '/seo/pune' },
            { name: 'SEO Agency in Delhi', description: 'Clean listings and details done right for a huge market where details slip fast.', example: 'Explore SEO in Delhi', linkLabel: 'Explore SEO in Delhi', linkHref: '/seo/delhi' },
            { name: 'SEO Company in Ahmedabad', description: 'Top-of-the-map visibility for Ahmedabad shops, clinics, and service businesses.', example: 'Explore SEO in Ahmedabad', linkLabel: 'Explore SEO in Ahmedabad', linkHref: '/seo/ahmedabad' },
            { name: 'SEO Company in Jaipur', description: 'Show up for "near me" searches across Jaipur shops, hotels, and local services.', example: 'Explore SEO in Jaipur', linkLabel: 'Explore SEO in Jaipur', linkHref: '/seo/jaipur' },
          ]}
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO IT'S FOR"
          headline="Local SEO for Businesses That Serve a Place"
          lead="If your customers come from nearby, local SEO is the fastest way to turn searches into calls and visits. These are the businesses we help most."
          sectors={[
            { name: 'Shops with many branches', description: 'One Google listing for each branch, a store finder on your site, and the same details everywhere so every outlet shows up.' },
            { name: 'Restaurants & Cafes', description: 'Show up on the map and in "near me" searches, with great photos, menus, easy booking, and lots of reviews to fill tables.' },
            { name: 'Clinics & Doctors', description: 'Clinics, dentists, and labs: show up when people search for care nearby, with a trusted listing and helpful pages.' },
            { name: 'Real Estate & Local Services', description: 'A page for each area you cover, so you show up for "near me" and area searches.' },
            { name: 'Lawyers, CAs & Consultants', description: 'Show up near you and look trustworthy enough that people pick up the phone.' },
            { name: 'Home Services', description: 'Plumbers, electricians, salons, and repairs: show up fast when someone nearby needs help right now.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="COMMON QUESTIONS" headline="Local SEO Questions, Answered Simply" lead="The questions every owner asks before starting local SEO, answered without the confusing words." categories={LOCAL_FAQ_CATEGORIES} items={LOCAL_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Reach the Top of the Map in Your Area?"
          sub="Start with a free check. We will show you where you sit on the map today, who is beating you, and what we will fix in the first 90 days."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. You keep your listing and pages. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
