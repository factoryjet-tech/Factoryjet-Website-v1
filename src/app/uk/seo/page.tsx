import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './seo.css';

const CANONICAL = 'https://factoryjet.com/uk/seo';
const UPDATED = '2026-08-25';
const UPDATED_LABEL = '25 August 2026';

/* ─── Breadcrumb source of truth (drives trail + BreadcrumbList) ───── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'SEO Consultant', url: CANONICAL },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'consultant', label: 'Working with a consultant' },
  { key: 'basics',    label: 'SEO basics' },
  { key: 'ai-search', label: 'SEO vs AI search' },
  { key: 'local',     label: 'Local & ecommerce SEO' },
  { key: 'results',   label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Working with a consultant ──
  { category: 'consultant', question: 'What does an SEO consultant do?',
    answer: 'An SEO consultant is one senior person who plans and runs your search work, instead of a team you get handed to after the sales call. The job covers the same four things an agency does: technical health, page content and structure, links and reputation, and measurement. The difference is that the person who scopes the work is the person doing it, so nothing gets lost between the pitch and the delivery.' },
  { category: 'consultant', question: 'Is an SEO consultant better than an SEO agency?',
    answer: 'Neither is better. They suit different jobs. A consultant fits when you want senior judgement, a clear plan, and someone who can work alongside your existing developer or marketing manager. An agency retainer fits when you need volume: lots of content every month, ongoing digital PR, and a bench of specialists. If your real bottleneck is knowing what to do rather than having hands to do it, pick the consultant.' },
  { category: 'consultant', question: 'How do I choose an SEO consultant in the UK?',
    answer: 'Google publishes its own advice on hiring an SEO and it is worth following. Ask for examples of previous work, ask how they measure success and in what timeframe, ask about their experience in your industry and your country, and ask whether they will share every change they make and the reasoning behind it. Google states plainly that no one can guarantee a number one ranking, so treat any guarantee as a reason to walk away.' },
  { category: 'consultant', question: 'What does an SEO consultant engagement look like?',
    answer: 'Usually one of three shapes. A one-off audit gives you a prioritised list of what is wrong and what to fix first, which you can hand to your own developer. A fixed-price project takes a defined piece of work from start to finish, like a technical rebuild or a set of pages. A monthly retainer covers ongoing content, links, and measurement. We agree which shape fits after a short call.' },
  { category: 'consultant', question: 'Do I need an SEO consultant, or can I do it myself?',
    answer: 'Google says that if you run a small local business you can probably do much of the work yourself, and that is honest advice. Claim your Google Business Profile, write one clear page for each thing you sell, gather real reviews, and fix anything slow or broken. A consultant earns their place when the market is competitive, when the site has technical faults you cannot diagnose, or when you have run out of time to do it properly.' },
  { category: 'consultant', question: 'Who will I actually be talking to?',
    answer: 'Bhavesh Barot, the founder, on every account. Not a salesperson who hands you over, and not a junior working from a checklist. He scopes the work, plans it, and stays on it, so the person answering your email is the person doing the work. That is the whole point of hiring a consultant rather than a retainer, and it is why we keep the number of active accounts deliberately small.' },
  { category: 'consultant', question: 'Can you work with our in-house team or existing agency?',
    answer: 'Yes, and it is common. Plenty of businesses already have a developer, a marketing manager, or an agency doing part of the job well. In that case the consultant role is to set the plan, review the work, and settle the technical decisions nobody else can. We write recommendations your own team can act on, with the reasoning attached, so you are not stuck depending on us to keep moving.' },
  { category: 'consultant', question: 'Do you work with businesses outside your own city?',
    answer: 'Yes. We consult for UK businesses wherever they are based, from London and Manchester to smaller towns with no local specialist at all. The work happens remotely with regular video reviews, so you get the same senior attention regardless of postcode. Where you sit only changes which local searches we target for you, never the standard of the work or how often you hear from us.' },

  // ── SEO basics ──
  { category: 'basics', question: 'What does an SEO agency actually do?',
    answer: 'An SEO agency helps your website show up when people search for what you sell. That covers four things: fixing the technical health of your site so Google can crawl and index it, improving the content and structure of your pages, earning links and mentions from other sites, and tracking what ranks. A good agency ties all of it to real enquiries, not vanity keyword positions.' },
  { category: 'basics', question: 'How do you do SEO for a small business in the UK?',
    answer: 'Start with the basics done well. Claim and fill out your Google Business Profile, make sure each page targets one clear thing people search for, write genuinely useful content that answers real questions, and earn a few links from local or industry sites that already have trust. Fix anything slow or broken. Then track which pages bring enquiries and do more of what works.' },
  { category: 'basics', question: 'What is a backlink, and do they still matter?',
    answer: 'A backlink is a link from another website to yours. Search engines still read them as votes of confidence: a link from a respected UK publication or industry body tells Google your business is credible. They matter, but quality beats quantity now. Ten links from real, relevant sites do far more than a hundred low-value ones, and spammy link buying can actively hurt you.' },
  { category: 'basics', question: 'How do you do keyword research?',
    answer: 'We look at the exact phrases your buyers type, not the ones you assume they use. Using live UK search data we map demand, how hard each term is to rank for, and buyer intent, then separate the quick wins from the long plays. The goal is a short list of terms you can realistically win that lead to enquiries, not traffic for its own sake.' },
  { category: 'basics', question: 'Do you do technical SEO?',
    answer: 'Yes, and it is usually where the fastest gains hide. Technical SEO covers site speed, mobile performance, crawlability, indexing, structured data, and fixing errors that quietly stop pages from ranking. We audit all of it, prioritise what actually moves visibility, and make sure the fixes ship in the server-rendered HTML so both Google and AI crawlers can read your pages without running JavaScript.' },
  { category: 'basics', question: 'What are the main types of SEO?',
    answer: 'Most teams split SEO into four parts. On-page SEO is your content and page structure. Technical SEO is speed, crawling, and indexing. Off-page SEO is links and reputation. Local SEO is maps and location searches. In 2026 we add a fifth layer: making all four legible to AI engines and answer boxes, so you are named in AI answers as well as ranked below them.' },

  // ── SEO vs AI search ──
  { category: 'ai-search', question: 'Is SEO dead or just evolving in 2026?',
    answer: 'Evolving, firmly. What changed is where the answer gets read. In the UK, Ofcom reports that about 30 percent of searches now show an AI Overview, so the answer often sits above the links. SEO is not dead, but ranking alone is not the finish line any more. Being named inside the AI answer now matters as much as ranking below it.' },
  { category: 'ai-search', question: 'Is SEO being phased out?',
    answer: 'No. Search engines and AI answers both still learn from the open web, and Google AI Overviews are built on the same index that ranks normal results. What is being phased out is the old assumption that a top-ten ranking guarantees clicks. The work is shifting, not disappearing. Businesses structured to be found and quoted are getting more visibility, not less.' },
  { category: 'ai-search', question: 'Will AI kill SEO?',
    answer: 'AI is changing SEO, not ending it. More than half of UK adults now use tools like ChatGPT and Gemini, so a growing share of buyers form an opinion inside an AI answer before they reach your site. The click is getting rarer, the visibility is not. The winners are businesses built to be the source the engine quotes. That is a change in method, not the end of search.' },
  { category: 'ai-search', question: 'Do you also do AI SEO and GEO?',
    answer: 'Yes, and it is our edge over a traditional agency. Alongside classic SEO we do generative engine optimisation, which shapes how AI models describe and cite you, and answer engine optimisation, which structures pages so an engine can lift a clear answer. We track whether ChatGPT, Gemini, Perplexity, and Google AI Overviews actually name you. If you want that focus on its own, see our AI SEO page.' },
  { category: 'ai-search', question: 'Is SEO better than paid ads?',
    answer: 'They do different jobs. Paid ads buy visibility the moment you switch them on and stop the moment you switch them off. SEO builds an asset that keeps working, compounding over months at a lower cost per enquiry once it lands. Most businesses we work with use ads for speed and SEO for durable growth. If you can only pick one for the long run, SEO usually wins on return.' },

  // ── Local & ecommerce SEO ──
  { category: 'local', question: 'What is local SEO?',
    answer: 'Local SEO is the work of showing up when someone searches for a service near them, like "SEO agency Manchester" or "plumber near me". It centres on your Google Business Profile, consistent name, address, and phone details across the web, local reviews, and pages built for the areas you serve. For any business with a location or a service area, it is often the fastest route to enquiries.' },
  { category: 'local', question: 'Can I do local SEO myself?',
    answer: 'Yes, the basics are very doable. Claim your Google Business Profile, keep your name, address, and phone consistent everywhere, gather genuine reviews, and write a clear page for each area you serve. Many small businesses get real results this way. Where an agency helps is competitive areas, technical fixes, and the ongoing content and links that keep you ahead once the easy wins are done.' },
  { category: 'local', question: 'What is ecommerce SEO?',
    answer: 'Ecommerce SEO is search optimisation for online stores. It covers category and product pages, site structure, fast loading, clean handling of filters and variants, and product schema so your items can appear in search and shopping results. Increasingly it also means being named when a shopper asks a chatbot for the best option. Done well, it brings buyers with intent, not just browsers.' },
  { category: 'local', question: 'Are you an ecommerce SEO agency?',
    answer: 'Yes. We work with Shopify, WooCommerce, and custom stores, optimising category and product pages, fixing the technical issues that hold ranking back, and structuring pages so both Google and AI engines surface your products. We also build the content around buying decisions that pulls in shoppers earlier. If you run a store, our ecommerce SEO and Shopify SEO work is built for exactly that.' },
  { category: 'local', question: 'Do you work outside London?',
    answer: 'Yes. We are a UK SEO agency working with businesses across London, Manchester, Birmingham, Leeds, Bristol, and beyond. The work is handled remotely with regular video reviews, so a company anywhere in the UK gets the same senior team and the same standard. Where you are based does not change the quality of the work, only which local searches we target for you.' },
  { category: 'local', question: 'Do you cover SEO in Manchester and other cities?',
    answer: 'We do. We run SEO for businesses in Manchester, Birmingham, Leeds, London, and across the UK, and we build local pages and Google Business Profiles for the areas each client serves. City-level SEO is mostly about local intent and proximity signals, so we target the exact searches your customers in that city use, wherever our team happens to sit.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How much does SEO cost for a small business in the UK?',
    answer: 'It depends on scope, not a fixed price tag. A local business chasing a handful of searches is a smaller job than a national brand competing in a crowded category. What shapes it is where you are starting, how competitive your market is, and how much content and authority you already have. We scope it after a short call and a free audit, so the plan matches your situation rather than a template.' },
  { category: 'results', question: 'How much should a small business pay for SEO?',
    answer: 'Enough to fund real work, not so little that nothing meaningful gets done. Underfunded SEO usually means thin content and low-value links that can do more harm than good. The right level depends on how competitive your market is and how fast you want to move. We would rather scope honestly to your goals than quote a figure that sounds nice and delivers nothing. The free audit shows you what the work involves first.' },
  { category: 'results', question: 'Is SEO worth it for small businesses?',
    answer: 'Often more than for large ones. A focused small business can be genuinely the clearest answer to a specific search, where a sprawling competitor is vague. SEO brings people who are already looking for what you sell, at a lower cost per enquiry than ads over time. It is not instant, but for most small businesses the compounding return makes it one of the best-value channels available.' },
  { category: 'results', question: 'How long does SEO take to work?',
    answer: 'Technical and structural fixes can change how you rank within weeks. Meaningful movement on competitive terms usually takes a few months, because content depth and trust build over time. We front-load the fast wins so you see early progress, then compound it. Anyone promising page one in days is either targeting terms nobody searches or selling something that will not last.' },
  { category: 'results', question: 'Do you guarantee rankings?',
    answer: 'No honest agency can, and you should be wary of any that does. Search engines decide rankings, not us, and the algorithms change constantly. What we guarantee is the work: the audit, the fixes, the content, and transparent reporting on where you actually move. A track record across 500-plus projects is how we build confidence, not a promise no one can keep.' },
  { category: 'results', question: 'How do you report results?',
    answer: 'Clearly, and tied to your business, not vanity metrics. You get regular reporting on rankings, organic traffic, and enquiries, plus where you appear in AI answers and Google AI Overviews. We show what moved, what we did, and what is next, in plain language. If a report needs a glossary to understand, it is hiding a lack of results. Ours are built to be read in five minutes.' },
  { category: 'results', question: 'Who actually does the work?',
    answer: 'A senior team, with the founder on every account. You will not be handed to a junior after the sales call, and the work is not quietly offshored to a content mill. That is deliberate: SEO that gets you ranked and quoted in AI answers takes judgement, not a template. When you email, the founder replies, and the person planning your strategy is the person doing it.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, and runs a free SEO audit on your site: what is holding your rankings back, where you show up today, and where a competitor is ahead. That first look is genuinely useful whether or not we end up working together.' },
];

/* ─── Named UK SEO agencies (open self-disclosure, ItemList) ────────── */
const SEO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A founder-led SEO consultancy rather than a retainer shop. We build pages to rank in Google and to be quoted by ChatGPT, Gemini, Perplexity, and Google AI Overviews, with AI visibility tracked as a first-class metric and one senior person on your account throughout.' },
  { name: 'The SEO Works', note: 'A long-running Sheffield-based SEO and digital agency working with brands and SMBs across the UK.' },
  { name: 'ClickSlice', note: 'A London SEO agency known for technical SEO and link building for small and mid-sized businesses.' },
  { name: 'JDR Group', note: 'A Midlands agency that pairs SEO with inbound marketing for B2B, manufacturing, and industrial firms.' },
  { name: 'Go Up', note: 'A London SEO and digital PR agency with a strong content and press-coverage footprint.' },
  { name: 'First Place SEO', note: 'A UK SEO specialist focused on measurable organic growth for small businesses.' },
];

/* ─── JSON-LD @graph ───────────────────────────────────────────────── */
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
      '@type': 'Person',
      '@id': 'https://factoryjet.com/about#bhavesh-barot',
      name: 'Bhavesh Barot',
      jobTitle: 'Chief Technical Architect',
      url: 'https://factoryjet.com/about',
      worksFor: { '@id': 'https://factoryjet.com/#organization' },
      knowsAbout: [
        'Search engine optimisation',
        'Technical SEO',
        'Local SEO',
        'Ecommerce SEO',
        'Generative engine optimisation',
      ],
      sameAs: [
        'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        'https://github.com/factoryjet-tech',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'SEO Consultant UK',
      serviceType: 'SEO consulting',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      description:
        'Founder-led SEO consulting for UK businesses, covering technical SEO, on-page and content, local SEO, ecommerce SEO, and visibility inside AI answers.',
      author: { '@id': 'https://factoryjet.com/about#bhavesh-barot' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK SEO agencies',
      itemListElement: SEO_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
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
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'SEO Consultant UK',
      inLanguage: 'en-GB',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#organization' },
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    { ...breadcrumbSchema, '@id': `${CANONICAL}#breadcrumb` },
  ],
};

export const metadata: Metadata = {
  title: 'SEO Consultant UK | Senior SEO, Founder Led | FactoryJet',
  description:
    'A UK SEO consultant who plans and does the work himself. Technical, local, and ecommerce SEO, plus getting named in AI answers. Free SEO audit before you commit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'SEO Consultant UK | Senior SEO, Founder Led | FactoryJet',
    description:
      'Founder-led SEO consulting for UK businesses. One senior person on your account, covering technical, on-page, local, and ecommerce SEO, plus visibility inside ChatGPT, Gemini, Perplexity, and Google AI Overviews. Free SEO audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/seo-og.webp', width: 1200, height: 630, alt: 'SEO consultant for UK businesses, FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function SeoUKPage() {
  return (
    <>
      <script id="ld-uk-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-seo">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK SEO Consultant</span>
                  <span className="chip">Founder on every account</span>
                  <span className="chip">Google + AI Answers</span>
                </div>
                <h1>SEO Consultant UK: Ranked in Google, Named in the AI Answers Above It</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Bhavesh Barot is an SEO consultant for UK businesses. One senior person plans your search work
                  and does it, covering technical, on-page, local, and ecommerce SEO, plus the AI visibility work
                  most agencies still skip. No handover to a junior, no packages you have to fit into.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects, AI-native since day one</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_seo_hero" submitLabel="Get my free SEO audit" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What we optimise for</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google organic</div><div className="scorecard-note">the ten blue links, still ranked</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Ranked</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google AI Overviews</div><div className="scorecard-note">the summary above the links</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Cited</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">ChatGPT &amp; Gemini</div><div className="scorecard-note">named in the written answer</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Named</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Local &amp; maps</div><div className="scorecard-note">Google Business Profile, ranked</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Found</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Technical &amp; schema</div><div className="scorecard-note">in server HTML, crawler-readable</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>100%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an SEO consultant do?</span>
              <p>
                An SEO consultant is one senior person who plans and runs your search work, rather than an agency
                team you get passed to after the sales call. The job covers four things: the technical health of
                your site, the content and structure of your pages, the links and mentions that build trust, and
                the measurement that proves it worked. In 2026 it covers a fifth: making sure AI answers name you.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The change that matters in 2026 is where the answer gets read. For years the goal was a high spot in a
              list of links. Now a growing share of buyers read a written answer at the top of the page, or ask a
              chatbot, and never scroll. Ranking still counts. Being the source the engine names when it writes the
              answer counts just as much, and most SEO providers are not built for it yet.
            </p>
            <p className="lead mt-4" style={{ maxWidth: 920 }}>
              We also work the way an agency does when that is what a business needs, with ongoing content, links,
              and reporting. The difference is not the list of tasks. It is who does them and who you talk to.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Ranked in Google, quoted in AI answers</div>
              <div className="trust-pill"><span className="dot dot-orange" />Technical, on-page, local, and ecommerce SEO</div>
              <div className="trust-pill"><span className="dot dot-orange" />AI visibility tracked, not guessed</div>
              <div className="trust-pill"><span className="dot dot-orange" />One senior consultant, not a handover</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why SEO still matters, and what changed</span>
                <h2>Buyers are reading the answer, not just the links</h2>
                <div className="stack mt-6">
                  <p>
                    The way people search changed faster than most agencies did. In the UK, the communications
                    regulator Ofcom reports that about 30 percent of searches now show an AI Overview, and more than
                    half of adults say they see these summaries often. When the answer sits at the top of the page,
                    the ten blue links below it get read less.
                  </p>
                  <p>
                    The click gap is measurable. Pew Research tracked real browsing and found people clicked through
                    to a website about 8 percent of the time when an AI summary appeared, against 15 percent when it
                    did not, roughly half as often. A source link inside the summary was clicked just 1 percent of the
                    time. Ranking below the answer is worth far less than being named inside it.
                  </p>
                  <p>
                    Meanwhile ChatGPT drew 1.8 billion UK visits in the first eight months of 2025, up from 368
                    million a year earlier. Your next customer may build a shortlist inside a chatbot before they ever
                    open Google. Modern SEO makes sure your business is on it, and still ranking in the results below.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Search in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '~30%', t: 'of UK searches now show an AI Overview', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '8% vs 15%', t: 'link click rate with an AI summary vs without', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
                    { v: '1.8bn', t: 'UK ChatGPT visits, first 8 months of 2025, up from 368 million', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '3bn', t: 'Google searches a month in the UK, used by 82% of adults', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4A. CONSULTANT OR AGENCY ═══ */}
        <section className="sec-lg" id="consultant">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Consultant or agency</span>
              <h2>What an SEO consultant gives you that a retainer does not</h2>
              <p className="lead mt-4">
                Most SEO in the UK is sold as a monthly retainer with a team behind it. That works when you need
                volume. It works badly when what you actually need is one senior person to decide what to do next.
                Here is the honest difference, so you can pick the shape that fits your business rather than the
                shape that suits the seller.
              </p>
            </div>

            <div className="col-2 mt-10" style={{ gap: 24 }}>
              <div className="card card-top-orange">
                <span className="eyebrow">A consultant engagement</span>
                <h3 className="mt-4">One senior person, accountable end to end</h3>
                <ul className="fact-list mt-6">
                  <li><b>The person who scopes it does it.</b> No handover to a junior after the call, and no account manager relaying questions to someone you never meet.</li>
                  <li><b>You get the reasoning, not just the task list.</b> Every recommendation comes with why it matters and what happens if you skip it, so your team can judge it.</li>
                  <li><b>It fits around what you already have.</b> If you have a developer, a marketing manager, or an agency doing part of the job well, we set the plan and review their work rather than replacing them.</li>
                  <li><b>Scope can be small.</b> A one-off audit is a complete piece of work. You are not required to start a monthly commitment to get an answer.</li>
                  <li><b>Decisions happen in one conversation.</b> Technical calls that stall for weeks inside an agency get settled on a call, because the person deciding is the person building.</li>
                  <li><b>Fewer accounts, deliberately.</b> Senior attention does not scale, so we cap how many businesses are active at once rather than pretending otherwise.</li>
                </ul>
              </div>

              <div className="card">
                <span className="eyebrow">An agency retainer</span>
                <h3 className="mt-4">More hands, when volume is the bottleneck</h3>
                <ul className="fact-list mt-6">
                  <li><b>Better when you need output every month.</b> Twenty articles, ongoing digital PR, and constant page production need a bench of writers and outreach people.</li>
                  <li><b>Better for very broad sites.</b> A retailer with tens of thousands of product pages needs sustained hands, not one adviser.</li>
                  <li><b>Specialists on tap.</b> A dedicated link builder, a dedicated content editor, and a dedicated analyst are genuinely useful at scale.</li>
                  <li><b>Continuity when people leave.</b> A team absorbs a departure more easily than a single consultant can.</li>
                  <li><b>The trade-off is distance.</b> The senior person who won the account is rarely the person doing the work six months in, and that is where quality usually slips.</li>
                  <li><b>The other trade-off is fixed shape.</b> Retainers tend to bill a set amount of work whether or not that is the work your site needs this month.</li>
                </ul>
              </div>
            </div>

            <div className="card mt-8" style={{ maxWidth: 980 }}>
              <span className="eyebrow">Engagement shapes we offer</span>
              <h3 className="mt-4">Three ways to work with us, described in plain words</h3>
              <p className="mt-4">
                We do not sell tiers or packages. We agree the shape after a short call, once we can see the site.
              </p>
              <ol className="step-list mt-6">
                <li><b>One-off SEO audit</b>A single fixed piece of work. You get a prioritised list of what is holding the site back, in the order it should be fixed, with the reasoning attached. Plenty of clients take that to their own developer and never come back, which is fine.</li>
                <li><b>Fixed-price milestone project</b>A defined job with a defined end, such as a technical rebuild, a migration, or a set of pages built properly. Payment is tied to milestones you can see, not to hours logged.</li>
                <li><b>Monthly retainer</b>Ongoing content, links, technical maintenance, and reporting, for businesses in competitive markets where the work never really stops. Same senior person, month after month.</li>
                <li><b>Advisory sessions</b>Booked time when an in-house team wants a second opinion on a plan, a migration, or an agency proposal they are unsure about. No implementation, just judgement.</li>
              </ol>
            </div>

            <div className="col-3 mt-10">
              <div className="svc-card">
                <h3>Pick a consultant if</h3>
                <ul className="fact-list mt-4">
                  <li>You already have people who can build, but nobody who can decide what to build.</li>
                  <li>You have been burned by a retainer that produced reports rather than rankings.</li>
                  <li>Your site has a technical fault nobody has been able to diagnose.</li>
                  <li>You want to understand the work well enough to keep doing it yourself later.</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>Pick an agency if</h3>
                <ul className="fact-list is-cross mt-4">
                  <li>You need a high volume of new content published every single month.</li>
                  <li>You are running paid, social, email, and SEO and want one supplier for all of it.</li>
                  <li>Your catalogue runs to tens of thousands of pages needing constant attention.</li>
                  <li>Your procurement process requires a company with a large named team.</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>Do it yourself if</h3>
                <ul className="fact-list is-cross mt-4">
                  <li>You run a small local business in a market with little competition.</li>
                  <li>Your main need is a Google Business Profile and a few clear service pages.</li>
                  <li>You have time to learn, and Google publishes the starter guide free.</li>
                  <li>You would rather spend on the product first and revisit search later.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4B. HOW TO HIRE ONE (Google Search Central, cited) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Before you hire anyone</span>
                <h2>The questions Google itself says to ask an SEO</h2>
                <div className="stack mt-6">
                  <p>
                    You do not have to take our word for what a good SEO consultant looks like. Google publishes its
                    own guidance on hiring one, and it is short, blunt, and free to read. We have reproduced the
                    questions it recommends below, because a consultant who flinches at any of them is telling you
                    something useful.
                  </p>
                  <p>
                    The same page says two things worth repeating. First, that if you run a small local business you
                    can probably do much of the work yourself, and that starting with Google&apos;s own starter guide is
                    sensible. Second, that no one can guarantee a number one ranking, and that you should be wary of
                    anyone who claims a special relationship with Google.
                  </p>
                  <p>
                    Google also asks whether an SEO cites official documentation as evidence, and whether advice about
                    optimising for AI features lines up with Google&apos;s published guidance on generative AI. That is a
                    fair test, and one we are happy to be measured against.
                  </p>
                </div>
                <p className="src-note mt-6">
                  Question list from <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer nofollow">Google Search Central, &quot;Do you need an SEO?&quot;</a>, page last updated 5 June 2026. Reproduced under the <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer nofollow">Creative Commons Attribution 4.0 licence</a>. Contractions expanded to match the rest of this page; wording otherwise unchanged.
                </p>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Google&apos;s recommended questions</span>
                <ul className="fact-list mt-6">
                  <li>Can you show me examples of your previous work and share some success stories?</li>
                  <li>Do you follow the Google Search Essentials?</li>
                  <li>What kind of results do you expect to see, and in what timeframe?</li>
                  <li>How do you measure your success?</li>
                  <li>What is your experience in my industry?</li>
                  <li>What is your experience in my country and city?</li>
                  <li>How long have you been in business?</li>
                  <li>How can I expect to communicate with you?</li>
                  <li>Will you share every change you make to my site, and explain the reasoning behind your recommendations?</li>
                </ul>
              </div>
            </div>

            <div className="col-2 mt-10" style={{ gap: 24 }}>
              <div className="card">
                <span className="eyebrow">Warning signs Google names</span>
                <h3 className="mt-4">Reasons to walk away</h3>
                <ul className="fact-list is-cross mt-6">
                  <li>Anyone who guarantees a number one ranking on Google.</li>
                  <li>Anyone claiming a special relationship with Google, or a priority submission to it.</li>
                  <li>Any firm that contacts you out of the blue to say your site is missing from the major search engines.</li>
                  <li>Anyone secretive about what they intend to do, or unwilling to explain it clearly when asked.</li>
                  <li>Any tool sold as approved or endorsed by Google. Google says it does not evaluate or endorse third-party SEO tools.</li>
                  <li>Anyone who wants write access to your Search Console before an audit has even happened.</li>
                </ul>
                <p className="src-note mt-6">
                  Summarised from <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer nofollow">Google Search Central, &quot;Do you need an SEO?&quot;</a>
                </p>
              </div>
              <div className="card">
                <span className="eyebrow">How we answer them</span>
                <h3 className="mt-4">Our replies, in advance</h3>
                <ul className="fact-list mt-6">
                  <li><b>Guarantees:</b> none on rankings, ever. We guarantee the work and the reporting, not the algorithm.</li>
                  <li><b>Evidence:</b> recommendations cite Google&apos;s own documentation where it exists, so you can check them.</li>
                  <li><b>Access:</b> read-only Search Console access for the audit. Write access only if and when you decide to proceed.</li>
                  <li><b>Change log:</b> every change to your site is listed, with the reason, so nothing happens quietly.</li>
                  <li><b>Communication:</b> the founder replies within 24 hours, in plain language, without a ticket queue.</li>
                  <li><b>AI advice:</b> our approach to AI answers is built on Google&apos;s published guidance on generative AI features, not folklore.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. WHAT SEO INCLUDES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What professional SEO includes in 2026</h2>
              <p className="lead mt-4">
                Ranking is not one trick, and neither is getting quoted by an AI engine. It is a stack of work that
                makes your business the easiest correct answer to find, read, and trust. Every FactoryJet SEO
                programme covers all eight.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Technical SEO foundation</h3>
                <p className="mt-4">Site speed, mobile performance, crawlability, indexing, and structured data. We clear the errors that quietly stop pages from ranking, and ship fixes in server-rendered HTML so Google and AI crawlers read them without running JavaScript.</p>
              </li>
              <li className="card">
                <h3>On-page and content SEO</h3>
                <p className="mt-4">Each page targets one clear thing people search for, states the answer near the top, and reads like the source an engine would quote. We build genuine depth around real buyer questions, not padding that adds nothing.</p>
              </li>
              <li className="card">
                <h3>Local SEO</h3>
                <p className="mt-4">Google Business Profile, consistent name, address, and phone signals, local reviews, and pages built for the areas you serve. For any business with a location or service area, this is often the fastest route to enquiries.</p>
              </li>
              <li className="card">
                <h3>Ecommerce SEO</h3>
                <p className="mt-4">Category and product pages, clean handling of filters and variants, fast loading, and product schema so your items appear in search and shopping results, and get named when shoppers ask a chatbot for the best option.</p>
              </li>
              <li className="card">
                <h3>Links and digital PR</h3>
                <p className="mt-4">Credible mentions on sites the search engines and AI models already trust. Quality beats quantity now, so we earn relevant, real links rather than chasing volume that can quietly hurt you.</p>
              </li>
              <li className="card">
                <h3>AI answers and GEO</h3>
                <p className="mt-4">Entity data, schema, answer-first structure, and the wording that decides whether ChatGPT, Gemini, Perplexity, and Google AI Overviews name your business. This is the part a traditional SEO agency usually skips.</p>
              </li>
              <li className="card">
                <h3>Keyword and competitor research</h3>
                <p className="mt-4">We map the exact phrases your buyers use with live UK search data, weigh difficulty against intent, and study who is ranking now. The output is a short list of terms you can realistically win.</p>
              </li>
              <li className="card">
                <h3>Reporting and measurement</h3>
                <p className="mt-4">Regular reporting on rankings, organic traffic, and enquiries, plus where you appear in AI answers and AI Overviews. Plain language, tied to your business, readable in five minutes.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">How it works</span>
              <h2>Seven things we do to get you ranked and cited</h2>
              <p className="lead mt-4">
                A repeatable method, not a black box. Here is the work, in the order we do it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Audit and benchmark', d: 'We check the technical health of your site, where you rank today, and where you show up in AI answers, so we know the starting line before we touch anything.' },
                { n: '02', t: 'Research the demand', d: 'We map the exact searches your buyers use with live UK data, weigh difficulty against intent, and separate the quick wins from the terms worth a longer fight.' },
                { n: '03', t: 'Fix the technical foundation', d: 'Speed, indexing, crawlability, and structured data, confirmed in the raw HTML both Google and AI crawlers read. This is usually where the fastest gains hide.' },
                { n: '04', t: 'Optimise pages for search and answers', d: 'Each target page targets one clear query, states its answer up top, and is structured so an engine can rank it and lift a clean answer from it.' },
                { n: '05', t: 'Build topical depth', d: 'We cover the surrounding questions so search engines and AI models treat you as the authority on the topic, not a thin page hoping to get lucky.' },
                { n: '06', t: 'Earn links and mentions', d: 'Digital PR and citations on sites that already have trust, because being named elsewhere is a large part of being ranked, and of being named in an AI answer.' },
                { n: '07', t: 'Measure and compound', d: 'We track rankings, enquiries, and where you get named across engines month on month, double down on what moves, and keep the content fresh so you stay found.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 6A. WHAT IS IN THE FREE AUDIT ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The free SEO audit</span>
              <h2>Exactly what you get before you commit to anything</h2>
              <p className="lead mt-4">
                Google&apos;s guidance says an audit should give you realistic estimates of improvement and an honest
                estimate of the work involved. That is what ours does. It is a real piece of work, not a sales
                document with your logo dropped into it, and it is yours whether or not you hire us.
              </p>
            </div>

            <div className="col-2 mt-10" style={{ gap: 24 }}>
              <div className="card card-top-orange">
                <span className="eyebrow">What is included</span>
                <h3 className="mt-4">Twelve checks, written up in plain English</h3>
                <ul className="fact-list mt-6">
                  <li>Where you rank today for the terms that actually bring enquiries, not the ones that flatter a report.</li>
                  <li>Whether ChatGPT, Gemini, Perplexity, and Google AI Overviews name your business when asked about your category.</li>
                  <li>Crawl and index check: which of your pages Google can reach, and which it has quietly dropped.</li>
                  <li>Page speed and Core Web Vitals on mobile, measured on your real pages rather than a lab average.</li>
                  <li>Whether your content is present in the server HTML, or hidden behind JavaScript that crawlers may not run.</li>
                  <li>Structured data check: what schema you ship, whether it matches what the page actually shows.</li>
                  <li>Duplicate and competing pages on your own site that are splitting your own rankings.</li>
                  <li>Internal linking: which important pages nothing links to, and which get all the link equity.</li>
                  <li>Your Google Business Profile and local signals, if you serve a location or an area.</li>
                  <li>A short competitor read: who is ahead on your main terms, and what they have that you do not.</li>
                  <li>Broken links, redirect chains, and anything returning an error to a crawler.</li>
                  <li>A prioritised fix list, ordered by effect against effort, so you know what to do first on Monday.</li>
                </ul>
              </div>

              <div className="card">
                <span className="eyebrow">What is not included</span>
                <h3 className="mt-4">The honest limits</h3>
                <ul className="fact-list is-cross mt-6">
                  <li>No ranking guarantees. Nobody can offer those honestly, and Google says so on its own hiring page.</li>
                  <li>No implementation. The audit tells you what to fix. Fixing it is a separate, scoped piece of work.</li>
                  <li>No write access to your Search Console. Read-only is all we ask for at this stage.</li>
                  <li>No hundred-page automated tool export dressed up as analysis. Tool output is a starting point, not a report.</li>
                  <li>No link package, and no bulk directory submissions. Automated links are a risk, not a service.</li>
                  <li>No obligation, no follow-up sequence, and no call from a salesperson you have never spoken to.</li>
                </ul>
                <p className="src-note mt-6">
                  Audit scope reflects <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer nofollow">Google&apos;s guidance on SEO audits and Search Console access</a>.
                </p>
              </div>
            </div>

            <div className="card mt-8" style={{ maxWidth: 980 }}>
              <span className="eyebrow">After the audit</span>
              <h3 className="mt-4">What the first three months usually look like</h3>
              <ol className="step-list mt-6">
                <li><b>Weeks one and two: clear the blockers</b>Indexing faults, broken redirects, missing or wrong structured data, and anything stopping a crawler reading your pages. These are the fixes that can move things within weeks.</li>
                <li><b>Weeks three to six: rebuild the pages that matter</b>The handful of pages closest to bringing enquiries get restructured so they answer one clear question up top and read like the source an engine would quote.</li>
                <li><b>Weeks six to ten: build the surrounding depth</b>The related questions your buyers ask get proper answers, so search engines and AI models treat you as the authority on the topic rather than a thin page hoping to get lucky.</li>
                <li><b>Weeks ten to twelve: earn mentions and measure</b>Digital PR and citations on sites that already have trust, then a full read on what moved: rankings, enquiries, and whether AI answers now name you.</li>
              </ol>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want to see where you really stand?'}
          sub={'Send your domain and the terms that matter. We will show you the gap to page one and what closes it, with no retainer talk.'}
          label={'Get a free UK SEO review'}
        />

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>A consultant, an agency retainer, or doing it yourself</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Same table, three honest columns. There are rows here where the agency wins, and we have left them in.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <caption className="src-note" style={{ captionSide: 'bottom', textAlign: 'left', padding: '12px 18px' }}>
                  Comparison of a founder-led consultant engagement, a typical UK agency retainer, and in-house or DIY search work.
                </caption>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet consultant</th>
                    <th>Traditional SEO agency</th>
                    <th>DIY / in-house</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Ranks you in Google</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Optimised for AI Overviews &amp; cited by ChatGPT</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Technical &amp; on-page SEO</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Basic</span></td></tr>
                  <tr><td className="feat">Local &amp; ecommerce SEO</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Basic</span></td></tr>
                  <tr><td className="feat">Transparent reporting</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">N/A</span></td></tr>
                  <tr><td className="feat">AI visibility tracked as a metric</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">No</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">The founder</span></td><td><span className="partial">Often juniors</span></td><td>You</td></tr>
                  <tr><td className="feat">Start with a one-off piece of work</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">High volume of new content each month</td><td className="fj"><span className="partial">Limited</span></td><td><span className="yes">Yes</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Cover for holiday and staff turnover</td><td className="fj"><span className="partial">Limited</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">Works alongside your existing agency</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="yes">N/A</span></td></tr>
                  <tr><td className="feat">Ranking guarantee offered</td><td className="fj"><span className="no">Never</span></td><td><span className="partial">Sometimes claimed</span></td><td><span className="no">N/A</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From audit to ranked and cited in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>SEO audit</h3><p className="mt-4">We check technical health, rankings, and AI visibility, and show you where you appear today and where a competitor is ahead.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Foundation</h3><p className="mt-4">Technical fixes, on-page structure, schema, and crawler access. The fast wins that change how engines read you within weeks.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Content and authority</h3><p className="mt-4">Answer-first pages, topical depth, local and ecommerce work, and credible links that get you ranked and named in AI answers.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Measure and compound</h3><p className="mt-4">Monthly reporting on rankings, enquiries, and AI visibility, with the plan tuned to what is actually moving.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK businesses that need to be found where buyers now look</h2>
              <p className="lead mt-4">
                SEO pays off fastest for businesses whose customers research online before they buy. Three groups make
                up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Stores whose shoppers search Google and now ask a chatbot for the best option before they buy. We rank your category and product pages and get your brand named in those answers.</p>
              </div>
              <div className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms where a buyer builds a shortlist from a search or an AI answer. We make sure you are on it, with the expertise and trust signals Google and the models want to cite.</p>
              </div>
              <div className="svc-card">
                <h3>Local and small businesses</h3>
                <p className="mt-4">Focused businesses that can be the clearest answer to a specific, local search. We pick the terms you can win, build the local pages, and make you the option engines reach for.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">The UK SEO market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are searching for SEO help, and the demand is specific</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    The Department for Business and Trade counts 5.7 million private sector businesses in the UK at
                    the start of 2025, and 5.64 million of them have fewer than 50 employees. That is the real
                    market: small firms, most without an in-house search specialist, competing for the same
                    handful of positions.
                  </p>
                  <p>
                    Search demand reflects it. &quot;seo consultant uk&quot; draws around 720 searches a month,
                    separate from the thousands searching for an agency, and the split is not accidental. People
                    searching for a consultant usually want one person to talk to. People searching for an agency
                    usually want a team. Local and ecommerce terms like &quot;local seo services&quot; and
                    &quot;ecommerce seo agency&quot; sit lower in difficulty again, and are winnable quickly.
                  </p>
                  <p>
                    That mix is the plan. We chase the low-difficulty local and ecommerce terms for fast movement,
                    then build toward the harder national terms over time, for businesses in London, Manchester,
                    Birmingham, Leeds, and across the UK. London is the deepest and most contested of those markets,
                    so it gets its own breakdown of the search demand and how the work changes borough by borough:
                    read <a href="/uk/london/seo">SEO services in London</a>.
                  </p>
                </div>
                <p className="src-note mt-6">
                  Business counts: <a href="https://www.gov.uk/government/statistics/business-population-estimates-2025/business-population-estimates-for-the-uk-and-regions-2025-statistical-release" target="_blank" rel="noopener noreferrer nofollow">Department for Business &amp; Trade, Business population estimates 2025</a>, published 2 October 2025.
                </p>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">SEO London</a>
                  <a className="city-pill" href="/uk/manchester">SEO Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">SEO Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">SEO Leeds</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/shopify-seo">Shopify SEO</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'seo agency uk', v: '2,900', w: '100%', kd: 'Gated · weakest rival 360 links' },
                    { kw: 'seo company uk', v: '2,900', w: '100%', kd: 'Hard · weakest rival 126 links' },
                    { kw: 'seo services uk', v: '1,300', w: '45%', kd: 'Hard · weakest rival 126 links' },
                    { kw: 'seo consultant uk', v: '720', w: '25%', kd: 'Winnable now · weakest rival 26 links' },
                    { kw: 'local seo services', v: '1,600', w: '55%', kd: 'KD 2 · Quick win' },
                    { kw: 'ecommerce seo agency', v: '1,000', w: '34%', kd: 'KD 0 · Quick win' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, August 2026. &quot;Weakest rival&quot; is the number of referring domains held by the least-linked site on page one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK SEO consultants and agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK firms doing real
                search work, including us. Talk to a few, ask them Google&apos;s questions from earlier on this page, and
                pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {SEO_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for SEO agency terms, July 2026. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an SEO engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size SEO packages, because a local firm chasing a handful of searches and a
                    national brand fighting for a whole category are different jobs. What shapes the work is where you
                    are starting, how competitive your market is, and how much content and authority you already have
                    to build on.
                  </p>
                  <p>
                    A business with a healthy site often needs mostly on-page, technical, and answer-first structure to
                    start climbing. A newer site needs foundations first. We scope it after a short call and a free SEO
                    audit, so the plan matches your situation rather than a template, and you know what the work is
                    before you commit.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Where you rank and appear today</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How competitive your market is</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Content and authority you already have</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Local, national, or ecommerce focus</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free SEO audit before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>SEO consultant questions UK founders actually ask</h2>
              <p className="lead mt-4" style={{ margin: '16px auto 0', maxWidth: 640 }}>
                {FAQ_ITEMS.length} questions, answered straight. If yours is not here, ask the founder directly.
              </p>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
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
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13A. WHO WROTE THIS (E-E-A-T) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="card card-top-orange" style={{ maxWidth: 980 }}>
              <span className="eyebrow">Who wrote this page</span>
              <div className="byline mt-4" style={{ maxWidth: 620 }}>
                <div className="av">BB</div>
                <div className="who">
                  <b>Bhavesh Barot</b>, Founder and Chief Technical Architect, FactoryJet<br />
                  <span>SEO consultant for UK businesses</span>
                </div>
                <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
              </div>
              <p className="mt-6" style={{ maxWidth: 760 }}>
                Bhavesh plans and runs the search work on every FactoryJet account, across more than 500 projects.
                He works on technical SEO, site architecture, local search, ecommerce catalogues, and the newer
                problem of getting a business named inside AI answers rather than only ranked below them. He wrote
                this page, and he is the person who replies when you use the form on it.
              </p>
              <ul className="fact-list mt-6" style={{ maxWidth: 760 }}>
                <li><b>What he does day to day:</b> technical audits, page structure, schema, internal linking, and measurement across UK, US, and India accounts.</li>
                <li><b>How to check:</b> profiles below, and a free audit of your own site that you can judge on its merits before committing to anything.</li>
                <li><b>What he will not do:</b> guarantee a ranking, buy links in bulk, or hand your account to someone you have not met.</li>
              </ul>
              <div className="flex-wrap mt-6">
                <a className="city-pill" href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>
                <a className="city-pill" href="https://github.com/factoryjet-tech" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="city-pill" href="/about">About FactoryJet</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See where your business really ranks</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free SEO audit: where you
              rank in Google today, where you show up in AI answers, and where a competitor is ahead. No spam, no
              obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/web-design" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See web design</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
