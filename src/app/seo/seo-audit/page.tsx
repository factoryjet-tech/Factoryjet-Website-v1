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
  title: 'SEO Audit Services in India | Free Website Check | FactoryJet',
  description:
    'SEO audit services in India: a full website health check that shows why you are not ranking and what to fix first, in plain English. Free first check.',
  keywords: [
    'seo audit',
    'seo audit services',
    'website seo audit',
    'free seo audit',
    'seo audit company india',
    'seo audit services india',
    'website health check',
    'seo site audit',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Audit Services in India | Free Website Check | FactoryJet',
    description:
      'Free SEO audit and full website SEO audit from FactoryJet. We run a complete health check of your website and show you exactly why you are not ranking and what to fix first, in plain English, ranked by what matters most. Start with a free first check, no strings.',
    url: 'https://factoryjet.com/seo/seo-audit',
    images: [{ url: 'https://factoryjet.com/images/services/seo.webp', width: 1200, height: 630, alt: 'FactoryJet SEO Audit Services in India' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Audit Services in India | FactoryJet',
    description: 'Free SEO audit and full website SEO audit. We show you exactly why you are not ranking and what to fix first, in plain English, ranked by what matters most. Free first check, no strings.',
    images: ['https://factoryjet.com/images/services/seo.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/seo/seo-audit', languages: seoSubServiceAlternatesIN['seo-audit'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/seo/seo-audit#service',
  serviceType: 'SEO Audit',
  name: 'SEO Audit Services by FactoryJet',
  description: 'SEO audit services in India: a full health check of your website that shows why you are not ranking and what to fix first. We check speed, content, links, your Google listing, and your rivals, then write a plain-English report with a ranked to-do list. Start with a free first check, no strings.',
  url: 'https://factoryjet.com/seo/seo-audit',
  provider: { '@type': 'Organization', name: 'FactoryJet Technologies', url: 'https://factoryjet.com', telephone: '+919699977699' },
  areaServed: { '@type': 'Country', name: 'India' },
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/seo/seo-audit#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/seo/seo-audit',
};

const AUDIT_JOURNEY: ServiceJourneyStage[] = [
  { number: '01', title: 'You share your site', description: 'You give us your website address and tell us the searches you want to win. That is all we need to start. The first check is free, with no strings. (Day 1)' },
  { number: '02', title: 'We run the full check', description: 'We run your site through our tools and our own eyes: speed on phones, whether Google can read your pages, your words and content, your links, your Google listing, and your rivals. (Day 1 to 3)' },
  { number: '03', title: 'We find what is holding you back', description: 'We sort everything we find into what is really hurting you and what barely matters, so we can show you the few things that will move the needle most. (Day 3 to 5)' },
  { number: '04', title: 'We write the plain-English report', description: 'We write it all up in plain words, not jargon: what is wrong, why it matters, and a clear to-do list ranked by what will help your rankings most. (Day 5)' },
  { number: '05', title: 'We walk you through it on a call', description: 'We get on a call and walk you through the report, answer your questions, and tell you exactly what to fix first. The report is yours to keep, whether you work with us or not. (Day 5 to 7)' },
];

const AUDIT_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost & Time' },
  { key: 'checks', label: 'What We Check' },
  { key: 'report', label: 'What You Get' },
  { key: 'after', label: 'After the Audit' },
  { key: 'choosing', label: 'Choosing & Reports' },
];

const AUDIT_FAQ_ITEMS = [
  { category: 'pricing', question: 'Is the free SEO audit really free?', answer: 'Yes. The first check is free, with no strings and no obligation. We look at your website, find the main things holding you back, and walk you through them on a call. If you want us to do the deeper, full audit or fix the problems after that, we will tell you the price first, and you decide. You are never signed up to anything just for getting the free check.' },
  { category: 'pricing', question: 'How long does an SEO audit take?', answer: 'The free first check is quick, usually a day or two, and we walk you through it on a call. The full, deep audit where we open up every part of your site takes about a week, because we check it by hand as well as with tools. We never rush it, because a fast audit that misses the real problem is worse than no audit at all.' },
  { category: 'pricing', question: 'How much does a full SEO audit cost, and what if I want you to fix things?', answer: 'The first check is free. A full deep audit and the work to fix the problems after it are paid, and we tell you the price before you commit. If you want us to handle the ongoing work, our SEO plans for Indian businesses start at ₹19,999 a month. There is no long contract. You pay month to month and can stop with 30 days notice.' },
  { category: 'pricing', question: 'Do I have to sign a long contract to get an audit?', answer: 'No. The free check needs no contract at all. Even if you go ahead with ongoing work, you pay month to month and can pause or stop with 30 days notice. We keep clients by getting results, not by tying them down. The report is yours to keep either way.' },
  { category: 'checks', question: 'What does an SEO audit actually check?', answer: 'Six things: how fast your site loads, especially on phones, whether Google can find and read every page, whether your words and pages aim at what people search for, your links and any risky ones, your Google listing and local presence, and your rivals, so you can see where they beat you and why. Then we write it all up in plain English.' },
  { category: 'checks', question: 'Do you check how fast my website loads?', answer: 'Yes, and we look hardest at how it loads on phones, because most people search on a phone now. A slow site quietly loses you customers and rankings, and Google counts speed when it decides who to show. We point out exactly what is slowing you down and how much it matters.' },
  { category: 'checks', question: 'Do you check whether Google can read my pages?', answer: 'Yes. Sometimes a perfectly good page is invisible to Google because of a small technical block, a broken setting, or a page that quietly tells Google to stay away. We find pages Google cannot find or read, so the work you already did can finally start to count.' },
  { category: 'checks', question: 'Do you look at my rivals too?', answer: 'Yes. We look at the businesses beating you for your main searches and show you where they are ahead, whether that is faster pages, better content, more trusted links, or a stronger Google listing. Seeing why they win makes it much clearer what you need to do to catch up.' },
  { category: 'report', question: 'What do I actually get from the audit?', answer: 'You get a plain-English report, not a 40-page PDF nobody reads. It lists what is wrong, why it matters, and a clear to-do list ranked by what will help your rankings most. We walk you through it on a call so you know exactly what to fix first, and the report is yours to keep.' },
  { category: 'report', question: 'Will I understand the report, or is it full of jargon?', answer: 'You will understand it. We write so a normal business owner can follow every line, with no confusing words. Where we have to use an SEO term, we explain it in plain English right there. The whole point is that you know what is wrong and what to do, not that you feel lost.' },
  { category: 'report', question: 'Is the report a to-do list or just a list of problems?', answer: 'It is a to-do list. Anyone can hand you a list of problems. We rank the fixes by what will help your rankings most, so you start with the few things that matter and do not waste time on small stuff. You always know what to do next.' },
  { category: 'report', question: 'Do I keep the report?', answer: 'Yes, the report is yours to keep, whether you work with us afterwards or not. You can hand it to your own team or another developer. There is no special software you have to keep paying for, and nothing is locked away.' },
  { category: 'after', question: 'What happens after the audit?', answer: 'It is your call. You can take the ranked to-do list and have your own team fix the problems, or you can ask us to do the work. Either way you leave the audit knowing exactly what is wrong, what matters most, and what to fix first. There is no pressure to carry on with us.' },
  { category: 'after', question: 'Can your team fix the problems the audit finds?', answer: 'Yes. We can take the to-do list and fix the problems for you, from speed and technical issues to content and links. If you want us to handle the ongoing work, our SEO plans for Indian businesses start at ₹19,999 a month, month to month, with 30 days notice to stop. We tell you the price first.' },
  { category: 'after', question: 'How soon will I see results after fixing the problems?', answer: 'It depends on what was wrong. Fixing a technical block or a speed problem can help within weeks. Content and link work usually takes three to six months to show up in your rankings, because Google takes time to trust the changes. The audit tells you which fixes are quick wins and which are the longer game.' },
  { category: 'after', question: 'Can you audit a brand new website?', answer: 'Yes. A check on a new site is one of the smartest things you can do, because it is far easier to build things right than to fix them later. We check that Google can find your pages, that your speed and setup are sound, and that your words aim at what people actually search for.' },
  { category: 'choosing', question: 'How do I pick a good company for an SEO audit?', answer: 'Look for one that gives you a plain-English report, ranks the fixes instead of dumping a list of problems, and is happy to walk you through it on a call. Avoid anyone who hands you an auto-generated PDF and disappears. Ask them to explain your top three problems in plain words. If they cannot, keep looking.' },
  { category: 'choosing', question: 'Is a free audit just a sales pitch?', answer: 'A bad one is. Ours is a real check: we find the things actually holding you back and tell you what to fix first, even if you never pay us a rupee. We do offer to do the work, but the value is in the report, and the report is yours. You are free to walk away with it.' },
  { category: 'choosing', question: 'How is your audit different from the free online SEO checkers?', answer: 'Free online checkers run an automatic scan and spit out a long list of warnings with no sense of what matters. We use tools too, but a senior person reads your site by hand, works out which problems are really hurting you, and ranks the fixes. You get judgement, not just a printout.' },
  { category: 'choosing', question: 'Should I get an audit before hiring an SEO agency?', answer: 'Yes, it is one of the best things you can do. An honest audit shows you what is really wrong, so you know what to ask agencies for and can spot anyone selling you work you do not need. It puts you in control of the conversation instead of taking their word for it.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AUDIT_FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: { '@type': 'Answer', text: it.answer },
  })),
};

const AUDIT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Agency' },
  { label: 'Freelancer' },
  { label: 'Do it yourself' },
] as const;

const AUDIT_COMPARISON_ROWS = [
  { feature: 'Free first check', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Plain-English report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Ranked to-do list (not just problems)', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Checks speed, content, links, and local', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'Walks you through it on a call', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
  { feature: 'You keep the report', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="diy" kind="yes" />] },
  { feature: 'Founder-led senior team', values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="ag" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="diy" kind="no" />] },
];

export default function SeoAuditPage() {
  return (
    <>
      <Script id="audit-seo-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="audit-seo-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'SEO', url: 'https://factoryjet.com/seo' },
          { name: 'SEO Audit', url: 'https://factoryjet.com/seo/seo-audit' },
        ]}
      />

      <main className="bg-fj-cream">
        <Hero
          eyebrow="SEO AUDIT SERVICES · INDIA"
          headline="A Full Health Check of Your Website That Shows Exactly Why You Are Not Ranking"
          lead="If your website is not showing up on Google, you need to know why before you spend a rupee fixing it. Our SEO audit is a full health check of your website. We look at everything that decides where you rank, then show you exactly what is wrong and what to fix first. You get a clear, plain-English report with a to-do list, ranked by what matters most. Start with a free first check, with no strings and no obligation. The report is yours to keep, whether you work with us or not."
          primaryCta={{ label: 'Get a Free Check', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          trustItems={['Free first check', 'Plain-English report', 'Ranked to-do list']}
          rightSlot={<HeroBrowserMockup badgeLabel="Free SEO check" badgeCity="India" />}
        />

        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        <BigThreeTrustBlock variant="statement" eyebrow="BY THE NUMBERS" headline="500+ sites done. 4.9 average rating. An SEO audit that tells you the truth." />

        <IndustriesGrid variant="cards"
          eyebrow="WHAT'S INCLUDED"
          headline="What We Actually Check for You"
          lead="A good audit is not one quick scan. Where you rank comes down to lots of moving parts working together. We check all the parts that matter, then explain what we find in plain words. Here is everything we look at."
          sectors={[
            { name: 'How fast your site loads', description: 'We check how quickly your pages load, especially on phones, because most people search on a phone now. A slow site quietly loses you customers, and Google counts speed when it decides who to show.', example: 'Speed checked, phones first.' },
            { name: 'Can Google find your pages', description: 'We check whether Google can find and read every page on your site. Sometimes a good page is invisible because of a small technical block or a setting that quietly tells Google to stay away. We find those.', example: 'Every page, found and readable.' },
            { name: 'Your words and pages', description: 'We check whether your words and pages are aimed at what people actually type into Google. If your pages talk about the wrong things, the right customers never find you, no matter how good your business is.', example: 'Aimed at real searches.' },
            { name: 'Your links', description: 'We look at who links to you from other websites, because links act like votes that tell Google you can be trusted. We also flag any risky or spammy links that could be quietly hurting you.', example: 'Good links found, risky ones flagged.' },
            { name: 'Your Google listing and local', description: 'We check your free Google business listing and how you show up for nearby and "near me" searches, because for many businesses that is where most of the customers come from.', example: 'Listing and local presence checked.' },
            { name: 'Your rivals', description: 'We look at the businesses beating you for your main searches and show you where they are ahead and why, so it is clear what you need to do to catch up and pass them.', example: 'See where rivals beat you.' },
          ]}
        />

        <ServiceExplanation
          eyebrow="SEO AUDIT · IN PLAIN WORDS"
          headline="What an SEO Audit Is, in Plain Words"
          lead="Forget the jargon. An SEO audit is simply a careful look at your website to find out why it is not getting the customers it should, and what to do about it."
          body={
            <>
              <p>
                An audit is a health check for your website, like a doctor&apos;s check-up. Instead of guessing why
                you are not showing up on Google, we run the tests and find out for sure, so you stop wasting money
                fixing the wrong things.
              </p>
              <p>
                We look at everything that decides where you rank, the{' '}
                <a href="/seo/technical-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">speed</a>, the pages, the words, the{' '}
                <a href="/seo/link-building" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">links</a>, and your{' '}
                <a href="/seo/local-seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">Google listing</a>, then we write a plain-English report with a clear, ranked to-do list. So you know
                exactly what to fix first, and you do not have to be an SEO expert to follow it.
              </p>
              <p>
                The first check is free, with no strings. You can take what we find and hand it to your own team, or
                ask us to do the full{' '}
                <a href="/seo" className="font-medium text-[#F05A28] underline decoration-1 underline-offset-2 hover:no-underline">SEO work</a>. Either way, you walk away knowing exactly what is wrong and what matters most.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>What the audit gives you</p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'We check', need: 'Speed, content, links, listing, rivals', colour: '#F05A28' },
                  { type: 'You get', need: 'A plain-English report, ranked by what matters', colour: '#F3A07A' },
                  { type: 'Free first check', need: 'No strings, no obligation', colour: '#0F0F12' },
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
          headline="Why Business Owners Pick FactoryJet for an SEO Audit"
          lead="Plenty of tools will spit out a long list of warnings and leave you more confused than before. We do the opposite. We tell you what is wrong in plain words, rank what to fix first, and let you start for free, so you can see the problems before you spend anything."
          pillars={[
            { icon: '01', title: 'A plain-English report.', body: 'Not a 40-page PDF nobody reads. We write so a normal business owner can follow every line, and where we have to use an SEO term, we explain it right there.' },
            { icon: '02', title: 'A clear to-do list.', body: 'We rank the fixes by what will help your rankings most, so you start with the few things that matter and do not waste time on small stuff. You always know what to do next.' },
            { icon: '03', title: 'A free first check.', body: 'You can see what is wrong before you spend anything. The first check is free, with no strings, and the report is yours to keep whether you work with us or not.' },
          ]}
        />

        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="How We Run Your SEO Audit, Step by Step"
          lead="We check before we judge. We sort the real problems from the small stuff. And we explain it all in plain words, so you always know what we found and why it matters."
          stages={AUDIT_JOURNEY}
          closingNote="5 STEPS · FREE FIRST CHECK · PLAIN-ENGLISH REPORT · RANKED TO-DO LIST"
        />

        <section className="relative overflow-hidden bg-fj-cream py-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-fj-mono font-medium uppercase text-[#F05A28]" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>RECENT WORK</p>
            <h2 className="fj-display mt-3 font-semibold text-fj-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>SEO audit results are on the way</h2>
            <p className="mx-auto mt-4 max-w-2xl font-fj-body text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>We are putting together real audit stories: sites we checked, the few fixes that mattered most, and the rankings that followed. It all sits on the same work behind 500+ websites we have built, at a 4.9 average rating from our clients.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-fj-ink/15 bg-white px-6 py-3 font-fj-body font-semibold text-fj-ink transition hover:border-[#F05A28] hover:text-[#F05A28]" style={{ fontSize: '0.9375rem' }}>See our website portfolio →</a>
            </div>
          </div>
        </section>

        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. an Agency vs. a Freelancer vs. Doing It Yourself"
          lead="There are four ways to get a website check. Here is the honest comparison: what you pay to start, what you actually get, and what you keep at the end."
          pullQuote={{ stat: 'Free to start', caption: 'a full health check of your website, a plain-English report, and a to-do list ranked by what matters most. The first check is free, and the report is yours to keep.' }}
          columns={AUDIT_COMPARISON_COLUMNS}
          rows={AUDIT_COMPARISON_ROWS}
          footer="The first SEO audit check is free, with no strings. Any deeper work is priced up front, with no long contract."
        />

        <IndustriesGrid variant="cards"
          eyebrow="WHO IT'S FOR"
          headline="Who an SEO Audit Is For"
          lead="If you are not sure why your website is not getting customers, a check is the fastest way to find out. These are the situations where an audit helps most."
          sectors={[
            { name: 'Sites not ranking despite effort', description: 'You have put in the work and money but your pages still are not showing up. An audit finds the real reason, which is often one or two things you cannot see.' },
            { name: 'Sites after a redesign', description: 'You launched a shiny new site and your traffic fell instead of rising. A check finds what the redesign quietly broke, like pages Google can no longer find.' },
            { name: 'Before hiring an SEO agency', description: 'An honest audit shows you what is really wrong first, so you know what to ask for and can spot anyone selling you work you do not need.' },
            { name: 'Sites whose traffic dropped', description: 'Your visitors fell off a cliff and you do not know why. We find what changed, whether it was a Google update, a technical break, or a risky link.' },
            { name: 'New site owners', description: 'You just built a site and want to start right. A check makes sure Google can find your pages and your words aim at what people actually search for.' },
            { name: 'Anyone unsure what is wrong', description: 'You know something is off but you cannot put your finger on it. An audit turns that uncertainty into a clear, ranked list of what to fix first.' },
          ]}
        />

        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="What business owners say about working with FactoryJet" region="in" />

        <FAQ eyebrow="COMMON QUESTIONS" headline="SEO Audit Questions, Answered Simply" lead="The questions every owner asks before getting a website check, answered without the confusing words." categories={AUDIT_FAQ_CATEGORIES} items={AUDIT_FAQ_ITEMS} />

        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Find Out Exactly Why You Are Not Ranking?"
          sub="Start with a free SEO audit. We will run a full health check of your website, show you what is holding you back, and give you a plain-English to-do list ranked by what matters most."
          primaryCta={{ label: 'Get a Free Check', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Work', href: '/portfolio' }}
          objectionHandler="Free first check, no strings. A plain-English report you'll actually read. The report is yours to keep."
        />
      </main>

      <SiteFooter locale="in" />
    </>
  );
}
