import visualQa from './ecommerce-website-cost-uk-2026.visual-qa.module.css';
import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Ecommerce website cost guide for the UK (2026).
 * Every pound figure below is a third-party UK market range for a BUILD or a platform move, or a
 * list price from the platform's own page. Each page was fetched and read on 11 October 2026.
 * None of the figures is a FactoryJet price. The page carries no agency hosting, maintenance or
 * retainer price on purpose. Prices that a vendor bills in US dollars stay in that currency.
 * The FAQ array below is the single source for both the visible FAQ and the FAQPage JSON-LD
 * (the blog route maps post.faqs into schema).
 */

const SRC = {
  shopifyPricing: 'https://www.shopify.com/uk/pricing',
  shopifyPlus: 'https://www.shopify.com/uk/plus/pricing',
  shopifyThemes: 'https://themes.shopify.com/themes',
  wooPricing: 'https://woocommerce.com/pricing/',
  wooPayments: 'https://woocommerce.com/document/woopayments/fees-and-debits/fees/',
  stripe: 'https://stripe.com/gb/pricing',
  adobePricing: 'https://business.adobe.com/uk/products/magento/pricing.html',
  adobeOpenSource: 'https://business.adobe.com/uk/products/magento/open-source.html',
  magentoGithub: 'https://github.com/magento/magento2',
  adobeLifecycle: 'https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy',
  bigcommercePricing: 'https://www.bigcommerce.co.uk/pricing/',
  bigcommerceGuide: 'https://www.bigcommerce.co.uk/articles/ecommerce/ecommerce-cost/',
  bigcommercePartner: 'https://partners.bigcommerce.com/directory/partner/468416/courageous',
  designbox: 'https://designbox.co.uk/ecommerce-website-cost-2026/',
  jabu: 'https://www.jabudesigns.co.uk/insights/how-much-does-ecommerce-website-cost',
  authenticStyle: 'https://authenticstyle.co.uk/how-much-does-an-ecommerce-website-cost-uk/',
  cambria: 'https://cambriadigital.co.uk/blog/ecommerce-website-design-cost-uk/',
  digitalOtter: 'https://www.digitalotter.co.uk/blog/how-much-does-an-ecommerce-website-cost-uk',
  diginow: 'https://www.diginow.co.uk/insight/uk-ecommerce-development-cost-at-a-glance',
  jwDigital: 'https://jw-digital.co.uk/blog/how-much-does-an-ecommerce-website-cost-uk',
  whyMatters: 'https://whymatters.co.uk/blog/shopify-agency-pricing-uk',
  futurMedia: 'https://futurmedia.co.uk/shopify-agency-pricing',
  trisec: 'https://trisec.io/shopify-development-cost-uk/',
  nbe: 'https://nbedesign.com/blogs/hub/shopify-agency-pricing-uk-2026-a-transparent-guide-to-costs-and-value',
  openEcommerce: 'https://www.open-ecommerce.org/blog/magento-ecommerce/magento-website-cost-uk/',
  agora: 'https://www.agorastudio.co.uk/pages/magento-to-shopify-migration-cost',
  weBuildStores: 'https://webuildstores.co.uk/insights/shopify-migration-cost-uk/',
  bigEyeDeers: 'https://www.bigeyedeers.co.uk/shopify-migration-cost-uk/',
  imaginaire: 'https://www.imaginaire.co.uk/migrations/magento-to-shopify/',
  meridianWeb: 'https://meridianweb.co.uk/shopify-plus-agency-london.html',
  govVat: 'https://www.gov.uk/vat-rates',
  govVatThreshold: 'https://www.gov.uk/how-vat-works/vat-thresholds',
};

const faqs: FAQItem[] = [
  // Buyer questions, in the buyer's own words
  {
    q: 'How much does an ecommerce website cost in the UK in 2026?',
    a: 'On Designbox figures updated in August 2026, a professionally built store costs £2,000 to £6,000 for a small themed store, £6,000 to £20,000 for a custom store and £20,000 to £50,000 or more for a large one. Five other UK guides we read on 11 October 2026 start their smallest tier at £500 to £3,000 and their largest at £7,000 to £60,000. The platform fee is separate: Shopify lists £19 to £259 a month on yearly billing, and WooCommerce is free software.',
  },
  {
    q: 'Who can migrate my Magento store to Shopify in the UK, and how much does it cost?',
    a: 'Several UK firms publish a price for it. We Build Stores lists fixed prices of £3,495 for a standard Magento store and £5,995 for an enterprise one. Agora Studio lists a fixed £4,999. Imaginaire says its Magento to Shopify migrations start from £25,000. Agora Studio puts typical UK agency quotes at £15,000 to £60,000 over three to six months. FactoryJet also moves Magento stores to Shopify and Shopify Plus, and quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'How much does an ecommerce website cost?',
    a: 'In the UK, published 2026 ranges run from about £500 for an off-the-shelf store to £100,000 or more for a custom or headless build. Authentic Style puts an off-the-shelf store at £500 to £2,000 and a bespoke one at £3,000 to £7,000. Jabu Designs puts a custom-designed Shopify store at £4,000 to £10,000 and a custom or headless build at £25,000 to £100,000 or more. Catalogue size, custom design and the number of systems the store connects to decide where you land.',
  },
  {
    q: 'How much does a Shopify website cost?',
    a: 'There are two costs. Shopify itself lists £25, £65 and £344 a month for Basic, Grow and Advanced on monthly billing, or £19, £49 and £259 on yearly billing. Having the store built is a separate fee. UK guides we read put a themed Shopify build at £1,500 to £6,000 and a custom-designed one at £4,000 to £15,000 (Jabu Designs and Trisec). Why Matters found UK agencies publishing custom build starting prices of £7,500 to £30,000 in September 2026.',
  },
  {
    q: 'How much does ecommerce website design cost?',
    a: 'Design is one part of the build fee. Diginow says custom design from scratch adds £3,000 to £15,000 compared with adapting a bought theme. For Magento, Open eCommerce puts a custom theme at £5,000 to £20,000 or more and a premium theme at £100 to £500 before customisation. On Shopify, the Theme Store listed paid themes at US$150 to US$500 on the first page we opened on 11 October 2026, and it has free themes too.',
  },
  // Google UK question boxes: cost of a build
  {
    q: 'What is the cost of building an eCommerce website?',
    a: 'Digital Otter says most UK businesses pay £4,000 to £15,000 to have a professional store built in 2026. Its tiers are £2,000 to £6,000 for a basic template store, £4,000 to £8,000 for a custom store and £8,000 to £20,000 or more for a large build. Diginow, which also covers enterprise work, puts mid-market custom builds at £10,000 to £40,000 and enterprise, headless and B2B portals at £60,000 to £150,000 or more.',
  },
  {
    q: 'How much does it cost to have a website built in the UK?',
    a: 'For an online shop, six UK guides published or updated in 2026 start at £500 to £3,000 for the smallest store and top out anywhere from £15,000 to £150,000 or more for the largest. Cambria Digital gives £3,000 to £6,000 for a small themed store, £8,000 to £15,000 for a growing business with custom design and integrations, and £25,000 or more for a large bespoke build. A brochure site with no checkout is a smaller job.',
  },
  {
    q: 'How much should I pay someone to build a website for me?',
    a: 'It depends on who builds it. Designbox puts a freelancer at £1,500 to £8,000 for an ecommerce site and an agency at £3,000 to £50,000 or more. Diginow gives UK freelancers at £300 to £800 a day and UK agencies at £50 to £150 an hour. Ask each one for a fixed price against a written scope, so that two quotes cover the same work before you compare the numbers.',
  },
  {
    q: 'What is the cheapest eCommerce website?',
    a: 'The lowest-cost route is to build it yourself on a hosted platform with a free theme. Shopify lists Basic at £19 a month on yearly billing with hosting included, and its offer on 11 October 2026 was three days free, then £1 a month for three months. WooCommerce is free software, though you pay a hosting company to run it. The lowest agency figure we found was £500 to £2,000 for an off-the-shelf store, from Authentic Style.',
  },
  {
    q: 'How long does it take to build an ecommerce website?',
    a: 'Designbox gives 3 to 6 weeks for a small template store, 8 to 14 weeks for a medium custom store and 16 to 30 weeks or more for a large one. Jabu Designs gives 3 to 5 weeks for a starter Shopify store and 10 to 16 weeks for a larger build. At FactoryJet, a store with a custom theme takes 3 to 5 weeks, an advanced store with subscriptions, B2B pricing or a migration takes 5 to 8 weeks, and a headless or custom build takes 8 to 14 weeks.',
  },
  // Shopify
  {
    q: 'How much does a website cost through Shopify?',
    a: 'Shopify charges a monthly plan fee and a fee on each card payment. On its UK pricing page on 11 October 2026 the plans were £25, £65 and £344 a month, or £19, £49 and £259 on yearly billing, with card rates from 2 per cent plus 25p on Basic down to 1.5 per cent plus 25p on Advanced. Shopify says there are no setup fees. Design and build by an agency is a separate, one-off cost.',
  },
  {
    q: 'How much does it cost to make a Shopify website?',
    a: 'If you make it yourself, the cost is the Shopify plan, from £19 a month on yearly billing, and a theme, which is free or US$150 to US$500 on the first page of the Theme Store we opened. If a UK agency makes it, Trisec gives £2,500 to £6,000 for theme setup and launch, £6,000 to £15,000 for a customised store and £15,000 to £35,000 or more for an advanced custom build.',
  },
  {
    q: 'How much does Shopify cost per month in the UK?',
    a: 'On the Shopify UK pricing page, read on 11 October 2026, Basic is £25 a month, Grow is £65 and Advanced is £344 when you pay monthly. Paying yearly brings them to £19, £49 and £259 a month. Shopify Plus starts at £1,800 a month on a three-year term or £1,950 on a one-year term. The page does not say whether VAT is added, so check your invoice.',
  },
  {
    q: 'Is the Shopify website expensive?',
    a: 'The plan is one of the smaller costs. Basic is £19 a month on yearly billing, which is £228 a year. Card fees are charged on every order, from 2 per cent plus 25p on Basic. The build is the largest one-off cost if an agency does it: from £1,500 for a themed starter store on Jabu Designs figures to £30,000 or more for Shopify Plus work on Trisec figures.',
  },
  {
    q: 'How much does Shopify take from a $100 sale?',
    a: 'UK stores are charged in pounds, so take a £100 sale. On the Basic plan with Shopify Payments, the UK online card rate is 2 per cent plus 25p, which is £2.25. On Advanced it is 1.5 per cent plus 25p, which is £1.75. If you use another payment provider, Shopify adds a third-party transaction fee of 2 per cent on Basic, 1 per cent on Grow and 0.6 per cent on Advanced, on top of what that provider charges.',
  },
  {
    q: 'How much do Shopify themes cost?',
    a: 'Shopify has free themes and paid ones. On 11 October 2026 the first page of the Shopify Theme Store showed 24 of 1,312 themes, priced from US$150 to US$500 each, and the store has a filter for free themes. Prices there are in US dollars. A theme designed and built for you is agency work: Futur Media, a UK Shopify agency, publishes a theme build from £3,500 and a fully custom build from £7,500.',
  },
  {
    q: 'How much does a Shopify Plus website cost in the UK?',
    a: 'The plan starts at £1,800 a month on a three-year term or £1,950 on a one-year term, on the Shopify UK page we read on 11 October 2026. The build is separate. Why Matters found UK agencies publishing Shopify Plus starting prices of £9,999 to £30,000 in September 2026. Trisec says Shopify Plus or headless work is usually £30,000 or more, and NB eCommerce and Design puts enterprise and Plus projects at £50,000 to £150,000 or more.',
  },
  {
    q: 'Is there a cheaper option than Shopify?',
    a: 'On plan price, yes. WooCommerce is free software with no monthly subscription, though you pay for hosting and any paid extensions, which WooCommerce lists at US$29 to US$299 a year each. BigCommerce lists its Core plan at US$29 a month billed annually, in US dollars and before VAT. Shopify Basic is £19 a month on yearly billing. Compare the build fee and the card rates as well as the plan price before you choose.',
  },
  // WooCommerce
  {
    q: 'Is WooCommerce website free?',
    a: 'The software is. WooCommerce describes itself as free and open source, with no monthly subscription, platform fee or revenue share. A WooCommerce shop still costs money to build and run: you need WordPress hosting, a domain and usually some paid extensions, and most businesses pay someone to design and build it. UK guides put that build at £3,000 to £12,000 (Diginow) or £5,000 to £15,000 (Cambria Digital).',
  },
  {
    q: 'What fees does WooCommerce charge in the UK?',
    a: 'WooCommerce charges no platform fee and takes no share of sales. You pay whichever payment provider you choose. WooPayments, its own service, lists UK cards at 1.5 per cent plus 25p, with 2 per cent more for international cards. Stripe lists 1.5 per cent plus 20p for standard UK cards. Paid extensions are listed at US$29 to US$299 a year each on the WooCommerce pricing page.',
  },
  {
    q: 'Which one is better, Shopify or WooCommerce?',
    a: 'Neither wins for everyone. Shopify suits a business that wants hosting, security and checkout handled by the platform for a fixed monthly fee. WooCommerce suits a business that already runs WordPress, wants to own the code and the hosting, or has product rules a hosted platform does not handle. UK build ranges overlap: Cambria Digital gives £2,500 to £8,000 for Shopify and £5,000 to £15,000 for WooCommerce. Choose on fit first and price second.',
  },
  // Magento and BigCommerce
  {
    q: 'Is Magento still free?',
    a: 'Magento Open Source is. Its code is published on GitHub under the Open Software License 3.0, and Adobe offers it as a download. Adobe Commerce, the paid edition, has no public price: the UK pricing page lists three packages, each with a Get pricing button. Open eCommerce, a UK Magento specialist, says the licence starts at £20,000 or more a year. Free software still has a build cost, which Open eCommerce puts at £3,000 to £25,000 or more for development.',
  },
  {
    q: 'Is Magento end of life?',
    a: 'No. Adobe released Adobe Commerce 2.4.9 on 12 May 2026 and lists standard support for it until 31 May 2029. Each version gets three years of standard support from its release date, so older versions do run out: version 2.4.6 left standard support on 11 August 2026. If your store runs an old version, the choice is an upgrade or a move to another platform, and both are priced as projects.',
  },
  {
    q: 'How can I migrate my Magento store to Shopify?',
    a: 'In five steps. List what the Magento store does today, including every extension and custom rule. Export products, customers and orders, and clean the data. Rebuild the theme and replace each extension with a Shopify app or custom code. Map every old web address to its new one so search rankings carry over. Test checkout, tax and integrations on a private copy before you switch. FactoryJet does this work and quotes a fixed price in writing after a short scoping call.',
  },
  {
    q: 'How much does a BigCommerce website cost in the UK?',
    a: 'BigCommerce bills in US dollars. Its UK site lists Core at US$39 a month, Growth at US$105 and Scale at US$399, or US$29, US$79 and US$299 billed annually, with Performance from US$1,499 a month, all before VAT. We found one build price in pounds: Courageous, an agency in the BigCommerce partner directory, says its headless builds start at £7,500. The cost guide on the BigCommerce UK site gives build ranges in US dollars only.',
  },
  // Rates, VAT and running
  {
    q: 'How much do web designers charge in the UK?',
    a: 'For ecommerce work, published UK rates in 2026 run from £50 to £150 an hour. Open eCommerce says London developers typically charge £75 to £120 an hour and £50 to £90 outside London. NB eCommerce and Design says UK Shopify agency rates typically sit at £90 to £150 an hour. Why Matters found one UK agency publishing £150 an hour and another a £460 day rate. Ask for a fixed project price against a written scope.',
  },
  {
    q: 'Do UK ecommerce website prices include VAT?',
    a: 'Assume they do not until the quote says so. None of the nine UK build guides we cite states whether its ranges include VAT. BigCommerce says its plan prices exclude it. The standard UK VAT rate is 20 per cent, which adds £2,000 to a £10,000 build. Ask every supplier to put the VAT basis in writing, and ask your accountant how much of the VAT you can reclaim.',
  },
  {
    q: 'What does it cost to run an ecommerce website after launch?',
    a: 'The platform fee is public. Shopify lists £19 to £259 a month on yearly billing and Shopify Plus from £1,800 a month, with hosting included. WooCommerce and Magento Open Source are free software that you host yourself. Card fees are charged on each order by your payment provider. For support after launch, FactoryJet quotes the build and the ongoing support as two fixed prices in writing after a short scoping call, and keeps managing the servers, integrations and maintenance so your team does not have to.',
  },
];

export const post: BlogPost = {
  id: '764',
  slug: 'ecommerce-website-cost-uk-2026',
  title: 'Ecommerce Website Cost in the UK (2026): Build Prices in Pounds for Shopify, Shopify Plus, WooCommerce, Magento and BigCommerce',
  excerpt:
    'What an ecommerce website costs to have built in the UK in 2026, in pounds: Shopify, Shopify Plus, WooCommerce, Magento, Adobe Commerce and BigCommerce, by platform and by size of project. Every figure is a published UK market range or a platform list price, with its source, date and VAT basis.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Oct 11, 2026',
  dateModified: 'Oct 11, 2026',
  readTime: '22 min read',
  imageUrl: '/images/blog/ecommerce-website-cost-uk-2026/ecommerce-website-cost-uk-hero.webp',
  imageAlt:
    'A woman with auburn hair and a navy jumper places a folded cream knitted scarf into a plain brown cardboard box on a wooden packing bench, with white shelves of plain boxes behind her and an orange tape dispenser on the bench',
  meta: {
    title: 'Ecommerce Website Cost UK 2026: Prices by Platform | FactoryJet',
    description:
      'What an ecommerce website costs to have built in the UK in 2026, in pounds: Shopify, Shopify Plus, WooCommerce, Magento and BigCommerce, with sources.',
  },
  keyTakeaways: [
    'A professionally built UK ecommerce website runs from £2,000 to £6,000 for a small themed store to £20,000 to £50,000 or more for a large one (Designbox, updated 30 August 2026).',
    'Six UK guides agree on the small end and split on the large end: the top tier starts anywhere from £7,000 to £60,000, because each guide means a different size of project.',
    'Shopify lists £25, £65 and £344 a month on monthly billing (£19, £49 and £259 on yearly billing) and Shopify Plus from £1,800 a month, on its UK pricing page read on 11 October 2026.',
    'WooCommerce and Magento Open Source are free software. Adobe publishes no price for Adobe Commerce, and BigCommerce bills in US dollars before VAT.',
    'Published UK prices to move a Magento store to Shopify start at £3,000 to £5,000 for standard or fixed packages (Big Eye Deers, We Build Stores, Agora Studio) and reach £25,000 or more (Imaginaire).',
    'None of the nine UK build guides we cite says whether its ranges include VAT at 20 per cent. Ask for the basis in writing.',
    'These are market ranges from named sources. FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">
          The short answer
        </p>
        <p className="text-lg leading-relaxed text-[#1F2937] mb-0">
          A professionally built UK ecommerce website costs <strong>£2,000 to £6,000</strong> for a small themed store,{' '}
          <strong>£6,000 to £20,000</strong> for a custom store and <strong>£20,000 to £50,000 or more</strong> for a
          large one (Designbox, August 2026). Platform fees are separate: Shopify lists{' '}
          <strong>£19 to £259 a month</strong> on yearly billing, and Shopify Plus starts at{' '}
          <strong>£1,800 a month</strong>.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>These are market ranges. None is a FactoryJet price.</strong> Every build figure on this page comes from
          a named UK agency guide or price page. Every platform price comes from that platform&apos;s own pricing page. We
          opened and read each page on 11 October 2026, and each one is linked in the sources list at the end. The few sums
          are our own arithmetic on those published figures. Where a platform bills in US dollars we have left the price in
          dollars, because a pound figure would move with the exchange rate. Each table says whether its source quotes with
          or without VAT, or that the source does not state it.
        </p>
      </div>

      <p>
        This page draws on 17 agency pages that put a UK price on an ecommerce build or a move between platforms, plus the
        pricing pages of Shopify, WooCommerce, Adobe and BigCommerce. Six of the agency guides price by size of project.
        They agree at the small end, where the lowest tier starts at £500 to £3,000. They split at the large end, where
        the top tier starts anywhere from £7,000 to £60,000. Nine guides gave build ranges we could set side by side:
        Designbox, Jabu Designs, Authentic Style, Cambria Digital, Digital Otter, Diginow, JW Digital, Trisec and Open
        eCommerce. None of the nine says whether VAT is included.
      </p>
      <p>
        Below, those numbers sit in one place. You get the build fee by platform (Shopify, Shopify Plus, WooCommerce,
        Magento and Adobe Commerce, BigCommerce) and by size of project, each platform&apos;s own list price beside it, and
        the published prices for moving a Magento store to Shopify.
      </p>
      <p>
        We are FactoryJet. We design, build, launch and support ecommerce stores on Shopify, Shopify Plus, WooCommerce and
        Magento, and we work remotely with UK clients. We are one of the firms you might compare, so we have kept our own
        prices off this page on purpose. FactoryJet is a registered Shopify Partner, was founded in 2014 by Bhavesh Barot
        and has served more than 500 businesses.
      </p>
      <p>
        For one number for your own store in place of a range,{' '}
        <a href="https://calendly.com/bhavesh-factoryjet/30min" target="_blank" rel="noopener noreferrer">
          book a 30-minute call with the founder
        </a>
        .
      </p>

      <h2 id="summary">Ecommerce website cost in the UK at a glance (2026)</h2>
      <p>
        One table, seven rows. Each row shows what the platform itself charges, what UK agencies say a build costs, and
        whether VAT is stated.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Platform</th>
              <th className="p-3 text-left border border-gray-700">What the platform charges (its own page)</th>
              <th className="p-3 text-left border border-gray-700">UK build range (named source)</th>
              <th className="p-3 text-left border border-gray-700">VAT basis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Shopify</td>
              <td className="p-3 border border-gray-200">£25, £65 or £344 a month on monthly billing; £19, £49 or £259 on yearly billing (<a href={SRC.shopifyPricing} target="_blank" rel="noopener noreferrer">Shopify UK pricing</a>)</td>
              <td className="p-3 border border-gray-200">Themed £1,500 to £6,000; custom-designed £4,000 to £15,000 (<a href={SRC.jabu} target="_blank" rel="noopener noreferrer">Jabu Designs</a>, <a href={SRC.trisec} target="_blank" rel="noopener noreferrer">Trisec</a>); advanced custom £15,000 to £35,000+ (Trisec)</td>
              <td className="p-3 border border-gray-200">Not stated by Shopify or by either guide</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Shopify Plus</td>
              <td className="p-3 border border-gray-200">From £1,800 a month on a three-year term or £1,950 on a one-year term (<a href={SRC.shopifyPlus} target="_blank" rel="noopener noreferrer">Shopify Plus pricing</a>)</td>
              <td className="p-3 border border-gray-200">Published starting prices £9,999 to £30,000 (<a href={SRC.whyMatters} target="_blank" rel="noopener noreferrer">Why Matters</a> sample); usually £30,000+ (Trisec); £50,000 to £150,000+ (<a href={SRC.nbe} target="_blank" rel="noopener noreferrer">NB eCommerce and Design</a>)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">WooCommerce</td>
              <td className="p-3 border border-gray-200">Free software with no monthly subscription (<a href={SRC.wooPricing} target="_blank" rel="noopener noreferrer">WooCommerce pricing</a>)</td>
              <td className="p-3 border border-gray-200">£3,000 to £12,000 (<a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow</a>); £5,000 to £15,000 (<a href={SRC.cambria} target="_blank" rel="noopener noreferrer">Cambria Digital</a>); £10,000 to £25,000 for WooCommerce or a larger Shopify build (Jabu Designs)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Magento Open Source</td>
              <td className="p-3 border border-gray-200">Open-source code under the Open Software License 3.0, so there is no plan to buy (<a href={SRC.magentoGithub} target="_blank" rel="noopener noreferrer">Magento on GitHub</a>)</td>
              <td className="p-3 border border-gray-200">Development £3,000 to £25,000+ (<a href={SRC.openEcommerce} target="_blank" rel="noopener noreferrer">Open eCommerce</a>); setup £5,000 to £20,000+ (<a href={SRC.designbox} target="_blank" rel="noopener noreferrer">Designbox</a>)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Adobe Commerce</td>
              <td className="p-3 border border-gray-200">No public price. Adobe quotes each customer (<a href={SRC.adobePricing} target="_blank" rel="noopener noreferrer">Adobe Commerce pricing</a>)</td>
              <td className="p-3 border border-gray-200">No UK build range in pounds found for Adobe Commerce by itself. Agency estimates of the licence: £20,000+ a year (Open eCommerce); £20,000 to £50,000+ (Diginow)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">BigCommerce</td>
              <td className="p-3 border border-gray-200">US$39, US$105 or US$399 a month; US$29, US$79 or US$299 billed annually; Performance from US$1,499 (<a href={SRC.bigcommercePricing} target="_blank" rel="noopener noreferrer">BigCommerce UK pricing</a>)</td>
              <td className="p-3 border border-gray-200">Headless builds from £7,500 at one agency in the <a href={SRC.bigcommercePartner} target="_blank" rel="noopener noreferrer">BigCommerce partner directory</a>. No UK guide in pounds found</td>
              <td className="p-3 border border-gray-200">Plan prices exclude VAT</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Custom or headless build</td>
              <td className="p-3 border border-gray-200">No platform plan, or a platform plan plus custom code</td>
              <td className="p-3 border border-gray-200">£15,000 to £40,000+ (Cambria Digital); £25,000 to £100,000+ (Jabu Designs); £60,000 to £150,000+ for enterprise, headless and B2B portals (Diginow)</td>
              <td className="p-3 border border-gray-200">Not stated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="cost-by-size">How much does an ecommerce website cost in the UK, by size of project?</h2>
      <p>
        Six UK guides price by size. We have lined their tiers up from the lowest start to the highest. All six were
        published or updated in 2026.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Guide and date</th>
              <th className="p-3 text-left border border-gray-700">Smallest tier</th>
              <th className="p-3 text-left border border-gray-700">Middle tier</th>
              <th className="p-3 text-left border border-gray-700">Largest tier</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.authenticStyle} target="_blank" rel="noopener noreferrer">Authentic Style</a>, updated 29 September 2026</td>
              <td className="p-3 border border-gray-200">£500 to £2,000, off-the-shelf store</td>
              <td className="p-3 border border-gray-200">£3,000 to £7,000, bespoke store</td>
              <td className="p-3 border border-gray-200">£7,000 to £15,000, bespoke with complex functions</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.jabu} target="_blank" rel="noopener noreferrer">Jabu Designs</a>, 2026 guide</td>
              <td className="p-3 border border-gray-200">£1,500 to £3,500, starter Shopify with up to 30 products</td>
              <td className="p-3 border border-gray-200">£4,000 to £10,000, custom-designed Shopify; £10,000 to £25,000, WooCommerce or larger Shopify</td>
              <td className="p-3 border border-gray-200">£25,000 to £100,000+, custom or headless</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow</a>, 17 August 2026</td>
              <td className="p-3 border border-gray-200">£1,500 to £8,000, template build</td>
              <td className="p-3 border border-gray-200">£10,000 to £40,000, mid-market custom build</td>
              <td className="p-3 border border-gray-200">£60,000 to £150,000+, enterprise, headless and B2B portals</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.designbox} target="_blank" rel="noopener noreferrer">Designbox</a>, updated 30 August 2026</td>
              <td className="p-3 border border-gray-200">£2,000 to £6,000, starter store</td>
              <td className="p-3 border border-gray-200">£6,000 to £20,000, custom store</td>
              <td className="p-3 border border-gray-200">£20,000 to £50,000+, enterprise store</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.digitalOtter} target="_blank" rel="noopener noreferrer">Digital Otter</a>, 25 June 2026</td>
              <td className="p-3 border border-gray-200">£2,000 to £6,000, basic template store</td>
              <td className="p-3 border border-gray-200">£4,000 to £8,000, custom store</td>
              <td className="p-3 border border-gray-200">£8,000 to £20,000+, large or custom build</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.cambria} target="_blank" rel="noopener noreferrer">Cambria Digital</a>, updated 19 July 2026</td>
              <td className="p-3 border border-gray-200">£3,000 to £6,000, small themed store</td>
              <td className="p-3 border border-gray-200">£8,000 to £15,000, custom design and integrations</td>
              <td className="p-3 border border-gray-200">£25,000+, large bespoke build</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">VAT</td>
              <td className="p-3 border border-gray-200" colSpan={3}>None of the six guides states whether its ranges include VAT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Read down the first column of prices and the small end is steady. Five of the six guides start their lowest tier
        between £1,500 and £3,000, and the sixth, Authentic Style, goes down to £500 for an off-the-shelf store. The large
        end is where they part. Authentic Style and Digital Otter top out at £15,000 and £20,000 or more. Both draw on
        their own project prices, and Authentic Style says its bespoke stores are typically £4,000 to £8,000. Diginow
        starts its top tier at £60,000 because that tier takes in ERP links, product information systems and headless
        builds.
      </p>
      <p>
        Two terms, in plain words. An ERP is the software that runs stock, orders and accounts in one place. A headless
        build is a shop front written as custom code that talks to the platform behind it. So when a guide says
        &quot;large&quot;, check what sits inside the tier before you compare the number.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ecommerce-website-cost-uk-2026/parcels-three-sizes.webp"
          alt="A man with a white beard and a denim apron rests his hand on the middle of three plain brown parcels lined up small, medium and large on a white bench, the largest sealed with orange tape"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Small, medium and large mean different things in each guide, so check what is inside the tier.
        </figcaption>
      </figure>

      <h3 id="what-each-size-includes">What each size usually includes</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Small or starter.</strong> A ready-made theme set up in your brand, the essential pages, a standard
          checkout and a short product list. Designbox draws the line at about 100 products and Jabu Designs at 30.
          Designbox gives 3 to 6 weeks for the build.
        </li>
        <li>
          <strong>Custom.</strong> A design made for your brand, product filters and search, and links to payment, email
          or CRM tools. A CRM is the system that holds your customer records. Jabu Designs puts this tier at 30 to 500
          products and 6 to 10 weeks.
        </li>
        <li>
          <strong>Large or enterprise.</strong> A fully custom build with ERP or fulfilment links and more than one
          currency or language. Designbox gives 16 to 30 weeks or more.
        </li>
      </ul>

      <h2 id="shopify-cost">Shopify website cost in the UK</h2>
      <p>
        Shopify is a hosted platform. You pay a monthly plan, and Shopify runs the hosting, security and checkout. Its UK
        pricing page showed these prices in pounds on 11 October 2026.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Plan (<a href={SRC.shopifyPricing} target="_blank" rel="noopener noreferrer" className="text-white underline">Shopify UK</a>, read 11 October 2026)</th>
              <th className="p-3 text-left border border-gray-700">Monthly billing</th>
              <th className="p-3 text-left border border-gray-700">Yearly billing, per month</th>
              <th className="p-3 text-left border border-gray-700">UK online card rate with Shopify Payments</th>
              <th className="p-3 text-left border border-gray-700">Fee if you use another payment provider</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Basic</td>
              <td className="p-3 border border-gray-200">£25</td>
              <td className="p-3 border border-gray-200">£19</td>
              <td className="p-3 border border-gray-200">2% + 25p</td>
              <td className="p-3 border border-gray-200">2%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Grow</td>
              <td className="p-3 border border-gray-200">£65</td>
              <td className="p-3 border border-gray-200">£49</td>
              <td className="p-3 border border-gray-200">1.7% + 25p</td>
              <td className="p-3 border border-gray-200">1%</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Advanced</td>
              <td className="p-3 border border-gray-200">£344</td>
              <td className="p-3 border border-gray-200">£259</td>
              <td className="p-3 border border-gray-200">1.5% + 25p</td>
              <td className="p-3 border border-gray-200">0.6%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Plus</td>
              <td className="p-3 border border-gray-200" colSpan={2}>From £1,800 a month on a three-year term, or £1,950 on a one-year term</td>
              <td className="p-3 border border-gray-200">1.3% + 25p</td>
              <td className="p-3 border border-gray-200">0.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Shopify says there are no setup fees on any plan and that hosting and an SSL certificate are included. Its offer
        that day was three days free, then £1 a month for three months. The page does not say whether VAT is added to the
        plan price.
      </p>
      <p>
        The card rate is the cost that rises with your sales. On Basic, a £100 order paid with a UK card through Shopify
        Payments costs 2 per cent plus 25p, which is <strong>£2.25</strong>. On Advanced the same order costs £1.75. If
        you use another payment provider, Shopify adds its own fee on top of that provider&apos;s charge: 2 per cent on
        Basic, 1 per cent on Grow, 0.6 per cent on Advanced and 0.2 per cent on Plus.
      </p>

      <h3 id="shopify-build-cost">What a UK agency charges to build a Shopify store</h3>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">Themed or starter store</th>
              <th className="p-3 text-left border border-gray-700">Custom-designed store</th>
              <th className="p-3 text-left border border-gray-700">Advanced or larger build</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.jabu} target="_blank" rel="noopener noreferrer">Jabu Designs</a></td>
              <td className="p-3 border border-gray-200">£1,500 to £3,500</td>
              <td className="p-3 border border-gray-200">£4,000 to £10,000</td>
              <td className="p-3 border border-gray-200">£10,000 to £25,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.trisec} target="_blank" rel="noopener noreferrer">Trisec</a>, July 2026</td>
              <td className="p-3 border border-gray-200">£2,500 to £6,000</td>
              <td className="p-3 border border-gray-200">£6,000 to £15,000</td>
              <td className="p-3 border border-gray-200">£15,000 to £35,000+</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.nbe} target="_blank" rel="noopener noreferrer">NB eCommerce and Design</a>, 2 May 2026</td>
              <td className="p-3 border border-gray-200">£5,000 to £12,000</td>
              <td className="p-3 border border-gray-200">£15,000 to £40,000</td>
              <td className="p-3 border border-gray-200">£50,000 to £150,000+, enterprise and Plus</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.cambria} target="_blank" rel="noopener noreferrer">Cambria Digital</a></td>
              <td className="p-3 border border-gray-200" colSpan={2}>£2,500 to £8,000 for a professionally designed Shopify store</td>
              <td className="p-3 border border-gray-200">Not given for Shopify</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.jwDigital} target="_blank" rel="noopener noreferrer">JW Digital</a>, 31 July 2026</td>
              <td className="p-3 border border-gray-200">£2,000 to £5,000 for a small Shopify store</td>
              <td className="p-3 border border-gray-200">Not given for Shopify</td>
              <td className="p-3 border border-gray-200">Not given for Shopify</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.whyMatters} target="_blank" rel="noopener noreferrer">Why Matters</a>, starting prices UK agencies publish, collected 19 September 2026</td>
              <td className="p-3 border border-gray-200">From £1,200 to £3,500</td>
              <td className="p-3 border border-gray-200" colSpan={2}>From £7,500 to £30,000</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.futurMedia} target="_blank" rel="noopener noreferrer">Futur Media</a>, its own price page</td>
              <td className="p-3 border border-gray-200">From £3,500</td>
              <td className="p-3 border border-gray-200">From £7,500</td>
              <td className="p-3 border border-gray-200">From £15,000, Plus and complex projects</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Why Matters, a UK Shopify agency, took a different route from the other guides. On 19 September 2026 it collected
        the prices UK Shopify agencies publish on their own sites. Setup and theme work started at £1,200 to £3,500 and
        custom builds at £7,500 to £30,000. It calls these starting prices and warns that each one has a different scope
        behind it. It also counted 456 UK partners in the Shopify Partner Directory. Of the first 16 listings, 11 showed a
        price and 5 said contact only. We checked one of its sources ourselves, and Futur Media still lists the same three
        starting prices.
      </p>
      <p>
        Themes are a small part of the bill. The first page of the{' '}
        <a href={SRC.shopifyThemes} target="_blank" rel="noopener noreferrer">Shopify Theme Store</a> showed 24 of 1,312
        themes on 11 October 2026, priced from US$150 to US$500 each, and the store has a filter for free ones. A theme
        designed and coded for you is the custom tier in the table. For the work behind these numbers, see our{' '}
        <a href="/uk/shopify-development">Shopify development for UK brands</a>.
      </p>

      <h2 id="shopify-plus-cost">Shopify Plus cost in the UK</h2>
      <p>
        Shopify Plus is the plan for larger and more complex stores.{' '}
        <a href={SRC.shopifyPlus} target="_blank" rel="noopener noreferrer">Shopify lists it</a> from{' '}
        <strong>£1,800 a month on a three-year term</strong> or £1,950 a month on a one-year term, and says more complex,
        higher-volume businesses move to a variable platform fee based on revenue. Over a three-year term the starting fee
        adds up to £64,800 (36 x £1,800), before any build. The plan includes your main store and nine expansion stores.
        Extra stores are £250 a month each.
      </p>
      <p>
        What the step up buys, on Shopify&apos;s own comparison table: a fully customisable checkout, unlimited B2B
        catalogues where the lower plans have up to three, unlimited staff accounts and a card rate from 1.3 per cent plus
        25p. B2B means selling to other businesses, often at prices set for each customer.
      </p>
      <p>
        Build prices for Plus spread widely. Why Matters found five UK agencies publishing a Plus starting price:
        MeridianWeb from £9,999, Flex Commerce from £13,500, Futur Media from £15,000, Rococo Digital from £20,000 and
        Imaginaire from £30,000. Trisec says Shopify Plus or headless work is usually £30,000 or more. NB eCommerce and
        Design puts enterprise and Plus projects at £50,000 to £150,000 or more. The gap comes from scope. At one end is a
        Plus plan with a theme rebuild. At the other are several storefronts, trade pricing and an ERP link. We cover that
        work on our <a href="/uk/shopify-plus">Shopify Plus page for UK brands</a>.
      </p>

      <h2 id="woocommerce-cost">WooCommerce website cost in the UK</h2>
      <p>
        WooCommerce is free software that adds a shop to a WordPress website. Its{' '}
        <a href={SRC.wooPricing} target="_blank" rel="noopener noreferrer">own pricing page</a> says it is free to
        download and use, with no monthly subscription, no platform fee and no revenue share. You choose and pay a hosting
        company, and you buy only the extensions you need. WooCommerce lists those at US$29 to US$299 a year each.
      </p>
      <p>Because the software is free, the build is nearly the whole upfront cost. Four UK guides price it.</p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">WooCommerce build range</th>
              <th className="p-3 text-left border border-gray-700">What the range covers</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow</a>, 17 August 2026</td>
              <td className="p-3 border border-gray-200">£3,000 to £12,000</td>
              <td className="p-3 border border-gray-200">A platform-based build, with more development time than Shopify for hosting, plugin choice and security</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.cambria} target="_blank" rel="noopener noreferrer">Cambria Digital</a>, updated 19 July 2026</td>
              <td className="p-3 border border-gray-200">£5,000 to £15,000</td>
              <td className="p-3 border border-gray-200">Depends on catalogue size, custom features and whether the theme is bespoke</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.jwDigital} target="_blank" rel="noopener noreferrer">JW Digital</a>, 31 July 2026</td>
              <td className="p-3 border border-gray-200">£8,000 to £25,000+</td>
              <td className="p-3 border border-gray-200">Custom WooCommerce or headless builds</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.jabu} target="_blank" rel="noopener noreferrer">Jabu Designs</a></td>
              <td className="p-3 border border-gray-200">£10,000 to £25,000</td>
              <td className="p-3 border border-gray-200">WooCommerce or a larger Shopify build with a complex catalogue and several integrations</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Card fees depend on the provider you pick.{' '}
        <a href={SRC.wooPayments} target="_blank" rel="noopener noreferrer">WooPayments</a> lists UK cards at 1.5 per cent
        plus 25p, and <a href={SRC.stripe} target="_blank" rel="noopener noreferrer">Stripe</a> lists standard UK cards at
        1.5 per cent plus 20p. WooCommerce adds no fee of its own. Cambria Digital sums up the trade: you own the
        database, the code and the hosting, and in return you take on more upkeep than a hosted platform asks of you. We
        build and support WooCommerce stores on our <a href="/uk/woocommerce">WooCommerce page for UK businesses</a>.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">Get the number for your own store</h3>
        <p className="mb-4">
          Bring your product count, the platform you have in mind and the systems the store needs to talk to. In a
          30-minute call with founder Bhavesh Barot we will tell you which tier your store sits in and which platform fits
          it. FactoryJet quotes a fixed price in writing after a short scoping call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="magento-cost">Magento and Adobe Commerce cost in the UK</h2>
      <p>
        Magento comes in two editions, and the cost question has a different answer for each.
      </p>
      <p>
        <strong>Magento Open Source</strong> is the open-source edition. Its code is on{' '}
        <a href={SRC.magentoGithub} target="_blank" rel="noopener noreferrer">GitHub under the Open Software License 3.0</a>{' '}
        and <a href={SRC.adobeOpenSource} target="_blank" rel="noopener noreferrer">Adobe offers it as a download</a>, so
        there is no plan to buy. You pay developers to build on it and a hosting company to run it.
      </p>
      <p>
        <strong>Adobe Commerce</strong> is the paid edition, and Adobe publishes no price for it. Its{' '}
        <a href={SRC.adobePricing} target="_blank" rel="noopener noreferrer">UK pricing page</a> lists three packages
        (Adobe Commerce as a Cloud Service, Adobe Commerce on Cloud and Adobe Commerce Optimizer), and each one ends in a
        Get pricing button. Two UK sources estimate the licence. Open eCommerce says it starts at £20,000 or more a year.
        Diginow says Adobe Commerce and BigCommerce enterprise licences add £20,000 to £50,000 or more before development
        begins. Treat both as agency estimates, because Adobe quotes each customer.
      </p>
      <p>
        For the build,{' '}
        <a href={SRC.openEcommerce} target="_blank" rel="noopener noreferrer">Open eCommerce</a>, a London worker
        co-operative that builds Magento stores, published this breakdown on 23 April 2026. It says the figures come from
        what it charges.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Magento project type (Open eCommerce)</th>
              <th className="p-3 text-left border border-gray-700">Estimated hours</th>
              <th className="p-3 text-left border border-gray-700">Cost at £85 an hour</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Basic catalogue store on a premium theme</td>
              <td className="p-3 border border-gray-200">40 to 60</td>
              <td className="p-3 border border-gray-200">£3,400 to £5,100</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Mid-size consumer store with some custom work</td>
              <td className="p-3 border border-gray-200">80 to 120</td>
              <td className="p-3 border border-gray-200">£6,800 to £10,200</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">B2B wholesale store with custom features</td>
              <td className="p-3 border border-gray-200">150 to 250</td>
              <td className="p-3 border border-gray-200">£12,750 to £21,250</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Full custom build with integrations</td>
              <td className="p-3 border border-gray-200">250 or more</td>
              <td className="p-3 border border-gray-200">£21,250+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Open eCommerce puts development overall at £3,000 to £25,000 or more, and a custom theme at £5,000 to £20,000 or
        more. It gives London developer rates of £75 to £120 an hour and £50 to £90 outside London. Designbox, which
        builds on several platforms, puts Magento setup at £5,000 to £20,000 or more. Neither states a VAT basis.
      </p>
      <p>
        One date matters if you already run Magento.{' '}
        <a href={SRC.adobeLifecycle} target="_blank" rel="noopener noreferrer">Adobe gives each Adobe Commerce version</a>{' '}
        three years of standard support. Version 2.4.9 came out on 12 May 2026 and is supported until 31 May 2029. Version
        2.4.6 left standard support on 11 August 2026. A store on an old version faces an upgrade project or a move, which
        is why Magento owners ask the migration question further down this page. Our{' '}
        <a href="/uk/magento">Magento page for UK stores</a> covers both.
      </p>

      <h2 id="bigcommerce-cost">BigCommerce cost in the UK</h2>
      <p>
        BigCommerce is a hosted platform like Shopify. Its UK site prices in US dollars, and a note on the page says the
        prices exclude VAT.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Plan (<a href={SRC.bigcommercePricing} target="_blank" rel="noopener noreferrer" className="text-white underline">BigCommerce UK</a>, read 11 October 2026)</th>
              <th className="p-3 text-left border border-gray-700">Monthly billing</th>
              <th className="p-3 text-left border border-gray-700">Billed annually, per month</th>
              <th className="p-3 text-left border border-gray-700">Sales limit on the plan</th>
              <th className="p-3 text-left border border-gray-700">Fee on orders through an Open Payment Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Core</td>
              <td className="p-3 border border-gray-200">US$39</td>
              <td className="p-3 border border-gray-200">US$29</td>
              <td className="p-3 border border-gray-200">US$30,000 over the last 12 months</td>
              <td className="p-3 border border-gray-200">2.0%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Growth</td>
              <td className="p-3 border border-gray-200">US$105</td>
              <td className="p-3 border border-gray-200">US$79</td>
              <td className="p-3 border border-gray-200">US$100,000 over the last 12 months</td>
              <td className="p-3 border border-gray-200">1.0%</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Scale</td>
              <td className="p-3 border border-gray-200">US$399</td>
              <td className="p-3 border border-gray-200">US$299</td>
              <td className="p-3 border border-gray-200">US$33,333 a month, then 0.9% on sales above it</td>
              <td className="p-3 border border-gray-200">0.6%</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Performance</td>
              <td className="p-3 border border-gray-200" colSpan={2}>Custom, from US$1,499 a month, billed annually</td>
              <td className="p-3 border border-gray-200">Set in the contract</td>
              <td className="p-3 border border-gray-200">None</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        BigCommerce says Core and Growth move you up a plan automatically when your sales pass the limit, and that orders
        through its Embedded Payment Providers carry no BigCommerce fee.
      </p>
      <p>
        We could not find a UK guide that publishes a BigCommerce build range in pounds, so we give none. We did find two
        things. The{' '}
        <a href={SRC.bigcommerceGuide} target="_blank" rel="noopener noreferrer">cost guide on BigCommerce&apos;s own UK site</a>{' '}
        contains no pound sign. It puts builds at about US$5,000 to US$25,000 for a small to medium business and
        US$25,000 to US$80,000 or more for custom and mid-enterprise work, and credits those figures to a third party. And
        one agency in the{' '}
        <a href={SRC.bigcommercePartner} target="_blank" rel="noopener noreferrer">BigCommerce partner directory</a>,
        Courageous, prices in pounds and says its headless BigCommerce builds start at £7,500.
      </p>

      <h2 id="magento-to-shopify-cost">What does it cost to move a Magento store to Shopify in the UK?</h2>
      <p>
        Published UK prices for this one job start at about £3,000 and run past £60,000. Here is who publishes what.
      </p>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">What the price is for</th>
              <th className="p-3 text-left border border-gray-700">Published price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.weBuildStores} target="_blank" rel="noopener noreferrer">We Build Stores</a>, updated 6 August 2026</td>
              <td className="p-3 border border-gray-200">Its own fixed prices for Magento to Shopify</td>
              <td className="p-3 border border-gray-200">£3,495 standard; £5,995 enterprise</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.agora} target="_blank" rel="noopener noreferrer">Agora Studio</a>, updated September 2026</td>
              <td className="p-3 border border-gray-200">Its own fixed price</td>
              <td className="p-3 border border-gray-200">£4,999</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.bigEyeDeers} target="_blank" rel="noopener noreferrer">Big Eye Deers</a>, 4 October 2026</td>
              <td className="p-3 border border-gray-200">A standard Magento migration with moderate integrations and a few thousand products</td>
              <td className="p-3 border border-gray-200">£3,000 to £6,000; enterprise and complex B2B regularly over £15,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.futurMedia} target="_blank" rel="noopener noreferrer">Futur Media</a></td>
              <td className="p-3 border border-gray-200">Its own starting prices for a move to Shopify from any platform</td>
              <td className="p-3 border border-gray-200">From £2,500 standard; from £6,000 complex</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.nbe} target="_blank" rel="noopener noreferrer">NB eCommerce and Design</a>, 2 May 2026</td>
              <td className="p-3 border border-gray-200">A standard migration with custom design and data transfer from Magento or WooCommerce</td>
              <td className="p-3 border border-gray-200">£5,000 to £20,000; Shopify Plus moves from £20,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.meridianWeb} target="_blank" rel="noopener noreferrer">MeridianWeb</a></td>
              <td className="p-3 border border-gray-200">Magento to Shopify Plus, in 8 to 14 weeks</td>
              <td className="p-3 border border-gray-200">£19,999 to £49,999</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.imaginaire} target="_blank" rel="noopener noreferrer">Imaginaire</a></td>
              <td className="p-3 border border-gray-200">Magento to Shopify within 60 days, three packages</td>
              <td className="p-3 border border-gray-200">From £25,000; from £40,000; from £55,000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Agora Studio, its view of the wider UK market</td>
              <td className="p-3 border border-gray-200">By type of firm doing the move</td>
              <td className="p-3 border border-gray-200">Freelancer £3,000 to £8,000; small agency £12,000 to £25,000; mid-size agency £25,000 to £60,000; Shopify Plus partner £60,000 to £150,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The low prices are fixed packages. They move products, customers, orders and pages, rebuild the theme and map old
        web addresses to new ones. The high prices are projects, with a new design, rebuilt integrations and months of
        work. Agora Studio says its market ranges come from publicly listed rates and quotes its prospects shared, so read
        them as one firm&apos;s view. Only MeridianWeb mentions VAT, saying its checkout packages include it. The other
        pages do not state a basis.
      </p>
      <p>
        Before you compare two quotes, check that four things are in both: order history, a redirect for every old web
        address, each integration, and who fixes problems in the first weeks after the switch. FactoryJet moves Magento
        stores to Shopify and Shopify Plus too. See{' '}
        <a href="/replatforming/magento-to-shopify">how we handle a Magento to Shopify migration</a>.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ecommerce-website-cost-uk-2026/moving-shelves.webp"
          alt="A man in a grey t-shirt carries a plain brown box away from a dark wooden shelving unit while a woman in a teal overshirt places an orange box on new white metal shelves filled with plain brown boxes"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A platform move is mostly careful carrying: every product, customer, order and web address has to arrive.
        </figcaption>
      </figure>

      <h2 id="cost-drivers">7 things that move the price of an ecommerce build</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li>
          <strong>How many products and variants you have.</strong> Jabu Designs says 20 products with one variant each is
          easy and 500 products with size, colour and material variants is real data work. Trisec takes the other view: the
          product count barely moves a Shopify price, and unusual product rules matter more. Count both before you ask for
          a quote.
        </li>
        <li>
          <strong>A themed or a custom design.</strong> Diginow says design from scratch adds £3,000 to £15,000 compared
          with adapting a bought theme. Jabu Designs warns about theme setup sold at a custom price, so ask to see the
          page designs made for your products.
        </li>
        <li>
          <strong>Each system the store connects to.</strong> Designbox prices the common ones: £200 to £800 for a payment
          gateway, £300 to £1,000 for accounting software such as Xero or Sage, £500 to £2,000 for a CRM, £300 to £1,000
          for shipping, and £1,000 to £3,000 or more for ERP or inventory software. Diginow gives £1,000 to £5,000 per
          connection.
        </li>
        <li>
          <strong>Changes to the checkout.</strong> Shopify&apos;s comparison table lists checkout customisation as limited
          on Basic and fully customisable on Plus. If you need a checkout that works differently, ask which plan the quote
          assumes.
        </li>
        <li>
          <strong>Moving from an old store.</strong> Diginow says moves into Shopify or WooCommerce commonly cost £5,000 to
          £25,000, and that data mapping, keeping old web addresses working and testing drive the number more than design
          does.
        </li>
        <li>
          <strong>Photos and words.</strong> Designbox lists professional photography at £300 to £1,500 or more and
          product copywriting at £500 to £3,000 or more, and notes that a basic agency quote often leaves both out.
        </li>
        <li>
          <strong>Trade customers.</strong> Customer-specific prices, account tiers and quote requests add hours. Open
          eCommerce estimates 150 to 250 hours for a B2B wholesale Magento store against 40 to 60 for a basic catalogue
          store. We build these on our <a href="/uk/b2b-ecommerce">B2B ecommerce page for UK firms</a>.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src="/images/blog/ecommerce-website-cost-uk-2026/counting-stock.webp"
          alt="A woman with a dark bob and a striped top holds a wooden clipboard and reaches for a mug on white shelves filled with cream and grey ceramic mugs and bowls and one orange mug"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Count your products and their variants before you ask for a quote. It is the first thing a builder will ask.
        </figcaption>
      </figure>

      <details className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <summary className="font-semibold cursor-pointer text-[#1F2937]">
          Checklist: is your store likely to sit at the low end of the range?
        </summary>
        <ul className="list-disc pl-6 space-y-2 mt-4 mb-0">
          <li>You have fewer than about 100 products and few variants.</li>
          <li>A ready-made theme in your colours and fonts would do.</li>
          <li>You need one payment provider and no link to accounting or stock software yet.</li>
          <li>You sell to UK consumers in pounds, with no trade pricing.</li>
          <li>You are starting fresh, with no old store to move.</li>
          <li>Your product photos and descriptions are ready.</li>
        </ul>
        <p className="mt-4 mb-0 text-sm text-gray-600">
          Five or six ticks points to the starter tier. Three or fewer means you should budget toward the custom tier, or
          cut the first version down.
        </p>
      </details>

      <h2 id="freelancer-or-agency">Freelancer or agency: what UK builders charge</h2>
      <div className="overflow-x-auto my-6">
        <table className={"w-full border-collapse text-sm " + visualQa.costTable}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Who and how they charge</th>
              <th className="p-3 text-left border border-gray-700">Published UK figure</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Freelancer, whole ecommerce site</td>
              <td className="p-3 border border-gray-200">£1,500 to £8,000</td>
              <td className="p-3 border border-gray-200"><a href={SRC.designbox} target="_blank" rel="noopener noreferrer">Designbox</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Agency, whole ecommerce site</td>
              <td className="p-3 border border-gray-200">£3,000 to £50,000+</td>
              <td className="p-3 border border-gray-200"><a href={SRC.designbox} target="_blank" rel="noopener noreferrer">Designbox</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Freelancer, per day</td>
              <td className="p-3 border border-gray-200">£300 to £800</td>
              <td className="p-3 border border-gray-200"><a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Agency, per hour</td>
              <td className="p-3 border border-gray-200">£50 to £150 (Diginow); £90 to £150 for Shopify agencies (NB eCommerce and Design)</td>
              <td className="p-3 border border-gray-200"><a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow</a>; <a href={SRC.nbe} target="_blank" rel="noopener noreferrer">NB eCommerce and Design</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Magento developer, per hour</td>
              <td className="p-3 border border-gray-200">£75 to £120 in London; £50 to £90 outside London</td>
              <td className="p-3 border border-gray-200"><a href={SRC.openEcommerce} target="_blank" rel="noopener noreferrer">Open eCommerce</a></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Rates two UK Shopify agencies publish</td>
              <td className="p-3 border border-gray-200">£150 an hour; £460 a day</td>
              <td className="p-3 border border-gray-200"><a href={SRC.whyMatters} target="_blank" rel="noopener noreferrer">Why Matters</a>, collected 19 September 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A day rate or an hour rate only helps once you know the hours. Why Matters found one agency selling a four-hour
        priority slot for £440 and calling it a day rate. Ask for a fixed price against a written scope, and keep the
        hourly rate for changes after launch.
      </p>

      <figure className="my-8">
        <img
          src="/images/blog/ecommerce-website-cost-uk-2026/planning-shop-pages.webp"
          alt="A man in a dark green shirt and a woman in a mustard cardigan sit at a pale oak table arranging blank white cards and orange sticky notes into rows, with a white mug and two pencils beside them"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Laying out the pages and the systems on a table before anyone designs is the lowest-cost way to tighten a quote.
        </figcaption>
      </figure>

      <h2 id="vat-and-dollars">VAT and US dollars: two UK details that change the number</h2>
      <table className={visualQa.profileFacts} tabIndex={0}><tbody>
        <tr><th scope="row"><strong>VAT.</strong></th><td> The <a href={SRC.govVat} target="_blank" rel="noopener noreferrer">standard UK rate is 20 per cent</a>.
          None of the nine UK build guides we cite says whether its ranges include it. On a £10,000 build that is a £2,000
          question. BigCommerce states that its plan prices exclude VAT, and Shopify&apos;s UK pricing page does not say.
          The VAT registration threshold is{' '}
          <a href={SRC.govVatThreshold} target="_blank" rel="noopener noreferrer">£90,000 of taxable turnover</a>. Ask
          every supplier to state the basis in writing, and ask your accountant how much you can reclaim.
        </td></tr>
        <tr><th scope="row"><strong>US dollar prices.</strong></th><td> BigCommerce bills its plans in US dollars. The Shopify Theme Store prices
          themes in US dollars, and WooCommerce lists its extensions in US dollars. Your cost in pounds moves with the
          exchange rate on the day you are charged, which is why we have left those prices in dollars.
        </td></tr>
      </tbody></table>

      <h2 id="accurate-quote">How to get an accurate ecommerce quote in 6 steps</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Count your products and variants.</strong> Several guides use catalogue size to place you in a tier.</li>
        <li><strong>List every system the store must talk to:</strong> payments, accounting, stock, shipping and email.</li>
        <li><strong>Say whether you want a theme set up or a design made for you.</strong> Bring two stores you like.</li>
        <li><strong>Say what must move from the old store:</strong> products, customers, orders, pages and web addresses.</li>
        <li><strong>Ask for the build as a fixed price against a written scope,</strong> with the VAT basis stated.</li>
        <li><strong>Ask who owns the store, the theme code and the accounts on launch day,</strong> and who supports the store after launch.</li>
      </ol>

      <h2 id="factoryjet-pricing">How FactoryJet prices ecommerce work</h2>
      <p>
        We do not publish a price list, because a 30-product gift shop and a trade store with customer-specific pricing
        are different jobs. FactoryJet quotes a fixed price in writing after a short scoping call. Before a contract, we
        show working software on your own data. We design, build, launch and support the store, and you own what we
        build.
      </p>
      <p>
        A store with a custom theme takes us 3 to 5 weeks. An advanced store with subscriptions, B2B pricing or a
        migration takes 5 to 8 weeks, and a headless or custom build takes 8 to 14 weeks. After launch we stay on. We
        quote the ongoing support as a fixed price in writing too, and we keep managing the servers, integrations and
        maintenance so your team does not have to.
      </p>
      <p>
        To see the work behind these numbers, read about our{' '}
        <a href="/uk/ecommerce-development">ecommerce development for UK businesses</a>,{' '}
        <a href="/uk/shopify-development">Shopify development</a>, <a href="/uk/shopify-plus">Shopify Plus</a>,{' '}
        <a href="/uk/woocommerce">WooCommerce</a> and <a href="/uk/magento">Magento</a> services, or start at{' '}
        <a href="/uk">FactoryJet UK</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">All pages opened and read on 11 October 2026. Prices change, so check the source before you budget.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li>Platform pricing pages: <a href={SRC.shopifyPricing} target="_blank" rel="noopener noreferrer">Shopify UK pricing</a>, <a href={SRC.shopifyPlus} target="_blank" rel="noopener noreferrer">Shopify Plus UK pricing</a>, <a href={SRC.shopifyThemes} target="_blank" rel="noopener noreferrer">Shopify Theme Store</a>, <a href={SRC.wooPricing} target="_blank" rel="noopener noreferrer">WooCommerce pricing</a>, <a href={SRC.adobePricing} target="_blank" rel="noopener noreferrer">Adobe Commerce pricing (UK)</a>, <a href={SRC.adobeOpenSource} target="_blank" rel="noopener noreferrer">Magento Open Source (Adobe UK)</a>, <a href={SRC.magentoGithub} target="_blank" rel="noopener noreferrer">Magento on GitHub</a>, <a href={SRC.adobeLifecycle} target="_blank" rel="noopener noreferrer">Adobe Commerce lifecycle policy</a>, <a href={SRC.bigcommercePricing} target="_blank" rel="noopener noreferrer">BigCommerce UK pricing</a>, <a href={SRC.bigcommerceGuide} target="_blank" rel="noopener noreferrer">BigCommerce UK ecommerce cost guide</a>, <a href={SRC.bigcommercePartner} target="_blank" rel="noopener noreferrer">BigCommerce partner directory listing for Courageous</a></li>
        <li>Payment providers: <a href={SRC.wooPayments} target="_blank" rel="noopener noreferrer">WooPayments fees</a>, <a href={SRC.stripe} target="_blank" rel="noopener noreferrer">Stripe UK pricing</a></li>
        <li><a href={SRC.designbox} target="_blank" rel="noopener noreferrer">Designbox, How much does an ecommerce website cost in the UK (updated 30 August 2026)</a></li>
        <li><a href={SRC.jabu} target="_blank" rel="noopener noreferrer">Jabu Designs, How much does an eCommerce website cost, a 2026 UK guide</a></li>
        <li><a href={SRC.authenticStyle} target="_blank" rel="noopener noreferrer">Authentic Style, How much does an ecommerce website cost UK (updated 29 September 2026)</a></li>
        <li><a href={SRC.cambria} target="_blank" rel="noopener noreferrer">Cambria Digital, Ecommerce website cost UK price guide (updated 19 July 2026)</a></li>
        <li><a href={SRC.digitalOtter} target="_blank" rel="noopener noreferrer">Digital Otter, How much does an ecommerce website cost in the UK (25 June 2026)</a></li>
        <li><a href={SRC.diginow} target="_blank" rel="noopener noreferrer">Diginow, UK ecommerce development cost at a glance (17 August 2026)</a></li>
        <li><a href={SRC.jwDigital} target="_blank" rel="noopener noreferrer">JW Digital, How much does an ecommerce site cost (31 July 2026)</a></li>
        <li><a href={SRC.whyMatters} target="_blank" rel="noopener noreferrer">Why Matters, What UK Shopify agencies publish about their pricing (collected 19 September 2026)</a>, <a href={SRC.futurMedia} target="_blank" rel="noopener noreferrer">Futur Media, Shopify agency pricing</a></li>
        <li><a href={SRC.trisec} target="_blank" rel="noopener noreferrer">Trisec, How much does Shopify development cost in the UK (July 2026)</a>, <a href={SRC.nbe} target="_blank" rel="noopener noreferrer">NB eCommerce and Design, Shopify agency pricing UK 2026 (2 May 2026)</a></li>
        <li><a href={SRC.openEcommerce} target="_blank" rel="noopener noreferrer">Open eCommerce, How much does a Magento website cost in the UK (23 April 2026)</a></li>
        <li>Magento to Shopify: <a href={SRC.agora} target="_blank" rel="noopener noreferrer">Agora Studio, migration cost (updated September 2026)</a>, <a href={SRC.weBuildStores} target="_blank" rel="noopener noreferrer">We Build Stores, Shopify migration cost in the UK (updated 6 August 2026)</a>, <a href={SRC.bigEyeDeers} target="_blank" rel="noopener noreferrer">Big Eye Deers, Shopify migration in the UK (4 October 2026)</a>, <a href={SRC.imaginaire} target="_blank" rel="noopener noreferrer">Imaginaire, Magento to Shopify migration</a>, <a href={SRC.meridianWeb} target="_blank" rel="noopener noreferrer">MeridianWeb, Shopify Plus agency</a></li>
        <li>GOV.UK: <a href={SRC.govVat} target="_blank" rel="noopener noreferrer">VAT rates</a>, <a href={SRC.govVatThreshold} target="_blank" rel="noopener noreferrer">VAT thresholds</a></li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Ecommerce scoping call for UK businesses
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a fixed price for your store
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us what you sell, how many products you have and which systems the store must connect to. We will tell you
          which platform and which tier fit. FactoryJet quotes a fixed price in writing after a short scoping call, and we
          show working software on your own data before a contract.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/uk/ecommerce-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See ecommerce development in the UK
          </a>
        </div>
      </div>
    </article>
  ),
};
