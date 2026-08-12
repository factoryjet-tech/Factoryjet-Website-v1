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

const TITLE = 'Web Design Company Atlanta | 7-Day Builds, You Own the Code | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company for Atlanta businesses. Starter sites ship in 7 days, built in Next.js with schema, GA4 and local SEO. You own the code and the design files.';
const URL = 'https://factoryjet.com/atlanta/web-design';
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
        alt: 'FactoryJet web design for Atlanta, Georgia businesses',
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
  { key: 'local', label: 'Atlanta & Local' },
  { key: 'support', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a web design company in Atlanta charge?',
    answer:
      'Three things move the number: how many pages you need, how many systems the site has to talk to, and how custom the design is. A five-page site for a single-location service business sits at the bottom. A store with a catalogue, a booking flow and a payment gateway sits at the top. FactoryJet quotes one fixed figure after a single discovery call, so you see the whole number before anyone starts.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in Atlanta pay for a website?',
    answer:
      'Pay for the outcome, not the page count. If the site brings in even a handful of qualified enquiries a month, it pays for itself quickly in almost any Atlanta service category. The real risk is not overpaying, it is paying twice: once for a cheap site that never ranks, then again for the rebuild eighteen months later. Ask for a fixed quote and a written scope before you commit.',
    category: 'cost',
  },
  {
    question: 'What is a good hourly rate for website design?',
    answer:
      'Hourly is the wrong unit for most small-business projects. It rewards slow work and it leaves you carrying the risk when the estimate slips. Ask for a fixed project fee against a written scope instead, with a named change process for anything outside it. Hourly makes sense for ongoing tweaks and retainers, not for building a site from scratch.',
    category: 'cost',
  },
  {
    question: 'Why do web design agencies hide their pricing?',
    answer:
      'Mostly because a website is not one product. The same five pages can be a two-week job or a two-month job depending on content, integrations and how many people have to approve the design. Some firms also hold pricing back so they can price to your budget. Either way, the fix is the same: insist on a fixed number tied to a written scope before you pay anything.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our Starter build ships in 7 days. Growth projects, which run 10 to 15 pages with a blog CMS and lead capture, usually take 2 to 3 weeks. Scale builds with custom integrations get scoped one at a time. The clock does not start until your logo, photos and copy notes are in the shared workspace, because waiting on content is what actually delays most projects.',
    category: 'cost',
  },
  {
    question: 'Can I really get a website in 3 days?',
    answer:
      'You can get pages live in 3 days. Whether they are worth having is a different question. A three-day site is a template with your logo dropped into it. It will not have proper information architecture, schema markup, or copy written for how your buyers actually search. We take 7 days on Starter because days four to seven are where the search and conversion work happens.',
    category: 'cost',
  },
  {
    question: 'What does a web design company actually do?',
    answer:
      'It plans the site structure, designs the pages, writes or shapes the copy, builds the front end, connects forms and third-party tools, then launches it. A good one also sets up analytics, adds structured data so search engines and AI assistants can read the page, and tunes load speed. A weak one stops at the visual design and hands you a bill.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'At minimum: a clear statement of what you do and who for, a page per service, proof you have done it before, a contact method that works on a phone, your service area, and a quote path. Add opening hours and a map if people visit you. Everything else is optional until those six things are solid.',
    category: 'included',
  },
  {
    question: 'What are the top three features of a good website?',
    answer:
      'Speed, clarity, and one obvious next step. Speed keeps people from bouncing before the page paints. Clarity means a visitor knows within one screen whether you solve their problem. The next step is a single primary action per page, repeated, not five competing buttons. Animation, video and clever layout are decoration on top of those three.',
    category: 'included',
  },
  {
    question: 'What are the 5 elements to a good website design?',
    answer:
      'Structure, so pages sit in a logical hierarchy. Typography, so long copy is readable on a phone. Contrast, so text passes accessibility checks. Rhythm, so spacing groups related things together. And restraint, so one accent colour carries the calls to action instead of six. Get those right and the site works before you add a single photograph.',
    category: 'included',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'The 7 Cs are a teaching checklist: context, content, community, customisation, communication, connection, and commerce. It comes out of e-commerce interface research and works as a review pass rather than a build plan. Run a finished site past it and the gap is almost always content or connection, meaning thin pages and weak internal links.',
    category: 'included',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'It is the rough window you have before a visitor decides whether to stay. In that time they should see what you do, who you do it for, and how to start. It is a rule of thumb rather than a measured law, but it is a useful test: show your homepage to someone for three seconds, cover it, and ask them what the business does.',
    category: 'technical',
  },
  {
    question: 'What are common red flags when hiring a web design company?',
    answer:
      'No written scope. A quote that only arrives after a paid discovery phase. Refusing to name the platform they build on. Hosting you cannot move away from. No mention of analytics or search setup. Portfolio links that are dead or now point at a site someone else rebuilt. Any one of those deserves a direct question before you sign.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build my own website or hire a designer?',
    answer:
      'Build it yourself if you are testing an idea, your budget is near zero, and time is the thing you have most of. Hire someone once the site has a job to do, generating enquiries, taking orders, or supporting a sales team. The tipping point is usually the moment you would rather be doing your actual work than fighting a page builder.',
    category: 'choosing',
  },
  {
    question: 'Is it worth making a website for a small business?',
    answer:
      'Yes, and for a reason that changed recently. A social profile or a directory listing puts you on rented land. A site you own is what search engines index and what AI assistants quote when someone asks for a recommendation. If your business is not on a page a machine can read, it is not in the answer.',
    category: 'choosing',
  },
  {
    question: 'What can I use instead of a website?',
    answer:
      'A Google Business Profile, an Instagram account or a marketplace listing will carry you for a while, and for some Atlanta food and retail businesses they carry a lot. What they will not do is rank for the service phrases people search, hold the detail a B2B buyer needs, or give you a page an AI assistant can cite. Use them alongside a site, not instead of one.',
    category: 'choosing',
  },
  {
    question: 'What are the top 5 web design companies in Atlanta?',
    answer:
      'There is no official list, and any page that claims one is either a directory or a roundup written by an agency. On 12 August 2026 the first page of Google for this search included The Creative Momentum, Elite Web Professionals, Darwin Studios, Clockwork, Blue Light Labs and Thrive, plus Clutch, Thumbtack and Yelp listings. Use those to build a shortlist, then judge each firm the same way.',
    category: 'choosing',
  },
  {
    question: 'What are the top 10 web design agencies in the USA?',
    answer:
      'Again, no official list exists. The rankings you find are directories where placement is shaped by reviews and profile activity, or articles written by agencies about their own category. Build the shortlist from them, then judge every firm on three things: a written scope, a named platform, and a live client site you can load and time on your own phone.',
    category: 'choosing',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code for one, and for a simple single-page site that is often enough. What it will not do on its own is decide your page structure, handle hosting and domains, wire up forms and analytics, test on real devices, or take responsibility when something breaks in six months. Generating the code was never the expensive part.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It is replacing the production work, not the decisions. Layout drafts, boilerplate code and first-pass copy are far faster than they were two years ago. What has not changed is knowing what an Alpharetta payments firm should say on its landing page versus a Decatur dental practice. We use AI heavily inside our own build, which is how a 7-day Starter is possible at all.',
    category: 'ai',
  },
  {
    question: 'Will AI replace web designers?',
    answer:
      'The role is shifting rather than disappearing. Designers who only pushed pixels around a template are under real pressure. Designers who understand conversion, accessibility, information architecture and how search engines and AI assistants read a page are busier than before, because more sites get built now and more of them need someone to judge whether they are any good.',
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the demand moved. Fewer people pay for a brochure site that just exists. More pay for sites that have to perform: rank locally, get quoted by AI search, convert paid traffic, or replace a slow legacy build. Most of what we see in Atlanta is replatforming and rescue work rather than first-ever websites.',
    category: 'ai',
  },
  {
    question: 'Which is better, web design or web development?',
    answer:
      'They are two halves of one job. Design decides what the page looks like and how a visitor moves through it. Development turns that into working code, connects it to a CMS and third-party tools, and makes it fast. You need both. A design nobody can build, and a build nobody wants to use, fail in exactly the same way.',
    category: 'technical',
  },
  {
    question: 'Can I host my own website for free?',
    answer:
      'You can host a static site free on several platforms, and for a personal project that is fine. For a business, the cost is not hosting, it is what free tiers usually lack: a custom domain on some plans, uptime commitments, and support when something breaks. We deploy client sites to Cloudflare Pages, which is fast, cheap and lets you move away whenever you want.',
    category: 'technical',
  },
  {
    question: 'How long until my new Atlanta website ranks on Google?',
    answer:
      'Searches for your own business name usually land within one to two weeks of launch. Competitive local terms like "web design company Atlanta" take three to six months on a new domain, and longer in crowded categories such as legal, dental and home services. The work that shortens that window, schema, internal linking, real content depth and page speed, is built in rather than sold later.',
    category: 'technical',
  },
  {
    question: 'Do you build online stores?',
    answer:
      'Yes, on the Scale tier. That covers the product catalogue, checkout, a payment gateway and inventory. We build on Next.js with a headless commerce layer, which keeps the storefront fast and lets you change the front end without migrating the whole store. If you already run a store elsewhere, we can rebuild the front end and keep your existing back office.',
    category: 'technical',
  },
  {
    question: 'Do I need an LLC to run a website?',
    answer:
      'No. Plenty of sole proprietors publish and run sites under their own name. Whether you form an LLC is a liability and tax decision rather than a web one, and a Georgia attorney or CPA is the right person to ask. From a build point of view nothing changes: the site, the domain and the hosting can all be moved into a company later.',
    category: 'local',
  },
  {
    question: 'Does my LLC name have to match my website name?',
    answer:
      'It does not have to. Plenty of Georgia businesses trade under a name that differs from the registered entity. What matters for search and for trust is that whatever name you use is consistent across your site, your Google Business Profile and your listings, because inconsistent names weaken local ranking signals. Check the naming rules themselves with your attorney.',
    category: 'local',
  },
  {
    question: 'Which parts of Atlanta do you work with?',
    answer:
      'All of them, and it matters less than people expect. We have built for businesses working in Midtown and Tech Square, Buckhead, Downtown, the Old Fourth Ward and the BeltLine, West Midtown, and out along the perimeter. What changes between them is search intent and competition, not the build. The location pages and the schema get tuned per area.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses in Alpharetta, Marietta, Decatur or Sandy Springs?',
    answer:
      'Yes. Most of our Atlanta-area clients serve the wider metro rather than one zip code, so we usually build one strong page per service plus location pages for the suburbs you actually want work from. Spinning up thin pages for every metro suburb is a common mistake, and search engines have got much better at ignoring them.',
    category: 'local',
  },
  {
    question: 'Do you have an office in Atlanta?',
    answer:
      'No, and we would rather say so on the page than let you find out on the kickoff call. FactoryJet is a remote team. Everything runs through scheduled video calls, a shared workspace and a recorded handover. If having someone in the room every fortnight is part of what you are buying, one of the Atlanta studios on this page is the better answer.',
    category: 'local',
  },
  {
    question: 'Who owns the code and design files when the project is done?',
    answer:
      'You do, completely. You get the Next.js codebase in your own repository and the full design file. There is no licence fee, no proprietary page builder, and no clause tying the site to us. If you want to move to another developer next year you can, and nothing about the handover is designed to make that hard.',
    category: 'support',
  },
  {
    question: 'Do you handle maintenance after the site launches?',
    answer:
      'The first 30 days after launch cover bug fixes and training questions at no extra charge. After that an optional monthly plan covers content updates, dependency upgrades and performance monitoring. It is optional on purpose. Because the site is a static Next.js build rather than a plugin stack, it does not rot the way an unmaintained WordPress install does.',
    category: 'support',
  },
];

export default function AtlantaWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_atlanta_web_design_hero" />}
          eyebrow={'WEB DESIGN · ATLANTA, GA'}
          headline={'A Web Design Company Atlanta Businesses Can Scope in a Single Call'}
          lead={
            'Fixed scope, one number, and a Starter site live in 7 days. Schema markup, analytics and local search are wired in before launch, not sold to you afterwards. You keep the code and the design files.'
          }
          trustItems={['Fixed-price quote after one call', '7-day Starter delivery', 'You own the codebase']}
          extraCta={<WhatsAppCTA city="Atlanta" variant="light" />}
          rightSlot={
            <img
              src="/images/us/atlanta-web-design/hero.webp"
              alt="Two people reviewing a new product page layout on a wall-mounted screen in a bright brick-walled office."
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
              What does a web design company in Atlanta actually do?
            </h2>
            <p
              data-speakable
              className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80"
            >
              An Atlanta web design company plans your site structure, designs and builds the pages,
              connects your forms and analytics, then launches it. The good ones also ship schema
              markup and page speed work so you show up in local search and in AI answers. FactoryJet
              builds fixed-scope sites in Next.js, and you own the code.
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
          headline={'What Atlanta businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'ATLANTA MARKET'}
          headline={'Atlanta Is a Headquarters City, and Your Search Results Show It'}
          leadParagraphs={[
            'The Metro Atlanta Chamber counts more than 1,200 regional and global headquarters in the region and more than 13,000 technology companies. That is the competitive set your site sits next to. When someone in Buckhead or Sandy Springs searches for your service, the results page is shaped by companies with in-house marketing teams and content calendars. You will not outspend them. You beat them by answering the searcher’s question faster and more clearly than anything else on the page, which is a structure and speed problem, and structure and speed are solvable.',
            'The second thing that shapes this market is payments. Metro Atlanta is known as Transaction Alley, and the Chamber states that 70 percent of all US financial transactions pass through companies in the region, with 6 of the 10 largest payment processing firms based in Georgia. If you sell into that world, your website is read by people who evaluate vendors for a living. Vague capability copy gets you filtered out before a human replies.',
            'And then there is production. The Chamber describes Georgia as the number one state for film production, with more than 3 million square feet of sound stages in metro Atlanta. That has grown a deep layer of small businesses around it: crew, rentals, post houses, catering, wardrobe, location services, studio-adjacent trades. Those sites live or die on how fast a producer can see your reel, your rates request form and your availability on a phone.',
          ]}
          stats={[
            {
              value: '1,200+',
              label: 'Regional and global headquarters in metro Atlanta',
              sourceUrl:
                'https://www.metroatlantachamber.com/built-for-business/global-center-of-growth',
              sourceLabel: 'Metro Atlanta Chamber, Global Center of Growth',
            },
            {
              value: '70%',
              label: 'Of US financial transactions pass through companies in the region',
              sourceUrl: 'https://www.metroatlantachamber.com/industries/fintech',
              sourceLabel: 'Metro Atlanta Chamber, Fintech',
            },
            {
              value: '13,000+',
              label: 'Technology companies based in metro Atlanta',
              sourceUrl:
                'https://www.metroatlantachamber.com/built-for-business/global-center-of-growth',
              sourceLabel: 'Metro Atlanta Chamber, Global Center of Growth',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE ACTUALLY BUYING'}
          headline={'A Website Is a Sales Asset, Not a Design Deliverable'}
          lead={
            'Most quotes you will get in Atlanta cover the visual design and the build. Ours covers the visual design, the build, and the three things that decide whether the site earns anything: structure, speed, and being readable by the machines that now answer your customers’ questions.'
          }
          body={
            <>
              <p>
                Structure means each service gets a real page instead of an accordion on the
                homepage, and those pages link to each other in a way that tells search engines what
                you actually do. Most of the rebuilds we take on in Atlanta fail here first. The site
                looks fine and ranks for nothing, because there is exactly one page of substance on
                it.
              </p>
              <p>
                Speed is not a vanity number. It is the difference between someone on a phone in a
                parking deck off Peachtree waiting for your page and going back to the results. We
                build static Next.js pages and serve them from Cloudflare&apos;s edge network, so
                there is no database query sitting between the click and the content.
              </p>
              <p>
                Machine readability is the newest part of the job and the one almost nobody quotes
                for. We ship JSON-LD schema on every page, keep the answer to each page&apos;s main
                question in plain text near the top, and check that GPTBot, ClaudeBot and
                PerplexityBot can crawl the site. When someone asks an AI assistant to recommend a
                firm in your category, that is what decides whether you are in the answer.
              </p>
              <p>
                Every project also includes discovery, a design system you keep, the copy, analytics
                wired in from day one, and a 30-day support window after launch. The{' '}
                <Link href="/services/web-design/" className="font-medium text-[#B23E13] underline underline-offset-4">
                  full web design service scope
                </Link>{' '}
                has the detail if you want it.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/atlanta-web-design/process.webp"
              alt="Three people sketching website wireframes on paper around a table beside a laptop showing a product page."
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
              8 Questions to Ask Any Atlanta Web Design Company Before You Sign
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
              Run every shortlisted firm through this, including us. Any of them should be able to
              answer all eight inside one call, without checking with someone else first.
            </p>

            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'What platform do you build on, and why that one?',
                  d: 'WordPress, Webflow, Shopify and Next.js are all defensible answers. "We handle that" is not. The platform decides your maintenance load, your hosting bill, and how easily you can leave.',
                },
                {
                  n: '02',
                  t: 'Can I load one of your live client sites on my own phone?',
                  d: 'Not the case study page. The real site, on cellular, off wifi, ideally somewhere with bad signal like a parking deck. If text takes more than a couple of seconds to appear, that is what your site will do.',
                },
                {
                  n: '03',
                  t: 'Will I get the scope in writing before the deposit?',
                  d: 'Page count, revision rounds, who writes the copy, who sources photography, and what counts as out of scope. Most project disputes we hear about trace back to copy nobody agreed to write.',
                },
                {
                  n: '04',
                  t: 'On the last day, what exactly do I receive?',
                  d: 'The answer should include a repository and a design file, not a login to something you rent forever. Ask what happens to the site if you stop paying them next year.',
                },
                {
                  n: '05',
                  t: 'Is search work included in the build or sold separately?',
                  d: 'Schema markup, meta structure, internal linking and Search Console setup belong in the build. If they show up as a separate monthly line, you are paying twice for one job.',
                },
                {
                  n: '06',
                  t: 'How does this site handle AI search?',
                  d: 'AI assistants now answer a growing share of "who should I hire in Atlanta" questions. Ask whether their builds are crawlable by GPTBot, ClaudeBot and PerplexityBot, and whether they ship structured data.',
                },
                {
                  n: '07',
                  t: 'Who actually does the work?',
                  d: 'Some firms white-label the build to a partner or a reseller network. That is not automatically bad and several do it well, but you should know before you sign, not after a handover goes sideways.',
                },
                {
                  n: '08',
                  t: 'Do you understand my part of the metro?',
                  d: 'A Decatur practice, a BeltLine retailer and a payments company on the GA 400 corridor are three different search problems. If the answer treats Atlanta as one flat market, expect one flat location page.',
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
                'One 30-minute call. We agree who the site is for, which services get their own page, and what a good month of enquiries looks like. You leave that call with the sitemap and the fixed quote.',
            },
            {
              number: '02',
              title: 'Design',
              description:
                'Wireframes first, then a full design system in Figma with mobile layouts included. Two structured revision rounds on Starter, three on Growth. Nothing gets built until you sign off the design.',
            },
            {
              number: '03',
              title: 'Build',
              description:
                'Static Next.js, forms wired to your inbox and CRM, CMS connected if your tier includes one. Performance budgets are enforced from the first commit instead of patched at the end.',
            },
            {
              number: '04',
              title: 'Content and search',
              description:
                'Copy, compressed WebP images, meta structure, JSON-LD schema, internal links, and a Google Business Profile check for your Atlanta or metro location. We verify the site renders for AI crawlers before launch.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, DNS and SSL, GA4 connected, then a recorded walkthrough of the CMS. 30 days of support follows for fixes and training questions.',
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
                Get a fixed quote for your Atlanta project
              </h2>
              <p className="mt-3 max-w-[52ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
                One call, one number, and a sitemap you can take to another agency if you decide we
                are not the right fit. No discovery fee.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroInlineForm region="us" source="us_atlanta_web_design_mid" />
            </div>
          </div>
        </section>

        {/* Atlanta districts: the part a template cannot copy */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Where our Atlanta clients trade
              </p>
              <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
                Six Atlantas, Six Different Search Problems
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                Atlanta is not one market with one search behaviour. The distance from Midtown to
                Alpharetta is about 25 miles and the buying behaviour changes completely along the
                way. This is the part of a city page that a template cannot fake, and it is the part
                that decides whether your location pages are worth building.
              </p>
              <ul className="mt-6 space-y-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/80">
                <li>
                  <strong className="text-fj-ink">Midtown and Tech Square.</strong> Startups,
                  corporate innovation offices and the Georgia Tech orbit. Buyers here read your
                  product and technical pages before they read your about page, so depth beats
                  polish.
                </li>
                <li>
                  <strong className="text-fj-ink">Buckhead.</strong> Finance, law, wealth management,
                  medical and dental practices, and premium retail. The site is the credential check
                  that happens before anyone replies to your email. Named people and real
                  qualifications carry more weight than photography.
                </li>
                <li>
                  <strong className="text-fj-ink">Old Fourth Ward and the BeltLine.</strong>{' '}
                  Independent retail, food, fitness and creative studios around Ponce City Market and
                  the Eastside Trail. Mobile-first, fast, and tied tightly to Google Business Profile
                  and maps results, because a lot of these searches happen while someone is walking.
                </li>
                <li>
                  <strong className="text-fj-ink">West Midtown.</strong> Design showrooms, furniture
                  and interiors trade, studios and production services around Howell Mill. These
                  sites sell to trade buyers as much as walk-ins, so catalogue structure and a clean
                  project archive beat a hero video.
                </li>
                <li>
                  <strong className="text-fj-ink">Alpharetta and the north perimeter.</strong>{' '}
                  Payments, software and B2B services along GA 400, out through Sandy Springs,
                  Dunwoody, Roswell and Johns Creek. Long buying cycles, committee decisions, and a
                  quote request form that has to capture enough to be worth a follow-up call.
                </li>
                <li>
                  <strong className="text-fj-ink">Decatur and the eastside.</strong> Practices,
                  family services and independent shops around a walkable square, in a separate city
                  with its own local pack. A page that says Atlanta and never says Decatur will lose
                  to one that does.
                </li>
              </ul>
              <p className="mt-6 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/70">
                South of the city, the corridor around Hartsfield-Jackson and College Park runs on
                freight, aviation services and hospitality, and those sites sell to procurement teams
                rather than consumers. Same city, different job entirely.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/us/atlanta-web-design/studio.webp"
                alt="A photographer shooting a leather bag on a lit table in a studio, with the product page open on a laptop beside it."
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
                Product photography and page structure are the same job. A retail brand&apos;s site
                lives or dies on how the catalogue is organised, not on the homepage animation.
              </p>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'ATLANTA × WEB DESIGN'}
          headline={'Built for the Industries Atlanta Actually Runs On'}
          lead={
            'The Metro Atlanta Chamber publishes its own key industry list, and it is a useful map of where the small-business work sits: fintech and payments, film and creative production, supply chain, life sciences and healthcare, technology, and the education layer underneath all of it.'
          }
          sectors={[
            {
              name: 'Fintech, payments and B2B software',
              description:
                'Metro Atlanta is called Transaction Alley for a reason. The Chamber states that 70 percent of US financial transactions pass through companies in the region and that 6 of the 10 largest payment processing firms are Georgia-based. The layer of vendors, integrators and consultancies around them sells to buyers who evaluate suppliers professionally, so these sites need real capability pages, plain-language security and compliance detail, and a scoped quote request rather than "get in touch".',
              example: 'Processors, integrators and B2B software firms along the GA 400 corridor.',
            },
            {
              name: 'Film, television and production services',
              description:
                'The Chamber describes Georgia as the number one state for film production, with more than 3 million square feet of sound stages in metro Atlanta. Underneath the studios sits a dense small-business layer: crew, camera and lighting rental, post houses, wardrobe, catering, location scouting, transport. Those sites are judged on how fast a producer can see the work, check availability and send a request from a phone on set.',
              example: 'Crew, rental houses and post-production shops around the studio corridor.',
            },
            {
              name: 'Logistics, freight and aviation',
              description:
                'Atlanta grew from a railroad junction in 1837 into one of the main distribution hubs in the country, and the Chamber notes that 80 percent of US metros are within a two-hour flight or a two-day truck drive. Amazon, Coca-Cola, Delta, Home Depot, Norfolk Southern and UPS all anchor the region. Sites here sell to procurement: clear capability pages, specification documents people can download, and forms that capture enough to quote.',
              example: 'Freight, warehousing, fleet and aviation services near Hartsfield-Jackson.',
            },
            {
              name: 'Healthcare, clinics and life sciences',
              description:
                'Hospital systems, research institutions and public health organisations anchor a deep ecosystem of private practices, specialist clinics, device vendors and healthcare staffing firms across the metro. These builds need privacy-aware contact forms, unambiguous service navigation, clinician pages with real credentials, and location pages that name the practice and the neighbourhood rather than saying "Atlanta area".',
              example: 'Practices and vendors across Buckhead, Decatur and the north perimeter.',
            },
            {
              name: 'Universities, nonprofits and membership organisations',
              description:
                'The Chamber counts more than 70 college and university campuses in the region, and the Atlanta University Center Consortium alone brings together Clark Atlanta University, Morehouse College, Morehouse School of Medicine and Spelman College. That produces a large layer of nonprofits, alumni bodies, training providers and student-facing services, where accessibility compliance and a working donation or enrolment flow matter far more than visual flourish.',
              example: 'Nonprofits, training providers and alumni organisations across the city.',
            },
            {
              name: 'Home services and trades',
              description:
                'HVAC, roofing, plumbing, electrical, pest and remodelling are the most competitive local search categories in the metro, and the ones where a slow site costs the most money per day. These builds live or die on mobile speed, click-to-call, service-area pages that are genuinely different from each other, and Google Business Profile alignment across the counties you actually cover.',
              example: 'Multi-truck operators covering Fulton, DeKalb, Cobb and Gwinnett.',
            },
          ]}
        />

        {/* Sources for every Atlanta figure quoted above */}
        <section className="bg-fj-cream pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="border-t border-fj-neutral-200 pt-5 font-fj-body text-sm leading-[1.65] text-fj-ink/70">
              Sources for the Atlanta figures on this page: Metro Atlanta Chamber,{' '}
              <a
                href="https://www.metroatlantachamber.com/built-for-business/global-center-of-growth"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Global Center of Growth
              </a>
              ,{' '}
              <a
                href="https://www.metroatlantachamber.com/industries/fintech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Fintech
              </a>
              ,{' '}
              <a
                href="https://www.metroatlantachamber.com/industries/supply-chain"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Supply Chain and Advanced Manufacturing
              </a>{' '}
              and{' '}
              <a
                href="https://www.metroatlantachamber.com/industries/creative-industries"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Creative Industries
              </a>
              ; member institutions listed by the{' '}
              <a
                href="https://aucenter.edu/member-institutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#B23E13] underline underline-offset-4"
              >
                Atlanta University Center Consortium
              </a>
              . All five pages were opened and checked on 12 August 2026.
            </p>
          </div>
        </section>

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={'Why an Atlanta Business Would Pick Us, and When They Should Not'}
          lead={
            'Atlanta has real agencies doing real work, and several of them are better than us at things we do not do. The Creative Momentum runs design, video and full inbound marketing at enterprise scale. Darwin Studios has been building and maintaining WordPress sites here for more than 20 years. Elite Web Professionals will meet you at an Atlanta address. If those are what you want, hire them, and we mean that literally.\n\nWe are built for one specific situation: you know roughly what you need, you want it fixed-scope and fixed-price, you want it live in days rather than quarters, and you want to own the result outright. That is the entire pitch, and it is not right for everyone.\n\nWhat you get either way is the same discipline. Static Next.js instead of a plugin stack. Schema and analytics shipped with the build rather than sold after it. A recorded handover so your own team can run the site. And no clause anywhere that makes leaving expensive.'
          }
          pillars={[
            {
              title: 'Fixed before you commit',
              body: 'Scope, price and timeline agreed on the first call. No paid discovery phase, and no quote that arrives three weeks later with a range on it.',
            },
            {
              title: 'Fast because of how we build',
              body: 'A 7-day Starter is possible because the design system, component library and deploy pipeline already exist. Speed comes from reuse, not from skipping the search work.',
            },
            {
              title: 'When we are the wrong choice',
              body: 'You want an agency in the room in Atlanta every week. You need brand identity built from nothing. You want one firm running paid media, social and email as well. Or your team is committed to editing in WordPress. In all four cases, hire someone else.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'HONEST COMPARISON'}
          headline={'How We Sit Next to the Other Atlanta Web Design Companies'}
          lead={
            'These firms rank on page one for "web design company Atlanta" today. Every claim below comes from what each company publishes about itself, checked on 12 August 2026. We have put ourselves in the list, and we are not the right answer for every row in it.'
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
                'We are a remote AI-native team with no Atlanta office. If you want someone sitting in your Buckhead conference room every other week, pick a local studio.',
              ],
            },
            {
              feature: 'The Creative Momentum',
              values: [
                'Atlanta agency running website design and development, UI/UX, branding, graphic design, video and media production, inbound marketing, SEO, PPC and ADA compliance work, aimed at enterprise clients.',
                'They are the stronger call for a large design-led programme with video production attached. We are built for a tightly scoped site you can start this month.',
              ],
            },
            {
              feature: 'Elite Web Professionals',
              values: [
                'Atlanta company with more than 15 years of work, building on WordPress, Joomla, Shopify, Wix and Squarespace, plus SEO, SEM, local search and AI search optimisation. Publishes an Atlanta street address and a local phone number.',
                'They will build on whichever platform you already use. We only build in Next.js, which is a strength if you want speed and a limit if your team is committed to a WordPress workflow.',
              ],
            },
            {
              feature: 'Darwin Studios',
              values: [
                'Atlanta WordPress specialists working with small and mid-sized businesses for more than 20 years, covering WordPress development and maintenance, WooCommerce, hosting, backups and SEO, with direct contact with the principal.',
                'Their model keeps hosting and upkeep with them long term, which suits owners who never want to think about it. Ours hands you a codebase you can host anywhere, with maintenance optional.',
              ],
            },
            {
              feature: 'Clemson Web Design',
              values: [
                'The page that currently ranks first for this search. Small-business focus with websites, eCommerce, SEO and Google Ads, one-to-one contact with the owner, and a strong local-search footprint across Upstate South Carolina, western North Carolina and north Georgia.',
                'Their office is in Oconee County, South Carolina, so in-person Atlanta meetings are not part of the model. Worth a call if you want to work directly with one person.',
              ],
            },
            {
              feature: 'Thrive Internet Marketing Agency',
              values: [
                'Every channel from one agency: local and technical SEO, PPC, social, CRO, link building, content, email, video production and ADA compliance, with dedicated franchise and enterprise programmes and an Atlanta location page.',
                'Better fit if you want one agency running paid media and social alongside the site. We build the site and the search foundation, then stop.',
              ],
            },
            {
              feature: 'Clutch, Thumbtack and Yelp listings',
              values: [
                'Directories that put dozens of Atlanta agency profiles and client reviews in one place, which makes them the fastest way to build a shortlist from a standing start.',
                'A directory cannot tell you how a firm behaves in week three of a project. Use it to build the list, then ask every firm on it the eight questions above.',
              ],
            },
          ]}
          footer={
            <>
              Positioning summarised from each company&apos;s own public website in August 2026, and
              from the first page of Google results for this search on 12 August 2026. Nothing here
              is a ranking or an endorsement, and no pricing is implied. Two other firms that rank on
              page one are not described here because their sites blocked our automated check, and we
              will not summarise a company we have not read. Verify current scope with each firm
              directly.
            </>
          }
        />

        <PricingTiers
          eyebrow={'SCOPE, NOT GUESSWORK'}
          headline={'Three Tiers, One Fixed Number Before You Start'}
          lead={
            'Every project is quoted as a single fixed figure after one discovery call. What moves the number is page count, how many systems the site connects to, and how custom the design work is. Starter ships in 7 days. No retainer is required on any tier.'
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Starter',
              description:
                'A five-page site that loads fast on a phone and ranks for your name and core service. Right for single-location Atlanta businesses that need to look credible now.',
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
                'A 10 to 15 page site with a blog CMS, lead capture and analytics wired in from day one. Right for firms that want the site generating qualified enquiries rather than just existing.',
              features: [
                '10 to 15 pages with blog CMS',
                'Local SEO and GA4 tracking',
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
                'Custom Next.js build with commerce, AI features or API integrations. Right for established Atlanta businesses where the site is a real revenue line.',
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
          headline={'Questions Atlanta Businesses Ask Us'}
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

        <WebDesignCityLinksUS currentCity="atlanta" />

        <FinalCTA
          variant="light"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get Your Atlanta Website Scoped This Week'}
          sub={
            'One 30-minute call gets you a sitemap and a fixed number. If we are not the right fit, keep the sitemap and take it to whoever is. Starter builds ship in 7 days from the day your content lands.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Atlanta" variant="light" />}
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
   no /atlanta city root, so the breadcrumb routes through /services/web-design.
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
          { '@type': 'City', name: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' },
          { '@type': 'AdministrativeArea', name: 'Metro Atlanta' },
        ],
        priceRange: 'Fixed-price, quoted per project',
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Web Design Atlanta',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Atlanta', addressRegion: 'GA', addressCountry: 'US' },
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
          { '@type': 'ListItem', position: 3, name: 'Atlanta', item: URL },
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
