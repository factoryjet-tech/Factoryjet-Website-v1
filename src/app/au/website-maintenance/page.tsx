import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../au-service.css';

const CANONICAL = 'https://factoryjet.com/au/website-maintenance';
const UPDATED = '2026-09-26';
const TITLE = 'Website Maintenance Services Australia | FactoryJet';
const H1 = 'Website Maintenance Services for Australian Businesses: Updates, Security, Backups and Changes, Handled';
const DESCRIPTION =
  'Website maintenance services and care plans for Australian WordPress and Shopify sites: tested updates, backups, security checks and fixes. Ask the founder.';

/* Design tokens, copied by value from ../au-service.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#F05A28',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Website Maintenance', url: CANONICAL },
];

/* ─── External sources, fetch-verified 2026-09-26 ───────────────────── */
// WordPress.org requirements: "PHP version 8.3 or greater" recommended; "WordPress
// also works with PHP 7.4+ ... these versions have reached their official End Of
// Life and may expose your site to security vulnerabilities." HTTP 200.
const SRC_WP_REQ = 'https://wordpress.org/about/requirements/';
// Shopify API versioning: "Shopify releases a new API version every three months";
// "Each stable version is supported for a minimum of 12 months". HTTP 200.
const SRC_SHOPIFY_API = 'https://shopify.dev/docs/api/usage/versioning';
// OAIC, Notifiable Data Breaches scheme: "Any organisation or agency the Privacy
// Act 1988 covers must notify affected individuals and the OAIC when a data
// breach is likely to result in serious harm." HTTP 200.
const SRC_OAIC_NDB = 'https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme';
// OAIC, small business: turnover threshold exemption; health service providers and
// others covered regardless of turnover. HTTP 200. (We do not quote the figure.)
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// W3C WAI: "WCAG 2.2 was published on 5 October 2023"; "W3C encourages you to use
// the latest version of WCAG." HTTP 200.
const SRC_WCAG = 'https://www.w3.org/WAI/standards-guidelines/wcag/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Website maintenance basics' },
  { key: 'cost', label: 'Cost, hosting & plans' },
  { key: 'wordpress', label: 'WordPress & Shopify care' },
  { key: 'help', label: 'Getting help & switching' },
  { key: 'security', label: 'Security, SEO & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What are website maintenance services?',
    answer: 'Website maintenance services are the ongoing work that keeps a live website safe, working and current. That means updating the software it runs on, taking and testing backups, watching for downtime and attacks, fixing things that break, making small content and design changes, and checking speed and SEO. A good provider also tells you each month what they did, what they found and what needs a decision from you.' },
  { category: 'basics', question: 'Do websites need monthly maintenance?',
    answer: 'Most business websites do. A WordPress site gets core, theme and plugin updates every few weeks, and each one either closes a security hole or risks breaking something if applied blindly. Even a Shopify store, where Shopify looks after hosting and the platform, has apps, theme code and integrations that change. A monthly rhythm catches small problems before customers find them, and a live site that nobody checks tends to fail quietly.' },
  { category: 'basics', question: 'How long does website maintenance usually take?',
    answer: 'For a typical small business WordPress site, routine monthly maintenance (updates tested on a staging copy, backup checks, a security scan and a short report) takes a few hours a month. Busier sites with online stores, bookings, memberships or many plugins take longer, and so does any month with content changes or a fix. The first month usually takes the most time, because it includes an audit and clean-up of whatever has built up.' },
  { category: 'basics', question: 'Is it difficult to maintain a website?',
    answer: 'The clicks are easy. The judgement is the hard part. Pressing "update all" takes seconds, but knowing which update will clash with your booking plugin, reading the error when checkout stops working, or restoring a clean backup after a hack takes experience. Many owners handle content changes themselves and hand the technical side, meaning updates, security, backups and fixes, to someone who does it every day.' },
  { category: 'basics', question: 'How do I maintain a website?',
    answer: 'Work through the same short list every month. Take a full backup and check you can restore it. Apply updates on a staging copy first, test the forms, checkout and key pages, then update the live site. Check the site is secure (SSL, logins, user accounts, a malware scan). Check speed and broken links. Review search and analytics. Update anything out of date, such as prices, staff or opening hours. Write down what you changed.' },
  { category: 'basics', question: 'What do you call someone who manages your website?',
    answer: 'Common titles are webmaster, website manager, web administrator or website developer. In a small business it is often an agency or freelancer on a website care plan or maintenance retainer rather than an employee. Inside larger organisations the work is usually split: a digital or marketing manager owns the content, and a developer or agency owns updates, security and fixes. What matters is that one named person is accountable.' },
  { category: 'basics', question: 'Who does website maintenance?',
    answer: 'Four kinds of people usually do it: the business owner or a staff member, a freelance developer, the hosting company (often limited to the server itself), or a web agency on a care plan. The right choice depends on how much your site does. A brochure site with a few pages can often be kept safe by an owner with good habits. A site that takes bookings, payments or leads every day deserves a specialist.' },

  // ── Cost, hosting & plans ──
  { category: 'cost', question: 'How much does website maintenance cost in Australia?',
    answer: 'It depends on the scope rather than a rate card. The biggest drivers are the platform (WordPress, WooCommerce, Shopify or custom), how many plugins, apps and integrations the site has, whether hosting is included, how many content changes you want each month, how fast you need a response, and whether the site takes payments. For typical Australian market ranges from independent sources, read our website cost guide. We quote a fixed monthly scope after a free site check.' },
  { category: 'cost', question: 'How much do website maintenance packages typically cost?',
    answer: 'Packages across Australia vary widely, from basic update-only plans to full website management with hosting, content changes and priority support. Before comparing prices, compare what is actually included: are updates tested before going live, how often are backups taken and tested, are content changes included, what is the response time for a broken site, and is GST included in the price shown. Our website cost guide lists independent market ranges with their sources.' },
  { category: 'cost', question: 'How much does it cost to pay someone to maintain a website?',
    answer: 'You can pay by the hour, by the job, or on a monthly care plan. Hourly and one-off fixes suit sites that rarely change, but a problem on a site nobody has looked after for a year usually takes longer to fix. A monthly plan suits sites that earn money every day, because the provider already knows the site and the updates never pile up. We explain what drives cost here and route price questions to our cost guide.' },
  { category: 'cost', question: 'Do I have to pay to maintain a website?',
    answer: 'Some costs are unavoidable. You need a domain name renewal, hosting (or a platform subscription such as Shopify), and often licences for premium themes, plugins or apps. The labour can be yours: if you have the time and skill, you can do the updates, backups and checks yourself. What you should not do is pay nothing and do nothing, because an unmaintained site becomes slower, less secure and harder to fix over time.' },
  { category: 'cost', question: 'How much should I pay someone to host my website?',
    answer: 'Hosting cost depends on the type, not just the provider. Cheap shared hosting suits a small brochure site. Managed WordPress hosting adds daily backups, staging and better security for busier sites. Online stores and high-traffic sites need more server resources. Shopify includes hosting in its subscription. Check where the servers are (Australian data centres help speed for local visitors), what backups include, and whether the account is in your name.' },
  { category: 'cost', question: 'How much does it cost to host a website for 1 year?',
    answer: 'It depends on the hosting type and on whether the first-year price is an introductory offer that rises on renewal, which is common. Compare the renewal price, not the sign-up price, and check whether the plan includes backups, SSL certificates, email and staging, or charges for them separately. Our website cost guide sets out independent Australian market ranges for hosting and maintenance with their sources and GST treatment.' },
  { category: 'cost', question: 'What is a website care plan?',
    answer: 'A website care plan is a monthly agreement where one provider looks after your site: updates, backups, security and uptime monitoring, fixes and usually a set amount of changes or support time. The word "care" signals ongoing responsibility rather than a one-off job. Our care plans are described by scope, not a price list: security and updates, updates plus regular changes, or ongoing improvement. We quote the scope that fits your site after a free check.' },

  // ── WordPress & Shopify care ──
  { category: 'wordpress', question: 'What are WordPress care plans and what do they do?',
    answer: 'A WordPress care plan keeps a WordPress site updated, backed up, secure and working. It covers WordPress core, theme and plugin updates tested on a staging copy first, PHP version upgrades on the server, daily off-site backups, malware scanning, uptime monitoring, broken link and form checks, and a set amount of changes or fixes each month. A good plan also removes plugins you no longer need, which is one of the quietest ways to reduce security risk.' },
  { category: 'wordpress', question: 'How much does WordPress maintenance cost?',
    answer: 'WordPress maintenance cost mainly depends on the number of plugins, whether it runs WooCommerce or bookings, how custom the theme is, how old the site is, and whether hosting and content changes are included. A tidy site on a current PHP version costs less to look after than one with dozens of plugins and a theme nobody has updated in years. We audit the site first and quote a fixed monthly scope.' },
  { category: 'wordpress', question: 'What are the best WordPress maintenance services?',
    answer: 'The best WordPress maintenance services share five habits: they test updates on a staging copy before touching the live site, keep backups off the server and prove they can restore them, tell you in writing how quickly they respond when the site is down, report monthly in plain English, and keep every account in your name. Ask any provider how they handle a plugin update that breaks the site. Their answer tells you most of what you need to know.' },
  { category: 'wordpress', question: 'Is WordPress outdated in 2026?',
    answer: 'No. WordPress is still actively developed and still powers a large share of websites worldwide. What gets outdated is a particular installation: old PHP, abandoned plugins and a theme that has not been updated in years. WordPress.org recommends PHP 8.3 or greater and warns that older PHP versions have reached end of life and may expose a site to security vulnerabilities. A maintained WordPress site is a sound choice. An unmaintained one is a risk.' },
  { category: 'wordpress', question: 'Do you look after Shopify stores as well as WordPress sites?',
    answer: 'Yes. On Shopify, the platform handles hosting, security patching and checkout, so maintenance looks different. We look after the theme code, installed apps, integrations with tools such as Xero or your warehouse, speed, structured data and small changes. Shopify releases a new API version every three months and supports each stable version for at least twelve months, so custom apps and integrations need planned updates. We are a registered Shopify Partner.' },
  { category: 'wordpress', question: 'Can you maintain WooCommerce and online stores?',
    answer: 'Yes. Online stores need the most careful maintenance because a bad update can stop sales. On WooCommerce we update WordPress, WooCommerce, payment gateways and extensions on a staging copy first, then test the full path: product page, cart, checkout, payment, order email and stock sync. We schedule updates outside your busy trading hours and plan around peak periods such as end of financial year, Black Friday and Christmas.' },

  // ── Getting help & switching ──
  { category: 'help', question: 'Can I hire someone to manage my website?',
    answer: 'Yes. You can hire a freelancer, an agency or a website management service to look after it on a monthly plan or job by job. Before you hire, agree in writing what is included, how fast they respond when the site is down, how they access the site (their own login, never your password), where backups are kept, and how you get everything back if you leave. Website management should make you less dependent on one person, not more.' },
  { category: 'help', question: 'What can I do to get help with my website?',
    answer: 'Start by writing down what is wrong, when it started and what changed just before, such as an update, a new plugin or a hosting change. For hosting or domain problems, contact your host or domain registrar first. For platform problems on Shopify, Shopify Support can help with the platform itself. For anything involving your theme, plugins, custom code or a hacked site, you need a developer. You can send us the details and we will tell you what we would check first.' },
  { category: 'help', question: 'Can you take over a website another agency built?',
    answer: 'Yes, and it is a large part of what we do. We start with a takeover audit: we collect every login and account, confirm who owns the domain and hosting, take a full backup, list every plugin or app and its update status, check PHP and server versions, scan for malware and document anything custom. You get a plain-English report of what we found and what we recommend before any ongoing work starts.' },
  { category: 'help', question: 'What if my old developer will not hand over access?',
    answer: 'First check what you already control. The domain registrar account, hosting account and Shopify store owner account should be in your business name, and you can usually recover access through those providers with proof of identity. If an account is in the developer’s name, ask for a transfer in writing. Once you hold the domain and hosting, we can take a backup and rebuild access to everything else. We help you through each step.' },
  { category: 'help', question: 'Can you work with our in-house marketing team?',
    answer: 'Yes. A common setup is that your team edits pages, blog posts and products in the content management system, and we look after updates, security, backups, speed, integrations and anything that needs code. We agree who owns what, give your team the right level of access, and review larger changes before they go live so a content edit cannot accidentally break a layout or a form.' },

  // ── Security & ownership ──
  { category: 'security', question: 'What happens if my website gets hacked?',
    answer: 'We take the site offline or into maintenance mode if needed, restore a clean backup where one exists, find and close the way the attacker got in (often an old plugin or a weak login), remove malicious code, reset passwords and keys, and ask Google to review the site if it was flagged. If personal information may have been exposed and your business is covered by the Privacy Act, you may need to notify affected people and the OAIC under the Notifiable Data Breaches scheme.' },
  { category: 'security', question: 'Do I own my website and hosting if I leave?',
    answer: 'With us, yes. The domain, hosting account, Shopify store, analytics, Search Console and every licence stay in your business name, and our team works through its own logins that you can remove at any time. When you leave, you get a full backup, a list of every plugin, app and integration, and notes on anything custom. We do not hold websites hostage, and we think no provider should.' },
  { category: 'security', question: 'Does website maintenance help SEO?',
    answer: 'It helps the technical side of SEO. A maintained site loads faster, stays online, has fewer broken links and errors, keeps its SSL certificate valid and keeps structured data working after updates. Those are things search engines and AI assistants notice. Maintenance does not replace SEO work such as keyword research, new content or links. If you want that too, our SEO and AI SEO services build on the same site.' },
  { category: 'security', question: 'Does website maintenance require downtime?',
    answer: 'Usually not. Because we test updates on a staging copy first, the change on the live site takes seconds or minutes. Larger jobs such as a PHP upgrade, a hosting move or a major WooCommerce update are scheduled outside your busy hours, and we tell you in advance. If something unexpected happens, we roll back to the backup taken just before the change.' },
];

/* ─── Named Australian providers (open self-disclosure, ItemList). Each note
       is based on the company’s own maintenance page, fetched 2026-09-26. ─── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Website maintenance and care plans for WordPress, WooCommerce and Shopify sites, including sites another agency built, with updates tested on staging, off-site backups and accounts kept in your name. Founder involved on every account.' },
  { name: 'Spark Interact', note: 'A Sydney-based agency whose website maintenance page covers updates tested before deployment with rollback, backups, security and uptime monitoring, functional testing of forms and checkouts, priority-based support and maintenance reporting, with plans for service sites, ecommerce sites and multisite setups.' },
  { name: 'GroundStation', note: 'An Australian agency offering website maintenance on a monthly retainer covering software updates, security monitoring, uptime and performance tracking, backups, content updates, troubleshooting, SEO oversight and monthly reporting.' },
  { name: 'Dilate', note: 'An Australian digital agency with a single monthly WordPress maintenance package covering WordPress, PHP and plugin updates, uptime monitoring, backups, SSL renewal and a monthly performance report, with local phone support.' },
  { name: 'Digitalon', note: 'An Australian agency offering tiered website maintenance packages that combine hosting, WordPress updates, nightly backups, monitoring and content updates, plus on-demand support and help for sites built by someone else.' },
];

/* ─── Plan tiers, described by scope only. No prices, hours or response
       times are published: those are agreed per site in writing. ───────── */
const PLAN_SHAPES: { name: string; fit: string; items: string[] }[] = [
  {
    name: 'Security and updates',
    fit: 'Brochure and service sites that rarely change',
    items: [
      'WordPress core, theme and plugin updates, tested on staging first',
      'Off-site backups with a restore test',
      'Uptime and security monitoring',
      'SSL, domain and licence renewal checks',
      'Monthly plain-English report',
    ],
  },
  {
    name: 'Updates plus changes',
    fit: 'Sites that earn leads or bookings every week',
    items: [
      'Everything in security and updates',
      'Content, page and image changes each month',
      'Form, booking and integration checks',
      'Speed and technical SEO checks',
      'Priority fixes when something breaks',
    ],
  },
  {
    name: 'Ongoing improvement',
    fit: 'Online stores and sites that must keep growing',
    items: [
      'Everything in updates plus changes',
      'Checkout, payment and stock sync testing',
      'Small new features and landing pages',
      'Quarterly review of speed, search and conversions',
      'Peak-season readiness planning',
    ],
  },
];

/* "Which plan fits you" self-check. Rendered as <details>: no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'My site is a few pages about my business, and it rarely changes.', verdict: 'Security and updates', a: 'You mainly need the software kept current, backups you can trust and someone watching for problems. If you are comfortable with the admin area, you might even do this yourself with a good checklist, and we will say so.' },
  { q: 'People book, enquire or request quotes through my site every week.', verdict: 'Updates plus changes', a: 'A broken form or booking page costs you work before you notice. You want updates tested against those forms, regular checks that enquiries arrive, and someone who can make changes quickly when your services, staff or hours change.' },
  { q: 'I sell online, on WooCommerce or Shopify.', verdict: 'Ongoing improvement', a: 'Every hour of a broken checkout is lost sales. You want updates tested through the full purchase path, integrations with payments, stock and accounting watched, and time each month to improve the store, not just keep it running.' },
  { q: 'Another agency built my site and has gone quiet.', verdict: 'Start with a takeover audit', a: 'Before any plan, we collect access, confirm ownership of the domain and hosting, take a full backup and report what we find. Then you choose the level of care that fits, with no surprises.' },
  { q: 'My site has been hacked or is showing warnings right now.', verdict: 'Emergency clean-up first', a: 'Fix first, plan later. We clean the site, close the hole the attacker used, restore trust with Google, and then recommend the level of care that stops it happening again.' },
];

/* How we update safely. <details> steps. */
const UPDATE_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Back up first', d: 'Before any change, we take a full backup of files and database and store it off the server, so a problem on the live site can always be undone.' },
  { n: '02', t: 'Update a staging copy', d: 'Staging is a private copy of your site that customers cannot see. We apply WordPress core, theme, plugin or app updates there first, never straight to the live site.' },
  { n: '03', t: 'Test what earns you money', d: 'We check the pages and paths that matter most for your business: contact and quote forms, bookings, cart and checkout, logins, search and key landing pages, on desktop and mobile.' },
  { n: '04', t: 'Apply to the live site', d: 'Once staging passes, we apply the same updates to the live site outside your busy hours and repeat the key checks straight away.' },
  { n: '05', t: 'Watch, then report', d: 'Uptime and error monitoring confirm the site stays healthy. If anything goes wrong, we roll back to the backup taken in step one. Everything we did goes in your monthly report.' },
];

/* Takeover audit checklist (listicle). */
const TAKEOVER_CHECKS: string[] = [
  'Every login collected and moved to named accounts, with old and unknown users removed',
  'Domain, hosting, DNS, email and Shopify owner accounts confirmed in your business name',
  'A full off-site backup taken before we change anything',
  'Every plugin, theme and app listed with its update status and whether it is still supported',
  'PHP and server versions checked against current WordPress recommendations',
  'Malware scan and a review of admin users and file changes',
  'Forms, bookings, checkout and integrations tested end to end',
  'Speed, accessibility and technical SEO baseline recorded',
  'Custom code and anything unusual documented in plain English',
  'A written report with what is urgent, what can wait and what we recommend',
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/websites-for-tradies', t: 'Websites for tradies', d: 'Websites for plumbers, sparkies and builders that win quote requests, with care after launch.' },
  { href: '/au/dental-website-design', t: 'Dental website design', d: 'Practice websites and SEO built for new patient bookings, looked after once they are live.' },
  { href: '/au/shopify-development', t: 'Shopify development', d: 'Shopify and Shopify Plus stores built and supported by a registered Shopify Partner.' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development', d: 'Online stores on WooCommerce, Shopify and more, designed around how you sell.' },
  { href: '/au/seo', t: 'SEO for Australian businesses', d: 'When your maintained site is ready to rank for more searches, this is the next step.' },
  { href: '/au/ecommerce-seo', t: 'Ecommerce SEO', d: 'Category, product and technical SEO for online stores on Shopify and WooCommerce.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get found when Australians ask ChatGPT, Perplexity or Google AI for a business like yours.' },
  { href: '/au/ai-customer-service', t: 'AI customer service', d: 'AI that answers customer questions on your website, chat and email, supported after launch.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ─────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Website Maintenance Services Australia',
      serviceType: 'Website maintenance, WordPress maintenance, Shopify store care and website care plans',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Website maintenance services and care plans for Australian businesses on WordPress, WooCommerce and Shopify: updates tested on a staging copy, off-site backups, uptime and security monitoring, fixes, content changes, speed and technical SEO checks, hacked site clean-up and takeover of sites built by other agencies. Accounts stay in the client’s name.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
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
      datePublished: '2026-09-26',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
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
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'Australian website maintenance service providers',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
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
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Website maintenance and care plans for Australian WordPress, WooCommerce and Shopify sites. Tested updates, off-site backups, security monitoring, fixes and changes, with every account in your name.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/website-maintenance/website-maintenance-og.webp', width: 1200, height: 630, alt: 'Website maintenance Australia: a Sydney homewares shop owner packs an order while her online shop runs on the laptop beside her' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

export default function WebsiteMaintenanceAUPage() {
  return (
    <>
      <script id="ld-au-website-maintenance" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative', paddingTop: 36 }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Website Maintenance Australia</span>
                  <span className="chip">WordPress &amp; Shopify Care Plans</span>
                  <span className="chip">Your Accounts, Your Site</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.1rem, 3.9vw, 3.05rem)' }}>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet provides website maintenance services for Australian businesses on WordPress, WooCommerce
                  and Shopify. We test every update on a private copy of your site before it goes live, keep backups off
                  the server, watch for downtime and attacks, fix what breaks, and make the changes you need each month.
                  Every account stays in your name, including sites another agency built.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />26 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_website_maintenance_hero" submitLabel="Get a free site check" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/website-maintenance/website-maintenance-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Over the shoulder of a Sydney homewares shop owner wrapping a ceramic vase for an order, with her online shop open on the laptop beside her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What a care plan does every month</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Updates tested before going live</div><div className="scorecard-note">on a private staging copy</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Staging</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Backups kept off the server</div><div className="scorecard-note">and a restore we have tested</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Off-site</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Domain, hosting and logins</div><div className="scorecard-note">always in your business name</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What are website maintenance services, and does my site need them?</span>
              <p>
                Website maintenance services keep a live website safe, working and current. They cover software
                updates tested before going live, off-site backups, uptime and security monitoring, fixes, small content
                changes, and speed and SEO checks. Any Australian business whose site brings in enquiries, bookings or
                sales needs them, usually monthly.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms we use a lot</span>
              <p>
                <b>Staging</b> is a private copy of your site where we test changes before customers see them. A
                <b> plugin</b> is an add-on that gives WordPress a feature, such as a booking form. <b>Uptime
                monitoring</b> checks every few minutes that your site is online and alerts us if it is not. A
                <b> care plan</b> is a monthly agreement where one provider takes responsibility for all of the above.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most websites do not fail in one dramatic moment. They drift. A plugin stops being supported, the server
              runs an old version of PHP (the language WordPress is written in), a contact form quietly stops sending,
              the SSL certificate lapses, and speed slips a little every month. Website maintenance is the habit that
              stops that drift, and a website care plan puts one accountable team in charge of it.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every account', s: 'About FactoryJet', u: '/about' },
                { v: 'PHP 8.3', t: 'or greater is what WordPress recommends; older versions have reached end of life', s: 'WordPress.org, requirements', u: SRC_WP_REQ },
                { v: 'Quarterly', t: 'is how often Shopify releases a new API version that custom apps must keep up with', s: 'Shopify, API versioning', u: SRC_SHOPIFY_API },
                { v: 'Notify', t: 'affected people and the OAIC if a covered business has a breach likely to cause serious harm', s: 'OAIC, data breaches', u: SRC_OAIC_NDB },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? extLink : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHAT'S INCLUDED (listicle) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What is included</span>
              <h2>10 things proper website maintenance services cover</h2>
              <p className="lead mt-4">
                Plenty of web maintenance packages in Australia stop at &ldquo;we click update.&rdquo; This is the full list we
                work to. If a provider you are comparing skips several of these, ask why.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <ol className="scope-list num-list">
                <li><b>Tested software updates.</b> WordPress core, themes and plugins, or Shopify theme and app changes, applied on staging first and then on the live site.</li>
                <li><b>Server and PHP upgrades.</b> Keeping the server on a supported PHP version, planned so nothing breaks on the day.</li>
                <li><b>Off-site backups you can restore.</b> Daily backups stored away from the server, with a restore actually tested, not just assumed.</li>
                <li><b>Uptime monitoring.</b> A check every few minutes that the site is online, with alerts to us, not a customer email to you.</li>
                <li><b>Security monitoring.</b> Malware scans, login protection, removal of old admin users, and a watch on file changes.</li>
                <li><b>Form, booking and checkout testing.</b> Proof that enquiries arrive and orders go through after every update.</li>
                <li><b>Fixes.</b> When something breaks, a named person finds the cause and fixes it, then tells you what happened.</li>
                <li><b>Content and design changes.</b> New pages, staff updates, prices, images and banners, so the site stays accurate.</li>
                <li><b>Speed and technical SEO checks.</b> Page speed, broken links, redirects, structured data and search console errors.</li>
                <li><b>A plain-English monthly report.</b> What we updated, what we fixed, what we found and what needs your decision.</li>
              </ol>
              <div className="card card-top-orange">
                <span className="eyebrow">Also covered, and often missed</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">SSL and domain renewals</div><div className="scorecard-note">no surprise expiry warnings</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Checked</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Plugin and app licences</div><div className="scorecard-note">in your name, kept current</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Checked</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Unused plugins and apps</div><div className="scorecard-note">removed to cut risk and load time</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Removed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Accessibility basics</div><div className="scorecard-note">contrast, alt text, keyboard use</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Reviewed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">AI search readiness</div><div className="scorecard-note">structured data and crawler access</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Kept working</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. PLAN SHAPES + FIT CHECK ═══ */}
        <section className="sec-lg" id="care-plans">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Website care plans</span>
              <h2>Three levels of website care, described by scope, not a price list</h2>
              <p className="lead mt-4">
                Every site is different, so we do not publish a rate card. We check your site first, then quote a fixed
                monthly scope. These are the three shapes a care plan usually takes. Response times and the amount of
                change work included are agreed in writing for your site.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {PLAN_SHAPES.map((p) => (
                <li key={p.name} className="svc-card">
                  <span className="eyebrow">{p.fit}</span>
                  <h3 style={{ marginTop: 8 }}>{p.name}</h3>
                  <ul className="scope-list mt-4">
                    {p.items.map((it) => (<li key={it}>{it}</li>))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="col-6040 mt-12">
              <div>
                <span className="eyebrow">Which care plan fits you?</span>
                <h3 style={{ fontSize: 22, marginTop: 8 }}>A 30-second check</h3>
                <p className="mt-4" style={{ maxWidth: 560 }}>
                  Tap the line that sounds most like your website. The answer is honest, even when the answer is that
                  you can do it yourself.
                </p>
                <div className="card mt-6" style={{ padding: '4px 20px' }}>
                  {FIT_CHECK.map((f) => (
                    <details key={f.q}>
                      <summary style={{ gap: 16, textAlign: 'left' }}>{f.q}</summary>
                      <div style={{ paddingBottom: 18 }}>
                        <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '3px 9px', letterSpacing: '.06em' }}>{f.verdict}</span>
                        <p style={{ marginTop: 10 }}>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/website-maintenance/website-maintenance-report.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an Adelaide tradesman sitting in the side door of his work van, reading his monthly website report on a tablet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The monthly report is written to be read in two minutes between jobs: what we updated, what we
                    fixed, whether enquiries are arriving, and anything that needs your decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. HOW WE UPDATE SAFELY ═══ */}
        <section className="sec-lg dot-grid" id="how-we-update">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we work</span>
                <h2>How we update your website without breaking it</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The most common way a small business website breaks is an update applied straight to the live site.
                  WordPress website maintenance done properly follows the same five steps every time. Open any step to
                  see what happens in it.
                </p>
                <div className="card mt-6" style={{ padding: '4px 20px' }}>
                  {UPDATE_STEPS.map((s) => (
                    <details key={s.n}>
                      <summary style={{ gap: 16, textAlign: 'left' }}>
                        <span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 12 }}>{s.n}</span>{s.t}</span>
                      </summary>
                      <p style={{ paddingBottom: 18 }}>{s.d}</p>
                    </details>
                  ))}
                </div>
                <p style={srcNote}>
                  Why PHP matters: WordPress.org recommends PHP 8.3 or greater and warns that older versions have reached
                  end of life and may expose a site to security vulnerabilities.{' '}
                  <a href={SRC_WP_REQ} {...extLink} style={srcLink}>WordPress.org, requirements</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/website-maintenance/website-maintenance-staging.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of two web developers in a Melbourne studio comparing the staging and live versions of a client website side by side on one monitor" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Staging and live, side by side. If the updated copy looks or behaves differently from the live site,
                    we find out why before any customer does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. PLATFORM TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">By platform</span>
            <h2 style={{ maxWidth: 820 }}>What website maintenance means on WordPress, WooCommerce, Shopify and custom sites</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              &ldquo;Website maintenance&rdquo; covers very different work depending on what your site runs on. Shopify
              looks after much of the platform for you. A self-hosted WordPress site puts all of it on you or your
              provider.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>WordPress site</th>
                    <th>WooCommerce store</th>
                    <th>Shopify store</th>
                    <th>Custom-built site</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Hosting and server</td><td>Your host, your responsibility</td><td>Your host, needs more resources</td><td><span className="yes">Included by Shopify</span></td><td>Your host or cloud provider</td></tr>
                  <tr><td className="feat">Core platform updates</td><td>WordPress core, tested on staging</td><td>WordPress plus WooCommerce</td><td><span className="yes">Handled by Shopify</span></td><td>Framework and libraries</td></tr>
                  <tr><td className="feat">Add-ons to keep current</td><td>Plugins and theme</td><td>Extensions, payment gateways</td><td>Apps and theme code</td><td>Packages and dependencies</td></tr>
                  <tr><td className="feat">Security patching</td><td><span className="partial">On you or your provider</span></td><td><span className="partial">On you, plus payment risk</span></td><td><span className="yes">Platform patched by Shopify</span></td><td><span className="partial">On you or your provider</span></td></tr>
                  <tr><td className="feat">Backups</td><td>Files and database, off-site</td><td>Plus orders and customers</td><td>Theme and product data exports</td><td>Code, database and media</td></tr>
                  <tr><td className="feat">Integrations to watch</td><td>Forms, CRM, bookings</td><td>Xero or MYOB, stock, shipping</td><td>Apps, Xero, 3PL, API versions</td><td>Everything custom</td></tr>
                  <tr><td className="feat">Biggest risk if ignored</td><td><span className="no">Hacked via old plugin</span></td><td><span className="no">Broken checkout</span></td><td><span className="no">App conflicts, slow theme</span></td><td><span className="no">Unsupported code</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Shopify releases a new API version every three months and supports each stable version for at least twelve
              months, so custom apps and integrations need planned updates.{' '}
              <a href={SRC_SHOPIFY_API} {...extLink} style={srcLink}>Shopify, API versioning</a>. We are a registered
              Shopify Partner. For store builds, see <a href="/au/shopify-development" style={srcLink}>Shopify development in Australia</a>.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure what state your website is in?'}
          sub={'Send us your web address. On a short call with the founder, we will tell you what we would check first, whether your updates, backups and security are in order, and whether you need a care plan at all.'}
          label={'Get a free site check'}
        />

        {/* ═══ 8. TAKEOVER ═══ */}
        <section className="sec-lg dot-grid" id="takeover">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Built by someone else?</span>
                <h2>Taking over a website another agency or freelancer built</h2>
                <div className="stack mt-6">
                  <p>
                    Many of the sites we look after were built by someone else. The agency closed, the freelancer moved
                    on, or support just stopped answering. That is fine. You do not need a new website to get proper
                    website support services. You need someone to take stock of what you have.
                  </p>
                  <p>
                    Every takeover starts with an audit. Before we change anything, we work out who owns what, what the
                    site runs on, what is out of date, and what could break. You get a plain-English report and a
                    recommendation, and only then do you choose a care plan.
                  </p>
                </div>
                <span className="eyebrow" style={{ display: 'block', marginTop: 28 }}>The takeover audit, in 10 checks</span>
                <ol className="scope-list num-list mt-4">
                  {TAKEOVER_CHECKS.map((c) => (<li key={c}>{c}</li>))}
                </ol>
              </div>
              <div className="stack">
                <figure className="card" style={{ padding: 8, margin: 0 }}>
                  <img src="/images/au/website-maintenance/website-maintenance-takeover.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Brisbane physiotherapy clinic owner passes a folder of website logins and notes across the table to a FactoryJet web engineer at the start of a site takeover" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                  <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                    A takeover starts with a handover of whatever you have: logins, invoices from your host, emails
                    from the old developer. We turn it into a clean, documented list.
                  </figcaption>
                </figure>
                <div className="card card-top-orange">
                  <span className="eyebrow">What you should own, always</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Domain name</div><div className="scorecard-note">registrar account in your business name</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Hosting or Shopify account</div><div className="scorecard-note">billing and owner login</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Analytics and Search Console</div><div className="scorecard-note">history you cannot recreate</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Premium theme and plugin licences</div><div className="scorecard-note">so updates keep coming</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Our access</div><div className="scorecard-note">named logins you can remove</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Revocable</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. SECURITY + PRIVACY ACT ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Security, in plain English</span>
                <h2>What happens if your website gets hacked, and what the Privacy Act expects</h2>
                <div className="stack mt-6">
                  <p>
                    Most small business sites are not hacked by someone targeting them. They are found by automated
                    tools scanning the internet for a known weakness, usually an old plugin, an abandoned theme or a
                    weak admin password. That is why tested updates and removing what you do not use matter so much.
                  </p>
                  <p>
                    <b>If it happens,</b> we take the site into maintenance mode if needed, restore a clean backup where
                    one exists, find and close the way in, remove malicious code, reset passwords and keys, and ask
                    Google to review the site if it has been flagged. Then we tell you what happened, in writing.
                  </p>
                  <p>
                    <b>Personal information.</b> If your site holds customer details, such as enquiry form entries,
                    accounts or orders, a hack can be a data breach. The OAIC says any organisation covered by the
                    Privacy Act 1988 must notify affected individuals and the OAIC when a data breach is likely to
                    result in serious harm. Many small businesses under a turnover threshold are exempt, but some are
                    covered whatever their size, including health service providers, so a small clinic or dental
                    practice is covered.
                  </p>
                  <p>
                    <b>Accessibility.</b> Maintenance is also when accessibility slips or improves. We check new content
                    against the basics of WCAG 2.2, the current version of the web accessibility guidelines, such as
                    colour contrast, image descriptions and keyboard use.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_OAIC_NDB} {...extLink} style={srcLink}>OAIC, Notifiable Data Breaches scheme</a>;{' '}
                  <a href={SRC_OAIC_SMALL} {...extLink} style={srcLink}>OAIC, small business</a>;{' '}
                  <a href={SRC_WCAG} {...extLink} style={srcLink}>W3C, WCAG 2 overview</a>. This is general information, not legal advice.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/website-maintenance/website-maintenance-hacked.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Perth practice manager and a web engineer at her desk, relieved as the security checks on her cleaned website all come back clear" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    After a clean-up, we walk you through what happened, what we changed, and what stops it happening
                    again. No jargon, no blame.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Tested updates, off-site backups, login protection, malware scanning, removal of unused plugins and old users, and a documented plan for what happens if something goes wrong.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You stay responsible for the personal information your site collects. We make that easier by keeping forms lean, storing less, and documenting where data goes.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not decide whether a breach is notifiable. If personal information may be involved, we give you the facts to take to your adviser quickly.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 10. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 820 }}>Do it yourself vs freelancer vs hosting company vs an agency website care plan</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Four common ways Australian businesses keep a website running. Each is the right answer for someone. This
              compares them on what changes day to day, not on price.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Agency care plan (FactoryJet)</th>
                    <th>Freelancer</th>
                    <th>Hosting company</th>
                    <th>Do it yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Updates tested before going live</td><td className="fj"><span className="yes">Yes, on staging</span></td><td><span className="partial">Depends on the person</span></td><td><span className="partial">Often automatic, untested</span></td><td><span className="partial">If you set up staging</span></td></tr>
                  <tr><td className="feat">Fixes when a plugin or app breaks</td><td className="fj"><span className="yes">Included in scope</span></td><td><span className="yes">Usually, when available</span></td><td><span className="no">Rarely, server only</span></td><td><span className="partial">If you can find the cause</span></td></tr>
                  <tr><td className="feat">Cover when someone is away</td><td className="fj"><span className="yes">A team, not one person</span></td><td><span className="no">One person</span></td><td><span className="yes">Support desk</span></td><td><span className="no">Just you</span></td></tr>
                  <tr><td className="feat">Content and design changes</td><td className="fj"><span className="yes">Agreed amount each month</span></td><td><span className="yes">Usually, by the hour</span></td><td><span className="no">No</span></td><td><span className="yes">Yes, your time</span></td></tr>
                  <tr><td className="feat">Checks that forms and checkout work</td><td className="fj"><span className="yes">After every update</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">No</span></td><td><span className="partial">If you remember</span></td></tr>
                  <tr><td className="feat">Speed and technical SEO</td><td className="fj"><span className="yes">Checked monthly</span></td><td><span className="partial">Depends on skills</span></td><td><span className="partial">Server speed only</span></td><td><span className="partial">With tools and time</span></td></tr>
                  <tr><td className="feat">Written monthly report</td><td className="fj"><span className="yes">Plain English</span></td><td><span className="partial">Sometimes</span></td><td><span className="partial">Automated emails</span></td><td>Not needed</td></tr>
                  <tr><td className="feat">Accounts in your name</td><td className="fj"><span className="yes">Always</span></td><td><span className="partial">Check the contract</span></td><td><span className="yes">Usually</span></td><td><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Best for</td><td className="fj">Sites that earn money every week</td><td>Simple sites, trusted person</td><td>Server uptime only</td><td>Small sites, confident owners</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 11. COST DRIVERS + DEMAND ═══ */}
        <section className="sec-lg" id="cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What it costs</span>
                <h2>What drives the cost of website maintenance in Australia</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We do not publish a price list, because two sites that look the same can need very different care. We
                  check your site, then quote a fixed monthly scope. These are the things that move it.
                </p>
                <ol className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Platform.</b> Shopify takes hosting and platform security off the list. Self-hosted WordPress and WooCommerce put them on it.</li>
                  <li><b>Plugins, apps and integrations.</b> Every add-on is something to update and test. Integrations with Xero, MYOB, stock or booking systems add more.</li>
                  <li><b>Payments and personal data.</b> Sites that take orders or hold customer accounts need more testing and closer security.</li>
                  <li><b>Change work each month.</b> Update-only plans cost less than plans with regular page, product or design changes.</li>
                  <li><b>Response time.</b> How quickly you need a first response when the site is down, and whether that includes weekends.</li>
                  <li><b>Hosting.</b> Whether hosting is part of the plan or stays with your own provider.</li>
                  <li><b>Starting condition.</b> A tidy, current site costs less to look after than one with years of skipped updates. The first month often includes clean-up.</li>
                </ol>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  Want typical Australian price ranges from independent sources, including GST treatment? Read our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide for Australia in 2026</a>. Those are
                  market ranges, not our prices.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Get a free site check" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Australia · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'website maintenance', v: '480', w: '100%', kd: 'The broad term' },
                      { kw: 'website maintenance services', v: '320', w: '67%', kd: 'Looking for a provider' },
                      { kw: 'wordpress maintenance services', v: '320', w: '67%', kd: 'WordPress sites' },
                      { kw: 'web maintenance packages', v: '210', w: '44%', kd: 'Comparing plans' },
                      { kw: 'wordpress website maintenance', v: '140', w: '29%', kd: 'Owners of WordPress sites' },
                      { kw: 'website care plan', v: '140', w: '29%', kd: 'Ongoing care' },
                      { kw: 'website maintenance australia', v: '30', w: '6%', kd: 'Australia specific' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. INDUSTRIES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who we look after</span>
              <h2>Website management for tradies, clinics, online stores and professional firms</h2>
              <p className="lead mt-4">
                The same care, shaped around what your website has to do for your business every day.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Tradies and home services</h3><p className="mt-4">Quote forms and call buttons tested after every update, service areas and photos kept current, and a site that loads fast on a phone at a job site. See our <a href="/au/websites-for-tradies">websites for tradies</a>.</p></li>
              <li className="svc-card"><h3>Dental and allied health</h3><p className="mt-4">Online booking links checked, practitioner and fee pages kept accurate, and extra care with patient data because health providers are covered by the Privacy Act. See <a href="/au/dental-website-design">dental website design</a>.</p></li>
              <li className="svc-card"><h3>Online stores</h3><p className="mt-4">Checkout, payment, shipping and stock sync tested after updates, with extra care before end of financial year sales, Black Friday and Christmas. See <a href="/au/ecommerce-development">ecommerce development</a>.</p></li>
              <li className="svc-card"><h3>Professional services</h3><p className="mt-4">Accountants, lawyers and consultants: enquiry forms that always arrive, team pages kept current, and security taken seriously because clients trust you with their details.</p></li>
              <li className="svc-card"><h3>Hospitality and venues</h3><p className="mt-4">Menus, opening hours, function packs and booking links updated quickly, so the website never tells customers something that stopped being true last month.</p></li>
              <li className="svc-card"><h3>Membership and community groups</h3><p className="mt-4">Member logins, event pages and payment forms kept working, with volunteers able to edit content safely without breaking the site.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. PROVIDER LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>Australian website maintenance providers worth knowing</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These Australian agencies rank for website maintenance services
                searches. Each note is based on what the company says on its own maintenance page. None of them lists
                Shopify store care on those pages, which is one reason we do.
              </p>
            </div>
            <ul className="col-2 mt-10" style={{ gap: 16 }}>
              {PROVIDERS.map((p, i) => (
                <li key={p.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{p.name}{p.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p style={{ marginTop: 6 }}>{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Providers named from live Australian search results for website maintenance queries, September 2026. Notes reflect each company’s own maintenance page on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="card mt-8" style={{ maxWidth: 900 }}>
              <span className="eyebrow">Questions to ask any provider, including us</span>
              <ol className="scope-list num-list mt-4">
                <li><b>Do you test updates before they reach my live site?</b> Ask what happens when a plugin or app update breaks something.</li>
                <li><b>Where are backups kept, and when did you last restore one?</b> A backup nobody has restored is a hope, not a plan.</li>
                <li><b>How fast do you respond when the site is down, including weekends?</b> Get it in writing.</li>
                <li><b>What changes are included each month?</b> Know what counts as a change and what gets quoted separately.</li>
                <li><b>Whose name are the domain, hosting and licences in?</b> The only good answer is yours.</li>
                <li><b>What do I get back if I leave?</b> A full backup, every login and notes on anything custom.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ 14. SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Beyond maintenance</span>
              <h2>The rest of what we build and support for Australian businesses</h2>
              <p className="lead mt-4">
                A well-maintained website is the base everything else sits on. These are the natural next steps, built
                by the same team.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {SIBLINGS.map((s) => (
                <li key={s.href} className="svc-card" style={{ padding: 0 }}>
                  <a href={s.href} style={{ display: 'block', padding: 24, height: '100%' }}>
                    <h3>{s.t} <span style={{ color: T.small }} aria-hidden="true">→</span></h3>
                    <p className="mt-4">{s.d}</p>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              Further reading: <a href="/blog/importance-of-website-maintenance-seo">why website maintenance matters for SEO</a>,{' '}
              <a href="/blog/wordpress-security-audit-guide">our WordPress security audit guide</a>, and{' '}
              <a href="/blog/best-wordpress-development-companies-australia-2026">the best WordPress development companies in Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ 15. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <style>{'.au-svc .faq-item summary::after{content:none;display:none}'}</style>
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FAQ</span>
              <h2>Website maintenance questions Australian business owners actually ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
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

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Hand over the updates, the backups and the worry</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your website,
              what it runs on, what state it is in, and which level of care fits. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get a free site check" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See FactoryJet Australia</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
