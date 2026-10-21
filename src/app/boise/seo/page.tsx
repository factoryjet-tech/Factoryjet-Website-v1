import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import LocalSeoArchitectureBlueprint from '@/components/v2/LocalSeoArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import LocalSeoOpportunityEstimator from '@/components/v2/LocalSeoOpportunityEstimator';
import SeoCityLinksUS from '@/components/v2/SeoCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-21';
const CANONICAL = 'https://factoryjet.com/boise/seo';

export const metadata: Metadata = {
  title: 'SEO Agency for Boise, ID Businesses | FactoryJet',
  description:
    'Google Maps listings, citation clean-up, schema and AI answer visibility for Boise, ID and Treasure Valley businesses. No long-term contract.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Agency for Boise, ID Businesses | FactoryJet',
    description:
      'Google Maps listings, citation clean-up, schema and AI answer visibility for Boise, ID and Treasure Valley businesses. No long-term contract.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'SEO for Boise, ID businesses by FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency for Boise, ID Businesses | FactoryJet',
    description: 'Google Maps listings, citation clean-up, schema and AI answer visibility for Boise, ID and Treasure Valley businesses. No long-term contract.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Plain names of tools and platforms this work uses. These are not partner,
// certification or award claims. Add one only with a public directory listing to point to.
const SEO_TOOLS = [
  'Google Business Profile',
  'Google Search Console',
  'Apple Business Connect',
  'Bing Places for Business',
  'Schema.org structured data',
];

const STAT_CARDS = [
  {
    num: 'Maps',
    title: 'Business Profile Review',
    desc: 'Your category, services and reviews set beside the Boise map pack firms, which had 37 to 126 reviews when we checked.',
    icon: '📍',
  },
  {
    num: 'Leads',
    title: 'Inquiry Tracking',
    desc: 'Calls, forms and booked estimates from Ada and Canyon County, counted the same way each month.',
    icon: '📈',
  },
  {
    num: 'Site',
    title: 'Website and SEO Together',
    desc: 'Pages built with titles, headings and schema in place from day one, so a new site does not start from zero.',
    icon: '🛡️',
  },
  {
    num: '0',
    title: 'Bought Links',
    desc: 'Mentions earned from real Treasure Valley sites and directories only.',
    icon: '⚡',
  },
];

const DISTRICTS = [
  {
    corridor: 'Downtown Boise & Capitol Commercial District',
    focus: 'Corporate Law, Wealth Management & Commercial Real Estate',
    desc: 'The political, legal, and banking core of Idaho along Capitol Boulevard, Main Street, and Idaho Street. Captures high-value business litigation retainers, commercial real estate development leasing inquiries, and fiduciary wealth management advisory consults.',
  },
  {
    corridor: 'Boise Tech Corridor & Micron Campus Nexus',
    focus: 'IT Services, Software Engineering & Tech Consulting',
    desc: 'Rapidly expanding technology and semiconductor engineering corridor anchored by Micron Technology’s global headquarters. B2B service queries demand technical capability schemas, ISO accreditation data, and enterprise RFP lead funnels.',
  },
  {
    corridor: 'Meridian & Eagle High-Growth Hub',
    focus: 'Elective Healthcare, Dental Implants & Luxury Remodeling',
    desc: 'Affluent and fast-growing residential commercial corridor along Eagle Road and Chinden Boulevard. Intense local search competition for dental implants, cosmetic dentistry, orthodontics, and custom luxury home building.',
  },
  {
    corridor: 'Treasure Valley Medical & Orthopedic Enclave',
    focus: 'Orthopedic Medicine, Physical Therapy & Specialized Clinics',
    desc: 'Regional medical district anchored by the flagship campuses of St. Luke’s Boise Medical Center and Saint Alphonsus Regional Medical Center. Captures high-intent private patient appointments, orthopedic consults, and specialist referral traffic.',
  },
  {
    corridor: 'Nampa & Caldwell Industrial & Logistics Spine',
    focus: 'Commercial Contracting, Heavy Trades & Industrial Logistics',
    desc: 'Major industrial, agricultural processing, and transportation fulfillment artery across Canyon County along Interstate 84. Drives steady inbound emergency trade calls, fleet maintenance contracts, and commercial project bids.',
  },
  {
    corridor: 'North End & Hyde Park Commercial District',
    focus: 'Veterinary Care, Wellness Clinics & Boutique Services',
    desc: 'Historic neighborhood commercial enclave along 13th Street. Demands high-trust local proof signals, verified client review funnels, veterinary credentials, and refined neighborhood entity silos.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Healthcare, Orthopedic Surgery & Specialty Clinics',
    headline: 'Capturing High-Value Patients in Boise Medical Corridors',
    description:
      'In Boise competitive sports medicine, orthopedic surgery, and cosmetic dentistry markets, patients evaluate physician credentials and peer reviews thoroughly. We optimize Google Business Profiles, implement MedicalProcedure schemas, build procedure-specific silos, and generate steady review velocity.',
    image: '/images/us/boise/seo/card-knee-model-consultation.webp',
    alt: 'A doctor in a white coat bending a plastic knee joint model for an older male patient seated on an exam couch',
    points: [
      'Multi-practitioner Google Business Profile optimization with procedure sub-categories',
      'MedicalProcedure and Physician structured JSON-LD schema linking hospital affiliations',
      'Automated patient review request funnels',
    ],
  },
  {
    sector: 'Commercial Construction, Roofing & Electrical Services',
    headline: 'Driving High-Value Project Bidding Across Greater Boise & Ada County',
    description:
      'Commercial general contractors, roofing companies, and mechanical specialists across the Treasure Valley require consistent commercial bidding opportunities. We build geo-targeted service area architectures, optimize Service Area Business profiles, and capture high-intent commercial contracting keywords.',
    image: '/images/us/boise/seo/card-steel-stud-framing.webp',
    alt: 'Two builders fitting a steel stud wall, one holding an orange spirit level against a stud and one driving a screw with a drill',
    points: [
      'ServiceAreaBusiness schema markup defining multi-county operational boundaries',
      'Hyper-local neighborhood geo-pages targeting Meridian, Eagle, Star, and Kuna',
      'High-authority regional contractor directory citations and verified trade accreditations',
    ],
  },
  {
    sector: 'Legal Practices, Estate Planning & Commercial Litigation',
    headline: 'Local Search for Boise Law Firms & Corporate Attorneys',
    description:
      'Downtown Boise law firms competing for corporate litigation, estate planning, and high-stakes family law retainers must rank in the top positions on Google Maps and organic search. We engineer authoritative legal practice area pages, optimize attorney schema markup, and build high-quality local legal citations.',
    image: '/images/us/boise/seo/card-estate-document-signing.webp',
    alt: 'An older woman signing a document with an orange pen at a desk beside a lawyer in a navy suit, her husband resting a hand on her shoulder',
    points: [
      'Attorney and LegalService structured JSON-LD schema linking Idaho State Bar credentials',
      'Practice area landing page silos capturing high-intent retainers across Ada and Canyon Counties',
      'Authoritative local business directory citations and legal association listings',
    ],
  },
  {
    sector: 'High-End Outdoor Hospitality, Guides & Adventure Tourism',
    headline: 'Google Maps Listings for Idaho Tourism & Recreation Leaders',
    description:
      'Outfitters, whitewater rafting companies, guest ranches, and boutique hospitality operators across the Boise Basin rely on local search visibility to capture tourists and regional travelers. We optimize Google Maps profiles, build event-driven landing pages, and drive high-intent reservation volume.',
    image: '/images/us/boise/seo/card-lakeside-tent-camp.webp',
    alt: 'A guide pouring water from an orange kettle at a camp table while two guests sit on canvas chairs beside a tent by a lake',
    points: [
      'TouristAttraction and LodgingBusiness structured schema with direct booking integration',
      'Google Maps 3-Pack ranking for high-intent adventure, seasonal guiding, and lodge terms',
      'Continuous review velocity management across Google Business Profile, TripAdvisor, and Yelp',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'The map pack firms have 37 to 126 reviews',
    problem: 'On 21 Oct 2026 we searched "boise seo company" from a Boise location. The three map pack results had 126, 37 and 124 Google reviews. Of the eight cities we checked that day, Boise had the highest review counts in the map pack.',
    solution: 'Established Boise firms have years of reviews behind them. A newer business will not catch up in a month, so we start a review routine on day one and win on relevance in the meantime: category, services and a strong page behind the profile.',
  },
  {
    num: '02',
    title: 'One local firm holds the first and last spot',
    problem: 'The same local agency held the number one organic result with its website and the number ten result with its Instagram profile.',
    solution: 'Google ranks profiles on other platforms when they carry your name and real activity. We make sure your social profiles show the same name, phone and services as your Business Profile, so each one supports the others.',
  },
  {
    num: '03',
    title: 'Multi-city agency pages fill three spots',
    problem: 'Three of the agency results were Boise pages from agencies that publish one page per city. Three more spots went to a ranking list site, Clutch and an article on a local lifestyle site.',
    solution: 'Boise buyers see few pages written about Boise specifically. Your service pages can stand out by naming the Treasure Valley towns, jobs and customers you actually work with.',
  },
  {
    num: '04',
    title: 'Boise searchers want the website and SEO together',
    problem: 'Search Console for this page shows searches such as "website with seo boise", "google seo website boise" and "seo website boise", along with builder and remodeler searches.',
    solution: 'Many Boise owners are replacing an old site and want it found on Google from launch. We build and handle SEO in one project, and a site of up to five pages has 7-day delivery.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Audit or site plan',
    desc: 'For an existing site we audit your profile, pages and listings. For a new site we plan the pages around what Boise buyers search.',
    deliverables: ['Fix list or page plan, in order', 'Profile category and services set'],
  },
  {
    phase: 'Phase 02',
    title: 'Pages and redirects',
    desc: 'We write or rebuild your service pages and, if the site changes, redirect every old address so rankings carry over.',
    deliverables: ['Service pages with schema', 'Redirect map for any changed URLs'],
  },
  {
    phase: 'Phase 03',
    title: 'Treasure Valley listings',
    desc: 'We match your details across Apple Maps, Bing, Yelp and Idaho directories, then add pages for Meridian, Nampa or Eagle if you serve them.',
    deliverables: ['Listing log', 'Town pages only where you work'],
  },
  {
    phase: 'Phase 04',
    title: 'Reviews and reporting',
    desc: 'We set up a review routine and report calls, forms and ranking changes every month.',
    deliverables: ['Review request routine', 'Monthly note with calls and forms'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Review Plan',
    factoryjet: 'A request routine your staff send after each job, started in the first month.',
    traditional: 'Ask: "The Boise map pack firms have over 100 reviews. How will we close that gap?"',
  },
  {
    label: 'Site Changes',
    factoryjet: 'Every changed URL is redirected, and we check rankings the week after launch.',
    traditional: 'Ask: "If you rebuild our site, how do we keep our current rankings?"',
  },
  {
    label: 'Local Pages',
    factoryjet: 'Pages for Meridian, Nampa or Eagle only if you work there, each with local jobs.',
    traditional: 'Ask: "Which towns will you write pages for, and what will each page say?"',
  },
  {
    label: 'Contract Terms',
    factoryjet: 'No long-term contract. Your accounts stay in your name.',
    traditional: 'Ask: "What happens to my profile and site if I stop?"',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Pricing & Retainers' },
  { key: 'timeline', label: 'Rankings & Timeline' },
  { key: 'ai', label: 'Search & AI Citations' },
  { key: 'local', label: 'Boise & Idaho Focus' },
  { key: 'deliverables', label: 'Deliverables & Reporting' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much should I expect to pay for SEO in Boise?',
    answer: 'WebFX\'s 2026 pricing data says micro businesses typically pay $500 to $1,500 a month for SEO and small businesses $1,500 to $3,500. A one-truck Nampa plumber usually needs less than a Boise law firm chasing citywide terms. FactoryJet quotes a fixed price in writing after a short scoping call, before any work starts.',
  },
  {
    category: 'pricing',
    question: 'Can I get a new website and SEO together in Boise?',
    answer: 'Yes, and it is cheaper than fixing SEO after launch. Page titles, headings, schema and internal links go in while the site is built. If you are replacing an old site, every old address gets redirected so you keep what already ranks. A site of up to five pages has 7-day delivery.',
  },
  {
    category: 'timeline',
    question: 'How many reviews do I need to reach the Boise map pack?',
    answer: 'There is no fixed number, but Boise sets a high bar. When we searched "boise seo company" on 21 Oct 2026, two of the three map pack firms had over 120 reviews. Google says more reviews and good ratings can help. Start asking every happy customer now and work on your categories and pages while the count grows.',
  },
  {
    category: 'timeline',
    question: 'How long until SEO starts working for a Boise business?',
    answer: 'Profile corrections and technical fixes can show up within weeks. Ranking for terms like "boise roofer" takes months, longer if rivals have years of reviews. No honest firm will promise a date. Google\'s own hiring advice says to find someone else if an SEO guarantees first place.',
  },
  {
    category: 'ai',
    question: 'Is SEO dead now with AI?',
    answer: 'No. On 21 Oct 2026, Google showed no AI Overview for "boise seo company", just a map pack and ten regular results. Where AI answers do appear, in Google or in ChatGPT, they draw on websites, profiles and reviews. Good SEO work feeds both, so the effort is not wasted either way.',
  },
  {
    category: 'ai',
    question: 'What is answer engine optimization, and does a Boise business need it?',
    answer: 'It means writing pages so an AI tool or Google can lift a clear answer from them. Put the answer in the first sentence, use the words buyers use, and keep facts like hours and service areas the same everywhere. A Boise business needs this only after the basics: a full profile and good service pages.',
  },
  {
    category: 'local',
    question: 'Do you work with businesses in Meridian, Nampa and Eagle?',
    answer: 'Yes. Boise, Meridian and Eagle sit in Ada County, while Nampa and Caldwell are in Canyon County. Google weighs distance, so a Nampa shop shows on the map in Nampa far more easily than in Boise. We add a page for each town where you take work, with jobs and reviews from that town.',
  },
  {
    category: 'local',
    question: 'How does SEO work for Boise home builders and remodelers?',
    answer: 'Buyers search by community and home type, so build a page for each subdivision or area you build in, with floor plans as real text and photos you own. Remodelers do well with project pages that name the neighborhood and the room. Reviews from past buyers carry weight with both Google and families comparing builders.',
  },
  {
    category: 'local',
    question: 'How does SEO work for Boise dentists?',
    answer: 'Patients search by treatment and by insurance. Give each treatment its own page, name the dentists, and list the insurance plans you accept as text, not an image. Keep the profile hours exact and add a booking link. Ask patients for reviews by text after visits, and keep replies free of any treatment details.',
  },
  {
    category: 'local',
    question: 'Do Boise plumbers and auto repair shops need SEO?',
    answer: 'Yes, because most of their calls start with a phone search. Plumbers need a service-area profile, a page per service and accurate after-hours details. Auto shops need their street address shown, the makes and repairs they handle listed, and photos of the bays. Both win on reviews that mention the job.',
  },
  {
    category: 'local',
    question: 'How does local SEO work for Boise financial advisors and CPA firms?',
    answer: 'Trust drives the search, so name the advisors, their credentials and the clients they serve. Registered investment advisers must check testimonials and reviews against the SEC marketing rule before using them. CPA firms see demand peak before tax deadlines, so update service pages ahead of the season.',
  },
  {
    category: 'deliverables',
    question: 'Who is the best SEO company in Boise?',
    answer: 'Judge by evidence, not lists. Ask each firm to show where it ranks for its own Boise terms, what it would fix first on your site, and how it will count your calls. Ask who will make the changes. A firm that cannot show its own rankings or name its process is guessing.',
  },
  {
    category: 'deliverables',
    question: 'What does the free Boise SEO audit cover?',
    answer: 'We review your Business Profile, website and listings, then compare them with the businesses ranking for your terms in Boise today. We need read-only Search Console access, which is what Google advises before hiring. You get a short written fix list that any developer can work from.',
  },
  {
    category: 'deliverables',
    question: 'What should I get each month from a Boise SEO company?',
    answer: 'A plain note listing the pages and listings changed, the calls and forms that came from search, and ranking moves for the terms you chose. You should also see review counts and any new problems found. If the note does not show finished work, ask what you are paying for.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
  name: 'Boise Local SEO & Google Maps Optimization',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Local SEO, Google Business Profile Optimization, Schema Markup & AI Citation Strategy',
  description:
    'Google Maps listings, citation clean-up, schema and AI answer visibility for Boise, ID and Treasure Valley businesses. No long-term contract.',
  areaServed: [
    { '@type': 'City', name: 'Boise' },
    { '@type': 'City', name: 'Meridian' },
    { '@type': 'City', name: 'Eagle' },
    { '@type': 'City', name: 'Nampa' },
    { '@type': 'City', name: 'Caldwell' },
    { '@type': 'State', name: 'Idaho' },
  ],
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SEO Agency for Boise, ID Businesses | FactoryJet',
  description: 'Google Maps listings, citation clean-up, schema and AI answer visibility for Boise, ID and Treasure Valley businesses. No long-term contract.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder & CEO',
    url: 'https://factoryjet.com/about',
    sameAs: [
      'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
      'https://github.com/factoryjet-tech',
    ],
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://factoryjet.com/services/ai-seo' },
    { '@type': 'ListItem', position: 3, name: 'Boise', item: CANONICAL },
  ],
};

export default function BoiseSeoPage() {
  return (
    <>
      <script id="boise-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="boise-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="boise-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="boise-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Boise Local SEO &amp; Google Maps Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  SEO for Boise and Treasure Valley Businesses
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  We build and fix the things Boise buyers see first: your Google Business Profile, your service pages and your listings across the Treasure Valley. Need a new site too? We build both together.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Free Local SEO Audit" region="us" btnVariant="primary-dark" modalVariant="seo" />
                  <a href="#boise-seo-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Treasure Valley Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/boise/seo/boise-seo-1.webp"
                  alt="Two panels: a woman standing outside an outdoor supply shop, and a dental clinic reception with a seated patient"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. TOOLS AND PLATFORMS MARQUEE TICKER (plain tool names, no partner or certification claims) ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Platforms and tools we work with</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {SEO_TOOLS.concat(SEO_TOOLS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/boise/seo/boise-seo-2.webp"
                  alt="A dental clinic reception with a receptionist on the phone behind a wooden desk and a woman in the waiting area looking at her phone"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Search Precision &amp; Real Growth</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Local Search Engineered for Idaho Leaders
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  Boise has the most-reviewed map pack of the eight cities we checked on 21 Oct 2026. We plan around that: relevance work first, a review routine from day one, and pages that name the towns you serve.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Local SEO Consultation" region="us" btnVariant="primary-dark" modalVariant="seo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. BOISE DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="boise-seo-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Treasure Valley Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Local Search Optimization for Idaho Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From Downtown Boise practices to Meridian healthcare enclaves and Nampa commercial contractors:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Local SEO Strategies for Idaho Brands
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector across the Treasure Valley demands tailored schema models, citation graphs, and map optimization:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  className={idx % 2 === 0 ? 'rv-showcase-row' : 'rv-showcase-row rv-showcase-row--flip'}
                  style={{
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rv-showcase-media" style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Boise Search Check, 21 Oct 2026</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                What Boise Buyers Find When They Search for SEO
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                We ran "boise seo company" from a Boise location and wrote down what came back:
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div className="rv-service-compare" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>What it means for you:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}
        <div id="local-seo-blueprint">

        <LocalSeoArchitectureBlueprint
            badge="// BOISE LOCAL SEARCH &amp; AI RANKING BLUEPRINT"
            title="4-Layer Local SEO Stack: Google Maps to AI Overviews"
            subtitle="Explore how GBP API optimization, multi-directory citation syncing, structured schema graphs, and AI citation crawlers work together in Boise local search."
            city="Boise"
            ctaLabel="Get a Free Local SEO Audit"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 4-STAGE RANKING PROTOCOL ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Four Stages of Work</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 4-Stage Local SEO Ranking Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Four phases, whether you keep your current site or build a new one:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Boise SEO Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Four questions to put to any Boise SEO agency, with how we answer them:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Questions to ask any agency</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  className="rv-eval-row"
                  style={{
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div data-label="FactoryJet Engineering Model" style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div data-label="Questions to ask any agency" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE GOOGLE MAP PACK OPPORTUNITY ESTIMATOR ── */}
        <LocalSeoOpportunityEstimator city="Boise" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="BOISE LOCAL SEARCH INTELLIGENCE"
          headline="Frequently Asked Questions About Local SEO in Boise ID"
          lead="What Treasure Valley owners ask about cost, reviews, new websites and trades, answered plainly:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <SeoCityLinksUS currentCity="boise" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Google Maps &amp; Local Search</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Start With a Free Boise Local SEO Audit
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Ask for a free review of your Google Business Profile and local listings. We will show you what is missing or inconsistent, and what we would fix first.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Free Local SEO Audit" region="us" btnVariant="primary-light" modalVariant="seo" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
