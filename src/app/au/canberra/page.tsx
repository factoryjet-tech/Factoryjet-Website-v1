import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import { CANONICAL, CRUMBS, CITATIONS, SERVICE_AREAS } from './pageData';
import { FAQS, type Faq } from './faqData';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-city.css';

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

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'canberra';

/* H1 split for the Family A hero emphasis. Rendered text stays byte-identical to H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel rows (the old "What every Canberra build includes" hero card rows). */
const HERO_ROWS: { note: string; metric: string; val: string; icon: string }[] = [
  { note: 'built in, not bolted on for a tender', metric: 'WCAG accessibility', val: 'Level AA', icon: 'M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 2 7 1 7-1m-7 1v5l-3 6m3-6 3 6' },
  { note: 'ready to attach to a response', metric: 'Written test result at launch', val: 'Included', icon: 'M6 3h9l4 4v14H6V3Zm3 10 2 2 4-4' },
  { note: 'provable ownership', metric: 'Site, code and every account', val: 'Yours', icon: 'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2' },
];

/* Icons and visual-slot subjects for the six web design cards (same order as BUILD). */
const BUILD_ICONS = [
  'M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 2 7 1 7-1m-7 1v5l-3 6m3-6 3 6',
  'M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  'M6 3h9l4 4v14H6V3Zm3 8h7m-7 4h7',
  'M4 16a8 8 0 1 1 16 0M12 16l4-5',
  'M4 12h6l4-6h6M10 12l4 6h6',
  'M14 4a6 6 0 1 1-4.2 10.3L4 20m2-2 2 2m1-5 2 2',
] as const;
const BUILD_SUBJECTS = [
  'AI-generated model: a white web page card with a bold orange keyboard focus outline around one button',
  'AI-generated model: a white web page card beside a checklist clipboard with orange ticks, as an assessor would read it',
  'AI-generated model: a stack of white printed reports turning into a single white web page card',
  'AI-generated model: a white speed gauge with its needle resting in an orange good zone beside a small phone',
  'AI-generated model: one white home page card splitting into two separate paths marked with small orange arrows',
  'AI-generated model: an orange key being handed from one small figure to another in front of a white website card',
] as const;

/* FAQ categories and items for the shared Family A FAQ, mapped from the SAME FAQS array the FAQPage JSON-LD maps. */
const FAQ_CATEGORIES = TOPIC_ORDER.map((t) => ({ key: topicKey(t), label: t }));
const FAQ_ITEMS = FAQS.map((f) => ({ category: topicKey(f.topic), question: f.q, answer: f.a, links: f.links }));

export default function CanberraPage() {
  return (
    <>
      <script id="ld-au-canberra" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {CRUMBS.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === CRUMBS.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="main-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Canberra, ACT</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Web design for Canberra businesses, associations and suppliers who work in and around the public sector.
                Accessible, fast, and built so you can answer the questions a tender puts to you without scrambling.
              </p>
              <HeroInlineForm region="au" source="au_canberra_hero_inline" submitLabel="Get my free review" />
              <p className="hero-more">
                Canberra also has the thinnest search competition of anywhere we measured in Australia. When we checked
                the main local SEO term in August 2026, the weakest organisation holding a first-page position had links
                from seven other websites. That is a low bar, and it will not stay that way.
              </p>
            </div>

            <form
              className="specpanel"
              aria-label="What every Canberra build includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every Canberra build includes: WCAG level AA accessibility, a written test result at launch, and provable ownership of the site, code and accounts"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY CANBERRA BUILD INCLUDES</span>
                <span className="sys"><span>ACCESSIBLE WEB DESIGN</span><span>SEO</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every build includes">
                {HERO_ROWS.map((r, i) => (
                  <label key={r.metric} className={i === HERO_ROWS.length - 1 ? 'specrow hold' : 'specrow run'}>
                    <input className="workflow-select" type="radio" name="canberra-step" value={String(i + 1)} />
                    <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={r.icon} /></svg></span>
                    <span className="idx">{r.note}</span>
                    <span className="title">{r.metric}</span>
                    <span className="tag">{r.val}</span>
                  </label>
                ))}
              </div>
              <div className="specpanel-foot">RULE · Accessibility drifts as people add content.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '1,000', t: 'monthly Google searches for web design in Canberra and its close variants', s: 'DataForSEO, Sept 2026', u: '#canberra-demand' },
              { v: '7', t: 'sites linking to the weakest first-page organisation for the main Canberra SEO term', s: 'FactoryJet, Aug 2026', u: '#canberra-search' },
              { v: '2.2', t: 'the newest WCAG version, alongside 2.0 and 2.1, in the W3C accessibility standard', s: 'W3C WAI', u: W3C.url },
              { v: '2.5s', t: 'Google’s pass mark for Largest Contentful Paint, the main page speed measure', s: 'Google Search Central', u: CWV.url },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/^[\d.,]+s?$/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → facts ═══ */}
        <section className="section facts" id="answer">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does accessible web design in Canberra actually mean?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    An accessible website still works for someone using a screen reader, navigating by keyboard, or reading at
                    high magnification. The standard is WCAG, published by the W3C. In Canberra it matters more than elsewhere,
                    because tenders and contracts often ask which standard your site meets, and &ldquo;we do not know&rdquo;
                    costs you work.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A Canberra association manager reviewing a clear, high-contrast website layout with a web developer, the lake and Black Mountain through the window">
                <img src="/images/au/canberra/canberra-hero.webp" width={1400} height={933} loading="lazy" decoding="async"
                  alt="Over the shoulder of a Canberra association manager reviewing a clear, high-contrast website layout with a web developer, Lake Burley Griffin and Black Mountain through the window" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ PLAIN-ENGLISH ANSWER + AT A GLANCE → facts with side panel ═══ */}
        <section className="section facts" id="plain-english">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Answer first</div>
              <h2>What accessible web design in Canberra involves, in plain English</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The W3C publishes WCAG as an international standard, currently spanning versions 2.0, 2.1 and 2.2.<sup><a href="#sources">[1]</a></sup>{' '}
                  Each version is a list of testable success criteria, grouped into three levels: A, AA and AAA. When a
                  Canberra tender asks about accessibility, it almost always means a named version at level AA.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  We are not going to tell you what the law requires of your organisation. That depends on who you are
                  and what you have signed, and it is a question for your own legal advice rather than for a web agency.
                  What we can tell you is the practical position: the question gets asked, an honest answer of &ldquo;we do
                  not know&rdquo; costs you work, and the underlying fixes are neither expensive nor ugly.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Sites fail these checks through inattention rather than through a design decision. That is also why
                  retrofitting an existing site is usually less work than the rebuild people expect.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Canberra work at a glance</div>
                <ul className="trigrows">
                  <li><span className="m">Where we work</span><span className="n">Civic to Tuggeranong, plus Queanbeyan</span><span className="t">ACT-wide</span></li>
                  <li><span className="m">Who it is for</span><span className="n">associations, suppliers, not-for-profits</span><span className="t">Verified reads</span></li>
                  <li><span className="m">How it starts</span><span className="n">free review, then a written scope</span><span className="t">Free</span></li>
                  <li><span className="m">Where the team sits</span><span className="n">remote, Australian business hours</span><span className="t">No office</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ACCESSIBILITY BASICS (<details>) → vlog, WCAG levels as rows underneath ═══ */}
        <section className="vlog" id="accessibility">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">WCAG, without the jargon</div>
              <h2>Seven accessibility basics that cover most of what a checker tests</h2>
              <p>
                Open any item to see what it means and why it fails so often. None of it makes a site look worse, and most
                of it is invisible to people who do not need it.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A tester in headphones moving through a web page with only the keyboard while a colleague takes notes in a Canberra office"
                caption="Automated tools find part of the problem. The rest shows up only when someone moves through the page with a keyboard and listens to it with a screen reader, which is how we test before launch.">
                <img src="/images/au/canberra/canberra-accessibility.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Over the shoulder of a tester in headphones moving through a web page with only the keyboard, a bold focus outline on the screen, while a colleague takes notes in a Canberra office" />
              </VisualSlot>
            </div>
            <div className="ventries">
              {BASICS.map((b) => (
                <details key={b.t} className="ventry">
                  <summary><h3>{b.t}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <p>{b.d}</p>
                </details>
              ))}
            </div>
            <div className="vlog-after">
              <div className="platlist" role="list">
                <div className="plat plat-2col" role="listitem"><span className="capid">A</span><div className="plat-name"><h3>Level A</h3></div><p className="plat-build">The minimum. Without it, some people cannot use the site at all: images with no description, content you cannot reach by keyboard, video with no captions.</p></div>
                <div className="plat plat-2col plat-own" role="listitem"><span className="capid">AA</span><div className="plat-name"><h3>Level AA</h3></div><p className="plat-build">The level most organisations and most tender forms mean. Adds contrast ratios, consistent navigation, visible focus and clear error messages. Our default build target.</p></div>
                <div className="plat plat-2col" role="listitem"><span className="capid">AAA</span><div className="plat-name"><h3>Level AAA</h3></div><p className="plat-build">The strictest level. Useful for specific pages or audiences, but not realistic across every page of a typical site. We apply parts of it where it makes sense.</p></div>
              </div>
              <p className="au-note">
                Source [1]: <a href={W3C.url} {...extLink}>{W3C.source}, {W3C.title}</a>. This page describes accessibility as a practical requirement; it does not state any legal obligation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ LOCAL MARKET + TENDERS → facts, sectors as ruled rows ═══ */}
        <section className="section facts" id="canberra-market">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The local market</div>
              <h2>Canberra buyers check before they browse</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Nationally, 2,814,778 businesses were actively trading at 30 June 2026, with a 16.9% entry rate and a
                  13.8% exit rate across the year.<sup><a href="#sources">[2]</a></sup> Canberra
                  is a small slice of that, and an unusual one. A large share of the organisations here do not sell to
                  consumers at all. They sell to departments, to members, or to funders.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  That changes the job of the website. A consumer visits a site to be persuaded. A Canberra buyer visits
                  to verify. They are checking whether your organisation is real, current, credentialled and still
                  operating, usually before any conversation happens and often as part of a formal process. A site that
                  reads as marketing rather than as evidence performs badly with that reader.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The most common failure we see here is staleness. A news page whose last item is from two years ago, a
                  team page listing people who have left, a document library of scanned files. Each quietly signals that
                  the organisation may not be active. For a consumer site that is untidy. For an organisation being
                  assessed, it can be disqualifying, and it is quick to fix.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">What tenders commonly ask about your website</div>
                  <ul className="chg-list">
                    <li><span>Which <b>accessibility standard and level</b> the site meets</span></li>
                    <li><span>Where the <b>data is hosted</b> and who can reach it</span></li>
                    <li><span>How <b>personal information</b> is handled</span></li>
                    <li><span>Who <b>owns the code</b> and the accounts</span></li>
                    <li><span>Whether you can <b>show the same work</b> live elsewhere</span></li>
                  </ul>
                  <p className="au-note">
                    Source [2]: <a href={ABS.url} {...extLink}>{ABS.source}, {ABS.title}</a>, release dated 18 August 2026.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto"
                subject="Three people at a Canberra consultancy reviewing printed tender documents and a checklist at a meeting table">
                <img src="/images/au/canberra/canberra-tender.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="Three people at a Canberra consultancy review printed tender documents and a checklist at a meeting table, with Black Mountain on the skyline" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              {SECTORS.map((s, i) => (
                <div key={s.name} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{s.name}</h3></div>
                  <p className="plat-build">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ DOCUMENTS INTO PAGES → definition (image left, copy right) ═══ */}
        <section className="definition" id="documents">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A policy officer at a Braddon not-for-profit turning a printed annual report into a web page on her laptop">
              <img src="/images/au/canberra/canberra-documents.webp" width={1200} height={800} loading="lazy" decoding="async"
                alt="Over the shoulder of a policy officer at a Braddon not-for-profit turning a printed annual report into a web page on her laptop, bound reports stacked beside her" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">The highest-return change for most Canberra organisations</div>
            <h2>Turn your reports and submissions into real web pages</h2>
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
        </section>

        {/* ═══ SERVICES → capgrid (web design) + ruled rows (SEO) ═══ */}
        <section className="section capabilities" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Canberra web design and SEO services</div>
              <h2>Build it to be checked, then get it found</h2>
              <p className="lead">
                Those are the two jobs in this city, in that order. A Canberra site that cannot survive a verification read
                does not benefit from more traffic. Once it can, the search side here is more winnable than anywhere else
                in the country.
              </p>
            </div>
            <div className="city-sub"><h3 id="web-design-canberra">Web design in Canberra</h3></div>
            <div className="capgrid">
              {BUILD.map((it, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={it.title} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={BUILD_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUILD_SUBJECTS[i]} />
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="city-sub"><h3 id="seo-canberra">SEO in Canberra</h3></div>
            <div className="platlist" role="list" id="canberra-search">
              {SEARCH.map((it, i) => (
                <div key={it.title} className="plat plat-2col" role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{it.title}</h3></div>
                  <p className="plat-build">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of white web page cards, each with a clear orange focus outline, laid out like a table of contents" />

        {/* ═══ PROCESS (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="process">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How a Canberra project runs</div>
                <h2>Accessible website design in seven steps, planned around your approvals</h2>
                <p className="lead">
                  Canberra organisations usually have a board, a committee or a delegate who signs off. We plan the
                  schedule around those dates rather than pretending they do not exist. Open any step to see what you get.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A web strategist arranging sticky notes into two audience paths on a whiteboard while three people from a Canberra peak body watch"
                caption="Members and departments. People seeking help and people funding it. The site map workshop is where each audience gets its own path, instead of one home page hedging between them.">
                <img src="/images/au/canberra/canberra-workshop.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A web strategist arranges blank sticky notes into two separate audience paths on a whiteboard while three people from a Canberra peak body watch" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.out}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline="Find out whether your site would pass an accessibility check"
            sub="Send us your address. We test the site against the WCAG criteria, crawl it for technical faults, and measure the organisations currently holding the Canberra positions you want. You get a short written summary you can act on or attach to a tender. No charge."
            label="Get a free accessibility and site review"
            note="Bhavesh replies within one business day, Australian hours."
          />
        </div>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>DIY builder vs freelance web designer vs Canberra studio vs FactoryJet</h2>
                <p className="lead">
                  Canberra has capable studios, and the right one depends on whether you need brand work, an accessible site
                  that will pass a tender review, or an ongoing search programme. Few firms are strong at all three.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
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
                  <tr><th scope="row">Best fit</th><td className="fj">Sites that must pass a check and be found</td><td>Simple sites you maintain yourself</td><td>Small sites, clear brief</td><td>Brand and design-led work</td></tr>
                  <tr><th scope="row">WCAG level AA as standard</th><td className="fj">Yes, with a written test result</td><td>Depends on the theme</td><td>Varies</td><td>Often, ask for evidence</td></tr>
                  <tr><th scope="row">Keyboard and screen reader testing</th><td className="fj">Before launch</td><td>On you</td><td>Rarely formal</td><td>Varies</td></tr>
                  <tr><th scope="row">SEO and Google listing</th><td className="fj">Same team, measured</td><td>On you</td><td>Sometimes</td><td>Often a partner</td></tr>
                  <tr><th scope="row">Ownership of code and accounts</th><td className="fj">Yours, provably</td><td>Inside the platform</td><td>Check the contract</td><td>Check the contract</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">The team that built it</td><td>Platform help desk</td><td>If available</td><td>Usually, on retainer</td></tr>
                  <tr><th scope="row">Local office in Canberra</th><td className="fj">No, remote in Australian hours</td><td>Not applicable</td><td>Often</td><td>Yes</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ WHICH OPTION FITS (<details>) → vlog ═══ */}
        <section className="vlog" id="which-option">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you</div>
              <h2>A quick check: what does your Canberra organisation actually need?</h2>
              <p>Open the description that sounds most like you. The honest answer is not always a new website.</p>
            </div>
            <div className="ventries">
              <details className="ventry">
                <summary><h3>A tender asks about accessibility and we do not know the answer</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Start with an audit, not a rebuild.</span>
                <p>The free review tells you where the site stands against WCAG. Many failures are quick fixes on the existing site.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our audience finds us through members, mailing lists or a formal process</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Skip search work.</span>
                <p>Spend on a current, accessible, verifiable site and on turning documents into pages. SEO would be a poor use of money for you.</p>
              </details>
              <details className="ventry">
                <summary><h3>We are a local business and want more calls from Canberra suburbs</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Local SEO first.</span>
                <p>Google listing, reviews and suburb pages. See our <a href="/au/seo">SEO services in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want to sell memberships, courses or products online</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">That is a store or platform build.</span>
                <p>See <a href="/au/shopify-development">Shopify development</a> or <a href="/au/ecommerce-development">ecommerce development in Australia</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>We want AI assistants like ChatGPT to cite our positions and research</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">That is AI search visibility.</span>
                <p>Publishing documents as pages is the first step; see our <a href="/au/ai-seo">AI SEO service for Australian organisations</a>.</p>
              </details>
              <details className="ventry">
                <summary><h3>Our team spends hours on member enquiries and admin</h3><span className="chev" aria-hidden="true">+</span></summary>
                <span className="vtag">Look at automation.</span>
                <p>See our <a href="/au/ai-agents">AI agents</a> and <a href="/au/ai-consulting">AI consulting</a> work, which keeps people approving what matters and handles personal information under the Privacy Act.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ LOCAL SEARCH → facts ═══ */}
        <section className="section facts" id="local-search">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Google Maps and local SEO in Canberra</div>
              <h2>The search side, and why it is unusually open right now</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Canberra had the thinnest competition of any Australian market we measured in August 2026. On the main
                  local SEO term, the weakest organisation holding a first-page position had links from seven other
                  websites. On the main web design term it was twenty one. Both are inside reach of a well-built new site,
                  which is not true in any other capital. Google also showed no AI Overview on either term, so an ordinary
                  ranking still earns the visit.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  For local businesses the map results matter most. Google ranks them on relevance, distance and
                  prominence. Distance is fixed: a Tuggeranong plumber will show for a Tuggeranong searcher before a
                  Gungahlin one. Relevance and prominence are where the work is: a specific primary category, service
                  areas set honestly, real photos, reviews with replies, and suburb pages that match the listing.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  Queanbeyan is a common edge case. A business there serves Canberra customers but sits across the border
                  in New South Wales. The listing should show the real address and list the Canberra districts it serves;
                  the website should say plainly that you cover the ACT. Pretending to have a Canberra address is how
                  listings get suspended.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  One honest note about us. FactoryJet has no Canberra office. That makes no difference to your own map
                  ranking, which depends on your address and your listing. If a tender asks for local presence, tell us at
                  the start and we will help you answer it truthfully.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <div className="factlabel">What moves the Canberra map results</div>
                  <ul className="trigrows">
                    <li><span className="m">Primary category and services</span><span className="n">the most specific one that fits</span><span className="t">Relevance</span></li>
                    <li><span className="m">Reviews asked for and answered</span><span className="n">a repeatable system</span><span className="t">Prominence</span></li>
                    <li><span className="m">In-person customer contact</span><span className="n">required by Google for a listing</span><span className="t">Eligibility</span></li>
                    <li><span className="m">Where the searcher is standing</span><span className="n">nobody can change this</span><span className="t">Distance</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto"
                subject="A Canberra plumber beside his ute on a Gungahlin street in autumn checking a new job enquiry on his phone">
                <img src="/images/au/canberra/canberra-tradie.webp" width={1200} height={800} loading="lazy" decoding="async"
                  alt="A Canberra plumber beside his ute on a Gungahlin street in autumn checks a new job enquiry on his phone, the Brindabella Ranges on the horizon" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ DEMAND + WHERE WE WORK → prose/areas + demand panel, city-map slot ═══ */}
        <section className="section market" id="canberra-demand">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What Canberra actually searches</div>
              <h2>Canberra web design and SEO demand, measured</h2>
            </div>
            <div className="au-split au-split-flush">
              <div>
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
                <div className="city-areas city-areas-solo">
                  <div>
                    <div className="factlabel">Where we work in the ACT and region</div>
                    <ul className="city-list">
                      {SERVICE_AREAS.map((a) => (<li key={a}><span>{a}</span></li>))}
                    </ul>
                    <p className="city-areas-more">
                      All projects run remotely in Australian business hours, with the founder involved in every one.
                    </p>
                    <VisualSlot page={PAGE_KEY} slot="city-map" kind="map" ratio="3:2"
                      subject="A plain map of the ACT and Queanbeyan with the listed districts marked as small dots; no office pin, because FactoryJet has no Canberra office" />
                  </div>
                </div>
              </div>
              <div className="demand">
                <div className="demand-head"><span>Canberra · Monthly search demand</span><b>DataForSEO</b></div>
                <ul>
                  {DEMAND.map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.note}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Google Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COST DRIVERS → ruled rows + scope panel ═══ */}
        <section className="section platforms" id="cost">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>What decides the cost of web design in Canberra</h2>
              </div>
              <p>
                No price figures appear on this page on purpose. Accessibility retrofits vary enormously depending on how
                the existing site was built, and a number posted here would mislead most readers. Published market
                ranges are in our <a href="/blog/website-cost-australia-2026">website cost guide</a>{' '}
                and <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. Work usually takes one of four shapes.
              </p>
            </div>
            <div className="au-split au-split-flush">
              <div>
                <div className="platlist" role="list">
                  <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Free review.</h3></div><p className="plat-build">Accessibility sample test, crawl, speed check and Google listing check, in a short written summary.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Accessibility remediation.</h3></div><p className="plat-build">Fixing the failures on your existing site, ranked by how many people they block, with a retest.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Website build.</h3></div><p className="plat-build">A fixed-scope accessible design and build. Sites of up to five pages can have 7-day delivery once content and approvals are ready.</p></div>
                  <div className="plat plat-2col" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Support and search.</h3></div><p className="plat-build">Keeping content current and accessible, plus search work if your audience actually searches. Monthly fixes and updates are covered by our <a href="/au/website-maintenance">website maintenance</a> plans.</p></div>
                </div>
                <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of pages and documents</span><span className="t">Size</span></li>
                  <li><span className="m">WCAG version and level required</span><span className="t">Accessibility</span></li>
                  <li><span className="m">Memberships, events or payments</span><span className="t">Integrations</span></li>
                  <li><span className="m">Hosting and data conditions in contracts</span><span className="t">Security</span></li>
                  <li><span className="m">Approval rounds inside your organisation</span><span className="t">Time</span></li>
                  <li><span className="m">First review and call</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING PAGES → agentdir + other cities ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">FactoryJet across Australia</div>
              <h2>Related services and the other cities we work in</h2>
              <p>
                Start at <a href="/au">FactoryJet Australia</a> for the full picture, or go straight to the
                service that fits.
              </p>
            </div>
            <ul className="agentdir-grid">
              {[
                { h: '/au', t: 'Web design Australia', d: 'Our national web design and development page: how we build, what you own, and the full service list.' },
                { h: '/au/seo', t: 'SEO services Australia', d: 'Technical SEO, content and local search for Australian organisations, reported against what you need.' },
                { h: '/au/ai-seo', t: 'AI SEO', d: 'Get your organisation cited in ChatGPT, Perplexity and Google AI answers.' },
                { h: '/au/ai-consulting', t: 'AI consulting', d: 'Where AI fits in your organisation, ranked by value and risk, with Privacy Act considerations up front.' },
                { h: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Membership, course and product sales built into your site, owned by you.' },
                { h: '/au/ai-agents', t: 'AI agents', d: 'Automation for enquiries and admin that works inside your existing tools, with people approving what matters.' },
              ].map((c) => (
                <li key={c.h}>
                  <a href={c.h}>
                    <span className="agentdir-t">{c.t}</span>
                    <span className="agentdir-l">{c.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="city-links">
              <ul className="agentdir-grid">
                {[
                  { h: '/au/melbourne', t: 'Web design and SEO in Melbourne', d: 'Victoria' },
                  { h: '/au/brisbane', t: 'Web design and SEO in Brisbane', d: 'Queensland' },
                  { h: '/au/adelaide', t: 'Web design and SEO in Adelaide', d: 'South Australia' },
                ].map((c) => (
                  <li key={c.h}>
                    <a href={c.h}>
                      <span className="agentdir-t">{c.t}</span>
                      <span className="agentdir-l">{c.d}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; items mapped from FAQS, the same array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading={`${FAQS.length} questions Canberra organisations ask about web design and SEO`}
          intro="Each one comes from the People Also Ask questions Google shows Australian searchers. The accessibility answers describe what the standard asks, not what the law requires of you, which is a question for your own legal advice."
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within one business day."
        />

        {/* ═══ SOURCES → references ═══ */}
        <section className="section referencesSection references" id="sources">
          <div className="wrap">
            <div className="eyebrow">Sources</div>
            <div className="refs refs-claims">
              {CITATIONS.map((c) => (
                <div className="ref" key={c.id}>
                  <span className="ref-id">[{c.id}]</span>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.source}: {c.title}</a>
                  <p>{c.claim}</p>
                </div>
              ))}
            </div>
            <p className="au-note">
              Search volumes: DataForSEO, Google Australia, September 2026. Competitor link counts and AI Overview presence:
              measured by FactoryJet against Google Australia results in August 2026.
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Find out whether your Canberra site would pass a check</h2>
              <p>
                Send us the address. We will test sample pages against WCAG, crawl the site for technical faults, check your
                Google listing, and measure who holds the Canberra positions you want. You get a short written summary you can
                act on or attach to a tender. No charge, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get a free accessibility review" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/seo">See our SEO services</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
