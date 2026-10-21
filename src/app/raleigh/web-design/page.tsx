import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import '@/components/v2/PlatformPage.css';

const PAGE_MODIFIED = '2026-10-21';
const CANONICAL = 'https://factoryjet.com/raleigh/web-design';

export const metadata: Metadata = {
  title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
  description:
    'Best Raleigh web design agency. Top custom Next.js websites, sub-second load speeds, mobile conversion flows, and 100% full IP code ownership for Research Triangle businesses.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
    description:
      'Premier Raleigh web design agency. Custom Next.js websites, sub-second load speeds, and full code ownership for Research Triangle businesses.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'Raleigh Web Design Agency' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Raleigh Web Design Agency | Top Next.js Websites | FactoryJet',
    description: 'Custom Next.js web design in Raleigh NC. 7-day launch and 100% full IP code ownership.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const PARTNERS = [
  'Next.js 15 & React',
  'TypeScript Enterprise',
  'Tailwind CSS',
  'Figma Design Systems',
  'Cloudflare Global Edge',
  'Stripe Payments',
  'Google Analytics 4',
  'PostgreSQL & Vercel',
];

const STAT_CARDS = [
  { num: '7 Days', title: 'Launch Delivery SLA', desc: 'From signed scope to live production deployment with zero agency delays.', icon: '⚡' },
  { num: '95+', title: 'Mobile Lighthouse Score', desc: 'Sub-second mobile loading speeds engineered for high conversion rates across the Research Triangle.', icon: '🚀' },
  { num: '500+', title: 'Websites Launched', desc: 'Custom web platforms delivered across biopharma, enterprise SaaS, and research spinouts.', icon: '🏢' },
  { num: '100%', title: 'Full IP & Code Ownership', desc: 'You own the clean Next.js repository, Figma files, and hosting configuration.', icon: '🛡️' },
];

const DISTRICTS = [
  {
    corridor: 'Research Triangle Park & I-40 Tech Corridor',
    focus: 'Biopharma, Clinical CROs & AgTech',
    desc: 'The largest dedicated research park in North America. Demands interactive clinical trial gateways, research paper libraries, and sub-second edge performance.',
  },
  {
    corridor: 'Downtown Raleigh & Warehouse District',
    focus: 'Software SaaS, Clean Energy & Digital Startups',
    desc: 'High-growth tech and creative corridor. Tech companies require interactive component libraries, clear documentation portals, and high-converting product demo funnels.',
  },
  {
    corridor: 'North Hills & Midtown Raleigh',
    focus: 'Corporate Regional HQs, Private Equity & Commercial Real Estate',
    desc: 'High-density corporate commercial district. Features executive credential directories, transaction portfolios, and enterprise accessibility compliance.',
  },
  {
    corridor: 'Downtown Durham & American Tobacco Campus',
    focus: 'Healthtech, AI Analytics & Creative Studios',
    desc: 'Innovation and life science center. High-speed spec sheet downloads, platform capability matrices, and rapid RFQ calculators.',
  },
  {
    corridor: 'Cary & Western Wake Tech Park',
    focus: 'Enterprise Software, Game Development & Fintech',
    desc: 'Global enterprise software corridor. High-speed interactive product configurators, global CDN image delivery, and sub-second page loads.',
  },
  {
    corridor: 'Chapel Hill & University Innovation Corridor',
    focus: 'Biomedical Commercialization, Education Tech & Venture Spinouts',
    desc: 'Premier university research spinout cluster. Features scientific publication hubs, investor presentation decks, and sub-second edge hosting.',
  },
];

const INDUSTRY_SHOWCASE = [
  {
    sector: 'Biopharma, Clinical Research & Life Sciences',
    headline: 'Engineering High-Trust Scientific Flagships for Research Triangle Leaders',
    description:
      'RTP biopharma and clinical research organizations demand websites that speak to global pharmaceutical sponsors, FDA regulators, and clinical trial investigators. We build custom Next.js web applications featuring interactive pipeline tables, downloadable scientific whitepapers, and sub-second edge speeds.',
    image: '/images/us/saas-website-design/hero.webp',
    alt: 'A man and a woman in a studio pointing at a wall display of a handbag product page, the same page open on a laptop',
    points: [
      'Interactive clinical pipeline matrices and downloadable peer-reviewed research',
      'Frictionless multi-step sponsor inquiry forms routing to business development teams',
      'Lightweight server-rendered Next.js architecture deployed to Cloudflare Edge nodes',
    ],
  },
  {
    sector: 'Healthcare Systems, Specialized Clinics & Surgery Centers',
    headline: 'High-Trust Patient & Provider Digital Experiences Across the Triangle',
    description:
      'From private practices in North Hills to surgical clinics in Cary, credibility drives patient acquisition. We engineer HIPAA-aware medical websites featuring searchable physician directories, specialty procedure overviews, insurance plan matrices, and lightning-fast appointment scheduling flows.',
    image: '/images/us/services/dental-seo/hero.webp',
    alt: 'A bright empty reception lobby with a sofa, plants and a white reception desk',
    points: [
      'Searchable provider directories with clinical specialty credentials and hospital affiliations',
      'HIPAA-aware consultation intake forms and click-to-call mobile patient actions',
      'Flawless responsive performance achieving 95+ Core Web Vitals across mobile networks',
    ],
  },
  {
    sector: 'Corporate Law, Venture Capital & IP Litigation',
    headline: 'Projecting Institutional Stature for Downtown Raleigh Practices',
    description:
      'High-stakes intellectual property and venture capital law firms in the Research Triangle cannot afford generic visual templates. We craft bespoke digital flagships featuring practice area content hubs, partner biographical repositories with bar admission schema, verified transaction track records, and secure client communication endpoints.',
    image: '/images/us/services/law-firm-seo/hero.webp',
    alt: 'An empty wood-panelled office with bookshelves and a desk in warm light',
    points: [
      'Deep practice area knowledge graphs and structured legal case victory portfolios',
      'Attorney profile schema with state bar admissions and published industry insights',
      'Secure lead capture workflows routing confidential inquiries to specific partners',
    ],
  },
  {
    sector: 'Clean Tech, Advanced Automation & AgTech',
    headline: 'Engineering Technical Authority for Triangle Innovators',
    description:
      'From clean energy startups to automated agriculture technology leaders across Wake County, technical buyers demand precision. We develop high-performance web applications featuring structured capability tables, instant RFQ calculators, downloadable spec sheets, and sub-second edge hosting.',
    image: '/images/us/raleigh/web-design/card-solar-panel-install.webp',
    alt: 'Two installers fitting a solar panel onto a low metal frame in a field, one tightening a bracket and the other steadying the panel',
    points: [
      'Interactive equipment capability matrices and downloadable CAD/PDF engineering data',
      'Frictionless multi-step RFQ form workflows routing directly to estimating teams',
      'Lightweight server-rendered Next.js architecture deployed to Cloudflare Edge nodes',
    ],
  },
  {
    sector: 'Enterprise Analytics, Clean Energy & Smart Grid Technology',
    headline: 'Engineering Digital Authority for Raleigh Clean Tech Leaders',
    description:
      'From smart grid engineers in Raleigh to SAS enterprise analytics spinouts in Cary, technical B2B buyers require interactive proof of performance. We build custom Next.js web applications featuring real-time data visualization components, ESG reporting repositories, and enterprise procurement lead funnels.',
    image: '/images/us/raleigh/web-design/card-wind-turbine-base-check.webp',
    alt: 'A technician in an orange hard hat opening an access door at the base of a white wind turbine while a woman fastens a safety harness',
    points: [
      'Interactive energy infrastructure project maps and downloadable ESG compliance data',
      'Enterprise RFP and contractor bid submission portals with secure file uploads',
      'Sub-second page rendering with 100/100 Core Web Vitals on mobile and desktop',
    ],
  },
  {
    sector: 'University Research Spinouts, Intellectual Property & Deep Tech',
    headline: 'Academic Stature & Commercial Pitch Portals for Triangle Spinouts',
    description:
      'Commercialization teams from NC State, Duke, and UNC Chapel Hill spinning out deep tech ventures demand high-credibility digital flagships. We construct interactive platforms featuring scientific publication hubs, researcher profile schemas, grant funding track records, and venture capital presentation portals.',
    image: '/images/us/raleigh/web-design/card-robot-arm-bench-test.webp',
    alt: 'A young woman guiding a small white robot arm to grip a block on a bench while an older man tightens its base in a bright research lab',
    points: [
      'Searchable scientific publication repositories with DOI links and author citations',
      'Interactive technology readiness level (TRL) matrices and patent portfolio silos',
      'Secure investor presentation portals with gated data rooms and analytics tracking',
    ],
  },
];

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Three of the top ten results are list pages',
    problem: 'We searched "raleigh web design company" from Raleigh on 21 Oct 2026. Three of the top 10 results were list pages on Thumbtack, Built In and The Manifest. A buyer who clicks one gets a column of names with no prices, timelines or sample pages.',
    solution: 'We put the answers a list page leaves out on your own site: what you build, real sample work, how long a job takes and how to start. A buyer who lands from a list then has a reason to call you first.',
  },
  {
    num: '02',
    title: 'The map box is won on reviews',
    problem: 'The three businesses in Google\'s map box for that search had 63, 115 and 359 reviews, every one rated 5 stars (21 Oct 2026). A new website on its own does not move a business into that box.',
    solution: 'Every site we build links to your Google Business Profile, names the places you work, such as Cary, Apex or Wake Forest, and includes a short review request page you can text to a customer after each job.',
  },
  {
    num: '03',
    title: 'Buyers type the same search six ways',
    problem: '"raleigh web design", "web design raleigh nc", "website design raleigh" and three other close variants each show about 480 US searches a month in Google Ads data (21 Oct 2026). "raleigh web design company" shows about 50.',
    solution: 'We write titles and headings in the words people type, and give each service its own page. One page then targets one search, so the home page does not compete with your own service pages.',
  },
  {
    num: '04',
    title: 'No AI summary on this search yet',
    problem: 'Google showed no AI Overview, its AI-written summary above the links, for "raleigh web design company" on 21 Oct 2026. Buyers still read ten links and the map box, so plain page copy decides who gets the call.',
    solution: 'We write service pages with direct answers, sourced price ranges and an FAQ marked up for search engines. The page reads well to a person today, and its answers are easy to quote if an AI summary appears later.',
  },
];

const ROADMAP_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Days 1 to 2: Scope and clickable draft',
    desc: 'A short call fixes the pages, the buyers you want in Raleigh, Cary or Durham, and the search each page targets. You see a clickable draft before you sign.',
    deliverables: ['Page list of up to 5 pages', 'Clickable draft on a private link', 'Fixed price in writing'],
  },
  {
    phase: 'Phase 02',
    title: 'Days 3 to 5: Build and copy',
    desc: 'We build responsive pages that work on a phone from the first draft, and write copy in the words Raleigh buyers search, like "website design raleigh nc".',
    deliverables: ['Responsive pages for phone and desktop', 'Page copy with sourced numbers', 'Contact form wired to your inbox'],
  },
  {
    phase: 'Phase 03',
    title: 'Day 6: Search setup and your review',
    desc: 'We add page titles, LocalBusiness and FAQ markup, a Google Business Profile link and analytics. You review every page and approve each change.',
    deliverables: ['Titles, headings and schema markup', 'Google Business Profile linked', 'Analytics with form tracking'],
  },
  {
    phase: 'Phase 04',
    title: 'Day 7: Launch and handover',
    desc: 'We point your domain at the new site, test every form on real phones and hand over the code. Later changes are quoted and approved one at a time.',
    deliverables: ['Domain connected, forms tested', 'Code and logins handed to you', 'Founder reply within 24 hours'],
  },
];

const EVALUATION_CRITERIA = [
  {
    label: 'Can I see a working draft before I sign?',
    factoryjet: 'Yes. You click through a draft of your own site on a private link before any contract, so you judge real pages and skip the pitch deck.',
    traditional: 'A mood board and a long proposal, with the first real page showing up weeks after the deposit clears.',
  },
  {
    label: 'Which Raleigh searches will each page target?',
    factoryjet: 'We name them in writing. "raleigh web design" and its close variants show about 480 US searches a month, "raleigh web design company" about 50 (21 Oct 2026).',
    traditional: '"We\'ll handle the SEO," with no named searches, no monthly volumes and no page assigned to each one.',
  },
  {
    label: 'How will buyers find me past the list sites?',
    factoryjet: 'Thumbtack, Built In and The Manifest held 3 of the top 10 results for "raleigh web design company" on 21 Oct 2026. We build service pages and a Business Profile link that compete with them.',
    traditional: 'A paid directory listing renewed every year, with no work done on the pages you own.',
  },
  {
    label: 'Who owns the code, and how are later changes priced?',
    factoryjet: 'You own the code and every page. After launch, each change is quoted and approved before work starts, and there is no long-term contract.',
    traditional: 'A site builder you cannot leave without a rebuild, plus a monthly plan that bundles changes you may never ask for.',
  },
];

const FAQ_CATEGORIES = [
  { key: 'pricing', label: 'Cost and pricing' },
  { key: 'process', label: 'Timeline and process' },
  { key: 'ecommerce', label: 'Ecommerce builds' },
  { key: 'local', label: 'Raleigh search and hiring' },
  { key: 'ai', label: 'AI and new search' },
];

const FAQ_ITEMS = [
  {
    category: 'pricing',
    question: 'How much does a website cost in Raleigh?',
    answer: 'Most small business websites cost between $1,000 and $48,000, according to WebFX\'s web design pricing data. Small agencies usually land between $6,000 and $12,000 (WebFX). The spread comes from page count, custom design, forms, booking tools and online payments. A five-page site for a Raleigh contractor sits near the low end. A store with hundreds of products sits near the top. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'How much should I pay someone to redesign my website?',
    answer: 'A website redesign runs from about $3,000 to $75,000, per WebFX\'s redesign pricing. Where you land depends on how much changes. New colors and photos on the same pages cost far less than new pages, new copy and a move to a new platform. Write down what is broken today, such as slow pages or a contact form nobody uses, before you ask for quotes. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'What does it cost to keep a website running after launch?',
    answer: 'Maintenance for a small site runs about $35 to $100 a month, and $125 to $500 a month for a larger small business site, according to WebFX. That covers updates, backups, security fixes and small edits. With FactoryJet there is no long-term contract. Each change after launch is quoted and approved before we start, and you own the code, so any developer you pick later can work on it. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'pricing',
    question: 'Why are web design ads in Raleigh so expensive?',
    answer: 'Google Ads suggests about $15.68 a click for "raleigh web design" and about $20.88 a click for "web designers raleigh" (21 Oct 2026). Firms bid that much because one signed project pays for hundreds of clicks. For you, the buyer, it means the first ads you see are bought placements. Scroll past them and compare the organic links and the map box too, then judge each firm on its sample sites and written quote.',
  },
  {
    category: 'pricing',
    question: 'Is there a way to get a written price before I commit?',
    answer: 'Yes. FactoryJet quotes a fixed price in writing after a short scoping call, and you see a clickable draft of your site before you sign. The quote lists every page, every form and the launch date. If the scope grows later, the new work is quoted and approved on its own, so the first number does not quietly change. There is no long-term contract.',
  },
  {
    category: 'process',
    question: 'How fast can a new website go live?',
    answer: 'A site of up to 5 pages can go live in 7 days. Day one is a short scoping call, and you see a clickable draft before you sign. Days three to five are the build and copy. Launch day covers the domain, form tests and code handover. Larger sites and ecommerce stores take longer, and their timeline is written into the quote. FactoryJet has kept a 97% on-time delivery record across 500+ businesses since 2014.',
  },
  {
    category: 'process',
    question: 'What is functional prototyping, and can I get one before I sign?',
    answer: 'A functional prototype is a draft of your site you can click through: real pages, working menus and sample forms, on a private link. It differs from a picture of a design because you can test it on your own phone. FactoryJet shows you a working draft or working software before you sign anything. You find out early whether the layout suits your buyers, and changes at that stage cost little.',
  },
  {
    category: 'process',
    question: 'What help do I get when my website launches?',
    answer: 'On launch day we connect your domain, test every form on real phones and hand you the code and all logins. After that, founder Bhavesh Barot replies to questions within 24 hours. Any fix or new page is quoted and approved before work starts, so nothing gets billed by surprise. You own the code, so you are free to hand it to another developer at any point.',
  },
  {
    category: 'process',
    question: 'Will I own my website code?',
    answer: 'Yes. You own the code, the pages, the images and the written content from the day we hand over. Logins for your domain, hosting and analytics are in your name. That matters if you ever switch providers: a site you own can move to any developer, while a site locked inside a builder platform often has to be rebuilt from scratch. There is no long-term contract with FactoryJet.',
  },
  {
    category: 'process',
    question: 'What is responsive web design, and is it included?',
    answer: 'Responsive design means one website that rearranges itself to fit a phone, tablet or laptop screen. Text stays readable, buttons stay large enough to tap and forms work with a thumb. Every FactoryJet site is responsive by default, at no extra line item. We test each page on real phones before launch, because most local buyers find a service business on their phone first.',
  },
  {
    category: 'process',
    question: 'Do you build websites for healthcare practices in Raleigh?',
    answer: 'Yes. We build sites for clinics and practices, such as a dental office in North Hills or a specialist group in Cary. Typical pages are providers, services, insurance accepted and a booking link. If a form collects health details, it needs a tool that supports HIPAA, the federal health privacy law, and we name that tool in the written scope. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'process',
    question: 'Can you build a website for a contractor or trade business?',
    answer: 'Yes. A contractor site needs a few things done well: a clear list of services, the towns you cover such as Garner, Apex or Wake Forest, photos of finished jobs and a quote form that reaches your phone. Most trade sites fit in 5 pages or fewer, so they qualify for 7-day delivery. We also link the site to your Google Business Profile, where reviews drive local calls.',
  },
  {
    category: 'ecommerce',
    question: 'How long does a custom ecommerce website take to build?',
    answer: 'A store on a custom theme takes 3 to 5 weeks. An advanced build with custom features, such as product builders or wholesale pricing, takes 5 to 8 weeks. A headless store takes 8 to 14 weeks. Headless means the shop\'s back office and the pages shoppers see run as two separate systems, which gives more design freedom. The 7-day delivery covers only sites of up to 5 pages, never stores.',
  },
  {
    category: 'ecommerce',
    question: 'Can you build a direct-to-consumer store for a Raleigh brand?',
    answer: 'Yes. A direct-to-consumer store sells your own products to shoppers without a retailer in the middle. We build the product pages, cart, checkout and the emails a buyer gets after ordering. A store on a custom theme takes 3 to 5 weeks, and you see working software before you sign. You own the code and the store. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'ecommerce',
    question: 'Should my store use a custom theme or a headless build?',
    answer: 'Most stores should start on a custom theme. It launches in 3 to 5 weeks, costs less and is easier for your staff to edit. Headless, where the store\'s back office and the shop pages run separately, takes 8 to 14 weeks. It pays off when you need pages a theme cannot handle, or several storefronts fed from one catalog. We tell you which fits on the scoping call, in writing.',
  },
  {
    category: 'local',
    question: 'How many people in Raleigh search for a web designer each month?',
    answer: 'About 480 US searches a month each for "raleigh web design", "web design raleigh nc" and "website design raleigh", based on Google Ads data we pulled on 21 Oct 2026. Google groups close variants together, so those figures overlap. Smaller phrases: "web designers raleigh" about 110, "raleigh web development" about 90, "raleigh web design company" about 50 and "web design pricing raleigh" about 10 a month.',
  },
  {
    category: 'local',
    question: 'How do I find the top web design companies in Raleigh?',
    answer: 'Start with Google, then check each firm\'s own work. On 21 Oct 2026, 7 of the top 10 results for "raleigh web design company" were agency sites and 3 were lists from Thumbtack, Built In and The Manifest. Lists are a fine starting point, but few show prices or timelines. Shortlist three firms, ask each for live sites they built and a written quote, and compare those side by side.',
  },
  {
    category: 'local',
    question: 'Do Google reviews matter when I choose a web designer?',
    answer: 'Yes, but read them closely. On 21 Oct 2026 the three firms in Google\'s map box for "raleigh web design company" had 63, 115 and 359 reviews, all rated 5 stars. When every rating is 5 stars, the stars stop telling firms apart. Read the newest reviews for words like "on time" and "after launch", then ask the firm for two live sites you can open yourself.',
  },
  {
    category: 'local',
    question: 'Is web design still in demand in 2026?',
    answer: 'Yes, in Raleigh the searches are steady. Google Ads data from 21 Oct 2026 shows about 480 US searches a month for "raleigh web design" and its close variants. Google Ads also suggests about $15.68 a click for that phrase, which means firms still pay to win those buyers. What has changed is the build: tools are faster, so a 5-page site can now go live in 7 days.',
  },
  {
    category: 'local',
    question: 'How do you work with Raleigh clients?',
    answer: 'By video call and a shared draft. FactoryJet works remotely with US clients and schedules calls in US business hours. Founder Bhavesh Barot replies within 24 hours. Raleigh, Durham, Cary and Chapel Hill clients work with us the same way: a video scoping call, a clickable draft on a private link and written approvals for each change. FactoryJet was founded in 2014 and has worked with 500+ businesses, with 97% of projects delivered on time.',
  },
  {
    category: 'ai',
    question: 'Can ChatGPT build a website for my business?',
    answer: 'ChatGPT can write page text and sample code for a simple page. It cannot buy your domain, set up hosting, connect your booking tool or test your forms on a phone. It also will not notice when your contact form stops sending email next month. Use it to draft copy ideas. For a site customers pay through or book from, you want a person who builds it, tests it and answers when it breaks.',
  },
  {
    category: 'ai',
    question: 'Does Google show an AI summary when people search for Raleigh web designers?',
    answer: 'Not on the search we checked. Google showed no AI Overview, its AI-written summary above the links, for "raleigh web design company" on 21 Oct 2026. Buyers saw the map box with three firms and ten regular links. That can change at any time, so we write pages with short, direct answers and FAQ markup that both a person and an AI summary can read.',
  },
  {
    category: 'ai',
    question: 'Will my new website show up in ChatGPT or Google AI answers?',
    answer: 'Nobody can promise that, and you should be wary of anyone who does. What we control is how the site is built: clear facts on each page, FAQ markup, a page for each service, and crawler access open to the bots that ChatGPT, Claude and Perplexity send out. Those steps make your answers easy to quote. Whether an AI tool quotes them is decided by that tool.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  parentOrganization: { '@id': 'https://factoryjet.com/#organization' },
  name: 'FactoryJet - Raleigh Web Design Agency',
  image: 'https://factoryjet.com/og-default.png',
  url: CANONICAL,
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Raleigh' },
    { '@type': 'City', name: 'Durham' },
    { '@type': 'City', name: 'Cary' },
    { '@type': 'City', name: 'Chapel Hill' },
    { '@type': 'City', name: 'Apex' },
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
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
  name: 'Raleigh Web Design & Next.js Development',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  serviceType: 'Web Design, Frontend Engineering & Conversion Optimization',
  description:
    'Senior engineering-led custom Next.js web design, sub-second page performance, mobile conversion optimization, and full IP ownership for Research Triangle businesses.',
  areaServed: { '@type': 'State', name: 'North Carolina' },
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Raleigh Web Design Agency | Fast Next.js Sites | FactoryJet',
  description: 'Custom Next.js websites, sub-second load speeds, and full code ownership for Raleigh NC businesses.',
  url: CANONICAL,
  dateModified: PAGE_MODIFIED,
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
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/' },
    { '@type': 'ListItem', position: 2, name: 'Web Design', item: 'https://factoryjet.com/services/web-design' },
    { '@type': 'ListItem', position: 3, name: 'Raleigh', item: CANONICAL },
  ],
};

export default function RaleighWebDesignPage() {
  return (
    <>
      <script id="rdu-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="rdu-local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <script id="rdu-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="rdu-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="rdu-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        {/* ── 01. RITOVEX HERO BANNER SECTION ── */}
        <section className="pp-sec" style={{ paddingTop: 'clamp(44px, 7vh, 88px)', paddingBottom: 'clamp(44px, 6vh, 72px)', background: '#FFFFFF' }}>
          <div className="pp-wrap">
            <div className="rv-hero-wrap">
              {/* Left Column Typography */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '18px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Raleigh Web Design &amp; Frontend Engineering</span>
                </div>

                <h1 style={{ color: '#141414', margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5.2vw, 56px)' }}>
                  Raleigh Web Design Agency for Growing Brands
                </h1>

                <p className="pp-lead" style={{ color: '#494852', maxWidth: '52ch', margin: '0 0 28px', fontSize: 'clamp(16px, 1.8vw, 18.5px)', lineHeight: 1.6 }}>
                  Turn website visitors into paying clients with custom Next.js architecture, sub-second load speeds, and mobile conversion flows. 7-day delivery with 100% full IP code ownership.
                </p>

                <div className="rv-actions">
                  <ModalCTAButton label="Get a Fixed-Price Quote" region="us" btnVariant="primary-dark" />
                  <a href="#rdu-districts" className="rv-btn-secondary">
                    <div className="rv-video-circle">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="#141414">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48113 13 8.86603L2.5 14.9282C1.83333 15.3131 1 14.832 1 14.0622L1 1.93782C1 1.16802 1.83333 0.686897 2.5 1.0718L13 7.13397Z" />
                      </svg>
                    </div>
                    <span>Explore Triangle Corridors</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Ritovex Organic Curved Photo Frame */}
              <div className="rv-curved-frame-1">
                <Image
                  src="/images/us/raleigh/hero-raleigh.webp"
                  alt="Aerial view of a mid-size city skyline surrounded by trees"
                  width={640}
                  height={640}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. RITOVEX PARTNERS / TECHNOLOGY MARQUEE TICKER ── */}
        <section style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC', padding: '36px 0' }}>
          <div className="pp-wrap">
            <div className="rv-ticker-header">
              <div className="rv-ticker-line" />
              <div className="rv-ticker-label">Modern Frontend Engineering Stack</div>
              <div className="rv-ticker-line" />
            </div>

            <div className="rv-marquee-wrapper">
              <div className="rv-marquee">
                {PARTNERS.concat(PARTNERS).map((p, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '36px' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#141414', letterSpacing: '-0.01em' }}>
                      {p}
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5622' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. RITOVEX ABOUT US & 2x2 BENTO COUNTER SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(56px, 8vh, 96px) 0' }}>
          <div className="pp-wrap">
            <div className="rv-about-grid">
              {/* Left Column: Clean Organic Curved Photo Frame */}
              <div className="rv-curved-frame-2">
                <Image
                  src="/images/us/shared/factoryjet-audit-call.webp"
                  alt="FactoryJet senior frontend engineers building custom Next.js web solutions in Raleigh"
                  width={640}
                  height={640}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Right Column: 2x2 Bento Counter Grid */}
              <div>
                <div className="rv-badge" style={{ marginBottom: '14px' }}>
                  <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                  </svg>
                  <span>Speed, Polish &amp; Conversion</span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 14px' }}>
                  Websites Built for the Triangle&apos;s High-Value Sectors
                </h2>

                <p className="pp-lead" style={{ color: '#494852', margin: '0 0 28px', fontSize: '16px', lineHeight: 1.6 }}>
                  From RTP biopharma leaders to Cary enterprise software firms and Downtown Raleigh startups, Triangle businesses need sites that project authority and convert high-ticket decision-makers.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {STAT_CARDS.map((s) => (
                    <div className="rv-stat-card-bento" key={s.title}>
                      <div className="rv-stat-icon-outline">
                        <span style={{ fontSize: '20px' }}>{s.icon}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--pp-display)', fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#141414', marginTop: '6px' }}>
                        {s.title}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#6E6E80', margin: '4px 0 0', lineHeight: 1.45 }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div style={{ marginTop: '32px' }}>
                  <ModalCTAButton label="Schedule Web Strategy Call" region="us" btnVariant="primary-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. RALEIGH DISTRICTS & INDUSTRY DIRECTORY ── */}
        <section id="rdu-districts" className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Research Triangle Commercial Corridor Depth</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Tailored Web Design for Raleigh&apos;s Core Sectors
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                From RTP research centers to Downtown Raleigh SaaS firms and Cary software campuses:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '20px' }}>
              {DISTRICTS.map((d) => (
                <div
                  key={d.corridor}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {d.corridor}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 8px', letterSpacing: '-0.015em' }}>
                    {d.focus}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#6E6E80', lineHeight: 1.55, margin: 0 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. INDUSTRY SHOWCASE SECTION ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Industry-Specific Execution</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Specialized Web Architectures for Triangle Businesses
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Every commercial sector in the Research Triangle demands tailored user experiences, technical credibility, and conversion paths:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {INDUSTRY_SHOWCASE.map((ind, idx) => (
                <div
                  key={ind.sector}
                  className={idx % 2 === 0 ? 'rv-showcase-row' : 'rv-showcase-row rv-showcase-row--flip'}
                  style={{
                    gap: 'clamp(28px, 5vw, 56px)',
                    alignItems: 'center',
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 4vw, 44px)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {ind.sector}
                    </span>
                    <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#141414', margin: '14px 0 12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                      {ind.headline}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#494852', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {ind.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5622', flexShrink: 0 }} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rv-showcase-media" style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid #E2E2E8' }}>
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. CORE DRIVERS & PAIN POINTS ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>The FactoryJet Difference</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Why Raleigh Companies Choose FactoryJet Web Design
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Each point below starts with something we measured in Raleigh Google results on 21 Oct 2026, then says what we build because of it.
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              {PAIN_POINTS.map((p) => (
                <div className="rv-service-row" key={p.num}>
                  <div className="rv-service-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <span className="rv-service-num">{p.num}</span>
                      <h3 className="rv-service-title">{p.title}</h3>
                    </div>
                    <div className="rv-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 10L10 2M10 2H4M10 2V8" />
                      </svg>
                    </div>
                  </div>
                  <div className="rv-service-compare" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F5', gap: '20px' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.08em' }}>What we saw in Raleigh search, 21 Oct 2026:</span>
                      <p style={{ fontSize: '13.5px', color: '#494852', margin: '4px 0 0', lineHeight: 1.5 }}>{p.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', color: '#FF5622', letterSpacing: '0.08em' }}>What we build because of it:</span>
                      <p style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, margin: '4px 0 0', lineHeight: 1.5 }}>{p.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. ARCHITECTURE BLUEPRINT ── */}

        <div id="web-architecture-blueprint">
          <WebDesignArchitectureBlueprint
            badge="// RALEIGH MODERN WEB ARCHITECTURE BLUEPRINT"
            title="High-Performance Frontend: From Code to Conversion"
            subtitle="Explore how custom Next.js components, Cloudflare Edge caching, structured JSON-LD schema, and conversion tracking work together seamlessly."
            city="Raleigh"
            ctaLabel="Get a Fixed-Price Quote"
            region="us"
          />
        </div>

        {/* ── 08. STEP-BY-STEP 7-DAY DELIVERY ROADMAP MATRIX ── */}
        <section className="pp-sec" style={{ backgroundColor: '#FFFFFF', padding: 'clamp(64px, 9vh, 104px) 0' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>7-Day Sprint</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Our 7-Day Delivery Sprint Protocol
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                The 7-day delivery covers sites of up to 5 pages; larger sites and ecommerce builds get their own written timeline before you sign.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.phase}
                  style={{
                    background: '#F9F9FC',
                    border: '1px solid #E6E6EC',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#B23E13', background: '#FFF0EB', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {step.phase}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141414', margin: '0 0 10px', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#494852', lineHeight: 1.55, margin: '0 0 18px', flexGrow: 1 }}>
                    {step.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #E6E6EC', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#8E8E9F', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                      Core Deliverables:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '12.5px', color: '#141414', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                          <span style={{ color: '#FF5622', fontWeight: 800 }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 09. AGENCY EVALUATION FRAMEWORK TABLE ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
              <div className="rv-badge" style={{ marginBottom: '14px' }}>
                <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
                </svg>
                <span>Vendor Due Diligence</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.025em', margin: 0 }}>
                Evaluating Raleigh Web Design Agencies: What to Ask
              </h2>
              <p className="pp-lead" style={{ marginTop: '12px', color: '#494852' }}>
                Put these four questions to any Raleigh web design firm before you sign, and check the answers against what we measured in Raleigh search on 21 Oct 2026.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E6E6EC', borderRadius: '16px', overflow: 'hidden', maxWidth: '960px', margin: '0 auto' }}>
              <div className="rv-eval-head" style={{ background: '#141414', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '13.5px' }}>
                <div>Evaluation Factor</div>
                <div style={{ color: '#FF5622' }}>FactoryJet Engineering Model</div>
                <div style={{ color: '#A0A0B0' }}>Traditional Design Agencies</div>
              </div>

              {EVALUATION_CRITERIA.map((crit, cIdx) => (
                <div
                  key={crit.label}
                  className="rv-eval-row"
                  style={{
                    padding: '20px 24px',
                    borderTop: cIdx > 0 ? '1px solid #F0F0F5' : 'none',
                    background: cIdx % 2 === 0 ? '#FFFFFF' : '#FAFAFC',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '14px', color: '#141414' }}>
                    {crit.label}
                  </div>
                  <div data-label="FactoryJet Engineering Model" style={{ fontSize: '13.5px', color: '#141414', fontWeight: 600, lineHeight: 1.45 }}>
                    {crit.factoryjet}
                  </div>
                  <div data-label="Traditional Design Agencies" style={{ fontSize: '13px', color: '#6E6E80', lineHeight: 1.45 }}>
                    {crit.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ── */}
        <WebDesignValueCalculator city="Raleigh" region="us" />

        {/* ── 10. SEARCHABLE CATEGORIZED FAQ SECTION ── */}
        <FAQ
          eyebrow="RALEIGH WEB DESIGN INTELLIGENCE"
          headline="Frequently Asked Questions About Web Design in Raleigh NC"
          lead="Direct, plain English answers to what Raleigh business owners and marketing leaders ask about website projects:"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          bgClassName="bg-[#FFFFFF]"
        />

        {/* ── 11. LOCAL LINK SILO MATRIX ── */}
        <section style={{ background: '#F6F6F9', borderTop: '1px solid #E6E6EC', padding: '48px 0' }}>
          <div className="pp-wrap">
            <WebDesignCityLinksUS currentCity="raleigh" />
          </div>
        </section>

        {/* ── VERIFIED AUTHOR ENTITY CARD ── */}
        <section className="pp-sec" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="pp-wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ── 12. FINAL EXECUTIVE CTA BANNER ── */}
        <section className="pp-sec" style={{ backgroundColor: '#141414', color: '#FFFFFF', padding: 'clamp(64px, 10vh, 112px) 0', textAlign: 'center' }}>
          <div className="pp-wrap" style={{ maxWidth: '800px' }}>
            <div className="rv-badge" style={{ background: '#26262B', color: '#FF5622', borderColor: '#3E3E48', marginBottom: '20px' }}>
              <svg className="rv-badge-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
              </svg>
              <span>Fixed-Price &amp; 7-Day Delivery</span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.12, margin: '0 0 20px' }}>
              Ready to Upgrade Your Raleigh Business Website?
            </h2>

            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#A0A0B0', lineHeight: 1.6, margin: '0 auto 36px', maxWidth: '60ch' }}>
              Tell us about your brand goals. We will provide a comprehensive fixed-price proposal, clear timeline, and interactive Figma preview.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get Your Fixed-Price Quote" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale="us" />
    </>
  );
}
