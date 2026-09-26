import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import { WEBFLOW_FAQ_CATEGORIES, WEBFLOW_FAQS } from './WebflowDevelopmentFaqs';
import './AiAgentDevelopmentSections.css';
import './WebflowDevelopmentSections.css';

/*
 * Webflow Development service page (/services/webflow-development), built
 * 2026-09-26 in the US "Family A" design system (mirrors /services/ai-seo and
 * /services/web-design). US only. No FactoryJet prices: cost questions link to
 * the cost guides. Webflow's own list prices appear once, in the plans table,
 * labelled and sourced to webflow.com/pricing (fetched 2026-09-26).
 *
 * Static server component. The only client code is HeroInlineForm (shared lead
 * capture). The hero migration panel animates with CSS only, same mechanism as
 * /services/ai-agent-development.
 *
 * Arrays exported here (CAPABILITIES, webflowBreadcrumbs) also feed the Service
 * and BreadcrumbList JSON-LD in page.tsx. The FAQ array lives in
 * WebflowDevelopmentFaqs.ts and feeds both the accordion and FAQPage JSON-LD.
 *
 * Visuals: every intended image is a <figure data-visual-slot> placeholder,
 * hidden from visitors by WebflowDevelopmentSections.css until the visual pass.
 *
 * Partner status: no Webflow partner claim exists in the repo or founder data,
 * so this page says nothing about partner status. Do not add one unverified.
 */

export const webflowBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Webflow Development', url: 'https://factoryjet.com/services/webflow-development' },
];

const PRICING = 'https://webflow.com/pricing';
const WF_SEO = 'https://webflow.com/feature/seo';
const WF_REDIRECTS = 'https://webflow.com/webflow-way/seo/site-level-seo';
const WF_HOSTING = 'https://webflow.com/feature/hosting';
const WF_LOCALIZE = 'https://webflow.com/feature/localize';
const WF_DEVLINK = 'https://webflow.com/feature/devlink';
const WF_CSV = 'https://webflow.com/updates/csv-import';
const WF_HUBSPOT = 'https://webflow.com/apps/detail/hubspot';
const W3TECHS = 'https://w3techs.com/technologies/overview/content_management';
const GOOG_AI = 'https://developers.google.com/search/docs/appearance/ai-features';
const COST_GUIDE = '/blog/how-much-does-a-website-cost-small-business-usa-2026';
const REDESIGN_COST_GUIDE = '/blog/website-redesign-cost-us-small-business-2026';

const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const DIAGRAM = { viewBox: '0 0 440 160', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const;
const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const DIAGRAMS: ReactNode[] = [
  <g key="d1"><rect className="diagram-surface" x="30" y="24" width="150" height="112" rx="10" /><path d="M48 46h60M48 62h96M48 78h80" /><rect className="diagram-surface" x="48" y="94" width="50" height="26" rx="5" /><path className="diagram-wire" d="M180 80h70" /><path className="diagram-wire" d="m236 68 14 12-14 12" /><rect className="diagram-core" x="260" y="24" width="150" height="112" rx="10" /><path d="M278 46h60M278 62h96M278 78h80" /><rect className="diagram-surface" x="278" y="94" width="50" height="26" rx="5" /><path d="m352 104 7 7 13-15" /></g>,
  <g key="d2"><rect className="diagram-surface" x="30" y="20" width="110" height="120" rx="10" /><path d="M46 40h78M46 56h60M46 72h70M46 88h50M46 104h66M46 120h40" /><path className="diagram-wire" d="M140 50h60q14 0 14 14v32q0 14 14 14h52M140 80h140M140 110h60" /><path className="diagram-wire" d="m266 68 14 12-14 12" /><rect className="diagram-core" x="290" y="30" width="120" height="100" rx="10" /><path d="M308 54h84M308 72h60M308 90h72" /><circle className="diagram-surface" cx="392" cy="112" r="10" /><path d="m387 112 4 4 7-8" /></g>,
  <g key="d3"><rect className="diagram-core" x="170" y="14" width="100" height="44" rx="10" /><path d="M188 30h64M188 42h40" /><path className="diagram-wire" d="M220 58v20M70 78h300M70 78v20m100-20v20m100-20v20m100-20v20" /><rect className="diagram-surface" x="35" y="98" width="70" height="42" rx="7" /><path d="M48 113h44M48 125h28" /><rect className="diagram-surface" x="135" y="98" width="70" height="42" rx="7" /><path d="M148 113h44M148 125h28" /><rect className="diagram-surface" x="235" y="98" width="70" height="42" rx="7" /><path d="M248 113h44M248 125h28" /><rect className="diagram-surface" x="335" y="98" width="70" height="42" rx="7" /><path d="M348 113h44M348 125h28" /></g>,
  <g key="d4"><rect className="diagram-surface" x="40" y="14" width="200" height="132" rx="10" /><path d="M58 32h90" /><rect className="diagram-core" x="58" y="44" width="164" height="40" rx="6" /><path d="M70 58h120M70 70h86" /><path className="diagram-faint" d="M58 100h164M58 114h164M58 128h110" /><path className="diagram-wire" d="M222 64h80q14 0 14 14v2h24" /><path className="diagram-surface" d="M340 50h66q8 0 8 8v40q0 8-8 8h-40l-16 14v-14h-10q-8 0-8-8V58q0-8 8-8Z" /><path d="M356 70h42M356 84h28" /></g>,
  <g key="d5"><path className="diagram-wire" d="M220 80 100 36m120 44L100 124m120-44 120-44m-120 44 120 44" /><rect className="diagram-surface" x="70" y="18" width="60" height="36" rx="7" /><path d="M84 32h32M84 42h20" /><rect className="diagram-surface" x="70" y="106" width="60" height="36" rx="7" /><path d="M84 120h32M84 130h20" /><rect className="diagram-surface" x="310" y="18" width="60" height="36" rx="7" /><path d="M324 32h32M324 42h20" /><rect className="diagram-surface" x="310" y="106" width="60" height="36" rx="7" /><path d="M324 120h32M324 130h20" /><circle className="diagram-core" cx="220" cy="80" r="30" /><path d="m206 80 9 9 18-20" /></g>,
  <g key="d6"><path className="diagram-faint" d="M40 136h360M40 104h360M40 72h360M40 40h360" /><rect className="diagram-wave" x="70" y="92" width="30" height="44" rx="3" stroke="none" /><rect className="diagram-wave" x="136" y="78" width="30" height="58" rx="3" stroke="none" /><rect className="diagram-wave" x="202" y="70" width="30" height="66" rx="3" stroke="none" /><rect className="diagram-wave" x="268" y="58" width="30" height="78" rx="3" stroke="none" /><rect className="diagram-wave" x="334" y="46" width="30" height="90" rx="3" stroke="none" /><path className="diagram-wire" d="M85 84 151 70l66-8 66-12 66-12" /><circle className="diagram-core" cx="349" cy="38" r="6" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ href?: string; icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M4 5h16v14H4zM4 9h16M8 13h5', title: 'Custom Webflow Builds',
    body: 'Every page type designed in Figma and approved by you, then built in Webflow on a documented class system, so new pages stay on brand and the site does not turn into a pile of one-off styles.',
    tags: ['Figma to Webflow', 'Class system', 'Interactions'] },
  { icon: 'M4 7h11l-3-3M20 17H9l3 3', title: 'Migrations to Webflow',
    body: 'WordPress, Wix, Squarespace or custom sites moved to Webflow with every URL mapped, content imported into CMS Collections, and 301 redirects checked before DNS switches over.',
    tags: ['URL map', 'CSV import', '301 redirects'] },
  { icon: 'M4 5h16v4H4zM4 11h7v8H4zM13 11h7v8h-7z', title: 'Webflow CMS Architecture',
    body: 'Collections for blog posts, case studies, resources, team and locations, linked with reference fields, so your team adds a page by filling in a form and the template does the rest.',
    tags: ['Collections', 'Reference fields', 'Templates'] },
  { href: '/services/ai-seo', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4', title: 'Webflow SEO & AI Search',
    body: 'Titles, canonicals, schema that matches the visible page, crawler rules that name the AI search bots, and answer-first page structure so Google and AI assistants can read and quote you.',
    tags: ['Schema', 'Redirects', 'AEO'] },
  { href: '/services/ai-integration-services', icon: 'M12 3v18M3 12h18', title: 'Integrations & Custom Code',
    body: 'Forms into HubSpot or Salesforce, Zapier and Make workflows, Webflow APIs, React code components through DevLink, and AI chatbots embedded on the site, each tested end to end.',
    tags: ['HubSpot', 'APIs', 'DevLink'] },
  { href: '/services/website-maintenance', icon: 'M4 20V10m6 10V4m6 16v-8m4 8V7', title: 'Support After Launch',
    body: 'The team that built the site stays on: new templates and landing pages, integration fixes, redirect updates, speed checks, search reporting, and training for new editors.',
    tags: ['Monthly support', 'Editor training', 'Reporting'] },
];

/** Each item is [bold lead, rest of the line]. */
const MIGRATION: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Before anything moves', lead: 'Most lost rankings are decided before the build starts, in the URL list nobody made.', items: [
    ['Full crawl of the old site', ', including PDFs, tag pages and old campaign URLs'],
    ['Search Console export', ' of the pages that actually earn clicks'],
    ['Keep, merge or retire', ' decided for every URL, in writing'],
    ['Backlinked pages flagged', ' so they keep an exact new home'],
    ['Content model', ' for each repeating page type, before design'],
  ] },
  { title: 'Content into the Webflow CMS', lead: 'Repeating content becomes Collections, not hand-built pages.', items: [
    ['CMS Collections', ' for posts, case studies, resources and team'],
    ['Reference fields', ' to link authors, categories and related items'],
    ['CSV import', ' for bulk content, straight into a Collection'],
    ['CMS API', ' for large or messy imports, scripted and repeatable'],
    ['Images re-uploaded', ' with alt text carried over, not left blank'],
  ] },
  { title: 'Redirects that hold up', lead: 'Webflow redirects are simple, which means the plan has to be careful.', items: [
    ['One 301 per changed URL', ', always to the final page, never a chain'],
    ['Wildcard rules', ' with a (.*) capture group for whole folders'],
    ['Under about 1,000 rules', ', the maximum Webflow recommends'],
    ['No regex or exclusions', ' in Webflow, so edge cases go to DNS or proxy level'],
    ['Every rule tested', ' against the old URL list before launch'],
  ] },
  { title: 'Launch and the weeks after', lead: 'Launch day is a checklist, then a watch period.', items: [
    ['Staging review', ' on the webflow.io domain, on real phones'],
    ['Titles, metas and canonicals', ' checked page by page'],
    ['DNS switch', ' with SSL confirmed on the live domain'],
    ['Sitemap resubmitted', ' in Google Search Console and Bing'],
    ['404 and crawl reports', ' watched for the first few weeks'],
  ] },
];

const NOT_WEBFLOW: ReadonlyArray<{ need: string; choose: string; href: string; why: string }> = [
  { need: 'You sell a large catalog, need B2B pricing, or rely on a big app ecosystem', choose: 'Shopify or BigCommerce', href: '/services/shopify-development', why: 'Webflow ecommerce plans top out at 15,000 items and suit focused ranges, not large stores.' },
  { need: 'You publish a lot and need memberships, events or many plugins', choose: 'WordPress', href: '/services/wordpress-development', why: 'The largest plugin library of any CMS, low lock-in, and hosting you can move any time.' },
  { need: 'You need logins, dashboards, portals or heavy app logic', choose: 'Custom Next.js', href: '/services/web-application-development', why: 'Your code in your repository, with almost any feature possible and no platform ceiling.' },
  { need: 'You run many brands or channels from one content source', choose: 'Headless build', href: '/headless-commerce', why: 'A headless CMS feeds the website, apps and other channels from one place.' },
  { need: 'You are not sure yet, or want a straight comparison', choose: 'Start with the platform guide', href: '/services/web-design', why: 'Our web design page compares WordPress, Webflow, Framer, Next.js and headless side by side.' },
];

const INTEGRATIONS = [
  { title: 'HubSpot', line: 'Webflow’s official HubSpot app, native forms mapped to CRM fields', href: WF_HUBSPOT, ext: true },
  { title: 'Salesforce, Marketo & CRMs', line: 'Through apps, Zapier or Make, or custom code and the Webflow APIs', href: '/services/ai-integration-services', ext: false },
  { title: 'Localization', line: 'Webflow Localize with subdirectory URLs and hreflang in the sitemap', href: WF_LOCALIZE, ext: true },
  { title: 'Code components & DevLink', line: 'React components shared between your codebase and Webflow', href: WF_DEVLINK, ext: true },
  { title: 'AI chatbots & agents', line: 'Built for you, trained on your content, embedded on the site', href: '/services/ai-chatbot-development', ext: false },
  { title: 'Workflow automation', line: 'Form and CMS events that trigger follow-ups in your other tools', href: '/services/ai-workflow-automation', ext: false },
];

function WebflowFaqAccordion() {
  return (
    <div className="faqlist">
      {WEBFLOW_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {WEBFLOW_FAQS.filter((faq) => faq.category === category.key).map((faq) => (
            <details className="faqitem" data-faq-item key={faq.id}>
              <summary data-faq-question>
                <span className="qid">{faq.id}</span>
                <span className="qtext">{faq.question}</span>
                <span className="chev" aria-hidden="true">+</span>
              </summary>
              <p className="ans" data-faq-answer>
                {faq.answer}
                {faq.source && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.source.url} target="_blank" rel="noopener nofollow">{faq.source.label} ↗</a>
                  </>
                )}
                {faq.link && (
                  <>
                    {' '}
                    <a className="faqsrc" href={faq.link.url}>{faq.link.label} ↗</a>
                  </>
                )}
              </p>
            </details>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default function WebflowDevelopmentSections() {
  return (
    <div className="aiAgentPage webflowDev">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {webflowBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === webflowBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="webflow-development-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Webflow Development Agency · US</div>
              <h1>Webflow Development Agency for Sites <span className="hero-emphasis">Your Team Can Run</span></h1>
              <p className="lead" data-speakable>FactoryJet designs, builds and migrates Webflow sites for US B2B and service businesses. You get a clean class system, a CMS your marketers can publish from, redirects that protect your rankings, and forms wired into your CRM. The site and Workspace are in your name, and the team that built it stays on to support it.</p>
              <HeroInlineForm source="us_webflow_development_hero" region="us" submitLabel="Scope my Webflow site" />
              <p className="hero-alt">Not sure Webflow is the right platform? Compare options on our <a href="/services/web-design">web design services</a> page.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of a website migration to Webflow">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>MIGRATION PATH · OLD SITE TO WEBFLOW</span>
                <span className="sys"><span>WORDPRESS</span><span>WEBFLOW</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the migration steps">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="wf-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h16M4 10h16M4 15h10M4 20h7" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Crawl and list every old URL</span>
                  <span className="tag">MAP</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="wf-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h16v4H4zM4 11h7v8H4zM13 11h7v8h-7z" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Model content as CMS Collections</span>
                  <span className="tag">MODEL</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="wf-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><rect x="3" y="4" width="13" height="16" rx="2" /><rect x="16" y="9" width="5" height="11" rx="1.5" /><path d="M6 8h7M6 12h4" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Build in Webflow, test on a real phone</span>
                  <span className="tag">BUILD</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="wf-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Every 301 tested before DNS switches</span>
                  <span className="tag">HOLD</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · no DNS switch until every old URL resolves to its new page in one hop.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Build timelines</div><div className="v"><strong className="ledger-number">3–5 wks</strong>for a custom marketing site. 5–8 weeks with a migration, 8–14 for enterprise builds.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">The Webflow Workspace, site plan, domain, analytics and Search Console. All in your name, with your billing.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong>businesses served across web, commerce and AI work, with 97% on-time delivery.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What a Webflow Development Agency Does, in Plain Terms</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p data-speakable><span className="stat">A Webflow development agency designs, builds, migrates and supports websites on Webflow, a visual website platform with its own CMS and managed hosting.</span> The agency sets up the class system, CMS Collections, SEO settings, redirects, integrations and custom code, so your marketing team can publish pages visually without breaking the design.</p></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">Webflow runs 0.8% of all websites, while WordPress runs 40.2%.</span> Webflow is a smaller, more focused platform, popular with design-led B2B and SaaS marketing teams. Popular does not mean right for you, so this page also covers when Webflow is the wrong choice. <a href={W3TECHS} target="_blank" rel="noopener nofollow">W3Techs, September 2026 ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">Webflow’s Premium Site plan includes the CMS, with up to 20,000 CMS items across 40 Collections.</span> The cheaper Basic plan has no CMS and allows 300 static pages. Most business sites with a blog or case studies need Premium. <a href={PRICING} target="_blank" rel="noopener nofollow">Webflow pricing, fetched 26 Sep 2026 ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">Webflow hosting is managed for you: SSL on every site plan, automatic backups, and SOC 2 Type II compliance.</span> Webflow says its network reaches 95% of the world in under 50 milliseconds. There are no plugins or server updates for anyone to run. <a href={WF_HOSTING} target="_blank" rel="noopener nofollow">Webflow hosting ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p>FactoryJet builds on Webflow, WordPress, Next.js and the main ecommerce platforms. That matters when you hire a Webflow agency: a Webflow-only shop will almost always recommend Webflow. We recommend it when your team wants visual control of a marketing site, and we say so when a different platform fits better.</p></div>
              </div>
              <figure className="factphoto wf-slot" data-visual-slot="webflow-development:facts" data-visual-kind="photo" data-visual-subject="Two marketers at a desk in a bright US office, one editing a website page on a large monitor that faces them, the other reviewing on a laptop beside her; the screens show a generic page layout with blocks and no readable text or logos" data-visual-ratio="3:2" data-visual-status="placeholder">
                <figcaption className="cap">FIELD REFERENCE · A MARKETING TEAM PUBLISHING ITS OWN PAGES</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Webflow Development Services We Deliver</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => {
                const inner = (
                  <>
                    <div className="caphead"><span className="capid">CAP-{String(i + 1).padStart(2, '0')}</span><svg {...CAP_ICON}><path d={cap.icon} /></svg></div>
                    <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>{DIAGRAMS[i]}</svg></div>
                    <h3>{cap.title}</h3>
                    <p>{cap.body}</p>
                    <div className="systags">{cap.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    {cap.href && <span className="cap-more">Open the page ↗</span>}
                  </>
                );
                return cap.href
                  ? <a key={cap.title} className={`cap cap-${i + 1}`} href={cap.href}>{inner}</a>
                  : <div key={cap.title} className={`cap cap-${i + 1}`}>{inner}</div>;
              })}
            </div>
          </div>
        </section>

        <section className="definition" id="definition">
          <figure className="definition-image wf-slot" data-visual-slot="webflow-development:definition" data-visual-kind="diagram" data-visual-subject="One page template on the left feeding many finished pages on the right, each filled from a row of a content table, showing how a CMS Collection template generates pages; white cards, one orange accent card, no readable text" data-visual-ratio="3:2" data-visual-status="placeholder" />
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">CMS Collection</h2>
            <p>A CMS Collection is Webflow’s name for a set of content items that share one design template, like blog posts, case studies, job openings or office locations. You design the template once. Each new item is a short form your team fills in, and Webflow builds the page. Collections can reference each other, so a case study can link to its industry and its author automatically.</p>
            <p>Getting Collections right is most of the difference between a Webflow site your team can grow and one that needs a developer for every new page. We model them before design starts, not after.</p>
          </div>
        </section>

        <section className="section changes" id="migration">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Migration</div>
              <h2>Migrating to Webflow Without Losing Your Rankings</h2>
              <p>Moving from WordPress, Wix, Squarespace or a custom site to Webflow is safe when the URL plan comes first. Here are the 20 checks we run on every migration. If a Webflow agency cannot show you a list like this, ask how they plan to keep your traffic.</p>
            </div>
            {MIGRATION.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">GRP-{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} checks</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="chg-note">Redirect limits come from Webflow’s own guidance: no hard cap, 1,000 rules recommended as a maximum, and wildcard rules with no regex or exclusions (<a href={WF_REDIRECTS} target="_blank" rel="noopener nofollow">Webflow, site-level SEO ↗</a>). Bulk content goes in through <a href={WF_CSV} target="_blank" rel="noopener nofollow">CSV import ↗</a> or the CMS API. Planning a redesign at the same time? See <a href="/services/website-redesign">website redesign services</a>.</p>
          </div>
        </section>

        <section className="midcta" id="scope">
          <div className="wrap">
            <div>
              <div className="eyebrow">Next step</div>
              <h2>Moving an Existing Site to Webflow?</h2>
              <p>Send us the current URL. We will crawl it, tell you how many pages and redirects the move involves, and flag anything Webflow cannot do before you commit. You get a fixed proposal before any work starts.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Scope my Webflow site</a>
              <a className="btn btn-ghost" href="/contact">Talk to Bhavesh and the team</a>
            </div>
          </div>
        </section>

        <section className="section wfseo" id="webflow-seo">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Webflow SEO</div><h2>What Webflow Handles for SEO, and What We Add</h2></div>
              <p>Webflow gives you the SEO controls without plugins. It does not decide your structure, your content or your redirect plan. Here is the split, based on <a href={WF_SEO} target="_blank" rel="noopener nofollow">Webflow’s SEO feature list ↗</a> and its <a href={PRICING} target="_blank" rel="noopener nofollow">plan comparison ↗</a>.</p>
            </div>
            <div className="wfseo-grid">
              <div className="wfseo-col">
                <span className="capid">BUILT INTO WEBFLOW</span>
                <ul className="chg-list">
                  <li><span><b>Title tags and meta descriptions</b> for every page, filled from CMS fields</span></li>
                  <li><span><b>Canonical tags</b> at site or page level</span></li>
                  <li><span><b>XML sitemap</b> generated automatically</span></li>
                  <li><span><b>Robots.txt, llms.txt</b> and crawler access controls</span></li>
                  <li><span><b>301 redirects</b> with wildcard support</span></li>
                  <li><span><b>Schema markup</b> fields you can add and edit</span></li>
                  <li><span><b>Alt text</b> and Open Graph settings</span></li>
                  <li><span><b>Responsive images</b>, with WebP and AVIF conversion</span></li>
                </ul>
              </div>
              <div className="wfseo-col wfseo-us">
                <span className="capid">WHAT FACTORYJET ADDS</span>
                <ul className="chg-list">
                  <li><span><b>One H1 per page</b> and a strict heading order in every template</span></li>
                  <li><span><b>Schema that matches the page</b>, including an FAQPage built from the visible FAQ</span></li>
                  <li><span><b>AI crawler rules</b> that name the search bots instead of a wildcard</span></li>
                  <li><span><b>Answer-first sections</b>: a question heading with a short direct answer</span></li>
                  <li><span><b>A redirect map</b> tested against every old URL</span></li>
                  <li><span><b>Internal links</b> between Collections, planned, not left to chance</span></li>
                  <li><span><b>Core Web Vitals</b> checked on a real phone, including third-party scripts</span></li>
                  <li><span><b>Monthly reporting</b> on rankings and AI citations, if you keep us on</span></li>
                </ul>
              </div>
            </div>
            <p className="chg-note">Google says no special markup is needed to appear in its AI features. The same crawlable, well-structured pages that rank also get quoted (<a href={GOOG_AI} target="_blank" rel="noopener nofollow">Google Search Central ↗</a>). For deeper work, see our <a href="/services/technical-seo">technical SEO services</a> and <a href="/services/ai-seo">AI SEO services</a>.</p>
          </div>
        </section>

        <section className="section comparison" id="not-webflow">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Honest Fit</div>
              <h2>When Webflow Is Not the Right Choice</h2>
              <p>Webflow is excellent for design-led marketing sites. It is the wrong tool for some jobs, and a good Webflow developer should tell you so before you sign.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>If you need this</th><th>Choose</th><th>Why</th></tr></thead>
                <tbody>
                  <tr className="us"><th>A marketing site your team edits visually, with a blog and case studies, and no plugin upkeep</th><td><b>Webflow</b><br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></td><td>Visual editing, a structured CMS and managed hosting, built on a class system that keeps it consistent.</td></tr>
                  {NOT_WEBFLOW.map((row) => (
                    <tr key={row.choose}><th>{row.need}</th><td><b><a className="wf-tlink" href={row.href}>{row.choose}</a></b></td><td>{row.why}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">Ecommerce limits from <a href={PRICING} target="_blank" rel="noopener nofollow">Webflow pricing</a>: 500, 5,000 or 15,000 ecommerce items by plan. The other trade-offs are our view from building on each platform.</p>
          </div>
        </section>

        <section className="section wfplans" id="plans">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Webflow Plans</div>
              <h2>Which Webflow Plan Your Site Needs</h2>
              <p>These are Webflow’s own published prices and limits, not FactoryJet fees. Your Webflow plan is billed to you by Webflow, separately from the build. We fetched them from <a href={PRICING} target="_blank" rel="noopener nofollow">webflow.com/pricing</a> on 26 September 2026. Webflow changes its plans, so we confirm the current version before you buy.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Webflow plan</th><th>Webflow list price (USD)</th><th>Key limits</th><th>When we recommend it</th></tr></thead>
                <tbody>
                  <tr><th>Starter</th><td>Free</td><td>webflow.io domain, 2 static pages, limited CMS</td><td>Staging and prototypes only</td></tr>
                  <tr><th>Basic</th><td>$15 a month, billed yearly</td><td>Custom domain, 300 static pages, no CMS, 10 GB bandwidth</td><td>A simple brochure site with no blog</td></tr>
                  <tr className="us"><th>Premium</th><td>From $25 a month, billed yearly</td><td>Webflow CMS, 20,000 items, 40 Collections, bandwidth tiers from 50 GB</td><td>Most B2B marketing sites with a blog, case studies or resources</td></tr>
                  <tr><th>Team</th><td>$2,500 a month, annual contract</td><td>Localize with 2 locales, publishing workflows, activity log and API, 100 Collections</td><td>Larger marketing teams that need governance and localization</td></tr>
                  <tr><th>Enterprise</th><td>Custom</td><td>Custom scale, granular permissions, custom roles, enhanced SLAs</td><td>Enterprise sites with security review and many editors</td></tr>
                  <tr><th>Ecommerce plans</th><td>$29, $74 or $212 a month, billed yearly</td><td>500, 5,000 or 15,000 items; 2% transaction fee on Standard</td><td>A focused product range on a design-led brand site</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">What the build itself costs depends on scope. For typical US ranges, see our <a href={COST_GUIDE}>website cost guide</a> and <a href={REDESIGN_COST_GUIDE}>redesign cost guide</a>.</p>
          </div>
        </section>

        <section className="section integrations" id="integrations">
          <div className="wrap">
            <div className="agentdir-group">
              <div className="agentdir-label">
                <div className="eyebrow">Integrations</div>
                <h2 className="wf-h2-sm">Webflow Integrations and Custom Code</h2>
                <p>A marketing site is only as useful as where its leads go. We connect Webflow to the tools you already run, and write custom code where no app exists.</p>
                <span className="mono agentdir-count">{INTEGRATIONS.length} common setups</span>
              </div>
              <ul className="agentdir-grid">
                {INTEGRATIONS.map((item) => (
                  <li key={item.title}>
                    <a href={item.href} {...(item.ext ? { target: '_blank', rel: 'noopener nofollow' } : {})}>
                      <span className="agentdir-t">{item.title}</span>
                      <span className="agentdir-l">{item.line}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="chg-note">Need an app, not just a site? Webflow Cloud can host Next.js or Astro apps alongside your Webflow site on the same domain (<a href={WF_HOSTING} target="_blank" rel="noopener nofollow">Webflow hosting ↗</a>). When an app needs more than that, we build it as a <a href="/services/web-application-development">custom web application</a>.</p>
          </div>
        </section>

        <figure className="photobreak wf-slot" data-visual-slot="webflow-development:photobreak" data-visual-kind="illustration" data-visual-subject="An older website page on the left connected through a checkpoint with an orange marker to a clean new website page and a matching phone layout on the right, suggesting every old URL redirected to its new page; white and cream tones, one orange accent, no readable text or logos" data-visual-ratio="16:5" data-visual-status="placeholder" />

        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How We Build Your Webflow Site</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Scope</h3><p>Pages, Collections, integrations and the URL list, agreed in writing with a fixed proposal.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Design</h3><p>Every page type in Figma, desktop and mobile. You approve before anything is built.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Build</h3><p>Webflow build on a class system, CMS set up, forms wired, staging link to test on your phone.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Launch</h3><p>Redirects, schema, sitemap and speed checked, then the DNS switch and Search Console resubmit.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Support</h3><p>Editor training, then support from the same team, monthly or when you need it.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Scope my Webflow site</a>
              <a className="btn btn-ghost" href="/portfolio">See our portfolio</a>
            </div>
          </div>
        </section>

        <section className="section wfcompare" id="choose-agency">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Webflow Freelancer, Webflow Studio or FactoryJet</h2>
              <p>Three common ways to hire Webflow help, and the trade-offs of each.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Option</th><th>What you get</th><th>Best for</th><th>Trade-off</th></tr></thead>
                <tbody>
                  <tr><th>Webflow freelancer<br /><span className="mono tableSubLabel">marketplaces, referrals</span></th><td>One developer building from your design or a template</td><td>A small site with a clear design and a tight budget</td><td>One person is a single point of failure, and SEO depth depends on who you find</td></tr>
                  <tr><th>Webflow-only studio<br /><span className="mono tableSubLabel">specialist agency</span></th><td>Deep Webflow skill, often strong design</td><td>Teams already sure Webflow is the answer</td><td>Every recommendation is Webflow, even when another platform fits better</td></tr>
                  <tr className="us"><th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">this page</span></th><td>Webflow builds and migrations, with SEO, AI search, integrations and AI agents from one team</td><td>B2B and service businesses that rely on the site for leads</td><td>No instant price on the page. You get a fixed proposal after a scoping call</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="vlog" id="checks">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Before You Hire</div>
              <h2>Four Questions to Ask Any Webflow Agency</h2>
              <p>Our own answers are next to each one.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">OWNERSHIP</span><h3>Whose Workspace is the site in?</h3><p>It should be yours, with your billing. We build inside your Workspace as collaborators, so there is nothing to transfer if you ever leave.</p></div>
              <div className="ventry"><span className="vtag">REDIRECTS</span><h3>Where is the redirect map?</h3><p>If you have an existing site, ask to see it before launch. Ours lists every old URL, its new home, and the test result.</p></div>
              <div className="ventry"><span className="vtag">HANDOFF</span><h3>Can my team add a page alone?</h3><p>Ask for a demo on staging. We train your editors and leave a short guide to the class system and Collections.</p></div>
              <div className="ventry"><span className="vtag">PENDING</span><h3>Show me your Webflow work</h3><p>Written Webflow case studies are still in progress. We would rather publish none than one we cannot back up. Ask for live references on a call.</p></div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Webflow Development Questions, Answered Directly</h2>
                <p>{WEBFLOW_FAQS.length} questions US buyers ask Google and AI assistants about Webflow, most in the exact wording of Google’s People Also Ask boxes.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {WEBFLOW_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <WebflowFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">References</div>
            <div className="refs">
              <a href="/services/web-design">Web design services</a>
              <a href="/services/website-redesign">Website redesign services</a>
              <a href="/services/wordpress-development">WordPress development</a>
              <a href="/services/website-maintenance">Website maintenance services</a>
              <a href="/blog/what-is-webflow">What is Webflow?</a>
              <a href="/blog/webflow-vs-wordpress-us-small-business-2026">Webflow vs WordPress</a>
              <a href={COST_GUIDE}>How much does a website cost?</a>
              <a href="/ai-visibility-checker">Free AI visibility check</a>
              <a href={PRICING} target="_blank" rel="noopener nofollow">Webflow: Plans and pricing</a>
              <a href={WF_REDIRECTS} target="_blank" rel="noopener nofollow">Webflow: Site-level SEO and redirects</a>
              <a href={WF_HOSTING} target="_blank" rel="noopener nofollow">Webflow: Hosting</a>
              <a href={W3TECHS} target="_blank" rel="noopener nofollow">W3Techs: CMS usage statistics</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Tell Us What Your Webflow Site Has to Do</h2>
              <p>New build, migration or a Webflow site that has stopped keeping up: send us the details. We will tell you what we would build, how long it takes, and whether Webflow is the right call. You get a fixed proposal before any work starts, and a team that stays after launch.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Scope my Webflow site</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
