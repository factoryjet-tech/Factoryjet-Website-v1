import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
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
  title: 'Web Design Company in Rajkot | FactoryJet',
  description:
    'Web design company in Rajkot for engineering, pump, casting and auto part makers. RFQ-ready Next.js sites, fixed quote, 7-day delivery.',
  keywords: [
    'web design company in Rajkot',
    'website design Rajkot',
    'web development Rajkot',
    'Rajkot website designer',
    'ecommerce website Rajkot',
    'web design for auto parts companies Rajkot',
    'MSME website design Rajkot',
    'engineering company website Rajkot',
    'GIDC Metoda business website',
    'Shapar Veraval industrial website',
    'web design agency Rajkot',
    'casting foundry website Rajkot',
    'pump valve manufacturer website Rajkot',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Rajkot | FactoryJet',
    description:
      "Web design company in Rajkot for Metoda, Shapar-Veraval and Aji manufacturers. Product catalogues, RFQ forms, GA4 and SEO set up. 7-day delivery.",
    url: 'https://factoryjet.com/web-design/rajkot',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Website design for Rajkot engineering firms by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Rajkot | FactoryJet',
    description:
      "Web design in Rajkot for engineering and auto part exporters. Live in 7 days.",
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/rajkot',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/rajkot',
      'x-default': 'https://factoryjet.com/web-design/rajkot',
    },
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
  '@id': 'https://factoryjet.com/web-design/rajkot#webpage',
  url: 'https://factoryjet.com/web-design/rajkot',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const RJT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Who buys your parts',
    description:
      "We start with the buyer. An overseas OEM sourcing forgings, an Indian distributor buying submersible pumps and a family shopping for gold on Soni Bazaar each want different pages. We look at rival Rajkot units online and agree the page list.: Days 1–2",
  },
  {
    number: '02',
    title: 'Phone-first layouts',
    description:
      'Figma layouts begin at phone size, then widen to desktop. The RFQ form, the drawing upload field and the product grid get placed and reviewed first. You approve before we write code.: Days 3–4',
  },
  {
    number: '03',
    title: 'Build',
    description:
      "We code the site in Next.js and host it on Cloudflare. WhatsApp, enquiry forms, PDF catalogue downloads and any ERP or CRM link you need are wired in, with page weight checked on every change.: Days 5–6",
  },
  {
    number: '04',
    title: 'Search setup',
    description:
      'Copy edited for export buyers, images converted to WebP, schema for your company and FAQs added, sitemap filed in Search Console. Pages are mapped to the part names and grades buyers type into Google.: Day 6–7',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Domain moved to Cloudflare, GA4 and Tag Manager running, Search Console checked. We record a walkthrough so your office staff can update products, and fix anything that breaks for 30 days.: Day 7+',
  },
];

const RJT_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Rajkot Industry' },
  { key: 'support',   label: 'Support & Ownership' },
];

const RJT_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How is a website priced for a Rajkot manufacturer?',
    answer:
      "By scope. A capability site with twenty product pages costs less than one with a dealer portal or online ordering. We hold a free call, then send one fixed number for the agreed work. You own the code once it is paid for.",
  },
  {
    category: 'pricing',
    question: 'How fast can my site go live?',
    answer:
      'Seven days from kickoff. The clock starts once we have your logo, product photos, catalogue and certificates. Planning and layout take two days, design sign-off and coding take four, and launch happens on day seven.',
  },
  {
    category: 'pricing',
    question: 'Why choose FactoryJet over a web agency in Rajkot?',
    answer:
      "You deal directly with the designers and engineers building your site. There is no account manager layer, the quote is fixed before work starts, and the same design, code and Lighthouse checks apply to every project size.",
  },
  {
    category: 'pricing',
    question: 'What is covered by the 7-day delivery?',
    answer:
      'Everything we control: design, coding, copy edits and going live. If content from your side arrives late, the date moves by the same number of days. On all our projects so far, 97% were delivered on time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What comes with every build?",
    answer:
      'Planning, a Figma design, the Next.js build, short copy, schema, meta tags and sitemap, GA4 tracking and 30 days of fixes. On launch day the source code goes into a GitHub repository that you own.',
  },
  {
    category: 'included',
    question: 'Can you write product copy for engineering parts?',
    answer:
      'Headlines, intros and short product blurbs are included. Detailed export copy for castings, bearings, pumps or machine parts is an add-on. Before building we send a list of what we need from you, such as drawings, grades and test certificates.',
  },
  {
    category: 'included',
    question: 'Where will the website be hosted?',
    answer:
      "On Cloudflare Pages, in an account registered to you. Most company sites fit the free plan. We handle the setup and charge no monthly hosting fee.",
  },
  {
    category: 'included',
    question: 'Can my team add new products later?',
    answer:
      'Yes. Growth and Custom tier builds include Sanity or Contentful, so staff can add products, upload certificates and edit text from a browser.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will overseas buyers find my Rajkot company on Google?',
    answer:
      'The build covers the technical base: schema markup, clean titles and meta tags, passing Core Web Vitals on mobile, a sitemap in Search Console and light images. Your company name usually shows in results within one to two weeks. For export terms we write English pages around the part names buyers in the US, Europe and Japan search for.',
  },
  {
    category: 'technical',
    question: 'What are the sites built with?',
    answer:
      "Next.js, served from Cloudflare's global network. Prebuilt pages load much faster than a typical WordPress site, which helps both Google's Core Web Vitals score and the first impression on a buyer opening your site abroad.",
  },
  {
    category: 'technical',
    question: 'Does the site work well on mobile?',
    answer:
      'The phone layout is designed first. No build launches below Lighthouse 90 on mobile or with failing Core Web Vitals. Images are WebP, lazy-loaded and served from Cloudflare.',
  },
  {
    category: 'technical',
    question: 'Can I track RFQs and catalogue downloads?',
    answer:
      'Yes. GA4 and Tag Manager are set up before launch, with events for RFQ sends, WhatsApp taps, product enquiries and catalogue downloads. Search Console is verified and your sitemap submitted.',
  },

  /* ── Rajkot Local ── */
  {
    category: 'local',
    question: 'Do you build websites for auto part exporters in Rajkot?',
    answer:
      "Yes. Rajkot makes bearings, castings, forgings, gears and engine parts that go to vehicle makers in India and abroad. These buyers want IATF 16949 and ISO certificates, machine lists, inspection facilities, materials handled and a clear RFQ path. We build catalogue sites around those checks.",
  },
  {
    category: 'local',
    question: 'Can you build a site for a unit in Metoda or Shapar-Veraval GIDC?',
    answer:
      "Yes. These estates hold many engineering MSMEs: machine shops, die and mould makers, pump and valve makers and casting units. We build capability pages, machinery lists, product ranges and enquiry forms for industrial buyers.",
  },
  {
    category: 'local',
    question: "Do you understand Rajkot's industrial areas?",
    answer:
      "We map them during planning. Aji is the older GIDC estate, Metoda and Shapar-Veraval hold most of the newer engineering units, and the city's Soni Bazaar is the gold and jewellery trade centre. Area names go into copy and schema where buyers or local customers search by them.",
  },
  {
    category: 'local',
    question: 'How does FactoryJet differ from Rajkot web agencies?',
    answer:
      "Many local agencies price only after meetings and take weeks to deliver. We send a fixed quote, put the 7-day date in the agreement and build in Next.js. You get a faster site and keep every line of code.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Is the website mine after launch?',
    answer:
      'Yes. The source code is pushed to your GitHub on launch day. Figma files and every account login are handed over too. Nothing depends on a retainer or a closed platform.',
  },
  {
    category: 'support',
    question: 'What support is there after launch?',
    answer:
      'Thirty days of free bug fixes and small changes come with every project. After that, a monthly plan covers new work, same-day bug response, quarterly speed and Core Web Vitals checks, and an engineer who knows your code.',
  },
  {
    category: 'support',
    question: 'What if something stops working?',
    answer:
      'In the first 30 days we fix bugs free, normally within 24 hours. The site runs as static files on Cloudflare, so there is no server or plugin to fail.',
  },
  {
    category: 'support',
    question: 'Can a Rajkot company keep you on a monthly retainer?',
    answer:
      'Yes. A retainer covers new product pages, pages for trade shows, SEO work, content edits and upkeep. Retainer clients get first place in our queue and one named engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Rajkot?',
    answer:
      'Test every Rajkot option, including us, the same way. Open their live sites on your phone. Run them through PageSpeed Insights yourself. Ask for a written price that will not rise mid-project. FactoryJet builds custom sites in 7 days at a fixed price and welcomes that test.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Rajkot on my own or use a team?',
    answer:
      'A freelancer suits a one-page site. A manufacturer\'s catalogue site needs design, code, tracking and later support from people who will answer the phone in a year. If you hire web designer in Rajkot directly, fix the page list and price in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: RJT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const RJT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Rajkot agency' },
  { label: 'Freelancer' },
  { label: 'Builder template (Wix/Squarespace)' },
] as const;

const RJT_COMPARISON_ROWS = [
  {
    feature: 'Weeks to go live',
    values: ['7 days', '6–16 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Original Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js codebase',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Search basics set up at launch',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '90+ Lighthouse on phones',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Analytics and tag tracking',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Quote fixed in writing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Code handed over on GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Live in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ra" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/rajkot#howto`,
  name: `Seven-day website build for a Rajkot manufacturer`,
  description: `How FactoryJet plans, designs and launches an export-ready site for a Rajkot engineering or jewellery business.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1: Buyer call',
      text: `We learn what you make and who buys it, from vehicle makers abroad to pump dealers across India, and what each visitor should do on the site.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2: Page plan',
      text: `We set the page list, check competing Rajkot units online, choose part-name keywords and write draft copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4: Design',
      text: 'Home and product page designs arrive on a preview link. Changes you ask for are made within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6: Code and tracking',
      text: `The design is coded mobile-first. Catalogue, RFQ form, Rajkot business schema, GA4 and Search Console are all connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7: Launch',
      text: 'Checks on five devices, then go-live. You get handover notes and a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/rajkot#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/rajkot`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function RajkotWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="rjt-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="rjt-faq-schema"
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
          { name: 'Rajkot', url: 'https://factoryjet.com/web-design/rajkot' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Rajkot', url: 'https://factoryjet.com/web-design/rajkot' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_rajkot_hero" />}
          eyebrow="WEB DESIGN · RAJKOT"
          headline="Website Design in Rajkot for Engineering Units, Auto Part Exporters and Jewellers"
          lead="Rajkot machines, casts and forges parts that end up in vehicles, pumps and engines around the world. Buyers check a supplier's website before they send drawings. FactoryJet designs that site in Figma, codes it in Next.js and launches it in 7 days, with every file handed to you."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Sites built for 500+ businesses across India, the US, the UK and the UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="From Shopify stores to B2B catalogues and DTC brand sites, we have built for companies in India, the US, the UK and the UAE. Every project had a fixed price, a 7-day launch date and full code handover."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="RAJKOT MARKET"
          headline="Why a Rajkot Supplier Needs a Website Buyers Trust"
          leadParagraphs={[
            "Rajkot is one of Gujarat's main engineering centres. Its units make bearings, castings, forgings, diesel engines, pumps, valves, machine tools and auto parts, and many of them export. Most of this work happens in the Aji, Metoda and Shapar-Veraval industrial estates. The city also runs a large gold and imitation jewellery trade, and the Morbi ceramics belt sits close by.",
            "Many Rajkot units still find work through trade directories, agents and WhatsApp groups. A procurement engineer abroad works differently. They search Google, shortlist suppliers whose sites show machines, certificates and parts made, and only then send an RFQ. A unit with no site, or a slow one, often drops off that list before anyone calls.",
            "That gap is a chance. Plenty of competing units still run old template sites or none at all. A fast catalogue site with clear capability pages and a working RFQ form can put a mid-sized Rajkot unit ahead of larger rivals in a buyer's first search.",
          ]}
          stats={[
            {
              value: '250K+',
              label: 'Registered MSMEs in Rajkot district, as counted by the Ministry of MSME',
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: '3,500+',
              label: "Engineering units in Rajkot, many supplying auto parts",
              sourceUrl: 'https://rajkot.nic.in/',
              sourceLabel: 'Rajkot District NIC',
            },
            {
              value: 'Asia #1',
              label: 'Shapar-Veraval GIDC, among Asia\'s largest industrial estates by land area',
              sourceUrl: 'https://gidc.gujarat.gov.in/',
              sourceLabel: 'GIDC Gujarat',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · RAJKOT"
          headline="What a Website Must Do for a Rajkot Manufacturer"
          lead="Rajkot businesses sell to two groups. Procurement teams at OEMs and large firms take weeks to pick a supplier. Traders, dealers and shoppers decide in minutes. Each group needs its own kind of page."
          body={
            <>
              <p>
                
                Auto part makers, foundries, forging shops, pump and valve makers and precision machining units need a site that answers a buyer&apos;s audit questions before the first call. Which certifications do you hold, such as IATF 16949 or ISO 9001? Which machines and test equipment do you run? What materials and sizes can you make? Who do you already supply? We build machinery pages, product catalogues with specs and an RFQ form that accepts drawings.
              </p>
              <p>
                
                Jewellers, traders, dealers and service firms need speed and a quick way to reach you. Shoppers want collection photos, hallmark details and a WhatsApp button. Dealers want product lists, prices on request and a branch locator. We plan those pages around how each buyer actually contacts you.
              </p>
              <p>
                
                Each Rajkot project includes planning, Figma design, Next.js code, search setup, GA4 and 30 days of fixes. The code, design files and logins are yours, whether your buyer sits in Gondal, Pune or Stuttgart.
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
                  
                  Two buyer types, two page plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'B2B / Export & Industrial',
                    need: 'Certificates, machine list, RFQ with drawing upload',
                    area: 'Metoda GIDC · Shapar-Veraval · Aji GIDC',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Consumer & Retail',
                    need: 'Fast pages, WhatsApp button, store details',
                    area: 'Soni Bazaar · Gondal Road · Kalawad Road',
                    colour: '#0F0F12',
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
                  
                  Same build quality for both, planned around your buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Rajkot Manufacturers Get From FactoryJet"
          lead="A fixed quote before you commit, a 7-day launch date written into the agreement, and a Next.js site with no plugin bills. On launch day you receive the full code."
          pillars={[
            {
              icon: '⚡',
              title: 'Delivery date in the contract.',
              body: "Your customers hold you to dispatch dates, so we hold ourselves to one too. A website that drags on for months can miss the trade fair or buyer visit it was built for. We write 7 days into the agreement, and 97% of our projects have shipped on time.",
            },
            {
              icon: '🏗️',
              title: 'Next.js pages that load fast abroad.',
              body: "A typical WordPress page runs PHP and many database queries before it appears. Next.js sends prebuilt files from Cloudflare's network close to the visitor. A buyer in Detroit or Nagoya sees your capability page quickly, and Google's Core Web Vitals score improves too.",
            },
            {
              icon: '📋',
              title: 'Price fixed on day one.',
              body: "We agree scope, write the price down and stick to it. There is no paid discovery stage, no open estimate and no extra bill once the site is live.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Seven Days From Brief to a Live Rajkot Website"
          lead="We agree who the buyer is before designing, sign off the phone layout before coding, and switch on tracking before launch."
          stages={RJT_JOURNEY_STAGES}
          closingNote="BRIEF · LAYOUT · CODE · TRACKING · GO LIVE · 7 DAYS"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="B2B sites we have built recently"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "We built a B2B store on Commerceflo for Belle Maison, a Mumbai wholesale distributor of artificial plants, flowers, flower runners, home décor and LED lighting. Trade buyers get tiered pricing, quotes that convert to orders, and ordering through their own account.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'For Formative Concepts, an MEP drafting and BIM consulting firm, we rebuilt the website on WordPress. It now leads with credentials and a project portfolio, backed by technical SEO aimed at B2B project enquiries.',
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
          headline="FactoryJet vs. a Rajkot Agency, a Freelancer and a Website Builder"
          lead="Four routes to a website for a Rajkot business, set side by side on launch time, what gets built and what you keep."
          pullQuote={{
            stat: '7 days',
            caption:
              'from kickoff to a live site, including Figma design, Next.js code, search setup and a Lighthouse check before launch.',
          }}
          columns={RJT_COMPARISON_COLUMNS}
          rows={RJT_COMPARISON_ROWS}
          footer="Fixed-price contracts cover every FactoryJet scope. You get the quote after a free call."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="RAJKOT × WEB DESIGN"
          headline="Websites for Rajkot's Main Industries"
          lead="Auto parts, castings, pumps, jewellery, tooling and trading each sell to a different buyer. These are the site types we plan for Rajkot businesses."
          sectors={[
            {
              name: 'Auto Parts & Precision Engineering',
              description:
                "Rajkot units machine and forge bearings, gears, shafts and engine parts for vehicle makers in India and abroad. Their buyers audit suppliers before visiting. The site should list certifications, machines, inspection equipment, materials and part families, with an RFQ form that takes drawings.",
              example:
                'Auto part and precision machining units in Metoda, Aji and Shapar-Veraval selling to OEMs and tier-one suppliers.',
            },
            {
              name: 'Foundry, Casting & Forging',
              description:
                "Rajkot foundries pour grey iron, SG iron and steel castings for vehicles, farm equipment and industry. Buyers compare process capability, weight ranges, tolerances and metallurgy lab facilities. We build process pages and a capability sheet download that answer those questions.",
              example:
                'Foundries, casting units and forging shops in Metoda and Shapar-Veraval selling to buyers in India and overseas.',
            },
            {
              name: 'Pumps, Engines & Valves',
              description:
                "Rajkot is known for agricultural and submersible pumps, diesel engines and industrial valves. These firms sell through dealers and to project buyers in farming, water and process industries. Sites need product ranges with head and flow data, certifications, dealer locators and spare part enquiries.",
              example:
                'Pump, engine and valve makers selling to dealers and project buyers across India and abroad.',
            },
            {
              name: 'Gold & Imitation Jewellery',
              description:
                "Soni Bazaar and the surrounding lanes hold jewellers, bullion traders and workshops, and Rajkot also supplies imitation jewellery to sellers across India. Shoppers want collection photos, hallmark and purity details and a WhatsApp link. Wholesale buyers want catalogues and minimum order details.",
              example:
                'Jewellers, bullion traders and imitation jewellery makers selling retail and wholesale from Rajkot.',
            },
            {
              name: 'Machine Tools, Dies & Moulds',
              description:
                "Rajkot tool rooms build lathes, dies, moulds and fixtures for the engineering trade. Buyers want to see machines, tolerances held, materials worked and past tooling jobs. We build capability and project pages that a purchase engineer can check in a few minutes.",
              example:
                'Machine tool builders, die and mould makers and tool rooms in Rajkot\'s GIDC estates.',
            },
            {
              name: 'Trading & Professional Firms',
              description:
                "Distributors, commodity traders, CA firms and consultants serve Saurashtra's many MSMEs. Traders need brand and range pages that show reach. CA and legal firms need service pages and a booking form, because clients check the site before calling.",
              example:
                "Distributors, traders, CA practices, lawyers and consultants working with Rajkot businesses.",
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Hear from founders whose sites we built"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Rajkot Website Questions, Answered"
          lead="Cost, timing, export SEO and ownership. These are the points Rajkot manufacturers raise on almost every call."
          categories={RJT_FAQ_CATEGORIES}
          items={RJT_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Get Your Rajkot Website Live in Seven Days"
          sub="Procurement teams shortlist suppliers from a Google search, often before any phone call. Share your catalogue and certificates with us today. You will see a sitemap within 72 hours and a live site seven days after kickoff."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed quote. 7-day launch. Next.js build. Full code in your hands on day seven."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="rajkot" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
