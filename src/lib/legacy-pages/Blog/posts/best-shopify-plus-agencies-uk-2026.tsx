import visualQa from './best-shopify-plus-agencies-uk-2026.visual-qa.module.css';
import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const PAGE_URL = 'https://factoryjet.com/blog/best-shopify-plus-agencies-uk-2026';
const IMG = '/images/blog/best-shopify-plus-agencies-uk-2026';
const DIR = 'https://www.shopify.com/partners/directory/partner/';

// Every fact about every firm below was read on that firm's own website on
// 11 October 2026 (URL in `source`), and each firm was looked up in Shopify's
// partner directory the same day (URL in `directory`, tier in `tier`). The
// quote behind each claim is in the research ledger kept outside the repo.
// Nothing here is paid placement. The order is NOT a ranking; firms are
// grouped by the kind of buyer they suit. The table, the profiles, the town
// table and the ItemList schema all map from this same array.
interface Firm {
  name: string;
  url: string;
  source: string;
  group: 'replatform' | 'brand' | 'growth' | 'complex' | 'commerce';
  region: string;
  based: string;
  type: string;
  clients: string;
  platforms: string;
  what: string;
  bestFor: string;
  ask: string;
  tier?: string;
  directory?: string;
}

const FIRMS: Firm[] = [
  {
    name: 'Swanky',
    url: 'https://swankyagency.com/',
    source: 'https://swankyagency.com/about/',
    group: 'replatform',
    region: 'Exeter',
    based: 'Southernhay West, Exeter, with teams in Adelaide and Montpellier',
    type: 'Shopify Plus agency for migrations, design, development and growth marketing',
    clients: 'Brands moving to Shopify Plus; case studies on its home page include FutureYou Cambridge, the Eden Project, Wilkinson Sword and HelloFresh',
    platforms: 'Shopify Plus, Recharge for subscriptions, Shopify POS and ERP integrations',
    what: 'Its about page says it was founded in 2010, has worked only on Shopify since 2012, and in 2016 was one of the first three agencies in Europe to be given the Shopify Plus Expert accreditation. The service menu covers migrations to Shopify Plus, subscriptions, internationalisation, B2B on Shopify, Shopify POS and integrations, with a separate growth side for conversion work, SEO, email and paid ads. Case studies include a B2B migration for Natural Instinct and a migration with ERP integration for Fishpools.',
    bestFor: 'A brand replatforming to Shopify Plus that also sells in more than one country or runs subscriptions.',
    ask: 'Which of its teams would run your project, and how it has handled a migration from your current platform.',
    tier: 'Platinum Partner',
    directory: `${DIR}swankyapple`,
  },
  {
    name: 'blubolt',
    url: 'https://blubolt.com/',
    source: 'https://blubolt.com/shopify-plus/',
    group: 'replatform',
    region: 'Bath',
    based: 'Bath',
    type: 'Shopify Plus agency for launches, migrations and growth roadmaps',
    clients: 'High-growth UK ecommerce brands; its page says clients typically generate £5M+ in annual revenue',
    platforms: 'Shopify Plus; Volt, its own starter framework built on the Shopify Horizon theme',
    what: 'Its Shopify Plus page says it has delivered over 400 projects since 2006 and builds on Volt, its own framework on top of the Shopify Horizon theme. It prints how long projects take: an Express Launch typically 2 to 3 months, a Quick Launch 3 to 6 months and a fully Custom Build 6 to 9 months. A formal proposal with costs and timelines follows within 10 days of an intro call. It also sets up several brands under one parent company.',
    bestFor: 'UK consumer brands at or heading for £5M a year that want a migration with a published timeline.',
    ask: 'Which of the three launch routes your store fits, and what is fixed once the scope is locked.',
    tier: 'Platinum Partner',
    directory: `${DIR}blubolt`,
  },
  {
    name: 'Kubix',
    url: 'https://kubixmedia.co.uk/',
    source: 'https://kubixmedia.co.uk/',
    group: 'replatform',
    region: 'Birmingham',
    based: 'Floodgate Street, Digbeth, Birmingham, with team members in Dublin',
    type: 'Shopify agency for migrations, builds, Shopify POS and performance marketing',
    clients: 'Retail brands; case studies include Ted Baker, Scotch & Soda, The Fine Cheese Co. and Castle Fine Art',
    platforms: 'Shopify Plus, Shopify POS, Shopify Markets and Klaviyo',
    what: 'Kubix builds and migrates stores, then runs paid media, retention and conversion work on a retainer. Its site describes moving The Fine Cheese Co. from Magento to Shopify Plus while protecting search rankings, a new store for Scotch & Soda, and four sites for Shires Equestrian covering trade and consumer sales in the UK and the US. Its Shopify directory profile lists a migration from Salesforce for Stance. Its contact page says it uses no freelancers.',
    bestFor: 'Retailers with shops as well as a website, and brands that want the migration and the marketing from one team.',
    ask: 'How it protects search rankings during a migration, and who looks after the store once it is live.',
    tier: 'Platinum Partner',
    directory: `${DIR}kubix-media`,
  },
  {
    name: 'Onstate',
    url: 'https://www.onstate.co.uk/',
    source: 'https://www.onstate.co.uk/',
    group: 'replatform',
    region: 'Leeds',
    based: 'Leeds (LS10)',
    type: 'Shopify Plus agency for large and complicated builds',
    clients: 'Large retailers; work on its site includes Mamas & Papas, World of Books, Abbott Lyon and Crockett & Jones',
    platforms: 'Shopify Plus, Shopify checkout and bespoke integrations',
    what: 'Onstate says it likes the hard projects: bespoke integrations and stores that have grown complicated. Its site describes taking Mamas & Papas from Hybris to Shopify Plus, moving Lullabellz from Magento, and building a store for World of Books that it calls one of the largest and most complex on Shopify. Its about page says it sets the digital strategy, builds alongside your team, and aims to leave that team able to run the store.',
    bestFor: 'Established retailers leaving an enterprise platform such as Hybris or Magento who want their in-house team trained along the way.',
    ask: 'How the handover to your own team works, and which integrations it would build itself.',
    tier: 'Platinum Partner',
    directory: `${DIR}onstate2`,
  },
  {
    name: 'By Association Only',
    url: 'https://www.byassociationonly.com/',
    source: 'https://www.byassociationonly.com/about-us',
    group: 'brand',
    region: 'Cambridgeshire',
    based: 'Cambridgeshire, according to its Shopify directory profile',
    type: 'Design-led Shopify Plus agency for luxury, fashion, lifestyle and cosmetics brands',
    clients: 'Premium brands; case studies include Self-Portrait, Burton Snowboards, Astrid & Miyu and Joseph Joseph',
    platforms: 'Shopify Plus, custom Shopify applications and third-party integrations',
    what: 'Founded in 2010, it specialises in design for the luxury, fashion, lifestyle and cosmetics sectors and says it writes each project from scratch. Work on its site includes a Magento migration for Self-Portrait and a redesign for the sneaker brand P448. After launch it offers two kinds of retainer: Production Only, where its team carries out tasks you set, and Strategy-Led, where its strategists plan the roadmap with you.',
    bestFor: 'Premium and luxury brands where the look of the store is a large part of the product.',
    ask: 'How design changes are tested against sales, and who would lead the work after launch.',
    tier: 'Platinum Partner',
    directory: `${DIR}bao`,
  },
  {
    name: 'Charle',
    url: 'https://www.charle.co.uk/',
    source: 'https://www.charle.co.uk/shopify-plus-agency/',
    group: 'brand',
    region: 'London',
    based: 'Durham Street, London, with an office in New York',
    type: 'Shopify and Shopify Plus agency for design, development, SEO and email marketing',
    clients: 'Ecommerce brands from start-ups to global names; its site shows 111SKIN and Cambridge Satchel',
    platforms: 'Shopify Plus, Klaviyo and CSignal, its own analytics platform',
    what: 'Established in 2018. Its Shopify Plus page says it has launched 150+ Shopify sites and that more than £300m has passed through stores it built. It covers new builds, migrations from Magento and WooCommerce, SEO, and email and SMS marketing in Klaviyo. Ongoing work runs through monthly plans it calls SiteLab, with a support plan called HelpDesk. The budget menu on its enquiry form runs from under £1,000 to £100,000+.',
    bestFor: 'Consumer brands that want design, search and email marketing from one London team.',
    ask: 'Who on its team would lead your account, and how SEO and email work are planned alongside the build.',
    tier: 'Premier Partner',
    directory: `${DIR}charle-agency`,
  },
  {
    name: 'Cake Agency',
    url: 'https://www.cake.agency/',
    source: 'https://www.cake.agency/shopify-agency',
    group: 'brand',
    region: 'Birmingham',
    based: 'Jewellery Quarter, Birmingham',
    type: 'Shopify agency and ecommerce marketing, founded by a former retailer',
    clients: 'Fashion and lifestyle retailers; its site names P&Co, LUKE 1977, Cyberjammies and Konditor',
    platforms: 'Shopify Plus, Klaviyo, Meta advertising and mobile apps for Shopify stores',
    what: 'Its about page says its founder ran the shoe retailer Cloggs before it was acquired by JD Sports in 2013, and that the team is now 25+ people who all sit in one office with no outsourcing. It says it has built more than 200 ecommerce stores, offers builds from fixed price to fully bespoke, and gives every store a 90-day warranty after go-live. It also turns Shopify stores into mobile apps and runs performance marketing and email.',
    bestFor: 'Fashion and lifestyle retailers that want the store, a mobile app and the marketing from one office.',
    ask: 'Whether your project suits its fixed-price route or a bespoke build, and what the 90-day warranty covers.',
    tier: 'Premier Partner',
    directory: `${DIR}apexecom`,
  },
  {
    name: 'Eleven',
    url: 'https://www.weareeleven.co/',
    source: 'https://www.weareeleven.co/',
    group: 'brand',
    region: 'London',
    based: 'London and Brighton (registered address on Great Portland Street, London)',
    type: 'Design-led Shopify agency for subscription, food, drink and wellness brands',
    clients: 'Direct-to-consumer brands; its home page shows TRIP Drinks, Vita Coco, JENKI Matcha and Days Brewing',
    platforms: 'Shopify and Shopify Plus, subscription set-ups and bundle builders',
    what: 'Eleven describes itself as a Shopify Plus agency for food, drink and wellness brands that are moving from early success to faster growth. Its services are store audits, design and development, subscription strategy and build (from subscribe-and-save to bundle builders), redesigns, conversion work and branding. The budget menu on its contact form starts at £15,500 to £20,000 and ends at £30,000 plus.',
    bestFor: 'Subscription and food and drink brands that have outgrown their first store.',
    ask: 'How it measures subscription results after launch, and which brands like yours it has moved to Shopify Plus.',
    tier: 'Plus Partner',
    directory: `${DIR}eleven3`,
  },
  {
    name: 'Underwaterpistol',
    url: 'https://www.underwaterpistol.com/',
    source: 'https://www.underwaterpistol.com/shopify-plus-agency',
    group: 'growth',
    region: 'London',
    based: 'Wardour Street, London',
    type: 'Shopify Plus agency focused on conversion, retention and migrations',
    clients: 'Fast-growing consumer brands; its Plus page features The Couture Club, Omaze UK and Patou',
    platforms: 'Shopify Plus, subscriptions and loyalty tools',
    what: "Its about page says it built the 90th Shopify store in the world in 2006, and its Plus page says it has been one of the UK's first Shopify Plus agencies since 2014. The work is done in-house. Services run from UX, design and development to Shopify Plus migration, conversion rate optimisation, SEO, subscriptions and loyalty, and it now lists AI consultancy. It publishes a guide to moving from Magento to Shopify Plus.",
    bestFor: 'Brands already on Shopify Plus that want more from the store: higher conversion and more repeat orders.',
    ask: 'How it decides what to test first, and how results are reported each month.',
    tier: 'Platinum Partner',
    directory: `${DIR}uwp`,
  },
  {
    name: 'Rainy City Agency',
    url: 'https://www.rainycityagency.com/',
    source: 'https://www.rainycityagency.com/pages/about-us',
    group: 'growth',
    region: 'Manchester',
    based: 'Manchester',
    type: 'Shopify agency for builds, migrations, conversion work and paid media',
    clients: 'Home and lifestyle, fashion and beauty brands; its site says it has helped over 600 brands since 2016',
    platforms: 'Shopify and Shopify Plus; Meta, TikTok and Google ads',
    what: 'Rainy City describes itself as a Shopify agency working with brands across the UK, Europe and North America since 2016. It launches, replatforms and scales stores, and joins development and design to conversion work and paid advertising on Meta, TikTok and Google. Its menu also lists growth packages and a support and maintenance service for stores that are already live.',
    bestFor: 'Brands in the North West that want one team for the store and the ads that feed it.',
    ask: 'Which of its services a store your size usually starts with, and who would run your account.',
    tier: 'Platinum Partner',
    directory: `${DIR}rainy-city`,
  },
  {
    name: 'Imaginaire',
    url: 'https://www.imaginaire.co.uk/',
    source: 'https://www.imaginaire.co.uk/',
    group: 'growth',
    region: 'Nottingham',
    based: 'Nottingham',
    type: 'Shopify agency with design, development, SEO and paid search in one team',
    clients: 'UK ecommerce brands; projects on its site include Parkside Tiles, Alert Electrical, Wattbike and David Morris',
    platforms: 'Shopify and Shopify Plus, Shopify B2B and headless builds with Next.js',
    what: 'Working from a studio in Nottingham since 2014, Imaginaire plans each store around search from the first wireframe, including how it shows up in AI answers. It prints a starting price for builds, which is rare among the firms here. Its site says Shopify and Shopify Plus builds typically start from £30,000, and that it has completed projects up to £250,000. It migrates from Magento and WooCommerce, builds Shopify B2B sites and moves most clients to a growth retainer after launch.',
    bestFor: 'Brands whose sales depend on being found in search, and buyers who want a starting price before the first call.',
    ask: 'What the £30,000 starting point includes, and how it protects organic traffic in a migration.',
  },
  {
    name: 'Velstar',
    url: 'https://velstar.agency/',
    source: 'https://velstar.agency/about',
    group: 'complex',
    region: 'Liverpool',
    based: 'Exchange Station, Tithebarn Street, Liverpool, with hubs in Leeds, Edinburgh and Miami',
    type: 'Ecommerce agency for direct-to-consumer and B2B',
    clients: 'Established businesses with complicated ecommerce; its home page shows LKQ Euro Car Parts, Castore and Sculpted By Aimee',
    platforms: 'Shopify Plus, headless Shopify, Shopify B2B and POS; Peracto, an enterprise B2B platform it operates; ERP, CRM and fulfilment integrations',
    what: "Velstar's about page says it has 21+ years of ecommerce heritage and has bought four specialist firms in three years, among them 9xb, which builds complex B2B ecommerce. It delivers Shopify Plus builds, migrations, headless storefronts, custom apps and integrations with ERP, CRM and fulfilment systems, and it now offers AI strategy and build work. Its home page says the Euro Car Parts project handles over 12,000 online orders a day.",
    bestFor: 'Mid-market and enterprise firms that sell to trade buyers as well as consumers and have several back-office systems to connect.',
    ask: 'Whether your B2B needs fit Shopify Plus or its Peracto platform, and how it decides between them.',
    tier: 'Platinum Partner',
    directory: `${DIR}velstar`,
  },
  {
    name: 'magic42',
    url: 'https://www.magic42.co.uk/',
    source: 'https://www.magic42.co.uk/shopify-development-agency/shopify-plus-development/',
    group: 'complex',
    region: 'Birmingham',
    based: 'Regent Place, Birmingham, with hybrid working',
    type: 'Ecommerce development agency for Shopify Plus and Magento, with B2B and ERP work',
    clients: 'B2B and consumer merchants; its Plus page shows Alan Paine, Bed Factory Direct and Weekend Offender',
    platforms: 'Shopify Plus, Magento and Adobe Commerce, Klaviyo, and ERP systems such as Khaos Control and Aptean',
    what: 'magic42 grew out of Mobile Fun, an online retailer founded in Birmingham in 2000, and still builds on Magento as well as Shopify Plus. Its Plus page describes moving Alan Paine from Magento to Shopify Plus across several sites with an ERP integration, and moving six trade and consumer sites for ifancyone from OpenCart. Services include theme and app development, B2B and trade pricing, international multi-store set-ups and support.',
    bestFor: 'Merchants weighing Magento against Shopify Plus, and B2B sellers whose store has to exchange data with an ERP.',
    ask: 'Which platform it would recommend for your catalogue and why, and which ERP links it has built before.',
    tier: 'Select Partner',
    directory: `${DIR}magic42`,
  },
  {
    name: 'Tryzens Global',
    url: 'https://tryzens.com/',
    source: 'https://tryzens.com/partners/shopify/',
    group: 'complex',
    region: 'London',
    based: 'London, with offices in Indianapolis, Melbourne, Sydney, Sofia and Trivandrum',
    type: 'International digital commerce consultancy',
    clients: 'Large brands and retailers; its Shopify page features Orlebar Brown',
    platforms: 'Shopify Plus, headless builds with Hydrogen and Shopify Markets',
    what: 'Tryzens says it has worked in digital commerce for over 20 years and has a team of 350+ people. Its Shopify page says the team holds 80+ Shopify certifications and covers design and strategy through to build, 24/7 monitoring and ongoing optimisation. The same page covers headless builds on Hydrogen for enterprises and the use of Shopify Markets for cross-border selling. When we opened junoecommerce.com, the address of the Shopify agency Juno Ecommerce, it redirected to the Tryzens site.',
    bestFor: 'Large retailers that want an enterprise delivery team and round-the-clock monitoring.',
    ask: 'Which of its teams would deliver your project, and how it has handled a store of your size before.',
    tier: 'Platinum Partner',
    directory: `${DIR}tryzensglobal`,
  },
  {
    name: 'FactoryJet (that is us)',
    url: 'https://factoryjet.com/uk/shopify-plus',
    source: 'https://factoryjet.com/uk/shopify-plus',
    group: 'commerce',
    region: 'Remote',
    based: 'Works remotely with UK clients and schedules calls in UK business hours',
    type: 'Shopify and Shopify Plus builds, migrations, integrations and AI agents',
    clients: 'Small and mid-size businesses; 500+ businesses served since 2014',
    platforms: 'Shopify and Shopify Plus, WooCommerce, Xero, HubSpot, WhatsApp, EDI, punchout catalogues, Odoo, NetSuite, SAP Business One and ERPNext',
    what: 'FactoryJet is a registered Shopify Partner. We design, build, migrate and support Shopify and Shopify Plus stores, with a focus on the engineering below the theme: B2B set-up, checkout extensions, Shopify Functions, multi-store set-up and the links to accounting and ERP systems. We also build AI agents that work inside the store and the operations behind it. The founder is involved in every project, you own what we build, and we show working software on your own data before a contract.',
    bestFor: 'Brands and B2B sellers that want one team for the store, the integrations behind it and AI in day-to-day operations.',
    ask: 'To see working software on your own data before you sign, and how we would connect the store to your accounting or ERP system.',
  },
];

// One H2 per buyer group. Headings use the wording buyers type into search
// and AI assistants.
const GROUPS: { key: Firm['group']; heading: string; intro: string }[] = [
  {
    key: 'replatform',
    heading: 'Which Shopify Plus agencies handle a move from Magento, Salesforce or another platform?',
    intro: 'These four lead with replatforming, which means moving a store from one ecommerce system to another. All four hold the Platinum tier in the Shopify directory, and one of them prints how long each kind of project takes.',
  },
  {
    key: 'brand',
    heading: 'Which Shopify Plus agencies suit fashion, beauty, food and drink brands?',
    intro: 'These four are design-led. They suit consumer brands where the look and feel of the store carries much of the sale. Two of them show budget bands on their enquiry forms, which tells you the project sizes they expect.',
  },
  {
    key: 'growth',
    heading: 'Which agencies keep growing a Shopify Plus store after launch?',
    intro: 'These three put as much weight on what happens after go-live as on the build: testing, search, email and paid ads. One of them prints a starting price for builds.',
  },
  {
    key: 'complex',
    heading: 'Who builds B2B, wholesale and enterprise stores on Shopify Plus?',
    intro: 'These three take on the complicated end: trade pricing, several stores, ERP links and large teams. B2B means selling to other businesses. An ERP is the system that holds orders, stock and accounts.',
  },
  {
    key: 'commerce',
    heading: 'Who builds the Shopify Plus store, the integrations and AI agents together?',
    intro: 'One entry here, and it is ours, so read it with that in mind. Two firms above also list AI work: Velstar offers AI strategy and build, and Underwaterpistol offers AI consultancy.',
  },
];

// Platinum and Premier Partners that Shopify's directory listed under United
// Kingdom on 11 October 2026. Name, tier and town are copied from each
// profile page. The tier table and the town table both map from this array.
const DIRECTORY: { name: string; tier: 'Platinum' | 'Premier'; town: string; slug: string }[] = [
  { name: 'Kubix', tier: 'Platinum', town: 'Birmingham', slug: 'kubix-media' },
  { name: 'Rainy City Agency', tier: 'Platinum', town: 'Manchester', slug: 'rainy-city' },
  { name: 'Swanky', tier: 'Platinum', town: 'Exeter', slug: 'swankyapple' },
  { name: 'IDHL', tier: 'Platinum', town: 'Leeds', slug: 'idhl-agency' },
  { name: 'Superco', tier: 'Platinum', town: 'London', slug: 'superco' },
  { name: 'Velstar', tier: 'Platinum', town: 'Liverpool', slug: 'velstar' },
  { name: 'Underwaterpistol', tier: 'Platinum', town: 'London', slug: 'uwp' },
  { name: 'blubolt', tier: 'Platinum', town: 'Bath', slug: 'blubolt' },
  { name: 'Quickfire Digital', tier: 'Platinum', town: 'Norwich', slug: 'quickfire-digital' },
  { name: 'BORN', tier: 'Platinum', town: 'London', slug: 'wemakewebsites' },
  { name: 'Glass Atlas', tier: 'Platinum', town: 'Manchester', slug: 'brave-the-skies' },
  { name: 'Visualsoft', tier: 'Platinum', town: 'Stockton-on-Tees', slug: 'visualsoft-limited' },
  { name: 'By Association Only', tier: 'Platinum', town: 'Cambridgeshire', slug: 'bao' },
  { name: 'fusefabric', tier: 'Platinum', town: 'Richmond', slug: 'fusefabric-limited' },
  { name: 'Vervaunt', tier: 'Platinum', town: 'London', slug: 'pnrc-limited' },
  { name: 'Tryzens Global', tier: 'Platinum', town: 'London', slug: 'tryzensglobal' },
  { name: 'Limesharp', tier: 'Platinum', town: 'London', slug: 'limesharp4' },
  { name: 'Onstate', tier: 'Platinum', town: 'Leeds', slug: 'onstate2' },
  { name: 'Fostr', tier: 'Platinum', town: 'Leeds', slug: 'fostr-agency' },
  { name: 'Blue Horizons', tier: 'Premier', town: 'Gloucester', slug: 'blue-horizons' },
  { name: 'Glaze Digital', tier: 'Premier', town: 'Belfast', slug: 'glazedigital' },
  { name: 'We Are Crisp', tier: 'Premier', town: 'London', slug: 'crisp' },
  { name: 'Herd', tier: 'Premier', town: 'Hull', slug: 'herd' },
  { name: 'Cake Agency', tier: 'Premier', town: 'Birmingham', slug: 'apexecom' },
  { name: 'Dash', tier: 'Premier', town: 'London', slug: 'dash-creative' },
  { name: 'Northern Artillery', tier: 'Premier', town: 'Leeds', slug: 'teabag-studios' },
  { name: 'WIRO', tier: 'Premier', town: 'Bucklesham', slug: 'wiro' },
  { name: 'Tribe', tier: 'Premier', town: 'Exeter', slug: 'tribe-digital1' },
  { name: 'Radiant', tier: 'Premier', town: 'Birmingham', slug: 'radiant-agency' },
  { name: 'Charle Agency', tier: 'Premier', town: 'London', slug: 'charle-agency' },
  { name: 'B2', tier: 'Premier', town: 'Leeds', slug: 'ayko' },
  { name: 'Function', tier: 'Premier', town: 'London', slug: 'function-london-limited' },
  { name: 'That Works Agency', tier: 'Premier', town: 'Leeds', slug: 'thatworks' },
  { name: 'Unified', tier: 'Premier', town: 'Richmond', slug: 'unifiedldn' },
  { name: 'Juno Ecommerce', tier: 'Premier', town: 'London', slug: 'junoshopify' },
  { name: 'Astound Digital', tier: 'Premier', town: 'London', slug: 'astound-digital' },
];

// Town view. Each value matches Firm.region and DIRECTORY.town, so both
// columns of the table are derived and cannot drift from the arrays above.
const REGIONS: string[] = ['London', 'Birmingham', 'Leeds', 'Manchester', 'Liverpool', 'Exeter', 'Bath', 'Nottingham', 'Cambridgeshire'];

// Price signals copied from each firm's own page on 11 Oct 2026.
// These are the firms' figures, not FactoryJet prices.
const PRICES: { firm: string; figure: string; kind: string; source: string }[] = [
  { firm: 'Imaginaire', figure: 'Shopify and Shopify Plus builds typically start from £30,000; completed projects run up to £250,000', kind: 'Printed price for a build', source: 'https://www.imaginaire.co.uk/' },
  { firm: 'Eleven', figure: '£15,500 to £20,000, £20,000 to £30,000, or £30,000 plus', kind: 'Budget options on its contact form', source: 'https://www.weareeleven.co/contact' },
  { firm: 'Charle', figure: 'Eight bands from under £1,000 to £100,000+', kind: 'Budget options on its enquiry form', source: 'https://www.charle.co.uk/contact/' },
  { firm: 'Cake Agency', figure: 'Recommends budgeting $20k to $30k for a bespoke Shopify build (its page quotes US dollars)', kind: 'Advice in its own FAQ', source: 'https://www.cake.agency/shopify-agency' },
];

// Shopify's own plan comparison for the UK, read on 11 Oct 2026 at
// shopify.com/uk/pricing and shopify.com/uk/plus/pricing.
const PLANS: { row: string; advanced: string; plus: string }[] = [
  { row: 'Monthly price', advanced: '£259 paid yearly, or £344 paid monthly', plus: 'From £1,800 on a 3-year term, or £1,950 on a 1-year term' },
  { row: 'Online card rate with Shopify Payments', advanced: '1.5% + 25p', plus: '1.3% + 25p' },
  { row: 'Fee if you use another payment provider', advanced: '0.6% of each sale', plus: '0.2% of each sale' },
  { row: 'Checkout customisation', advanced: 'Limited', plus: 'Full' },
  { row: 'B2B catalogues', advanced: 'Up to 3', plus: 'Unlimited' },
  { row: 'Stock locations', advanced: '10', plus: '200' },
  { row: 'Staff accounts', advanced: '15', plus: 'Unlimited' },
  { row: 'Headless storefronts', advanced: '1', plus: '25' },
  { row: 'Expansion stores', advanced: 'Not listed for this plan', plus: 'Main store plus 9 expansion stores included' },
  { row: 'Support', advanced: 'Enhanced live chat', plus: 'Priority support' },
];

const FAQS: FAQItem[] = [
  {
    q: "What are the best Shopify Plus agencies in the UK?",
    a: "There is no independent ranking, so choose by the job. For a migration from another platform: Swanky (Exeter), blubolt (Bath), Kubix (Birmingham) and Onstate (Leeds). For design-led consumer brands: By Association Only, Charle (London), Cake Agency (Birmingham) and Eleven (London). For growth after launch: Underwaterpistol (London), Rainy City Agency (Manchester) and Imaginaire (Nottingham). For B2B and enterprise: Velstar (Liverpool), magic42 (Birmingham) and Tryzens Global (London). FactoryJet builds Shopify Plus stores with integrations and AI agents for UK brands.",
  },
  {
    q: "Which Shopify Plus agency is the best?",
    a: "It depends on what you are buying. Shopify gives its partners four tiers, and on 11 October 2026 its directory showed 19 UK firms at the top one, Platinum. A tier records work done on Shopify so far. It cannot tell you whether a firm has done your kind of project. Shortlist three firms whose case studies match your old platform, your sector and your size, then send all three the same brief.",
  },
  {
    q: "Which Shopify agency is the best in the UK?",
    a: "Nobody ranks them independently. We opened 13 lists that AI assistants cite for this question. Ten are published by agencies, and eight of those ten put the publisher's own firm first. The names that recur most are Swanky, on 12 of the 13 lists, and Charle, Eastside Co and We Make Websites, on 11 each. Use any list, this one included, as a starting point, then check each firm in Shopify's partner directory.",
  },
  {
    q: "Is there a Shopify agency in the UK?",
    a: "Yes, hundreds. Shopify's partner directory listed 462 service partners under United Kingdom when we counted on 11 October 2026. Of those, 315 held a tier: 173 Select, 106 Plus, 17 Premier and 19 Platinum. London has the most top-tier firms, and there are Platinum Partners in Leeds, Manchester, Birmingham, Liverpool, Exeter, Bath and Norwich as well. The tables in this guide list them by tier and by town.",
  },
  {
    q: "What does a Shopify Plus agency do?",
    a: "It designs, builds, migrates and supports online stores on Shopify Plus, the top Shopify plan. The work that sets these firms apart sits below the theme: moving data and search rankings from an old platform, customising checkout, setting up trade pricing for business buyers, running several stores for different countries, and connecting the store to stock, accounting and ERP systems. Most also sell ongoing work after launch, such as conversion testing, SEO, email and paid ads.",
  },
  {
    q: "How much do Shopify agencies charge?",
    a: "Most do not print a price. On the pages we read on 11 October 2026, Imaginaire says its Shopify and Shopify Plus builds typically start from £30,000 and that it has completed projects up to £250,000. The budget menu on Eleven's contact form starts at £15,500 to £20,000. Charle's form runs from under £1,000 to £100,000+. Cake Agency's FAQ recommends budgeting $20k to $30k for a bespoke build. FactoryJet quotes a fixed price in writing after a short scoping call.",
  },
  {
    q: "Is Shopify Plus worth it?",
    a: "It is worth it when you need something only Plus has. Shopify UK lists full checkout customisation, unlimited B2B catalogues, 200 stock locations and nine expansion stores as Plus features. On fees alone the sums are harder. Plus starts at £1,800 a month against £259 for Advanced, and its card rate is 0.2 percentage points lower, so the gap closes at roughly £770,000 a month in card sales. Below that, the reason to buy Plus is a feature you need.",
  },
  {
    q: "How much does Shopify Plus cost in the UK?",
    a: "Shopify's UK pricing page, read on 11 October 2026, says the Plus plan starts at £1,800 a month for standard setups on a three-year term, or £1,950 a month on a one-year term. Larger and more complex businesses move to a variable platform fee based on revenue and business model. The fee covers your main store and nine expansion stores. Shopify adds that if you need custom development, you should budget for a partner as well.",
  },
  {
    q: "What is the difference between Shopify and Shopify Plus?",
    a: "Both run on the same platform. Shopify's UK comparison table shows what changes on Plus: checkout customisation goes from limited to full, B2B catalogues from three to unlimited, stock locations from 10 to 200, staff accounts from 15 on Advanced to unlimited, and headless storefronts from one to 25. Card rates and the fee for using another payment provider are both lower. Plus is sold on a one-year or three-year term.",
  },
  {
    q: "What is a Shopify Plus Partner?",
    a: "It is one of four tiers Shopify gives to the service partners in its directory. The order is Select, Plus, Premier and Platinum. Shopify says partners are tiered on several factors, including their history of experience and proven success on Shopify. Any firm can call itself a Shopify Plus agency, meaning it builds on the Shopify Plus plan. The tier is Shopify's own label, and you can check it on the firm's directory profile in a minute.",
  },
  {
    q: "Who are the Shopify Platinum Partners in the UK?",
    a: "Shopify's directory listed 19 on 11 October 2026: Kubix, Rainy City Agency, Swanky, IDHL, Superco, Velstar, Underwaterpistol, blubolt, Quickfire Digital, BORN, Glass Atlas, Visualsoft, By Association Only, fusefabric, Vervaunt, Tryzens Global, Limesharp, Onstate and Fostr. Six give London as their location, three give Leeds and two give Manchester. Tiers change (Onstate's site announces its own move to Platinum), so check the directory on the day you shortlist.",
  },
  {
    q: "Which Shopify Plus agencies are in London?",
    a: "Shopify's directory listed six Platinum Partners in London on 11 October 2026: Underwaterpistol, BORN, Superco, Vervaunt, Tryzens Global and Limesharp. It listed six Premier Partners there too: Charle Agency, We Are Crisp, Dash, Function, Juno Ecommerce and Astound Digital. Eleven, a specialist in subscription and food and drink brands, is in London and Brighton. We profile Underwaterpistol, Charle, Eleven and Tryzens Global in this guide.",
  },
  {
    q: "Which Shopify Plus agencies are in Manchester?",
    a: "Two Platinum Partners give Manchester as their location in Shopify's directory: Rainy City Agency and Glass Atlas. Rainy City builds and migrates stores and runs paid ads on Meta, TikTok and Google. Glass Atlas describes itself as a digital commerce agency for the UK and Ireland and also works on Adobe Commerce and BigCommerce. Velstar, also a Platinum Partner, is based in Liverpool and has a hub in Leeds.",
  },
  {
    q: "Which Shopify Plus agencies are in Birmingham and Leeds?",
    a: "In Birmingham, Shopify's directory lists Kubix as a Platinum Partner and Cake Agency and Radiant as Premier Partners. magic42, which builds on Shopify Plus and Magento, is also in Birmingham. In Leeds the directory lists three Platinum Partners, IDHL, Onstate and Fostr, and three Premier Partners, Northern Artillery, B2 and That Works Agency. Velstar has a Leeds hub as well as its Liverpool base.",
  },
  {
    q: "Which Shopify Plus agency should handle a Magento migration?",
    a: "Pick one that shows a Magento migration on its own site. Kubix describes moving The Fine Cheese Co. from Magento to Shopify Plus while protecting search rankings. Onstate moved Lullabellz from Magento. By Association Only migrated Self-Portrait. magic42 moved Alan Paine and still builds on Magento, so it can compare the two platforms for you. Underwaterpistol publishes a Magento to Shopify Plus guide, and our own migration checklist covers the steps.",
  },
  {
    q: "Which Shopify Plus agencies build B2B and wholesale stores?",
    a: "Velstar works across direct-to-consumer and B2B and operates Peracto, an enterprise B2B platform. magic42 sets up trade pricing and has linked Shopify Plus stores to ERP systems. Swanky shows a B2B migration for Natural Instinct, and Kubix built trade and consumer sites for Shires Equestrian. Imaginaire calls Shopify B2B one of its specialist areas. FactoryJet builds B2B stores with EDI, punchout catalogues and ERP links.",
  },
  {
    q: "How long does a Shopify Plus build or migration take?",
    a: "blubolt prints timelines on its Shopify Plus page: an Express Launch typically takes 2 to 3 months, a Quick Launch with more bespoke work 3 to 6 months, and a fully Custom Build 6 to 9 months from discovery to launch. FactoryJet quotes 5 to 8 weeks for a store with subscriptions, B2B or a migration, and 8 to 14 weeks for a headless or heavily custom build. Ask any firm what is in scope before you compare dates.",
  },
  {
    q: "Which UK stores use Shopify?",
    a: "Agency case studies name plenty. Onstate describes moving Mamas & Papas from Hybris to Shopify Plus and building World of Books, which it calls one of the largest and most complex Shopify stores. Kubix rebuilt Ted Baker's Shopify store. Velstar describes Castore as powered by Shopify Plus. By Association Only lists Astrid & Miyu, and Swanky lists the Eden Project. Each of those claims is on the agency's own site, read on 11 October 2026.",
  },
  {
    q: "What is the downside of using Shopify?",
    a: "Four limits show on Shopify's own UK pricing pages. If you use a payment provider other than Shopify Payments, Shopify charges a fee on each sale, from 2% on Basic down to 0.2% on Plus. Checkout customisation is limited on every plan below Plus. B2B catalogues stop at three below Plus. And a Plus contract covers one brand, so a group with several brands needs a contract for each.",
  },
  {
    q: "Who is Shopify's biggest competitor?",
    a: "For brands at Shopify Plus size, look at the platforms these agencies move stores away from. The case studies we read name Magento, now Adobe Commerce, most often, followed by Salesforce, SAP Hybris, BigCommerce and WooCommerce. Some firms still build on a rival: magic42 works on Magento and Adobe Commerce, and Glass Atlas lists Adobe Commerce and BigCommerce next to Shopify. Ask one of those if you want a comparison from a firm that sells both.",
  },
  {
    q: "Do I need a Shopify Plus Partner to use Shopify Plus?",
    a: "No. The plan is a contract between you and Shopify. On its UK pricing page Shopify says it does not charge you to migrate and that migration is your responsibility, with paid services available for custom needs. It also says that if you need custom development you should factor a partner into your budget. A brand with developers of its own can run Plus in-house. Others hire an agency for the build and for changes afterwards.",
  },
  {
    q: "How do I check a Shopify agency before I hire it?",
    a: "Do three checks, all free. Find the firm in Shopify's partner directory and read the tier, the town and the reviews Shopify shows. Look the company up on GOV.UK, which gives the registered address, the date of incorporation and the current and resigned officers. Then open a case study on the firm's own site that matches your old platform and ask to speak to that client. If a tier claimed on the website is missing from the directory, ask why.",
  },
  {
    q: "Can a Shopify Plus agency connect the store to our ERP or accounting system?",
    a: "Yes, and it is worth asking early because it changes the scope. Velstar says it integrates Shopify with ERP, CRM and fulfilment systems. magic42 has linked Shopify Plus stores to Aptean and other ERP systems. Swanky describes a migration with ERP integration for Fishpools. FactoryJet connects stores to Xero, Odoo, NetSuite, SAP Business One and ERPNext. Ask which system each firm has connected before.",
  },
  {
    q: "Which Shopify Plus agencies also do AI work?",
    a: "Several now list it. Velstar offers AI strategy, build and deployment. Underwaterpistol lists AI consultancy among its services. Swanky lists a service it calls agentic commerce. Imaginaire says it builds stores with visibility in AI answers in mind. FactoryJet builds AI agents that work inside a store and the operations behind it, such as customer service and order handling. Ask to see one running on real orders before you commit.",
  },
  {
    q: "How many stores can I run on one Shopify Plus plan?",
    a: "Shopify's UK pricing page says your main store and nine expansion stores are included in the monthly platform fee, and that one contract covers one brand. Expansion stores let that brand sell abroad with local currency, language and content. A company with several brands needs a separate Plus contract for each. blubolt and Kubix both describe multi-store set-ups on their own sites, so ask for an example close to yours.",
  },
  {
    q: "Is it safe to pick an agency that an AI assistant recommended?",
    a: "Treat it as a lead. When we asked six assistants for the best Shopify Plus agencies in the UK on 9 October 2026, more than half of their 95 citations pointed at list articles. We opened 13 of those lists, and eight of the ten written by agencies put the publisher first. Six of the UK's 19 Platinum Partners appear on none of the 13. Check any recommended firm in Shopify's directory and on its own site before you call.",
  },
  {
    q: "Who owns the store after an agency builds it?",
    a: "You should. The Shopify account, the theme code, any custom apps and the data belong with the merchant, and the agency works in your account as an invited collaborator. Put that in the contract before work starts. Onstate's about page says it wants clients to own their ecommerce future. FactoryJet clients own everything we build. If a custom app or an integration lives in the agency's own account, ask for it to be moved to yours.",
  },
  {
    q: "What support do Shopify Plus agencies offer after launch?",
    a: "Shopify supports the platform itself, and its pricing page lists priority support on Plus. Agencies support your store. blubolt runs a warranty sprint after launch and then a growth roadmap. Cake Agency gives every store a 90-day warranty after go-live. By Association Only offers two kinds of retainer. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call, and keeps looking after the integrations and maintenance so your team does not have to.",
  },
];

export const post: BlogPost = {
  id: '763',
  slug: 'best-shopify-plus-agencies-uk-2026',
  title: 'Best Shopify Plus Agencies for UK Brands (2026): 15 Compared by Buyer Type',
  excerpt:
    'A fact-checked guide to Shopify Plus agencies for UK brands. The tier Shopify shows for each firm, where each one is based, who it suits, which platforms it works with, what it publishes about price, and how to choose. FactoryJet is on the list and says so.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  readTime: '22 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman in a navy jumper holding an orange folder and a man in a grey shirt stand at a wooden table with three blank white cards laid in a row, in front of a clothes rail and shelves of brown boxes',
  meta: {
    title: 'Best Shopify Plus Agencies for UK Brands 2026 | FactoryJet',
    description:
      'Compare 15 Shopify Plus agencies for UK brands: the tier Shopify shows for each, where each is based, who it suits and the prices they publish.',
  },
  keyTakeaways: [
    'There is no single best Shopify Plus agency for a UK brand. Match the firm to the job: a migration, a design-led rebuild, growth after launch, or B2B and enterprise work.',
    "Every fact below was read on each firm's own website on 11 October 2026, and each firm was looked up in Shopify's partner directory the same day. Nobody paid to be here, and the order is not a ranking.",
    "Shopify's directory listed 462 service partners under United Kingdom on 11 October 2026: 19 Platinum, 17 Premier, 106 Plus and 173 Select, with 147 showing no tier.",
    'Shopify Plus starts at £1,800 a month on a three-year term or £1,950 on a one-year term, according to Shopify UK. On the pages we read, four of the other 14 firms show a price signal, up to a printed starting price of £30,000 for builds.',
    'FactoryJet is on this list. It is a registered Shopify Partner that builds Shopify and Shopify Plus stores, the integrations behind them and AI agents.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': PAGE_URL,
              url: PAGE_URL,
              name: 'Best Shopify Plus Agencies for UK Brands (2026): 15 Compared by Buyer Type',
              description:
                'Compare 15 Shopify Plus agencies for UK brands: the tier Shopify shows for each, where each is based, who it suits and the prices they publish.',
              inLanguage: 'en-GB',
              datePublished: '2026-10-11',
              dateModified: '2026-10-11',
              isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              about: { '@type': 'Thing', name: 'Shopify Plus agencies for brands in the United Kingdom' },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['#answer-first', 'h1', 'h2'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Shopify Plus agencies for UK brands compared (2026)',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              numberOfItems: FIRMS.length,
              itemListElement: FIRMS.map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: a.name,
                url: a.url,
              })),
            },
          ]),
        }}
      />

      <div id="answer-first" className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">The short answer</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          There is no single best Shopify Plus agency for a UK brand. For a move from another platform such as Magento, look at Swanky, blubolt, Kubix and Onstate. For design-led brands, By Association Only, Charle, Cake and Eleven. For growth after launch, Underwaterpistol, Rainy City and Imaginaire. For B2B and enterprise, Velstar, magic42 and Tryzens. For the store, integrations and AI together, FactoryJet.
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          We read every firm&rsquo;s own website on 11 October 2026 and looked each one up in Shopify&rsquo;s partner directory the same day. Nobody paid to be listed and the order is not a ranking. FactoryJet wrote this guide and is on it, last.
        </p>
        <p className="text-gray-800 leading-relaxed">
          For a second opinion on your own shortlist, <a href="/contact" className="text-[#B23E13] underline font-semibold">talk to the founder</a>.
        </p>
      </div>

      <p className="mb-4">
        Ask an AI assistant for the best Shopify Plus agencies in the UK and it mostly reads you somebody&rsquo;s list. On 9 October 2026 we put that exact question to ChatGPT, Claude, Gemini, Perplexity, Google AI Mode and Google AI Overviews. Across 14 answers they made 95 citations to pages on 35 websites, and more than half of those citations pointed at list articles.
      </p>
      <p className="mb-4">
        So we opened 13 of the lists on 11 October 2026. Ten are published by agencies, and eight of those ten put the publisher&rsquo;s own firm first. The other three come from two Shopify app makers and a fulfilment company. Swanky is named on 12 of the 13, and Charle, Eastside Co and We Make Websites on 11 each. The same few names travel from list to list.
      </p>
      <p className="mb-4">
        Then we checked the lists against <a href="https://www.shopify.com/partners/directory" className="text-[#B23E13] underline" rel="noopener" target="_blank">Shopify&rsquo;s own partner directory</a>, where the tier is set by Shopify. It showed 462 service partners under United Kingdom that day, 19 of them at the top tier, Platinum. Six of those 19 are named on none of the 13 lists. This guide starts from the directory and from each firm&rsquo;s own pages, with every fact dated and linked.
      </p>
      <p className="mb-4">
        <strong>A note on who wrote this.</strong> FactoryJet builds and supports Shopify and Shopify Plus stores, so we are on this list, in the last group. FactoryJet is a registered Shopify Partner. Listing yourself is common on pages like this one, which is a good reason to read every list, ours included, with care.
      </p>
      <p className="mb-6">
        A few terms first, in plain English. <strong>Shopify Plus</strong> is the top Shopify plan, sold on a contract. A <strong>Shopify Plus agency</strong> designs, builds and supports stores on that plan. <strong>Replatforming</strong> means moving a store from one ecommerce system to another. <strong>B2B</strong> is selling to other businesses. An <strong>ERP</strong> is the system that holds orders, stock and accounts. <strong>CRO</strong>, short for conversion rate optimisation, is testing changes so that more visitors buy. A <strong>retainer</strong> is a monthly agreement for ongoing work.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The shortlist at a glance</h2>
      <p className="mb-4">
        Scan this first. Find the rows that match your size, your sector and where you are, then read those profiles in full.
      </p>
      <div className="overflow-x-auto mb-8 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">Focus</th>
              <th className="p-3 text-left border border-gray-700">Typical client</th>
              <th className="p-3 text-left border border-gray-700">Platforms and tools named</th>
              <th className="p-3 text-left border border-gray-700">Where based</th>
            </tr>
          </thead>
          <tbody>
            {FIRMS.map((a) => (
              <tr key={a.name} className={a.name.startsWith('FactoryJet') ? 'bg-orange-50' : 'odd:bg-white even:bg-gray-50'}>
                <td className="p-3 border border-gray-200 font-semibold align-top">{a.name}</td>
                <td className="p-3 border border-gray-200 align-top">{a.type}</td>
                <td className="p-3 border border-gray-200 align-top">{a.clients}</td>
                <td className="p-3 border border-gray-200 align-top">{a.platforms}</td>
                <td className="p-3 border border-gray-200 align-top">{a.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is a Shopify Plus agency, and what is a Shopify Plus Partner?</h2>
      <p className="mb-4">
        A Shopify Plus agency designs, builds, migrates and supports stores on Shopify Plus. Any firm can use that label. Partner with a capital P is different, because it is a tier that Shopify gives. The directory shows four tiers, in this order: Select, Plus, Premier and Platinum. Shopify says partners are tiered on several factors, &ldquo;including their history of experience and proven success on Shopify.&rdquo; The directory pages we read do not say how those factors are weighed.
      </p>
      <p className="mb-4">
        We counted the UK listing on 11 October 2026 by paging through it with each tier filter switched on. It held {DIRECTORY.filter((d) => d.tier === 'Platinum').length} Platinum Partners, {DIRECTORY.filter((d) => d.tier === 'Premier').length} Premier, 106 Plus and 173 Select. A further 147 UK listings showed no tier. So a firm can be a Shopify Partner without holding the Plus tier, and a firm can build on the Shopify Plus plan whatever its tier.
      </p>
      <p className="mb-6">
        Read the tier as a record of work done on Shopify so far, and weigh it next to case studies that look like your project. Shopify&rsquo;s own <a href="https://www.shopify.com/uk/plus/pricing" className="text-[#B23E13] underline" rel="noopener" target="_blank">Plus pricing page</a> asks what other costs there are. Its answer is none, with one addition: if you need custom development, budget for a Shopify Plus Partner as well.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How we built this list</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Start with what buyers ask.</strong> The main question came from our UK tests of AI assistants on 9 October 2026. The others are the question boxes Google shows in the UK for searches such as &ldquo;shopify plus agency&rdquo; and &ldquo;shopify plus partners&rdquo;, collected on 11 October 2026.</li>
        <li><strong>Open the lists the assistants cite.</strong> We read 13 of them and counted which agencies each one names, and where the publisher put itself.</li>
        <li><strong>Check Shopify&rsquo;s directory.</strong> We looked up each firm&rsquo;s profile and copied the tier and the town Shopify shows. We found a profile for 13 of the other 14 firms here, and each one is linked.</li>
        <li><strong>Read the source.</strong> Every description comes from the firm&rsquo;s own pages, opened on 11 October 2026 and linked on each profile. One firm named on 11 of the 13 lists, Eastside Co, is not profiled because its website did not load for us on the day.</li>
        <li><strong>No scores we cannot prove.</strong> We have not hired these firms, so there are no star ratings. We tell you who each one suits and a question worth asking it.</li>
        <li><strong>Prices only from the firm.</strong> Where a firm shows a price or a budget band on its own page, we copy it and link the page. We never guess another company&rsquo;s price.</li>
      </ol>

      {GROUPS.map((g) => (
        <div key={g.key}>
          <h2 className="text-2xl font-bold mt-10 mb-4">{g.heading}</h2>
          <p className="mb-6">{g.intro}</p>
          {FIRMS.filter((a) => a.group === g.key).map((a) => (
            <section key={a.name} className="mb-8">
              <h3 className="text-xl font-bold mt-6 mb-2">{a.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Based:</strong> {a.based}. <strong>Type:</strong> {a.type}.
              </p>
              <p className="mb-3">{a.what}</p>
              <table className={visualQa.profileFacts} tabIndex={0} aria-label={a.name}><tbody>
                <tr><th scope="row"><strong>Best for:</strong></th><td> {a.bestFor}</td></tr>
                <tr><th scope="row"><strong>Platforms and tools named:</strong></th><td> {a.platforms}</td></tr>
                {a.tier && a.directory ? (
                  <tr><th scope="row"><strong>Tier in Shopify&rsquo;s directory, 11 October 2026:</strong></th><td> {a.tier} (<a href={a.directory} className="text-[#B23E13] underline" rel="noopener" target="_blank">directory profile</a>)</td></tr>
                ) : null}
                <tr><th scope="row"><strong>Worth asking them:</strong></th><td> {a.ask}</td></tr>
              </tbody></table>
              <p className="text-sm text-gray-600">
                Source, read 11 October 2026: <a href={a.source} className="text-[#B23E13] underline" rel="noopener" target={a.source.startsWith('https://factoryjet.com') ? undefined : '_blank'}>{a.source.replace('https://', '')}</a>
              </p>
              {a.name === 'Onstate' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}/replatform.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="A grey-haired man in a green apron lifts a brown cardboard box onto white metal shelving in a stockroom, with older wooden shelves and an orange hand truck behind him"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Replatforming is a house move for a shop. Every product, customer record and web address has to arrive in the right place.</figcaption>
                </figure>
              )}
              {a.name === 'Eleven' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}/brand.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="A woman with a blonde bob and a mustard cardigan pins fabric swatches to a cork board in a bright studio, with glass jars and a folded cream jumper on the table in front of her"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Design-led agencies begin with the brand itself, so swatches and photography come before page templates.</figcaption>
                </figure>
              )}
              {a.name === 'Tryzens Global' && (
                <figure className="my-8 not-prose">
                  <img
                    src={`${IMG}/trade.webp`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    alt="A woman in a blue polo shirt slides a brown cardboard box across a wooden counter to a man in an orange safety vest and flat cap, with pallet racking of boxes behind them"
                    className="w-full h-auto rounded-xl"
                  />
                  <figcaption className="text-sm text-gray-600 mt-2">Trade buyers expect their own prices and quick repeat orders. On Shopify Plus that means B2B catalogues and, often, a link to the ERP.</figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>
      ))}

      <p className="mb-6">
        FactoryJet services for UK brands: <a href="/uk/shopify-plus" className="text-[#B23E13] underline">Shopify Plus builds and migrations</a>, <a href="/uk/shopify-development" className="text-[#B23E13] underline">Shopify development</a>, <a href="/uk/b2b-ecommerce" className="text-[#B23E13] underline">B2B ecommerce</a> and <a href="/uk/ai-agents" className="text-[#B23E13] underline">AI agents</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">A free second opinion</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your store address and the platform you are on today. On a free call, the founder will tell you whether Shopify Plus is the right plan for you, what a move would involve and which kind of firm on this page fits your project.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Shopify Plus agencies in London, Manchester, Birmingham and Leeds</h2>
      <p className="mb-4">
        Buyers ask by city, so here is the same list by place. The right-hand column shows every Platinum and Premier Partner that Shopify&rsquo;s directory listed in that town on 11 October 2026, including firms we have not profiled.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Where</th>
              <th className="p-3 text-left border border-gray-700">Firms profiled in this guide</th>
              <th className="p-3 text-left border border-gray-700">Platinum and Premier Partners in Shopify&rsquo;s directory</th>
            </tr>
          </thead>
          <tbody>
            {REGIONS.map((r) => {
              const listed = DIRECTORY.filter((d) => d.town === r);
              return (
                <tr key={r} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-semibold align-top">{r}</td>
                  <td className="p-3 border border-gray-200 align-top">{FIRMS.filter((a) => a.region === r).map((a) => a.name).join(', ')}</td>
                  <td className="p-3 border border-gray-200 align-top">
                    {listed.length > 0 ? listed.map((d) => `${d.name} (${d.tier})`).join(', ') : 'None listed at these two tiers'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        London holds {DIRECTORY.filter((d) => d.town === 'London').length} of the {DIRECTORY.length} Platinum and Premier Partners listed for the UK, and Leeds holds {DIRECTORY.filter((d) => d.town === 'Leeds').length}. The rest are spread from Belfast to Norwich, so a brand outside London has top-tier firms within reach. For scale, online sales made up 28.8% of retail spending in Great Britain in August 2026, according to the <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/august2026" className="text-[#B23E13] underline" rel="noopener" target="_blank">Office for National Statistics</a>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The UK Shopify Platinum Partner list, with the Premier tier below it</h2>
      <p className="mb-4">
        This is every UK firm at the top two tiers in Shopify&rsquo;s directory on 11 October 2026, with the town each profile gives. Each name links to its directory profile, where you can read the reviews Shopify shows.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Partner</th>
              <th className="p-3 text-left border border-gray-700">Tier</th>
              <th className="p-3 text-left border border-gray-700">Town on its profile</th>
            </tr>
          </thead>
          <tbody>
            {DIRECTORY.map((d) => (
              <tr key={d.slug} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">
                  <a href={`${DIR}${d.slug}`} className="text-[#B23E13] underline" rel="noopener" target="_blank">{d.name}</a>
                </td>
                <td className="p-3 border border-gray-200 align-top">{d.tier} Partner</td>
                <td className="p-3 border border-gray-200 align-top">{d.town}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>What the popular lists leave out.</strong> Six of the 19 Platinum Partners are named on none of the 13 lists we opened: Glass Atlas, fusefabric, Vervaunt, Tryzens Global, Limesharp and Onstate. Being left off a list says nothing about the work. It suggests the lists draw on each other more than on the directory.
      </p>
      <p className="mb-6">
        <strong>Names move, too.</strong> Eleven of the 13 lists name We Make Websites. The directory profile whose web address ends in wemakewebsites is now titled BORN. And junoecommerce.com redirected to the Tryzens site when we opened it. Check the date on any list before you rely on it.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How much do Shopify Plus agencies charge?</h2>
      <p className="mb-4">
        Most quote after a call. On the pages we read on 11 October 2026, four of the other 14 firms show some kind of price signal. These are each firm&rsquo;s own figures. They are not FactoryJet prices and they are not a market survey.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Firm</th>
              <th className="p-3 text-left border border-gray-700">What its page shows</th>
              <th className="p-3 text-left border border-gray-700">Where it appears</th>
              <th className="p-3 text-left border border-gray-700">Source (read 11 Oct 2026)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.firm} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.firm}</td>
                <td className="p-3 border border-gray-200 align-top">{p.figure}</td>
                <td className="p-3 border border-gray-200 align-top">{p.kind}</td>
                <td className="p-3 border border-gray-200 align-top">
                  <a href={p.source} className="text-[#B23E13] underline" rel="noopener" target="_blank">{p.source.replace('https://', '')}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>How to read this.</strong> A budget band on a form is a hint about the smallest project a firm wants, and it is weaker evidence than a printed price. None of the four pages says whether VAT is included, so ask. The platform fee is separate and goes to Shopify: its UK page says Shopify Plus starts at £1,800 a month on a three-year term, or £1,950 a month on a one-year term.
      </p>
      <p className="mb-6">
        FactoryJet quotes a fixed price in writing after a short scoping call.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Shopify vs Shopify Plus: is Plus worth it?</h2>
      <p className="mb-4">
        The agency question often hides a plan question. Here is Shopify&rsquo;s own comparison for the UK, copied on 11 October 2026 from its <a href="https://www.shopify.com/uk/pricing" className="text-[#B23E13] underline" rel="noopener" target="_blank">pricing page</a> and its <a href="https://www.shopify.com/uk/plus/pricing" className="text-[#B23E13] underline" rel="noopener" target="_blank">Plus pricing page</a>. Advanced is the plan directly below Plus.
      </p>
      <div className="overflow-x-auto mb-4 not-prose">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700"></th>
              <th className="p-3 text-left border border-gray-700">Shopify Advanced</th>
              <th className="p-3 text-left border border-gray-700 bg-[#B23E13]">Shopify Plus</th>
            </tr>
          </thead>
          <tbody>
            {PLANS.map((p) => (
              <tr key={p.row} className="odd:bg-white even:bg-gray-50">
                <td className="p-3 border border-gray-200 font-semibold align-top">{p.row}</td>
                <td className="p-3 border border-gray-200 align-top">{p.advanced}</td>
                <td className="p-3 border border-gray-200 align-top bg-orange-50">{p.plus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>The sum on fees alone.</strong> Plus at £1,800 a month costs £1,541 more than Advanced at £259. The card rate on Plus is 0.2 percentage points lower, and the 25p per sale is the same on both. A saving of 0.2% covers £1,541 once card sales reach about £770,000 a month. If you use another payment provider, the gap is 0.4 points and the same sum gives about £385,000 a month.
      </p>
      <p className="mb-6">
        Two agencies in this guide give a rule of thumb on their own pages. blubolt says Plus typically becomes the most cost-effective option once a brand passes £1M in annual revenue, and Cake Agency says Plus should be on your shortlist above £1 million and growing. Our sum uses Shopify&rsquo;s list prices only and leaves out any app fees a Plus feature might replace, so treat it as one input. At that size the fee saving on its own is small, and the case for Plus rests on features you need, such as full checkout control, unlimited B2B catalogues, 200 stock locations or the nine expansion stores.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Which kind of Shopify Plus agency fits your business?</h2>
      <p className="mb-4">The five groups above cover most buyers. Four more situations come up often. Find the line that sounds like you.</p>
      <div className="grid gap-3 mb-8 not-prose">
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We sell in several countries and need local prices and domains.&rdquo;</p>
          <p className="text-gray-700 text-sm">Swanky lists internationalisation as a service. Kubix built a paired UK and US store on Shopify Markets, and Tryzens uses Markets for cross-border selling.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;Subscriptions are most of our revenue.&rdquo;</p>
          <p className="text-gray-700 text-sm">Eleven builds subscription journeys for food and drink brands. Swanky migrated FutureYou Cambridge to Shopify with Recharge, and Underwaterpistol lists subscriptions as a service.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;We have shops as well as a website.&rdquo;</p>
          <p className="text-gray-700 text-sm">Kubix has a POS and retail service, Swanky lists retail strategy with Shopify POS, and Velstar lists Shopify POS among its Shopify services.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 hover:border-[#B23E13] transition-colors">
          <p className="font-semibold mb-1">&ldquo;Our orders have to reach an ERP, a warehouse or an accounts system.&rdquo;</p>
          <p className="text-gray-700 text-sm">Velstar and magic42 both describe ERP integrations. FactoryJet builds these links too; see <a href="/uk/b2b-ecommerce" className="text-[#B23E13] underline">B2B ecommerce for UK firms</a>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to choose a Shopify Plus agency in the UK: 6 steps</h2>
      <p className="mb-4">Open each step for the detail.</p>
      <div className="space-y-3 mb-8 not-prose">
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">1. Write down why you need Plus</summary>
          <p className="mt-3 text-gray-700">List the Plus features you would use in the first year, using the comparison table above. Checkout changes, trade catalogues, extra stores for other countries and more stock locations are the usual four. If the list is empty, a strong build on a lower plan may serve you better, and a good agency will say so.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">2. Look each firm up in Shopify&rsquo;s directory</summary>
          <p className="mt-3 text-gray-700">Open the firm&rsquo;s directory profile and read the tier, the town and the reviews. Kubix showed 92 reviews when we looked, and eight of the 19 Platinum profiles showed none, so treat the tier and the reviews as separate signals.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">3. Check the company itself</summary>
          <p className="mt-3 text-gray-700">GOV.UK lets you <a href="https://www.gov.uk/get-information-about-a-company" className="text-[#B23E13] underline" rel="noopener" target="_blank">get information about a company</a> for free, including its registered address, its date of incorporation and its current and resigned officers. Several agency sites print a company number in the footer, which makes the search quick.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">4. Send the same brief to three firms</summary>
          <p className="mt-3 text-gray-700">Pick three firms whose typical client looks like you, and send each the same page on the same day. Say what platform you are on, how many products and stores you have, and which systems the store has to exchange data with. blubolt says it asks for analytics and Shopify access before it writes a proposal. A firm that prices without looking at your data is guessing.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">5. Ask who builds it and what you own</summary>
          <p className="mt-3 text-gray-700">Meet the people who will do the work. Kubix says it uses no freelancers, and Cake Agency says its whole team sits in one office. Ask each firm the same thing, and ask that the theme code, custom apps and integrations sit in accounts you control.</p>
        </details>
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="font-semibold cursor-pointer">6. Plan the months after launch</summary>
          <p className="mt-3 text-gray-700">A store changes every week once it trades. Ask what happens in the first 90 days and who you call when checkout breaks on a Saturday. Cake Agency gives a 90-day warranty, blubolt runs a warranty sprint, and By Association Only offers a choice of two retainer types. Get the after-launch terms in writing next to the build price.</p>
        </details>
      </div>

      <figure className="my-8 not-prose">
        <img
          src={`${IMG}/choose.webp`}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          alt="A bearded man in a rust jumper sits at a pale table and rests one hand on the middle of three closed folders, one grey, one orange and one dark blue, with a white mug beside him"
          className="w-full h-auto rounded-xl"
        />
        <figcaption className="text-sm text-gray-600 mt-2">Three proposals from the same brief are easy to compare. Three proposals from three different conversations are not.</figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-10 mb-4">Five warning signs when you talk to a Shopify Plus agency</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>A tier claim that does not match the directory.</strong> Tiers change, so a mismatch may only mean a page is out of date. Ask the firm which one is right.</li>
        <li><strong>No case study from your old platform.</strong> A move from Magento, Hybris or Salesforce has its own traps. Kubix, Onstate and blubolt each name one they have done.</li>
        <li><strong>A price before anyone has seen your data.</strong> Product counts, custom logic and integrations decide the cost. A quote that ignores them will change later.</li>
        <li><strong>Your store sits in the agency&rsquo;s accounts.</strong> The Shopify account, the theme and any custom apps should be yours from day one.</li>
        <li><strong>No plan for search rankings.</strong> Every old web address needs a redirect to its new one. Kubix, Imaginaire and Cake Agency all describe protecting rankings during a migration, so expect the same answer from anyone you hire.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where FactoryJet fits</h2>
      <p className="mb-4">
        We are FactoryJet. We have served 500+ businesses since 2014, most of that time in commerce: online stores, B2B ordering and the operations behind them. Our founder, Bhavesh Barot, is involved in every project. FactoryJet is a registered Shopify Partner. We design, build, migrate and support Shopify and Shopify Plus stores, and you own everything we build.
      </p>
      <p className="mb-4">
        <strong>Where we fit:</strong> brands and B2B sellers that want one team for the store, the integrations (Xero, HubSpot, WhatsApp, EDI, punchout catalogues, and ERPs such as Odoo, NetSuite and SAP Business One) and AI agents in day-to-day operations. Before a contract, we show working software on your own data. We quote the build and the ongoing support as fixed prices in writing after a short scoping call, and we stay on after launch. We work remotely with UK clients and schedule calls in UK business hours.
      </p>
      <p className="mb-6">
        For more detail, read about <a href="/uk/shopify-plus" className="text-[#B23E13] underline">our Shopify Plus work for UK brands</a>, <a href="/uk/ecommerce-development" className="text-[#B23E13] underline">ecommerce development in the UK</a> and our <a href="/blog/magento-to-shopify-plus-migration-checklist-2026" className="text-[#B23E13] underline">Magento to Shopify Plus migration checklist</a>. If AI is on your list as well, see our guide to <a href="/blog/best-ai-agent-development-companies-uk-2026" className="text-[#B23E13] underline">AI agent development companies in the UK</a>.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8 not-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#B23E13] mb-2">If you are not sure which kind of firm you need</p>
        <p className="text-gray-800 leading-relaxed mb-3">
          Send us your store address and the platform you are on today. On a free call, the founder will tell you whether Shopify Plus is the right plan for you, what a move would involve and which kind of firm fits your project.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[#B23E13] px-5 py-3 font-semibold text-white">Talk to the Founder</a>
      </div>
    </>
  ),
};
