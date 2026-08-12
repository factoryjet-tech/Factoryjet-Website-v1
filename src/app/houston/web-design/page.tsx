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

const TITLE = 'Web Design Company Houston | 7-Day Builds, You Own the Code | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company for Houston businesses. Starter sites ship in 7 days, built in Next.js with schema, GA4, local SEO and real multilingual support. You own the code.';
const URL = 'https://factoryjet.com/houston/web-design';
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
        alt: 'FactoryJet web design for Houston, Texas businesses',
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
  { key: 'choosing', label: 'Choosing a Company' },
  { key: 'ai', label: 'AI & Web Design' },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Houston & Local' },
  { key: 'support', label: 'Ownership & Support' },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a web design company in Houston charge?',
    answer:
      'Three things move the number: page count, how many systems the site connects to, and how custom the design is. A five-page site for one location sits at the bottom. A multilingual site with a catalogue and a booking system sits at the top. We quote one fixed figure after a single call.',
    category: 'cost',
  },
  {
    question: 'How much should a small business in Houston pay for a website?',
    answer:
      'Pay for the outcome, not the page count. The real risk is not overpaying once, it is paying twice: a cheap site that never ranks, then the rebuild eighteen months later. Ask for a written scope and a fixed number before any deposit.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our Starter build ships in 7 days. Growth projects, 10 to 15 pages with a blog CMS and lead capture, run 2 to 3 weeks. The clock starts when your logo, photos and copy notes land, because waiting on content is what actually delays projects.',
    category: 'cost',
  },
  {
    question: 'Can I really get a website in 3 days?',
    answer:
      'You can get pages live in 3 days. Whether they are worth having is another question. A three-day site is a template with your logo dropped in: no real structure, no schema markup, no copy written for how your buyers search. Days 4 to 7 are where that work happens.',
    category: 'cost',
  },
  {
    question: 'What does a web design company actually do?',
    answer:
      'It plans the site structure, designs the pages, shapes the copy, builds the front end, connects your forms and tools, then launches. A good one also sets up analytics, adds structured data so search engines and AI assistants can read the page, and tunes load speed.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'At minimum: a clear statement of what you do and who for, a page per service, proof you have done it before, a contact method that works on a phone, your service area, and a quote path. Add hours and a map if people visit you.',
    category: 'included',
  },
  {
    question: 'What are the top three features of a good website?',
    answer:
      'Speed, clarity, and one obvious next step. Speed stops people leaving before the page paints. Clarity means a visitor knows within one screen whether you solve their problem. The next step is a single primary action per page, repeated, not five competing buttons.',
    category: 'included',
  },
  {
    question: 'What are the 5 elements of a good website design?',
    answer:
      'Structure, so pages sit in a logical hierarchy. Typography, so long copy is readable on a phone. Contrast, so text passes accessibility checks. Rhythm, so spacing groups related things together. And restraint, so one accent colour carries the calls to action instead of six.',
    category: 'included',
  },
  {
    question: 'What are the 7 C’s of website design?',
    answer:
      'A teaching checklist: context, content, community, customisation, communication, connection, and commerce. It comes from e-commerce interface research and works as a review pass rather than a build plan. Run a finished site past it and the gap is usually content or connection.',
    category: 'included',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'It is the rough window before a visitor decides whether to stay. In that time they should see what you do, who you do it for, and how to start. Show someone your homepage for three seconds, cover it, then ask what the business does.',
    category: 'included',
  },
  {
    question: 'What are common red flags when hiring a web design company?',
    answer:
      'No written scope. A quote that only arrives after a paid discovery phase. Refusing to name the platform they build on. Hosting you cannot move away from. No mention of analytics or search setup. Portfolio links that are dead. Any one deserves a direct question.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build your own website or use a web design company?',
    answer:
      'Build it yourself if you are testing an idea, your budget is near zero, and time is what you have most of. Hire someone once the site has a job to do: generating enquiries, taking orders, or supporting a sales team.',
    category: 'choosing',
  },
  {
    question: 'Is it worth making a website for a small business?',
    answer:
      'Yes, and the reason has changed. A social profile puts you on rented land. A site you own is what search engines index and what AI assistants quote when someone asks for a recommendation. If your business is not on a page a machine can read, it is not in the answer.',
    category: 'choosing',
  },
  {
    question: 'What are the top web design agencies in the USA?',
    answer:
      'There is no official list. What you will find is directories where placement is influenced by reviews and paid profiles, or roundups written by agencies themselves. Use them to build a shortlist, then judge each firm on scope, platform, and a live site you can time yourself.',
    category: 'choosing',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can write the code, and for a simple one-page site that is often enough. What it will not do is decide your page structure, handle hosting and domains, wire up forms and analytics, test on real devices, or take responsibility when something breaks in six months.',
    category: 'ai',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It is replacing the production work, not the decisions. Layout drafts, boilerplate code and first-pass copy are far faster than two years ago. What has not changed is knowing what a Katy HVAC company should say versus an oilfield services supplier in the Energy Corridor.',
    category: 'ai',
  },
  {
    question: 'Will AI replace web designers?',
    answer:
      'The role is shifting rather than disappearing. Designers who only pushed pixels around a template are under real pressure. Designers who understand conversion, accessibility, information architecture and how AI assistants read a page are busier than before, because more sites get built and more need judging.',
    category: 'ai',
  },
  {
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the demand moved. Fewer people pay for a brochure site that just exists. More pay for sites that have to perform: rank locally, get quoted by AI search, convert paid traffic, or replace a slow legacy build. In Houston most of it is replatforming and rescue work.',
    category: 'ai',
  },
  {
    question: 'Which is better, web design or web development?',
    answer:
      'Two halves of one job. Design decides what the page looks like and how a visitor moves through it. Development turns that into working code, connects it to a CMS and third-party tools, and makes it fast. You need both, and skipping either shows.',
    category: 'technical',
  },
  {
    question: 'Can I host my own website for free?',
    answer:
      'You can host a static site free on several platforms, and for a personal project that is fine. For a business the cost is not hosting, it is what free tiers lack: uptime commitments and support when something breaks. We deploy to Cloudflare Pages, which you can leave anytime.',
    category: 'technical',
  },
  {
    question: 'How long until my new Houston website ranks on Google?',
    answer:
      'Searches for your own business name usually land within one to two weeks of launch. Competitive local terms like "web design company Houston" take three to six months on a new domain, longer in crowded categories such as legal, medical or home services.',
    category: 'technical',
  },
  {
    question: 'Do you build websites in Spanish and other languages?',
    answer:
      'Yes, and properly. Each language gets its own indexable URL with hreflang tags and a correct lang attribute, so Google and AI assistants serve the right version. A translate widget does none of that, because there is no separate page to index. Spanish is the usual second language here.',
    category: 'local',
  },
  {
    question: 'Which parts of Houston do you work with?',
    answer:
      'All of them. We have built for businesses Downtown, in the Energy Corridor, Galleria and Uptown, the Texas Medical Center, the Heights, Midtown, EaDo and the Ship Channel industrial belt. What changes between them is search intent and competition, not the build.',
    category: 'local',
  },
  {
    question: 'Do you work with businesses in Sugar Land, Katy, The Woodlands or Pearland?',
    answer:
      'Yes. Most of our Houston-area clients serve the wider metro rather than one zip code, so we build one strong page per service plus location pages for the suburbs you actually want work from. Thin pages for every suburb is a mistake search engines now ignore.',
    category: 'local',
  },
  {
    question: 'Who owns the code and design files when the project is done?',
    answer:
      'You do, completely. You get the Next.js codebase in your own repository and the full design file. There is no licence fee, no proprietary page builder, and no clause tying the site to us. Moving to another developer next year is not made hard on purpose.',
    category: 'support',
  },
  {
    question: 'Do you handle maintenance after the site launches?',
    answer:
      'The first 30 days cover bug fixes and training questions at no extra charge. After that, an optional monthly plan covers content updates, dependency upgrades and performance monitoring. It stays optional: a static Next.js build does not rot the way an unmaintained plugin stack does.',
    category: 'support',
  },
];

export default function HoustonWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_houston_web_design_hero" />}
          eyebrow={'WEB DESIGN · HOUSTON, TX'}
          headline={'A Web Design Company Houston Businesses Can Get a Straight Answer From'}
          lead={
            'Fixed scope, fixed price, and a Starter site live in 7 days. Built in Next.js with schema, analytics and local search set up before launch, not sold to you afterwards. Spanish handled as real indexable pages, not a translate widget.'
          }
          trustItems={['Fixed-price quote after one call', '7-day Starter delivery', 'You own the codebase']}
          extraCta={<WhatsAppCTA city="Houston" variant="light" />}
          rightSlot={
            <img
              src="/images/us/houston-web-design/hero.webp"
              alt="Two people reviewing a new website layout on a wall-mounted screen in a bright downtown office overlooking a city skyline."
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
              What does a web design company in Houston actually do?
            </h2>
            <p
              data-speakable
              className="mt-4 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80"
            >
              A web design company in Houston plans your site structure, designs the pages, shapes
              the copy, builds it and launches it. The good ones also set up analytics, schema
              markup and page speed, and handle Spanish or other languages properly. FactoryJet
              ships a five-page Starter site in seven days and hands you the code.
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
          headline={'What Houston businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'HOUSTON MARKET'}
          headline={'Houston Is Four Different Markets Inside One City'}
          leadParagraphs={[
            'Most cities have one dominant buyer type. Houston has four, and they behave nothing alike: a procurement team prequalifying an oilfield supplier, a patient picking a clinic on a phone, a freight broker reading capability pages, a restaurant found through maps. One template cannot serve all four, and most rebuilds we take on here are sites that tried.',
            'The other thing that makes Houston different is language. The City of Houston states that Greater Houston is the most ethnically diverse metropolitan area in the United States, that at least 145 languages are spoken by residents, and that 90 nations keep consular representation here. For many local businesses a Spanish version is not a nice-to-have, it is a second front door, and done properly it is a second set of indexable pages that rank on their own.',
          ]}
          stats={[
            {
              value: '145+',
              label: 'Languages spoken by Houston residents',
              sourceUrl: 'https://www.houstontx.gov/abouthouston/houstonfacts.html',
              sourceLabel: 'City of Houston, Facts and Figures',
            },
            {
              value: '120,000+',
              label: 'People employed inside the Texas Medical Center',
              sourceUrl: 'https://www.tmc.edu/about-tmc/',
              sourceLabel: 'Texas Medical Center, About TMC',
            },
            {
              value: '2,000+',
              label: 'Acres in the Energy Corridor District along I-10',
              sourceUrl: 'https://www.energycorridor.org/about/',
              sourceLabel: 'The Energy Corridor District',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE ACTUALLY BUYING'}
          headline={'A Website Is a Sales Asset, Not a Design Deliverable'}
          lead={
            'Most quotes you will get in Houston cover the visual design and the build. Ours covers those plus the three things that decide whether the site earns anything: structure, speed, and being readable by the machines that now answer your customers’ questions.'
          }
          body={
            <>
              <p>
                Structure means every service gets a real page instead of an accordion on the
                homepage, and those pages link to each other in a way that tells search engines what
                you do. Most rebuilds we take on in Houston fail here first: the site looks fine and
                ranks for nothing, because there is one page of substance on it.
              </p>
              <p>
                Speed is not a vanity number. It is the difference between someone on a phone in a
                parking lot off the Katy Freeway waiting for your page and going back to the
                results. We build static Next.js pages served from Cloudflare&apos;s edge network,
                so nothing sits between the click and the content. It also means the site keeps
                serving normally during a storm week when your office does not.
              </p>
              <p>
                Machine readability is the newest part of the job and the part almost nobody quotes
                for. We ship JSON-LD schema on every page, keep the answer to each page&apos;s main
                question in plain text near the top, and check that GPTBot, ClaudeBot and
                PerplexityBot can crawl the site. That decides whether you appear when someone asks
                an AI assistant for a recommendation. Full detail sits on the{' '}
                <Link href="/services/web-design/" className="font-medium text-[#B23E13] underline underline-offset-4">
                  web design service page
                </Link>
                .
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/houston-web-design/process.webp"
              alt="Three people sketching website wireframes on large paper sheets around a studio table, with a laptop showing a store layout."
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
            <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
              8 Things to Check Before You Hire a Web Design Company in Houston
            </h2>
            <p className="mt-4 max-w-[62ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
              Run every shortlisted firm through this, including us. Any of them should be able to
              answer all eight in one call.
            </p>

            <ol className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  n: '01',
                  t: 'Ask what platform they build on, and why',
                  d: 'WordPress, Webflow, Shopify and Next.js are all defensible answers. "We handle that" is not. The platform decides your maintenance load, your hosting bill and how easily you can leave.',
                },
                {
                  n: '02',
                  t: 'Load one of their live client sites on your own phone',
                  d: 'Not the case study page. The real site, on cellular, away from wifi. If text takes more than a couple of seconds to appear, yours will do the same.',
                },
                {
                  n: '03',
                  t: 'Get the scope in writing before the deposit',
                  d: 'Page count, revision rounds, who writes the copy, who sources photography, what counts as out of scope. Most disputes trace back to copy nobody agreed to write.',
                },
                {
                  n: '04',
                  t: 'Ask how they would handle a Spanish version',
                  d: 'The right answer involves separate URLs and hreflang tags. If the answer is a translate widget, the second language will never rank, because there is no page to index.',
                },
                {
                  n: '05',
                  t: 'Confirm you own the code and the design files',
                  d: 'Ask directly: on the last day, what do I receive? The answer should include a repository and a design file, not a login to something you rent forever.',
                },
                {
                  n: '06',
                  t: 'Check whether search work is included or upsold',
                  d: 'Schema markup, meta structure, internal linking and Search Console setup belong in the build. As a separate monthly line item, you are paying twice for one job.',
                },
                {
                  n: '07',
                  t: 'Ask how the site handles AI search',
                  d: 'AI assistants answer a growing share of "who should I hire" questions. Ask whether their builds are crawlable by GPTBot, ClaudeBot and PerplexityBot, and whether they ship structured data.',
                },
                {
                  n: '08',
                  t: 'Agree what happens after launch',
                  d: 'How long is the support window, what does it cover, and what does month two involve? A firm that has thought about this answers without hesitating.',
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
                'One 30-minute call. We agree who the site is for and which services get their own page. You leave with a sitemap and a fixed quote.',
            },
            {
              number: '02',
              title: 'Design',
              description:
                'Wireframes first, then a full design system in Figma with mobile layouts. Two revision rounds on Starter, three on Growth. Nothing gets built until you sign off.',
            },
            {
              number: '03',
              title: 'Build',
              description:
                'Static Next.js, forms wired to your inbox and CRM, CMS connected if the tier includes one. Performance budgets enforced from the first commit, not patched at the end.',
            },
            {
              number: '04',
              title: 'Content and search',
              description:
                'Copy, compressed WebP images, meta structure, JSON-LD schema, internal links, and a Google Business Profile check for your Houston location. Second-language pages get hreflang.',
            },
            {
              number: '05',
              title: 'Launch and handover',
              description:
                'Deploy to Cloudflare, DNS and SSL, GA4 connected, then a recorded walkthrough of the CMS. 30 days of support follows for fixes and training.',
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
                Get a fixed quote for your Houston project
              </h2>
              <p className="mt-3 max-w-[52ch] font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/75">
                One call, one number, and a sitemap you can take to another agency if you decide we
                are not the right fit. No discovery fee.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroInlineForm region="us" source="us_houston_web_design_mid" />
            </div>
          </div>
        </section>

        {/* ── Houston districts: the un-copyable local part ───────────────── */}
        <section className="bg-fj-cream py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-3 font-fj-mono text-xs uppercase tracking-[0.14em] text-[#B23E13]">
                Where our Houston clients trade
              </p>
              <h2 className="max-w-[24ch] font-fj-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-fj-ink">
                Same City, Six Districts, Six Completely Different Websites
              </h2>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.65] text-fj-ink/80">
                Houston sprawls, and the sprawl is the point. The nine-county metro covers an area
                larger than New Jersey, so the district a business trades in tells you more about
                what its website has to do than its industry code does.
              </p>
              <ul className="mt-6 space-y-3 font-fj-body text-[0.9375rem] leading-[1.6] text-fj-ink/80">
                <li>
                  <strong className="text-fj-ink">Energy Corridor.</strong> More than 2,000 acres
                  along I-10 west. Buyers here are procurement and vendor-qualification teams who
                  want capability pages, certification detail, and a quote form worth routing.
                </li>
                <li>
                  <strong className="text-fj-ink">Texas Medical Center.</strong> Practices, device
                  vendors and staffing firms around the largest medical complex in the world.
                  Privacy-aware forms that never invite patient detail, and provider pages that name
                  the clinic.
                </li>
                <li>
                  <strong className="text-fj-ink">Downtown, Galleria and Uptown.</strong> Law,
                  finance, energy trading, consulting. The site is the credential check that happens
                  before anyone replies to your email. Depth beats decoration.
                </li>
                <li>
                  <strong className="text-fj-ink">The Heights, Montrose and Midtown.</strong>{' '}
                  Independent retail, food and studios. Mobile-first, fast, and tied tightly to
                  Google Business Profile, hours and maps results.
                </li>
                <li>
                  <strong className="text-fj-ink">Ship Channel and the east side.</strong> Freight,
                  fabrication, chemicals and industrial services, selling to buyers who read
                  specification pages and download documents. Nobody converts on a hero video.
                </li>
                <li>
                  <strong className="text-fj-ink">Sugar Land, Katy and the suburbs.</strong> Home
                  services, clinics and multi-location retail. Local pack visibility and genuinely
                  different service-area pages do the work here.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/us/houston-web-design/industry.webp"
                alt="A site manager in a high-visibility vest and a colleague reviewing project photos on a tablet in an industrial site office."
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />
              <p className="mt-3 font-fj-body text-sm leading-[1.6] text-fj-ink/70">
                Industrial and energy buyers rarely convert on a homepage. They land on a capability
                page from a search, check whether you fit their scope, then send the link to someone
                else. Build for that path.
              </p>
            </div>
          </div>
        </section>

        <IndustriesGrid
          variant="cards"
          eyebrow={'HOUSTON × WEB DESIGN'}
          headline={'Built for the Industries Houston Actually Runs On'}
          lead={
            'Energy, healthcare, aerospace, logistics and the trades that serve all three. Each one buys differently, and the difference shows up in page structure long before it shows up in the visual design.'
          }
          sectors={[
            {
              name: 'Energy, oilfield services and petrochemicals',
              description:
                'Operators, service companies and fabricators concentrated in the Energy Corridor and along the Ship Channel. Buyers are procurement teams running prequalification, so the site needs real capability pages, certification and safety detail, downloadable specification documents, and a quote form that captures scope.',
              example: 'Service and supply firms selling into operators along I-10 and the channel.',
            },
            {
              name: 'Healthcare and life sciences',
              description:
                'The Texas Medical Center employs more than 120,000 people and handles roughly 10 million patient encounters a year, which anchors a deep layer of private practices, specialist clinics, device vendors and staffing firms. These builds need privacy-aware forms, plain service navigation and location pages that name the clinic.',
              example: 'Practices and vendors working in and around the TMC campus.',
            },
            {
              name: 'Aerospace and advanced manufacturing',
              description:
                'The Clear Lake corridor around NASA Johnson Space Center supports a supplier base doing precision manufacturing, testing and engineering services. Some technical detail cannot be published openly, so the site has to prove capability without publishing drawings: process pages, accreditation, and a gated path for the rest.',
              example: 'Suppliers and engineering firms in the Clear Lake and Bay Area corridor.',
            },
            {
              name: 'Logistics, freight and distribution',
              description:
                'Port Houston, the rail network and the interstate crossings make this one of the busiest freight markets in the country. Buyers compare on lane coverage, equipment, compliance and response time. Clear service pages beat a slideshow, and a quote form asking the right five questions beats a phone number alone.',
              example: 'Brokers, carriers, warehousing and drayage firms serving the port.',
            },
            {
              name: 'Home services and the trades',
              description:
                'HVAC, roofing, plumbing, electrical, restoration and remodelling across a metro where demand spikes hard after storms. These builds live on mobile speed, click-to-call, service-area pages that are genuinely different from each other, and Google Business Profile alignment. A slow site costs most here.',
              example: 'Multi-truck operators covering Houston plus Katy, Sugar Land and Pearland.',
            },
            {
              name: 'Bilingual and community-facing businesses',
              description:
                'Clinics, legal practices, restaurants, insurance agents and trades serving customers who search in Spanish, Vietnamese or Mandarin first. Real multilingual builds mean separate indexable URLs, hreflang tags, correct lang attributes and translated schema, not a widget that swaps text after load.',
              example: 'Neighbourhood businesses across Alief, Gulfton, Bellaire and the east side.',
            },
          ]}
        />

        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={'Why a Houston Business Would Pick Us Over a Local Studio'}
          lead={
            'Houston has genuinely good agencies. 71Three has done high-end custom design here for over a decade. OWDT works at enterprise scale with analytics and brand systems. Creative HTX serves small businesses across design, SEO and print. If you want a partner in the room every week, hire one of them.\n\nWe are built for a different situation: you know roughly what you need, you want it fixed-scope and fixed-price, live in days rather than quarters, and owned outright.\n\nThe discipline is the same either way. Static Next.js instead of a plugin stack. Schema and analytics shipped with the build rather than sold after it. A recorded handover so your own team can run the site. And no clause that makes leaving expensive.'
          }
          pillars={[
            {
              title: 'Fixed before you commit',
              body: 'Scope, price and timeline agreed on the first call. No paid discovery phase, no quote that arrives three weeks later with a range on it.',
            },
            {
              title: 'Fast because of how we build',
              body: 'A 7-day Starter works because the design system, component library and deploy pipeline already exist. Speed comes from reuse, not from cutting the search work.',
            },
            {
              title: 'Yours on day one',
              body: 'The repository and the design file are handed over at launch. No proprietary builder, no hosting lock-in, no licence that expires if you stop paying us.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'HONEST COMPARISON'}
          headline={'How We Sit Next to the Other Houston Web Design Companies'}
          lead={
            'These firms rank on page one for "web design company Houston" today. Every claim below comes from what each company publishes about itself, checked in August 2026. We have put ourselves in the list, and we are not the right answer for every row in it.'
          }
          columns={[
            { label: 'What they are good at' },
            { label: 'Where FactoryJet differs', isFactoryJet: true },
          ]}
          rows={[
            {
              feature: 'FactoryJet',
              values: [
                'Fixed-scope, fixed-price builds in Next.js with schema, analytics, AI-crawler checks and proper multilingual URLs included. 7-day Starter delivery.',
                'We are a remote AI-native team, not a Houston office you can walk into. If weekly in-person meetings matter, pick a local studio.',
              ],
            },
            {
              feature: '71Three',
              values: [
                'Award-winning Houston agency with more than a decade in the market, positioned around high-end custom design backed by market research and content strategy.',
                'They sell a premium bespoke process. We sell a fixed, repeatable one. If the brand demands a bespoke visual system, start with them.',
              ],
            },
            {
              feature: 'OWDT',
              values: [
                'Enterprise-grade capability: design systems, GA4 and attribution work, technical and e-commerce SEO, plus brand strategy and visual identity systems.',
                'Their portfolio runs to large institutions and global brands. If you need a full measurement and brand programme, that depth is real.',
              ],
            },
            {
              feature: 'Creative HTX',
              values: [
                'Small-business studio bundling web design, SEO, graphic design and print production with one provider, and around fifteen years of creative consulting behind it.',
                'They cover print and identity in house. We would bring in a local designer for print, and focus on the site and its search foundation.',
              ],
            },
            {
              feature: 'Web Theory Designs',
              values: [
                'Houston team since 2016 covering web design, SEO, paid ads and ongoing WordPress maintenance, with coverage across Austin, Dallas and San Antonio too.',
                'WordPress versus static Next.js is the real fork. Theirs is easier to find local help for. Ours is faster with no plugin maintenance load.',
              ],
            },
            {
              feature: 'Clutch, Yelp and the r/houston thread',
              values: [
                'Three of the top twelve results for this search are directories or a forum thread. They are genuinely useful for building a shortlist and reading unfiltered opinions.',
                'Directory placement is influenced by reviews and paid profiles, so treat a listing as a starting point, then run every name through the eight checks above.',
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
            'Every project is quoted as a single fixed figure after one discovery call. What moves the number is page count, how many systems the site connects to, and how custom the design work is. Starter ships in 7 days, and no tier requires a retainer.'
          }
          tiers={[
            {
              priceRange: 'Fixed-price',
              name: 'Starter',
              description:
                'A five-page site that loads fast on a phone and ranks for your name and core service. Right for single-location Houston businesses that need credibility now.',
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
                'A 10 to 15 page site with a blog CMS, lead capture and analytics wired in from day one. Right for firms that want the site to generate enquiries, not just exist.',
              features: [
                '10 to 15 pages with blog CMS',
                'Local SEO and GA4 tracking',
                'Optional Spanish pages with hreflang',
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
                'Custom Next.js build with commerce, AI features or API integrations. Right for established Houston businesses where the site is a real revenue line.',
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
          headline={'Questions Houston Businesses Ask Us'}
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

        <WebDesignCityLinksUS currentCity="houston" />

        <FinalCTA
          variant="light"
          eyebrow={'READY WHEN YOU ARE'}
          headline={'Get Your Houston Website Scoped This Week'}
          sub={
            'One 30-minute call gets you a sitemap and a fixed number. If we are not the right fit, keep the sitemap and take it to whoever is. Starter builds ship in 7 days from the day your content lands.'
          }
          primaryCta={{ label: 'Start Your Project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="Houston" variant="light" />}
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
          { '@type': 'City', name: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
          { '@type': 'AdministrativeArea', name: 'Greater Houston metropolitan area' },
        ],
        priceRange: 'Fixed-price, quoted per project',
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Web Design Houston',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
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
          { '@type': 'ListItem', position: 3, name: 'Houston', item: URL },
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
