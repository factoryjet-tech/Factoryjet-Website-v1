import type { Metadata } from 'next';
import Script from 'next/script';
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
  title: 'Link Building Services in India | Real Links, No Spam | FactoryJet',
  description:
    'Link building services in India that earn real links from trusted websites, the safe way, through digital PR, guest articles, and helpful content. No spam.',
  keywords: [
    'link building services',
    'link building company',
    'off page seo services',
    'backlink building',
    'link building services india',
    'off page seo company india',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Link Building Services in India | Real Links, No Spam | FactoryJet',
    description:
      'Link building services in India that earn real links from trusted websites, the safe way. As an off page SEO and backlink building company, we use digital PR, guest articles, and helpful content. No spammy tricks, no long contracts.',
    url: 'https://factoryjet.com/seo/link-building',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet Link Building Services in India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Building Services in India | FactoryJet',
    description: 'Off page SEO and backlink building that earns real links from trusted websites, the safe way. Digital PR, guest articles, helpful content. No spam, no long contracts.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/link-building', languages: seoSubServiceAlternatesIN['link-building'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/link-building#service',
  serviceType: 'Link Building',
  name: 'Link Building Services by FactoryJet',
  description: 'Link building and off page SEO services in India: earning real links from trusted websites through digital PR, guest articles, genuine directories, and helpful content, plus cleaning up risky old links. No spam, no lock-in.',
  url: 'https://factoryjet.com/seo/link-building',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'Country', name: 'India' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/link-building#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/link-building',
};

const LINK_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'Check your links and your rivals', description: 'We look at the links pointing to your site today, spot any risky ones, and see what kind of links the businesses beating you have earned. (Week 1)' },
  { number: '02', title: 'Plan the links worth earning', description: 'We pick the kind of links that will actually help you, from the right trusted sites, and build a simple plan to earn them. (Week 1 to 3)' },
  { number: '03', title: 'Earn links the real way', description: 'We get your business mentioned and linked through digital PR, guest articles on genuine sites, and helpful content people want to share. (Ongoing)' },
  { number: '04', title: 'Clean up risky old links', description: 'We find any spammy or bought links from before that could hurt you, and ask Google to ignore them so they cannot drag you down. (As needed)' },
  { number: '05', title: 'Simple monthly report', description: 'One page you can read in five minutes: the new links we earned, where they came from, and the next links we are chasing. (Monthly)' },
];

const LINK_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'included', label: 'What You Get' },
  { key: 'safe', label: 'Are Links Safe?' },
  { key: 'howmany', label: 'How Many & How Long' },
  { key: 'choosing', label: 'Choosing & Reports' },
];

const LINK_FAQ_ITEMS = [
  { category: 'pricing', question: 'How much do link building services cost in India?', answer: 'We do not sell fixed packages. We look at what you need and only charge for work that earns real links. As a rough guide, our SEO plans for Indian businesses start at ₹19,999 a month, with an exact price after a free check. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'How long does link building take to work?', answer: 'Earning real links takes time because real people have to say yes to mentioning you. Most businesses start to see movement in three to six months, and it keeps building as long as we keep earning good links. It is slower than spammy shortcuts, but it lasts and it does not get you punished.' },
  { category: 'pricing', question: 'What is the difference between affordable and cheap link building?', answer: 'Good affordable link building earns real links from real sites at a fair price because we are a small team that works smart. Cheap link building usually means bought links or spammy networks that can get your whole site punished by Google. We are not the cheapest, and we will tell you why.' },
  { category: 'pricing', question: 'Do I have to sign a long contract?', answer: 'No. You pay month to month and can pause or stop with 30 days notice. We keep clients by earning links that lift their rankings, not by tying them down. Every link we earn stays yours.' },
  { category: 'included', question: 'What do your link building services include?', answer: 'Earning real links from trusted websites, digital PR to get you mentioned in news and blogs, guest articles on genuine sites with real readers, listings in directories that actually count, cleaning up risky old links, and earning links with genuinely helpful content. You also get a monthly call and a one-page report.' },
  { category: 'included', question: 'What is digital PR?', answer: 'Digital PR means getting real news sites, blogs, and publications to mention your business and link to you, often by sharing a useful story, data, or expert view. It earns some of the strongest links there are, because a respected site is vouching for you in public.' },
  { category: 'included', question: 'Do you write the guest articles for me?', answer: 'Yes. We pitch and write helpful guest articles for genuine sites that have real readers in your field. A good guest article gives the reader something useful and earns you a real, trusted link at the same time. We avoid the junk sites that exist only to sell links.' },
  { category: 'included', question: 'Can you clean up bad links from my old SEO company?', answer: 'Yes. We check every link pointing to your site, find the spammy or bought ones that could hurt you, and ask Google to ignore them. This is one of the first things we do when a site was hurt by cheap link building before.' },
  { category: 'safe', question: 'Are the links you build safe for my site?', answer: 'Yes. We only earn real links from real sites with real readers. We never buy links or use spammy networks, because Google is very good at spotting those and can punish your whole site for them. Safe, earned links are the only kind that keep helping you long term.' },
  { category: 'safe', question: 'Will buying links get me punished by Google?', answer: 'It can. Google clearly says buying or trading links to rank higher is against its rules, and it has whole systems built to catch it. When it does, your rankings can drop hard and take a long time to recover. That is exactly why we earn links instead of buying them.' },
  { category: 'safe', question: "What is the difference between a good link and a bad link?", answer: 'A good link comes from a real, trusted site with real readers, and it points to you because your content or business deserves it. A bad link comes from a spammy site, a link farm, or a paid network that exists only to game Google. Good links lift you up; bad links can drag you down.' },
  { category: 'safe', question: 'How do I know if my site already has risky links?', answer: 'We run a free check that lists the links pointing to your site and flags the risky ones, like links from spammy networks or sites in unrelated languages. If we find any, we clean them up and ask Google to ignore them before they cause more harm.' },
  { category: 'howmany', question: 'How many links do I actually need?', answer: 'Fewer than most people think. A few great links from trusted sites beat hundreds of junk ones, so we aim for quality, not big numbers. We look at what the sites beating you have earned and build a realistic plan to match and pass them.' },
  { category: 'howmany', question: 'Is more links always better?', answer: 'No. A pile of weak or spammy links can hurt you more than help. Google cares far more about how trusted and relevant each link is than about the total count. We would rather earn one link from a respected site than fifty from junk ones.' },
  { category: 'howmany', question: 'Should I do link building before anything else?', answer: 'Usually no. Links work best once your site basics and content are in good shape, so the links point to pages that are ready to rank. We normally fix the foundations and content first, then earn links to push those strong pages up.' },
  { category: 'howmany', question: 'Will the links keep helping after I stop?', answer: 'Yes, mostly. Real earned links stay on those sites and keep passing trust to you for a long time, even if you pause. That is the big advantage of earning links instead of renting spammy ones that vanish the moment you stop paying.' },
  { category: 'choosing', question: 'How do I pick a good link building company?', answer: 'Look past the big link counts. A good link building company earns real links from sites with real readers, refuses to buy links or use spammy networks, cleans up risky old links, and never locks you into a year. Ask them to show you the kind of sites they earn links from. If they dodge the question, keep looking.' },
  { category: 'choosing', question: 'Should I hire a freelancer or an agency?', answer: 'A freelancer can chase a few links, but safe link building needs PR, writing, outreach, and cleanup handled together, which is a lot for one person. A team gives you all of it for a fair monthly fee, and you can pause or grow any time. We run lean, so you get the team without the big agency bill.' },
  { category: 'choosing', question: 'What does your monthly report look like?', answer: 'One page you can read in five minutes: the new links we earned, the sites they came from, why each one matters, and the next links we are chasing. We tie it back to your rankings so you can see the links doing their job, not just a list.' },
  { category: 'choosing', question: 'Do I keep everything you build?', answer: 'Yes, all of it. Every real link we earn lives on someone else’s trusted site and points to you, so it stays yours even if you ever leave us. There is no special software you have to keep paying for to hold onto your links.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: LINK_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const LINK_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Local Agency' },
  { label: 'Freelancer' },
  { label: 'Do it yourself' },
] as const;

const LINK_COMPARISON_ROWS = [
  { feature: 'Long contracts', values: ['None, monthly', '6 to 12 months typical', 'Varies', 'None'] },
  { feature: 'Earns real links (no spam)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Digital PR and real mentions', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Cleans up risky old links', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Reports you can actually read', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep everything', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="yes" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
  { feature: 'Founder-led senior team', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
];

export default function LinkBuildingPage() {
  return (
    <>
      <Script id="link-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="link-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'Link Building', url: 'https://factoryjet.com/seo/link-building' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
        formSlot={<HeroInlineForm region="in" source="seo_link_building_hero" />}
          eyebrow="LINK BUILDING SERVICES · INDIA"
          headline="Link Building Services in India — Real Links From Trusted Sites, So Google Trusts You More"
          lead="When a respected website links to yours, it is like getting a vote of confidence in public. Google counts those votes: the more good ones you have from trusted sites, the more it trusts you, and the higher you can rank. We earn real links the safe way, through digital PR, guest articles, and genuinely helpful content. We never use spammy tricks or bought links that can get you punished. No long contracts, and every link we earn stays yours."
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Real links only', 'No spammy tricks', 'No long contracts']}
          rightSlot={<HeroBrowserMockup badgeLabel="Real links earned" badgeCity="India" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="India's Trusted Link Building Agency — 500+ Sites, 4.9 Average Rating" />

        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Do for You"
          lead="Good link building is not one trick. It is a few honest ways to earn real links from sites people trust. We do the work that helps you safely, and skip the shortcuts that can get you punished. Here is everything we cover."
          sectors={[
            { name: 'Real links from trusted sites', description: 'We earn links from real websites that have real readers and a good name. Each one is a vote of confidence that tells Google your business can be trusted. No bought links, ever.', example: 'Real votes of trust.' },
            { name: 'Digital PR', description: 'We get your business mentioned and linked in news sites and blogs, often by sharing a useful story or expert view. These are some of the strongest links you can earn, because a respected site is vouching for you.', example: 'Mentions in news and blogs.' },
            { name: 'Guest articles', description: 'We pitch and write helpful articles for genuine sites with real readers in your field. The reader gets something useful, and you earn a real, trusted link at the same time.', example: 'Articles on genuine sites.' },
            { name: 'Listings that count', description: 'We add your business to the directories that real people and Google actually trust, and skip the junk ones that exist only to sell links. Quality over quantity, every time.', example: 'Directories that matter.' },
            { name: 'Cleaning up risky links', description: 'We find spammy or bought links from before that could hurt you, and ask Google to ignore them. This protects your site from being dragged down by mistakes made earlier.', example: 'Risky links removed.' },
            { name: 'Links from helpful content', description: 'We help you make content so useful that other sites want to link to it on their own, like guides, tools, and data. Earned links like these keep working for a long time.', example: 'Content people link to.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="LINK BUILDING · IN PLAIN WORDS"
          headline="What Link Building Is, in Plain Words"
          lead="Forget the jargon. Link building is just earning honest votes of trust from other websites, so Google believes your business is worth showing higher up."
          body={
            <>
              <p>
                A link is simply when another website mentions yours and lets people click through to you. Google
                treats each link from a trusted site like a vote of confidence. It is one site saying, in public,
                &quot;this business is worth a look.&quot;
              </p>
              <p>
                The more good votes you collect from trusted sites, the more Google trusts you, and the higher you can
                rank for the searches that bring you customers. A handful of strong, real links can do more than
                hundreds of weak ones.
              </p>
              <p>
                The catch is that fake or bought links are easy for Google to spot, and they can get your whole site
                punished. So we only earn real links from real sites. It is slower than buying them, but it is safe,
                and it lasts. Links work best as one part of your wider{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO plan</a>, once your{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">technical foundations</a> and{' '}
                <a href="/seo/local-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">local listings</a> are ready.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>Link building in three lines</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'A link', need: 'A vote of trust from another website', colour: '#F05A28' },
                  { type: 'Good links', need: 'From real sites with real readers', colour: '#F3A07A' },
                  { type: 'Never', need: 'Spammy networks or bought links', colour: '#0F0F12' },
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
          headline="Why Businesses Pick FactoryJet for Link Building"
          lead="Plenty of companies will sell you a big pile of links and move on. We earn real links the safe way, put quality ahead of numbers, and only do this once your basics and content are ready, so the links actually push strong pages up."
          pillars={[
            { icon: '01', title: 'Only real links, never spammy tricks.', body: 'We earn links from real sites with real readers, through PR, articles, and helpful content. We never buy links or use spammy networks, because those can get your whole site punished by Google.' },
            { icon: '02', title: 'Quality over quantity.', body: 'A few great links from trusted sites beat hundreds of junk ones. We aim for the links that actually move you, not big numbers that look impressive in a report but do nothing for your rankings.' },
            { icon: '03', title: 'We do this after your basics and content.', body: 'Links work best when they point to pages that are ready to rank. So we normally fix your foundations and content first, then earn links to push those strong pages up the results.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Earn Your Links, Step by Step"
          lead="We check before we plan. We earn links the real way. And we report from week one, so you always know what links we are chasing and why."
          stages={LINK_JOURNEY}
          closingNote="5 STEPS · REAL LINKS ONLY · NO SPAM · NO LONG CONTRACTS"
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Link building results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real link building results: businesses we earned trusted links for, mentions in real news and blogs, and rankings that climbed safely. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating from our clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. a Local Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to do link building. Here is the honest comparison: contracts, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'No lock-in', caption: 'real links earned through PR, articles, and helpful content, plus cleanup of risky old links, run month to month. Cancel any time, and you keep every link.' }}
          columns={LINK_COMPARISON_COLUMNS}
          rows={LINK_COMPARISON_ROWS}
          footer="FactoryJet plans run month to month, with 30 days notice to pause or stop."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO IT'S FOR"
          headline="Link Building for Businesses That Are Ready to Climb"
          lead="If your pages are good but stuck, the missing piece is often trust, and trust comes from real links. These are the businesses we help most with link building."
          sectors={[
            { name: 'Sites with good content stuck on page two', description: 'Strong pages that just need more trust to break onto page one. Real links are usually the push they are missing.' },
            { name: 'New sites no one links to yet', description: 'Brand new sites with no votes of trust. We earn the first real links so Google starts to take you seriously.' },
            { name: 'Businesses in competitive trades', description: 'Crowded markets where rivals have built up links over years. We help you earn the trusted links you need to catch up.' },
            { name: 'Sites hurt by spammy links before', description: 'Sites that bought cheap links and got burned. We clean up the risky ones and rebuild with real, safe links.' },
            { name: 'B2B and industrial firms', description: 'Specialist businesses that win through trust and expertise. Digital PR and expert articles earn the links that match your reputation.' },
            { name: 'Local businesses needing trusted local mentions', description: 'Businesses that want respected local sites and news to mention them, building trust in the area you serve.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="COMMON QUESTIONS" headline="Link Building Questions, Answered Simply" lead="The questions every owner asks before starting link building, answered without the confusing words." categories={LINK_FAQ_CATEGORIES} items={LINK_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Earn Real Links That Lift Your Rankings Safely?"
          sub="Start with a free check. We will show you the links you have today, any risky ones to clean up, and the real links we will earn in the first few months."
          primaryCta={{ label: 'Book a Free Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="No long contracts. Real links only, never spam. Reports you'll read in five minutes."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
