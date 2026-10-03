import { Fragment, type ReactNode } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import WebsiteMaintenanceStagingVisual from './WebsiteMaintenanceStagingVisual';
import { WM_FAQ_CATEGORIES, WM_FAQS } from './WebsiteMaintenanceFaqs';
import './AiAgentDevelopmentSections.css';
import './WebsiteMaintenanceSections.css';

/*
 * Website Maintenance hub (/services/website-maintenance), built 2026-09-26 on the
 * current US design system (mirrors /services/ai-seo and /services/web-design).
 * Brief: pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md.
 * Research: pipeline/research/US-OPPORTUNITIES-2026-09-26.md (page #3) and the PAA pass
 * in pipeline/research/data/us-opps-2026-09-26/website_maintenance_paa.json.
 *
 * Static server component. The only client code is HeroInlineForm. The hero update-path
 * panel animates with CSS only (same mechanism as the reference pages).
 *
 * No FactoryJet prices, hours or response times anywhere: support plan numbers are
 * unconfirmed (see /services/shopify-maintenance-services SUPPORT_PLANS). Plans are
 * described by scope only. Cost is covered with sourced third-party ranges.
 *
 * Arrays exported here (CAPABILITIES, PROVIDERS, wmBreadcrumbs) also feed the Service,
 * ItemList and BreadcrumbList JSON-LD in page.tsx. FAQ lives in WebsiteMaintenanceFaqs.ts.
 *
 * Visual pass 2026-10-02: original illustrative editorial photography and a
 * native SVG staging/backup diagram. People depicted are illustrative, not staff.
 */

export const wmBreadcrumbs = [
  { name: 'Home', url: 'https://factoryjet.com/' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Website Maintenance', url: 'https://factoryjet.com/services/website-maintenance' },
];

/* ─── External sources, all fetch-verified 2026-09-26 (HTTP 200) ───────────────────
   PATCHSTACK: "7,966 new security vulnerabilities were found in the WordPress ecosystem in
     2024"; "96% of the vulnerabilities were uncovered in plugins, and 4% were found in
     themes"; "33% of vulnerabilities were not fixed in time for public disclosure".
   WP_REQ: recommends "PHP version 8.3 or greater"; older versions "have reached their
     official End Of Life and may expose your site to security vulnerabilities".
   PHP: supported-versions table, 8.2 security support until 31 Dec 2026.
   ADA_WEB: ADA applies to "businesses that are open to the public (Title III)";
     businesses "have flexibility in how they comply" (DOJ guidance, March 18, 2022).
   ADA_RULE: Title II rule sets WCAG 2.1 Level AA for state and local governments;
     April 2026 interim final rule moved compliance to April 26, 2027 (50,000+ people)
     and April 26, 2028 (smaller entities and special districts).
   WEBAIM: 95.9% of home pages had detected WCAG 2 failures; six error types = 96%.
   SHOPIFY_API: "Shopify releases a new API version every three months"; each stable
     version "supported for a minimum of 12 months".
   VITALS: LCP within 2.5 seconds, INP of 200 milliseconds or less, CLS of 0.1 or less.
   FTC: "All states, the District of Columbia, Puerto Rico, and the Virgin Islands have
     enacted legislation requiring notification of security breaches".
   GODADDY / NETSOL / WIX / OUTERBOX: cost ranges quoted in the cost table below.
─────────────────────────────────────────────────────────────────────────────────── */
const PATCHSTACK = 'https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/';
const WP_REQ = 'https://wordpress.org/about/requirements/';
const PHP = 'https://www.php.net/supported-versions.php';
const ADA_WEB = 'https://www.ada.gov/resources/web-guidance/';
const ADA_RULE = 'https://www.ada.gov/resources/2024-03-08-web-rule/';
const WEBAIM = 'https://webaim.org/projects/million/';
const SHOPIFY_API = 'https://shopify.dev/docs/api/usage/versioning';
const VITALS = 'https://web.dev/articles/vitals';
const FTC = 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business';
const GODADDY = 'https://www.godaddy.com/resources/skills/website-maintenance-cost';
const NETSOL = 'https://www.networksolutions.com/blog/website-maintenance-cost/';
const WIX = 'https://www.wix.com/blog/website-maintenance-cost';
const OUTERBOX = 'https://www.outerboxdesign.com/digital-marketing-services/web-development/maintenance/';

const COST_GUIDE = '/blog/website-running-cost-per-month-2026';
const SEO_DECAY_POST = '/blog/importance-of-website-maintenance-seo';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;
const DIAGRAM = { viewBox: '0 0 440 160', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const;

/** Completed visuals retain the original slot metadata for later maintenance. */
function VisualSlot({ slot, kind, subject, ratio, className }: { slot: string; kind: 'photo' | 'diagram' | 'illustration' | 'mockup' | 'map'; subject: string; ratio: string; className?: string }) {
  const isPanorama = slot === 'photobreak';
  const asset = isPanorama ? 'staging-review' : 'operations-review';
  const base = `/images/us/visual-pass-2026-10-02/website-maintenance/${asset}`;
  return (
    <figure
      className={className ? `wm-slot ${className}` : 'wm-slot'}
      data-visual-slot={`website-maintenance:${slot}`}
      data-visual-kind={kind}
      data-visual-subject={subject}
      data-visual-ratio={ratio}
      data-visual-status="ready"
      data-visual-origin={kind === 'photo' ? 'generated-illustration' : 'native-diagram'}
    >
      {kind === 'diagram' ? <WebsiteMaintenanceStagingVisual /> : (
        <img src={`${base}.webp`} srcSet={`${base}-768.webp 768w, ${base}.webp ${isPanorama ? 1600 : 1440}w`} sizes={isPanorama ? '(max-width: 820px) calc(100vw - 40px), (max-width: 1264px) calc(100vw - 64px), 1200px' : '(max-width: 820px) calc(100vw - 40px), 430px'} width={isPanorama ? 1600 : 1440} height={isPanorama ? 600 : 960} loading="lazy" decoding="async" alt={isPanorama ? 'Illustrative developers reviewing staging and live website layouts together' : 'Illustrative operations manager checking website updates on a laptop'} />
      )}
    </figure>
  );
}

/* Capability drawings: update path, backup vault, shield, speed gauge, accessibility, page edit. */
const DIAGRAMS: ReactNode[] = [
  <g key="d1"><rect className="diagram-surface" x="30" y="40" width="110" height="80" rx="10" /><path d="M48 62h60M48 78h44M48 94h52" /><path className="diagram-wire" d="M140 80h60" /><rect className="diagram-core" x="200" y="40" width="110" height="80" rx="10" /><path d="M222 80l14 14 28-30" /><path className="diagram-wire" d="M310 80h40" /><rect className="diagram-surface" x="350" y="40" width="70" height="80" rx="10" /><path d="M366 62h38M366 78h26" /></g>,
  <g key="d2"><rect className="diagram-surface" x="40" y="28" width="150" height="104" rx="10" /><path d="M60 52h110M60 72h110M60 92h70" /><path className="diagram-wire" d="M190 80h70" /><rect className="diagram-core" x="260" y="36" width="140" height="88" rx="12" /><circle cx="330" cy="80" r="22" /><path d="M330 66v14l10 8" /><path className="diagram-faint" d="M40 144h360" /></g>,
  <g key="d3"><path className="diagram-core" d="M220 18 150 44v38c0 36 70 62 70 62s70-26 70-62V44l-70-26Z" /><path d="m192 80 20 20 38-42" /><path className="diagram-wire" d="M60 80h80M300 80h80" /><circle className="diagram-surface" cx="50" cy="80" r="12" /><circle className="diagram-surface" cx="390" cy="80" r="12" /></g>,
  <g key="d4"><path className="diagram-faint" d="M70 130a150 150 0 0 1 300 0" /><path className="diagram-wire" d="M90 130a130 130 0 0 1 180-120" /><circle className="diagram-core" cx="220" cy="130" r="12" /><path d="m220 130 70-62" /><path className="diagram-faint" d="M40 144h360" /><rect className="diagram-surface" x="330" y="20" width="80" height="40" rx="7" /><path d="M344 34h52M344 46h30" /></g>,
  <g key="d5"><circle className="diagram-core" cx="120" cy="80" r="46" /><circle cx="120" cy="58" r="7" /><path d="M96 74h48M120 74v26m0 0-14 22m14-22 14 22" /><path className="diagram-wire" d="M166 80h60" /><rect className="diagram-surface" x="226" y="30" width="180" height="100" rx="10" /><path d="M246 54h120M246 74h90M246 94h110" /><rect className="diagram-core" x="246" y="104" width="54" height="16" rx="4" /></g>,
  <g key="d6"><rect className="diagram-surface" x="40" y="20" width="220" height="120" rx="10" /><path d="M60 42h120" /><rect className="diagram-core" x="60" y="56" width="180" height="34" rx="6" /><path className="diagram-faint" d="M60 104h180M60 120h120" /><path className="diagram-wire" d="M260 73h60" /><path className="diagram-surface" d="M330 40h60l20 20v60h-80Z" /><path d="M346 76h44M346 92h30" /></g>,
];

export const CAPABILITIES: ReadonlyArray<{ icon: string; title: string; body: string; tags: string[] }> = [
  { icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01', title: 'Tested Updates',
    body: 'WordPress core, theme and plugin updates, PHP upgrades, Shopify app changes and code dependencies, applied to a private staging copy first and tested before anything reaches your live site.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Shopify apps', 'Next.js'] },
  { icon: 'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', title: 'Backups You Can Restore',
    body: 'Files and database backed up on a schedule, stored off the server and restore-tested. An untested backup is a hope, not a plan.',
    tags: ['Off-site', 'Restore tests', 'Pre-update snapshots'] },
  { icon: 'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z', title: 'Security Monitoring & Cleanup',
    body: 'Malware scans, login and user reviews, plugin vulnerability checks, SSL renewals and a firewall. If a site is hacked, we clean it, close the way in, and ask Google to review it.',
    tags: ['Malware scans', 'User audits', 'Hack recovery'] },
  { icon: 'M12 20a8 8 0 1 1 8-8M12 12l5-4', title: 'Uptime, Speed & Core Web Vitals',
    body: 'Downtime alerts, error monitoring and monthly speed checks against Google’s Core Web Vitals, so a heavy plugin or image does not quietly slow the pages that bring in leads.',
    tags: ['Uptime alerts', 'LCP', 'INP', 'CLS'] },
  { icon: 'M12 5a1.5 1.5 0 1 0 0-.01M5 9h14M12 9v5m0 0-3 6m3-6 3 6', title: 'ADA & WCAG Checks',
    body: 'The accessibility errors that show up most often, like low contrast, missing alt text and unlabeled form fields, found and fixed as part of routine care, not saved for a yearly audit.',
    tags: ['WCAG 2.2 AA', 'Contrast', 'Alt text', 'Form labels'] },
  { icon: 'M4 20h4l10-10-4-4L4 16v4ZM14 6l4 4', title: 'Changes & Small Builds',
    body: 'New pages, product updates, landing pages, form changes and small features, done by developers who know your site. Larger work is quoted first.',
    tags: ['Content edits', 'Landing pages', 'Integrations'] },
];

/** Monthly checklist. Each item is [bold lead, rest of the line]. */
const CHECKLIST: ReadonlyArray<{ title: string; lead: string; items: ReadonlyArray<readonly [string, string]> }> = [
  { title: 'Updates and code', lead: 'Most breakages start here, so nothing is updated straight on the live site.', items: [
    ['Full backup first', ', stored off the server'],
    ['Core, theme and plugin updates', ' applied to staging and tested'],
    ['PHP version', ' checked against WordPress.org recommendations'],
    ['Unused plugins and themes', ' deleted, not just deactivated'],
    ['Abandoned plugins', ' flagged and replaced'],
    ['Shopify apps and API versions', ' reviewed on a schedule'],
    ['Change log', ' written for every release'],
  ] },
  { title: 'Security and access', lead: 'Most hacks use an old plugin or an old login. Both are cheap to close.', items: [
    ['Malware scan', ' and file change review'],
    ['Admin users', ' reviewed, old accounts removed'],
    ['Two-factor login', ' on every admin account'],
    ['SSL certificate', ' and domain renewal dates checked'],
    ['Firewall and login limits', ' confirmed working'],
    ['Accounts', ' held in your company name, not ours'],
    ['Restore test', ' from a real backup each quarter'],
  ] },
  { title: 'Speed, search and AI crawlers', lead: 'An update can undo SEO work without anyone noticing for a month.', items: [
    ['Core Web Vitals', ' checked on key templates'],
    ['Search Console errors', ' and new 404s fixed'],
    ['Redirects', ' kept to a single hop'],
    ['Sitemap and robots.txt', ' still correct after updates'],
    ['AI retrieval crawlers', ' allowed by name, not by accident'],
    ['Schema', ' still matching what the page shows'],
    ['Images', ' compressed as they are uploaded'],
  ] },
  { title: 'Forms, checkout and accessibility', lead: 'The pages that earn money get tested every month, not only when someone complains.', items: [
    ['Every lead form', ' submitted and the email confirmed'],
    ['Cart, checkout and payment', ' tested end to end'],
    ['Booking and CRM integrations', ' checked for sync errors'],
    ['Contrast, alt text and labels', ' checked on new content'],
    ['Keyboard navigation', ' checked on menus and forms'],
    ['Mobile layout', ' checked on a real phone'],
    ['Monthly report', ' in plain English, with decisions flagged'],
  ] },
];

const PLATFORMS: ReadonlyArray<{ href?: string; name: string; flag?: string; fit: string; body: string }> = [
  { name: 'WordPress & WooCommerce', fit: 'Service businesses, B2B sites and WooCommerce stores', body: 'Where maintenance matters most. Staging tests, PHP upgrades, plugin audits and checkout testing on every update.' },
  { href: '/services/shopify-maintenance-services', name: 'Shopify & Shopify Plus', flag: 'OWN PAGE · STORE RETAINERS', fit: 'Online stores on Shopify', body: 'Shopify patches the platform, so the work is your theme, apps, integrations and speed. Store retainers are covered on their own page.' },
  { href: '/services/webflow-development', name: 'Webflow', fit: 'Marketing sites built in Webflow', body: 'CMS clean-up, form and integration checks, speed, accessibility and changes your team does not have time for.' },
  { href: '/services/web-application-development', name: 'Custom sites & web apps', fit: 'Next.js, headless and custom-coded builds', body: 'Dependency and framework updates, build and hosting checks, error monitoring, and developers who can read the code.' },
  { href: '/services/magento-development', name: 'Magento & BigCommerce', fit: 'Larger catalogs and B2B stores', body: 'Security patches, extension updates, indexing and checkout testing for stores where an hour of downtime is expensive.' },
  { href: '/services/ai-agent-monitoring', name: 'AI agents & chatbots', fit: 'AI assistants on your site or in your tools', body: 'Model and prompt changes, answer quality checks and integration monitoring for the AI agents running on your site.' },
];

const PLANS: ReadonlyArray<{ name: string; fit: string; includes: string; next: string }> = [
  { name: 'Security and updates', fit: 'Brochure and service sites that rarely change', includes: 'Tested updates, off-site backups with restore tests, uptime and security monitoring, renewal checks, monthly report', next: 'You start changing pages every month' },
  { name: 'Updates plus changes', fit: 'Sites that bring in leads or bookings every week', includes: 'Everything above, plus content and page changes, form and integration checks, speed and technical SEO checks, priority fixes', next: 'The site starts taking payments or needs new features' },
  { name: 'Ongoing improvement', fit: 'Online stores and sites that must keep growing', includes: 'Everything above, plus checkout and payment testing, small new features and landing pages, a quarterly review of speed, search and conversions', next: 'A project is big enough to scope on its own' },
  { name: 'One-off fix or takeover audit', fit: 'A broken or hacked site, or a site you just inherited', includes: 'A fixed-scope repair, cleanup or audit, with a written report, before any monthly plan is discussed', next: 'You decide which monthly plan, if any, fits' },
];

const TAKEOVER: ReadonlyArray<string> = [
  'Every login collected and moved to named accounts, with unknown users removed',
  'Domain, DNS, hosting, email and store owner accounts confirmed in your company name',
  'A full off-site backup taken before anything changes',
  'Every plugin, theme and app listed with its update status and whether it is still maintained',
  'PHP and server versions checked against current recommendations',
  'Malware scan, plus a review of admin users and recent file changes',
  'Forms, bookings, checkout and integrations tested end to end',
  'Speed, accessibility and technical SEO baseline recorded',
  'Custom code and anything unusual documented in plain English',
  'A written report: what is urgent, what can wait, and what we recommend',
];

/** US providers with a maintenance page on Google page one, fetched 2026-09-26. Location from each company's own site. */
export const PROVIDERS: ReadonlyArray<{ name: string; domain: string; url: string; base: string; model: string; note: string }> = [
  { name: 'OuterBox', domain: 'outerboxdesign.com', url: OUTERBOX, base: 'Akron, Ohio (also Houston and Tuscaloosa)', model: 'Retainer, a la carte or a hybrid of both, across WordPress, Shopify, Magento, BigCommerce, WooCommerce and nopCommerce.', note: 'Publishes typical budgets of $100 to $2,500 a month and a $200 hourly rate. Top organic result for website maintenance company on 26 Sep 2026.' },
  { name: 'SPINX Digital', domain: 'spinxdigital.com', url: 'https://www.spinxdigital.com/support-maintenance/', base: 'Los Angeles, California', model: 'CMS and plugin updates tested on staging, security monitoring, backups and disaster recovery, hosting and accessibility audits.', note: 'Supports WordPress, Drupal and Umbraco, with enterprise CMS work alongside.' },
  { name: 'Webstix', domain: 'webstix.com', url: 'https://webstix.com/website-maintenance/', base: 'Madison, Wisconsin, with offices in four more states', model: 'Prepaid maintenance blocks that do not expire, plus website care plans. No long-term contract required.', note: 'Works on sites built by other companies and sends a report after each job.' },
  { name: 'DirectiveGroup', domain: 'directivegroup.com', url: 'https://www.directivegroup.com/web-support/maintenance/', base: 'St. Petersburg, Florida', model: 'Website maintenance, database and site optimization, and website and database backups.', note: 'Sells maintenance alongside SEO, paid media and ecommerce marketing.' },
];

function WmFaqAccordion() {
  return (
    <div className="faqlist">
      {WM_FAQ_CATEGORIES.map((category) => (
        <Fragment key={category.id}>
          <div className="faq-category" id={category.id}>{category.label}</div>
          {WM_FAQS.filter((faq) => faq.category === category.key).map((faq) => (
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

export default function WebsiteMaintenanceSections() {
  return (
    <div className="aiAgentPage wmHub">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {wmBreadcrumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === wmBreadcrumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="website-maintenance-content">
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Website Maintenance · WordPress, Shopify &amp; Custom Sites</div>
              <h1>Website Maintenance Services That Keep Your Site <span className="hero-emphasis">Safe, Fast and Found</span></h1>
              <p className="lead" data-speakable>FactoryJet is a website maintenance company for US businesses. We test every update on a private copy of your site first, keep backups off the server, watch for downtime and attacks, fix what breaks, and make the changes your team asks for. Sites another agency built are welcome. Every account stays in your name.</p>
              <HeroInlineForm source="us_website_maintenance_hero" region="us" submitLabel="Get a free site check" />
              <p className="hero-alt">Running a Shopify store? See <a href="/services/shopify-maintenance-services">Shopify maintenance services</a>.</p>
            </div>

            <form className="specpanel" aria-label="Illustration of how a website update is made safely">
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>UPDATE PATH · EVERY CHANGE</span>
                <span className="sys"><span>WORDPRESS</span><span>SHOPIFY</span><span>WEBFLOW</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore the update path">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="update-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" /></svg></span>
                  <span className="idx">STEP 01</span>
                  <span className="title">Back up files and database, off the server</span>
                  <span className="tag">BACKUP</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="update-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M7 9h6" /></svg></span>
                  <span className="idx">STEP 02</span>
                  <span className="title">Apply updates to a private staging copy</span>
                  <span className="tag">STAGE</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="update-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M4 5h16v14H4zM8 10l2 2 4-4M8 16h8" /></svg></span>
                  <span className="idx">STEP 03</span>
                  <span className="title">Test forms, checkout and key pages</span>
                  <span className="tag">TEST</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="update-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6" /></svg></span>
                  <span className="idx">STEP 04</span>
                  <span className="title">Ship to live, watch, roll back if needed</span>
                  <span className="tag">LIVE</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · nothing reaches your live site until it passes on staging and a restorable backup exists.</div>
            </form>
          </div>
        </section>

        <div className="ledger">
          <div className="wrap">
            <div className="ledgercell"><div className="k">Founded</div><div className="v"><strong className="ledger-number">2014</strong></div></div>
            <div className="ledgercell"><div className="k">Platforms</div><div className="v">WordPress, WooCommerce, Shopify, Webflow, Magento, BigCommerce and custom Next.js sites, including ones we did not build.</div></div>
            <div className="ledgercell"><div className="k">What you own</div><div className="v">Domain, hosting, store, analytics, backups and every license, all in your company name. We work through logins you can remove.</div></div>
            <div className="ledgercell"><div className="k">Track record</div><div className="v"><strong className="ledger-number">500+</strong>businesses served across web, commerce and AI work.</div></div>
          </div>
        </div>

        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">§ Key Facts</div>
              <h2>What Website Maintenance Services Cover, and Why They Matter in 2026</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p data-speakable><span className="stat">Website maintenance services are the ongoing work that keeps a live website secure, working and current: updates tested before they go live, off-site backups, uptime and security monitoring, fixes, content changes, and checks on speed, accessibility and search.</span> You get a plain-English report of what was done each month. Some people call it a website care plan, website support or website management. It is the same job.</p></div>
                <div className="fact"><div className="sec">§02</div><p><span className="stat">7,966 new security holes were found in the WordPress ecosystem in 2024, and 96% of them were in plugins.</span> A third were not fixed by the time they were made public, often because the plugin had been abandoned. Updating is not enough. Someone has to decide which plugins stay. <a href={PATCHSTACK} target="_blank" rel="noopener">Patchstack, 2025 ↗</a></p></div>
                <div className="fact"><div className="sec">§03</div><p><span className="stat">PHP 8.2 stops getting security fixes on December 31, 2026.</span> WordPress.org recommends PHP 8.3 or newer and warns that older versions may expose a site to security holes. If your host still runs 8.2 or older, plan the upgrade now, on staging, not in a rush in January. <a href={PHP} target="_blank" rel="noopener">PHP.net ↗</a> <a href={WP_REQ} target="_blank" rel="noopener">WordPress.org ↗</a></p></div>
                <div className="fact"><div className="sec">§04</div><p><span className="stat">95.9% of the top one million home pages had detectable WCAG failures in 2026.</span> The US Department of Justice says the ADA applies to businesses open to the public, including what they offer online. Six error types make up 96% of what WebAIM found, and most are quick fixes during routine care. <a href={WEBAIM} target="_blank" rel="noopener">WebAIM ↗</a> <a href={ADA_WEB} target="_blank" rel="noopener">DOJ ↗</a></p></div>
                <div className="fact"><div className="sec">§05</div><p><span className="stat">Shopify releases a new API version every three months and supports each one for at least 12 months.</span> A store with custom apps or integrations needs planned updates too, even though Shopify patches the platform itself. <a href={SHOPIFY_API} target="_blank" rel="noopener">Shopify ↗</a></p></div>
                <div className="fact"><div className="sec">§06</div><p>FactoryJet looks after WordPress, Shopify, Webflow and custom sites for US businesses. Bhavesh, our founder, and the team run every account. We also design sites, build stores and AI agents, and do SEO, so a fix never waits on another vendor. Support is the part of the work most agencies skip. We treat it as the job.</p></div>
              </div>
              <div className="factphoto">
                <VisualSlot slot="facts" kind="photo" ratio="3:2" subject="An operations manager at a small US manufacturing company office in Ohio, seated at a desk, reviewing an uptime and update dashboard on a laptop whose screen faces her; camera over her shoulder; daylight, plain white walls; no readable text, no logos" />
              </div>
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare</div>
              <h2>Who Should Maintain Your Website?</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Option</th><th>What they usually cover</th><th>What usually falls through</th><th>Best for</th></tr></thead>
                <tbody>
                  <tr><th>You or your staff<br /><span className="mono tableSubLabel">In-house, part-time</span></th><td>Content edits, clicking update, renewing the domain</td><td>Staging tests, restore tests and security reviews</td><td>Small brochure sites with a confident owner</td></tr>
                  <tr><th>Your hosting company<br /><span className="mono tableSubLabel">Managed hosting</span></th><td>The server, server backups, sometimes automatic core updates</td><td>Your theme, plugins, forms, content and anything that needs a developer</td><td>A sound base layer, not the whole job</td></tr>
                  <tr><th>A freelancer<br /><span className="mono tableSubLabel">Hourly, as needed</span></th><td>Fixes and changes when you ask</td><td>Monitoring, cover when they are away, documentation</td><td>Sites that change rarely and can wait a day</td></tr>
                  <tr className="us"><th>A maintenance team<br /><span className="mono tableSubLabel tableSubLabelAccent">What FactoryJet does</span></th><td>Tested updates, backups, monitoring, fixes, changes and a monthly report</td><td>Nothing, if the scope is written down. That is why we write it down.</td><td>Sites that bring in leads, bookings or orders every week</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="definition" id="definition">
          <VisualSlot slot="definition" kind="diagram" ratio="3:2" className="definition-image" subject="Clean line diagram in white and orange: a live website card on the right, a private staging copy card on the left, an arrow labeled only with a check mark between them, and a backup cylinder underneath; no words" />
          <div className="definition-copy">
            <div className="eyebrow">Term</div>
            <h2 className="term">Staging Site</h2>
            <p>A staging site is a private copy of your website that customers cannot see. Updates and changes go there first, get tested, and only then move to the live site. It is the biggest difference between cheap and good maintenance. Clicking update on the live site works most months. The month it does not, your form or checkout breaks while real visitors are on it. On staging, the same failure costs nothing.</p>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Capabilities</div>
              <h2>Website Maintenance Services We Deliver</h2>
            </div>
            <div className="capgrid">
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.title} className={`cap cap-${i + 1}`}>
                  <div className="caphead"><span className="capid">CAP‑{String(i + 1).padStart(2, '0')}</span><svg {...CAP_ICON}><path d={cap.icon} /></svg></div>
                  <div className="cap-diagram" aria-hidden="true"><svg {...DIAGRAM}>{DIAGRAMS[i]}</svg></div>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                  <div className="systags">{cap.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section changes" id="checklist">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Checklist</div>
              <h2>The Website Maintenance Checklist We Run Every Month</h2>
              <p>Four groups, 28 checks. Use it on your own site, or to judge any provider: if they cannot show a list this specific, you are paying for a promise, not a process.</p>
            </div>
            {CHECKLIST.map((group, i) => (
              <div className="agentdir-group chg-group" key={group.title}>
                <div className="agentdir-label">
                  <span className="capid">GRP‑{String(i + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.lead}</p>
                  <span className="mono agentdir-count">{group.items.length} checks</span>
                </div>
                <ul className="chg-list">
                  {group.items.map(([bold, rest]) => <li key={bold}><span><b>{bold}</b>{rest}</span></li>)}
                </ul>
              </div>
            ))}
            <p className="chg-note">Speed targets follow Google’s Core Web Vitals thresholds: LCP within 2.5 seconds, INP of 200 milliseconds or less, CLS of 0.1 or less. <a href={VITALS} target="_blank" rel="noopener">web.dev ↗</a> Want to know why a site left alone slowly loses rankings? Read <a href={SEO_DECAY_POST}>why set it and forget it kills SEO</a>.</p>
          </div>
        </section>

        <section className="midcta" id="site-check" aria-label="Free site check">
          <div className="wrap">
            <div>
              <div className="eyebrow">Free Site Check</div>
              <h2>Not Sure What Your Site Needs?</h2>
              <p>Send us the address. We check versions, backups, security, speed and accessibility basics, then tell you in plain English what is urgent and what can wait.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a free site check</a>
              <a className="btn btn-ghost" href="/contact">Talk to Bhavesh and the team</a>
            </div>
          </div>
        </section>

        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div><div className="eyebrow">Platforms</div><h2>Maintenance for Every Kind of Website</h2></div>
              <p>WordPress needs the most care, so it gets the most attention on this page. The same team looks after the other platforms below, and platforms with their own page link to it.</p>
            </div>
            <div className="platlist" role="list">
              {PLATFORMS.map((row, i) => {
                const inner = (
                  <>
                    <span className="capid">PLT‑{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>{row.name}</h3>{row.flag && <span className="plat-flag">{row.flag}</span>}</div>
                    <div className="plat-fit"><span className="k">Best for</span>{row.fit}</div>
                    <p className="plat-build">{row.body}</p>
                    <span className="plat-go" aria-hidden="true">{row.href ? '↗' : ''}</span>
                  </>
                );
                const cls = row.flag ? 'plat plat-own' : 'plat';
                return row.href
                  ? <a key={row.name} className={cls} role="listitem" href={row.href}>{inner}</a>
                  : <div key={row.name} className={cls} role="listitem">{inner}</div>;
              })}
            </div>
          </div>
        </section>

        <section className="section comparison plans" id="plans">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Plans</div>
              <h2>Website Maintenance Packages, by Scope</h2>
              <p>Plans are described by what they include, not a rate card, because two sites on the same plan can need very different care. After a free check you get a fixed monthly scope in writing, with response times agreed for your site.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Plan</th><th>Best for</th><th>What is included</th><th>Move up when</th></tr></thead>
                <tbody>
                  {PLANS.map((p) => (
                    <tr key={p.name}><th>{p.name}</th><td>{p.fit}</td><td>{p.includes}</td><td>{p.next}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section cost" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Cost</div>
              <h2>What Website Maintenance Costs in the US</h2>
              <p>Published ranges run from a few dollars to a few thousand a month because they measure different things. The low end is mostly software and hosting. The high end includes a developer who tests and fixes things.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Source</th><th>What the figure covers</th><th>Published range</th></tr></thead>
                <tbody>
                  <tr><th>GoDaddy<br /><span className="mono tableSubLabel"><a href={GODADDY} target="_blank" rel="noopener nofollow">Cost guide ↗</a></span></th><td>All maintenance, from a basic site to a large, busy one</td><td>From around $5 a month to several thousand a month</td></tr>
                  <tr><th>Network Solutions<br /><span className="mono tableSubLabel"><a href={NETSOL} target="_blank" rel="noopener nofollow">Cost guide ↗</a></span></th><td>Basic sites versus complex sites with online stores</td><td>About $5 to $25 a month for a basic site; $1,500 or more for complex sites</td></tr>
                  <tr><th>Wix<br /><span className="mono tableSubLabel"><a href={WIX} target="_blank" rel="noopener nofollow">Cost guide ↗</a></span></th><td>Hosting only</td><td>About $5 a month for shared hosting; hundreds a month for a dedicated server</td></tr>
                  <tr><th>OuterBox<br /><span className="mono tableSubLabel"><a href={OUTERBOX} target="_blank" rel="noopener nofollow">Agency page ↗</a></span></th><td>An agency maintenance retainer with developers</td><td>$100 to $2,500 a month typical; $200 an hour standard rate</td></tr>
                </tbody>
              </table>
            </div>
            <div className="cost-drivers">
              <h3>What moves your number</h3>
              <ul>
                <li><span><b>Platform:</b> WordPress and WooCommerce need more hands-on care than Shopify or Webflow</span></li>
                <li><span><b>Plugins, apps and integrations:</b> every one is another thing to update and test</span></li>
                <li><span><b>Payments:</b> a site that sells needs checkout tested after every update</span></li>
                <li><span><b>Changes:</b> how many pages, products or features you want each month</span></li>
                <li><span><b>Response time:</b> faster written response costs more to staff</span></li>
                <li><span><b>Starting state:</b> a site nobody has touched in two years needs a cleanup first</span></li>
              </ul>
              <p>We do not publish a maintenance price list. We quote a fixed monthly scope after the free site check. For hosting, licenses and labor in one place, read <a href={COST_GUIDE}>what a business website costs to run every month</a>.</p>
            </div>
          </div>
        </section>

        <section className="section agentdir takeover" id="takeover">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Takeover</div>
              <h2>Taking Over a Site Another Agency Built</h2>
              <p>Many sites we maintain were built by someone who stopped answering. Before any monthly work, we run a takeover audit with these ten checks.</p>
            </div>
            <ol className="takeover-list">
              {TAKEOVER.map((item, i) => <li key={item}><span className="capid">{String(i + 1).padStart(2, '0')}</span><span>{item}</span></li>)}
            </ol>
          </div>
        </section>

        <VisualSlot slot="photobreak" kind="photo" ratio="1536:560" className="photobreak" subject="Two web developers in a bright US studio office reviewing a staging website side by side with the live site on a large monitor that faces them; camera behind their shoulders; plants and daylight; no readable text or logos" />

        <section className="section process" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Process</div>
              <h2>How Website Maintenance Works With Us</h2>
            </div>
            <div className="timeline">
              <div className="tnode"><div className="idx">01</div><h3>Site check</h3><p>Free. Platform, versions, backups, security, speed and accessibility basics, in plain English.</p></div>
              <div className="tnode"><div className="idx">02</div><h3>Takeover audit</h3><p>Access collected, ownership confirmed, full backup taken, every plugin and app listed.</p></div>
              <div className="tnode"><div className="idx">03</div><h3>Cleanup</h3><p>Urgent fixes first: outdated PHP, abandoned plugins, old admin users, broken forms.</p></div>
              <div className="tnode"><div className="idx">04</div><h3>Monthly care</h3><p>Tested updates, monitoring, backups and your change requests, on a fixed scope.</p></div>
              <div className="tnode"><div className="idx">05</div><h3>Report</h3><p>What we did, what we found, and what needs your decision. Scope adjusts as the site changes.</p></div>
            </div>
            <div className="timelineAction">
              <a className="btn btn-primary" href="#hero">Get a free site check</a>
              <a className="btn btn-ghost" href="/services/website-redesign">Need a rebuild instead?</a>
            </div>
          </div>
        </section>

        <section className="vlog" id="standards">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Our Standards</div>
              <h2>A Maintenance Provider Should Show Its Working</h2>
              <p>Four rules we hold ourselves to, on this page and in every client report.</p>
            </div>
            <div className="ventries">
              <div className="ventry"><span className="vtag">VERIFIED</span><h3>Every number links to its source</h3><p>Each statistic and cost figure on this page links to its source. No source, no number. Client reports follow the same rule.</p></div>
              <div className="ventry"><span className="vtag">IN WRITING</span><h3>Response times are agreed per site</h3><p>We do not print a one-size response time on a web page. We agree it for your site, in writing, before work starts.</p></div>
              <div className="ventry"><span className="vtag">YOURS</span><h3>You can leave any time with everything</h3><p>Accounts in your name, our access through logins you can remove, and a full backup plus documentation when you go.</p></div>
              <div className="ventry"><span className="vtag">ADVICE</span><h3>Legal questions go to a lawyer</h3><p>We fix accessibility errors and help after a breach, but we do not give legal advice. We point you to the <a href={ADA_RULE} target="_blank" rel="noopener">DOJ web rule</a> and the <a href={FTC} target="_blank" rel="noopener">FTC breach guide</a>.</p></div>
            </div>
          </div>
        </section>

        <section className="section agencies" id="providers">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Compare Providers</div>
              <h2>US Website Maintenance Companies Worth Comparing</h2>
              <p>US agencies on Google&apos;s first page for website maintenance company and website support services (DataForSEO, 26 September 2026). Each summary comes from the company&apos;s own maintenance page, read the same day.</p>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Company</th><th>Based in</th><th>How they sell maintenance</th><th>Worth knowing</th></tr></thead>
                <tbody>
                  {PROVIDERS.map((p) => (
                    <tr key={p.domain}>
                      <th>{p.name}<br /><span className="mono tableSubLabel"><a href={p.url} target="_blank" rel="noopener nofollow">{p.domain} ↗</a></span></th>
                      <td>{p.base}</td>
                      <td>{p.model}</td>
                      <td>{p.note}</td>
                    </tr>
                  ))}
                  <tr className="us">
                    <th>FactoryJet<br /><span className="mono tableSubLabel tableSubLabelAccent">This page</span></th>
                    <td>Remote team serving US businesses</td>
                    <td>Scope-based monthly plans, one-off fixes and takeover audits across WordPress, Shopify, Webflow, Magento and custom code.</td>
                    <td>Not on page one for these searches today, with far less domain authority than the agencies above. The founder is on your account.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap">
            <div className="faqwrap">
              <div className="faqintro">
                <div className="eyebrow">FAQ</div>
                <h2 className="faqHeading">Website Maintenance Questions, Answered Directly</h2>
                <p>{WM_FAQS.length} questions US business owners ask Google and AI assistants, most in the exact words of Google&apos;s People Also Ask boxes.</p>
                <nav className="faq-catnav" aria-label="FAQ categories">
                  {WM_FAQ_CATEGORIES.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}
                </nav>
              </div>
              <WmFaqAccordion />
            </div>
          </div>
        </section>

        <section className="section referencesSection references" id="references">
          <div className="wrap">
            <div className="eyebrow">Related</div>
            <div className="refs">
              <a href="/services/shopify-maintenance-services">Shopify maintenance services</a>
              <a href="/services/ai-agent-monitoring">AI agent monitoring</a>
              <a href="/services/technical-seo">Technical SEO services</a>
              <a href="/services/website-redesign">Website redesign services</a>
              <a href="/services/wordpress-development">WordPress development</a>
              <a href="/services/web-design">Website design and development</a>
              <a href={COST_GUIDE}>What a website costs to run each month</a>
              <a href="/services/ai-seo">AI SEO services</a>
              <a href={PATCHSTACK} target="_blank" rel="noopener">Patchstack: State of WordPress Security</a>
              <a href={WEBAIM} target="_blank" rel="noopener">WebAIM Million 2026</a>
              <a href={ADA_WEB} target="_blank" rel="noopener">DOJ: Web Accessibility and the ADA</a>
              <a href={PHP} target="_blank" rel="noopener">PHP: Supported Versions</a>
            </div>
          </div>
        </section>

        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <h2>Hand Us the Website. Keep the Business.</h2>
              <p>Send the address of your site. We will tell you what is out of date, what is at risk and what we would do first, then give you a fixed monthly scope in writing. You keep every account.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-primary" href="#hero">Get a free site check</a>
              <a className="btn btn-ghost" href="/contact">Talk to the founder</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
