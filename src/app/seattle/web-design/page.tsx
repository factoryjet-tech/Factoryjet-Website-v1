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

const TITLE = 'Web Design Company Seattle | 7-Day Builds, You Own the Code | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company for Seattle and Eastside businesses. Starter sites ship in 7 days, built in Next.js with schema, GA4 and local SEO. You own the repository and the design files.';
const URL = 'https://factoryjet.com/seattle/web-design';
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
        alt: 'FactoryJet web design for Seattle, Washington businesses',
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
  { key: 'included', label: 'What You Get' },
  { key: 'choosing', label: 'Choosing an Agency' },
  { key: 'technical', label: 'Technical & Stack' },
  { key: 'ai', label: 'AI & Web Design' },
  { key: 'local', label: 'Seattle & the Eastside' },
  { key: 'support', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a web design company in Seattle charge?',
    answer:
      'Three things move the number: page count, how many systems the site talks to, and how much of the design is custom rather than adapted. A five-page site for a single-location Ballard business sits at the bottom of that range. A store with a live catalogue and booking sits at the top. We quote one fixed figure after a single call.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in Seattle pay for a website?',
    answer:
      'Pay for the outcome, not the page count. If the site brings in a handful of qualified enquiries a month it pays for itself quickly in almost any Seattle service category. The real risk is not overpaying, it is paying twice: once for a cheap build that never ranks, then again for the rebuild.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our Starter build ships in 7 days. Growth projects run 10 to 15 pages with a blog CMS and lead capture, usually 2 to 3 weeks. Scale builds get scoped one at a time. The clock starts when your logo, photos and copy notes land, because waiting on content is what actually delays most projects.',
    category: 'cost',
  },
  {
    question: 'Can I really get a website in 3 days?',
    answer:
      'You can get pages live in 3 days. Whether they earn anything is a separate question. A three-day site is a template with your logo in it, with no real information architecture, no structured data, and no copy written for how your buyers search. Days 4 to 7 are where that work happens.',
    category: 'cost',
  },
  {
    question: 'What does a web design company actually do?',
    answer:
      'It plans the site structure, designs the pages, shapes the copy, builds the front end, connects forms and third-party tools, then launches it. A good one also sets up analytics, ships structured data so search engines and AI assistants can read the page, and holds the site to a page speed budget.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'At minimum: a clear statement of what you do and who for, a page per service, proof you have done it before, a contact method that works on a phone, your service area, and a quote path. Add opening hours and a map if people visit you. Everything else is optional until those six are solid.',
    category: 'included',
  },
  {
    question: 'What are the 5 elements of a good website design?',
    answer:
      'Structure, so pages sit in a logical hierarchy. Typography, so long copy is readable on a phone. Contrast, so text passes accessibility checks. Rhythm, so spacing groups related things together. And restraint, so one accent colour carries the calls to action instead of six.',
    category: 'included',
  },
  {
    question: "What are the 7 C's of website design?",
    answer:
      'A teaching checklist: context, content, community, customisation, communication, connection, and commerce. It comes from e-commerce interface research and works best as a review pass rather than a build plan. Run a finished site past it and the gap is almost always content or connection, meaning thin pages and weak internal links.',
    category: 'included',
  },
  {
    question: 'What are common red flags when hiring a web design company?',
    answer:
      'No written scope. A quote that only arrives after a paid discovery phase. Refusing to name the platform they build on. Hosting you cannot move away from. No mention of analytics or search setup. And portfolio links that are dead or now point at a site someone else rebuilt.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build your own website or use a website builder?',
    answer:
      'Build it yourself if you are testing an idea, the budget is near zero, and time is what you have most of. Squarespace and Shopify are genuinely good at what they do. Hire someone once the site has a job: generating enquiries, taking orders, or supporting a sales team.',
    category: 'choosing',
  },
  {
    question: 'Is it worth making a website for a small business?',
    answer:
      'Yes, and the reason has changed recently. A social profile or a directory listing puts you on rented land. A site you own is what search engines index and what AI assistants quote when someone asks for a recommendation. If your business is not on a page a machine can read, it is not in the answer.',
    category: 'choosing',
  },
  {
    question: 'What stack do you build on, and can our engineers review it?',
    answer:
      'Next.js with TypeScript and Tailwind, exported as static pages and served from Cloudflare Pages, with a headless CMS when the tier includes one. Yes, your engineers can review it, and in Seattle they usually do. We hand over a normal Git repository, so a code review and a dependency audit are fair game before sign-off.',
    category: 'technical',
  },
  {
    question: 'How fast will my site actually be?',
    answer:
      'We hold builds to the Core Web Vitals thresholds: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1. Static pages from an edge network do most of that work. You can verify all three yourself in PageSpeed Insights.',
    category: 'technical',
  },
  {
    question: 'How long until my new Seattle website ranks on Google?',
    answer:
      'Searches for your own business name usually land within one to two weeks of launch. Competitive local terms such as "web design company Seattle" take three to six months on a new domain, longer in crowded categories. The work that shortens that window is built in rather than sold afterwards.',
    category: 'technical',
  },
  {
    question: 'Do you build online stores?',
    answer:
      'Yes, on the Scale tier: product catalogue, checkout, payment gateway and inventory. We build on Next.js with a headless commerce layer, which keeps the storefront fast and lets you change the front end without migrating the whole store. If you already run a store elsewhere, we can rebuild the front end and keep your back office.',
    category: 'technical',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code, and for a simple single-page site that is often enough. What it will not do on its own is decide your page structure, handle hosting and domains, wire up forms and analytics, test on real devices, or take responsibility when something breaks in six months.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It is replacing the production work, not the decisions. Layout drafts, boilerplate code and first-pass copy are far faster than two years ago. What has not changed is knowing what a Ballard fishing supplier should say versus a South Lake Union biotech vendor. We use AI heavily inside our own build, which is how a 7-day Starter is possible.',
    category: 'ai',
  },
  {
    question: 'Will AI replace web designers?',
    answer:
      'The role is shifting rather than disappearing. Designers who only pushed pixels around a template are under real pressure. Designers who understand conversion, accessibility, information architecture and how search and AI assistants read a page are busier than before, because more sites get built and more of them need someone to judge whether they are any good.',
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026, or is web development dead?',
    answer:
      'Neither is dead, but the demand has moved. Very few people now pay for a brochure site that simply exists. More pay for sites that have to perform: rank locally, get quoted by AI search, convert paid traffic, or replace a slow legacy build. In Seattle most of what we see is replatforming and rescue work.',
    category: 'ai',
  },
  {
    question: 'What big tech company is based in Seattle?',
    answer:
      'Amazon is headquartered in South Lake Union. Microsoft and Nintendo of America are in Redmond, T-Mobile US and Valve in Bellevue, Costco in Issaquah, Starbucks in SODO, Nordstrom downtown, Expedia Group on the Interbay waterfront, and Alaska Airlines near the airport. Two of the three largest public cloud platforms are run from this metro.',
    category: 'local',
  },
  {
    question: 'Which Seattle neighbourhoods do you work with?',
    answer:
      'All of them, and it matters less than people expect. We have built for businesses around Downtown and Belltown, South Lake Union, Capitol Hill, Ballard, Fremont, Georgetown and West Seattle. What changes between them is search intent and competition, not the build. Location pages and structured data get tuned per area.',
    category: 'local',
  },
  {
    question: 'Do you work with Bellevue, Redmond and Kirkland businesses?',
    answer:
      'Yes, and we treat the Eastside as a separate market rather than a Seattle suffix. People in Bellevue search for Bellevue, not Seattle, and the buyer profile skews even more technical. If your customers are east of Lake Washington, you want a page written for the Eastside, not a Seattle page with the city name swapped.',
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
      'The first 30 days after launch cover bug fixes and training questions at no extra charge. After that an optional monthly plan covers content updates, dependency upgrades and performance monitoring. It is optional on purpose: a static Next.js build does not rot the way an unmaintained WordPress install does.',
    category: 'support',
  },
];

export default function SeattleWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_seattle_web_design_hero" />}
          eyebrow={'WEB DESIGN · SEATTLE, WA'}
          headline={'A Web Design Company Seattle Engineers Can Actually Sign Off On'}
          lead={
            'Fixed scope, fixed price, and a Starter site live in 7 days. Built in Next.js, exported static, served from the edge, with structured data and analytics shipped as part of the build. You get the repository and the design files, and your engineers are welcome to review both.'
          }
          trustItems={[
            'Fixed-price quote after one call',
            '7-day Starter delivery',
            'Real Git repo, no page builder',
          ]}
          extraCta={<WhatsAppCTA city="Seattle" variant="light" />}
          rightSlot={
            <img
              src="/images/us/seattle-web-design/hero.webp"
              alt="A business owner and a web designer reviewing a new product page on a laptop in a bright office with evergreen trees outside the window."
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
              What does a web design company in Seattle actually do?
            </h2>
            <p
              data-speakable
              className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80"
            >
              A web design company in Seattle plans, designs, builds and launches your site, then
              hands it over. Seattle buyers usually want the technical detail too: what framework,
              what hosting, what page speed. FactoryJet builds in Next.js, ships a five-page Starter
              site in seven days, and gives you the repository and the design files.
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
          headline={'What Seattle businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'SEATTLE MARKET'}
          headline={'In Seattle, the Person Reviewing Your Website Probably Writes Code'}
          leadParagraphs={[
            'This is what makes Seattle different from almost every other US market we build in. Both Amazon and Microsoft run their cloud platforms from this metro. Across the Innovation Triangle of Bellevue, Kirkland and Redmond, the City of Bellevue reports that 23 percent of the workforce holds an engineering or science-related job. Your buyer here is often an engineer, married to one, or has one on the board.',
            'That changes the sales conversation. A Seattle prospect asks which framework you build on, whether the site is static or server-rendered, what your Lighthouse numbers look like, and whether they can see the repository. Most agency sites cannot survive those four questions. A template shop gets found out in about ninety seconds, usually by someone opening dev tools on the agency’s own homepage.',
            'The city is also denser than people assume. The Downtown Seattle Association reports that nearly 110,000 people now live downtown, roughly one in seven Seattleites, after 53 percent residential growth in a decade. And the region still runs on things unrelated to software: commercial fishing facilities on Port of Seattle property support over 8,800 direct jobs on their own.',
          ]}
          stats={[
            {
              value: '23%',
              label:
                'Of the Innovation Triangle workforce (Bellevue, Kirkland, Redmond) work in engineering or science roles',
              sourceUrl:
                'https://www.bellevuewa.gov/city-government/departments/community-development/economic-development/why-bellevue',
              sourceLabel: 'City of Bellevue, Why Bellevue',
            },
            {
              value: '110,000',
              label: 'People living in Downtown Seattle, about one in seven Seattleites',
              sourceUrl: 'https://downtownseattle.org/research/economic-report/',
              sourceLabel: 'Downtown Seattle Association, State of Downtown 2026',
            },
            {
              value: '8,800+',
              label: 'Direct jobs supported by commercial fishing facilities on Port property',
              sourceUrl: 'https://www.portseattle.org/page/economic-impact',
              sourceLabel: 'Port of Seattle, Economic Impact',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE ACTUALLY BUYING'}
          headline={'We Build for a Client Who Might Open Dev Tools'}
          lead={
            'Most Seattle quotes cover the visual design and the build. Ours covers those plus the three things that decide whether the site earns anything: how it is structured, how fast it renders, and whether machines can read it. All three are checkable, which is the point.'
          }
          body={
            <>
              <p>
                Every site is Next.js with TypeScript, exported as static HTML and served from
                Cloudflare&apos;s edge network. No database sits between the click and the content,
                no plugin stack needs patching monthly, and no proprietary builder holds your
                content hostage. If your CTO wants to clone the repo and read it before launch, that
                is a normal Tuesday for us.
              </p>
              <p>
                Structure means each service gets a real page rather than an accordion on the
                homepage, and those pages link to each other in a way that tells a crawler what you
                do. Most Seattle rebuilds we take on fail here first: the site looks sharp and ranks
                for nothing, because there is one page of substance on it and the rest is a
                portfolio grid.
              </p>
              <p>
                Speed is measured, not asserted. We hold builds to Largest Contentful Paint under
                2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout
                Shift under 0.1, which are Google&apos;s own Core Web Vitals thresholds. Run
                PageSpeed Insights on the finished site yourself. We would rather you did.
              </p>
              <p>
                Machine readability is the newest part of the job and the part almost nobody quotes
                for. We ship JSON-LD schema on every page, keep the plain-text answer to each
                page&apos;s main question near the top, and confirm GPTBot, ClaudeBot and
                PerplexityBot can crawl the site. Every project also includes discovery, a design
                system you keep, the copy, analytics from day one, and 30 days of post-launch
                support. The{' '}
                <Link
                  href="/services/web-design/"
                  className="font-medium text-[#B23E13] underline underline-offset-4"
                >
                  full web design service scope
                </Link>{' '}
                has the detail.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/seattle-web-design/process.webp"
              alt="Three people reviewing hand-drawn website wireframes on a large whiteboard in a brick loft studio."
              width={1264}
              height={848}
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
              The technical due diligence pass
            </p>
            <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
              9 Questions a Seattle Engineer Will Ask Your Web Agency
            </h2>
            <p className="mt-4 max-w-[64ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
              Borrow these if you are not technical. Run every shortlisted firm through the list,
              including us. A good answer is specific and takes under a minute. A bad answer is a
              brochure sentence.
            </p>

            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'What framework, and is it server-rendered or static?',
                  d: 'WordPress, Webflow, Shopify, Astro and Next.js are all defensible answers with different trade-offs. "We handle the technical side" is not. The platform sets your maintenance load, your hosting bill and how easily you can leave.',
                },
                {
                  n: '02',
                  t: 'Can I see the repository before I sign off?',
                  d: 'A firm that hands over a normal Git repo says yes without flinching. A firm that has locked you into a builder account changes the subject. This question separates the two faster than anything else here.',
                },
                {
                  n: '03',
                  t: 'What are your Core Web Vitals targets, and how do you enforce them?',
                  d: 'You want a number, not a promise. Ours are LCP under 2.5 seconds, INP under 200 milliseconds and CLS under 0.1, enforced from the first commit rather than patched before launch.',
                },
                {
                  n: '04',
                  t: 'Load a live client site on my phone, on cellular, right now',
                  d: 'Not the case study page. The real site, off wifi. If text takes more than a couple of seconds to appear, that is what your site will do. The test costs nothing and ends a lot of sales calls early.',
                },
                {
                  n: '05',
                  t: 'What structured data do you ship, and on which pages?',
                  d: 'You want specific schema types: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList. Then check the FAQ schema matches the FAQ actually rendered on the page. Mismatched schema is common and it hurts trust with search engines.',
                },
                {
                  n: '06',
                  t: 'How do you handle AI crawlers?',
                  d: 'AI assistants now answer a growing share of "who should I hire" questions. Ask whether their builds are crawlable by GPTBot, ClaudeBot and PerplexityBot, and whether robots.txt names those agents explicitly rather than leaving them to a wildcard.',
                },
                {
                  n: '07',
                  t: 'What is the dependency and accessibility story?',
                  d: 'Ask how many runtime dependencies ship to the browser, and whether the build passes contrast and keyboard-navigation checks. Both are cheap during the build and expensive to retrofit after launch.',
                },
                {
                  n: '08',
                  t: 'Who actually does the work, and where?',
                  d: 'Some firms white-label the build to a partner network. Several do it well, so it is not automatically a problem. You just want to know before you sign, not during a handover that goes sideways.',
                },
                {
                  n: '09',
                  t: 'What exactly do I receive on the last day?',
                  d: 'It should include a repository, a design file, analytics access and DNS control. If the answer is a login to something you rent forever, you are buying a tenancy, not a website.',
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
                'One 30-minute call. We agree who the site is for, which services get their own page, and what a good month of enquiries looks like. You leave with a sitemap and a fixed quote.',
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
                'Static Next.js in a repo you can read, forms wired to your inbox and CRM, CMS connected if the tier includes one. Performance budgets enforced from the first commit, not patched at the end.',
            },
            {
              number: '04',
              title: 'Content and search',
              description:
                'Copy, compressed WebP images, meta structure, JSON-LD schema, internal links, and a Google Business Profile check for your Seattle or Eastside location. We verify AI crawlers can render the site before launch.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, DNS and SSL, GA4 connected, then a recorded walkthrough of the CMS and the repo. 30 days of support follows.',
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
                Get a fixed quote for your Seattle project
              </h2>
              <p className="mt-3 max-w-[52ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
                One call, one number, and a sitemap you can take to another agency if you decide we
                are not the right fit. No discovery fee. Bring your engineer to the call.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroInlineForm region="us" source="us_seattle_web_design_mid" />
            </div>
          </div>
        </section>

        {/* ── Seattle districts: the un-copyable local part ───────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Where our Seattle clients trade
              </p>
              <h2 className="max-w-[26ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
                Seattle and the Eastside Are Two Different Markets, Not One
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                This is the most common mistake we see in Seattle web projects. An agency builds one
                page for &quot;Seattle&quot; and assumes it covers Bellevue, Redmond and Kirkland
                too. It does not. People east of Lake Washington search for their own city, compare
                against their own local firms, and skew even more technical. A page with the city
                name swapped out reads exactly like what it is. Inside Seattle, the neighbourhoods
                differ enough that the same service needs a different page in each one.
              </p>
              <ul className="mt-6 space-y-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/80">
                <li>
                  <strong className="text-fj-ink">Downtown and Belltown.</strong> Law, finance,
                  consulting, hotels and the agencies serving them. With roughly 110,000 people now
                  living downtown, the residential audience matters as much as the office one. The
                  site is the credential check before anyone replies to your email.
                </li>
                <li>
                  <strong className="text-fj-ink">South Lake Union.</strong> Amazon&apos;s campus
                  sits beside a dense biotech, medical research and global health cluster. Firms
                  selling here need genuine technical pages, privacy-aware forms, and navigation
                  that survives a procurement review rather than a hero video.
                </li>
                <li>
                  <strong className="text-fj-ink">Capitol Hill.</strong> Independent retail, food and
                  drink, clinics, studios and nonprofits. Mobile-first builds tied tightly to Google
                  Business Profile, with hours and location marked up so maps and AI assistants read
                  them correctly.
                </li>
                <li>
                  <strong className="text-fj-ink">Ballard and Fremont.</strong> Breweries, roasters,
                  maritime trades near Salmon Bay, and a real cluster of design, games and software
                  studios. A fishing supplier and a games studio need opposite sites, ten minutes
                  apart.
                </li>
                <li>
                  <strong className="text-fj-ink">Bellevue and the Eastside.</strong> A separate
                  search market with its own competitor set. T-Mobile US and Valve are in Bellevue,
                  Microsoft and Nintendo of America in Redmond. If your customers are here, you want
                  a page written for here.
                </li>
                <li>
                  <strong className="text-fj-ink">Georgetown, SODO and West Seattle.</strong>{' '}
                  Manufacturing, distribution, trades and independent food. Local pack visibility and
                  click-to-call do more work here than any amount of national content.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/us/seattle-web-design/shop.webp"
                alt="A coffee roaster in an apron holding a tablet showing his shop's product page, in a bright cafe with bagged coffee on the shelves."
                width={934}
                height={848}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
                A Ballard roaster and a Redmond software vendor are both Seattle-area clients, and
                almost nothing about their sites should be the same. The build method is shared, the
                page structure is not.
              </p>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'SEATTLE × WEB DESIGN'}
          headline={'Built for the Industries Seattle Actually Runs On'}
          lead={
            'Seattle has an unusual industry mix for a US metro: cloud software and aerospace sit next to a working commercial fishing fleet and one of the densest coffee scenes in the country. Each sells in a completely different way, and the website has to reflect that.'
          }
          sectors={[
            {
              name: 'Cloud, enterprise software and B2B tech',
              description:
                'Two of the three largest public cloud platforms run from this metro, and the supplier layer around them is enormous. Buyers here read documentation before testimonials. The site has to lead with capability, publish real technical pages and name the integrations.',
              example: 'Consultancies, ISVs and integrators selling into Amazon and Microsoft teams.',
            },
            {
              name: 'Biotech, medical research and global health',
              description:
                'South Lake Union holds a deep life science and global health cluster, supporting a long tail of instrument suppliers, lab services, CROs and consultancies. These sites need precise service navigation, privacy-aware forms, and content that holds up when a scientist reads it closely.',
              example: 'Lab suppliers, research services and consultancies around South Lake Union.',
            },
            {
              name: 'Aerospace and advanced manufacturing',
              description:
                'The Puget Sound aerospace supply chain runs from Everett through Renton and Auburn: machine shops, tooling firms, composites specialists, certification consultants. Procurement teams want capability pages, certification detail and downloadable specifications.',
              example: 'Machine shops, tooling suppliers and certification consultants in the Puget Sound corridor.',
            },
            {
              name: 'Maritime, fishing and marine trades',
              description:
                'The North Pacific fleet is homeported here, and commercial fishing facilities on Port of Seattle property alone support more than 8,800 direct jobs. Vessel services, gear suppliers and marine electronics firms sell on reliability and turnaround, so the site needs a contact route that works from a dock.',
              example: 'Gear suppliers and vessel services around Salmon Bay and Fishermen’s Terminal.',
            },
            {
              name: 'Coffee, craft food and independent retail',
              description:
                'Roasters, bakeries, breweries and independent shops are a genuine Seattle export category, not just a local scene. These builds live on mobile speed, a menu that loads instantly, wholesale enquiry forms, and structured data so maps and AI assistants read hours correctly.',
              example: 'Roasters and independent food brands in Ballard, Fremont and Capitol Hill.',
            },
            {
              name: 'Professional services and trades',
              description:
                'Law, accounting, architecture, contracting, HVAC and remodelling across Seattle and the Eastside. For professional firms the site is a credential check, so depth beats decoration. For the trades it is mobile speed, click-to-call and service-area pages that genuinely differ.',
              example: 'Firms and multi-truck operators serving Seattle plus the Eastside.',
            },
          ]}
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={'Where We Are the Right Call, and Where We Are Not'}
          lead={
            'Seattle has genuinely good agencies. All Seattle Web Design has built hundreds of small business sites and says plainly that nothing is outsourced. FDG Web runs an in-house team across React, Node, Laravel and Shopify from Seattle and Everett. Alliance Interactive has been going since 2004 and has real Drupal depth. Suzanne Harrison is a solo Seattle designer who gives you direct access to the person doing the work.\n\nWe are built for a specific situation: you know roughly what you need, you want it fixed-scope and fixed-price, live in days rather than quarters, and owned outright with no builder account in the middle.\n\nWhere we are the wrong choice, plainly. We are remote, so if you want someone in the room every week, hire a local studio. If you need a brand built from scratch, start with a brand-led studio and bring us in after. If your site must stay on Drupal or another enterprise CMS, we are not the fit. And if you want one agency running paid media, social and email too, we do the site and the search foundation, not channel management.'
          }
          pillars={[
            {
              title: 'Fixed before you commit',
              body: 'Scope, price and timeline agreed on the first call. No paid discovery phase, and no quote that turns up three weeks later with a range on it.',
            },
            {
              title: 'Auditable by your own team',
              body: 'A real Git repository, static Next.js, measurable Core Web Vitals and structured data you can validate yourself. Nothing depends on taking our word for it.',
            },
            {
              title: 'Yours on day one',
              body: 'Repository and design file handed over at launch. No proprietary builder, no hosting lock-in, no licence that expires when you stop paying us.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'HONEST COMPARISON'}
          headline={'How We Sit Next to the Other Seattle Web Design Companies'}
          lead={
            'These firms rank on page one for "web design company Seattle" today. Every claim below comes from what each company publishes about itself, checked in August 2026. We are in the list too, and we are not the right answer for every row in it.'
          }
          columns={[
            { label: 'What they are good at' },
            { label: 'Where FactoryJet differs', isFactoryJet: true },
          ]}
          rows={[
            {
              feature: 'FactoryJet',
              values: [
                'Fixed-scope, fixed-price static Next.js builds with schema, analytics, Core Web Vitals budgets and AI-crawler checks included. 7-day Starter delivery, repository handed over.',
                'We are remote, not a Seattle office you can walk into. If weekly in-person meetings matter, pick a local studio from this list.',
              ],
            },
            {
              feature: 'All Seattle Web Design',
              values: [
                'Small business specialists who state plainly that work is never outsourced. Deep vertical experience across law offices, medical and dental, auto repair, aerospace machine shops and nonprofits.',
                'WordPress-centred, built around long-running small business relationships. We build static Next.js and hand over a repo. Different tool, similar customer.',
              ],
            },
            {
              feature: 'FDG Web',
              values: [
                'In-house Seattle and Everett team covering design, development, project management and SEO across React, Node, Angular, Laravel, WordPress and Shopify, plus HIPAA and eLearning work.',
                'Closest match to us on technical range, and they are local. We quote a fixed number after one call and ship Starter in 7 days.',
              ],
            },
            {
              feature: 'Alliance Interactive',
              values: [
                'Running since 2004, with real Drupal depth (migration, development, consulting, maintenance) alongside WordPress and Laravel, plus 24/7 website maintenance and B2B web design.',
                'If your site must live on Drupal, or you want round-the-clock managed maintenance, they are the stronger fit. We do not take Drupal work.',
              ],
            },
            {
              feature: 'Suzanne Harrison',
              values: [
                'Solo Seattle designer working with local small businesses and nonprofits. WordPress hosting and support, a defined process, and published writing on platform choice, AI and SEO.',
                'You get direct access to the designer, which an agency cannot match. We bring more capacity and a faster schedule.',
              ],
            },
            {
              feature: 'Bethany Works',
              values: [
                'Full-service brand and web agency doing brand strategy, voice and messaging, identity and web design together, serving clients worldwide.',
                'Worth knowing: they publish their location as Portland, Oregon, not Seattle. If you need brand strategy and identity built first, start with a brand-led studio like this one.',
              ],
            },
            {
              feature: 'Bizango',
              values: [
                'Seattle web design company pairing website work with branding, per its own published listing. Their site blocked our automated check, so we have not summarised further.',
                'Ask them directly rather than trusting a third-party summary, including this one.',
              ],
            },
          ]}
          footer={
            <>
              Positioning summarised from each company&apos;s own public website in August 2026,
              except where noted. Nothing here is a ranking and no pricing is implied. Clutch and
              Built In Seattle also rank for this search: both are directories, useful for building
              a shortlist, and both are influenced by review volume and paid profiles. Verify
              current scope with each firm directly.
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
                'A five-page site that loads fast on a phone and ranks for your name and core service. Right for single-location Seattle businesses that need to look credible now.',
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
                'A 10 to 15 page site with a blog CMS, lead capture and analytics wired in from day one. Right for firms that want qualified enquiries rather than a site that just exists.',
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
                'Custom Next.js build with commerce, AI features or API integrations. Right for established Seattle and Eastside businesses where the site is a real revenue line.',
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
          headline={'Questions Seattle Businesses Ask Us'}
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

        <WebDesignCityLinksUS currentCity="seattle" />

        <FinalCTA
          variant="light"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get Your Seattle Website Scoped This Week'}
          sub={
            'One 30-minute call gets you a sitemap and a fixed number. Bring your engineer. If we are not the right fit, keep the sitemap and take it to whoever is.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Seattle" variant="light" />}
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
          { '@type': 'City', name: 'Seattle', addressRegion: 'WA', addressCountry: 'US' },
          { '@type': 'City', name: 'Bellevue', addressRegion: 'WA', addressCountry: 'US' },
          { '@type': 'City', name: 'Redmond', addressRegion: 'WA', addressCountry: 'US' },
          { '@type': 'AdministrativeArea', name: 'Puget Sound region' },
        ],
        priceRange: 'Fixed-price, quoted per project',
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Web Design Seattle',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Seattle', addressRegion: 'WA', addressCountry: 'US' },
        description: DESCRIPTION,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web design build tiers',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Starter',
              description: 'Five-page mobile-first site, 7-day delivery.',
            },
            {
              '@type': 'Offer',
              name: 'Growth',
              description: '10 to 15 pages with blog CMS, lead capture and analytics.',
            },
            {
              '@type': 'Offer',
              name: 'Scale',
              description:
                'Custom Next.js build with commerce, AI features or API integrations.',
            },
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
          { '@type': 'ListItem', position: 3, name: 'Seattle', item: URL },
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
