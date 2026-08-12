import type { Metadata } from 'next';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import Heading from '@/components/v2/Heading';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import ComparisonTable from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import Link from 'next/link';

const PAGE_URL = 'https://factoryjet.com/chicago/web-design';
const PAGE_TITLE = 'Web Design Company Chicago | Next.js Sites You Own | FactoryJet';
const PAGE_DESC =
  'A Chicago web design company that builds in Next.js, hands over the code and design files, and structures every page for search and AI answers. Includes an honest comparison with the other Chicago agencies on this search.';
const DATE_MODIFIED = '2026-08-12';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${PAGE_URL}/`,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet web design for Chicago businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ['https://factoryjet.com/og-default.png'],
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   FAQ: the single source of truth.
   The visible <FAQ /> below and the FAQPage JSON-LD are both generated from
   this array. Never write a second copy of these questions anywhere.
   Questions are taken from live Google People-Also-Ask results for this
   query set; the answers are localised to Chicago honestly.
   ───────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Budget' },
  { key: 'timeline', label: 'Timeline & Process' },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'chicago', label: 'Chicago Specifics' },
  { key: 'ai', label: 'AI and the Future' },
  { key: 'technical', label: 'Technical & Ownership' },
];

const CHICAGO_FAQ_ITEMS = [
  {
    question: 'How much should I pay a web designer?',
    answer:
      "Three things move the number and almost nothing else does: how many pages, how much of the design is custom versus reused, and how many other systems the site has to talk to. A five page site for a studio in Andersonville and a fifty page site for a Loop law firm are different jobs. We scope yours, agree a fixed number, and it only changes if you add scope.",
    category: 'cost',
  },
  {
    question: 'How much should a small business pay for a website?',
    answer:
      "Enough that it is built once properly, not so much that it has to pay for an account team you never meet. The honest test is payback: if a new customer is worth a lot to you, a site that wins one extra job a month has done its work. Tell us your average job value on the first call and we will tell you if the build makes sense.",
    category: 'cost',
  },
  {
    question: 'What is a good hourly rate for website design?',
    answer:
      "Hourly is the wrong unit for most website projects. It rewards slow work and it hides the total from you until the invoice arrives. Ask for a fixed scope with a fixed number and a written list of what is included. If someone will only quote hourly, ask them for a not-to-exceed cap in writing before you sign anything.",
    category: 'cost',
  },
  {
    question: 'Is it worth making a website for a small business in Chicago?',
    answer:
      "Yes, and more so here than in a small town, because Chicago buyers compare. Someone looking for a contractor in Logan Square or a dentist in Hyde Park will open four tabs before they call anyone. A social profile alone cannot carry the comparison: it cannot show your service area, your licenses, your past work and your hours in one scannable place.",
    category: 'cost',
  },
  {
    question: 'How fast can you build a website?',
    answer:
      "A focused five page site can ship in about a week once your content and brand assets are in the shared folder. Ten to fifteen pages with a blog and lead capture is normally two to three weeks. Anything with a store, a booking system or a custom integration gets scoped on its own. The clock starts when we have your content, not when you sign.",
    category: 'timeline',
  },
  {
    question: 'Can I make a website in 3 days?',
    answer:
      "You can put something live in three days. Whether it is worth having is a different question. Three days is enough for a single clear page with one offer, real photos and a working form, which beats an empty five page site every time. What three days is not enough for is research, custom design and a content structure that ranks.",
    category: 'timeline',
  },
  {
    question: 'How long until my new Chicago site shows up in Google?',
    answer:
      "Your own business name usually shows up within one to two weeks. Competitive local phrases like web design company Chicago take far longer, because the first page is held by directories and agencies with twenty years of links. Neighborhood and niche phrases move much faster. We aim at those first and tell you honestly which ones are realistic.",
    category: 'timeline',
  },
  {
    question: 'What happens after the site launches?',
    answer:
      "You get a recorded handover walkthrough, the repository, the design files and a support window for fixes and questions. After that you can keep us on for updates and monitoring, move to another developer, or run it yourself. Nothing in the build makes you dependent on us, which is the point.",
    category: 'timeline',
  },
  {
    question: 'What does a web design company do?',
    answer:
      "It plans what the site needs to say, designs the pages, builds them, writes or edits the content, sets up search and analytics, and launches. A good one also decides what to leave out. The part people underrate is structure: which pages exist, what each one is for, and how someone gets from a search result to a phone call.",
    category: 'choosing',
  },
  {
    question: 'How do I choose a web design company in Chicago?',
    answer:
      "Ask who does the actual work, ask what you own at the end, and open two of their recent sites on your phone on cellular data. Then ask for a client in a business like yours and call them. Proximity matters less than it used to, but if you want someone in the room, hire a studio with a Chicago office and say so up front.",
    category: 'choosing',
  },
  {
    question: 'What are common website red flags?',
    answer:
      "Monthly payments with no ownership at the end. A quote with no page list. A portfolio full of sites that are no longer live. Refusal to give you the domain or hosting logins. Stock photos of people who are clearly not your team. And a proposal that talks about design awards but never mentions what the site is supposed to make happen.",
    category: 'choosing',
  },
  {
    question: 'What are the top 10 web design agencies in the USA?',
    answer:
      "There is no authoritative list. The pages that rank for that question are directories and paid placements, so the ranking mostly reflects who bought or claimed a listing. Treat those lists as a starting shortlist, not a verdict. A better filter is to search the exact service and city you need, then look at the sites of the companies you find.",
    category: 'choosing',
  },
  {
    question: 'Is it better to build your own website or use a website builder?',
    answer:
      "If you are testing an idea and money is tight, a builder is a reasonable start and nobody should talk you out of it. Move off it when one of three things happens: page speed starts costing you, you need something the platform cannot do, or you are paying more each year in subscriptions than a build would have been.",
    category: 'choosing',
  },
  {
    question: 'Do you have an office in Chicago?',
    answer:
      "No, and we would rather say that up front. FactoryJet is a distributed team, so we work with Chicago clients over video, shared documents and a project channel. That suits people who want work moving daily. It does not suit someone who wants a team in their River North conference room every Tuesday. If that is you, hire a local studio.",
    category: 'chicago',
  },
  {
    question: 'Do you work with businesses outside the Loop and River North?',
    answer:
      "Most of the interesting work is outside them. Retail on Clark Street in Andersonville, restaurants on Randolph, trades in Portage Park, manufacturers along the Kinzie and Calumet corridors, clinics near the Illinois Medical District, and the retail strips on 18th Street and 26th Street. Neighborhood businesses usually have less competition for their exact search terms, which makes them easier to win.",
    category: 'chicago',
  },
  {
    question: 'We sell to the City of Chicago, CPS or the CTA. Does our website need to be accessible?',
    answer:
      "Take it seriously. The Department of Justice web rule says state and local government web content usually needs to meet WCAG 2.1 Level AA, and the rule reaches content run by private companies on a public body's behalf. Accessibility questions now turn up in procurement paperwork. We build to WCAG 2.1 AA as standard because retrofitting it later is the expensive route.",
    category: 'chicago',
  },
  {
    question: 'Our year is built around a McCormick Place trade show. Can you work to that date?',
    answer:
      "Yes, and we would plan backwards from it. If you exhibit at the Auto Show in February, the restaurant show in May or IMTS, the site needs to be live and indexed weeks before, not the night before your booth opens. Tell us the date on the first call and we will set the content deadlines that make it.",
    category: 'chicago',
  },
  {
    question: 'Can you build the site in Spanish as well as English?',
    answer:
      "Yes. In parts of Chicago it is not optional: a business on 26th Street or 18th Street that only publishes in English is choosing to be harder to buy from. We build proper separate pages per language with the right hreflang tags, not a browser translate widget, because machine translation of your service pages reads badly and does not rank.",
    category: 'chicago',
  },
  {
    question: 'Winter kills our traffic. When should we launch?',
    answer:
      "Launch before your season, not during it. Chicago demand is genuinely seasonal: patio and event traffic climbs in spring, home services spike after the first hard freeze and after storms, retail loads into the holidays. A site launched two months ahead has time to be crawled, fixed and tuned. A site launched mid-season is a live experiment on your best leads.",
    category: 'chicago',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      "It has replaced parts of the job, not the job. Layout drafts, alternate copy and image cleanup are much faster than they were two years ago. What has not changed is deciding what the business should say, what to cut, and which page earns the call. AI is very good at producing plausible pages and still cannot tell you if a page is true.",
    category: 'ai',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      "It can write the code for one, and for a simple page that is genuinely useful. What it will not do on its own is choose your positioning, check the claims, wire up a domain, set analytics, test the form, or notice that your busiest page loads slowly on a phone. Treat it as a very fast junior, not a supplier.",
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026?',
    answer:
      "Yes, but the demand moved. Fewer people are paying for a brochure site that a template could produce. More are paying to fix speed, structure, accessibility and how they appear inside AI answers, which now sit above the normal results for a lot of queries. The work is less decoration and more plumbing than it was.",
    category: 'ai',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      "It is folklore. Two real numbers are worth knowing instead. Google treats a Largest Contentful Paint of 2.5 seconds or less as good. And Nielsen Norman Group found visitors often leave a page in ten to twenty seconds, so you have roughly ten seconds to make your value clear. Load fast, then say something worth staying for.",
    category: 'technical',
  },
  {
    question: 'What should a business website include?',
    answer:
      "What you do, who it is for, proof it worked, what it takes to start, and an easy way to get in touch, in that order and above the fold where possible. For a local business add your service area, real photos, hours, and a phone number that is tappable. Everything else is optional and most of it is padding.",
    category: 'technical',
  },
  {
    question: 'Who owns the code and the design files when the project is done?',
    answer:
      "You do. You get the repository, the design files, the domain and the hosting account in your own name. There is no license fee and no clause that ties the site to us. If you ever want to move it to another developer, you send them a link and they take it from there.",
    category: 'technical',
  },
];

/* ── Verified external sources, all fetched and checked on 2026-08-12 ────── */
const SOURCE_NNG = 'https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/';
const SOURCE_LCP = 'https://web.dev/articles/lcp';
const SOURCE_ADA = 'https://www.ada.gov/resources/2024-03-08-web-rule/';

const HIRING_CHECKLIST = [
  {
    q: 'Who is actually going to build this?',
    a: 'Ask for the names of the people doing the design and the code, not the agency headcount. If the answer is vague, the work is being passed on and you will feel it in the revisions.',
  },
  {
    q: 'What do I own on the last day?',
    a: 'You want the repository, the design files, the domain and the hosting account, all in your name. If any of those stay with the agency, you are renting your own website.',
  },
  {
    q: 'Can I see two live sites you built in the last year?',
    a: 'Live, not a portfolio screenshot. Open them on your phone on cellular, off Wi-Fi. If they feel slow to you, they feel slow to your customers.',
  },
  {
    q: 'What is the page list, in writing?',
    a: 'A quote with no page list is not a quote. Scope arguments in month two almost always trace back to a proposal that said "a website" and nothing more specific.',
  },
  {
    q: 'Who writes the words?',
    a: 'Most delays are content delays. Decide on day one whether you are writing it, they are writing it, or you are being interviewed and they are drafting from that.',
  },
  {
    q: 'What happens to my current search rankings?',
    a: 'If your old site had any traffic, ask about redirects. A rebuild that drops the old URLs without mapping them is the fastest way to lose rankings you already paid for.',
  },
  {
    q: 'How will I know if it is working?',
    a: 'Ask what gets measured and who looks at it. Calls, form fills and quote requests are the numbers that matter. Time on page is not a business result.',
  },
  {
    q: 'Will it meet WCAG 2.1 AA?',
    a: 'It matters more in Chicago than most cities because so many local firms sell to public bodies. If accessibility only appears as a line item at the end, it was not designed in.',
  },
  {
    q: 'What does it cost to change something after launch?',
    a: 'Ask specifically: adding a page, swapping a photo, changing a phone number. If simple edits need a developer, budget for that or ask for a CMS.',
  },
  {
    q: 'Are you local, and does that actually matter to me?',
    a: 'Be honest with yourself. Some jobs genuinely need someone in the room. Many do not. Decide which you are before you shortlist, because it changes the answer.',
  },
];

export default function ChicagoWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_chicago_web_design_hero" />}
          eyebrow={'WEB DESIGN · CHICAGO'}
          headline={'A Chicago Web Design Company That Earns the First Ten Seconds'}
          lead={
            'Visitors decide whether to stay on a page in about ten seconds. We build Next.js websites for Chicago businesses that load fast, say the right thing first, and arrive with the code, the design files and the analytics already in your hands.'
          }
          trustItems={['Next.js, not a page builder', 'You own the code', 'Fixed scope before we start']}
          extraCta={<WhatsAppCTA city="Chicago" variant="light" />}
          rightSlot={
            <img
              src="/images/us/chicago-web-design/hero.webp"
              alt="A three person web design team reviewing a website layout on a large monitor in a Chicago loft studio, with an elevated train passing the window behind them"
              width={1264}
              height={848}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── Answer-first block ─────────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16" aria-labelledby="answer-first">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="fj-eyebrow">THE SHORT ANSWER</p>
                <Heading as="h2" size="h3" id="answer-first" className="mt-5 text-fj-ink">
                  What a web design company in Chicago does
                </Heading>
              </div>
              <div className="lg:col-span-7">
                <p
                  data-speakable
                  className="font-fj-body text-[1.125rem] leading-[1.65] text-fj-ink"
                >
                  A web design company in Chicago plans, designs, builds and launches your website,
                  then hands over the files. The good ones also handle search structure, analytics
                  and accessibility. Pick on three things: who does the actual work, what you own at
                  the end, and whether they can show you a live site that loads fast on a phone.
                </p>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                  Everything below is the long version, including a straight comparison with the
                  other Chicago agencies that show up on this search and an honest note on where we
                  are the wrong choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline={'What Chicago businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'THE REAL BAR'}
          headline={'What Your Chicago Website Is Actually Being Judged Against'}
          leadParagraphs={[
            'Chicago is not one market and a single generic site will not serve it. A commodities or options firm in the Loop is selling to buyers who read before they ever call. A restaurant group on Randolph Street in Fulton Market lives and dies on how the menu looks on a phone at six in the evening. A metal fabricator on the Kinzie corridor needs a capabilities page and a request-for-quote form that a procurement engineer can actually use. A boutique on Clark Street in Andersonville is competing with the shop three doors down for the same walk-in search. Those four sites have almost nothing in common except the standards below.',
            'These three numbers are not Chicago numbers. They are the bar every site is measured against, and they are the reason a good-looking site can still lose. Each one links to the primary source so you can check it yourself.',
          ]}
          stats={[
            {
              value: '10 seconds',
              label: 'How long you have to make your value clear before most visitors leave',
              sourceUrl: SOURCE_NNG,
              sourceLabel: 'Nielsen Norman Group',
            },
            {
              value: '2.5 seconds',
              label: 'Largest Contentful Paint that Google classifies as good',
              sourceUrl: SOURCE_LCP,
              sourceLabel: 'web.dev',
            },
            {
              value: 'WCAG 2.1 AA',
              label: 'Accessibility level state and local government web content usually must meet',
              sourceUrl: SOURCE_ADA,
              sourceLabel: 'ADA.gov',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT WE ACTUALLY DO'}
          headline={'Web Design, Minus the Parts That Do Not Move Anything'}
          lead={
            'A website is four jobs stacked on top of each other: decide what to say, design it, build it, and make it findable. Most quotes only price the middle two. We price all four and show you the list.'
          }
          body={
            <>
              <p>
                We build in Next.js and deploy to a global edge network rather than assembling a
                page builder on shared hosting. That is a practical choice, not a fashion one. It
                gets pages to a Largest Contentful Paint under Google&apos;s 2.5 second threshold on
                a mid-range phone, and it removes the monthly plugin maintenance that quietly
                becomes someone&apos;s job at your company a year after launch.
              </p>
              <p>
                Structure is where most of the value sits and where most sites fail. Every page gets
                a real heading order, JSON-LD schema so search engines and AI answer engines can
                read what your business is and where it operates, internal links that follow how
                people actually shop, and analytics wired in from day one so you can tell which page
                produced the phone call. We build to WCAG 2.1 AA by default, which matters in a city
                where a large share of firms sell into the City of Chicago, Cook County, CPS or the
                CTA.
              </p>
              <p>
                Then we hand it over. Repository, design files, domain, hosting account, all in your
                name, plus a recorded walkthrough so whoever inherits it can find things. Founder
                Bhavesh Barot sits on the scoping call for every project, so the person setting the
                scope is the person who has to live with it.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/chicago-web-design/process.webp"
              alt="Two colleagues at a table sketching a page wireframe on paper while reviewing the same layout on a phone and monitor"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── Listicle ───────────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20" aria-labelledby="checklist-heading">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="max-w-[760px]">
              <p className="fj-eyebrow">BEFORE YOU SIGN</p>
              <Heading as="h2" size="h3" id="checklist-heading" className="mt-5 text-fj-ink">
                10 Questions to Ask Any Chicago Web Design Company
              </Heading>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                Ask us these. Ask the other six companies on this page the same ten. The answers
                sort a shortlist faster than any portfolio does.
              </p>
            </div>

            <ol className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {HIRING_CHECKLIST.map((item, i) => (
                <li key={item.q} className="border-t border-fj-neutral-200 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-fj-mono text-sm font-semibold text-[#B23E13]"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-fj-body text-[1.0625rem] font-semibold leading-snug text-fj-ink">
                      {item.q}
                    </h3>
                  </div>
                  <p className="mt-3 pl-9 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-ink/70">
                    {item.a}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Mid-page CTA ───────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="rounded-2xl border border-fj-neutral-200 bg-white px-7 py-10 md:px-12 md:py-12">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Heading as="h2" size="h4" className="text-fj-ink">
                    Want the page list and the number before you commit to anything?
                  </Heading>
                  <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                    Tell us what your business does and what the site has to achieve. You get a
                    written page list and a fixed scope back. No discovery fee, no obligation, and
                    you keep the page list even if you hire someone else.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                  <ModalCTAButton label="Get a scoped quote" region="us" btnVariant="primary-light" />
                  <Link
                    href="/portfolio/"
                    className="inline-flex items-center justify-center rounded-full border border-fj-neutral-200 bg-white px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:border-fj-neutral-400"
                  >
                    See recent work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The one dark section: honest self-disclosure ────────────────── */}
        <StrategicDarkSection
          eyebrow="STRAIGHT ANSWERS"
          headline={'Where We Fit in Chicago, and Where We Do Not'}
          lead={
            'We are the newest name on this page and we are not headquartered in Chicago. Both of those are real reasons a buyer might pick someone else, so we would rather put them at the top than bury them.\n\nWhat we are good at is a specific shape of project: a site that has to load fast, be structured properly for search and AI answers, and be handed over cleanly to a team that wants to run it themselves. What we are not is a branding studio that will spend three months on your identity, and we are not the right call if you need a design director sitting in your office on Wednesdays.\n\nIf either of those is what you actually need, the comparison table below names the Chicago firms that do it, and you should call them instead.'
          }
          pillars={[
            {
              title: 'Best fit',
              body: 'You need the site live and working, you care about speed and search, and you want to own everything at the end. Marketing leads, founders and operations managers who are tired of asking permission to change a headline.',
            },
            {
              title: 'Poor fit',
              body: 'You want a full brand identity built from scratch, in-person workshops, or a WordPress site your team will extend with plugins for years. Those are real needs. They are just not what we are set up to do well.',
            },
            {
              title: 'What we will tell you',
              body: 'If your existing site is fine and the real problem is that nobody can find it, we will say so and quote the smaller job. Rebuilding a site that already works is the most common waste of money in this industry.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'THE SHORTLIST'}
          headline={'The Chicago Web Design Companies You Will Find on This Search'}
          lead={
            'These are the companies that rank on the first page for web design company Chicago, described from their own websites rather than from our opinion of them. Four of the twelve results on this search are directories or roundups rather than agencies, which is worth knowing before you treat page one as a ranking of quality. We are on this list too, at the bottom, because we are one option among several and not the obvious default.'
          }
          columns={[
            { label: 'What they lead with' },
            { label: 'Typical build' },
            { label: 'Best fit if you' },
          ]}
          rows={[
            {
              feature: 'Flamingo Agency',
              values: [
                'Custom WordPress websites for small businesses, plus SEO and AI search work. Their own site states a two to four week turnaround and more than 150 five-star reviews.',
                'WordPress',
                'want a WordPress site a marketing person can edit, and you like seeing a large public review count',
              ],
            },
            {
              feature: 'Orbit Media Studios',
              values: [
                'A long-established Chicago web design and digital marketing agency, widely known for publishing educational content for marketers.',
                'Content-managed builds',
                'want an established Chicago firm with a long local track record and a strong content bench',
              ],
            },
            {
              feature: 'One Design Company',
              values: [
                'Research and insight turned into brand strategy, web design and development. Portfolio leans toward science, energy and design-led brands including Quaise Energy, HOLLY HUNT and Generate Biomedicines.',
                'Custom, design-led',
                'are buying brand and craft as much as a website, and the identity work matters more than the timeline',
              ],
            },
            {
              feature: '1Brand Design',
              values: [
                'Full-service Chicago web design, SEO and brand identity for small and mid-size businesses. Their site says they have been doing this since 2009 and offers a same-day consultation.',
                'Full-service',
                'want one local shop handling the site, the SEO and the branding together',
              ],
            },
            {
              feature: 'EDUCO',
              values: [
                'Branding, web and video aimed specifically at commercial builders and nonprofits with complex work and national stakes.',
                'Custom, sector-specific',
                'are a construction firm or a nonprofit that has to build credibility with funders, partners and selection committees',
              ],
            },
            {
              feature: 'Brightter',
              values: [
                'Design, build and AI work covering Webflow, WordPress, web apps, SEO and nearshore engineering. Its own site positions the company in San Francisco rather than Chicago.',
                'Webflow or WordPress',
                'want Webflow or extra engineering capacity and do not need the team to be based in Chicago',
              ],
            },
            {
              feature: 'FactoryJet (us)',
              values: [
                'Next.js builds with schema, analytics, accessibility and AI-search structure included rather than sold on later. Fixed scope agreed before work starts, full handover at the end.',
                'Next.js',
                'want speed, a codebase you own outright, and you are comfortable working with a remote team',
              ],
            },
          ]}
          footer={
            <>
              Positioning taken from each company&apos;s own website and from the Google results for
              &quot;web design company chicago&quot; on 12 August 2026. Orbit Media Studios&apos; site
              blocks automated requests, so their row is drawn from their search listing rather than a
              direct read. We have no affiliation with any of these firms and no referral arrangement
              with them. If proximity or brand depth is your priority, one of the others is genuinely
              the better call.
            </>
          }
        />

        {/* ── Neighborhoods ──────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20" aria-labelledby="neighborhoods-heading">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">NEIGHBORHOODS</p>
                <Heading as="h2" size="h3" id="neighborhoods-heading" className="mt-5 text-fj-ink">
                  Chicago Is a City of Corridors, Not One Search Market
                </Heading>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                  The phrase people type changes by corridor, and so does how hard it is to win.
                  Chasing the citywide term first is the most common mistake we see on Chicago sites.
                  Own your corridor, then widen.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    ['The Loop', 'Law, finance, insurance and the derivatives and options trading world around LaSalle Street. Long sales cycles, procurement checklists, and buyers who read the whole page before they call.'],
                    ['River North', 'Advertising, design showrooms, galleries and hospitality, plus the tech community around the Merchandise Mart. A visually literate audience that judges the site as part of the product.'],
                    ['Fulton Market and the West Loop', 'Restaurants on Randolph, food brands, life sciences and tech offices in the old meatpacking blocks. Mobile-first is not a preference here, it is the whole visit.'],
                    ['West Town, Wicker Park and Logan Square', 'Independent retail, studios, salons and breweries along Milwaukee and Damen. Neighborhood search terms and Google Business Profile do more work than the homepage.'],
                    ['Pilsen and Little Village', 'Dense retail on 18th Street and 26th Street with a large Spanish-speaking customer base. Bilingual pages are a competitive advantage that most local sites still skip.'],
                    ['Kinzie, Goose Island and the Calumet corridor', 'Manufacturing, metal fabrication, freight and logistics in the city that six of the seven Class I railroads run through. These buyers want capabilities, certifications and a request-for-quote form that works.'],
                    ['Hyde Park, Bronzeville and the South Side', 'University-adjacent services, clinics and growing retail corridors. Less competition for exact-match search terms than anywhere north of the river.'],
                  ].map(([place, detail]) => (
                    <li key={place} className="border-t border-fj-neutral-200 pt-4">
                      <h3 className="font-fj-body text-base font-semibold text-fj-ink">{place}</h3>
                      <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-ink/70">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/us/chicago-web-design/storefront.webp"
                  alt="An independent shop owner behind the counter of a bright neighborhood storefront, showing a product page on a tablet"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover"
                />
                <p className="mt-4 font-fj-body text-sm leading-[1.7] text-fj-ink/70">
                  A neighborhood business usually wins its corridor before it wins the city. That is
                  the order we build in: the pages that can rank this quarter first, the competitive
                  citywide terms after there is something to build authority on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'CHICAGO × WEB DESIGN'}
          headline={'What Changes by Industry Here'}
          lead={
            'Chicago industries are concentrated enough that the right site structure is genuinely different from sector to sector. These are the five we are asked for most often in this metro.'
          }
          sectors={[
            {
              name: 'Trading, finance and insurance',
              description:
                'The Loop and LaSalle Street sit at the center of US derivatives and options trading, and the metro carries a deep insurance and risk sector. These buyers do their reading before any call, so the site has to answer technical questions in public: how the product works, what compliance looks like, who is on the team. Gated content early in the journey costs you more meetings than it books.',
              example: 'Fintech, prop trading, brokerage, risk',
            },
            {
              name: 'Manufacturing, freight and logistics',
              description:
                'Six of the seven Class I railroads meet in Chicago, and the industrial corridors along Kinzie and Calumet plus the suburban belt are full of fabricators, machine shops and third-party logistics firms. What converts here is a capabilities page, tolerances and certifications in plain text where search engines can read them, and a request-for-quote form that a procurement engineer can complete in one pass.',
              example: 'Fabrication, contract manufacturing, freight, 3PL',
            },
            {
              name: 'Food, restaurants and hospitality',
              description:
                'From the Randolph Street restaurant row to the food manufacturers spread across the metro, this sector lives on the phone screen. Menus need to be real text rather than a PDF, reservations need to be one tap, and location pages need hours that are actually current. Speed matters more here than anywhere: the visit is often thirty seconds long and happens while someone is walking.',
              example: 'Restaurants, caterers, hotels, venues',
            },
            {
              name: 'Healthcare and life sciences',
              description:
                'The Illinois Medical District on the Near West Side, the major hospital systems and the lab space in Fulton Market give Chicago a large clinical and life sciences base. Sites here need careful form handling for anything patient-facing, clear service navigation, accurate provider and location pages, and accessibility built in rather than bolted on.',
              example: 'Clinics, dental, lab suppliers, health tech',
            },
            {
              name: 'Construction, trades and home services',
              description:
                'A union-dense construction market plus a housing stock old enough to keep every roofer, HVAC contractor and restoration firm busy. These businesses win on service-area pages, real project photography, licensing and insurance stated plainly, and a phone number that is tappable on every screen. Demand spikes after the first hard freeze and after storms, so the site has to be ready before the season.',
              example: 'General contracting, roofing, HVAC, restoration',
            },
          ]}
        />

        <ServiceJourneyRow
          eyebrow={'HOW IT RUNS'}
          headline={'How a Chicago Project Actually Goes'}
          stages={[
            {
              number: '01',
              title: 'Scope call',
              description:
                'We agree what the site has to achieve, which pages exist, and what is out of scope. You leave with a written page list. Bhavesh Barot is on this call, so the scope is set by someone who has to deliver it.',
            },
            {
              number: '02',
              title: 'Content first',
              description:
                'We collect or write the words before we design anything, because designing around placeholder text is how projects slip. If content is your bottleneck, we interview you and draft from the transcript.',
            },
            {
              number: '03',
              title: 'Design',
              description:
                'Mobile layouts before desktop, since that is where most Chicago traffic lands. Two structured review rounds with comments on the file itself rather than a chain of emails.',
            },
            {
              number: '04',
              title: 'Build and structure',
              description:
                'Next.js build with performance budgets enforced from the first commit, JSON-LD schema, WCAG 2.1 AA checks, redirects mapped from your old URLs, and analytics wired before launch rather than after.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'We deploy, verify the forms actually deliver, submit the sitemap, and record a walkthrough. Repository, design files, domain and hosting all end up in your name.',
            },
          ]}
          closingNote="If your existing site is healthy and the real problem is visibility, we will say so and quote the smaller piece of work instead."
        />

        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline={'Questions Chicago Businesses Actually Ask'}
          lead="Taken from what people search alongside this query, answered without the sales voice."
          categories={FAQ_CATEGORIES}
          items={CHICAGO_FAQ_ITEMS}
        />

        {/* ── Cross-links ────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 font-fj-mono text-sm uppercase tracking-widest text-[#B23E13]">
              Related services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services/web-design/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                US web design services
              </Link>
              <Link
                href="/services/ai-seo/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                AI SEO
              </Link>
              <Link
                href="/website-cost/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                What a website should cost
              </Link>
            </div>
          </div>
        </section>

        <WebDesignCityLinksUS currentCity="chicago" />

        <FinalCTA
          variant="light"
          eyebrow={'NEXT STEP'}
          headline={'Get a Written Page List for Your Chicago Site'}
          sub={
            'Tell us what your business does, who buys from you and what the site has to achieve. You get back a page list and a fixed scope you can hold us to, or hand to any of the other companies on this page. No discovery fee either way.'
          }
          primaryCta={{ label: 'Start a project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Chicago" variant="light" />}
          objectionHandler="Not ready to talk? Read the ten questions above and ask them of whoever you do hire."
        />

        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Schema. Every const declared here is rendered into a script tag below.
   FAQPage.mainEntity is derived from CHICAGO_FAQ_ITEMS, the same array the
   visible <FAQ /> renders. There is no second copy of the questions.
   ───────────────────────────────────────────────────────────────────────── */
function SchemaScript() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${PAGE_URL}/`,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]', '[data-faq-answer]'],
    },
    citation: [SOURCE_NNG, SOURCE_LCP, SOURCE_ADA],
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
        areaServed: {
          '@type': 'City',
          name: 'Chicago',
          containedInPlace: { '@type': 'State', name: 'Illinois' },
        },
        founder: { '@id': 'https://factoryjet.com/#bhavesh-barot' },
      },
      {
        '@type': 'Person',
        '@id': 'https://factoryjet.com/#bhavesh-barot',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder',
        worksFor: { '@type': 'Organization', name: 'FactoryJet Technologies' },
        url: 'https://factoryjet.com/about',
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'Web Design Chicago',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Chicago' },
        description:
          'Next.js website design and development for Chicago businesses, including schema markup, analytics, WCAG 2.1 AA accessibility and full handover of code and design files.',
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: CHICAGO_FAQ_ITEMS.map((item) => ({
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
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Web Design',
            item: 'https://factoryjet.com/services/web-design',
          },
          { '@type': 'ListItem', position: 3, name: 'Chicago', item: PAGE_URL },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
