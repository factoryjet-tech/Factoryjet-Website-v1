import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import './ecommerce-development.css';

const CANONICAL = 'https://factoryjet.com/uk/ecommerce-development';
const UPDATED = '2026-09-24';
const UPDATED_LABEL = '24 September 2026';

const TITLE = 'Ecommerce Agency UK: Ecommerce Website Design | FactoryJet';
const DESCRIPTION =
  'A UK ecommerce agency and ecommerce website designers for Shopify, WooCommerce and Magento. Clear timelines, full code ownership and support after launch.';
const H1 = 'Ecommerce Agency UK: Ecommerce Web Design and Development That Sells on Every Channel';

/* ─── Breadcrumb source of truth (drives visible trail + BreadcrumbList) ─── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Ecommerce Agency UK', url: CANONICAL },
];

/* ─── Answer-first block (drives visible block + speakable) ─────────── */
const ANSWER_FIRST =
  'An ecommerce agency plans, designs, builds and supports online stores. A good UK ecommerce agency picks the right platform (Shopify, WooCommerce, Magento or custom), designs product pages and checkout that sell, connects payments, stock and delivery, migrates your old store without losing rankings, and stays on after launch to fix, improve and grow it.';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'start',     label: 'Getting started' },
  { key: 'choosing',  label: 'Choosing an agency' },
  { key: 'platforms', label: 'Platforms & tech' },
  { key: 'design',    label: 'Design & conversion' },
  { key: 'seo',       label: 'SEO & AI search' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Getting started ──
  { category: 'start', question: "What is an ecommerce agency?",
    answer: "An ecommerce agency is a team that designs, builds and looks after online stores. Some only do design, some only do marketing, and a full-service ecommerce agency does strategy, platform choice, design, development, integrations, migration and support after launch. FactoryJet sits on the build side: we design and develop the store, connect it to your systems, and stay on to support it, and you own everything we build." },
  { category: 'start', question: "How much does it cost to build an ecommerce website in the UK?",
    answer: "There is no single number, because a five-product DTC launch and a two-thousand-SKU B2B catalogue with ERP integration are different jobs. SKU means stock keeping unit, one sellable product or variant. What sets the scope is product count, the platform, how many systems you integrate (payments, stock, CRM), and how custom the design is. We scope every project after a call, so you know the shape of the investment before you commit to anything." },
  { category: 'start', question: "How long does it take to build an ecommerce store?",
    answer: "A platform store with a custom theme takes 3 to 5 weeks. An advanced store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks. Headless builds and custom platforms run 8 to 14 weeks, depending on catalogue size, integrations and migration needs. The biggest delays are usually late product data and slow sign-off, not the code." },
  { category: 'start', question: "Is ecommerce still profitable in 2026?",
    answer: "For well-run stores, yes. The Office for National Statistics reported that online sales were 28.8 percent of all Great Britain retail sales in August 2026, so close to three in every ten retail pounds are spent online. Profit comes from margins, delivery costs, returns and repeat customers, not from having a store at all. A fast store with a clear checkout and honest delivery costs protects those margins." },
  { category: 'start', question: "Do I own the code and the store when it's finished?",
    answer: "Yes, completely. When we hand a project over, you get the full codebase, admin access, and every credential involved, with no dependency on us to keep running. That is different from agencies that build on a locked template or keep hosting and code access under their own account. If you ever want to move to another developer, you can, because it is genuinely yours." },
  { category: 'start', question: "Can you build a store for B2B as well as DTC?",
    answer: "Yes. B2B commerce needs things a DTC template does not have: account-based pricing, bulk ordering, quote requests, and sometimes a login wall before customers see prices at all. DTC means direct to consumer, selling straight to shoppers. We build the B2B logic properly on Shopify Plus, Magento, or a custom stack, rather than bolting a password page onto a normal storefront and calling it B2B." },
  { category: 'start', question: "Do you do ecommerce development for manufacturing companies in the UK?",
    answer: "Yes, and it is some of our favourite work. UK manufacturers usually need trade accounts, customer-specific price lists, minimum order quantities, spec sheets and CAD downloads, and a live link to their ERP so stock and pricing stay correct. We build those features on Shopify Plus, Magento or a custom stack, and we keep the retail side separate if you also sell direct to consumers." },
  { category: 'start', question: "Do you redesign existing ecommerce websites, or only build new ones?",
    answer: "Both, and redesigns are more than half of what we do. Most UK brands come to us with a store that already takes orders but leaks them: slow on mobile, an awkward checkout, or a theme patched so many times nobody wants to touch it. We map what is already ranking and converting before we change anything, so the redesign buys you speed and sales without costing you the search traffic you have." },

  // ── Choosing an agency ──
  { category: 'choosing', question: "What are the top ecommerce agencies in the UK?",
    answer: "Agencies that show up often in UK ecommerce searches include Cake in the West Midlands, Unified in Richmond, designbox in Southend-on-Sea, Chilliapple, Charle and Propeller in London, and FactoryJet. Each has a different centre of gravity: some lead with Shopify Plus, some with Magento or bespoke software, some with marketing. The best one is the agency whose platform strength and team size match your store, not the one at the top of a list." },
  { category: 'choosing', question: "How do I choose the right ecommerce agency in the UK?",
    answer: "Ask to see stores they built on your platform and at your size, and check they are still live and fast on a phone. Ask who writes the code, who owns the code and hosting accounts at the end, how they handle redirects on a migration, and what support looks like after launch. Get the timeline in weeks with named milestones. An agency that is vague on any of those will be vague on the build too." },
  { category: 'choosing', question: "Should I hire a freelancer, an in-house developer or an ecommerce agency?",
    answer: "A freelancer suits small, well-defined jobs like theme tweaks or one app setup. An in-house developer makes sense once you have a steady stream of work every week and someone senior to manage them. An ecommerce agency fits a new build, a replatform or anything touching design, development, SEO and integrations at once, because you get several specialists and cover when someone is off. Many brands mix them over time." },
  { category: 'choosing', question: "Do I need a London ecommerce agency, or can we work remotely?",
    answer: "You do not need an ecommerce agency in London to get a London-quality build. We work with brands in London, Manchester, Birmingham, Leeds and across the UK, remotely, with regular video calls, shared boards and the same senior team whatever your postcode. What matters is that the agency understands UK shoppers, UK delivery and UK consumer rules, not whether they can walk to your office." },
  { category: 'choosing', question: "What should an ecommerce agency proposal include?",
    answer: "A written scope listing pages, features and integrations; the platform and why; who does the work; a timeline in weeks with milestones and sign-off points; how data and URLs move if you are migrating; what testing happens before launch; what is handed over at the end; and what support looks like afterwards. If a proposal only has a design mood board and a total, ask for the rest before you sign." },

  // ── Platforms & tech ──
  { category: 'platforms', question: "Which ecommerce platform is best in the UK: Shopify, WooCommerce, Magento or custom?",
    answer: "It depends on your catalogue and your team. Shopify suits most DTC and growing brands who want less to manage. WooCommerce fits businesses already built around WordPress. Magento, now sold as Adobe Commerce, earns its keep with large, multi-store or B2B catalogues. Custom or headless is for business logic that does not fit any of the three. We recommend based on your situation, not on which platform we prefer building." },
  { category: 'platforms', question: "Is Shopify still worth it in 2026?",
    answer: "For most brands, yes. Shopify keeps investing in checkout, international selling, and AI-era shopping features faster than most alternatives, and the app ecosystem covers almost anything you need to bolt on. It stops being the right call once your catalogue, pricing logic, or integrations get complex enough that a template platform starts fighting you, which is when Magento or a custom build takes over." },
  { category: 'platforms', question: "Do you build Shopify Plus or headless commerce?",
    answer: "Yes, both. Shopify Plus makes sense once a standard Shopify plan starts limiting you on checkout customisation, wholesale, or the volume of orders you process. Headless commerce, where the front end is decoupled from the commerce engine, suits brands that need a fully custom experience or want to publish the same catalogue across a website, an app, and other channels from one source." },
  { category: 'platforms', question: "Do you handle payments, stock, and CRM integrations?",
    answer: "Yes. Every build connects to the systems that already run your business: payment providers like Stripe or Shopify Payments, stock and inventory tools, and whatever CRM or email platform your team uses day to day. CRM means customer relationship management, where your customer records live. We would rather connect your existing tools properly than force you onto new ones just because they are easier for us to set up." },
  { category: 'platforms', question: "Can AI build me an ecommerce website?",
    answer: "AI tools and website builders can put a basic store online quickly, and for testing an idea that can be enough. They struggle with the parts that decide whether a store makes money: clean product data, integrations with your stock and accounts, migrations that keep your rankings, UK consumer rules, and speed on a real phone. We use AI inside our own build process, but people still design, check and own every decision." },
  { category: 'platforms', question: "Do you provide hosting for the store?",
    answer: "On Shopify, hosting is part of the platform, so there is nothing extra to manage. For WooCommerce, Magento and custom builds we set up hosting in your name with a UK or EU provider that suits your traffic, and we can look after updates and security patches for you. Either way the account belongs to you, so you are never stuck if you change agency." },

  // ── Design & conversion ──
  { category: 'design', question: "What is the difference between ecommerce web design and ecommerce development?",
    answer: "Design decides what a shopper sees and trusts: the layout, the product photography, the order information appears in, and how the checkout feels to use. Development is the code underneath that makes it fast, connects payments and stock, and keeps it standing when traffic spikes. A design nobody can build is just a picture. A build nobody designed usually converts badly. We do both together, so neither gets blamed for the other." },
  { category: 'design', question: "What makes a good ecommerce website design?",
    answer: "A good ecommerce website design answers a buyer's questions before they have to ask them. Clear pricing and delivery cost up front, honest stock status, real photography from the angles people actually want, and a checkout with nothing in it that does not need to be there. It loads fast on a phone. It looks like your brand rather than the theme it started life as. Everything else is decoration." },
  { category: 'design', question: "Will my store be fast and mobile-first?",
    answer: "That is the standard, not an add-on. Most ecommerce traffic now arrives on a phone, so we design and test for mobile first and target genuinely fast Core Web Vitals, which are Google's measures of loading speed, responsiveness and layout stability. We check them on real devices rather than trusting a score that only holds up in a lab. A slow store loses sales quietly, one abandoned cart at a time." },
  { category: 'design', question: "What legal information does a UK online store need to show?",
    answer: "Under UK distance selling rules you must show your business name, contact details and address, clear prices including taxes and delivery, how to cancel, and the 14-day right to cancel after goods arrive. You also need a privacy notice and a cookie banner that gives a real choice. We build these into checkout, order emails and footer pages, but you should still have terms checked by a solicitor." },
  { category: 'design', question: "Can you migrate my existing store without losing sales or rankings?",
    answer: "Yes, and this is where a lot of DIY migrations go wrong. We map every URL to its new address with a single permanent redirect, keep your product and category pages structured the way search engines already trust, carry structured data across, and test the new store thoroughly before it goes live. Then we watch rankings and traffic for the weeks after launch so anything that slips gets fixed early." },

  // ── SEO & AI search ──
  { category: 'seo', question: "Do you also do ecommerce SEO?",
    answer: "Yes, and we build it in rather than treating it as an add-on. Category and product pages get structured to rank from the start: clean URLs, proper internal linking, schema, and content that answers what a buyer is actually searching for. A store built without SEO in mind almost always needs rework later to fix it. For ongoing work after launch, see our ecommerce SEO service." },
  { category: 'seo', question: "Will my products show up in AI shopping answers and AI Overviews?",
    answer: "That depends on more than good code, but the technical foundation has to be right first. We structure product and category pages with clean schema and clear, factual descriptions that AI crawlers can actually read, which is what makes a product eligible to be recommended by ChatGPT, Gemini, or a Google AI Overview in the first place. Nobody can guarantee a specific mention, but we build for it deliberately rather than by accident." },

  // ── Working with us ──
  { category: 'working', question: "Who actually does the work on my project?",
    answer: "Senior engineers, not a rotating cast of juniors billed at a senior rate. The founder, Bhavesh Barot, is involved in scoping every project and stays close through the build, rather than handing you off entirely to an account manager after the sales call. That is deliberate. It is how the same standard holds whether the project is small or large." },
  { category: 'working', question: "What support do you offer after launch?",
    answer: "We stay close for the first weeks after launch, when real customers on real devices surface things a test environment never does. After that you choose the shape that fits: ad-hoc fixes when you need them, a monthly support plan covering updates, security patches and small improvements, or planned growth sprints for new features. Because you own the code, you can also take it in-house or to another team at any time." },
  { category: 'working', question: "Can I edit products and pages myself after launch?",
    answer: "Yes. We build on platforms with a proper admin, Shopify, WooCommerce, Magento, or a custom CMS, so you can add products, edit copy, and update pages yourself without calling us for every small change. We walk your team through it at handover, record the session, and write it up so it still makes sense three months later." },
  { category: 'working', question: "How do we get started?",
    answer: "Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we look at your catalogue, your current store if you have one, and what platform actually fits. That first conversation is useful whether or not we end up working together." },
];

/* ─── Named UK ecommerce agencies (homepages checked 2026-09-24, ItemList) ─ */
const ECOM_AGENCIES: { name: string; url: string; note: string }[] = [
  { name: 'FactoryJet', url: 'https://factoryjet.com', note: 'That is us. A services company that designs, builds and supports stores on Shopify, Shopify Plus, WooCommerce, Magento and custom stacks, with a strong B2B and manufacturing side. You own the code on every project.' },
  { name: 'Cake', url: 'https://www.cake.agency', note: 'A West Midlands ecommerce agency and Shopify Plus partner that pairs Shopify builds and migrations with ecommerce marketing, branding and mobile apps.' },
  { name: 'Unified', url: 'https://unified.co', note: 'A full-service ecommerce agency in Richmond, London, working on Shopify, Shopify Plus and Adobe Commerce for premium DTC and B2B brands.' },
  { name: 'designbox', url: 'https://designbox.co.uk', note: 'A Southend-on-Sea agency offering ecommerce website design on WooCommerce and Shopify, alongside digital marketing and AI services.' },
  { name: 'Chilliapple', url: 'https://www.chilliapple.co.uk', note: 'A UK development company established in 2008 that builds ecommerce stores on Magento, Shopify and WooCommerce as well as bespoke software.' },
  { name: 'Charle', url: 'https://www.charle.co.uk', note: 'A London Shopify agency that designs, develops, supports and grows Shopify and Shopify Plus stores.' },
  { name: 'Propeller', url: 'https://www.propeller.co.uk', note: 'A London digital agency whose work includes Shopify builds alongside social, paid media and marketing.' },
];

/* ─── Platform comparison (drives the platform choice table) ─────────── */
const PLATFORMS: { name: string; href: string; fit: string; catalogue: string; b2b: string; runs: string; watch: string }[] = [
  { name: 'Shopify', href: '/uk/shopify-development', fit: 'DTC brands and growing catalogues', catalogue: 'Small to large', b2b: 'Basic, via apps', runs: 'Shopify hosts and patches it', watch: 'App costs and app bloat add up' },
  { name: 'Shopify Plus', href: '/uk/shopify-plus', fit: 'High-volume and multi-store brands', catalogue: 'Large', b2b: 'Built-in B2B features', runs: 'Shopify hosts and patches it', watch: 'Only worth it once standard plans limit you' },
  { name: 'WooCommerce', href: '/uk/woocommerce', fit: 'Content-heavy brands on WordPress', catalogue: 'Small to medium', b2b: 'Via plugins', runs: 'You, or us, on your hosting', watch: 'Needs real speed and security upkeep' },
  { name: 'Magento (Adobe Commerce)', href: '/uk/magento', fit: 'Complex, multi-store and B2B catalogues', catalogue: 'Large to very large', b2b: 'Strong, especially Adobe Commerce', runs: 'You, or us, on your hosting', watch: 'Needs specialist developers and upkeep' },
  { name: 'Custom or headless', href: '', fit: 'Unusual logic, many channels, top speed', catalogue: 'Any', b2b: 'Built exactly to your rules', runs: 'You, or us, on your hosting', watch: 'Most engineering, so only when needed' },
];

/* ─── Typical timelines (our own project ranges, not promises) ──────── */
const TIMELINES: { type: string; weeks: string; drivers: string }[] = [
  { type: 'Platform store with a custom theme (Shopify, WooCommerce)', weeks: '3–5 weeks', drivers: 'Product data ready, few integrations' },
  { type: 'Advanced store: subscriptions, B2B pricing or a migration', weeks: '5–8 weeks', drivers: 'Trade pricing, data migration, redirects' },
  { type: 'Headless or custom platform, ERP-heavy or large catalogue', weeks: '8–14 weeks', drivers: 'Catalogue size, integrations, migration needs' },
];

/* ─── What an ecommerce agency does, start to finish ───────────────── */
const STAGES: { n: string; t: string; w: string; d: string }[] = [
  { n: '01', t: 'Discovery and platform choice', w: 'Week 1', d: 'We look at your catalogue, customers, current store, stock and accounts systems, and where you sell. You get a written scope, a platform recommendation with reasons, and a timeline with sign-off points.' },
  { n: '02', t: 'UX and wireframes', w: 'Weeks 1–2', d: 'UX means user experience, how easy the store is to use. We map the path from landing page to paid order as simple page layouts first, so structure gets agreed before anyone argues about colours.' },
  { n: '03', t: 'Visual design', w: 'Weeks 2–3', d: 'Home, category, product, basket and checkout designed around your brand and your photography, mobile first. You approve the designs before development starts.' },
  { n: '04', t: 'Development and integrations', w: 'Weeks 3–12, by scope', d: 'Senior engineers build the store and connect payments, stock, delivery, CRM, email and, for B2B, your ERP. Product data and content go in as the build progresses.' },
  { n: '05', t: 'Migration, testing and launch', w: 'Final 1–2 weeks', d: 'Old URLs mapped with single redirects, real orders placed on real phones, speed and accessibility checked, tracking live. Then we launch on a quiet day, never before a bank holiday weekend.' },
  { n: '06', t: 'Support and growth after launch', w: 'Ongoing', d: 'Close watch for the first weeks, then ad-hoc fixes, a monthly support plan, or growth sprints. We track rankings, speed and conversion so improvements are based on data, not guesses.' },
];

/* ─── How to choose an ecommerce agency (listicle) ───────────────────── */
const CHOOSE_TIPS: { t: string; d: string }[] = [
  { t: 'Look at live stores on your platform, at your size', d: 'Open them on your own phone. A portfolio screenshot tells you nothing about speed or checkout.' },
  { t: 'Ask who writes the code', d: 'Named senior people, or whoever is free that month? Ask to meet them before you sign.' },
  { t: 'Confirm you own the code, the domain and the accounts', d: 'Hosting, theme, apps and analytics should all sit in your name from day one.' },
  { t: 'Get the timeline in weeks, with milestones', d: 'Vague timelines hide vague planning. You want dates for designs, build, testing and launch.' },
  { t: 'Ask how they protect rankings on a migration', d: 'The answer should mention URL mapping, single-hop 301 redirects and checks after launch.' },
  { t: 'Check they understand UK rules and logistics', d: 'VAT display, the 14-day cancellation right, Royal Mail and courier rates, UK GDPR consent.' },
  { t: 'Ask what happens after launch', d: 'Who fixes bugs in week two, what support looks like, and whether you can leave without a fight.' },
  { t: 'Make sure they will say no', d: 'A good agency tells you when a simpler platform, one app or no change at all is the better answer.' },
];

/* ─── Pre-launch checks (drives the visible checklist) ─────────────── */
const LAUNCH_CHECKS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Product structured data on every product page',
    d: 'Google supports two kinds of product markup: product snippets for pages a shopper cannot buy from, and merchant listings for pages they can. We use the one that matches the page, rather than pasting the same block everywhere.' },
  { n: '02', t: 'Checkout tested end to end on a real phone',
    d: 'A real card, a real address, a real order confirmation, on a mid-range Android and an iPhone. Test-mode checkout passing is not the same as checkout working.' },
  { n: '03', t: 'Every old URL redirected once, never twice',
    d: 'On a migration each retired address points straight at its replacement. Two-hop chains waste crawl budget and search engines often give up before the end of them.' },
  { n: '04', t: 'Stock and price sync checked against your systems',
    d: 'We place test orders and watch the numbers move in your inventory tool, so you find out now rather than the first time you oversell something.' },
  { n: '05', t: 'Speed measured on a mid-range phone, not a fast laptop',
    d: 'Core Web Vitals get checked on the kind of device and connection your customers actually use. A score that only holds up on office broadband is not a score.' },
  { n: '06', t: 'Analytics and Search Console connected before launch',
    d: 'Tracking goes live with the store, not three weeks later. Otherwise the launch period, the one you most want to learn from, is a blank space in your data.' },
  { n: '07', t: 'Images sized, compressed, and given fixed dimensions',
    d: 'Width and height are set on every image so the page does not jump around while it loads. Layout shift costs sales on mobile and it is entirely avoidable.' },
  { n: '08', t: 'Consent banner set to decline non-essential by default',
    d: 'UK privacy rules expect a genuine choice, not a pre-ticked box. We set it up so nothing non-essential fires until the shopper actually agrees.' },
  { n: '09', t: 'Accessibility pass on keyboard, focus, contrast, and alt text',
    d: 'Every control reachable by keyboard, a visible focus ring, readable colour contrast, and real alt text on product images. It helps screen readers and search engines alike.' },
  { n: '10', t: 'Recorded handover so your team can run it without us',
    d: 'A walkthrough of adding products, editing pages, and handling orders, recorded and written up, so it still makes sense to whoever joins your team next year.' },
];

/* ─── Scope boundaries (honest, drives the "what we do not do" list) ─ */
const NOT_INCLUDED: string[] = [
  'We do not buy links or use private blog networks. It puts your store at risk and the effect does not last.',
  'We do not lock your store to our hosting, our accounts, or our licences. Everything is in your name.',
  'We do not promise a specific ranking position or a guaranteed mention in an AI answer. Nobody can honestly promise either.',
  'We do not hand your build to junior subcontractors once the sales call is over.',
  'We do not sell fixed packages that ignore what your catalogue actually needs.',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Agency UK: Ecommerce Web Design and Development',
      serviceType: 'Ecommerce agency, ecommerce website design, ecommerce website development, Shopify, Shopify Plus, WooCommerce and Magento development, ecommerce migration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'UK ecommerce agency and ecommerce website designers. FactoryJet designs, builds and supports fast, conversion-first stores on Shopify, Shopify Plus, WooCommerce, Magento and custom or headless stacks, including B2B and manufacturing ecommerce, with full code ownership.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      // Derived from the same `crumbs` array the visible trail renders, so the
      // two cannot drift apart.
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
      inLanguage: 'en-GB',
      datePublished: '2026-07-25',
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
      about: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#agencies`,
      name: 'UK ecommerce agencies',
      itemListElement: ECOM_AGENCIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
        url: a.url,
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'A UK ecommerce agency and ecommerce website designers building fast, conversion-first stores on Shopify, WooCommerce, Magento and custom stacks. You own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'UK ecommerce agency FactoryJet: ecommerce web design and development' }],
  },
  robots: { index: true, follow: true },
};

const linkStyle = { color: '#B23E13', textDecoration: 'underline' } as const;
const tableCardStyle = { padding: 0, overflowX: 'auto' } as const;

export default function EcommerceDevelopmentUKPage() {
  return (
    <>
      <script id="ld-uk-ecommerce-development" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-ecomdev">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Ecommerce Agency</span>
                  <span className="chip">Shopify · WooCommerce · Magento</span>
                  <span className="chip">B2B &amp; Manufacturing</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet is a UK ecommerce agency and team of ecommerce website designers and developers. We
                  design, build and support fast stores on Shopify, WooCommerce, Magento and custom stacks, for DTC
                  brands, B2B wholesalers and manufacturers. You get a clear timeline in weeks, and you own every
                  line of code at handover.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder &amp; CEO<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ecommerce_development_hero" submitLabel="Get my free store consult" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">What every build ships with</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Core Web Vitals</div><div className="scorecard-note">fast on mobile, not just desktop</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 15 }}>Green</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Code ownership</div><div className="scorecard-note">yours, not rented</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>100%</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Timeline</div><div className="scorecard-note">in weeks, with sign-off points</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Written</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Platform fit</div><div className="scorecard-note">Shopify, WooCommerce, Magento, custom</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Matched</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Ecommerce SEO + AI visibility</div><div className="scorecard-note">built in, not bolted on</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Included</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Support after launch</div><div className="scorecard-note">same senior team, founder involved</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Always</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does an ecommerce agency do?</span>
              <p>{ANSWER_FIRST}</p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Ecommerce web design vs ecommerce development</span>
              <p>
                Ecommerce web design decides what a shopper sees and trusts: product pages, basket and checkout,
                shaped around how people really buy. Ecommerce website development is the code underneath that makes
                it fast and connects it to your payment, stock and customer systems. Most real projects need both,
                which is why we do them together.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Why it is different in 2026</span>
              <p>
                A UK store now has to be readable by machines as well as people. Ofcom reports that about 30 percent
                of searches show an AI overview, and more than half of UK adults say they see those summaries often.
                Clean structure and plain, factual product descriptions decide whether an AI tool can quote your store
                when someone asks it where to buy.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 2b. COUNTER-NARRATIVE ═══ */}
        <section className="sec" style={{ backgroundColor: '#F9F9FC', borderTop: '1px solid #E6E6EC', borderBottom: '1px solid #E6E6EC' }}>
          <div className="wrap">
            <div style={{ maxWidth: 860 }}>
              <span className="chip" style={{ marginBottom: 12 }}>The direct comparison</span>
              <h2>What usually goes wrong with ecommerce agencies, and what we do instead</h2>
              <p className="lead mt-4">
                A lot of ecommerce agencies start from a heavy off-the-shelf theme, launch, then go quiet, or keep you
                on a retainer to maintain the weight they added. We build a lighter store, tune it for speed on a
                phone, hand you every line of the code, and stay around after launch. Staying with us is a choice,
                not the only option you have.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              <li className="trust-pill"><span className="dot dot-orange" />Senior engineers build it, not junior subcontractors</li>
              <li className="trust-pill"><span className="dot dot-orange" />You own 100% of the code and the store</li>
              <li className="trust-pill"><span className="dot dot-orange" />Shopify, WooCommerce, Magento, and custom/headless</li>
              <li className="trust-pill"><span className="dot dot-orange" />Founded 2014, 500+ businesses served</li>
            </ul>
          </div>
        </section>

        {/* ═══ 4. WHY IT MATTERS NOW (cited external stats) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Why ecommerce development, why now</span>
                <h2>Retail is moving online, and buyers now ask AI before they buy</h2>
                <div className="stack mt-6">
                  <p>
                    The shift to online retail in the UK is not slowing down. The Office for National Statistics
                    reported that online sales made up 28.8 percent of all retail sales in Great Britain in August
                    2026, up from 28.4 percent in July. Close to three in every ten retail pounds now change hands on
                    a screen rather than a till.
                  </p>
                  <p>
                    At the same time, the way people find products is changing. Ofcom reports that about 30 percent
                    of searches now show an AI overview, and more than half of UK adults, 53 percent, say they see
                    those summaries often. Most are not looking for them. They simply arrive at the top of the
                    results. Ofcom also recorded 1.8 billion UK visits to ChatGPT in the first eight months of 2025,
                    up from 368 million over the same months in 2024.
                  </p>
                  <p>
                    Put those together and a lot of buying decisions are now shaped before anyone clicks a normal
                    search result. A store that only performs well in the blue links is optimised for half the buyer
                    journey. FactoryJet builds for both halves: a store fast and clear enough to convert the visitor
                    in front of it, and structured well enough to be the one an AI tool recommends.
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Ecommerce in numbers</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>Sourced</span>
                </div>
                <div style={{ padding: '6px 18px 16px' }}>
                  {[
                    { v: '28.8%', t: 'of Great Britain retail sales were made online in August 2026', s: 'ONS, Retail sales, Great Britain: August 2026', u: 'https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/august2026' },
                    { v: '53%', t: 'of UK adults say they often see AI summaries in search', s: 'Ofcom, how the UK goes online in 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                    { v: '30%', t: 'of UK searches now show an AI overview', s: 'Ofcom, how the UK goes online in 2025', u: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025' },
                  ].map((r) => (
                    <div key={r.t} style={{ padding: '13px 0', borderBottom: '1px solid var(--n200)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{r.v}</span>
                        <span style={{ fontSize: 13, color: 'var(--ink)' }}>{r.t}</span>
                      </div>
                      <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', textDecoration: 'underline' }}>{r.s}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. START TO FINISH (process with week ranges) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Start to finish</span>
              <h2>What an ecommerce agency does, from first call to life after launch</h2>
              <p className="lead mt-4">
                Most ecommerce development services pages stop at &ldquo;we design and build&rdquo;. Here is what
                actually happens on a typical custom build with us, in six stages, with the weeks each one usually
                takes. Smaller stores compress these; B2B and ERP projects stretch them.
              </p>
            </div>
            <ol className="col-2 mt-10" style={{ gap: 16 }}>
              {STAGES.map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 22px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 14, color: 'var(--orange)', minWidth: 26 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 17 }}>{s.t}</h3>
                    <p style={{ fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '.06em', color: '#B23E13', marginTop: 4 }}>{s.w}</p>
                    <p style={{ marginTop: 6, fontSize: 14.5, color: 'var(--n600)' }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 6. TYPICAL TIMELINES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Typical timelines</span>
                <h2>How long ecommerce website development takes, in weeks</h2>
                <p className="lead mt-4">
                  These are the ranges we see on our own projects, from signed scope to launch. They are a planning
                  guide, not a promise: your written scope gives you real dates.
                </p>
                <div className="card mt-8" style={tableCardStyle}>
                  <table className="cmp-table" style={{ minWidth: 560 }}>
                    <thead>
                      <tr>
                        <th>Type of store</th>
                        <th className="fj">Typical time</th>
                        <th>What drives it</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TIMELINES.map((t) => (
                        <tr key={t.type}>
                          <td className="feat">{t.type}</td>
                          <td className="fj">{t.weeks}</td>
                          <td>{t.drivers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What slows a build down</span>
                <ul className="stack mt-4">
                  {[
                    'Product data, photos and copy arriving late',
                    'Too many people signing off designs',
                    'Integrations with older ERP or stock systems',
                    'Scope added mid-build without moving the date',
                    'Launching into peak season, like Black Friday or Christmas',
                  ].map((x) => (
                    <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--n600)', lineHeight: 1.6 }}>
                      <span className="dot dot-orange" style={{ marginTop: 8, flexShrink: 0 }} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 14, color: 'var(--n600)', marginTop: 16 }}>
                  We plan launches away from peak trading and UK bank holiday weekends, so the first busy days
                  on the new store are ones you can watch closely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. SENIOR TEAM + PHOTO (E-E-A-T) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who actually builds it</span>
                <h2>Senior engineers, not a rotating cast of juniors</h2>
                <div className="stack mt-6">
                  <p>
                    Plenty of agency work gets handed to junior developers once the sales call ends, built from
                    the same template as the last five projects. That is how so many stores end up looking and
                    behaving alike. We do it differently. Senior engineers write the actual code on your store,
                    and the founder, Bhavesh Barot, stays involved on every build, not just the pitch.
                  </p>
                  <p>
                    FactoryJet was founded in 2014 and has served 500+ businesses across the UK, the US, the UAE and
                    India, with more than a decade in commerce. That includes B2B work like Bombay Petals and DTC
                    brands like Belle Maison. The standard does not drop because a project is smaller: same code
                    quality, same review, and full ownership of everything we build.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img
                  src="/images/uk/shared/uk-ecommerce-fulfilment.webp"
                  width={900}
                  height={672}
                  loading="lazy"
                  decoding="async"
                  alt="An independent UK online store owner packing a customer order"
                  style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. PLATFORMS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Platform fit</span>
              <h2>Choosing a platform: Shopify, WooCommerce, Magento, or custom</h2>
              <p className="lead mt-4">
                Whether you are looking for an ecommerce web design agency or a specific platform partner, the
                right choice depends on your catalogue, your team, and where you plan to sell, not on which one
                we happen to prefer. Here is how we think about each.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Shopify and Shopify Plus</span><span className="plat-pill">DTC &amp; SCALING</span></div>
                <p>The fastest route to a reliable, well-supported store, and where most of our work happens.
                Strong app ecosystem, solid checkout, and a straightforward path to Shopify Plus once you outgrow
                the standard plan. See <a href="/uk/shopify-development" style={linkStyle}>Shopify development</a>{' '}
                and <a href="/uk/shopify-plus" style={linkStyle}>Shopify Plus</a>.</p>
                <p className="plat-best"><b>Best for:</b> DTC brands, growing catalogues, teams who want less to maintain.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">WooCommerce</span><span className="plat-pill">WORDPRESS</span></div>
                <p>Ecommerce built on top of WordPress, which suits brands that already publish a lot of content
                or need full control of hosting. Our work here focuses on keeping it fast, since Woo can get
                sluggish without real performance engineering. See{' '}
                <a href="/uk/woocommerce" style={linkStyle}>WooCommerce development</a>.</p>
                <p className="plat-best"><b>Best for:</b> content-heavy brands, teams already invested in WordPress.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Magento (Adobe Commerce)</span><span className="plat-pill">ENTERPRISE</span></div>
                <p>Still the right call for complex, high-SKU catalogues and multi-store setups that need deep
                customisation. As a Magento ecommerce agency we meet this platform on new builds, upgrades and
                replatforming. See <a href="/uk/magento" style={linkStyle}>Magento development</a>.</p>
                <p className="plat-best"><b>Best for:</b> large catalogues, multi-store or multi-currency operations.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom &amp; headless</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your business logic, integrations, or performance needs do not fit a template. Headless
                means the shop front is built separately from the commerce engine, which gives you full control
                of the front end while keeping a proper engine underneath.</p>
                <p className="plat-best"><b>Best for:</b> complex B2B, unusual checkout flows, brands with real engineering needs.</p>
              </li>
            </ul>

            <h3 className="mt-12" style={{ fontSize: 20 }}>Platform choice guide at a glance</h3>
            <div className="card mt-6" style={tableCardStyle}>
              <table className="cmp-table" style={{ minWidth: 820 }}>
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Best fit</th>
                    <th>Catalogue size</th>
                    <th>B2B features</th>
                    <th>Who runs hosting and updates</th>
                    <th>Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORMS.map((p) => (
                    <tr key={p.name}>
                      <td className="feat">{p.href ? <a href={p.href} style={linkStyle}>{p.name}</a> : p.name}</td>
                      <td>{p.fit}</td>
                      <td>{p.catalogue}</td>
                      <td>{p.b2b}</td>
                      <td>{p.runs}</td>
                      <td>{p.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 14, color: 'var(--n600)', marginTop: 14, maxWidth: 820 }}>
              Platform fees, app costs and developer time all differ between these, so the platform with the lowest
              starting fees is not always the least work to run. We compare total running effort for your catalogue
              on the first call.
            </p>
          </div>
        </section>

        {/* ═══ 9. LISTICLE: what's included ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">What is included</span>
              <h2>Six things every FactoryJet ecommerce build includes</h2>
              <p className="lead mt-4">
                No build skips these, regardless of platform or catalogue size.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Platform selection matched to goals', d: 'We do not default to our favourite platform. We look at your catalogue, integrations, and team before recommending Shopify, WooCommerce, Magento, or custom, and we will tell you if a simpler option saves you money and hassle.' },
                { n: '02', t: 'Conversion-first product and checkout design', d: 'Product pages and checkout built to remove friction, not just look good in a portfolio. Clear pricing, trust signals, and a checkout that does not lose people at the last step.' },
                { n: '03', t: 'Payments, stock, and CRM integration', d: 'Your store connected properly to the systems that already run your business: payment providers, inventory and stock, and whatever CRM or email tool your team lives in.' },
                { n: '04', t: 'Mobile-first performance engineering', d: 'Most of your traffic is on a phone. We build and test for mobile first, targeting genuinely fast Core Web Vitals rather than a score that only holds up on a fast desktop connection.' },
                { n: '05', t: 'On-page and technical ecommerce SEO', d: 'Category and product pages structured to rank, plus the technical foundation, site speed, crawlability, structured data, that Google and AI engines both need to trust a store.' },
                { n: '06', t: 'Full code handover with a walkthrough', d: 'When we hand the project over, you get the full codebase and a proper walkthrough of how it works, not just a login and a wave goodbye.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MidPageCTA
          headline={'Planning a new store or a replatform?'}
          sub={'Tell us your platform and your order volume. We will tell you what we would build, how many weeks it takes, and what we would leave alone.'}
          label={'Talk about your store'}
        />

        {/* ═══ 10. HOW TO CHOOSE AN ECOMMERCE AGENCY ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Buyer&rsquo;s checklist</span>
              <h2>How to choose an ecommerce agency in the UK: 8 questions to ask</h2>
              <p className="lead mt-4">
                Whichever ecommerce development company you talk to, including us, these eight questions sort the
                good ones from the rest in a single call.
              </p>
            </div>
            <ol className="col-2 mt-10" style={{ gap: 16 }}>
              {CHOOSE_TIPS.map((c, i) => (
                <li key={c.t} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 22px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 14, color: 'var(--orange)', minWidth: 26 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 16 }}>{c.t}</h3>
                    <p style={{ marginTop: 6, fontSize: 14.5, color: 'var(--n600)' }}>{c.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-12" style={{ fontSize: 20 }}>Freelancer, in-house developer or ecommerce agency?</h3>
            <div className="card mt-6" style={tableCardStyle}>
              <table className="cmp-table" style={{ minWidth: 680 }}>
                <thead>
                  <tr>
                    <th>What you need</th>
                    <th>Freelancer</th>
                    <th>In-house developer</th>
                    <th className="fj">Ecommerce agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Small fixes and theme tweaks</td><td><span className="yes">Good fit</span></td><td><span className="yes">Good fit</span></td><td className="fj"><span className="partial">Fine, often overkill</span></td></tr>
                  <tr><td className="feat">New store or full redesign</td><td><span className="partial">Depends on the person</span></td><td><span className="partial">Needs several skills</span></td><td className="fj"><span className="yes">Designed for it</span></td></tr>
                  <tr><td className="feat">Replatform with SEO migration</td><td><span className="no">Risky alone</span></td><td><span className="partial">Needs outside help</span></td><td className="fj"><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Design, build, SEO and integrations together</td><td><span className="no">Rarely</span></td><td><span className="partial">Only with a team</span></td><td className="fj"><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Cover for holidays and sickness</td><td><span className="no">No</span></td><td><span className="no">No</span></td><td className="fj"><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Steady daily work for years</td><td><span className="partial">Sometimes</span></td><td><span className="yes">Best fit</span></td><td className="fj"><span className="partial">Monthly support plan</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPARISON TABLE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 680 }}>FactoryJet vs a typical ecommerce agency vs a template or DIY store</h2>
            <div className="card mt-8" style={tableCardStyle}>
              <table className="cmp-table" style={{ minWidth: 640 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Typical ecommerce agency</th>
                    <th>Template / DIY store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom, conversion-first build</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">Template only</span></td></tr>
                  <tr><td className="feat">You own 100% of the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Often locked</span></td><td><span className="no">Rented platform</span></td></tr>
                  <tr><td className="feat">Timeline in weeks with milestones</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td>You set it</td></tr>
                  <tr><td className="feat">Headless / Shopify Plus / custom ready</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">B2B and manufacturing features</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Fast on mobile (green Core Web Vitals)</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td><td><span className="no">Rare</span></td></tr>
                  <tr><td className="feat">Ecommerce SEO + AI search visibility built in</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Rarely</span></td><td><span className="no">No</span></td></tr>
                  <tr><td className="feat">Support after launch by the same team</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Often a new team</span></td><td><span className="no">You</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers</span></td><td><span className="partial">Often juniors</span></td><td>You</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 12. PRE-LAUNCH CHECKLIST ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before it goes live</span>
              <h2>The ten checks we run before your store takes a real order</h2>
              <p className="lead mt-4">
                Most of what goes wrong after an ecommerce launch was findable beforehand. This is the list we
                work through on every build, whatever the platform. Structured data follows{' '}
                <a href="https://developers.google.com/search/docs/appearance/structured-data/product"
                   target="_blank" rel="noopener noreferrer nofollow"
                   style={linkStyle}>
                  Google&rsquo;s own product markup guidance
                </a>, not guesswork.
              </p>
            </div>
            <ol className="col-2 mt-10" style={{ gap: 16 }}>
              {LAUNCH_CHECKS.map((c) => (
                <li key={c.n} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 22px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 14, color: 'var(--orange)', minWidth: 26 }}>{c.n}</span>
                  <div>
                    <h3 style={{ fontSize: 16 }}>{c.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6, fontSize: 14.5, color: 'var(--n600)' }}>{c.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 13. UK SELLING RULES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Built for UK rules</span>
                <h2>What UK law expects from your online store, built in from day one</h2>
                <div className="stack mt-6">
                  <p>
                    UK distance selling rules apply to every online store selling to consumers. According to{' '}
                    <a href="https://www.gov.uk/online-and-distance-selling-for-businesses" target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>
                      GOV.UK guidance on online and distance selling
                    </a>, you must give customers your business name, contact details and address, tell them how
                    they can cancel, and let them cancel an order up to 14 days after it is delivered without giving
                    a reason. You must also deliver within 30 days unless you agreed otherwise.
                  </p>
                  <p>
                    If you do not tell customers about their right to cancel, the same guidance says they can cancel
                    at any time in the next 12 months. That is a costly thing to get wrong because a template left the
                    wording out of an order email.
                  </p>
                  <p>
                    So we build these into the store itself: business details in the footer and order emails,
                    cancellation information and a cancellation form, clear prices with VAT and delivery shown before
                    checkout, and a UK GDPR cookie banner that declines non-essential cookies by default. Your
                    solicitor still signs off the wording; we make sure it shows up in the right places.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK details we set up</span>
                <ul className="stack mt-4">
                  {[
                    'VAT-inclusive prices for consumers, VAT-exclusive for trade accounts',
                    'Royal Mail and courier rates, click and collect, delivery cut-off times',
                    '14-day cancellation wording in checkout and order emails',
                    'Business name and address shown clearly',
                    'UK GDPR consent with non-essential cookies off by default',
                    'Returns and refunds flow your team can run from the admin',
                  ].map((x) => (
                    <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--n600)', lineHeight: 1.6 }}>
                      <span className="dot dot-orange" style={{ marginTop: 8, flexShrink: 0 }} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. WHO WE SERVE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we work with</span>
              <h2>UK brands whose stores need to work harder</h2>
              <p className="lead mt-4">
                Ecommerce development pays off fastest for businesses whose stores carry real weight in the
                business. Four groups make up most of our work.
              </p>
            </div>
            <ul className="col-2 mt-12">
              <li className="svc-card">
                <h3>DTC and consumer brands</h3>
                <p className="mt-4">Brands selling direct to consumers who need a fast, trustworthy store and a checkout that does not leak sales. We build for conversion first, brand second, because a beautiful store that does not sell is not doing its job.</p>
              </li>
              <li className="svc-card">
                <h3>B2B and wholesale brands</h3>
                <p className="mt-4">Businesses selling to other businesses, often with account pricing, bulk ordering, or a quote process layered on top of a normal storefront. We build the commerce logic B2B actually needs, not a DTC template with a login wall. See <a href="/uk/b2b-ecommerce" style={{ textDecoration: 'underline' }}>B2B ecommerce for UK manufacturers and wholesalers</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Ecommerce development for manufacturing companies in the UK</h3>
                <p className="mt-4">Manufacturers moving trade orders online need customer-specific price lists, minimum order quantities, spec sheets, repeat ordering and a live link to the ERP. We build that as a proper B2B store, and keep any direct-to-consumer range cleanly separate.</p>
              </li>
              <li className="svc-card">
                <h3>Scaling multi-channel retailers</h3>
                <p className="mt-4">Brands selling across their own site, Amazon, and marketplaces like TikTok Shop, who need a store and stock system that stays in sync everywhere they sell.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 15. AFTER LAUNCH ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">After launch</span>
              <h2>What happens after your store goes live</h2>
              <p className="lead mt-4">
                The agencies that frustrate people most are the ones that vanish the week after launch. Launch is
                where the real data starts, so this is how we stay involved.
              </p>
            </div>
            <ol className="col-3 mt-10">
              <li className="card">
                <span className="stage-num">01</span>
                <h3>First weeks: close watch</h3>
                <p className="mt-4">We watch orders, errors, speed and rankings daily, and fix anything real customers turn up. Redirects and Search Console get checked so a migration does not quietly lose traffic.</p>
              </li>
              <li className="card">
                <span className="stage-num">02</span>
                <h3>Then: support that fits</h3>
                <p className="mt-4">Ad-hoc fixes when you need them, or a monthly support plan covering platform and app updates, security patches, backups and small changes. You choose; nothing is forced.</p>
              </li>
              <li className="card">
                <span className="stage-num">03</span>
                <h3>Ongoing: growth sprints</h3>
                <p className="mt-4">Planned blocks of work on what the data says matters: conversion fixes, new features, seasonal pages, and <a href="/uk/ecommerce-seo" style={linkStyle}>ecommerce SEO</a> to bring more of the right shoppers in.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ═══ 16. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">The UK ecommerce agency market</span>
            <h2 style={{ maxWidth: 780 }}>UK businesses search for an ecommerce agency every day. Most agency pages still read like a template</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    Search demand for ecommerce agency help in the UK is real, and it is spread across many ways of
                    asking: &quot;ecommerce agency&quot;, &quot;ecommerce website designers&quot;, &quot;ecommerce
                    website development&quot;, &quot;ecommerce web development UK&quot; and &quot;ecommerce agency
                    London&quot;. Behind every one is a business looking for a team to build and stand behind a store,
                    not just a freelancer for hire.
                  </p>
                  <p>
                    This page answers that demand properly, for brands in London, Manchester, Birmingham, Leeds and
                    across the UK, with the same senior team on every account. If you are not sure yet what to build,
                    our <a href="/uk/ecommerce-consultant" style={linkStyle}>ecommerce consultant</a> service is a
                    good first step.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/shopify-development">Shopify Development</a>
                  <a className="city-pill" href="/uk/shopify-plus">Shopify Plus</a>
                  <a className="city-pill" href="/uk/woocommerce">WooCommerce</a>
                  <a className="city-pill" href="/uk/magento">Magento</a>
                  <a className="city-pill" href="/uk/b2b-ecommerce">B2B Ecommerce</a>
                  <a className="city-pill" href="/uk/ecommerce-consultant">Ecommerce Consultant</a>
                  <a className="city-pill" href="/uk/ecommerce-seo">Ecommerce SEO</a>
                  <a className="city-pill" href="/uk/shopify-seo">Shopify SEO</a>
                  <a className="city-pill" href="/uk/web-design">Web Design</a>
                  <a className="city-pill" href="/uk/ai-seo">AI SEO</a>
                  <a className="city-pill" href="/uk/london">London</a>
                  <a className="city-pill" href="/uk/manchester">Manchester</a>
                  <a className="city-pill" href="/uk/birmingham">Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">Leeds</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'ecommerce agency', v: '880', w: '100%' },
                    { kw: 'ecommerce website designers', v: '720', w: '82%' },
                    { kw: 'ecommerce website development', v: '720', w: '82%' },
                    { kw: 'ecommerce web design agency', v: '390', w: '44%' },
                    { kw: 'ecommerce web development uk', v: '320', w: '36%' },
                    { kw: 'ecommerce agency london', v: '210', w: '24%' },
                    { kw: 'ecommerce development services', v: '170', w: '19%' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 17. COMPETITOR LISTICLE (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>UK ecommerce agencies worth knowing</h2>
              <p className="lead mt-4">
                We would rather tell you the truth than pretend we are the only option. Here are UK ecommerce
                agencies doing real build work, including us. Talk to a few, use the eight questions above, and pick
                the fit.
              </p>
            </div>
            <ul className="stack mt-10" style={{ maxWidth: 900 }}>
              {ECOM_AGENCIES.map((a, i) => (
                <li key={a.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 15, color: 'var(--orange)', minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{a.name}{a.name === 'FactoryJet' && <span style={{ fontFamily: 'var(--fm)', fontSize: 10, background: '#B23E13', color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--n400)', marginTop: 14 }}>
              Agencies named from live UK search results for ecommerce agency terms, September 2026; descriptions checked against each agency&rsquo;s own homepage. Listing is not endorsement, and we are one option among them.
            </p>
          </div>
        </section>

        {/* ═══ 18. WHAT SHAPES AN ENGAGEMENT (qualitative, no pricing) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>What shapes an ecommerce development engagement</h2>
                <div className="stack mt-6">
                  <p>
                    We do not sell one-size ecommerce packages, because a ten-product launch on Shopify and a
                    two-thousand-SKU B2B replatform on Magento are not the same job wearing different branding.
                    What actually shapes the work is your product count, how many systems you need connected, and
                    how custom the design and checkout need to be.
                  </p>
                  <p>
                    A brand moving off a template onto Shopify with a clean catalogue often needs mostly design
                    and integration work. A business replatforming from an ageing Magento or custom system needs
                    migration planning first, so nothing breaks and no rankings get lost in the move. We scope it
                    after a short call, so the plan matches your store rather than a generic tier.
                  </p>
                  <p>
                    Not sure yet what to build, or whether to replatform at all? Start with our{' '}
                    <a href="/uk/ecommerce-consultant" style={{ textDecoration: 'underline' }}>ecommerce consultant</a>{' '}
                    service: a ranked list of what to fix first, which you can build with us or hand to your own team.
                  </p>
                </div>
                <h3 className="mt-8" style={{ fontSize: 18 }}>What we do not do</h3>
                <ul className="stack mt-4">
                  {NOT_INCLUDED.map((n) => (
                    <li key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'var(--n600)', lineHeight: 1.65 }}>
                      <span className="dot dot-orange" style={{ marginTop: 8, flexShrink: 0 }} />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ModalCTAButton label="Get my free store consult" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the scope</span>
                <div className="scorecard-row"><div className="scorecard-metric">Product count and catalogue complexity</div><div className="scorecard-val" style={{ fontSize: 14 }}>Base</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Platform, and any migration involved</div><div className="scorecard-val" style={{ fontSize: 14 }}>Start</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Integrations: payments, stock, CRM, ERP</div><div className="scorecard-val" style={{ fontSize: 14 }}>Reach</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">How custom the design and checkout are</div><div className="scorecard-val" style={{ fontSize: 14 }}>Field</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Support shape after launch</div><div className="scorecard-val" style={{ fontSize: 14 }}>Choice</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Free store consult before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 19. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Ecommerce agency questions UK founders actually ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
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

        {/* ═══ 20. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Get a straight answer on your ecommerce build</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours with a free store consult: what
              your build actually needs, which platform fits, how many weeks it should take, and what to watch for
              if you are migrating. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free store consult" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact FactoryJet</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
