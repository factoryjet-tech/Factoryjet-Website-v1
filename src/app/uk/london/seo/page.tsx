import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MotionFadeUp from '@/components/v2/MotionFadeUp';
import CountUp from '@/components/v2/motion/CountUp';
import DemandBars from '@/components/v2/motion/DemandBars';
import TiltCard from '@/components/v2/motion/TiltCard';
import AICitationDemo from '@/components/v2/AICitationDemo';
import AreaExplorer from '@/components/v2/AreaExplorer';
import './london-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/london/seo';
const UPDATED = '2026-07-01';

/* ─── London areas (drives the interactive explorer) ────────────────── */
const AREAS = [
  {
    tag: 'Finance · Law · Insurance',
    name: 'City & Canary Wharf',
    strategy: 'Authority-led SEO',
    body:
      'These sectors compete on trust, so the work centres on E-E-A-T signals, expert authored content, and the technical credibility that Google and AI answer engines both reward for regulated industries. For a City law firm or a Canary Wharf fintech, a technical seo london foundation and named author pages carry more weight than volume of blog posts. We build the entity and schema architecture that lets a search engine, and an AI model, understand exactly who you are and why you can be cited.',
  },
  {
    tag: 'Tech · Fintech · SaaS',
    name: 'Shoreditch & Old Street',
    strategy: 'AI-citation first',
    body:
      'Silicon Roundabout buyers research in ChatGPT and Perplexity before they open Google, so generative engine optimisation and answer engine optimisation are the priority here. We pair fast technical SEO with product-led content that earns citations, then track whether your brand is quoted in AI answers alongside your Google rankings. For a Shoreditch startup, ai seo london is not a nice-to-have, it is where a growing share of your buyers now start.',
  },
  {
    tag: 'Retail · Hospitality · DTC',
    name: 'Camden & Hackney',
    strategy: 'Ecommerce plus local',
    body:
      'Independent brands in Camden and Hackney need ecommerce seo london for product and category searches, and the local map pack for the customers who are nearby right now. We run both together, so a Hackney homeware brand shows up when someone searches the product and when someone searches for a shop close to them. Product pages are built to rank and to convert, not just to sit in a sitemap.',
  },
  {
    tag: 'Luxury · Art · Property',
    name: 'Mayfair & Knightsbridge',
    strategy: 'Brand SERP and reputation',
    body:
      'Premium brands compete on what appears when a buyer searches their name, so we shape the brand SERP and build content that matches a high-intent, low-price-sensitivity audience. For a Mayfair gallery or a Knightsbridge property firm, professional seo services london means protecting the first page of your own name and earning the credible links that reassure a discerning buyer before they ever enquire.',
  },
  {
    tag: 'Media · Creative · Agencies',
    name: 'Soho & Fitzrovia',
    strategy: 'Competitive service terms',
    body:
      'Creative firms in Soho and Fitzrovia fight for competitive service keywords and referral-heavy searches, so content depth and credible links carry these SERPs. A production company or a design studio needs pages that out-answer whoever ranks now, plus the technical health to make those pages load fast. This is where a seo marketing agency london approach, content and links working together, beats a thin, keyword-stuffed page every time.',
  },
  {
    tag: 'Local services',
    name: 'Greater London',
    strategy: 'Local map pack',
    body:
      'Clinics, trades, and local firms from Croydon to Richmond need local seo london done properly: the map pack, a fully optimised Google Business Profile, reviews, and neighbourhood pages that bring nearby customers. Local seo services london is often the fastest route to enquiries for a service business, because the searcher already wants to buy and only needs to find someone close and credible. We build the local footprint that puts you in front of them.',
  },
];

/* ─── Demand rows (drives the animated DemandBars widget) ────────────── */
const DEMAND_ROWS = [
  { kw: 'seo agency london', v: '3,600', kd: 'KD 47 to 55 · Core commercial term', w: '100%' },
  { kw: 'seo services london', v: '1,000', kd: 'KD 36 · Strong intent', w: '28%' },
  { kw: 'best seo agency london', v: '720', kd: 'KD 32 · Comparison intent', w: '20%' },
  { kw: 'local seo london', v: '260', kd: 'KD 0 · Quick win', w: '9%' },
  { kw: 'ecommerce seo agency london', v: '170', kd: 'KD 6 · Quick win', w: '6%' },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ──────────────── */
const FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting started' },
  { key: 'results-cost', label: 'Results & cost' },
  { key: 'ai-search', label: 'AI search' },
  { key: 'services', label: 'Services' },
  { key: 'working', label: 'London & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Getting started
  { category: 'getting-started', question: 'How much do SEO services cost in London?',
    answer: 'We do not sell fixed packages, because a Camden clinic and a City law firm need different work. We scope a monthly plan to what your site actually needs and give you a fixed figure after a free SEO audit. Affordable seo services london options are available for startups on a tight budget, and the scope is agreed up front so there are no surprise invoices.' },
  { category: 'getting-started', question: 'Do I have to sign a long contract?',
    answer: 'No. We work month to month and you can cancel with 30 days notice. We keep London clients because their rankings go up, not because they are locked in. If a lock-in contract is the only way an agency can keep you, that tells you something about the results.' },
  { category: 'getting-started', question: 'How do I choose the best SEO agency in London?',
    answer: 'Ask three things: can you show real ranking data from past clients, who actually does the work, and what happens in the first 30 days. A good agency answers all three plainly and never guarantees page one in 30 days. If you are comparing a best seo agency london shortlist, those three questions separate the credible teams from the rest.' },
  { category: 'getting-started', question: 'What happens in the first 30 days of working together?',
    answer: 'We start with a full seo audit: technical health, current rankings, content gaps, and where AI engines do and do not cite you. From there we agree a plan and begin the fastest wins first, usually technical fixes and local SEO, because those move the needle soonest. You get a one-page report at the end of the month, in plain English.' },

  // Results & cost
  { category: 'results-cost', question: 'How long does SEO take in London?',
    answer: 'Technical fixes can move rankings in 4 to 8 weeks. New content pages usually take 3 to 5 months to mature, and the most competitive London terms, like seo agency london itself, can take 6 to 9 months. We are honest about timelines because search engine optimisation is a compounding investment, not a switch you flip.' },
  { category: 'results-cost', question: 'Can you guarantee page-one rankings?',
    answer: 'No honest agency can, because Google decides rankings, not us. What we guarantee is the work that reliably moves sites up: technical health, content that answers real questions, and credible links. We show you exactly what we do each month, so you can judge progress on evidence rather than promises.' },
  { category: 'results-cost', question: 'What drives the cost of SEO in London?',
    answer: 'Scope drives the cost, not our postcode. It depends on how competitive your terms are, whether you need local, ecommerce, technical, or international SEO, and how much content and link work is required to compete. A single-location service business needs less than a national ecommerce brand chasing hundreds of product terms.' },
  { category: 'results-cost', question: 'How do you report on progress?',
    answer: 'One page, once a month, that you can read in five minutes. It shows the keywords that moved, the traffic and enquiries that resulted, your visibility in AI answers, and exactly what we did and what comes next. No 40-page PDF full of vanity metrics that hide whether the work is paying off.' },

  // AI search
  { category: 'ai-search', question: 'What is AI SEO and does my London business need it?',
    answer: 'AI SEO optimises your content to be cited by AI answer engines like ChatGPT, Gemini, and Perplexity. A growing share of London buyers research there first, so if your competitors are cited and you are not, you quietly lose that audience. For most London businesses in 2026, ai seo london is now part of the core job, not an optional extra.' },
  { category: 'ai-search', question: 'What are GEO and AEO?',
    answer: 'Generative engine optimisation (GEO) structures your content and data so AI models lift it into the answers they generate. Answer engine optimisation (AEO) uses answer-first pages, question-style headings, and FAQ schema that engines can quote directly. We do both as standard on every London SEO account, because they are what earn a citation.' },
  { category: 'ai-search', question: 'Can you track our visibility in AI answers?',
    answer: 'Yes. We monitor whether your brand is mentioned and cited across the main AI engines, for the prompts your customers actually use, and report on it alongside your Google rankings. That way you can see your position in both search and AI answers in one place, rather than guessing at the half of the market that now starts with an assistant.' },
  { category: 'ai-search', question: 'Is AI search really replacing Google for my customers?',
    answer: 'Not replacing, splitting. Half of your customers still use Google, and a growing half ask an AI assistant first. Most agencies optimise only for the first group. We build for both, so your London business is found whether the buyer types a query into Google or asks ChatGPT for a recommendation. Betting on one channel is the risk here, not the other way round.' },

  // Services
  { category: 'services', question: 'Do you offer technical SEO in London?',
    answer: 'Yes. As a technical seo agency london we handle site speed, Core Web Vitals, crawlability, indexation, structured data, and the architecture that lets Google and AI models understand your site. Technical seo london is usually where the fastest wins hide, because a fast, clean, well-structured site ranks and gets cited more easily than a slow, tangled one.' },
  { category: 'services', question: 'Do you do ecommerce SEO for London stores?',
    answer: 'Yes. As an ecommerce seo agency london we build product and category pages that rank and convert, fix duplicate and thin-content issues, and structure your store so both shoppers and search engines can navigate it. Ecommerce seo london works best paired with a fast storefront, which is why we look at speed and structure together.' },
  { category: 'services', question: 'Can you handle international and multilingual SEO?',
    answer: 'Yes. London sells to the world, so as an international seo agency london and multilingual seo agency london we set up hreflang, market-specific content, and the technical structure that lets you rank in multiple countries and languages without cannibalising yourself. If your London business ships or serves beyond the UK, international SEO protects the traffic you already earn abroad.' },
  { category: 'services', question: 'Do you provide an SEO audit before we commit?',
    answer: 'Yes, and it is free. The seo audit covers technical health, your current rankings, content and link gaps, local visibility, and where AI engines cite you or your competitors. It is written in plain English so you can act on it, and there is no obligation to continue with us afterwards.' },

  // London & working with us
  { category: 'working', question: 'Are you a London SEO agency, and do you meet in person?',
    answer: 'We are a UK seo agency serving London across every borough. We work remotely with regular video reviews, which keeps your costs down without slowing the work. Being an efficient, remote-first seo company london means more of your budget goes into the work that moves rankings rather than into overheads you pay for but never see.' },
  { category: 'working', question: 'Do you do local SEO for a specific borough?',
    answer: 'Yes. Local seo services london covers the map pack, your Google Business Profile, reviews, and neighbourhood pages for the specific areas you serve, whether that is a single clinic in Islington or a chain across South London. Local SEO is often the fastest route to enquiries for a service business, because the searcher already wants to buy.' },
  { category: 'working', question: 'Who will I actually work with?',
    answer: 'A senior team, with the founder involved on every account. You are not handed to a junior after the sales call. You get a real monthly call and a one-page report, and the person who scopes your work stays close to the person who delivers it. That is a deliberate choice to keep quality high and communication honest.' },
  { category: 'working', question: 'Why choose FactoryJet over another London SEO company?',
    answer: 'Because we cover all three levers, technical, content, and links, plus AI SEO, with no lock-in and reporting you can actually read. Many agencies do content only, or lock you into a year, or skip AI search entirely. As a top seo agency london alternative built for 2026, we optimise for both Google and AI answers, and you keep everything we build if you ever leave.' },
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
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Agency London',
      serviceType: 'Search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'London' },
      url: CANONICAL,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#localbusiness`,
      name: 'FactoryJet SEO Agency London',
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'London' },
      parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'London', item: 'https://factoryjet.com/uk/london' },
        { '@type': 'ListItem', position: 4, name: 'SEO', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'SEO Agency London | AI SEO, GEO & AEO | FactoryJet',
      headline: 'SEO Agency in London That Gets You Found by Customers and AI',
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
  title: 'SEO Agency London | AI SEO, GEO & AEO | FactoryJet',
  description:
    'FactoryJet is an SEO agency in London for technical, local, ecommerce, and AI SEO. Generative and answer engine optimisation included, month to month, no lock-in. Get a free SEO audit.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'SEO Agency London | AI SEO, GEO & AEO | FactoryJet',
    description:
      'A London SEO agency that ranks you on Google and gets you cited by AI answers. Technical, local, ecommerce, and AI SEO, month to month, free audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/london-seo-og.webp', width: 1200, height: 630, alt: 'SEO Agency London by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function LondonSeoPage() {
  return (
    <>
      <script id="ld-london-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-londonseo">
        <main>

        {/* ═══ 1. HERO ═══ */}
        <section className="hero dotbg">
          <div className="aurora a1" />
          <div className="aurora a2" />
          <div className="wrap">
            <div className="hero-grid">
              <MotionFadeUp>
                <div className="bc">Home &#8250; UK &#8250; London &#8250; SEO</div>
                <div className="chips">
                  <span className="chip"><span className="d" />SEO Agency London</span>
                  <span className="chip">AI SEO · GEO · AEO</span>
                  <span className="chip">Month to month</span>
                </div>
                <h1>SEO Agency in London That Gets You Found by Customers and <span className="grad">AI</span></h1>
                <p className="sub">
                  FactoryJet is an <mark>SEO agency in London</mark> that ranks you on Google and gets you cited by AI
                  answers. Technical, local, ecommerce, and AI SEO, run by a senior team with no lock-in and reporting
                  you can read in five minutes.
                </p>

                <div className="byline">
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ sites and SEO projects</span></div>
                  <div className="upd">Last updated<br />1 Jul 2026</div>
                </div>

                <div style={{ maxWidth: 540 }}>
                  <HeroInlineForm region="uk" source="uk_london_seo_hero" submitLabel="Get a free SEO audit" />
                </div>
              </MotionFadeUp>

              <MotionFadeUp delay={0.1}>
                <TiltCard>
                  <div className="proof">
                    <div className="ph">How we run London SEO</div>
                    <div className="prow"><div><div className="pl">Approach</div><div className="pd">the three levers that move rankings</div></div><div className="pv">Technical + Content + Links</div></div>
                    <div className="prow"><div><div className="pl">AI search</div><div className="pd">cited by ChatGPT, Gemini, Perplexity</div></div><div className="pv g">GEO + AEO included</div></div>
                    <div className="prow"><div><div className="pl">Reporting</div><div className="pd">plain English, five minutes</div></div><div className="pv">Monthly, one page</div></div>
                    <div className="prow"><div><div className="pl">Contracts</div><div className="pd">cancel with 30 days notice</div></div><div className="pv">Month to month</div></div>
                    <div className="prow"><div><div className="pl">Ownership</div><div className="pd">content, links, data stay yours</div></div><div className="pv g">You keep everything</div></div>
                  </div>
                </TiltCard>
              </MotionFadeUp>
            </div>
          </div>
        </section>

        {/* ═══ 2. DEFINITIONS (answer-first / GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="grid2">
                <div className="def">
                  <span className="lab">What is SEO?</span>
                  <p>
                    <mark>SEO</mark> (search engine optimisation) is the work of improving a website so it ranks higher
                    on Google for the terms your customers search. It combines three levers: technical health, content
                    that answers real questions, and links from trusted sites. Done well, it turns your website into a
                    channel that brings enquiries every month rather than a brochure nobody finds.
                  </p>
                </div>
                <div className="def">
                  <span className="lab">What is AI SEO, GEO, and AEO?</span>
                  <p>
                    <mark>AI SEO</mark> optimises your site to be quoted by AI answer engines like ChatGPT, Gemini, and
                    Perplexity. Generative engine optimisation and answer engine optimisation are the practices behind
                    it: clear answers, structured data, and cited facts that AI models lift into their responses. It is
                    the same discipline as SEO, extended to the half of buyers who now start with an assistant.
                  </p>
                </div>
              </div>
              <p className="lead" style={{ maxWidth: 900 }}>
                The shift that matters in 2026 is not that Google went away. It is that search split in two. A visitor
                looking for an SEO agency in London might type the query into Google and scan the results, or ask
                ChatGPT for a recommendation and read the answer it generates. A site built only for the first path is
                invisible on the second. Every page we build for a London business is engineered to be readable by
                both a search engine and an AI model, so your visibility does not depend on which door your customer
                walks through.
              </p>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <div className="band">
          <div className="in wrap">
            <span className="b"><span className="d" />No lock-in contracts</span>
            <span className="b"><span className="d" />Senior team, not juniors</span>
            <span className="b"><span className="d" />AI SEO included, not an add-on</span>
            <span className="b"><span className="d" />You keep everything we build</span>
          </div>
        </div>

        {/* ═══ 4. AI CITATION DEMO ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="ai">
                <span className="eyebrow">The 2026 edge · live demo</span>
                <h2>Watch a London brand get cited in an AI answer</h2>
                <p>
                  Half your customers still use Google. A growing half ask an AI assistant. Most agencies optimise
                  only for the first. We build for both. Tap an engine below to see how a well-optimised London
                  business gets quoted in a generated answer.
                </p>
                <AICitationDemo />
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 5. WHY LONDON SEO IS DIFFERENT ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 760 }}>
                <span className="eyebrow">Why London is different</span>
                <h2>London SEO is not the same as SEO anywhere else</h2>
                <p className="lead">
                  London is the most competitive search market in the UK, and it plays by its own rules. A strategy
                  that ranks a business in a smaller city will stall here. Four things make a london seo agency&apos;s job
                  distinct, and each one shapes how we plan your campaign.
                </p>
              </div>
              <div className="grid2 mt-8">
                <div className="card">
                  <h3>The most competitive SERPs in the UK</h3>
                  <p style={{ fontSize: 14 }}>
                    London is home to around one million businesses, more than any other UK region according to ONS
                    figures, and a large share of them chase the same commercial terms. That density means the front
                    page for &quot;seo agency london&quot; or &quot;seo company london&quot; is fought over harder than almost any
                    other UK query. Winning here needs all three levers working together, not a single tactic.
                  </p>
                </div>
                <div className="card">
                  <h3>London sells globally, so SEO goes international</h3>
                  <p style={{ fontSize: 14 }}>
                    A huge number of London businesses ship or serve customers well beyond the UK. That makes an
                    international seo agency london and multilingual seo agency london capability essential, not
                    optional: hreflang, market-specific content, and a structure that lets you rank in several
                    countries at once without your own pages competing against each other.
                  </p>
                </div>
                <div className="card">
                  <h3>You need local and national at the same time</h3>
                  <p style={{ fontSize: 14 }}>
                    A London business often has to win the local map pack for the borough it sits in and the national
                    organic results for its category. A Camden clinic wants nearby patients and wider authority; a
                    Shoreditch SaaS wants the map pack and the country-wide term. We run local seo london and national
                    SEO in parallel, so you show up two ways rather than one.
                  </p>
                </div>
                <div className="card">
                  <h3>London adopts AI search early</h3>
                  <p style={{ fontSize: 14 }}>
                    London&apos;s tech, finance, and creative sectors are among the earliest and heaviest users of AI
                    assistants for research. That means ai seo london matters here sooner than in most markets: if
                    your buyers are already asking ChatGPT and Perplexity for recommendations, being absent from those
                    answers costs you real enquiries today, not in some distant future.
                  </p>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 6. SEO SERVICES ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ textAlign: 'center' }}>
                <span className="eyebrow">London SEO services</span>
                <h2>Eight ways we grow your organic traffic</h2>
              </div>
              <div className="grid4 mt-8">
                <div className="card svc"><h3><span className="n">01</span>Technical SEO</h3><p>Speed, Core Web Vitals, crawlability, and schema, so Google trusts your London site. Technical seo london is where the fastest wins usually hide.</p></div>
                <div className="card svc"><h3><span className="n">02</span>Local SEO</h3><p><mark>Local seo london</mark>: Google Business Profile, the map pack, reviews, and area pages that bring nearby customers.</p></div>
                <div className="card svc"><h3><span className="n">03</span>Ecommerce SEO</h3><p><mark>Ecommerce seo london</mark>: product and category pages built to rank and convert, from a proper ecommerce seo agency london.</p></div>
                <div className="card svc"><h3><span className="n">04</span>Content SEO</h3><p>Pages that answer what London buyers actually search, written to out-rank whoever holds the top spots now.</p></div>
                <div className="card svc"><h3><span className="n">05</span>AI SEO / GEO / AEO</h3><p><mark>AI seo london</mark>: generative and answer engine optimisation to get cited by ChatGPT, Gemini, and Perplexity.</p></div>
                <div className="card svc"><h3><span className="n">06</span>International SEO</h3><p><mark>International seo agency london</mark>: hreflang, market content, and multi-country structure for brands that sell abroad.</p></div>
                <div className="card svc"><h3><span className="n">07</span>Link Building</h3><p>Real links from credible UK and industry sites that build authority. No link farms, no spam, no shortcuts that get you penalised.</p></div>
                <div className="card svc"><h3><span className="n">08</span>SEO Audit</h3><p>A plain-English seo audit of exactly what is blocking your London site, free and with no obligation to continue.</p></div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 7. LONDON AREA EXPLORER (interactive) ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ maxWidth: 760 }}>
                <span className="eyebrow">London, area by area · interactive</span>
                <h2>Different London businesses need different SEO</h2>
                <p className="lead">
                  Pick an area to see how the strategy changes. The right plan for a Shoreditch startup is the wrong
                  plan for a City law firm, and a good seo company london reads that difference before it writes a
                  single line of content.
                </p>
              </div>
              <AreaExplorer areas={AREAS} />
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 8. COMPARISON TABLE ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <span className="eyebrow">How we compare</span>
              <h2 style={{ maxWidth: 640 }}>FactoryJet vs. a typical London agency vs. a freelancer</h2>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Typical London agency</th>
                    <th>Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Lock-in contract</td><td className="fj"><span className="yes">None, month to month</span></td><td><span className="mid">6 to 12 months</span></td><td>Varies</td></tr>
                  <tr><td>AI SEO (GEO + AEO) included</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td>Technical + content + links</td><td className="fj"><span className="yes">All three</span></td><td><span className="mid">Often content only</span></td><td><span className="mid">Usually one</span></td></tr>
                  <tr><td>Local map pack + national organic</td><td className="fj"><span className="yes">Both</span></td><td><span className="mid">One or the other</span></td><td><span className="mid">One</span></td></tr>
                  <tr><td>Who does the work</td><td className="fj"><span className="yes">Senior team</span></td><td><span className="mid">Often juniors</span></td><td>The freelancer</td></tr>
                </tbody>
              </table>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 9. PROCESS ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ textAlign: 'center' }}>
                <span className="eyebrow">How it works</span>
                <h2>From free audit to compounding results in five steps</h2>
              </div>
              <div className="steps">
                <div className="step card"><span className="k">01</span><h3>Free SEO audit</h3><p>We check technical health, rankings, content gaps, and where AI engines cite you or your rivals.</p></div>
                <div className="step card"><span className="k">02</span><h3>Strategy</h3><p>We scope a month-to-month plan to your goals and your London market, fastest wins first.</p></div>
                <div className="step card"><span className="k">03</span><h3>Fix and build</h3><p>Technical fixes, new content, and credible links, plus GEO and AEO so AI answers quote you.</p></div>
                <div className="step card"><span className="k">04</span><h3>Earn authority</h3><p>Links and content compound while we track rankings and AI visibility together each month.</p></div>
                <div className="step card"><span className="k">05</span><h3>Report and refine</h3><p>A one-page report you can read in five minutes, then we double down on what is working.</p></div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 10. MARKET + DEMAND ═══ */}
        <section className="sec dotbg">
          <div className="wrap">
            <MotionFadeUp>
              <span className="eyebrow">The London SEO market</span>
              <h2 style={{ maxWidth: 760 }}>Thousands of London businesses search for an <mark>SEO agency</mark> every month</h2>
              <div className="msplit">
                <div>
                  <p className="lead">
                    &quot;<mark>seo agency london</mark>&quot; alone draws around 3,600 searches a month, with &quot;<mark>seo services
                    london</mark>&quot; another 1,000, and comparison terms like &quot;best seo services london&quot; and &quot;top seo
                    agency london&quot; adding more. The top three organic results take most of the clicks, so the gap
                    between page one and page two is the gap between a full pipeline and silence. These are buyers
                    looking for seo services in london and a seo marketing agency london right now, not people
                    browsing for ideas.
                  </p>
                  <p className="lead">
                    We serve every London borough, from a City law firm to a Croydon clinic, and pair local seo london
                    with national organic so you show up whichever way a buyer searches. Because we work remotely with
                    regular video reviews, an efficient seo company london model puts more of your budget into the work
                    that moves rankings.
                  </p>
                  <div className="mstats">
                    <div className="mstat"><div className="n"><CountUp value={3600} /></div><div className="l">&quot;seo agency london&quot; monthly searches</div></div>
                    <div className="mstat"><div className="n"><CountUp value={1000} /></div><div className="l">&quot;seo services london&quot; monthly searches</div></div>
                  </div>
                  <div className="pills">
                    <a href="#">City of London</a>
                    <a href="#">Shoreditch</a>
                    <a href="#">Canary Wharf</a>
                    <a href="#">Camden</a>
                    <a href="#">Hackney</a>
                    <a href="#">Soho</a>
                  </div>
                </div>
                <div className="demand">
                  <div className="dh">
                    <p>London · Monthly Search Demand</p>
                    <span className="tag">DataForSEO · Jul 2026</span>
                  </div>
                  <DemandBars rows={DEMAND_ROWS} />
                  <div className="dsrc">Source: DataForSEO, London / United Kingdom, July 2026</div>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 11. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec dotbg" id="faq">
          <div className="wrap">
            <MotionFadeUp>
              <div style={{ textAlign: 'center' }}>
                <span className="eyebrow">FAQ</span>
                <h2>London SEO questions we get asked</h2>
              </div>
              <div className="faq-grid">
                <aside className="faq-sidebar">
                  <span className="faq-sidebar-topics">Topics</span>
                  <nav className="faq-sidebar-nav">
                    {FAQ_CATEGORIES.map((c) => (
                      <a key={c.key} href={`#faq-${c.key}`}>
                        {c.label}
                        <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                      </a>
                    ))}
                  </nav>
                  <div className="faq-sidebar-cta">
                    <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="seo" btnVariant="secondary-light" />
                    <p>Replies within 24 hours.</p>
                  </div>
                </aside>

                <div>
                  {FAQ_CATEGORIES.map((c) => (
                    <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                      <div className="faq-cat-header">
                        <span className="faq-cat-bar" />
                        <p className="faq-cat-label">{c.label}</p>
                      </div>
                      {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                        <details key={f.question} className="faq-item">
                          <summary>
                            <span className="q-text">{f.question}</span>
                            <span className="chevron">
                              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                          </summary>
                          <div className="faq-ans"><p>{f.answer}</p></div>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* ═══ 12. FINAL CTA ═══ */}
        <section className="sec">
          <div className="wrap">
            <MotionFadeUp>
              <div className="finalcta">
                <h2>Ready to rank in London and in AI answers?</h2>
                <p>
                  Start with a free SEO audit. We will show you where you stand today across Google and AI search,
                  with no cost and no obligation, then give you an honest plan to close the gap.
                </p>
                <div className="cta-actions">
                  <ModalCTAButton label="Get a free SEO audit →" region="uk" modalVariant="seo" btnVariant="secondary-light" />
                  <a className="cta-outline" href="/uk/web-design">See our web design work</a>
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
