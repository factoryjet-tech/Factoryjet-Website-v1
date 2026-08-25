import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import './local-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/local-seo';
const UPDATED = '2026-08-25';
const UPDATED_HUMAN = '25 August 2026';

/* ─── ONE array drives the visible trail and the BreadcrumbList JSON-LD ──── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Local SEO Services', url: CANONICAL },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${CANONICAL}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── FAQ source of truth (drives UI + FAQPage schema) ───────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'Local SEO services basics' },
  { key: 'gbp',       label: 'Google Business Profile & reviews' },
  { key: 'technical', label: 'The technical side' },
  { key: 'ai-search', label: 'Local SEO vs AI search' },
  { key: 'results',   label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Local SEO services basics ──
  { category: 'basics', question: 'What are local SEO services?',
    answer: 'Local SEO services get a business found in the map pack and in near me searches for the area it serves. That means your Google Business Profile, your listings on UK directories, your reviews, and pages written for the places you cover. We do all four, then check whether AI assistants name you.' },
  { category: 'basics', question: 'What do local SEO services cost in the UK?',
    answer: 'There is no single figure, because the work is scoped to your situation. We shape it three ways. A one-off local visibility audit. A foundation project on fixed-price milestones. Ongoing profile, citation and review work on a monthly retainer. We quote after a short call, never from a price list.' },
  { category: 'basics', question: 'How is local SEO different from ordinary SEO?',
    answer: 'Ordinary SEO competes for a topic across a whole country. Local SEO competes for a place: your town, your postcode, the radius you drive to. It leans much harder on your Google Business Profile, your listing consistency and your reviews. You are chasing three map pack slots, not a national top ten.' },
  { category: 'basics', question: 'How do I get my business to show up in local search?',
    answer: 'Four things, in order. Build out your Google Business Profile with the right categories, real photos and current hours. Match your name, address and phone number across every UK directory. Keep genuine reviews coming in. Publish real pages for the places you serve. Skip one and the map pack stays shut.' },
  { category: 'basics', question: 'Can I do local SEO myself?',
    answer: 'Yes, the basics. Claim and fill in your Google Business Profile, ask happy customers for reviews, correct obvious listing errors. The hard part is keeping it up for months, and knowing whether your map pack position really moved or whether ChatGPT and Gemini now name you. That is where most attempts stop.' },
  { category: 'basics', question: 'What is the map pack?',
    answer: 'The map pack is the block of three business listings, shown with a map, that Google puts above the ordinary results for a local search. Think plumber near me. It is built from your Google Business Profile, your reviews and your relevance to that area. Most local clicks go there.' },
  { category: 'basics', question: 'What are local citations?',
    answer: 'A citation is any online mention of your business name, address and phone number. They sit on directories such as Yell, Yelp and Bing Places. Google treats how consistent those mentions are as a trust signal. An old address or a mismatched phone number quietly works against you.' },
  { category: 'basics', question: 'Do you write location pages?',
    answer: 'Yes, and we write them to be useful rather than templated. A real location page names the area, mentions nearby neighbourhoods, and reflects what you genuinely do there. It also carries LocalBusiness structured data, which is code stating your address and hours in a form search engines read directly.' },

  // ── Google Business Profile & reviews ──
  { category: 'gbp', question: 'What is a Google Business Profile and do I need one?',
    answer: 'A Google Business Profile is the free listing that puts your business on Google Maps and in local search, with your hours, photos, services and reviews. If anyone searches for what you do near where you are, you need one, claimed and verified rather than left as Google generated it.' },
  { category: 'gbp', question: 'How does Google decide the map pack order?',
    answer: 'Google says local results are based mainly on relevance, distance and prominence. Relevance is how well your profile matches the search. Distance is how far you are from the searcher. Prominence is how well known you are, which Google says depends partly on links to your site and your review count.' },
  { category: 'gbp', question: 'How do reviews affect local rankings?',
    answer: 'Reviews are one of the strongest map pack signals. Google states that more reviews and positive ratings can help your local ranking. Volume, recency, rating and whether you reply all matter together. A steady trickle of recent reviews beats a burst that stopped two years ago.' },
  { category: 'gbp', question: 'How do you handle duplicate or incorrect listings?',
    answer: 'We audit every directory your business appears on, then get duplicates merged, old addresses corrected and wrong numbers removed. Duplicates split your reviews across two entries and leave Google unsure which one is real. It is dull work, and it is often the fastest ranking gain available.' },
  { category: 'gbp', question: 'Do you handle multi-location businesses?',
    answer: 'Yes. Every branch needs its own Google Business Profile, its own reviews and its own map pack fight. We run them as a set, with one standard across all of them and reporting broken out by location, so one strong branch cannot hide four weak ones.' },
  { category: 'gbp', question: 'Can I keep managing my own Google Business Profile?',
    answer: 'Yes, and for day to day things we encourage it. Reply to reviews, update your hours, post your photos. Flag anything structural first. Category changes, new service lists or bulk edits across locations can move your ranking, so those are worth a two minute check before you save.' },
  { category: 'gbp', question: 'How many reviews do I actually need?',
    answer: 'There is no magic number. Volume, recency and rating work together, and the bar is set by your local competitors rather than by Google. Ten recent reviews with thoughtful replies usually beat forty from three years ago. We build a repeatable asking system instead of chasing a target.' },
  { category: 'gbp', question: 'Which UK directories do you list a business on?',
    answer: 'We start with the ones Google checks: Google Business Profile, Bing Places, Apple Business Connect, Yell, Yelp UK, Thomson Local, FreeIndex, Scoot, 192.com and Cylex. We match your details to your Companies House record and to any trade body listing. Then we add your sector directories.' },

  // ── The technical side ──
  { category: 'technical', question: 'What is LocalBusiness structured data?',
    answer: 'Structured data is code added to your pages that states facts in a form search engines read directly. LocalBusiness is the type for a physical business. It carries your name, address, phone number, hours and service area. We write it as JSON-LD and check it matches the visible page.' },
  { category: 'technical', question: 'Does site speed affect local rankings?',
    answer: 'Yes, though less than your profile and reviews. Google measures three Core Web Vitals. Largest Contentful Paint is load speed. Cumulative Layout Shift is how much the page jumps. Interaction to Next Paint is response. We test with Lighthouse and fix what fails, on mobile first.' },
  { category: 'technical', question: 'How do you track calls and enquiries from local search?',
    answer: 'We set up event tracking in Google Tag Manager and report it in GA4, which is Google Analytics 4. Calls, form fills and direction requests each get their own event. Where it matters we move to server-side tracking. Consent Mode and first-party data keep it inside UK GDPR rules.' },
  { category: 'technical', question: 'What happens to my local rankings if I redesign the site?',
    answer: 'Nothing, if the migration is done properly. Before launch we build a redirect map pairing every old URL with its new one, and ship each as a 301 redirect so ranking passes across. A canonical tag stops duplicate versions competing. Structured data gets rebuilt, not dropped.' },
  { category: 'technical', question: 'Which website platforms do you work with?',
    answer: 'Most of them. We implement local schema markup and location pages on WordPress and WooCommerce, on Shopify, and on custom builds in Next.js and React. If your site sits somewhere unusual we work with your developer. Local SEO rarely needs a replatforming project, and we will say so.' },

  // ── Local SEO vs AI search ──
  { category: 'ai-search', question: 'Is SEO dead or evolving in 2026?',
    answer: 'Evolving. Ofcom reports that about 30% of UK searches now show an AI overview, and that more than half of UK adults see those summaries often. Pew Research Center found, in the United States, that a link was clicked on 8% of visits with a summary against 15% without. The map pack still gets clicks.' },
  { category: 'ai-search', question: 'Can ChatGPT do SEO?',
    answer: 'Partly. ChatGPT can draft a profile description or suggest review replies. It cannot merge a duplicate listing, verify your address with Google, or earn you a real review. We use AI tools to move faster on writing and analysis, then do the work no chatbot can touch.' },
  { category: 'ai-search', question: 'Will SEO still exist in five years?',
    answer: 'Almost certainly, in some shape. People will keep asking for recommendations, whether typed into Google or spoken to an assistant, and someone has to earn that answer. The channel keeps shifting, as it already shifted from desktop to mobile to voice. Skipping visibility work has never worked.' },
  { category: 'ai-search', question: 'Will local SEO help with AI assistant recommendations?',
    answer: 'Yes, and that is increasingly the point. An assistant answering best plumber near me leans on the same signals local SEO always built: a complete Google Business Profile, consistent listings, real reviews. Get those right and you are more likely to be named in the answer, not only ranked in Maps.' },
  { category: 'ai-search', question: 'Which AI assistants do you check?',
    answer: 'We check ChatGPT from OpenAI, Gemini from Google, Claude from Anthropic, Perplexity, and Google AI Overviews. For each one we run the prompts a customer would really use, for your area, and record whether you are named. That becomes a tracked number in your monthly report.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How long do local SEO services take to work?',
    answer: 'Some things move in weeks. Fixing a broken profile or merging a duplicate listing can change how you appear almost straight away. Climbing inside the map pack and building a review base usually takes a few months, because trust builds rather than switches on. We front-load the quick fixes.' },
  { category: 'results', question: 'How do you report results?',
    answer: 'One plain report each month. Map pack position for the searches that matter, Google Business Profile performance, review growth, calls and form fills, and whether AI assistants named you when we checked. We build it in Looker Studio so you can open it any time.' },
  { category: 'results', question: 'Do you guarantee a map pack position?',
    answer: 'No, and be careful of anyone who does. Your local ranking depends on your profile, your reviews, your listings and your competitors, and no agency controls all four. What we commit to is the work, and an honest monthly account of where you actually stand.' },
  { category: 'results', question: 'How do I choose a local SEO provider in the UK?',
    answer: 'Ask what happens month to month, not what gets promised. A real provider can show you profile work, a citation audit, a review system and map pack rank reporting. Ask who does the work. Be wary of a guaranteed position, or local SEO sold as an add-on to a website build.' },
  { category: 'results', question: 'Are you a UK agency?',
    answer: 'Yes. We work with local businesses across London, Manchester, Birmingham, Leeds and the rest of the UK. The work happens close to the ground, checking UK directories and reading reviews for your actual area, coordinated remotely with regular calls. Senior attention either way.' },
  { category: 'results', question: 'Who does the work?',
    answer: 'A senior team, with the founder on every account. You are not handed to a junior running an automated citation tool. The person editing your Google Business Profile and reading your reviews is the person who can explain, in plain words, why your map pack position moved.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call. On that call we run a free local SEO audit: your profile, your citations, your map pack position, and whether AI assistants name you today.' },
];

/* ─── Named UK local SEO agencies (open self-disclosure, ItemList) ──── */
const LOCAL_SEO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A senior team that treats local SEO as its own discipline rather than a bolt-on, and tracks AI answer visibility for near me searches as a real metric.' },
  { name: 'The SEO Works', note: 'A long-running Nottingham SEO agency with a dedicated local SEO service line and a large in-house team.' },
  { name: 'LocalIQ', note: 'The local marketing arm of the USA Today Network, running local SEO and profile management at scale across the UK.' },
  { name: 'OneBase Media', note: 'A London agency specialising in local SEO and profile management for multi-location brands.' },
  { name: 'Phoenix Web Services', note: 'A UK web design and SEO agency with a dedicated local SEO and citation-building service.' },
  { name: 'Passion Digital', note: 'A London performance agency running local SEO alongside paid media.' },
];

/* ─── JSON-LD @graph ─────────────────────────────────────────────── */
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
      name: 'Local SEO Services UK',
      serviceType: 'Local SEO',
      description:
        'Local SEO services for UK businesses: Google Business Profile optimisation, UK citation cleanup, review generation, LocalBusiness structured data, location pages, and AI answer visibility tracking.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
      // Reference the single Person node by @id. Inlining a second copy here
      // would put two Bhavesh Barot entities in one graph, which is exactly the
      // competing-duplicate problem the 2026-08-24 schema sweep was cleaning up.
      author: { '@id': 'https://factoryjet.com/#bhavesh' },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    // One WebPage node, carrying dateModified. Deliberately a single page-level
    // entity linked by @id to the Service and the BreadcrumbList, so nothing
    // competes with the Organization emitted by the root layout.
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Local SEO Services UK',
      description:
        'What local SEO services cover in the UK, how the map pack is decided, what a FactoryJet engagement includes, and how AI answer visibility is tracked.',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      mainEntity: { '@id': `${CANONICAL}#service` },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      author: { '@id': 'https://factoryjet.com/#bhavesh' },
    },
    {
      '@type': 'Person',
      '@id': 'https://factoryjet.com/#bhavesh',
      name: 'Bhavesh Barot',
      jobTitle: 'Chief Technical Architect',
      url: 'https://factoryjet.com/about',
      worksFor: { '@id': 'https://factoryjet.com/#organization' },
      sameAs: [
        'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        'https://github.com/factoryjet-tech',
      ],
    },
    breadcrumbSchema,
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK local SEO agencies',
      itemListElement: LOCAL_SEO_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      dateModified: UPDATED,
      // Generated from the SAME array the page renders. Never hand-duplicate:
      // schema that disagrees with visible content is cloaking-adjacent.
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  // Retargeted 2026-08-25 at the verified phrase "local seo services uk".
  // Title kept clear of "&", which renders as "&amp;" and pushes the measured
  // title length four characters past the 60-character bar.
  title: 'Local SEO Services UK | Map Pack + AI Answers | FactoryJet',
  description:
    'Local SEO services for UK businesses. We build out your Google Business Profile, clean up your citations, grow real reviews, and get AI answers to name you.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Local SEO Services UK | Map Pack + AI Answers | FactoryJet',
    description:
      'Local SEO services for UK businesses. Google Business Profile, UK citations, reviews and location pages done properly, plus AI answer visibility for near me searches. Free local SEO audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/local-seo-og.webp', width: 1200, height: 630, alt: 'Local SEO services UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function LocalSeoUKPage() {
  return (
    <>
      <script id="ld-uk-local-seo" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-localseo">
      <main>

        {/* Visible trail first, from the same `crumbs` array as the JSON-LD. */}
        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Local SEO Services</span>
                  <span className="chip">Map Pack + Google Business Profile</span>
                  <span className="chip">AI Answers Tracked</span>
                </div>
                <h1>Local SEO Services for UK Businesses That Need the Map Pack and the AI Answer</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet runs local SEO services for UK businesses with a shop, an office or a service area to
                  cover. We build out your Google Business Profile, clean up your citations, grow real reviews and
                  write location pages that earn their place. Then we check whether ChatGPT, Gemini and Google AI
                  Overviews name you.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />{UPDATED_HUMAN}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_local_seo_hero" submitLabel="Get my free local SEO audit" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What we optimise for</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Google Business Profile</div><div className="scorecard-note">built out properly, not just claimed</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Optimised</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">The map pack</div><div className="scorecard-note">the top three local results</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Targeted</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Citations &amp; directories</div><div className="scorecard-note">name, address, phone kept consistent</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Consistent</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Review generation</div><div className="scorecard-note">a system, not left to chance</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Growing</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">AI answers for &quot;near me&quot;</div><div className="scorecard-note">tracked like any other ranking</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Tracked</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 1b. WHAT GOES WRONG vs WHAT WE DO ═══ */}
        <section className="sec" style={{ backgroundColor: '#F9F9FC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="wrap">
            <div style={{ maxWidth: 860 }}>
              <span className="eyebrow">The honest comparison</span>
              <h2>What usually goes wrong, and what we do instead</h2>
              <p className="lead mt-4">
                Disappointing local SEO tends to fail in the same five places.
              </p>
            </div>
            <div className="col-2 mt-10">
              <div className="card">
                <span className="eyebrow">What usually goes wrong</span>
                <ul className="tick-list tick-no">
                  <li>The Google Business Profile gets claimed once, then never touched again.</li>
                  <li>An automated tool sprays your details across low-quality directories and never checks them.</li>
                  <li>Duplicate listings are left in place, so your reviews sit split across two entries.</li>
                  <li>Location pages are one paragraph with the town name swapped, published in bulk.</li>
                  <li>The monthly report is a screenshot of rankings with no calls, no enquiries and no map pack position.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What we do instead</span>
                <ul className="tick-list tick-yes">
                  <li>Your profile is worked on every month: categories, services, photos, opening hours and posts.</li>
                  <li>Every UK citation is checked by hand against your Companies House record and your website.</li>
                  <li>Duplicates get merged or removed first, because that is usually the fastest ranking gain.</li>
                  <li>Location pages name real neighbourhoods and carry LocalBusiness structured data per branch.</li>
                  <li>The report shows map pack position, calls, form fills, review growth and AI answer mentions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What are local SEO services?</span>
              <p>
                Local SEO services are the work of getting a business found in the map pack and in &quot;near me&quot;
                searches for the area it serves. That covers your Google Business Profile, your listings on UK
                directories, your reviews, and pages written for the places you actually cover. In 2026 it also
                covers being the business an AI assistant names when someone nearby asks for a recommendation.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The three fundamentals have not changed: a solid Google Business Profile, consistent citations, and
              enough reviews to hold a map pack slot. What changed is what now sits above the map pack.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />Real local content, not spun templates</div>
              <div className="trust-pill"><span className="dot dot-orange" />Google Business Profile fully optimised, not just claimed</div>
              <div className="trust-pill"><span className="dot dot-orange" />Review generation on a system, not left to chance</div>
              <div className="trust-pill"><span className="dot dot-orange" />Senior team, founder on every account</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why local SEO, why now</span>
                <h2>The map pack still matters. So does what now sits above it</h2>
                <div className="stack mt-6">
                  <p>
                    Local search used to mean one thing. Get into the map pack, the block of three listings with a map
                    that sits above the normal results. That fight has not gone away. But Ofcom, the UK communications
                    regulator, reports that about 30% of searches now show an AI overview first, and that more than
                    half of UK adults see those summaries often.
                  </p>
                  <p>
                    The click gap has been measured. Pew Research Center tracked the browsing of 900 US adults and
                    found a link was clicked on 8% of visits where an AI summary appeared, against 15% of visits
                    without one. That study is American, so treat it as direction rather than a UK number. The
                    direction is clear enough.
                  </p>
                  <p>
                    So the job has two halves. Win the map pack, and be the business an AI assistant names when
                    someone asks for &quot;best electrician near me&quot;.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Local search in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '~30%', t: 'of UK searches now show an AI overview', s: 'Ofcom, Online Nation 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '53%', t: 'of UK adults say they see AI summaries often', s: 'Ofcom, Online Nation 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '8% vs 15%', t: 'link click rate with an AI summary vs without (US study)', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
                    { v: '5.5m', t: 'private sector businesses in the UK, 5.45m of them small', s: 'Business Population Estimates 2024, GOV.UK', u: 'https://www.gov.uk/government/statistics/business-population-estimates-2024/business-population-estimates-for-the-uk-and-regions-2024-statistical-release' },
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

        {/* ═══ 4b. HOW GOOGLE DECIDES THE MAP PACK (Google's own factors) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The ranking factors, from Google</span>
              <h2>How Google decides who gets a map pack slot</h2>
              <p className="lead mt-4">
                Google publishes this itself: local results are based mainly on relevance, distance and prominence.
              </p>
            </div>
            <div className="col-3 mt-10">
              <div className="svc-card">
                <h3>Relevance</h3>
                <p className="mt-4">How well your profile matches what someone typed. Google says the fix is complete, detailed business information.</p>
                <ul className="tick-list tick-yes">
                  <li>Primary and secondary categories chosen against what already ranks in your area</li>
                  <li>Every service listed in the words customers use, not your internal names</li>
                  <li>Attributes, opening hours and holiday hours filled in and kept current</li>
                  <li>A profile description that says what you do and where you do it</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>Distance</h3>
                <p className="mt-4">How far you are from the searcher. You cannot move the shop, so this is about being unambiguous.</p>
                <ul className="tick-list tick-yes">
                  <li>Address and map pin verified, and matched to your Companies House record</li>
                  <li>Service area set to the radius you really cover, not an optimistic one</li>
                  <li>Location pages for the towns you serve, each one written rather than generated</li>
                  <li>LocalBusiness structured data stating the same address on every page</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>Prominence</h3>
                <p className="mt-4">How well known you are. Google says this is affected by how many sites link to you and how many reviews you have.</p>
                <ul className="tick-list tick-yes">
                  <li>Citations built and corrected across the UK directories Google reads</li>
                  <li>A review request that runs after every job, not once a quarter</li>
                  <li>A written reply to every review, including the difficult ones</li>
                  <li>Local links earned from trade bodies, suppliers and press, never bought</li>
                </ul>
              </div>
            </div>
            <p className="src-note">
              Factors quoted from{' '}
              <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer nofollow">Tips to improve your local ranking on Google</a>,
              Google Business Profile Help. Checked 25 August 2026.
            </p>
          </div>
        </section>

        {/* ═══ 5. WHO DOES THE WORK (senior team, E-E-A-T photo) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who does the work</span>
                <h2>A senior team that has actually done this for UK local businesses</h2>
                <div className="stack mt-6">
                  <p>
                    Local SEO is usually sold as an add-on bolted onto a website project. A profile claimed once and
                    left alone. A citation tool running on autopilot. We do not work that way. We run it as its own
                    discipline, with a senior person reading your profile, your reviews and your rankings every month.
                  </p>
                  <p>
                    Bhavesh, our founder, is on every account, and the team that ships the work is the team you talk
                    to. We have run this for UK service businesses, retailers and multi-location operators. Someone
                    looking at the map pack right now is usually about to pick up the phone.
                  </p>
                </div>
              </div>

              <figure className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-team-collaborating.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="A UK marketing team reviewing local search rankings together"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
                <figcaption style={{ padding: '0 6px 4px' }}>
                  Monthly review: map pack position, profile insights, new reviews and AI answer mentions, read
                  together rather than as separate reports.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ 6. LISTICLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">What we actually do</span>
              <h2>Seven things every real local SEO programme includes</h2>
              <p className="lead mt-4">
                Local SEO is not one trick. It is a stack of ongoing work. Here is what runs in every FactoryJet
                programme, in the order we tackle it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Google Business Profile optimisation', d: 'A full build-out: categories, services, attributes, photos and posts kept current. Not a one-time claim and forget.' },
                { n: '02', t: 'Citation cleanup and consistency', d: 'Name, address and phone matched exactly across the UK directories that matter, and the wrong or duplicate ones fixed.' },
                { n: '03', t: 'Review generation system', d: 'A repeatable way to ask, a reply to every review, and a steady flow rather than a burst.' },
                { n: '04', t: 'Location-specific content', d: 'Real pages for each area, written for the people who live there. Not one paragraph with the city name swapped.' },
                { n: '05', t: 'Map pack rank tracking', d: 'Your position for the searches that matter near you, tracked the same way as organic rankings.' },
                { n: '06', t: 'Local structured data', d: 'LocalBusiness schema markup done properly, so Google and AI engines read your address, hours and service area correctly.' },
                { n: '07', t: 'AI answer visibility tracking', d: 'Whether ChatGPT, Gemini and Google AI Overviews name you when someone nearby asks, reported like any other metric.' },
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

        {/* ═══ 6b. WHAT IS INCLUDED, AND WHAT IS NOT ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Scope in plain words</span>
              <h2>What is included in local SEO services, and what is not</h2>
              <p className="lead mt-4">
                Most arguments start because nobody wrote this down. So here it is.
              </p>
            </div>
            <div className="col-2 mt-10">
              <div className="card card-top-orange">
                <span className="eyebrow">Included</span>
                <ul className="tick-list tick-yes">
                  <li>Google Business Profile build-out, then monthly upkeep</li>
                  <li>Citation audit across UK directories, duplicates merged or removed</li>
                  <li>A review request system, plus a written reply to every review</li>
                  <li>Location pages for the areas you serve, written not templated</li>
                  <li>LocalBusiness and FAQ structured data, written as JSON-LD</li>
                  <li>Internal linking between your service pages and location pages</li>
                  <li>Map pack rank tracking for the searches that matter near you</li>
                  <li>Call and enquiry tracking in Google Tag Manager and GA4</li>
                  <li>AI answer checks across ChatGPT, Gemini, Claude and Perplexity</li>
                  <li>One monthly report in Looker Studio, and a call to talk it through</li>
                </ul>
              </div>
              <div className="card">
                <span className="eyebrow">Not included, and why</span>
                <ul className="tick-list tick-no">
                  <li><b>Bought or incentivised reviews.</b> They breach Google policy and get profiles suspended.</li>
                  <li><b>Bought links or directory link packages.</b> The risk is yours and the gain does not last.</li>
                  <li><b>Bulk pages for towns you do not serve.</b> Google treats those as doorway pages.</li>
                  <li><b>A guaranteed map pack position.</b> Nobody controls your competitors.</li>
                  <li><b>Paid search management.</b> A separate service, not retainer padding.</li>
                  <li><b>A site rebuild by default.</b> Local SEO rarely needs a replatforming project.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 720 }}>FactoryJet vs a generic local SEO reseller vs DIY Google Business Profile</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Generic local SEO reseller</th>
                    <th>DIY Google Business Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Real local content, not spun or templated</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Google Business Profile fully optimised and monitored</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Claimed once</span></td><td><span className="partial">If you have time</span></td></tr>
                  <tr><td className="feat">Review generation system</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Automated only</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">AI-answer visibility for &quot;near me&quot; queries tracked</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">No</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Transparent reporting</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Ranking screenshots</span></td><td><span className="no">Not built for it</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior team + founder</span></td><td><span className="partial">Often outsourced</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mid-page CTA. A real anchor, not a modal button, so it works without
            JavaScript and a crawler can see it. Light band: the page's single
            dark section budget is spent on the closing CTA. */}
        <div className="midcta-scope">
          <MidPageCTA
            headline={'Want to know where you stand in the map pack today?'}
            sub={'Send your business name and postcode. We check your Google Business Profile, your citations, your current map pack position, and whether AI assistants name you, then send it back in plain English.'}
            label={'Get my free local SEO audit'}
            note={'Bhavesh replies within one business day.'}
          />
        </div>

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From audit to ranked, locally and in AI answers, in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Local visibility audit</h3><p className="mt-4">Your profile, citations, reviews, current map pack position, and whether AI assistants name you today.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Foundation</h3><p className="mt-4">Profile built out, citations cleaned and matched, LocalBusiness structured data shipped across your pages.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Content and reviews</h3><p className="mt-4">Location pages written properly, and the review request system switched on.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Track and compound</h3><p className="mt-4">Map pack position, organic rankings and AI answer mentions reported monthly, with the plan tuned to what moves.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 8b. THE TECHNICAL WORK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Under the bonnet</span>
              <h2>The technical work behind a local SEO programme</h2>
              <p className="lead mt-4">
                This is the part most retainers skip. Each term is explained on first use, because you should not
                need a glossary to read your own scope of work.
              </p>
            </div>
            <div className="col-3 mt-10">
              <div className="svc-card">
                <h3>On the pages</h3>
                <ul className="tick-list tick-dot">
                  <li><b>Structured data.</b> LocalBusiness and FAQ schema markup, written as JSON-LD, so search engines read your address and hours directly.</li>
                  <li><b>Canonical tag.</b> One official URL per page, so two versions stop competing.</li>
                  <li><b>Internal linking.</b> Service and location pages linked on purpose, which builds topical authority for your area.</li>
                  <li><b>Content pruning.</b> Thin old pages merged or removed, so crawl budget goes to pages that earn.</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>On performance</h3>
                <ul className="tick-list tick-dot">
                  <li><b>Core Web Vitals.</b> Largest Contentful Paint for load speed, Cumulative Layout Shift for pages that jump, Interaction to Next Paint for response.</li>
                  <li><b>Lighthouse.</b> Every fix re-tested on a throttled mobile connection, never assumed.</li>
                  <li><b>Server-side rendering.</b> Finished HTML, so a crawler is not left waiting on JavaScript.</li>
                  <li><b>Redirect map.</b> Every old URL paired to a new one and shipped as a 301 redirect during a migration.</li>
                  <li><b>Accessibility audit.</b> Contrast, headings and focus order checked against WCAG, which also makes a page easier for machines to parse.</li>
                </ul>
              </div>
              <div className="svc-card">
                <h3>On measurement</h3>
                <ul className="tick-list tick-dot">
                  <li><b>GA4.</b> Google Analytics 4, with calls, form fills and direction requests as separate events.</li>
                  <li><b>Google Tag Manager.</b> Tracking managed in one place, so a change does not need a developer each time.</li>
                  <li><b>Server-side tracking.</b> Events sent from a server rather than the browser, so ad blockers lose less data.</li>
                  <li><b>Consent Mode and first-party data.</b> Measurement that stays inside UK GDPR rules.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who we work with</span>
                <h2>UK businesses that need to be found in their own area</h2>
                <p className="lead mt-4">
                  Local SEO pays off fastest when customers search close to home. Three groups make up most of our
                  work.
                </p>
                <ul className="tick-list tick-dot mt-6">
                  <li><b>Single-location shops and services.</b> Dentists, salons, restaurants and trades with one site and a clear catchment. We get the profile, citations and reviews right first.</li>
                  <li><b>Multi-location and franchise businesses.</b> Every branch needs its own accurate profile, managed as a set rather than left to whichever manager has time.</li>
                  <li><b>Service-area businesses with no shopfront.</b> Trades that work across a radius. Near me search matters most here, because there is no shop window to be found by.</li>
                </ul>
              </div>
              <figure className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-ecommerce-fulfilment.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="A small UK business owner packing a customer order in a stockroom"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
                <figcaption style={{ padding: '0 6px 4px' }}>
                  For a single-location business the map pack is often the whole marketing plan. That order probably
                  started as a near me search.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ 9b. UK LISTINGS + SYSTEMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Where your details have to match</span>
              <h2>The UK listings we check, and the systems we plug into</h2>
              <p className="lead mt-4">
                There are 5.5 million private sector businesses in the UK, and 5.45 million of them are small. Your
                competitors are listed in the same places you are. Consistency separates them.
              </p>
            </div>
            <div className="col-2 mt-10">
              <div className="card">
                <span className="eyebrow">UK listings checked</span>
                <ul className="tick-list tick-dot">
                  <li>Google Business Profile and Google Maps</li>
                  <li>Bing Places</li>
                  <li>Apple Business Connect and Apple Maps</li>
                  <li>Yell and Thomson Local</li>
                  <li>Yelp UK, and TripAdvisor where it applies</li>
                  <li>FreeIndex, Scoot, Cylex and 192.com</li>
                  <li>Companies House, for the registered name and address</li>
                  <li>Your trade body or trade association listing</li>
                  <li>Facebook, and any sector directory that ranks in your area</li>
                </ul>
              </div>
              <div className="card">
                <span className="eyebrow">Systems we work with</span>
                <ul className="tick-list tick-dot">
                  <li>WordPress, WooCommerce and Shopify</li>
                  <li>Next.js and React for custom builds</li>
                  <li>GA4, Google Tag Manager and Looker Studio</li>
                  <li>Judge.me, Okendo, Yotpo and Stamped for review flows</li>
                  <li>Klaviyo, Mailchimp and Twilio for review requests</li>
                  <li>HubSpot, when the CRM should trigger the ask</li>
                  <li>Zapier, Make.com and n8n to join it all up</li>
                  <li>Google Merchant Center for local inventory</li>
                  <li>ChatGPT, Gemini, Claude and Perplexity for AI answer checks</li>
                </ul>
              </div>
            </div>
            <p className="src-note">
              Business count:{' '}
              <a href="https://www.gov.uk/government/statistics/business-population-estimates-2024/business-population-estimates-for-the-uk-and-regions-2024-statistical-release" target="_blank" rel="noopener noreferrer nofollow">Business Population Estimates 2024</a>,
              Department for Business and Trade. Checked 25 August 2026.
            </p>
          </div>
        </section>

        {/* ═══ 10. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">The UK local SEO market</span>
            <h2 style={{ maxWidth: 780 }}>Businesses are searching for local SEO help right now</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Demand for local SEO help in the UK is real. These volumes are measured for the United Kingdom
                    alone, so &quot;local seo services&quot; at 1,600 a month means 1,600 UK searches. Adding the
                    literal word UK to the phrase brings another 170 a month on top.
                  </p>
                  <p>
                    City-qualified terms show the same intent from another angle. That is why we run this page for
                    businesses in London, Manchester, Birmingham, Leeds and the rest of the UK, with the same senior
                    team on every account.
                  </p>
                </div>
                <figure className="card mt-8" style={{ padding: 8 }}>
                  <img
                    src="/images/uk/city-manchester.jpg"
                    width={560}
                    height={420}
                    loading="lazy"
                    decoding="async"
                    alt="A UK city centre skyline at first light"
                    style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                  />
                  <figcaption style={{ padding: '0 6px 4px' }}>
                    In a dense city centre the map pack is decided within a few streets, which is why your address
                    has to be exact.
                  </figcaption>
                </figure>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">Local SEO London</a>
                  <a className="city-pill" href="/uk/manchester">Local SEO Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Local SEO Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Local SEO Leeds</a>
                  <a className="city-pill" href="/uk/seo">National SEO</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/seo-audit">Free SEO Audit</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'local seo services', v: '1,600', w: '100%', kd: 'KD 2 · the phrase this page is written for' },
                    { kw: 'local seo agency', v: '1,000', w: '63%', kd: 'KD 0 · same buyer, different wording' },
                    { kw: 'local seo agencies', v: '1,000', w: '63%', kd: 'KD 0 · plural variant' },
                    { kw: 'local seo services uk', v: '170', w: '11%', kd: 'KD 5 · the literal UK phrasing' },
                    { kw: 'local seo uk', v: '50', w: '3%', kd: 'KD 10 · low volume, high intent' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, August 2026. KD is keyword difficulty, 0 to 100.</p>
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
              <h2>UK local SEO agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather be straight with you than pretend we are the only option. These UK agencies do real
                local SEO work. Talk to a few and pick the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {LOCAL_SEO_AGENCIES.map((a, i) => (
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
              Agencies named from live UK search results for local SEO terms, August 2026. Listing is not
              endorsement. We are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes a local SEO engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell a fixed package. A one-shop business and a ten-branch franchise are different
                    jobs. What shapes the work is how many locations you have, how competitive your area is, and what
                    state your profile, citations and reviews are already in.
                  </p>
                  <p>
                    A strong profile usually needs citation cleanup, structured data and AI answer tracking on top. A
                    neglected one needs the basics first. We scope it after a short call and a free local SEO audit,
                    so you know what the work involves before committing. Engagements run as a one-off audit, as
                    fixed-price milestones, or as a monthly retainer.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get my free local SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Where your profile and reviews stand today</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How competitive your local market is</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How many locations you need covered</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How many &quot;near me&quot; prompts and engines you target</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free local SEO audit before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Local SEO services FAQ: what UK business owners actually ask</h2>
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

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See where your business shows up locally, and in AI answers</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free local SEO audit. Where
              you stand in the map pack today, the state of your Google Business Profile and citations, and whether
              AI assistants already name you. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free local SEO audit" region="uk" modalVariant="default" btnVariant="primary-light" />
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
