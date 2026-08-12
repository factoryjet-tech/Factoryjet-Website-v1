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

const TITLE = 'Web Design Company Dallas | 7-Day Builds, You Own the Code | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company for Dallas businesses. Starter sites ship in 7 days, built in Next.js with schema, GA4 and local SEO. You own the code and the design files.';
const URL = 'https://factoryjet.com/dallas/web-design';
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
        alt: 'FactoryJet web design for Dallas, Texas businesses',
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

/* ────────────────────────────────────────────────────────────────────────────
   FAQ data. The visible <FAQ /> block and the FAQPage JSON-LD both read from
   FAQ_ITEMS. Do not duplicate this array anywhere else in this file.
   ──────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost & Timeline' },
  { key: 'included', label: "What You Get" },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'ai', label: 'AI & Web Design' },
  { key: 'local', label: 'Dallas & Local' },
  { key: 'support', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a web design company in Dallas charge?',
    answer:
      'It depends on three things: how many pages you need, how many systems the site has to talk to, and how custom the design is. A five-page site for a single-location service business sits at the bottom of that range. A store with a product catalogue and a booking system sits at the top. FactoryJet quotes a fixed number after one discovery call, so you see the whole figure before anyone starts work.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in Dallas pay for a website?',
    answer:
      'Pay for the outcome, not the page count. If your site brings in even a handful of qualified enquiries a month, it pays for itself quickly in almost any Dallas service category. The real risk is not overpaying, it is paying twice: once for a cheap site that never ranks, then again for the rebuild eighteen months later. Ask for a fixed quote and a written scope.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our Starter build ships in 7 days. Growth projects, which run 10 to 15 pages with a blog CMS and lead capture, usually take 2 to 3 weeks. Scale builds with custom integrations are scoped one at a time. The clock does not start until your logo, photos and copy notes are in the shared workspace, because waiting on content is what actually delays most projects.',
    category: 'cost',
  },
  {
    question: 'Can I really get a website in 3 days?',
    answer:
      'You can get pages live in 3 days. Whether they are worth having is a different question. A three-day site is a template with your logo dropped in. It will not have proper information architecture, schema markup, or copy written for how your buyers search. We take 7 days on Starter because days 4 to 7 are where the search and conversion work happens.',
    category: 'cost',
  },
  {
    question: 'What does a web design company actually do?',
    answer:
      'A web design company plans the site structure, designs the pages, writes or shapes the copy, builds the front end, connects forms and third-party tools, then launches it. A good one also sets up analytics, adds structured data so search engines and AI assistants can read the page, and tunes load speed. A weak one stops at the visual design and hands you a bill.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'At minimum: a clear statement of what you do and who for, a page per service, proof that you have done it before, a contact method that works on a phone, your service area, and pricing guidance or a quote path. Add opening hours and a map if people visit you. Everything else is optional until those six things are solid.',
    category: 'included',
  },
  {
    question: 'What are the top three features of a good website?',
    answer:
      'Speed, clarity, and a single obvious next step. Speed keeps people from bouncing before the page paints. Clarity means a visitor knows within one screen whether you solve their problem. The next step is one primary action per page, repeated, not five competing buttons. Everything else, animation, video, clever layout, is decoration on top of those three.',
    category: 'included',
  },
  {
    question: 'What are the 5 elements of a good website design?',
    answer:
      'Structure, so pages sit in a logical hierarchy. Typography, so long copy is readable on a phone. Contrast, so text passes accessibility checks. Rhythm, so spacing groups related things together. And restraint, so one accent colour carries the calls to action instead of six. Get those right and the site works even before you add photography.',
    category: 'included',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'The 7 Cs are a common teaching checklist: context, content, community, customisation, communication, connection, and commerce. It comes from e-commerce interface research and is useful as a review pass, not a build plan. Run your finished site past it and you will usually find the gap is content or connection, meaning thin pages and weak internal links.',
    category: 'included',
  },
  {
    question: 'What are the five golden rules of web design?',
    answer:
      'Put the most important thing first. Keep the visual system consistent across every page. Make it obvious what is clickable. Design for a phone before a desktop, because most local searches happen on one. And remove anything that does not help the visitor decide. Rules like these are not style opinions, they are how you stop a page from leaking attention.',
    category: 'included',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'It is the rough window you have before a visitor decides whether to stay. In that time they should see what you do, who you do it for, and how to start. It is a rule of thumb rather than a measured law, but it is a useful test: show your homepage to someone for three seconds, cover it, and ask what the business does.',
    category: 'technical',
  },
  {
    question: 'What are common red flags when hiring a web design company?',
    answer:
      'No written scope. A quote that cannot be given until after a paid discovery phase. Refusing to say what platform they build on. Hosting you cannot move away from. No mention of analytics or search setup. And portfolio links that are dead or now point to a rebuilt site. Any one of those is worth a direct question before you sign.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build my own website or hire a designer?',
    answer:
      'Build it yourself if you are testing an idea, your budget is near zero, and time is what you have most of. Hire someone once the site has a job to do, generating enquiries, taking orders, or supporting a sales team. The tipping point is usually the moment you would rather be doing your actual work than fighting a page builder.',
    category: 'choosing',
  },
  {
    question: 'Is it worth making a website for a small business?',
    answer:
      'Yes, and for a reason that has changed recently. A social profile or a directory listing puts you on rented land. A site you own is the thing that search engines index and that AI assistants quote when someone asks for a recommendation. If your business is not on a page a machine can read, it is not in the answer.',
    category: 'choosing',
  },
  {
    question: 'What are the top web design agencies in the USA?',
    answer:
      'There is no official list. The rankings you will find are either directories where placement is influenced by reviews and paid profiles, or roundup articles written by agencies themselves. Use them to build a shortlist, then judge each firm on the same three things: a written scope, a named platform, and a live site of theirs you can load and time yourself.',
    category: 'choosing',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code for one, and for a simple single-page site that is often enough. What it will not do on its own is decide your page structure, handle hosting and domains, wire up forms and analytics, test on real devices, or take responsibility when something breaks in six months. The generation step was never the expensive part.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It is replacing the production work, not the decisions. Layout drafts, boilerplate code and first-pass copy are much faster than they were two years ago. What has not changed is knowing what a Dallas HVAC company should say on its landing page versus a downtown law firm. We use AI heavily inside our own build, which is how a 7-day Starter is possible.',
    category: 'ai',
  },
  {
    question: 'Will AI replace web designers?',
    answer:
      'The role is shifting rather than disappearing. Designers who only pushed pixels in a template are under real pressure. Designers who understand conversion, accessibility, information architecture and how search and AI assistants read a page are busier than before, because more sites now get built and more of them need someone to judge whether they are any good.',
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the demand has moved. Fewer people pay for a brochure site that just exists. More pay for sites that have to perform: rank locally, get quoted by AI search, convert paid traffic, or replace a slow legacy build. In Dallas specifically, most of what we see is replatforming and rescue work rather than first-ever websites.',
    category: 'ai',
  },
  {
    question: 'Which is better, web design or web development?',
    answer:
      'They are two halves of the same job. Design decides what the page looks like and how a visitor moves through it. Development turns that into working code, connects it to a CMS and third-party tools, and makes it fast. You need both. A design nobody can build, and a build nobody wants to use, both fail the same way.',
    category: 'technical',
  },
  {
    question: 'Can I host my own website for free?',
    answer:
      'You can host a static site free on several platforms, and for a personal project that is fine. For a business, the cost is not hosting, it is what free tiers usually lack: a custom domain on some plans, uptime commitments, and support when something breaks. We deploy client sites to Cloudflare Pages, which is fast, cheap and lets you move away whenever you want.',
    category: 'technical',
  },
  {
    question: 'How long until my new Dallas website ranks on Google?',
    answer:
      'Searches for your own business name usually land within one to two weeks of launch. Competitive local terms like "web design company Dallas" take three to six months on a new domain, longer in crowded categories such as legal or home services. The work that shortens that window, schema, internal linking, real content depth and page speed, is built into every project rather than sold later.',
    category: 'technical',
  },
  {
    question: 'Do I need an LLC to run a website?',
    answer:
      'No. Plenty of sole proprietors publish and run sites under their own name. Whether you form an LLC is a liability and tax decision rather than a web one, and a Texas attorney or CPA is the right person to ask. From a build point of view, nothing changes: the site, domain and hosting can be moved into a company later.',
    category: 'local',
  },
  {
    question: 'Does my LLC name have to match my website name?',
    answer:
      'It does not have to. Many Texas businesses trade under an assumed name that differs from the registered entity. What matters for search and for trust is that whatever name you use is consistent across your site, your Google Business Profile and your listings, because inconsistent names weaken local ranking signals. Check the naming rules with your attorney.',
    category: 'local',
  },
  {
    question: 'What companies are headquartered in Dallas, Texas?',
    answer:
      'The City of Dallas lists AT&T, Texas Instruments, Southwest Airlines, Comerica, Energy Transfer, CBRE Group, Brinker International, Copart, Jacobs Solutions, Match Group, Atmos Energy and Trinity Industries among the Fortune 1000 companies based in the city. Across the wider Dallas-Fort Worth region there are 24 Fortune 500 headquarters spread over eleven cities.',
    category: 'local',
  },
  {
    question: 'Which parts of Dallas do you work with?',
    answer:
      'All of them, and the answer matters less than people expect. We have built for businesses in Downtown, Uptown, Deep Ellum, the Design District around Oak Lawn and Hi Line, Bishop Arts, Knox Street, Lake Highlands and RedBird. What changes between them is the search intent and the competition, not the build. The location pages and schema get tuned per area.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses outside the city, in Plano, Frisco, Irving or Arlington?',
    answer:
      'Yes. Most of our Dallas-area clients serve the wider metro rather than a single zip code, so we usually build one strong service page per offering plus location pages for the suburbs you actually want work from. Building thin pages for every DFW suburb is a common mistake and search engines have got much better at ignoring them.',
    category: 'local',
  },
  {
    question: 'Do you build online stores?',
    answer:
      'Yes, on the Scale tier. That covers the product catalogue, checkout, a payment gateway, and inventory. We build on Next.js with a headless commerce layer, which keeps the storefront fast and lets you change the front end without migrating the whole store. If you already run a store elsewhere, we can rebuild the front end and keep your existing back office.',
    category: 'technical',
  },
  {
    question: 'Who owns the code and design files when the project is done?',
    answer:
      'You do, completely. You get the Next.js codebase in your own repository and the full design file. There is no licence fee, no proprietary page builder, and no clause tying the site to us. If you want to move to another developer next year, you can, and nothing about the handover is designed to make that hard.',
    category: 'support',
  },
  {
    question: 'Do you handle maintenance after the site launches?',
    answer:
      'The first 30 days after launch cover bug fixes and training questions at no extra charge. After that, an optional monthly plan covers content updates, dependency upgrades and performance monitoring. It is optional on purpose. Because the site is a static Next.js build rather than a plugin stack, it does not rot the way an unmaintained WordPress install does.',
    category: 'support',
  },
];

export default function DallasWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_dallas_web_design_hero" />}
          eyebrow={'WEB DESIGN · DALLAS, TX'}
          headline={'A Web Design Company Dallas Businesses Can Actually Get an Answer From'}
          lead={
            'Fixed scope, fixed price, and a Starter site live in 7 days. Built in Next.js with schema, analytics and local search set up before launch, not sold to you afterwards. You keep the code and the design files.'
          }
          trustItems={['Fixed-price quote after one call', '7-day Starter delivery', 'You own the codebase']}
          extraCta={<WhatsAppCTA city="Dallas" variant="light" />}
          rightSlot={
            <img
              src="/images/us/dallas-web-design/hero.webp"
              alt="A business owner and a web designer reviewing a new website layout on a wall-mounted monitor in a bright office."
              width={1264}
              height={848}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl object-cover shadow-[0_24px_64px_-12px_rgba(15,15,18,0.22)]"
            />
          }
        />

        {/* ── Answer-first block (highest-value extractable block on the page) ── */}
        <section className="border-y border-[#F05A28]/20 bg-white py-10 md:py-12">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              The short answer
            </p>
            <h2 className="font-fj-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-semibold leading-[1.25] tracking-[-0.015em] text-fj-ink">
              What does a web design company in Dallas actually do?
            </h2>
            <p
              data-speakable
              className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80"
            >
              A web design company in Dallas plans, designs, builds and launches your website, then
              hands it over. A good one also sets up analytics, structured data and page speed so the
              site earns search traffic. FactoryJet ships a five-page Starter site in seven days, and
              you own the code and the design files.
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
          headline={'What Dallas businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'DALLAS MARKET'}
          headline={'You Are Not Competing With the Shop Next Door'}
          leadParagraphs={[
            'More than 62,000 businesses are based inside the City of Dallas, and the Dallas-Fort Worth metro ranked fifth among all US metro areas for total economic output in 2023. Twenty-four Fortune 500 companies keep their headquarters in the region. Eight of them sit inside the city itself, including AT&T, Texas Instruments, Southwest Airlines, Comerica and Energy Transfer.',
            'That changes what a small business website has to do here. When someone in Preston Hollow or Lake Highlands searches for your service, the results page is shaped by companies with in-house marketing teams a few miles up the Tollway. You will not outspend them. You beat them by answering the searcher’s question faster and more clearly than anything else on the page, which is a structure and speed problem, and structure and speed are solvable.',
            'The other thing worth knowing about Dallas: healthcare is the biggest employer block in the city. UT Southwestern Medical Center, Parkland Health, Methodist Dallas, Baylor Scott & White and Children’s Health each employ thousands of people here. A large share of the small-business work in this market is healthcare-adjacent, which means privacy-aware forms and clear service navigation matter more than a clever animation.',
          ]}
          stats={[
            {
              value: '62,000+',
              label: 'Businesses based in the City of Dallas',
              sourceUrl: 'https://www.dallasecodev.org/296/Business-Environment',
              sourceLabel: 'City of Dallas Office of Economic Development',
            },
            {
              value: '5th',
              label: 'DFW metro rank among US metros by total GDP (2023, BEA)',
              sourceUrl: 'https://www.dallasecodev.org/341/Economic-Indicators',
              sourceLabel: 'City of Dallas Economic Indicators',
            },
            {
              value: '24',
              label: 'Fortune 500 headquarters in the DFW region',
              sourceUrl:
                'https://www.dallaschamber.org/blog/fortune-rankings-reinforce-dfws-economic-momentum/',
              sourceLabel: 'Dallas Regional Chamber, June 2026',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE ACTUALLY BUYING'}
          headline={'A Website Is a Sales Asset, Not a Design Deliverable'}
          lead={
            'Most quotes you will get in Dallas cover the visual design and the build. Ours covers the visual design, the build, and the three things that decide whether the site earns anything: structure, speed, and being readable by the machines that now answer your customers’ questions.'
          }
          body={
            <>
              <p>
                Structure means your services each get a real page instead of an accordion on the
                homepage, and those pages link to each other in a way that tells search engines what
                you actually do. Most rebuilds we take on in Dallas fail here first. The site looks
                fine and ranks for nothing, because there is only one page of substance on it.
              </p>
              <p>
                Speed is not a vanity number. It is the difference between a person on a phone in a
                parking lot off Central Expressway waiting for your page and going back to the
                results. We build static Next.js pages and serve them from Cloudflare&apos;s edge
                network, so there is no database query between the click and the content.
              </p>
              <p>
                Machine readability is the newest part of the job and the one almost nobody quotes
                for. We ship JSON-LD schema on every page, keep the answer to each page&apos;s main
                question in plain text near the top, and check that GPTBot, ClaudeBot and
                PerplexityBot can crawl the site. When someone asks an AI assistant for a
                recommendation in your category, that is what decides whether you are in the answer.
              </p>
              <p>
                Every project also includes discovery, a design system you keep, the copy, analytics
                wired in from day one, and a 30-day support window after launch. You can read the{' '}
                <Link href="/services/web-design/" className="font-medium text-[#B23E13] underline underline-offset-4">
                  full web design service scope
                </Link>{' '}
                if you want the detail.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/dallas-web-design/process.webp"
              alt="Three people sketching website wireframes on paper around a table, with a laptop showing a store layout."
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── Listicle: AI extraction magnet ─────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
              Before you sign anything
            </p>
            <h2 className="max-w-[22ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
              8 Things to Check Before You Hire a Web Design Company in Dallas
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
              Run every shortlisted firm through this, including us. Any of them should be able to
              answer all eight in a single call.
            </p>

            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'Ask what platform they build on, and why',
                  d: 'WordPress, Webflow, Shopify and Next.js are all defensible answers. "We handle that" is not. The platform decides your ongoing maintenance load, your hosting bill and how easily you can leave.',
                },
                {
                  n: '02',
                  t: 'Load one of their live client sites on your own phone',
                  d: 'Not the case study page. The real site, on cellular, away from wifi. If it takes more than a couple of seconds to show text, that is what your site will do too.',
                },
                {
                  n: '03',
                  t: 'Get the scope in writing before the deposit',
                  d: 'Page count, revision rounds, who writes the copy, who sources photography, and what counts as out of scope. Most disputes we hear about in Dallas trace back to copy nobody agreed to write.',
                },
                {
                  n: '04',
                  t: 'Confirm you own the code and the design files',
                  d: 'Ask directly: on the last day of the project, what do I receive? The answer should include a repository and a design file, not a login to something you rent forever.',
                },
                {
                  n: '05',
                  t: 'Check whether search work is included or upsold',
                  d: 'Schema markup, meta structure, internal linking and Search Console setup should be part of the build. If they appear as a separate monthly line item, you are paying twice for one job.',
                },
                {
                  n: '06',
                  t: 'Ask how the site handles AI search',
                  d: 'AI assistants now answer a growing share of "who should I hire" questions. Ask whether their builds are crawlable by GPTBot, ClaudeBot and PerplexityBot, and whether they ship structured data.',
                },
                {
                  n: '07',
                  t: 'Find out who actually does the work',
                  d: 'Some Dallas firms white-label the build to a partner or a reseller network. That is not automatically bad, several do it well, but you should know before you sign, not after a handover goes sideways.',
                },
                {
                  n: '08',
                  t: 'Agree what happens after launch',
                  d: 'How long is the support window, what does it cover, and what does month two cost in scope terms? A firm that has thought about this will answer without hesitating.',
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
                'One 30-minute call. We agree who the site is for, which services get their own page, and what a good month of enquiries looks like. You get the sitemap and the fixed quote out of this call.',
            },
            {
              number: '02',
              title: 'Design',
              description:
                'Wireframes first, then a full design system in Figma, mobile layouts included. Two structured revision rounds on Starter, three on Growth. Nothing gets built until you sign off the design.',
            },
            {
              number: '03',
              title: 'Build',
              description:
                'Static Next.js, forms wired to your inbox and CRM, CMS connected if the tier includes one. Performance budgets are enforced from the first commit rather than patched at the end.',
            },
            {
              number: '04',
              title: 'Content and search',
              description:
                'Copy, compressed WebP images, meta structure, JSON-LD schema, internal links, and a Google Business Profile check for your Dallas location. We verify the site renders for AI crawlers before launch.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, DNS and SSL, GA4 connected, then a recorded walkthrough of the CMS. 30 days of support follows for fixes and training questions.',
            },
          ]}
        />

        {/* ── Mid-page CTA ───────────────────────────────────────────────── */}
        <section className="border-y border-[#F05A28]/20 bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Start here
              </p>
              <h2 className="max-w-[20ch] font-fj-display text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-fj-ink">
                Get a fixed quote for your Dallas project
              </h2>
              <p className="mt-3 max-w-[52ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
                One call, one number, and a sitemap you can take to another agency if you decide we
                are not the right fit. No discovery fee.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroInlineForm region="us" source="us_dallas_web_design_mid" />
            </div>
          </div>
        </section>

        {/* ── Dallas districts: the un-copyable local part ────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Where our Dallas clients trade
              </p>
              <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
                Dallas Is a City of Districts, and Search Behaves Differently in Each One
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                The City of Dallas runs more than a dozen Public Improvement Districts, each one a
                self-funding business area with its own character: the Dallas Downtown Improvement
                District, Uptown, Deep Ellum, Knox Street, Oak Lawn-Hi Line, Klyde Warren Park and
                the Arts District, Midtown, South Side, University Crossing, Lake Highlands, North
                Lake Highlands, Far East Dallas, Prestonwood and RedBird.
              </p>
              <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                That list is not trivia. It tells you how differently the same service sells across
                one city. A studio in Deep Ellum and a showroom in the Design District around Oak
                Lawn and Hi Line are selling to different buyers with different intent, and neither
                page should be written the way a Preston Hollow professional services firm writes
                its page.
              </p>
              <ul className="mt-6 space-y-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/80">
                <li>
                  <strong className="text-fj-ink">Downtown and Uptown.</strong> Professional
                  services, law, finance and consulting. The site is the credential check that
                  happens before anyone replies to your email.
                </li>
                <li>
                  <strong className="text-fj-ink">Deep Ellum and Bishop Arts.</strong> Independent
                  retail, food and creative studios. Mobile-first, fast, and tied tightly to Google
                  Business Profile and maps results.
                </li>
                <li>
                  <strong className="text-fj-ink">Design District, Oak Lawn-Hi Line.</strong>{' '}
                  Showrooms and trade suppliers. These sites often serve designers and buyers rather
                  than walk-ins, so catalogue structure beats a hero video.
                </li>
                <li>
                  <strong className="text-fj-ink">Medical District and beyond.</strong> Practices and
                  vendors around UT Southwestern and Parkland. Privacy-aware forms, clear service
                  navigation, and location pages that actually name the clinic.
                </li>
                <li>
                  <strong className="text-fj-ink">RedBird and southern Dallas.</strong> Growing
                  service and trade businesses where local pack visibility does more work than any
                  amount of national content.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/us/dallas-web-design/showroom.webp"
                alt="A photographer shooting product images in a brick warehouse showroom beside a laptop showing the product page."
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
                Product photography and page structure are the same job. A showroom brand&apos;s
                site lives or dies on how its catalogue is organised, not on the homepage animation.
              </p>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'DALLAS × WEB DESIGN'}
          headline={'Built for the Industries Dallas Actually Runs On'}
          lead={
            'The City of Dallas publishes its own list of major employers, and it is a useful map of where the small-business work sits: healthcare first, then telecom and semiconductors, aviation and logistics, education, and government contracting.'
          }
          sectors={[
            {
              name: 'Healthcare and medical practices',
              description:
                'UT Southwestern Medical Center, Parkland Health, Methodist Dallas, Baylor Scott & White and Children’s Health are among the largest employers in the city. That anchors a deep ecosystem of private practices, specialist clinics, medical device vendors and healthcare staffing firms. These sites need privacy-aware contact forms, unambiguous service navigation and location pages that name the clinic and the neighbourhood.',
              example: 'Practices and vendors working around the Southwestern Medical District.',
            },
            {
              name: 'Telecom, semiconductors and B2B technology',
              description:
                'AT&T and Texas Instruments both headquarter in Dallas, and the supplier and services layer around them is large. Buyers in this category read specification detail before they read testimonials, so the site has to lead with capability, publish real technical pages, and make it easy to request a scoped quote rather than "get in touch".',
              example: 'Component suppliers, integrators and B2B software firms in the Dallas metro.',
            },
            {
              name: 'Professional and business services',
              description:
                'Law, accounting, consulting, staffing and commercial real estate cluster in Downtown and Uptown. For these firms the website is the credential check that happens before the first reply. Depth beats decoration: a page per practice area, named people with real credentials, and case detail that survives a sceptical read.',
              example: 'Firms in the Downtown and Uptown improvement districts.',
            },
            {
              name: 'Home services and trades',
              description:
                'HVAC, roofing, plumbing, electrical and remodelling are the most competitive local search categories in the DFW market, and the ones where a slow site costs the most. These builds live or die on mobile speed, click-to-call, service-area pages that are genuinely different from each other, and Google Business Profile alignment.',
              example: 'Multi-truck operators covering Dallas plus the northern suburbs.',
            },
            {
              name: 'Retail, hospitality and independent brands',
              description:
                'Deep Ellum, Bishop Arts, Knox Street and Lower Greenville carry a dense independent retail and food scene. These sites need a menu or catalogue that loads instantly on a phone, working reservation or ordering integration, and enough structured data that maps and AI assistants can read hours and location correctly.',
              example: 'Independent retailers and restaurants in the walkable districts.',
            },
            {
              name: 'Logistics, aviation and industrial',
              description:
                'Southwest Airlines is headquartered at Love Field and the wider region is one of the country’s major freight and distribution hubs. Sites here sell to procurement teams: clear capability pages, downloadable specification documents, and a quote request form that captures enough to be worth following up.',
              example: 'Freight, fleet, warehousing and industrial services businesses.',
            },
          ]}
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={'Why a Dallas Business Would Pick Us Over a Local Studio'}
          lead={
            'Dallas has real agencies doing real work. Big D Creative has been building here since 2001. The Old State does strong brand-led design. Thrive runs full multi-channel marketing at franchise and enterprise scale. If you want a partner in the room every week, hire one of them.\n\nWe are built for a different situation: you know roughly what you need, you want it fixed-scope and fixed-price, you want it live in days rather than quarters, and you want to own the result outright. That is the whole pitch.\n\nWhat you get either way is the same discipline. Static Next.js instead of a plugin stack. Schema and analytics shipped with the build rather than sold after it. A recorded handover so your own team can run the site. And no clause anywhere that makes leaving expensive.'
          }
          pillars={[
            {
              title: 'Fixed before you commit',
              body: 'Scope, price and timeline agreed on the first call. No paid discovery phase, no quote that arrives three weeks later with a range on it.',
            },
            {
              title: 'Fast because of how we build',
              body: 'A 7-day Starter is possible because the design system, component library and deploy pipeline already exist. Speed comes from reuse, not from cutting the search work.',
            },
            {
              title: 'Yours on day one',
              body: 'The repository and the design file are handed over at launch. No proprietary builder, no hosting lock-in, no licence that expires if you stop paying us.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'HONEST COMPARISON'}
          headline={'How We Sit Next to the Other Dallas Web Design Companies'}
          lead={
            'These are firms that rank on page one for "web design company Dallas" today. Every claim below comes from what each company publishes about itself. We have included ourselves in the list, and we are not the right answer for every row in it.'
          }
          columns={[
            { label: 'What they are good at' },
            { label: 'Where FactoryJet differs', isFactoryJet: true },
          ]}
          rows={[
            {
              feature: 'FactoryJet',
              values: [
                'Fixed-scope, fixed-price builds in Next.js with schema, analytics and AI-crawler checks included. 7-day Starter delivery.',
                'We are a remote AI-native team, not a Dallas office you can walk into. If in-person weekly meetings matter to you, pick a local studio.',
              ],
            },
            {
              feature: 'Click Wise Design',
              values: [
                'Deep focus on home service and contractor businesses, with Local SEO and Google Local Service Ads alongside the site. States a fully US-based team and published packages.',
                'They specialise by industry, we specialise by build method. If you are a contractor who wants LSA managed too, they are a strong fit.',
              ],
            },
            {
              feature: 'DFW Website Designers',
              values: [
                'Long-running affordable small-business option, 17 years in business, turnkey builds with on-page SEO, ongoing hosting and support, and a white-label reseller side.',
                'Their model bundles hosting and support long term. Ours hands you a codebase you can host anywhere, with maintenance optional.',
              ],
            },
            {
              feature: 'Thrive Internet Marketing Agency',
              values: [
                'Full multi-channel marketing under one roof: SEO, PPC, social, CRO, ADA compliance, video, and dedicated franchise and enterprise programmes.',
                'They are the better call if you want one agency running every channel. We do the site and the search foundation, not paid media management.',
              ],
            },
            {
              feature: 'The Old State',
              values: [
                'Brand-led Dallas studio doing strategy, persona research, identity and web design together, with a portfolio of local and regional brands.',
                'If you need a full brand identity built from scratch, start with them. We work best when your brand already exists and the site is the gap.',
              ],
            },
            {
              feature: 'Big D Creative',
              values: [
                'Award-winning Dallas team operating since 2001, more than 2,000 projects delivered, WordPress-centred, scope-flexible from small sites to large builds.',
                'WordPress versus static Next.js is the real fork. Theirs is easier to find local help for. Ours is faster and has no plugin maintenance load.',
              ],
            },
            {
              feature: 'JSL Marketing & Web Design',
              values: [
                'Web design bundled with in-house photography and video production, brand development, content and email marketing.',
                'If you need original photo and video shot as part of the project, they cover that in house. We would bring in a local photographer.',
              ],
            },
          ]}
          footer={
            <>
              Positioning summarised from each company&apos;s own public website in August 2026.
              Nothing here is a ranking, and no pricing is implied. Verify current scope with each
              firm directly.
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
                'A five-page site that loads fast on a phone and ranks for your name and core service. Right for single-location Dallas service businesses that need to look credible now.',
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
                'A 10 to 15 page site with a blog CMS, lead capture and analytics wired in from day one. Right for firms that want the site to generate qualified enquiries rather than just exist.',
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
                'Custom Next.js build with commerce, AI features or API integrations. Right for established Dallas businesses where the site is a real revenue line.',
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
          headline={'Questions Dallas Businesses Ask Us'}
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── Related internal links ─────────────────────────────────────── */}
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

        <WebDesignCityLinksUS currentCity="dallas" />

        <FinalCTA
          variant="light"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get Your Dallas Website Scoped This Week'}
          sub={
            'One 30-minute call gets you a sitemap and a fixed number. If we are not the right fit, keep the sitemap and take it to whoever is. Starter builds ship in 7 days from the day your content lands.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Dallas" variant="light" />}
          objectionHandler="No discovery fee. No retainer. You own the code."
        />

        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Schema. Every const declared below is rendered into a <script
   type="application/ld+json"> tag inside this component. FAQPage.mainEntity is
   derived from FAQ_ITEMS, the same array the visible <FAQ /> renders.
   ──────────────────────────────────────────────────────────────────────────── */

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
          { '@type': 'City', name: 'Dallas', addressRegion: 'TX', addressCountry: 'US' },
          { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth metroplex' },
        ],
        priceRange: 'Fixed-price, quoted per project',
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Web Design Dallas',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Dallas', addressRegion: 'TX', addressCountry: 'US' },
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
          { '@type': 'ListItem', position: 3, name: 'Dallas', item: URL },
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
