import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../au-service.css';

const CANONICAL = 'https://factoryjet.com/au/websites-for-tradies';
const UPDATED = '2026-09-26';
const TITLE = 'Websites for Tradies Australia | Win More Jobs | FactoryJet';
const H1 = 'Websites for Tradies: Quote-Ready Sites That Get Found Locally and Turn Calls Into Booked Jobs';
const DESCRIPTION =
  'Websites for tradies across Australia: fast mobile sites with your licence, reviews and job photos, local SEO, and enquiries into ServiceM8 or Tradify.';

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
  { name: 'Websites for Tradies', url: CANONICAL },
];

/* ─── External sources, fetch-verified 2026-09-26 ───────────────────── */
// NSW Government, building trade advertisements: ads must show the licensee's
// name, licence number with the correct category of work, and business phone;
// applies to print, internet, TV, radio; covers electrical wiring, plumbing,
// draining, gas fitting, air conditioning and refrigeration work. HTTP 200.
const SRC_NSW_ADS =
  'https://www.nsw.gov.au/business-and-economy/running-a-business/advertising-laws-and-your-business/building-trade-advertisements';
// QBCC, advertising: licensees must include the name they are licensed under,
// that they are licensed under the QBCC Act, and the licence number; websites,
// social media pages and online directories count; details "easily legible and
// reasonably prominent"; QBCC logo must not be used. HTTP 200.
const SRC_QBCC_ADS = 'https://www.qbcc.qld.gov.au/running-your-business/advertising';
// Google Business Profile Help, service-area businesses: remove your address if
// you do not serve customers there; up to 20 service areas; overall area should
// not be more than about two hours' drive from your base. HTTP 200.
const SRC_GBP_SAB = 'https://support.google.com/business/answer/9157481?hl=en-AU';
// ACCC, online reviews for products and services: against the law to create
// fake or misleading reviews; incentives must apply whether the review is
// positive or negative and be disclosed; suppressing genuine negative reviews
// may mislead. HTTP 200.
const SRC_ACCC_REVIEWS =
  'https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Tradie website basics' },
  { key: 'builders', label: 'DIY builders, cost & ownership' },
  { key: 'leads',    label: 'Leads, hipages & job software' },
  { key: 'seo',      label: 'SEO, Google Maps & reviews' },
  { key: 'rules',    label: 'Licences, rules & AI' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Tradie website basics ──
  { category: 'basics', question: 'What are some good websites for tradies?',
    answer: 'The good ones are simple. They load fast on a phone, say what you do and where in the first line, show your licence number, reviews and real photos of your jobs, and make it one tap to call or send a job request. Look at the best local plumbers, sparkies and builders in your area on your phone: the ones you would call are the ones to learn from.' },
  { category: 'basics', question: 'Do I need a website if I get all my work from word of mouth?',
    answer: 'Usually yes, because word of mouth now ends in a search. A neighbour recommends you, and the customer looks you up before calling. If they find nothing, or an old page with no photos, many call the next name. A website backs up the recommendation with your licence, reviews and past jobs. It also keeps working when referrals go quiet.' },
  { category: 'basics', question: 'What should every tradie website include?',
    answer: 'Seven things: what you do and the areas you cover, stated in the first screen; a tap-to-call button and a short job request form; your licence number and business name; real photos of finished work; genuine reviews; a page for each main service you offer; and a clear line on how quotes work. Everything else is optional.' },
  { category: 'basics', question: 'Should my tradie website have a page for every service?',
    answer: 'Yes, for each main service people search for. A plumber might have separate pages for blocked drains, hot water systems, gas fitting and bathroom renovations. Each page answers the questions customers ask about that job and shows photos of it. That helps Google match you to specific searches, and it helps customers see you do the exact job they need.' },
  { category: 'basics', question: 'How long does it take to build a tradie website?',
    answer: 'With FactoryJet, a site of up to five pages has 7-day delivery once we have your content and photos. Larger sites with many service pages, a project gallery or a job system integration take a few weeks. The slowest part is almost always gathering photos, reviews and licence details, so we give you a short checklist on day one.' },

  // ── DIY builders, cost & ownership ──
  { category: 'builders', question: 'How much does it cost to pay someone to build a tradie website?',
    answer: 'It depends on the number of pages, whether you need copywriting and photos, any integration with ServiceM8, Tradify or simPRO, and whether local SEO is included. We quote a fixed price for your scope after a short call. For typical Australian market ranges from third-party sources, read our guide to website cost in Australia.' },
  { category: 'builders', question: 'What is the best Australian-based website builder?',
    answer: 'Most popular website builders used in Australia, such as Wix, Squarespace and GoDaddy, are overseas companies, and some trade job software also offers a simple site. The better question is which fits you. A DIY builder suits a new sole trader with time to tinker. Once you want to rank in several suburbs or connect enquiries to your job software, a custom site is usually worth it.' },
  { category: 'builders', question: 'What website builder do professionals use?',
    answer: 'Professional web developers usually build on WordPress, Webflow, Shopify for online stores, or custom code with modern frameworks. We choose based on what you need to do after launch: edit your own content, add service pages, connect a job system or load fast on patchy mobile coverage. You get the logins and the files either way.' },
  { category: 'builders', question: 'Is Wix actually free?',
    answer: 'You can build a Wix site for free, but the free plan puts Wix branding on your site and uses a Wix web address rather than your own domain. To use your own business domain and remove the branding you need a paid plan. For a trade business, a free address looks less trustworthy to customers, so most tradies end up paying anyway.' },
  { category: 'builders', question: 'What is the downside to Wix and other DIY builders?',
    answer: 'Three common downsides: the site is harder to move if you outgrow the builder, page speed and SEO control are limited compared with a custom build, and your time goes into building instead of working. DIY builders are fine to start. They are less suited to ranking across many suburbs or passing enquiries straight into ServiceM8 or simPRO.' },
  { category: 'builders', question: 'Can ChatGPT build me a website?',
    answer: 'ChatGPT and similar tools can draft page copy and even generate a basic page, which is useful for ideas. They cannot register your domain, collect your real job photos, check your licence details, set up your Google Business Profile or connect your job software. A usable tradie website still needs a person to put it together, check it and look after it.' },
  { category: 'builders', question: 'Do I own the website you build?',
    answer: 'Yes. The domain, the design, the content, the photos and the code are yours, and the domain and hosting accounts are in your business name. If you later want to manage it yourself or move to another company, you can. We build it, support it if you want us to, and hand you the keys.' },

  // ── Leads, hipages & job software ──
  { category: 'leads', question: 'Where should tradies advertise?',
    answer: 'Start with the free and owned channels: a Google Business Profile, your own website, and asking every happy customer for a review. Then add paid options that suit your trade, such as Google Ads for urgent jobs, lead marketplaces for filling gaps in the calendar, and signage on your ute. Your website ties them together, because every channel ends with the customer checking you out.' },
  { category: 'leads', question: 'What is better than hipages?',
    answer: 'For steady work, your own website plus a strong Google Business Profile is usually better long term, because customers contact you directly and nobody else is quoting on the same lead. Marketplaces such as hipages, Airtasker, ServiceSeeking and Oneflare are useful for filling quiet weeks, but you pay for access to customers who are also asking other tradies to quote.' },
  { category: 'leads', question: 'Is hipages or Airtasker better for tradies?',
    answer: 'They work differently. hipages is built around trade jobs and connecting homeowners with tradies. Airtasker is a general task marketplace where customers post a job and people make offers, so it covers many small tasks beyond licensed trade work. Which suits you depends on your trade and the size of job you want. Neither replaces your own website, which is the lead you do not share.' },
  { category: 'leads', question: 'What is the best job management software for tradies?',
    answer: 'The most common choices in Australia are ServiceM8, Tradify, simPRO, Fergus and AroFlo, and the best one depends on team size and trade. Sole traders and small teams often like ServiceM8 or Tradify. Bigger service and project businesses often need simPRO or AroFlo. Pick the software first, then make sure your website sends enquiries into it.' },
  { category: 'leads', question: 'Can website enquiries go straight into ServiceM8, Tradify or simPRO?',
    answer: 'Usually yes, although the method differs. Tradify offers its own website enquiry form you can embed on your site. ServiceM8, simPRO and Fergus can receive new jobs or leads through their integrations and developer tools. We connect your form so each enquiry arrives as a lead or job with the name, suburb, job type and photos, instead of an email someone has to retype.' },
  { category: 'leads', question: 'Can an AI receptionist answer calls while I am on the tools?',
    answer: 'Yes. An AI receptionist answers your business number when you cannot, tells callers it is an automated assistant, takes the address and the problem, books a slot in ServiceM8 or Tradify, and sends genuine emergencies straight to your mobile. It pairs well with a tradie website because the site creates more calls. See our AI receptionist page for how we build them.' },
  { category: 'leads', question: 'How do I get more leads as a tradie?',
    answer: 'Make it easy to find you and easy to contact you. That means a complete Google Business Profile, a steady flow of genuine reviews, a website with a page for each main service and a one-tap call button, fast replies to every enquiry, and a way to catch calls you miss. Most tradies lose more jobs to slow replies than to weak marketing.' },

  // ── SEO, Google Maps & reviews ──
  { category: 'seo', question: 'What is SEO for tradies, and does it work for plumbers and electricians?',
    answer: 'SEO (search engine optimisation) for tradies means making your website and Google Business Profile show up when people nearby search for your trade, such as "emergency plumber" plus their suburb. It works well for plumbers, electricians and other local trades because customers search with clear intent. It covers service pages, local signals, reviews, site speed and links from local sites.' },
  { category: 'seo', question: 'How much should I expect to pay for SEO?',
    answer: 'It depends on how competitive your trade and area are, how many services and suburbs you want to rank for, and whether content, reviews and links are included. Local SEO for one trade in one region needs far less than city-wide coverage across several services. For typical Australian market ranges from third-party sources, read our SEO cost guide for Australia.' },
  { category: 'seo', question: 'Is SEO still worth it for tradies in 2026?',
    answer: 'Yes, because people still search for trades, and those searches carry high intent: someone typing "blocked drain" plus a suburb usually wants it fixed soon. What changed is where answers appear. Google now shows AI Overviews on many searches, and people also ask ChatGPT for recommendations, so your site must answer real questions clearly as well as rank.' },
  { category: 'seo', question: 'How do I show up in the Google Maps results for my area?',
    answer: 'Claim and verify your Google Business Profile, choose the right main category, set your service areas, add real photos and your services, and keep reviews coming in. If you work at customers’ homes rather than a shopfront, Google says to remove your address and list only your service areas. Your website should back this up with matching business details.' },
  { category: 'seo', question: 'Is a Google Business Profile free and worth having?',
    answer: 'Yes on both counts. Creating and verifying a Google Business Profile is free, and for most tradies it is the single most important free listing they have, because it controls how you appear in Google Maps and the local results. Keep your hours, services, photos and service areas current, and link it to your website.' },
  { category: 'seo', question: 'Do I need a separate page for every suburb I work in?',
    answer: 'No. Copying the same page for dozens of suburbs and swapping the name creates thin pages Google tends to ignore. A better approach is strong pages for each main service, a clear service area on your site and Google Business Profile, and project write-ups that mention the real suburbs you worked in. Add a location page only where you have genuinely local content.' },
  { category: 'seo', question: 'How many Google reviews do I need?',
    answer: 'There is no magic number. What matters is a steady flow of genuine recent reviews, so ask every happy customer, every week. More reviews than nearby competitors, with detail about the job, help both your ranking and your conversion rate. Reply to every review, good or bad. Never write fake reviews or pay only for positive ones: the ACCC says that can break the law.' },
  { category: 'seo', question: 'How long does SEO take for a tradie business?',
    answer: 'A new or neglected site typically starts to show movement for local searches within a few months, and competitive trades in big cities take longer. Google Business Profile changes and new reviews often help sooner than website changes. Anyone promising page one in a couple of weeks is guessing. We report progress monthly against the searches that bring actual jobs.' },
  { category: 'seo', question: 'Can I do local SEO for my trade business myself?',
    answer: 'Yes, a lot of it. You can set up your Google Business Profile, ask for reviews, post job photos and keep your details consistent across directories. Where tradies usually need help is the website side: page speed, service page structure, technical setup and content that ranks. Many of our clients handle reviews and photos while we handle the site.' },

  // ── Licences, rules & AI ──
  { category: 'rules', question: 'Should my website show my licence number?',
    answer: 'In several states it is a legal requirement for advertising, and websites count. NSW requires licensed contractors to show their name and licence number, with the right category of work, in advertising including online. In Queensland, the QBCC says websites and social media pages count as advertising and licence details must be legible and prominent. Check your own state regulator.' },
  { category: 'rules', question: 'Can I use the QBCC or Fair Trading logo on my site?',
    answer: 'Not the QBCC logo. The QBCC says licensees must not use its logo in their own promotional material, although you can link to the QBCC website. The safest approach in any state is to show your licence number and category in plain text, and link to the regulator’s public licence check so customers can verify you themselves.' },
  { category: 'rules', question: 'Can I offer customers a discount for leaving a review?',
    answer: 'Only with care. The ACCC says any incentive for reviews must apply whether the review is positive or negative, and it must be disclosed so readers know the review was incentivised. It is also against the law to create fake reviews or to hide genuine negative ones. Most tradies do best by simply asking every customer, every time.' },
  { category: 'rules', question: 'Can ChatGPT and Google AI recommend my trade business?',
    answer: 'Yes, and it is already happening. When people ask AI assistants for a tradie, the answers draw on websites, reviews and directory listings. Clear service pages, consistent business details, genuine reviews and plain answers to common questions all make you easier to recommend. Our AI SEO work focuses on exactly this for Australian businesses.' },
];

/* ─── Named Australian providers (open self-disclosure, ItemList). Each note
       is based on the company's own website, fetched 2026-09-26. ────────── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build and support tradie websites with local SEO, job system integration and an optional AI receptionist, founder-involved on every project, and you own what we build.' },
  { name: 'Built4Tradies', note: 'An Australian web design firm that says it has built websites for tradespeople and construction businesses since 2005, alongside hosting, logo design and online marketing.' },
  { name: 'ServiceScale', note: 'Builds websites for tradies with a short three-step process, and says its sites can connect to job management tools such as ServiceM8, Tradify, Fergus and Jobber.' },
  { name: 'Tradie Web Guys', note: 'Based in Kingscliff, NSW, offering trade-focused websites plus SEO, Google Ads, Facebook Ads, CRM and AI automation for tradies and contractors.' },
  { name: 'My Tradie Site', note: 'A done-for-you service that builds tradie websites and adds SEO and Google Ads to generate calls and leads.' },
  { name: 'Digital Nomads HQ', note: 'A broader digital agency with a tradie web design service, building mainly on WordPress, with a four-phase process from discovery to launch.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ─────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Websites for Tradies Australia',
      serviceType: 'Tradie website design, local SEO for trades, job management integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Website design for Australian tradies: fast mobile websites with licence details, reviews and job photos, service pages built for local SEO, Google Business Profile setup, website enquiries sent to ServiceM8, Tradify, simPRO or Fergus, and an optional AI receptionist for missed calls. Supported after launch and owned by the client.',
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
      name: 'Australian website providers for tradies',
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
      'Tradie website design for Australian trades: licence and reviews up front, real job photos, local SEO, Google Business Profile, enquiries into your job software, and support after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/websites-for-tradies/tradie-website-og.webp', width: 1200, height: 630, alt: 'Websites for tradies: a Perth landscaper beside her ute checks her mobile website showing a finished garden job' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* "Which option fits you" self-check, rendered as <details> (no client JS). */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'I have just started out, I work alone and I am booked through referrals.', verdict: 'DIY builder or one page', a: 'A simple one-page site on a DIY builder, plus a verified Google Business Profile, is probably enough for now. Put your licence number, service area, a few job photos and a call button on it. Come back when you want to grow.' },
  { q: 'I rely on hipages or other lead sites and I am tired of competing on every quote.', verdict: 'Own website + local SEO', a: 'This is the most common reason tradies call us. A proper site with service pages and a strong Google profile gives you leads nobody else is quoting on. Keep the marketplace for quiet weeks while the site builds up.' },
  { q: 'I miss calls on the tools and lose jobs to whoever answers first.', verdict: 'Website + AI receptionist', a: 'Your problem is not traffic, it is catching the enquiries you already get. Pair a clear website with a job request form and an AI receptionist that answers, books into your job software and sends emergencies to your mobile.' },
  { q: 'I have a team of several techs and we use ServiceM8, Tradify, simPRO or Fergus.', verdict: 'Custom site + integration', a: 'Enquiries should land in your job system as leads with the right job type and suburb, not in someone’s inbox. That integration, plus service pages per trade line, is where a custom build pays for itself.' },
  { q: 'I have a website already, but it is slow, old or never brings in work.', verdict: 'Rebuild or fix', a: 'Sometimes a few fixes are enough: speed, a call button, a job request form and proper service pages. Sometimes a rebuild is faster. We will look at it with you and tell you which, honestly.' },
];

/* The listicle: seven things every tradie website needs. */
const MUST_HAVES: { t: string; d: string }[] = [
  { t: 'Your trade and service area in the first screen', d: 'A customer on a phone decides in seconds. "Licensed electrician, Northern Beaches and North Shore" beats a clever slogan every time.' },
  { t: 'One-tap call and a short job request form', d: 'The call button stays visible as people scroll. The form asks for name, suburb, job type and an optional photo. Nothing more.' },
  { t: 'Your licence number and business name', d: 'Shown in plain text in the footer and on your contact page, with a link to your state’s public licence check. In several states it is a legal requirement.' },
  { t: 'Real photos of real jobs', d: 'Before and after shots from your own phone beat stock photos. Customers want to see your work, your ute and your team.' },
  { t: 'Genuine reviews', d: 'Pull in your Google reviews and add named testimonials with the suburb and job type. Recent and specific beats old and vague.' },
  { t: 'A page for each main service', d: 'Hot water, blocked drains, switchboard upgrades, decks, retaining walls. Each page answers the questions customers ask about that job.' },
  { t: 'A clear line on how quotes work', d: 'Free quotes or a call-out fee, how soon you reply, and what happens next. Uncertainty is the main reason people do not get in touch.' },
];

const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'A short call about your jobs', d: 'Which jobs you want more of, which you would rather avoid, the areas you cover, the job software you use and where your work comes from now. This decides the pages and the integration.' },
  { n: '02', t: 'Collect the proof', d: 'We send a simple checklist: licence details, ABN and business name, your best job photos, reviews, and any certifications or trade association memberships. Most tradies have more proof on their phone than they think.' },
  { n: '03', t: 'Plan the pages', d: 'A home page, a page for each main service, an about page with your licence and team, a projects page and a contact page. We map each service page to the searches people in your area actually use.' },
  { n: '04', t: 'Write and design', d: 'We write plain, specific copy in your voice, design a mobile-first layout with a call button that stays in reach, and use your real photos, compressed so pages load quickly on patchy coverage.' },
  { n: '05', t: 'Connect your job system', d: 'We connect the job request form to ServiceM8, Tradify, simPRO, Fergus or your inbox, test that a real enquiry arrives with the right details, and set up an instant confirmation to the customer.' },
  { n: '06', t: 'Set up Google properly', d: 'Google Business Profile categories, services and service areas, Search Console, analytics that count calls and forms, and matching business details across the main directories.' },
  { n: '07', t: 'Launch and check', d: 'We test on real phones, check speed, make sure every call button and form works, and go live. Sites up to five pages have 7-day delivery once your content is in.' },
  { n: '08', t: 'Support after launch', d: 'Updates, new service pages, new project photos, security and speed checks, and monthly reporting on the calls and forms your site brings in, if you want us to look after it.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'Answers your business number while you are on the tools, books into ServiceM8 or Tradify and sends emergencies to your mobile.' },
  { href: '/au/seo', t: 'SEO services Australia', d: 'Ongoing local SEO for trades that want to rank across more services and suburbs.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get recommended when Australians ask ChatGPT, Perplexity or Google AI for a tradie.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, security, backups and speed checks so your site keeps working after launch.' },
  { href: '/au/ai-agents', t: 'AI agents', d: 'Quote follow-ups, invoice reminders and admin that runs across your job software and inbox, built and supported by us.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

export default function WebsitesForTradiesAUPage() {
  return (
    <>
      <script id="ld-au-websites-for-tradies" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />Websites for Tradies</span>
                  <span className="chip">Local SEO for Trades</span>
                  <span className="chip">Built, Supported, Yours</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.05rem, 3.8vw, 2.95rem)' }}>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet builds websites for tradies across Australia. Yours loads fast on a phone, shows your
                  licence, reviews and real job photos, has a page for every service you want more of, and sends each
                  enquiry straight into ServiceM8, Tradify, simPRO or your inbox. We set up your Google Business
                  Profile, support the site after launch, and you own it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />26 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_websites_for_tradies_hero" submitLabel="Plan my tradie website" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/websites-for-tradies/tradie-website-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Over the shoulder of a Perth landscaper beside her ute, checking her mobile website, which shows a photo of the garden she has just finished" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What every site we build does</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">One tap to call or request a job</div><div className="scorecard-note">button stays in reach on mobile</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Mobile</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Licence, reviews and job photos up front</div><div className="scorecard-note">the proof customers look for</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Trust</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Enquiries into your job software</div><div className="scorecard-note">ServiceM8, Tradify, simPRO, Fergus</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What makes a good website for tradies in Australia?</span>
              <p>
                A good website for tradies loads fast on a phone, says your trade and service area in the first
                screen, shows your licence number, genuine reviews and real job photos, has a page for each main
                service, and makes it one tap to call or request a quote. Enquiries should land in your job software,
                and the site should match your Google Business Profile.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                <b>Local SEO</b> (search engine optimisation) means showing up when people nearby search for your trade.
                A <b>Google Business Profile</b> is your free listing in Google Maps and the local results. An{' '}
                <b>integration</b> is a live connection between your website and your job software, so enquiries
                arrive as jobs instead of emails.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most tradie website design in Australia comes in two flavours: a template you fill in yourself, or a
              brochure site that looks fine and never rings. We build the third kind. It is designed around the jobs
              you actually want, written the way your customers search, connected to the software you already run
              your business on, and looked after once it is live.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
                { v: 'Show it', t: 'NSW licensed contractors must show their licence number in advertising, including online', s: 'NSW Government, trade advertising', u: SRC_NSW_ADS },
                { v: 'Websites count', t: 'as advertising in Queensland, so licence details must be legible and prominent', s: 'QBCC, advertising', u: SRC_QBCC_ADS },
                { v: 'Up to 20', t: 'service areas on a Google Business Profile, and no public address if you work on site', s: 'Google Business Profile Help', u: SRC_GBP_SAB },
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

        {/* ═══ 4. LISTICLE: 7 THINGS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Anatomy of a tradie website that wins work</span>
                <h2>7 things every tradie website needs before it can bring in jobs</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Look at the trade business websites that actually bring in work. They share the same seven basics,
                  whether it is a two-van plumbing business in Geelong or a building company in Perth.
                </p>
                <ol className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  {MUST_HAVES.map((m) => (
                    <li key={m.t}><b>{m.t}.</b> {m.d}</li>
                  ))}
                </ol>
              </div>
              <figure className="card" style={{ padding: 8, margin: 0 }}>
                <img src="/images/au/websites-for-tradies/tradie-website-photos.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Melbourne carpenter crouches to photograph the spotted-gum deck and steps he has just finished, for his website project gallery" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                  Your best marketing is already on your phone. Photos of finished jobs, taken on the day, do more for a
                  tradie website than any stock image.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ 5. FIT CHECK (interactive, <details>) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Which option fits you?</span>
              <h2>A 30-second check: DIY builder, tradie website design, or website plus AI receptionist</h2>
              <p className="lead mt-4">
                Tap the line that sounds most like your business. The answer is honest, even when it is not us.
              </p>
            </div>
            <div className="card mt-6" style={{ padding: '4px 20px', maxWidth: 900 }}>
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
        </section>

        {/* ═══ 6. LICENCE + RULES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Licences and advertising rules</span>
                <h2>Your licence number, reviews and the rules your website has to follow</h2>
                <div className="stack mt-6">
                  <p>
                    Most generic web designers do not know that a tradie website is advertising in the eyes of state
                    regulators. That matters, because the rules are specific and they apply online.
                  </p>
                  <p>
                    <b>New South Wales.</b> NSW Fair Trading requires licensed contractors to include their name and
                    licence number, with the correct category of work, in their advertising. The NSW Government says
                    this covers print, internet, TV and radio, and it names specialist trades including electrical
                    wiring, plumbing, draining, gas fitting, and air conditioning and refrigeration work.
                  </p>
                  <p>
                    <b>Queensland.</b> The QBCC says advertising must include the name you are licensed under, that you
                    are licensed under the QBCC Act, and your licence number. It lists websites, social media pages and
                    online directories as advertising, and says licence details must be easily legible and reasonably
                    prominent. It also says you must not use the QBCC logo, although you may link to its website.
                  </p>
                  <p>
                    <b>Other states.</b> Victoria, Western Australia, South Australia, Tasmania and the territories have
                    their own licensing bodies and rules. We put your licence details in plain text in the footer and
                    on the contact page by default, and link to your regulator’s public licence check, which covers the
                    common requirements. Confirm the detail for your trade with your regulator.
                  </p>
                  <p>
                    <b>Reviews.</b> The ACCC says it is against the law for a business to create fake or misleading
                    reviews or to arrange for others to do so. Incentives must apply whether the review is positive or
                    negative and be disclosed, and hiding genuine negative reviews may mislead customers. We only ever
                    display reviews you have actually received.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_NSW_ADS} {...extLink} style={srcLink}>NSW Government, building trade advertisements</a>;{' '}
                  <a href={SRC_QBCC_ADS} {...extLink} style={srcLink}>QBCC, advertising</a>;{' '}
                  <a href={SRC_ACCC_REVIEWS} {...extLink} style={srcLink}>ACCC, online reviews</a>. This is general information, not legal advice.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What goes on every page we build</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Licensed business name</div><div className="scorecard-note">exactly as it appears on the licence</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Footer</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Licence number and category</div><div className="scorecard-note">plain text, legible, not an image</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Footer</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Link to the public licence check</div><div className="scorecard-note">customers can verify you</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Contact</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Regulator logos</div><div className="scorecard-note">QBCC says do not use its logo</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Never</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Reviews</div><div className="scorecard-note">genuine, unedited, from real jobs</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Real only</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. LOCAL SEO + GBP ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">SEO for tradies</span>
                <h2>SEO for tradies: showing up in Google Maps, local results and AI answers</h2>
                <div className="stack mt-6">
                  <p>
                    Tradie SEO is simpler than most agencies make it sound. When someone searches for a plumber, an
                    electrician or a builder, Google mostly shows two things: the map results, driven by your Google
                    Business Profile, and the normal results, driven by your website. Plumber SEO, electrician SEO and
                    builder SEO all work the same way. You need both halves working together.
                  </p>
                  <p>
                    <b>Your Google Business Profile.</b> It is free, and it controls how you appear in Maps. If you work
                    at customers’ homes rather than a shopfront, Google treats you as a service-area business: it says
                    to remove your address from the profile and list only your service areas, up to 20 of them, keeping
                    the overall area within about two hours’ drive of your base. Pick the right main category, add your
                    services, upload job photos and keep the reviews coming.
                  </p>
                  <p>
                    <b>Your website.</b> Each main service gets its own page that answers the questions customers ask
                    about that job. Your business name, service area and contact details match the Google profile
                    exactly. Pages load fast on a phone. Project write-ups mention the real suburbs you worked in, which
                    helps you appear for nearby searches without the thin, copy-paste suburb pages Google tends to
                    ignore.
                  </p>
                  <p>
                    <b>AI answers.</b> Google now shows AI Overviews on many trade searches, and more people ask ChatGPT
                    to recommend a tradie. Those answers lean on clear service pages, consistent business details and
                    genuine reviews, which is one more reason to get the basics right. Our{' '}
                    <a href="/au/ai-seo">AI SEO service for Australian businesses</a> goes deeper on this, and our{' '}
                    <a href="/au/seo">SEO services in Australia</a> cover ongoing local SEO for trades that want to rank
                    across more services and suburbs.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC_GBP_SAB} {...extLink} style={srcLink}>Google Business Profile Help, service-area businesses</a>.
                </p>
              </div>
              <div className="stack">
                <figure className="card" style={{ padding: 8, margin: 0 }}>
                  <img src="/images/au/websites-for-tradies/tradie-website-search.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Brisbane homeowner on her couch comparing local tradies on a map with reviews on her tablet" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                  <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                    This is where most jobs start: a customer on the couch comparing three tradies on a map. Your
                    profile, reviews and website decide who gets the call.
                  </figcaption>
                </figure>
                <div className="card card-top-orange">
                  <span className="eyebrow">Local SEO for trades: what moves first</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Google Business Profile complete</div><div className="scorecard-note">category, services, areas, photos</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Weeks</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Steady genuine reviews</div><div className="scorecard-note">ask every happy customer</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Ongoing</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Service pages ranking</div><div className="scorecard-note">depends on trade and city</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Months</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Links from local sites</div><div className="scorecard-note">suppliers, associations, local news</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Compounds</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 860 }}>Your own tradie website vs hipages and lead sites vs a DIY builder vs social media only</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Four common ways Australian tradies get found online. Most successful trade businesses use more than
              one. This compares them on what actually changes for you, not on price.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom tradie website (FactoryJet)</th>
                    <th>hipages and lead marketplaces</th>
                    <th>DIY website builder</th>
                    <th>Facebook or Instagram only</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Who owns the customer</td><td className="fj"><span className="yes">You do</span></td><td><span className="partial">Shared with other tradies quoting</span></td><td><span className="yes">You do</span></td><td><span className="partial">The platform controls reach</span></td></tr>
                  <tr><td className="feat">Competing on each lead</td><td className="fj"><span className="yes">Usually no</span></td><td><span className="no">Often several quotes</span></td><td><span className="yes">Usually no</span></td><td><span className="yes">Usually no</span></td></tr>
                  <tr><td className="feat">Shows up on Google for your services</td><td className="fj"><span className="yes">Built for local SEO</span></td><td><span className="partial">The marketplace ranks, not you</span></td><td><span className="partial">Basic, limited control</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">Licence, reviews and job photos</td><td className="fj"><span className="yes">Designed around them</span></td><td><span className="partial">Profile only</span></td><td><span className="partial">If you add them</span></td><td><span className="partial">Scattered in posts</span></td></tr>
                  <tr><td className="feat">Enquiries into ServiceM8 or Tradify</td><td className="fj"><span className="yes">Connected</span></td><td><span className="partial">Separate app to check</span></td><td><span className="partial">Sometimes, by plugin</span></td><td><span className="no">Manual</span></td></tr>
                  <tr><td className="feat">Builds value over time</td><td className="fj"><span className="yes">Yes, it compounds</span></td><td><span className="no">Stops when you stop paying</span></td><td><span className="partial">Somewhat</span></td><td><span className="partial">Somewhat</span></td></tr>
                  <tr><td className="feat">Your time to set up</td><td className="fj"><span className="partial">A call and a checklist</span></td><td><span className="yes">Low</span></td><td><span className="no">Evenings and weekends</span></td><td><span className="yes">Low</span></td></tr>
                  <tr><td className="feat">Help after launch</td><td className="fj"><span className="yes">Same team, ongoing</span></td><td><span className="partial">Platform support</span></td><td><span className="partial">Help articles</span></td><td><span className="no">None</span></td></tr>
                  <tr><td className="feat">Best for</td><td className="fj">Steady, direct work you do not share</td><td>Filling quiet weeks</td><td>Brand-new sole traders</td><td>Showing off finished jobs</td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Wondering what each option costs? Read our guide to{' '}
              <a href="/blog/website-cost-australia-2026" style={srcLink}>website cost in Australia (2026)</a>, which uses third-party market ranges, not our prices.
            </p>
          </div>
        </section>

        {/* ═══ 9. JOB SOFTWARE INTEGRATION ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Connected to how you already work</span>
                <h2>Website enquiries straight into ServiceM8, Tradify, simPRO or Fergus</h2>
                <div className="stack mt-6">
                  <p>
                    Most tradie websites send enquiries to an email inbox. Someone then has to read it, retype the
                    name, address and job details into the job software, and ring back. Every step is a chance for the
                    lead to go cold, and the tradie who replies first usually wins the job.
                  </p>
                  <p>
                    We connect your website to the software you already run the business on. Tradify has its own
                    website enquiry form that can sit on your site. ServiceM8, simPRO and Fergus can take new leads or
                    jobs through their integrations and developer tools. Either way, each enquiry arrives as a lead or
                    job with the customer’s name, suburb, job type, preferred time and any photos, and the customer
                    gets an instant confirmation.
                  </p>
                  <p>
                    For bigger teams, we route enquiries by job type or area to the right person, flag urgent jobs, and
                    keep the details consistent so your office can quote the same day. If your software cannot accept
                    enquiries in a clean way, we tell you, and set up the next best option.
                  </p>
                </div>
              </div>
              <figure className="card" style={{ padding: 8, margin: 0 }}>
                <img src="/images/au/websites-for-tradies/tradie-website-office.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of the office manager of a family plumbing business in Adelaide, reviewing the week’s job schedule on her laptop with the work van outside" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                  When a website enquiry lands straight in the job schedule, the office can quote the same day instead
                  of retyping emails.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want more jobs you do not have to share with five other quotes?'}
          sub={'Tell us your trade, the areas you cover and the job software you use. On a short call with the founder, we will look at your current site and Google profile and tell you what would bring in more work first.'}
          label={'Plan my tradie website'}
        />

        {/* ═══ 10. MISSED CALLS + AI RECEPTIONIST ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The jobs you lose on the tools</span>
                <h2>Missed calls: pair your tradie website with an AI receptionist</h2>
                <div className="stack mt-6">
                  <p>
                    A better website brings in more calls. For a tradie on a roof, under a house or halfway through a
                    switchboard, that can mean more missed calls. Customers with an urgent job rarely leave a voicemail.
                    They ring the next number on the list.
                  </p>
                  <p>
                    An <a href="/au/ai-receptionist">AI receptionist for tradies</a> answers your business number when
                    you cannot, tells callers it is an automated assistant, takes the address and the problem, books a
                    slot in ServiceM8 or Tradify, and sends real emergencies, like a burst pipe or no power, straight to
                    your mobile. You keep your existing number.
                  </p>
                  <p>
                    It is optional, and plenty of sole traders do not need it. But if you know you miss calls every day,
                    the website and the receptionist together close the gap between someone finding you and you
                    actually winning the job.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Where each enquiry goes</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Job request form on your site</div><div className="scorecard-note">into your job software, with photos</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Lead</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Call you answer</div><div className="scorecard-note">tap-to-call from the website</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>You</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Call you miss</div><div className="scorecard-note">AI receptionist books or takes details</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>AI</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Emergency call</div><div className="scorecard-note">agreed words, tested before launch</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Your mobile</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. HOW WE BUILD IT (<details>) ═══ */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we build it</span>
                <h2>How we build your tradie website, in eight steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The same path every time, so nothing important is left out and you are not chasing us for updates.
                  Open any step to see what happens in it.
                </p>
                <div className="card mt-6" style={{ padding: '4px 20px' }}>
                  {BUILD_STEPS.map((s) => (
                    <details key={s.n}>
                      <summary style={{ gap: 16, textAlign: 'left' }}>
                        <span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 12 }}>{s.n}</span>{s.t}</span>
                      </summary>
                      <p style={{ paddingBottom: 18 }}>{s.d}</p>
                    </details>
                  ))}
                </div>
              </div>
              <figure className="card" style={{ padding: 8, margin: 0 }}>
                <img src="/images/au/websites-for-tradies/tradie-website-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet web designer and a Sydney electrician review paper sketches of his mobile website on a workbench in his workshop" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                  We plan the site around the jobs you want more of. You sign off the page plan before anything is
                  designed.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ 12. TRADES WE BUILD FOR ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">One approach, every trade</span>
              <h2>Tradie website design for plumbers, electricians, builders and every trade in between</h2>
              <p className="lead mt-4">
                The structure stays the same. What changes is the services, the urgency of the jobs, the licence
                categories and the questions customers ask. We write each site for the trade, not from a template.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>Plumbers and gasfitters</h3><p className="mt-4">Emergency and planned work side by side: blocked drains, hot water, leaks, gas fitting and bathroom renovations, with the emergency call button front and centre and licence categories shown clearly.</p></li>
              <li className="svc-card"><h3>Electricians and solar</h3><p className="mt-4">Switchboard upgrades, safety inspections, lighting, EV chargers and solar with batteries. Service pages that explain the job in plain words, plus licence and contractor details shown the way regulators expect.</p></li>
              <li className="svc-card"><h3>Builders and renovators</h3><p className="mt-4">Project galleries that sell: extensions, renovations, decks and new homes, with the process, timeline expectations and what to have ready before a quote. Builder website design leans on photos more than any other trade.</p></li>
              <li className="svc-card"><h3>HVAC and air conditioning</h3><p className="mt-4">Split systems, ducted installs and servicing, with seasonal service pages ready before summer and winter peaks, and booking forms that capture the system type and home size up front.</p></li>
              <li className="svc-card"><h3>Landscapers and outdoor trades</h3><p className="mt-4">Landscaping, fencing, paving, concreting and pools. Before and after galleries, suburb-tagged project write-ups and clear quote steps for bigger jobs.</p></li>
              <li className="svc-card"><h3>Roofers, painters, cleaners and more</h3><p className="mt-4">Any trade where customers compare three names on their phone. The same seven basics, shaped around your services and the areas you want to work in.</p></li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 820 }}>
              One site covers every service you offer. We do not build separate copy-paste sites or pages for each
              trade and suburb, because Google treats those as thin content and they rarely win work. If you also sell
              parts or supplies online, see our <a href="/au/ecommerce-development">ecommerce development for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ 13. ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Three ways to work with us on a website for your trade business</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every project is quoted for your scope, with a fixed price for the build and ongoing support shown
                  separately. These are the shapes it usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Focused starter site.</b> Up to five pages, with 7-day delivery once your content is in: home, key services, about with licence details, projects and contact, plus Google Business Profile setup.</li>
                  <li><b>Full trade site.</b> A page for every main service, a project gallery, job software integration, local SEO setup and analytics that count calls and forms.</li>
                  <li><b>Site plus growth.</b> Either of the above with ongoing local SEO, new service and project pages, review requests, <a href="/au/website-maintenance">website maintenance</a> and an optional AI receptionist.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  What moves the scope: number of pages, whether we write the copy and source photos, the job software
                  integration, how many services and areas you want to rank for, and the level of support. For
                  Australian market ranges from third-party sources, see our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a> and{' '}
                  <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. We have a 97% on-time delivery record, and
                  we explain every line of the quote on the call.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my tradie website" region="au" modalVariant="default" btnVariant="primary-light" />
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
                      { kw: 'website for tradies', v: '1,600', w: '100%', kd: 'The head term' },
                      { kw: 'tradie website design', v: '390', w: '24%', kd: 'Choosing a designer' },
                      { kw: 'seo for tradies', v: '320', w: '20%', kd: 'Getting found locally' },
                      { kw: 'tradie seo', v: '170', w: '11%', kd: 'Same need, shorter search' },
                      { kw: 'plumber website design', v: '140', w: '9%', kd: 'Plumbers specifically' },
                      { kw: 'plumber seo', v: '110', w: '7%', kd: 'Plumbers ranking locally' },
                      { kw: 'local seo for electricians', v: '90', w: '6%', kd: 'Electricians ranking locally' },
                      { kw: 'seo agency for tradies', v: '70', w: '4%', kd: 'Comparing agencies' },
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

        {/* ═══ 14. PROVIDER LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>Australian companies that build websites for tradies</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These Australian providers show up when people search for
                websites for tradies or ask AI assistants for a tradie web designer. Some specialise only in trades,
                others are broader agencies. Each note is based on what the company says on its own website.
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
              Providers named from live Australian search results and AI Overview citations for tradie website queries, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="card mt-8" style={{ maxWidth: 900 }}>
              <span className="eyebrow">Questions to ask any web designer, including us</span>
              <ol className="scope-list num-list mt-4">
                <li><b>Who owns the domain, the site and the content?</b> It should be you, in your business name, from day one.</li>
                <li><b>Can I see tradie sites you built, on my phone?</b> Check the speed, the call button and whether the licence number is visible.</li>
                <li><b>Where do enquiries go?</b> Ask to see a test enquiry arrive in your job software, not just an inbox.</li>
                <li><b>What happens to my Google Business Profile?</b> It should stay in your name, set up properly and linked to the site.</li>
                <li><b>Are there lock-in contracts?</b> Know what happens to the site if you stop paying for support.</li>
                <li><b>How will we know it is working?</b> Ask for reporting on calls and forms, not just traffic.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ 15. SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Beyond the website</span>
              <h2>The rest of what we build for Australian trade businesses</h2>
              <p className="lead mt-4">
                A website is usually the first step. These are the natural next ones, built and supported by the same
                team.
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
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <style>{'.au-svc .faq-item summary::after{content:none;display:none}'}</style>
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FAQ</span>
              <h2>Questions Australian tradies ask about websites, SEO and getting more jobs</h2>
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

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>A website that wins the job before you pick up the phone</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              trade, the areas you cover, the software you use, and whether a new site, a few fixes or a simple DIY
              builder is the right fit. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my tradie website" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ai-receptionist" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See the AI receptionist</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
