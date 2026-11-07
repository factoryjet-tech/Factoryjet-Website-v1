import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';
import WebDesignCityLinksIN from '@/components/v2/WebDesignCityLinksIN';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Pune | FactoryJet',
  description:
    'Web design company in Pune for IT firms, auto suppliers, institutes and D2C brands. Next.js sites in 7 days with a fixed quote and your code at launch.',
  keywords: [
    'web design company in pune',
    'website development company in pune',
    'web designer in pune',
    'best website development company in pune',
    'top website development company in pune',
    'website development agency in pune',
    'web design Hinjewadi',
    'web design Koregaon Park',
    'Next.js web development Pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Pune | FactoryJet',
    description:
      'Web design company in Pune for Hinjewadi, Kharadi, Chakan and Baner businesses. Next.js build, SEO and GA4 set up, 7-day delivery.',
    url: 'https://factoryjet.com/web-design/pune',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Pune website design by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Pune | FactoryJet',
    description: 'Pune website design: fixed quote, 7-day delivery, Next.js build and code you own.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/pune',
    languages: webDesignCityAlternatesIN['pune'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const PAGE_MODIFIED = '2026-11-07';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/pune#webpage',
  url: 'https://factoryjet.com/web-design/pune',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  '@id': 'https://factoryjet.com/web-design/pune#localbusiness',
  name: 'FactoryJet | Website Design for Pune Businesses',
  image: 'https://factoryjet.com/images/services/web-design.webp',
  description:
    'Website design for Pune software houses, Chakan and PCMC component makers, coaching institutes and consumer brands. Next.js builds delivered in 7 days.',
  url: 'https://factoryjet.com/web-design/pune',
  email: 'connect@factoryjet.com',
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'City', name: 'Hinjewadi' },
  ],
  serviceType: 'Web Design and Development',
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Pune',
    itemListElement: [
      { '@type': 'Offer', name: 'Starter Website', description: '5-page business website, mobile-responsive, basic SEO, contact form.' },
      { '@type': 'Offer', name: 'Growth Website', description: '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.' },
      { '@type': 'Offer', name: 'Custom Website', description: 'Custom Next.js build with e-commerce, portals, booking systems, or AI integrations.' },
    ],
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://factoryjet.com/web-design/pune#howto',
  name: 'Pune website project: the seven-day build sequence',
  description: 'Each day of a FactoryJet website build for a Pune company, from first call to a live site.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Day 1 | First call', text: 'We hear how you sell, who signs off on purchases in your Pune market, and what the site has to make visitors do.' },
    { '@type': 'HowToStep', position: 2, name: 'Day 2 | Sitemap and search terms', text: 'We set the page list, look at the Pune rivals your buyers compare you with, pick target keywords and write draft copy.' },
    { '@type': 'HowToStep', position: 3, name: 'Days 3–4 | Screens', text: 'Figma screens for the home page and inner pages go to you as a preview link. Comments are folded in by the next day.' },
    { '@type': 'HowToStep', position: 4, name: 'Days 5–6 | Code and tracking', text: 'Approved screens become a mobile-first Next.js build. Pune area schema goes in, and GA4 and Search Console are connected.' },
    { '@type': 'HowToStep', position: 5, name: 'Day 7 | Live', text: 'Checks on five devices, launch, written handover notes and a 30-minute training call for your team.' },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/pune#webpage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2:first-of-type'] },
  url: 'https://factoryjet.com/web-design/pune',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const PUNE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Who buys, and what they check',
    description:
      "A purchase engineer at a Chakan plant, a US client shortlisting a Kharadi software vendor and a parent comparing coaching classes in Kothrud all read a site for different reasons. We pick the one that matters most to you, review three rival sites and fix the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Clickable Figma layouts',
    description:
      'We draw the 375px phone view before tablet and desktop. You test the prototype, mark changes on each screen and approve it. Development waits for that approval.: Days 3–4',
  },
  {
    number: '03',
    title: 'Next.js development',
    description:
      'Pages are pre-built in Next.js and served from Cloudflare, so they open in under 1.5 seconds on Indian 4G. This is where dealer logins, enquiry forms, WhatsApp, admission or booking tools and outside APIs get connected.: Days 5–6',
  },
  {
    number: '04',
    title: 'Search groundwork',
    description:
      'Copy is edited for search, images move to WebP, and every page gets its own title and meta. LocalBusiness and FAQPage schema, internal links and a submitted sitemap follow. Pune location targeting comes with the base build.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch and handover',
    description:
      'DNS points to Cloudflare, GA4 and Tag Manager are live and Search Console is verified. Your team gets a recorded walkthrough, and the next 30 days of fixes are covered.: Day 7+',
  },
];

const PUNE_FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Timeline' },
  { key: 'included', label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local', label: 'Pune Local' },
  { key: 'support', label: 'Support & Ownership' },
];

const PUNE_FAQ_ITEMS = [
  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What should a Pune business budget for a website?',
    answer:
      "We quote each job on its own. The number depends on page count, how hard your search terms are, and add-ons such as a dealer portal, online fees, a store or an AI chat assistant. A free call comes first, then a fixed written quote. You keep the code.",
  },
  {
    category: 'pricing',
    question: 'How many days until my Pune site is live?',
    answer:
      'Seven days from kickoff for a standard build. Research and structure fill days one and two, design and code fill days three to six, and day seven covers copy checks, SEO and launch. The count begins once your logo, images and text are in the shared folder.',
  },
  {
    category: 'pricing',
    question: 'Why not hire a large Pune agency instead?',
    answer:
      'Large agencies in Baner or Koregaon Park pay for account managers, planners and office space, and the quote carries that cost. FactoryJet is a small engineering team that does the design and code itself. You get Figma screens, a Next.js build and a pre-launch Lighthouse audit, and you pay for the work done.',
  },
  {
    category: 'pricing',
    question: 'What falls inside the 7-day delivery window?',
    answer:
      'It covers the part we control: design, development, content setup and launch. When approvals on your side run long, we agree a new start date in advance and count seven days from that date. We have delivered on time on 97% of all projects.',
  },
  /* ── What's Included ── */
  {
    category: 'included',
    question: 'What will I receive when the project ends?',
    answer:
      'A sitemap and plan, Figma screens, the Next.js site, first-draft copy, schema, meta and sitemap setup, GA4, and 30 days of support. The repository is moved to your GitHub at launch together with the design file and a recorded handover video.',
  },
  {
    category: 'included',
    question: 'Is copywriting part of the job?',
    answer:
      'Headlines, the hero section and short service text are part of every build. In-depth service pages, blogs and area pages cost extra. A content brief arrives before coding starts, so you know which material to send and which pages we draft.',
  },
  {
    category: 'included',
    question: 'Do I need to buy hosting?',
    answer:
      "No separate plan is needed for most sites. We publish to Cloudflare Pages, which is free for typical static Next.js builds, using a Cloudflare account registered to you. Your site is not sharing a slow server with hundreds of others, and we take no monthly hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my team change content later?',
    answer:
      'Yes. Growth and Custom builds include Sanity or Contentful, a headless CMS where your team edits text, adds posts and updates pages from a browser. We set it up and train you at handover. On Starter builds edits are simple file changes, and a CMS can be added if you ask.',
  },
  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can a new site rank for Pune searches?',
    answer:
      'The build includes schema, page-level titles and metas, Core Web Vitals passing on mobile, internal links, a sitemap sent to Search Console and WebP images with alt text. Your brand name usually ranks within 1–2 weeks. A term such as "web design company in Pune" usually needs 3–6 months on a new domain, and the setup to get there is already done.',
  },
  {
    category: 'technical',
    question: 'Which technology do you use, and does it matter for SEO?',
    answer:
      "We use Next.js on Cloudflare. Pages are generated ahead of time, so they arrive in under 1.5 seconds on Indian 4G with no server code running per visit. WordPress sites with many plugins build each page on request and run slower. Google scores that difference in Core Web Vitals.",
  },
  {
    category: 'technical',
    question: 'Will students and customers on phones get a good experience?',
    answer:
      'Yes. Design starts at 375px, and each build must reach Lighthouse 90+ with passing Core Web Vitals on mobile before we hand it over. Images are WebP and lazy-loaded, and tap targets are large. Most enquiries in Pune come from phones on mixed 4G, so that is where we test.',
  },
  {
    category: 'technical',
    question: 'Do you install GA4 and Search Console?',
    answer:
      'Yes. GA4 and Tag Manager are installed before launch, with form sends, WhatsApp taps and calls tracked as conversions from day one. Search Console is verified, the sitemap is submitted and we show you both during handover.',
  },
  /* ── Pune Local ── */
  {
    category: 'local',
    question: 'Do you build sites for software firms in Hinjewadi and Kharadi?',
    answer:
      "Yes. Software and SaaS firms in Hinjewadi, Kharadi and Wakad often sell to clients in the US and Europe who judge them on the website first. We build pages around service lines, case studies, delivery process and client logos, so an overseas buyer can shortlist you without a call.",
  },
  {
    category: 'local',
    question: 'Can you build for component makers in Chakan, Talegaon and Pimpri-Chinchwad?',
    answer:
      'Yes. Tier-1 and tier-2 suppliers need to show OEM buyers their processes, machines, approvals and part range. We build capability sites, product catalogues with datasheet downloads, RFQ forms and supplier portals, with technical SEO aimed at procurement searches.',
  },
  {
    category: 'local',
    question: 'Do you design for coaching classes, colleges and edtech in Pune?',
    answer:
      "Yes. Pune is called the Oxford of the East for its colleges and coaching classes. We build sites for JEE and NEET coaching, MBA prep, colleges and edtech platforms, with course pages, fee and batch details, and enquiry forms that feed admissions follow-up.",
  },
  {
    category: 'local',
    question: 'Will the copy name the Pune areas my customers search from?',
    answer:
      "Yes. During discovery we list the areas that matter for you: Hinjewadi, Kharadi and Magarpatta for software, Chakan and PCMC for manufacturing, and Koregaon Park, Kalyani Nagar, Baner and Aundh for retail and hospitality. Those names go into page copy and LocalBusiness schema, which helps searches that mention a locality.",
  },
  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Is the finished website fully mine?',
    answer:
      'Yes, all of it. The Next.js repository is transferred to your GitHub on launch day, with the Figma designs and every API key. You can move to another developer or host whenever you like. The site needs no FactoryJet contract to stay online.',
  },
  {
    category: 'support',
    question: 'What happens in the weeks after launch?',
    answer:
      'For 30 days after launch we fix bugs, make small changes and answer questions at no cost. After that, a monthly maintenance plan adds same-day priority on bugs, an engineer who knows your code and a quarterly speed and Core Web Vitals audit.',
  },
  {
    category: 'support',
    question: 'How are post-launch problems handled?',
    answer:
      'In the first 30 days, bugs are fixed free and usually within 24 hours. Later, a maintenance plan gives priority response. The site runs as static files on Cloudflare Pages, so server crashes, plugin conflicts and database errors are off the list of risks.',
  },
  {
    category: 'support',
    question: 'Is there a monthly plan for Pune clients?',
    answer:
      'Yes. A monthly plan covers new pages, content changes, SEO work, feature requests and upkeep. Plan clients are scheduled first, work with a named engineer and receive a quarterly report on site health.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'How can I find the best web design agency in Pune?',
    answer:
      'Test every website design company in Pune you shortlist the same way. Use two or three of their live sites on your own phone. Run those sites through PageSpeed Insights yourself. Ask for a fixed price in writing that will not rise halfway. FactoryJet builds custom sites in 7 days on a fixed price and is open to the same test.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Pune directly or work with a team?',
    answer:
      'A freelancer suits a one-page job. A business site needs design, development, SEO and support, which a small senior team covers for one fixed price. If you hire web designer in Pune yourself, agree the scope, dates and fee in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PUNE_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const PUNE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Pune Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const PUNE_COMPARISON_ROWS = [
  { feature: 'Time from brief to launch', values: ['7 days', '6–16 weeks', '3–8 weeks (unreliable)', '1–2 weeks (you build it)'] },
  {
    feature: 'Figma design made for you',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="yes" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Next.js codebase',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Schema and metadata done',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Lighthouse 90+ on a phone',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'GA4 and Tag Manager live',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Written price up front',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="no" />, <CompareIcon key="fr" kind="partial" />, <CompareIcon key="tp" kind="yes" />],
  },
  {
    feature: 'Repository moved to you',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="partial" />, <CompareIcon key="fr" kind="yes" />, <CompareIcon key="tp" kind="no" />],
  },
  {
    feature: 'Live within seven days',
    values: [<CompareIcon key="fj" kind="yes" />, <CompareIcon key="pa" kind="no" />, <CompareIcon key="fr" kind="no" />, <CompareIcon key="tp" kind="no" />],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function PuneWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="pune-local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="pune-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Pune', url: 'https://factoryjet.com/web-design/pune' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Pune', url: 'https://factoryjet.com/web-design/pune' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_pune_hero" />}
          eyebrow="WEB DESIGN · PUNE"
          headline="Website Design in Pune for Software Firms, Auto Suppliers and Institutes"
          lead="Pune sells software to the world, makes parts for carmakers in Chakan and Pimpri-Chinchwad, and teaches students from across India. Each of those buyers checks a website for something different. FactoryJet designs in Figma, builds on Next.js, launches in 7 days and hands over the full code."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={['Designed in Figma', '7-day delivery', '500+ businesses built']}
          rightSlot={<HeroBrowserMockup badgeCity="Pune" />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ companies in India, the US, the UK and the UAE run sites we built" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Our builds range from Pune engineering firms to UK service brands and US Shopify stores. Every project gets a fixed price, a 7-day delivery date and a handover where the code moves into the client's own GitHub."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="PUNE MARKET"
          headline="Software, Car Parts and Classrooms: Pune's Three Engines"
          leadParagraphs={[
            "Pune runs on three industries. Software firms fill the Rajiv Gandhi Infotech Park at Hinjewadi and the parks at Kharadi and Magarpatta. Carmakers, two-wheeler makers and their suppliers work out of Chakan, Talegaon, Bhosari and Pimpri-Chinchwad. Colleges, universities and coaching classes earned the city its Oxford of the East name.",
            "These buyers want different things from a website. An OEM purchase team wants machine lists, quality approvals and a part range. A client abroad hiring a software vendor wants case studies and delivery process. A student wants batch timings and fees on a phone screen. We decide which of these the site serves before drawing a single screen.",
            "Pune buyers often meet you on the website before anyone speaks to you. A slow or dated site loses that buyer quietly. A quick site that answers their questions gets the call.",
          ]}
          stats={[
            {
              value: '#2',
              label: "Pune's rank among India's IT export cities, behind Bangalore",
              sourceUrl: 'https://stpi.in/',
              sourceLabel: 'STPI',
            },
            {
              value: '200+',
              label: 'Engineering and management colleges in the Pune area',
              sourceUrl: 'https://www.aicte-india.org/',
              sourceLabel: 'AICTE',
            },
            {
              value: '₹5.5L Cr',
              label: "Estimated output of the Pune metro economy",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION (two buyer types) ─────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · PUNE"
          headline="Long Sales Cycles and Quick Decisions in the Same City"
          lead="Some Pune buyers take months and involve a committee. Others pick a class or a café on a phone in seconds. We plan the site around the buyer you sell to."
          body={
            <>
              <p>
                Software companies in Hinjewadi and Kharadi and component makers in Chakan and PCMC
                sell to careful buyers. A client in Germany or an OEM vendor-development team
                will check certifications, process maturity, case studies and client names before
                replying to you. We build these sites around evidence: capability pages,
                datasheet downloads, quality approvals and an RFQ form that collects what your
                sales engineer needs to quote.
              </p>
              <p>
                Coaching classes, cafés, boutiques and consumer brands in Koregaon Park, Baner,
                Aundh and Kalyani Nagar meet people who decide fast. A student or shopper lands
                from Instagram or Maps, and the page has to open in under 1.5 seconds on 4G,
                show the course or product at once and put the enquiry button under the thumb.
                We design at 375px first and hold every build to Lighthouse 90+ before launch.
              </p>
              <p>
                Both kinds of Pune project include discovery, Figma screens, Next.js code, SEO,
                GA4 and 30 days of support. Code, design files and accounts all stay in your
                name after launch.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p className="font-fj-mono font-medium uppercase text-fj-neutral-400" style={{ fontSize: '11px', letterSpacing: '0.14em' }}>
                  Pune buyer groups
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { type: 'Software / Auto / B2B', need: 'Evidence, specs and an RFQ', area: 'Hinjewadi · Kharadi · Chakan · PCMC', colour: '#F05A28' },
                  { type: 'Students / Shoppers', need: 'Quick load, phone screens, one button', area: 'Koregaon Park · Baner · Aundh', colour: '#0F0F12' },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.colour }} aria-hidden="true" />
                      <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>{row.type}</p>
                    </div>
                    <p className="font-fj-body text-fj-neutral-500 mb-1" style={{ fontSize: '0.875rem' }}>{row.need}</p>
                    <p className="font-fj-mono font-medium text-fj-neutral-400" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{row.area}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p className="fj-display font-semibold text-fj-ink" style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  One code standard, planned around the buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Pune Clients Get From FactoryJet"
          lead="A fixed quote comes before any commitment. The launch date is written into the agreement. The site is built on Next.js, so there are no plugins to update, and the code belongs to you from day one."
          pillars={[
            {
              icon: '⚡',
              title: 'Seven days, agreed in writing',
              body: "Admission seasons, trade shows and client pitches all run on fixed dates. A site that takes four months misses them. We commit to 7 days in the agreement. We have delivered on time on 97% of all projects.",
            },
            {
              icon: '🏗️',
              title: 'Pre-built pages, quick on 4G',
              body: 'WordPress normally runs PHP and dozens of database queries for each page view. Next.js prepares pages in advance and Cloudflare serves them as static files. On Indian 4G that is under 1.5 seconds compared with the 4–6 seconds typical of WordPress, and Core Web Vitals reward the faster site.',
            },
            {
              icon: '📋',
              title: 'A price that holds',
              body: "You see the full price before you sign, and it only changes if the scope changes. No paid discovery stage, no extra bill after launch and no retainer needed to keep the site live.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Brief to a Live Pune Site in Seven Days"
          lead="Buyer and page plan first, phone screens approved second, search and tracking set before launch."
          stages={PUNE_JOURNEY_STAGES}
          closingNote="PLAN · DESIGN · CODE · SEARCH SETUP · GO LIVE · SEVEN DAYS"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Recent builds for Indian B2B companies"
          cards={[
            {
              industry: 'MEP / BIM Consulting · Pune',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts is a Pune firm doing MEP drafting and BIM consulting. We rebuilt its website on WordPress around B2B project enquiries, with credentials up front, a project portfolio and technical SEO for engineering searches.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                'Belle Maison is a Mumbai wholesaler of artificial plants, flowers, flower runners, home décor and LED lighting. We built its Commerceflo B2B store: trade price tiers per buyer, quotes that convert into orders, and ordering from a customer account.',
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="Pune Agency, Freelancer, Template or FactoryJet"
          lead="The four common routes to a website in Pune, compared on speed, scope and what you keep once the site is live."
          pullQuote={{
            stat: '7 days',
            caption: 'is our brief-to-launch time, and it still includes Figma screens, Next.js code, schema and a Lighthouse audit.',
          }}
          columns={PUNE_COMPARISON_COLUMNS}
          rows={PUNE_COMPARISON_ROWS}
          footer="Every scope is priced as a fixed amount. One free call, then the written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="PUNE × WEB DESIGN"
          headline="Pune Industries We Build Websites For"
          lead="Software houses, component makers, institutes, MSMEs, restaurants and advisers each need a different kind of site in Pune."
          sectors={[
            {
              name: 'Software & SaaS',
              description: 'Sites for service companies and product teams in Hinjewadi, Kharadi and Wakad that show service lines, case studies and delivery process to overseas buyers.',
              example: 'Software exporters and SaaS startups bidding for work from US and European clients.',
            },
            {
              name: 'Auto Components & Engineering',
              description: 'Capability sites, product catalogues and supplier portals for component makers in Chakan, Talegaon and PCMC who sell to vehicle makers.',
              example: 'Tier-1 and tier-2 part suppliers and machine shops between Bhosari and Chakan.',
            },
            {
              name: 'Coaching, Colleges & EdTech',
              description: 'Course pages, batch and fee details, and enquiry forms for institutes that recruit students from Pune and across Maharashtra.',
              example: 'JEE and NEET coaching, MBA prep classes, private colleges and online learning platforms.',
            },
            {
              name: 'MSME Manufacturing',
              description: 'Straightforward sites for PCMC workshops and small exporters, with product ranges, certifications and search pages that procurement buyers can find.',
              example: 'Fabricators, tooling units and small exporters across Pimpri-Chinchwad and the Pune MIDC estates.',
            },
            {
              name: 'Cafés, Lifestyle & D2C',
              description: 'Phone-first sites for restaurants, boutiques and direct-to-consumer brands in Koregaon Park, Kalyani Nagar and Viman Nagar.',
              example: 'Restaurants, fashion labels and wellness brands in Pune\'s eastern suburbs.',
            },
            {
              name: 'CA, Legal & Advisory',
              description: 'Clear practice pages, partner profiles and booking forms for chartered accountants, lawyers, HR consultants and advisers working with Pune companies.',
              example: 'CA and CS practices, company law firms, management consultants and HR agencies.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection eyebrow="CLIENT RESULTS" headline="Clients on their FactoryJet build" region="in" />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions Pune Clients Ask Before Starting"
          lead="Cost, timing, hosting, code ownership and Pune-specific questions, answered in plain terms."
          categories={PUNE_FAQ_CATEGORIES}
          items={PUNE_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Get Your Pune Website Started"
          sub="Share your brief and we will send a page plan within 72 hours, then a fixed quote. Seven days after kickoff the site can be live, quick on a phone and ready for Google to crawl."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed quote, 7-day delivery, Next.js, and the full code in your GitHub at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="pune" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
