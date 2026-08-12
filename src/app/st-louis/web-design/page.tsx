import type { Metadata } from 'next';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ComparisonTable from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import Link from 'next/link';

const TITLE = 'Web Design Company St. Louis | 7-Day Builds, You Own the Code | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company for St. Louis businesses on both sides of the state line. Starter sites ship in 7 days, built in Next.js with schema, GA4 and local SEO. You own the code and the design files.';
const URL = 'https://factoryjet.com/st-louis/web-design';
const DATE_MODIFIED = '2026-08-12';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: {
      'en-US': URL,
      'x-default': URL,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: `${URL}/`,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet web design for St. Louis, Missouri businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
};

/* ===========================================================================
   FAQ data. The visible <FAQ /> block and the FAQPage JSON-LD both read from
   FAQ_ITEMS. Do not duplicate this array anywhere else in this file.
   =========================================================================== */

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost & Timeline' },
  { key: 'included', label: 'What You Get' },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'ai', label: 'AI & Web Design' },
  { key: 'local', label: 'St. Louis & the Metro' },
  { key: 'support', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a web design company in St. Louis charge?',
    answer:
      'Three things move the number: how many pages you need, how many systems the site talks to, and how custom the design is. A five-page site for one location sits at the bottom. A store with a catalogue, booking and payments sits at the top. We quote one fixed figure after a single call.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in St. Louis pay for a website?',
    answer:
      'Pay for the outcome, not the page count. A site that brings in a handful of qualified enquiries a month pays for itself quickly. St. Louis owners are careful with money, which is fair, but the expensive mistake is paying twice: once for a cheap site that never ranks, then again for the rebuild.',
    category: 'cost',
  },
  {
    question: 'What is a good hourly rate for website design?',
    answer:
      'Hourly is the wrong unit for most small-business projects. It rewards slow work and leaves you carrying the risk when an estimate slips. Ask for a fixed fee against a written scope, with a named change process for anything outside it. Hourly suits ongoing tweaks, not a build.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our Starter build ships in 7 days. Growth projects, 10 to 15 pages with a blog CMS and lead capture, usually take 2 to 3 weeks. Scale builds get scoped one at a time. The clock starts when your logo, photos and copy notes land, because waiting on content delays most projects.',
    category: 'cost',
  },
  {
    question: 'Can I really get a website in 3 days?',
    answer:
      'You can get pages live in 3 days. Whether they are worth having is another question. A three-day site is a template with your logo in it: no real information architecture, no schema, no copy written for how your buyers search. Days four to seven are where that work happens.',
    category: 'cost',
  },
  {
    question: 'What does a web design company actually do?',
    answer:
      'It plans the site structure, designs the pages, shapes the copy, builds the front end, connects forms and third-party tools, then launches it. A good one also sets up analytics, adds structured data so search engines and AI assistants can read the page, and tunes speed.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'A clear statement of what you do and who for, a page per service, proof you have done it before, a contact method that works on a phone, your service area, and a quote path. In this metro, say plainly whether you cross the river. The rest is optional until those are solid.',
    category: 'included',
  },
  {
    question: 'What are the 5 elements to a good website design?',
    answer:
      'Structure, so pages sit in a logical hierarchy. Typography, so long copy is readable on a phone. Contrast, so text passes accessibility checks. Rhythm, so spacing groups related things. And restraint, so one accent colour carries the calls to action. Get those right and the site works before any photos.',
    category: 'included',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'A teaching checklist: context, content, community, customisation, communication, connection, and commerce. It comes out of e-commerce interface research and works as a review pass, not a build plan. Run a finished site past it and the gap is almost always content or connection: thin pages and weak internal links.',
    category: 'included',
  },
  {
    question: 'What are common red flags when hiring a web design company?',
    answer:
      'No written scope. A quote that only arrives after a paid discovery phase. Refusing to name the platform. Hosting you cannot move away from. No mention of analytics or search setup. Dead portfolio links. Any one of those deserves a direct question before you sign.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build your own website or use a website builder?',
    answer:
      'Build it yourself if you are testing an idea, your budget is near zero, and time is what you have most of. Hire someone once the site has a job to do. The tipping point is the moment you would rather be doing your actual work than fighting a page builder.',
    category: 'choosing',
  },
  {
    question: 'Is it worth making a website for a small business?',
    answer:
      'Yes, and for a reason that changed recently. A social profile or directory listing puts you on rented land. A site you own is what search engines index and what AI assistants quote when someone asks for a recommendation. If you are not on a page a machine can read, you are not in the answer.',
    category: 'choosing',
  },
  {
    question: 'Who are the top web design companies in St. Louis?',
    answer:
      'There is no official list, and any page claiming one is a directory or a roundup written by an agency. On 12 August 2026 page one of Google included New Adventure Web, IQComputing, Atomicdust, 314media, Never Gravity, Hexxen, VIVIDSITES and Be Aligned, plus Clutch and DesignRush.',
    category: 'choosing',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code, and for a simple single-page site that is often enough. What it will not do is decide your page structure, handle hosting and domains, wire up forms and analytics, test on real devices, or take responsibility when something breaks. Generating code was never the expensive part.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It is replacing the production work, not the decisions. Layout drafts, boilerplate code and first-pass copy are far faster than two years ago. What has not changed is knowing what a Cortex biotech startup should say versus a Chesterfield HVAC company. We use AI in our own build, which is how 7 days works.',
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the demand moved. Fewer people pay for a brochure site that just exists. More pay for sites that have to perform: rank locally, get quoted by AI search, convert paid traffic, or replace a slow legacy build. Most of what we see here is replatforming and rescue work.',
    category: 'ai',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'It is the rough window before a visitor decides whether to stay. In that time they should see what you do, who you do it for, and how to start. A useful test: show your homepage to someone for three seconds, cover it, and ask what the business does.',
    category: 'technical',
  },
  {
    question: 'How long until my new St. Louis website ranks on Google?',
    answer:
      'Searches for your own business name usually land within one to two weeks of launch. Competitive local terms take three to six months on a new domain, longer in crowded categories such as legal, dental and home services. Schema, internal linking, depth and speed shorten that window.',
    category: 'technical',
  },
  {
    question: 'Do you work with businesses on the Illinois side of the metro?',
    answer:
      'Yes, and it is worth setting up properly. Greater St. Louis, Inc. defines the region as 15 counties across both states, so a business in Edwardsville or Belleville competes in a different local pack from one in Clayton. We set the service area, listings and location pages to match where you take work.',
    category: 'local',
  },
  {
    question: 'Which parts of St. Louis do you work with?',
    answer:
      'All of them, and it matters less than people expect. We have built for businesses trading Downtown, in the Central West End and Cortex, Clayton, Soulard, the Delmar Loop, Chesterfield, St. Charles and across the Metro East. What changes between them is search intent and competition, not the build itself.',
    category: 'local',
  },
  {
    question: 'Do I need an LLC to run a website in Missouri?',
    answer:
      'No. Plenty of sole proprietors publish and run sites under their own name. Whether you form an LLC is a liability and tax decision rather than a web one, and a Missouri attorney or CPA is the right person to ask. The site, domain and hosting can move into a company later.',
    category: 'local',
  },
  {
    question: 'Do you have an office in St. Louis?',
    answer:
      'No, and we would rather say so here than let you find out on the kickoff call. FactoryJet is a remote team: scheduled video calls, a shared workspace and a recorded handover. If sitting across a table in Clayton matters, one of the local studios named on this page is better.',
    category: 'local',
  },
  {
    question: 'Who owns the code and design files when the project is done?',
    answer:
      'You do, completely. You get the Next.js codebase in your own repository and the full design file. There is no licence fee, no proprietary page builder, and no clause tying the site to us. If you move to another developer next year, nothing about the handover makes that hard.',
    category: 'support',
  },
  {
    question: 'Do you handle maintenance after the site launches?',
    answer:
      'The first 30 days cover bug fixes and training questions at no extra charge. After that an optional monthly plan covers content updates, dependency upgrades and monitoring. It is optional on purpose: a static Next.js build does not rot the way an unmaintained WordPress install does.',
    category: 'support',
  },
];

export default function StLouisWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_st_louis_web_design_hero" />}
          eyebrow={'WEB DESIGN · ST. LOUIS, MO'}
          headline={'A Web Design Company St. Louis Businesses Can Scope in a Single Call'}
          lead={
            'Fixed scope, one number, and a Starter site live in 7 days. Schema markup, analytics and local search are wired in before launch, set up for both sides of the state line. You keep the code and the design files.'
          }
          trustItems={['Fixed-price quote after one call', '7-day Starter delivery', 'You own the codebase']}
          extraCta={<WhatsAppCTA city="St. Louis" variant="light" />}
          rightSlot={
            <img
              src="/images/us/st-louis-web-design/hero-st-louis-studio.webp"
              alt="Three colleagues reviewing a product page layout on a wall-mounted screen in a bright brick-walled office."
              width={1264}
              height={848}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover shadow-[0_24px_64px_-12px_rgba(15,15,18,0.22)]"
            />
          }
        />

        {/* Answer-first block: the highest-value extractable block on the page */}
        <section className="border-y border-[#F05A28]/20 bg-white py-10 md:py-12">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              The short answer
            </p>
            <h2 className="font-fj-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-semibold leading-[1.25] tracking-[-0.015em] text-fj-ink">
              What does a web design company in St. Louis actually do?
            </h2>
            <p
              data-speakable
              className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80"
            >
              A St. Louis web design company plans your site structure, designs and builds the pages,
              connects your forms and analytics, then launches it. The good ones also ship schema
              markup and speed work so you appear in local search and in AI answers, and they set your
              service area up for a metro that crosses into Illinois. FactoryJet builds fixed-scope
              sites in Next.js, and you own the code.
            </p>
            <p className="mt-5 border-t border-fj-neutral-200 pt-4 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
              Written by <strong className="font-semibold text-fj-ink">Bhavesh Barot</strong>,
              founder of FactoryJet. He has run more than 500 website and commerce builds for small
              and mid-sized businesses across the US, UK, UAE and India. Last reviewed 12 August
              2026.
            </p>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline={'What St. Louis businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'ST. LOUIS MARKET'}
          headline={'St. Louis Is Two States and One Search Market. Almost Nobody Builds For That'}
          leadParagraphs={[
            'Greater St. Louis, Inc. defines this region as 15 counties across two states: eight in Illinois and seven jurisdictions in Missouri, including the City of St. Louis, which sits separately from St. Louis County. That one fact quietly decides a lot about your website. Google treats Edwardsville and Belleville as a different competitive set from Clayton and Kirkwood. If your site says St. Louis and never names the places you take work from, you are invisible in half the metro you serve.',
            'The proof is in the results right now. On 12 August 2026 the page ranking first for "web design company st louis" belonged to New Adventure Web, a firm based in Waterloo, Illinois. A business on the Illinois side outranking city-centre studios for the city-centre term is what happens when a site is built around a real service area instead of a city name.',
            'The second thing that shapes this market is the buyer. St. Louis has a deserved reputation for being price-conscious and relationship-driven, and both are rational. People ask what the thing costs to run, not just to build, and they ask who they will be talking to in month three. A site that dodges those two questions loses to one that answers them plainly.',
          ]}
          stats={[
            {
              value: '15',
              label: 'Counties across Missouri and Illinois in the Greater St. Louis region',
              sourceUrl: 'https://greaterstlinc.com/about/',
              sourceLabel: 'Greater St. Louis, Inc., About',
            },
            {
              value: '200',
              label: 'Acres of the central corridor redeveloped as the Cortex Innovation District',
              sourceUrl: 'https://www.cortexstl.org/about/',
              sourceLabel: 'Cortex Innovation District, About',
            },
            {
              value: '11',
              label: 'Startup companies launched out of the Danforth Plant Science Center',
              sourceUrl: 'https://www.danforthcenter.org/about/',
              sourceLabel: 'Donald Danforth Plant Science Center, About Us',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE ACTUALLY BUYING'}
          headline={'A Website Is a Sales Asset, Not a Design Deliverable'}
          lead={
            'Most quotes you will get here cover the design and the build. Ours covers those plus the three things that decide whether the site earns anything: structure, speed, and being readable by the machines that now answer your customers’ questions.'
          }
          body={
            <>
              <p>
                Structure means each service gets a real page instead of an accordion on the
                homepage, and those pages link to each other in a way that tells search engines what
                you do. Most rebuilds we take on here fail at exactly that point: the site looks fine
                and ranks for nothing, because there is one page of substance on it.
              </p>
              <p>
                Speed is not a vanity number. It is the difference between someone on a phone in a
                parking garage off Market Street waiting for your page and going back to the results.
                We build static Next.js pages served from Cloudflare&apos;s edge network, so no
                database query sits between the click and the content.
              </p>
              <p>
                Machine readability is the newest part of the job and the one almost nobody quotes
                for. We ship JSON-LD schema on every page, keep the answer to each page&apos;s main
                question in plain text near the top, and check that GPTBot, ClaudeBot and
                PerplexityBot can crawl the site.
              </p>
              <p>
                One more thing, because St. Louis buyers ask it earlier than buyers anywhere else we
                work: what does the site cost to keep running. A static build has no plugin licences,
                no page-builder subscription and no database to patch. Ask every firm on your list
                for their version of that answer. The{' '}
                <Link href="/services/web-design/" className="font-medium text-[#B23E13] underline underline-offset-4">
                  full web design service scope
                </Link>{' '}
                has the detail.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/st-louis-web-design/process-review-desk.webp"
              alt="Two people reviewing a laptop showing a website homepage layout, with printed page designs on the desk and a moodboard behind them."
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* Listicle: AI extraction magnet */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              Before you sign anything
            </p>
            <h2 className="max-w-[22ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
              8 Questions to Ask Any St. Louis Web Design Company Before You Sign
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
              Run every shortlisted firm through this, including us. Any of them should answer all
              eight inside one call.
            </p>

            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'What platform do you build on, and why that one?',
                  d: 'WordPress, Webflow, Shopify and Next.js are all defensible answers. "We handle that" is not. The platform decides your maintenance load, your hosting bill and how easily you can leave.',
                },
                {
                  n: '02',
                  t: 'What will this site cost me to run in year two?',
                  d: 'Hosting, plugin renewals, page-builder subscriptions, security patching, and whoever pushes the updates. Ask for the total, not the build fee. St. Louis owners ask this best and agencies answer it worst.',
                },
                {
                  n: '03',
                  t: 'Can I load one of your live client sites on my own phone?',
                  d: 'Not the case study page. The real site, on cellular, somewhere with bad signal like a parking garage downtown. If text takes more than a couple of seconds to appear, that is what your site will do.',
                },
                {
                  n: '04',
                  t: 'Will I get the scope in writing before the deposit?',
                  d: 'Page count, revision rounds, who writes the copy, who sources photography, and what counts as out of scope. Most disputes we hear about trace back to copy nobody agreed to write.',
                },
                {
                  n: '05',
                  t: 'How will you set up my service area across the state line?',
                  d: 'A firm serving Missouri and Illinois needs location pages and listings that reflect it. If the answer is "we will put St. Louis in the title tag", you will not show up in the Metro East local pack.',
                },
                {
                  n: '06',
                  t: 'On the last day, what exactly do I receive?',
                  d: 'The answer should include a repository and a design file, not a login to something you rent forever. Ask what happens to the site if you stop paying them next year.',
                },
                {
                  n: '07',
                  t: 'Is search work included in the build or sold separately?',
                  d: 'Schema markup, meta structure, internal linking and Search Console setup belong in the build. If they show up as a separate monthly line, you are paying twice for one job.',
                },
                {
                  n: '08',
                  t: 'How does this site handle AI search?',
                  d: 'Assistants now answer a growing share of "who should I hire in St. Louis" questions. Ask whether their builds are crawlable by GPTBot, ClaudeBot and PerplexityBot, and whether they ship structured data.',
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6"
                >
                  <span className="font-fj-mono text-sm font-semibold text-[#B23E13]">{item.n}</span>
                  <h3 className="mt-2 font-fj-display text-[1.1875rem] font-semibold leading-[1.3] text-fj-ink">
                    {item.t}
                  </h3>
                  <p className="mt-2 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/75">
                    {item.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ServiceJourneyRow
          eyebrow={'HOW IT RUNS'}
          headline={'The 7-Day Starter Build, Step by Step'}
          stages={[
            {
              number: '01',
              title: 'Discovery',
              description:
                'One 30-minute call. We agree who the site is for, which services get their own page, and which counties you take work from. You leave with a sitemap and a fixed quote.',
            },
            {
              number: '02',
              title: 'Design',
              description:
                'Wireframes first, then a full design system in Figma with mobile layouts. Two revision rounds on Starter, three on Growth. Nothing gets built until you sign off the design.',
            },
            {
              number: '03',
              title: 'Build',
              description:
                'Static Next.js, forms wired to your inbox and CRM, CMS connected if your tier includes one. Performance budgets are enforced from the first commit, not patched at the end.',
            },
            {
              number: '04',
              title: 'Content and search',
              description:
                'Copy, compressed WebP images, meta structure, JSON-LD schema, internal links, and a Google Business Profile check for every location you serve, both sides of the river.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, DNS and SSL, GA4 connected, then a recorded walkthrough of the CMS. 30 days of support follows for fixes and training.',
            },
          ]}
        />

        {/* Mid-page CTA */}
        <section className="border-y border-[#F05A28]/20 bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Start here
              </p>
              <h2 className="max-w-[20ch] font-fj-display text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fj-ink">
                Get a fixed quote for your St. Louis project
              </h2>
              <p className="mt-3 max-w-[52ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
                One call, one number, and a sitemap you can take elsewhere if we are not the right
                fit. No discovery fee.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroInlineForm region="us" source="us_st_louis_web_design_mid" />
            </div>
          </div>
        </section>

        {/* St. Louis districts: the part a template cannot copy */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Where our St. Louis clients trade
              </p>
              <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
                Seven St. Louises, Seven Different Search Problems
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                Downtown to Chesterfield is about 25 miles and the buying behaviour changes along the
                way, then changes again when you cross the Mississippi. This is the part of a city
                page a template cannot fake.
              </p>
              <ul className="mt-6 space-y-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/80">
                <li>
                  <strong className="text-fj-ink">Downtown and the riverfront.</strong> Civic, legal,
                  sports and hospitality, plus everyone who serves them. Demand is event-driven around
                  the ballpark and the convention calendar, so hours, parking notes and one-handed
                  booking beat a long about page.
                </li>
                <li>
                  <strong className="text-fj-ink">
                    The Central West End and the Cortex Innovation District.
                  </strong>{' '}
                  Cortex describes itself as the non-profit master developer that turned a 200-acre
                  stretch of the central corridor into an innovation district, and says it recruits
                  life science, national security and technology companies. Buyers here read your
                  technical pages first.
                </li>
                <li>
                  <strong className="text-fj-ink">Clayton.</strong> Law firms, accounting, wealth
                  management, commercial real estate and the county seat. Your site is the credential
                  check that happens before anyone replies to an email. Named people with real
                  qualifications beat photography here.
                </li>
                <li>
                  <strong className="text-fj-ink">Soulard, Lafayette Square and the Delmar Loop.</strong>{' '}
                  Independent food, drink, music and retail. Mobile speed, accurate Business Profile
                  hours, and a menu or booking link that opens instantly, because these searches
                  happen while someone is already walking.
                </li>
                <li>
                  <strong className="text-fj-ink">Chesterfield and West County.</strong> Corporate
                  offices, medical practices, trades and multi-location retail along the Highway 40
                  corridor. Longer consideration, more comparison shopping, and a quote form worth a
                  call back.
                </li>
                <li>
                  <strong className="text-fj-ink">St. Charles and the Missouri suburbs.</strong> Fast
                  residential growth and the home services that follow it, out through O&apos;Fallon,
                  St. Peters and Wentzville. Service-area pages genuinely earn their place here.
                </li>
                <li>
                  <strong className="text-fj-ink">The Metro East, on the Illinois side.</strong>{' '}
                  Belleville, Edwardsville, Granite City, Alton and the O&apos;Fallon on the Illinois
                  side, which is not the O&apos;Fallon in St. Charles County. Same metro, different
                  state, different local pack. Most St. Louis web design pages ignore it.
                </li>
              </ul>
              <p className="mt-6 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/70">
                If you serve several of those, you do not need seven thin location pages. You need one
                strong page per service, plus location pages only for the places you genuinely want
                work from.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/us/st-louis-web-design/plant-science-tablet.webp"
                alt="A researcher inspecting seedling trays in a greenhouse while a colleague reviews a plant catalogue page on a tablet."
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
                Agtech is the cluster St. Louis is genuinely world class at, and those sites sell to
                growers, researchers and distributors at once. Three audiences, one navigation, which
                is a structure problem rather than a design problem.
              </p>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'ST. LOUIS × WEB DESIGN'}
          headline={'Built for the Industries St. Louis Actually Runs On'}
          lead={
            'Plant science, hospital medicine, financial and legal services, freight on the river, and food and drink are the clusters that generate small-business web work here. Each needs a different site.'
          }
          sectors={[
            {
              name: 'Agtech, plant science and food production',
              description:
                'The Donald Danforth Plant Science Center calls itself the world’s largest independent nonprofit dedicated to plant science, and its own about page counts 11 startups launched, 31 principal investigators and 327 community members from 38 countries. Around it sits a layer of seed, equipment, biologicals and research-services firms selling to growers, scientists and distributors at once. Those sites need one navigation that serves three audiences.',
              example: 'Seed, biologicals and research-services firms selling into the plant science cluster.',
            },
            {
              name: 'Healthcare, clinics and medical practices',
              description:
                'Hospital systems and university medicine anchor a deep private layer: specialist practices, dental and vision groups, imaging centres, device vendors and medical staffing. These builds need privacy-aware contact forms, clear service navigation, clinician pages with real credentials, and location pages that name the suburb rather than saying "St. Louis area".',
              example: 'Practices and suppliers across the Central West End and West County.',
            },
            {
              name: 'Financial, legal and professional services',
              description:
                'Clayton is the business and legal centre of the region and the buying behaviour shows it. Nobody picks a firm from a hero image. They read the practice pages, check the people, then decide whether to reply. That makes this an information architecture job: one page per practice area, real biographies, plain-language process.',
              example: 'Law firms, accountants and commercial real estate in Clayton.',
            },
            {
              name: 'Logistics, freight and river trade',
              description:
                'St. Louis grew up where the Missouri meets the Mississippi, a river, rail and highway junction, and that is still the shape of the economy. Barge, trucking, warehousing and industrial suppliers sell to procurement teams, not consumers. They need clear capability pages, downloadable specifications, and a form that captures enough to quote from.',
              example: 'Freight and industrial suppliers along the river and I-70.',
            },
            {
              name: 'Brewing, food and hospitality',
              description:
                'Brewing built a lot of this city and the food and drink layer around it is still one of the strongest small-business categories here: taprooms, distilleries, restaurants, caterers and event venues. These sites live on mobile speed, correct hours, a one-tap ordering link, and structured data so menus surface in search.',
              example: 'Taprooms and restaurants in Soulard, the Grove and Maplewood.',
            },
            {
              name: 'Home services and trades',
              description:
                'HVAC, roofing, plumbing, electrical and remodelling are the most competitive local categories here and the ones where a slow site costs most per day. These builds live on mobile speed, click-to-call, service-area pages that genuinely differ, and Business Profile alignment across every county you cover, Illinois included.',
              example: 'Multi-truck operators covering St. Charles and the Metro East.',
            },
          ]}
        />

        {/* Sources for every St. Louis figure quoted above */}
        <section className="bg-fj-cream pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="border-t border-fj-neutral-200 pt-5 font-fj-body text-sm leading-[1.65] text-fj-ink/70">
              Sources for the St. Louis figures on this page:{' '}
              <a
                href="https://greaterstlinc.com/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Greater St. Louis, Inc., About
              </a>{' '}
              for the 15-county, two-state definition of the region;{' '}
              <a
                href="https://www.cortexstl.org/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Cortex Innovation District, About
              </a>{' '}
              for the 200-acre district; the{' '}
              <a
                href="https://www.danforthcenter.org/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Donald Danforth Plant Science Center, About Us
              </a>{' '}
              for the startup and researcher figures; and the{' '}
              <a
                href="https://www.danforthcenter.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Danforth Center homepage
              </a>{' '}
              for how it describes itself. All four were opened and checked on 12 August 2026.
            </p>
          </div>
        </section>

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={'Why a St. Louis Business Would Pick Us, and When They Should Not'}
          lead={
            'St. Louis has genuinely good agencies, and several are better than us at things we do not do. Atomicdust has run brand strategy and design here for 25 years. VIVIDSITES builds enterprise .NET and BigCommerce systems and meets clients in person. IQComputing covers WordPress hosting and support end to end. If those are what you want, hire them, and we mean that literally.\n\nWe are built for one situation: you know roughly what you need, you want it fixed-scope and fixed-price, live in days rather than quarters, and you want to own the result. That is the whole pitch, and it is not right for everyone.\n\nWhat you get either way is the same discipline. Static Next.js instead of a plugin stack. Schema and analytics shipped with the build. A recorded handover. No clause that makes leaving expensive.'
          }
          pillars={[
            {
              title: 'Fixed before you commit',
              body: 'Scope, price and timeline agreed on the first call. No paid discovery phase, and no quote that arrives three weeks later with a range on it.',
            },
            {
              title: 'Built for a two-state metro',
              body: 'Service area, location pages, listings and schema set up for Missouri and Illinois separately, because Google treats them as two local markets and most St. Louis sites only claim one.',
            },
            {
              title: 'When we are the wrong choice',
              body: 'You want someone in the room in Clayton every week. You need a brand identity built from nothing. You want one firm running paid media and social too. Or your team is committed to editing in WordPress. In all four cases, hire someone else.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'HONEST COMPARISON'}
          headline={'How We Sit Next to the Other St. Louis Web Design Companies'}
          lead={
            'These firms rank on page one for "web design company st louis" today. Every claim below comes from what each company publishes about itself, read on 12 August 2026. We are in the list too, and we are not the right answer for every row in it.'
          }
          columns={[
            { label: 'What they are good at' },
            { label: 'Where FactoryJet differs', isFactoryJet: true },
          ]}
          rows={[
            {
              feature: 'FactoryJet',
              values: [
                'Fixed-scope, fixed-price builds in Next.js with schema, analytics and AI-crawler checks included. Starter sites ship in 7 days and the repository is yours at handover.',
                'We are a remote team with no St. Louis office. If you want someone in your Clayton conference room every other week, pick a local studio.',
              ],
            },
            {
              feature: 'New Adventure Web',
              values: [
                'Ranks first for this search today. Based in Waterloo, Illinois, serving the St. Louis metro and southern Illinois. Local business web design plus Google Maps marketing, review generation and Business Profile optimisation.',
                'Stronger call if map visibility and reviews are the whole job. We build the site and the search foundation, and do not run review or social programmes.',
              ],
            },
            {
              feature: 'IQComputing',
              values: [
                'WordPress specialists covering custom and ecommerce design, WordPress repair and conversions, maintenance packages, hosting, business email, monitoring, managed support, SEO, PPC and graphic design.',
                'They keep hosting and upkeep long term, which suits owners who never want to think about it. We hand you a codebase you can host anywhere, with maintenance optional.',
              ],
            },
            {
              feature: 'Atomicdust',
              values: [
                'A St. Louis branding and marketing agency of 25 years, working across brand strategy, website design and development, strategy workshops and digital marketing. Won 2026 Web Excellence and GDUSA awards.',
                'Stronger call for a brand-led programme where positioning and identity come first. We are built for a tightly scoped site you can start this month.',
              ],
            },
            {
              feature: '314media',
              values: [
                'St. Louis web design and development with custom programming, database integration and mobile apps, plus hosting and maintenance with no contracts and WordPress fixes billed hourly, monthly or one-off.',
                'Their portfolio is deep in WordPress and custom integrations. We only build in Next.js, which is a strength for speed and a limit if your team wants a WordPress editor.',
              ],
            },
            {
              feature: 'Never Gravity',
              values: [
                'St. Louis firm pairing custom web design with data-driven SEO, covering redesigns, ecommerce, web development and SEO audits, positioned as a long-term partner rather than a one-off build.',
                'Better fit if you want the same team running SEO for years after launch. We build the search foundation in, then hand it over and step back.',
              ],
            },
            {
              feature: 'Hexxen and VIVIDSITES',
              values: [
                'The two enterprise options here. Hexxen spans app and API development, microservices and AI search optimisation across many platforms. VIVIDSITES cites a Nestlé distributor portal, Reebok BigCommerce work and a secure .NET university orthopaedics site, and meets clients in person.',
                'Both are right when the site is part of a larger software or enterprise commerce programme, or when in-person matters. We do websites and commerce front ends in Next.js, and say no to the rest.',
              ],
            },
            {
              feature: 'Be Aligned Web Design',
              values: [
                'A small St. Louis studio leading with messaging and brand strategy, then website design and SEO, plus copywriting, email marketing and reputation management. You work directly with the principal.',
                'Better fit if your real problem is that you cannot articulate what you do. We write clear copy, but we do not run a brand messaging process before the build.',
              ],
            },
            {
              feature: 'Clutch and DesignRush listings',
              values: [
                'Directories that put dozens of St. Louis agency profiles and client reviews in one place, which makes them the fastest way to build a shortlist from a standing start.',
                'A directory cannot tell you how a firm behaves in week three of a project. Use it to build the list, then ask every firm on it the eight questions above.',
              ],
            },
          ]}
          footer={
            <>
              Positioning summarised from each company&apos;s own public website in August 2026, and
              from the first page of Google results on 12 August 2026. Nothing here is a ranking or an
              endorsement, and no pricing is implied. Verify current scope with each firm directly.
            </>
          }
        />

        <PricingTiers
          eyebrow={'SCOPE, NOT GUESSWORK'}
          headline={'Three Tiers, One Fixed Number Before You Start'}
          lead={
            'Every project is quoted as a single fixed figure after one discovery call. What moves the number is page count, how many systems the site connects to, and how custom the design is. Starter ships in 7 days. No retainer on any tier.'
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Starter',
              description:
                'A five-page site that loads fast on a phone and ranks for your name and core service. Right for single-location businesses that need to look credible now.',
              features: [
                '5 pages, mobile-first',
                'Schema markup and meta structure',
                'Contact form to your inbox',
                '2 revision rounds',
                '30-day post-launch support',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
            {
              priceRange: 'Fixed-price',
              name: 'Growth',
              description:
                'A 10 to 15 page site with a blog CMS, lead capture and analytics from day one. Right for firms serving several parts of the metro that need location pages that actually differ.',
              features: [
                '10 to 15 pages with blog CMS',
                'Local SEO across Missouri and Illinois',
                'Lead capture and email automation',
                '3 revision rounds',
                '30-day support plus a training session',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
              popular: true,
            },
            {
              priceRange: 'Fixed-price',
              name: 'Scale',
              description:
                'Custom Next.js build with commerce, AI features or API integrations. Right for established businesses where the site is a real revenue line.',
              features: [
                'Custom Next.js architecture',
                'Commerce or membership features',
                'AI search, chat or recommendations',
                'Third-party API connections',
                'Priority support and quarterly reviews',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
          ] as const}
        />

        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline={'Questions St. Louis Businesses Ask Us'}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Related internal links */}
        <section className="bg-fj-cream py-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              Related services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/services/web-design/', label: 'Web Design Services' },
                { href: '/services/small-business-website-design/', label: 'Small Business Websites' },
                { href: '/services/website-redesign/', label: 'Website Redesign' },
                { href: '/services/local-seo/', label: 'Local SEO' },
                { href: '/services/ecommerce-development/', label: 'Ecommerce Development' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WebDesignCityLinksUS currentCity="st-louis" />

        <FinalCTA
          variant="light"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get Your St. Louis Website Scoped This Week'}
          sub={
            'One 30-minute call gets you a sitemap and a fixed number. If we are not the right fit, keep the sitemap and take it to whoever is. Starter builds ship 7 days after your content lands.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="St. Louis" variant="light" />}
          objectionHandler="No discovery fee. No retainer. You own the code."
        />

        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

/* ===========================================================================
   Schema. Every const declared below is rendered into a <script
   type="application/ld+json"> tag inside this component. FAQPage.mainEntity is
   derived from FAQ_ITEMS, the same array the visible <FAQ /> renders. There is
   no /st-louis city root, so the breadcrumb routes through /services/web-design.
   =========================================================================== */

function SchemaScript() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${URL}#webpage`,
    name: TITLE,
    description: DESCRIPTION,
    url: `${URL}/`,
    dateModified: DATE_MODIFIED,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: 'Bhavesh Barot',
      url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      jobTitle: 'Founder, FactoryJet',
    },
    publisher: { '@id': 'https://factoryjet.com/#organization' },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://factoryjet.com/#website',
      url: 'https://factoryjet.com',
      name: 'FactoryJet',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.faq-answer', '[data-speakable]'],
    },
  };

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${URL}#business`,
        name: 'FactoryJet Technologies',
        url: 'https://factoryjet.com',
        telephone: '+919699977699',
        areaServed: [
          { '@type': 'City', name: 'St. Louis', addressRegion: 'MO', addressCountry: 'US' },
          { '@type': 'AdministrativeArea', name: 'St. Louis County, Missouri' },
          { '@type': 'AdministrativeArea', name: 'St. Charles County, Missouri' },
          { '@type': 'AdministrativeArea', name: 'Madison County, Illinois' },
          { '@type': 'AdministrativeArea', name: 'St. Clair County, Illinois' },
        ],
        priceRange: 'Fixed-price, quoted per project',
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Web Design St. Louis',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: {
          '@type': 'City',
          name: 'St. Louis',
          addressRegion: 'MO',
          addressCountry: 'US',
        },
        description: DESCRIPTION,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web design build tiers',
          itemListElement: [
            { '@type': 'Offer', name: 'Starter', description: 'Five-page mobile-first site, 7-day delivery.' },
            { '@type': 'Offer', name: 'Growth', description: '10 to 15 pages with blog CMS, lead capture and analytics.' },
            { '@type': 'Offer', name: 'Scale', description: 'Custom Next.js build with commerce, AI features or API integrations.' },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Web Design',
            item: 'https://factoryjet.com/services/web-design',
          },
          { '@type': 'ListItem', position: 3, name: 'St. Louis', item: URL },
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
