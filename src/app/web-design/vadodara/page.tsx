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
  title: 'Web Design Company in Vadodara | FactoryJet',
  description:
    'Web design company in Vadodara for chemical, pharma and engineering firms. Spec-sheet and RFQ-ready Next.js sites, fixed quote, 7-day delivery.',
  keywords: [
    'web design company in Vadodara',
    'website design Vadodara',
    'web development Vadodara',
    'web design Baroda',
    'website design company Vadodara',
    'professional website design Vadodara',
    'web design GIDC Makarpura',
    'B2B website design Baroda',
    'web design for chemical companies Vadodara',
    'ecommerce website Vadodara',
    'web design agency Vadodara',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Vadodara | FactoryJet',
    description:
      'Web design company in Vadodara for Makarpura, Waghodia and Savli manufacturers. Product data, RFQ forms, GA4 and SEO set up. Live in 7 days.',
    url: 'https://factoryjet.com/web-design/vadodara',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'Website design for Vadodara manufacturers by FactoryJet',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Vadodara | FactoryJet',
    description:
      'Web design in Vadodara for chemical and engineering firms. Live in 7 days.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/vadodara',
    languages: {
      'en-IN': 'https://factoryjet.com/web-design/vadodara',
      'x-default': 'https://factoryjet.com/web-design/vadodara',
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
  '@id': 'https://factoryjet.com/web-design/vadodara#webpage',
  url: 'https://factoryjet.com/web-design/vadodara',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const VDR_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Buyer and page plan',
    description:
      "We start by naming the buyer. A European importer checking solvent grades, a rail or power project team vetting a Savli supplier and a pharma distributor in Ahmedabad each need different pages first. We review rival Baroda firms online and lock the sitemap.: Days 1–2",
  },
  {
    number: '02',
    title: 'Figma layouts',
    description:
      'Phone layouts come first, then tablet and desktop. Grade tables, datasheet links and the RFQ form are placed and reviewed before development. You sign off the design before any code is written.: Days 3–4',
  },
  {
    number: '03',
    title: 'Next.js build',
    description:
      'Pages are coded in Next.js and served from Cloudflare. RFQ forms, WhatsApp, downloadable TDS and SDS files and any CRM you use are connected, and page weight is checked as we build.: Days 5–6',
  },
  {
    number: '04',
    title: 'Copy and search setup',
    description:
      'Copy edited for procurement readers, WebP images, schema for your company and FAQs, and a sitemap filed with Search Console. Pages map to product names, grades and CAS numbers buyers search for, plus Vadodara and Baroda local terms.: Day 6–7',
  },
  {
    number: '05',
    title: 'Go live',
    description:
      'Domain moved to Cloudflare, GA4 and Tag Manager running, Search Console verified. A recorded walkthrough shows your staff how to update products, and we fix any issue for 30 days.: Day 7+',
  },
];

const VDR_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Vadodara Industry' },
  { key: 'support',   label: 'Support & Ownership' },
];

const VDR_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'What does a website cost for a Vadodara company?',
    answer:
      "It depends on the page count and features. A chemical exporter with fifty grade pages costs more than a ten-page engineering profile, and a dealer login adds more. After a free call we send a single fixed price. Once paid, the code is yours.",
  },
  {
    category: 'pricing',
    question: 'When will my site be live?',
    answer:
      'Seven days after kickoff. We start counting once your logo, photos, product lists and certificates are shared. Two days for planning and layout, four for design approval and code, launch on the seventh.',
  },
  {
    category: 'pricing',
    question: 'Why pick FactoryJet instead of an agency in Vadodara?',
    answer:
      "Your project is handled by the people who design and code it, with no sales layer in between. The scope and price are written down before work starts, and every site goes through the same Figma, Next.js and Lighthouse checks.",
  },
  {
    category: 'pricing',
    question: 'What does the 7-day promise cover?',
    answer:
      'The parts of the job we control: design, code, copy polish and launch. Late content from your side moves the date by the same amount. Across all our projects, 97% were delivered on time.',
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What is included in a build?",
    answer:
      "Planning, Figma design, the Next.js build, short-form copy, schema, meta and sitemap setup, GA4 tracking and 30 days of fixes after launch. The source code goes into a GitHub repository you own on launch day.",
  },
  {
    category: 'included',
    question: 'Will you write copy for technical products?',
    answer:
      'Headlines, page intros and short product summaries are part of the build. Long technical write-ups and SEO articles are an add-on. Before coding we send a checklist of what we need, such as TDS files, grade data and approvals.',
  },
  {
    category: 'included',
    question: 'Who hosts the website?',
    answer:
      'Cloudflare Pages, under an account in your company\'s name. The free plan covers most business sites. We set it up and charge no hosting fee.',
  },
  {
    category: 'included',
    question: 'Can our team change product data later?',
    answer:
      'Yes. Growth and Custom tier builds include Sanity or Contentful, so your staff can add grades, upload new datasheets and edit text in a browser. That suits Vadodara manufacturers whose product lists change often.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Can buyers find my Vadodara firm on Google?',
    answer:
      'Every build includes schema markup, clean titles and meta tags, passing Core Web Vitals on mobile, a sitemap in Search Console and small image files. Your company name usually appears in results within one to two weeks. Ranking for product terms depends on content depth and competition.',
  },
  {
    category: 'technical',
    question: 'Which platform are sites built on?',
    answer:
      "Next.js on Cloudflare's network. Prebuilt pages load faster than a typical WordPress site, which helps your Core Web Vitals score and the first impression on a buyer comparing several Gujarat suppliers at once.",
  },
  {
    category: 'technical',
    question: 'How do the sites behave on phones?',
    answer:
      'We design for phones first. Every site must reach Lighthouse 90+ on mobile with green Core Web Vitals before it launches. Images are WebP and lazy-loaded from Cloudflare.',
  },
  {
    category: 'technical',
    question: 'Will I know which pages bring enquiries?',
    answer:
      'Yes. GA4 and Tag Manager are live before launch, logging RFQ sends, WhatsApp taps, datasheet downloads and product enquiries. Search Console is verified and the sitemap submitted.',
  },

  /* ── Vadodara Local ── */
  {
    category: 'local',
    question: 'Do you build websites for Vadodara chemical and petrochemical companies?',
    answer:
      'Yes. Vadodara sits on Gujarat\'s chemical belt that runs south through Bharuch and Ankleshwar. Chemical and process firms here need grade-wise product pages, SDS and TDS downloads, REACH or other approvals, packing options and an RFQ form for overseas and Indian buyers. We build sites around those needs.',
  },
  {
    category: 'local',
    question: 'Can you build a site for an engineering unit in Makarpura GIDC?',
    answer:
      "Yes. Makarpura holds many engineering units making machined parts, fabrication, electrical items and plastics. Buyers there look for ISO or IATF certificates, machine lists, process photos and a clear RFQ path. We build capability-led sites for that check.",
  },
  {
    category: 'local',
    question: "Do you know Vadodara's industrial estates?",
    answer:
      "We map them as part of planning. Makarpura near the city, Waghodia and Savli to the east and north-east, Nandesari for chemicals, and the corridor towards Bharuch and Ankleshwar. Estate names go into copy and schema only where buyers search with them.",
  },
  {
    category: 'local',
    question: 'How is FactoryJet different from Vadodara web agencies?',
    answer:
      "Many local agencies price after several meetings and take weeks to deliver. We quote first, write the 7-day launch date into the agreement and build in Next.js. You get a faster site and the full code.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Will I own the site?',
    answer:
      'Yes. On launch day the code goes into your GitHub, and you receive the Figma files and every login. No retainer is needed to keep the site running and there is no closed platform.',
  },
  {
    category: 'support',
    question: 'What happens after launch?',
    answer:
      'We fix bugs and make small changes free for 30 days. After that, monthly plans cover new work, same-day bug response, quarterly speed and Core Web Vitals checks and an engineer who knows your code.',
  },
  {
    category: 'support',
    question: 'What if the site goes down or breaks?',
    answer:
      'Bugs found in the first 30 days are fixed free, usually within 24 hours. Pages are static files on Cloudflare, so there is no server or plugin stack that can crash.',
  },
  {
    category: 'support',
    question: 'Can a Vadodara business retain you monthly?',
    answer:
      'Yes. A retainer covers new product pages, pages for exhibitions, SEO work, content updates and upkeep. Retainer clients get first slot in our schedule and one named engineer.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Vadodara?',
    answer:
      'Put every Vadodara shortlist, us included, through three tests. Open their live sites on your phone. Check them in PageSpeed Insights yourself. Get a written price that cannot grow mid-build. FactoryJet delivers custom sites in 7 days at a fixed price and is glad to be tested that way.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Vadodara as a freelancer or use a team?',
    answer:
      'A freelancer is fine for a one-page site. A manufacturer\'s site with datasheets, tracking and regular updates needs design, code and support from people who will still be reachable next year. If you hire web designer in Vadodara directly, agree pages and price in writing first.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: VDR_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const VDR_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Vadodara agency' },
  { label: 'Freelancer' },
  { label: 'Template site (Wix/Squarespace)' },
] as const;

const VDR_COMPARISON_ROWS = [
  {
    feature: 'Time until launch',
    values: ['7 days', '6–14 weeks', '3–12 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom design in Figma',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Coded in Next.js',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'SEO groundwork done',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Mobile Lighthouse 90 or above',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 and GTM configured',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Fixed quote before work',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'You get the GitHub repo',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Delivered in 7 days',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="va" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `https://factoryjet.com/web-design/vadodara#howto`,
  name: `Building a Vadodara company website in 7 days`,
  description: `The seven-day plan FactoryJet follows for a Vadodara chemical, pharma or engineering website.`,
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1: Kickoff',
      text: `We learn your products, who buys them and what the site should get them to do, whether that is send an RFQ, download a datasheet or call your sales desk.`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2: Structure and keywords',
      text: `We set the page list, review competing Vadodara firms online, choose product and grade keywords and draft the copy.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4: Designs',
      text: 'Home and product page designs go up on a preview link. Requested changes are made within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6: Code and setup',
      text: `The design is coded mobile-first, with Vadodara business schema, GA4 and Search Console connected.`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7: Launch',
      text: 'We test on five devices, go live, and hand over notes plus a 30-minute training call.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `https://factoryjet.com/web-design/vadodara#webpage`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: `https://factoryjet.com/web-design/vadodara`,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function VadodaraWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="vdr-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="vdr-faq-schema"
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
          { name: 'Vadodara', url: 'https://factoryjet.com/web-design/vadodara' },
        ]}
      />

      <main className="bg-fj-cream">
      <Breadcrumbs items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Vadodara', url: 'https://factoryjet.com/web-design/vadodara' },
        ]} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="in" source="web_design_vadodara_hero" />}
          eyebrow="WEB DESIGN · VADODARA"
          headline="Website Design in Vadodara for Chemical, Pharma and Engineering Manufacturers"
          lead="Baroda makes chemicals, fertilisers, power equipment, rail coaches and machined parts that ship across India and abroad. Buyers check a supplier's website for grades and certificates before they write. FactoryJet designs that site in Figma, builds it in Next.js and launches it in 7 days, and the code is yours."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'in' as const }}
          trustItems={[
            '7-day delivery',
            '500+ businesses built',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="500+ businesses across India, the US, the UK and the UAE use sites we built" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 12 years of web engineering. 7-day delivery."
          description="We have built Shopify stores, B2B catalogue sites and DTC brand sites for companies in India, the US, the UK and the UAE. Each came with a fixed quote, a 7-day launch date and full code handover."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="VADODARA MARKET"
          headline="Why Vadodara Suppliers Win or Lose Buyers Online"
          leadParagraphs={[
            "Vadodara grew around the Gaekwad state and Maharaja Sayajirao University, and became an industrial city after GSFC and the old IPCL petrochemical complex arrived. Today it sits at the top of Gujarat's chemical belt that runs through Bharuch and Ankleshwar. Makarpura, Waghodia, Savli and Nandesari estates hold chemical, pharma, engineering, electrical and plastics units, and the Savli area also builds rail and power equipment for large firms.",
            "Each of these buyers checks something different. A chemical importer wants grades, SDS sheets and packing. A pharma buyer wants GMP status. An OEM vetting a machining unit wants IATF or ISO and a machine list. A power utility wants test reports. If a site hides that data or loads slowly, the buyer moves to the next supplier on the list.",
            "Many Baroda MSMEs still send a PDF brochure on request and run a three-page site. Buyers abroad see that as a gap in trust. A fast site with full product data can put a smaller Vadodara unit level with much bigger names in a first search.",
          ]}
          stats={[
            {
              value: '50,000+',
              label: "Registered MSMEs in Vadodara district, per the Ministry of MSME",
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'Ministry of MSME',
            },
            {
              value: 'Chemical Valley',
              label: "The chemical belt from Vadodara through Bharuch and Ankleshwar, home to large plants and many downstream units",
              sourceUrl: 'https://gujchemicals.gujarat.gov.in/',
              sourceLabel: 'Gujarat Chemical Industries',
            },
            {
              value: '₹1.2L Cr',
              label: "Estimated size of the Vadodara district economy, Gujarat's third-largest city",
              sourceUrl: 'https://mospi.gov.in/',
              sourceLabel: 'MoSPI',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WEBSITE DESIGN · VADODARA"
          headline="What a Website Must Prove for a Vadodara Manufacturer"
          lead="Industrial buyers from the US, Europe, the Gulf and across India shortlist Vadodara suppliers online, often weeks before they call. A site that cannot answer their checks loses the enquiry. We plan every Baroda build around those checks."
          body={
            <>
              <p>
                
                Chemical exporters, speciality chemical makers and process engineering firms face buyers who check grades, purity, safety data, approvals, capacity and export history before raising an RFQ. Hide that data, or make it slow to load on a US or EU connection, and the buyer leaves. We build grade-wise product pages, SDS and TDS download libraries and RFQ forms that send enquiries straight to your sales team.
              </p>
              <p>
                
                Makarpura and Savli engineering units are judged as vendors. OEMs, EPC contractors and capital equipment buyers want certifications such as IATF 16949 or ISO 9001, process lists, quality systems and the kind of customers you already supply. We build capability pages, datasheet libraries and enquiry flows suited to long B2B buying cycles.
              </p>
              <p>
                
                Each Vadodara project includes planning, Figma design, Next.js code, search setup, GA4 and 30 days of fixes. You keep the code, the design files and every login.
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
                  
                  Two kinds of industrial buyer, two page plans.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Chemical & Petrochem B2B Export',
                    need: 'Grades, SDS and TDS, approvals, RFQ form',
                    area: 'Nandesari · Bharuch-Ankleshwar belt · Vadodara city',
                    colour: '#F05A28',
                  },
                  {
                    type: 'Engineering & Auto Ancillary B2B',
                    need: 'Machine list, IATF/ISO proof, enquiry form',
                    area: 'Makarpura GIDC · Waghodia GIDC · Savli',
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
                  
                  One build standard, shaped by who buys from you.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="What Vadodara Firms Get When They Work With FactoryJet"
          lead="A fixed quote before you sign, a 7-day launch date in the agreement, and a Next.js site with no plugin fees. All code is handed over when the site goes live."
          pillars={[
            {
              icon: '⚡',
              title: 'Launch date written into the agreement.',
              body: "Exhibitions and buyer audits are booked months ahead. A website still unfinished on the day is a missed chance. We put 7 days into the agreement, and 97% of our projects have been delivered on time.",
            },
            {
              icon: '🏗️',
              title: 'Next.js pages that open fast abroad.',
              body: "A typical WordPress page runs PHP and many database queries before it appears. Next.js serves prebuilt files from Cloudflare locations near the visitor. A procurement manager in Houston comparing three Gujarat chemical suppliers sees your grade table first.",
            },
            {
              icon: '📋',
              title: 'The price stays the price.',
              body: "We write the scope and price into the quote and hold to both. There is no paid discovery stage, no open estimate and no extra invoice after launch.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="Seven Days to a Live Vadodara Website"
          lead="Buyer agreed before design. Phone layout approved before code. Tracking and search setup done before launch."
          stages={VDR_JOURNEY_STAGES}
          closingNote="BUYER · DESIGN · CODE · SEARCH · LAUNCH · 7 DAYS"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="Recent builds for B2B companies in India"
          cards={[
            {
              industry: 'Wholesale Distribution · Commerceflo',
              title: 'Belle Maison | Mumbai',
              description:
                "Belle Maison, a wholesale distributor in Mumbai, supplies artificial plants and flowers, flower runners, home décor and LED lighting to the trade. Its B2B store runs on Commerceflo, built by us with tiered trade prices, quotes that turn into orders and per-account ordering.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Commerceflo · B2B',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts | Pune',
              description:
                'Formative Concepts works in MEP drafting and BIM consulting. We rebuilt its website on WordPress so project enquiries from other firms land on credentials, a project portfolio and pages set up with technical SEO.',
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
          headline="FactoryJet vs. a Vadodara Agency, a Freelancer and a Template Site"
          lead="Four ways a Vadodara company can get a website, compared on time to launch, what is built and what you own afterwards."
          pullQuote={{
            stat: '7 days',
            caption:
              'from first call to launch, with Figma design, Next.js code, search setup and a Lighthouse check all included.',
          }}
          columns={VDR_COMPARISON_COLUMNS}
          rows={VDR_COMPARISON_ROWS}
          footer="Every FactoryJet scope is offered on a fixed-price contract. Your quote follows a free call."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="VADODARA × WEB DESIGN"
          headline="Websites for Vadodara's Main Industries"
          lead="Chemicals, engineering, auto parts, pharma, fertilisers and trading all sell to different buyers. These are the site types we plan for Vadodara companies."
          sectors={[
            {
              name: 'Chemicals & Petrochemicals',
              description:
                "Vadodara's chemical base grew from GSFC and the former IPCL complex, now part of Reliance, and spread into many downstream and speciality units. Exporters need grade-wise product pages, SDS and TDS files, approvals, packing and capacity details, and an RFQ form for buyers in the US, Europe and the Gulf.",
              example:
                'Speciality chemical makers, solvent and intermediate producers and downstream units around Nandesari and along the Bharuch-Ankleshwar belt.',
            },
            {
              name: 'Power, Rail & Heavy Engineering',
              description:
                "Vadodara and Savli host plants of several global engineering groups making power, electrical and rail equipment, plus many local fabricators and machine builders that supply them. These firms need capability pages, datasheets, project references and an enquiry path for high-value tenders.",
              example:
                'Fabricators, electrical equipment makers and machine builders supplying power, rail and process projects.',
            },
            {
              name: 'Auto Parts & Precision Components',
              description:
                "Makarpura and Waghodia units make machined parts, stampings, forgings and moulded plastics for vehicle and equipment makers. OEM buyers qualify vendors on paper first. Sites need IATF 16949 proof, process descriptions, quality systems and an RFQ form that accepts drawings.",
              example:
                'Component makers in Makarpura and Waghodia GIDC selling to OEMs and tier-one suppliers.',
            },
            {
              name: 'Pharma & Life Sciences',
              description:
                "Waghodia and nearby estates hold API and formulation plants within Gujarat's wider pharma belt. Buyers check GMP status, product lists and regulatory approvals before contact. We build product and compliance pages with careful wording and a procurement enquiry flow.",
              example:
                'API producers, formulation units and pharma exporters around Vadodara and Waghodia.',
            },
            {
              name: 'Fertilisers & Agri-Inputs',
              description:
                "GSFC is headquartered in Vadodara, and the region supplies fertilisers, crop nutrients and agri chemicals across India. These businesses sell through dealers and to institutions. Sites need product ranges with nutrient details, dealer locators and pages for bulk and tender buyers.",
              example:
                'Fertiliser makers, micro-nutrient suppliers and agri-chemical firms selling to dealers and institutions.',
            },
            {
              name: 'Industrial Trading & Supplies',
              description:
                "Baroda traders supply industrial consumables, packaging, construction materials and spares to the plants around them. Procurement managers want brands carried, stock range and delivery reach. We build catalogue pages, bulk enquiry forms and brand pages that show that at a glance.",
              example:
                'Industrial suppliers, packaging traders and construction material wholesalers serving Vadodara plants.',
            },
          ]}
        />

        <GetFreeQuoteCTA />
        {/* ── 12. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="Founders on what changed after their new site"
        />

        {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Vadodara Website Questions, Answered"
          lead="Price, timing, product data and ownership. Vadodara firms ask about these on nearly every first call."
          categories={VDR_FAQ_CATEGORIES}
          items={VDR_FAQ_ITEMS}
        />

        {/* ── 14. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Launch Your Vadodara Website in Seven Days"
          sub="Industrial buyers are comparing Vadodara suppliers online before they pick up the phone. Send us your product list and certificates today. You will see a sitemap within 72 hours and a live site seven days after kickoff."
          primaryCta={{ label: 'Book a Strategy Call', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price in writing. 7-day launch. Next.js code. Every file handed over at go-live."
        />

        {/* India web-design city cross-links (silo fix, 31 Jul 2026) */}

        <WebDesignCityLinksIN currentCity="vadodara" />


      </main>

      <SiteFooter locale="in" />
    </>
  );
}
