import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './local-seo.css';

const CANONICAL = 'https://factoryjet.com/uk/local-seo';
const UPDATED = '2026-07-25';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'Local SEO basics' },
  { key: 'gbp',       label: 'Google Business Profile & reviews' },
  { key: 'ai-search', label: 'Local SEO vs AI search' },
  { key: 'results',   label: 'Results & working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Local SEO basics ──
  { category: 'basics', question: 'What are local SEO services?',
    answer: 'Local SEO services are the work of getting your business found in the local map pack and in "near me" searches for your specific location or area. That covers your Google Business Profile, the citations that list your business consistently across directories, the reviews you collect, and content written for the places you actually serve, not a generic page hoping to rank everywhere.' },
  { category: 'basics', question: 'How is local SEO different from regular SEO?',
    answer: 'Regular SEO competes nationally for a topic. Local SEO competes for a place: your city, your postcode, or the radius you actually serve. It leans much more heavily on your Google Business Profile, citation consistency, and reviews than a national campaign does, and success looks different too. You are not aiming for a top ten spot everywhere, you are aiming for the map pack in your area.' },
  { category: 'basics', question: 'How do I get my business to show up in local search?',
    answer: 'Start with a fully built out Google Business Profile: the right categories, real photos, complete services, and posts kept current. Then get your name, address, and phone matched exactly across the directories Google checks, and keep genuine reviews coming in. Add content for your actual location or service area. Miss any one of those and the map pack stays out of reach, no matter how good the rest looks.' },
  { category: 'basics', question: 'Can I do local SEO myself?',
    answer: 'Yes, especially the basics. You can claim and fill in your Google Business Profile, ask happy customers for reviews, and fix obvious listing errors yourself. Where it gets harder is doing all of that consistently for months, tracking whether it is actually moving your map pack position, and now also checking whether AI assistants recommend you. That ongoing discipline is usually where a DIY effort quietly stops.' },
  { category: 'basics', question: 'What is the map pack?',
    answer: 'The map pack is the block of three local businesses, shown with a map, that Google displays above the normal results for searches with local intent, things like "plumber near me" or "coffee shop in Leeds". It pulls from your Google Business Profile, your reviews, and your local relevance. Most local clicks go to those three listings, which is why ranking in the pack matters more than ranking further down the page.' },
  { category: 'basics', question: 'What are local citations?',
    answer: 'A citation is any online mention of your business name, address, and phone number, on directories, industry sites, and platforms like Yelp or Bing Places. Google uses how consistent those citations are as a trust signal for your location. Old addresses, duplicate listings, or a phone number that does not match your Google Business Profile all quietly work against your map pack ranking.' },
  { category: 'basics', question: 'Do you write location pages?',
    answer: 'Yes, and we write them to actually be useful, not a template with the city name swapped in. A proper location page names the area, mentions nearby landmarks or neighbourhoods, reflects what you genuinely offer there, and gives someone a reason to trust that you serve their specific area. Thin, duplicated location pages tend to get ignored by Google rather than helping you rank.' },

  // ── Google Business Profile & reviews ──
  { category: 'gbp', question: 'What is a Google Business Profile and do I need one?',
    answer: 'A Google Business Profile is the free listing that shows your business on Google Maps and in local search, with your hours, photos, reviews, and a way to message you. If customers ever search for what you do near where you are, you need one, and it needs to be claimed, verified, and kept current rather than left as whatever Google generated automatically.' },
  { category: 'gbp', question: 'How do reviews affect local rankings?',
    answer: 'Reviews are one of the strongest signals Google uses for the map pack: how many you have, how recent they are, the rating, and whether you reply. A steady flow of genuine reviews tends to outperform a burst of old ones that stopped coming in. We build a real system for asking at the right moment and responding to every review, good or bad.' },
  { category: 'gbp', question: 'How do you handle duplicate or incorrect business listings?',
    answer: 'We audit every directory your business appears on, find duplicate profiles, outdated addresses, and mismatched phone numbers, and get them merged, corrected, or removed. Duplicate listings split your reviews and confuse Google about which profile is real, which quietly caps your map pack ranking. Cleaning this up is unglamorous work, but it is one of the highest-impact fixes we make early on.' },
  { category: 'gbp', question: 'Do you handle multi-location businesses?',
    answer: 'Yes. Multi-location and franchise businesses need a Google Business Profile per location, each one accurate, each one collecting its own reviews, and each one competing in its own map pack. We manage them as a set, with consistent standards across locations and reporting broken out by location, so one strong branch does not hide a weak one.' },
  { category: 'gbp', question: 'Can I keep managing my own Google Business Profile once it is set up?',
    answer: 'You can, and for small day to day things like replying to a review or updating your hours, we would encourage it. What we would flag is anything structural: category changes, new services, or bulk edits across locations, since those can affect your ranking if done without understanding why the profile was set up a certain way in the first place.' },
  { category: 'gbp', question: 'How many reviews do I actually need before it makes a difference?',
    answer: 'There is no fixed number, but volume, recency, and rating all matter together. A handful of five-star reviews from last year matters less than a steady trickle of recent ones with thoughtful replies from you. We focus on building a repeatable system rather than chasing a target number, because a review system that keeps working beats a one-time push every time.' },

  // ── Local SEO vs AI search ──
  { category: 'ai-search', question: 'Is SEO dead or evolving in 2026?',
    answer: 'Evolving, not dead. Ofcom reports that around 30 percent of UK searches now show an AI Overview before the map pack or the links, and Pew Research found people click a link about 8 percent of the time once an AI summary appears, against 15 percent without one. The map pack still gets clicks. Being named in the AI answer above it is the part that is new.' },
  { category: 'ai-search', question: 'Can ChatGPT do SEO?',
    answer: 'ChatGPT can help you draft a Google Business Profile description or brainstorm review responses, but it cannot fix a duplicate listing, verify your address with Google, or earn you genuine reviews. Those need real work in the real world. We use AI tools to move faster on the writing, then do the citation, profile, and review work a chatbot has no way to touch.' },
  { category: 'ai-search', question: 'What will replace SEO, if anything?',
    answer: 'Nothing is replacing it outright. What is happening is that the definition is stretching. Search used to mean ranking in a list of links. Now it also means being named in an AI Overview or a chatbot answer. The skills underneath, being relevant, trustworthy, and easy for an engine to read, are the same skills that earned rankings before. The output just has more places to show up now.' },
  { category: 'ai-search', question: 'Will SEO exist in 5 years?',
    answer: 'Almost certainly, in some form. People will keep asking for recommendations, whether that is typed into Google or spoken to an assistant, and someone has to earn the answer. The channels will keep shifting, the way they already have from desktop to mobile to voice to AI chat. What we would not bet on is a local business skipping visibility work entirely and still getting found.' },
  { category: 'ai-search', question: 'Will local SEO help with AI assistant recommendations?',
    answer: 'Yes, and increasingly that is the point of doing it properly. An AI assistant answering "best plumber near me" leans on the same signals local SEO has always built: a complete, accurate Google Business Profile, consistent citations, and real reviews. Get those right and you are also more likely to be the business an AI names, not just the one that ranks in Maps.' },

  // ── Results & working with us ──
  { category: 'results', question: 'How do I find a good local SEO provider?',
    answer: 'Ask what they actually do month to month, not just what they promise. A real local SEO provider can show you Google Business Profile work, a citation audit, a review system, and reporting on your map pack position, not only a generic ranking report. Be wary of anyone guaranteeing a specific position or treating local SEO as a small add-on to a much bigger website project.' },
  { category: 'results', question: 'How long does local SEO take to show results?',
    answer: 'Some things move fast. Fixing a broken Google Business Profile or a duplicate listing can change how you show up within weeks. Climbing steadily inside the map pack and building a real base of reviews usually takes a few months, because reviews and citation trust build over time rather than overnight. We front-load the fast fixes so you see movement early.' },
  { category: 'results', question: 'How do you report results?',
    answer: 'You get a plain report covering your map pack position for the searches that matter, your Google Business Profile performance, review growth, and whether AI assistants named you when we checked. We would rather show you three honest numbers moving in the right direction than a long report padded out with metrics that do not affect your phone ringing.' },
  { category: 'results', question: 'Do you guarantee a map pack position?',
    answer: 'No, and we would be cautious of anyone who does. The local ranking algorithm weighs your profile, your reviews, your citations, and your competitors, none of which any agency fully controls. What we do commit to is the work itself: a properly optimised profile, clean citations, a real review system, and honest reporting on where you actually stand and what is moving.' },
  { category: 'results', question: 'Are you a UK agency?',
    answer: 'Yes. We are a UK agency working with local businesses across London, Manchester, Birmingham, Leeds, and beyond. Local SEO work happens close to the ground, checking directories, matching addresses, and reading reviews for your actual area, but it is coordinated remotely with regular reviews, so a business anywhere in the UK gets the same senior attention.' },
  { category: 'results', question: 'Who does the work?',
    answer: 'A senior team, with the founder involved on every account. You are not handed to a junior running an automated citation tool while someone else takes the calls. The person doing your Google Business Profile work and reading your reviews is the same person who can explain, in plain terms, why your map pack position moved.' },
  { category: 'results', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we run a free local SEO audit on your business: your Google Business Profile, your citations, your map pack position, and whether AI assistants name you today. That first look is useful whether or not we end up working together.' },
];

/* ─── Named UK local SEO agencies (open self-disclosure, ItemList) ──── */
const LOCAL_SEO_AGENCIES: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. A senior team that treats local SEO as its own discipline rather than a bolt-on, with Google Business Profile, citations, and reviews done properly, and AI-answer visibility for "near me" searches tracked as a real metric.' },
  { name: 'The SEO Works', note: 'A long-running Nottingham SEO agency with a dedicated local SEO service line and a large in-house team.' },
  { name: 'LocalIQ', note: 'The local marketing arm of the USA Today Network, offering local SEO and Google Business Profile management at scale across the UK.' },
  { name: 'OneBase Media', note: 'A London agency specialising specifically in local SEO and Google Business Profile management for multi-location brands.' },
  { name: 'Phoenix Web Services', note: 'A UK web design and SEO agency with a dedicated local SEO and citation-building service.' },
  { name: 'Passion Digital', note: 'A London performance marketing agency offering local SEO alongside paid media and wider digital marketing.' },
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
      serviceType: 'Local SEO, Google Business Profile optimisation, and AI-answer visibility for near-me queries',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Local SEO agency in the UK. We get businesses into the map pack through Google Business Profile optimisation, citations, and reviews, and get them named in AI answers for near me searches.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Local SEO', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Local SEO Agency UK | Map Pack & AI Answers | FactoryJet',
      headline: 'Local SEO for UK Businesses That Need to Win the Map Pack and the AI Answer',
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
        jobTitle: 'Founder, FactoryJet',
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
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
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Local SEO Agency UK | Map Pack & AI Answers | FactoryJet',
  description:
    'FactoryJet is a UK local SEO agency. We get you into the map pack, sharpen your Google Business Profile, and get AI answers to name you too. Free audit.',
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Local SEO Agency UK | Map Pack & AI Answers | FactoryJet',
    description:
      'A UK local SEO agency getting businesses into the map pack, with Google Business Profile, citations, and reviews done properly, plus AI-answer visibility for near me searches. Free local SEO audit.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/local-seo-og.webp', width: 1200, height: 630, alt: 'Local SEO Agency UK by FactoryJet' }],
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

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Local SEO Agency</span>
                  <span className="chip">Map Pack + GBP</span>
                  <span className="chip">Now Tracking AI Answers</span>
                </div>
                <h1>Local SEO for UK Businesses That Need to Win the Map Pack and the AI Answer</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet runs local SEO for UK businesses with a shop, office, or service area to cover. We handle
                  your Google Business Profile, citations, reviews, and location pages properly, then make sure you
                  are the business named when someone asks an AI assistant for the best option nearby.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ projects delivered</span></div>
                  <div className="upd">Last updated<br />25 July 2026</div>
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

        {/* ═══ 2. ANSWER-FIRST DEFINITION ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is local SEO?</span>
              <p>
                Local SEO is the work of getting a business found in the local map pack and &quot;near me&quot;
                searches on Google for its specific location or service area, through Google Business Profile,
                citations, reviews, and location-specific content. In 2026 it also covers being the business an AI
                assistant names when someone asks for a recommendation nearby.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              For a long time, winning local search meant three things done well: a solid Google Business Profile,
              consistent citations, and enough reviews to sit inside the map pack. That part has not changed. What is
              new is what now sits above the map pack. A growing share of searches open with an AI Overview, and a
              growing share of &quot;near me&quot; questions get asked straight to ChatGPT or Gemini instead of typed
              into Google. Local SEO now has to answer both, or it is only doing half the job.
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
                    For years, local search meant one thing: get into the map pack, the block of three business
                    listings with a map that sits above the normal results. That competition has not gone away. The
                    communications regulator Ofcom reports that around 30% of UK searches now show an AI Overview
                    before the map pack or the links even load.
                  </p>
                  <p>
                    The click gap is measurable, not a guess. A real click-through study from Pew Research Center
                    found people click a link about 8% of the time once an AI summary appears, against 15% without
                    one, roughly half as often. A business that only shows up in the map pack and the list of links
                    below, and never in the AI answer itself, is competing for a shrinking share of attention.
                  </p>
                  <p>
                    The practical shift is this: a local business used to compete for the map pack and three blue
                    links. Now it is also competing to be the business an AI assistant names when someone asks for a
                    recommendation nearby, things like &quot;best electrician near me&quot; or &quot;where should I
                    get my car serviced round here&quot;. Local SEO that ignores this half of the job is only doing
                    half the job.
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
                    { v: '~30%', t: 'of UK searches now show an AI Overview', s: 'Ofcom, Online Nation, Dec 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '8% vs 15%', t: 'link click rate with an AI summary vs without', s: 'Pew Research Center, Jul 2025', u: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
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

        {/* ═══ 5. WHO DOES THE WORK (senior team, E-E-A-T photo) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who does the work</span>
                <h2>A senior team that has actually done this for UK local businesses</h2>
                <div className="stack mt-6">
                  <p>
                    Most local SEO gets sold as a generic add-on bolted onto a website project: a Google Business
                    Profile claimed once and left alone, a citation tool running on autopilot, done. We do not work
                    that way. Local SEO is its own discipline here, with a senior person actually looking at your
                    profile, your reviews, and your rankings every month, not a junior running a checklist.
                  </p>
                  <p>
                    Bhavesh, our founder, is on every account, and the same team that ships the work is the team you
                    talk to. We have run this for UK service businesses, retailers, and multi-location operators who
                    needed to be found in their own postcode, not just nationally. That is the level of attention a
                    &quot;near me&quot; search deserves, because the buyer looking at the map pack right now is
                    usually ready to call.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-team-collaborating.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="A UK marketing team reviewing local search rankings together"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
              </div>
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
                Local SEO done properly is not one trick, it is a stack of ongoing work. Here is what is included in
                every FactoryJet local SEO programme, in the order we tackle it.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Google Business Profile optimisation', d: 'A full profile build-out: categories, services, attributes, photos, and posts kept current, not a one-time claim and forget.' },
                { n: '02', t: 'Citation cleanup and consistency', d: 'Your name, address, and phone matched exactly across the directories that matter, and the wrong or duplicate ones fixed.' },
                { n: '03', t: 'Review generation system', d: 'A repeatable way to ask happy customers for a review, respond to every one, and keep the flow steady rather than bursty.' },
                { n: '04', t: 'Location-specific content', d: 'Real pages for each location or service area, written for the people who live there, not the same paragraph swapped by city name.' },
                { n: '05', t: 'Map-pack rank tracking', d: 'We track your position for the searches that matter in your area, the same way we track normal organic rankings.' },
                { n: '06', t: 'Technical local schema', d: 'LocalBusiness structured data implemented properly, so Google and AI engines get your name, address, hours, and service area right every time.' },
                { n: '07', t: 'AI-answer visibility tracking', d: 'We check whether ChatGPT, Gemini, and Google AI Overviews actually name you when someone asks for your kind of business nearby, and report it like any other metric.' },
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

        {/* ═══ 8. PROCESS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we work</span>
              <h2>From audit to ranked, locally and in AI answers, in four stages</h2>
            </div>
            <ol className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <li className="card"><span className="stage-num">01</span><h3>Local visibility audit</h3><p className="mt-4">We check your Google Business Profile, citations, reviews, current map pack position, and whether AI assistants name you today.</p></li>
              <li className="card"><span className="stage-num">02</span><h3>Foundation</h3><p className="mt-4">Profile fully optimised, citations cleaned and matched, and LocalBusiness schema implemented properly across your pages.</p></li>
              <li className="card"><span className="stage-num">03</span><h3>Content and reviews</h3><p className="mt-4">Real location pages written properly, and a review generation system switched on and running.</p></li>
              <li className="card"><span className="stage-num">04</span><h3>Track and compound</h3><p className="mt-4">Map pack position, organic rankings, and AI-answer visibility reported monthly, with the plan tuned to what is actually moving.</p></li>
            </ol>
          </div>
        </section>

        {/* ═══ 9. WHO WE SERVE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK businesses that need to be found in their own area</h2>
              <p className="lead mt-4">
                Local SEO pays off fastest for businesses whose customers search close to home before they buy or
                book. Three groups make up most of our work.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Single-location shops and services</h3>
                <p className="mt-4">Dentists, salons, restaurants, and tradespeople with one site and a clear catchment area. We get the fundamentals, profile, citations, and reviews, properly in place first.</p>
              </div>
              <div className="svc-card">
                <h3>Multi-location and franchise businesses</h3>
                <p className="mt-4">Chains and franchises where every branch needs its own accurate, competitive profile, managed as a set rather than left to whichever manager has time.</p>
              </div>
              <div className="svc-card">
                <h3>Service-area businesses without a shopfront</h3>
                <p className="mt-4">Trades and home-service businesses that work across a radius rather than from a visited address. &quot;Near me&quot; search matters most here, because there is no shop window to be found by.</p>
              </div>
            </div>
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
                    Search demand for local SEO help in the UK is real right now. Terms like &quot;local seo
                    services&quot; and &quot;local seo agency&quot; draw well over a thousand searches a month
                    between them, and these are business owners looking for help, not people browsing definitions.
                  </p>
                  <p>
                    City-qualified terms show the same demand from a different angle. &quot;seo agency
                    birmingham&quot; alone draws real volume, which tells us local intent bleeds into city-plus-service
                    searches too, not only literal &quot;near me&quot; phrasing. This page exists to answer that
                    demand properly, for businesses in London, Manchester, Birmingham, Leeds, and across the UK, with
                    the same senior team on every account.
                  </p>
                </div>
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
                    { kw: 'local seo services', v: '1,600', w: '100%', kd: 'KD 2 · Quick win' },
                    { kw: 'seo agency birmingham', v: '1,300', w: '81%', kd: 'KD 6 · Winnable · local intent bleeds into city terms' },
                    { kw: 'local seo agency', v: '1,000', w: '63%', kd: 'KD 0 · Quick win' },
                    { kw: 'local seo agencies', v: '1,000', w: '63%', kd: 'KD 0 · Quick win' },
                    { kw: 'ecommerce seo agency', v: '1,000', w: '63%', kd: 'KD 0 · Adjacent quick win · related service' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, July 2026</p>
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
                We would rather tell you the truth than pretend we are the only option. Here are UK agencies doing
                real local SEO work, including us. Talk to a few and pick the fit.
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
              Agencies named from live UK search results for local SEO terms, July 2026. Listing is not endorsement,
              and we are one option among them.
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
                    We do not sell a fixed local SEO package, because a single-location shop chasing the map pack for
                    one town and a ten-branch franchise managing profiles nationwide are different jobs. What shapes
                    the work is how many locations you have, how competitive your local market is, and how much of
                    the foundation, your profile, your citations, your reviews, is already in reasonable shape.
                  </p>
                  <p>
                    A business with a strong existing profile and steady reviews often needs mostly citation cleanup,
                    schema, and AI-answer tracking layered on top. A newer or neglected profile needs the fundamentals
                    fixed first. We scope it after a short call and a free local SEO audit, so the plan matches your
                    situation rather than a template, and you know what the work involves before you commit to
                    anything.
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
              <h2>Local SEO questions UK business owners actually ask</h2>
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
              Send your name and work email. The founder replies within 24 hours with a free local SEO audit: where
              you stand in the map pack today, what your Google Business Profile and citations look like, and
              whether AI assistants already name you for &quot;near me&quot; searches nearby. No spam, no obligation.
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
