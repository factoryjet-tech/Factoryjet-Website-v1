/**
 * Website Maintenance hub FAQ (/services/website-maintenance): the single source for
 * the visible accordion in WebsiteMaintenanceSections.tsx AND the FAQPage JSON-LD in
 * src/app/services/website-maintenance/page.tsx. Never duplicate these strings elsewhere.
 *
 * Questions use exact Google People Also Ask wording where DataForSEO returned it (US,
 * location 2840): the 2026-09-26 SERP pull in pipeline/research/data/us-opps-2026-09-26/
 * serps.json + extra.json, and the extra PAA pass in website_maintenance_paa.json
 * (script: pipeline/research/dfs_us_website_maintenance_paa_2026_09_26.py).
 *
 * No FactoryJet prices, hours or response times: support plan numbers are unconfirmed.
 * Cost answers explain the drivers and quote only sourced third-party ranges.
 * Every external figure was fetch-verified on 2026-09-26; the URL sits in `source`.
 */

export const WM_FAQ_CATEGORIES = [
  { id: 'faq-basics', key: 'basics', label: 'Website maintenance basics' },
  { id: 'faq-cost', key: 'cost', label: 'Cost and hosting' },
  { id: 'faq-platforms', key: 'platforms', label: 'WordPress, Shopify and Webflow' },
  { id: 'faq-risk', key: 'risk', label: 'Security, ADA and search' },
  { id: 'faq-working', key: 'working', label: 'Hiring and switching providers' },
] as const;

export interface WmFaqLink { label: string; url: string }

export interface WmFaq {
  id: string;
  category: (typeof WM_FAQ_CATEGORIES)[number]['key'];
  question: string;
  answer: string;
  source?: WmFaqLink;
  link?: WmFaqLink;
}

const SRC_GODADDY = 'https://www.godaddy.com/resources/skills/website-maintenance-cost';
const SRC_NETSOL = 'https://www.networksolutions.com/blog/website-maintenance-cost/';
const SRC_OUTERBOX = 'https://www.outerboxdesign.com/digital-marketing-services/web-development/maintenance/';
const SRC_WIX = 'https://www.wix.com/blog/website-maintenance-cost';
const SRC_WP_REQ = 'https://wordpress.org/about/requirements/';
const SRC_WP_UPDATE = 'https://wordpress.org/documentation/article/updating-wordpress/';
const SRC_SHOPIFY_API = 'https://shopify.dev/docs/api/usage/versioning';
const SRC_FTC = 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business';
const SRC_ADA = 'https://www.ada.gov/resources/web-guidance/';
const SRC_WEBAIM = 'https://webaim.org/projects/million/';
const SRC_PATCHSTACK = 'https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/';

const COST_GUIDE = '/blog/website-running-cost-per-month-2026';

export const WM_FAQS: WmFaq[] = [
  // ── Basics ──
  { id: 'Q01', category: 'basics', question: 'What are website maintenance services?',
    answer: 'Website maintenance services are the ongoing work that keeps a live website safe, working and current: software updates tested before they go live, backups stored off the server, uptime and security monitoring, fixes when something breaks, small content changes, and checks on speed, accessibility and search. A good provider also sends a plain-English monthly report of what was done and what needs your decision.' },
  { id: 'Q02', category: 'basics', question: 'Do websites need monthly maintenance?',
    answer: 'Most business websites do. A WordPress site gets core, theme and plugin updates every few weeks, and each one either closes a security hole or can break a form if applied blindly. Even on Shopify, your apps, theme code and integrations keep changing. A monthly rhythm catches small problems before a customer does. Unchecked sites rarely fail loudly. They fail quietly, one broken form at a time.' },
  { id: 'Q03', category: 'basics', question: "What's included in website maintenance?",
    answer: 'A complete plan covers six things: updates tested on a staging copy, off-site backups with a tested restore, uptime and security monitoring, fixes for anything that breaks, a set amount of content changes, and checks on speed, accessibility, SEO and forms. Hosting, domains and paid plugin licenses may be bundled or billed separately. Get the list in writing, because "maintenance" means very different things from one provider to the next.' },
  { id: 'Q04', category: 'basics', question: 'What maintenance does a website need?',
    answer: 'Weekly: backups and uptime checks. Monthly: updates tested on staging, a security scan, a test of every form and checkout, broken link and 404 checks, and a look at speed and Search Console errors. Quarterly: remove old user accounts and unused plugins, check accessibility, and confirm SSL, domain and license renewals. Yearly: review hosting, the PHP version, and whether the design still fits the business.' },
  { id: 'Q05', category: 'basics', question: 'Can I hire someone to manage my website?',
    answer: 'Yes. You can hire a freelancer, an agency or a website management service, monthly or job by job. Before you do, agree in writing what is included, how fast they respond when the site is down, how they get access (their own login, never your password), where backups live, and how you get everything back if you leave. Good website management makes you less dependent on one person, not more.' },

  // ── Cost & hosting ──
  { id: 'Q06', category: 'cost', question: 'How much should I pay someone to maintain my website?',
    answer: 'Pay for scope, not for a label. Published US ranges run from about $5 a month for a basic site on a builder to several thousand a month for large, busy sites, according to GoDaddy. Agency retainers sit higher because they include a developer: OuterBox, an Ohio agency, publishes typical budgets of $100 to $2,500 a month. The cheap end usually covers software, not a person who tests updates. We quote a fixed monthly scope after a free site check.',
    source: { label: 'GoDaddy: website maintenance cost', url: SRC_GODADDY } },
  { id: 'Q07', category: 'cost', question: 'How much does a website maintenance cost?',
    answer: 'It depends on the platform, how many plugins and integrations the site runs, whether it takes payments, how many changes you want each month, and how fast you need a response. Network Solutions puts a basic site at around $5 to $25 a month and complex sites with online stores at $1,500 or more. Those low figures mostly cover hosting and tools. Labor, meaning a person who tests updates and fixes things, is the part that varies most.',
    source: { label: 'Network Solutions: website maintenance cost', url: SRC_NETSOL },
    link: { label: 'Our guide to monthly website running costs', url: COST_GUIDE } },
  { id: 'Q08', category: 'cost', question: 'How much do website maintenance packages typically cost?',
    answer: 'Packages differ more in what they include than in price. Before comparing numbers, check five things: are updates tested on staging first, how often are backups taken and restore-tested, are content changes included, what is the written response time when the site is down, and are hosting and licenses included. A cheaper package that skips staging often costs more the first time an update breaks checkout.',
    link: { label: 'Monthly website running costs', url: COST_GUIDE } },
  { id: 'Q09', category: 'cost', question: 'How much do website management services typically cost?',
    answer: 'Website management usually means maintenance plus regular changes: new pages, product updates, landing pages and reporting. That makes it a small retainer rather than a software fee, priced by the scope your team needs. OuterBox, for example, publishes a $200 hourly rate next to its $100 to $2,500 monthly budget range. We scope management by the work you actually send us, not a padded hour bank.',
    source: { label: 'OuterBox: website maintenance services', url: SRC_OUTERBOX } },
  { id: 'Q10', category: 'cost', question: 'How much should I pay someone to host my website?',
    answer: 'Hosting cost depends on the type. Wix puts shared hosting at around $5 a month and a dedicated server at hundreds of dollars a month, with managed WordPress hosting in between, usually adding daily backups and staging. Shopify, Webflow and Wix include hosting in the plan. WordPress and custom sites need their own host. Compare renewal prices, and keep the hosting account in your company name.',
    source: { label: 'Wix: website maintenance cost', url: SRC_WIX } },

  // ── Platforms ──
  { id: 'Q11', category: 'platforms', question: 'How much does WordPress maintenance cost?',
    answer: 'It is driven by the number of plugins, whether WooCommerce, bookings or memberships are installed, how custom the theme is, how old the PHP version is, and whether hosting and changes are included. A tidy site on current PHP with a dozen well-kept plugins costs far less to look after than one running forty plugins on a neglected theme. We audit first, then quote a fixed monthly scope.',
    link: { label: 'Monthly website running costs', url: COST_GUIDE } },
  { id: 'Q12', category: 'platforms', question: 'What are the best website maintenance services for WordPress?',
    answer: 'The best WordPress maintenance services share five habits: they test updates on staging before touching the live site, keep backups off the server and prove a restore works, put their response time in writing, report monthly in plain English, and keep every account in your name. Ask any provider what they do when a plugin update breaks the site. The answer tells you most of what you need.' },
  { id: 'Q13', category: 'platforms', question: 'Is WordPress outdated in 2026?',
    answer: 'No. WordPress is still actively developed and widely used. What goes out of date is a particular install: old PHP, abandoned plugins and a theme nobody updates. WordPress.org recommends PHP 8.3 or newer and warns that older versions have reached end of life and may expose a site to security holes. A maintained WordPress site is a sound choice for most businesses. An unmaintained one is a liability.',
    source: { label: 'WordPress.org: requirements', url: SRC_WP_REQ } },
  { id: 'Q14', category: 'platforms', question: 'What are WordPress care plans and what do they do?',
    answer: 'A WordPress care plan is a monthly agreement where one provider keeps a WordPress site updated, backed up, secure and working. It covers updates tested on staging, PHP upgrades, off-site backups, malware scans, uptime monitoring, form and link checks, and a set amount of changes. A good plan also removes plugins you no longer need, one of the quietest ways to cut security risk.' },
  { id: 'Q15', category: 'platforms', question: 'How do I get my WordPress site out of maintenance mode?',
    answer: 'WordPress puts a site into maintenance mode by creating a file called .maintenance in the site root while an update runs. If an update stalls, the site can get stuck on the "briefly unavailable" message. The fix in the WordPress documentation is to delete that .maintenance file through your host’s file manager or FTP. Then reload the admin area and check whether the update finished. If it did not, restore from the backup you took first.',
    source: { label: 'WordPress.org: updating WordPress', url: SRC_WP_UPDATE } },
  { id: 'Q16', category: 'platforms', question: 'Do you maintain Shopify stores as well as WordPress sites?',
    answer: 'Yes. On Shopify the platform handles hosting, security patches and checkout, so maintenance covers your theme code, apps, integrations, speed and structured data. Shopify releases a new API version every three months and supports each one for at least 12 months, so custom apps need planned updates. We are a registered Shopify Partner, and our Shopify maintenance page covers store retainers in detail.',
    source: { label: 'Shopify: API versioning', url: SRC_SHOPIFY_API },
    link: { label: 'Shopify maintenance services', url: '/services/shopify-maintenance-services' } },
  { id: 'Q17', category: 'platforms', question: 'Do you maintain Webflow and custom-coded websites?',
    answer: 'Yes. Webflow handles hosting and platform updates, so the work there is CMS clean-up, form and integration checks, speed, accessibility and content changes. Custom sites on Next.js or another framework need dependency updates, build and hosting checks, and someone who can read the code. We look after both, including sites we did not build, starting with a takeover audit.',
    link: { label: 'Webflow development', url: '/services/webflow-development' } },

  // ── Security, ADA and search ──
  { id: 'Q18', category: 'risk', question: 'What happens if my website gets hacked?',
    answer: 'We take the site offline if needed, restore a clean backup, find and close the way in (often an old plugin or weak login), remove the malicious code, reset passwords and keys, and ask Google to review the site if it was flagged. If customer data may be exposed, get legal advice fast: the FTC notes every state, plus DC, Puerto Rico and the Virgin Islands, requires breach notification.',
    source: { label: 'FTC: data breach response guide', url: SRC_FTC } },
  { id: 'Q19', category: 'risk', question: 'Does my website need to be ADA compliant?',
    answer: 'If you are a business open to the public, very likely yes. The US Department of Justice says the ADA applies to businesses open to the public, including what they offer on the web, and that businesses have flexibility in how they comply. For state and local governments, a separate DOJ rule sets WCAG 2.1 level AA as the standard. For private businesses, WCAG 2.1 or 2.2 AA is the practical benchmark. For your own legal duty, ask a lawyer.',
    source: { label: 'DOJ: web accessibility and the ADA', url: SRC_ADA } },
  { id: 'Q20', category: 'risk', question: 'What are common WCAG violations?',
    answer: 'WebAIM’s 2026 scan of the top one million home pages found detectable WCAG failures on 95.9% of them. The six most common were low contrast text, images missing alt text, form fields without labels, empty links, empty buttons and a missing page language. WebAIM says those six make up 96% of all the errors it detected. Most take minutes to fix, which is why accessibility checks belong in routine maintenance, not a one-off audit.',
    source: { label: 'WebAIM Million 2026', url: SRC_WEBAIM } },
  { id: 'Q21', category: 'risk', question: 'Does website maintenance help SEO?',
    answer: 'It helps the technical side. A maintained site loads faster, stays online, has fewer broken links and 404 errors, keeps a valid SSL certificate, and keeps its structured data working after updates. Search engines notice all of that. Maintenance does not replace keyword research, new content or earning links. For that, our technical SEO and AI SEO services build on the same site.',
    link: { label: 'Technical SEO services', url: '/services/technical-seo' } },
  { id: 'Q22', category: 'risk', question: 'Does website maintenance help with AI search like ChatGPT?',
    answer: 'It protects the basics AI search depends on. An assistant can only cite a page its crawler can fetch, so we check that robots.txt names the retrieval bots instead of blocking them by accident, that key copy is in the first HTML response rather than loaded later by scripts, and that schema still matches the page after each update. Earning more citations is separate work, done by our AI SEO service.',
    link: { label: 'AI SEO services', url: '/services/ai-seo' } },
  { id: 'Q23', category: 'risk', question: 'Does website maintenance require downtime?',
    answer: 'Usually not. Updates are tested on a staging copy first, so the change on the live site takes seconds or minutes. Bigger jobs, like a PHP upgrade, a hosting move or a major WooCommerce update, are scheduled outside your busy hours and announced in advance. If something unexpected happens, we roll back to the backup taken just before the change.' },
  { id: 'Q24', category: 'risk', question: 'Why do WordPress sites get hacked so often?',
    answer: 'Mostly through plugins. Patchstack counted 7,966 new security holes in the WordPress ecosystem in 2024, and 96% of them were in plugins, 4% in themes, with only seven in WordPress core. It also found that 33% were not fixed by the time they were made public, often because the plugin was abandoned. That is why we audit every plugin, remove what you do not need, and replace plugins nobody maintains.',
    source: { label: 'Patchstack: State of WordPress Security', url: SRC_PATCHSTACK } },

  // ── Hiring & switching ──
  { id: 'Q25', category: 'working', question: 'Can you take over a website another agency built?',
    answer: 'Yes, and it is a large part of what we do. We start with a takeover audit: collect every login, confirm who owns the domain and hosting, take a full backup, list every plugin or app with its update status, check PHP and server versions, scan for malware, and document anything custom. You get a plain-English report before any monthly work begins.' },
  { id: 'Q26', category: 'working', question: 'What if my old developer will not hand over access?',
    answer: 'Start with what you control. The domain registrar, hosting and Shopify owner accounts should be in your business name, and providers can usually restore access with proof of identity. If an account sits in the developer’s name, ask for a transfer in writing. Once you hold the domain and hosting, we can take a backup and rebuild access to everything else, step by step with you.' },
  { id: 'Q27', category: 'working', question: 'Do I own my website if I stop paying for maintenance?',
    answer: 'With us, yes. The domain, hosting, store, analytics, Search Console and every license stay in your business name, and our team works through its own logins that you can remove at any time. When you leave, you get a full backup, a list of every plugin, app and integration, and notes on anything custom. No provider should hold a website hostage.' },
  { id: 'Q28', category: 'working', question: 'Can you work with our in-house marketing team?',
    answer: 'Yes. A common setup: your team edits pages, posts and products in the CMS, and we handle updates, security, backups, speed, integrations and anything that needs code. We agree who owns what, give your team the right access level, and review bigger changes before they go live, so a content edit cannot break a layout or a form.' },
  { id: 'Q29', category: 'working', question: 'What are common website red flags?',
    answer: 'On the site: a browser security warning, a "briefly unavailable" message, forms that stop sending leads, slow pages on a phone, plugin update badges piling up, and a hosting or domain account nobody can log into. On a maintenance provider: no staging tests, backups kept only on the same server, no written response time, and accounts held in their name instead of yours.' },
];
