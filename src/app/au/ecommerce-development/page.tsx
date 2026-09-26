import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/ecommerce-development';
const UPDATED = '2026-09-26';
const TITLE = 'Ecommerce Agency & Development Australia | FactoryJet';
const DESCRIPTION =
  'FactoryJet is an ecommerce agency for Australia. Ecommerce design, development and support for Shopify, WooCommerce, Adobe Commerce and B2B stores. You own it.';
/* Shortened 2026-09-26 so the hero form sits in the first desktop screen; "DTC and B2B brands" and
   "ecommerce development" stay in the hero lead, which already says we stay on after launch. */
const H1 = 'Ecommerce Agency Australia: Development for DTC and B2B Brands';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Ecommerce Development', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// ABS Retail Trade, Australia, June 2025 (final release of the series):
// online share of total retail 12.7% (original), up from 11.9%, vs 11.6% in
// June 2024; online non-food share 19.0%; seasonally adjusted online sales up
// 13.0% through the year. fetch-verified 2026-09-25
const SRC_ABS =
  'https://www.abs.gov.au/statistics/industry/retail-and-wholesale-trade/retail-trade-australia/jun-2025';
// ACCC media release, 4 Feb 2025: sweep of over 2,000 Australian retail
// websites found return policies that could mislead consumers (e.g. "sale items
// cannot be returned", restocking fees, customer pays return shipping on
// faulty goods). fetch-verified 2026-09-25
const SRC_ACCC_SWEEP =
  'https://www.accc.gov.au/media-release/accc-sweep-uncovers-concerning-online-shopping-return-policies-and-terms-and-conditions';
// ACCC Price displays: "Businesses must display the total price of a product
// or service as a single figure"; minimum total cost incl. taxes and
// unavoidable fees; B2B-only displays need not include GST; drip pricing =
// disclose fee types at the start. fetch-verified 2026-09-25
const SRC_ACCC_PRICE = 'https://www.accc.gov.au/business/pricing/price-displays';
// ACCC Online reviews: against the law to create fake or misleading reviews;
// must not suppress/edit negative reviews; incentives must not depend on a
// positive review and must be disclosed. fetch-verified 2026-09-25
const SRC_ACCC_REVIEWS =
  'https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services';
// business.gov.au: "All businesses selling goods and services in Australia
// must comply with the ACL. This includes businesses that are overseas";
// receipts above a set value; no store policy overriding
// consumer guarantees. fetch-verified 2026-09-25
const SRC_BGA_ACL = 'https://business.gov.au/legal/fair-trading/australian-consumer-law-and-your-business';
// business.gov.au Ecommerce (selling online): terms clear and easy to find,
// tell customers about consumer guarantees, secure payments, protect personal
// information. fetch-verified 2026-09-25
const SRC_BGA_ECOM = 'https://business.gov.au/online-and-digital/ecommerce';

// Shopify Help Center, "Shopify B2B features by plan": "You can use Shopify B2B
// on the Basic, Grow, Advanced, and Shopify Plus plans"; all plans get company
// profiles and locations, net payment terms, quantity rules, quantity price
// breaks, vaulted cards, draft orders with PO numbers; Basic/Grow/Advanced get 3
// active B2B catalogs, Plus unlimited plus company-level catalogs, deposits and
// partial payments. fetch-verified 2026-09-26
const SRC_SHOPIFY_B2B = 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features';

/* ─── Answer-first block (drives visible block) ───────────────────── */
const ANSWER_FIRST =
  'An ecommerce agency plans, designs, builds and supports online stores. A good Australian ecommerce agency picks the right platform, designs product pages and checkout that sell, connects payments, stock, Xero or MYOB and delivery, moves your old store without losing Google rankings, follows Australian Consumer Law, and stays on after launch to fix and grow it.';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',    label: 'Ecommerce basics' },
  { key: 'choosing',  label: 'Choosing an agency' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'build',     label: 'Integrations, B2B & migration' },
  { key: 'law',       label: 'Consumer law & GST' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Ecommerce basics ──
  { category: 'basics', question: 'What is an ecommerce agency?',
    answer: 'An ecommerce agency is a team that plans, designs, builds and looks after online stores. Some agencies only do marketing, such as ads and email. Others only do design. A full ecommerce agency covers platform choice, design, development, integrations, migration and support after launch. FactoryJet sits on the build side: we design and develop your store, connect it to your systems, and stay on afterwards. You own everything we build.' },
  { category: 'basics', question: 'What does an ecommerce developer do?',
    answer: 'An ecommerce developer writes and configures the code that makes an online store work. That includes building the theme, setting up products and variants, connecting payment gateways, shipping rates and stock, linking the store to accounting software such as Xero or MYOB, and making the site fast on a phone. A good ecommerce developer also tests real orders end to end before launch, not just the pages.' },
  { category: 'basics', question: 'What is ecommerce web development?',
    answer: 'Ecommerce web development is the technical work of building an online store: the storefront customers see, the cart and checkout, and the connections to payments, stock, delivery and accounts behind it. It sits on a platform such as Shopify, WooCommerce, Adobe Commerce or BigCommerce, or on custom code. Ecommerce website development usually also covers migration from an old store and the testing before launch.' },
  { category: 'basics', question: 'What is the difference between ecommerce web design and ecommerce development?',
    answer: 'Ecommerce web design decides what a shopper sees and trusts: layout, product pages, the order information appears in, and how checkout feels. Ecommerce development is the code underneath that makes it fast, takes payments, syncs stock and holds up on a busy sale day. A design nobody can build is just a picture. A build nobody designed usually converts badly. We do both as one team.' },
  { category: 'basics', question: 'How much does it cost to have an ecommerce website built in Australia?',
    answer: 'There is no honest single figure, because a small DTC launch and a B2B catalogue with ERP integration are different jobs. The drivers are product count, the platform and its apps, custom design, how many systems you connect, any migration, and B2B pricing rules. We quote a fixed price per stage after a free call. Published Australian ranges for online stores are in our website cost guide.',
    links: [
      { href: '/blog/website-cost-australia-2026#wordpress-ecommerce', label: 'Website cost guide' },
      { href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost in Australia' },
    ] },
  { category: 'basics', question: 'How long does it take to build an ecommerce website?',
    answer: 'A platform store with a custom theme takes 3 to 5 weeks. An advanced store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks. Headless, custom or ERP-heavy builds take 8 to 14 weeks. Catalogue size, integrations and how quickly product data and sign-offs arrive move the date more than the code does.' },
  { category: 'basics', question: 'Is ecommerce still profitable in Australia in 2026?',
    answer: 'For well-run stores, yes. The ABS reported that online sales were 12.7% of all Australian retail sales in June 2025, up from 11.6% a year earlier, and 19.0% of non-food retail. Profit comes from margins, delivery costs, returns and repeat customers, not from having a store at all. A fast store with honest delivery costs and a clean checkout protects those margins.' },
  { category: 'basics', question: 'Can AI build me an ecommerce website?',
    answer: 'AI website builders can put a basic store online quickly, and for testing an idea that can be enough. They struggle with the parts that decide whether a store makes money: clean product data, links to your stock and accounts, a migration that keeps your Google rankings, Australian Consumer Law, and speed on a real phone. We use AI tools inside our own process, but people design, check and own every decision.' },
  { category: 'basics', question: 'What are the 5 Cs of ecommerce?',
    answer: 'There is no official list, and different writers use different five words. The version we find useful when planning a store is catalogue (clean product data), content (pages that answer buyer questions), checkout (short, honest, fast), connections (payments, stock, accounts and couriers talking to each other) and care (support after launch). A store that gets those five right usually does well.' },

  { category: 'basics', question: 'How to design an e-commerce website?',
    answer: 'Design from the product page outwards. Start with what a shopper needs to decide: clear photos from the angles people ask about, variants that are easy to pick, stock status, delivery estimate and the returns promise. Then build category pages with filters that work on a phone, and a checkout with guest option, address lookup and the total price shown up front. Test the whole flow on a real phone before anything looks finished.' },
  { category: 'basics', question: 'What are common eCommerce mistakes?',
    answer: 'The ones we fix most often: delivery costs that only appear at checkout, product descriptions copied from the supplier, category pages with no words on them, too many apps slowing the store, a checkout that forces account creation, and a replatform with no redirects that wipes out Google rankings overnight. Under Australian Consumer Law, a no refunds line or a price that excludes unavoidable fees is a legal problem as well as a sales one.' },
  { category: 'basics', question: 'Do I need an ABN for eCommerce?',
    answer: 'If you are running an online store as a business, yes, you should get one. An ABN is free from the Australian Business Register, you need it to register for GST once your turnover reaches the GST threshold, and the ACCC notes that reputable online sellers display their ABN. Without one, some business customers must withhold tax from what they pay you. Selling a few personal items as a hobby is different.' },
  { category: 'basics', question: 'How to start an e-commerce business in Australia?',
    answer: 'Validate demand before you build. Check that people search for what you sell and that you can land it with a healthy margin after delivery and returns. Then register an ABN and business name, pick a platform that fits your catalogue, set up payments, GST, Australia Post or courier rates and a refund policy that follows the Australian Consumer Law. Launch with a small range, measure what sells, and grow from there.' },
  { category: 'basics', question: 'What is the 80/20 rule in ecommerce?',
    answer: 'It is the observation that a small share of your products, customers or pages usually brings in most of the revenue, often quoted as 20% producing 80%. The exact split varies. The useful part is acting on it: check your own sales report, then put your best photography, copy, stock planning and ad budget behind the products and categories that actually sell, rather than spreading effort evenly across the whole catalogue.' },

  // ── Choosing an agency ──
  { category: 'choosing', question: 'How do I choose an ecommerce agency in Australia?',
    answer: 'Look at live stores they built on your platform and at your size, on your own phone. Ask who writes the code, who owns the code and accounts at the end, how they handle redirects in a migration, and what support looks like after launch. Get the timeline in weeks with named milestones. Check they know GST, Australia Post and courier rates, Afterpay and Zip, and Australian Consumer Law.' },
  { category: 'choosing', question: 'Who are the top ecommerce agencies in Australia?',
    answer: 'Agencies that show up often in Australian ecommerce searches and AI answers include 23 Digital, Acidgreen, OSE, Aligent, Convert Digital, Prosper Digital, Overdose, Shakewell and Stone Digital, plus FactoryJet. Each has a different centre of gravity: some lead with Shopify Plus, some with Adobe Commerce or B2B integration, some with marketing. We list them further up this page with a neutral note on each.' },
  { category: 'choosing', question: 'Should I hire a freelancer, an in-house developer or an ecommerce agency?',
    answer: 'A freelancer suits small, well-defined jobs such as theme tweaks or setting up one app. An in-house developer makes sense once you have steady work every week and someone senior to manage them. An ecommerce agency fits a new build, a replatform, or anything touching design, development, integrations and SEO at once, because you get several specialists and cover when someone is away.' },
  { category: 'choosing', question: 'Do I need an ecommerce agency in Sydney or Melbourne, or can we work remotely?',
    answer: 'You do not need an agency down the road. We work remotely with brands in Sydney, Melbourne, Brisbane, Perth, Adelaide and the Gold Coast, using video calls, shared boards and a staging store you can click through at any time. What matters is that the agency understands Australian shoppers, Australian delivery and Australian consumer rules, and that senior people turn up to the calls.' },
  { category: 'choosing', question: 'What should an ecommerce website proposal include?',
    answer: 'A written scope listing pages, features and integrations; the platform and why; who does the work; a timeline in weeks with sign-off points; how products, customers, orders and URLs move if you are migrating; what testing happens before launch; what is handed over; and what support looks like afterwards. If a proposal is a mood board and a total, ask for the rest before you sign.' },

  // ── Platforms ──
  { category: 'platforms', question: 'What are the top ecommerce platforms in Australia?',
    answer: 'Most Australian stores run on Shopify or Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce (Magento) or Maropost Commerce Cloud, which many Australians still call Neto. The right one depends on your catalogue, B2B needs, team and integrations, not on popularity. Our best ecommerce platform in Australia guide compares them on AUD prices, GST, Afterpay and Zip, and shipping.',
    links: [{ href: '/blog/best-ecommerce-platform-australia-2026', label: 'Best ecommerce platform in Australia guide' }] },
  { category: 'platforms', question: 'Is Shopify or WooCommerce better for an Australian online store?',
    answer: 'Shopify suits most DTC brands that want less to manage, because hosting, security and checkout are handled for you. WooCommerce suits businesses already built around WordPress and content, and it gives more control, but you (or we) look after hosting, updates and speed. For Shopify-specific builds, see our Shopify development page for Australia, where we go deeper. See the full Shopify vs WooCommerce comparison for Australia too.',
    links: [
      { href: '/blog/best-ecommerce-platform-australia-2026#head-to-head', label: 'Shopify vs WooCommerce comparison for Australia' },
      { href: '/au/shopify-development', label: 'Shopify development' },
    ] },
  { category: 'platforms', question: 'When does Adobe Commerce (Magento) make sense?',
    answer: 'Adobe Commerce, the paid version of Magento, earns its place with large catalogues, several stores or brands on one back end, and complex B2B rules such as company accounts, negotiated quotes and approval chains. It needs specialist developers, proper hosting and regular upkeep. For a small or mid-sized DTC brand it is usually more platform than the job needs.' },
  { category: 'platforms', question: 'What is headless ecommerce, and do I need it?',
    answer: 'Headless ecommerce means the storefront customers see is built separately from the commerce engine that holds products, prices and orders. It gives full design freedom, top speed, and one catalogue feeding a website, an app and other channels. It also adds build and maintenance work. Most Australian brands do not need it on day one. It makes sense when a standard theme is clearly holding you back.' },
  { category: 'platforms', question: 'What is Commerceflo?',
    answer: 'Commerceflo is FactoryJet’s own AI commerce operator, currently in early access. It runs a DTC store, B2B portals and marketplace listings on one data model, with AI agents that propose fixes for stock, pricing and content and act only after you approve. We built Belle Maison’s DTC store on it. We still build on Shopify, WooCommerce, Adobe Commerce and BigCommerce, and recommend Commerceflo only when it fits.' },

  // ── Integrations, B2B & migration ──
  { category: 'build', question: 'Can you connect our online store to Xero or MYOB?',
    answer: 'Yes. Orders, customers, payments and GST should flow into Xero or MYOB without anyone retyping them. Where a proven connector exists we set it up and configure it properly, including tax codes, payout reconciliation and refunds. Where your setup is unusual, or you run an ERP such as NetSuite, Dynamics 365 Business Central or Pronto, we build or configure the integration and document it.' },
  { category: 'build', question: 'Which payment and buy now, pay later options can you add?',
    answer: 'Whatever your platform supports and your customers use: card payments through Shopify Payments, Stripe or your bank’s gateway, PayPal, Apple Pay and Google Pay, and buy now, pay later options such as Afterpay and Zip. We check each one works on a real phone with a real order before launch, and that refunds and payouts reconcile in Xero or MYOB.' },
  { category: 'build', question: 'Can you set up Australia Post and courier shipping rates?',
    answer: 'Yes. We connect Australia Post and couriers such as StarTrack, Sendle or your 3PL (third-party logistics warehouse) so shoppers see real delivery prices and times at checkout, and your team prints labels without copying addresses. We also set sensible rules for bulky items, remote postcodes and free shipping thresholds, so delivery costs do not quietly eat your margin.' },
  { category: 'build', question: 'Can you migrate our store without losing Google rankings?',
    answer: 'Yes, and this is where a lot of DIY migrations go wrong. We map every old URL to its new address with one permanent (301) redirect, keep the product and category structure Google already trusts, carry over structured data and reviews, and test on a staging store first. After launch we watch rankings and traffic so anything that slips gets fixed early.' },
  { category: 'build', question: 'Do you build B2B ecommerce and trade portals?',
    answer: 'Yes. B2B ecommerce needs trade logins, account-specific prices, quick order by SKU, bulk upload, quotes, pay on account with credit limits, and prices shown ex-GST for trade buyers. We build it on Shopify Plus, Adobe Commerce, BigCommerce or WooCommerce, connected to your ERP or accounts software. We built this kind of B2B ordering for Bombay Petals.' },
  { category: 'build', question: 'Which Australian agency should I hire to build a B2B ecommerce website?',
    answer: 'Hire one that has built a live trade portal connected to an ERP, not just DTC stores. Ask to log in to a B2B store they built, ask how they sync customer prices and credit limits from your ERP, and ask who supports it after launch. FactoryJet builds B2B stores for Australian wholesalers and manufacturers, working remotely with no Australian office. Compare us with the agencies listed on this page.' },
  { category: 'build', question: 'What is B2B ecommerce?',
    answer: 'B2B ecommerce is selling to other businesses online instead of to the public. Trade buyers log in, see their own prices and payment terms, reorder quickly by SKU and pay on account. Behind the store, orders, stock and credit usually come from an ERP or accounting system. For wholesalers it replaces orders taken by phone, email and PDF with orders that arrive complete.' },
  { category: 'build', question: 'Can Shopify be used for B2B?',
    answer: 'Yes. Shopify says its B2B features work on the Basic, Grow, Advanced and Shopify Plus plans. Every plan gets company profiles with locations, net payment terms, minimum and maximum order quantities, quantity price breaks, saved cards and draft orders with PO numbers. Plus adds unlimited B2B catalogues, prices set per company, deposits and partial payments. Very complex quoting or pricing logic may still need an app or custom work.',
    links: [{ href: SRC_SHOPIFY_B2B, label: 'Shopify Help: B2B features by plan' }] },
  { category: 'build', question: 'Is Shopify B2B worth it?',
    answer: 'For many Australian wholesalers, yes, especially if you already sell DTC on Shopify and want trade buyers in the same store and stock pool. It is less suited if every customer has a negotiated price across thousands of SKUs on a non-Plus plan, since those plans allow three active B2B catalogues. We check your price lists, payment terms and ERP before recommending it.' },
  { category: 'build', question: 'What does Shopify B2B cost?',
    answer: 'Shopify says B2B is included on the Basic, Grow, Advanced and Plus plans, so on those plans you are not paying for a separate B2B add-on. What you do pay for is the Shopify plan that fits your catalogue and pricing, any apps, and the build work: trade theme, price lists, ERP or Xero and MYOB integration, and migration. Our Shopify cost guide has Australian ranges.',
    links: [{ href: '/blog/shopify-cost-australia-2026', label: 'Shopify cost in Australia' }] },
  { category: 'build', question: 'Can our store also sell on Amazon Australia, eBay and Kogan?',
    answer: 'Yes. We connect your store to Amazon Australia, eBay Australia and Kogan Marketplace so products, prices and stock are managed in one place and orders flow back to one system. The rule is one source of truth for stock, so you never sell the same last item twice. Catch is no longer an option: Wesfarmers wound it down in 2025.' },

  // ── Consumer law & GST ──
  { category: 'law', question: 'What consumer law applies to an Australian online store?',
    answer: 'The Australian Consumer Law. business.gov.au says all businesses selling goods and services in Australia must comply with it, including businesses that are overseas. It covers consumer guarantees (products must be of acceptable quality and match their description), honest advertising and pricing, and terms that are clear and easy to find.' },
  { category: 'law', question: 'Can an online store have a no refunds policy?',
    answer: 'Not for faulty goods. You cannot have a store policy that overrides consumer guarantees, so a blanket no refunds line is off the table. You can choose whether to offer change-of-mind returns, and if you do, you must follow your own policy. In a 2025 sweep of over 2,000 retail websites, the ACCC flagged statements such as sale items cannot be returned. We write return pages that stay inside the rules.' },
  { category: 'law', question: 'How should an Australian online store show prices and GST?',
    answer: 'The ACCC says businesses must show the total price as a single figure, including GST and any unavoidable fees, and must tell shoppers up front what extra fees apply and when, rather than adding them at the end. If you show prices only to other businesses, such as in a trade portal, you do not need to include GST. We build both rules into product pages and checkout.' },
  { category: 'law', question: 'What are the rules on product reviews for online stores?',
    answer: 'The ACCC says it is against the law to create fake or misleading reviews or arrange for others to do so. You must not hide or edit genuine negative reviews, and any incentive for leaving a review must not depend on it being positive and must be disclosed. We set review apps up so every genuine review can publish and nothing gets filtered by star rating.' },

  // ── Working with us ──
  { category: 'working', question: 'Do we own the store and the code when it is finished?',
    answer: 'Yes, completely. The platform account, domain, theme, custom code, integrations and documentation all sit in your name from day one. There is no licence to rent from us and no hosting you cannot move. If you ever want to take the work in-house or to another developer, you can, and it keeps running. We would rather keep you because the support is good than because you are locked in.' },
  { category: 'working', question: 'What support do you offer after launch?',
    answer: 'We stay close for the first weeks after launch, when real customers on real phones surface things a test store never does. After that you choose the shape: ad-hoc fixes when you need them, a monthly support plan covering updates, security patches and small improvements, or planned growth sprints for new features. The same engineers who built the store look after it. For WooCommerce and Shopify stores, our monthly website maintenance plan covers tested updates, checkout testing and backups.',
    links: [{ href: '/au/website-maintenance', label: 'Monthly website maintenance plan' }] },
  { category: 'working', question: 'Who actually does the work, and are you in Australia?',
    answer: 'Senior engineers do the work, with the founder, Bhavesh Barot, involved in scoping every project. FactoryJet was founded in 2014 and has served 500+ businesses. We work with Australian brands remotely, with calls booked at times that suit your business day, a shared project board, and a staging store you can review whenever you like. There is no handoff to juniors after the sales call.' },
  { category: 'working', question: 'Can you also help with SEO and AI search after launch?',
    answer: 'Yes. Every store we build ships with clean URLs, product structured data and fast pages, which is the foundation for both. For ongoing work, our SEO service for Australian businesses handles rankings and content, and our AI SEO service focuses on getting your brand named in ChatGPT, Perplexity and Google AI Overviews. Nobody can guarantee a ranking or an AI mention, so we never promise one.' },
  { category: 'working', question: 'How do we get started?',
    answer: 'Send your name and work email through the form on this page. The founder replies within 24 hours to book a short call, where we look at your catalogue, your current store if you have one, and which platform actually fits. That first conversation is useful whether or not we end up working together, and it costs nothing.' },
];

/* ─── Named Australian ecommerce agencies (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-25. ─ */
const AU_AGENCIES: { name: string; url: string; note: string }[] = [
  { name: 'FactoryJet', url: 'https://factoryjet.com/au', note: 'That is us. A services company that designs, builds and supports stores on Shopify, Shopify Plus, WooCommerce, Adobe Commerce, BigCommerce, headless stacks and Commerceflo, with a strong B2B and integration side. Founder involved on every project, and you own what we build.' },
  { name: '23 Digital', url: 'https://www.23digital.com.au', note: 'A full-service ecommerce web design and marketing agency with offices in Melbourne, Sydney and Brisbane. It works across Shopify, WooCommerce, BigCommerce and Adobe Commerce, with B2B commerce and ERP integration services, and says it has delivered 200+ stores.' },
  { name: 'Acidgreen', url: 'https://www.acidgreen.com.au', note: 'A Sydney and Melbourne ecommerce agency for B2B and B2C brands on Shopify, Magento and Adobe Commerce, with PIM, UX and consulting services. It says it has more than 26 years of experience.' },
  { name: 'OSE', url: 'https://www.ose.com.au', note: 'A Shopify Plus and Adobe Commerce agency with its head office in Brisbane, focused on complex builds, B2B wholesalers and distributors, and systems integration with platforms such as MYOB, NetSuite, Pronto and Cin7.' },
  { name: 'Aligent', url: 'https://aligent.com.au', note: 'An Australian commerce design and development consultancy working across Adobe Commerce, BigCommerce and Shopify. Its site lists BigCommerce Partner of the Year for 2024 and 2025 and a B2B ecommerce excellence award.' },
  { name: 'Convert Digital', url: 'https://www.convertdigital.com.au', note: 'An ecommerce agency with offices in Melbourne, Sydney and Brisbane, building on Shopify and commercetools. It describes itself as a Shopify Platinum Partner.' },
  { name: 'Prosper Digital', url: 'https://prosperdigital.com.au', note: 'An Australian Shopify Plus agency with Melbourne and Sydney offices, working on strategy, UX design, development and conversion rate optimisation since 2017.' },
  { name: 'Overdose', url: 'https://overdose.digital', note: 'A digital commerce agency founded in 2016 with offices in Sydney, Melbourne, Brisbane and Auckland, covering strategy, UX, technology, marketing and search on Shopify Plus, Adobe Commerce, BigCommerce and commercetools.' },
  { name: 'Shakewell', url: 'https://www.shakewell.agency', note: 'A Sydney team of designers and engineers building websites, apps and ecommerce on Adobe Commerce, Shopify and WooCommerce, including Magento to Shopify migrations and support.' },
  { name: 'Stone Digital', url: 'https://stonedigital.com.au', note: 'A North Sydney ecommerce website development agency specialising in WooCommerce and Shopify for Australian businesses.' },
];

/* ─── What an ecommerce agency does, start to finish (visible <details>) ─ */
const STAGES: { n: string; t: string; w: string; d: string; get: string }[] = [
  { n: '01', t: 'Discovery and platform choice', w: 'Week 1',
    d: 'We look at your catalogue, customers, current store, stock and accounts systems, delivery setup and where else you sell. We talk to the people who pack orders and answer customer emails, not just the founder.',
    get: 'A written scope, a platform recommendation with reasons, and a timeline in weeks with sign-off points.' },
  { n: '02', t: 'UX and wireframes', w: 'Weeks 1 to 2',
    d: 'UX means user experience: how easy the store is to use. We map the path from a Google search or an ad to a paid order as simple page layouts, so structure is agreed before anyone debates colours.',
    get: 'Wireframes for home, category, product, cart and checkout, on mobile first.' },
  { n: '03', t: 'Ecommerce website design', w: 'Weeks 2 to 3',
    d: 'Your brand, your photography and your products, designed for how Australians actually shop: on a phone, comparing delivery costs, looking for Afterpay or Zip at the product page, and checking the returns policy before they buy.',
    get: 'Approved designs for every key page before development starts.' },
  { n: '04', t: 'Development and integrations', w: 'Weeks 3 to 12, by scope',
    d: 'Senior engineers build the store and connect payments, buy now pay later, Australia Post and couriers, Xero or MYOB, email, reviews and, for B2B, your ERP. Product data goes in as the build progresses.',
    get: 'A working staging store you can click through and place test orders on.' },
  { n: '05', t: 'Migration, testing and launch', w: 'Final 1 to 2 weeks',
    d: 'Old URLs mapped with single 301 redirects, real orders placed on real phones, GST and shipping checked, speed and accessibility tested, tracking live. We launch on a quiet weekday, never on the eve of a big sale.',
    get: 'A live store, a recorded handover, and a launch checklist signed off by both teams.' },
  { n: '06', t: 'Support and growth after launch', w: 'Ongoing',
    d: 'We watch closely for the first weeks, then move to ad-hoc fixes, a monthly support plan or growth sprints. Rankings, speed and conversion are tracked so improvements come from data, not guesses.',
    get: 'The same engineers who built the store, on call when something breaks.' },
];

/* ─── Typical timelines (our own project ranges, not promises) ──────── */
const TIMELINES: { type: string; weeks: string; drivers: string }[] = [
  { type: 'Platform store with a custom theme (Shopify, WooCommerce, BigCommerce)', weeks: '3 to 5 weeks', drivers: 'Product data ready, few integrations' },
  { type: 'Advanced store: subscriptions, B2B pricing, Xero or MYOB sync, or a migration', weeks: '5 to 8 weeks', drivers: 'Trade pricing, data migration, redirects' },
  { type: 'Headless, custom or ERP-heavy build, or a very large catalogue', weeks: '8 to 14 weeks', drivers: 'Catalogue size, integrations, migration needs' },
];

/* ─── Platform comparison (drives the platform table) ─────────────── */
const PLATFORMS: { name: string; href: string; fit: string; b2b: string; runs: string; watch: string }[] = [
  { name: 'Shopify', href: '/au/shopify-development', fit: 'Most DTC brands and growing catalogues', b2b: 'Built in on every plan, up to 3 trade catalogues', runs: 'Shopify hosts and patches it', watch: 'App fees and app bloat add up' },
  { name: 'Shopify Plus', href: '/au/shopify-development', fit: 'High-volume, multi-store and wholesale brands', b2b: 'Unlimited catalogues and per-company prices', runs: 'Shopify hosts and patches it', watch: 'Only worth it once standard plans limit you' },
  { name: 'WooCommerce', href: '', fit: 'Content-heavy brands already on WordPress', b2b: 'Via plugins', runs: 'You, or us, on your hosting', watch: 'Needs real speed and security upkeep' },
  { name: 'BigCommerce', href: '', fit: 'Larger catalogues that want a hosted platform', b2b: 'B2B Edition available', runs: 'BigCommerce hosts it', watch: 'Check your apps and connectors exist' },
  { name: 'Adobe Commerce (Magento)', href: '', fit: 'Complex, multi-brand and B2B catalogues', b2b: 'Strong: accounts, quotes, approvals', runs: 'You, or us, on your hosting', watch: 'Needs specialist developers and upkeep' },
  { name: 'Headless or custom', href: '', fit: 'Unusual logic, many channels, top speed', b2b: 'Built exactly to your rules', runs: 'You, or us, on your hosting', watch: 'Most engineering, so only when needed' },
  { name: 'Commerceflo', href: '/commerceflo', fit: 'Brands running DTC, B2B and marketplaces together', b2b: 'B2B portals on the same data', runs: 'FactoryJet runs the platform', watch: 'Early access; scoping call first' },
];

/* ─── "Which platform fits you" (visible <details> chooser) ─────────── */
const FIT_CHECKS: { q: string; a: string }[] = [
  { q: 'Under a few hundred products, DTC only, small team', a: 'Shopify, with a custom theme and a short list of apps. Fastest to launch and least to maintain. See our Shopify development page for Australia.' },
  { q: 'Your brand lives on content and you already run WordPress', a: 'WooCommerce keeps your content and store in one place. Budget for good hosting and regular updates, or put them on a support plan.' },
  { q: 'You sell to trade customers as well as the public', a: 'Shopify Plus B2B for most wholesalers, BigCommerce B2B Edition in the mid-market, Adobe Commerce when quotes and approval chains get complex.' },
  { q: 'Thousands of SKUs, several brands or regions, an ERP that owns everything', a: 'Adobe Commerce or a headless build, with the ERP as the source of truth for price and stock. This is the 8 to 14 week bracket.' },
  { q: 'You sell on your own store, a trade portal and marketplaces at once', a: 'Look at Commerceflo, which runs all three on one data model, or a Shopify Plus build with a proper marketplace connector.' },
  { q: 'You are on Maropost (Neto), an old Magento or a legacy custom build', a: 'A replatform. The platform choice matters less than the migration plan: URL mapping, customer and order history, and redirects done once.' },
];

/* ─── Integrations (Australian stack) ─────────────────────────────── */
const INTEGRATIONS: { t: string; d: string }[] = [
  { t: 'Xero and MYOB', d: 'Orders, customers, refunds, payouts and GST flow into your accounts with the right tax codes, so month-end is a check, not a retyping job.' },
  { t: 'ERP and inventory', d: 'NetSuite, Dynamics 365 Business Central, Pronto, Cin7 and similar. One system owns stock and price; the store reads from it.' },
  { t: 'Australia Post and couriers', d: 'Live rates and delivery times at checkout, label printing, and tracking emails, with Australia Post, StarTrack, Sendle or your 3PL.' },
  { t: 'Payments and buy now, pay later', d: 'Shopify Payments or Stripe, PayPal, Apple Pay and Google Pay, plus Afterpay and Zip messaging on product pages where it helps.' },
  { t: 'Marketplaces', d: 'Amazon Australia, eBay Australia and Kogan Marketplace, with one stock pool so the last item never sells twice.' },
  { t: 'Email, reviews and analytics', d: 'Klaviyo or your email tool, a review app set up inside ACCC rules, GA4 and Google Search Console live on launch day.' },
];

/* ─── Migration without losing rankings (listicle) ─────────────────── */
const MIGRATION_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Crawl and record what ranks today', d: 'Every URL, its traffic, its rankings and its links, before anything changes. This is the list the redirects are built from.' },
  { n: '02', t: 'Map every old URL to one new URL', d: 'Products to products, categories to categories. One permanent (301) redirect each, never a chain of two.' },
  { n: '03', t: 'Move data, not just products', d: 'Customers, order history, reviews, gift card balances and, for B2B, price lists and account terms.' },
  { n: '04', t: 'Keep titles, content and structured data', d: 'Pages that already rank keep what made them rank. We improve them after launch, not during it.' },
  { n: '05', t: 'Test on a staging store', d: 'Real orders, real phones, every redirect checked by script, speed measured on a mid-range phone.' },
  { n: '06', t: 'Launch quietly, then watch', d: 'A quiet weekday launch, sitemaps submitted, and daily checks on rankings, errors and orders for the first weeks.' },
];

/* ─── How to choose an ecommerce agency (visible <details> checklist) ── */
const CHOOSE_TIPS: { t: string; d: string }[] = [
  { t: 'Look at live stores on your platform, at your size', d: 'Open them on your own phone. A portfolio screenshot tells you nothing about speed or checkout.' },
  { t: 'Ask who writes the code', d: 'Named senior people, or whoever is free that month? Ask to meet them before you sign.' },
  { t: 'Confirm you own the code, domain and accounts', d: 'Platform, hosting, theme, apps and analytics should all sit in your name from day one.' },
  { t: 'Get the timeline in weeks, with milestones', d: 'Dates for designs, build, testing and launch. Vague timelines hide vague planning.' },
  { t: 'Ask how they protect rankings in a migration', d: 'The answer should mention URL mapping, single 301 redirects and checks after launch.' },
  { t: 'Check they know Australian selling', d: 'GST in displayed prices, the ACCC single price rule, consumer guarantees, Australia Post and couriers, Afterpay and Zip, Xero and MYOB.' },
  { t: 'Ask what happens after launch', d: 'Who fixes bugs in week two, what support costs are driven by, and whether you can leave without a fight.' },
  { t: 'Make sure they will say no', d: 'A good agency tells you when a simpler platform, one app, or no change at all is the better answer.' },
];

/* ─── JSON-LD ──────────────────────────────────────────────────────
   Organization is referenced by @id only. Its definition lives sitewide. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Ecommerce Agency Australia: Ecommerce Development',
      serviceType:
        'Ecommerce agency, ecommerce website design, ecommerce website development, B2B ecommerce, ecommerce integrations, ecommerce migration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Ecommerce agency for Australian DTC and B2B brands. FactoryJet designs, builds and supports online stores on Shopify, Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce, headless stacks and Commerceflo, with Xero, MYOB, ERP, Australia Post, Afterpay and Zip integrations, marketplace connections, migrations that protect rankings, and full code ownership.',
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
      datePublished: '2026-09-25',
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
      name: 'Australian ecommerce agencies',
      itemListElement: AU_AGENCIES.map((a, i) => ({
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
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Ecommerce development for Australian DTC and B2B brands: platform choice, ecommerce website design, Xero, MYOB and courier integrations, trade portals, migration and support after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ecommerce-development/ecommerce-development-og.webp', width: 1200, height: 630, alt: 'Ecommerce agency Australia: a Melbourne homewares brand owner reviewing her online store on a laptop' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ecommerce-development';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline). */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/* Hero spec panel icons (same order as the three spec rows), reused on the two service cards. */
const HERO_ICONS = [
  'M3 4h2l2 11h11l2-8H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  'M9 15 15 9M8 11l-2 2a4 4 0 0 0 6 6l2-2M16 13l2-2a4 4 0 0 0-6-6l-2 2',
  'M15 7a4 4 0 1 1-3.5 6L5 19.5V21h3v-2h2v-2h2l1.5-1.5A4 4 0 0 1 15 7Z',
  'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6',
] as const;

/* The other ecommerce pages in the hub (was the three small hover cards). */
const HUB_MORE: { h: string; t: string; d: string; l: string }[] = [
  { h: '/au/ecommerce-seo', t: 'Ecommerce SEO', d: 'Category and product pages that rank on Google, plus the technical fixes behind them.', l: 'Ecommerce SEO Australia →' },
  { h: '/au/ai-agents', t: 'AI agents for your store', d: 'Agents that answer order questions and keep listings and stock in step, with you approving the actions.', l: 'AI agents →' },
  { h: '/commerceflo', t: 'Commerceflo', d: 'Our own AI commerce operator for brands running DTC, B2B and marketplaces on one data model.', l: 'About Commerceflo →' },
];

/* Related AU services (was the six hover cards). */
const RELATED: { h: string; t: string; d: string; l: string }[] = [
  { h: '/au/shopify-development', t: 'Shopify development Australia', d: 'Shopify and Shopify Plus themes, apps, B2B and migrations to Shopify, in depth.', l: 'See Shopify development →' },
  { h: '/au/ai-agents', t: 'AI agents for your store', d: 'Agents that answer order questions, update listings and chase stock, connected to your systems.', l: 'See AI agents →' },
  { h: '/au/ai-seo', t: 'AI SEO', d: 'Getting your brand and products named in ChatGPT, Perplexity and Google AI Overviews.', l: 'See AI SEO →' },
  { h: '/au/seo', t: 'SEO services', d: 'Ecommerce SEO for category and product pages, technical fixes and content that ranks.', l: 'See SEO Australia →' },
  { h: '/au/ai-development', t: 'AI development', d: 'AI built into your ERP, CRM or store: product data, search and support workflows.', l: 'See AI development →' },
  { h: '/au', t: 'FactoryJet Australia', d: 'Everything we do for Australian businesses: ecommerce, AI agents, websites and AI search.', l: 'Back to the hub →' },
];

export default function EcommerceDevelopmentAUPage() {
  return (
    <>
      <script id="ld-au-ecommerce-development" type="application/ld+json"
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
              <div className="eyebrow">Australian Ecommerce Agency</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet is an ecommerce agency for Australian DTC and B2B brands. Our ecommerce development team designs,
                builds and supports online stores on Shopify, WooCommerce, Adobe Commerce, BigCommerce and headless
                stacks, connected to Xero or MYOB, Australia Post and your couriers, Afterpay and Zip. Then we stay
                on after launch, and you own everything we build.
              </p>
              <HeroInlineForm region="au" source="au_ecommerce_development_hero" submitLabel="Talk to the Founder" />
            </div>

            <form
              className="specpanel"
              aria-label="What you get from an ecommerce build"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What you get: a platform store with a custom theme, Xero, MYOB, courier and Afterpay connections tested before launch, and code, accounts and domain in the client's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT YOU GET</span>
                <span className="sys"><span>DTC</span><span>B2B</span><span>SUPPORT</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what you get">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">Shopify, WooCommerce, BigCommerce</span>
                  <span className="title">Platform store, custom theme</span>
                  <span className="tag">3 to 5 weeks</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ecom-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">connected and tested before launch</span>
                  <span className="title">Xero, MYOB, couriers, Afterpay</span>
                  <span className="tag">Included</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ecom-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">in your name from day one</span>
                  <span className="title">Code, accounts and domain</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The rule behind every integration is simple: each piece of data has one owner.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '12.7%', t: 'of all Australian retail sales were made online in June 2025', s: 'ABS, Retail Trade, June 2025', u: SRC_ABS },
              { v: '19.0%', t: 'of non-food retail sales were made online in June 2025', s: 'ABS, Retail Trade, June 2025', u: SRC_ABS },
              { v: '13.0%', t: 'growth in online retail sales over the year to June 2025', s: 'ABS, seasonally adjusted', u: SRC_ABS },
              { v: '2,000+', t: 'retail websites checked by the ACCC for misleading return policies', s: 'ACCC, February 2025', u: SRC_ACCC_SWEEP },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...extLink}>{r.s}</a></div>
                <div className="v">
                  <strong className={r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number'}>{r.v}</strong>
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

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does an ecommerce agency do for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">{ANSWER_FIRST}</p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      <b>DTC</b> (direct to consumer) means selling straight to shoppers. <b>B2B</b> (business to business)
                      means selling to trade customers, usually at account prices and on credit. A <b>platform</b> is the
                      software your store runs on, such as Shopify or WooCommerce. <b>Ecommerce development</b> is the
                      engineering that turns a design into a working store on that platform.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Here is why this matters. The Australian Bureau of Statistics reported that online sales made up 12.7% of
                    all Australian retail in June 2025, up from 11.6% a year before, and 19.0% of non-food retail. Your
                    customers already buy online. The question is whether your store is the one they trust enough to finish
                    the checkout.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="The owner of a Melbourne homewares brand reviewing product pages on her online store at a timber desk">
                <img src="/images/au/ecommerce-development/ecommerce-development-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="The owner of a Melbourne homewares brand reviewing product pages on her online store, seen over her shoulder at a bright timber desk" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ HUB: the E-Commerce category's services → capgrid (two feature cards) + directory ═══ */}
        <section className="section capabilities au-top" id="services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce services in Australia</div>
              <h2>Everything we do for Australian online stores, in one place</h2>
              <p className="lead">
                This page is the overview. Two services have their own detailed pages: Shopify development, for brands
                on Shopify or moving to it, and AI SEO, for stores that want to be named when shoppers ask ChatGPT or
                Google for a recommendation. Pick the one that matches where you are, or read on for the full picture.
              </p>
            </div>
            <div className="capgrid capgrid-2">
              <a className="cap cap-1" href="/au/shopify-development">
                <div className="caphead"><span className="capid">Most asked for</span><svg {...CAP_ICON}><path d={HERO_ICONS[0]} /></svg></div>
                <VisualSlot page={PAGE_KEY} slot="capability-01" kind="diagram" ratio="11:4" className="cap-diagram"
                  subject="AI-generated model: a white Shopify-style storefront block with an orange theme panel sliding into place" />
                <h3>Shopify development Australia</h3>
                <p>
                  Custom Shopify and Shopify Plus themes, apps chosen with care, B2B wholesale on Shopify, and
                  migrations from Maropost (Neto), WooCommerce or Magento without losing your Google rankings.
                  Built by a registered Shopify Partner, connected to Xero or MYOB, Australia Post and Afterpay.
                </p>
                <div className="systags"><span>Theme builds and redesigns</span><span>Shopify Plus and B2B</span><span>Migrations to Shopify</span></div>
                <span className="cap-go">See Shopify development in Australia →</span>
              </a>
              <a className="cap cap-2" href="/au/ai-seo">
                <div className="caphead"><span className="capid">New way shoppers search</span><svg {...CAP_ICON}><path d={HERO_ICONS[3]} /></svg></div>
                <VisualSlot page={PAGE_KEY} slot="capability-02" kind="diagram" ratio="11:4" className="cap-diagram"
                  subject="AI-generated model: a white chat bubble quoting a small product card, with an orange citation marker" />
                <h3>AI SEO for online stores</h3>
                <p>
                  Shoppers now ask ChatGPT, Perplexity and Google AI Overviews which brand to buy from. AI SEO works on
                  getting your store and products named in those answers, with clean product data and pages AI tools
                  can read and quote.
                </p>
                <span className="cap-go">See AI SEO for Australian brands →</span>
              </a>
            </div>
            <div className="agentdir-group">
              <div className="agentdir-label">
                <h3>More ecommerce services</h3>
                <span className="mono agentdir-count">{HUB_MORE.length} pages</span>
              </div>
              <ul className="agentdir-grid au-grid-3">
                {HUB_MORE.map((c) => (
                  <li key={c.h}>
                    <a href={c.h}>
                      <span className="agentdir-t">{c.t}</span>
                      <span className="agentdir-l">{c.d}</span>
                      <span className="agentdir-more">{c.l}</span>
                      <span className="agentdir-go" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white online store on a phone-sized stand, connected by orange cables to small accounts, stock and courier blocks" />

        {/* ═══ START TO FINISH → process timeline (stages stay openable, as the copy says) + timelines table ═══ */}
        <section className="section process" id="start-to-finish">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">Start to finish</div>
                <h2>What an ecommerce agency does, from first call to a store that sells</h2>
                <p className="lead">
                  Every ecommerce website development project we run follows the same six stages. Open each one to see
                  what happens and what you walk away with.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A designer sketching mobile product page wireframes in a paper sketchbook, a phone and closed laptop beside him"
                caption="Structure before colour. We sketch how a shopper moves from a search to a paid order as simple boxes on a phone-sized page, then design around that path.">
                <img src="/images/au/ecommerce-development/ecommerce-development-planning.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A designer in a Sydney studio sketching mobile product page wireframes in a paper sketchbook, seen over his shoulder, with a phone and closed laptop beside him" />
              </VisualSlot>
            </div>
            <div className="timeline timeline-4 timeline-3">
              {STAGES.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p className="tnode-meta">{s.w}</p>
                  <p>{s.d}</p>
                  <p><b>You get:</b> {s.get}</p>
                </details>
              ))}
            </div>

            <div className="tablewrap">
              <table>
                <thead>
                  <tr><th>Type of ecommerce build</th><th className="fj">Typical timeline</th><th>What moves the date</th></tr>
                </thead>
                <tbody>
                  {TIMELINES.map((r) => (
                    <tr key={r.type}><th scope="row">{r.type}</th><td className="fj">{r.weeks}</td><td>{r.drivers}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">Our own project ranges, not promises. Late product data and slow sign-offs move dates more than code does.</p>
          </div>
        </section>

        {/* ═══ PLATFORM CHOICE → homepage-style platform rows + chooser ═══ */}
        <section className="section platforms" id="platforms">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Platform choice</div>
                <h2>Shopify, WooCommerce, Adobe Commerce, BigCommerce, headless or Commerceflo?</h2>
              </div>
              <p>
                We build on all of them, so we have no reason to push one. The right ecommerce platform depends on your
                catalogue, whether you sell to trade, how much your team wants to manage, and what it needs to connect
                to. Here is how they compare for Australian stores.
              </p>
            </div>
            <div className="platlist" role="list">
              {PLATFORMS.map((p, i) => {
                const inner = (
                  <>
                    <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                    <div className="plat-name"><h3>{p.name}</h3></div>
                    <div className="plat-fit"><span className="k">Best fit</span>{p.fit}</div>
                    <dl className="pw-trade">
                      <dt>B2B</dt><dd>{p.b2b}</dd>
                      <dt>Who runs hosting</dt><dd>{p.runs}</dd>
                      <dt>Watch out for</dt><dd>{p.watch}</dd>
                    </dl>
                    {p.href ? <span className="plat-go" aria-hidden="true">↗</span> : null}
                  </>
                );
                const cls = `plat plat-link${p.name === 'Commerceflo' ? ' plat-own' : ''}`;
                return p.href ? (
                  <a key={p.name} className={cls} role="listitem" href={p.href}>{inner}</a>
                ) : (
                  <div key={p.name} className={cls} role="listitem">{inner}</div>
                );
              })}
            </div>
            <p className="au-after">
              Shopify is the most common answer for Australian DTC brands, and it has its own page: our{' '}
              <a href="/au/shopify-development">Shopify development service for Australia</a>{' '}
              covers themes, Shopify Plus, apps and Shopify migrations in depth. If you run DTC, a trade portal and
              marketplaces together, read how <a href="/commerceflo">Commerceflo</a>,
              FactoryJet’s own AI commerce operator, handles all three on one data model. Our DTC client Belle Maison
              runs on it. See every Shopify plan price and fee in AUD in our{' '}
              <a href="/blog/shopify-cost-australia-2026">Shopify pricing Australia guide</a>, or compare
              all the platforms in our <a href="/blog/best-ecommerce-platform-australia-2026">best ecommerce platform in Australia guide</a>.
            </p>

            <div className="au-split">
              <div>
                <h3>Which platform fits you? Pick the line that sounds most like your business</h3>
                <div className="au-acc">
                  {FIT_CHECKS.map((f, i) => (
                    <details key={f.q}>
                      <summary><span className="n">{String(i + 1).padStart(2, '0')}</span><span className="t">{f.q}</span><span className="chev" aria-hidden="true">+</span></summary>
                      <div className="body"><p>{f.a}</p></div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">A rule of thumb</div>
                <ul className="trigrows">
                  <li><span className="m">Small catalogue, DTC</span><span className="n">least to manage</span><span className="t">Shopify</span></li>
                  <li><span className="m">Content-led, on WordPress</span><span className="n">keep it in one place</span><span className="t">WooCommerce</span></li>
                  <li><span className="m">Trade and retail together</span><span className="n">account prices, terms</span><span className="t">Shopify Plus</span></li>
                  <li><span className="m">Complex B2B, huge catalogue</span><span className="n">quotes, approvals, ERP</span><span className="t">Adobe Commerce</span></li>
                  <li><span className="m">Not sure yet</span><span className="n">we will tell you honestly</span><span className="t">Ask us</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ECOMMERCE WEBSITE DESIGN → facts ═══ */}
        <section className="section facts au-top" id="design">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Ecommerce website design</div>
              <h2>Ecommerce web design that answers the buyer’s questions before they ask</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Good ecommerce website design is not decoration. It is the order in which a shopper gets answers.
                  What does it cost, including delivery? When will it arrive? Can I pay with Afterpay? What if it does
                  not fit? A product page that answers those four questions near the top sells more than one with a
                  bigger hero image.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  We design mobile first, because that is where most shoppers arrive, and we test on a mid-range phone
                  on a normal connection, not a fast laptop in an office. We aim for strong Core Web Vitals, which are
                  Google’s measures of how quickly a page loads, how fast it responds and whether it jumps around while
                  loading. A slow store loses sales quietly, one abandoned cart at a time.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <h3>Product pages that sell</h3>
                  <p>Real photography from the angles people want, clear variants, stock status you can trust, delivery estimate by postcode, and the returns promise in plain words.</p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <h3>Category pages that rank</h3>
                  <p>Filters that work on a phone, clean URLs, and a short intro that answers what someone searched for. Category pages are where most ecommerce SEO is won. See <a href="/au/ecommerce-seo">ecommerce SEO for category and product pages</a>.</p>
                </div></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <h3>A checkout with nothing extra</h3>
                  <p>Guest checkout, address lookup, the total price shown up front, and payment options your customers actually use. Every extra field costs orders.</p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A shopper at a riverside cafe browsing a product page for a ceramic vase on her phone"
                caption="This is where the sale happens: one hand, a phone, a few spare minutes. Photo, options and the buy button all fit on the first screen.">
                <img src="/images/au/ecommerce-development/ecommerce-development-mobile.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A shopper at a sunny Brisbane riverside cafe browsing a product page for a ceramic vase on her phone, seen over her shoulder" />
              </VisualSlot>
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Planning a new store or a replatform?'}
            sub={'Tell us what you sell, where you sell it and what is not working. On a short call the founder will tell you which platform fits, what drives the cost, and how long it will really take.'}
            label={'Talk to the Founder'}
          />
        </div>

        {/* ═══ INTEGRATIONS (Australian stack) → definition module (image left, copy right) ═══ */}
        <section className="definition" id="integrations">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="An operations manager at an online homewares brand checking synced orders on her laptop beside a label printer and courier satchels">
              <img src="/images/au/ecommerce-development/ecommerce-development-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An operations manager at a Melbourne online homewares brand checking synced orders on her laptop, with a label printer and courier satchels ready beside her" />
            </VisualSlot>
            <p className="figcap">
              When the store, accounts, stock and couriers are connected, orders arrive already synced and the
              label prints itself, instead of a stack of emails to retype.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Integrations</div>
            <h2>Connected to Xero or MYOB, Australia Post, Afterpay, Zip and your ERP</h2>
            <p>
              An online store that does not talk to your accounts, stock and couriers just moves the work to
              someone’s keyboard. These are the connections we set up on most Australian builds.
            </p>
            <ol className="au-numlist">
              {INTEGRATIONS.map((i) => (
                <li key={i.t}><span><b>{i.t}.</b> {i.d}</span></li>
              ))}
            </ol>
            <p>
              The rule behind every integration is simple: each piece of data has one owner. Usually your ERP or
              Xero owns price and stock, and the store owns the shopping experience. That stops two systems arguing
              about which number is right. If you want AI to take over repetitive order work on top of this, such as
              answering where-is-my-order emails, see our <a href="/au/ai-agents">AI agents for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ B2B ECOMMERCE → facts + comparison table ═══ */}
        <section className="section facts" id="b2b">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">B2B ecommerce</div>
              <h2>B2B ecommerce and trade portals for Australian wholesalers and manufacturers</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  B2B ecommerce means selling to other businesses online. Your trade customers log in, see their own
                  prices, reorder in seconds and pay on account, and each order lands in your ERP without anyone
                  typing it. B2B gets less attention than DTC, but the need is real: plenty of Australian
                  wholesalers still take orders by phone, email and PDF.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  What a trade portal needs is different from a DTC shop. Account approval before prices show.
                  Price lists per customer. Quick order by SKU and bulk upload. Quotes for large orders. Credit limits
                  read from your ERP. And prices shown ex-GST, which the ACCC allows when prices are displayed only to
                  other businesses. We built this kind of B2B ordering for Bombay Petals.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <h3>Which Australian agency should I hire to build a B2B ecommerce website?</h3>
                  <p>
                    Hire an agency that has built a live trade portal connected to an ERP, not one that has only
                    launched DTC stores. B2B projects succeed or fail on the back office: customer price lists, credit
                    limits, stock across warehouses and orders that post cleanly into NetSuite, Pronto, MYOB or Xero.
                    Before you sign, ask four things. Can we log in as a trade buyer on a B2B store you built? How do
                    you sync prices and credit from our ERP, and how often? What happens when a sync fails at 2am? Who
                    supports the portal after launch, and how fast do they reply?
                  </p>
                  <p>
                    FactoryJet designs, builds and supports B2B stores for Australian wholesalers and manufacturers. We
                    work remotely, with no Australian office, and calls booked in your business day. If you would rather
                    sit across a table, the <a href="#agencies">Australian ecommerce agencies listed below</a> include
                    several with B2B and ERP integration teams in Brisbane, Sydney and Melbourne.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <h3>Shopify B2B: what you get on each plan</h3>
                  <p>
                    Shopify says its B2B features now work on the Basic, Grow, Advanced and Shopify Plus plans. Every
                    plan gets company profiles with multiple locations and buyers, net payment terms, minimum, maximum
                    and increment quantity rules, quantity price breaks, saved cards and draft orders with PO numbers.
                    The limits show up on price lists: Basic, Grow and Advanced allow three active B2B catalogues across
                    your markets, while Plus allows unlimited catalogues, prices assigned to a single company, deposits
                    and partial payments. If each trade customer has their own negotiated price, that is usually the
                    line that decides the plan.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_SHOPIFY_B2B} {...extLink}>Shopify Help Center, Shopify B2B features by plan</a>. See also our{' '}
                    <a href="/au/shopify-development">Shopify development service</a>.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§05</div><p>
                  For a deeper look at platforms for trade selling, read our guide to the{' '}
                  <a href="/blog/best-b2b-ecommerce-platform-manufacturers-distributors-2026">best B2B ecommerce platforms for manufacturers and distributors</a>.
                </p></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A trade customer and a sales rep in a wholesale showroom looking at a trade ordering portal on a tablet"
                caption="A good trade portal gives your reps a tool to sell with, not a website to compete with. They can log in as a customer and place the order for them.">
                <img src="/images/au/ecommerce-development/ecommerce-development-trade.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A trade customer and a sales rep in a Brisbane wholesale showroom looking at a trade ordering portal on a tablet" />
              </VisualSlot>
            </div>
            <div className="tablewrap span-all">
              <table>
                <thead><tr><th>Area</th><th>B2B (trade)</th><th>DTC (public)</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Who buys</th><td>Businesses, often several buyers per account</td><td>One person</td></tr>
                  <tr><th scope="row">Price</th><td>Per account, price bands, contract prices</td><td>One price for everyone</td></tr>
                  <tr><th scope="row">GST display</th><td>Ex-GST allowed for business-only prices</td><td>Total price including GST</td></tr>
                  <tr><th scope="row">Payment</th><td>On account, card or bank transfer</td><td>Card, wallet, Afterpay, Zip</td></tr>
                  <tr><th scope="row">Ordering</th><td>Quick order, upload, reorder, quotes</td><td>Browse and add to cart</td></tr>
                  <tr><th scope="row">Back office</th><td>ERP owns prices, stock and credit</td><td>Platform or Xero often enough</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ MARKETPLACES → facts (head left, two facts right) ═══ */}
        <section className="section facts au-top" id="marketplaces">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Marketplaces</div>
              <h2>Selling on Amazon Australia, eBay and Kogan from one stock pool</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Many Australian brands sell on their own store and on one or two marketplaces. That works well until
                  stock lives in three places and the last unit sells twice. We connect your store to Amazon Australia,
                  eBay Australia and Kogan Marketplace so products, prices and stock are managed from one place and
                  every order flows back to one system.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  One note if you are working from an older plan: Catch is no longer a channel. Wesfarmers wound the
                  Catch marketplace down in 2025, so any listings or connectors built for it need retiring.
                </p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MIGRATION (six steps) → facts with numbered rows ═══ */}
        <section className="section facts au-top" id="migration">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Migration</div>
              <h2>Six steps to move your online store without losing Google rankings</h2>
              <p className="lead">
                Replatforming from Maropost (Neto), old Magento, WooCommerce or a custom build is where stores most
                often lose search traffic. It is avoidable. This is the process we follow on every ecommerce migration.
              </p>
            </div>
            <div className="factswrap">
              <ol className="factlist">
                {MIGRATION_STEPS.map((s, i) => (
                  <li className="fact" key={s.n}>
                    <div className="sec">{s.n}</div>
                    <div>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                      {i === MIGRATION_STEPS.length - 1 ? (
                        <p>
                          For platform-specific moves, see our <a href="/replatforming">replatforming guides</a>{' '}
                          and the <a href="/blog/magento-to-shopify-plus-migration-checklist-2026">Magento to Shopify Plus migration checklist</a>.
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
              <VisualSlot page={PAGE_KEY} slot="facts-4" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="Two ecommerce engineers checking a redirect map on one monitor against the new store on another, a phone on a stand for mobile testing"
                caption="Old addresses on the left, new store on the right. Every line on that map becomes one 301 redirect, and each one is tested on the staging store before launch.">
                <img src="/images/au/ecommerce-development/ecommerce-development-migration.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Two ecommerce engineers in a bright Adelaide office checking a redirect map on one monitor against the new store on another, with a phone on a stand for mobile testing" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ AUSTRALIAN CONSUMER LAW → facts + default-build panel ═══ */}
        <section className="section facts au-top" id="consumer-law">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Australian Consumer Law, in plain English</div>
              <h2>ACCC essentials every Australian online store must get right</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  The Australian Consumer Law, or ACL, applies to every online store selling to Australians.
                  business.gov.au says all businesses selling goods and services in Australia must comply with it,
                  including businesses that are overseas. The ACCC (Australian Competition and Consumer Commission)
                  enforces it. Three areas touch your store’s design and code directly: returns, prices and reviews.
                </p></div>
                <div className="fact"><div className="sec">§02</div><div>
                  <h3>Returns and refunds</h3>
                  <p>
                    You cannot have a store policy that overrides consumer guarantees, so no blanket &ldquo;no
                    refunds&rdquo; lines. Change-of-mind returns are optional, but if you offer them you must follow your
                    own policy. In February 2025 the ACCC reported a sweep of over 2,000 retail websites that found
                    statements such as &ldquo;sale items cannot be returned&rdquo;, restocking fees on faulty goods,
                    and customers paying return postage for faulty items.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <h3>Prices and GST</h3>
                  <p>
                    The ACCC says businesses must display the total price as a single figure, including GST and any
                    unavoidable fees. Extra fees must be disclosed at the start of checkout, not dripped in at the end.
                    If prices are shown only to other businesses, such as in a trade portal, GST does not need to be
                    included. We build both into product pages, cart and checkout.
                  </p>
                </div></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <h3>Reviews and testimonials</h3>
                  <p>
                    It is against the law to create fake or misleading reviews, or to arrange for others to. You must
                    not hide or edit genuine negative reviews, and any incentive for leaving a review must not depend on
                    it being positive and must be disclosed. We set up review apps so every genuine review can publish.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_BGA_ACL} {...extLink}>business.gov.au, Australian Consumer Law and your business</a>;{' '}
                    <a href={SRC_BGA_ECOM} {...extLink}>business.gov.au, Ecommerce (selling online)</a>;{' '}
                    <a href={SRC_ACCC_SWEEP} {...extLink}>ACCC, online return policies sweep (4 February 2025)</a>;{' '}
                    <a href={SRC_ACCC_PRICE} {...extLink}>ACCC, price displays</a>;{' '}
                    <a href={SRC_ACCC_REVIEWS} {...extLink}>ACCC, online reviews</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">What we build in by default</div>
                <p>
                  Clear terms and a returns page that are easy to find, as business.gov.au recommends; consumer guarantee
                  wording on faulty goods; single total prices including GST; delivery costs shown before the last step;
                  a privacy notice for the personal information you collect; and a review setup with no star-rating
                  filter. We are not lawyers, so have your terms checked by one. We build to what they sign off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW TO CHOOSE (checklist) → vlog ═══ */}
        <section className="vlog" id="how-to-choose">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Before you sign anything</div>
              <h2>How to choose an ecommerce agency: an eight-point checklist</h2>
              <p>
                Use these with any ecommerce development company in Australia, including us. Tap each one for what a
                good answer sounds like.
              </p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="illustration" ratio="3:2"
                subject="AI-generated model: a white eight-line checklist on a clipboard, orange ticks on each line" />
            </div>
            <div className="ventries">
              {CHOOSE_TIPS.map((c, i) => (
                <details key={c.t} className="ventry">
                  <summary><h3>{c.t}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{String(i + 1).padStart(2, '0')}</span>
                  <p>{c.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ AGENCY vs FREELANCER vs IN-HOUSE → comparison ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">Side by side</div>
              <h2>Ecommerce agency vs freelancer vs in-house developer</h2>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr><th>What you get</th><th className="fj">FactoryJet</th><th>Solo freelancer</th><th>In-house developer</th></tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Best fit</th><td className="fj">New builds, replatforms, B2B</td><td>Small, defined tasks</td><td>Steady weekly workload</td></tr>
                  <tr><th scope="row">Design, development and integrations</th><td className="fj">One team</td><td>Usually one of the three</td><td>Depends on the hire</td></tr>
                  <tr><th scope="row">Cover when someone is away</th><td className="fj">Yes</td><td>No</td><td>No</td></tr>
                  <tr><th scope="row">Xero, MYOB, ERP and courier experience</th><td className="fj">Yes</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Migration that protects rankings</th><td className="fj">Built into every replatform</td><td>Varies</td><td>Varies</td></tr>
                  <tr><th scope="row">Code and accounts in your name</th><td className="fj">Always</td><td>Check the contract</td><td>Yes</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team</td><td>If they are free</td><td>Yes</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ SUPPORT AFTER LAUNCH + scope shapes (no pricing) → list + cost panel ═══ */}
        <section className="section" id="after-launch">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">After launch</div>
              <h2>Support after launch, from the people who built it</h2>
              <p className="lead">
                The most common complaint we hear from Australian store owners is not about design. It is about an
                agency that vanished the week after launch. We do the opposite. Here are the four ways to work with
                us, from smallest to largest.
              </p>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Store audit and fix list.</b> A review of speed, checkout, SEO, integrations and consumer law wording on your current store, with a ranked list of fixes. Some brands stop here and do the fixes themselves.</span></li>
                  <li><span><b>Fixed-scope build or replatform.</b> A new ecommerce website, or a move to a new platform, quoted at a fixed price per stage.</span></li>
                  <li><span><b>Monthly support plan.</b> Updates, security patches, small improvements and a named engineer who knows your store.</span></li>
                  <li><span><b>Growth sprints.</b> Planned blocks of work on new features, B2B, marketplaces or conversion, measured against numbers you already track.</span></li>
                </ol>
                <p>
                  For WooCommerce and Shopify stores, our <a href="/au/website-maintenance">monthly website maintenance plan</a> covers
                  tested updates, checkout testing and backups. Once orders grow,{' '}
                  <a href="/au/ai-customer-service">AI customer service for online stores</a> can take the
                  order-status and returns questions off your team.
                </p>
                <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What drives the cost</div>
                <ul className="trigrows">
                  <li><span className="m">Number of products and variants</span><span className="t">Catalogue</span></li>
                  <li><span className="m">Platform and paid apps</span><span className="t">Platform</span></li>
                  <li><span className="m">Custom design vs adapted theme</span><span className="t">Design</span></li>
                  <li><span className="m">Xero, MYOB, ERP, couriers, marketplaces</span><span className="t">Integrations</span></li>
                  <li><span className="m">Data and URLs to move</span><span className="t">Migration</span></li>
                  <li><span className="m">First call with the founder</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CITIES → definition module (image left, copy + city links right) ═══ */}
        <section className="definition" id="australia-wide">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition-2" kind="photo" ratio="3:2" className="definition-image"
              subject="The owner of a homewares and gift shop on a video call with his ecommerce team from the back room of his store">
              <img src="/images/au/ecommerce-development/ecommerce-development-remote.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a Perth homewares and gift shop on a video call with his ecommerce team from the back room of his store, seen over his shoulder" />
            </VisualSlot>
            <p className="figcap">
              A weekly call from the back of the shop, a shared board and a staging store you can open any time.
              That is how projects run for brands in Sydney, Melbourne, Brisbane, Perth, Adelaide and regional
              Australia alike.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Sydney, Melbourne, Brisbane, Perth and beyond</div>
            <h2>Ecommerce website design and development across Australia</h2>
            <p>
              Most people look for ecommerce website design in Sydney, ecommerce web development in Melbourne, or
              an ecommerce developer in Brisbane or Perth, expecting to need someone nearby. For this kind of work
              you do not. We run projects remotely with video calls, a shared board and a staging store, for
              brands in every capital city and regional Australia.
            </p>
            <p>
              What matters more than a postcode is who turns up. At FactoryJet the founder is involved in scoping
              every project, and the senior engineers who build your online store are the ones who support it.
              FactoryJet has worked in commerce since 2014 and served 500+ businesses, from B2B sellers such as
              Bombay Petals to DTC brands such as Belle Maison.
            </p>
            <ul className="city-list">
              <li><a href="/au">FactoryJet Australia</a></li>
              <li><a href="/au/melbourne">Melbourne</a></li>
              <li><a href="/au/brisbane">Brisbane</a></li>
              <li><a href="/au/adelaide">Adelaide</a></li>
              <li><a href="/au/canberra">Canberra</a></li>
              <li><a href="/au/seo">SEO Australia</a></li>
            </ul>
          </div>
        </section>

        {/* ═══ AGENCIES (self-disclosure, ItemList from AU_AGENCIES) → ruled rows ═══ */}
        <section className="section platforms" id="agencies">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Australian ecommerce agencies worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These ecommerce agencies show up when Australians search for an
                ecommerce development company or ask AI assistants for a recommendation. Each note is based on what the
                company says on its own website. Talk to two or three and pick the fit.
              </p>
            </div>
            <div className="platlist" role="list">
              {AU_AGENCIES.map((a, i) => (
                <div key={a.name} className={a.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{a.name}</h3>{a.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{a.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Agencies named from live Australian search results and AI assistant answers for ecommerce agency queries, September 2026. Notes reflect each company’s own website on 25 September 2026. Listing is not endorsement.
            </p>
          </div>
        </section>

        {/* ═══ RELATED AU SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="related">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">More from FactoryJet Australia</div>
              <h2>Other ways we help Australian online stores grow</h2>
            </div>
            <ul className="agentdir-grid">
              {RELATED.map((c) => (
                <li key={c.h}>
                  <a href={c.h}>
                    <span className="agentdir-t">{c.t}</span>
                    <span className="agentdir-l">{c.d}</span>
                    <span className="agentdir-more">{c.l}</span>
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
          heading="Ecommerce agency questions Australian business owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Build an online store that sells, and a team that stays</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                catalogue, your platform and what a realistic timeline looks like. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/shopify-development">See Shopify development</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
