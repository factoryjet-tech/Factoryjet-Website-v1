import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// AU Wave 4, page 11 of pipeline/research/AU-EXPANSION-PLAN-2026-09-26.md (ecommerce platform comparison guide).
// Keywords: data/au-competitors-2026-09-26/candidate_volumes.json (AU Google Ads volumes, location 2036).
// PAA: data/au-competitors-2026-09-26/paa_by_page.json ("platforms") + new_candidate_serps.json.
// Incumbent studied: wpcreative.com.au/best-ecommerce-platforms/ (8 platforms, AUD pricing, 11 FAQs).
//
// PRICES: every platform fee below is the platform's OWN published list price, fetched from its official
// Australian pricing page on 2026-09-26 (Maropost with the page's AUD currency switch). BigCommerce's AU page
// states its prices in USD, excluding GST; WooCommerce has no AU pricing page, so its figures are USD from its
// global pricing page and are labelled that way. Wix and Squarespace show prices by visitor location and could
// not be verified in AUD, so no figure is given for them. Adobe publishes no list price for Adobe Commerce.
// None of these numbers is a FactoryJet price. Commerceflo publishes no price and none is given here.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx) FROM this exact
// array, so the visible FAQs and the structured data can never drift apart. Do not add a second FAQ list.

const SRC = {
  shopify: 'https://www.shopify.com/au/pricing',
  shopifyPlus: 'https://www.shopify.com/au/plus/pricing',
  shopifyGst:
    'https://help.shopify.com/en/manual/your-account/manage-billing/billing-charges/types-of-charges/taxes/billing-taxes-australia-new-zealand',
  shopifyAuMethods: 'https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/australia/payment-methods',
  bigcommerce: 'https://www.bigcommerce.com.au/essentials/pricing/',
  maropost: 'https://www.maropost.com/pricing/',
  woocommerce: 'https://woocommerce.com/pricing/',
  adobe: 'https://business.adobe.com/au/products/commerce.html',
  magentoOpen: 'https://business.adobe.com/au/products/commerce/magento/open-source.html',
  auspost: 'https://auspost.com.au/business/ecommerce/ecommerce-report',
  gst: 'https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst',
  accc: 'https://www.accc.gov.au/business/selling-products-and-services/selling-online',
} as const;

const CHECKED = 'checked 26 September 2026';

const faqs: FAQItem[] = [
  {
    q: 'What is the best ecommerce platform in Australia?',
    a: 'For most Australian small and mid-sized stores, Shopify is the best starting point in 2026: it bills in AUD, hosting and security are included, and its Basic plan lists at $56 a month (or $42 a month paid yearly) on its Australian pricing page. BigCommerce suits stores that want to avoid platform transaction fees, WooCommerce suits WordPress businesses that want full control, and Maropost suits Australian retailers that need built-in inventory and warehouse tools.',
  },
  {
    q: 'Which ecommerce platform is best in Australia for a small business?',
    a: 'Shopify on the Basic or Grow plan is the safest choice for most small businesses because setup is quick, Australian card payments work out of the box, and you do not manage hosting. If you already run a WordPress site and have someone technical to maintain it, WooCommerce keeps everything in one place. If budget is the main worry, compare total yearly cost, not just the monthly fee.',
  },
  {
    q: 'What is the best platform to sell online in Australia?',
    a: 'It depends on where your customers already shop. For your own branded store, Shopify, BigCommerce, WooCommerce and Maropost are the main choices. Many Australian sellers also list on marketplaces alongside their own store. Your own store gives you the customer relationship and the email list, so treat marketplaces as extra channels, not a replacement for it.',
  },
  {
    q: 'What are the top 5 ecommerce platforms in Australia?',
    a: 'The five most common choices for Australian businesses in 2026 are Shopify (including Shopify Plus), WooCommerce, BigCommerce, Maropost Commerce Cloud (formerly Neto, built in Australia) and Adobe Commerce (Magento). Wix and Squarespace are popular for very small catalogues. Which one is best depends on catalogue size, B2B needs, in-store sales and who will maintain the store.',
  },
  {
    q: 'What is the largest ecommerce platform in Australia?',
    a: 'No official figure ranks platforms by the number of Australian stores. Shopify is the platform most Australian comparison guides put first, and it has the largest app ecosystem. The biggest online retail channels in Australia are marketplaces and large retailers, not store builders. For market size, the Australia Post eCommerce Report 2026 says Australians spent $82.6 billion online in 2025, up 14% on the year before.',
  },
  {
    q: 'Which ecommerce platform is best for beginners?',
    a: 'Shopify is the easiest full ecommerce platform for beginners: you pick a theme, add products and connect payments without touching code or hosting. Wix and Squarespace are also beginner friendly and suit a small catalogue or a service business that sells a few products. WooCommerce is harder for beginners because you manage hosting, updates and security yourself.',
  },
  {
    q: 'Is it better to use WooCommerce or Shopify?',
    a: 'Shopify is better if you want a store that is hosted, secured and updated for you, with predictable monthly fees in AUD. WooCommerce is better if you already use WordPress, want to own every file, and have a developer or agency to handle hosting, plugin updates and security. WooCommerce has no platform fee, but hosting and paid extensions add up, so compare yearly totals.',
  },
  {
    q: 'Which is better, Shopify or BigCommerce?',
    a: 'Shopify has the bigger app ecosystem and bills Australian stores in AUD. BigCommerce charges no extra platform fee when you use one of its embedded payment providers, which include Afterpay, Zip Money, Stripe and PayPal, and it lists real-time Australia Post rates. But its Australian pricing page states prices in US dollars, excluding GST, and plans auto-upgrade as your sales grow.',
  },
  {
    q: 'What are the downsides of BigCommerce?',
    a: 'Three things to check. First, the Australian pricing page lists prices in US dollars excluding GST, so your cost moves with the exchange rate. Second, plans have sales caps: Core covers up to US$30K in trailing twelve-month sales and Growth up to US$100K, then the plan upgrades automatically. Third, its theme and app ecosystem is smaller than Shopify’s, so some features need custom work.',
  },
  {
    q: 'Who are Shopify’s main competitors in Australia?',
    a: 'In Australia, Shopify competes mainly with WooCommerce (for WordPress businesses), BigCommerce (for stores that want no platform transaction fees), Maropost Commerce Cloud (the Australian-built platform formerly called Neto, strong on inventory and warehouse work) and Adobe Commerce (for large, complex catalogues). Wix and Squarespace compete at the small end.',
  },
  {
    q: 'What are some good alternatives to Shopify?',
    a: 'BigCommerce is the closest like-for-like alternative. WooCommerce is the main self-hosted alternative. Maropost suits Australian retailers with warehouses and multiple stock locations. Adobe Commerce or Magento Open Source suits very large or heavily customised catalogues. Headless builds, where a custom storefront sits on top of a commerce engine, suit brands that need maximum speed and design control.',
  },
  {
    q: 'Is there anything better than Shopify?',
    a: 'For some businesses, yes. A wholesaler with complex customer pricing may be better served by BigCommerce, Maropost or Adobe Commerce. A WordPress-heavy content business may be better on WooCommerce. A brand selling DTC, B2B and in store from one stock pool may need a platform built for that. For a typical small Australian store, though, Shopify is hard to beat on ease and support.',
  },
  {
    q: 'Is Shopify still worth it in 2026?',
    a: 'Yes, for most small and mid-sized Australian stores. Plans are billed in AUD, hosting and security are included, Shopify Payments card rates start at 1.7% plus 30 cents on Basic, and there is a large pool of Australian agencies and apps. It becomes less attractive if you rely on a third-party payment provider, because Shopify then adds its own transaction fee of 2% on Basic.',
  },
  {
    q: 'How much does Shopify take from a $100 sale?',
    a: 'On the Basic plan with Shopify Payments and a standard Australian card, Shopify’s listed online rate is 1.7% plus 30 cents, which is $2.00 on a $100 sale. An Amex card is 2.9% plus 30 cents ($3.20) and an international card 3.5% plus 30 cents ($3.80). If you use a third-party payment provider instead, Shopify adds 2% ($2.00) on top of that provider’s own fee.',
  },
  {
    q: 'Which ecommerce platform will be the best in 2026?',
    a: 'There is no single winner. Shopify leads for ease and ecosystem, BigCommerce for avoiding platform transaction fees, WooCommerce for control, Maropost for Australian inventory-heavy retail and Adobe Commerce for complex enterprise builds. The trend for 2026 is selling in more places at once: your store, marketplaces, social and AI shopping channels, so pick a platform that can feed all of them from one product catalogue.',
  },
  {
    q: 'What is the cheapest online store platform in Australia?',
    a: 'On published list prices, Shopify Basic paid yearly ($42 a month) and Maropost Build ($49 a month) are among the cheapest full platforms billed in AUD. WooCommerce has no platform fee, but you pay for hosting, which WooCommerce estimates at US$25 to US$350 a month, plus any paid extensions. The cheapest monthly fee is not always the cheapest year once payment fees are counted.',
  },
  {
    q: 'Do I need an ABN for ecommerce in Australia?',
    a: 'If you are running an online store as a business, you should have an ABN, and you need one to register for GST. business.gov.au says you must register for GST once your GST turnover reaches $75,000, even if your profit is much lower. Shopify also exempts GST-registered stores from GST on their subscription once the ABN is added to the account.',
  },
  {
    q: 'How do I start an ecommerce business in Australia?',
    a: 'Get an ABN, choose a business name, and check whether you will pass the $75,000 GST turnover threshold. Pick a platform that fits your catalogue and budget, set up payments (cards plus Afterpay or Zip if your customers expect them), connect shipping rates from Australia Post or a courier, connect Xero or MYOB, and write clear refund and returns terms that match the Australian Consumer Law.',
  },
  {
    q: 'Is ecommerce worth it in 2026?',
    a: 'The market is still growing. The Australia Post eCommerce Report 2026 says 9.8 million Australian households (82%) shopped online in 2025, spending $82.6 billion, up 14% year on year, and online is now 24% of all retail spend. Whether it is worth it for you depends on margins after shipping, payment fees and advertising, so model those before you pick a platform.',
  },
  {
    q: 'Is Maropost (Neto) or Shopify better for an Australian store?',
    a: 'Maropost Commerce Cloud, formerly Neto, suits Australian retailers that need strong inventory, multiple stock locations and wholesale in one system; its plans are sold in AUD and include a monthly sales allowance. Shopify suits stores that want the biggest app and agency ecosystem and the quickest setup. Stores with a warehouse and a trade channel should shortlist both and compare workflows, not just fees.',
  },
  {
    q: 'What is Shopify Plus?',
    a: 'Shopify Plus is Shopify’s plan for larger and more complex businesses. Its Australian pricing page lists it from $3,700 AUD a month on a 3-year term or $4,000 AUD a month on a 1-year term, with a variable platform fee for more complex businesses. It adds a fully customisable checkout, unlimited B2B catalogues, unlimited staff accounts and the lowest Shopify Payments card rates.',
  },
  {
    q: 'What is the difference between Shopify and Shopify Plus?',
    a: 'Standard Shopify plans suit most small and mid-sized stores. Shopify Plus adds checkout customisation, unlimited B2B catalogues (standard plans allow up to 3), up to 200 point-of-sale locations, expansion stores for other markets and priority support. It also has the lowest card rates, from 1.15% plus 30 cents. It usually makes sense only when revenue and complexity justify a four-figure monthly fee.',
  },
  {
    q: 'Why are people moving away from WordPress for ecommerce?',
    a: 'Mostly because of upkeep. A WooCommerce store on WordPress needs its own hosting, regular plugin and theme updates, security monitoring and backups, and each paid extension renews yearly. Hosted platforms such as Shopify and BigCommerce take that work off the owner. WooCommerce is still a strong choice when someone is accountable for maintaining it, which is where most stores fall down.',
  },
  {
    q: 'Which ecommerce platforms connect to Xero and MYOB?',
    a: 'All the major platforms in this guide can connect to Xero, and most can connect to MYOB, usually through an app, extension or connector rather than a built-in feature. Before you choose, check that the connector is actively maintained, how it posts GST and payment fees, and whether it sends each order or a daily summary. That detail decides how much work your bookkeeper does each month.',
  },
  {
    q: 'Does Shopify charge GST on its fees in Australia?',
    a: 'Shopify’s help centre says Australian stores are charged 10% GST on their Shopify subscription and shipping labels. If you register for GST and add your ABN to your Shopify account, you no longer pay that GST on the subscription, from the next invoice onwards. Ask your accountant how to treat GST on payment processing fees.',
  },
  {
    q: 'Can I use Afterpay and Zip on Shopify, WooCommerce and BigCommerce?',
    a: 'Buy now, pay later services such as Afterpay and Zip can generally be added to all three through a payment app, plugin or provider connection. BigCommerce lists both Afterpay and Zip Money as embedded payment providers with no extra platform fee. Shopify’s Australian payment methods list does not include them, so they connect as separate providers; check whether Shopify’s third-party transaction fee applies on your plan.',
  },
  {
    q: 'How hard is it to move from Neto, Magento or WooCommerce to Shopify?',
    a: 'Moving platforms is routine but needs care. Products, customers and order history can be moved with migration tools, but every old URL needs a 301 redirect to its new address so you keep your Google rankings, and integrations such as Xero, MYOB and shipping must be reconnected and tested. Plan the move for a quieter trading period and run both stores in parallel for a short test window.',
  },
  {
    q: 'What is Commerceflo, and should I consider it?',
    a: 'Commerceflo by FactoryJet is our own AI commerce operator. It puts DTC, B2B, marketplace and in-store selling on one data model, with AI agents that propose changes for a person to approve. It is in early access, it publishes no prices, and we only recommend it where it fits better than Shopify, BigCommerce or WooCommerce. Most Australian stores we speak with are better served by a mainstream platform.',
  },
];

type PriceRow = {
  platform: string;
  entry: string;
  mid: string;
  top: string;
  billing: string;
  src: string;
  srcLabel: string;
};

const priceRows: PriceRow[] = [
  {
    platform: 'Shopify',
    entry: 'Basic: $56/mo, or $42/mo paid yearly',
    mid: 'Grow: $149/mo ($114 yearly). Advanced: $575/mo ($431 yearly)',
    top: 'Shopify Plus: from $3,700/mo (3-year term) or $4,000/mo (1-year term)',
    billing: 'AUD. 10% GST added unless you are GST-registered and add your ABN',
    src: SRC.shopify,
    srcLabel: 'Shopify AU pricing',
  },
  {
    platform: 'BigCommerce',
    entry: 'Core: US$39/mo (US$29 yearly), up to US$30K yearly sales',
    mid: 'Growth: US$105/mo (US$79 yearly), up to US$100K. Scale: US$399/mo (US$299 yearly)',
    top: 'Performance: custom, from US$1,499/mo billed yearly',
    billing: 'USD, excluding GST, as stated on its AU page',
    src: SRC.bigcommerce,
    srcLabel: 'BigCommerce AU pricing',
  },
  {
    platform: 'Maropost Commerce Cloud (formerly Neto)',
    entry: 'Build: $49/mo, includes $50K monthly sales',
    mid: 'Essentials: $299/mo ($240 yearly), includes $500K',
    top: 'Professional: $1,179/mo ($944 yearly). Enterprise: $2,989/mo ($2,392 yearly)',
    billing: 'AUD on the page’s currency switch. GST treatment not stated',
    src: SRC.maropost,
    srcLabel: 'Maropost pricing (AUD view)',
  },
  {
    platform: 'WooCommerce',
    entry: 'Core plugin: no platform fee, no revenue share',
    mid: 'Hosting: WooCommerce estimates US$25 to US$350/mo for most stores',
    top: 'Paid extensions: US$29 to US$299 a year each',
    billing: 'USD (no AU pricing page). You also pay your payment provider',
    src: SRC.woocommerce,
    srcLabel: 'WooCommerce pricing',
  },
  {
    platform: 'Adobe Commerce (Magento)',
    entry: 'Magento Open Source: download and self-host, you pay hosting and developers',
    mid: 'Adobe Commerce: no list price published',
    top: 'Pricing by quote after a demo',
    billing: 'Quoted per business',
    src: SRC.adobe,
    srcLabel: 'Adobe Commerce AU',
  },
];

type FeeRow = { setup: string; platformFee: string; note: string };

const feeRows: FeeRow[] = [
  {
    setup: 'Shopify Basic, Shopify Payments, standard Australian card',
    platformFee: '$2.00 (1.7% + 30c)',
    note: 'Amex is $3.20 (2.9% + 30c); international cards $3.80 (3.5% + 30c)',
  },
  {
    setup: 'Shopify Grow, Shopify Payments, standard card',
    platformFee: '$1.85 (1.55% + 30c)',
    note: 'Card rates fall on each higher plan',
  },
  {
    setup: 'Shopify Advanced, Shopify Payments, standard card',
    platformFee: '$1.65 (1.35% + 30c)',
    note: 'Third-party transaction fee drops to 0.6% on this plan',
  },
  {
    setup: 'Shopify Plus, Shopify Payments, standard card',
    platformFee: '$1.45 (from 1.15% + 30c)',
    note: 'Third-party transaction fee is 0.2%',
  },
  {
    setup: 'Shopify Basic with a third-party payment provider',
    platformFee: '$2.00 Shopify fee (2%)',
    note: 'Plus your provider’s own processing fee on top',
  },
  {
    setup: 'BigCommerce Core with an embedded provider (for example Stripe, PayPal, Afterpay, Zip Money)',
    platformFee: '$0 BigCommerce fee',
    note: 'You still pay the provider’s own processing fee',
  },
  {
    setup: 'BigCommerce Core with an open (non-listed) provider',
    platformFee: 'About $2.00 (2.0% of eligible order GMV)',
    note: '1.0% on Growth, 0.6% on Scale, plus the provider’s fee',
  },
  {
    setup: 'WooCommerce with any provider',
    platformFee: '$0 platform fee',
    note: 'Only your payment provider’s fee, plus hosting and extensions',
  },
];

type AuRow = { platform: string; bnpl: string; shipping: string; accounting: string; gst: string };

const auRows: AuRow[] = [
  {
    platform: 'Shopify',
    bnpl: 'Afterpay and Zip connect as separate providers (not in the Shopify Payments AU list)',
    shipping: 'Shipping labels in the Shopify admin, plus courier apps',
    accounting: 'Xero and MYOB through apps',
    gst: 'Bills in AUD; 10% GST on subscription unless ABN added',
  },
  {
    platform: 'BigCommerce',
    bnpl: 'Afterpay and Zip Money listed as embedded providers (no extra platform fee)',
    shipping: 'Real-time rates from Australia Post and other carriers listed',
    accounting: 'Xero and MYOB through apps',
    gst: 'Bills in USD, excluding GST',
  },
  {
    platform: 'WooCommerce',
    bnpl: 'Check the plugin directory for each provider’s current plugin',
    shipping: 'Check for a maintained Australia Post or courier plugin',
    accounting: 'Xero and MYOB through extensions',
    gst: 'No platform fee; hosting and extensions billed by each vendor',
  },
  {
    platform: 'Maropost Commerce Cloud',
    bnpl: 'Check current integrations with Maropost',
    shipping: 'Built around inventory, warehouse and fulfilment',
    accounting: 'Check current integrations with Maropost',
    gst: 'Priced in AUD; ask about GST on the invoice',
  },
  {
    platform: 'Adobe Commerce',
    bnpl: 'Extensions or custom integration',
    shipping: 'Extensions or custom integration',
    accounting: 'Extensions or custom integration',
    gst: 'Quoted per business',
  },
];

const linkCls = 'text-[#B23E13] font-semibold underline';
const extLinkProps = { target: '_blank', rel: 'noopener noreferrer nofollow', className: 'text-[#B23E13] underline' } as const;
const h2Cls = 'text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4';
const h3Cls = 'text-xl font-bold text-gray-900 mt-8 mb-3';
const pCls = 'mb-4 text-gray-700 leading-relaxed';
const detailsCls = 'bg-white border border-gray-200 rounded-xl p-4 md:p-5 group';
const summaryCls = 'font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]';
const detailsBodyCls = 'mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2';

export const post: BlogPost = {
  id: '711',
  slug: 'best-ecommerce-platform-australia-2026',
  title: 'Best Ecommerce Platform in Australia 2026: Shopify, WooCommerce, BigCommerce and More Compared',
  excerpt:
    'The best ecommerce platform in Australia for 2026, compared on real AUD list prices, payment fees on a $100 sale, GST, Afterpay and Zip, Australia Post and Xero or MYOB. Shopify, Shopify Plus, WooCommerce, BigCommerce, Maropost (Neto), Adobe Commerce, Wix and Squarespace, with a plain answer for each type of business.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 26, 2026',
  readTime: '20 min read',
  imageUrl: '/blog-images/best-ecommerce-platform-australia-2026-hero.webp',
  imageAlt:
    'A Melbourne homewares store owner packing a linen throw into a parcel at her timber bench, her laptop showing product photos of her online shop',
  meta: {
    title: 'Best Ecommerce Platform Australia 2026 Compared | FactoryJet',
    description:
      'Best ecommerce platform in Australia for 2026? Shopify, WooCommerce, BigCommerce, Maropost and Adobe Commerce compared on AUD fees, GST, Afterpay and shipping.',
  },
  keyTakeaways: [
    'For most small and mid-sized Australian stores, Shopify is the best ecommerce platform in 2026: billed in AUD, hosted for you, Basic from $56 a month ($42 paid yearly) on its AU pricing page.',
    'BigCommerce charges no extra platform fee with its embedded payment providers, including Afterpay and Zip Money, but its AU page prices plans in US dollars, excluding GST.',
    'Maropost Commerce Cloud (formerly Neto) is the Australian-built option, priced in AUD from $49 a month, and suits retailers with warehouses, stock locations and a trade channel.',
    'WooCommerce has no platform fee, but hosting (WooCommerce estimates US$25 to US$350 a month) and paid extensions make it a maintenance commitment, not a free option.',
    'On a $100 sale, Shopify Basic with Shopify Payments takes $2.00 on a standard Australian card. Using a third-party provider on Basic adds another 2%.',
    'All prices are the platforms’ own published list prices, checked 26 September 2026. None is a FactoryJet price. Build costs are covered in our separate Australian cost guides.',
  ],
  faqs,
  content: (
    <>
      {/* Answer-first block */}
      <div className="answer-first bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 md:p-6 rounded-r-xl mb-8">
        <p className="font-bold text-gray-900 text-base md:text-lg mb-2">
          The short answer: the best ecommerce platform in Australia
        </p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          For most Australian small and mid-sized stores, <strong>Shopify</strong> is the best ecommerce platform in
          2026. It bills in AUD, includes hosting and security, and its Basic plan lists at <strong>$56 a month</strong>{' '}
          ($42 paid yearly). Choose <strong>BigCommerce</strong> to avoid platform transaction fees,{' '}
          <strong>WooCommerce</strong> if you live in WordPress, <strong>Maropost</strong> for warehouse-heavy retail and{' '}
          <strong>Adobe Commerce</strong> for complex enterprise catalogues.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Prices are each platform’s own published list price, {CHECKED}. Sources are linked in the tables below.
          These are not FactoryJet prices.
        </p>
      </div>

      <p className={pCls}>
        Picking an ecommerce platform is a five-year decision dressed up as a monthly fee. The plan price is the part
        everyone compares. The parts that actually decide your costs and your workload are payment fees, how GST is
        charged, whether Afterpay and Zip work cleanly, how shipping rates reach the checkout, and how orders land in
        Xero or MYOB. This guide compares the platforms Australian businesses really shortlist on all of those, using
        prices we fetched from each platform’s own pricing page.
      </p>
      <p className={pCls}>
        A few terms, once. An <strong>ecommerce platform</strong> is the software your online store runs on: product
        pages, cart, checkout and order management. <strong>Hosted</strong> (or SaaS) platforms, such as Shopify and
        BigCommerce, run the servers and security for you. <strong>Self-hosted</strong> platforms, such as WooCommerce
        and Magento Open Source, run on hosting you choose and maintain. <strong>GMV</strong> (gross merchandise value)
        means the total value of the orders you sell. <strong>BNPL</strong> means buy now, pay later services such as
        Afterpay and Zip.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        A disclosure before we start. FactoryJet is an ecommerce services company and a registered Shopify Partner. We
        design, build, implement and support stores on Shopify, Shopify Plus, BigCommerce, WooCommerce and Adobe
        Commerce. We also make <strong>Commerceflo by FactoryJet</strong>, our own AI commerce operator, and we say
        clearly below where it fits and where it does not.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <p className="text-lg font-bold mb-3 text-gray-900">What this guide covers</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm md:text-base">
          <li><a href="#shortlist" className="text-[#B23E13] underline">The 8 best ecommerce platforms in Australia, at a glance</a></li>
          <li><a href="#pricing" className="text-[#B23E13] underline">Ecommerce platform pricing in Australia (AUD, USD and GST)</a></li>
          <li><a href="#100-dollar-sale" className="text-[#B23E13] underline">What each platform takes from a $100 sale</a></li>
          <li><a href="#australian-checklist" className="text-[#B23E13] underline">Afterpay, Zip, Australia Post, Xero and MYOB compared</a></li>
          <li><a href="#platform-reviews" className="text-[#B23E13] underline">Each platform in detail</a></li>
          <li><a href="#head-to-head" className="text-[#B23E13] underline">Shopify vs WooCommerce, BigCommerce vs Shopify, Maropost vs Shopify</a></li>
          <li><a href="#by-business" className="text-[#B23E13] underline">The best ecommerce platform for your type of business</a></li>
          <li><a href="#rules" className="text-[#B23E13] underline">ABN, GST and the Australian Consumer Law</a></li>
          <li><a href="#choose" className="text-[#B23E13] underline">How to choose in 7 steps</a></li>
          <li><a href="#switching" className="text-[#B23E13] underline">Switching platforms without losing rankings</a></li>
        </ol>
      </div>

      {/* Section: shortlist */}
      <h2 id="shortlist" className={h2Cls}>
        The 8 best ecommerce platforms in Australia for 2026, at a glance
      </h2>
      <p className={pCls}>
        These are the options that come up again and again when Australian businesses ask which ecommerce platform to
        use. Each has a clear best-fit customer. None is best for everyone.
      </p>
      <ol className="list-decimal pl-5 space-y-3 text-gray-700 leading-relaxed mb-6">
        <li>
          <strong>Shopify: best overall for small and mid-sized stores.</strong> Hosted, billed in AUD, quick to launch,
          and the largest pool of apps, themes and Australian agencies.
        </li>
        <li>
          <strong>Shopify Plus: best for high-volume and B2B-plus-DTC brands.</strong> Checkout customisation,
          unlimited B2B catalogues and expansion stores for other markets.
        </li>
        <li>
          <strong>BigCommerce: best for avoiding platform transaction fees.</strong> No extra fee with its embedded
          payment providers, strong built-in B2B features, but priced in US dollars.
        </li>
        <li>
          <strong>WooCommerce: best for WordPress businesses that want control.</strong> No platform fee and full
          ownership, in exchange for hosting and maintenance responsibility.
        </li>
        <li>
          <strong>Maropost Commerce Cloud (formerly Neto): best Australian-built option for inventory-heavy retail.</strong>{' '}
          Priced in AUD with a monthly sales allowance built into each plan.
        </li>
        <li>
          <strong>Adobe Commerce (Magento): best for complex enterprise catalogues.</strong> Deep customisation and
          multi-store power, with the budget and developer team that requires.
        </li>
        <li>
          <strong>Wix and Squarespace: best for very small catalogues.</strong> Website builders first, stores second.
          Good for a service business that sells a handful of products.
        </li>
        <li>
          <strong>Commerceflo by FactoryJet: for brands selling DTC, B2B, marketplace and in store from one stock
          pool.</strong> Our own platform, in early access. Only where it fits.
        </li>
      </ol>

      {/* Section: pricing */}
      <h2 id="pricing" className={h2Cls}>
        Ecommerce platform pricing in Australia: AUD list prices, USD traps and GST
      </h2>
      <p className={pCls}>
        Here is what each platform publishes for its plans, taken from the platform’s own Australian pricing page
        where one exists. Read the last column carefully. Two platforms bill Australian stores in AUD, one prices its
        Australian plans in US dollars, and GST is handled differently by each.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Official list prices per month, {CHECKED}. Platform fees only: payment processing, apps, themes and build
            work are extra. Not FactoryJet prices.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Platform</th>
              <th className="p-3.5 text-left font-semibold">Entry plan</th>
              <th className="p-3.5 text-left font-semibold">Middle plans</th>
              <th className="p-3.5 text-left font-semibold">Top plan</th>
              <th className="p-3.5 text-left font-semibold">Currency and GST</th>
              <th className="p-3.5 text-left font-semibold">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {priceRows.map((r) => (
              <tr key={r.platform}>
                <td className="p-3.5 font-semibold text-gray-900">{r.platform}</td>
                <td className="p-3.5">{r.entry}</td>
                <td className="p-3.5">{r.mid}</td>
                <td className="p-3.5">{r.top}</td>
                <td className="p-3.5">{r.billing}</td>
                <td className="p-3.5">
                  <a href={r.src} {...extLinkProps}>{r.srcLabel}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        <strong>The USD point matters more than it looks.</strong> BigCommerce’s Australian pricing page states that
        its prices are in US dollars and exclude all forms of tax, including GST. So an Australian store’s BigCommerce
        bill moves with the exchange rate, and GST is on top. Shopify and Maropost show AUD prices, so your monthly
        platform cost is fixed in the currency you earn in.
      </p>
      <p className={pCls}>
        <strong>GST on Shopify.</strong> Shopify’s help centre says Australian stores pay{' '}
        <a href={SRC.shopifyGst} {...extLinkProps}>10% GST on their Shopify subscription and shipping labels</a>, unless
        they register for GST and add their ABN to the Shopify account. The exemption applies to invoices issued after
        the ABN is added, so add it on day one if you are registered.
      </p>
      <p className={pCls}>
        <strong>Sales caps and auto-upgrades.</strong> BigCommerce plans are tied to trailing twelve-month sales:
        Core covers up to US$30K and Growth up to US$100K, after which you are upgraded automatically. Maropost plans
        include a monthly sales allowance (from $50K on Build to $10M on Enterprise) and bill a small percentage of
        sales above it, from 0.30% on Build down to 0.05% on Enterprise. Shopify lists its standard plans at a flat monthly fee.
      </p>
      <p className={pCls}>
        <strong>Platform fees are not the whole cost.</strong> Themes, apps, a designer or developer, migration and
        ongoing support usually cost more in year one than the plan itself. For build budgets, see our{' '}
        <a href="/blog/shopify-cost-australia-2026" className={linkCls}>Shopify cost guide for Australia</a> and{' '}
        <a href="/blog/website-cost-australia-2026" className={linkCls}>website cost guide for Australia</a>, which
        give sourced Australian market ranges for design and development.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/best-ecommerce-platform-australia-2026-compare.webp"
          alt="An ecommerce consultant and an outdoor gear shop owner in a Brisbane co-working space comparing three option cards on a table, one card orange"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          The right shortlist is usually two or three platforms, compared on your actual orders, not on feature lists.
        </figcaption>
      </figure>

      {/* Section: $100 sale */}
      <h2 id="100-dollar-sale" className={h2Cls}>
        What each platform takes from a $100 sale
      </h2>
      <p className={pCls}>
        Monthly fees are easy to compare. Per-order fees are where the real money goes once you are selling. The table
        below works through a single $100 order on each setup, using the published rates. Payment provider fees other
        than Shopify Payments vary by provider and contract, so they are shown as &ldquo;plus your provider’s
        fee&rdquo; rather than guessed.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Worked example on a $100 online order, from the rates on the{' '}
            <a href={SRC.shopify} target="_blank" rel="noopener noreferrer nofollow" className="underline">Shopify AU</a>{' '}
            and{' '}
            <a href={SRC.bigcommerce} target="_blank" rel="noopener noreferrer nofollow" className="underline">BigCommerce AU</a>{' '}
            pricing pages and the{' '}
            <a href={SRC.woocommerce} target="_blank" rel="noopener noreferrer nofollow" className="underline">WooCommerce</a>{' '}
            pricing page, {CHECKED}.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Setup</th>
              <th className="p-3.5 text-left font-semibold">Platform or payment fee on $100</th>
              <th className="p-3.5 text-left font-semibold">What else to know</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {feeRows.map((r) => (
              <tr key={r.setup}>
                <td className="p-3.5 font-semibold text-gray-900">{r.setup}</td>
                <td className="p-3.5">{r.platformFee}</td>
                <td className="p-3.5">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        Two practical takeaways. First, on Shopify, staying with Shopify Payments is what keeps fees low. The moment you
        route payments through another provider, Shopify adds its own third-party transaction fee (2% on Basic, 1% on
        Grow, 0.6% on Advanced and 0.2% on Plus) on top of that provider’s charge. Second, on BigCommerce, the provider
        you choose decides whether you pay a platform fee at all. Its Australian page lists Stripe, PayPal, Afterpay,
        Zip Money and others as embedded providers with no extra order fee.
      </p>
      <p className={pCls}>
        One caution on BigCommerce: the headline PayPal Braintree card rate on its pricing page (from 2.89% plus 29
        cents) is only for United States-based businesses, according to the same page. Australian stores pay the
        Australian rate of whichever provider they choose.
      </p>

      {/* Section: Australian checklist */}
      <h2 id="australian-checklist" className={h2Cls}>
        The Australian checklist: Afterpay and Zip, Australia Post, Xero and MYOB
      </h2>
      <p className={pCls}>
        Most global &ldquo;best ecommerce platform&rdquo; lists skip the things Australian stores deal with every day.
        This table shows how each platform handles them. Where a platform’s own page confirms something, we say so.
        Where it depends on an app or on current integrations, we tell you what to check rather than guess.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            From each platform’s pricing and help pages, {CHECKED}. Integrations change, so confirm before you commit.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Platform</th>
              <th className="p-3.5 text-left font-semibold">Afterpay and Zip</th>
              <th className="p-3.5 text-left font-semibold">Australia Post and couriers</th>
              <th className="p-3.5 text-left font-semibold">Xero and MYOB</th>
              <th className="p-3.5 text-left font-semibold">Billing and GST</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {auRows.map((r) => (
              <tr key={r.platform}>
                <td className="p-3.5 font-semibold text-gray-900">{r.platform}</td>
                <td className="p-3.5">{r.bnpl}</td>
                <td className="p-3.5">{r.shipping}</td>
                <td className="p-3.5">{r.accounting}</td>
                <td className="p-3.5">{r.gst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        <strong>Afterpay and Zip on Shopify.</strong> Shopify’s list of{' '}
        <a href={SRC.shopifyAuMethods} {...extLinkProps}>payment methods for Shopify Payments in Australia</a> covers
        cards, Apple Pay, Google Pay and Shop Pay, but not Afterpay or Zip. Those connect as separate payment providers.
        Before launch, check whether Shopify’s third-party transaction fee applies to them on your plan, because that
        changes the maths in the table above.
      </p>
      <p className={pCls}>
        <strong>Delivery options matter to Australian shoppers.</strong> The{' '}
        <a href={SRC.auspost} {...extLinkProps}>Australia Post eCommerce Report 2026</a> found that 69% of shoppers
        want a range of delivery options at checkout, and 26% expect same or next-day delivery when things are urgent.
        So live carrier rates, parcel locker and collection options, and clear delivery times at checkout are not
        extras. Every platform here can do this, but some need an app or a developer to do it well.
      </p>
      <p className={pCls}>
        <strong>Accounting.</strong> Every platform in this guide can send orders to Xero, and most to MYOB, through an
        app, extension or connector. The differences are in the detail: whether each order posts separately or as a
        daily summary, how GST and payment fees are coded, and how refunds flow back. Ask your bookkeeper to look at a
        test month of data before you choose. Our{' '}
        <a href="/au/shopify-development" className={linkCls}>Shopify development team in Australia</a> sets these
        connections up and tests them as part of a build.
      </p>

      {/* Section: platform reviews */}
      <h2 id="platform-reviews" className={h2Cls}>
        Each ecommerce platform in detail
      </h2>

      <h3 className={h3Cls}>1. Shopify: the best ecommerce platform for most Australian small businesses</h3>
      <p className={pCls}>
        Shopify is a hosted platform, which means Shopify runs the servers, security and updates, and you manage
        products, orders and design. On its{' '}
        <a href={SRC.shopify} {...extLinkProps}>Australian pricing page</a>, plans are listed in AUD: Basic at $56 a
        month ($42 paid yearly), Grow at $149 ($114 yearly) and Advanced at $575 ($431 yearly). There are no setup
        fees. Shopify Payments card rates start at 1.7% plus 30 cents on Basic and fall on each higher plan.
      </p>
      <p className={pCls}>
        <strong>Strengths:</strong> quickest route to a professional store, the largest app ecosystem, strong
        checkout, point of sale for physical shops, B2B features (up to 3 B2B catalogues on standard plans), and a big
        pool of Australian developers. <strong>Watch-outs:</strong> app subscriptions add up, the third-party
        transaction fee penalises other payment providers, and deep checkout changes need Shopify Plus.
      </p>
      <p className={pCls}>
        <strong>Best for:</strong> most DTC stores from first sale to several million in revenue, and shops that sell
        in person and online. If you want help, our{' '}
        <a href="/au/shopify-development" className={linkCls}>Shopify development service in Australia</a> covers
        design, build, integrations and support after launch.
      </p>

      <h3 className={h3Cls}>2. Shopify Plus: what it is and when it pays off</h3>
      <p className={pCls}>
        Shopify Plus is Shopify’s plan for larger and more complex businesses. Its{' '}
        <a href={SRC.shopifyPlus} {...extLinkProps}>Australian Plus pricing page</a> lists it from $3,700 AUD a month
        on a 3-year term, or $4,000 AUD a month on a 1-year term, with a variable platform fee based on revenue for
        more complex businesses. Your main store and 9 expansion stores are included; more stores cost $500 AUD a month
        each.
      </p>
      <p className={pCls}>
        What Plus adds over the standard plans: a fully customisable checkout, unlimited B2B catalogues, unlimited
        staff accounts, up to 200 point-of-sale Pro locations, priority support and the lowest Shopify Payments card
        rates (from 1.15% plus 30 cents). <strong>Shopify vs Shopify Plus</strong> comes down to this: if you are not
        blocked by checkout limits, B2B catalogue limits or multi-market needs, the standard plans are enough.
      </p>

      <h3 className={h3Cls}>3. BigCommerce: best for stores that want no platform transaction fees</h3>
      <p className={pCls}>
        BigCommerce is also hosted. Its{' '}
        <a href={SRC.bigcommerce} {...extLinkProps}>Australian pricing page</a> lists Core at US$39 a month (US$29
        billed yearly), Growth at US$105 (US$79 yearly), Scale at US$399 (US$299 yearly) and Performance from US$1,499 a
        month billed yearly. Prices are in US dollars and exclude GST. Plans are tied to sales: Core to US$30K and
        Growth to US$100K in trailing twelve-month sales, with automatic upgrades.
      </p>
      <p className={pCls}>
        <strong>Strengths:</strong> no BigCommerce order fee with embedded payment providers (the list includes
        Afterpay, Zip Money, Stripe and PayPal), real-time shipping quotes from carriers including Australia Post,
        price lists for B2B customer groups, and extra storefronts from one account. <strong>Watch-outs:</strong>
        USD billing, sales-based upgrades, and a smaller theme and app ecosystem than Shopify. We compared the two in
        detail in{' '}
        <a href="/blog/bigcommerce-vs-shopify-2026-fee-change" className={linkCls}>BigCommerce vs Shopify after the 2026 fee change</a>.
      </p>

      <h3 className={h3Cls}>4. WooCommerce: best for WordPress businesses that want full control</h3>
      <p className={pCls}>
        WooCommerce is a free plugin that turns a WordPress website into a store. Its{' '}
        <a href={SRC.woocommerce} {...extLinkProps}>pricing page</a> (global, in US dollars) says there is no monthly
        subscription and no revenue share. Instead, you choose your own hosting, which WooCommerce estimates at US$25
        to US$350 a month for most stores, and add paid extensions at US$29 to US$299 a year each.
      </p>
      <p className={pCls}>
        <strong>Strengths:</strong> you own everything, you can change anything, content and store live on one site,
        and there is no platform cut on orders. <strong>Watch-outs:</strong> someone has to own hosting, plugin
        updates, security and backups. Most WooCommerce problems we see are not platform problems; they are upkeep
        that nobody was responsible for. If you want WooCommerce but not the upkeep, our{' '}
        <a href="/au/website-maintenance" className={linkCls}>website maintenance and care plans in Australia</a>{' '}
        exist for exactly that.
      </p>

      <h3 className={h3Cls}>5. Maropost Commerce Cloud (formerly Neto): the Australian-built option</h3>
      <p className={pCls}>
        Maropost Commerce Cloud grew out of Neto, an Australian-built platform, and is aimed at retailers
        that run warehouses and wholesale. With the currency switch on its{' '}
        <a href={SRC.maropost} {...extLinkProps}>pricing page</a> set to AUD, plans list at $49 a month for Build
        (including $50K in monthly sales), $299 for Essentials (including $500K), $1,179 for Professional (including
        $2M) and $2,989 for Enterprise (including $10M). Paying yearly takes 20% off every plan except Build.
      </p>
      <p className={pCls}>
        <strong>Strengths:</strong> inventory, multiple stock locations and fulfilment are central, not add-ons, and
        plans are sold in AUD. <strong>Watch-outs:</strong> a smaller ecosystem of themes, apps and developers than
        Shopify, so check that the integrations you rely on are current. <strong>Maropost vs Shopify</strong> usually
        comes down to operations: if your pain is stock and fulfilment across locations, look hard at Maropost; if it
        is marketing, conversion and apps, Shopify is usually the easier fit.
      </p>

      <h3 className={h3Cls}>6. Adobe Commerce (Magento): best for complex enterprise catalogues</h3>
      <p className={pCls}>
        Adobe Commerce is the enterprise version of Magento. Adobe’s{' '}
        <a href={SRC.adobe} {...extLinkProps}>Australian product page</a> does not publish a price; you book a demo and
        receive a quote. <a href={SRC.magentoOpen} {...extLinkProps}>Magento Open Source</a>, the open edition, is
        downloaded and self-hosted, so you pay for hosting and developers rather than a licence.
      </p>
      <p className={pCls}>
        <strong>Strengths:</strong> very large catalogues, complex pricing rules, multi-brand and multi-store setups,
        and near-total customisation. <strong>Watch-outs:</strong> it needs an experienced development team and a
        maintenance budget to match. Many mid-sized Australian stores on older Magento versions are now weighing a{' '}
        <a href="/blog/magento-to-shopify-plus-migration-checklist-2026" className={linkCls}>Magento to Shopify Plus migration</a>.
      </p>

      <h3 className={h3Cls}>7. Wix and Squarespace: best for a handful of products</h3>
      <p className={pCls}>
        Wix and Squarespace are website builders with ecommerce plans. They are easy to use and look polished, which
        makes them a fair choice for a café, studio or service business selling a few products or gift vouchers. Both
        can show different prices depending on where you browse from, so check their pricing pages from Australia. As a catalogue
        grows past a few dozen products, or you need wholesale pricing, deeper shipping rules or serious marketing
        apps, a dedicated ecommerce platform becomes the better home.
      </p>

      <h3 className={h3Cls}>8. Commerceflo by FactoryJet: our own platform, and when it fits</h3>
      <p className={pCls}>
        Full disclosure: Commerceflo is ours. It is an AI commerce operator that puts DTC, B2B, marketplace and in-store
        selling on one data model, with AI agents that propose changes (to stock, pricing, content and customer
        follow-up) and act only after a person approves them or within limits the merchant sets. It is in early access,
        there are no public prices, and evaluation accounts are set up after a scoping call. We built Belle Maison’s DTC
        and B2B storefront on it.
      </p>
      <p className={pCls}>
        It fits a specific kind of business: one selling to consumers, trade customers and marketplaces from the same
        stock, where keeping those channels in sync is the daily headache. For most Australian stores, especially new
        ones, a mainstream platform is the better choice, and that is what we recommend. Read more on our{' '}
        <a href="/commerceflo" className={linkCls}>Commerceflo overview</a>.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/best-ecommerce-platform-australia-2026-dispatch.webp"
          alt="A young man in a bright Sydney dispatch room stacking plain cardboard parcels onto a trolley near an open roller door, a white van outside"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Shipping rates, labels and delivery options at checkout often decide the platform more than the storefront
          design does.
        </figcaption>
      </figure>

      {/* Section: head to head */}
      <h2 id="head-to-head" className={h2Cls}>
        Head to head: the three comparisons Australians search for most
      </h2>

      <h3 className={h3Cls}>Shopify vs WooCommerce</h3>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Question</th>
              <th className="p-3.5 text-left font-semibold">Shopify</th>
              <th className="p-3.5 text-left font-semibold">WooCommerce</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Who runs hosting and security?</td>
              <td className="p-3.5">Shopify, included in the plan</td>
              <td className="p-3.5">You or your host</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Monthly platform fee</td>
              <td className="p-3.5">From $56 AUD ($42 yearly)</td>
              <td className="p-3.5">None, but hosting is US$25 to US$350 by WooCommerce’s estimate</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Fee per order</td>
              <td className="p-3.5">Card rate via Shopify Payments, or 2% extra on Basic with another provider</td>
              <td className="p-3.5">Only your payment provider’s fee</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Ongoing upkeep</td>
              <td className="p-3.5">Low: apps and theme updates</td>
              <td className="p-3.5">Higher: WordPress, plugins, security, backups</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Best for</td>
              <td className="p-3.5">Most stores that want to focus on selling</td>
              <td className="p-3.5">WordPress sites with a developer or care plan behind them</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        In one line: Shopify trades some control for less upkeep; WooCommerce trades upkeep for full control. If nobody
        in your business will own updates and security, choose Shopify.
      </p>

      <h3 className={h3Cls}>BigCommerce vs Shopify</h3>
      <p className={pCls}>
        Both are hosted and both are strong. Shopify wins on ecosystem, AUD billing and ease. BigCommerce wins if you
        want to use a payment provider such as Stripe, PayPal, Afterpay or Zip Money without a platform order fee, and
        if built-in B2B price lists matter. The deciding question is usually: will the USD pricing and sales-based
        upgrades cost you more than Shopify’s third-party fee would? Model it on last year’s orders.
      </p>

      <h3 className={h3Cls}>Maropost vs Shopify</h3>
      <p className={pCls}>
        Maropost is the Australian-built choice for retailers where the warehouse is the hard part: stock across
        locations, wholesale and fulfilment. Shopify is the choice where growth and marketing are the hard part: apps,
        themes, conversion and channels. Many businesses moving from Neto to Shopify do it for the ecosystem; many that
        stay do it for the operations. Neither choice is wrong if it matches where your time goes.
      </p>

      {/* Section: by business type */}
      <h2 id="by-business" className={h2Cls}>
        The best ecommerce platform for your type of business
      </h2>
      <p className={pCls}>
        Open the one that sounds like you. Each gives a first choice and a runner-up.
      </p>
      <div className="space-y-3 mb-6">
        <details className={detailsCls} open>
          <summary className={summaryCls}>A small business starting its first online store</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify Basic. Quick to set up, billed in AUD, hosting included.{' '}
              <strong>Runner-up:</strong> BigCommerce Core if you plan to use Afterpay, Zip or Stripe heavily.
            </p>
            <p>
              Keep the first version small: a clean theme, good product photos, clear shipping and returns, and
              payments that customers trust. We deliver stores of up to 5 pages in 7 days when the content is ready.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A beginner who wants the easiest option</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify. <strong>Runner-up:</strong> Wix or Squarespace if you sell only a
              few products alongside a service. Avoid self-hosted platforms until someone can look after them.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A wholesaler or B2B seller with trade pricing</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify Plus or BigCommerce, depending on your pricing rules and budget.{' '}
              <strong>Runner-up:</strong> Maropost or Adobe Commerce for complex catalogues and warehouse workflows.
            </p>
            <p>
              B2B needs customer-specific price lists, account terms, quick reorder and sometimes quotes. Our guide to{' '}
              <a href="/blog/best-b2b-ecommerce-platform-manufacturers-distributors-2026" className={linkCls}>B2B ecommerce platforms for manufacturers and distributors</a>{' '}
              goes deeper.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A shop with a physical store and an online store</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify with point of sale, so stock and customers are shared.{' '}
              <strong>Runner-up:</strong> Maropost if you run several stock locations and a warehouse.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A content-led brand already on WordPress</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> WooCommerce, with a hosting and maintenance plan agreed up front.{' '}
              <strong>Runner-up:</strong> Shopify, keeping WordPress for content if it already ranks well.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A large catalogue or a multi-brand retailer</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify Plus or Adobe Commerce. <strong>Runner-up:</strong> a headless
              build, where a custom storefront sits on a commerce engine, if speed and design control are the priority.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A brand selling DTC, B2B and marketplaces from one stock pool</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>First choice:</strong> Shopify Plus with a solid inventory and order connector.{' '}
              <strong>Also consider:</strong> Commerceflo, our own platform, where keeping channels in sync is the main
              problem. We will tell you honestly which fits.
            </p>
          </div>
        </details>
        <details className={detailsCls}>
          <summary className={summaryCls}>A store where the lowest monthly cost matters most</summary>
          <div className={detailsBodyCls}>
            <p>
              <strong>Cheapest AUD plans:</strong> Shopify Basic paid yearly ($42 a month) and Maropost Build ($49 a
              month). <strong>No platform fee:</strong> WooCommerce, if you already pay for good hosting. Remember the
              cheapest plan is not the cheapest year once payment fees and apps are counted.
            </p>
          </div>
        </details>
      </div>

      <figure className="my-8">
        <img
          src="/blog-images/best-ecommerce-platform-australia-2026-shopfront.webp"
          alt="The owner of an Adelaide clothing boutique handing a paper shopping bag with an orange knit to a smiling customer across a white counter"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          If you also sell in person, pick a platform that shares stock and customers between the counter and the
          website.
        </figcaption>
      </figure>

      {/* Section: rules */}
      <h2 id="rules" className={h2Cls}>
        Selling online in Australia: ABN, GST and the Australian Consumer Law
      </h2>
      <p className={pCls}>
        These rules apply whichever platform you pick, so set them up properly on day one.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-6">
        <li>
          <strong>ABN and GST.</strong> According to{' '}
          <a href={SRC.gst} {...extLinkProps}>business.gov.au</a>, you must register for GST once your GST turnover
          reaches $75,000, even if your profit is lower. Its example is an online clothing store selling $80,000 a year
          that must register while making $40,000 profit. Turn on GST-inclusive pricing and tax settings in your
          platform before you launch.
        </li>
        <li>
          <strong>Consumer guarantees.</strong> The{' '}
          <a href={SRC.accc} {...extLinkProps}>ACCC says online businesses have the same responsibilities</a> to
          consumers as physical businesses, including the consumer guarantees. Your refund and returns pages, and the
          wording in your checkout, need to reflect that on any platform.
        </li>
        <li>
          <strong>Platform fees and GST.</strong> Shopify adds 10% GST to its subscription unless you are
          GST-registered and add your ABN. BigCommerce’s USD prices exclude GST. Ask your accountant how to treat GST
          on payment processing fees.
        </li>
        <li>
          <strong>The market is there.</strong> The Australia Post eCommerce Report 2026 says 82% of Australian
          households (9.8 million) shopped online in 2025, and online now makes up 24% of all retail spend.
        </li>
      </ul>

      {/* Section: how to choose */}
      <h2 id="choose" className={h2Cls}>
        How to choose your ecommerce platform in 7 steps
      </h2>
      <ol className="list-decimal pl-5 space-y-3 text-gray-700 leading-relaxed mb-6">
        <li>
          <strong>Write down your next 3 years, not your first month.</strong> Expected orders, catalogue size, B2B,
          physical stores and marketplaces.
        </li>
        <li>
          <strong>Decide who will look after the store.</strong> If nobody is accountable for updates and security,
          rule out self-hosted platforms.
        </li>
        <li>
          <strong>Model a year of fees.</strong> Plan fee plus payment fees on your real order count and average order
          value, plus the apps or extensions you need. Use the $100 table above as a starting point.
        </li>
        <li>
          <strong>Check the Australian must-haves.</strong> AUD billing, GST handling, Afterpay and Zip, Australia
          Post or courier rates, and a maintained Xero or MYOB connector.
        </li>
        <li>
          <strong>Test your hardest workflow.</strong> Trade pricing, bundles, pre-orders, subscriptions or multi-location
          stock. Run it in a free trial before you commit.
        </li>
        <li>
          <strong>Plan for search from day one.</strong> Clean URLs, fast pages, product schema and a redirect plan if
          you are moving. Our{' '}
          <a href="/au/ecommerce-seo" className={linkCls}>ecommerce SEO service for Australian stores</a> covers this.
        </li>
        <li>
          <strong>Pick a partner who stays after launch.</strong> The platform matters less than the team that
          designs, builds and supports it. Ask every agency what happens in month two.
        </li>
      </ol>

      {/* Section: switching */}
      <h2 id="switching" className={h2Cls}>
        Switching platforms (Neto, Magento or WooCommerce to Shopify) without losing rankings
      </h2>
      <p className={pCls}>
        Replatforming is common, and it goes wrong in predictable ways. Products, customers and order history can be
        moved with migration tools. The risk is everything around them: every old URL needs a 301 redirect to its new
        address, or you lose the Google rankings those pages earned. Reviews, gift card balances, customer passwords
        (which usually cannot move), Xero or MYOB connections and shipping rules all need a plan.
      </p>
      <p className={pCls}>
        A safe migration runs in this order: audit what ranks and sells today, map every URL, build and test the new
        store, move data in a trial run, check totals, switch at a quiet trading time, then watch search and orders
        daily for a few weeks. We run these moves as part of our{' '}
        <a href="/au/ecommerce-development" className={linkCls}>ecommerce development service in Australia</a>.
      </p>

      {/* Section: where FactoryJet fits */}
      <h2 className={h2Cls}>Where FactoryJet fits</h2>
      <p className={pCls}>
        FactoryJet is an ecommerce services company, founded in 2014 and led by founder and CEO Bhavesh Barot, and we
        have served more than 500 businesses. We are a registered Shopify Partner and work across Shopify, Shopify
        Plus, BigCommerce, WooCommerce and Adobe Commerce. We design, build, implement and support the store, and you
        own it.
      </p>
      <p className={pCls}>
        For timelines: stores of up to 5 pages come with 7-day delivery once content is ready; a custom-theme store on
        a platform typically takes 3 to 5 weeks; advanced builds with subscriptions, B2B or migration take 5 to 8
        weeks; and headless or fully custom builds take 8 to 14 weeks. We keep 97% of projects on time. We quote a
        fixed scope after a call, and we will tell you if a cheaper platform or a DIY start is the smarter move.
      </p>
      <p className={pCls}>
        More for Australian businesses: our <a href="/au" className={linkCls}>FactoryJet Australia</a> home page, the{' '}
        <a href="/au/ecommerce-development" className={linkCls}>ecommerce development</a> and{' '}
        <a href="/au/shopify-development" className={linkCls}>Shopify development</a> services, and our list of the{' '}
        <a href="/blog/best-ecommerce-agency-small-business-australia-2026" className={linkCls}>best ecommerce agencies for Australian small businesses</a>.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 my-10">
        <p className="text-xl font-bold text-gray-900 mb-2">Not sure which platform fits your store?</p>
        <p className="text-gray-700 mb-5 leading-relaxed">
          Send us your catalogue size, order volume and the channels you sell on. We will tell you which two platforms
          to shortlist and why, with no obligation.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Talk to the Founder
          </a>
          <a
            href="/au/ecommerce-development"
            className="inline-block bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See our Australian ecommerce service
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-8 leading-relaxed">
        Sources, {CHECKED}:{' '}
        <a href={SRC.shopify} {...extLinkProps}>Shopify AU pricing</a>,{' '}
        <a href={SRC.shopifyPlus} {...extLinkProps}>Shopify Plus AU pricing</a>,{' '}
        <a href={SRC.shopifyGst} {...extLinkProps}>Shopify help: GST on billing in Australia</a>,{' '}
        <a href={SRC.shopifyAuMethods} {...extLinkProps}>Shopify Payments methods in Australia</a>,{' '}
        <a href={SRC.bigcommerce} {...extLinkProps}>BigCommerce AU pricing</a>,{' '}
        <a href={SRC.maropost} {...extLinkProps}>Maropost pricing (AUD view)</a>,{' '}
        <a href={SRC.woocommerce} {...extLinkProps}>WooCommerce pricing</a>,{' '}
        <a href={SRC.adobe} {...extLinkProps}>Adobe Commerce AU</a>,{' '}
        <a href={SRC.auspost} {...extLinkProps}>Australia Post eCommerce Report 2026</a>,{' '}
        <a href={SRC.gst} {...extLinkProps}>business.gov.au GST registration</a>,{' '}
        <a href={SRC.accc} {...extLinkProps}>ACCC: selling online</a>. Prices change; check the platform’s page before
        you commit.
      </p>
    </>
  ),
};
