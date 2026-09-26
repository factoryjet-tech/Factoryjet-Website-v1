import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// AU Wave 4, page 2 of pipeline/research/AU-EXPANSION-PLAN-2026-09-26.md (SEO cost guide).
// Keywords: data/au-competitors-2026-09-26/candidate_volumes.json (AU Google Ads volumes, location 2036).
// PAA: data/au-competitors-2026-09-26/paa_by_page.json ("seo_cost") + new_candidate_serps.json.
//
// PRICES: every dollar figure below is a third-party Australian market range, fetch-verified on
// 2026-09-26 from the source page linked beside it. None of them is a FactoryJet price. If a source
// changes, update or cut the number; do not keep a figure that can no longer be found on its page.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx)
// FROM this exact array, so the visible FAQs and the structured data can never drift apart.
// Do not add a second, hand-written FAQPage script anywhere in this file.

const SRC = {
  dnhq: 'https://digitalnomadshq.com.au/blog/how-much-does-seo-cost/',
  studiohawk: 'https://studiohawk.com.au/blog/seo-pricing/',
  seoprices: 'https://seoprices.com.au/',
  bark: 'https://www.bark.com/en/au/search-engine-optimization/seo-cost-guide/',
  threeam: 'https://3amideas.com.au/cost-of-seo-packages-in-australia/',
  trafficradius: 'https://trafficradius.com.au/seo-cost-melbourne-2025-pricing-guide/',
  gst: 'https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst',
  googleSeo: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  googleAi: 'https://developers.google.com/search/docs/appearance/ai-features',
} as const;

const faqs: FAQItem[] = [
  {
    q: 'How much should I expect to pay for SEO in Australia?',
    a: "Expect roughly $750 to $3,500 a month for ongoing SEO from an Australian provider in 2026. Published guides put entry-level local SEO at about $500 to $2,500 a month, growth campaigns at $1,500 to $8,000, and national or ecommerce work from about $4,500 upward (StudioHawk, SEOPrices.com.au, 3am Ideas and Traffic Radius, checked September 2026). Most quotes do not say whether GST is included, so ask.",
  },
  {
    q: 'How much does SEO cost in Australia?',
    a: "It depends on how much work your site needs to reach page one. Across 50 published entry offers, Digital Nomads HQ found a median of $790 a month (September 2026). Established agencies publish growth tiers of $1,500 to $3,000 a month (StudioHawk) and larger campaigns from $5,000 a month. One-off audits run from a few hundred dollars to over $10,000, depending on the size of the site.",
  },
  {
    q: 'How much does SEO typically cost per month?',
    a: "Typically $1,000 to $3,500 a month for a small or medium Australian business that wants steady growth. That is the band 3am Ideas ($1,500 to $3,500) and Traffic Radius ($1,000 to $5,000 across its first two tiers) describe for most small businesses. Below about $1,000 a month you usually get upkeep and local listings rather than new content and links.",
  },
  {
    q: 'How much does SEO usually cost for a small business?',
    a: "A small Australian business usually pays between $750 and $2,500 a month for local SEO, and $1,500 to $3,500 once content and link earning are added. Those are the local and small business bands published by SEOPrices.com.au and 3am Ideas in 2026. If you serve one suburb with little online competition, the lower end can be enough. A crowded city market needs more.",
  },
  {
    q: 'What is the typical cost of an SEO agency?',
    a: "One agency's published packages run from $2,200 to $6,600 a month plus GST, according to the Digital Nomads HQ review of Australian prices. StudioHawk says most of its campaigns sit between $1,500 and $3,000 a month. Agencies usually cost more than freelancers because you pay for a team: strategy, technical work, writing and outreach, with cover when someone is away.",
  },
  {
    q: 'What is an SEO package?',
    a: "An SEO package is a fixed bundle of search work sold at a set monthly or one-off price. A typical package lists the number of keywords tracked, pages optimised, articles written, links pursued and reports sent. Packages make comparison easier, but they can hide what your site actually needs. A good provider adjusts the package after looking at your site, not before.",
  },
  {
    q: 'How much does an SEO package cost?',
    a: "Published Australian SEO packages range from about $500 a month for limited local work to $6,600 a month or more for agency growth tiers. Digital Nomads HQ found one consultant's three tiers at $790, $1,790 and $2,790 a month plus GST, and one agency's at $2,200, $4,400 and $6,600 plus GST. Compare what each tier includes, not just the headline price.",
  },
  {
    q: 'How much does SEO cost in Sydney?',
    a: "We found no reliable published survey of Sydney-only SEO prices, so treat the national ranges as your guide: about $750 to $3,500 a month for most small businesses. Sydney is Australia's largest market, so many service searches are more crowded there, which pushes local campaigns toward the upper end of each tier. Price follows competition in your category, not your postcode.",
  },
  {
    q: 'How much does SEO cost in Perth?',
    a: "Perth agency 3am Ideas publishes local SEO from $1,000 a month, small business SEO at $1,500 to $3,500 a month, and competitive campaigns at $4,500 to $10,000 or more (updated March 2026). Its own local packages start from $950 a month. GST treatment is not stated. Perth prices sit inside the national ranges rather than above or below them.",
  },
  {
    q: 'How much does SEO cost in Brisbane?',
    a: "We found no verified Brisbane-specific price survey, so use the national ranges: about $750 to $2,500 a month for local SEO and $1,500 to $3,500 for small business growth work. What moves a Brisbane quote is the same as anywhere: how crowded your service is, how healthy your site is, and how many suburbs or cities you want to rank in.",
  },
  {
    q: 'How much does SEO typically cost in Melbourne?',
    a: "Traffic Radius, citing GoodFirms, puts Melbourne SEO at $1,200 to $10,000 or more a month (2026 guide). Its own table shows local and small businesses at $1,000 to $2,500, growing businesses at $2,500 to $5,000, and ecommerce or national campaigns at $5,000 to $10,000. A suburban trade business usually sits at the lower end; a city-wide legal firm at the top.",
  },
  {
    q: 'How much does a local SEO agency typically charge?',
    a: "A local SEO agency in Australia typically charges $750 to $2,500 a month (SEOPrices.com.au, 2026). That covers Google Business Profile work, local landing pages, review and citation clean-up, and basic technical fixes. One agency reviewed by Digital Nomads HQ advertises local SEO at $750 a month plus GST. Multi-location businesses pay more because each location needs its own pages and listings.",
  },
  {
    q: 'Is local SEO worth it?',
    a: "Yes, for most businesses that serve customers in a set area. Local searches such as a trade plus a suburb usually come from people who want to book soon, so each extra enquiry is close to a sale. Local SEO is also the cheapest tier to run. It is worth it once a single new job or client covers a month of fees.",
  },
  {
    q: 'How much does an SEO audit cost?',
    a: "A standalone SEO audit in Australia costs from about $599 to $12,000. Digital Nomads HQ found two advertised audits at $599 plus GST and $1,500 plus GST. StudioHawk lists comprehensive site audits at $2,000 to $5,000, and SEOPrices.com.au gives $1,500 to $12,000. The price follows the size of the site and whether you get a ranked fix list or a raw tool export.",
  },
  {
    q: 'How much does it cost to hire someone to do SEO?',
    a: "Hiring an SEO freelancer or consultant costs from about $120 to $350 an hour in Australia (SEOPrices.com.au), or $150 to $300 an hour at established specialists (StudioHawk). On a monthly plan, one independent consultant's published tiers run $790 to $2,790 plus GST. An agency costs more per month but gives you several specialists instead of one.",
  },
  {
    q: 'How much does an SEO expert cost?',
    a: "A senior SEO expert in Australia charges roughly $150 to $350 an hour for advice, audits and reviews, based on the ranges StudioHawk and SEOPrices.com.au publish. One consultant reviewed by Digital Nomads HQ charges $250 an hour plus GST with a two-hour minimum. Hourly rates suit advice and training; ongoing execution is usually cheaper as a monthly retainer.",
  },
  {
    q: 'How much does Shopify SEO cost?',
    a: "Shopify SEO is priced as ecommerce SEO, which sits in the upper tiers because every category and product page needs work. Traffic Radius lists ecommerce and national campaigns at $5,000 to $10,000 a month, and one agency reviewed by Digital Nomads HQ advertises ecommerce growth from $4,500 plus GST. A small store with a few dozen products can start lower.",
  },
  {
    q: 'What is the typical cost of SEO for a law firm?',
    a: "Law firms usually pay growth or competitive-tier prices, because legal is one of the most crowded search categories in Australia (Traffic Radius names legal alongside finance and real estate). Published competitive tiers run from about $2,500 to $10,000 a month. A single-suburb conveyancer pays far less than a city-wide personal injury firm. We found no verified law-only price survey.",
  },
  {
    q: 'How much does dental SEO cost?',
    a: "A single dental clinic usually falls in the local SEO tier, about $750 to $2,500 a month (SEOPrices.com.au). A group with several clinics, or one in a crowded inner-city area, moves toward $2,500 to $5,000. We found no verified dental-only price survey, so judge a quote by the scope: Business Profile work, one page per treatment and suburb, and review management.",
  },
  {
    q: 'How much does AI SEO cost?',
    a: "There is no standard AI SEO price. Digital Nomads HQ found three models in September 2026: AI checks included in plans from $890 a month plus GST, AI SEO sold on its own from $800 plus GST, and AI SEO added to a retainer for $1,000 plus GST. Google says no special optimisation is needed to appear in AI Overviews beyond normal search requirements.",
  },
  {
    q: 'Is SEO worth the money?',
    a: "SEO is worth the money when a customer found through search is worth more than the monthly fee divided by the number of new customers it brings. Work it out before you sign: your average customer value, your close rate on enquiries, and how many extra enquiries you need. If a handful of new clients a year covers the fee, it usually pays off within a year.",
  },
  {
    q: 'Is it worth hiring an SEO agency?',
    a: "It is worth hiring an agency when you need several skills at once: technical fixes, writing, link earning and reporting. A freelancer can be excellent for focused jobs or advice. Hire an agency that audits your site before quoting, explains the monthly work in plain English, and reports on leads and sales, not only rankings. Walk away from anyone who guarantees positions.",
  },
  {
    q: 'Is SEO paid or free?',
    a: "Appearing in Google's organic results is free. Google says it never accepts money to include or rank sites and that it costs nothing to appear in organic results. What you pay for is the work: fixing your site, writing useful pages and earning links, either with your own time or by paying a provider. Paid ads are a separate product.",
  },
  {
    q: 'How much does Google charge for SEO?',
    a: "Google charges nothing for SEO. Its own guidance says it never accepts money to include or rank sites in search results, and that advertising with Google has no effect on organic rankings. Any fee you pay goes to the person or agency doing the work. Be wary of anyone claiming a special relationship with Google or a priority listing.",
  },
  {
    q: 'Can I do SEO myself?',
    a: "Yes. You can claim and complete your Google Business Profile, fix page titles, write one clear page per service and ask happy customers for reviews without paying anyone. Google Search Console is free and shows what people search to find you. Most owners hit a ceiling at technical fixes and earning links, which is usually when outside help starts paying for itself.",
  },
  {
    q: 'Why do cheap SEO packages often fail?',
    a: "Low-cost SEO services often fail because the hours do not cover the work. A package with four to six hours a month can maintain a listing but cannot fix a slow site, write new pages and earn links as well. Some cut corners with bought links, which Google treats as link spam. The price is not the problem; a scope too small for your market is.",
  },
  {
    q: 'Do Australian SEO prices include GST?',
    a: "Often they do not say. Many published SEO prices in Australia are shown plus GST, and many do not state it either way. GST is 10%. Providers with a GST turnover of $75,000 or more must register and add it; smaller providers who have not registered do not. If your business is registered, you can usually claim the GST back as a credit. Always ask.",
  },
  {
    q: 'Is SEO still worth it in 2026?',
    a: "Yes. People still search Google before they buy, and Google says pages need no special optimisation beyond normal search requirements to appear in its AI Overviews. SEO in 2026 means writing clear answers, keeping the site fast and technically clean, and earning mentions from real sites. That work now serves search engines and AI assistants at the same time.",
  },
];

const tierRows = [
  {
    tier: 'Entry or local',
    who: 'One location, a few suburbs, low to medium competition',
    sh: '$500 to $1,000',
    sp: '$750 to $2,500',
    ta: 'From $1,000',
    tr: '$1,000 to $2,500',
  },
  {
    tier: 'Growth or small business',
    who: 'Growing SMEs, city-wide or regional competition',
    sh: '$1,500 to $3,000',
    sp: '$2,500 to $8,000',
    ta: '$1,500 to $3,500',
    tr: '$2,500 to $5,000',
  },
  {
    tier: 'Competitive, national or ecommerce',
    who: 'Online stores, national brands, crowded categories',
    sh: '$5,000+',
    sp: '$8,000 to $30,000+ (enterprise)',
    ta: '$4,500 to $10,000+',
    tr: '$5,000 to $10,000',
  },
];

const linkCls = 'text-[#B23E13] font-semibold underline';
const extLinkProps = { target: '_blank', rel: 'noopener noreferrer nofollow', className: 'text-[#B23E13] underline' } as const;
const h2Cls = 'text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4';
const h3Cls = 'text-xl font-bold text-gray-900 mt-8 mb-3';
const pCls = 'mb-4 text-gray-700 leading-relaxed';

export const post: BlogPost = {
  id: '702',
  slug: 'seo-cost-australia-2026',
  title: 'SEO Packages Australia 2026: How Much SEO Costs, Tier by Tier',
  excerpt:
    'What SEO packages in Australia cost in 2026, from local SEO to ecommerce and national campaigns. Monthly, hourly and audit price ranges in AUD from six published Australian sources, GST explained, and what each budget actually buys.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Sep 26, 2026',
  readTime: '18 min read',
  imageUrl: '/blog-images/seo-cost-australia-2026-hero.webp',
  imageAlt:
    'A Melbourne shop owner at a timber table comparing two printed SEO proposals side by side in her bright back office',
  meta: {
    title: 'SEO Packages Australia 2026: What SEO Costs | FactoryJet',
    description:
      'What do SEO packages in Australia cost in 2026? Monthly, hourly and audit price ranges in AUD from six sources, GST explained, plus red flags to avoid.',
  },
  keyTakeaways: [
    'Most published SEO packages in Australia sit between about $750 and $3,500 a month in 2026. Across 50 published entry offers, Digital Nomads HQ found a median of $790 a month.',
    'Entry-level local SEO runs roughly $500 to $2,500 a month, growth work $1,500 to $8,000, and ecommerce or national campaigns from about $4,500 upward, across four published Australian guides.',
    'Hourly SEO consulting runs about $120 to $350 an hour. Standalone audits run from about $599 to $12,000 depending on site size and depth.',
    'Many prices are shown plus GST and many do not say. GST is 10%, and only providers registered for GST add it. Always ask whether a quote is inclusive or exclusive.',
    'These are third-party market ranges, not FactoryJet prices. We quote after measuring the gap between your site and page one.',
  ],
  faqs,
  content: (
    <>
      {/* Answer-first block */}
      <div className="answer-first bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 md:p-6 rounded-r-xl mb-8">
        <p className="font-bold text-gray-900 text-base md:text-lg mb-2">The short answer: what SEO costs in Australia</p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Most SEO packages in Australia cost about <strong>$750 to $3,500 a month</strong> in 2026. Published
          Australian guides put local SEO at roughly $500 to $2,500 a month, growth campaigns at $1,500 to $8,000,
          and ecommerce or national work from about $4,500 upward. Across 50 published entry offers, Digital Nomads
          HQ found a median of $790 a month. Prices are in AUD and often exclude GST.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Typical Australian market ranges from StudioHawk, SEOPrices.com.au, 3am Ideas, Traffic Radius and Digital
          Nomads HQ, checked September 2026. Sources are linked in the tables below. These are not FactoryJet prices.
        </p>
      </div>

      <p className={pCls}>
        If you have asked three providers for SEO packages in Australia, you have probably received three quotes that
        look like they describe three different services. One is a few hundred dollars a month, one is a few
        thousand, and one just says &ldquo;let&apos;s talk&rdquo;. This guide explains why, using prices Australian agencies and pricing sites
        have actually published, so you can judge a quote before you sign it.
      </p>
      <p className={pCls}>
        A few terms, once. <strong>SEO</strong> (search engine optimisation) is the work that helps your website
        show up in Google&apos;s unpaid results. A <strong>retainer</strong> is a fixed monthly fee for ongoing
        work. An <strong>SEO audit</strong> is a one-off check of your site that lists what is stopping it from
        ranking. <strong>Link earning</strong> means getting other real websites to link to yours, which Google
        reads as a sign of trust. <strong>Local SEO</strong> is SEO aimed at people nearby, including the map
        results.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Every dollar figure in this guide is a third-party Australian market range or a single provider&apos;s
        published price, labelled with its source and the month we checked it. None of them is a FactoryJet price.
        We quote after measuring your site, which we explain at the end.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <p className="text-lg font-bold mb-3 text-gray-900">What this guide covers</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm md:text-base">
          <li><a href="#seo-packages-australia-prices" className="text-[#B23E13] underline">SEO packages in Australia: price ranges by tier</a></li>
          <li><a href="#pricing-models" className="text-[#B23E13] underline">Retainer, hourly, project and performance pricing</a></li>
          <li><a href="#what-each-budget-buys" className="text-[#B23E13] underline">What each monthly budget buys</a></li>
          <li><a href="#local-seo-cost" className="text-[#B23E13] underline">Local SEO cost for tradies, clinics and single-location businesses</a></li>
          <li><a href="#ecommerce-seo-cost" className="text-[#B23E13] underline">Ecommerce and Shopify SEO cost</a></li>
          <li><a href="#seo-cost-by-city" className="text-[#B23E13] underline">SEO cost in Sydney, Melbourne, Brisbane and Perth</a></li>
          <li><a href="#ai-seo-cost" className="text-[#B23E13] underline">Does AI SEO cost extra?</a></li>
          <li><a href="#gst" className="text-[#B23E13] underline">GST on SEO quotes</a></li>
          <li><a href="#who-to-hire" className="text-[#B23E13] underline">Freelancer vs agency vs in-house vs DIY</a></li>
          <li><a href="#red-flags" className="text-[#B23E13] underline">9 red flags in low-cost SEO services</a></li>
          <li><a href="#budget" className="text-[#B23E13] underline">How to set your SEO budget in 5 steps</a></li>
        </ol>
      </div>

      {/* Section: price ranges by tier */}
      <h2 id="seo-packages-australia-prices" className={h2Cls}>
        SEO packages in Australia: price ranges by tier
      </h2>
      <p className={pCls}>
        Four Australian guides publish tiered SEO pricing for 2026. They use different names for the tiers, but the
        shape is the same: a local or entry tier, a growth tier where most small and medium businesses sit, and a
        competitive tier for online stores, national brands and crowded categories. Here they are side by side.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Typical Australian market ranges, monthly, AUD. GST treatment is not stated by any of these four sources.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Tier</th>
              <th className="p-3.5 text-left font-semibold">Who it suits</th>
              <th className="p-3.5 text-left font-semibold">
                <a href={SRC.studiohawk} target="_blank" rel="noopener noreferrer nofollow" className="underline">StudioHawk</a> (Dec 2025)
              </th>
              <th className="p-3.5 text-left font-semibold">
                <a href={SRC.seoprices} target="_blank" rel="noopener noreferrer nofollow" className="underline">SEOPrices.com.au</a> (2026)
              </th>
              <th className="p-3.5 text-left font-semibold">
                <a href={SRC.threeam} target="_blank" rel="noopener noreferrer nofollow" className="underline">3am Ideas</a>, Perth (Mar 2026)
              </th>
              <th className="p-3.5 text-left font-semibold">
                <a href={SRC.trafficradius} target="_blank" rel="noopener noreferrer nofollow" className="underline">Traffic Radius</a>, Melbourne (2026)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {tierRows.map((r) => (
              <tr key={r.tier}>
                <td className="p-3.5 font-semibold text-gray-900">{r.tier}</td>
                <td className="p-3.5">{r.who}</td>
                <td className="p-3.5">{r.sh}</td>
                <td className="p-3.5">{r.sp}</td>
                <td className="p-3.5">{r.ta}</td>
                <td className="p-3.5">{r.tr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        The widest range is SEOPrices.com.au&apos;s growth tier, which runs up to $8,000 a month because it groups
        mid-size campaigns with larger ones. The closest agreement is at the bottom: every source starts local SEO somewhere between $500 and
        $1,000 a month, and 3am Ideas says bluntly that ongoing SEO quoted under $1,000 a month with big promises
        means something is off.
      </p>
      <p className={pCls}>
        The best single number for &ldquo;what does a starter package cost&rdquo; comes from{' '}
        <a href={SRC.dnhq} {...extLinkProps}>Digital Nomads HQ&apos;s review of Australian SEO prices</a> (last
        updated 17 September 2026). It looked at 110 candidate websites and 50 published monthly entry offers for
        ongoing SEO, and found a median of <strong>$790 a month</strong>. It is careful to say that this reflects
        starter packages with mixed GST treatment, not the average campaign. It also recorded these published
        examples, all in AUD:
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Published Australian price examples. Source: <a href={SRC.dnhq} {...extLinkProps}>Digital Nomads HQ</a>, September 2026.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Service</th>
              <th className="p-3.5 text-left font-semibold">Published price</th>
              <th className="p-3.5 text-left font-semibold">What it represents</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr><td className="p-3.5 font-semibold text-gray-900">Limited local SEO</td><td className="p-3.5">$500 a month + GST</td><td className="p-3.5">An entry plan of roughly 4 to 6 hours of work a month</td></tr>
            <tr><td className="p-3.5 font-semibold text-gray-900">Independent consultant</td><td className="p-3.5">$790 to $2,790 a month + GST</td><td className="p-3.5">Three tiers from one specialist</td></tr>
            <tr><td className="p-3.5 font-semibold text-gray-900">Agency packages</td><td className="p-3.5">$2,200 to $6,600 a month + GST</td><td className="p-3.5">Three starting prices within one agency&apos;s range</td></tr>
            <tr><td className="p-3.5 font-semibold text-gray-900">Competitive or national campaigns</td><td className="p-3.5">$5,000 to $10,000+ a month</td><td className="p-3.5">One agency&apos;s stated starting range, GST not stated</td></tr>
            <tr><td className="p-3.5 font-semibold text-gray-900">Hourly advice</td><td className="p-3.5">$250 an hour + GST</td><td className="p-3.5">One specialist, two-hour minimum</td></tr>
            <tr><td className="p-3.5 font-semibold text-gray-900">Standalone SEO audit</td><td className="p-3.5">$599 + GST or $1,500 + GST</td><td className="p-3.5">Two advertised audits with different scopes</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Marketplace data points the same way. <a href={SRC.bark} {...extLinkProps}>Bark&apos;s Australian SEO cost guide</a>{' '}
        (checked September 2026) says SEO review and implementation costs between $600 and $1,800 on average, and
        lists average job prices of $180 to $500 for basic work, $600 to $1,800 for standard work and $8,000 to
        $15,000 for comprehensive projects. Bark is a marketplace that matches buyers with providers, so we read
        these as one-off job prices rather than monthly retainers.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/seo-cost-australia-2026-review.webp"
          alt="Over-the-shoulder view of an SEO specialist and a clinic owner in a Sydney office looking at a rising line chart on a laptop"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A good monthly report shows what changed and why, in plain English, tied to enquiries and sales.
        </figcaption>
      </figure>

      {/* Section: pricing models */}
      <h2 id="pricing-models" className={h2Cls}>
        SEO pricing in Australia: retainer, hourly, project and performance
      </h2>
      <p className={pCls}>
        How you pay matters as much as how much. Australian SEO providers use four models, and each suits a different
        job. SEOPrices.com.au puts it simply: most serious SEO is billed as a monthly retainer, project fees suit
        audits and migrations, and hourly consulting suits advice rather than doing the work.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Typical Australian market ranges, AUD, GST not stated unless marked. Checked September 2026.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Model</th>
              <th className="p-3.5 text-left font-semibold">Typical range</th>
              <th className="p-3.5 text-left font-semibold">Source</th>
              <th className="p-3.5 text-left font-semibold">Best for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Monthly retainer</td>
              <td className="p-3.5">$750 to $30,000+ a month</td>
              <td className="p-3.5"><a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a></td>
              <td className="p-3.5">Ongoing growth: fixes, content and links every month</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Hourly consulting</td>
              <td className="p-3.5">$120 to $350 an hour; $150 to $300 at established specialists</td>
              <td className="p-3.5"><a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a>; <a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a></td>
              <td className="p-3.5">Advice, second opinions, training your own team</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">SEO audit (project)</td>
              <td className="p-3.5">$1,500 to $12,000; comprehensive audits $2,000 to $5,000</td>
              <td className="p-3.5"><a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a>; <a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a></td>
              <td className="p-3.5">Diagnosis and a written plan before you commit</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Site migration SEO (project)</td>
              <td className="p-3.5">$3,000 to $10,000; up to $25,000+ for large sites</td>
              <td className="p-3.5"><a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a>; <a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a></td>
              <td className="p-3.5">Moving platform or domain without losing rankings</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Content audit and plan (project)</td>
              <td className="p-3.5">$2,000 to $6,000</td>
              <td className="p-3.5"><a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a></td>
              <td className="p-3.5">Sites with lots of old, thin or overlapping pages</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Digital PR campaign (project)</td>
              <td className="p-3.5">From $4,000 per campaign</td>
              <td className="p-3.5"><a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a></td>
              <td className="p-3.5">Earning links and press mentions for a competitive market</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Performance-based</td>
              <td className="p-3.5">Highly variable: a modest base fee plus bonuses</td>
              <td className="p-3.5"><a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a></td>
              <td className="p-3.5">Larger sites with a clear traffic and sales baseline</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        A quick word on performance-based SEO, where part of the fee depends on results. It sounds safe, but it only
        works when both sides agree on a clean baseline and on which results count. Paying per ranking can push a
        provider toward easy, low-value keywords. Paying on enquiries or sales is fairer, but needs tracking you trust.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Setup fees and minimum terms also change the real cost. Digital Nomads HQ found one consultant charging a
        $499 + GST setup fee with a three-month minimum. 3am Ideas uses a three-month minimum, then month to month.
        Add the setup fee and the minimum term together before you compare two offers. For a one-off diagnosis first,
        see our guide to <a href="/blog/seo-audit-cost-2026" className={linkCls}>what an SEO audit costs</a>.
      </p>

      {/* Section: what each budget buys, with details expanders */}
      <h2 id="what-each-budget-buys" className={h2Cls}>
        What each monthly SEO budget buys
      </h2>
      <p className={pCls}>
        The price gap between tiers is really a gap in hours. More hours pay for more pages written, more technical
        fixes and more links earned each month. Open each tier to see what the published guides say you should get,
        and what you should not expect.
      </p>
      <div className="space-y-3 mb-6">
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group" open>
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            Entry or local tier (about $500 to $2,500 a month)
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> Google Business Profile optimisation, on-page fixes to your main
              pages (titles, headings, structure, speed checks), local listings and citation clean-up, review
              management and a monthly report. SEOPrices.com.au adds local landing pages for the suburbs you serve.
            </p>
            <p>
              <strong>What you do not get:</strong> regular new content, active link earning or work on competitive
              keywords. StudioHawk describes its entry tier as foundation and upkeep, and rarely recommends staying
              there for long.
            </p>
            <p>
              <strong>Suits:</strong> one location, a handful of suburbs, a trade or clinic with modest online
              competition.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            Growth tier (about $1,500 to $8,000 a month)
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> ongoing keyword research tied to what buyers search, new and improved
              pages each month (service pages, guides, product copy), technical fixes, link earning or digital PR,
              and reporting that ties back to enquiries. StudioHawk says most of its client campaigns sit here.
            </p>
            <p>
              <strong>What you do not get:</strong> a dedicated team across every section of a large site, or
              large-scale PR.
            </p>
            <p>
              <strong>Suits:</strong> small and medium businesses competing city-wide or across a state, and
              service firms that want steady lead growth.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            Competitive, national or ecommerce tier (about $4,500 to $10,000+ a month)
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> strategy across every section of the site, advanced technical work
              (structured data, internal linking, crawl management for large catalogues), content at scale,
              digital PR and tracking of visibility in AI answers.
            </p>
            <p>
              <strong>Suits:</strong> online stores with many categories, national brands, multi-city service
              firms and crowded categories such as legal, finance and real estate.
            </p>
            <p>
              <strong>Above this:</strong> enterprise SEO from about $8,000 to $10,000 a month and up, for large
              and complex sites (SEOPrices.com.au, 3am Ideas).
            </p>
          </div>
        </details>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
        <p className="font-bold text-gray-900 mb-3">Which tier fits you? Tick what applies.</p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>You serve one area and most customers find you by searching a service plus a suburb: start with the <strong>local tier</strong>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>You want to rank across a whole city or state, or you have several services that each need a page: plan for the <strong>growth tier</strong>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>You sell online with dozens of categories, or you compete with national brands: budget for the <strong>competitive tier</strong>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>Your site is slow, was recently rebuilt or lost traffic suddenly: pay for an <strong>audit first</strong>, then decide.</span></li>
        </ul>
      </div>

      {/* Section: local SEO */}
      <h2 id="local-seo-cost" className={h2Cls}>
        Local SEO cost for tradies, clinics and single-location businesses
      </h2>
      <p className={pCls}>
        Local SEO is the cheapest tier to run and often the best value, because people who search a service plus a
        suburb usually want to book. SEOPrices.com.au puts local SEO at <strong>$750 to $2,500 a month</strong>{' '}
        for tradies, clinics, consultants and single-location businesses. One agency reviewed by Digital Nomads HQ
        advertises local SEO at $750 + GST a month, covering 10 keywords, work on up to five pages and two short
        blog posts. Its $1,500 + GST package doubles the keywords and covers the whole site.
      </p>
      <figure className="my-8">
        <img
          src="/blog-images/seo-cost-australia-2026-tradie.webp"
          alt="A Perth plumber beside his white work van in a suburban driveway, checking a map on his phone"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          For a tradie, local SEO means showing up when someone nearby searches your trade and suburb.
        </figcaption>
      </figure>
      <p className={pCls}>
        Be careful comparing local packages. Digital Nomads HQ notes that one provider&apos;s $499 service covers
        only Maps and listings, while website work starts in its $599 tier. Both relate to search, but they are not
        the same job. A local package should tell you which suburbs and services it targets, how many pages it will
        create or improve, and how reviews will be handled.
      </p>
      <p className={pCls}>
        <strong>Tradies:</strong> most plumbers, electricians and builders need a Business Profile that is complete
        and active, one page per service, a page for each main service area, and a steady flow of reviews. If your
        website is the weak link, our page on{' '}
        <a href="/au/websites-for-tradies" className={linkCls}>websites for tradies</a> covers what a tradie site
        needs before SEO can work.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        <strong>Dental and health clinics:</strong> a single clinic usually sits in the local tier. A group with
        several clinics moves up, because each location needs its own page and listing. See our{' '}
        <a href="/au/dental-website-design" className={linkCls}>dental website design and SEO</a> page for what a
        practice site should include.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-white border-2 border-[#F05A28] rounded-2xl p-6 md:p-8 my-10">
        <p className="text-xs font-mono uppercase tracking-wider text-[#B23E13] mb-2">Before you sign a package</p>
        <p className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
          Find out what your site actually needs, then compare quotes
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          We measure the gap between your site and the businesses on page one, then send a written, fixed-scope plan.
          Take it to any provider, or ask us to do the work. No package pricing before we have looked.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">
            Talk to the Founder
          </a>
          <a href="/au/seo" className="inline-block bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            See our SEO services in Australia
          </a>
        </div>
      </div>

      {/* Section: ecommerce SEO */}
      <h2 id="ecommerce-seo-cost" className={h2Cls}>
        Ecommerce and Shopify SEO cost
      </h2>
      <p className={pCls}>
        Online stores pay more for SEO because the work scales with the catalogue. Every category page needs its own
        copy and structure, product pages need unique descriptions, and filters and variants can create thousands of
        near-duplicate URLs that confuse Google. SEOPrices.com.au says ecommerce SEO needs technical, content and
        category work together.
      </p>
      <p className={pCls}>
        The published numbers: Traffic Radius lists ecommerce and national campaigns at{' '}
        <strong>$5,000 to $10,000 a month</strong>. Digital Nomads HQ found one agency advertising ecommerce and
        national growth from $4,500 + GST a month. StudioHawk places its ecommerce clients in its $5,000+ tier. A
        small Shopify store with a few dozen products and one clear niche can start lower, because there are fewer
        pages to fix.
      </p>
      <figure className="my-8">
        <img
          src="/blog-images/seo-cost-australia-2026-store.webp"
          alt="Two staff packing and scanning plain parcels in a bright Brisbane online store warehouse"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Ecommerce SEO costs more because every category and product page is a page to rank.
        </figcaption>
      </figure>
      <p className={pCls}>What pushes an ecommerce SEO quote up or down:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        <li><strong>Number of categories.</strong> Category pages usually win the buying searches, so each one needs work.</li>
        <li><strong>Platform limits.</strong> Shopify handles a lot out of the box but fixes some URL patterns; Magento and WooCommerce need more technical care.</li>
        <li><strong>Filters and variants.</strong> Colour, size and sort options can multiply URLs and waste Google&apos;s crawl.</li>
        <li><strong>Product copy.</strong> Stores using the supplier&apos;s description share it with every other stockist.</li>
        <li><strong>Migrations.</strong> Moving platform without a redirect plan is the fastest way to lose rankings. StudioHawk prices migration SEO at $3,000 to $10,000 as a project.</li>
      </ul>
      <p className="mb-6 text-gray-700 leading-relaxed">
        For the full picture of ecommerce SEO work, see our{' '}
        <a href="/au/ecommerce-seo" className={linkCls}>ecommerce SEO service for Australian stores</a>. If you are
        still choosing or budgeting the store itself, our{' '}
        <a href="/blog/shopify-cost-australia-2026" className={linkCls}>Shopify cost guide for Australia</a> and{' '}
        <a href="/au/shopify-development" className={linkCls}>Shopify development</a> page cover the build.
      </p>

      {/* Section: by city */}
      <h2 id="seo-cost-by-city" className={h2Cls}>
        SEO cost in Sydney, Melbourne, Brisbane and Perth
      </h2>
      <p className={pCls}>
        Australians often search for SEO prices by city. The honest answer is that city matters less than
        competition. A plumber in a regional town and a plumber in inner Sydney do the same work, but the Sydney one
        is fighting far more rivals for the same searches, so reaching page one takes more hours.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            City price information we could verify, September 2026. AUD, GST not stated.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">City</th>
              <th className="p-3.5 text-left font-semibold">What we could verify</th>
              <th className="p-3.5 text-left font-semibold">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Melbourne</td>
              <td className="p-3.5">$1,200 to $10,000+ a month overall; local and small business $1,000 to $2,500; growing business $2,500 to $5,000</td>
              <td className="p-3.5"><a href={SRC.trafficradius} {...extLinkProps}>Traffic Radius</a>, citing GoodFirms (2026)</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Perth</td>
              <td className="p-3.5">Local from $1,000; small business $1,500 to $3,500; competitive $4,500 to $10,000+</td>
              <td className="p-3.5"><a href={SRC.threeam} {...extLinkProps}>3am Ideas</a>, a Perth agency (March 2026)</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Sydney</td>
              <td className="p-3.5">No reliable Sydney-only survey found. Use the national tiers; crowded service categories sit toward the top of each.</td>
              <td className="p-3.5">National ranges above</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Brisbane</td>
              <td className="p-3.5">No reliable Brisbane-only survey found. Use the national tiers.</td>
              <td className="p-3.5">National ranges above</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        We would rather tell you we found no Sydney or Brisbane survey than invent one. For those cities, compare
        quotes against the national tiers and ask each provider how many rival sites they expect you to overtake.
        If you are in Melbourne, Brisbane, Adelaide or Canberra, our city pages for{' '}
        <a href="/au/melbourne" className={linkCls}>Melbourne</a>,{' '}
        <a href="/au/brisbane" className={linkCls}>Brisbane</a>,{' '}
        <a href="/au/adelaide" className={linkCls}>Adelaide</a> and{' '}
        <a href="/au/canberra" className={linkCls}>Canberra</a> cover local context.
      </p>

      {/* Section: AI SEO */}
      <h2 id="ai-seo-cost" className={h2Cls}>
        Does AI SEO cost extra?
      </h2>
      <p className={pCls}>
        Some providers now sell &ldquo;AI SEO&rdquo; or &ldquo;GEO&rdquo; (generative engine optimisation): work
        aimed at getting your business named in answers from ChatGPT, Perplexity, Gemini and Google&apos;s AI
        Overviews. There is no standard price. Digital Nomads HQ found three approaches in September 2026:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
        <li><strong>Included:</strong> one consultant includes ChatGPT and Gemini visibility checks in plans from $890 + GST a month.</li>
        <li><strong>Sold on its own:</strong> one agency advertises AI SEO from $800 + GST a month.</li>
        <li><strong>Added on top:</strong> another agency adds AI SEO to an existing retainer from $1,000 + GST a month.</li>
      </ul>
      <p className={pCls}>
        Before paying an AI surcharge, read Google&apos;s own position. Its{' '}
        <a href={SRC.googleAi} {...extLinkProps}>guidance on AI features</a> says there are no additional
        requirements to appear in AI Overviews or AI Mode, and no special optimisations needed beyond normal search
        requirements. That covers Google only. Other assistants choose sources their own way, and tracking your
        visibility across them is real, separate work.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        So ask what an AI fee buys: tracking only, or new content, technical changes and outreach? Which assistants
        does it cover, and how will progress be measured? You can check where you stand today with our free{' '}
        <a href="/ai-visibility-checker" className={linkCls}>AI visibility checker</a>, and our{' '}
        <a href="/au/ai-seo" className={linkCls}>AI SEO service for Australian businesses</a> explains the work in
        detail.
      </p>

      {/* Section: GST */}
      <h2 id="gst" className={h2Cls}>
        GST on SEO quotes: inclusive or exclusive?
      </h2>
      <p className={pCls}>
        GST catches people out when comparing SEO pricing in Australia, because providers show it differently. Some
        publish prices &ldquo;+ GST&rdquo;, some include it, and most of the guides we checked do not say either way.
        Digital Nomads HQ found mixed GST treatment across the 50 entry offers it reviewed.
      </p>
      <p className={pCls}>
        The rules, from <a href={SRC.gst} {...extLinkProps}>business.gov.au</a>: GST is a 10% tax on most goods and
        services sold in Australia. A business must register for GST once its GST turnover reaches $75,000 or more.
        A provider below that threshold that has not registered does not add GST. If your own business is registered,
        you can usually claim the GST in a provider&apos;s invoice back as a credit, so the exclusive price is closer
        to your real cost.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
        <p className="font-bold text-gray-900 mb-2">A quick GST example</p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Two quotes for the same scope: Provider A says $1,500 a month + GST, which is $1,650 on the invoice.
          Provider B says $1,600 a month including GST. If you are not registered for GST, B is cheaper. If you are
          registered and can claim the credit back, A costs you $1,500 and B costs you about $1,455, so B is still
          slightly cheaper. Always compare like with like.
        </p>
      </div>

      {/* Section: who to hire */}
      <h2 id="who-to-hire" className={h2Cls}>
        Freelancer vs agency vs in-house vs DIY: what each really costs
      </h2>
      <p className={pCls}>
        The right choice depends less on price than on how many different skills your site needs at once. Here is
        how the four options compare.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3.5 text-left font-semibold">Option</th>
              <th className="p-3.5 text-left font-semibold">Typical cost (AUD)</th>
              <th className="p-3.5 text-left font-semibold">Strengths</th>
              <th className="p-3.5 text-left font-semibold">Weak spots</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Freelancer or consultant</td>
              <td className="p-3.5">$120 to $350 an hour, or about $790 to $2,790 a month + GST for one consultant&apos;s tiers</td>
              <td className="p-3.5">Direct contact with the person doing the work; flexible</td>
              <td className="p-3.5">One set of skills; no cover when they are away or busy</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Agency</td>
              <td className="p-3.5">About $1,500 to $6,600 a month for most SMEs; more for national work</td>
              <td className="p-3.5">Strategy, technical, writing and outreach in one team; process and reporting</td>
              <td className="p-3.5">Junior staff may do the work at lower price points; ask who is on your account</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">In-house hire</td>
              <td className="p-3.5">A full salary plus tools</td>
              <td className="p-3.5">Knows your business deeply; always available</td>
              <td className="p-3.5">One person rarely covers technical, content and links equally well</td>
            </tr>
            <tr>
              <td className="p-3.5 font-semibold text-gray-900">Do it yourself</td>
              <td className="p-3.5">Your time; Google Search Console and Business Profile are free</td>
              <td className="p-3.5">Full control; no fees</td>
              <td className="p-3.5">Time-hungry; most owners stall at technical fixes and link earning</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Sources for the dollar figures: <a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a>,{' '}
        <a href={SRC.dnhq} {...extLinkProps}>Digital Nomads HQ</a> and{' '}
        <a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a>, September 2026. We have not listed an in-house
        salary because we could not verify a current Australian figure for this role.
      </p>

      {/* Section: what a package should include (listicle) */}
      <h3 className={h3Cls}>What a proper SEO package should include</h3>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
        <li><strong>An audit before the quote,</strong> so the price reflects your site, not a template.</li>
        <li><strong>A written scope:</strong> which pages, keywords and locations, and what is excluded.</li>
        <li><strong>Deliverables you can count:</strong> pages written or improved, fixes shipped, links earned.</li>
        <li><strong>A named owner</strong> for uploads, technical changes and outreach, on your side and theirs.</li>
        <li><strong>Monthly reporting</strong> on enquiries and sales, not only rankings.</li>
        <li><strong>A link policy</strong> that rules out bought links and private blog networks.</li>
        <li><strong>Clear terms:</strong> setup fee, minimum period, notice period and who owns the work if you leave.</li>
      </ol>

      {/* Section: red flags */}
      <h2 id="red-flags" className={h2Cls}>
        9 red flags in low-cost SEO services
      </h2>
      <p className={pCls}>
        A small budget can buy useful work if the scope is honest. These signs suggest it is not.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
        <li><strong>Guaranteed rankings.</strong> Google&apos;s own <a href={SRC.googleSeo} {...extLinkProps}>advice on hiring an SEO</a> says no one can guarantee a number-one ranking.</li>
        <li><strong>A &ldquo;special relationship&rdquo; with Google</strong> or a &ldquo;priority submit&rdquo;. Google warns against both in the same guidance.</li>
        <li><strong>A price before anyone looks at your site.</strong> A quote on a first call cannot know whether you need one fix or a year of work.</li>
        <li><strong>A fixed number of backlinks per month.</strong> 3am Ideas flags this as a hallmark of low-cost SEO; bought links count as link spam.</li>
        <li><strong>Hundreds of keywords for a small monthly fee.</strong> Tracking is cheap; improving pages for each keyword is not.</li>
        <li><strong>Reports full of activity and no results.</strong> &ldquo;20 directory submissions&rdquo; is not an outcome.</li>
        <li><strong>AI-written content with no human review.</strong> 3am Ideas lists this among the hallmarks of low-cost SEO that can trigger penalties.</li>
        <li><strong>No access to your own accounts.</strong> You should own your Search Console, Analytics and Business Profile.</li>
        <li><strong>A long lock-in with no performance clause.</strong> 3am Ideas flags contracts longer than six months with no performance clauses. A minimum of about three months is common.</li>
      </ol>

      {/* Section: budget in 5 steps */}
      <h2 id="budget" className={h2Cls}>
        How to set your SEO budget in 5 steps
      </h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-700">
        <li><strong>Work out what a customer is worth.</strong> Use the value of a typical customer over a year, not one sale.</li>
        <li><strong>Know your close rate.</strong> If you win one in three enquiries, you need three enquiries per new customer.</li>
        <li><strong>Find your break-even.</strong> Divide a year of SEO fees by customer value. That is how many extra customers SEO must bring in a year to pay for itself.</li>
        <li><strong>Check it is realistic.</strong> Look at Google Search Console for how often you already appear for your services. A few extra enquiries a month is a sensible first target.</li>
        <li><strong>Ask for a phased plan.</strong> Separate one-off repairs from ongoing work, so you can see what each costs and stop after the first phase if it does not deliver.</li>
      </ol>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Most sites take months, not weeks, to move. Our{' '}
        <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline" className={linkCls}>month-by-month SEO timeline</a>{' '}
        sets realistic expectations. If your website itself needs replacing before SEO can work, our{' '}
        <a href="/blog/website-cost-australia-2026" className={linkCls}>website cost guide for Australia</a> covers
        the build, and our <a href="/blog/ai-cost-australia-2026" className={linkCls}>AI cost guide</a> covers AI
        projects.
      </p>

      {/* Section: where FactoryJet fits */}
      <h2 className={h2Cls}>Where FactoryJet fits</h2>
      <p className={pCls}>
        We are one of many options, and for a single-location business with a healthy site, a good local specialist
        may be all you need. We do not publish SEO packages. We measure the gap between your site and the businesses
        on page one first: technical faults, missing pages, and the strength of the sites you need to overtake. Then
        we quote a fixed price per stage, so you can stop after the audit and repair stage if you prefer to carry on
        yourself.
      </p>
      <p className={pCls}>
        Our focus is ecommerce stores, AI-ready websites and service businesses that want to be found in Google and in
        AI assistants. We design, build and fix the site, run the SEO, and stay on to support it after launch, and you
        own everything: the site, the content and the accounts. FactoryJet was founded in 2014 and has worked with
        more than 500 businesses, including B2B wholesaler Bombay Petals and direct-to-consumer brand Belle Maison.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Start with our <a href="/au/seo" className={linkCls}>SEO services in Australia</a>, see everything we do on{' '}
        <a href="/au" className={linkCls}>FactoryJet Australia</a>, or{' '}
        <a href="/contact" className={linkCls}>talk to the founder</a> about your site.
      </p>

      {/* Author box */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong className="text-gray-900">About the author.</strong> Bhavesh Barot is the Founder &amp; CEO of
          FactoryJet. He has spent more than a decade building commerce websites and search programs, and leads the
          team that builds and supports ecommerce stores, AI agents and SEO for Australian, UK and US businesses.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Price sources checked on 26 September 2026:{' '}
          <a href={SRC.dnhq} {...extLinkProps}>Digital Nomads HQ</a>,{' '}
          <a href={SRC.studiohawk} {...extLinkProps}>StudioHawk</a>,{' '}
          <a href={SRC.seoprices} {...extLinkProps}>SEOPrices.com.au</a>,{' '}
          <a href={SRC.threeam} {...extLinkProps}>3am Ideas</a>,{' '}
          <a href={SRC.trafficradius} {...extLinkProps}>Traffic Radius</a>,{' '}
          <a href={SRC.bark} {...extLinkProps}>Bark</a>. Published prices change; confirm with each provider.
        </p>
      </div>

      {/* Further reading */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10">
        <p className="text-lg font-bold text-gray-900 mb-3">Related Australian guides and services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="/au/seo" className="text-[#B23E13] hover:underline">SEO services in Australia</a>
          <a href="/au/ecommerce-seo" className="text-[#B23E13] hover:underline">Ecommerce SEO for Australian stores</a>
          <a href="/au/ai-seo" className="text-[#B23E13] hover:underline">AI SEO and GEO in Australia</a>
          <a href="/au/websites-for-tradies" className="text-[#B23E13] hover:underline">Websites for tradies</a>
          <a href="/blog/website-cost-australia-2026" className="text-[#B23E13] hover:underline">Website cost in Australia (2026)</a>
          <a href="/blog/shopify-cost-australia-2026" className="text-[#B23E13] hover:underline">Shopify cost in Australia (2026)</a>
          <a href="/blog/seo-audit-cost-2026" className="text-[#B23E13] hover:underline">What an SEO audit costs</a>
          <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline" className="text-[#B23E13] hover:underline">How long SEO takes, month by month</a>
        </div>
      </div>
    </>
  ),
};
