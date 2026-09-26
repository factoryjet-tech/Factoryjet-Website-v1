import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQS, type Faq } from './faqData';
import '../au-service.css';

/* Redesigned 2026-09-25 into the AU service design system (reference:
   ../ai-agents/page.tsx). Title, H1 intent, keyword targets, city facts, the
   FAQ set and the sources are carried over from the August 2026 page; the
   old sections/ folder and the Lenis client shell were removed.

   IMPORTANT (carried from the August page): this page makes NO claim about
   Australian government digital policy or any legal accessibility obligation.
   digital.gov.au could not be fetched during research. See pageData.ts. */

const UPDATED = '2026-09-26';
const TITLE = 'Web Design & SEO Canberra | Accessible Sites | FactoryJet';
const H1 = 'Web design Canberra: accessible websites and SEO for ACT organisations';
const DESCRIPTION =
  'Canberra web design and SEO for businesses, associations and public-sector suppliers. Accessible sites built to WCAG, fast, and yours to own. Free site review.';
const OG_IMAGE = '/images/au/canberra/canberra-og.webp';

const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const link = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;

const [W3C, ABS, CWV] = CITATIONS;

const TOPIC_ORDER: Faq['topic'][] = [
  'Accessibility and compliance',
  'Cost and scope',
  'Websites',
  'SEO',
  'Google and local search',
];
const topicKey = (t: string) => t.toLowerCase().replace(/[^a-z]+/g, '-');

/* ─── Accessibility basics, as expanders ─── */
const BASICS: { t: string; d: string }[] = [
  { t: 'Every image carries a text description', d: 'A screen reader reads the description aloud, so someone who cannot see the photo still gets its meaning. Decorative images are marked so they are skipped rather than read as noise.' },
  { t: 'The whole site works with a keyboard alone', d: 'Menus, forms, pop-ups and buttons can all be reached with the Tab key, with a visible focus outline showing where you are. Keyboard traps, where you can get into a menu but not out, are one of the most common failures we find.' },
  { t: 'Text has enough contrast against its background', d: 'Light grey text on white looks elegant and fails people with low vision and anyone reading a phone in the sun. WCAG sets measurable contrast ratios, and we check every colour pair in the design.' },
  { t: 'Form fields have real labels', d: 'Placeholder text that disappears when you start typing is not a label. Each field needs a label linked to it in the code, and error messages that say what went wrong in words, not only in red.' },
  { t: 'Headings run in order and describe the section', d: 'Screen reader users jump through a page by its headings, like a table of contents. One H1, then H2s and H3s in order, each saying what the section is about.' },
  { t: 'Nothing depends on colour alone', d: 'A red asterisk is not enough to mark a required field, and a green or red dot is not enough to show status. Add a word or an icon so the meaning survives for people who do not see colour the same way.' },
  { t: 'Documents are real pages where possible', d: 'Scanned PDFs cannot be searched, read aloud or resized well on a phone. Publishing the content as a page, with the file as a second option, fixes accessibility, search and mobile reading in one move.' },
];

const SECTORS: { name: string; note: string }[] = [
  { name: 'Associations and peak bodies', note: 'Concentrated in Barton and Civic. Their site does three unrelated jobs at once: recruit members, publish advocacy positions, and prove legitimacy to a department. Most try to do all three on the home page and do none of them well.' },
  { name: 'Public-sector suppliers', note: 'Consultancies, IT firms, training providers and facilities businesses. The website is read during a procurement check rather than browsed, so evidence, currency and specificity matter far more than persuasion.' },
  { name: 'Not-for-profits and charities', note: 'Two audiences with opposite needs: people seeking help, who need plain language and an obvious next step, and funders, who need governance and impact evidence. These deserve separate paths.' },
  { name: 'Professional services', note: 'Accountants, lawyers and advisers across Civic and Woden. A conventional local search market, and the one where Canberra’s thin competition is easiest to take advantage of.' },
  { name: 'Trades and home services', note: 'Across Belconnen, Tuggeranong and Gungahlin, plus Queanbeyan. Phone-first buyers, Maps-driven, where a complete Google Business Profile does more work than the website.' },
  { name: 'Research, education and training', note: 'Registered training organisations, research groups and education providers. Course and program pages that are accurate, current and accessible do most of the selling, and stale dates cost enrolments.' },
];

const BUILD: { title: string; body: string }[] = [
  { title: 'Accessible from the first commit', body: 'We build against the WCAG success criteria as we go and hand over a written test result at launch. Retrofitting accessibility after a site is finished costs more than including it and gives a worse result, because some failures are structural rather than cosmetic.' },
  { title: 'Built to be verified, not just admired', body: 'Named credentials, dated projects, real people with real roles, and the currency signals a checker looks for. If your last news item is from 2024, that is the first thing an assessor notices. We build the site so keeping it current takes minutes rather than a support ticket.' },
  { title: 'Documents turned into pages', body: 'Annual reports, submissions, position papers and capability statements usually live as files in a downloads list. Published as real pages, they become searchable, readable on a phone, accessible to a screen reader, and findable in Google.' },
  { title: 'Speed measured against the published marks', body: 'Google publishes what it judges: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. We build to those and show you the before and after.' },
  { title: 'Separate paths for separate audiences', body: 'Members and departments. People seeking help and people funding it. Where an organisation has two audiences, it needs two clear routes from the home page rather than one message hedging between them.' },
  { title: 'Code and accounts in your name', body: 'Domain, hosting, source code and admin access, all yours from day one. This matters more in Canberra than elsewhere because contracts and grant conditions often ask who owns the work. The answer should be you, and it should be provable.' },
];

const SEARCH: { title: string; body: string }[] = [
  { title: 'A genuinely open field, for now', body: 'The weakest organisation holding a first-page Canberra SEO position had links from seven other websites when we measured in August 2026. In Sydney the equivalent figure was 119. That gap exists because Canberra is small enough that few agencies compete here properly.' },
  { title: 'Demand verified before anything is written', body: 'We check search volume against Google Ads data rather than trusting impression counts, which rank-tracking software can inflate. Canberra is small, so some terms that look worthwhile have almost no real volume. We say so rather than building pages to fill a content plan.' },
  { title: 'Honest about when search is the wrong tool', body: 'Many Canberra organisations reach their audience through member networks, mailing lists or formal processes, not a search box. For those, search work is a poor use of money and we will tell you.' },
  { title: 'Local listing done once, properly', body: 'Google Business Profile claimed, verified, categorised specifically, and set to the areas you genuinely serve. Google requires in-person customer contact for a listing, so a consultancy operating entirely online does not qualify. We will tell you before you try.' },
  { title: 'Links earned, never bought', body: 'Submissions, research, member resources and genuine sector relationships earn references in this city. We do not buy links or run automated outreach. Associations have an advantage here, because they already publish material other sites cite.' },
  { title: 'Reporting aimed at what you need', body: 'For a supplier that means enquiries. For an association it might be membership applications or document downloads. We agree the number before the work starts and report against it, not against a rankings dashboard.' },
];

const STEPS: { n: string; t: string; d: string; out: string }[] = [
  { n: '01', t: 'Free review, including an accessibility check', d: 'We crawl the site, test sample pages against the WCAG criteria with automated tools and a keyboard, run Core Web Vitals, and check your Google listing.', out: 'A short written summary you can act on, or attach to a tender response.' },
  { n: '02', t: 'Written scope with the accessibility level named', d: 'Pages, content, integrations, the WCAG version and level you need, hosting and data questions from your contracts, and the approval points inside your organisation.', out: 'A fixed-scope proposal, with a timeline planned around your board or committee dates.' },
  { n: '03', t: 'Audience paths and site map', d: 'A workshop, by video, where we draw the pages and the separate routes for each audience: members and departments, clients and funders.', out: 'An agreed site map and a list of which documents become pages.' },
  { n: '04', t: 'Plain-language content and design', d: 'Copy written for your audience rather than your sector, with headings that work as a table of contents. Design checked for contrast and focus states from the first draft.', out: 'Approved page designs with real content in them.' },
  { n: '05', t: 'Build and test with real assistive technology', d: 'Automated checks catch part of the problem. We also test with a keyboard alone and a screen reader, on real phones, before anything goes live.', out: 'A staging site with a written accessibility and speed report.' },
  { n: '06', t: 'Launch without losing what already ranks', d: 'Every old page address mapped to a new one, Search Console and Analytics in your name, and the Google listing updated. Sites of up to five pages can have 7-day delivery once content and approvals are ready.', out: 'A live site and a launch checklist signed off.' },
  { n: '07', t: 'Keep it current and accessible', d: 'Accessibility drifts as people add content. We check new pages, keep the site updated, and run search work if you want it, reported against the number you care about.', out: 'Support from the team that built it.' },
];

const DEMAND: { kw: string; v: string; w: string; note: string }[] = [
  { kw: 'web design canberra', v: '1,000', w: '100%', note: 'Shared by close variants: canberra web design, web developer canberra' },
  { kw: 'web designer canberra', v: '880', w: '88%', note: 'Buyers looking for one named person or studio' },
  { kw: 'seo agency canberra', v: '880', w: '88%', note: 'Shared with seo company canberra' },
  { kw: 'seo services canberra', v: '260', w: '26%', note: 'Buyer intent' },
  { kw: 'seo consultant canberra', v: '170', w: '17%', note: 'Buyer intent' },
  { kw: 'local seo canberra', v: '110', w: '11%', note: 'Mostly trades and clinics' },
  { kw: 'web design company canberra', v: '70', w: '7%', note: 'Buyer intent' },
];

/* ─── JSON-LD. Organization is defined sitewide and referenced only by @id.
       No LocalBusiness node: FactoryJet has no Canberra office. ─── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accessible Web Design and SEO Canberra',
      serviceType: 'Accessible web design, WCAG accessibility audits and search engine optimisation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Canberra' },
        { '@type': 'AdministrativeArea', name: 'Australian Capital Territory' },
        ...SERVICE_AREAS.map((name) => ({ '@type': 'Place', name })),
      ],
      url: CANONICAL,
      description:
        'Web design and SEO for Canberra organisations: associations, peak bodies, not-for-profits, professional services and public-sector suppliers. Built to the WCAG accessibility criteria and delivered remotely by senior engineers; the client owns the site, code and accounts.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: CRUMBS.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-08-25',
      dateModified: UPDATED,
      image: `https://factoryjet.com${OG_IMAGE}`,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      about: { '@id': `${CANONICAL}#service` },
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
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    // Mapped from FAQS, the SAME array the FAQ section below renders.
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: 'Web Design & SEO Canberra | FactoryJet',
    description:
      'Accessible, fast websites for Canberra organisations, plus the thinnest search competition of any Australian capital. We can show you the numbers.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'A Canberra association manager and a web developer review an accessible website layout, with Lake Burley Griffin and Black Mountain through the window' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & SEO Canberra | FactoryJet',
    description: 'Accessible, fast websites for Canberra businesses, associations and suppliers.',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function CanberraPage() {
  return (
    <>
      <script id="ld-au-canberra" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="au-svc">
      <main id="main-content">

        <Breadcrumbs items={CRUMBS} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Canberra, ACT</span>
                  <span className="chip">Accessible web design</span>
                  <span className="chip">SEO</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Web design for Canberra businesses, associations and suppliers who work in and around the public sector.
                  Accessible, fast, and built so you can answer the questions a tender puts to you without scrambling.
                </p>
                <p className="mt-4" style={{ maxWidth: 560 }}>
                  Canberra also has the thinnest search competition of anywhere we measured in Australia. When we checked
                  the main local SEO term in August 2026, the weakest organisation holding a first-page position had links
                  from seven other websites. That is a low bar, and it will not stay that way.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />26 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_canberra_hero_inline" submitLabel="Get my free review" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async"
                  alt="Over the shoulder of a Canberra association manager reviewing a clear, high-contrast website layout with a web developer, Lake Burley Griffin and Black Mountain through the window"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What every Canberra build includes</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">WCAG accessibility</div><div className="scorecard-note">built in, not bolted on for a tender</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Level AA</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Written test result at launch</div><div className="scorecard-note">ready to attach to a response</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Site, code and every account</div><div className="scorecard-note">provable ownership</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does accessible web design in Canberra actually mean?</span>
              <p>
                An accessible website still works for someone using a screen reader, navigating by keyboard, or reading at
                high magnification. The standard is WCAG, published by the W3C. In Canberra it matters more than elsewhere,
                because tenders and contracts often ask which standard your site meets, and &ldquo;we do not know&rdquo;
                costs you work.
              </p>
            </div>
            <div className="col-6040 mt-10">
              <div>
                <span className="eyebrow">Answer first</span>
                <h2>What accessible web design in Canberra involves, in plain English</h2>
                <div className="stack mt-6">
                  <p>
                    The W3C publishes WCAG as an international standard, currently spanning versions 2.0, 2.1 and 2.2.<sup><a href="#sources" style={{ color: T.small }}>[1]</a></sup>{' '}
                    Each version is a list of testable success criteria, grouped into three levels: A, AA and AAA. When a
                    Canberra tender asks about accessibility, it almost always means a named version at level AA.
                  </p>
                  <p>
                    We are not going to tell you what the law requires of your organisation. That depends on who you are
                    and what you have signed, and it is a question for your own legal advice rather than for a web agency.
                    What we can tell you is the practical position: the question gets asked, an honest answer of &ldquo;we do
                    not know&rdquo; costs you work, and the underlying fixes are neither expensive nor ugly.
                  </p>
                  <p>
                    Sites fail these checks through inattention rather than through a design decision. That is also why
                    retrofitting an existing site is usually less work than the rebuild people expect.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Canberra work at a glance</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where we work</div><div className="scorecard-note">Civic to Tuggeranong, plus Queanbeyan</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>ACT-wide</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who it is for</div><div className="scorecard-note">associations, suppliers, not-for-profits</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Verified reads</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">How it starts</div><div className="scorecard-note">free review, then a written scope</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where the team sits</div><div className="scorecard-note">remote, Australian business hours</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>No office</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '1,000', t: 'monthly Google searches for web design in Canberra and its close variants', s: 'DataForSEO, Sept 2026', u: '#canberra-demand' },
                { v: '7', t: 'sites linking to the weakest first-page organisation for the main Canberra SEO term', s: 'FactoryJet, Aug 2026', u: '#canberra-search' },
                { v: '2.2', t: 'the newest WCAG version, alongside 2.0 and 2.1, in the W3C accessibility standard', s: 'W3C WAI', u: W3C.url },
                { v: '2.5s', t: 'Google’s pass mark for Largest Contentful Paint, the main page speed measure', s: 'Google Search Central', u: CWV.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.small }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. ACCESSIBILITY BASICS (<details>) ═══ */}
        <section className="sec-lg dot-grid" id="accessibility">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">WCAG, without the jargon</span>
                <h2>Seven accessibility basics that cover most of what a checker tests</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Open any item to see what it means and why it fails so often. None of it makes a site look worse, and most
                  of it is invisible to people who do not need it.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {BASICS.map((b, i) => (
                    <details key={b.t}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>{b.t}</span></summary>
                      <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}>{b.d}</p></div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-accessibility.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Over the shoulder of a tester in headphones moving through a web page with only the keyboard, a bold focus outline on the screen, while a colleague takes notes in a Canberra office"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Automated tools find part of the problem. The rest shows up only when someone moves through the page
                    with a keyboard and listens to it with a screen reader, which is how we test before launch.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              <li className="card"><h3>Level A</h3><p className="mt-4">The minimum. Without it, some people cannot use the site at all: images with no description, content you cannot reach by keyboard, video with no captions.</p></li>
              <li className="card card-top-orange"><h3>Level AA</h3><p className="mt-4">The level most organisations and most tender forms mean. Adds contrast ratios, consistent navigation, visible focus and clear error messages. Our default build target.</p></li>
              <li className="card"><h3>Level AAA</h3><p className="mt-4">The strictest level. Useful for specific pages or audiences, but not realistic across every page of a typical site. We apply parts of it where it makes sense.</p></li>
            </ul>
            <p style={srcNote}>
              Source [1]: <a href={W3C.url} target="_blank" rel="noopener noreferrer nofollow" style={link}>{W3C.source}, {W3C.title}</a>. This page describes accessibility as a practical requirement; it does not state any legal obligation.
            </p>
          </div>
        </section>

        {/* ═══ 5. LOCAL MARKET + TENDERS ═══ */}
        <section className="sec-lg" id="canberra-market">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The local market</span>
                <h2>Canberra buyers check before they browse</h2>
                <div className="stack mt-6">
                  <p>
                    Nationally, 2,814,778 businesses were actively trading at 30 June 2026, with a 16.9% entry rate and a
                    13.8% exit rate across the year.<sup><a href="#sources" style={{ color: T.small }}>[2]</a></sup> Canberra
                    is a small slice of that, and an unusual one. A large share of the organisations here do not sell to
                    consumers at all. They sell to departments, to members, or to funders.
                  </p>
                  <p>
                    That changes the job of the website. A consumer visits a site to be persuaded. A Canberra buyer visits
                    to verify. They are checking whether your organisation is real, current, credentialled and still
                    operating, usually before any conversation happens and often as part of a formal process. A site that
                    reads as marketing rather than as evidence performs badly with that reader.
                  </p>
                  <p>
                    The most common failure we see here is staleness. A news page whose last item is from two years ago, a
                    team page listing people who have left, a document library of scanned files. Each quietly signals that
                    the organisation may not be active. For a consumer site that is untidy. For an organisation being
                    assessed, it can be disqualifying, and it is quick to fix.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-tender.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Three people at a Canberra consultancy review printed tender documents and a checklist at a meeting table, with Black Mountain on the skyline"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What tenders commonly ask about your website</span>
                  <ul className="scope-list yes-list">
                    <li>Which <b>accessibility standard and level</b> the site meets</li>
                    <li>Where the <b>data is hosted</b> and who can reach it</li>
                    <li>How <b>personal information</b> is handled</li>
                    <li>Who <b>owns the code</b> and the accounts</li>
                    <li>Whether you can <b>show the same work</b> live elsewhere</li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-12">
              {SECTORS.map((s) => (
                <li key={s.name} className="svc-card">
                  <h3>{s.name}</h3>
                  <p className="mt-4">{s.note}</p>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Source [2]: <a href={ABS.url} target="_blank" rel="noopener noreferrer nofollow" style={link}>{ABS.source}, {ABS.title}</a>, release dated 18 August 2026.
            </p>
          </div>
        </section>

        {/* ═══ 6. DOCUMENTS INTO PAGES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-4060">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-documents.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Over the shoulder of a policy officer at a Braddon not-for-profit turning a printed annual report into a web page on her laptop, bound reports stacked beside her"
                  style={imgStyle} />
              </div>
              <div>
                <span className="eyebrow">The highest-return change for most Canberra organisations</span>
                <h2>Turn your reports and submissions into real web pages</h2>
                <div className="stack mt-6">
                  <p>
                    Annual reports, submissions, position papers and capability statements are the most valuable content
                    most Canberra organisations own. They are usually the least visible, sitting as PDFs in a downloads list
                    that nobody opens and Google barely reads.
                  </p>
                  <p>
                    Published as pages, the same content does four jobs at once. It becomes searchable, so a department
                    officer typing your topic into Google finds your position. It becomes readable on a phone. It becomes
                    accessible to a screen reader, which scanned files often are not. And it becomes something other sites
                    can link to, which is how a Canberra association earns search authority without buying anything.
                  </p>
                  <p>
                    The file stays available as a download for people who want it. We usually start with the three or four
                    documents that get asked for most, and set up a simple template so your team can publish the next ones
                    themselves in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. SERVICES ═══ */}
        <section className="sec-lg" id="services">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Canberra web design and SEO services</span>
              <h2>Build it to be checked, then get it found</h2>
              <p className="lead mt-4">
                Those are the two jobs in this city, in that order. A Canberra site that cannot survive a verification read
                does not benefit from more traffic. Once it can, the search side here is more winnable than anywhere else
                in the country.
              </p>
            </div>
            <h3 id="web-design-canberra" className="mt-12" style={{ fontSize: 22 }}>Web design in Canberra</h3>
            <ul className="col-3 mt-6">
              {BUILD.map((it) => (
                <li key={it.title} className="card">
                  <h3 style={{ fontSize: 17 }}>{it.title}</h3>
                  <p className="mt-2" style={{ fontSize: 14.5 }}>{it.body}</p>
                </li>
              ))}
            </ul>
            <h3 id="seo-canberra" className="mt-12" style={{ fontSize: 22 }}>SEO in Canberra</h3>
            <ul className="col-3 mt-6" id="canberra-search">
              {SEARCH.map((it) => (
                <li key={it.title} className="card">
                  <h3 style={{ fontSize: 17 }}>{it.title}</h3>
                  <p className="mt-2" style={{ fontSize: 14.5 }}>{it.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MidPageCTA
          headline="Find out whether your site would pass an accessibility check"
          sub="Send us your address. We test the site against the WCAG criteria, crawl it for technical faults, and measure the organisations currently holding the Canberra positions you want. You get a short written summary you can act on or attach to a tender. No charge."
          label="Get a free accessibility and site review"
          note="Bhavesh replies within one business day, Australian hours."
        />

        {/* ═══ 8. PROCESS + TWO AUDIENCES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How a Canberra project runs</span>
                <h2>Accessible website design in seven steps, planned around your approvals</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Canberra organisations usually have a board, a committee or a delegate who signs off. We plan the
                  schedule around those dates rather than pretending they do not exist. Open any step to see what you get.
                </p>
                <div className="card mt-8" style={{ padding: '4px 22px' }}>
                  {STEPS.map((s) => (
                    <details key={s.n}>
                      <summary><span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 10 }}>{s.n}</span>{s.t}</span></summary>
                      <div style={{ paddingBottom: 18 }}>
                        <p style={{ fontSize: 15 }}>{s.d}</p>
                        <p style={{ fontSize: 14, marginTop: 8 }}><b>You get:</b> {s.out}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-workshop.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A web strategist arranges blank sticky notes into two separate audience paths on a whiteboard while three people from a Canberra peak body watch"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Members and departments. People seeking help and people funding it. The site map workshop is where each
                    audience gets its own path, instead of one home page hedging between them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 780 }}>DIY builder vs freelance web designer vs Canberra studio vs FactoryJet</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Canberra has capable studios, and the right one depends on whether you need brand work, an accessible site
              that will pass a tender review, or an ongoing search programme. Few firms are strong at all three.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>DIY website builder</th>
                    <th>Freelance web designer</th>
                    <th>Canberra design studio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">Sites that must pass a check and be found</span></td><td><span className="partial">Simple sites you maintain yourself</span></td><td><span className="partial">Small sites, clear brief</span></td><td><span className="partial">Brand and design-led work</span></td></tr>
                  <tr><td className="feat">WCAG level AA as standard</td><td className="fj"><span className="yes">Yes, with a written test result</span></td><td><span className="partial">Depends on the theme</span></td><td><span className="partial">Varies</span></td><td><span className="partial">Often, ask for evidence</span></td></tr>
                  <tr><td className="feat">Keyboard and screen reader testing</td><td className="fj"><span className="yes">Before launch</span></td><td><span className="no">On you</span></td><td><span className="partial">Rarely formal</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">SEO and Google listing</td><td className="fj"><span className="yes">Same team, measured</span></td><td><span className="no">On you</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Often a partner</span></td></tr>
                  <tr><td className="feat">Ownership of code and accounts</td><td className="fj"><span className="yes">Yours, provably</span></td><td><span className="partial">Inside the platform</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Check the contract</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">The team that built it</span></td><td><span className="no">Platform help desk</span></td><td><span className="partial">If available</span></td><td><span className="yes">Usually, on retainer</span></td></tr>
                  <tr><td className="feat">Local office in Canberra</td><td className="fj"><span className="no">No, remote in Australian hours</span></td><td><span className="partial">Not applicable</span></td><td><span className="yes">Often</span></td><td><span className="yes">Yes</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 10. WHICH OPTION FITS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you</span>
              <h2>A quick check: what does your Canberra organisation actually need?</h2>
              <p className="lead mt-4">Open the description that sounds most like you. The honest answer is not always a new website.</p>
            </div>
            <div className="card mt-8" style={{ padding: '4px 22px', maxWidth: 900 }}>
              <details>
                <summary>A tender asks about accessibility and we do not know the answer</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Start with an audit, not a rebuild.</b> The free review tells you where the site stands against WCAG. Many failures are quick fixes on the existing site.</p></div>
              </details>
              <details>
                <summary>Our audience finds us through members, mailing lists or a formal process</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Skip search work.</b> Spend on a current, accessible, verifiable site and on turning documents into pages. SEO would be a poor use of money for you.</p></div>
              </details>
              <details>
                <summary>We are a local business and want more calls from Canberra suburbs</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Local SEO first.</b> Google listing, reviews and suburb pages. See our <a href="/au/seo" style={link}>SEO services in Australia</a>.</p></div>
              </details>
              <details>
                <summary>We want to sell memberships, courses or products online</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>That is a store or platform build.</b> See <a href="/au/shopify-development" style={link}>Shopify development</a> or <a href="/au/ecommerce-development" style={link}>ecommerce development in Australia</a>.</p></div>
              </details>
              <details>
                <summary>We want AI assistants like ChatGPT to cite our positions and research</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>That is AI search visibility.</b> Publishing documents as pages is the first step; see our <a href="/au/ai-seo" style={link}>AI SEO service for Australian organisations</a>.</p></div>
              </details>
              <details>
                <summary>Our team spends hours on member enquiries and admin</summary>
                <div style={{ paddingBottom: 18 }}><p style={{ fontSize: 15 }}><b>Look at automation.</b> See our <a href="/au/ai-agents" style={link}>AI agents</a> and <a href="/au/ai-consulting" style={link}>AI consulting</a> work, which keeps people approving what matters and handles personal information under the Privacy Act.</p></div>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ 11. LOCAL SEARCH ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Google Maps and local SEO in Canberra</span>
                <h2>The search side, and why it is unusually open right now</h2>
                <div className="stack mt-6">
                  <p>
                    Canberra had the thinnest competition of any Australian market we measured in August 2026. On the main
                    local SEO term, the weakest organisation holding a first-page position had links from seven other
                    websites. On the main web design term it was twenty one. Both are inside reach of a well-built new site,
                    which is not true in any other capital. Google also showed no AI Overview on either term, so an ordinary
                    ranking still earns the visit.
                  </p>
                  <p>
                    For local businesses the map results matter most. Google ranks them on relevance, distance and
                    prominence. Distance is fixed: a Tuggeranong plumber will show for a Tuggeranong searcher before a
                    Gungahlin one. Relevance and prominence are where the work is: a specific primary category, service
                    areas set honestly, real photos, reviews with replies, and suburb pages that match the listing.
                  </p>
                  <p>
                    Queanbeyan is a common edge case. A business there serves Canberra customers but sits across the border
                    in New South Wales. The listing should show the real address and list the Canberra districts it serves;
                    the website should say plainly that you cover the ACT. Pretending to have a Canberra address is how
                    listings get suspended.
                  </p>
                  <p>
                    One honest note about us. FactoryJet has no Canberra office. That makes no difference to your own map
                    ranking, which depends on your address and your listing. If a tender asks for local presence, tell us at
                    the start and we will help you answer it truthfully.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/canberra/canberra-tradie.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A Canberra plumber beside his ute on a Gungahlin street in autumn checks a new job enquiry on his phone, the Brindabella Ranges on the horizon"
                  style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What moves the Canberra map results</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Primary category and services</div><div className="scorecard-note">the most specific one that fits</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Relevance</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Reviews asked for and answered</div><div className="scorecard-note">a repeatable system</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Prominence</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">In-person customer contact</div><div className="scorecard-note">required by Google for a listing</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Eligibility</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Where the searcher is standing</div><div className="scorecard-note">nobody can change this</div></div><div className="scorecard-val" style={{ color: T.small, fontSize: 14 }}>Distance</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. DEMAND + WHERE WE WORK ═══ */}
        <section className="sec-lg dot-grid" id="canberra-demand">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What Canberra actually searches</span>
                <h2>Canberra web design and SEO demand, measured</h2>
                <div className="stack mt-6">
                  <p>
                    These are monthly Google searches in Australia for the main Canberra web design and SEO terms, measured
                    in September 2026. Google reports close variants with one shared figure, so the rows overlap and should
                    not be added together.
                  </p>
                  <p>
                    Unlike Adelaide, web design searches in Canberra run level with or ahead of SEO searches. That fits a
                    city where many organisations need a better site before they need more traffic. It is also why we lead
                    with the build here.
                  </p>
                  <p>
                    Canberra is a small market, so some terms that look worthwhile have almost no real volume. We check the
                    demand for your own services before recommending search work.
                  </p>
                </div>
                <span className="eyebrow mt-8">Where we work in the ACT and region</span>
                <div className="flex-wrap">
                  {SERVICE_AREAS.map((a) => <span key={a} className="chip">{a}</span>)}
                </div>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  All projects run remotely in Australian business hours, with the founder involved in every one.
                </p>
              </div>
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Canberra · Monthly search demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {DEMAND.map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.note}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Google Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 13. COST DRIVERS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What decides the cost of web design in Canberra</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  No price figures appear on this page on purpose. Accessibility retrofits vary enormously depending on how
                  the existing site was built, and a number posted here would mislead most readers. Published market
                  ranges are in our <a href="/blog/website-cost-australia-2026" style={link}>website cost guide</a>{' '}
                  and <a href="/blog/seo-cost-australia-2026" style={link}>SEO cost guide</a>. Work usually takes one of four shapes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Free review.</b> Accessibility sample test, crawl, speed check and Google listing check, in a short written summary.</li>
                  <li><b>Accessibility remediation.</b> Fixing the failures on your existing site, ranked by how many people they block, with a retest.</li>
                  <li><b>Website build.</b> A fixed-scope accessible design and build. Sites of up to five pages can have 7-day delivery once content and approvals are ready.</li>
                  <li><b>Support and search.</b> Keeping content current and accessible, plus search work if your audience actually searches. Monthly fixes and updates are covered by our <a href="/au/website-maintenance" style={link}>website maintenance</a> plans.</li>
                </ul>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Number of pages and documents</div><div className="scorecard-val" style={{ fontSize: 14 }}>Size</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">WCAG version and level required</div><div className="scorecard-val" style={{ fontSize: 14 }}>Accessibility</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Memberships, events or payments</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integrations</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Hosting and data conditions in contracts</div><div className="scorecard-val" style={{ fontSize: 14 }}>Security</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Approval rounds inside your organisation</div><div className="scorecard-val" style={{ fontSize: 14 }}>Time</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First review and call</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. SIBLING PAGES (hover cards) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FactoryJet across Australia</span>
              <h2>Related services and the other cities we work in</h2>
              <p className="lead mt-4">
                Start at <a href="/au" style={link}>FactoryJet Australia</a> for the full picture, or go straight to the
                service that fits.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {[
                { h: '/au', t: 'Web design Australia', d: 'Our national web design and development page: how we build, what you own, and the full service list.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical SEO, content and local search for Australian organisations, reported against what you need.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your organisation cited in ChatGPT, Perplexity and Google AI answers.' },
                { h: '/au/ai-consulting', t: 'AI consulting', d: 'Where AI fits in your organisation, ranked by value and risk, with Privacy Act considerations up front.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Membership, course and product sales built into your site, owned by you.' },
                { h: '/au/ai-agents', t: 'AI agents', d: 'Automation for enquiries and admin that works inside your existing tools, with people approving what matters.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%' }}>
                    <h3 style={{ fontSize: 17 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>&rarr;</span></h3>
                    <p style={{ marginTop: 8, fontSize: 14 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-3 mt-6">
              {[
                { h: '/au/melbourne', t: 'Web design and SEO in Melbourne', d: 'Victoria' },
                { h: '/au/brisbane', t: 'Web design and SEO in Brisbane', d: 'Queensland' },
                { h: '/au/adelaide', t: 'Web design and SEO in Adelaide', d: 'South Australia' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h} className="svc-card" style={{ display: 'block', height: '100%', padding: 22 }}>
                    <h3 style={{ fontSize: 16 }}>{c.t} <span aria-hidden="true" style={{ color: T.small }}>&rarr;</span></h3>
                    <p style={{ marginTop: 4, fontSize: 13.5 }}>{c.d}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 15. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>{FAQS.length} questions Canberra organisations ask about web design and SEO</h2>
              <p className="mt-4" style={{ maxWidth: 680, margin: '16px auto 0' }}>
                Each one comes from the People Also Ask questions Google shows Australian searchers. The accessibility
                answers describe what the standard asks, not what the law requires of you, which is a question for your own
                legal advice.
              </p>
            </div>
            <nav className="faq-pill-nav" aria-label="FAQ topics">
              {TOPIC_ORDER.map((t) => (
                <a key={t} href={`#faq-${topicKey(t)}`}>{t}<span className="pill-count">{FAQS.filter((f) => f.topic === t).length}</span></a>
              ))}
            </nav>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {TOPIC_ORDER.map((t) => (
                    <a key={t} href={`#faq-${topicKey(t)}`}>
                      {t}
                      <span className="faq-nav-count">{FAQS.filter((f) => f.topic === t).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within one business day.</p>
                </div>
              </aside>

              <div>
                {TOPIC_ORDER.map((t) => (
                  <div key={t} id={`faq-${topicKey(t)}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{t}</p>
                    </div>
                    <ul className="faq-list" style={{ listStyle: 'none' }}>{FAQS.filter((f) => f.topic === t).map((f) => (
                      <li key={f.q}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.q}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.a}</p>{f.links ? <p style={{ marginTop: 8 }}>{f.links.map((l) => <a key={l.href} href={l.href} style={{ ...link, marginRight: 16 }}>{l.label}</a>)}</p> : null}</div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 16. SOURCES ═══ */}
        <section className="sec" id="sources" style={{ borderTop: `1px solid ${T.n200}` }}>
          <div className="wrap">
            <span className="eyebrow">Sources</span>
            <ol style={{ listStyle: 'none', maxWidth: 860 }}>
              {CITATIONS.map((c) => (
                <li key={c.id} style={{ display: 'flex', gap: 12, marginTop: 14 }}>
                  <span style={{ fontFamily: T.fm, fontSize: 12, fontWeight: 600, color: T.small }}>[{c.id}]</span>
                  <div>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...link, fontWeight: 600, color: T.ink, fontSize: 14.5 }}>{c.source}: {c.title}</a>
                    <p style={{ fontSize: 13.5, marginTop: 4 }}>{c.claim}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={srcNote}>
              Search volumes: DataForSEO, Google Australia, September 2026. Competitor link counts and AI Overview presence:
              measured by FactoryJet against Google Australia results in August 2026.
            </p>
          </div>
        </section>

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 680 }}>
            <span className="eyebrow">Next step</span>
            <h2>Find out whether your Canberra site would pass a check</h2>
            <p className="mt-4">
              Send us the address. We will test sample pages against WCAG, crawl the site for technical faults, check your
              Google listing, and measure who holds the Canberra positions you want. You get a short written summary you can
              act on or attach to a tender. No charge, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get a free accessibility review" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/seo" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See our SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
