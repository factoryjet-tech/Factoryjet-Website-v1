import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/websites-for-tradies';
const UPDATED = '2026-09-26';
const TITLE = 'Websites for Tradies Australia | Win More Jobs | FactoryJet';
const H1 = 'Websites for Tradies: Quote-Ready Sites That Get Found Locally and Turn Calls Into Booked Jobs';
const DESCRIPTION =
  'Websites for tradies across Australia: fast mobile sites with your licence, reviews and job photos, local SEO, and enquiries into ServiceM8 or Tradify.';

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
  { category: 'seo', question: 'What are some good SEO keywords for electricians?',
    answer: 'The best ones name a job and a place, because that is how customers search: "emergency electrician" plus your suburb, "switchboard upgrade", "safety switch installation", "EV charger installation", "ceiling fan installation" or "solar battery installer" plus your area. Give each planned job its own page. Leave broad terms like "electrician Australia" alone: they are hard to rank for and rarely bring a local job.' },
  { category: 'seo', question: 'What are some effective marketing ideas for plumbers?',
    answer: 'Start with the ones that cost time rather than money: a complete Google Business Profile, a review request after every job, before and after photos on your site and profile, and a page for each service you want more of. Then answer the phone fast, or have something answer it for you. Signage on the van, local sponsorships and Google Ads for urgent jobs work well on top.' },
  { category: 'seo', question: 'What is SEO in construction?',
    answer: 'For builders and construction trades, SEO means showing up when people in your area search for the projects you build, such as extensions, renovations, granny flats or new homes. Because the jobs are big and the decisions slow, it leans on detailed project pages with photos and suburbs, a clear process page, genuine reviews and a Google Business Profile that matches your licensed business name.' },
  { category: 'seo', question: 'Do electricians, plumbers and builders need different websites?',
    answer: 'No, they need the same foundations shaped differently. Plumbers and electricians get a lot of urgent searches, so the call button, response times and the Maps listing matter most. Builders sell fewer, larger jobs, so project galleries and a clear process page matter most. If you do more than one trade, one site with a page per service works better than several separate sites.' },
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
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and map rankings for trades that want more calls from their own area.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get recommended when Australians ask ChatGPT, Perplexity or Google AI for a tradie.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, security, backups and speed checks so your site keeps working after launch.' },
  { href: '/au/ai-agents', t: 'AI agents', d: 'Quote follow-ups, invoice reminders and admin that runs across your job software and inbox, built and supported by us.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

/* Trades we build for (capability grid). Icons and visual-slot subjects share its order. */
const TRADES: { t: string; d: string }[] = [
  { t: 'Plumbers and gasfitters', d: 'Emergency and planned work side by side: blocked drains, hot water, leaks, gas fitting and bathroom renovations, with the emergency call button front and centre and licence categories shown clearly.' },
  { t: 'Electricians and solar', d: 'Switchboard upgrades, safety inspections, lighting, EV chargers and solar with batteries. Service pages that explain the job in plain words, plus licence and contractor details shown the way regulators expect.' },
  { t: 'Builders and renovators', d: 'Project galleries that sell: extensions, renovations, decks and new homes, with the process, timeline expectations and what to have ready before a quote. Builder website design leans on photos more than any other trade.' },
  { t: 'HVAC and air conditioning', d: 'Split systems, ducted installs and servicing, with seasonal service pages ready before summer and winter peaks, and booking forms that capture the system type and home size up front.' },
  { t: 'Landscapers and outdoor trades', d: 'Landscaping, fencing, paving, concreting and pools. Before and after galleries, suburb-tagged project write-ups and clear quote steps for bigger jobs.' },
  { t: 'Roofers, painters, cleaners and more', d: 'Any trade where customers compare three names on their phone. The same seven basics, shaped around your services and the areas you want to work in.' },
];
const TRADE_ICONS = [
  'M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z',
  'M13 2 3 14h9l-1 8 10-12h-9l1-8Z',
  'M3 10.5 12 3l9 7.5V21H3V10.5Zm6 10.5v-6h6v6',
  'M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9',
  'M12 22v-7m0 0c-4 0-7-3-7-7 3 0 5 1 7 3 2-2 4-3 7-3 0 4-3 7-7 7Z',
  'M4 4h14v5H4V4Zm14 2.5h2v5h-8v3m-2 0h4V22h-4v-7.5Z',
] as const;
const TRADE_SUBJECTS = [
  'AI-generated model: a white phone screen with an orange emergency call button above a small hot water unit and pipe fittings',
  'AI-generated model: a white switchboard panel with an orange licence number tag clipped to it',
  'AI-generated model: a small white house frame with an orange deck extension and a gallery of three photo cards',
  'AI-generated model: a white split-system unit with a booking card listing system type and home size',
  'AI-generated model: a white garden bed and fence section with orange before and after tags',
  'AI-generated model: a row of white roof, paint roller and spray bottle models, each with an orange service tag',
] as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'websites-for-tradies';

/* Visible hero heading, kept to about four lines at 62px so the inline form starts in the first
   desktop screen. H1 above stays the schema headline; the rest of it opens the hero lead, so no
   copy is lost. */
const HERO_H1_LEAD = 'Websites for Tradies:';
const HERO_H1_EMPHASIS = 'Quote-Ready Sites That Get Found Locally';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function WebsitesForTradiesAUPage() {
  return (
    <>
      <script id="ld-au-websites-for-tradies" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Websites for Tradies</div>
              <h1>{HERO_H1_LEAD} <span className="hero-emphasis">{HERO_H1_EMPHASIS}</span></h1>
              <p className="lead">
                Built to turn calls into booked jobs. FactoryJet builds websites for tradies across Australia. Yours
                loads fast on a phone, shows your licence, reviews and real job photos, has a page for every service
                you want more of, and sends each enquiry straight into ServiceM8, Tradify, simPRO or your inbox. We set
                up your Google Business Profile, support the site after launch, and you own it.
              </p>
              <HeroInlineForm region="au" source="au_websites_for_tradies_hero" submitLabel="Plan my tradie website" />
            </div>

            <form
              className="specpanel"
              aria-label="What every tradie website we build does"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three things every tradie site does: one tap to call or request a job, licence and proof up front, enquiries into the job software"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY SITE WE BUILD DOES</span>
                <span className="sys"><span>LOCAL SEO</span><span>SUPPORTED</span><span>YOURS</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every site does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="tradie-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg></span>
                  <span className="idx">button stays in reach on mobile</span>
                  <span className="title">One tap to call or request a job</span>
                  <span className="tag">Mobile</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="tradie-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4" /></svg></span>
                  <span className="idx">the proof customers look for</span>
                  <span className="title">Licence, reviews and job photos up front</span>
                  <span className="tag">Trust</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="tradie-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg></span>
                  <span className="idx">ServiceM8, Tradify, simPRO, Fergus</span>
                  <span className="title">Enquiries into your job software</span>
                  <span className="tag">Connected</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Enquiries should land in your job software, and the site should match your Google Business Profile.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'Show it', t: 'NSW licensed contractors must show their licence number in advertising, including online', s: 'NSW Government, trade advertising', u: SRC_NSW_ADS },
              { v: 'Websites count', t: 'as advertising in Queensland, so licence details must be legible and prominent', s: 'QBCC, advertising', u: SRC_QBCC_ADS },
              { v: 'Up to 20', t: 'service areas on a Google Business Profile, and no public address if you work on site', s: 'Google Business Profile Help', u: SRC_GBP_SAB },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
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

        {/* ═══ ANSWER-FIRST (GEO) → Family A facts ═══ */}
        <section className="section facts" id="answer">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What makes a good website for tradies in Australia?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">A good website for tradies loads fast on a phone, says your trade and service area in the first
                    screen, shows your licence number, genuine reviews and real job photos, has a page for each main
                    service, and makes it one tap to call or request a quote.</span> Enquiries should land in your job software,
                    and the site should match your Google Business Profile.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      <b>Local SEO</b> (search engine optimisation) means showing up when people nearby search for your trade.
                      A <b>Google Business Profile</b> is your free listing in Google Maps and the local results. An{' '}
                      <b>integration</b> is a live connection between your website and your job software, so enquiries
                      arrive as jobs instead of emails.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most tradie website design in Australia comes in two flavours: a template you fill in yourself, or a
                    brochure site that looks fine and never rings. We build the third kind. It is designed around the jobs
                    you actually want, written the way your customers search, connected to the software you already run
                    your business on, and looked after once it is live.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A landscaper beside her ute checking her mobile website, which shows a photo of a garden she has just finished">
                <img src="/images/au/websites-for-tradies/tradie-website-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="Over the shoulder of a Perth landscaper beside her ute, checking her mobile website, which shows a photo of the garden she has just finished" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ LISTICLE: 7 THINGS → facts rows ═══ */}
        <section className="section facts" id="must-haves">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Anatomy of a tradie website that wins work</div>
              <h2>7 things every tradie website needs before it can bring in jobs</h2>
              <p className="lead">
                Look at the trade business websites that actually bring in work. They share the same seven basics,
                whether it is a two-van plumbing business in Geelong or a building company in Perth.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist" role="list">
                {MUST_HAVES.map((m, i) => (
                  <div key={m.t} className="fact" role="listitem">
                    <div className="sec">§{String(i + 1).padStart(2, '0')}</div>
                    <p><b>{m.t}.</b> {m.d}</p>
                  </div>
                ))}
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A carpenter photographing a deck he has just finished, for his website project gallery"
                caption="Your best marketing is already on your phone. Photos of finished jobs, taken on the day, do more for a tradie website than any stock image.">
                <img src="/images/au/websites-for-tradies/tradie-website-photos.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A Melbourne carpenter crouches to photograph the spotted-gum deck and steps he has just finished, for his website project gallery" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you?</div>
              <h2>A 30-second check: DIY builder, tradie website design, or website plus AI receptionist</h2>
              <p>Tap the line that sounds most like your business. The answer is honest, even when it is not us.</p>
            </div>
            <div className="ventries">
              {FIT_CHECK.map((f) => (
                <details key={f.q} className="ventry">
                  <summary><h3>{f.q}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{f.verdict}</span>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LICENCE + RULES → facts + checklist panel ═══ */}
        <section className="section facts" id="licence-rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Licences and advertising rules</div>
              <h2>Your licence number, reviews and the rules your website has to follow</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Most generic web designers do not know that a tradie website is advertising in the eyes of state
                  regulators. That matters, because the rules are specific and they apply online.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>New South Wales.</b> NSW Fair Trading requires licensed contractors to include their name and
                  licence number, with the correct category of work, in their advertising. The NSW Government says
                  this covers print, internet, TV and radio, and it names specialist trades including electrical
                  wiring, plumbing, draining, gas fitting, and air conditioning and refrigeration work.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Queensland.</b> The QBCC says advertising must include the name you are licensed under, that you
                  are licensed under the QBCC Act, and your licence number. It lists websites, social media pages and
                  online directories as advertising, and says licence details must be easily legible and reasonably
                  prominent. It also says you must not use the QBCC logo, although you may link to its website.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  <b>Other states.</b> Victoria, Western Australia, South Australia, Tasmania and the territories have
                  their own licensing bodies and rules. We put your licence details in plain text in the footer and
                  on the contact page by default, and link to your regulator’s public licence check, which covers the
                  common requirements. Confirm the detail for your trade with your regulator.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <p>
                    <b>Reviews.</b> The ACCC says it is against the law for a business to create fake or misleading
                    reviews or to arrange for others to do so. Incentives must apply whether the review is positive or
                    negative and be disclosed, and hiding genuine negative reviews may mislead customers. We only ever
                    display reviews you have actually received.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_NSW_ADS} {...extLink}>NSW Government, building trade advertisements</a>;{' '}
                    <a href={SRC_QBCC_ADS} {...extLink}>QBCC, advertising</a>;{' '}
                    <a href={SRC_ACCC_REVIEWS} {...extLink}>ACCC, online reviews</a>. This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What goes on every page we build</div>
                <ul className="trigrows">
                  <li><span className="m">Licensed business name</span><span className="n">exactly as it appears on the licence</span><span className="t">Footer</span></li>
                  <li><span className="m">Licence number and category</span><span className="n">plain text, legible, not an image</span><span className="t">Footer</span></li>
                  <li><span className="m">Link to the public licence check</span><span className="n">customers can verify you</span><span className="t">Contact</span></li>
                  <li><span className="m">Regulator logos</span><span className="n">QBCC says do not use its logo</span><span className="t">Never</span></li>
                  <li><span className="m">Reviews</span><span className="n">genuine, unedited, from real jobs</span><span className="t">Real only</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LOCAL SEO + GBP → facts + photo + label rows ═══ */}
        <section className="section facts" id="local-seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">SEO for tradies</div>
              <h2>SEO for tradies: showing up in Google Maps, local results and AI answers</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Tradie SEO is simpler than most agencies make it sound. When someone searches for a plumber, an
                  electrician or a builder, Google mostly shows two things: the map results, driven by your Google
                  Business Profile, and the normal results, driven by your website. Plumber SEO, electrician SEO and
                  builder SEO all work the same way. You need both halves working together.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Your Google Business Profile.</b> It is free, and it controls how you appear in Maps. If you work
                  at customers’ homes rather than a shopfront, Google treats you as a service-area business: it says
                  to remove your address from the profile and list only your service areas, up to 20 of them, keeping
                  the overall area within about two hours’ drive of your base. Pick the right main category, add your
                  services, upload job photos and keep the reviews coming.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Your website.</b> Each main service gets its own page that answers the questions customers ask
                  about that job. Your business name, service area and contact details match the Google profile
                  exactly. Pages load fast on a phone. Project write-ups mention the real suburbs you worked in, which
                  helps you appear for nearby searches without the thin, copy-paste suburb pages Google tends to
                  ignore.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>AI answers.</b> Google now shows AI Overviews on many trade searches, and more people ask ChatGPT
                    to recommend a tradie. Those answers lean on clear service pages, consistent business details and
                    genuine reviews, which is one more reason to get the basics right. Our{' '}
                    <a href="/au/ai-seo">AI SEO service for Australian businesses</a> goes deeper on this, and our{' '}
                    <a href="/au/seo">SEO services in Australia</a> cover ongoing local SEO for trades that want to rank
                    across more services and suburbs.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_GBP_SAB} {...extLink}>Google Business Profile Help, service-area businesses</a>.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <div className="factlabel">Local SEO for trades: what moves first</div>
                  <ul className="trigrows">
                    <li><span className="m">Google Business Profile complete</span><span className="n">category, services, areas, photos</span><span className="t">Weeks</span></li>
                    <li><span className="m">Steady genuine reviews</span><span className="n">ask every happy customer</span><span className="t">Ongoing</span></li>
                    <li><span className="m">Service pages ranking</span><span className="n">depends on trade and city</span><span className="t">Months</span></li>
                    <li><span className="m">Links from local sites</span><span className="n">suppliers, associations, local news</span><span className="t">Compounds</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A homeowner on her couch comparing local tradies on a map with reviews on her tablet"
                caption="This is where most jobs start: a customer on the couch comparing three tradies on a map. Your profile, reviews and website decide who gets the call.">
                <img src="/images/au/websites-for-tradies/tradie-website-search.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Brisbane homeowner on her couch comparing local tradies on a map with reviews on her tablet" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ SEO BY TRADE (electricians, plumbers, builders) → facts rows, keyword rows per trade ═══ */}
        <section className="section facts" id="seo-by-trade">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">SEO by trade</div>
              <h2>SEO for electricians, plumbers and builders: what changes for each trade</h2>
              <p className="lead">
                The basics above apply to every trade. What differs is how customers search, how urgent the job is and
                what proof they need before they call. Here is how we shape the site and the keywords for the three
                trades we are asked about most.
              </p>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><div>
                  <h3>SEO for electricians</h3>
                  <p>
                    Electrician searches split into two groups. Urgent ones, like &quot;emergency electrician&quot; or
                    &quot;power outage&quot; plus a suburb, where the customer calls the first name that looks
                    trustworthy. And planned jobs, like switchboard upgrades, safety switches, lighting, EV chargers and
                    solar batteries, where people read before they ring. We give each planned job its own page that
                    explains the work in plain words, and keep the emergency call button in reach on every page. Your
                    contractor licence number sits in the footer, because regulators expect it and customers check it.
                  </p>
                  <ul className="trigrows">
                    <li><span className="m">emergency electrician + suburb</span><span className="n">urgent, map results dominate</span><span className="t">Call</span></li>
                    <li><span className="m">switchboard upgrade, safety switch</span><span className="n">planned, one page per job</span><span className="t">Page</span></li>
                    <li><span className="m">EV charger installation</span><span className="n">research first, then quote</span><span className="t">Page</span></li>
                  </ul>
                </div></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <h3>SEO for plumbers</h3>
                  <p>
                    Plumbing has the most urgent searches of any trade: burst pipes, blocked drains, no hot water. Those
                    jobs are mostly won in the Google Maps results, so a complete Google Business Profile with the right
                    main category, real service areas and a steady flow of reviews matters as much as the website. The
                    site then carries the planned work: hot water replacement, gas fitting, leak detection and bathroom
                    renovations, each with its own page, photos and a clear line on call-out fees and response times.
                  </p>
                  <ul className="trigrows">
                    <li><span className="m">blocked drain, burst pipe + suburb</span><span className="n">urgent, profile and reviews win</span><span className="t">Maps</span></li>
                    <li><span className="m">hot water system replacement</span><span className="n">compared on brand and speed</span><span className="t">Page</span></li>
                    <li><span className="m">gas fitter, leak detection</span><span className="n">licence category shown clearly</span><span className="t">Page</span></li>
                  </ul>
                </div></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <h3>SEO for builders</h3>
                  <p>
                    Builders sell bigger jobs with longer decisions, so the searches are fewer and worth more. People
                    look for &quot;home extension builder&quot;, &quot;knockdown rebuild&quot; or &quot;granny flat
                    builder&quot; plus their area, then spend weeks comparing. SEO for builders leans on project pages:
                    each finished job written up with the suburb, the brief, the timeline and plenty of photos. Add a
                    page on how your process works and what to have ready before a quote, and you answer the questions
                    that decide who gets the site visit.
                  </p>
                  <ul className="trigrows">
                    <li><span className="m">home extension builder + area</span><span className="n">long research, project pages win</span><span className="t">Gallery</span></li>
                    <li><span className="m">knockdown rebuild, granny flat</span><span className="n">process and timeline questions</span><span className="t">Page</span></li>
                    <li><span className="m">renovation builder reviews</span><span className="n">named, detailed, recent</span><span className="t">Proof</span></li>
                  </ul>
                </div></div>
                <div className="fact"><div className="sec">§04</div><p>
                  One site covers all of this. You do not need a separate website for each trade line, and you do not
                  need a copy-paste page for every suburb. If your main goal is ranking in the map results across your
                  area, see our <a href="/au/local-seo">local SEO services in Australia</a>. If you are a small trade
                  business starting from scratch, our <a href="/au/small-business-web-design">small business web
                  design</a> page explains the simplest site that still brings in work.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto"
                subject="An electrician, a plumber and a builder standing at a ute tailgate in an Australian suburban street, one of them showing the others a job enquiry on his phone, screen facing them" />
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Your own tradie website vs hipages and lead sites vs a DIY builder vs social media only</h2>
                <p className="lead">
                  Four common ways Australian tradies get found online. Most successful trade businesses use more than
                  one. This compares them on what actually changes for you, not on price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
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
                  <tr><th scope="row">Who owns the customer</th><td className="fj">You do</td><td>Shared with other tradies quoting</td><td>You do</td><td>The platform controls reach</td></tr>
                  <tr><th scope="row">Competing on each lead</th><td className="fj">Usually no</td><td>Often several quotes</td><td>Usually no</td><td>Usually no</td></tr>
                  <tr><th scope="row">Shows up on Google for your services</th><td className="fj">Built for local SEO</td><td>The marketplace ranks, not you</td><td>Basic, limited control</td><td>Rarely</td></tr>
                  <tr><th scope="row">Licence, reviews and job photos</th><td className="fj">Designed around them</td><td>Profile only</td><td>If you add them</td><td>Scattered in posts</td></tr>
                  <tr><th scope="row">Enquiries into ServiceM8 or Tradify</th><td className="fj">Connected</td><td>Separate app to check</td><td>Sometimes, by plugin</td><td>Manual</td></tr>
                  <tr><th scope="row">Builds value over time</th><td className="fj">Yes, it compounds</td><td>Stops when you stop paying</td><td>Somewhat</td><td>Somewhat</td></tr>
                  <tr><th scope="row">Your time to set up</th><td className="fj">A call and a checklist</td><td>Low</td><td>Evenings and weekends</td><td>Low</td></tr>
                  <tr><th scope="row">Help after launch</th><td className="fj">Same team, ongoing</td><td>Platform support</td><td>Help articles</td><td>None</td></tr>
                  <tr><th scope="row">Best for</th><td className="fj">Steady, direct work you do not share</td><td>Filling quiet weeks</td><td>Brand-new sole traders</td><td>Showing off finished jobs</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Wondering what each option costs? Read our guide to{' '}
              <a href="/blog/website-cost-australia-2026">website cost in Australia (2026)</a>, which uses third-party market ranges, not our prices.
            </p>
          </div>
        </section>

        {/* ═══ JOB SOFTWARE INTEGRATION → definition module (image left, copy right) ═══ */}
        <section className="definition" id="job-software">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="The office manager of a family plumbing business reviewing the week's job schedule on her laptop, the work van outside">
              <img src="/images/au/websites-for-tradies/tradie-website-office.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of the office manager of a family plumbing business in Adelaide, reviewing the week’s job schedule on her laptop with the work van outside" />
            </VisualSlot>
            <p className="figcap">
              When a website enquiry lands straight in the job schedule, the office can quote the same day instead
              of retyping emails.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Connected to how you already work</div>
            <h2>Website enquiries straight into ServiceM8, Tradify, simPRO or Fergus</h2>
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
        </section>

        {/* ═══ MISSED CALLS + AI RECEPTIONIST → facts + routing panel ═══ */}
        <section className="section facts" id="missed-calls">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The jobs you lose on the tools</div>
              <h2>Missed calls: pair your tradie website with an AI receptionist</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  A better website brings in more calls. For a tradie on a roof, under a house or halfway through a
                  switchboard, that can mean more missed calls. Customers with an urgent job rarely leave a voicemail.
                  They ring the next number on the list.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  An <a href="/au/ai-receptionist">AI receptionist for tradies</a> answers your business number when
                  you cannot, tells callers it is an automated assistant, takes the address and the problem, books a
                  slot in ServiceM8 or Tradify, and sends real emergencies, like a burst pipe or no power, straight to
                  your mobile. You keep your existing number.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  It is optional, and plenty of sole traders do not need it. But if you know you miss calls every day,
                  the website and the receptionist together close the gap between someone finding you and you
                  actually winning the job.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Where each enquiry goes</div>
                <ul className="trigrows">
                  <li><span className="m">Job request form on your site</span><span className="n">into your job software, with photos</span><span className="t">Lead</span></li>
                  <li><span className="m">Call you answer</span><span className="n">tap-to-call from the website</span><span className="t">You</span></li>
                  <li><span className="m">Call you miss</span><span className="n">AI receptionist books or takes details</span><span className="t">AI</span></li>
                  <li><span className="m">Emergency call</span><span className="n">agreed words, tested before launch</span><span className="t">Your mobile</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white ute and a phone showing a tradie website, with an orange job card travelling from the phone into a job schedule board" />

        {/* ═══ HOW WE BUILD IT → process timeline (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build your tradie website, in eight steps</h2>
                <p className="lead">
                  The same path every time, so nothing important is left out and you are not chasing us for updates.
                  Open any step to see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet web designer and an electrician reviewing paper sketches of his mobile website on a workbench"
                caption="We plan the site around the jobs you want more of. You sign off the page plan before anything is designed.">
                <img src="/images/au/websites-for-tradies/tradie-website-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet web designer and a Sydney electrician review paper sketches of his mobile website on a workbench in his workshop" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Want more jobs you do not have to share with five other quotes?'}
            sub={'Tell us your trade, the areas you cover and the job software you use. On a short call with the founder, we will look at your current site and Google profile and tell you what would bring in more work first.'}
            label={'Plan my tradie website'}
          />
        </div>

        {/* ═══ TRADES WE BUILD FOR → capgrid ═══ */}
        <section className="section capabilities" id="trades">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">One approach, every trade</div>
              <h2>Tradie website design for plumbers, electricians, builders and every trade in between</h2>
              <p className="lead">
                The structure stays the same. What changes is the services, the urgency of the jobs, the licence
                categories and the questions customers ask. We write each site for the trade, not from a template.
              </p>
            </div>
            <div className="capgrid">
              {TRADES.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={TRADE_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={TRADE_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <p className="tablenote">
              One site covers every service you offer. We do not build separate copy-paste sites or pages for each
              trade and suburb, because Google treats those as thin content and they rarely win work. If you also sell
              parts or supplies online, see our <a href="/au/ecommerce-development">ecommerce development for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us on a website for your trade business</h2>
              </div>
              <p>
                Every project is quoted for your scope, with a fixed price for the build and ongoing support shown
                separately. These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Focused starter site.</h3></div><p className="plat-build">Up to five pages, with 7-day delivery once your content is in: home, key services, about with licence details, projects and contact, plus Google Business Profile setup.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Full trade site.</h3></div><p className="plat-build">A page for every main service, a project gallery, job software integration, local SEO setup and analytics that count calls and forms.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Site plus growth.</h3></div><p className="plat-build">Either of the above with ongoing local SEO, new service and project pages, review requests, <a href="/au/website-maintenance">website maintenance</a> and an optional AI receptionist.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: number of pages, whether we write the copy and source photos, the job software
                  integration, how many services and areas you want to rank for, and the level of support. For
                  Australian market ranges from third-party sources, see our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a> and{' '}
                  <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>. We have a 97% on-time delivery record, and
                  we explain every line of the quote on the call.
                </p>
                <ModalCTAButton label="Plan my tradie website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
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
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian companies that build websites for tradies</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian providers show up when people search for
                websites for tradies or ask AI assistants for a tradie web designer. Some specialise only in trades,
                others are broader agencies. Each note is based on what the company says on its own website.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Providers named from live Australian search results and AI Overview citations for tradie website queries, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any web designer, including us</div>
              <ol className="au-numlist">
                <li><span><b>Who owns the domain, the site and the content?</b> It should be you, in your business name, from day one.</span></li>
                <li><span><b>Can I see tradie sites you built, on my phone?</b> Check the speed, the call button and whether the licence number is visible.</span></li>
                <li><span><b>Where do enquiries go?</b> Ask to see a test enquiry arrive in your job software, not just an inbox.</span></li>
                <li><span><b>What happens to my Google Business Profile?</b> It should stay in your name, set up properly and linked to the site.</span></li>
                <li><span><b>Are there lock-in contracts?</b> Know what happens to the site if you stop paying for support.</span></li>
                <li><span><b>How will we know it is working?</b> Ask for reporting on calls and forms, not just traffic.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>The rest of what we build for Australian trade businesses</h2>
              <p>
                A website is usually the first step. These are the natural next ones, built and supported by the same
                team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Questions Australian tradies ask about websites, SEO and getting more jobs"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A website that wins the job before you pick up the phone</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                trade, the areas you cover, the software you use, and whether a new site, a few fixes or a simple DIY
                builder is the right fit. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my tradie website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-receptionist">See the AI receptionist</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
