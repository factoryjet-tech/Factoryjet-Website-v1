import type { Metadata } from 'next';
import Link from 'next/link';
import { websiteCostAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

/* ─────────────────────────────────────────────────────────────────────────────
   /website-cost, rebuilt 2026-08-13.

   Why: the 2026-08-12 perfect-page audit scored this page 63, the worst
   non-utility page on the site. 629 rendered words, 3 FAQs, 0 external
   citations, 0 comparison tables, 0 list items in main. The query behind it
   ("how much does a website cost") is one of the highest-intent things a buyer
   types before hiring anyone, so a thin page here is a lost lead, not a
   cosmetic problem.

   The hard constraint: this page may never state a price. No currency, no
   ranges, no "starting from". So the entire craft is answering the cost
   question honestly WITHOUT a number: what drives it, how the pricing models
   differ, what buyers forget to budget, and the checklist that makes two
   quotes actually comparable. Named engagement shapes carry no figures.

   External citations, each curl-verified 200 and the claim read on the page
   on 2026-08-13:
     - web.dev/articles/vitals (LCP 2.5s, INP 200ms, CLS 0.1 thresholds)
     - developers.google.com site-move-with-url-changes (URL mapping, redirect
       old URLs, self-referencing canonical, hreflang, internal links)
     - ada.gov/resources/web-guidance (businesses open to the public need
       accessible websites under the ADA)

   Schema: WebPage + speakable + Person, Service, Organization, FAQPage
   (derived from FAQ_ITEMS, never hand-duplicated), BreadcrumbList. Every
   const below reaches a <script type="application/ld+json"> tag.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'August 13, 2026';

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in 2026? | FactoryJet',
  description:
    'What really sets the price of a website: page count, design, content, integrations, platform and upkeep. Plus the questions that make two quotes comparable.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'How Much Does a Website Cost in 2026? | FactoryJet',
    description:
      'An honest guide to what drives the cost of a website build: page count, design depth, content readiness, integrations, platform choice, migration and upkeep.',
    url: 'https://factoryjet.com/website-cost',
    images: [{ url: 'https://factoryjet.com/images/us/hero-us.webp', width: 1200, height: 630, alt: 'What drives the cost of a website build, FactoryJet' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost in 2026? | FactoryJet',
    description: 'What drives the cost of a website: pages, design, content, integrations, platform, migration and upkeep.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: { canonical: 'https://factoryjet.com/website-cost', languages: websiteCostAlternates },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-13';

/* ── content ──────────────────────────────────────────────────────────────── */

const HERO_PROMISES = [
  'No price on this page, because a published number would be wrong for almost everyone reading it.',
  'What actually moves the number, in plain language, including the parts most quotes leave out.',
  'A checklist you can hand to any agency, including ones that are not us.',
];

const COST_DRIVERS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'How many templates, not how many pages',
    body: 'Twenty pages built from four layouts is a smaller job than twelve pages each designed on its own. Designers and developers build templates. Pages are just content poured into them. Count your genuinely different layouts before you ask anyone for a number.',
  },
  {
    title: 'How custom the design is',
    body: 'A stock theme buys speed and gives up fit. A design made for your buyers, your proof and your conversion path takes research, wireframes and revisions. Both are legitimate. They are not the same amount of work, so they are not the same price.',
  },
  {
    title: 'Whether your content is ready',
    body: 'Copy, product photos and team shots either come from you, or someone gets paid to create them. This is where projects stall more than anywhere else. A build with finished content moves faster and costs less than the same build waiting on a photographer.',
  },
  {
    title: 'How many systems it has to talk to',
    body: 'A form that emails you is simple. A form that writes to HubSpot, triggers a Klaviyo flow and pushes an order into NetSuite is three integrations, each needing testing and error handling. ERP integration, inventory sync and a customer portal are build lines of their own.',
  },
  {
    title: 'Which platform you build on',
    body: 'WordPress and WooCommerce carry no platform fee, but you own hosting, plugin licences and update work. Shopify, Shopify Plus and BigCommerce charge a subscription and handle the plumbing. Magento and Adobe Commerce suit large catalogs and cost more to run. A custom Next.js build on Cloudflare costs more up front and almost nothing to keep alive.',
  },
  {
    title: 'Whether you are moving an existing site',
    body: 'Replatforming is priced on data migration, not design. Products, customers, orders and years of old URLs all have to move without losing rankings. A redirect map, 301 redirects, canonical tags and hreflang are real work, and skipping them is how a launch quietly loses traffic.',
  },
  {
    title: 'Accessibility, decided at the start or paid for later',
    body: 'Building to WCAG from the first wireframe adds very little. An accessibility audit and remediation after launch costs far more, because contrast, focus order and markup all get rebuilt. Decide this before design starts, not after a complaint arrives.',
  },
  {
    title: 'Who keeps it running after launch',
    body: 'Hosting, domain renewal, platform fees, plugin renewals, security updates and content edits recur every year the site exists. A quote that covers only the build is not wrong, but it is only half the number you will actually live with.',
  },
];

const PRICING_MODELS: ReadonlyArray<{ name: string; how: string; bestWhen: string; watchFor: string }> = [
  {
    name: 'Fixed-price project',
    how: 'One written scope, one number, agreed before anyone starts. Changes are priced as separate written change notes.',
    bestWhen: 'The finish line is clear: a marketing site, a redesign, a defined store build.',
    watchFor: 'A fixed price against a vague scope. That is not a quote, it is a guess with a signature under it.',
  },
  {
    name: 'Monthly retainer',
    how: 'A set amount of senior time each month, pointed at whatever matters most that month.',
    bestWhen: 'Work continues after launch: content, A/B testing, conversion rate optimisation, technical SEO audit follow-ups, new features.',
    watchFor: 'Retainers with no written deliverables. Ask what gets shipped, not how many hours get logged.',
  },
  {
    name: 'Hourly or time and materials',
    how: 'You pay for the time spent, billed against a rate card, usually with a cap you approve.',
    bestWhen: 'Small ad-hoc changes, or genuinely unknown scope such as debugging an inherited site.',
    watchFor: 'Hourly on a full build. It moves all the estimating risk onto you and rewards slow work.',
  },
  {
    name: 'Platform subscription',
    how: 'You rent the software. The site builder or ecommerce platform charges every month for as long as you use it.',
    bestWhen: 'A simple site you maintain yourself, or a store where the platform genuinely saves you engineering.',
    watchFor: 'The subscription never ends, and app and plugin add-ons stack on top of it faster than most owners expect.',
  },
  {
    name: 'Hiring in-house',
    how: 'A salaried designer or developer who works only on your site.',
    bestWhen: 'You have enough web work to keep one person busy every week of the year.',
    watchFor: 'One person rarely covers design, front end, back end, SEO and accessibility. Most SMBs need a team a few days a month, not one person full time.',
  },
];

const TWO_YEAR_COSTS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Plugin churn',
    body: 'A cheap build often leans on ten or fifteen plugins. Each one has its own renewal, its own update cycle and its own chance of breaking something else. Two years in, somebody is paid to untangle it.',
  },
  {
    title: 'Theme updates that undo your edits',
    body: 'Custom tweaks made directly to a purchased theme get overwritten the first time the theme updates. The usual fix is to stop updating, which trades a layout problem for a security one.',
  },
  {
    title: 'Speed that decays',
    body: 'Templates ship with sliders, icon packs and tracking scripts you do not use. Google recommends a Largest Contentful Paint within 2.5 seconds, an Interaction to Next Paint of 200 milliseconds or less, and a Cumulative Layout Shift of 0.1 or less. Run Lighthouse on your current site and most bloated themes miss all three.',
  },
  {
    title: 'No redirect map when things move',
    body: 'Cheap builds rarely include URL mapping or a 301 redirect plan. Pages get renamed, old links break, and the search equity you spent years earning quietly resets. Recovering it costs more than doing it right would have.',
  },
  {
    title: 'Accessibility debt',
    body: 'Contrast, focus order, form labels and alt text are cheap during design and expensive afterwards, because fixing them means rebuilding components rather than adjusting them.',
  },
  {
    title: 'The rebuild itself',
    body: 'The most common outcome of a rushed first site is a second site. Paying twice inside three years is the real cost of the cheapest option, and it never appears on the first invoice.',
  },
];

const FORGOTTEN_COSTS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Words and photography',
    body: 'Someone has to write the pages and shoot the products or the team. If that someone is not you, it is a line in the budget.',
  },
  {
    title: 'Moving your old URLs',
    body: 'Google tells site owners to prepare a URL mapping from current URLs to their new format, redirect the old ones, give every new URL a self-referencing canonical tag, update hreflang annotations and fix internal links.',
  },
  {
    title: 'Connecting your other software',
    body: 'QuickBooks or Xero for accounting, ShipStation for fulfilment, Avalara or TaxJar for sales tax, Mailchimp or Klaviyo for email. Each one needs a real connection, tested. Zapier and n8n cover some of it. The rest is custom middleware and webhooks.',
  },
  {
    title: 'Accessibility work',
    body: 'The Department of Justice guidance is explicit that businesses open to the public need websites people with disabilities can use. Budget it as part of the build.',
  },
  {
    title: 'Hosting, domain and platform fees',
    body: 'Hosting on Cloudflare, Vercel or AWS, a CDN, the domain renewal and the platform subscription are small individually and permanent collectively. They are the floor under your annual cost whether the site changes that year or not.',
  },
  {
    title: 'Analytics and tracking setup',
    body: 'GA4, Google Tag Manager, consent mode and server-side tracking do not configure themselves, and a site that cannot measure leads cannot be improved.',
  },
  {
    title: 'Training and handover',
    body: 'Someone on your team has to be able to edit the site without calling anyone. That session, and the documentation behind it, takes time to prepare.',
  },
  {
    title: 'The second round of content',
    body: 'Most sites need new pages within six months of launch. Plan for it rather than treating every new page as an emergency.',
  },
];

const QUESTIONS_TO_ASK: ReadonlyArray<string> = [
  'What exactly is in scope, written as a list of deliverables rather than a paragraph?',
  'How many unique templates are you designing, and how many pages are built from them?',
  'Is the design custom, or a theme configured for us?',
  'Who writes the copy, and who supplies the photography?',
  'Which of our systems are you integrating, and which are we responsible for?',
  'Who owns the hosting account, the domain and the platform login at the end?',
  'What happens to our existing URLs and rankings on launch day?',
  'Are you testing against WCAG before launch, and at which level?',
  'What Core Web Vitals targets are you building to, and how will you show us the result?',
  'What is included in support after launch, and for how long?',
  'What does maintenance cover each month, and what falls outside it?',
  'How are scope changes handled, and are they priced before work starts?',
  'Who actually does the work, and will that person still be on the account in six months?',
  'What is the payment schedule, and what does the final milestone depend on?',
  'Can we see a site you built with a similar scope, not just a similar look?',
];

const ENGAGEMENTS: ReadonlyArray<{ name: string; scope: string; fit: string }> = [
  {
    name: 'Launch',
    scope: 'A focused marketing site: a small set of templates, forms wired to your CRM, GA4 and Google Tag Manager configured, schema markup, and a technical SEO pass before launch.',
    fit: 'A business that needs a credible site that converts, without a store or heavy integrations.',
  },
  {
    name: 'Build',
    scope: 'A full storefront or a larger site: catalog setup, Stripe or platform payments, shipping and tax rules, inventory sync, abandoned cart flows, multi-currency if you sell abroad, and a redirect map if you are moving platform.',
    fit: 'A brand selling online where the site is the revenue engine, not a brochure.',
  },
  {
    name: 'Platform',
    scope: 'Custom application work: headless commerce, a customer portal, single sign-on, role-based access control, ERP integration, a PIM for product data, an OMS for orders, and the middleware that keeps every system on one inventory layer.',
    fit: 'An operation whose website has to run the business, not just describe it.',
  },
];

const SCOPING_STEPS: ReadonlyArray<{ step: string; body: string }> = [
  { step: 'A short call', body: 'You describe the site, the systems it must talk to, and your deadline. We ask the awkward questions early, while they are still cheap to answer.' },
  { step: 'A written scope', body: 'We send back a deliverables list: templates, integrations, content responsibilities, migration work and what happens after launch.' },
  { step: 'A fixed quote', body: 'One number against that scope, in writing, before any work begins. If we cannot scope it confidently, we say so instead of padding it.' },
  { step: 'Changes, priced first', body: 'If the scope moves mid-project, you get a change note saying what it adds and what it costs, and you approve it before anyone starts.' },
];

const COMPARISON_COLUMNS = [
  { label: 'A built site (us)', isFactoryJet: true as const },
  { label: 'DIY site builder' },
  { label: 'Premium template' },
  { label: 'Freelancer' },
];

const COMPARISON_ROWS = [
  {
    feature: 'Who does the work',
    values: ['A team: strategy, design, build, launch', 'You, entirely', 'You, inside someone else layout', 'One person, usually part time on you'],
  },
  {
    feature: 'Your time each week',
    values: ['A few hours of review', 'Most of your evenings', 'A lot, mostly fighting the theme', 'Some, plus chasing replies'],
  },
  {
    feature: 'Design fit',
    values: ['Made for your buyers and your proof', 'Pick from a gallery', 'Shared with thousands of sites', 'Depends entirely who you hire'],
  },
  {
    feature: 'Integrations (CRM, ERP, payments)',
    values: ['Built and tested as part of scope', 'Whatever the app store offers', 'Plugin roulette', 'Usually possible, one at a time'],
  },
  {
    feature: 'Old URLs and rankings',
    values: ['Redirect map, canonical tags, hreflang', 'Rarely handled at all', 'Manual, if you know to ask', 'Only if it is in the brief'],
  },
  {
    feature: 'Accessibility',
    values: ['WCAG checks before launch', 'Whatever the platform gives you', 'Inherits the template gaps', 'Ask before you sign'],
  },
  {
    feature: 'Core Web Vitals',
    values: ['Budgeted, measured, reported', 'The platform decides', 'The theme decides', 'Varies by developer'],
  },
  {
    feature: 'Who fixes it when it breaks',
    values: ['Us, with a named contact', 'A support ticket queue', 'You, or a forum thread', 'Whenever they are free'],
  },
  {
    feature: 'Shape of the ongoing cost',
    values: ['Retainer or clean handover, your call', 'A subscription that never ends', 'Plugin and theme renewals', 'Hourly, when you need them'],
  },
  {
    feature: 'When this is the wrong choice',
    values: ['A one-page site or a hobby project. Use a builder and keep your money.', 'Anything needing custom logic or real integrations', 'Anything that has to feel like your brand', 'Anything your revenue depends on with no cover'],
  },
];

/* ── FAQ ──────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The short answer' },
  { key: 'drivers', label: 'What moves the price' },
  { key: 'models', label: 'How you pay' },
  { key: 'ongoing', label: 'After launch' },
  { key: 'choosing', label: 'Choosing who builds it' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'How much does a website cost?',
    answer:
      'There is no honest single number, and anyone who gives you one before seeing your scope is guessing. Price follows six things: template count, design depth, content readiness, integrations, platform choice, and who maintains it after launch. Send us your scope and we will quote it in writing.',
  },
  {
    category: 'basics',
    question: 'How much does a website cost for a small business?',
    answer:
      'Less than most owners fear, and more than a builder subscription. A small business site is usually a handful of templates, a contact form wired to your inbox or CRM, local search setup and analytics. The number climbs when you add booking, payments or a real integration.',
  },
  {
    category: 'basics',
    question: 'How much does an ecommerce website cost?',
    answer:
      'More than a brochure site, because a store is software. You are paying for catalog setup, payments, shipping and tax rules, inventory sync and email flows on top of design. Catalog size and integration count move it most. B2B rules like contract pricing and net terms move it again.',
  },
  {
    category: 'basics',
    question: 'Why will you not put a price on this page?',
    answer:
      'Because a published number would be wrong for almost everyone who reads it. A five-page site with finished content and a fifty-page site with an ERP integration are not the same job. We would rather scope yours on a call and quote it in writing.',
  },
  {
    category: 'basics',
    question: 'What is the cheapest way to get a website online?',
    answer:
      'A site builder with a stock theme, your own words and your own photos. That is genuinely the right answer for a one-page site or a side project. It stops being the right answer the moment you need custom logic, a real integration, or content that has to rank.',
  },
  {
    category: 'basics',
    question: 'Does a website cost more in the US than in other markets?',
    answer:
      'Rates vary by market, but scope drives the number far more than location does. A vague brief priced anywhere gives you a vague number. Write the scope down first, then compare quotes on identical deliverables. That is the only comparison that tells you anything useful.',
  },
  {
    category: 'drivers',
    question: 'Does the number of pages really change the price?',
    answer:
      'Templates matter more than pages. Twenty pages built from four layouts is a much smaller job than twelve pages each designed on its own. When you count pages for a quote, count how many are genuinely different layouts. That number is what the designer and developer are actually building.',
  },
  {
    category: 'drivers',
    question: 'Does a custom design cost more than a template?',
    answer:
      'Yes, up front. A template buys speed and gives up fit. A custom design starts from your buyers, your proof and your conversion path, so it usually earns more per visitor. The better question is not which is cheaper, but which one you will still be happy with in two years.',
  },
  {
    category: 'drivers',
    question: 'How much do content and photography add?',
    answer:
      'This is the cost buyers forget most often. Words, product photos and team shots either come from you, or someone gets paid to create them. Projects stall here more than anywhere else. If your content is finished before the build starts, the project gets faster and cheaper.',
  },
  {
    category: 'drivers',
    question: 'Does WordPress cost less than Shopify?',
    answer:
      'Not automatically. WordPress and WooCommerce have no platform fee, but you carry hosting, plugin licences and update work. Shopify charges a subscription and takes care of the plumbing. Over a few years the two often land closer than people expect. Pick the platform that fits the job.',
  },
  {
    category: 'drivers',
    question: 'Do integrations to my CRM or ERP add much?',
    answer:
      'They can be the largest single line in a build. A form that emails you is simple. A form that writes to HubSpot, triggers a Klaviyo flow and syncs an order into NetSuite is three integrations, each needing testing and error handling. List every system you use before asking anyone for a quote.',
  },
  {
    category: 'drivers',
    question: 'Does making a site accessible cost extra?',
    answer:
      'Building it accessible from the start costs very little. Fixing it after launch costs a lot. Department of Justice guidance says businesses open to the public need websites that people with disabilities can use. Treat accessibility as part of the build, not an add-on you can drop to save money.',
  },
  {
    category: 'models',
    question: 'Should I pay a fixed price or a monthly retainer?',
    answer:
      'Fixed price suits a build with a clear finish line. A retainer suits ongoing work where priorities change month to month. Plenty of projects use both: fixed for the launch, retainer for the growth work afterwards. What matters is that the scope for each one is written down.',
  },
  {
    category: 'models',
    question: 'Do you charge by the hour?',
    answer:
      'Only where hourly genuinely fits, such as small ad-hoc changes or debugging a site we did not build. For a full build we quote a fixed price against a written scope, so you are not exposed to how long something takes us.',
  },
  {
    category: 'models',
    question: 'What happens if the scope changes halfway through?',
    answer:
      'You get a change note saying what is being added, what it affects and what it costs, and you approve it before work starts. No surprise invoices at the end. Scope changes are normal on real projects. Silent scope changes are what damage trust.',
  },
  {
    category: 'ongoing',
    question: 'Is a website a one-time cost or an ongoing cost?',
    answer:
      'Both. The build is one-time. Hosting, domain renewal, platform fees, plugin licences, security updates and content changes recur every year you keep the site. Plan for the second cost from day one, because that is where a cheap build quietly gets expensive.',
  },
  {
    category: 'ongoing',
    question: 'How much does it cost to maintain a website each year?',
    answer:
      'It depends on the platform far more than the page count. A static Next.js site on Cloudflare needs little beyond occasional content edits. A WordPress site with a dozen plugins needs monthly updates, backups, a Lighthouse check and someone watching for breakage. Ask any quote to spell out what maintenance covers.',
  },
  {
    category: 'ongoing',
    question: 'Do I pay for hosting separately?',
    answer:
      'Usually yes, and you should own that account rather than renting it through your agency. Owning the hosting, the domain and the platform login means you can leave whenever you want. We set every project up in your name and hand over the keys at launch.',
  },
  {
    category: 'choosing',
    question: 'Why do two agencies quote such different numbers for the same brief?',
    answer:
      'Because they read the brief differently. One priced a theme setup. The other priced a custom design system, accessibility testing and a redirect map. Neither is lying. The fix is to hand both the same written scope and ask them to price the same list of deliverables.',
  },
  {
    category: 'choosing',
    question: 'Is a website builder cheaper than hiring someone?',
    answer:
      'For a simple site, yes, and we will tell you so. The subscription never ends though, and your own time is a real cost. Owners who value their hours usually find a built site pays for itself once it has to sell, integrate or rank rather than just exist.',
  },
  {
    category: 'choosing',
    question: 'How much does a redesign cost compared to a new build?',
    answer:
      'A redesign can cost less, because content, brand and structure already exist. It can also cost more, if the old site has years of URLs, plugins and integrations to untangle. The audit at the start is what tells you which one you have.',
  },
  {
    category: 'choosing',
    question: 'What does it cost to move my site to a new platform?',
    answer:
      'Replatforming is priced on data, not design. Products, customers, orders and old URLs all have to move without losing rankings. Google tells site owners to prepare a URL mapping and redirect the old URLs to the new ones before the move. Skipping that step is the expensive mistake.',
  },
  {
    category: 'choosing',
    question: 'How long does a website take to build?',
    answer:
      'A small marketing site usually moves in weeks. A store with integrations and a migration takes longer, and content readiness normally decides the date. Timeline and cost are linked: a rushed deadline costs more because it needs more people working at once.',
  },
  {
    category: 'choosing',
    question: 'Is a freelancer cheaper than an agency?',
    answer:
      'Often yes on the invoice, and that can be the right trade. The risk is single-person cover: holidays, illness and other clients. For a small site that risk is fine. For a store your revenue depends on, ask what happens if that one person is unavailable for two weeks.',
  },
  {
    category: 'choosing',
    question: 'When are you the wrong choice for my project?',
    answer:
      'If you need a one-page site or a hobby project, use a builder and keep your money. If you want someone to sit beside you and teach you a website builder, a local trainer fits better than we do. We earn our place when the site has to sell, integrate or rank.',
  },
  {
    category: 'choosing',
    question: 'What do you need from me before you can quote?',
    answer:
      'A rough page list, the systems the site must connect to, whether content and photography exist, any deadline you are working to, and whether this is a new build or a move from an existing site. Five minutes of that detail turns a vague estimate into a firm quote.',
  },
];

/* ── schema ───────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/website-cost#webpage',
  url: 'https://factoryjet.com/website-cost',
  name: 'How Much Does a Website Cost in 2026?',
  description:
    'What drives the cost of a website build: template count, design depth, content readiness, integrations, platform choice, migration and ongoing maintenance.',
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#short-answer', '#questions-to-ask'],
  },
  author: {
    '@type': 'Person',
    '@id': 'https://factoryjet.com/#bhavesh-barot',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder',
    worksFor: { '@id': 'https://factoryjet.com/#organization' },
    url: 'https://factoryjet.com/about',
  },
  reviewedBy: { '@id': 'https://factoryjet.com/#bhavesh-barot' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://clutch.co/profile/factoryjet-private',
    'https://www.goodfirms.co/company/factoryjet-private-limited',
    'https://www.designrush.com/agency/profile/factoryjet',
    'https://www.softwaresuggest.com/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design and Development Scoping',
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Website design and development, ecommerce build, replatforming, website redesign',
  description:
    'Scoped website design and development. Every engagement is quoted as a fixed price against a written deliverables list agreed before work starts, covering templates, integrations, migration and post-launch support.',
  url: 'https://factoryjet.com/website-cost',
};

// Derived from the SAME array the visible FAQ renders. Never hand-duplicate:
// a second literal list is the drift bug that makes schema and page disagree.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Website cost guide', item: 'https://factoryjet.com/website-cost' },
  ],
};

/* ── page ─────────────────────────────────────────────────────────────────── */

const LINK = 'font-semibold text-[#B23E13] underline underline-offset-2';

export default function WebsiteCostPage() {
  return (
    <>
      <script id="cost-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="cost-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="cost-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="cost-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="cost-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader locale="us" cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="bg-white font-fj-body text-[#14110F]">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="border-b border-[#E7DED6]">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                Website cost guide
              </p>
              <h1 className="mt-3 max-w-[18ch] font-fj-display text-4xl font-extrabold leading-[1.07] tracking-tight md:text-[3.4rem]">
                How much does a website cost?
              </h1>
              <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-[#46403B]">
                {'Straight talk on what sets the price, what buyers forget to budget, and the questions that make two quotes comparable.'}
              </p>
              <div className="mt-7">
                <HeroInlineForm region="us" source="us_website_cost_hero" submitLabel="Get my project scoped" />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B23E13] px-6 py-3.5 font-fj-body text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Book a scoping call
                </a>
                <ModalCTAButton label="Get a written quote" region="us" btnVariant="secondary-light" />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7DED6] bg-[#FFF8F5] p-7">
                <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
                  What this page does
                </p>
                <ul className="mt-5 grid gap-4">
                  {HERO_PROMISES.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-[#46403B]">
                      <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F05A28]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* ── ANSWER FIRST ──────────────────────────────────────────────── */}
        <section id="short-answer" className="border-b border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-14 md:py-16">
            <h2 className="font-fj-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#B23E13]">
              The short answer
            </h2>
            <p className="mt-5 max-w-[70ch] text-[19px] leading-[1.6] text-[#14110F]">
              {'A website costs whatever its scope costs. Six things move the number more than anything else: how many templates you need, how custom the design is, whether your content and photos are ready, how many systems it has to connect to, which platform you build on, and who keeps it running after launch.'}
            </p>
            <p className="mt-5 max-w-[70ch] text-[16px] leading-relaxed text-[#46403B]">
              {'Everything below explains those six in plain language, then hands you a checklist you can use on any agency. If you want a real number, we scope it on a short call and quote it in writing before work starts. Start with '}
              <Link href="/services/web-design" className={LINK}>web design</Link>
              {' if the site is a marketing site, or '}
              <Link href="/services/ecommerce-development" className={LINK}>ecommerce development</Link>
              {' if you are selling online.'}
            </p>
          </div>
        </section>

        {/* ── COST DRIVERS ──────────────────────────────────────────────── */}
        <section className="border-b border-[#E7DED6]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  The eight things that actually set the price
                </h2>
                <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
                  {'Ranked by how much they move a quote in practice. If a proposal you are reading does not address these eight, you are not looking at a scoped price. You are looking at a guess.'}
                </p>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/us/platforms/platform-choice.webp"
                  alt="A business owner comparing website options and taking notes at a laptop"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="w-full rounded-2xl border border-[#E7DED6] object-cover"
                />
              </div>
            </div>

            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {COST_DRIVERS.map((d, i) => (
                <li key={d.title} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF3EE] font-fj-display text-[15px] font-bold text-[#B23E13]">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-fj-display text-lg font-bold leading-snug">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{d.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[70ch] text-[15px] leading-relaxed text-[#46403B]">
              {'Platform choice is the one most people decide last and should decide first. Compare the options on '}
              <Link href="/best-ecommerce-platforms" className={LINK}>the best ecommerce platforms</Link>
              {', or read how we build on '}
              <Link href="/services/shopify-development" className={LINK}>Shopify</Link>
              {' and '}
              <Link href="/services/wordpress-development" className={LINK}>WordPress</Link>
              {'. If the site has to run part of your business rather than describe it, that is '}
              <Link href="/services/web-application-development" className={LINK}>web application development</Link>
              {', and it is priced differently.'}
            </p>
          </div>
        </section>

        {/* ── PRICING MODELS ────────────────────────────────────────────── */}
        <section className="border-b border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[24ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
              The five ways this work gets priced
            </h2>
            <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-[#46403B]">
              {'Two quotes can describe the same site and still be impossible to compare, because they use different pricing models. Here is how each one behaves, and what to watch for in each.'}
            </p>
            <ul className="mt-12 grid gap-5">
              {PRICING_MODELS.map((m) => (
                <li key={m.name} className="rounded-2xl border border-[#E7DED6] bg-white p-6 md:p-7">
                  <div className="grid gap-5 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-4">
                      <h3 className="font-fj-display text-lg font-bold text-[#B23E13]">{m.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{m.how}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6E635A]">Best when</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{m.bestWhen}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6E635A]">Watch for</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{m.watchFor}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="Four honest routes"
          headline="Builder, template, freelancer or a built site"
          lead="All four are real answers, and three of them are sometimes better than hiring us. Here is how they differ on the things that decide your total cost rather than your first invoice."
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="We are one of the four options, not the only one. The last row is the honest version: if your site is one page, a builder will serve you better than we will."
        />

        <MidPageCTA
          headline={'Want a real number for your project?'}
          sub={'Tell us your template count, your integrations and your deadline. We will scope it properly and quote it in writing before any work starts.'}
          label={'Get your project scoped'}
        />

        {/* ── TWO-YEAR COST ─────────────────────────────────────────────── */}
        <section className="border-y border-[#E7DED6]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[26ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Why the cheapest build is often the most expensive one by year two
            </h2>
            <p className="mt-4 max-w-[66ch] text-[16px] leading-relaxed text-[#46403B]">
              {'This is not a sales line, it is the pattern we see on inherited sites. A template build is genuinely cheaper on day one. The cost shows up later, spread across six places nobody put in the original budget.'}
            </p>
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TWO_YEAR_COSTS.map((c) => (
                <li key={c.title} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{c.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[72ch] text-[14px] leading-relaxed text-[#6E635A]">
              {'Core Web Vitals thresholds are published by Google at '}
              <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className={LINK}>web.dev</a>
              {'. If your current site is the one described above, a '}
              <Link href="/services/website-redesign" className={LINK}>website redesign</Link>
              {' usually costs less than people assume, because the content and structure already exist.'}
            </p>
          </div>
        </section>

        {/* ── FORGOTTEN COSTS ───────────────────────────────────────────── */}
        <section className="border-b border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  The costs almost nobody budgets for
                </h2>
                <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#46403B]">
                  {'Eight lines that show up on real projects and rarely show up on the first estimate. Ask about every one of them before you sign anything.'}
                </p>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/us/services/service-team.webp"
                  alt="A web design team planning a build around a whiteboard of wireframes"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full rounded-2xl border border-[#E7DED6] object-cover"
                />
              </div>
            </div>

            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {FORGOTTEN_COSTS.map((c) => (
                <li key={c.title} className="rounded-2xl border border-[#E7DED6] bg-white p-6">
                  <h3 className="font-fj-display text-base font-bold">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{c.body}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[74ch] text-[14px] leading-relaxed text-[#6E635A]">
              {'Migration guidance is from '}
              <a
                href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK}
              >
                Google Search Central on site moves with URL changes
              </a>
              {'. Accessibility guidance is from the US Department of Justice at '}
              <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer" className={LINK}>ada.gov</a>
              {'. Keeping rankings through a move is its own discipline, covered on '}
              <Link href="/services/ecommerce-seo" className={LINK}>ecommerce SEO</Link>
              {'.'}
            </p>
          </div>
        </section>

        {/* ── QUESTIONS TO ASK ──────────────────────────────────────────── */}
        <section id="questions-to-ask" className="border-b border-[#E7DED6]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <h2 className="max-w-[26ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Fifteen questions that make two quotes comparable
            </h2>
            <p className="mt-4 max-w-[66ch] text-[16px] leading-relaxed text-[#46403B]">
              {'Copy this list and send it to everyone you are considering, us included. Quotes stop being confusing the moment every bidder answers the same fifteen questions in writing.'}
            </p>
            <ol className="mt-12 grid gap-3 md:grid-cols-2">
              {QUESTIONS_TO_ASK.map((q, i) => (
                <li key={q} className="flex items-start gap-4 rounded-xl border border-[#E7DED6] bg-white px-5 py-4">
                  <span className="mt-[2px] font-fj-mono text-[13px] font-bold text-[#B23E13]">{i + 1}</span>
                  <span className="text-[15px] leading-relaxed text-[#46403B]">{q}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-[70ch] text-[15px] leading-relaxed text-[#46403B]">
              {'If you are a smaller team, the answers to questions two, four and eleven matter most, and '}
              <Link href="/services/small-business-website-design" className={LINK}>small business website design</Link>
              {' explains how we scope those. Our broader approach to scoping and pricing lives on the '}
              <Link href="/pricing" className={LINK}>pricing page</Link>
              {'.'}
            </p>
          </div>
        </section>

        {/* ── HOW WE SCOPE ──────────────────────────────────────────────── */}
        <section className="border-b border-[#E7DED6] bg-[#FFF8F5]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h2 className="max-w-[22ch] font-fj-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  How we turn a scope into a number
                </h2>
                <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-[#46403B]">
                  {'Four steps, and none of them involve a number until step three. The founder, Bhavesh Barot, runs the scoping call himself, so the person who quotes the work is the person accountable for delivering it.'}
                </p>
                <ol className="mt-8 grid gap-4">
                  {SCOPING_STEPS.map((s, i) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="mt-[2px] inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#FFF3EE] font-fj-mono text-[12px] font-bold text-[#B23E13]">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-fj-display text-base font-bold">{s.step}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-[#46403B]">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-6">
                <img
                  src="/images/us/services/service-web-design-process.webp"
                  alt="A scoping session reviewing a website wireframe on a large screen"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full rounded-2xl border border-[#E7DED6] object-cover"
                />
                <h3 className="mt-8 font-fj-display text-xl font-bold">Three shapes an engagement takes</h3>
                <ul className="mt-4 grid gap-4">
                  {ENGAGEMENTS.map((e) => (
                    <li key={e.name} className="rounded-2xl border border-[#E7DED6] bg-white p-5">
                      <p className="font-fj-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#B23E13]">{e.name}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#46403B]">{e.scope}</p>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#6E635A]">{e.fit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-[13px] text-[#6E635A]">
              {'Reviewed and updated '}{REVIEWED_DATE}{' by Bhavesh Barot, Founder, FactoryJet.'}
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Website cost FAQ"
          headline="Questions buyers ask about website cost"
          lead="The questions we get on scoping calls, answered the way we answer them on the phone."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-white"
        />
      </main>

      <FinalCTA
        variant="dark"
        eyebrow="Get a written quote"
        headline="Send us the scope. We will send back a number."
        sub="A short call, a written deliverables list, then one fixed price agreed before any work starts. If we cannot scope it confidently, we say so rather than padding it."
        primaryCta={{ label: 'Get your project scoped', modal: true, region: 'us' }}
        secondaryCta={{ label: 'Book a call with the founder', href: CALENDLY }}
        objectionHandler="No obligation, and no invoice until a scope is agreed in writing."
      />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
