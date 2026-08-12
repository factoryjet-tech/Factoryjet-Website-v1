import type { Metadata } from 'next';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import ComparisonTable from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import Link from 'next/link';

const PAGE_URL = 'https://factoryjet.com/detroit/web-design';
const PAGE_TITLE = 'Web Design Company Detroit MI | 7-Day Builds | FactoryJet';
const PAGE_DESCRIPTION =
  'FactoryJet is a web design company for Detroit businesses. Next.js sites built for speed, search and AI answers. Starter sites ship in 7 days and you own the code.';
const DATE_MODIFIED = '2026-08-12';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${PAGE_URL}/`,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design: Detroit, Michigan',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
};

/* The ten-question checklist. Rendered visibly below AND used to build the
   ItemList schema, so the two can never drift apart. */
const HIRING_CHECKLIST = [
  {
    title: 'Who does the work, and where do they sit?',
    body: 'Some "Detroit" agencies are a sales office over a subcontractor network. Not automatically bad, but know it first. Ask who writes the code, who writes the copy, and who you email when it breaks at 5pm.',
  },
  {
    title: 'What do you own when it ends?',
    body: 'The source code, design files, domain, hosting account and analytics property, all in your name. If any of those stay with the agency, you are renting your own website.',
  },
  {
    title: 'What is it built on, and who patches it?',
    body: 'WordPress with fifteen plugins needs someone maintaining it monthly. A statically built Next.js site has almost nothing to patch. Neither is wrong, but the upkeep lands on you either way.',
  },
  {
    title: 'How fast is it on a phone on a weak signal?',
    body: 'Google publishes the target: Largest Contentful Paint, the moment your main content appears, under 2.5 seconds for 75% of visits. Ask what number they build to and how they test it.',
  },
  {
    title: 'Is the copy included, or is it your homework?',
    body: 'The top reason web projects run late. Design done, build waiting, nobody has written the About page. Ask who is writing the words, then get that answer into the scope.',
  },
  {
    title: 'What happens to my rankings on launch day?',
    body: 'A redesign that changes URLs without 301 redirects can erase rankings you spent years earning. Ask for a redirect map before launch and a Search Console check after.',
  },
  {
    title: 'Can an AI assistant read and quote this site?',
    body: 'Buyers now ask ChatGPT and Perplexity before Google. Those crawlers need server-rendered HTML, real headings, FAQ and Service schema, and a robots.txt that lets them in. Ask if it is included or billed later.',
  },
  {
    title: 'How many revision rounds, and how do they run?',
    body: 'Unlimited revisions sound generous and usually mean an endless project. Structured rounds with one named decision maker ship faster. Ask how feedback gets collected, because scattered email threads are how deadlines vanish.',
  },
  {
    title: 'Who fixes it when it breaks on a Friday night?',
    body: 'Ask what support covers, how long it lasts, and what happens after. A contact form that quietly stopped sending is a revenue problem. You want a named contact and a response time.',
  },
  {
    title: 'Can I see the scope before I pay anything?',
    body: 'A serious shop gives you a page list, a timeline and a deliverable list after one call. A vague proposal produces a vague invoice. Get the sitemap and the launch date in writing.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost & Timeline' },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'design', label: 'Design Principles' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Detroit & Metro' },
  { key: 'ownership', label: 'Ownership & Support' },
];

/* Single source of truth for the FAQ. The visible <FAQ /> and the FAQPage
   JSON-LD are both built from this array. Never duplicate it. */
const DETROIT_FAQ_ITEMS = [
  {
    question: 'What does a web design company in Detroit actually do?',
    answer:
      'It plans, designs, builds and launches your website, then makes sure it loads fast and gets found. A full-service shop also writes the copy, sets up analytics, adds schema so AI assistants quote you accurately, handles redirects on launch day, and trains your team.',
    category: 'choosing',
  },
  {
    question: 'How much should a small business in Detroit pay for a website?',
    answer:
      'There is no honest single number, because the work scales with what you need. The drivers are page count, how much copy is written from scratch, integrations like booking or inventory, and whether you sell online. A five-page Royal Oak clinic site and a Sterling Heights parts catalogue are different projects.',
    category: 'cost',
  },
  {
    question: 'How do web design agencies charge?',
    answer:
      'Three models. Hourly, where you pay for time and the total moves. Fixed project, where the scope is agreed up front and the number only changes if the scope does. Monthly retainer, where you rent a team. We work fixed project for builds, with an optional retainer after launch.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A focused five-page site takes about a week when the content is ready. Ten to fifteen pages with a blog and lead capture usually runs two to three weeks. Custom builds are scoped individually. Projects rarely stall on design. They stall waiting for photos, logos and approvals.',
    category: 'cost',
  },
  {
    question: 'Can you really build a website in 3 days?',
    answer:
      'You can stand up a template in three days. You cannot research a market, write real copy, source images and test properly in three days. Our Starter tier ships in seven because that is the honest floor for a site we will put our name on.',
    category: 'cost',
  },
  {
    question: 'Is it better to build my own website or hire someone?',
    answer:
      'Build it yourself if the site is a placeholder and nobody is searching for you yet. Hire someone once the site has a job: generating quotes, booking appointments, or convincing a procurement team you are a real supplier. The break point is when one lost lead costs more than the build.',
    category: 'choosing',
  },
  {
    question: 'Can ChatGPT build my website for me?',
    answer:
      'It writes working code and a decent first draft, and we use AI in our own workflow daily. It cannot decide what your Detroit customers care about, align your Google Business Profile, set redirects so you keep rankings, or notice when the contact form quietly stops sending. Generation is the easy part.',
    category: 'technical',
  },
  {
    question: 'Is AI replacing web designers?',
    answer:
      'It is replacing the mechanical parts: first drafts, resizing, boilerplate, alt text. It has not replaced judgement about what a page should say, what to cut, or how a supplier convinces an engineer to request a quote. Designers who only pushed pixels are losing work. The rest are busier.',
    category: 'technical',
  },
  {
    question: 'What are the five golden rules of a good website?',
    answer:
      'Say who you are and what you do above the fold. Make the next action obvious on every page. Load fast on a mid-range phone. Work for keyboard and screen reader users. Keep it current, because a stale site reads as a closed business.',
    category: 'design',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'A teaching framework: Content, Clarity, Consistency, Credibility, Convenience, Call to action and Conversion. It is a checklist, not a law. The useful part is that six of the seven are about whether a visitor understands and trusts you. Only one is about the click. Most sites get that ratio backwards.',
    category: 'design',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'The rough idea that a visitor decides whether to stay within about three seconds. Treat it as a design prompt, not a measured law. The testable version is public: Google recommends Largest Contentful Paint under 2.5 seconds for 75% of visits. That is the number we build against.',
    category: 'design',
  },
  {
    question: 'What are the red flags when hiring a web designer?',
    answer:
      'No portfolio of live URLs you can open right now. Refusing to name the platform. A proposal with no page list and no date. Your domain or hosting staying in their name. Guaranteed number-one rankings, which nobody can promise. And a quote that arrives without one question about your business.',
    category: 'choosing',
  },
  {
    question: 'What should a business website include at minimum?',
    answer:
      'A home page stating what you do and who for. One page per service, because that is what people search. An about page with real faces and a real address. Contact details plus a form that works. Proof, whether reviews, logos or photos of finished work. And a privacy page.',
    category: 'design',
  },
  {
    question: 'Is it worth building a website for a small business?',
    answer:
      'Yes, and the reason has changed. It used to be about being findable. Now it is also the source AI assistants read when someone asks them to recommend a plumber, a clinic or a supplier in metro Detroit. Your own site is the only place you control what they learn about you.',
    category: 'choosing',
  },
  {
    question: 'Web design or web development: which do I need?',
    answer:
      'Design decides what the site says and how it looks. Development makes it work in a browser. A brochure site is mostly the first. A booking system or a parts catalogue flips that ratio. Most projects need both, which is why splitting them across two vendors usually costs more.',
    category: 'technical',
  },
  {
    question: 'Will my new site show up in ChatGPT and other AI answers?',
    answer:
      'It can, and it is a separate job from ranking on Google. AI engines pull from pages they can crawl and parse cleanly: server-rendered HTML rather than content that only appears after JavaScript runs, real heading structure, FAQ and Service schema, and a robots.txt allowing GPTBot, ClaudeBot and PerplexityBot.',
    category: 'technical',
  },
  {
    question: 'Do you work with businesses outside Detroit city limits?',
    answer:
      'Yes, most of our metro work sits outside the city line. Royal Oak, Ferndale, Birmingham, Troy, Southfield, Dearborn, Warren, Sterling Heights, Novi and Ann Arbor are all normal. It matters, because a Ferndale studio and a Troy firm compete in different local packs even twenty minutes apart.',
    category: 'local',
  },
  {
    question: 'Do you build sites for automotive suppliers and manufacturers?',
    answer:
      'Yes, and it is a different build from a consumer site. Engineering and procurement buyers want capability pages, certifications, tolerances, spec sheet downloads and an RFQ form that reaches a real person. The region holds more than 99,000 engineers, so assume a technical reader who bounces off vague marketing language.',
    category: 'local',
  },
  {
    question: 'Do you work with Detroit restaurants, bars and retail?',
    answer:
      'Yes. Those sites live or die on mobile: a menu that opens instantly, hours that are correct, a reservation link that works, and a Google Business Profile matching the site exactly. We build them light so they load on a phone outside the door in Corktown or on Nine Mile.',
    category: 'local',
  },
  {
    question: 'How can I tell if a Detroit web design company is actually local?',
    answer:
      'Look for a street address you can find on a map, not a suite that resolves to a mail service. Check whether the portfolio links to live Michigan businesses. Ask to meet. Local is not always better, but a company implying a presence it does not have has told you something.',
    category: 'choosing',
  },
  {
    question: 'Who owns the code and design files when we finish?',
    answer:
      'You do, completely. You get the Next.js codebase in a repository you control and the full design file. No licence fee, no proprietary platform, no clause tying the site to us. If you move to another developer next year, nothing breaks.',
    category: 'ownership',
  },
  {
    question: 'What happens after launch?',
    answer:
      'A 30-day support window covers bugs, fixes and training questions at no extra charge, and we record the handover so new staff can watch it later. After that you can self-manage, hire anyone you like, or keep us on a maintenance plan. All three are normal.',
    category: 'ownership',
  },
];

export default function DetroitWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_detroit_web_design_hero" />}
          eyebrow={'WEB DESIGN · DETROIT, MI'}
          headline={'A Web Design Company in Detroit That Builds Fast Sites, Not Slow Projects'}
          lead={
            'Detroit runs on engineering, manufacturing and a startup scene that grew up around Michigan Central. Your website should be held to the same standard. FactoryJet ships a production Starter site in seven days, and you own every file.'
          }
          trustItems={['Fixed scope agreed up front', '7-day Starter delivery', 'Next.js, schema and GA4 included']}
          extraCta={<WhatsAppCTA city="Detroit" variant="light" />}
          rightSlot={
            <img
              src="/images/us/detroit-web-design/hero-detroit-studio.webp"
              alt="A three-person web design team reviewing a product page layout on a large monitor in a brick-and-timber loft studio"
              width={1264}
              height={848}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover shadow-[0_18px_50px_-24px_rgba(15,15,18,0.35)]"
            />
          }
        />

        {/* Answer-first block. Highest-value extraction target on the page. */}
        <section className="bg-fj-cream pt-4 pb-14 md:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 rounded-2xl border border-fj-ink/10 bg-white p-7 md:grid-cols-12 md:p-10">
              <div className="md:col-span-4">
                <p className="font-fj-mono text-xs uppercase tracking-widest text-[#B23E13]">
                  The short answer
                </p>
                <h2 className="mt-3 font-fj-display text-2xl leading-tight text-fj-ink md:text-[1.75rem]">
                  What does a web design company in Detroit do?
                </h2>
              </div>
              <div className="md:col-span-8">
                <p
                  data-speakable
                  className="font-fj-body text-lg leading-relaxed text-fj-ink/85 md:text-xl"
                >
                  A web design company in Detroit plans, designs, builds and launches your website,
                  then makes sure it loads fast and shows up in search. A good one also writes the
                  copy, sets up tracking, adds schema markup so AI answer engines can quote you, and
                  hands over code you own.
                </p>
                <p className="mt-4 font-fj-body text-base leading-relaxed text-fj-ink/70">
                  Where buyers go wrong is treating that as one commodity. In this metro a Tier 2
                  supplier in Warren and a taproom in Ferndale search the same phrase and need
                  almost nothing in common. Scope the site around whoever will actually read it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline={'What Detroit businesses get from a FactoryJet build.'}
        />

        <CityContextSection
          eyebrow={'DETROIT MARKET'}
          headline={'Detroit Buyers Read Before They Call'}
          leadParagraphs={[
            'Detroit is not a generic mid-size market and a website here should not read like one. The region holds more than 99,000 engineers and ranks second in the country for concentration of engineering talent, so a large share of your visitors read specifications before they read slogans. Around 250,000 manufacturing workers sit in the same region, and the automotive cluster still turns out roughly 1.7 million vehicles a year across 17 models, 7 of them electric.',
            "The other half of Detroit is much newer. Ford's Michigan Central campus covers 30 acres of Corktown and Southwest Detroit and now houses hundreds of companies. Wayne State University and the College for Creative Studies keep talent flowing through Midtown. Beyond that, the metro is really a chain of separate main streets: Royal Oak, Ferndale, Birmingham, Troy, Southfield, Dearborn and Ann Arbor each have their own economy. A site built for one of those audiences will not automatically work for the others.",
          ]}
          stats={[
            {
              value: '99,000+',
              label: 'Engineers in the Detroit region in 2024, the #2 US metro for engineering talent',
              sourceUrl: 'https://www.detroitregionalpartnership.com/mobility-automotive/',
              sourceLabel: 'Detroit Regional Partnership',
            },
            {
              value: '250,000',
              label: 'Manufacturing workers across the Detroit region',
              sourceUrl:
                'https://www.detroitregionalpartnership.com/seven-industries-powering-the-detroit-region/',
              sourceLabel: 'Detroit Regional Partnership',
            },
            {
              value: '30 acres',
              label: "Michigan Central's campus in Corktown and Southwest Detroit",
              sourceUrl: 'https://michigancentral.com/about/',
              sourceLabel: 'Michigan Central',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WEB DESIGN · DETROIT'}
          headline={'What Web Design Actually Buys a Detroit Business'}
          lead={
            'Most agencies sell you a look. What a business here needs is an asset: a site that loads on a phone in a plant parking lot, explains the offer in plain language, and gets picked up by Google and by the assistants your buyers now ask first.'
          }
          body={
            <>
              <p>
                For mobility and manufacturing suppliers the site is a qualification tool. Your reader
                is an engineer with a shortlist and a deadline, and they want capabilities, materials,
                tolerances, certifications and an RFQ form (request for quote) that reaches a human.
                We build supplier sites so a technical reader answers their own questions in two
                clicks, because that reader will not send a vague enquiry to find out.
              </p>
              <p>
                For clinics, law firms and trades across Royal Oak, Troy and Dearborn the job is local
                search: one page per service instead of one page listing everything, signals matching
                your Google Business Profile exactly, and a booking path that survives a one-handed
                tap. The local pack, the three-result map block, is decided on those details.
              </p>
              <p>
                Every build ships the same technical floor: a Next.js front end, server-rendered HTML
                crawlers can read without running JavaScript, JSON-LD schema for Service and FAQ
                content, GA4 on day one, and a redirect map so a relaunch does not cost you rankings
                you already have. Google&apos;s published guidance is that Largest Contentful Paint
                should land under 2.5 seconds for 75% of visits. That is the number we build against,
                and it is testable.{' '}
                <a
                  className="font-medium text-[#B23E13] underline underline-offset-4"
                  href="https://web.dev/articles/lcp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s LCP guidance
                </a>
                .
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/detroit-web-design/detroit-process-review.webp"
              alt="Two colleagues at a standing desk reviewing a website homepage layout on a laptop with printed wireframes on the wall behind them"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* Listicle: the most useful thing we can hand someone at shortlist stage. */}
        <section className="bg-fj-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="font-fj-mono text-xs uppercase tracking-widest text-[#B23E13]">
                  Before you sign
                </p>
                <h2 className="mt-3 font-fj-display text-3xl leading-[1.15] text-fj-ink md:text-4xl">
                  10 Questions to Ask a Detroit Web Design Company
                </h2>
                <p className="mt-5 font-fj-body text-base leading-relaxed text-fj-ink/75">
                  Ask every shop on your shortlist the same ten questions, including us. The answers
                  separate a build team from a sales desk faster than any portfolio. Nine of the ten
                  are about what happens after launch, which is where projects go wrong.
                </p>
                <img
                  src="/images/us/detroit-web-design/detroit-manufacturer-site.webp"
                  alt="An engineer reviewing a parts catalogue page on a tablet in a bright office overlooking a factory floor"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="mt-8 hidden w-full rounded-2xl object-cover md:block"
                />
              </div>
              <ol className="md:col-span-7">
                {HIRING_CHECKLIST.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex gap-5 border-t border-fj-ink/10 py-6 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 font-fj-mono text-sm text-[#B23E13]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-fj-display text-lg leading-snug text-fj-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-fj-body text-[0.95rem] leading-relaxed text-fj-ink/75">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Mid-page CTA. Most readers never reach the footer. */}
        <section className="bg-fj-cream pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 rounded-2xl border border-[#F05A28]/25 bg-[#F05A28]/[0.07] p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="md:max-w-2xl">
                <h2 className="font-fj-display text-2xl leading-tight text-fj-ink md:text-3xl">
                  Want those ten answers about your own project?
                </h2>
                <p className="mt-3 font-fj-body text-base leading-relaxed text-fj-ink/75">
                  Send your current site, or just your business name. You get a page list, a timeline
                  and a fixed scope back, with no obligation and no discovery fee.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F05A28] px-7 py-4 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Get a scoped quote
              </Link>
            </div>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow={'OUR PROCESS'}
          headline={'How We Build a Detroit Website'}
          stages={[
            {
              number: '01',
              title: 'Discovery',
              description:
                'One call to map who buys from you, which part of the metro they search from, and what your three closest competitors rank for. You leave with a page list and a delivery date.',
            },
            {
              number: '02',
              title: 'Design',
              description:
                'Wireframes first, then a full mobile-first design system in Figma. Structured feedback rounds with one named decision maker. Nothing moves to build until you sign off.',
            },
            {
              number: '03',
              title: 'Build',
              description:
                'Next.js front end, headless CMS if you need one, forms, and integrations such as booking, inventory or a CRM. Performance budgets are enforced from the first commit.',
            },
            {
              number: '04',
              title: 'Content and SEO',
              description:
                'Copy, compressed WebP imagery, meta titles, JSON-LD schema, internal links and a redirect map for every old URL. We verify the site renders for GPTBot, ClaudeBot and PerplexityBot before launch.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, wire GA4 and Search Console, submit the sitemap, then a recorded handover so your team can edit without us. A 30-day support window follows.',
            },
          ]}
        />

        <IndustriesGrid
          // variant="cards" added 2026-08-12. The default "showcase" variant renders four
          // hardcoded, unsourced performance claims (+38% conversion lift, +52% leads,
          // +41% bookings, +29% traffic) that read as real client results. The other three
          // new web-design pages in this wave all use "cards" for the same reason.
          variant="cards"
          eyebrow={'DETROIT × WEB DESIGN'}
          headline={'Web Design for the Industries That Run This Region'}
          lead={
            'The Detroit region carries 19 Fortune 1000 companies, a supplier base reaching into every suburb, and a startup layer that barely existed ten years ago. Each buys a different website.'
          }
          sectors={[
            {
              name: 'Mobility and automotive suppliers',
              description:
                'The region produces roughly 1.7 million vehicles a year across 17 models, 7 of them electric, and the supplier network runs from Warren to Auburn Hills. These sites are read by engineers, so they need capability pages, tolerances, certifications, spec sheet downloads and an RFQ form that routes to a named person.',
              example: 'Tier 1 and 2 suppliers, tooling shops, EV component makers.',
            },
            {
              name: 'Advanced manufacturing and tool and die',
              description:
                'Around 250,000 manufacturing workers sit in this region, and many of the shops serving them still run a site that will not open properly on a phone. We build catalogue sites that load on a shop floor connection and make a quote request take one screen, not five.',
              example: 'Machine shops and contract manufacturers in Sterling Heights and Livonia.',
            },
            {
              name: 'Healthcare and professional services',
              description:
                'Patients and clients choose from a phone, usually from a map result. That makes page speed, correct hours, one page per service and a one-handed booking path matter more than a hero video. Firms selling credibility also need real people with real credentials on the page.',
              example: 'Clinics, law and accounting firms in Royal Oak, Troy and Southfield.',
            },
            {
              name: 'Restaurants, retail and startups',
              description:
                "Corktown, Eastern Market and the Woodward corridor run on mobile discovery, where a menu that opens instantly beats anything built for desktop. Michigan Central's 30-acre campus now houses hundreds of companies, and the teams there need a site that survives an investor, a recruit and a customer in the same week.",
              example: 'Restaurants, breweries, independent retail and mobility startups.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'THE SHORTLIST'}
          headline={'How FactoryJet Compares to Other Detroit Web Design Companies'}
          lead={
            'The honest version: we are one option on a list that already has good names on it, and for some projects another name here is the better call. Everyone below ranks on page one for Detroit web design searches. We say what each is genuinely strong at, and when to pick them over us.'
          }
          columns={[
            { label: 'What they are strong at' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Which one to pick' },
          ]}
          rows={[
            {
              feature: 'Detroit Website Design (Troy, MI)',
              values: [
                'The long-standing local option. More than 20 years of custom WordPress design, ecommerce and SEO, all staff in their Troy office, no outsourcing.',
                'Statically built Next.js with schema, GA4 and a redirect map, on a fixed scope.',
                'Them for WordPress from a team you can drive to. Us for a fast static front end and no plugin upkeep.',
              ],
            },
            {
              feature: 'ThunderTech (Cleveland HQ, Detroit office)',
              values: [
                'A full-service marketing agency for midsize brands: web development alongside brand strategy, UX, video, advertising and communications.',
                'A focused build team. The website is the deliverable, not one line in a marketing programme.',
                'Them if you need an outsourced marketing department. Us if the website itself is the job.',
              ],
            },
            {
              feature: 'ANCHOR DBC (Royal Oak, MI)',
              values: [
                'A web and brand studio founded in 2017 by Johnny and Tessa Jarbo, with strong identity work and a real specialism in food, beverage and hospitality.',
                'Search and conversion led, with structured data and performance budgets from the first commit.',
                'Them if brand identity leads and you are opening a restaurant. Us if the site has to rank and convert first.',
              ],
            },
            {
              feature: 'Thrive Internet Marketing (national, Detroit page)',
              values: [
                'A large national agency running since 2005 across roughly 25 cities, covering SEO, PPC, social, CRO, Amazon marketing and web design.',
                'A small senior team, one scope, one contact, and code you keep in your own repository.',
                'Them for many marketing channels at scale. Us for a tight build and full ownership.',
              ],
            },
            {
              feature: 'Clutch and DesignRush directories',
              values: [
                'Useful shortlisting tools with verified client reviews and filters by service, a fast way to surface names you have not heard of.',
                'Not a directory. A build team you hire directly, with a named contact from the first call.',
                'Use them to assemble a shortlist, then put every name on it, ours included, through the ten questions above.',
              ],
            },
          ]}
        />

        <PricingTiers
          eyebrow={'SCOPE, NOT GUESSWORK'}
          headline={'Three Scopes for Detroit Businesses'}
          lead={
            'Every project is quoted as a fixed scope after one call, so you know the page list, the deliverables and the launch date before anything starts. Projects that sit between two tiers get scoped directly.'
          }
          tiers={[
            {
              priceRange: 'Fixed scope',
              name: 'Starter',
              description:
                'A five-page site that loads fast on a phone and ranks for your name and core service. Best for trades, single-location clinics and new businesses.',
              features: [
                '5 pages, mobile-first',
                'Schema markup and local SEO setup',
                'Contact form with email routing',
                '2 structured revision rounds',
                'Ships in 7 days, 30-day support',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
            {
              priceRange: 'Fixed scope',
              name: 'Growth',
              description:
                'A 10–15 page site with a blog CMS, a page per service, and lead capture wired to your inbox or CRM. Best for firms and suppliers that need qualified enquiries.',
              features: [
                '10–15 pages with blog CMS',
                'Service and location page architecture',
                'GA4, Search Console and lead tracking',
                '3 structured revision rounds',
                '30-day support plus recorded training',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
              popular: true,
            },
            {
              priceRange: 'Fixed scope',
              name: 'Scale',
              description:
                'A custom Next.js build with ecommerce, catalogue or integration work. Best for suppliers with a real parts catalogue and teams replacing an aging platform.',
              features: [
                'Custom Next.js architecture',
                'Ecommerce, catalogue or portal features',
                'CRM, ERP and third-party API integration',
                'Full redirect and migration plan',
                'Priority support and quarterly reviews',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
          ] as const}
        />

        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline={'Rated 4.9/5 on Google across 500+ projects.'}
        />

        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline={'Detroit Web Design Questions, Answered Straight'}
          lead="The questions people actually type before hiring someone, answered the way we would on a call, including the ones where the honest answer does not sell a bigger project."
          categories={FAQ_CATEGORIES}
          items={DETROIT_FAQ_ITEMS}
        />

        {/* Cross-link: related FactoryJet services */}
        <section className="bg-fj-cream py-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 font-fj-mono text-sm uppercase tracking-widest text-[#B23E13]">
              Also useful in Detroit
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services/web-design/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                Web Design Services →
              </Link>
              <Link
                href="/services/ai-seo/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                AI SEO →
              </Link>
              <Link
                href="/services/ecommerce-development/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                Ecommerce Development →
              </Link>
            </div>
          </div>
        </section>

        <WebDesignCityLinksUS currentCity="detroit" />

        <FinalCTA
          variant="dark"
          eyebrow={'READY TO START'}
          headline={'Ready to Hire a Web Design Company in Detroit?'}
          sub={
            'Tell us what you sell and who you sell it to. You get a page list, a delivery date and a fixed scope back after one call, with no discovery fee. Every file is yours at handover.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Detroit" variant="dark" />}
        />

        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

function SchemaScript() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${PAGE_URL}/`,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]', '[data-faq-answer]'],
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${PAGE_URL}#checklist`,
    name: '10 questions to ask a Detroit web design company before you sign',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: HIRING_CHECKLIST.length,
    itemListElement: HIRING_CHECKLIST.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.title,
      description: item.body,
    })),
  };

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${PAGE_URL}#business`,
        name: 'FactoryJet Technologies',
        url: 'https://factoryjet.com',
        telephone: '+919699977699',
        founder: { '@type': 'Person', name: 'Bhavesh Barot' },
        areaServed: [
          { '@type': 'City', name: 'Detroit' },
          { '@type': 'City', name: 'Royal Oak' },
          { '@type': 'City', name: 'Troy' },
          { '@type': 'City', name: 'Dearborn' },
          { '@type': 'City', name: 'Southfield' },
          { '@type': 'City', name: 'Ann Arbor' },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Web Design Detroit',
        serviceType: 'Web design and development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Detroit', addressRegion: 'MI' },
        description: PAGE_DESCRIPTION,
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: DETROIT_FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          { '@type': 'ListItem', position: 2, name: 'Detroit', item: 'https://factoryjet.com/detroit' },
          { '@type': 'ListItem', position: 3, name: 'Web Design', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
