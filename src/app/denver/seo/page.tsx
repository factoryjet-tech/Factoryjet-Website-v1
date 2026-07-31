import type { Metadata } from 'next';
import Image from 'next/image';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './denver-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/denver/seo - Denver local-SEO city page. "The Altitude Advantage".
   FactoryJet brand orange (#F05A28) on the locked design system: scoped .dseo,
   brand fonts via next/font vars, real SiteHeader/SiteFooter/ModalCTAButton,
   all audit CTAs modalVariant="seo" (native brand-orange button). Canonical FAQ
   (.faqnav + native <details>, shared across every city page). Zero page JS:
   CSS-only industry tabs, static maxi-stats, native details. Distinct LAYOUT,
   brand orange per the FactoryJet design system. De-duplicated stats:
   BLUF carries the demand trio (47,470 / KD 24 / 7-day); the dark market band
   carries four distinct market-size figures. No proof ribbon (was redundant).
   Copy: zero em dashes, anti-slop / anti-commodity, named real clients (E-E-A-T),
   positions taken, sources cited. Keyword source: city-denver-industry-brief.md
   (DataForSEO, 2026-06-16). No pricing; no fake LocalBusiness/AggregateRating.
   Images: next/image, /images/us/denver/*.webp.
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/denver/seo/';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const OG_IMAGE = 'https://factoryjet.com/images/us/denver/denver-seo-og.jpg';

export const metadata: Metadata = {
  title: 'Denver SEO Company | Local SEO Services CO | FactoryJet',
  description:
    "FactoryJet is a Denver SEO company and agency built for the Mile High City's 47,470 monthly searches. Local SEO, technical SEO, and a founder who talks to you directly. Free audit, no long-term contract.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    title: 'Denver SEO Company | Local SEO Services CO | FactoryJet',
    description:
      "A Denver SEO company built for the Mile High City. Campaigns live in 7 days, month to month. 47,470 monthly searches across restaurants, tech, real estate, law, cannabis, and contractors.",
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denver SEO Company & Agency in the Mile High City | FactoryJet',
    description: 'A Denver SEO company built for the Mile High City. Campaigns live in 7 days, month to month.',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

/* ── Data ─────────────────────────────────────────────────────────────────── */
type Kw = { kw: string; tier: string; vol: string; kd: string; cls: string; note: string };
const KEYWORDS: Kw[] = [
  { kw: 'seo in denver colorado', tier: 'Tier 1', vol: '3,600', kd: 'KD 17', cls: 'easy', note: 'Easiest high-volume head' },
  { kw: 'denver seo marketing', tier: 'Tier 1', vol: '3,600', kd: 'KD 25', cls: 'low', note: 'Exact-match, low difficulty' },
  { kw: 'seo denver co', tier: 'Tier 1', vol: '3,600', kd: 'KD 20', cls: 'low', note: 'State-suffix variant' },
  { kw: 'denver seo company', tier: 'Tier 1', vol: '2,400', kd: 'KD 31', cls: 'med', note: 'Primary target term' },
  { kw: 'denver seo agency', tier: 'Tier 1', vol: '2,400', kd: 'KD 32', cls: 'med', note: 'Core commercial' },
  { kw: 'denver seo services', tier: 'Tier 2', vol: '590', kd: 'KD 25', cls: 'low', note: 'Service intent' },
  { kw: 'local seo denver', tier: 'Tier 2', vol: '590', kd: 'KD 2', cls: 'easy', note: 'Fast win' },
  { kw: 'denver local seo', tier: 'Tier 2', vol: '590', kd: 'KD 2', cls: 'easy', note: 'Fast win' },
  { kw: 'denver seo consultant', tier: 'Tier 2', vol: '140', kd: 'KD 1', cls: 'easy', note: 'Easiest in cluster' },
  { kw: 'denver seo expert', tier: 'Tier 2', vol: '140', kd: 'KD 15', cls: 'easy', note: 'Expert cluster' },
  { kw: 'colorado seo company', tier: 'Tier 3', vol: '110', kd: 'KD 18', cls: 'low', note: 'Regional capture' },
  { kw: 'top seo companies denver', tier: 'Tier 3', vol: '70', kd: 'KD 14', cls: 'low', note: 'Comparison intent' },
];

type Svc = { n: string; h: string; p: string };
const SERVICES: Svc[] = [
  { n: '01', h: 'Local SEO and Map Pack', p: 'The three local results above the regular listings drive most of the phone calls. We optimize your Google Business Profile, reviews, and citations to win them in your category.' },
  { n: '02', h: 'Technical SEO audit', p: 'Core Web Vitals, crawl errors, schema, and site structure. We fix the foundation Google needs before it will rank a Denver site, then keep it clean.' },
  { n: '03', h: 'Content strategy', p: 'We map content to the 47,470 monthly searches with DataForSEO, then build the Denver landing pages and articles that rank and convert.' },
  { n: '04', h: 'Link building and citations', p: 'Denver directory placements, consistent name-address-phone citations, and editorial links that move domain authority. No private blog networks, no spam.' },
  { n: '05', h: 'Google Business Profile optimization', p: 'Categories, services, photos, posts, and a review system tuned to the queries your Denver customers actually type. This is usually the fastest lever.' },
  { n: '06', h: 'Reporting and AI search visibility', p: 'Plain-English monthly reporting tied to leads and revenue, plus the entity work that gets you cited inside ChatGPT, Gemini, and Google AI Overviews.' },
];

type Step = { n: string; day: string; t: string; d: string };
const TIMELINE: Step[] = [
  { n: '01', day: 'Day 1', t: 'Audit', d: 'Full technical, content, and Google Business Profile audit of your current Denver footprint.' },
  { n: '02', day: 'Day 2', t: 'Strategy', d: 'A live DataForSEO keyword map, the competitor gaps, and a prioritized 90-day plan.' },
  { n: '03', day: 'Days 3 to 4', t: 'On-page', d: 'Titles, meta, schema, internal links, and Denver landing-page optimization shipped.' },
  { n: '04', day: 'Days 5 to 6', t: 'Off-page setup', d: 'Citation cleanup, profile optimization, and the local link and review engine started.' },
  { n: '05', day: 'Day 7', t: 'Live and reporting', d: 'Campaign live, tracking connected, and your first plain-English report scheduled.' },
];

type Row = { label: string; them: string; us: string };
const COMPARE: Row[] = [
  { label: 'Campaign start', them: '60 to 90 day onboarding', us: 'Live in 7 days' },
  { label: 'Contract length', them: '12-month lock-in', us: 'Month to month' },
  { label: 'Who you talk to', them: 'A junior account manager', us: 'The founder, on every call' },
  { label: 'Keyword research', them: 'A generic national playbook', us: 'Live DataForSEO for Denver' },
  { label: 'AI search visibility', them: 'Rarely offered', us: 'ChatGPT and Gemini citations included' },
  { label: 'Reporting', them: 'Rank-only, quarterly', us: 'Tied to leads, monthly' },
];

type Tab = { id: string; label: string; h: string; chips: string[]; body: string; img?: { src: string; alt: string } };
const TABS: Tab[] = [
  { id: 'restaurants', label: 'Restaurants', h: 'Restaurants and hospitality', chips: ['Top-10 US food scene', 'Map Pack decides traffic', 'Review-driven'],
    img: { src: '/images/us/denver/restaurant-interior.webp', alt: 'Warm Denver restaurant interior at golden hour with full tables' },
    body: 'Denver runs one of the ten best restaurant scenes in the country, and almost all of it gets discovered on Google Maps and "best [cuisine] in Denver" searches. The optimized Google Business Profile, the fresh photos, the menu schema, and a steady stream of reviews are what fill tables on a Friday night. Everything else is secondary.' },
  { id: 'realestate', label: 'Real estate', h: 'Real estate and mortgage', chips: ['Top-5 US housing market', 'High-value leads', 'Hyperlocal'],
    img: { src: '/images/us/denver/real-estate.webp', alt: 'Sunlit modern Denver home exterior with a manicured front yard' },
    body: 'Denver is one of the most competitive housing markets in the country, and realtors, brokers, and lenders are all fighting for the same neighborhood searches. An agent who ranks for "Wash Park homes for sale" or "Denver realtor" stops renting leads from Zillow and starts owning them. We build the neighborhood pages and local signals that make that happen.' },
  { id: 'contractors', label: 'Contractors', h: 'Contractors and home services', chips: ['Building boom', 'High purchase intent', '"near me" heavy'],
    img: { src: '/images/us/denver/contractor-site.webp', alt: 'Contractor reviewing blueprints on a Denver construction site with the city skyline behind' },
    body: 'Denver\'s building boom sends a steady stream of high-intent searches every day for roofing, HVAC, plumbing, and remodeling. These people are ready to call, not browse. We rank contractors for the "near me" and service-plus-neighborhood terms that turn into booked jobs, and we keep the profile and reviews active so you hold the Map Pack through the season.' },
  { id: 'legal', label: 'Legal', h: 'Law firms', chips: ['Highest CPCs in Denver', 'Best ROI vertical', 'Trust signals'],
    img: { src: '/images/us/denver/law-firm.webp', alt: 'Modern Denver law office interior with a downtown city view' },
    body: 'Personal injury, criminal defense, and family law carry some of the most expensive clicks in Denver, which is exactly why organic rankings pay off so well. One page-one position for "Denver personal injury lawyer" delivers cases at a fraction of the Google Ads cost. We pair authoritative content with the reviews and local trust signals these high-stakes searches reward.' },
  { id: 'cannabis', label: 'Cannabis', h: 'Cannabis and dispensaries', chips: ['600+ competitors', 'Organic-only channel', 'Maps decide revenue'],
    img: { src: '/images/us/denver/cannabis-dispensary.webp', alt: 'Modern upscale cannabis dispensary exterior in Denver at dusk' },
    body: 'Colorado legalized recreational cannabis first, and the Denver metro now has more than 600 dispensaries chasing the same map spots. Google bans paid cannabis ads outright, so organic search and the Map Pack are the only discovery channels you have. That makes SEO existential here, not optional. We run compliant, factual dispensary SEO that stays inside Google\'s policies and still drives real local rankings.' },
  { id: 'tech', label: 'Tech and SaaS', h: 'Tech and SaaS', chips: ['6,000+ tech companies', 'Silicon Mountain', 'B2B intent'],
    img: { src: '/images/us/denver/tech-office.webp', alt: 'Airy Denver startup tech office with people working at laptops' },
    body: 'Denver\'s Silicon Mountain holds more than 6,000 tech companies, from seed-stage startups to the local offices of Palantir and Ibotta. B2B SEO here is about a clean technical foundation and bottom-of-funnel content that catches high-intent buyer searches, plus the AI search work that puts your category answers inside ChatGPT, Gemini, and Perplexity, where more software buyers now start.' },
  { id: 'healthcare', label: 'Healthcare', h: 'Healthcare and wellness', chips: ['Dental, med spa, urgent care', 'Patient trust', 'Map Pack'],
    img: { src: '/images/us/denver/healthcare-clinic.webp', alt: 'Bright modern Denver clinic reception, calm and clean' },
    body: 'Dental, med spa, physical therapy, and urgent care all live on the first page, because patients pick a provider from the Map Pack and rarely scroll. We build what those searches reward: a complete profile, real reviews, condition-specific pages, and the technical health that keeps a medical site fast and crawlable. Being invisible here means handing patients to the practice next door.' },
];

type Faq = { q: string; a: string };
type FaqGroup = { key: string; label: string; items: Faq[] };
const FAQ_GROUPS: FaqGroup[] = [
  { key: 'getting-started', label: 'Getting started', items: [
    { q: 'What does an SEO company in Denver actually do for my business?', a: 'A Denver SEO company gets your business found when local people search for what you sell. In practice that means optimizing your Google Business Profile for the Map Pack, building Denver-specific landing pages, fixing the technical faults that stop Google from trusting your site, earning local links and citations, and writing content that ranks for the roughly 47,470 monthly searches in the Denver SEO cluster. The goal is revenue from organic traffic, meaning qualified Denver customers who find you instead of a competitor, not a dashboard full of vanity rankings.' },
    { q: 'How is FactoryJet different from the Denver SEO agencies I find on Clutch?', a: 'Most agencies on Clutch lead with how long they have been in business and lock you into a 12-month contract after a 60 to 90 day onboarding. FactoryJet launches your campaign in 7 days, runs month to month, and puts the founder on every call instead of a junior account manager. The keyword targeting comes from live DataForSEO data for the Denver metro, not a recycled national playbook.' },
    { q: 'Do I need a Denver-based agency, or can any agency rank me locally?', a: 'You do not need an office in Denver. You need a team that builds the strategy around Denver\'s real search data, competitors, and neighborhoods. Local rankings come from a well-optimized Google Business Profile, Denver-specific pages, consistent citations, and reviews, all of which a focused remote team can run. What matters is whether the keyword research and content reflect Denver, not where the desks sit.' },
    { q: 'What should I have ready before we start?', a: 'Three things speed everything up: admin access to your Google Business Profile, login access to your website or your developer\'s contact, and a clear sense of which services and neighborhoods drive your revenue. If Google Analytics and Search Console are already connected, even better. If not, we set them up during the 7-day launch, so nothing there should delay your start.' },
  ]},
  { key: 'cost', label: 'Cost and investment', items: [
    { q: 'How much does SEO cost in Denver?', a: 'It depends on scope: how competitive your industry is, how many locations and service areas you target, and the current state of your site. A single-location contractor needs a very different plan than a multi-location dispensary or a downtown law firm. We do not post a flat number, because a flat number usually means you either overpay for work you do not need or under-scope the work that matters. Book a free audit and you get a clear, scoped recommendation with no obligation.' },
    { q: 'Is SEO worth it for a small Denver business on a tight budget?', a: 'Often yes, because the highest-intent local terms in Denver are unusually winnable. Keywords like local seo denver and denver seo consultant sit at a keyword difficulty of 1 to 2, so a focused small business can rank without an enterprise budget. SEO also compounds. A paid ad stops the moment you stop paying, while a page-one ranking keeps sending Denver leads month after month. We scope the work to your budget and start with the fastest wins.' },
    { q: 'What is the difference between cheap SEO and results-driven SEO?', a: 'Cheap SEO usually means recycled blog posts, spammy directory links, and a report full of keywords nobody searches. Results-driven SEO ties every action to revenue. It targets the terms real Denver buyers use, fixes the technical foundation, earns legitimate local links, and reports on leads and rankings that move money. The cheapest option rarely ends up costing the least once you count the months lost ranking for the wrong things.' },
    { q: 'Do you require a long-term contract?', a: 'No. FactoryJet runs month to month. We would rather keep your business by delivering results than trap you in a 12-month agreement. SEO is a long game, and most real gains land in 3 to 6 months, but you should be free to leave any month we are not earning it.' },
  ]},
  { key: 'local', label: 'Local SEO and Map Pack', items: [
    { q: 'How do I get my Denver business into the Google Map Pack?', a: 'The Map Pack, the three local results shown with the map, is driven mostly by Google Business Profile optimization, proximity to the searcher, review quantity and quality, and citation consistency. We fully optimize the profile with categories, services, photos, and posts, build consistent citations across Denver directories, run a review system, and align your website\'s local signals. For most Denver businesses the Map Pack is the single fastest path to phone calls.' },
    { q: 'What ranking factors matter most for Denver local SEO?', a: 'For the local results: Google Business Profile completeness and relevance, proximity, review signals, and citation consistency. For the organic results: a technically sound site, Denver-specific content that answers real questions, and authoritative local links. In a fast-growing, competitive market like Denver, review velocity and fresh neighborhood-level content are usually the difference between page one and page three.' },
    { q: 'My competitors rank above me on Google Maps. Why, and what do I do?', a: 'Usually it is some mix of more recent reviews, a more complete and active profile, stronger citation consistency, and closer proximity to common searchers. We start with a competitive audit to find the exact gap, then close it: optimize the profile, fix citation inconsistencies, launch a review system, and strengthen the location signals on your site. Map Pack rankings tend to move faster than organic, so this is often where the earliest wins show up.' },
    { q: 'Does Google Business Profile work matter as much as website SEO?', a: 'For most local Denver businesses, yes, and sometimes more. The Map Pack sits above the regular results for "near me" and city searches, so a well-run profile can bring calls before your website ranks at all. The two also reinforce each other, since a strong site backs up the profile\'s relevance and trust. We run them together rather than treating either as optional.' },
  ]},
  { key: 'timeline', label: 'Timeline and results', items: [
    { q: 'How long does SEO take to work in Denver, Colorado?', a: 'For low-difficulty terms like local seo denver (KD 2) or denver seo consultant (KD 1), page-one movement can arrive in 4 to 8 weeks. For competitive heads like denver seo company (KD 31), expect real progress in 3 to 5 months and full results past 6. Because FactoryJet launches in 7 days instead of after a 90-day onboarding, your clock starts almost immediately, which often means the first wins land a full quarter sooner than they would with a traditional agency.' },
    { q: 'What can I realistically expect in the first 90 days?', a: 'In the first 90 days you should expect a fully optimized Google Business Profile, the quick-win keywords (KD 1 to 5) climbing into page-one territory, a technically clean site, the foundation of citations and links in place, and early Map Pack movement. Competitive head terms are usually still climbing at 90 days, which is normal. You get transparent reporting the whole way, so you can see what is moving and why.' },
    { q: 'Why can you launch in 7 days when other agencies take 3 months?', a: 'Because we removed the overhead, not the work. Traditional agencies spend 60 to 90 days on layered onboarding, account-manager handoffs, and internal approvals. We use live DataForSEO research, a proven launch process, and direct founder involvement to compress that into a focused 7-day sprint: audit, strategy, on-page, off-page setup, then live with reporting. The strategy is just as thorough. It simply is not slowed down by bureaucracy.' },
    { q: 'How do you measure success, and which metrics matter?', a: 'We tie reporting to revenue, not vanity. The metrics that count are rankings for the keywords your Denver customers actually use, organic traffic growth, Map Pack visibility, calls and form fills from organic, and leads attributed to SEO. Keyword counts and impressions are context, not the scoreboard. You get plain-English monthly reporting that connects ranking movement to business outcomes.' },
  ]},
  { key: 'denver', label: 'Denver specifics', items: [
    { q: 'Which Denver industries are most competitive for SEO right now?', a: 'Law firms, cannabis dispensaries, real estate, and home-service contractors are the most competitive in Denver, because the value per lead is high enough to attract serious money. Restaurants and healthcare are fierce in the Map Pack specifically. The upside is that ranking in these verticals is also the most lucrative, and the core denver seo terms themselves stay very winnable at a median difficulty around 24.' },
    { q: 'Does Denver\'s rapid growth change my SEO strategy?', a: 'Yes, and it raises the stakes. About 1,600 people move to the Denver metro each week, by the Denver Metro Chamber\'s count, and each one becomes a local searcher with no loyalty to an existing provider. Businesses that rank now capture that incoming demand and build review and authority signals that latecomers struggle to overtake. Growth also brings more competitors, so the cost of waiting compounds. We build the strategy to capture new-resident search intent specifically.' },
    { q: 'Can you do SEO for a cannabis dispensary in Denver?', a: 'Yes. Cannabis SEO is one of Denver\'s most important niches precisely because Google bans paid cannabis ads, which leaves organic search and the Map Pack as the only discovery channels. With more than 600 dispensaries competing in the metro, the gap between ranking first and fourth on Google Maps can mean a large swing in walk-in revenue. We handle compliant, factual dispensary SEO that stays within Google\'s policies and still drives real local rankings.' },
    { q: 'I serve Denver plus Aurora, Lakewood, and Centennial. How does that work?', a: 'Multi-area SEO runs on location-specific landing pages plus a properly configured Google Business Profile service area. We build a genuinely useful page for each city you serve, Aurora, Lakewood, Centennial, Westminster, and Arvada, so you can rank in each local search instead of hoping one Denver page covers them all. The profile\'s service-area settings and consistent citations tie it together so Google understands your full footprint.' },
  ]},
];

const faqSchemaItems = FAQ_GROUPS.flatMap((g) =>
  g.items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
);

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'US', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 3, name: 'Denver', item: 'https://factoryjet.com/denver/' },
    { '@type': 'ListItem', position: 4, name: 'Denver SEO', item: CANONICAL },
  ]},
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com', sameAs: ['https://www.linkedin.com/company/factoryjet'] },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Denver SEO Services', serviceType: 'Search Engine Optimization',
    provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    areaServed: { '@type': 'City', name: 'Denver', addressRegion: 'CO', addressCountry: 'US' } },
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Denver SEO Company and Agency in the Mile High City', url: CANONICAL,
    dateModified: '2026-06-16', author: { '@type': 'Person', name: 'Bhavesh Barot' }, publisher: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' } },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchemaItems },
];

export default function DenverSeoPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="dseo">

        {/* HERO */}
        <section className="hero dotgrid">
          <div className="bloom o b1" aria-hidden="true" />
          <div className="bloom p b2" aria-hidden="true" />
          <div className="elev-bg" aria-hidden="true">
            <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-100 700 L150 680 L250 650 L320 620 L400 560 L480 500 L550 440 L620 380 L700 320 L780 280 L850 240 L920 210 L1000 180 L1080 160 L1150 150 L1300 140 L1500 130" stroke="rgba(240,90,40,0.18)" strokeWidth="2" fill="none" />
              <path d="M-100 700 L150 680 L250 650 L320 620 L400 560 L480 500 L550 440 L620 380 L700 320 L780 280 L850 240 L920 210 L1000 180 L1080 160 L1150 150 L1300 140 L1500 130 L1500 900 L-100 900 Z" fill="url(#elevGrad)" opacity="0.08" />
              <defs><linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F05A28" /><stop offset="100%" stopColor="#F05A28" stopOpacity="0" /></linearGradient></defs>
              <g stroke="rgba(26,23,18,0.05)" strokeWidth="1">
                <line x1="0" y1="200" x2="1400" y2="200" /><line x1="0" y1="350" x2="1400" y2="350" /><line x1="0" y1="500" x2="1400" y2="500" /><line x1="0" y1="650" x2="1400" y2="650" />
                <line x1="200" y1="0" x2="200" y2="800" /><line x1="400" y1="0" x2="400" y2="800" /><line x1="600" y1="0" x2="600" y2="800" /><line x1="800" y1="0" x2="800" y2="800" /><line x1="1000" y1="0" x2="1000" y2="800" /><line x1="1200" y1="0" x2="1200" y2="800" />
              </g>
            </svg>
          </div>
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow rise d1"><span className="dot-pulse" aria-hidden="true" />47,470 monthly Denver SEO searches, live demand data</div>
              <h1 className="rise d2">Denver SEO that climbs to <span className="grad">page&nbsp;1</span> in the Mile High City.</h1>
              <p className="hero-sub rise d3">Denver&apos;s search demand has outrun its agency supply for three years. The businesses on page 1 today locked in their SEO before their competitors did. Your campaign goes live in 7 days, not after a 90-day onboarding.</p>
              <HeroInlineForm region="us" source="denver_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <a className="btn btn-ghost" href={CALENDLY}>Talk to the founder</a>
              </div>
            </div>
            <div className="altitude-panel rise d3">
              <div className="panel-title">Denver keyword altitude map</div>
              <div className="climb-item">
                <div className="climb-header"><span className="climb-kw">seo in denver colorado</span><span className="climb-vol">3,600/mo</span></div>
                <div className="climb-bar-wrap"><div className="climb-bar" style={{ width: '83%' }} /></div>
                <div className="climb-meta"><span className="climb-kd kd-easy">KD 17, low</span><span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--n400)' }}>Winnable</span></div>
              </div>
              <div className="climb-item">
                <div className="climb-header"><span className="climb-kw">denver seo marketing</span><span className="climb-vol">3,600/mo</span></div>
                <div className="climb-bar-wrap"><div className="climb-bar" style={{ width: '75%' }} /></div>
                <div className="climb-meta"><span className="climb-kd kd-easy">KD 25, low</span><span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--n400)' }}>Winnable</span></div>
              </div>
              <div className="climb-item">
                <div className="climb-header"><span className="climb-kw">denver seo company</span><span className="climb-vol">2,400/mo</span></div>
                <div className="climb-bar-wrap"><div className="climb-bar" style={{ width: '69%' }} /></div>
                <div className="climb-meta"><span className="climb-kd kd-med">KD 31, medium</span><span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--n400)' }}>6-month target</span></div>
              </div>
              <div className="climb-item">
                <div className="climb-header"><span className="climb-kw">local seo denver</span><span className="climb-vol">590/mo</span></div>
                <div className="climb-bar-wrap"><div className="climb-bar" style={{ width: '98%' }} /></div>
                <div className="climb-meta"><span className="climb-kd kd-easy">KD 2, easy</span><span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--green)' }}>Fast win</span></div>
              </div>
              <div className="elev-compare">
                <div className="elev-box now"><div className="elev-box-num">Pg. 4 to 8</div><div className="elev-box-label">Where most Denver businesses sit now</div></div>
                <div className="elev-box target"><div className="elev-box-num">Pg. 1</div><div className="elev-box-label">Where FactoryJet takes you</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUF */}
        <section className="bluf tint">
          <div className="wrap">
            <span className="eyebrow">Why Denver, why now</span>
            <h2>Three numbers every Denver business owner should know.</h2>
            <div className="bluf-grid">
              <div className="bluf-card"><div className="bluf-num">47,470</div><div className="bluf-title">Monthly searches for Denver SEO</div><div className="bluf-desc">That is how often Denver businesses look for what FactoryJet does. Most of those searches land on a competitor right now.</div></div>
              <div className="bluf-card"><div className="bluf-num s2">KD 24</div><div className="bluf-title">Median difficulty of the cluster</div><div className="bluf-desc">The high-volume head &quot;seo in denver colorado&quot; (3,600 a month) sits at KD 17. For a major US metro, that is unusually winnable.</div></div>
              <div className="bluf-card"><div className="bluf-num s3">7 days</div><div className="bluf-title">From kickoff to a live campaign</div><div className="bluf-desc">Firestarter, Thrive, and Straight North onboard for 60 to 90 days first. FactoryJet ships your campaign in a week.</div></div>
            </div>
            <p className="answer"><b>A Denver SEO company gets your business found when local people search for what you sell.</b> In practice that means ranking you in the Google Map Pack, building Denver-specific landing pages, fixing the technical faults that hold your site back, and earning the local links and reviews Google reads as proof. The Denver metro generates about 47,470 monthly searches in the SEO cluster alone, and the weighted median difficulty is just 24. For a focused team, that mix of high demand and low difficulty is rare, and it is winnable.</p>
            <div className="byline"><span className="byline-dot" aria-hidden="true" />Analysis by Bhavesh Barot, FactoryJet founder. Keyword data from DataForSEO, June 2026.</div>
          </div>
        </section>

        {/* MARKET: maxi stats + narrative + image */}
        <section className="market">
          <div className="bloom o m1" aria-hidden="true" />
          <div className="wrap">
            <span className="eyebrow">The Mile-High opportunity</span>
            <h2>Denver is growing faster than its businesses can rank.</h2>
            <div className="mstats">
              <div className="mstat"><div className="mv">2.93M</div><div className="mk">people in the Denver metro<span className="msrc">US Census, 2024</span></div></div>
              <div className="mstat"><div className="mv">36,000+</div><div className="mk">small businesses in the city<span className="msrc">Denver SBDC</span></div></div>
              <div className="mstat"><div className="mv">6,000+</div><div className="mk">tech companies in the metro<span className="msrc">Metro Denver EDC</span></div></div>
              <div className="mstat"><div className="mv">600+</div><div className="mk">licensed dispensaries<span className="msrc">CO Marijuana Enforcement</span></div></div>
            </div>
            <div className="market-grid">
              <div>
                <p>About <b>1,600 people move to the Denver metro every week</b>, by the Denver Metro Chamber&apos;s count. Each one becomes a local searcher with no loyalty to an existing provider. They open Google, type &quot;near me,&quot; and pick from whoever ranks first. Usually that is not the best business in town. It is the one that invested in SEO before the market filled up.</p>
                <p>Denver is also the <b>most educated big city in the country</b> by share of college graduates (US Census), and it pulls in 5.7 billion dollars in tourism a year (Denver Metro CVB). Demand is high and intent is high, yet the agencies chasing it still spend a quarter onboarding before they touch a ranking. That lag is the opening, and it does not stay open forever.</p>
              </div>
              <div>
                <div className="ph-img"><Image src="/images/us/denver/denver-aerial.webp" alt="Aerial view of the downtown Denver skyline with the Rocky Mountains behind it" width={1344} height={704} sizes="(max-width: 980px) 100vw, 46vw" /></div>
                <div className="img-cap">Downtown Denver, the only major metro within 600 miles in any direction.</div>
              </div>
            </div>
          </div>
        </section>
        {/* INDUSTRY TABS */}
        <section className="tabs-sec tint">
          <div className="wrap">
            <span className="eyebrow">Denver industries</span>
            <h2>SEO built for the way Denver actually buys.</h2>
            <div className="tabs">
              {TABS.map((t, i) => (<input key={t.id} type="radio" name="dseo-tabs" id={`dt-${t.id}`} defaultChecked={i === 0} />))}
              <div className="tabbar" role="tablist">
                {TABS.map((t) => (<label key={t.id} className="tab-label" htmlFor={`dt-${t.id}`}>{t.label}</label>))}
              </div>
              <div className="panels">
                {TABS.map((t) => (
                  <div key={t.id} className={`tab-panel p-${t.id}`}>
                    {t.img
                      ? <div className="tab-img"><Image src={t.img.src} alt={t.img.alt} width={768} height={512} sizes="(max-width: 980px) 100vw, 45vw" /></div>
                      : <div className="tab-ph"><span>{t.h}, Denver CO<br />optional future image</span></div>}
                    <div>
                      <div className="tab-h3">{t.h}</div>
                      <div className="tab-chips">{t.chips.map((c) => <span key={c} className="tab-chip">{c}</span>)}</div>
                      <p className="tab-body">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KEYWORD TABLE */}
        <section className="kwtable-sec">
          <div className="wrap">
            <span className="eyebrow">Live demand data, DataForSEO, June 2026</span>
            <h2>The Denver SEO keyword market, by the numbers.</h2>
            <div className="kwtable-wrap">
              <table className="kwt">
                <thead><tr><th>Keyword</th><th>Tier</th><th>Volume / mo</th><th>Difficulty</th><th>Opportunity</th></tr></thead>
                <tbody>
                  {KEYWORDS.map((k) => (
                    <tr key={k.kw}><td className="kw">{k.kw}</td><td>{k.tier}</td><td className="vol">{k.vol}</td><td><span className={`kd-pill ${k.cls}`}>{k.kd}</span></td><td>{k.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="kwt-foot">Twelve representative terms shown. The full cluster runs to about <b>47,470 searches a month</b> across every Denver SEO variant, at a weighted median difficulty of <b>KD 24</b>. The quick-win pair, local seo denver and denver seo consultant, sits at <b>KD 1 to 2</b>.</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services tint">
          <div className="wrap">
            <span className="eyebrow">What is included</span>
            <h2>Full-stack Denver SEO, every channel covered.</h2>
            <div className="svc-grid">
              {SERVICES.map((s) => (<div className="svc-row" key={s.n}><span className="svc-num">{s.n}</span><div className="svc-info"><h3>{s.h}</h3><p>{s.p}</p></div></div>))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="timeline-sec">
          <div className="bloom o t1" aria-hidden="true" />
          <div className="wrap">
            <span className="eyebrow">From kickoff to live in one week</span>
            <h2>Why we launch in 7 days when others take 3 months.</h2>
            <div className="timeline">
              <div className="tl-line" aria-hidden="true" />
              {TIMELINE.map((s) => (<div className="tl-step" key={s.n}><div className="tl-dot">{s.n}</div><div className="tl-day">{s.day}</div><div className="tl-title">{s.t}</div><div className="tl-desc">{s.d}</div></div>))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="results tint">
          <div className="wrap">
            <div className="results-grid">
              <div>
                <span className="eyebrow">What results look like</span>
                <h2>Denver SEO compounds over 90 to 180 days. Here is the curve.</h2>
                <p>In the first 90 days the quick-win terms (KD 1 to 5) climb into page-one territory, the Google Business Profile is fully optimized, and the technical foundation is clean. Map Pack movement usually shows first, because local rankings respond faster than the competitive organic heads.</p>
                <p>By 180 days the compounding takes over. Competitive terms like denver seo company climb, organic traffic and calls grow month over month, and the local links and reviews built early start paying off. A paid ad stops the moment you stop paying. These rankings keep sending Denver leads, which is why the businesses that start now are the ones still ranking when the market matures.</p>
              </div>
              <div>
                <div className="ph-img"><Image src="/images/us/denver/seo-analytics.webp" alt="SEO analytics dashboard showing a rising organic-traffic trend line over six months" width={1344} height={704} sizes="(max-width: 980px) 100vw, 45vw" /></div>
                <div className="img-cap">An illustrative organic-growth trajectory. Reporting is tied to leads and revenue, not vanity metrics.</div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="comparison">
          <div className="wrap">
            <span className="eyebrow">The honest comparison</span>
            <h2>FactoryJet next to a traditional Denver agency.</h2>
            <div className="comp-table">
              <div className="comp-head"><div className="ch label">Category</div><div className="ch them">Traditional Denver agency</div><div className="ch us">FactoryJet</div></div>
              {COMPARE.map((r) => (
                <div className="comp-row" key={r.label}>
                  <div className="cr label">{r.label}</div>
                  <div className="cr them"><span className="cross" aria-hidden="true">✗</span> {r.them}</div>
                  <div className="cr us"><span className="check" aria-hidden="true">✓</span> {r.us}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER / PROOF */}
        <section className="founder tint">
          <div className="wrap">
            <div className="founder-card">
              <div className="founder-photo"><Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet team, led by founder Bhavesh Barot" width={1000} height={688} sizes="(max-width: 980px) 80vw, 300px" /></div>
              <div>
                <span className="founder-tag">Talk to the founder</span>
                <h2 className="founder-headline">30 minutes on your Denver rankings. No sales script.</h2>
                <p className="founder-bio">I started FactoryJet to do the opposite of what most agencies do. Senior people do the actual work, you talk to me on every call, and there is no 12-month contract. We will look at your current Denver rankings, find your three fastest keyword wins, and show you what is blocking page 1. You leave with a plan whether or not you hire us.</p>
                <div className="clients"><span>Belle Maison</span><span>Formative Concepts</span><span>Impulse Branding Solutions</span></div>
                <p className="real">No stock screenshots and no invented case studies. These are live client builds you can open and test yourself.</p>
                <div className="trust-chips">
                  <div className="trust-chip"><b>500+</b> businesses served</div>
                  <div className="trust-chip"><b>25 yrs</b> building for SMBs</div>
                  <div className="trust-chip">Month to month</div>
                </div>
              </div>
              <div className="founder-cta-col">
                <ModalCTAButton label="Get a free SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
                <a className="btn btn-ghost" href={CALENDLY}>Book a call</a>
                <p className="micro">No commitment. Reply within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - canonical .faqnav + details */}
        <section className="faq">
          <div className="wrap">
            <span className="eyebrow">Denver SEO FAQ</span>
            <h2>Questions Denver businesses actually ask.</h2>
            <p className="lead">Twenty straight answers on cost, timelines, the Map Pack, and what makes Denver different. Each one is written the way a prospect asks it on a call.</p>
            <div className="faqgrid">
              <nav className="faqnav" aria-label="FAQ categories">
                {FAQ_GROUPS.map((g) => (
                  <a key={g.key} href={`#faq-${g.key}`}>{g.label}<span className="ct">{g.items.length}</span></a>
                ))}
              </nav>
              <div>
                {FAQ_GROUPS.map((g) => (
                  <div className="faqcat" id={`faq-${g.key}`} key={g.key}>
                    <div className="faqcat-h"><span className="faqcat-bar" aria-hidden="true" /><span className="faqcat-l">{g.label}</span></div>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={g.key === 'getting-started' && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="footer-cta">
          <div className="wrap">
            <h2>Denver&apos;s page 1 has room for one more.</h2>
            <p>Free audit. Month to month. Your campaign live in 7 days.</p>
            <div className="cta-row">
              <ModalCTAButton label="Get a free SEO audit" region="us" modalVariant="seo" btnVariant="primary-light" />
              <a className="btn btn-ghost on-dark" href={CALENDLY}>Talk to the founder</a>
            </div>
          </div>
        </section>
        {/* PRODMARK */}
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
