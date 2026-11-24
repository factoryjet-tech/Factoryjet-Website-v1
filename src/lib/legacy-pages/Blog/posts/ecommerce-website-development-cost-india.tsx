import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Ecommerce website development cost in India (2026).
 * Every rupee figure below is a published market range from a named Indian guide, or Shopify's own
 * India price list, copied from the page text we fetched on 24 November 2026. None of the figures
 * is a FactoryJet price. Where we do arithmetic on a source's numbers, the text says so. Quotes
 * for each figure are logged in docs/reports/india-briefs/ecommerce-website-development-cost-india-verification.json.
 * The faqs array is the single source for the FAQPage JSON-LD (the blog route maps post.faqs).
 */

const faqs: FAQItem[] = [
  {
    q: 'How much does an ecommerce website cost in India in 2026?',
    a: 'For a custom store that connects to payment, shipping or invoicing tools, CodeVibe’s guide lists a Mid-range store tier at ₹1,50,000 to ₹5,00,000, and Webhorse Studio’s guide, which takes its tiers from HTBG’s 2026 guide, lists a small business store tier with shipping and WhatsApp integrations at ₹80,000 to ₹2 lakh. With ERP or inventory sync, Webhorse Studio and CodeVibe list ₹5 lakh to ₹25 lakh or more. Template stores are priced apart, from ₹25,000.',
  },
  {
    q: 'What is the ecommerce website development cost in India for a custom store?',
    a: 'Three Indian guides put custom stores between ₹80,000 and ₹25 lakh or more, depending on what the store connects to. CodeVibe’s guide lists a Mid-range tier at ₹1,50,000 to ₹5,00,000 and a Custom or enterprise tier at ₹5,00,000 to ₹25,00,000+. DigitalXBrand lists custom Next.js builds from ₹2,50,000 to ₹20,00,000+. Webhorse Studio’s guide lists an Advanced store tier at ₹5 lakh to ₹10 lakh.',
  },
  {
    q: 'How much does a Shopify website cost in India?',
    a: 'Two costs sit side by side: the build and the plan. CodeVibe lists a Shopify build at ₹60,000 to ₹3,00,000, and DigitalXBrand lists a Shopify Plus or headless build at ₹2,50,000 to ₹12,00,000+. Shopify’s own plans are separate: Plus is from ₹1,75,000 a month, and on yearly billing Advanced is ₹22,680, Grow ₹5,599 and Basic ₹1,499.',
  },
  {
    q: 'How much does it cost to have a Shopify website per month?',
    a: 'Shopify’s India page, checked on 24 November 2026, lists Basic at ₹1,499 a month billed yearly or ₹1,994 billed monthly, Grow at ₹5,599 or ₹7,447, and Advanced at ₹22,680 or ₹30,164. Plus is from ₹1,75,000 a month. On top of the plan come the fee on payments through an outside provider, paid apps and your domain.',
  },
  {
    q: 'What is Shopify pricing in India?',
    a: 'Shopify lists four plans in rupees: Basic ₹1,499 a month, Grow ₹5,599, Advanced ₹22,680 (all billed yearly), and Plus from ₹1,75,000 a month. The page also shows an offer of 3 days free, then ₹20 a month for 3 months. Each plan has its own fee when a customer pays through an outside payment provider: 2%, 1%, 0.6% and 0.2%. Those are Shopify’s own figures, so check them before you buy.',
  },
  {
    q: 'Is Shopify 100% free?',
    a: 'No. Shopify’s India pricing page lists a trial of 3 days free, then ₹20 a month for 3 months, and plan prices from ₹1,499 a month billed yearly for Basic. A store that takes real orders also pays the fee on third-party payments (2% on Basic), plus the payment provider’s own fee, any paid apps, and a domain. The trial is for testing a store before you open it.',
  },
  {
    q: 'Which Shopify plan is cheaper for an Indian store, Basic or Grow?',
    a: 'It depends on monthly sales. On Shopify’s yearly prices, Grow costs ₹4,100 a month more than Basic, and its fee on third-party payments is 1% instead of 2%. Divide ₹4,100 by 1% and you get ₹4,10,000: above about that much in monthly sales through an outside provider, Grow costs less overall. CodeVibe reaches the same figure, about ₹4.1 lakh a month. That is arithmetic on the plan prices, not a quote.',
  },
  {
    q: 'Does Shopify charge a fee on every order in India?',
    a: 'Shopify lists a fee on third-party payment providers on every plan: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. Webhorse Studio and CodeVibe both say Shopify Payments is not available in India, so Indian stores use a gateway such as Razorpay, Cashfree or PayU. The gateway then charges its own fee as well. Add both when you work out margins.',
  },
  {
    q: 'How much does it cost to run an eCommerce website?',
    a: 'Running costs are separate from the build and come back every year. CodeVibe lists hosting and domain at roughly ₹5,000 to ₹30,000 a year, a payment gateway at 2% plus 18% GST on that fee (2.36% of each order), and maintenance at 15 to 20% of the build cost a year. Webhorse Studio’s three worked examples put the first year 40% to 65% above the build price.',
  },
  {
    q: 'What does it cost to run an online store each month in India?',
    a: 'There is no single monthly bill, because the lines differ by platform. On Shopify the plan is ₹1,499 to ₹22,680 a month billed yearly, plus apps and the fee on payments. CodeVibe lists WooCommerce hosting and paid plugins at roughly ₹1,000 to ₹5,000 a month. For a custom B2B build, CodeVibe lists a maintenance contract at ₹15,000 to ₹75,000 a month.',
  },
  {
    q: 'Is WooCommerce cheaper than Shopify in India?',
    a: 'WooCommerce is usually cheaper to start. Webhorse Studio says the software is free and open source with no sales fee, so you pay for hosting, extensions and upkeep. Shopify includes hosting but charges a plan and a fee on third-party payments. CodeVibe adds that over two or three years the totals often end up close, so choose on how much upkeep you want to own.',
  },
  {
    q: 'How much does a custom ecommerce website cost in India?',
    a: 'CodeVibe lists ₹5,00,000 to ₹25,00,000+ for a custom or enterprise store, with ERP, CRM or warehouse integrations, in 8 to 16 weeks. DigitalXBrand splits custom Next.js stores into an MVP at ₹2,50,000 to ₹4,50,000, a Growth store at ₹4,50,000 to ₹8,00,000, and Enterprise at ₹8,00,000 to ₹20,00,000+. The label tells you what the number covers, so read it first.',
  },
  {
    q: 'How much does a B2B ecommerce website cost in India?',
    a: 'CodeVibe’s B2B guide, updated 21 November 2026, lists a starter B2B portal at ₹1.5 to 4 lakh, a standard B2B site with a payment gateway and basic ERP or Tally sync at ₹4 to 12 lakh, and a custom B2B platform with deep ERP or SAP integration at ₹15 to 35 lakh or more. It adds that integration, more than design, is usually the big line on a B2B build.',
  },
  {
    q: 'How much does ERP or Tally integration add to an ecommerce website in India?',
    a: 'No guide here prints a standalone price for it. CodeVibe folds basic ERP or Tally sync into its Standard B2B row at ₹4 to 12 lakh, and deep ERP or SAP integration into its Custom row at ₹15 to 35 lakh or more. Webhorse Studio’s guide lists ERP or inventory sync in an Advanced store tier at ₹5 lakh to ₹10 lakh. Ask each quote which system it connects and whether it reads, writes or both.',
  },
  {
    q: 'What is the average cost of website design in India?',
    a: 'The Indian guides we used print ranges, not an average, and a store and a brochure site are priced differently. Webhorse Studio says a regular business website of 20 pages falls between ₹30,000 and ₹4.5 lakh. For stores, the build ranges in the tables above run from ₹25,000 for a template store to ₹25 lakh or more for a custom one.',
  },
  {
    q: 'How much does a 20 page website cost in India?',
    a: 'Webhorse Studio says a regular business website of 20 pages usually falls between ₹30,000 and ₹4.5 lakh, depending on how many unique designs it needs. For an online store it says page count matters less than product count, integrations and checkout rules. So a 20 page brochure site and a 20 page store are different jobs with different prices.',
  },
  {
    q: 'Can I build an ecommerce website for ₹10,000?',
    a: 'You can start a store yourself on a builder plan for less, but Webhorse Studio says a professionally built store is rarely under ₹25,000 in 2026 price guides. It warns that cheap offers often leave out the domain, gateway setup, policy pages or the right to the store itself. Before you pay, ask who owns the store account.',
  },
  {
    q: 'How to create an eCommerce website for free in India?',
    a: 'You can build a small test store yourself. Shopify’s India page lists 3 days free, then ₹20 a month for 3 months, and WooCommerce software is free, though Webhorse Studio notes you still pay for hosting and extensions. Real selling brings costs: a payment gateway fee on each order, a domain, and your time. Free suits a trial. A store you depend on has running costs.',
  },
  {
    q: 'Do I have to pay GST on ecommerce website development?',
    a: 'Yes, if your developer is GST-registered. Webhorse Studio says website development attracts 18% GST, so a ₹1,00,000 quote becomes ₹1,18,000, and GST also applies to gateway fees and maintenance contracts. It adds that a GST-registered business can usually claim input tax credit, and to confirm with your chartered accountant. DigitalXBrand also says registered agencies invoice 18% on development.',
  },
  {
    q: 'How much does a payment gateway cost for an Indian online store?',
    a: 'CodeVibe says Razorpay’s standard domestic rate is 2% plus 18% GST on that fee, which works out to 2.36% of the order value. Webhorse Studio lists Razorpay at 2% per transaction and Cashfree at 1.95%, plus GST. On ₹10 lakh of yearly sales, Webhorse Studio’s sum is ₹20,000 plus ₹3,600 GST. Offers for new merchants change, so read the current terms.',
  },
  {
    q: 'Which payment gateway works with Shopify in India?',
    a: 'Webhorse Studio and CodeVibe both say Shopify Payments is not offered in India, so Indian stores connect an outside gateway such as Razorpay, Cashfree or PayU. DigitalXBrand describes Razorpay on Shopify as an app, with setup at ₹5K to ₹20K including test and live key changes. Whichever you pick, Shopify’s fee on third-party payments applies as well.',
  },
  {
    q: 'What are the hidden costs of an online store in India?',
    a: 'Webhorse Studio names payment gateway fees on every order, Shopify’s fee on third-party payments, paid apps or extensions, shipping, hosting upgrades as traffic grows, maintenance and marketing. In its three worked examples these added 40% to 65% to the first year. DigitalXBrand adds that a ₹50,000 quote can become ₹1.5 lakh in year one once the hidden lines appear.',
  },
  {
    q: 'How long does it take to build an ecommerce website in India?',
    a: 'CodeVibe lists 2 to 4 weeks for a starter store on a template, 5 to 8 weeks for a custom-designed store with integrations, and 8 to 16 weeks for a custom or enterprise build. For B2B, CodeVibe lists 10 to 14 weeks for a standard build and 20 to 24 weeks when ERP and several warehouses are in scope. Product photos and catalogue data are usual causes of delay.',
  },
  {
    q: 'Why do ecommerce website quotes in India vary so much?',
    a: 'Because the same words cover different jobs. CodeVibe names catalogue size, design, integrations, custom features and traffic headroom as the five things that move a quote most. Webhorse Studio adds variants, rules such as cash-on-delivery limits by pincode, and language versions: a Hindi or Marathi store, it says, doubles much of the content work. Compare quotes line by line.',
  },
  {
    q: 'How much should I budget for the first year of an online store?',
    a: 'Webhorse Studio gives three worked examples, with its own arithmetic. A small Shopify store with ₹3 lakh in sales comes to ₹1,02,868 in year one before shipping. A WooCommerce store with ₹15 lakh in sales comes to ₹2,92,915, and a custom store with ₹50 lakh in sales to ₹9,93,200. The examples include GST, hosting, gateway fees and maintenance.',
  },
  {
    q: 'What does yearly maintenance cost for an ecommerce website in India?',
    a: 'Two of the Indian guides suggest 15 to 20% of the build cost a year, CodeVibe and Webhorse Studio, which cites another Indian guide for it. DigitalXBrand lists an agency maintenance contract at ₹18K to ₹1.2L a year for WooCommerce, ₹12K to ₹60K for Shopify and ₹60K to ₹3L for a custom Next.js store. Skipping updates on a store that holds customer data is a risk.',
  },
  {
    q: 'Should I pick a freelancer or an agency to build my online store?',
    a: 'DigitalXBrand prices them in separate bands: a freelancer at ₹25K to ₹1.5L, which it calls good for tight WooCommerce budgets, a boutique agency at ₹80K to ₹8L, and an enterprise integrator at ₹5L and above. CodeVibe says a template store is a job plenty of freelancers do well. Pick by what the store connects to and who will maintain it.',
  },
  {
    q: 'How much does product photography cost for an Indian online store?',
    a: 'Webhorse Studio lists product photos and videos at about ₹500 to ₹5,000 per product, and says good photos are reused on the store, marketplaces, ads and WhatsApp, so they are rarely the place to save. It is a separate line from the build, and some quotes leave it out. Ask who supplies photos and descriptions before you compare prices.',
  },
  {
    q: 'How should I pay for an ecommerce build in India?',
    a: 'DigitalXBrand recommends milestones: 30% on signed scope and design approval, 30% on staging with the catalogue and test payments working, 30% on production launch with live gateway keys, and 10% after a 14-day acceptance period and handover documents. Webhorse Studio suggests 40%, 30% and 30%. Whatever split you use, hold the last payment until you own the domain, hosting and admin access.',
  },
  {
    q: 'How does FactoryJet price an ecommerce website?',
    a: 'FactoryJet quotes a fixed price in writing after a short scoping call. Your products go into a draft theme inside a store account you own, before you sign anything. Each phase has its own fixed price, paid at milestones, and the code and accounts stay yours. We do not publish a price list, because a template store and an ERP-connected store are different jobs.',
  },
];

const CUSTOM_ROWS: { source: string; label: string; range: string; covers: string }[] = [
  { source: 'Webhorse Studio', label: 'Small business store', range: '₹80,000 to ₹2 lakh', covers: 'Customised theme, category structure, shipping and WhatsApp integrations' },
  { source: 'Webhorse Studio', label: 'Mid-scale store', range: '₹2 lakh to ₹5 lakh', covers: 'Custom design, hundreds of products, filters, reviews, email automation (no integration named)' },
  { source: 'Webhorse Studio', label: 'Advanced store', range: '₹5 lakh to ₹10 lakh', covers: 'Custom features, ERP or inventory sync, loyalty, multi-warehouse' },
  { source: 'Webhorse Studio', label: 'Enterprise or marketplace', range: '₹10 lakh to ₹25 lakh+', covers: 'Multi-vendor, custom backend, high traffic' },
  { source: 'CodeVibe', label: 'Mid-range store', range: '₹1,50,000 to ₹5,00,000', covers: 'Custom design, shipping and invoicing integrations, conversion features for a growing D2C brand; 5 to 8 weeks' },
  { source: 'CodeVibe', label: 'Custom or enterprise', range: '₹5,00,000 to ₹25,00,000+', covers: 'Custom architecture, inventory logic, ERP, CRM or warehouse integrations, multi-vendor; 8 to 16 weeks' },
  { source: 'DigitalXBrand', label: 'Growth (WooCommerce table)', range: '₹90,000 to ₹2,00,000', covers: 'Custom child theme, up to 150 SKUs, Shiprocket, coupons, GST (the source does not call these integrations); 6 to 10 weeks' },
  { source: 'DigitalXBrand', label: 'Advanced (WooCommerce table)', range: '₹2,00,000 to ₹5,00,000', covers: 'Custom plugins, subscriptions, multi-vendor lite, ERP sync; 10 to 16 weeks' },
  { source: 'DigitalXBrand', label: 'Plus / headless (Shopify table)', range: '₹2,50,000 to ₹12,00,000+', covers: 'Shopify Plus or Hydrogen storefront; 12 to 24 weeks' },
  { source: 'DigitalXBrand', label: 'MVP (custom Next.js table)', range: '₹2,50,000 to ₹4,50,000', covers: 'Catalog, cart, Razorpay, admin lite, up to 100 SKUs; 10 to 14 weeks' },
  { source: 'DigitalXBrand', label: 'Growth (custom Next.js table)', range: '₹4,50,000 to ₹8,00,000', covers: 'Search, filters, accounts, order tracking, CMS; 14 to 20 weeks' },
  { source: 'DigitalXBrand', label: 'Enterprise (custom Next.js table)', range: '₹8,00,000 to ₹20,00,000+', covers: 'B2B portals, ERP, multi-warehouse, analytics; 20 to 40 weeks' },
];

const TEMPLATE_ROWS: { source: string; label: string; range: string; covers: string }[] = [
  { source: 'Webhorse Studio', label: 'Basic starter store', range: '₹25,000 to ₹80,000', covers: 'Ready-made theme, up to a few dozen products, one payment gateway' },
  { source: 'CodeVibe', label: 'Starter store', range: '₹50,000 to ₹1,50,000', covers: 'Shopify or WooCommerce on a ready-made theme, one payment gateway, up to about 50 products; 2 to 4 weeks' },
  { source: 'DigitalXBrand', label: 'Starter (Shopify table)', range: '₹30,000 to ₹70,000', covers: 'Dawn theme set up, up to 30 products, Razorpay app; 2 to 4 weeks' },
  { source: 'DigitalXBrand', label: 'Growth (Shopify table)', range: '₹70,000 to ₹1,50,000', covers: 'Custom theme sections, collections, apps such as reviews and a cash-on-delivery fee; 4 to 8 weeks' },
  { source: 'DigitalXBrand', label: 'Starter (WooCommerce table)', range: '₹40,000 to ₹90,000', covers: 'Premium theme, up to 25 products, Razorpay, basic shipping; 3 to 5 weeks' },
];

const B2B_ROWS: { label: string; range: string; covers: string }[] = [
  { label: 'Starter B2B portal', range: '₹1.5 to 4 lakh', covers: 'Login-only catalogue, customer groups, basic tiered pricing, minimum order quantities, manual invoicing; built on WooCommerce with B2B extensions or Shopify B2B; 5 to 8 weeks' },
  { label: 'Standard B2B ecommerce site', range: '₹4 to 12 lakh', covers: 'Adds quote requests, credit terms, GST e-invoicing, a payment gateway, order approvals and basic ERP or Tally sync; 10 to 14 weeks' },
  { label: 'Custom B2B platform', range: '₹15 to 35 lakh or more', covers: 'Custom frontend, deep ERP or SAP integration, several warehouses, multi-branch users with roles, sales-rep ordering, a custom pricing engine and a field-staff app; 20 to 24 weeks' },
  { label: 'Ongoing maintenance (AMC)', range: '₹15,000 to 75,000 a month', covers: 'Hosting, security patches, compliance updates, backups and small changes' },
];

const SHOPIFY_ROWS: { plan: string; yearly: string; monthly: string; fee: string }[] = [
  { plan: 'Basic', yearly: '₹1,499 a month', monthly: '₹1,994 a month', fee: '2%' },
  { plan: 'Grow', yearly: '₹5,599 a month', monthly: '₹7,447 a month', fee: '1%' },
  { plan: 'Advanced', yearly: '₹22,680 a month', monthly: '₹30,164 a month', fee: '0.6%' },
  { plan: 'Plus', yearly: 'No yearly price shown', monthly: 'From ₹1,75,000 a month', fee: '0.2%' },
];

const PLATFORM_ROWS: { source: string; platform: string; build: string; running: string }[] = [
  { source: 'CodeVibe', platform: 'Shopify', build: '₹60,000 to ₹3,00,000', running: 'Plan from ₹1,499 a month on yearly billing plus 0.6% to 2% per order' },
  { source: 'CodeVibe', platform: 'WooCommerce (WordPress)', build: '₹50,000 to ₹4,00,000', running: 'Hosting and paid plugins, roughly ₹1,000 to ₹5,000 a month' },
  { source: 'CodeVibe', platform: 'Custom build', build: '₹5,00,000+', running: 'Hosting and an annual maintenance contract' },
  { source: 'DigitalXBrand', platform: 'Shopify', build: '₹30,000 to ₹1.5L, Plus ₹2.5L+', running: 'Apps ₹12K to ₹1.2L a year; agency maintenance ₹12K to ₹60K a year' },
  { source: 'DigitalXBrand', platform: 'WooCommerce / WordPress', build: '₹40K to ₹5L', running: 'Hosting ₹12K to ₹60K a year; plugins ₹8K to ₹80K a year; agency maintenance ₹18K to ₹1.2L a year' },
  { source: 'DigitalXBrand', platform: 'Custom (Next.js)', build: '₹2.5L to ₹20L+', running: 'Infrastructure ₹36K to ₹2L a year; agency maintenance ₹60K to ₹3L a year' },
];

const RUNNING_ROWS: { source: string; line: string; figure: string }[] = [
  { source: 'CodeVibe', line: 'Hosting and domain', figure: 'Roughly ₹5,000 to ₹30,000 a year; Shopify includes hosting in the plan' },
  { source: 'CodeVibe', line: 'Payment gateway (Razorpay, standard domestic)', figure: '2% plus 18% GST on that fee, or 2.36% of the order value' },
  { source: 'CodeVibe', line: 'Maintenance', figure: '15 to 20% of the build cost a year' },
  { source: 'Webhorse Studio', line: 'WooCommerce hosting, citing GoDaddy India', figure: 'Shared ₹1,000 to ₹3,000 a year; VPS ₹16,000 to ₹30,000; cloud ₹30,000 to ₹1 lakh' },
  { source: 'Webhorse Studio', line: 'Domain renewal', figure: 'About ₹100 to ₹6,000 a year' },
  { source: 'Webhorse Studio', line: 'Gateway fees', figure: 'Razorpay 2% per transaction; Cashfree 1.95% platform fee; GST on top' },
  { source: 'Webhorse Studio', line: 'Product photos and videos', figure: 'About ₹500 to ₹5,000 per product' },
  { source: 'DigitalXBrand', line: 'Shopify app stack (reviews, COD, SMS)', figure: '₹12K to ₹60K a year' },
  { source: 'DigitalXBrand', line: 'Premium WooCommerce theme', figure: '₹4K to ₹15K a year' },
  { source: 'DigitalXBrand', line: 'Cash-on-delivery fee many Indian stores add', figure: '₹30 to ₹80 per order' },
];

const YEAR_ONE_ROWS: { store: string; sales: string; total: string }[] = [
  { store: 'Small Shopify store, about 500 orders', sales: '₹3 lakh', total: '₹1,02,868' },
  { store: 'Growing WooCommerce store, about 1,500 orders', sales: '₹15 lakh', total: '₹2,92,915' },
  { store: 'Custom D2C store with inventory sync and a loyalty programme', sales: '₹50 lakh', total: '₹9,93,200' },
];

const TH = 'p-3 text-left border border-gray-700';
const TD = 'p-3 border border-gray-200 align-top';

export const post: BlogPost = {
  id: '863',
  slug: 'ecommerce-website-development-cost-india',
  title: 'Ecommerce Website Development Cost in India 2026: Custom Stores, Shopify Plans and Running Costs',
  excerpt:
    'What an online store costs in India in 2026, in rupees: custom store ranges, template stores listed apart, B2B builds, Shopify plan prices and the running costs, each from a named source we read on 24 November 2026.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Nov 24, 2026',
  dateModified: 'Nov 24, 2026',
  readTime: '14 min read',
  imageUrl: '/blog-images/ecommerce-website-development-cost-india.webp',
  imageAlt: 'A laptop showing an online store page beside wireframe sketches and colour swatches on a desk',
  meta: {
    title: 'Ecommerce Website Development Cost India 2026: ₹ Ranges',
    description:
      'What an online store costs in India in 2026: custom and template store ranges, Shopify plan prices and yearly running costs, with a source on every figure.',
  },
  keyTakeaways: [
    'Custom stores that connect to payment, shipping or invoicing tools are listed from ₹80,000 (Webhorse Studio, small business store) and ₹1,50,000 (CodeVibe, Mid-range store) up to ₹5,00,000. Where ERP or inventory sync is named, Webhorse Studio and CodeVibe list ₹5 lakh to ₹25 lakh or more.',
    'Template stores on a ready-made theme are listed apart, from ₹25,000 (Webhorse Studio, Basic starter store) to ₹1,50,000 (CodeVibe, Starter store). Do not compare them with the custom rows.',
    'Shopify’s own India page, read on 24 November 2026, lists Basic at ₹1,499 a month billed yearly, Grow at ₹5,599, Advanced at ₹22,680 and Plus from ₹1,75,000, with a fee of 2%, 1%, 0.6% or 0.2% on third-party payments.',
    'Running costs come back every year: CodeVibe lists hosting and domain at ₹5,000 to ₹30,000, a gateway at 2.36% of each order including GST, and maintenance at 15 to 20% of the build. Webhorse Studio’s worked examples put year one 40% to 65% above the build price.',
    'Every figure belongs to a named source and none is a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  cta: {
    eyebrow: 'Your own store, priced',
    heading: 'Send us ten products and the tools the store must connect to',
    body: 'One short call can tell a theme on a ready-made plan from a custom build or a trade store linked to your accounts. FactoryJet quotes a fixed price in writing after that call, and your own products go into a draft theme you can judge before any contract.',
    button: 'Book a scoping call',
    serviceHref: '/ecommerce-development',
    serviceLabel: 'Ecommerce website development in India',
    region: 'in',
    modalVariant: 'default',
  },
  content: (
    <article>
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed text-[#1F2937] mb-0">
          For a custom store that connects to payment, shipping and invoicing tools, the Indian guides we read on 24 November
          2026 list <strong>₹80,000 to ₹5,00,000</strong>: Webhorse Studio’s guide (tiers credited to HTBG’s 2026 guide) lists a small
          business store tier, with shipping and WhatsApp integrations, at ₹80,000 to ₹2 lakh, and CodeVibe’s guide lists a Mid-range store tier at ₹1,50,000 to ₹5,00,000. Where
          ERP, inventory sync or several warehouses are named, Webhorse Studio and CodeVibe list <strong>₹5 lakh to ₹25 lakh
          or more</strong>, and DigitalXBrand lists a WooCommerce build with ERP sync at ₹2,00,000 to ₹5,00,000. Template stores on a ready-made theme are listed apart, from ₹25,000. Shopify’s own plans cost ₹1,499 to ₹22,680
          a month billed yearly, and running the store adds gateway fees, hosting and upkeep.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>Every rupee figure here belongs to someone else.</strong> It comes from an Indian guide or from Shopify’s
          own price list, pulled up on 24 November 2026 and linked at the bottom of the page. A source’s name sits beside
          each row, and the row keeps the label that source gave it. When a source quotes before 18% GST, the text says
          so. When the arithmetic is ours, the text says that too.
        </p>
      </div>

      <p>
        Ask three agencies what an online store costs and you may hear ₹40,000, ₹3 lakh and ₹12 lakh, and all three can be
        honest. A store on a ready-made theme with ten products and a store that talks to your accounts software, your
        courier and your warehouse are priced as different jobs. This page sets the published Indian numbers side by side
        and sorts them by what each one says the store does.
      </p>
      <p>
        Two words come up often, so here they are in plain terms. A <em>custom store</em> is one where the design or the
        features are built for your business instead of installed from a template. An <em>integration</em> is a live
        connection between the store and another tool: a payment gateway, a courier, an invoicing app, or the ERP (the
        software that runs a firm’s stock and accounts). Each connection adds work, which is why it shows up in the price.
      </p>
      <p>
        We are FactoryJet, and we build online stores for businesses across India. We are one of the firms you may compare,
        so we keep our own prices off this page. To see how we work, read our{' '}
        <a href="/ecommerce-development">ecommerce development page</a>, our{' '}
        <a href="/shopify-development">Shopify development page</a>, or our list of the{' '}
        <a href="/blog/best-shopify-development-companies-india">best Shopify development companies in India</a>.
      </p>

      <h2 id="build-cost" className="text-2xl font-bold mt-10 mb-4">What is the ecommerce website development cost in India? Custom stores first, template stores apart</h2>
      <p>
        The tables use each source’s own row labels. The last column says what that source says the row covers. The sources
        define their tiers differently, so rows from different sources are not exact matches. We sort them by what the source
        says the store connects to or builds, not by the size words in the label.
      </p>

      <h3 id="custom-stores" className="text-xl font-bold mt-8 mb-3">Custom stores, as the sources label them</h3>
      <p>
        These rows name custom design or custom features. Most also name something the store connects to: shipping, WhatsApp,
        invoicing, a payment gateway, an ERP or warehouse tools. Where a row names none, the covers column shows it.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Source</th>
              <th className={TH}>Label as printed</th>
              <th className={TH}>Build range</th>
              <th className={TH}>Scope the source gives</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOM_ROWS.map((r) => (
              <tr key={r.source + r.label} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.source}</td>
                <td className={TD}>{r.label}</td>
                <td className={TD}>{r.range}</td>
                <td className={TD}>{r.covers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Rows that call out shipping, invoicing or WhatsApp integrations (Webhorse Studio’s small business store, CodeVibe’s Mid-range store) sit between ₹80,000 and ₹5,00,000. Webhorse Studio’s Mid-scale row names no integration, and DigitalXBrand’s WooCommerce Growth row names Shiprocket and GST without calling them integrations, so neither is counted in that band. Rows that name ERP,
        inventory sync, warehouses or a custom backend run from ₹2,00,000 (DigitalXBrand, WooCommerce Advanced, with ERP
        sync) to ₹25 lakh or more. Webhorse Studio’s Advanced and Enterprise rows, CodeVibe’s Custom or enterprise row and
        DigitalXBrand’s Enterprise row sit at ₹5 lakh and above. Webhorse Studio’s table credits HTBG’s 2026 guide for its
        tiers, adds a second source’s band beside each tier (for example ₹80,000 to ₹2.5 lakh for a small business store, from SolutionBowl), and says Indian agencies almost always quote before tax. We show the first band only.
      </p>

      <h3 id="template-stores" className="text-xl font-bold mt-8 mb-3">Stores on a ready-made theme, listed apart</h3>
      <p>
        Each guide starts with a cheap tier like these. The sources describe a ready-made or lightly set up theme, a small
        product count and one gateway. None says the store connects to your business systems, so keep these rows out of
        any comparison with the custom table.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Source</th>
              <th className={TH}>Label as printed</th>
              <th className={TH}>Build range</th>
              <th className={TH}>Scope the source gives</th>
            </tr>
          </thead>
          <tbody>
            {TEMPLATE_ROWS.map((r) => (
              <tr key={r.source + r.label} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.source}</td>
                <td className={TD}>{r.label}</td>
                <td className={TD}>{r.range}</td>
                <td className={TD}>{r.covers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Sources:{' '}
        <a href="https://www.webhorse.studio/blogs/ecommerce-website-development-cost-in-india" target="_blank" rel="noopener noreferrer">Webhorse Studio</a>, published 5 October 2026, before 18% GST;{' '}
        <a href="https://codevibe.in/blog/ecommerce-website-development-cost-india" target="_blank" rel="noopener noreferrer">CodeVibe</a>, last updated 14 November 2026;{' '}
        <a href="https://digitalxbrand.com/blog/ecommerce-website-development-cost-india" target="_blank" rel="noopener noreferrer">DigitalXBrand</a>, updated 21 November 2026, which says its bands are market-style ranges and not its own rate card. All fetched 24 November 2026.
      </p>
      <p>
        Webhorse Studio adds a floor. It says a professionally built store is rarely under ₹25,000 in 2026 price guides, and
        that cheap offers often leave out the domain, gateway setup, policy pages or the right to the store itself.
      </p>

      <h2 id="b2b-cost" className="text-2xl font-bold mt-10 mb-4">How much does a B2B ecommerce website cost in India?</h2>
      <p>
        A B2B store sells to dealers, distributors and other businesses, so it carries rules a shop for the public does not:
        a price list per customer, login-only catalogues, credit terms and GST e-invoicing. CodeVibe’s B2B guide, updated
        21 November 2026, lists these tiers as ranges it sees quoted across Delhi NCR.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Label as CodeVibe prints it</th>
              <th className={TH}>Range</th>
              <th className={TH}>Scope CodeVibe gives</th>
            </tr>
          </thead>
          <tbody>
            {B2B_ROWS.map((r) => (
              <tr key={r.label} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.label}</td>
                <td className={TD}>{r.range}</td>
                <td className={TD}>{r.covers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Source: <a href="https://codevibe.in/blog/b2b-ecommerce-website-development-india" target="_blank" rel="noopener noreferrer">CodeVibe, B2B ecommerce website development in India</a>, last updated 21 November 2026, fetched 24 November 2026.
      </p>
      <p>
        CodeVibe makes one point worth keeping for any quote: design is rarely the big line on a B2B build, and integration
        usually is. If an agency gives you a low number without asking which ERP you run, CodeVibe says, the integration
        has not been priced yet and will turn up later as a change request.
      </p>

      <h2 id="shopify-cost" className="text-2xl font-bold mt-10 mb-4">How much does it cost to have a Shopify website per month? Shopify pricing in India</h2>
      <p>
        Shopify sets its own plan prices, so these come straight from its India page, checked on 24 November 2026.
        They are Shopify’s figures, not an agency’s. The last column is the fee Shopify lists for payments made through an
        outside provider.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Shopify plan</th>
              <th className={TH}>Billed yearly</th>
              <th className={TH}>Billed monthly</th>
              <th className={TH}>Fee on third-party payment providers</th>
            </tr>
          </thead>
          <tbody>
            {SHOPIFY_ROWS.map((r) => (
              <tr key={r.plan} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.plan}</td>
                <td className={TD}>{r.yearly}</td>
                <td className={TD}>{r.monthly}</td>
                <td className={TD}>{r.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Source: <a href="https://www.shopify.com/in/pricing" target="_blank" rel="noopener noreferrer">Shopify India, Pricing</a>, fetched 24 November 2026. The page also shows 3 days free, then ₹20 a month for 3 months. The page shows no yearly price for Plus, and Webhorse Studio says Plus is not offered yearly. Plans change; check the page before you budget.
      </p>
      <p>
        On those prices, Basic billed yearly comes to ₹17,988 a year (₹1,499 × 12) and Grow to ₹67,188. That is our
        arithmetic on Shopify’s numbers. The plan is only one line. Webhorse Studio and CodeVibe both say Shopify Payments
        is not available in India, so an Indian store takes payments through a gateway such as Razorpay, Cashfree or PayU,
        and Shopify’s fee on third-party payments applies on top of the gateway’s own fee.
      </p>
      <p>
        That fee changes which plan is cheapest. Grow costs ₹4,100 a month more than Basic on yearly billing but charges 1%
        instead of 2%. Divide ₹4,100 by 1% and you get ₹4,10,000. Above about that much in monthly sales through an outside
        provider, Grow costs less overall; CodeVibe reaches the same ₹4.1 lakh a month. The same sum between Advanced and
        Grow gives about ₹42.7 lakh a month, close to CodeVibe’s roughly ₹43 lakh. Both are arithmetic on plan prices and
        fees, and leave out features.
      </p>
      <p>
        Apps are the other monthly line. DigitalXBrand lists a Shopify app stack for reviews, cash on delivery and SMS at
        ₹12K to ₹60K a year. Our <a href="/shopify-development">Shopify development page</a> explains how we set up payments,
        shipping and GST invoices for Indian stores.
      </p>

      <h2 id="platform-cost" className="text-2xl font-bold mt-10 mb-4">Shopify, WooCommerce or custom: what does each cost in India?</h2>
      <p>
        The platform you pick sets both the build price and the bill that follows. Two guides put the three routes side by
        side. Their figures differ, because each defines its builds differently, so we show both.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Source</th>
              <th className={TH}>Platform as printed</th>
              <th className={TH}>Build</th>
              <th className={TH}>Running costs the source lists</th>
            </tr>
          </thead>
          <tbody>
            {PLATFORM_ROWS.map((r) => (
              <tr key={r.source + r.platform} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.source}</td>
                <td className={TD}>{r.platform}</td>
                <td className={TD}>{r.build}</td>
                <td className={TD}>{r.running}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        DigitalXBrand also prints a Shopify plan figure that differs from Shopify’s own price list, so for the plan we use
        Shopify’s page above and keep DigitalXBrand’s rows for apps and maintenance. Webhorse Studio says WooCommerce has no
        sales fee of its own and, at higher volumes, can work out cheaper than Shopify’s lower plans, while asking more of
        you or your developer. CodeVibe says that over two or three years the totals often end up close.
      </p>

      <h2 id="running-cost" className="text-2xl font-bold mt-10 mb-4">How much does it cost to run an eCommerce website?</h2>
      <p>
        The build is paid once. These lines come back. Each row names its source and keeps the source’s wording.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Source</th>
              <th className={TH}>Line</th>
              <th className={TH}>Figure</th>
            </tr>
          </thead>
          <tbody>
            {RUNNING_ROWS.map((r) => (
              <tr key={r.source + r.line} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.source}</td>
                <td className={TD}>{r.line}</td>
                <td className={TD}>{r.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 id="first-year" className="text-xl font-bold mt-8 mb-3">What does the first year add up to?</h3>
      <p>
        Webhorse Studio works three first-year budgets with its own arithmetic. They include 18% GST on the build, platform
        or hosting, extensions, gateway fees, maintenance and a domain, and leave shipping out. It calls them illustrative,
        not quotes.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className={TH}>Store, as Webhorse Studio describes it</th>
              <th className={TH}>Yearly online sales</th>
              <th className={TH}>Store total, year one</th>
            </tr>
          </thead>
          <tbody>
            {YEAR_ONE_ROWS.map((r) => (
              <tr key={r.store} className="odd:bg-white even:bg-gray-50">
                <td className={TD + ' font-semibold'}>{r.store}</td>
                <td className={TD}>{r.sales}</td>
                <td className={TD}>{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Across the three, Webhorse Studio says the first year costs about 40% to 65% more than the build price on its own, and
        suggests you compare quotes on the full first-year figure and not the build line. On gateway fees, its sum for ₹10
        lakh of yearly sales is 2%, or ₹20,000, plus ₹3,600 GST.
      </p>

      <h2 id="average-design-cost" className="text-2xl font-bold mt-10 mb-4">What is the average cost of website design in India, and what does a 20 page website cost?</h2>
      <p>
        The Indian guides print ranges, not a single average, because a brochure site, a store and a portal are different
        jobs. For a regular business website, Webhorse Studio says 20 pages usually falls between ₹30,000 and ₹4.5 lakh,
        depending on how many unique designs it needs. For a store it says page count matters less than product count,
        integrations and checkout rules. If your goal is to sell online, use the store tables above.
      </p>

      <h2 id="hidden-costs" className="text-2xl font-bold mt-10 mb-4">What costs do many ecommerce quotes leave out?</h2>
      <p>
        DigitalXBrand says a quote that looks cheap at ₹50,000 often becomes ₹1.5 lakh in year one once the hidden lines
        surface. The lines the sources name most often are below.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>GST.</strong> Webhorse Studio says website development attracts 18% GST, so a ₹1,00,000 quote becomes ₹1,18,000. GST also applies to gateway fees and maintenance. DigitalXBrand says registered agencies invoice 18% on development.</li>
        <li><strong>Gateway and platform fees.</strong> They rise with sales, unlike the build. CodeVibe puts Razorpay at 2.36% of each order with GST.</li>
        <li><strong>Photos and descriptions.</strong> Webhorse Studio lists product photos and videos at about ₹500 to ₹5,000 per product, and says a Hindi or Marathi store doubles much of the content work.</li>
        <li><strong>Integrations.</strong> Webhorse Studio and CodeVibe both say each connection to a gateway, courier, WhatsApp, ERP or CRM adds development and testing time.</li>
        <li><strong>Cash on delivery.</strong> DigitalXBrand says it avoids gateway fees but raises returns and logistics cost, and many Indian stores add a ₹30 to ₹80 fee or switch it off above a set order value.</li>
      </ul>

      <h2 id="why-quotes-differ" className="text-2xl font-bold mt-10 mb-4">Why do ecommerce quotes in India differ so much?</h2>
      <p>
        CodeVibe names five things that move a quote more than anything else: catalogue size, design, integrations, custom
        features, and traffic headroom for a sale week or festival peak. Its example is plain. Twenty products is a weekend
        of data entry, and five thousand products with variants, filters and bulk imports is a project in itself.
      </p>
      <p>
        Webhorse Studio adds rules that add work: cash-on-delivery limits by pincode, B2B pricing, GST invoices with your
        GSTIN, and coupons that stack. The practical fix is the same in both guides. Give every agency the same brief, and
        ask for an itemised quote.
      </p>

      <h2 id="get-a-quote" className="text-2xl font-bold mt-10 mb-4">How do you get an ecommerce quote you can compare in 6 steps?</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Write a one-page brief.</strong> What you sell, to whom, and roughly how many orders a month.</li>
        <li><strong>Count products and variants.</strong> Webhorse Studio suggests a spreadsheet of your catalogue before the project starts, because delays rarely come from the code.</li>
        <li><strong>List every connection.</strong> Gateway, courier, WhatsApp, accounting, ERP, marketplaces. State whether each one is read-only or also changes data.</li>
        <li><strong>Ask for the quote itemised</strong> by design, development, catalogue setup, integrations and testing, and ask whether GST is included.</li>
        <li><strong>Ask for a first-year figure</strong> that includes platform, hosting, apps and maintenance, not only the build line.</li>
        <li><strong>Ask who owns what.</strong> The store, domain, gateway account and code should be registered in your business’s name. DigitalXBrand suggests milestone payments of 30%, 30%, 30% and 10%, with the last held until you own the domain, hosting and admin access.</li>
      </ol>

      <h2 id="factoryjet-pricing" className="text-2xl font-bold mt-10 mb-4">How does FactoryJet quote an ecommerce build?</h2>
      <p>
        We publish no price list, since a store on a theme and a trade store wired to an ERP share little beyond the word
        store.
        FactoryJet quotes a fixed price in writing after a short scoping call. Ahead of any contract, your products go
        into a draft theme inside a store account you own, and you decide whether it is right. Every phase has its
        own fixed price, paid at milestones. The code and the store accounts remain yours.
      </p>
      <p>
        If a template on a ready-made plan will do the job, we will say so. For more, read about our{' '}
        <a href="/ecommerce-development">ecommerce development service</a>, our{' '}
        <a href="/shopify-development">Shopify development service</a> and our{' '}
        <a href="/blog/best-shopify-development-companies-india">comparison of Shopify development companies in India</a>.
      </p>

      <h2 id="sources" className="text-2xl font-bold mt-10 mb-4">Sources</h2>
      <p className="text-sm text-gray-600">We opened every page below on 24 November 2026. Prices move, so recheck the source before you set a budget.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href="https://www.webhorse.studio/blogs/ecommerce-website-development-cost-in-india" target="_blank" rel="noopener noreferrer">Webhorse Studio, Ecommerce Website Development Cost in India (2026), published 5 October 2026</a></li>
        <li><a href="https://codevibe.in/blog/ecommerce-website-development-cost-india" target="_blank" rel="noopener noreferrer">CodeVibe, Ecommerce Website Development Cost in India (2026 Guide), last updated 14 November 2026</a></li>
        <li><a href="https://codevibe.in/blog/b2b-ecommerce-website-development-india" target="_blank" rel="noopener noreferrer">CodeVibe, B2B Ecommerce Website Development in India (2026), last updated 21 November 2026</a></li>
        <li><a href="https://digitalxbrand.com/blog/ecommerce-website-development-cost-india" target="_blank" rel="noopener noreferrer">DigitalXBrand, E-Commerce Website Development Cost in India (2026 INR Pricing Guide), updated 21 November 2026</a></li>
        <li><a href="https://www.shopify.com/in/pricing" target="_blank" rel="noopener noreferrer">Shopify India, Pricing</a></li>
      </ul>
    </article>
  ),
};
