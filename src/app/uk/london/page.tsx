import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MotionFadeUp from '@/components/v2/MotionFadeUp';
import CountUp from '@/components/v2/motion/CountUp';
import AreaExplorer from '@/components/v2/AreaExplorer';
import ServiceRouter from '@/components/v2/ServiceRouter';
import './london-hub.css';

const CANONICAL = 'https://factoryjet.com/uk/london';
const UPDATED = '2026-07-01';

/* ─── Hero demand snapshot rows (SSR-safe static bars) ──────────────── */
const SNAPSHOT = [
  { kw: 'web design london', sub: ' · agency', v: '4,400', w: '100%', href: '/uk/london/web-design' },
  { kw: 'seo agency london', sub: '', v: '3,600', w: '82%', href: '/uk/london/seo' },
  { kw: 'web design agency london', sub: '', v: '2,400', w: '55%', href: '/uk/london/web-design' },
  { kw: 'ecommerce web design london', sub: '', v: '320', w: '18%', href: '/uk/london/ecommerce-development' },
  { kw: 'local seo london', sub: '', v: '260', w: '14%', href: '/uk/london/seo' },
];

/* ─── Service router routes (drives the interactive router) ─────────── */
const ROUTES: {
  rt: string;
  h: string;
  p: string;
  href: string;
  kv: [string, string][];
}[] = [
  {
    rt: 'Websites',
    h: 'Web Design London',
    p: 'Fast, conversion-first websites on the right platform for your goals: Next.js, Webflow, WordPress, Framer, or Shopify. Custom design, mobile-first, yours to keep.',
    href: '/uk/london/web-design',
    kv: [['Platforms', '5+'], ['Delivery', '4 wks / 7-day'], ['Lighthouse', '95+']],
  },
  {
    rt: 'E-Commerce',
    h: 'Ecommerce Development London',
    p: 'DTC and B2B stores built to convert, on Shopify, WooCommerce, or headless. Product pages, checkout, and the SEO to get found.',
    href: '/uk/london/ecommerce-development',
    kv: [['Platforms', 'Shopify · Woo'], ['B2B + DTC', 'Yes'], ['Own the code', '100%']],
  },
  {
    rt: 'SEO',
    h: 'SEO Agency London',
    p: 'Rank on Google and get cited by AI answers. Technical, local, ecommerce, and AI SEO, month to month with no lock-in.',
    href: '/uk/london/seo',
    kv: [['AI SEO', 'Included'], ['Contracts', 'Month to month'], ['Reporting', 'Monthly']],
  },
  {
    rt: 'AI',
    h: 'AI Agents & Automation',
    p: 'Custom AI agents that handle the repetitive work: intake, support, scheduling, and workflow automation, built into your stack.',
    href: '/services/ai-agents',
    kv: [['Custom agents', 'Yes'], ['Integrations', 'Your stack'], ['Founder-led', 'Yes']],
  },
];

/* ─── London areas (drives the interactive explorer) ────────────────── */
const AREAS = [
  {
    tag: 'Finance · Law · Insurance',
    name: 'City of London & Canary Wharf',
    strategy: 'Authority-led',
    body:
      'Regulated sectors compete on trust. We build the E-E-A-T signals, expert content, and technical credibility that Google and AI both reward. For a City law firm or a Canary Wharf fintech, named author pages and a clean entity structure carry more weight than a pile of thin blog posts, and that is what earns a citation in both search and AI answers.',
  },
  {
    tag: 'Tech · Fintech · SaaS',
    name: 'Shoreditch & Old Street',
    strategy: 'AI-citation first',
    body:
      'Silicon Roundabout buyers research in ChatGPT and Perplexity before they open Google, so generative and answer engine optimisation lead here, alongside fast, investor-ready sites on Next.js. For a Shoreditch startup, being quoted in an AI answer is where a growing share of your buyers now start, so we build for it from day one.',
  },
  {
    tag: 'Retail · Hospitality · DTC',
    name: 'Camden & Hackney',
    strategy: 'Ecommerce + local',
    body:
      'Independent brands need ecommerce that converts on mobile and a strong local map pack, so they show up for the product and for the customers nearby right now. We run both together, so a Hackney homeware brand ranks when someone searches the product and when someone searches for a shop close to them.',
  },
  {
    tag: 'Luxury · Art · Property',
    name: 'Mayfair & Knightsbridge',
    strategy: 'Premium & minimal',
    body:
      'Prime brands compete on restraint and reputation. We build premium, minimal sites and shape the brand SERP for a high-intent, low-price-sensitivity buyer. For a Mayfair gallery or a Knightsbridge property firm, that means protecting the first page of your own name and earning the credible links that reassure a discerning buyer before they enquire.',
  },
  {
    tag: 'Media · Creative · Agencies',
    name: 'Soho & Fitzrovia',
    strategy: 'Portfolio-led',
    body:
      'Creative firms need visually ambitious, portfolio-led sites that impress a room of art directors and still load fast. We pair that design ambition with the technical health and content depth to out-rank whoever holds the top spots now, so the work looks the part and gets found.',
  },
  {
    tag: 'Local services',
    name: 'Greater London',
    strategy: 'Local first',
    body:
      'From Croydon to Richmond, local firms need to be found by their own neighbourhood first: the map pack, reviews, a fully optimised Google Business Profile, and area pages. Local SEO is often the fastest route to enquiries for a service business, because the searcher already wants to buy and only needs to find someone close and credible.',
  },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ──────────────── */
const FAQ_CATEGORIES = [
  { key: 'f1', label: 'About us in London' },
  { key: 'f2', label: 'Websites & platforms' },
  { key: 'f3', label: 'SEO & AI search' },
  { key: 'f4', label: 'Pricing & working together' },
  { key: 'f5', label: 'London specifics' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // About us in London
  { category: 'f1', question: 'Are you a web design and digital agency based in London?',
    answer: 'FactoryJet is a UK web design and digital agency that serves London clients across every borough, from the City to Hackney. We work remotely with regular video reviews. That keeps central-London overhead off your invoice without slowing the work or lowering the quality.' },
  { category: 'f1', question: 'What services do you offer London businesses?',
    answer: 'Web design, ecommerce and Shopify development, WordPress, SEO and AI SEO, and AI agents. One senior team covers the whole build, from the website to how it gets found on Google and in AI answers.' },
  { category: 'f1', question: 'Do you meet clients in person in London?',
    answer: 'We run projects remotely with scheduled video calls, which most London clients prefer because it is faster and cheaper. If an in-person kickoff matters for your project, we can arrange one.' },
  { category: 'f1', question: 'Who actually does the work on my project?',
    answer: 'Senior designers and engineers, with the founder involved on every account. You are not handed to a junior after the sales call.' },
  { category: 'f1', question: 'Why choose FactoryJet over a traditional London agency?',
    answer: 'You get the same quality without the Zone 1 office overhead, a fixed quote instead of open-ended day rates, full code ownership, and a team that builds for both Google and AI search. Most London agencies do one of those, not all four.' },

  // Websites & platforms
  { category: 'f2', question: 'How much does web design cost in London?',
    answer: 'It depends on scope: the number of pages, a marketing site versus ecommerce website design london, and integrations. We do not charge central-London day rates or sell fixed packages. You get a fixed quote after a short call, with affordable options for startups.' },
  { category: 'f2', question: 'How long does it take to build a website?',
    answer: 'A standard custom site is about four weeks, with a seven-day express option for up to a five-page site. Larger ecommerce and web-app builds are scoped individually so the timeline is honest.' },
  { category: 'f2', question: 'Which platform should I use: WordPress, Shopify, Webflow, Framer, or Next.js?',
    answer: 'Next.js for speed and custom sites, WordPress for content you edit daily, Webflow for design-led sites with a visual CMS, Framer for a fast launch, and Shopify for ecommerce. We recommend the platform that fits your goals, not the one that is easiest for us.' },
  { category: 'f2', question: 'Do I own the website and the code?',
    answer: 'Yes, one hundred percent. Code goes to your GitHub at launch, and your content and data stay yours. There is no lock-in and no rented platform.' },

  // SEO & AI search
  { category: 'f3', question: 'Do you offer SEO for London businesses?',
    answer: 'Yes. Our SEO agency London service covers technical SEO, local seo london, ecommerce SEO, and content SEO, month to month with no lock-in. We show you exactly where you rank for your London target terms each month.' },
  { category: 'f3', question: 'Can you get my business cited in ChatGPT and Google AI answers?',
    answer: 'Yes. We structure pages so AI engines can quote them: answers stated up top, question-style headings, FAQ schema, and cited facts. That is what gets a London business referenced in AI answers from ChatGPT, Gemini, and Perplexity, alongside Google.' },
  { category: 'f3', question: 'What are GEO and AEO?',
    answer: 'GEO (generative engine optimisation) structures your content so AI models lift it into their answers. AEO (answer engine optimisation) uses answer-first pages, question headings, and FAQ schema that engines quote directly. Both are included in our SEO work, not sold separately.' },
  { category: 'f3', question: 'Do you do local SEO for a specific London borough?',
    answer: 'Yes. Local seo london covers the Google map pack, your Google Business Profile, and neighbourhood pages for the areas you serve, whether that is Camden, Islington, or Croydon.' },

  // Pricing & working together
  { category: 'f4', question: 'Do you charge central-London day rates?',
    answer: 'No. We are a senior remote team working to a fixed, scoped quote. Your budget goes into the build, not into a Zone 1 office, which is how we deliver central-London quality at a fairer price.' },
  { category: 'f4', question: 'Do I have to sign a long contract?',
    answer: 'No. Websites are fixed-scope projects, and SEO runs month to month with 30 days notice to pause or stop. We keep clients because the work performs, not because they are locked in.' },
  { category: 'f4', question: 'Is there an express delivery option?',
    answer: 'Yes. We can deliver up to a five-page website in seven days for London businesses that need to launch quickly, with the same quality checks as a standard build.' },
  { category: 'f4', question: 'What happens after the site goes live?',
    answer: 'We stay on for support. Small changes are quick, and because you own the code, you are never locked in if you decide to take the site elsewhere.' },

  // London specifics
  { category: 'f5', question: 'Which London areas and boroughs do you work with?',
    answer: 'All of them: the City, Shoreditch, Soho, Camden, Islington, Hackney, Westminster, Canary Wharf, Mayfair, and Greater London out to Croydon and Richmond. A remote-first process means your location never limits the work.' },
  { category: 'f5', question: 'Which London industries do you work with most?',
    answer: 'Finance, law, and professional services in the City and Canary Wharf; tech and fintech in Shoreditch; retail, hospitality, and DTC in Camden and Hackney; luxury and property in Mayfair; and media and creative in Soho. Each needs a different site and a different SEO plan.' },
  { category: 'f5', question: 'Can you help a London startup on a tight budget?',
    answer: 'Yes. We offer affordable website design routes for early-stage London startups, then scale the site and SEO as you grow. You still own everything we build from day one.' },
];

/* ─── JSON-LD @graph ─────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#localbusiness`,
      name: 'FactoryJet: Web Design & Digital Agency in London',
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'London' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'London', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Web Design & Digital Agency in London | FactoryJet',
      headline: 'Web Design & Digital Agency in London',
      inLanguage: 'en-GB',
      datePublished: '2026-07-01',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhaveshbarot/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Web Design & Digital Agency in London | FactoryJet',
  description:
    'FactoryJet is a web design and digital agency in London for websites, ecommerce, SEO, and AI. Fixed price, you own the code, no lock-in. Get a free quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Web Design & Digital Agency in London | FactoryJet',
    description:
      'Web design, ecommerce, SEO, and AI for London businesses. Fixed price, you own the code, senior team, no lock-in.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/hero-uk.webp', width: 1200, height: 630, alt: 'Web Design & Digital Agency in London by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function LondonHubPage() {
  return (
    <>
      <script id="ld-london-hub" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-londonhub">

        {/* ═══ 1. HERO ═══ */}
        <section className="hero dotbg">
          <div className="aurora a1" />
          <div className="aurora a2" />
          <div className="wrap">
            <div className="hgrid">
              <MotionFadeUp>
                <div className="bc">Home &#8250; UK &#8250; London</div>
                <h1>The <span className="grad">London</span> partner for web, commerce &amp; AI</h1>
                <p className="sub">
                  FactoryJet is a <mark>web design and digital agency in London</mark>. We build fast websites,
                  ecommerce stores, and AI-native SEO for London brands, and we get you found on Google and in AI
                  answers.
                </p>
                <div className="hactions">
                  <ModalCTAButton label="Get my free quote →" region="uk" btnVariant="primary-light" />
                  <a className="b2" href="#services">Explore London services</a>
                </div>
                <div className="hstats">
                  <div className="hstat"><div className="n"><CountUp value={500} suffix="+" /></div><div className="l">sites delivered</div></div>
                  <div className="hstat"><div className="n"><CountUp value={7} suffix="-day" /></div><div className="l">express delivery available</div></div>
                  <div className="hstat"><div className="n">100%</div><div className="l">you own the code</div></div>
                </div>
                <div style={{ maxWidth: 540, marginTop: 24 }}>
                  <HeroInlineForm region="uk" source="uk_london_hub_hero" submitLabel="Get my free quote" />
                </div>
              </MotionFadeUp>

              <MotionFadeUp delay={0.1}>
                <div className="snap">
                  <div className="sh">
                    <p>What London searches for</p>
                    <span className="tag">DataForSEO · monthly</span>
                  </div>
                  {SNAPSHOT.map((s) => (
                    <a className="srow" href={s.href} key={s.kw + s.v}>
                      <div className="t">
                        <span className="kw">{s.kw}{s.sub ? <span>{s.sub}</span> : null}</span>
                        <span className="v">{s.v}</span>
                      </div>
                      <div className="sbar"><i style={{ width: s.w }} /></div>
                    </a>
                  ))}
                  <div className="sf">Tap a term to jump to the service · Source: DataForSEO, July 2026</div>
                </div>
              </MotionFadeUp>
            </div>
          </div>

          <div className="skyline wrap">
            <svg viewBox="0 0 1120 96" preserveAspectRatio="none" aria-hidden="true">
              <path className="fillcity" d="M0,96 L0,70 L40,70 L40,56 L70,56 L70,74 L110,74 L120,48 L130,74 L180,74 L180,52 L210,52 L210,36 L226,24 L242,36 L242,52 L270,52 L270,78 L320,78 L320,46 L360,46 L360,60 L400,60 L400,32 L420,32 L420,16 L432,16 L432,32 L452,32 L452,60 L500,60 L500,72 L540,72 L540,44 L560,32 L580,44 L580,72 L640,72 L640,52 L680,52 L680,74 L720,74 L720,40 L740,40 L740,24 L756,24 L756,40 L776,40 L776,74 L830,74 L830,56 L870,56 L870,68 L920,68 L920,46 L960,46 L960,66 L1010,66 L1010,52 L1050,52 L1050,72 L1090,72 L1090,60 L1120,60 L1120,96 Z" />
              <path className="ln" d="M0,70 L40,70 L40,56 L70,56 L70,74 L110,74 L120,48 L130,74 L180,74 L180,52 L210,52 L210,36 L226,24 L242,36 L242,52 L270,52 L270,78 L320,78 L320,46 L360,46 L360,60 L400,60 L400,32 L420,32 L420,16 L432,16 L432,32 L452,32 L452,60 L500,60 L500,72 L540,72 L540,44 L560,32 L580,44 L580,72 L640,72 L640,52 L680,52 L680,74 L720,74 L720,40 L740,40 L740,24 L756,24 L756,40 L776,40 L776,74 L830,74 L830,56 L870,56 L870,68 L920,68 L920,46 L960,46 L960,66 L1010,66 L1010,52 L1050,52 L1050,72 L1090,72 L1090,60 L1120,60" />
            </svg>
          </div>
        </section>

        {/* ═══ 2. INTRO (answer-first, quotable) ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="intro">
                <span className="eyebrow">London, in one place</span>
                <p className="lead">
                  FactoryJet is a <mark>web design and digital agency in London</mark> that covers the whole build: the
                  website, the online store, the SEO, and the AI. One senior team takes a London business from a first
                  site to being found on Google and quoted in AI answers, at a fixed price with no lock-in.
                </p>
                <p>
                  London is the most competitive market in the UK, home to roughly a million businesses (ONS Business
                  Population Estimates). That is why a template site and a generic agency rarely cut it here. We build
                  fast, custom <mark>website design london</mark> that loads on a phone on the move, and back it with
                  SEO in London that ranks on Google and gets cited by ChatGPT, Gemini, and Perplexity. Whether you are
                  a Shoreditch startup, a City law firm, or a Camden retailer, the plan starts with your customer, not
                  a theme.
                </p>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 3. SERVICE ROUTER (interactive) ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <ServiceRouter routes={ROUTES} />
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 4. SERVICES (keyword-rich, linked) ═══ */}
        <section className="sec" id="services">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 720 }}>
                <span className="eyebrow">London services</span>
                <h2>Everything a London business needs online, from one team</h2>
              </div>
              <div className="slist">
                <a className="scard" href="/uk/london/web-design">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3><mark>Web Design London</mark></h3><p>Custom <mark>website design london</mark> on Next.js, Webflow, WordPress, Framer, and Shopify. Fast, mobile-first, conversion-led.</p><span className="go">Explore web design London →</span></div>
                </a>
                <a className="scard" href="/uk/london/seo">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3><mark>SEO Agency London</mark></h3><p>Technical, <mark>local seo london</mark>, ecommerce SEO, and <mark>ai seo london</mark> (GEO and AEO). Rank on Google and get cited by AI.</p><span className="go">Explore SEO London →</span></div>
                </a>
                <a className="scard" href="/uk/london/ecommerce-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" /></svg></span>
                  <div><h3>E-Commerce Development</h3><p><mark>Ecommerce website design london</mark> for DTC and B2B, built to convert on Shopify, WooCommerce, or headless.</p><span className="go">Explore ecommerce →</span></div>
                </a>
                <a className="scard" href="/uk/shopify-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="20" r="1.6" fill="currentColor" /><circle cx="18" cy="20" r="1.6" fill="currentColor" /><path d="M2 3h3l2.6 13h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                  <div><h3>Shopify Development</h3><p>Certified Shopify Partner builds, Shopify Plus, migrations, and <mark>shopify web design london</mark>.</p><span className="go">Explore Shopify →</span></div>
                </a>
                <a className="scard" href="/services/wordpress-development">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M3 9h18" stroke="currentColor" strokeWidth="2" /></svg></span>
                  <div><h3>WordPress Development</h3><p><mark>WordPress web design london</mark>: editable sites your team can update without a developer.</p><span className="go">Explore WordPress →</span></div>
                </a>
                <a className="scard" href="/services/ai-agents">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M9 12v2M15 12v2M12 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                  <div><h3>AI Agents &amp; Automation</h3><p>Custom AI agents for intake, support, and scheduling, plus <mark>ai seo</mark> to get quoted by ChatGPT and Gemini.</p><span className="go">Explore AI →</span></div>
                </a>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 5. LONDON MARKET ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 760 }}>
                <span className="eyebrow">The London market</span>
                <h2>London is the UK&apos;s biggest and most contested market</h2>
                <p style={{ fontSize: 16, color: 'var(--n500)', marginTop: 12 }}>
                  Demand is huge, and so is the competition. The businesses that show up on page one and in AI answers
                  take the work. Here is the monthly search demand we are helping London brands win.
                </p>
              </div>
              <div className="mstats">
                <div className="mstat"><div className="n"><CountUp value={4400} /></div><div className="l">&quot;web design london&quot; searches / month</div><div className="src">DataForSEO, Jul 2026</div></div>
                <div className="mstat"><div className="n"><CountUp value={3600} /></div><div className="l">&quot;seo agency london&quot; / month</div><div className="src">DataForSEO, Jul 2026</div></div>
                <div className="mstat"><div className="n">~1M</div><div className="l">businesses in London</div><div className="src">ONS Business Population</div></div>
                <div className="mstat"><div className="n">100%</div><div className="l">code ownership, no lock-in</div><div className="src">every FactoryJet build</div></div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 6. WHY LONDON PICKS US ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 720 }}>
                <span className="eyebrow">Why London brands pick us</span>
                <h2>Central-London quality, without central-London rates</h2>
              </div>
              <div className="grid3" style={{ marginTop: 28 }}>
                <div className="card"><h3>A senior team, remote</h3><p>The founder is involved on every project. No junior handed your account after the sales call, and no Zone 1 office overhead loaded onto your invoice.</p></div>
                <div className="card"><h3>Built for how London browses</h3><p>Most of London reads on a phone, on the move, on patchy signal. We build mobile-first and pass Core Web Vitals green, so you do not lose customers before the page loads.</p></div>
                <div className="card"><h3>Found on Google and in AI</h3><p>Search is splitting between Google and AI assistants. We build for both, so a London customer finds you whether they search or ask ChatGPT.</p></div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 7. AREA EXPLORER (interactive) ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 760 }}>
                <span className="eyebrow">London, area by area</span>
                <h2>We know how each part of London does business</h2>
                <p style={{ fontSize: 16, color: 'var(--n500)', marginTop: 12 }}>Pick an area to see how we approach it.</p>
              </div>
              <AreaExplorer areas={AREAS} />
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 8. FAQ (20, canonical sidebar + accordion) ═══ */}
        <section className="sec" id="faq">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ textAlign: 'center' }}>
                <span className="eyebrow">FAQ</span>
                <h2>Working with a London agency, answered</h2>
              </div>
              <div className="faqwrap">
                <nav className="faqnav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#${c.key}`}>
                      {c.label}
                      <span className="c">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div>
                  {FAQ_CATEGORIES.map((c) => (
                    <div className="faqcat" id={c.key} key={c.key}>
                      <h3>{c.label}</h3>
                      {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                        <details key={f.question}>
                          <summary>
                            {f.question}
                            <span className="cv">
                              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                          </summary>
                          <div className="ans">{f.answer}</div>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 9. FINAL CTA ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="finalcta">
                <h2>Let&apos;s build something London remembers</h2>
                <p>Tell us what you are working on. You will hear back from the founder within 24 hours with honest, specific next steps.</p>
                <div className="cta-wrap">
                  <ModalCTAButton label="Get my free quote →" region="uk" btnVariant="secondary-light" />
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
