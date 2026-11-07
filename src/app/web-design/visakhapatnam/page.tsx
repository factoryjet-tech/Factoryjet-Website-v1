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
  title: 'Web Design Company in Visakhapatnam | FactoryJet',
  description:
    'Web design company in Visakhapatnam for Rushikonda IT firms, port, steel and pharma suppliers, and Vizag hotels. Custom Next.js sites, 7-day delivery.',
  keywords: [
    'web design company in Visakhapatnam',
    'website design Visakhapatnam',
    'web design company Vizag',
    'website design Vizag',
    'web development company Visakhapatnam',
    'website design company Visakhapatnam',
    'professional website design Visakhapatnam',
    'web design Rushikonda IT SEZ',
    'web design Madhurawada',
    'IT company website design Visakhapatnam',
    'web design agency Vizag',
    'Next.js web development Visakhapatnam',
    'web design Andhra Pradesh',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Visakhapatnam | FactoryJet',
    description:
      'Web design company in Visakhapatnam building Next.js sites with SEO and GA4 set up. 7-day delivery for Vizag IT, industrial and tourism businesses.',
    url: 'https://factoryjet.com/web-design/visakhapatnam',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet website design work for Visakhapatnam businesses',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Visakhapatnam | FactoryJet',
    description:
      'Web design company in Visakhapatnam (Vizag). Next.js build, SEO and GA4 set up, 7-day delivery.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/visakhapatnam',
    languages: webDesignCityAlternatesIN['visakhapatnam'],
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
  '@id': 'https://factoryjet.com/web-design/visakhapatnam#webpage',
  url: 'https://factoryjet.com/web-design/visakhapatnam',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const VIZAG_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Pinning down the buyer',
    description:
      "We work out who decides whether to contact you. In Vizag that might be a shipping line checking a port agent, a steel plant buyer reviewing a supplier, a pharma importer vetting a Parawada maker, an overseas client sizing up a Rushikonda IT firm, or a family booking a beach stay. We study the rivals they will compare and settle the page list and copy plan.: Days 1–2",
  },
  {
    number: '02',
    title: 'Layouts for small screens first',
    description:
      'Figma layouts start at phone width and scale up to desktop. You review every form, button and block against the goal of the page and approve the design before coding starts.: Days 3–4',
  },
  {
    number: '03',
    title: 'Engineering the pages',
    description:
      'We code in Next.js and serve the site through Cloudflare, so it opens in under 1.5 seconds on Indian 4G. Enquiry forms, WhatsApp, catalogues or booking tools and your existing software are connected at this stage, with page weight tested as we go.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy, images and search basics',
    description:
      'Copy is edited, photos become WebP, and every page gets a title, meta text, schema and internal links. We submit the sitemap to Search Console and use Vizag and Visakhapatnam place names where people actually search with them.: Day 6–7',
  },
  {
    number: '05',
    title: 'Going live',
    description:
      'Your domain points to Cloudflare, GA4 and Tag Manager start recording, and Search Console is verified. A recorded walkthrough lets your staff manage the site, and thirty days of fixes after launch are included.: Day 7+',
  },
];

const VIZAG_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Visakhapatnam Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const VIZAG_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Visakhapatnam business?',
    answer:
      "Each quote is built for the job. Number of pages, competition for your search terms, and extras such as payments, bookings or AI tools shape the figure. After a free call you get one fixed written quote, and you own the code once it is paid.",
  },
  {
    category: 'pricing',
    question: 'How soon can my site be live?',
    answer:
      'Seven days after kickoff. We research and plan on days one and two, design and code on days three to six, and finish copy, search setup and launch on day seven. Timing starts when your logo, photos and text reach us.',
  },
  {
    category: 'pricing',
    question: 'Why hire FactoryJet instead of a Vizag web agency?',
    answer:
      "You speak directly with the designers and engineers on your project. Every site gets a Figma design, Next.js code and a Lighthouse test before launch. The fee is fixed in writing at the start and does not creep up.",
  },
  {
    category: 'pricing',
    question: 'What does the 7-day delivery promise cover?',
    answer:
      'The parts we control: design, build, copy and launch. Days spent waiting for your material or approval are not counted. We have launched 97% of all our projects on time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What is in a standard build?",
    answer:
      'Research, a Figma design, Next.js code, core copy, search setup with schema and sitemap, GA4 tracking and thirty days of post-launch support. The complete codebase goes into your own GitHub account at launch.',
  },
  {
    category: 'included',
    question: 'Will you write the words on my site?',
    answer:
      'We write the main copy: headlines, the hero section and service descriptions. In-depth SEO articles cost extra. A content brief reaches you before coding so you know what to supply.',
  },
  {
    category: 'included',
    question: 'Do you host the site?',
    answer:
      "We publish to Cloudflare Pages, free for most business sites. You hold the Cloudflare account and we set it up for you. There is no monthly hosting charge from us.",
  },
  {
    category: 'included',
    question: 'Can I edit the website myself?',
    answer:
      'Yes. Growth and Custom projects include a headless CMS, Sanity or Contentful, so staff can change text and images with no code.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my site appear on Google for Vizag searches?',
    answer:
      'Every build ships with schema, page titles and meta text, green Core Web Vitals on mobile, internal links, a submitted sitemap and WebP images. Searches for your company name usually return the site within one to two weeks.',
  },
  {
    category: 'technical',
    question: 'Which stack do you use?',
    answer:
      "Next.js on Cloudflare's worldwide CDN. Pages open in under 1.5 seconds on Indian 4G, where typical WordPress sites need 4–6 seconds. Google measures this through Core Web Vitals, and faster pages gain in rankings.",
  },
  {
    category: 'technical',
    question: 'Is the site built for mobile visitors?',
    answer:
      'Yes. We design at 375px wide first, and no build launches without Lighthouse 90+ and green Core Web Vitals on mobile. Images are served as WebP from Cloudflare and load as the visitor scrolls.',
  },
  {
    category: 'technical',
    question: 'Do you connect GA4 and Search Console?',
    answer:
      'Yes. GA4 and Tag Manager go live before launch and record form sends, WhatsApp taps and enquiry clicks from day one. Search Console is verified and the sitemap submitted.',
  },

  /* ── Visakhapatnam Local ── */
  {
    category: 'local',
    question: 'Do you build websites for IT firms in Rushikonda and Madhurawada?',
    answer:
      "Yes. Rushikonda's IT parks and the Madhurawada area hold most of Vizag's software, BPO and startup firms. Google's announced AI investment has put more attention on the city, so these firms need sites with clear services, case studies and a contact route that works for buyers in other cities and countries.",
  },
  {
    category: 'local',
    question: 'Can you build sites for refinery, steel and industrial suppliers in Vizag?',
    answer:
      "Yes. HPCL's Visakh refinery, RINL's Vizag Steel Plant and the industrial estates around Gajuwaka and Autonagar buy from a large supplier base. Those suppliers need pages for products, approvals, safety records and certificates, plus a simple RFQ form a purchase officer can use.",
  },
  {
    category: 'local',
    question: "Do you know Vizag's business areas well enough to write about them?",
    answer:
      "Local research is part of every project. In Vizag that covers the IT parks at Rushikonda, growth in Madhurawada, industry around Gajuwaka and the steel plant, shops and offices in Dwaraka Nagar and MVP Colony, and hotels along Beach Road. Using the right area names in copy and schema helps pages match local searches.",
  },
  {
    category: 'local',
    question: 'How do you compare with Vizag web agencies?',
    answer:
      "Agencies often quote long timelines and keep prices private. We send a fixed quote before you commit, write the 7-day launch date into the agreement and build on Next.js instead of WordPress. You get a faster site, launched sooner, with code you own.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the site once it is built?',
    answer:
      'Fully. The Next.js code moves to your GitHub on launch day, with every Figma file and login. You sign no retainer and depend on no closed platform.',
  },
  {
    category: 'support',
    question: 'What help is there after launch?',
    answer:
      'Bug fixes and small edits are free for thirty days. Beyond that, a monthly plan is available with code changes, same-day replies on bugs and one engineer assigned to your site.',
  },
  {
    category: 'support',
    question: 'What happens if the site has a problem?',
    answer:
      'Bugs found in the first thirty days are fixed free, usually within 24 hours. The site runs as static files on Cloudflare, so typical server outages do not touch it.',
  },
  {
    category: 'support',
    question: 'Can Vizag businesses keep you on retainer?',
    answer:
      'Yes. A retainer pays for code work, text changes, new landing pages, search work and upkeep each month. Retainer clients go to the front of the queue and keep the same engineer.',
  },
  {
    category: 'support',
    question: 'How should Vizag businesses respond to the AI investment news?',
    answer:
      "Google's announced AI investment, shown in the figure above from the state government, is drawing attention to the city. Hotels, restaurants, clinics, schools and service firms that want to reach newcomers should make sure they can be found and booked online. We build sites that load fast, rank for local searches and turn visits into calls or bookings.",
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Visakhapatnam?',
    answer:
      'Put every Vizag agency on your list, FactoryJet included, through three checks. Open live sites they built. Run the speed tests yourself. Get a written price that cannot rise halfway through. We build custom sites in 7 days at a fixed price and are happy to be checked that way.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Visakhapatnam or use an agency?',
    answer:
      'A freelancer suits a one-page site. A business site with forms, tracking, search setup and future support needs a few different skills, and a small team covers them at a fixed price. If you hire web designer in Visakhapatnam as a freelancer, write down the scope and fee before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VIZAG_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const VIZAG_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Hyderabad/Vizag Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/Squarespace)' },
] as const;

const VIZAG_COMPARISON_ROWS = [
  {
    feature: 'Time to launch',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Bespoke Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Built in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search setup included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and Tag Manager configured',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed written price',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Codebase in your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Launch in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="aa" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/visakhapatnam#howto`,
  name: `How FactoryJet launches a Visakhapatnam website in 7 days`,
  description: `Our seven-day sequence for designing, coding and launching a website for a Vizag business.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 | Intro call',
      text: `We learn how you sell, who your buyers are in Vizag and beyond, and what the site needs to achieve.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 | Sitemap and search terms',
      text: `We plan the pages, review the Vizag competitors your buyers will see, pick target keywords and draft first copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 | Designs',
      text: 'Homepage and inner page designs reach you on a preview link. We apply your changes within a day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 | Code and search setup',
      text: `Approved designs become fast, phone-first code. Visakhapatnam schema is added and Analytics and Search Console are connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 | Live',
      text: 'We test on five devices and launch, then send handover notes and run a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/visakhapatnam#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/visakhapatnam`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function VisakhapatnamWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="vizag-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="vizag-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Visakhapatnam', url: 'https://factoryjet.com/web-design/visakhapatnam' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Visakhapatnam', url: 'https://factoryjet.com/web-design/visakhapatnam' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_visakhapatnam_hero" />}
          eyebrow="WEB DESIGN · VISAKHAPATNAM"
          headline="Website Design in Visakhapatnam for IT Firms, Port and Industrial Suppliers, and Coastal Tourism"
          lead="Vizag earns its money from the sea, the steel plant, the refinery and a growing IT belt. The port moves cargo for Andhra Pradesh and beyond. Rushikonda's IT parks sell services worldwide. Beach Road and Araku bring in tourists, and Google's announced AI investment has put the city in the news. FactoryJet designs in Figma, builds in Next.js and launches in 7 days, with the code handed over to you."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses across India, the US, the UK and the UAE use a FactoryJet site" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="Shopify stores, B2B suppliers and DTC brands in India, the US, the UK and the UAE run on sites we built. Each project gets a fixed price, a 7-day delivery date and full code handover."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="VISAKHAPATNAM MARKET"
          headline="What Vizag Buyers Check Before They Get in Touch"
          leadParagraphs={[
            "Visakhapatnam is Andhra Pradesh's largest city and its main industrial centre. Google has announced a large AI investment in the city, which the state government values at the ₹85,000 Cr figure shown below. Big announcements take years to play out, but they bring new companies, staff and visitors who search online before they buy.",
            "The base is already wide. HPCL's Visakh refinery, RINL's Vizag Steel Plant, Hindustan Shipyard and the Eastern Naval Command all sit here, and the pharma cluster at Parawada makes medicines for export. The port ranks among India's major cargo ports. Rushikonda and Madhurawada hold the city's IT and BPO firms, and NASSCOM tracks fast growth in tech hiring.",
            "So Vizag firms face very different buyers. A port agent needs shipping lines to trust it. A steel plant supplier must pass a purchase department review. A Rushikonda software firm competes with Hyderabad and Bengaluru vendors. A Beach Road hotel needs bookings from a phone. We plan each site around the buyer who decides.",
          ]}
          stats={[
            {
              value: '₹85,000 Cr',
              label: "Google AI investment announced for Visakhapatnam, as reported by the state government",
              sourceUrl: 'https://www.ap.gov.in/',
              sourceLabel: 'Government of Andhra Pradesh',
            },
            {
              value: '50%+',
              label: 'Growth in Visakhapatnam IT hiring, one of India\'s quicker-growing tech job markets',
              sourceUrl: 'https://www.nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: 'Top 5',
              label: "Where Visakhapatnam Port sits among India's major ports by cargo handled",
              sourceUrl: 'https://www.vpa.gov.in/',
              sourceLabel: 'Visakhapatnam Port Authority',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · VISAKHAPATNAM"
          headline="What a Visakhapatnam Business Needs From Its Website"
          lead="Vizag firms sell to industrial buyers, IT clients, shipping lines and tourists. Each group asks different questions before it calls, so each needs a different site plan."
          body={
            <>
              <p>
                
                Refinery and steel plant suppliers, port service firms, Parawada pharma makers and engineering units sell to purchase teams who check vendors carefully. Those buyers look for capability, safety records, approvals, certificates and a clear way to request a quote. We build these sites around product or service pages, a credentials section and an RFQ form.
              </p>
              <p>
                
                IT and software firms in Rushikonda and Madhurawada compete with vendors in larger cities, so their sites must show services, case studies and delivery strength from the first screen. Hotels, restaurants, clinics, shops and professional firms serve local customers and visitors, and they need quick mobile pages with booking, ordering or call buttons that work on any phone.
              </p>
              <p>
                
                Each Vizag project includes research, Figma design, Next.js code, search setup, GA4 and thirty days of support. You keep the code, the design files and every account.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  
                  Three buyer groups. Three site plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Industrial & B2B',
                    need: 'Approvals + RFQ form + safety records',
                    area: 'Gajuwaka · Steel Plant · Port Area · Pharma',
                    colour: '#F05A28',
                  },
                  {
                    type: 'IT & Tech Companies',
                    need: 'Case studies + service pages + contact route',
                    area: 'Rushikonda IT SEZ · Madhurawada · Vizag Tech Park',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'Consumer & Hospitality',
                    need: 'Fast mobile + photos + booking button',
                    area: 'Beach Road · MVP Colony · Tourism Strip',
                    colour: '#6B6B6B',
                  },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: row.colour }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {row.type}
                      </p>
                    </div>
                    <p
                      className="font-fj-body text-fj-neutral-500 mb-1"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {row.need}
                    </p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                    >
                      {row.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  
                  One build standard. Plan fitted to the buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Visakhapatnam Businesses Pick FactoryJet"
          lead="Agencies often quote long schedules and keep prices private. We send a fixed quote before you commit, write the 7-day launch into the agreement and build on Next.js. You get faster pages, no monthly plugin costs and code that belongs to you."
          pillars={[
            {
              icon: '⚡',
              title: 'A launch date we sign',
              body: "Suppliers need a site before a vendor registration, hotels before the winter tourist season, and IT firms before the next client pitch. A fourteen-week build misses those windows. We put the 7-day launch date in writing, and 97% of our projects have launched on time.",
            },
            {
              icon: '🏗️',
              title: 'Pre-built pages on Next.js',
              body: 'WordPress runs PHP and 40–60 database queries each time a page opens. Next.js serves finished files from Cloudflare\'s network. That means under 1.5 seconds on Indian 4G versus 4–6 seconds for a typical WordPress site, and Google scores the difference in Core Web Vitals.',
            },
            {
              icon: '📋',
              title: 'Your price, fixed up front',
              body: "We quote a fixed price before you sign. No discovery fee, no loose estimate. Scope and cost are written down, and no extra invoice appears after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Your Vizag Website in Seven Days"
          lead="Buyer first, phone layout second, code third. Search setup and analytics are live before launch day."
          stages={VIZAG_JOURNEY_STAGES}
          closingNote="5 STEPS · 7 DAYS · NEXT.JS ON CLOUDFLARE · GA4 AT LAUNCH · CUTOVER WITH NO DOWNTIME"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Two builds from our recent projects."
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Mumbai trade distributor of artificial plants and flowers, flower runners, home décor and LED lighting. We delivered a B2B quote-to-cash store on Commerceflo with tiered trade pricing, quotes that turn into orders and ordering by account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'MEP drafting and BIM consultancy. We rebuilt their site on WordPress so clients can check credentials, browse the project portfolio and send an enquiry, backed by technical SEO aimed at B2B project leads.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet Next to a Hyderabad or Vizag Agency, a Freelancer and a DIY Builder"
          lead="Visakhapatnam businesses usually pick one of four routes to a new site. The table compares launch time, cost, quality checks and what you keep at the end."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to a live site, with Figma design, Next.js code, search setup and a Lighthouse test included.',
          }}
          columns={VIZAG_COMPARISON_COLUMNS}
          rows={VIZAG_COMPARISON_ROWS}
          footer="Every FactoryJet scope can be priced as a fixed contract. Start with a free call and receive a written quote."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="VISAKHAPATNAM × WEB DESIGN"
          headline="Websites for Visakhapatnam's Main Industries"
          lead="Rushikonda IT firms, refinery and steel plant suppliers, port agents, Parawada pharma makers, shipyard and naval suppliers, and Beach Road hotels all sell to different buyers. Each sector gets its own site plan."
          sectors={[
            {
              name: 'IT & AI Tech Companies',
              description:
                "Rushikonda's IT parks and the Madhurawada belt hold Vizag's software firms, BPO centres and startups. Google's announced AI investment has drawn more attention to the city's tech sector. Firms here need service pages, case studies, delivery models and a contact path suited to long B2B deals with clients in other cities and abroad.",
              example:
                'IT service firms, software companies, BPO units and startups in Rushikonda and Madhurawada selling to companies and government buyers.',
            },
            {
              name: 'Petrochemicals & Refining',
              description:
                "HPCL's Visakh refinery anchors a cluster of fuel, petrochemical and specialty chemical businesses in the Gajuwaka and Malkapuram area. Their buyers ask for specification sheets, safety and environmental approvals and certifications. We build product catalogues with downloadable documents and a direct procurement contact form.",
              example:
                'Petrochemical makers, refinery contractors and specialty chemical firms around Gajuwaka and Malkapuram.',
            },
            {
              name: 'Steel & Manufacturing',
              description:
                "RINL's Vizag Steel Plant supports a wide circle of suppliers, fabricators, equipment makers and transport firms around the steel plant township and Autonagar. Purchase teams want to see capacity, quality certificates and supply history before shortlisting a vendor, so these sites lead with exactly that.",
              example:
                'Suppliers, fabricators, equipment makers and raw material traders working with Vizag Steel and other plants in the region.',
            },
            {
              name: 'Port & Shipping Logistics',
              description:
                "Visakhapatnam Port handles container, bulk and liquid cargo for Andhra Pradesh and states inland, and the nearby Gangavaram port adds more capacity. Shipping agents, forwarders, customs brokers and stevedores need pages listing services, cargo types, licences and a quick quote form for cargo owners and shipping lines.",
              example:
                'Shipping agents, freight forwarders, customs brokers and port service firms working at the Visakhapatnam and Gangavaram ports.',
            },
            {
              name: 'Pharmaceuticals & Life Sciences',
              description:
                "The pharma city at Parawada hosts many drug and API makers, part of Andhra Pradesh's wider pharma strength. Buyers in India and abroad want GMP and regulatory approvals, product lists and documents before they send an enquiry. We build compliant product pages, document libraries and B2B enquiry routes.",
              example:
                'Drug makers, API producers and contract research firms in and around the Parawada pharma cluster selling to Indian and overseas buyers.',
            },
            {
              name: 'Tourism & Hospitality',
              description:
                "RK Beach, Rushikonda beach, Kailasagiri and the road up to Araku Valley make Vizag a busy coastal destination. Hotels, resorts, restaurants and tour operators need mobile pages, strong photos, room or package details, a booking form and pages for the trips visitors search for.",
              example:
                'Hotels, beach resorts, restaurants, Araku tour operators and hospitality firms along Beach Road and the Rushikonda coast.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on what changed after launch"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions Vizag Owners Ask Us"
          lead="Plain answers to what Visakhapatnam businesses ask on our first call."
          categories={VIZAG_FAQ_CATEGORIES}
          items={VIZAG_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Start Your Visakhapatnam Website This Week"
          sub="Vizag's IT firms, plant suppliers, port agents and hotels all compete for the same buyer searches, and the city's profile is rising. An outdated site sends those buyers elsewhere. Book a call today and get a page plan within 72 hours."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js build. Every file handed to you at launch."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="visakhapatnam" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
