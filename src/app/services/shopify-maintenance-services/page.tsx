import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

const PAGE_URL = 'https://factoryjet.com/services/shopify-maintenance-services';
const PAGE_MODIFIED = '2026-09-17';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_TITLE = 'Shopify Maintenance Services & Retainers | FactoryJet';
const PAGE_DESCRIPTION =
  'Shopify maintenance and support retainers with included developer hours and published first-response times. Also WooCommerce, Magento and BigCommerce.';

/* Plan shape. criticalResponse and standardResponse are the time to a FIRST response, never a fix
   time. coverage is the window in which critical first responses are available. */
interface SupportPlan {
  name: string;
  hours: string;
  criticalResponse: string;
  standardResponse: string;
  coverage: string;
  includes: string[];
}

// Plan terms: single source of truth. Edit values here only; the plan cards, FAQs and schema read from this constant.
const SUPPORT_PLANS = [
  {
    name: 'Essentials',
    hours: '10 development hours a month',
    criticalResponse: 'within 4 hours',
    standardResponse: 'within 1 business day',
    coverage: '7 days a week',
    includes: ['Monthly store health report'],
  },
  {
    name: 'Growth',
    hours: '25 development hours a month',
    criticalResponse: 'within 2 hours',
    standardResponse: 'within 8 business hours',
    coverage: '7 days a week',
    includes: ['Monthly store health report', 'Quarterly roadmap call'],
  },
  {
    name: 'Scale',
    hours: '50 or more development hours a month, scoped to the store',
    criticalResponse: 'within 1 hour',
    standardResponse: 'within 4 business hours',
    coverage: '24/7',
    includes: [
      'Named lead developer',
      'Peak-season (Black Friday Cyber Monday) readiness plan',
      'Monthly store health report',
      'Quarterly roadmap call',
    ],
  },
] satisfies SupportPlan[];

const BUSINESS_HOURS_NOTE = 'Business hours are 9am to 6pm, Monday to Friday, in your US time zone.';

/* Helpers that turn SUPPORT_PLANS into copy, so no sentence, FAQ answer or schema string retypes a plan term. */
const criticalWindow = (plan: SupportPlan) => `${plan.criticalResponse}, ${plan.coverage}`;

const planSentence = (plan: SupportPlan) =>
  `${plan.name} includes ${plan.hours}, a first response to critical issues ${criticalWindow(plan)}, and a first response to standard requests ${plan.standardResponse}.`;

const plansIncluding = (phrase: string): string[] =>
  SUPPORT_PLANS.filter((plan) => plan.includes.some((item) => item.toLowerCase().includes(phrase))).map((plan) => plan.name);

const listNames = (names: string[]): string =>
  names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;

const upperFirst = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const ROADMAP_PLANS = plansIncluding('roadmap');
const PEAK_SEASON_PLANS = plansIncluding('peak-season');
const REPORT_PLANS = plansIncluding('store health report');
const EVERY_PLAN_REPORTS = REPORT_PLANS.length === SUPPORT_PLANS.length;

/* Severity levels. Qualitative only: first-response times always come from SUPPORT_PLANS. */
const SEVERITY = [
  {
    level: 'Critical',
    means: 'the store is down, checkout fails, or payments are not going through',
    examples: 'An error page instead of the store; a checkout button that does nothing; every card payment declined.',
  },
  {
    level: 'High',
    means: 'a key feature is broken, but customers can still buy',
    examples: 'A discount that won’t apply; order sync to your warehouse or ERP stopped; filters that return nothing.',
  },
  {
    level: 'Standard',
    means: 'changes and fixes that can be scheduled',
    examples: 'A new landing page section; an app install; copy and image updates; a minor layout bug.',
  },
];

/* External sources shown as links in the copy. Each was fetched and checked on 2026-09-17. */
const SRC_SHOPIFY_SUPPORT = 'https://help.shopify.com/en/manual/your-account/contact-shopify-support';
const SRC_SCRIPT_TAGS = 'https://shopify.dev/changelog/online-store-script-tags-deprecation';
const SRC_API_VERSIONING = 'https://shopify.dev/docs/api/usage/versioning';
const SRC_WEB_VITALS = 'https://web.dev/articles/vitals';
const SRC_ADOBE_LIFECYCLE = 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy';
const REF_GROWTH_SERVICES = 'https://growth-services.shopify.com/pages/work-with-us';
const REF_PARTNER_DIRECTORY = 'https://www.shopify.com/partners/directory';
const REF_SHOPIFY_MAINTENANCE_COST = 'https://www.shopify.com/enterprise/blog/website-maintenance-cost';
const REF_CHARLE = 'https://www.charleagency.com/services/support-and-maintenance/';
const REF_VYOMCO = 'https://www.vyomco.com/services/support-and-maintenance';
const REF_1DIGITAL = 'https://www.1digitalagency.com/support/';
const REF_CRAFTBERRY = 'https://craftberry.co/services/shopify-support-retainers';
const REF_ECOMMERCE_PRO = 'https://www.ecommercepro.com/pages/shopify-support-retainers';

const LINK_STYLE: CSSProperties = { color: '#B23E13', textDecoration: 'underline', textUnderlineOffset: '2px' };
const LEAD_STYLE: CSSProperties = { marginTop: '12px', maxWidth: '66ch' };
const CARD_STYLE: CSSProperties = { border: '1px solid #E7DED6', borderRadius: '18px', background: '#FFFFFF', padding: '22px' };
const BODY_TEXT: CSSProperties = { fontSize: '14.5px', lineHeight: 1.6, color: '#46403B' };
const TICK_STYLE: CSSProperties = {
  marginTop: '2px',
  flex: 'none',
  display: 'inline-flex',
  height: '18px',
  width: '18px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '999px',
  background: 'rgba(240,90,40,0.1)',
  color: '#B23E13',
};
const GRID_2: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
  gap: '16px',
};

function Ext({ href, children, nofollow = false }: { href: string; children: ReactNode; nofollow?: boolean }) {
  return (
    <a href={href} target="_blank" rel={nofollow ? 'noopener noreferrer nofollow' : 'noopener noreferrer'} style={LINK_STYLE}>
      {children}
    </a>
  );
}

function InLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} style={LINK_STYLE}>
      {children}
    </Link>
  );
}

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Single source of truth for the breadcrumb trail: feeds the visible trail and the BreadcrumbList JSON-LD. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Shopify Maintenance Services', url: PAGE_URL },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'shopify maintenance services',
    'shopify maintenance',
    'shopify website maintenance',
    'shopify support and maintenance services',
    'shopify support agency',
    'shopify support services',
    'shopify retainer',
    'shopify plus support',
    'ecommerce website maintenance services',
    'ecommerce support services',
    'woocommerce maintenance services',
    'magento support services',
    'bigcommerce support',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Shopify maintenance services and support retainers',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/shopify-maintenance-services',
    languages: {
      'en-US': 'https://factoryjet.com/services/shopify-maintenance-services',
      'x-default': 'https://factoryjet.com/services/shopify-maintenance-services',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* FAQ data: drives both the visible accordion and the FAQPage schema.
   Questions are grounded in Google US results pulled through DataForSEO on 2026-09-17 for
   "shopify maintenance services", "ecommerce website maintenance" and "how much does shopify
   maintenance cost" (People Also Ask, related searches and the AI Overview), plus the questions the
   ranking support pages answer. Review added three People Also Ask questions from "shopify support and
   maintenance" and "shopify support agency" (same date). Off-topic, competitor-brand and career questions are left out.
   Every plan term is interpolated from SUPPORT_PLANS. */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Maintenance basics' },
  { key: 'shopify', label: 'Shopify’s own support' },
  { key: 'cost', label: 'Cost' },
  { key: 'choosing', label: 'Choosing a provider' },
  { key: 'plans', label: 'FactoryJet plans' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  {
    category: 'basics',
    question: 'What are Shopify maintenance services?',
    answer:
      'Shopify maintenance services are the ongoing technical care a store needs after launch: theme and app updates, bug fixes, Shopify platform changes, speed and checkout monitoring, and keeping integrations such as your ERP or warehouse connection working. Shopify runs hosting and platform security. The theme, apps, custom code and integrations you add are yours to maintain.',
  },
  {
    category: 'basics',
    question: 'Does a Shopify store need maintenance if Shopify hosts it?',
    answer:
      'Yes, though less than a self-hosted store. Shopify handles servers, hosting and Level 1 PCI DSS compliance (the security standard for card data). It does not maintain what you add: theme code, apps, checkout customizations and integrations. Those break when Shopify retires a tool, as when Scripts stopped running on June 30, 2026, or when an app update clashes with your theme.',
  },
  {
    category: 'basics',
    question: 'What should a Shopify maintenance checklist include?',
    answer:
      'Weekly: run through checkout, check Shopify’s status page, and review failed webhooks or sync errors. Monthly: review Core Web Vitals, test theme and app updates on a draft theme, audit app subscriptions and fix broken links. Quarterly: read Shopify’s developer changelog for tools being retired, test the API versions your custom apps use, and plan peak-season work.',
  },
  {
    category: 'basics',
    question: 'What is a Shopify retainer?',
    answer:
      'A Shopify retainer is a monthly agreement that reserves a developer’s or agency’s time for your store. You get a set number of hours each month and agreed response times when something breaks, instead of paying per task and waiting for someone to be free. Before signing, ask what happens to unused hours, because providers handle that differently.',
  },
  {
    category: 'basics',
    question: 'How long are websites down for maintenance?',
    answer:
      'On Shopify, usually not at all. Shopify maintains the platform, and theme work happens on a copy of your theme that goes live only after testing, so shoppers keep buying. Shopify posts platform incidents on its status page. Self-hosted WooCommerce and Magento stores sometimes need a short maintenance window, best scheduled for your quietest hours.',
  },
  {
    category: 'shopify',
    question: 'How do I speak to a real person at Shopify?',
    answer:
      'Go to help.shopify.com, try the AI search, then click Chat with a human, log in and select your store to join the queue. Chat is open around the clock on every plan. Phone support is limited to Shopify Plus, the Retail plan and Shopify POS Pro, and email support to Plus and Retail. Shopify Support doesn’t make outbound calls.',
  },
  {
    category: 'shopify',
    question: 'How do I report an issue to Shopify?',
    answer:
      'For a store or account problem, chat with Shopify Support from the Help Center and include screenshots. For a suspected outage, check shopifystatus.com, which reports the status of the admin, checkout, storefront and APIs. For a third-party app, contact its developer: in your admin, go to Settings, then Apps, open the app’s menu and choose Get support.',
  },
  {
    category: 'shopify',
    question: 'Is Shopify having a problem today?',
    answer:
      'Check shopifystatus.com, Shopify’s status page. It shows the live status of the admin, checkout, storefront, API and mobile, point of sale and support, lists past incidents, lets you subscribe to updates and links to a detailed status view for your own store. If everything shows as operational but your store is still broken, look at what changed recently, such as a theme edit, an app install or an app update.',
  },
  {
    category: 'shopify',
    question: 'Will Shopify Support fix my theme code or apps?',
    answer:
      'Mostly no. Shopify’s Help Center says Support can’t help with most custom code issues unless you’re on Shopify Plus or are a Shopify Partner. Third-party apps and paid themes are supported by their developers, and Shopify’s design policy rules out editing the checkout. Free Shopify themes get basic help and up to 60 minutes of design time on the Basic plan or higher.',
  },
  {
    category: 'shopify',
    question: 'What support comes with Shopify Plus?',
    answer:
      'Shopify Plus stores get chat with Plus Support Advisors, a direct phone line, and email tickets with typical response times of 48 hours. That is platform support, not a development team. Theme work, app conflicts, integrations and migrations such as moving custom logic to Shopify Functions still need a developer or agency.',
  },
  {
    category: 'shopify',
    question: 'Is Shopify still worth it in 2026 if I have to pay for maintenance?',
    answer:
      'For most direct-to-consumer brands, yes. Shopify covers hosting, platform updates and PCI compliance, which self-hosted WooCommerce and Magento leave to you. What you pay for is upkeep of your theme, apps and integrations, which grows with customization. FactoryJet works across several platforms, so if another one fits your catalog or B2B needs better, we will tell you.',
  },
  {
    category: 'cost',
    question: 'How much does Shopify maintenance cost per month?',
    answer:
      'It depends on hours, response times, customization and integrations. Shopify’s enterprise blog, last updated in April 2024, lists $1,500 to $2,500 a month to maintain an ecommerce website and $2,000 to $5,000 for a custom one. Ecommerce Pro publishes $900 a month for five hours, and Craftberry starts retainers at $2,000 a month. FactoryJet quotes after an audit.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to hire someone to maintain a website?',
    answer:
      'Freelancers usually bill by the hour or by task, and agencies sell monthly retainers that reserve hours and set response times. The price rises with self-hosting, custom code and how fast you need answers. Ask every quote to list hours, response times and exclusions so you compare like with like.',
  },
  {
    category: 'cost',
    question: 'How much does it cost to hire a Shopify expert?',
    answer:
      'Published rates give a starting point. Craftberry lists $90 an hour on a yearly agreement or $100 month-to-month, with retainers from $2,000 a month, and Ecommerce Pro lists $900 a month for five hours of support. Partner Directory listings show each partner’s price range, and Shopify Growth Services prices each engagement after a first call. FactoryJet quotes support plans after an audit and doesn’t publish prices.',
  },
  {
    category: 'cost',
    question: 'Why is Shopify charging me $40?',
    answer:
      'A charge near $40 often matches the Basic plan, which Shopify’s US pricing page lists at $39 a month when you pay monthly, and bills can include taxes. To check, open Settings, then Billing, in your Shopify admin. Recurring charges, billed every 30 days, cover your plan and app subscriptions. Uninstalling a paid app you no longer use cancels its future recurring charges, though you may still be billed for the current cycle.',
  },
  {
    category: 'cost',
    question: 'How much does a Shopify store cost to run each month?',
    answer:
      'Add up five lines: your Shopify plan fee, payment processing, third-party transaction fees if you use a provider other than Shopify Payments, app subscriptions, and developer time for upkeep. Shopify publishes plan fees and rates on its pricing page. App subscriptions are the line that creeps up, so we review every app during onboarding.',
  },
  {
    category: 'choosing',
    question: 'Who offers ecommerce support and maintenance retainers for Shopify stores?',
    answer:
      'Shopify-focused agencies that publish support or retainer offers include Charle, Vyomco, 1Digital Agency, Craftberry and Ecommerce Pro. FactoryJet offers them too, across Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce and Commerceflo, with first-response times published for each plan. Shopify also sells help through Shopify Growth Services and lists independent partners in its Partner Directory under Ongoing website management.',
  },
  {
    category: 'choosing',
    question: 'Where can I find a Shopify expert to hire?',
    answer:
      'Start with Shopify’s Partner Directory, which lists independent partners by service, including Troubleshooting, Ongoing website management and Store migration, with ratings, reviews and a price range on their listings. Shopify’s own Growth Services team also takes paid engagements. Before you hire anyone, ask how they will access your store (a collaborator account, never your password), who does the work and which first-response times they put in writing.',
  },
  {
    category: 'choosing',
    question: 'Should my maintenance partner be a Shopify Partner?',
    answer:
      'It helps. Only Shopify Partners can use collaborator accounts, which give a developer controlled access to your store without your password. Shopify’s Partner Directory also tiers partners as Select, Plus, Premier or Platinum based on track record. FactoryJet is a registered Shopify Partner. Also check references, who does the work, and whether response times are in writing.',
  },
  {
    category: 'plans',
    question: 'How quickly are support requests handled?',
    answer: `${SUPPORT_PLANS.map(
      (plan) =>
        `${plan.name}: critical issues get a first response ${criticalWindow(plan)}, and standard requests ${plan.standardResponse}.`,
    ).join(' ')} A first response means a developer has picked up the issue and replied, not that it is fixed. ${BUSINESS_HOURS_NOTE}`,
  },
  {
    category: 'plans',
    question: 'How many development hours does each plan include?',
    answer: `${SUPPORT_PLANS.map((plan) => `${plan.name} includes ${plan.hours}.`).join(' ')} Hours cover fixes, updates, monitoring follow-up and small features. Redesigns, replatforming and large builds are scoped separately, and every plan is quoted after an onboarding audit.`,
  },
  {
    category: 'plans',
    question: 'What counts as a critical issue?',
    answer: `${SEVERITY.map((s) => `${s.level} means ${s.means}.`).join(' ')} Critical issues get the fastest first response on every plan, and high issues are worked before standard requests. A high issue that starts costing sales moves up to critical.`,
  },
  {
    category: 'plans',
    question: 'Do you need our Shopify password?',
    answer:
      'No, and you shouldn’t share it with anyone. Shopify Partners request collaborator access with a four-digit code you generate in your admin. You approve or adjust the permissions and can remove access later from Settings, then Users. Shopify requires partners to use two-step authentication on collaborator accounts, which don’t count toward your store’s user limit.',
  },
  {
    category: 'plans',
    question: 'Do you support WooCommerce, Magento and BigCommerce stores?',
    answer:
      'Yes. On WooCommerce we keep WordPress, PHP, WooCommerce and its extensions current, testing on staging first. On Magento and Adobe Commerce we apply security patches and plan upgrades around Adobe’s support dates. On BigCommerce we look after Stencil themes, Catalyst storefronts, B2B Edition and integrations. The same plans and response times apply on every platform.',
  },
];

/* Dated Shopify changes. Every date was checked against shopify.dev on 2026-09-17. */
const DEADLINES = [
  {
    iso: '2026-06-30',
    date: 'June 30, 2026',
    text: 'Shopify Scripts stopped running. Custom discount, shipping and payment logic needs Shopify Functions.',
  },
  {
    iso: '2026-08-26',
    date: 'August 26, 2026',
    text: 'Sunset date for script tags on the Thank you and Order status pages of non-Plus stores.',
  },
  {
    iso: '2026-10-01',
    date: 'October 1, 2026',
    text: 'Apps can no longer create or update script tags through Shopify’s Admin API.',
  },
  {
    iso: '2027-03-01',
    date: 'March 1, 2027',
    text: 'Shopify stops loading script tags on storefronts.',
  },
];

const PLATFORM_CHANGES: ReadonlyArray<{ t: string; d: ReactNode }> = [
  {
    t: 'What replaced Shopify Scripts',
    d: 'Shopify Functions, small programs that run inside Shopify’s checkout logic, now handle custom discounts, shipping and payment rules. Any plan can use public apps built on Functions, but custom Function apps need Shopify Plus.',
  },
  {
    t: 'What replaced checkout.liquid',
    d: 'The Plus-only checkout.liquid file stopped working on the information, shipping and payment steps on August 13, 2024, and on the Thank you and Order status pages on August 28, 2025. Checkout changes now run as UI extensions, Functions, web pixels and payments extensions.',
  },
  {
    t: 'What replaces script tags',
    d: (
      <>
        Apps must switch to app embed blocks, which you turn on in the theme editor, or to web pixels for tracking. An app audit
        shows which of your apps still rely on script tags (<Ext href={SRC_SCRIPT_TAGS}>Shopify developer changelog</Ext>).
      </>
    ),
  },
  {
    t: 'API versions and vintage themes',
    d: (
      <>
        Shopify supports each quarterly API version for at least 12 months, then answers calls to a retired version with the oldest
        supported one, which can quietly change an integration. Version 2025-10 stays accessible until October 16, 2026 (
        <Ext href={SRC_API_VERSIONING}>Shopify API versioning</Ext>). Vintage themes that aren’t listed in the Shopify Theme Store no longer get
        updates at all.
      </>
    ),
  },
];

const JOBS: ReadonlyArray<{ t: string; d: ReactNode }> = [
  {
    t: 'Theme and app updates, and the conflicts they cause',
    d: 'Apart from automatic bug and security fixes, theme updates don’t install themselves, and code edits may not carry over. We merge custom code, test the draft, publish, and untangle apps that clash.',
  },
  {
    t: 'Bug fixes',
    d: 'Add-to-cart buttons that do nothing, wrong variants, empty filters, layouts that break on one phone, tracking that stops firing. Most follow a theme edit, app install or content change, so we start with what changed.',
  },
  {
    t: 'Shopify platform changes',
    d: (
      <>
        Scripts to Functions, checkout.liquid to checkout extensions, retiring script tags and expiring API versions. We track the
        dates and do the work before something breaks.{' '}
        <a href="#platform-changes" style={LINK_STYLE}>
          See the dates
        </a>
        .
      </>
    ),
  },
  {
    t: 'Speed and Core Web Vitals monitoring',
    d: (
      <>
        Core Web Vitals are Google’s three page-experience scores. <Ext href={SRC_WEB_VITALS}>Google’s targets</Ext>: Largest
        Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of
        0.1 or less, for at least 75% of page loads. We recheck after every change.
      </>
    ),
  },
  {
    t: 'Uptime and checkout monitoring',
    d: 'Automated checks walk the shopper’s path to checkout. We watch Shopify’s status page and place a test order after payment, shipping or discount changes, so we find a broken checkout before customers do.',
  },
  {
    t: 'App audits and subscription cleanup',
    d: 'We list every app, its cost and whether a native Shopify feature does the same job. Uninstalling a paid app stops future charges, but some apps leave theme code behind, so we remove that too.',
  },
  {
    t: 'Integration upkeep: ERP, 3PL, PIM and marketplaces',
    d: 'Your ERP (orders, stock and accounting), 3PL (outside warehouse) and PIM (product data) connections rely on webhooks, messages Shopify sends when data changes. Shopify retries a failed webhook up to eight times in a four-hour period, then removes the subscription.',
  },
  {
    t: 'Technical SEO health',
    d: (
      <>
        Deleted products and changed URLs need redirects. Shopify allows up to 100,000 URL redirects, or 20 million on Plus. We fix
        broken links and structured data errors. Bigger programs are a separate{' '}
        <InLink href="/services/shopify-seo">Shopify SEO</InLink> engagement.
      </>
    ),
  },
  {
    t: 'Accessibility fixes',
    d: 'The US Department of Justice’s position is that the ADA covers what businesses open to the public offer online. We fix low color contrast, missing alt text, unlabeled form fields and menus that don’t work with a keyboard.',
  },
  {
    t: 'Small feature work and CRO tests',
    d: (
      <>
        Hours can go to new sections, landing pages and product page changes, or to CRO tests (showing a change to part of your
        traffic to see if more visitors buy). Larger programs go to our <InLink href="/services/ecommerce-cro-agency">ecommerce CRO</InLink>{' '}
        service.
      </>
    ),
  },
  {
    t: 'Peak-season code freeze and readiness',
    d: (
      <>
        Black Friday is November 27, 2026 and Cyber Monday is November 30. Before then we test discounts, checkout, apps and
        integrations, then freeze theme and app changes through the peak.
        {PEAK_SEASON_PLANS.length > 0 ? ` ${listNames(PEAK_SEASON_PLANS)} includes a peak-season readiness plan.` : ''}
      </>
    ),
  },
  {
    t: 'B2B and Shopify Plus features',
    d: (
      <>
        Plus stores add B2B company accounts and catalogs, checkout customizations and custom apps built on Shopify Functions, which
        only Plus stores can use. We keep B2B price lists in step with your ERP. See{' '}
        <InLink href="/services/shopify-plus-b2b">Shopify Plus B2B</InLink>.
      </>
    ),
  },
];

const SHOPIFY_SUPPORT_HELPS = [
  'Account and platform questions, by chat around the clock on every plan',
  'Phone support on Plus, Retail and POS Pro, and email tickets on Plus and Retail, which Shopify says typically get a response within 48 hours',
  'Apps made by Shopify',
  'Free Shopify themes, including up to 60 minutes of design time on the Basic plan or higher',
];

const SHOPIFY_SUPPORT_EXCLUDES = [
  'Most custom code issues, unless you’re on Shopify Plus or are a Shopify Partner',
  'Third-party apps and paid third-party themes, which their developers support',
  'Editing the checkout, or themes with significant code changes',
  'Customizing third-party code, including AI-generated theme blocks',
  'Outbound phone or video calls, on any plan',
];

const STEPS = [
  {
    t: 'Onboarding audit',
    d: 'On Shopify we request a collaborator account, so you never share a password. We back up the live theme, version theme code with Shopify’s GitHub integration and list every app, script, webhook and integration. It works the same whether we or another team built the store.',
  },
  {
    t: 'Ticket intake',
    d: 'One shared queue, with a separate urgent route so a checkout failure never waits behind a banner change.',
  },
  {
    t: 'Severity triage',
    d: 'Each ticket gets a level, critical, high or standard, which sets the order of work and the first-response time.',
  },
  {
    t: 'Build, test, publish',
    d: 'Changes are made on a draft theme or staging copy, tested on desktop and mobile, then published. Checkout changes get a test order.',
  },
  ...(REPORT_PLANS.length > 0
    ? [
        {
          t: 'Monthly store health report',
          d: `Hours used, tickets by severity, updates applied, Core Web Vitals trends, incidents and upcoming Shopify deadlines. Included on ${EVERY_PLAN_REPORTS ? 'every plan' : listNames(REPORT_PLANS)}.`,
        },
      ]
    : []),
  ...(ROADMAP_PLANS.length > 0
    ? [
        {
          t: 'Quarterly roadmap call',
          d: `We plan the next quarter together: features, CRO tests, platform migrations and peak-season work. Included on ${listNames(ROADMAP_PLANS)}.`,
        },
      ]
    : []),
];

const PLATFORMS: ReadonlyArray<{ t: string; d: ReactNode }> = [
  {
    t: 'Shopify and Shopify Plus',
    d: (
      <>
        Theme, app, checkout and integration upkeep, plus Plus work such as B2B and custom Functions. Shopify’s enterprise blog puts the
        minimum team for maintaining a headless storefront at five to seven engineers, so we scope headless separately. See{' '}
        <InLink href="/services/shopify-development">Shopify development</InLink> and{' '}
        <InLink href="/services/headless-shopify-development">headless Shopify</InLink>.
      </>
    ),
  },
  {
    t: 'WooCommerce',
    d: (
      <>
        Upkeep covers hosting, PHP, WordPress core, WooCommerce and extensions. WooCommerce ships a release roughly every five weeks
        and WordPress recommends PHP 8.3 or greater, so we test on staging first. We are building{' '}
        <InLink href="/case-studies/sow-easy-distributor-portal">Sow Easy’s B2B WooCommerce website, connected to Odoo</InLink>. See{' '}
        <InLink href="/services/woocommerce-development">WooCommerce development</InLink>.
      </>
    ),
  },
  {
    t: 'Magento and Adobe Commerce',
    d: (
      <>
        Adobe gives each Adobe Commerce version three years of standard support: 2.4.6 left it on August 11, 2026, and 2.4.7 leaves it
        on May 31, 2027. From June 1, 2027, Adobe stops maintaining Cloud environments on unsupported versions (
        <Ext href={SRC_ADOBE_LIFECYCLE}>Adobe lifecycle policy</Ext>). If upgrading costs more than it returns, we map a{' '}
        <InLink href="/replatforming/magento-to-shopify">move to Shopify</InLink>. See{' '}
        <InLink href="/services/magento-development">Magento development</InLink>.
      </>
    ),
  },
  {
    t: 'BigCommerce',
    d: (
      <>
        BigCommerce themes run on Stencil, its Handlebars-based theme engine, and headless builds can use Catalyst, its storefront
        framework built with Next.js. We maintain both, plus B2B Edition setups, app conflicts and integrations. See{' '}
        <InLink href="/bigcommerce-development">BigCommerce development</InLink> and{' '}
        <InLink href="/services/bigcommerce-b2b">BigCommerce B2B Edition</InLink>.
      </>
    ),
  },
  {
    t: 'Commerceflo',
    d: (
      <>
        FactoryJet’s own AI commerce operator, in early access: DTC, B2B, marketplace and retail POS selling on one data model,
        supported by the team that builds it. We built <InLink href="/case-studies/belle-maison-ecommerce-success">Belle Maison’s</InLink> DTC and B2B
        storefront and <InLink href="/case-studies/gpsuk-promotional-products">GPSUK’s</InLink> trade storefront on it. It is our
        product, so note our interest: stores that sell mainly through one channel with simple rules are often better served by
        Shopify or BigCommerce.{' '}
        <InLink href="/commerceflo">About Commerceflo</InLink>.
      </>
    ),
  },
];

const COMPARE_COLUMNS = [
  'Agency retainer',
  'Freelancer',
  'In-house developer',
  'Through Shopify (Growth Services or a Partner Directory hire)',
  'No ongoing support',
];

const COMPARE_ROWS = [
  {
    factor: 'Who does the work',
    values: [
      'A team of developers, often with QA, SEO and design',
      'One person',
      'Your employee',
      'Shopify’s specialists or an independent partner',
      'Whoever is free when something breaks',
    ],
  },
  {
    factor: 'Response times in writing',
    values: ['Usually, in the agreement', 'Sometimes', 'Set by your team', 'Agreed per engagement', 'None'],
  },
  {
    factor: 'Cover when someone is away',
    values: ['Others who know the store', 'A gap', 'A gap unless you hire two', 'Depends on the engagement', 'None'],
  },
  {
    factor: 'Range of skills',
    values: [
      'Theme, apps, integrations, SEO and accessibility',
      'One or two specialties',
      'Depends on the hire',
      'Growth Services lists CRO, SEO, speed, development, payment migrations and advisory',
      'None',
    ],
  },
  {
    factor: 'How you pay',
    values: [
      'Monthly fee for reserved hours',
      'Hourly or per task',
      'Salary, benefits and recruiting',
      'Quoted per engagement',
      'Emergency rates and lost sales when things break',
    ],
  },
  {
    factor: 'Best fit',
    values: [
      'Stores that change monthly and run several apps and integrations',
      'Small stores with occasional, defined tasks',
      'Large stores with daily development work',
      'A defined project or a niche skill',
      'Small, stable stores on a free theme with few apps',
    ],
  },
];

const COST_DRIVERS = [
  'Hours reserved each month',
  'Response speed, and whether it covers nights and weekends',
  'How customized your theme and checkout are',
  'The number of apps and integrations',
  'Self-hosted platforms, which add server and security patching',
  'Extras such as CRO testing, SEO or design',
];

const PRICE_REFERENCES: ReadonlyArray<{ href: string; label: string; text: string }> = [
  {
    href: REF_SHOPIFY_MAINTENANCE_COST,
    label: 'Shopify’s enterprise blog',
    text: '(last updated April 2024) lists $1,500 to $2,500 a month to maintain an ecommerce website, and $2,000 to $5,000 a month for a custom ecommerce site.',
  },
  {
    href: REF_ECOMMERCE_PRO,
    label: 'Ecommerce Pro',
    text: 'publishes an Essential plan at $900 a month with five hours of technical support, and an Advanced plan at $1,700 a month with ten hours.',
  },
  {
    href: REF_CRAFTBERRY,
    label: 'Craftberry',
    text: 'publishes retainers starting at $2,000 a month, and hourly rates of $90 on a yearly agreement or $100 month-to-month.',
  },
];

/* Named providers. Each description is based only on that agency's own support page, checked 2026-09-17. */
const PROVIDERS: ReadonlyArray<{ name: string; href: string; linkLabel: string; body: string; fit: string }> = [
  {
    name: 'Charle',
    href: REF_CHARLE,
    linkLabel: 'Charle’s support page',
    body: 'Runs Charle HelpDesk, a Shopify and Shopify Plus support service for bug fixes, theme updates, app management and speed. CRO testing is sold separately as SiteLab. It says a US-based team handles requests, urgent sales issues first.',
    fit: 'Shopify brands that want a Shopify-only agency.',
  },
  {
    name: 'Vyomco',
    href: REF_VYOMCO,
    linkLabel: 'Vyomco’s support page',
    body: 'Sells Shopify and Shopify Plus retainers with monthly hours that flex across development, design and app work, and escalation paths agreed at onboarding. It says it was founded in India, with teams in the US, Germany and Australia.',
    fit: 'Stores whose needs change a lot from month to month.',
  },
  {
    name: '1Digital Agency',
    href: REF_1DIGITAL,
    linkLabel: '1Digital Agency’s support page',
    body: 'Offers retainer or on-demand support for Shopify, BigCommerce, Magento (Adobe Commerce) and WooCommerce, with monthly hour blocks, rollover options and business-day response SLAs (service level agreements). It cites a 24 to 48 hour turnaround on most issues.',
    fit: 'Merchants on more than one platform.',
  },
  {
    name: 'Craftberry',
    href: REF_CRAFTBERRY,
    linkLabel: 'Craftberry’s retainer page',
    body: 'Sells monthly retainers that reserve team capacity for mid-sized and large Shopify and Shopify Plus brands, and describes itself as a Shopify Premier Partner. It publishes its pricing, rolls unused hours over, and says stores with light needs may suit hourly support better.',
    fit: 'Larger Shopify Plus brands with heavy app and integration stacks.',
  },
  {
    name: 'Ecommerce Pro',
    href: REF_ECOMMERCE_PRO,
    linkLabel: 'Ecommerce Pro’s retainer page',
    body: 'A Toronto-based Shopify agency selling retainer memberships with set support hours, monthly consulting calls and a monthly theme backup, plus a custom Master plan. It says tasks get a response within 24 hours and its plans carry no long-term commitment.',
    fit: 'Smaller stores that want a fixed block of hours for design and theme tasks.',
  },
];

const FACTORYJET_ENTRY = {
  name: 'FactoryJet (the author of this page)',
  body: `A registered Shopify Partner that has served 500+ businesses. Our ${listNames(
    SUPPORT_PLANS.map((plan) => plan.name),
  )} plans publish included hours and first-response times, and cover Shopify, Shopify Plus, WooCommerce, Magento and Adobe Commerce, BigCommerce and Commerceflo.`,
  fit: 'Stores where problems cross from the storefront into ERP, warehouse and marketplace systems.',
};

const CHOOSE_QUESTIONS = [
  'What is your first-response time for a store-down issue, and does it cover weekends?',
  'Is that a first response or a fix time, and is it written into the agreement?',
  'Who does the work, and will the same people know our store next month?',
  'What happens to hours we don’t use?',
  'How will you access our store? On Shopify, the right answer is a collaborator account, never our password.',
  'How do you test changes, and how fast can you roll back a bad theme update?',
  'Which Shopify deadlines affect our store in the next six months?',
  'Can we see a sample monthly report?',
];

const HERO_PROOF = ['Registered Shopify Partner', '500+ businesses served', 'First-response times in writing'];

const IN_WRITING = [
  'Development hours reserved for your store each month',
  'First-response times for critical and standard requests',
  'Named access for our team, never a shared password',
  ...(EVERY_PLAN_REPORTS ? ['A monthly store health report'] : []),
];

/* JSON-LD. The Service schema is emitted first so the page's first Commerceflo mention reads "Commerceflo by FactoryJet". */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Shopify Maintenance Services and Support Retainers',
  serviceType: 'Ecommerce website support and maintenance',
  url: PAGE_URL,
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'Ecommerce brands on Shopify, Shopify Plus, WooCommerce, Magento, Adobe Commerce and BigCommerce',
  },
  description: `Monthly support and maintenance retainers from FactoryJet, a registered Shopify Partner, for stores on Shopify, Shopify Plus, WooCommerce, Magento and Adobe Commerce, BigCommerce and Commerceflo by FactoryJet. Scope covers theme and app updates, bug fixes, Shopify platform changes, speed and checkout monitoring, app audits, integration upkeep, technical SEO, accessibility fixes, small features and peak-season readiness. ${SUPPORT_PLANS.map(planSentence).join(' ')} Plans are scoped and quoted after an onboarding audit.`,
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  datePublished: '2026-09-17',
  dateModified: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    jobTitle: 'Founder',
    url: 'https://factoryjet.com/about',
    sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/'],
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  about: { '@id': `${PAGE_URL}#service` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const providersSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Shopify support and maintenance retainer providers',
  itemListElement: [
    ...PROVIDERS.map((provider, index) => ({ '@type': 'ListItem', position: index + 1, name: provider.name, url: provider.href })),
    { '@type': 'ListItem', position: PROVIDERS.length + 1, name: 'FactoryJet', url: PAGE_URL },
  ],
};

export default function ShopifyMaintenanceServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={webPageSchema} id="webpage-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={providersSchema} id="providers-schema" />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader locale="us" />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* HERO (light) */}
        <section className="pp-dotgrid">
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)' }}>
            <div
              className="pp-herogrid"
              style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }}
            >
              <div>
                <p className="pp-eyebrow">Shopify support and maintenance retainers</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '20ch' }}>Shopify maintenance services with published response times</h1>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  We keep Shopify and Shopify Plus stores working after launch: theme and app updates, bug fixes, platform changes,
                  speed, checkout and the integrations behind your store. We also support WooCommerce, Magento, BigCommerce and
                  Commerceflo by FactoryJet stores, with hours and first-response times in writing.
                </p>
                <HeroInlineForm source="us_services_shopify_maintenance_services_hero" region="us" submitLabel="Scope my support plan" />
                <ul style={{ marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '8px 18px' }}>
                  {HERO_PROOF.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#46403B' }}>
                      <span style={{ ...TICK_STYLE, marginTop: 0 }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  src="/images/us/commerce/woocommerce-to-shopify-people-laptop-orders.webp"
                  alt="A store owner checks the order list on a laptop in his stockroom"
                  width={1280}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px', border: '1px solid #E7DED6' }}
                />
                <div style={{ ...CARD_STYLE, marginTop: '14px', padding: '16px 18px' }}>
                  <p
                    className="font-fj-mono"
                    style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B23E13' }}
                  >
                    How we triage every request
                  </p>
                  <ul style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                    {SEVERITY.map((s) => (
                      <li key={s.level} style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: 1.45, color: '#46403B' }}>
                        <b style={{ minWidth: '72px', color: '#14110F' }}>{s.level}</b>
                        <span>{upperFirst(s.means)}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="pp-sec tint" id="quick-answer" style={{ paddingTop: 'clamp(36px,5vh,56px)', paddingBottom: 'clamp(36px,5vh,56px)' }}>
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">Quick answer</p>
            <h2 style={{ marginTop: '8px', fontSize: 'clamp(22px,3vw,30px)' }}>What does a Shopify support and maintenance retainer cover?</h2>
            <p style={{ marginTop: '14px', fontSize: '17px', lineHeight: 1.65, color: '#14110F' }}>
              <b>
                A Shopify support and maintenance retainer is a monthly plan that reserves developer hours for your store and sets
                written first-response times for problems.
              </b>{' '}
              It covers theme and app updates, bug fixes, Shopify platform changes, speed and checkout monitoring, and integration
              upkeep. Choose one by its response times, included hours, platform depth and who does the work.
            </p>
          </div>
        </section>

        {/* DATED PLATFORM CHANGES */}
        <section className="pp-sec" id="platform-changes">
          <div className="pp-wrap">
            <p className="pp-mlabel">Dated platform changes</p>
            <h2 style={{ marginTop: '10px', maxWidth: '26ch' }}>Shopify changes that break stores nobody is maintaining</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Shopify retires tools on published dates, and a missed one rarely shows an error. A discount stops applying, or a
              tracking script goes quiet. These dates matter now.
            </p>
            <ol
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: '14px',
              }}
            >
              {DEADLINES.map((item) => (
                <li key={item.iso} style={{ ...CARD_STYLE, padding: '18px' }}>
                  <p className="font-fj-mono" style={{ fontSize: '13px', fontWeight: 700, color: '#B23E13' }}>
                    <time dateTime={item.iso}>{item.date}</time>
                  </p>
                  <p style={{ ...BODY_TEXT, marginTop: '8px' }}>{item.text}</p>
                </li>
              ))}
            </ol>
            <div style={{ ...GRID_2, marginTop: '28px' }}>
              {PLATFORM_CHANGES.map((change) => (
                <div key={change.t}>
                  <h3 style={{ fontSize: '18px', color: '#14110F' }}>{change.t}</h3>
                  <p style={{ ...BODY_TEXT, marginTop: '6px' }}>{change.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT A RETAINER INCLUDES */}
        <section className="pp-sec tint" id="whats-included">
          <div className="pp-wrap">
            <p className="pp-mlabel">Scope</p>
            <h2 style={{ marginTop: '10px', maxWidth: '28ch' }}>
              What Shopify maintenance services include: {JOBS.length} jobs a retainer should cover
            </h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Shopify runs the servers and platform security, and it is certified Level 1 PCI DSS compliant (the security standard for
              card data) for every store. Everything you add on top is yours to keep working.
            </p>
            <ol
              style={{
                marginTop: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '16px',
              }}
            >
              {JOBS.map((job, index) => (
                <li key={job.t} className="pp-card">
                  <span className="font-fj-mono" style={{ fontSize: '12px', fontWeight: 700, color: '#B23E13' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ marginTop: '6px', fontSize: '17px', color: '#14110F' }}>{job.t}</h3>
                  <p>{job.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHAT SHOPIFY SUPPORT COVERS */}
        <section className="pp-sec" id="shopify-support">
          <div className="pp-wrap">
            <p className="pp-mlabel">What Shopify covers</p>
            <h2 style={{ marginTop: '10px', maxWidth: '28ch' }}>What Shopify Support covers, and where a retainer takes over</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Shopify Support handles platform and account questions. It is not a development team for your theme, apps or
              integrations. Here is the line, based on <Ext href={SRC_SHOPIFY_SUPPORT}>Shopify’s Help Center</Ext>.
            </p>
            <div style={{ ...GRID_2, marginTop: '28px' }}>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>Shopify Support helps with</h3>
                <ul style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
                  {SHOPIFY_SUPPORT_HELPS.map((item) => (
                    <li key={item} style={{ ...BODY_TEXT, display: 'flex', gap: '10px' }}>
                      <span style={TICK_STYLE}>{checkIcon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>Shopify Support doesn’t cover</h3>
                <ul style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
                  {SHOPIFY_SUPPORT_EXCLUDES.map((item) => (
                    <li key={item} style={{ ...BODY_TEXT, display: 'flex', gap: '10px' }}>
                      <span aria-hidden="true" style={{ flex: 'none', width: '18px', color: '#6E635A', fontWeight: 700, textAlign: 'center' }}>
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>Shopify Growth Services</h3>
                <p style={{ ...BODY_TEXT, marginTop: '10px' }}>
                  <Ext href={REF_GROWTH_SERVICES}>Shopify Growth Services</Ext> is Shopify’s own paid team for merchants and partners:
                  conversion rate optimization, SEO, speed optimization, web development, payment migrations and technical advisory.
                  Engagements start with a call, and Shopify says work ranges from quick one-hour checkups to long-term retainers.
                </p>
              </div>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>The Shopify Partner Directory</h3>
                <p style={{ ...BODY_TEXT, marginTop: '10px' }}>
                  The <Ext href={REF_PARTNER_DIRECTORY}>Partner Directory</Ext> is Shopify’s marketplace of independent partners, with
                  categories such as Troubleshooting, Ongoing website management and Checkout upgrade. Partners are tiered Select, Plus,
                  Premier or Platinum, and you set terms directly with the one you hire. FactoryJet is a registered Shopify Partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS (rendered from SUPPORT_PLANS) */}
        <section className="pp-sec tint" id="plans">
          <div className="pp-wrap">
            <p className="pp-mlabel">Plans</p>
            <h2 style={{ marginTop: '10px', maxWidth: '26ch' }}>Support plans: included hours and first-response times</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Each plan reserves development hours every month and puts first-response times in writing. A first response means a
              developer has picked up your issue and replied, not that it is fixed. Every plan is scoped and quoted after an onboarding
              audit, and we don’t publish prices.
            </p>
            <ul className="pp-bento" style={{ marginTop: '32px' }}>
              {SUPPORT_PLANS.map((plan) => (
                <li key={plan.name} className="pp-card">
                  <p className="pp-mlabel" style={{ marginTop: 0 }}>
                    Plan
                  </p>
                  <h3 style={{ marginTop: '4px', fontSize: '24px', color: '#14110F' }}>{plan.name}</h3>
                  <p style={{ fontWeight: 600, color: '#14110F' }}>{upperFirst(plan.hours)}</p>
                  <dl style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
                    <div>
                      <dt className="font-fj-mono" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#B23E13' }}>
                        Critical issues
                      </dt>
                      <dd style={BODY_TEXT}>First response {criticalWindow(plan)}</dd>
                    </div>
                    <div>
                      <dt className="font-fj-mono" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#B23E13' }}>
                        Standard requests
                      </dt>
                      <dd style={BODY_TEXT}>First response {plan.standardResponse}</dd>
                    </div>
                  </dl>
                  <ul style={{ marginTop: '14px', display: 'grid', gap: '6px', borderTop: '1px solid #E7DED6', paddingTop: '12px' }}>
                    {plan.includes.map((item) => (
                      <li key={item} style={{ ...BODY_TEXT, fontSize: '14px', display: 'flex', gap: '8px' }}>
                        <span style={{ marginTop: '4px', flex: 'none', color: '#B23E13' }}>{checkIcon}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '18px', fontSize: '14px', lineHeight: 1.6, color: '#6E635A', maxWidth: '80ch' }}>
              {BUSINESS_HOURS_NOTE} Critical means {SEVERITY[0].means}. Redesigns, replatforming and large builds are scoped separately.
            </p>
          </div>
        </section>

        {/* MID-PAGE CTA (light band) */}
        <MidPageCTA
          headline="Not sure which plan your store needs?"
          sub="Send your store URL and tell us what breaks most often. We will review your theme, apps, checkout and integrations, recommend a plan and quote it."
          label="Request a support audit"
        />

        {/* HOW IT WORKS */}
        <section className="pp-sec" id="how-it-works">
          <div className="pp-wrap">
            <div
              className="pp-herogrid"
              style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}
            >
              <div>
                <p className="pp-mlabel">How it works</p>
                <h2 style={{ marginTop: '10px' }}>How a FactoryJet support retainer works</h2>
                <p className="pp-lead" style={LEAD_STYLE}>
                  From first login to next quarter’s plan, you always know who is working on your store and what changed.
                </p>
                <img
                  src="/images/us/commerce/replatforming-people-ops-review.webp"
                  alt="An ecommerce manager reads through a report at her desk"
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  style={{ marginTop: '24px', width: '100%', height: 'auto', display: 'block', borderRadius: '18px', border: '1px solid #E7DED6' }}
                />
              </div>
              <ol style={{ display: 'grid', gap: '12px' }}>
                {STEPS.map((step, index) => (
                  <li key={step.t} style={{ ...CARD_STYLE, display: 'flex', gap: '16px', padding: '18px 20px' }}>
                    <span
                      className="font-fj-mono"
                      style={{
                        flex: 'none',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '2px solid #F05A28',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#B23E13',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '17px', color: '#14110F' }}>{step.t}</h3>
                      <p style={{ ...BODY_TEXT, marginTop: '4px' }}>{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <h3 id="severity" style={{ marginTop: '48px', fontSize: '22px', color: '#14110F' }}>
              Severity levels and first responses
            </h3>
            <div style={{ marginTop: '16px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th scope="col">Severity</th>
                    <th scope="col">What it means</th>
                    <th scope="col">Examples</th>
                    <th scope="col">First response</th>
                  </tr>
                </thead>
                <tbody>
                  {SEVERITY.map((s) => (
                    <tr key={s.level}>
                      <td className="name">{s.level}</td>
                      <td>{upperFirst(s.means)}.</td>
                      <td>{s.examples}</td>
                      <td>
                        {s.level === 'Critical' &&
                          SUPPORT_PLANS.map((plan) => (
                            <span key={plan.name} style={{ display: 'block' }}>
                              {plan.name}: {criticalWindow(plan)}
                            </span>
                          ))}
                        {s.level === 'High' && 'Worked before standard requests, first response inside your plan’s standard time'}
                        {s.level === 'Standard' &&
                          SUPPORT_PLANS.map((plan) => (
                            <span key={plan.name} style={{ display: 'block' }}>
                              {plan.name}: {plan.standardResponse}
                            </span>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '12px', fontSize: '13.5px', color: '#6E635A' }}>
              {BUSINESS_HOURS_NOTE} A high issue that starts costing sales moves up to critical.
            </p>
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="pp-sec tint" id="platforms">
          <div className="pp-wrap">
            <p className="pp-mlabel">Platforms</p>
            <h2 style={{ marginTop: '10px', maxWidth: '30ch' }}>Support for Shopify, WooCommerce, Magento, BigCommerce and Commerceflo</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Shopify runs hosting and platform updates for you. Self-hosted WooCommerce and Magento stores add server, core and security
              patching.
            </p>
            <ul style={{ ...GRID_2, marginTop: '28px' }}>
              {PLATFORMS.map((platform) => (
                <li key={platform.t} style={CARD_STYLE}>
                  <h3 style={{ fontSize: '19px', color: '#14110F' }}>{platform.t}</h3>
                  <p style={{ ...BODY_TEXT, marginTop: '8px' }}>{platform.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="pp-sec" id="compare">
          <div className="pp-wrap">
            <p className="pp-mlabel">Your options</p>
            <h2 style={{ marginTop: '10px', maxWidth: '30ch' }}>Agency retainer vs freelancer vs in-house developer vs hiring through Shopify</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Every option can work. It depends on how often your store changes and what downtime costs. FactoryJet sells retainers, so
              weigh our view with that in mind.
            </p>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    {COMPARE_COLUMNS.map((column) => (
                      <th key={column} scope="col">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row.factor}>
                      <td className="name">{row.factor}</td>
                      {row.values.map((value, index) => (
                        <td key={`${row.factor}-${COMPARE_COLUMNS[index]}`}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COST */}
        <section className="pp-sec tint" id="cost">
          <div className="pp-wrap">
            <p className="pp-mlabel">Cost</p>
            <h2 style={{ marginTop: '10px', maxWidth: '28ch' }}>What Shopify maintenance costs, and what drives the price</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              FactoryJet quotes after an audit and doesn’t publish prices. To help you budget, here is what moves the number and what
              others publish.
            </p>
            <div style={{ ...GRID_2, marginTop: '28px' }}>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>What drives the price</h3>
                <ul style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
                  {COST_DRIVERS.map((item) => (
                    <li key={item} style={{ ...BODY_TEXT, display: 'flex', gap: '10px' }}>
                      <span style={TICK_STYLE}>{checkIcon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={CARD_STYLE}>
                <h3 style={{ fontSize: '18px', color: '#14110F' }}>Published reference points</h3>
                <ul style={{ marginTop: '14px', display: 'grid', gap: '12px' }}>
                  {PRICE_REFERENCES.map((ref) => (
                    <li key={ref.label} style={BODY_TEXT}>
                      <Ext href={ref.href} nofollow>
                        {ref.label}
                      </Ext>{' '}
                      {ref.text}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '14px', fontSize: '13.5px', lineHeight: 1.55, color: '#6E635A' }}>
                  Checked September 17, 2026. Compare what each plan includes, not just the monthly figure: hours, response times,
                  rollover rules and who does the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAMED PROVIDERS */}
        <section className="pp-sec" id="alternatives">
          <div className="pp-wrap">
            <p className="pp-mlabel">Who offers it</p>
            <h2 style={{ marginTop: '10px', maxWidth: '30ch' }}>Who offers ecommerce support and maintenance retainers for Shopify stores?</h2>
            <p className="pp-lead" style={LEAD_STYLE}>
              Shopify-focused agencies that publish a support or retainer offer include Charle, Vyomco, 1Digital Agency, Craftberry and
              Ecommerce Pro. Each summary comes from the agency’s own website, checked September 17, 2026. FactoryJet is one of the
              options, so weigh our entry accordingly.
            </p>
            <ol style={{ ...GRID_2, marginTop: '28px' }}>
              {PROVIDERS.map((provider) => (
                <li key={provider.name} style={CARD_STYLE}>
                  <h3 style={{ fontSize: '19px', color: '#14110F' }}>{provider.name}</h3>
                  <p style={{ ...BODY_TEXT, marginTop: '8px' }}>{provider.body}</p>
                  <p style={{ ...BODY_TEXT, marginTop: '8px' }}>
                    <b style={{ color: '#14110F' }}>Fits:</b> {provider.fit}
                  </p>
                  <p style={{ marginTop: '10px', fontSize: '13.5px' }}>
                    <Ext href={provider.href} nofollow>
                      {provider.linkLabel}
                    </Ext>
                  </p>
                </li>
              ))}
              <li style={{ ...CARD_STYLE, borderColor: '#F05A28', background: '#FFF8F5' }}>
                <h3 style={{ fontSize: '19px', color: '#14110F' }}>{FACTORYJET_ENTRY.name}</h3>
                <p style={{ ...BODY_TEXT, marginTop: '8px' }}>{FACTORYJET_ENTRY.body}</p>
                <p style={{ ...BODY_TEXT, marginTop: '8px' }}>
                  <b style={{ color: '#14110F' }}>Fits:</b> {FACTORYJET_ENTRY.fit}
                </p>
                <p style={{ marginTop: '10px', fontSize: '13.5px' }}>
                  <a href="#plans" style={LINK_STYLE}>
                    See our plans
                  </a>
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* HOW TO CHOOSE */}
        <section className="pp-sec tint" id="choose">
          <div className="pp-wrap">
            <div
              className="pp-herogrid"
              style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}
            >
              <div>
                <p className="pp-mlabel">Checklist</p>
                <h2 style={{ marginTop: '10px' }}>
                  How to choose a Shopify maintenance partner: {CHOOSE_QUESTIONS.length} questions to ask
                </h2>
                <p className="pp-lead" style={LEAD_STYLE}>
                  Ask every provider these, including us. Vague answers now become slow answers when checkout breaks.
                </p>
                <ol style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
                  {CHOOSE_QUESTIONS.map((question, index) => (
                    <li key={question} style={{ ...BODY_TEXT, fontSize: '15px', display: 'flex', gap: '12px' }}>
                      <span className="font-fj-mono" style={{ flex: 'none', minWidth: '22px', fontSize: '12px', fontWeight: 700, color: '#B23E13', marginTop: '3px' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <img
                src="/images/us/commerce/woocommerce-to-shopify-plugin-sprawl.webp"
                alt="A developer sorts colored sticky notes on a wall while planning store work"
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '18px', border: '1px solid #E7DED6' }}
              />
            </div>
          </div>
        </section>

        {/* FAQ (single array feeds the accordion and the FAQPage schema) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="SHOPIFY MAINTENANCE FAQ"
          headline="Shopify support and maintenance: questions store owners ask"
          lead="Straight answers on what maintenance covers, what Shopify’s own support does, what it costs, and how our plans work."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* AUTHOR AND FACT-CHECK NOTE */}
        <section className="pp-sec tint" id="about-this-page">
          <div className="pp-wrap pp-narrow">
            <p className="pp-mlabel">About this page</p>
            <h2 style={{ marginTop: '10px' }}>Who wrote this page, and how the facts were checked</h2>
            <div style={{ ...CARD_STYLE, marginTop: '22px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <img
                src="/bhavesh_image.webp"
                alt="Bhavesh Barot, founder of FactoryJet"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                style={{ flex: 'none', width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #F05A28' }}
              />
              <div>
                <p style={{ fontWeight: 700, fontSize: '16px', color: '#14110F' }}>Bhavesh Barot, Founder of FactoryJet</p>
                <p style={{ ...BODY_TEXT, marginTop: '6px' }}>
                  FactoryJet is a registered Shopify Partner and has served 500+ businesses. This page was last reviewed on September
                  17, 2026, when every platform date and limit on it was checked against documentation from Shopify, Adobe, WooCommerce,
                  WordPress.org, BigCommerce, web.dev and ADA.gov. Shopify changes its tools often, so check its changelog before acting
                  on a date.
                </p>
                <p style={{ marginTop: '10px', fontSize: '14px' }}>
                  <InLink href="/about">About FactoryJet</InLink>
                  {' · '}
                  <a href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/" target="_blank" rel="noopener noreferrer" style={LINK_STYLE}>
                    Bhavesh on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pp-sec" id="final-cta">
          <div className="pp-wrap">
            <div className="pp-ctagrid">
              <div className="pp-cta">
                <p className="pp-mlabel">Get started</p>
                <h2 style={{ margin: '12px 0 14px', maxWidth: '22ch' }}>Get a maintenance plan built around your store</h2>
                <p className="pp-lead" style={{ maxWidth: '50ch' }}>
                  Tell us your platform, your apps and what broke last. We will audit the store, recommend a plan and send a quote.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '13px',
                      background: '#B23E13',
                      padding: '14px 24px',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                    }}
                  >
                    Talk to the founder
                  </a>
                  <ModalCTAButton label="Request a support audit" region="us" btnVariant="secondary-light" />
                </div>
                <p style={{ marginTop: '22px', fontSize: '14px', lineHeight: 1.7, color: '#6E635A' }}>
                  Related: <InLink href="/services/ecommerce-development">ecommerce development</InLink>,{' '}
                  <InLink href="/services/shopify-development">Shopify development</InLink>,{' '}
                  <InLink href="/services/shopify-plus-agency">Shopify Plus agency</InLink>,{' '}
                  <InLink href="/services/shopify-plus-b2b">Shopify Plus B2B</InLink>,{' '}
                  <InLink href="/replatforming/magento-to-shopify">Magento to Shopify</InLink> and{' '}
                  <InLink href="/commerceflo">Commerceflo</InLink>.
                </p>
              </div>
              <div style={{ ...CARD_STYLE, padding: '26px' }}>
                <p style={{ fontWeight: 800, fontSize: '20px', color: '#14110F' }}>What every plan puts in writing</p>
                <ul style={{ marginTop: '16px', display: 'grid', gap: '10px' }}>
                  {IN_WRITING.map((item) => (
                    <li key={item} style={{ ...BODY_TEXT, display: 'flex', gap: '10px' }}>
                      <span style={TICK_STYLE}>{checkIcon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '16px', fontSize: '13.5px' }}>
                  <InLink href="/case-studies">See named client case studies</InLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
