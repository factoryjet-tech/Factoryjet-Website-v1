import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'How much does Amazon take from a $100 sale?',
    a: 'In a standard category the referral fee on a $100 order is $15, which is 15% of the total price including any shipping you charged. On top of that sit the $39.99 monthly Professional plan spread across your orders, a per-unit FBA fulfillment fee if Amazon ships it, and whatever you spend on ads. The referral fee is the only one of those four that can be quoted in advance without knowing your SKU.',
  },
  {
    q: 'What percentage does Amazon take from a sale?',
    a: 'The referral fee runs from 8% to 45% depending on the fee category, and it is 15% in most of them. That percentage is published. What sits on top of it is not a percentage at all: FBA fulfillment is a flat per-unit charge based on size and weight, the plan fee is a flat $39.99 a month, and advertising is whatever you choose to spend. Any single "Amazon takes X percent" figure is hiding those three.',
  },
  {
    q: 'How much is the Amazon referral fee?',
    a: 'It depends on the fee category Amazon assigns your product. Checked on Amazon\'s pricing page on 25 August 2026: 8% on computers and consumer electronics, 12% on automotive and on business and industrial, 15% on home, kitchen, toys, sports and most other categories, 17% on clothing above $20, and 45% on Amazon device accessories. The minimum is $0.30 per item in most categories.',
  },
  {
    q: 'What is the Amazon referral fee table?',
    a: 'It is the published list of commission percentages Amazon charges per fee category, along with the per-item minimum. Amazon maintains it on its selling pricing page and in the Seller Central fee schedule. The full current US table is reproduced in this article, checked on 25 August 2026. Re-check it before any significant pricing decision, because Amazon revises it without much notice.',
  },
  {
    q: 'Does Amazon charge the referral fee on shipping?',
    a: 'Yes. The referral fee is calculated on the total price, which is the item price plus any shipping and gift wrap charges you collect. Listing an item at $1 with $99 of shipping does not reduce the fee. Model the fee against what the customer pays in total, not against the item price on its own.',
  },
  {
    q: 'Do you have to pay $39.99 to sell on Amazon?',
    a: 'No. The $39.99 a month is the Professional plan. The Individual plan has no monthly fee and charges $0.99 per item sold instead. Individual makes sense below roughly 40 units a month, which is where $0.99 a unit crosses $39.99. Above that, or if you want to run ads or use Brand Registry, Professional is both cheaper and more capable.',
  },
  {
    q: 'What is the difference between the $39.99 and $0.99 plans?',
    a: 'Professional costs $39.99 a month, covers unlimited listings, and unlocks bulk listing tools, Automate Pricing, Amazon Ads, Amazon Business B2B selling, Brand Registry features and the selling APIs. Individual costs $0.99 for every item sold, has no monthly fee, and includes none of those. If advertising is part of the plan at all, you need Professional from day one, because Individual cannot run ads.',
  },
  {
    q: 'How much are Amazon FBA fees?',
    a: 'The FBA fulfillment fee is charged per unit and set by the size tier and shipping weight of your packaged product, not by its price. That is why no article can honestly give you your number. Pull it for your exact SKU in the FBA Revenue Calculator inside Seller Central, using the box you actually ship, and check it again whenever your packaging changes.',
  },
  {
    q: 'Is FBA worth it compared to shipping myself?',
    a: 'FBA usually wins on small, light, fast-moving items where Prime delivery drives the conversion rate, and anywhere you cannot match Amazon\'s delivery speed. Self-fulfillment usually wins on large, heavy or slow-moving items, on anything with a high return rate where you want control of the returns process, and on products you are already shipping from your own warehouse for other channels.',
  },
  {
    q: 'What Amazon fees do people forget about?',
    a: 'Four of them. Returns processing, plus the loss on units that come back unsellable. Monthly storage on inventory that is not moving, which costs more in the fourth quarter and more again once stock ages past Amazon\'s thresholds. Advertising, which is not technically a fee but behaves exactly like one on a competitive listing. And the monthly plan fee, which is trivial at 200 orders a month and painful at ten.',
  },
  {
    q: 'How do I calculate my Amazon profit per unit?',
    a: 'Start at the total price the customer pays. Subtract the referral fee for your fee category, the FBA fulfillment fee for that specific packaged unit, the plan fee divided by your monthly order count, your ad spend per unit, and an allowance for returns and storage. Then subtract what the unit cost you and what it cost to get into the warehouse. What is left is the real number.',
  },
  {
    q: 'Is there a free Amazon fee calculator?',
    a: 'Amazon\'s own FBA Revenue Calculator estimates fees for a specific product inside Seller Central, and it is the right source for fulfillment. Our free marketplace fee and margin calculator does the same job and puts Amazon next to Walmart WFS, Target Plus, Faire and your own store, which is the comparison that usually changes the decision.',
  },
  {
    q: 'Does Amazon charge a fee for returns?',
    a: 'In some categories Amazon applies a returns processing fee on FBA orders once a product\'s return rate goes past a category threshold. Separately, and in every category, you carry the cost of returned units being inspected and then restocked or disposed of, and anything that comes back unsellable is a total loss. Apparel is where this most often turns a profitable SKU negative.',
  },
  {
    q: 'What are Amazon storage fees?',
    a: 'Monthly charges per cubic foot on inventory held in Amazon fulfillment centers, higher in the fourth quarter, with additional charges once stock has aged past Amazon\'s thresholds. They are effectively a penalty on over-forecasting. A slow-moving SKU can quietly accrue more in storage than it earns in gross margin. Rates change, so read the current schedule rather than an article.',
  },
  {
    q: 'Do I have to advertise on Amazon?',
    a: 'Technically no. Practically, on a competitive listing, yes. Sponsored placements sit above organic results, competitors can target your product page directly, and a new listing has no ranking history to trade on. The honest way to size the cost is your own ACoS from your ad reports, treated as a cost of sale rather than as a marketing experiment you can pause.',
  },
  {
    q: 'Are Amazon fees different for books and media?',
    a: 'Yes. Media items, meaning books, DVDs, music, software and video, carry the 15% referral fee plus an additional $1.80 closing fee on every item sold. On a low-priced book that closing fee can be a large share of the sale, which is why media sellers live or die on sourcing and volume rather than on margin per unit.',
  },
  {
    q: 'Why is my Amazon fee category different from what shoppers see?',
    a: 'Amazon assigns a fee category based on the product itself, and it does not always match the browse category customers navigate through. Amazon states this in its own fee schedule. Sellers routinely budget from the browse node and then get billed at a different rate. Check the fee category before you set the price, not after the first settlement report.',
  },
  {
    q: 'Can I reduce my Amazon fees?',
    a: 'You cannot negotiate the referral fee. You can shrink the total. Repackage to drop into a smaller size tier, reprice around the breakpoints in tiered categories, improve inventory turns so storage stops accruing, cut return rates with more accurate listings and sizing detail, and tighten ad targeting. Size tier and returns are usually the two biggest wins, and both are operational work rather than marketing work.',
  },
  {
    q: 'Do Amazon fees change?',
    a: 'Yes, and often with limited notice. Referral percentages, fulfillment rates, storage rates and seasonal surcharges are all revised periodically, and the fourth quarter carries increases every year. Re-check your unit economics at least twice a year, and always before committing to a large inbound shipment or a price change across a catalog.',
  },
  {
    q: 'Is the Amazon referral fee the same as the Amazon Associates referral program?',
    a: 'No, and the two get confused constantly because Google returns them for similar words. The seller referral fee is the commission Amazon charges you for selling on its marketplace. Amazon Associates is the affiliate program that pays a commission to publishers who send Amazon traffic. If you sell products, the referral fee is the line on your settlement report.',
  },
  {
    q: 'What margin do I need to sell profitably on Amazon?',
    a: 'No single threshold holds across categories, so treat any number you are handed as a hypothesis rather than a rule. The mechanism is what matters: the referral fee scales with price, fulfillment does not, and advertising sits on top of both. Model your own SKU at your real ACoS and your real return rate before you commit inventory.',
  },
  {
    q: 'Is it still worth it to sell on Amazon?',
    a: 'That depends almost entirely on the product rather than on Amazon. Items with healthy margin, a size and weight that fulfill cheaply, and a reason for shoppers to prefer Prime delivery still do well. Cheap, bulky items with thin margin rarely survive the fee stack, and brands whose whole value is owning the customer relationship often do better leading with their own store.',
  },
  {
    q: 'Is selling on Walmart or TikTok Shop cheaper than Amazon?',
    a: 'The fee structures differ enough that the answer is product-specific rather than general. Referral rates, fulfillment models, return handling and advertising dynamics all vary by marketplace, and competitive density varies even more. Run the same SKU through each before assuming any of them is cheaper. Some products that lose money on Amazon are profitable on a quieter channel.',
  },
  {
    q: 'Should I sell on Amazon at all?',
    a: 'Run the arithmetic before you answer. If the referral fee, fulfillment, ads and returns still leave room above what the unit cost you, Amazon is a distribution channel worth having. If they do not, listing optimization will not rescue it, and the honest move is a different price point, different packaging, or a different channel mix.',
  },
  {
    q: 'Does FactoryJet manage Amazon accounts?',
    a: 'Yes. We run marketplace management across Amazon, Walmart, TikTok Shop, Target Plus and Faire, and the Amazon-specific detail sits on our Amazon agency page. The first thing we do on any engagement is what this article describes: rebuild the unit economics per SKU. If the numbers do not work, we would rather say so than sell you a retainer.',
  },
];

export const post: BlogPost = {
  id: '430',
  slug: 'amazon-seller-fees-100-dollar-sale-2026',
  title: 'What Amazon Actually Takes From a $100 Sale',
  excerpt:
    'Amazon publishes three of the four numbers that decide whether you make money. The fourth is behind a login, changes by SKU, and is usually the one that kills the margin. Here is a $100 order taken apart line by line.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Aug 25, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/amazon-seller-fees-100-dollar-sale-2026.webp',
  imageAlt:
    'A tidy desk with a laptop showing a fee breakdown spreadsheet, a calculator, a roll of packing tape and a small shipping box, no people in frame',
  meta: {
    title: 'Amazon Seller Fees in 2026: The $100 Sale, Line by Line',
    description:
      'What Amazon takes from a $100 sale: the 2026 referral fee table by category, the plan fee, and the four costs nobody quotes you. Checked 25 Aug 2026.',
  },
  keyTakeaways: [
    'On a $100 order in most categories the referral fee is $15. It is the number everyone quotes and rarely the one that decides whether the SKU makes money.',
    'Referral fees are published and fixed by fee category, from 8% on computers to 45% on Amazon device accessories. The US table below was checked on Amazon\'s pricing page on 25 August 2026.',
    'FBA fulfillment is charged on your unit\'s size tier and shipping weight, not on its price, so a $12 product and a $120 product of the same size cost the same to ship.',
    'Four costs get left out of nearly every Amazon fees article: returns, storage on inventory that is not selling, advertising you cannot realistically switch off, and the plan fee spread across a small order count.',
    'In the worked example the referral fee and the ad spend take $30 of the $100 before fulfillment, returns, storage or cost of goods. Model your own SKU before you send inventory, not after.',
  ],
  faqs,
  content: (
    <article>
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          On a $100 Amazon order in a standard category the referral fee is $15. That figure is
          published, fixed by category, and checkable in a minute. What it does not include: a
          per-unit FBA fulfillment fee set by your product's size and weight, the $39.99 a month
          Professional plan spread across however many orders you actually get, returns, storage,
          and advertising you cannot realistically switch off. The referral fee is the number
          everybody quotes and the smallest part of the problem.
        </p>
      </div>

      <p>
        The People Also Ask box under "amazon seller fees" opens with one question:{' '}
        <strong>How much does Amazon take from a $100 sale?</strong> Pulled from Google US on 25
        August 2026, it sits above every other related question on that query. Most of the pages
        answering it stop at the referral fee, which is the one number Amazon publishes and the one
        number that rarely decides whether a SKU makes money.
      </p>
      <p>
        So this post takes a real $100 order apart, line by line, with the current fee table. Where
        a figure is published, it is here and it is dated. Where it is not, this post says so
        instead of guessing, because the entire point of the exercise is that the numbers are real.
      </p>
      <p>
        If you would rather have your own numbers than a worked example, our{' '}
        <a href="/marketplace-fee-calculator">marketplace fee and margin calculator</a> runs Amazon,
        Walmart WFS, Target Plus, Faire and your own store side by side. It takes about two minutes
        and it is free.
      </p>

      <h2 id="who-google-quotes">Who Google quotes for this today</h2>
      <p>
        Pulled live from Google US, logged out, on 25 August 2026. The AI Overview fires on "amazon
        seller fees" and cites four sources: YouTube, novadata.io, Wise and eFulfillment Service.
        Organic underneath is led by Amazon itself, twice, then a Reddit thread from
        r/FulfillmentByAmazon, a third Amazon page, Printify, ShipBob, Wise and Jungle Scout.
      </p>
      <p>
        The same day, "amazon referral fee" returns an AI Overview citing Seller Central,
        sell.amazon.com, Feedvisor, Printful, YouTube, RocketSource, Printify and Marketplace Valet.
      </p>
      <p>
        <strong>factoryjet.com appears in none of those results.</strong> Worth stating plainly.
        What the two SERPs have in common is that Amazon owns the top of both, and almost everything
        underneath is a tool vendor, a fulfillment company or a forum. Meanwhile the People Also Ask
        boxes are asking something narrower than any of those pages answer: how much Amazon takes
        from a $100 sale, whether you have to pay $39.99 to sell at all, and whether it is still
        worth selling on Amazon. Those three questions are what this post is built around.
      </p>

      <h2 id="four-charges">The four charges, in the order they hit you</h2>

      <h3 id="referral-fee">1. The referral fee, published and fixed by category</h3>
      <p>
        This is Amazon's commission. You pay a percentage of the <strong>total price</strong>, which
        includes the item price, the shipping you charged, and any gift wrap charge, or a per-item
        minimum, whichever is greater. The minimum is $0.30 in most categories.
      </p>
      <p>
        Current US percentages, pulled from{' '}
        <a
          href="https://sell.amazon.com/pricing"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon's own pricing page
        </a>{' '}
        on 25 August 2026:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Fee category</th>
              <th className="p-3 text-left border border-gray-700">Referral fee</th>
              <th className="p-3 text-left border border-gray-700">Per-item minimum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Amazon Device Accessories</td>
              <td className="p-3 border border-gray-200 font-semibold">45%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Merchant Fulfilled Services (Local Selling)
              </td>
              <td className="p-3 border border-gray-200 font-semibold">20%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Gift Cards</td>
              <td className="p-3 border border-gray-200 font-semibold">20%</td>
              <td className="p-3 border border-gray-200">None</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Jewelry</td>
              <td className="p-3 border border-gray-200 font-semibold">
                20% up to $250, then 5% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Watches</td>
              <td className="p-3 border border-gray-200 font-semibold">
                16% up to $1,500, then 3% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Clothing and Accessories</td>
              <td className="p-3 border border-gray-200 font-semibold">
                5% at $15.00 and under, 10% from $15.01 to $20.00, 17% above $20.00
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                Home and Kitchen, Office, Toys, Sports, Tools, Lawn and Garden, Pet Supplies,
                Footwear, Eyewear, Handbags and Luggage, Musical Instruments, Mattresses
              </td>
              <td className="p-3 border border-gray-200 font-semibold">15%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Media (Books, DVD, Music, Software, Video)
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                15% plus a $1.80 closing fee per item
              </td>
              <td className="p-3 border border-gray-200">None</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Beauty, Health and Personal Care</td>
              <td className="p-3 border border-gray-200 font-semibold">
                8% at $10.00 and under, 15% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Baby Products</td>
              <td className="p-3 border border-gray-200 font-semibold">
                8% at $10.00 and under, 15% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Grocery and Gourmet</td>
              <td className="p-3 border border-gray-200 font-semibold">
                8% at $15.00 and under, 15% above
              </td>
              <td className="p-3 border border-gray-200">None</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Automotive and Powersports</td>
              <td className="p-3 border border-gray-200 font-semibold">12%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Business, Industrial and Scientific</td>
              <td className="p-3 border border-gray-200 font-semibold">12%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Base Equipment Power Tools</td>
              <td className="p-3 border border-gray-200 font-semibold">12%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Tires</td>
              <td className="p-3 border border-gray-200 font-semibold">10%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Computers, Consumer Electronics, Video Game Consoles, Full-size Appliances
              </td>
              <td className="p-3 border border-gray-200 font-semibold">8%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Electronics Accessories</td>
              <td className="p-3 border border-gray-200 font-semibold">
                15% up to $100, then 8% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Furniture</td>
              <td className="p-3 border border-gray-200 font-semibold">
                15% up to $200, then 10% above
              </td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Everything Else</td>
              <td className="p-3 border border-gray-200 font-semibold">15%</td>
              <td className="p-3 border border-gray-200">$0.30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Two traps in that table cost real money.</p>
      <p>
        <strong>Your fee category is not the category shoppers see.</strong> Amazon states this
        explicitly in its own fee schedule. A product that browses under Home and Kitchen can be
        billed as something else entirely. Check the fee category, not the browse node, and check it
        before you set the price rather than after the first settlement report.
      </p>
      <p>
        <strong>Tiered categories punish the price point just above the break.</strong> A $21 shirt
        is billed at 17%, which is $3.57. A $20 shirt is billed at 10%, which is $2.00. One dollar
        of list price costs $1.57 in extra fees. Apparel sellers who have never mapped their catalog
        against those breakpoints are usually giving that away across hundreds of SKUs.
      </p>

      <h3 id="plan-fee">2. The plan fee, $39.99 a month or $0.99 a unit</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Professional:</strong> $39.99 a month, unlimited listings, plus bulk listing
          tools, Automate Pricing, Amazon Ads, Amazon Business B2B selling, Brand Registry features
          and the selling APIs.
        </li>
        <li>
          <strong>Individual:</strong> $0.99 per item sold, no monthly fee, and none of the above.
        </li>
      </ul>
      <p>
        Breakeven is $39.99 divided by $0.99, so about 40 units a month. Below that, Individual.
        Above it, Professional. And if you intend to advertise or use Brand Registry at all,
        Professional immediately, because Individual cannot.
      </p>
      <p>
        Notice what this does to the per-order math. At 100 orders a month the plan costs 40 cents
        an order. At 10 orders a month the same $39.99 costs $4.00 an order. Low-volume sellers
        systematically under-count this, because it does not appear per order anywhere in Seller
        Central.
      </p>

      <h3 id="fulfillment">3. Fulfillment, the number that actually decides it</h3>
      <p>
        If you use <strong>FBA</strong>, Amazon picks, packs and ships the order and handles customer
        service and returns. The fee is charged per unit and set by the size tier and shipping
        weight of your specific packaged product.
      </p>
      <p>
        This is the one number in this article you should not take from an article, including this
        one. FBA fulfillment rates sit behind a Seller Central login, they are revised regularly, and
        they turn on dimensions we cannot know. Pull yours from the FBA Revenue Calculator in Seller
        Central using the box you actually ship, and remember that changing the packaging changes
        the fee.
      </p>
      <p>
        What matters more than the exact rate is the shape of the thing:{' '}
        <strong>fulfillment is charged on dimensional size and weight, not on price.</strong> Which
        produces the single most important consequence in Amazon economics.
      </p>
      <p>
        <strong>A $12 product and a $120 product of identical size and weight cost the same to
        fulfill.</strong>{' '}
        The referral fee scales with price. Fulfillment does not. So fulfillment is a rounding error
        on the $120 item and can be most of the margin on the $12 one. This is why "sell cheap stuff
        on Amazon" fails so reliably, and why the same catalog can be profitable on its premium SKUs
        and losing money on its entry-level ones without anybody noticing, because the P and L is
        reported in aggregate.
      </p>
      <p>
        If you fulfill yourself, which Amazon calls <strong>FBM</strong>, you pay no FBA fee and you
        carry the actual shipping, packaging, labor and returns instead. That is often cheaper for
        large, heavy or slow-moving items and almost always worse for anything that benefits from
        Prime delivery speed.
      </p>

      <h3 id="hidden-costs">4. The four costs nobody quotes you</h3>
      <p>
        <strong>Returns.</strong> Amazon's customer-friendly returns policy is a feature for shoppers
        and a cost line for you. On FBA you may be charged a returns processing fee in categories
        where a product's return rate goes past a threshold, you pay to have returned units
        inspected and either restocked or disposed of, and anything that comes back unsellable is a
        total loss. Apparel is where this most often turns a profitable SKU negative. The thresholds
        and rates are published, they change, and they are worth reading for the categories you
        actually sell in.
      </p>
      <p>
        <strong>Storage.</strong> Charged monthly per cubic foot on inventory sitting in Amazon's
        warehouses, higher in the fourth quarter, with additional charges once stock has aged past
        Amazon's thresholds. Storage is a tax on bad forecasting. A slow SKU can accumulate more in
        storage than it earns in margin, quietly, for a year.
      </p>
      <p>
        <strong>Advertising.</strong> Not a fee, and functionally not optional. Organic visibility on
        a competitive listing without ad support is thin, and once competitors bid on your listing
        the choice is spend or lose the placement. There is no universal percentage here, and any
        article handing you one is guessing. Pull your own ACoS out of your ad reports and treat it
        as a cost of sale. On plenty of accounts it lands larger than the referral fee, and it is
        missing from almost every Amazon fees article on the internet.
      </p>
      <p>
        <strong>Your time.</strong> Listing hygiene, suppressed listings, buy box loss, account
        health, suspension appeals. Real, uncosted, and the reason management services exist.
      </p>

      <h2 id="worked-example">The worked $100 sale</h2>
      <p>
        A Home and Kitchen product at $100, sold through FBA on a Professional plan, at 100 orders a
        month, with ads running at a 15% ACoS. That last figure is an assumption rather than a
        published rate, so swap in your own.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Line</th>
              <th className="p-3 text-left border border-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Sale price</td>
              <td className="p-3 border border-gray-200 font-semibold">$100.00</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Referral fee, Home and Kitchen at 15% (published rate, checked 25 Aug 2026)
              </td>
              <td className="p-3 border border-gray-200 font-semibold">-$15.00</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">
                Professional plan, $39.99 divided across 100 orders
              </td>
              <td className="p-3 border border-gray-200 font-semibold">-$0.40</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Advertising, at an assumed 15% ACoS</td>
              <td className="p-3 border border-gray-200 font-semibold">-$15.00</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">
                Left before fulfillment, returns, storage and cost of goods
              </td>
              <td className="p-3 border border-gray-200 font-semibold">$69.60</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        That $69.60 is not what you keep. Three things still come out of it, and this article
        deliberately puts a number on none of them:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>FBA fulfillment</strong>, per unit, set by the packaged size and weight of your
          specific SKU.
        </li>
        <li>
          <strong>Returns and storage.</strong> Both move with the category, with the season, and
          with how long a unit sits in a fulfillment center, and the fourth quarter costs more than
          the rest of the year. Current returns processing thresholds and storage rates are on{' '}
          <a
            href="https://sell.amazon.com/pricing"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon's published fee schedule
          </a>{' '}
          and in the Revenue Calculator inside Seller Central. Read them for the categories you
          actually sell in rather than taking a figure from an article, this one included.
        </li>
        <li>
          <strong>Cost of goods and inbound freight</strong>, meaning what the unit cost you to make
          or buy, and what it cost to get into Amazon's warehouse.
        </li>
      </ul>
      <p>
        The lesson is visible before any of those are filled in. At a 15% ACoS, advertising costs
        exactly what the referral fee costs. The two of them together take $30 of the $100 before
        fulfillment, returns, storage or cost of goods are counted at all. That is the arithmetic
        that catches sellers who priced a product against a 15% referral fee and nothing else.
      </p>
      <p>
        To run this on your own SKU with your own numbers, including Walmart WFS, Target Plus, Faire
        and your own store side by side, use our{' '}
        <a href="/marketplace-fee-calculator">marketplace fee and margin calculator</a>. Two minutes,
        free, and the honest first step before anybody, us included, quotes you for anything.
      </p>

      <h2 id="what-to-do">What to do with this</h2>
      <p>
        <strong>Map your catalog against the fee table.</strong> Specifically the tiered categories:
        apparel, beauty, baby, grocery, furniture, electronics accessories, jewelry. Find every SKU
        priced just above a breakpoint. Some of them should move down.
      </p>
      <p>
        <strong>Pull fulfillment fees per SKU, not per catalog.</strong> Size tier is decided by the
        packaged unit. A repack that drops a product into a smaller tier is the cheapest margin
        improvement in this entire article, and it is a packaging decision rather than a marketing
        one.
      </p>
      <p>
        <strong>Cost returns by SKU, not in aggregate.</strong> One high-return SKU hiding inside a
        healthy category average is the most common thing we find on an Amazon audit.
      </p>
      <p>
        <strong>Count advertising as a cost of sale.</strong> Not as a marketing budget. It behaves
        like a fee, so model it like one, at your real ACoS.
      </p>
      <p>
        <strong>Then ask whether Amazon should be the only channel.</strong>{' '}
        <a href="/services/walmart-marketplace-agency">Walmart Marketplace</a>,{' '}
        <a href="/services/tiktok-shop-agency">TikTok Shop</a>,{' '}
        <a href="/target-plus-marketplace">Target Plus</a> and{' '}
        <a href="/faire-wholesale-marketplace">Faire</a> have different fee structures and very
        different competitive density. Some products that lose money on Amazon make money elsewhere.
        That is a calculation rather than an opinion, and the calculator above runs all of them.
      </p>

      <h2 id="next">Where this goes next</h2>
      <p>
        If you are not selling on Amazon yet, start with{' '}
        <a href="/blog/how-to-sell-on-amazon-2026">how to sell on Amazon in 2026</a> instead. This
        post is about what you keep, not how to start. The equivalent guides for the other channels
        are{' '}
        <a href="/blog/how-to-sell-on-walmart-marketplace-2026">how to sell on Walmart Marketplace</a>{' '}
        and <a href="/blog/how-to-sell-on-tiktok-shop-2026">how to sell on TikTok Shop</a>.
      </p>
      <p>
        If you are already selling and the numbers above made you want to check your own,{' '}
        <a href="/services/amazon-agency">our Amazon agency work</a> is where the Amazon-specific
        detail lives, and <a href="/marketplace-management">marketplace management</a> is the page
        for running Amazon alongside everything else. We do not publish a package grid, because the
        honest answer depends on your catalog, your size tiers and your return rates. Run the
        calculator first. If the arithmetic does not work, we would rather tell you that than sell
        you a retainer.
      </p>
    </article>
  ),
};
