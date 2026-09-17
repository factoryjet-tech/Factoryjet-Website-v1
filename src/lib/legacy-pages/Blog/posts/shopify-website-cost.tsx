import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '../data.types';

const cell: React.CSSProperties = { padding: '8px 12px', border: '1px solid #e2e8f0' };
const headCell: React.CSSProperties = { padding: '8px 12px', border: '1px solid #e2e8f0', textAlign: 'left' };

export const post: BlogPost = {
  id: '231',
  slug: 'shopify-website-cost',
  title: 'How Much Does a Shopify Website Cost in 2026? (Real Numbers)',
  excerpt:
    'For many stores the Shopify plan is not the biggest bill. Here is the full cost of owning a Shopify store in 2026, from the plan and card fees to themes, apps and domain, with every Shopify price checked against Shopify\'s own pages and three example budgets you can copy.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 17, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/shopify-website-cost-2026.webp',
  meta: {
    title: 'How Much Does a Shopify Website Cost in 2026? (Real Numbers)',
    description:
      'What a Shopify store costs to own in 2026: plans from $29 to $2,300 a month, card fees, themes, apps and domain, checked on Shopify\'s own pricing pages.',
  },
  keyTakeaways: [
    'Shopify plans cost $29 (Basic), $79 (Grow) and $299 (Advanced) a month billed yearly, or $39, $105 and $399 billed monthly. Shopify Plus starts at $2,300 a month. All from Shopify\'s US pricing page, September 16, 2026.',
    'Card fees grow with you. On Basic, Shopify Payments charges 2.9% + 30¢ per online card sale, so Shopify keeps $3.20 of a $100 sale. Past about $1,000 a month in online sales, card fees cost more than the Basic plan.',
    'Use a payment provider other than Shopify Payments and Shopify adds its own fee: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus.',
    'A lean first year on Basic with a free theme, a $9 domain and free apps costs about $357 before card fees. A growing store on Grow with a paid theme and two paid apps costs about $1,477 to $1,877.',
    'Paid themes cost $100 to $500 once, and 24 themes are free. Apps are the cost that creeps, because most start free and charge more as you grow.',
    'Upgrading from Basic to Grow only pays for itself on card fees at about $25,000 a month in online sales. Upgrade for features, not for the card rate.',
    'Building the store is a separate, one-time bill. Developer and agency rates are in our Shopify development cost guide.',
  ],
  faqs: [
    {
      q: 'How much does a Shopify website cost in 2026?',
      a: 'To own and run, a Shopify store costs $29 to $399 a month for the plan: Basic $29, Grow $79 and Advanced $299 billed yearly, or $39, $105 and $399 billed monthly, per Shopify\'s US pricing page in September 2026. Add card fees of 2.25% to 2.9% + 30¢ per online sale, a domain from $9 a year, an optional theme at $100 to $500 once, and apps. A lean first year on Basic costs about $357 before card fees. Building the store is a separate, one-time cost.',
    },
    {
      q: 'How much does a Shopify store cost per month?',
      a: 'The plan costs $29 (Basic), $79 (Grow) or $299 (Advanced) a month on yearly billing, or $39, $105 or $399 paid monthly. Shopify Plus starts at $2,300 a month. Apps usually add to that: Judge.me reviews is free or $15 a month, and Klaviyo email is free up to 250 contacts, then $20 a month for up to 500. Card fees come on top and grow with your sales.',
    },
    {
      q: 'How much is Shopify a year?',
      a: 'On yearly billing, Basic costs $348 a year, Grow $948 and Advanced $3,588, per Shopify\'s US pricing page in September 2026. Paying monthly instead costs $468, $1,260 and $4,788 a year, so yearly billing saves $120 to $1,200. Add a domain from $9 a year. Card fees, apps and any paid theme are extra.',
    },
    {
      q: 'How much does Shopify take from a $100 sale?',
      a: 'On the Basic plan with Shopify Payments, a $100 online sale paid with a standard card costs $3.20 (2.9% + 30¢), so you keep $96.80. In person it costs $2.70 (2.6% + 10¢). On Grow the online fee drops to $3.00, on Advanced to $2.80 and on Plus to $2.55. If you use a different payment provider, Shopify takes 2% on Basic ($2) on top of that provider\'s own fee.',
    },
    {
      q: 'How much does Shopify charge in fees?',
      a: 'Three kinds. The monthly plan fee. Card processing through Shopify Payments, with online standard card rates of 2.9% on Basic, 2.7% on Grow, 2.5% on Advanced and 2.25% on Plus, each plus 30¢. And a third-party transaction fee only if you use another payment provider: 2%, 1%, 0.6% or 0.2% by plan. Shopify says there are no setup fees on any plan. Premium and international cards cost more.',
    },
    {
      q: 'How much is the Shopify transaction fee?',
      a: 'Shopify only charges a transaction fee when you use a payment provider other than Shopify Payments: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus, per Shopify\'s US pricing page in September 2026. With Shopify Payments there is no separate transaction fee, just the card rate, which starts at 2.9% + 30¢ online on Basic.',
    },
    {
      q: 'What is the total cost of a Shopify store for a small business?',
      a: 'Using Shopify\'s September 2026 prices, a lean first year on Basic with a free theme, a $9 domain and free apps costs about $357 before card fees. A growing store on Grow with a paid theme, a paid reviews app and Klaviyo email for up to 500 contacts costs about $1,477 to $1,877. Card fees come on top: a Basic store selling $2,000 a month online in 40 orders pays about $840 a year.',
    },
    {
      q: 'What does a basic Shopify store cost?',
      a: 'A basic Shopify store you set up yourself costs $29 a month on the Basic plan billed yearly, or $39 billed monthly, plus a domain from $9 a year. Shopify offers 24 free themes, and apps like Judge.me reviews and Shopify\'s built-in email (10,000 emails a month free) have free options. That puts year one at about $357 before card fees. Hiring someone to set it up is a separate one-time cost.',
    },
    {
      q: 'How much is the Shopify Grow plan?',
      a: 'Grow costs $79 a month billed yearly ($948 a year) or $105 a month billed monthly, per Shopify\'s US pricing page in September 2026. It lowers the online card rate to 2.7% + 30¢ and the third-party payment fee to 1%, and adds up to 5 staff accounts. On card fees alone, upgrading from Basic only pays for itself at about $25,000 a month in online sales.',
    },
    {
      q: 'How much does Shopify Plus cost?',
      a: 'Shopify Plus starts at $2,300 a month, according to Shopify\'s US pricing page in September 2026. Card rates on Plus start at 2.25% + 30¢ online, and the fee for using another payment provider is 0.2%. Plus adds features such as unlimited staff accounts, a fully customizable checkout and unlimited B2B catalogs. Our separate guide to the true cost of Shopify Plus covers when the upgrade pays off.',
    },
    {
      q: 'Does Shopify still have a Starter plan?',
      a: 'Shopify\'s US pricing page does not list a Starter plan. As of September 16, 2026 it lists Basic, Grow, Advanced and Plus, plus an Agentic plan at $0 a month for selling in AI channels, where you pay card rates from 2.9% + 30¢ when you make a sale. The old shopify.com/starter address now sends visitors to Shopify\'s free trial page.',
    },
    {
      q: 'How much does a Shopify theme cost?',
      a: 'Shopify\'s Theme Store lists 24 free themes and 1,248 paid themes. Paid themes cost $100 to $500 as a one-time payment with a lifetime license for your store, so there is no monthly theme fee. A fully custom theme built by a developer is a different, much larger cost, covered in our Shopify development cost guide.',
    },
    {
      q: 'How much does a domain cost on Shopify?',
      a: 'Shopify says its domains typically start at $9 a year, billed annually, and the price includes registration, automatic renewal and free WHOIS privacy protection. Premium names and some extensions cost more. You can also connect a domain you already own from another registrar.',
    },
    {
      q: 'How much do Shopify apps cost?',
      a: 'Most popular apps start free and charge as you grow. Judge.me reviews has a free plan and an Awesome plan at $15 a month. Klaviyo is free for up to 250 email contacts and $20 a month for 251 to 500, with SMS from $15 a month. Shopify\'s own email tool sends 10,000 emails a month free, then $1 per 1,000. The real cost is the number of apps, so review your list every quarter.',
    },
    {
      q: 'Does Shopify have setup fees or hidden fees?',
      a: 'Shopify says there are no setup fees on any plan. The costs people miss are not hidden, just easy to overlook: the third-party transaction fee if you do not use Shopify Payments, higher rates for premium and international cards, a 1% fee on synced marketplace orders above 50 a month (capped at $99), POS Pro at $89 a month per location, and app subscriptions.',
    },
    {
      q: 'Is Shopify still worth it in 2026?',
      a: 'For most stores that sell mainly online, yes. For $29 to $399 a month you get hosting, an SSL certificate, checkout and payments in one place, with no setup fees. It stops being good value when apps pile up, when you pay the extra 0.2% to 2% fee for using another payment provider, or when a marketplace like Etsy would bring buyers you cannot yet reach yourself. Run the numbers for your sales volume first.',
    },
    {
      q: 'What is the downside of Shopify?',
      a: 'Mostly cost creep. The plan fee is fixed, but card fees grow with sales, apps add monthly charges, and using a payment provider other than Shopify Payments adds a 0.2% to 2% Shopify fee on top. Shopify Payments is only available in certain countries. Paid themes and custom features cost extra, and moving a large store off Shopify later takes real work.',
    },
    {
      q: 'Is it cheaper to sell on Etsy or Shopify?',
      a: 'Etsy is cheaper to start and Shopify is cheaper to grow. Etsy has no monthly plan but charges $0.20 per listing and a 6.5% transaction fee on each sale, plus payment processing. Shopify Basic costs $29 a month billed yearly plus card fees. Etsy\'s 6.5% equals Shopify Basic\'s plan fee at about $446 of monthly sales, so above that Shopify usually costs less. Etsy brings its own shoppers; on Shopify you find your own.',
    },
    {
      q: 'Is Shopify cheaper than WooCommerce?',
      a: 'Not on paper. WooCommerce has no monthly platform fee and is free to download, while Shopify Basic costs $29 a month billed yearly. But WooCommerce needs hosting, security and updates that you pay for or handle yourself, and Shopify includes hosting and an SSL certificate. For owners who do not want to manage a website, Shopify is usually the cheaper total. Our Shopify vs WooCommerce breakdown runs the numbers.',
    },
    {
      q: 'Can I build a Shopify store myself without a developer?',
      a: 'Yes. Shopify is built for non-technical owners: you can pick one of the 24 free themes, add products, set up payments and launch without code. Doing it yourself keeps year one on Basic to about $357 before card fees. Hire help when you need custom features or integrations, or when your time is worth more than the setup cost, which our Shopify development cost guide breaks down.',
    },
    {
      q: 'How much should I budget for a Shopify store launch?',
      a: 'Split it into two budgets. The owning budget, from Shopify\'s September 2026 prices, is about $357 for a lean first year on Basic, or $1,477 to $1,877 for a growing store on Grow with a paid theme and two paid apps, before card fees. The build budget is separate and depends on who sets the store up and how custom it is. Product photos and copy are the costs people most often forget.',
    },
  ],
  content: (
    <>
      <div className="bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 rounded-r-xl mb-8">
        <p className="font-semibold text-gray-900 mb-2">Quick Answer</p>
        <p className="text-gray-700">
          A Shopify store costs <strong>$29 to $399 a month</strong> for the plan: Basic $29, Grow
          $79 and Advanced $299 billed yearly, or $39, $105 and $399 billed monthly. Shopify Plus
          starts at $2,300 a month. On top of that you pay card fees of 2.25% to 2.9% + 30¢ per
          online sale through Shopify Payments, a domain from $9 a year, an optional theme at $100
          to $500 once, and any apps. A lean first year on Basic costs about $357 before card fees.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-4">
        Most Shopify cost guides blend two different bills. One is what you pay once to get a store
        built. The other is what you pay every month for as long as the store exists: the plan, card
        fees, apps, theme and domain. This guide is about the second bill, the cost of owning a
        Shopify store. If you are pricing a developer or an agency, our{' '}
        <Link href="/blog/shopify-development-cost-2026" className="text-[#B23E13] hover:underline">
          Shopify development cost guide
        </Link>{' '}
        covers that bill.
      </p>

      <p className="mb-8">
        Every Shopify price below comes from Shopify&apos;s own pages: plan prices and payment
        rates from{' '}
        <a
          href="https://www.shopify.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify&apos;s US pricing page
        </a>{' '}
        as listed on September 16, 2026, and theme, domain and email prices from the{' '}
        <a
          href="https://themes.shopify.com/themes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify Theme Store
        </a>
        ,{' '}
        <a
          href="https://www.shopify.com/domains"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify Domains
        </a>{' '}
        and{' '}
        <a
          href="https://www.shopify.com/email-marketing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify Messaging
        </a>{' '}
        pages, checked September 17, 2026. App prices come from each app&apos;s Shopify App Store
        listing. Prices change, so check them again before you commit.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="plans" className="text-2xl font-bold mt-8 mb-4">
        Shopify Plans and Monthly Fees in 2026
      </h2>
      <p className="mb-4">
        Every Shopify store pays for one plan. Here is what each costs and what it charges on card
        payments:
      </p>

      <div className="overflow-x-auto mb-4">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937', color: '#fff' }}>
              <th style={headCell}>Plan</th>
              <th style={headCell}>Billed yearly</th>
              <th style={headCell}>Billed monthly</th>
              <th style={headCell}>Online card rate (Shopify Payments)</th>
              <th style={headCell}>Fee with another payment provider</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Basic</strong>
              </td>
              <td style={cell}>$29/mo</td>
              <td style={cell}>$39/mo</td>
              <td style={cell}>2.9% + 30¢</td>
              <td style={cell}>2%</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Grow</strong>
              </td>
              <td style={cell}>$79/mo</td>
              <td style={cell}>$105/mo</td>
              <td style={cell}>2.7% + 30¢</td>
              <td style={cell}>1%</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Advanced</strong>
              </td>
              <td style={cell}>$299/mo</td>
              <td style={cell}>$399/mo</td>
              <td style={cell}>2.5% + 30¢</td>
              <td style={cell}>0.6%</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Plus</strong>
              </td>
              <td style={cell}>Not listed</td>
              <td style={cell}>Starts at $2,300/mo</td>
              <td style={cell}>2.25% + 30¢</td>
              <td style={cell}>0.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        <em>
          Source:{' '}
          <a
            href="https://www.shopify.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            shopify.com/pricing
          </a>{' '}
          (US), as listed on September 16, 2026. Card rates are for standard online card payments.
        </em>
      </p>

      <p className="mb-4">
        Shopify says there are <strong>no setup fees on any plan</strong>, and every plan includes
        hosting, a free SSL certificate (the padlock that encrypts your checkout) and a custom domain
        connection. New stores get a 3-day free
        trial, and Shopify&apos;s current offer is $1 a month for the first 3 months on most plans.
        Offers change, so budget with the full price.
      </p>
      <p className="mb-4">
        Yearly billing is the easiest saving on this page. Compared with paying monthly, it cuts $120
        a year off Basic, $312 off Grow and $1,200 off Advanced.
      </p>
      <p className="mb-8">
        Shopify also lists an <strong>Agentic plan at $0 a month</strong> for selling in AI
        channels. You add products to Shopify&apos;s Catalog, choose which AI channels to sell in,
        and pay card rates from 2.9% + 30¢ when you make a sale. If AI shopping assistants matter to
        your store, our{' '}
        <Link href="/agentic-commerce" className="text-[#B23E13] hover:underline">
          agentic commerce guide
        </Link>{' '}
        covers getting a store ready for AI agents that browse and buy.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="payment-fees" className="text-2xl font-bold mt-8 mb-4">
        What Shopify Takes From a $100 Sale
      </h2>
      <p className="mb-4">
        Card fees are the part of the bill that grows with your sales, so it helps to see them in
        dollars. Here is what Shopify keeps from a $100 sale on each plan, worked out from
        Shopify&apos;s listed rates:
      </p>

      <div className="overflow-x-auto mb-4">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937', color: '#fff' }}>
              <th style={headCell}>Plan</th>
              <th style={headCell}>Online card sale</th>
              <th style={headCell}>In-person card sale</th>
              <th style={headCell}>Another payment provider</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Basic</strong>
              </td>
              <td style={cell}>$3.20</td>
              <td style={cell}>$2.70</td>
              <td style={cell}>$2.00 plus the provider&apos;s fee</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Grow</strong>
              </td>
              <td style={cell}>$3.00</td>
              <td style={cell}>$2.60</td>
              <td style={cell}>$1.00 plus the provider&apos;s fee</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Advanced</strong>
              </td>
              <td style={cell}>$2.80</td>
              <td style={cell}>$2.50</td>
              <td style={cell}>$0.60 plus the provider&apos;s fee</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Plus</strong>
              </td>
              <td style={cell}>$2.55</td>
              <td style={cell}>$2.40</td>
              <td style={cell}>$0.20 plus the provider&apos;s fee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        <em>
          Standard cards. Shopify lists premium cards at 3.5% + 30¢ online on Basic and adds 1% for
          international cards.
        </em>
      </p>

      <p className="mb-4">
        <strong>The upgrade math most owners never run.</strong> Grow costs $50 a month more than
        Basic on yearly billing and saves 0.2 percentage points on online card fees. On card fees
        alone, that only pays for itself once you sell about $25,000 a month online. Advanced saves
        another 0.2 points for $220 more a month than Grow, which breaks even around $110,000 a
        month. Upgrade for features you need, such as more staff accounts, not for the card rate.
      </p>
      <p className="mb-8">
        <strong>Using a payment provider other than Shopify Payments</strong> adds Shopify&apos;s
        own fee on top of that provider&apos;s charges: 2% on Basic, 1% on Grow, 0.6% on Advanced
        and 0.2% on Plus. On $10,000 of monthly sales on Basic, that is $200 a month to Shopify
        before the provider takes its cut. Shopify Payments is only available in certain countries,
        so check yours before you budget.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="themes-apps" className="text-2xl font-bold mt-8 mb-4">
        Themes, Domain and Apps
      </h2>

      <h3 className="text-xl font-bold mt-6 mb-3">Theme: $0, or $100 to $500 Paid Once</h3>
      <p className="mb-4">
        Shopify&apos;s{' '}
        <a
          href="https://themes.shopify.com/themes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Theme Store
        </a>{' '}
        lists 24 free themes and 1,248 paid ones. Paid themes cost $100 to $500 as a one-time
        payment, with a lifetime license for your store and no expiration. A free theme is enough to
        launch. Pay for a theme when it already does something your catalog needs that you would
        otherwise pay a developer to build.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Domain: From $9 a Year</h3>
      <p className="mb-4">
        Shopify sells domains that typically start at $9 a year, billed annually, including
        automatic renewal and free WHOIS privacy protection, which keeps your personal contact
        details out of public domain lookups. Premium names and some extensions cost
        more. If you already own a domain, you can connect it to your store instead of buying a new
        one.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Apps: The Monthly Cost That Creeps</h3>
      <p className="mb-4">
        Apps are where a cheap store quietly becomes an expensive one. Most popular apps start free
        and charge more as you grow, so the bill rises without anyone deciding to spend more. Four
        real examples, from their Shopify App Store listings and Shopify&apos;s own email pricing page:
      </p>
      <div className="overflow-x-auto mb-4">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937', color: '#fff' }}>
              <th style={headCell}>What it does</th>
              <th style={headCell}>Tool</th>
              <th style={headCell}>Free option</th>
              <th style={headCell}>First paid step</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>Product reviews</td>
              <td style={cell}>Judge.me</td>
              <td style={cell}>Forever Free plan</td>
              <td style={cell}>$15/mo (Awesome plan)</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>Email marketing</td>
              <td style={cell}>Klaviyo</td>
              <td style={cell}>Free up to 250 contacts</td>
              <td style={cell}>$20/mo for 251–500 contacts</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>SMS marketing</td>
              <td style={cell}>Klaviyo</td>
              <td style={cell}>150 free SMS/MMS credits</td>
              <td style={cell}>$15/mo for up to 1,250 credits</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>Email built into Shopify</td>
              <td style={cell}>Shopify Messaging</td>
              <td style={cell}>10,000 emails a month</td>
              <td style={cell}>$1 per 1,000 extra emails</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        <em>
          Sources:{' '}
          <a
            href="https://apps.shopify.com/judgeme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            Judge.me
          </a>{' '}
          and{' '}
          <a
            href="https://apps.shopify.com/klaviyo-email-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            Klaviyo
          </a>{' '}
          Shopify App Store listings and{' '}
          <a
            href="https://www.shopify.com/email-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            Shopify Messaging pricing
          </a>
          , checked September 17, 2026.
        </em>
      </p>
      <p className="mb-8">
        The trap is not one app. It is ten small subscriptions that nobody reviews after launch. Put
        every app on a list with its monthly price, and check that list every quarter.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3">Want the setup cost added to this?</h3>
        <p className="mb-4">This page covers what Shopify charges you to own a store. If you also want the build priced, FactoryJet scopes Shopify projects on a short call and puts the figure in writing before any work starts.</p>
        <a href="/services/shopify-development" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">See Shopify development &rarr;</a>
      </div>

      <hr className="my-8 border-gray-200" />

      <h2 id="total-cost" className="text-2xl font-bold mt-8 mb-4">
        Total Cost of Owning a Shopify Store: Three Example Budgets
      </h2>
      <p className="mb-4">
        Here is what the first year looks like for three kinds of store, using only the prices
        above. Card fees are left out of the table because they depend on your sales, and they come
        right after it.
      </p>

      <div className="overflow-x-auto mb-4">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937', color: '#fff' }}>
              <th style={headCell}>Cost line</th>
              <th style={headCell}>Lean start</th>
              <th style={headCell}>Growing store</th>
              <th style={headCell}>Established store</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Plan, billed yearly</strong>
              </td>
              <td style={cell}>Basic: $348</td>
              <td style={cell}>Grow: $948</td>
              <td style={cell}>Advanced: $3,588</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Domain</strong>
              </td>
              <td style={cell}>$9+</td>
              <td style={cell}>$9+</td>
              <td style={cell}>$9+</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Theme (one-time)</strong>
              </td>
              <td style={cell}>$0 (free theme)</td>
              <td style={cell}>$100–$500</td>
              <td style={cell}>$100–$500</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Reviews app</strong>
              </td>
              <td style={cell}>$0 (Judge.me free plan)</td>
              <td style={cell}>$180 (Judge.me Awesome)</td>
              <td style={cell}>$180 (Judge.me Awesome)</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Email marketing</strong>
              </td>
              <td style={cell}>$0 (Shopify Messaging, under 10,000 emails a month)</td>
              <td style={cell}>$240 (Klaviyo, 251–500 contacts)</td>
              <td style={cell}>Depends on list size</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Selling in person</strong>
              </td>
              <td style={cell}>Not needed</td>
              <td style={cell}>Not needed</td>
              <td style={cell}>$1,068 per location (POS Pro)</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Year-one total, before card fees</strong>
              </td>
              <td style={cell}>
                <strong>About $357</strong>
              </td>
              <td style={cell}>
                <strong>About $1,477–$1,877</strong>
              </td>
              <td style={cell}>
                <strong>About $4,945–$5,345, plus email</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        <em>
          Our arithmetic on the published prices above. POS Pro is $89 a month per location.
        </em>
      </p>

      <p className="mb-4">
        <strong>Now add card fees.</strong> A Basic store selling $2,000 a month online across 40
        orders pays about $70 a month at 2.9% + 30¢, or $840 a year, more than double its $348 plan.
        That is normal, not a warning sign: the fee only exists because you are selling. Once a store
        sells more than about $1,000 a month online, card fees usually cost more than the Basic plan
        itself.
      </p>
      <p className="mb-8">
        The pattern across all three budgets: the plan is the predictable part, card fees scale with
        revenue, and apps are the part you control. For a platform-level comparison over several
        years, see our{' '}
        <Link
          href="/blog/shopify-vs-woocommerce-us-small-business-2026"
          className="text-[#B23E13] hover:underline"
        >
          Shopify vs WooCommerce breakdown
        </Link>
        .
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="hidden-costs" className="text-2xl font-bold mt-8 mb-4">
        Ongoing Costs People Forget
      </h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>
          <strong>Premium and international cards.</strong> Shopify lists premium cards at 3.5% +
          30¢ online on Basic, and adds 1% for international cards.
        </li>
        <li>
          <strong>Marketplace orders.</strong> Syncing orders from marketplaces is free for the first
          50 a month, then 1% of those sales, capped at $99 a month.
        </li>
        <li>
          <strong>Selling in person.</strong> POS Pro costs $89 a month per location, and in-person
          card rates run from 2.6% + 10¢ on Basic down to 2.3% + 10¢ on Plus.
        </li>
        <li>
          <strong>Email volume.</strong> Shopify Messaging is free up to 10,000 emails a month, then
          $1 per 1,000 emails, with lower rates after 300,000 a month.
        </li>
        <li>
          <strong>Apps after free trials.</strong> Many apps start with a free trial and then bill
          monthly. Check your app list before each renewal.
        </li>
        <li>
          <strong>Changes after launch.</strong> New sections, integrations and fixes need a
          developer&apos;s time. Our{' '}
          <Link href="/blog/shopify-development-cost-2026" className="text-[#B23E13] hover:underline">
            Shopify development cost guide
          </Link>{' '}
          covers those rates.
        </li>
        <li>
          <strong>Moving to Shopify Plus.</strong> Plus starts at $2,300 a month. Read{' '}
          <Link href="/blog/the-true-cost-of-shopify-plus-2026" className="text-[#B23E13] hover:underline">
            the true cost of Shopify Plus
          </Link>{' '}
          before your sales make the upgrade look inevitable.
        </li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <h2 id="developer-cost" className="text-2xl font-bold mt-8 mb-4">
        Where Developer and Agency Costs Fit
      </h2>
      <p className="mb-4">
        Hiring help is a one-time cost that sits on top of everything above. A developer or agency
        can set up your theme, load products, connect payments and shipping, and build custom
        features. What you pay depends on scope, experience and where the developer is based. Our{' '}
        <Link
          href="/blog/shopify-development-cost-2026"
          className="text-[#B23E13] font-semibold underline hover:text-[#9A3510]"
        >
          Shopify development cost guide
        </Link>{' '}
        breaks down hourly rates and project prices, so this page does not repeat them.
      </p>
      <p className="mb-8">
        Two things cut that bill no matter who you hire: product photos, copy and brand assets ready
        before work starts, and a theme that already does most of what you need. When you want a
        fixed scope for your own store, our{' '}
        <Link href="/services/shopify-development" className="text-[#B23E13] hover:underline">
          Shopify development team
        </Link>{' '}
        will price it.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="compare" className="text-2xl font-bold mt-8 mb-4">
        Shopify vs Etsy vs WooCommerce: What Each Costs to Run
      </h2>
      <div className="overflow-x-auto mb-4">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#1f2937', color: '#fff' }}>
              <th style={headCell}>Cost</th>
              <th style={headCell}>Shopify (Basic)</th>
              <th style={headCell}>Etsy</th>
              <th style={headCell}>WooCommerce</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Monthly platform fee</strong>
              </td>
              <td style={cell}>$29 billed yearly, $39 monthly</td>
              <td style={cell}>None</td>
              <td style={cell}>None for the plugin</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Fee per sale</strong>
              </td>
              <td style={cell}>2.9% + 30¢ card rate (Shopify Payments)</td>
              <td style={cell}>6.5% transaction fee, plus payment processing</td>
              <td style={cell}>Your payment processor&apos;s fee</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Listing fee</strong>
              </td>
              <td style={cell}>None</td>
              <td style={cell}>$0.20 per item</td>
              <td style={cell}>None</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={cell}>
                <strong>Hosting</strong>
              </td>
              <td style={cell}>Included</td>
              <td style={cell}>Not needed (marketplace)</td>
              <td style={cell}>You pay for it separately</td>
            </tr>
            <tr style={{ backgroundColor: '#fff' }}>
              <td style={cell}>
                <strong>Who brings the shoppers</strong>
              </td>
              <td style={cell}>You do</td>
              <td style={cell}>Etsy&apos;s marketplace</td>
              <td style={cell}>You do</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        <em>
          Sources: Shopify US pricing page (September 16, 2026);{' '}
          <a
            href="https://www.etsy.com/legal/fees/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            Etsy Fees &amp; Payments Policy
          </a>{' '}
          (August 2026);{' '}
          <a
            href="https://woocommerce.com/woocommerce/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            WooCommerce
          </a>
          .
        </em>
      </p>
      <p className="mb-8">
        Etsy is cheaper to start and Shopify is cheaper to grow. Etsy&apos;s 6.5% transaction fee
        equals Shopify Basic&apos;s $29 plan at about $446 of monthly sales, so above that level
        Shopify&apos;s flat fee usually costs less, before counting card processing on either
        platform. The bigger difference is traffic: Etsy brings shoppers, and on Shopify you find
        your own. For Shopify against WooCommerce in more detail, see our{' '}
        <Link
          href="/comparisons/shopify-vs-woocommerce"
          className="text-[#B23E13] font-semibold underline hover:text-[#9A3510]"
        >
          Shopify vs WooCommerce 2026 comparison
        </Link>
        .
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 id="bottom-line" className="text-2xl font-bold mt-8 mb-4">
        The Bottom Line on Shopify Website Cost
      </h2>
      <p className="mb-4">
        In our three example budgets, the first year of owning a Shopify store runs from about $357
        to about $5,345 before card fees, depending on the plan, theme, apps and whether you sell in
        person. The plan is the predictable part. Card fees grow with your sales, which is a good
        problem to have. Apps are the line that quietly creeps, so review them every quarter.
      </p>
      <p className="mb-4">
        Choose your plan on features, not card rates. Bill yearly once you are committed. Start with
        free themes and apps until revenue justifies paid ones. When you are ready to price the build
        itself, FactoryJet builds Shopify stores for US businesses, with local ecommerce pages for{' '}
        <Link href="/austin/ecommerce-development" className="text-[#B23E13] font-semibold underline hover:text-[#9A3510]">
          Austin
        </Link>
        ,{' '}
        <Link href="/miami/ecommerce-development" className="text-[#B23E13] font-semibold underline hover:text-[#9A3510]">
          Miami
        </Link>{' '}
        and{' '}
        <Link href="/nashville/ecommerce-development" className="text-[#B23E13] font-semibold underline hover:text-[#9A3510]">
          Nashville
        </Link>
        .
      </p>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Shopify scoping call
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Get a Fixed Scope for Your Shopify Store
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us what you sell and how you sell it. In a 30-minute call with founder Bhavesh Barot we
          will map the plan, apps and build your store actually needs, and put the build price in
          writing.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Book 30-Min Consultation
          </a>
          <Link
            href="/services/shopify-development"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore Shopify Development
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500 italic">
        Prices in this post were checked on September 16 and 17, 2026. Shopify plan prices, card
        rates, third-party fees, POS Pro and marketplace fees:{' '}
        <a
          href="https://www.shopify.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          shopify.com/pricing
        </a>
        . Theme prices:{' '}
        <a
          href="https://themes.shopify.com/themes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify Theme Store
        </a>
        . Domain prices:{' '}
        <a
          href="https://www.shopify.com/domains"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          shopify.com/domains
        </a>
        . Email prices:{' '}
        <a
          href="https://www.shopify.com/email-marketing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Shopify Messaging
        </a>
        . Example budgets and per-sale fees are our arithmetic on those published prices.
      </p>
    </>
  ),
};
