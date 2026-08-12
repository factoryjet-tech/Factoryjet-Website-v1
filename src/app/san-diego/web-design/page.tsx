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
import PricingTiers from '@/components/v2/PricingTiers';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import Link from 'next/link';

const PAGE_URL = 'https://factoryjet.com/san-diego/web-design';
const PAGE_TITLE = 'Web Design Company San Diego | Next.js Sites You Own | FactoryJet';
const PAGE_DESC =
  'A San Diego web design company building Next.js sites that load fast on a phone and get read properly by search and AI answer engines. You keep the code and the design files. Includes an honest comparison with the other San Diego agencies on this search.';
const DATE_MODIFIED = '2026-08-12';

/* External sources. Every URL below was fetched on 2026-08-12, returned 200,
   and the claim attached to it was confirmed present in the response body. */
const SOURCE_LCP = 'https://web.dev/articles/lcp';
const SOURCE_MOBILE_FIRST =
  'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing';
const SOURCE_SDMAC = 'https://www.sdmac.org/';
const SOURCE_BREWERS_GUILD = 'https://www.sdbeer.com/';

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
        alt: 'FactoryJet web design for San Diego businesses',
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
   San Diego districts. Every business fact here is publicly checkable:
   institution locations, headquarters cities and district names.
   ───────────────────────────────────────────────────────────────────────── */
const DISTRICTS: ReadonlyArray<{ area: string; who: string; job: string }> = [
  {
    area: 'Downtown and the Gaslamp Quarter',
    who: 'Hotels, restaurants, bars and event businesses packed around the convention centre and Petco Park.',
    job: 'Traffic spikes around convention weeks and Comic-Con, and arrives on a phone from a hotel lobby. Menu, hours, parking and a booking link, one tap from the homepage.',
  },
  {
    area: 'La Jolla and Torrey Pines',
    who: 'UC San Diego, Scripps Research and the Salk Institute, surrounded by medical practices, wealth managers and law firms.',
    job: 'Long consideration cycles. Buyers read credentials and team pages before they fill in anything, so the site has to survive slow, sceptical reading.',
  },
  {
    area: 'Sorrento Valley and Sorrento Mesa',
    who: 'The life sciences and wireless corridor. Qualcomm and Illumina are both headquartered in San Diego, with a dense layer of suppliers around them.',
    job: 'Technical buyers read spec pages before they take a call. Capability depth and a clean product taxonomy do more than any hero video.',
  },
  {
    area: 'Carlsbad and North County',
    who: 'The golf equipment cluster, where Callaway, TaylorMade and Cobra Puma Golf all keep their headquarters, alongside consumer brands and life sciences firms.',
    job: 'The most product-led corner of the county. Catalogue structure, product schema and a checkout that survives a mobile connection are the whole job.',
  },
  {
    area: 'Kearny Mesa and the Convoy District',
    who: 'One of the densest restaurant and retail corridors in the county, plus auto dealerships and import businesses.',
    job: 'Discovery starts in Google Maps, not your homepage. Real hours, real photos and a menu rendered as text rather than a PDF decide whether anyone drives over.',
  },
  {
    area: 'Miramar, North Park and the brewery belt',
    who: 'Taprooms, kitchens and event spaces. San Diego County has over 150 independent craft breweries.',
    job: 'Weekend intent, phone in hand, decision in under a minute. Tap list, address, parking, events. Anything past one scroll loses the visit.',
  },
  {
    area: 'Point Loma, National City and the waterfront',
    who: 'Naval Base San Diego is the principal homeport of the Pacific Fleet surface fleet, with a supply chain of ship repair and engineering firms around it.',
    job: 'Procurement teams check vendor sites before shortlisting. Capability statements, certifications and past performance beat visual polish every time.',
  },
];

/* The listicle section. */
const HIRING_CHECKLIST: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Who actually writes the code?',
    a: 'Ask for the name of the person building it, not the agency. Plenty of shops sell locally and subcontract the build. Not automatically bad, but know it before you sign.',
  },
  {
    q: 'What do I own when this is finished?',
    a: 'You want the repository, the design file and the analytics property in your own accounts. If the site lives on their proprietary platform, you are renting, and the rent has no ceiling.',
  },
  {
    q: 'Can I open a site you built, on my own phone?',
    a: 'Not a screenshot. A live URL, opened on cellular rather than office wifi. If it takes more than a few seconds to show something useful, that is what you are buying.',
  },
  {
    q: 'What is the scope, in writing, before any money moves?',
    a: 'A page list, an integration list, a revision count and a launch date. Anything vaguer becomes an argument in week six.',
  },
  {
    q: 'Who writes the content, and by when?',
    a: 'Most late projects are late because the copy never arrived. Establish whether they write it or you do, then put a date on it. This question saves more timelines than any tool.',
  },
  {
    q: 'How will the site actually be found?',
    a: 'A site with no search plan is an expensive business card. Ask about page structure, internal links, Google Business Profile and the structured data that lets AI answer engines quote you.',
  },
  {
    q: 'What happens the week after launch?',
    a: 'What the support window covers, how long it lasts, and who holds the domain and DNS. Handover is the part most agencies leave deliberately fuzzy.',
  },
  {
    q: 'Can my team change a headline without calling you?',
    a: 'If the answer involves raising a ticket, you have bought a dependency. You should be able to edit text, swap an image and publish a post without a developer.',
  },
  {
    q: 'Is the build accessible?',
    a: 'Keyboard navigation, real focus states, colour contrast that passes, alt text that means something. It protects real customers and it is cheap insurance.',
  },
  {
    q: 'What are you not good at?',
    a: 'Anyone who cannot answer is selling. Ours is further down this page. A firm that names its own limits is probably telling the truth about the rest of the pitch too.',
  },
];

const JOURNEY_STAGES = [
  {
    number: '01',
    title: 'Discovery call',
    description:
      'Thirty minutes on what you sell, who buys it and what is currently in the way. You leave with a written page list whether or not you hire us.',
  },
  {
    number: '02',
    title: 'Scope and sitemap',
    description:
      'Page list, integrations, a content owner per page and a launch date, agreed in writing before design starts.',
  },
  {
    number: '03',
    title: 'Design in Figma',
    description:
      'Mobile layouts first, because that is the version Google indexes. Comments go on the prototype, not into email threads.',
  },
  {
    number: '04',
    title: 'Build in Next.js',
    description:
      'Static pages, real image sizing, no plugin stack. Performance budgets are enforced from the first commit rather than tuned after launch.',
  },
  {
    number: '05',
    title: 'Search structure and launch',
    description:
      'Schema, internal links, sitemap, GA4 and Search Console. We deploy, check it on a real phone, and record the handover so your team can run it.',
  },
];

const INDUSTRY_SECTORS = [
  {
    name: 'Life sciences and biotech',
    description:
      'Instrument vendors, CROs and diagnostics firms around the Torrey Pines and Sorrento Valley campuses. Buyers arrive informed, so the effort goes into capability depth, product taxonomy and schema that makes each product a resolvable entity.',
    example: 'Sorrento Valley · Torrey Pines · UTC',
  },
  {
    name: 'Defence, maritime and government',
    description:
      'Ship repair, engineering services and component suppliers around Naval Base San Diego. Buyers check your site before shortlisting, so capability statements and past performance get their own pages.',
    example: 'Point Loma · National City · Barrio Logan',
  },
  {
    name: 'Hotels, restaurants and tourism',
    description:
      'Gaslamp restaurants, coastal hotels, tour operators and venues. Demand is mobile and seasonal, so we build for one-tap booking and a Google Business Profile that matches the site exactly.',
    example: 'Gaslamp · Mission Bay · Coronado',
  },
  {
    name: 'Craft brewing, food and drink',
    description:
      'Taprooms and small-batch producers across Miramar, North Park and North County. Tap lists change weekly, so the site has to be editable by whoever is behind the bar.',
    example: 'Miramar · North Park · Vista',
  },
  {
    name: 'Professional services',
    description:
      'Law firms, accountants, wealth managers and practices in La Jolla, downtown and Del Mar. These buyers read credentials carefully, so team and service pages are structured for slow reading.',
    example: 'La Jolla · Downtown · Del Mar',
  },
  {
    name: 'Ecommerce and consumer brands',
    description:
      'North County product companies selling direct and through retail. Catalogue structure, product schema and mobile checkout speed decide the revenue line, so that is where the build effort goes.',
    example: 'Carlsbad · Oceanside · Encinitas',
  },
];

/* Named from the live organic top 12 for "web design company san diego"
   (DataForSEO, 2026-08-12). Positioning is taken from each firm's own public
   page title and site positioning. Nothing here is assumed. */
const COMPARISON_ROWS = [
  {
    feature: 'StraightFire Marketing',
    values: [
      'Holds the top organic result. Positions on custom WordPress web design for San Diego.',
      'Next.js instead of WordPress, so there is no plugin stack to keep patched and the repository is yours.',
      'WordPress is a requirement and you want the firm already proven on this search.',
    ],
  },
  {
    feature: 'TinyFrog Technologies',
    values: [
      'Long-established San Diego shop with a large public review history, design and development together.',
      'We are newer here with a shorter local track record. We compete on delivery speed and structure for AI answers.',
      'A long local reference list and a big review count are what decide it for you.',
    ],
  },
  {
    feature: 'San Diego Web Studios',
    values: [
      'Positions on professional websites for established San Diego businesses.',
      'Same buyer, different handover. You leave with the code, the Figma file and analytics in your own accounts.',
      'You want a San Diego team you can sit down with in person.',
    ],
  },
  {
    feature: 'Mission Bay Media',
    values: [
      'Design and development under one roof for local businesses.',
      'Also one team end to end, with schema, GA4 and Search Console wired in before launch rather than after.',
      'You want a smaller local studio and value proximity over speed.',
    ],
  },
  {
    feature: 'Vimana Visual',
    values: [
      'Positions on affordable website design for businesses building their first real site.',
      'We do not compete on being cheapest. We agree a fixed scope up front and hold to it.',
      'Budget is the binding constraint and a simple brochure site is genuinely all you need.',
    ],
  },
  {
    feature: 'San Diego Web Design Co',
    values: [
      'Positions on website design for small businesses, the segment most of this search chases.',
      'Small business work too, with a seven day Starter build and no retainer attached to it.',
      'You want a local shop that does nothing but small business sites.',
    ],
  },
];

const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost and timeline' },
  { key: 'included', label: "What's included" },
  { key: 'choosing', label: 'Choosing a company' },
  { key: 'technical', label: 'Technical and AI' },
  { key: 'local', label: 'San Diego specifics' },
  { key: 'support', label: 'Ownership and support' },
];

const SD_FAQ_ITEMS = [
  {
    question: 'How much does a website cost for a small business in San Diego?',
    answer:
      'Three things drive it: page count, how many systems the site has to talk to, and whether copy and photography exist yet. A five page brochure site sits at the bottom of the range, a catalogue with checkout and a CRM connection several times that. We quote a fixed number after one call.',
    category: 'cost',
  },
  {
    question: 'How much do web design agencies charge?',
    answer:
      'Three models. Fixed scope, agreed before work starts. Hourly, where you carry the risk of a bad estimate. Monthly retainer, where the site is bundled with marketing. We use fixed scope: it is the only one where a slow week is our problem, not yours.',
    category: 'cost',
  },
  {
    question: 'What is a good hourly rate for website design?',
    answer:
      'The wrong thing to optimise. A slow designer at a low rate easily costs more than a fast one at a high rate, and hourly gives you no way to compare two quotes. Ask for a fixed number against a written page list instead.',
    category: 'cost',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A five page site with content ready takes about a week. Ten to fifteen pages with a CMS and lead capture runs two to three weeks. Catalogues are scoped individually. The clock starts when your content lands in the shared workspace, not when you sign.',
    category: 'cost',
  },
  {
    question: 'What does a web design company do?',
    answer:
      'Plans the site, designs it, builds it, launches it and hands it over. The planning gets skipped most and matters most: which pages exist, what each does, and who is reading. A good firm handles search structure, analytics and accessibility rather than selling them as extras.',
    category: 'included',
  },
  {
    question: 'What should a business website include?',
    answer:
      'What you do, who it is for, proof it works, and an obvious way to get in touch. Then the practical layer: real contact details, hours, location, privacy policy. Most small business sites fail on proof and on the contact path, not on looks.',
    category: 'included',
  },
  {
    question: 'How can I hire someone to design my website?',
    answer:
      'Write down what the site has to achieve in one sentence, and roughly how many pages you need. Send the same brief to three firms so the quotes are comparable. Ask each for a live URL you can open on your own phone.',
    category: 'choosing',
  },
  {
    question: 'What are common website red flags?',
    answer:
      'No written scope. A monthly fee with no line between hosting and the site. Refusing to hand over code or domain. Portfolio screenshots with no live URLs. Guaranteed rankings, which nobody can promise. And a proposal that never names who does the work.',
    category: 'choosing',
  },
  {
    question: 'What are the top 10 web design agencies in the USA?',
    answer:
      'There is no authoritative list. Most roundups are paid placements or written by an agency that put itself at number one. Clutch and Yelp are useful for reading raw reviews, not as rankings. Judge on live sites, references, and what you own at the end.',
    category: 'choosing',
  },
  {
    question: 'Is it better to build your own website or use a website builder?',
    answer:
      'If you are testing an idea and need a page this week, use a builder. Move to a custom build when the site carries real revenue, or when speed and search structure start costing you money. Going custom too early is a common, expensive mistake.',
    category: 'choosing',
  },
  {
    question: 'What is the 3 second rule in web design?',
    answer:
      'Shorthand for the claim that visitors leave if a page takes over three seconds. The number moves depending on who cites it, so treat it as a direction, not a law. The measurable version is Largest Contentful Paint: Google states a good score is 2.5 seconds or less.',
    category: 'technical',
  },
  {
    question: 'Is AI replacing web design?',
    answer:
      'It has replaced parts of it. Layout scaffolding, first-draft copy and image work are far faster than two years ago, and we use those tools daily. Not automated: deciding what a business should say, structuring it so a stranger understands, and being accountable when something breaks.',
    category: 'technical',
  },
  {
    question: 'Can ChatGPT actually create a website?',
    answer:
      'It can produce working code for a page, and for a simple one-pager that may be enough. It falls short on everything around the code: hosting, domains, forms that actually deliver mail, analytics, accessibility. Generating is the easy part now. Operating is not.',
    category: 'technical',
  },
  {
    question: 'Which is better, web designing or web development?',
    answer:
      'Two halves of one job. Design decides what it looks like and how it behaves, development makes it real and fast. Splitting them across two vendors is fine on a large project and usually creates handover friction on a small one.',
    category: 'technical',
  },
  {
    question: 'Do you work with life sciences companies in Sorrento Valley or Torrey Pines?',
    answer:
      'Yes, and the build looks different from a typical service site. Technical buyers arrive informed, so the work goes into capability depth, product taxonomy and schema that makes each product an entity a search engine can resolve. Polish matters less than being findable and precise.',
    category: 'local',
  },
  {
    question: 'We run a taproom in North Park. What does a brewery website actually need?',
    answer:
      'Four things, fast, on a phone: what is on tap now, where you are, when you are open, and what is on this weekend. It also has to be editable by whoever is behind the bar, because a stale tap list is worse than none.',
    category: 'local',
  },
  {
    question: 'We supply the Navy. Does our website matter for procurement?',
    answer:
      'More than most subcontractors expect. Primes and government buyers look you up before they shortlist. Put your capability statement, certifications, NAICS codes and past performance on their own pages rather than inside a downloadable file, so a search engine can read them too.',
    category: 'local',
  },
  {
    question: 'Do you build sites for Gaslamp Quarter restaurants and hotels?',
    answer:
      'Yes. Downtown hospitality traffic is mobile, impatient and spikes around convention weeks. Build priorities are one-tap reservations, a menu rendered as real text rather than a PDF, fast images, and a Google Business Profile that matches the site exactly.',
    category: 'local',
  },
  {
    question: 'How does FactoryJet compare to San Diego agencies like TinyFrog or StraightFire Marketing?',
    answer:
      'Both are credible and both hold page one for this search, which we do not. They build primarily on WordPress. We build in Next.js, fix scope before work starts, and hand over the repository. The table above sets out where each is the better call.',
    category: 'local',
  },
  {
    question: 'You are not headquartered in San Diego. Why should I hire you?',
    answer:
      'Only if the trade is worth it. You give up sitting in a room together. You get a faster build, a stack with no monthly plugin maintenance, and full ownership at the end. If in-person matters more, the table above names local firms and we mean it.',
    category: 'local',
  },
  {
    question: 'Do you handle Google Business Profile and local SEO for San Diego?',
    answer:
      'Yes, and for a business with premises it often matters more than the site, because Maps results sit above the organic ones. We align your profile, categories and service areas with the site content, then structure pages around what San Diego actually searches for.',
    category: 'local',
  },
  {
    question: 'Who owns the code and design files when the project is done?',
    answer:
      'You do. Repository, Figma file, domain, hosting account and analytics property all sit in your name. No licence fee, no clause tying the site to us. If you move to another developer next year, nothing in our contract stands in the way.',
    category: 'support',
  },
  {
    question: 'Do you handle website maintenance after launch?',
    answer:
      'The support window after launch covers bugs and training questions at no extra charge. After that, ongoing care is a separate arrangement covering content updates, dependency upgrades and performance monitoring. It is optional, and plenty of clients run the site themselves.',
    category: 'support',
  },
  {
    question: 'Is web design still worth it in 2026?',
    answer:
      'Yes, and the reason has changed. It used to be about looking credible. Now the site is also the source AI answer engines read when someone asks them for a recommendation. If your information is not on a page a machine can parse, you are absent from that conversation.',
    category: 'support',
  },
];

export default function SanDiegoWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_san_diego_web_design_hero" />}
          eyebrow={'WEB DESIGN · SAN DIEGO'}
          headline={'A San Diego Web Design Company Built for Speed, Search and Handover'}
          lead={
            'Google indexes the mobile version of your site, not the desktop one. We build Next.js websites for San Diego businesses that load fast on a phone, are structured so search engines and AI answer engines can read them, and arrive with the code and the design files already in your hands.'
          }
          trustItems={[
            'Next.js, not a page builder',
            'You own the code and the Figma',
            'Fixed scope agreed before we start',
          ]}
          extraCta={<WhatsAppCTA city="San Diego" variant="light" />}
          rightSlot={
            <img
              src="/images/us/san-diego-web-design/hero-studio.webp"
              alt="Two designers reviewing a website layout on a large monitor in a bright coastal San Diego studio, palm trees visible through the window behind them"
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
                  What a web design company in San Diego does
                </Heading>
              </div>
              <div className="lg:col-span-7">
                <p
                  data-speakable
                  className="font-fj-body text-[1.125rem] leading-[1.65] text-fj-ink"
                >
                  A web design company plans, designs, builds and launches your website, then keeps
                  it fast and findable. FactoryJet does that for San Diego businesses in Next.js:
                  mobile-first pages, structured data, analytics and local search wired in from day
                  one. Starter sites ship in seven days, scope is fixed before work starts, and you
                  own the code at the end.
                </p>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                  Below: the county district by district, ten questions to ask any firm before you
                  sign, a straight comparison with the San Diego agencies ranking for this search,
                  and where we are the wrong choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, and UAE" />

        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline={'What San Diego businesses get on every build.'}
        />

        <CityContextSection
          eyebrow={'SAN DIEGO MARKET'}
          headline={'San Diego Is Four Economies Sharing One Coastline'}
          leadParagraphs={[
            'Most city pages describe a place as though it had one kind of buyer. San Diego obviously does not. There is a life sciences economy on the mesas at Torrey Pines and Sorrento Valley, where Qualcomm and Illumina are headquartered and technical buyers read spec pages before they take a call. There is a defence and maritime economy around the bay, anchored by Naval Base San Diego, where procurement teams read your capability statement before they shortlist you. There is a visitor economy downtown and along the coast that spikes around convention weeks. And there is a food and drink economy across Miramar, North Park and North County, where the decision happens on a phone in under a minute.',
            'Those four buyers need genuinely different websites, which is what templates get wrong. A biotech supplier and a Gaslamp restaurant both need speed and share almost nothing else. The one thing that does not vary: Google uses the mobile version of your content for indexing and ranking, so the phone version is not a reduced copy of the real site. It is the real site.',
          ]}
          stats={[
            {
              value: '2.5s',
              label: "Google's threshold for a good Largest Contentful Paint, at the 75th percentile of loads",
              sourceUrl: SOURCE_LCP,
              sourceLabel: 'web.dev',
            },
            {
              value: '356,519',
              label: 'defence-related jobs in the San Diego region',
              sourceUrl: SOURCE_SDMAC,
              sourceLabel: 'San Diego Military Advisory Council',
            },
            {
              value: '150+',
              label: 'independent craft breweries in San Diego County',
              sourceUrl: SOURCE_BREWERS_GUILD,
              sourceLabel: 'San Diego Brewers Guild',
            },
          ]}
        />

        <ServiceExplanation
          eyebrow={'WHAT YOU ARE BUYING'}
          headline={'A Website Is Three Purchases Sold as One'}
          lead={
            'The thinking, the build, and everything that keeps it working afterwards. Most disappointing projects went wrong in the first of those, not the second.'
          }
          body={
            <>
              <p>
                The thinking is deciding which pages exist, what each has to do, and who is reading.
                For a Sorrento Valley instrument vendor that means product and application pages
                deep enough to answer a scientist. For a Kearny Mesa restaurant it means hours, menu
                and directions above everything else. Same craft, opposite output.
              </p>
              <p>
                The build is where the stack starts to matter. We use Next.js and ship static pages
                to Cloudflare rather than assembling a site out of page-builder plugins. Every
                plugin is a dependency somebody has to keep patched, and a site that gets slower
                each quarter is a cost you never agreed to. Google states a good Largest Contentful
                Paint is{' '}
                <a
                  href={SOURCE_LCP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B23E13] underline underline-offset-4"
                >
                  2.5 seconds or less at the 75th percentile
                </a>{' '}
                of loads, measured on the mobile version, because{' '}
                <a
                  href={SOURCE_MOBILE_FIRST}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B23E13] underline underline-offset-4"
                >
                  Google indexes the smartphone version of your content
                </a>
                .
              </p>
              <p>
                The third purchase is being found: page structure, internal links, a Google Business
                Profile that agrees with your site, and structured data so AI answer engines quote
                you accurately. It is part of every build here, not an upgrade sold afterwards. For
                the deeper version see our{' '}
                <Link href="/services/ai-seo/" className="text-[#B23E13] underline underline-offset-4">
                  AI SEO service
                </Link>
                , or run the free{' '}
                <Link
                  href="/ai-visibility-checker/"
                  className="text-[#B23E13] underline underline-offset-4"
                >
                  AI visibility check
                </Link>{' '}
                to see whether ChatGPT and Perplexity name your business at all today.
              </p>
            </>
          }
          rightSlot={
            <img
              src="/images/us/san-diego-web-design/process-table.webp"
              alt="A three person design team reviewing printed wireframe sketches around a table, with a laptop showing a simple image-led page layout"
              width={1264}
              height={848}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          }
        />

        {/* ── Districts ──────────────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20" aria-labelledby="districts-heading">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="fj-eyebrow">DISTRICT BY DISTRICT</p>
                <Heading as="h2" size="h3" id="districts-heading" className="mt-5 text-fj-ink">
                  San Diego Is Not One Market. It Is About Seven.
                </Heading>
                <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                  A taproom in North Park and a diagnostics company in Sorrento Valley are both
                  buying web design, and almost nothing about the two projects overlaps. We work out
                  which of these you are in before writing a page, because it changes the sitemap,
                  the copy and where the build effort goes.
                </p>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/us/san-diego-web-design/owner-phone.webp"
                  alt="A taproom owner holding a phone showing a simple mobile web page with a large photo and a short menu label"
                  width={1264}
                  height={848}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {DISTRICTS.map((d) => (
                <div key={d.area} className="rounded-2xl border border-fj-neutral-200 p-6 md:p-7">
                  <h3 className="fj-display text-[1.0625rem] font-semibold leading-snug text-fj-ink">
                    {d.area}
                  </h3>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-ink/70">
                    {d.who}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.7] text-fj-ink">
                    {d.job}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Listicle ───────────────────────────────────────────────────── */}
        <section className="bg-fj-cream py-14 md:py-20" aria-labelledby="checklist-heading">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="max-w-[760px]">
              <p className="fj-eyebrow">BEFORE YOU SIGN</p>
              <Heading as="h2" size="h3" id="checklist-heading" className="mt-5 text-fj-ink">
                10 Questions to Ask Any San Diego Web Design Company
              </Heading>
              <p className="mt-5 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                Ask us these. Ask the six firms in the comparison table the same ten. The answers
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
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream px-7 py-10 md:px-12 md:py-12">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Heading as="h2" size="h4" className="text-fj-ink">
                    Want the page list before you commit to anything?
                  </Heading>
                  <p className="mt-4 font-fj-body text-[1.0625rem] leading-[1.7] text-fj-ink/70">
                    Tell us what your business does and what the site has to achieve. You get back a
                    written page list and a fixed scope. No discovery fee, and the page list is
                    yours to keep even if you hire one of the other firms named here.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                  <ModalCTAButton
                    label="Get a scoped quote"
                    region="us"
                    btnVariant="primary-light"
                  />
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

        {/* ── The single dark section: honest self-disclosure ─────────────── */}
        <StrategicDarkSection
          eyebrow="STRAIGHT ANSWERS"
          headline={'Where We Fit in San Diego, and Where We Do Not'}
          lead={
            'We are the newest name on this page and we are not headquartered in San Diego. Both are real reasons to hire someone else, so they belong at the top rather than in a footnote.\n\nWe are good at one shape of project: a site that has to load fast on a phone, be structured properly for search and AI answers, and be handed over cleanly to a team that wants to run it themselves. We are not a branding studio, and not the right call if you want a design director in your office on Wednesdays. If that is the need, the table below names San Diego firms who do it.'
          }
          pillars={[
            {
              title: 'Best fit',
              body: 'You need the site live and working, you care about speed and being found, and you want to own everything at the end.',
            },
            {
              title: 'Poor fit',
              body: 'You want a brand identity built from scratch, weekly in-person workshops, or a WordPress site your team will extend with plugins for years.',
            },
            {
              title: 'How we decide',
              body: 'The first call is thirty minutes and diagnostic, not a pitch. If another firm fits better we say so on that call, not three weeks into a proposal.',
            },
          ]}
        />

        <ComparisonTable
          eyebrow={'THE OTHER OPTIONS'}
          headline={'The San Diego Agencies You Are Probably Also Looking At'}
          lead={
            'These six all rank on page one for this search. We do not, which is part of why this page exists. Three of the top twelve results are directories, not agencies, so read Yelp, Clutch and Upwork as raw review sources rather than rankings. The first column is each firm’s own public positioning.'
          }
          columns={[
            { label: 'Their public positioning' },
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'Pick them if' },
          ]}
          rows={COMPARISON_ROWS}
          footer={
            <>
              Organic results for &quot;web design company san diego&quot; sampled 12 August 2026.
              Rankings move. Open a live site from each shortlisted firm on your own phone rather
              than trusting any table, including this one.
            </>
          }
        />

        <ServiceJourneyRow
          eyebrow={'HOW IT RUNS'}
          headline={'How We Build Your San Diego Website'}
          lead={'Five stages, no mystery phases. You always know what happens next and what we need from you.'}
          stages={JOURNEY_STAGES}
          closingNote="Content is the usual reason a project slips, so every page gets an owner and a date before design starts."
        />

        <IndustriesGrid
          variant="cards"
          eyebrow={'SAN DIEGO × WEB DESIGN'}
          headline={'Built for the Industries San Diego Actually Runs On'}
          lead={
            'Six sectors, six different builds. The difference is not decoration, it is what goes on the first screen and how deep the information architecture has to go.'
          }
          sectors={INDUSTRY_SECTORS}
        />

        <PricingTiers
          eyebrow={'SCOPE TIERS'}
          headline={'Three Scopes, Quoted as a Fixed Number'}
          lead={
            'We do not publish figures, because a number without a page list is meaningless. We publish what sits in each tier instead, so you know which conversation you are having before you book. The fixed quote comes after that call, in writing, before anything starts.'
          }
          tiers={[
            {
              priceRange: 'Fixed scope',
              name: 'Starter',
              description:
                'Five pages that load fast on a phone and rank for your own name and core service. For sole traders and local services who need a credible presence quickly.',
              features: [
                '5 pages, mobile-first build',
                'Schema markup and Search Console setup',
                'Contact form with email delivery',
                '2 review rounds',
                'Ships in 7 days from content handover',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
            {
              priceRange: 'Fixed scope',
              name: 'Growth',
              description:
                'Ten to fifteen pages with a CMS, lead capture and analytics from day one. For businesses that need the site to generate qualified enquiries.',
              features: [
                '10–15 pages with a blog CMS',
                'Local search and Google Business Profile alignment',
                'Lead capture and email routing',
                '3 review rounds',
                'Recorded handover and training session',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
              popular: true,
            },
            {
              priceRange: 'Fixed scope',
              name: 'Scale',
              description:
                'Custom Next.js build with a catalogue, integrations or AI features. For businesses where the site carries a real revenue line.',
              features: [
                'Custom Next.js architecture',
                'Ecommerce, booking or membership features',
                'CRM and third-party API integrations',
                'AI search and content integrations',
                'Priority support and quarterly reviews',
              ],
              cta: { label: 'Get a quote', href: '/contact' },
            },
          ]}
          footnote="No retainer is required on any tier. Ongoing care is a separate arrangement you can decline."
        />

        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline={'Web Design Questions San Diego Businesses Actually Ask'}
          lead="Taken from what people genuinely type into Google around this search, answered without hedging."
          categories={FAQ_CATEGORIES}
          items={SD_FAQ_ITEMS}
        />

        {/* ── Related services ───────────────────────────────────────────── */}
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
                href="/services/seo/"
                className="rounded-full border border-[#B23E13] px-5 py-2 text-sm font-medium text-[#B23E13] transition-colors hover:bg-[#B23E13] hover:text-white"
              >
                SEO services
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

        <WebDesignCityLinksUS currentCity="san-diego" />

        <FinalCTA
          variant="light"
          eyebrow={'NEXT STEP'}
          headline={'Get a Written Page List for Your San Diego Site'}
          sub={
            'Tell us what your business does, who buys from you and what the site has to achieve. You get back a page list and a fixed scope you can hold us to, or hand to any of the other companies named on this page.'
          }
          primaryCta={{ label: 'Start a project', modal: true, region: 'us' }}
          extraCta={<WhatsAppCTA city="San Diego" variant="light" />}
          objectionHandler="Not ready to talk? Take the ten questions above and ask them of whoever you do hire."
        />

        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Schema. Every const declared here is rendered into a script tag below.
   FAQPage.mainEntity is derived from SD_FAQ_ITEMS, the same array the visible
   <FAQ /> renders. There is no second copy of the questions anywhere.
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
    isPartOf: { '@id': 'https://factoryjet.com/#organization' },
    about: { '@id': `${PAGE_URL}#service` },
    author: { '@id': 'https://factoryjet.com/#bhavesh-barot' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]', '[data-faq-answer]'],
    },
    citation: [SOURCE_LCP, SOURCE_MOBILE_FIRST, SOURCE_SDMAC, SOURCE_BREWERS_GUILD],
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
          name: 'San Diego',
          containedInPlace: { '@type': 'State', name: 'California' },
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
        name: 'Web Design San Diego',
        serviceType: 'Web design and website development',
        provider: {
          '@type': 'Organization',
          '@id': 'https://factoryjet.com/#organization',
          name: 'FactoryJet Technologies',
        },
        areaServed: { '@type': 'City', name: 'San Diego' },
        description:
          'Next.js website design and development for San Diego businesses, including schema markup, Google Business Profile alignment, analytics and full handover of code and design files.',
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: SD_FAQ_ITEMS.map((item) => ({
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
          { '@type': 'ListItem', position: 3, name: 'San Diego', item: PAGE_URL },
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
