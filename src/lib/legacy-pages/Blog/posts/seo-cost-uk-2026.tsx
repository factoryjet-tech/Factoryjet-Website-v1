import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// UK page plan 2026-10-21 (docs/reports/2026-10-21-uk-page-plan.md), new page 1: UK SEO cost guide.
// Keywords: pipeline/research/data/uk-page-plan-2026-10-21/volumes.json (UK Google Ads volumes, location 2826).
// SERPs and PAA: pipeline/research/data/uk-page-plan-2026-10-21/serps/seo_cost_uk.json and
// pipeline/research/data/seo-cost-uk-2026-10-21/serp_paa.json (8 more UK desktop SERPs, 21 Oct 2026).
//
// PRICES: every pound figure below is a third-party UK market range or one provider's published price,
// fetch-verified on 2026-10-21 from the page linked beside it. None of them is a FactoryJet price. If a
// source changes, update or cut the number; do not keep a figure that can no longer be found on its page.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx)
// FROM this exact array, so the visible FAQs and the structured data can never drift apart.
// Do not add a second, hand-written FAQPage script anywhere in this file.

const SRC = {
  localiq: 'https://localiq.co.uk/blog/how-much-does-seo-cost-in-the-uk',
  gorilla: 'https://blog.gorilla.marketing/how-much-does-seo-cost/',
  renhao: 'https://renhaoseo.com/uk/compare/seo-pricing/',
  dandy: 'https://www.dandymarketing.co.uk/blog/seo/seo-prices-how-much-does-seo-cost-in-the-uk/',
  muve: 'https://muvemm.com/seo/local-seo-cost-uk/',
  itamar: 'https://www.itamarblauer.com/how-much-does-seo-cost/',
  expertsure: 'https://www.expertsure.com/uk/digital-marketing/seo-costs/',
  autoseo: 'https://auto-seo.co.uk/blog/how-much-does-seo-cost-uk-2026-in-depth-pricing-guide',
  vatThreshold: 'https://www.gov.uk/how-vat-works/vat-thresholds',
  vatRates: 'https://www.gov.uk/vat-rates',
  googleSeo: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  googleAi: 'https://developers.google.com/search/docs/appearance/ai-features',
} as const;

const faqs: FAQItem[] = [
  {
    q: 'How much does SEO cost in the UK?',
    a: 'Most UK businesses pay between £500 and £5,000 a month for SEO in 2026, usually before VAT. That is the band Gorilla Marketing and LOCALiQ both publish. Ren Hao SEO puts most managed retainers at £1,500 to £5,000 with a median near £2,500 (updated October 2026). Local-only work can start near £300, and enterprise programmes run past £10,000 a month.',
  },
  {
    q: 'How much is SEO per month in the UK?',
    a: 'Plan on roughly £500 to £3,000 a month for a small or local business and £3,000 to £8,000 for a mid-size one, using Gorilla Marketing\'s 2026 bands. Below £500 a month you get upkeep, a report and a little content. Dandy Marketing, updated September 2026, gives a wider average of £500 to £6,000 a month.',
  },
  {
    q: 'What is a typical SEO retainer in the UK?',
    a: 'A typical managed SEO retainer in the UK is £1,500 to £5,000 a month, with a median around £2,500, according to Ren Hao SEO\'s October 2026 pricing page. One national agency, LOCALiQ, publishes its own tiers at £1,300 to £2,000, £2,000 to £2,750 and £2,750 upward. Terms vary: Ren Hao SEO works month to month, while Gorilla Marketing warns against agencies that insist on 12-month minimum contracts before they have proven anything.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    a: 'A small UK business should expect £500 to £1,500 a month for local SEO that shows results, and £1,500 to £3,000 for steady growth with regular content and links. Those are Gorilla Marketing\'s two lower budget bands. Expert Sure found published starting prices as low as £185 a month for narrowly scoped local packages, excluding VAT, which buy far less work.',
  },
  {
    q: 'How much does local SEO cost in the UK?',
    a: 'Local SEO in the UK usually costs £300 to £2,000 a month. Muve Marketing gives £300 to £700 for single-location support, £700 to £1,500 for broader ongoing work and £1,500 or more for multi-location campaigns (August 2026). Gorilla Marketing puts most local retainers at £500 to £2,000. Cost rises with the number of locations and how crowded your trade is.',
  },
  {
    q: 'How much does ecommerce SEO cost in the UK?',
    a: 'Ecommerce SEO in the UK typically costs £1,500 to £10,000 or more a month. Ren Hao SEO lists ecommerce work at £1,500 to £8,000+ and Gorilla Marketing at £2,000 for smaller stores up to £10,000+ for competitive retailers. A Shopify store with 50 products costs far less than a retailer with 10,000 SKUs, because every category page needs its own work.',
  },
  {
    q: 'How much does B2B SEO cost in the UK?',
    a: 'B2B SEO for professional services such as legal, accounting and financial advice usually starts at £1,500 to £5,000 a month, and SaaS companies typically spend £3,000 to £8,000, according to Gorilla Marketing. B2B costs more than local SEO because buyers search fewer, more technical terms and the content needs real expertise. Regulated sectors such as finance and health often need £5,000 a month or more.',
  },
  {
    q: 'How much does an SEO audit cost in the UK?',
    a: 'A one-off SEO audit in the UK usually costs £1,000 to £5,000, depending on site size (Itamar Blauer, July 2026). Ren Hao SEO puts audits and migrations at £2,000 to £8,000. Whitehat SEO publishes an Essential website audit at £2,500 excluding VAT, as reported by Expert Sure. A free automated score report is a different product and does not replace a manual audit.',
  },
  {
    q: 'How much does on-page SEO cost?',
    a: 'On-page SEO is rarely sold alone in the UK; it sits inside entry packages. Auto-SEO lists managed entry packages focused on on-page fixes, technical SEO and reporting at £200 to £500 a month. Done properly on a small site, on-page work is often a one-off project inside an audit, then upkeep inside a retainer. Ask how many pages a quote covers each month.',
  },
  {
    q: 'How much does an SEO consultant charge per hour in the UK?',
    a: 'UK SEO consultants usually charge £75 to £200 an hour, according to LOCALiQ and Itamar Blauer. Gorilla Marketing gives a wider £80 to £250, with senior specialists at the top. Itamar Blauer puts day rates for experienced consultants at £500 to £1,500. Ren Hao SEO quotes a lower £50 to £150 an hour for senior consulting.',
  },
  {
    q: 'Is an SEO freelancer cheaper than an agency?',
    a: 'Usually, yes. LOCALiQ puts freelancers at £50 to £500 a month and agencies at £500 to £5,000+. Gorilla Marketing gives experienced freelancers £500 to £3,000 a month against agencies at £1,000 to £10,000+. A freelancer is one person, so ask who covers technical fixes, writing and links. For a small site with modest goals, one good freelancer can be enough.',
  },
  {
    q: 'How much does it cost to hire an in-house SEO in the UK?',
    a: 'LOCALiQ says a mid-level SEO manager costs upwards of £35,000 a year before benefits, tools and training. Gorilla Marketing gives £35,000 to £70,000 a year in salary, plus £200 to £500 a month for enterprise SEO tools. One hire rarely covers technical work, content and link earning equally well, so most small firms still buy some outside help.',
  },
  {
    q: 'Does SEO cost more in London?',
    a: 'Yes, usually. Gorilla Marketing says London agencies typically charge 20 to 40 per cent more than regional firms for equivalent work. A London business also often faces more rivals for the same searches, which needs more hours. You do not have to hire in London to rank in London; what matters is the scope of work, not where the agency sits.',
  },
  {
    q: 'Do UK SEO prices include VAT?',
    a: 'Usually not. Ren Hao SEO says UK SEO is typically quoted excluding VAT, and the starting prices Expert Sure lists all exclude it. The standard UK VAT rate is 20 per cent. A provider must register once its taxable turnover passes £90,000, so a small freelancer may not charge VAT at all. If your business is VAT-registered you can usually reclaim it.',
  },
  {
    q: 'What is the cheapest SEO, and does it work?',
    a: 'The cheapest offers are automated tools from about £49 a month (Auto-SEO) and local packages from £185 a month (DPOM, via Expert Sure). They can keep a Business Profile tidy. Ren Hao SEO warns that outside a single-location local campaign, offers under £750 a month are usually too thin to fund content, technical work and links together.',
  },
  {
    q: 'Why is SEO so expensive?',
    a: 'Because most of the price is skilled hours, and good SEO needs several skills at once: technical fixes, writing, link earning and reporting. Ren Hao SEO says a £2,500 a month programme typically buys 25 to 35 senior hours, two to four substantial pages and a steady flow of earned links. A crowded market needs more of all three to overtake sites that started years earlier.',
  },
  {
    q: 'Do you have to pay for SEO?',
    a: 'No. Google says it never accepts payment to include or rank a site in its organic results. You pay for the work, either in your own time or in fees. Many owners do the basics themselves: a complete Google Business Profile, one clear page per service, good page titles and a steady flow of reviews. Google Search Console is free.',
  },
  {
    q: 'Can I do SEO myself for free?',
    a: 'Yes, the first steps cost nothing but time. Claim your Google Business Profile, write one useful page per service and location, fix page titles, and ask happy customers for reviews. Auto-SEO puts DIY tool subscriptions at £20 to £150 a month if you want software help. Most owners stall at technical fixes and earning links, which is where paid help usually starts to pay for itself.',
  },
  {
    q: 'Is paying for SEO worth it?',
    a: 'It is worth it when the extra customers it brings are worth more than the fee. Expert Sure works through an example: a £1,000 a month retainer plus extras costs £9,720 over six months, so at £300 profit per customer the business needs 33 extra customers in that time. Run the same sum with your own numbers before you sign anything.',
  },
  {
    q: 'How much should I budget for SEO as a share of revenue?',
    a: 'Gorilla Marketing cites a common guideline of 5 to 10 per cent of revenue on marketing, with part of that going to SEO. On that basis a business turning over £500,000 a year might spend £2,000 to £4,000 a month on SEO. Treat it as a starting point and check it against what one new customer is worth to you.',
  },
  {
    q: 'How long does SEO take to pay back?',
    a: 'LOCALiQ says you will typically see meaningful movement in rankings and traffic within three to six months of a well-run campaign, depending on your starting point. Expert Sure uses a six-month planning window but says it is not a prediction that SEO will pay back by then. Local campaigns in low-competition trades move fastest; new sites in crowded national markets move slowest.',
  },
  {
    q: 'Is SEO dead now with AI?',
    a: 'No. Google says pages need no special optimisation beyond normal search requirements to appear in its AI Overviews and AI Mode, so the same work still counts. On 21 October 2026 we found Google AI Overviews on 2 of 8 UK SEO cost searches we checked. The format matters more now, because assistants quote pages with clear answers, sourced numbers and named facts.',
  },
  {
    q: 'Does AI SEO or GEO cost extra in the UK?',
    a: 'Sometimes, and there is no standard price. Some providers fold AI visibility checks into existing retainers; others sell AI SEO, also called GEO (generative engine optimisation), as an add-on. Ask what the fee buys: tracking only, or new content, technical changes and outreach. Ren Hao SEO notes that providers with no AI search capability may be cheaper because they offer less.',
  },
  {
    q: 'What is the 80/20 rule for SEO?',
    a: 'It means a small share of your pages and fixes produces most of your results. In practice: your top service pages, your Google Business Profile and a handful of technical faults usually matter more than hundreds of keywords. Use it to judge a quote. A good proposal names the few pages and fixes it will start with, rather than listing everything it could do.',
  },
  {
    q: 'What SEO practices should I avoid paying for?',
    a: 'Avoid guaranteed rankings, which Google says no one can promise, and bulk links: LOCALiQ tells buyers to ask where "50 links a month for £200" come from. Avoid mass AI-written pages nobody edits, directory submissions sold as results, and any deal where the provider owns your Search Console or Business Profile. Those cost you twice: once to buy, once to undo.',
  },
];

const typeRows = [
  {
    type: 'Local or single-location business',
    range: '£300 to £2,000',
    detail: 'Muve: £300 to £700 single location, £700 to £1,500 broader, £1,500+ multi-location. Gorilla: £500 to £2,000. Ren Hao entry: £300 to £800.',
    src: [['Muve', SRC.muve], ['Gorilla', SRC.gorilla], ['Ren Hao', SRC.renhao]],
  },
  {
    type: 'Small business, growth',
    range: '£500 to £3,000',
    detail: 'Gorilla small and local: £500 to £3,000. LOCALiQ small agency: £500 to £1,500.',
    src: [['Gorilla', SRC.gorilla], ['LOCALiQ', SRC.localiq]],
  },
  {
    type: 'Ecommerce store',
    range: '£1,500 to £10,000+',
    detail: 'Ren Hao: £1,500 to £8,000+. Gorilla: £2,000 for smaller stores, £10,000+ for competitive retail.',
    src: [['Ren Hao', SRC.renhao], ['Gorilla', SRC.gorilla]],
  },
  {
    type: 'B2B professional services',
    range: '£1,500 to £5,000',
    detail: 'Gorilla: legal, accounting and financial advice, £1,500 to £5,000 minimum for meaningful progress.',
    src: [['Gorilla', SRC.gorilla]],
  },
  {
    type: 'B2B SaaS and technology',
    range: '£3,000 to £8,000',
    detail: 'Gorilla: typical for growing SaaS companies.',
    src: [['Gorilla', SRC.gorilla]],
  },
  {
    type: 'Mid-size business, national',
    range: '£1,500 to £8,000',
    detail: 'Ren Hao growth: £1,500 to £5,000, median £2,500. Gorilla mid-size: £3,000 to £8,000.',
    src: [['Ren Hao', SRC.renhao], ['Gorilla', SRC.gorilla]],
  },
  {
    type: 'Enterprise or regulated sector',
    range: '£5,000 to £25,000+',
    detail: 'Ren Hao enterprise: £5,000 to £25,000+. Gorilla: £10,000+; health and finance rarely move below £5,000.',
    src: [['Ren Hao', SRC.renhao], ['Gorilla', SRC.gorilla]],
  },
] as const;

const projectRows = [
  {
    type: 'One-off SEO audit',
    range: '£1,000 to £8,000',
    detail: 'Itamar Blauer: £1,000 to £5,000 by site size. Ren Hao audits and migrations: £2,000 to £8,000. Whitehat SEO Essential audit: £2,500 ex VAT (via Expert Sure).',
    src: [['Itamar Blauer', SRC.itamar], ['Ren Hao', SRC.renhao], ['Expert Sure', SRC.expertsure]],
  },
  {
    type: 'Larger project (migration, strategy)',
    range: '£5,000 to £50,000+',
    detail: 'Gorilla: £5,000 to £15,000 small business, £10,000 to £30,000 mid-size, £20,000 to £50,000+ enterprise.',
    src: [['Gorilla', SRC.gorilla]],
  },
  {
    type: 'Hourly consulting',
    range: '£50 to £250 an hour',
    detail: 'LOCALiQ and Itamar Blauer: £75 to £200. Gorilla: £80 to £250. Ren Hao: £50 to £150.',
    src: [['LOCALiQ', SRC.localiq], ['Itamar Blauer', SRC.itamar], ['Gorilla', SRC.gorilla], ['Ren Hao', SRC.renhao]],
  },
  {
    type: 'Consultant day rate',
    range: '£500 to £1,500 a day',
    detail: 'Itamar Blauer: experienced UK SEO consultants, 2026.',
    src: [['Itamar Blauer', SRC.itamar]],
  },
  {
    type: 'In-house SEO hire',
    range: '£35,000 to £70,000 a year',
    detail: 'LOCALiQ: mid-level SEO manager upwards of £35,000. Gorilla: £35,000 to £70,000 salary, plus £200 to £500 a month in tools.',
    src: [['LOCALiQ', SRC.localiq], ['Gorilla', SRC.gorilla]],
  },
] as const;

const serpRows = [
  ['dandymarketing.co.uk', 'SEO Prices: How Much Does SEO Cost In The UK?'],
  ['flyhighmedia.co.uk', 'SEO Cost UK: Pricing Guide & Breakdown'],
  ['ink-digital.co.uk', 'SEO Costs for UK Businesses: A Fee Breakdown'],
  ['localiq.co.uk', 'How much does SEO cost in the UK? A 2026 pricing guide'],
  ['seomoves.co.uk', 'Direct Costs of SEO for SME\'s'],
  ['muvemm.com', 'Local SEO Cost in the UK: 2026 Small Business Guide'],
  ['renhaoseo.com', 'SEO Pricing in the UK 2026: Rates & Packages (GBP)'],
  ['auto-seo.co.uk', 'How Much Does SEO Cost UK 2026? In-Depth Pricing Guide'],
  ['blog.gorilla.marketing', 'How Much Does SEO Cost in the UK?'],
] as const;

const linkCls = 'text-[#B23E13] font-semibold underline';
const extLinkProps = { target: '_blank', rel: 'noopener noreferrer nofollow', className: 'text-[#B23E13] underline' } as const;
const h2Cls = 'text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4';
const h3Cls = 'text-xl font-bold text-gray-900 mt-8 mb-3';
const pCls = 'mb-4 text-gray-700 leading-relaxed';
const thCls = 'p-3.5 text-left font-semibold';
const tdCls = 'p-3.5';

function SrcLinks({ src }: { src: readonly (readonly [string, string])[] }) {
  return (
    <>
      {src.map(([name, url], i) => (
        <React.Fragment key={name}>
          {i > 0 ? ', ' : ''}
          <a href={url} {...extLinkProps}>{name}</a>
        </React.Fragment>
      ))}
    </>
  );
}

export const post: BlogPost = {
  id: '791',
  slug: 'seo-cost-uk-2026',
  title: 'How Much Does SEO Cost in the UK? 2026 Prices by Business Type',
  excerpt:
    'What SEO costs in the UK in 2026, in pounds: monthly retainers for local, ecommerce and B2B businesses, one-off audits, hourly and day rates, freelancer vs agency vs in-house, VAT, red flags in cheap packages and what AI search changes. Every figure is a published UK range with its source and date.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 21, 2026',
  dateModified: 'Oct 21, 2026',
  readTime: '17 min read',
  imageUrl: '/blog-images/seo-cost-uk-2026-hero.webp',
  imageAlt:
    'A shop owner at a light oak table in a bright back office comparing two printed SEO proposals laid side by side',
  meta: {
    title: 'SEO Cost UK 2026: Prices by Business Type | FactoryJet',
    description:
      'How much does SEO cost in the UK in 2026? Monthly prices for local, ecommerce and B2B SEO, audits and hourly rates, from 8 UK sources checked 21 Oct 2026.',
  },
  keyTakeaways: [
    'Most UK businesses pay £500 to £5,000 a month for SEO in 2026, usually before VAT. Managed retainers cluster at £1,500 to £5,000, with a median near £2,500 (Ren Hao SEO, October 2026).',
    'Local SEO runs about £300 to £2,000 a month, ecommerce £1,500 to £10,000+, B2B professional services £1,500 to £5,000 and SaaS £3,000 to £8,000.',
    'A one-off SEO audit costs about £1,000 to £8,000. Hourly consulting runs £50 to £250 and day rates £500 to £1,500.',
    'Offers under about £750 a month rarely fund content, technical work and links together, outside a single-location local campaign.',
    'These are third-party UK market ranges checked on 21 October 2026, not FactoryJet prices.',
  ],
  faqs,
  content: (
    <>
      {/* Answer-first block */}
      <div className="answer-first bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 md:p-6 rounded-r-xl mb-8">
        <p className="font-bold text-gray-900 text-base md:text-lg mb-2">The short answer: how much SEO costs per month in the UK</p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Most UK businesses pay <strong>£500 to £5,000 a month</strong> for SEO in 2026, usually before VAT
          (Gorilla Marketing and LOCALiQ). Managed retainers cluster at £1,500 to £5,000, with a median near{' '}
          <strong>£2,500 a month</strong> (Ren Hao SEO, updated 15 October 2026). Local SEO starts near £300 a month;
          ecommerce and enterprise work runs past £10,000.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Typical UK market ranges from eight published sources, each fetched and read on 21 October 2026. Sources
          are linked in the tables below. These are not FactoryJet prices.
        </p>
      </div>

      <p className={pCls}>
        Ask three UK providers for SEO prices and you can get £185, £1,300 and &ldquo;let&apos;s talk&rdquo;. All
        three can be honest. They are quoting different amounts of work. This guide puts the published UK numbers side
        by side, by type of business and type of project, so you can tell which kind of quote you are holding.
      </p>
      <p className={pCls}>
        A few terms, once. <strong>SEO</strong> (search engine optimisation) is the work that helps your website show
        up in Google&apos;s unpaid results. A <strong>retainer</strong> is a fixed monthly fee for ongoing work. An{' '}
        <strong>SEO audit</strong> is a one-off check of your site that lists what stops it ranking.{' '}
        <strong>Link earning</strong> means getting other real websites to link to yours. <strong>GEO</strong>{' '}
        (generative engine optimisation) is work aimed at being named in AI answers from ChatGPT, Perplexity and
        Google&apos;s AI Overviews.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
        <p className="font-bold text-gray-900 mb-2">How we built this guide</p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          On 21 October 2026 we pulled Google&apos;s UK desktop results for eight SEO cost searches through
          DataForSEO, including &ldquo;seo cost uk&rdquo;, &ldquo;seo packages uk&rdquo;, &ldquo;seo cost per month
          uk&rdquo; and &ldquo;local seo cost uk&rdquo;. We then fetched and read the pricing guides that rank, and kept
          only figures we could find on the page that day. Two ranking guides (Fly High Media and Minty Digital)
          blocked our fetch, so neither is quoted. Most sources are agencies with their own prices to sell; we say so
          where it matters.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <p className="text-lg font-bold mb-3 text-gray-900">What this guide covers</p>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700 text-sm md:text-base">
          <li><a href="#seo-cost-by-business-type" className="text-[#B23E13] underline">SEO cost in the UK by type of business</a></li>
          <li><a href="#seo-cost-by-project-type" className="text-[#B23E13] underline">Audits, projects, hourly rates and in-house hires</a></li>
          <li><a href="#what-each-budget-buys" className="text-[#B23E13] underline">What each monthly SEO budget buys</a></li>
          <li><a href="#what-drives-cost" className="text-[#B23E13] underline">7 things that drive an SEO quote up or down</a></li>
          <li><a href="#vat" className="text-[#B23E13] underline">VAT on UK SEO prices</a></li>
          <li><a href="#red-flags" className="text-[#B23E13] underline">8 red flags in cheap SEO packages</a></li>
          <li><a href="#ai-search" className="text-[#B23E13] underline">How AI search changes what to buy</a></li>
          <li><a href="#what-else-ranks" className="text-[#B23E13] underline">What else ranks for &ldquo;seo cost uk&rdquo;</a></li>
          <li><a href="#budget" className="text-[#B23E13] underline">How to set your SEO budget in 5 steps</a></li>
        </ol>
      </div>

      {/* Section: by business type */}
      <h2 id="seo-cost-by-business-type" className={h2Cls}>
        SEO cost in the UK by type of business
      </h2>
      <p className={pCls}>
        The business you run sets the price more than anything else, because it decides how many pages need work and
        how strong the sites you must overtake are. Here is SEO pricing in the UK as monthly retainer ranges, from the
        guides that publish it by business type.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Typical UK SEO prices per month, GBP, usually before VAT. Read on each source page on 21 October 2026.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Business type</th>
              <th className={thCls}>Typical monthly range</th>
              <th className={thCls}>What the sources say</th>
              <th className={thCls}>Sources</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {typeRows.map((r) => (
              <tr key={r.type}>
                <td className={`${tdCls} font-semibold text-gray-900`}>{r.type}</td>
                <td className={`${tdCls} whitespace-nowrap`}>{r.range}</td>
                <td className={tdCls}>{r.detail}</td>
                <td className={tdCls}><SrcLinks src={r.src} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        On UK SEO costs, the sources agree more at the bottom than at the top. Every guide that gives a local band starts it between
        £300 and £500 a month. The top ends spread from £5,000 (LOCALiQ&apos;s agency band) to £25,000+ (Ren Hao&apos;s
        enterprise band), because &ldquo;enterprise&rdquo; covers anything from a regional chain to a national
        retailer.
      </p>
      <p className={pCls}>
        Two more data points frame the market. <a href={SRC.dandy} {...extLinkProps}>Dandy Marketing</a> (updated 12
        September 2026) puts the average at £500 to £6,000 a month and notes that a plumber does not need £6,000 of
        SEO while an ecommerce site entering a new market might. At the cheap end,{' '}
        <a href={SRC.autoseo} {...extLinkProps}>Auto-SEO</a>, which sells an automated SEO tool, lists managed agency
        packages at £200 to £2,000+ and its own software from £49 a month. Software and a managed service are
        different purchases; compare like with like.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        One national agency publishes its own tiers, which shows where a mid-market UK agency sits.{' '}
        <a href={SRC.localiq} {...extLinkProps}>LOCALiQ</a> (14 May 2026) prices campaigns at £1,300 to £2,000 a month
        (Foundations), £2,000 to £2,750 (Growth) and £2,750 upward (Enterprise), each with a six-month strategy
        document and monthly reporting.
      </p>

      <figure className="my-8">
        <img
          src="/blog-images/seo-cost-uk-2026-review.webp"
          alt="Two colleagues in a bright office looking over an open laptop that shows a simple rising chart"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          A useful monthly report ties ranking changes to enquiries and sales, in plain English.
        </figcaption>
      </figure>

      {/* Section: by project type */}
      <h2 id="seo-cost-by-project-type" className={h2Cls}>
        Audits, projects, hourly rates and in-house hires
      </h2>
      <p className={pCls}>
        Not every SEO purchase is a retainer. If you need a diagnosis, a site move or advice for your own team, you buy
        a project, a day or an hour. Here are the published UK prices for each.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <caption className="text-left text-xs text-gray-500 p-3">
            Typical UK SEO project and time-based prices, GBP, usually before VAT. Read on 21 October 2026.
          </caption>
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Project type</th>
              <th className={thCls}>Typical range</th>
              <th className={thCls}>What the sources say</th>
              <th className={thCls}>Sources</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {projectRows.map((r) => (
              <tr key={r.type}>
                <td className={`${tdCls} font-semibold text-gray-900`}>{r.type}</td>
                <td className={`${tdCls} whitespace-nowrap`}>{r.range}</td>
                <td className={tdCls}>{r.detail}</td>
                <td className={tdCls}><SrcLinks src={r.src} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={pCls}>
        An audit is the cheapest way to find out whether you need a £500 retainer or a £5,000 one. Check what the fee
        includes: <a href={SRC.expertsure} {...extLinkProps}>Expert Sure</a> (12 September 2026) warns that a manual
        audit covering technical SEO, speed and mobile should not be compared with a free automated score report. Our
        guide to <a href="/blog/seo-audit-cost-2026" className={linkCls}>what an SEO audit costs</a> covers scope in
        more depth, and our <a href="/uk/seo-audit" className={linkCls}>UK SEO audit service</a> shows what a written
        fix list looks like.
      </p>

      <h3 className={h3Cls}>SEO agency cost vs freelancer vs in-house</h3>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Option</th>
              <th className={thCls}>Typical UK cost</th>
              <th className={thCls}>Strength</th>
              <th className={thCls}>Weak spot</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className={`${tdCls} font-semibold text-gray-900`}>Freelancer</td>
              <td className={tdCls}>£50 to £500 a month (LOCALiQ); £500 to £3,000 for experienced consultants (Gorilla)</td>
              <td className={tdCls}>You talk to the person doing the work</td>
              <td className={tdCls}>One set of skills; no cover when busy or away</td>
            </tr>
            <tr>
              <td className={`${tdCls} font-semibold text-gray-900`}>Agency</td>
              <td className={tdCls}>£500 to £5,000+ (LOCALiQ); £1,000 to £10,000+ (Gorilla)</td>
              <td className={tdCls}>Strategy, technical, writing and outreach in one team</td>
              <td className={tdCls}>Junior staff may run cheaper accounts; ask who does the work</td>
            </tr>
            <tr>
              <td className={`${tdCls} font-semibold text-gray-900`}>In-house hire</td>
              <td className={tdCls}>£35,000 to £70,000 a year, plus tools</td>
              <td className={tdCls}>Knows your business; always available</td>
              <td className={tdCls}>One person rarely covers every skill</td>
            </tr>
            <tr>
              <td className={`${tdCls} font-semibold text-gray-900`}>Do it yourself</td>
              <td className={tdCls}>Your time; Search Console and Business Profile are free</td>
              <td className={tdCls}>Full control, no fees</td>
              <td className={tdCls}>Most owners stall at technical fixes and links</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        <a href={SRC.itamar} {...extLinkProps}>Itamar Blauer</a>, a UK consultant writing in July 2026, makes the
        point that matters most here: a £2,000 retainer run by a senior specialist and a £2,000 retainer run by a
        junior with forty other clients are different products at the same price. Ask who will do the work.
      </p>

      {/* Section: what each budget buys */}
      <h2 id="what-each-budget-buys" className={h2Cls}>
        What each monthly SEO budget buys
      </h2>
      <p className={pCls}>
        The gap between price bands is a gap in hours. <a href={SRC.renhao} {...extLinkProps}>Ren Hao SEO</a> gives a
        useful yardstick: at the £2,500 median, a healthy programme shows around 25 to 35 senior hours, two to four
        substantial pages and a steady flow of earned links a month. Open each band to see what the UK guides say you
        should get.
      </p>
      <div className="space-y-3 mb-6">
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group" open>
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            Under £500 a month
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> basic on-page tweaks, a monthly report and a little content, according to{' '}
              <a href={SRC.gorilla} {...extLinkProps}>Gorilla Marketing</a>. Narrow local packages, such as DPOM from
              £185 a month (via Expert Sure), cover a Business Profile, citations and local page work.
            </p>
            <p>
              <strong>Suits:</strong> one location in a quiet trade, where upkeep is all you need.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            £500 to £1,500 a month
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> keyword research, technical fixes, some content and light link earning.
              Gorilla calls this the band where local and small businesses start seeing real results; the agency has
              to prioritise, because hours are limited.
            </p>
            <p>
              <strong>Suits:</strong> local service businesses, clinics and trades covering one town or a few.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            £1,500 to £3,000 a month
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> regular content, ongoing technical monitoring, steady link earning and
              strategic oversight, with reporting on what is working. Gorilla calls it the sweet spot for many small
              and medium businesses; Ren Hao&apos;s growth band of £1,500 to £5,000 starts here.
            </p>
            <p>
              <strong>Suits:</strong> firms competing across a city or region, B2B service firms, smaller online
              stores.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            £3,000 to £8,000 a month
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> a coordinated team of strategist, writers, link builders and technical
              specialists, working across several keyword groups, often at national level.
            </p>
            <p>
              <strong>Suits:</strong> ecommerce stores with many categories, SaaS companies, multi-location brands.
            </p>
          </div>
        </details>
        <details className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 group">
          <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-[#B23E13]">
            £8,000 a month and up
          </summary>
          <div className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base space-y-2">
            <p>
              <strong>What you get:</strong> senior strategy, large content programmes, digital PR and dedicated
              resource. Ren Hao&apos;s enterprise band runs to £25,000+ a month.
            </p>
            <p>
              <strong>Suits:</strong> national retailers, finance and health brands, large catalogues.
            </p>
          </div>
        </details>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
        <p className="font-bold text-gray-900 mb-3">Which band fits you? Tick what applies.</p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>Customers find you by searching a service plus a town: start in the <strong>£500 to £1,500</strong> band. See <a href="/uk/local-seo" className={linkCls}>local SEO in the UK</a>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>You sell to other businesses across the UK, with a few high-value services: plan for <strong>£1,500 to £5,000</strong>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>You run an online store with dozens of categories: budget <strong>£2,000 upward</strong>. See <a href="/uk/ecommerce-seo" className={linkCls}>ecommerce SEO</a> and <a href="/uk/shopify-seo" className={linkCls}>Shopify SEO</a>.</span></li>
          <li className="flex items-start gap-2"><span className="text-[#B23E13] font-bold">&#10003;</span><span>Your site is slow, was rebuilt recently or lost traffic: buy an <strong>audit first</strong>, then decide.</span></li>
        </ul>
      </div>

      {/* Mid-page CTA */}
      <div className="bg-white border-2 border-[#F05A28] rounded-2xl p-6 md:p-8 my-10">
        <p className="text-xs font-mono uppercase tracking-wider text-[#B23E13] mb-2">Before you sign an SEO package</p>
        <p className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
          Find out what your site needs, then compare quotes
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          We measure the gap between your site and the businesses on page one, then send a written, fixed-scope plan.
          Take it to any provider, or ask us to do the work. No package price before we have looked.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">
            Talk to the Founder
          </a>
          <a href="/uk/seo" className="inline-block bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            See our SEO services in the UK
          </a>
        </div>
      </div>

      {/* Section: what drives cost */}
      <h2 id="what-drives-cost" className={h2Cls}>
        7 things that drive an SEO quote up or down
      </h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-700">
        <li>
          <strong>How crowded your searches are.</strong> Gorilla Marketing names scope and competition as the
          biggest cost drivers. A Bath dog groomer and a London personal injury firm do not need the same number of hours.
        </li>
        <li>
          <strong>Where you start.</strong> A site with years of links and clean code needs less repair than a new
          one. If competitors have invested for years, closing the gap costs more.
        </li>
        <li>
          <strong>How many pages need work.</strong> Ecommerce costs more because every category and product page
          is a page to rank. Gorilla contrasts a 50-product Shopify store with a 10,000-SKU retailer.
        </li>
        <li>
          <strong>How many locations you target.</strong> Muve Marketing moves multi-location campaigns into its
          £1,500+ band because each place needs its own page and listing.
        </li>
        <li>
          <strong>Your sector.</strong> Gorilla puts health and finance, where Google applies stricter checks on
          &ldquo;Your Money or Your Life&rdquo; content, at £5,000 a month or more.
        </li>
        <li>
          <strong>Who does the work.</strong> Senior hours cost more. The same headline fee can buy a senior
          specialist or a junior on a busy account.
        </li>
        <li>
          <strong>Where the agency sits.</strong> Gorilla says London agencies typically charge 20 to 40 per cent
          more than regional firms for equivalent work.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src="/blog-images/seo-cost-uk-2026-store.webp"
          alt="Two staff in a bright small warehouse, one taping a cardboard parcel shut and the other holding a barcode scanner"
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Ecommerce SEO costs more because every category and product page needs its own work.
        </figcaption>
      </figure>

      {/* Section: VAT */}
      <h2 id="vat" className={h2Cls}>
        VAT on UK SEO prices
      </h2>
      <p className={pCls}>
        Read SEO prices in the UK as before VAT unless they say otherwise. Ren Hao SEO says UK SEO is typically quoted
        excluding VAT, and the starting prices Expert Sure lists all exclude it. The standard rate is{' '}
        <a href={SRC.vatRates} {...extLinkProps}>20 per cent</a> (GOV.UK). A provider must register for VAT once its
        taxable turnover passes <a href={SRC.vatThreshold} {...extLinkProps}>£90,000</a> (GOV.UK), so a small
        freelancer may charge none.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
        <p className="font-bold text-gray-900 mb-2">A quick VAT example</p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Agency A quotes £1,500 a month plus VAT: £1,800 on the invoice. Freelancer B is not VAT-registered and
          charges £1,650. If your business cannot reclaim VAT, B is £150 a month cheaper. If you are VAT-registered and
          reclaim it, A costs you £1,500, so A is £150 a month cheaper. Same scope, opposite answer.
        </p>
      </div>

      {/* Section: red flags */}
      <h2 id="red-flags" className={h2Cls}>
        8 red flags in cheap SEO packages
      </h2>
      <p className={pCls}>
        Affordable SEO and low cost SEO services can be useful when the scope is small and honest. These signs suggest it is neither.
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
        <li><strong>Guaranteed rankings.</strong> Google&apos;s <a href={SRC.googleSeo} {...extLinkProps}>advice on hiring an SEO</a> says no one can guarantee a number-one ranking on Google.</li>
        <li><strong>Bulk links for a small fee.</strong> LOCALiQ tells buyers offered 50 links a month for £200 to ask where they come from.</li>
        <li><strong>Full service at a rock-bottom price.</strong> Gorilla Marketing asks who does the work on a £300 a month full-service campaign; the answer is usually a checklist and an automated report.</li>
        <li><strong>Everything for under £750.</strong> Ren Hao SEO says that outside a single-location local campaign, that budget funds one of content, technical work or links, not all three.</li>
        <li><strong>A price before anyone looks at your site.</strong> A quote on a first call cannot know whether you need one fix or a year of work.</li>
        <li><strong>Reports full of activity.</strong> Directory submissions and keyword counts are not outcomes; ask for enquiries and sales from search.</li>
        <li><strong>The provider owns your accounts.</strong> You should own your Search Console, Analytics and Google Business Profile.</li>
        <li><strong>A long lock-in before anything is proven.</strong> Gorilla Marketing flags agencies that insist on 12-month minimum contracts up front. Check the notice period too: Expert Sure found DPOM gives 31 days and Terrier 60.</li>
      </ol>
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you want a shortlist rather than a checklist, our{' '}
        <a href="/blog/best-seo-agencies-uk" className={linkCls}>guide to UK SEO agencies</a> compares named firms.
      </p>

      {/* Section: AI search */}
      <h2 id="ai-search" className={h2Cls}>
        How AI search changes what to buy
      </h2>
      <p className={pCls}>
        Buyers now ask ChatGPT, Perplexity and Google&apos;s AI Overviews questions like &ldquo;how much does SEO
        cost per month in the UK?&rdquo;. That changes what a good SEO package should produce, though less than some
        sellers suggest.
      </p>
      <p className={pCls}>
        Start with Google&apos;s own position. Its{' '}
        <a href={SRC.googleAi} {...extLinkProps}>guidance on AI features</a> says there are no additional requirements
        to appear in AI Overviews or AI Mode, and no special optimisations needed beyond normal search requirements. So
        an &ldquo;AI SEO&rdquo; fee for Google alone should buy the same sound work, done well.
      </p>
      <p className={pCls}>
        What we measured: on 21 October 2026, Google showed an AI Overview on 2 of the 8 UK SEO cost searches we
        pulled. For &ldquo;seo cost uk&rdquo; it cited rubikdigital.co.uk, blog.gorilla.marketing and seomoves.co.uk;
        for &ldquo;cheap seo services uk&rdquo; it cited nextmark.uk, phoenixwebservices.co.uk and itseeze.com. Four
        of the six cited sites were not in the top 10 organic results for their search. Ranking first and being quoted
        are now two separate results to track.
      </p>
      <p className={pCls}>What to ask for in a 2026 proposal:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-700">
        <li><strong>Pages that answer the questions buyers ask,</strong> with numbers, sources and dates in the first lines.</li>
        <li><strong>Structured data</strong> that matches what is on the page, especially for FAQs and services.</li>
        <li><strong>Tracking of AI answers</strong> for your key questions in ChatGPT, Perplexity and Google, reported next to rankings.</li>
        <li><strong>Mentions on other real sites,</strong> because assistants name businesses that other sources name.</li>
      </ol>
      <p className="mb-6 text-gray-700 leading-relaxed">
        <a href={SRC.renhao} {...extLinkProps}>Ren Hao SEO</a> notes that providers with no AI search capability may be
        cheaper because they offer less. You can see where you stand today with our free{' '}
        <a href="/ai-visibility-checker" className={linkCls}>AI visibility checker</a>. Our{' '}
        <a href="/uk/ai-seo" className={linkCls}>AI SEO service for UK businesses</a> explains the work, and our list
        of <a href="/blog/best-ai-seo-agencies-uk" className={linkCls}>AI SEO agencies in the UK</a> compares
        providers.
      </p>

      {/* Section: competitors */}
      <h2 id="what-else-ranks" className={h2Cls}>
        What else ranks for &ldquo;seo cost uk&rdquo;, and how this guide differs
      </h2>
      <p className={pCls}>
        These are the business sites on Google&apos;s first page for &ldquo;seo cost uk&rdquo; in the UK when we
        checked on 21 October 2026 (DataForSEO, desktop), with the title Google showed for each. We list them so you
        can compare; we have not reviewed their services, and the list leaves out a LinkedIn post.
      </p>
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Site</th>
              <th className={thCls}>Page title shown in Google</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {serpRows.map(([site, title]) => (
              <tr key={site}>
                <td className={`${tdCls} font-semibold text-gray-900`}>{site}</td>
                <td className={tdCls}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Most of those pages are one agency explaining its own fees. This guide reads eight of them against each other,
        sorts the ranges by business type and project type, dates every figure, and leaves out any number we could not
        find on its page on the day. Two pages on that first page were last updated in 2021 (SEO Moves) and 2024 (Ink
        Digital), so we did not quote them. Gorilla Marketing&apos;s guide carries a February 2024 byline but labels its
        ranges as 2026 figures; we used it alongside newer sources.
      </p>

      {/* Section: budget */}
      <h2 id="budget" className={h2Cls}>
        How to set your SEO budget in 5 steps
      </h2>
      <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-700">
        <li><strong>Work out what a customer is worth.</strong> Use profit per customer over a year, not one sale.</li>
        <li><strong>Know your close rate.</strong> If you win one enquiry in four, you need four enquiries per new customer.</li>
        <li>
          <strong>Find your break-even.</strong> Expert Sure&apos;s worked example: £9,720 over six months (a £1,000
          retainer, £1,200 of developer work, £300 a month of content and staff time) at £300 profit per customer
          needs 32.4, so 33, extra customers. At one in four enquiries converting, that is about 132 extra enquiries.
        </li>
        <li><strong>Check it is realistic.</strong> Google Search Console shows how often you already appear for your services. A few extra enquiries a month is a sensible first target.</li>
        <li><strong>Ask for a phased plan.</strong> Separate one-off repairs from ongoing work, so you can stop after the first phase if it does not deliver.</li>
      </ol>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Most sites take months to move. Our{' '}
        <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline" className={linkCls}>month-by-month SEO timeline</a>{' '}
        sets expectations. If your website needs replacing before SEO can work, our{' '}
        <a href="/blog/ecommerce-website-cost-uk-2026" className={linkCls}>ecommerce website cost guide for the UK</a>{' '}
        covers the build. Buying in the US or Australia? See our{' '}
        <a href="/blog/seo-cost-small-business-2026" className={linkCls}>US small business SEO cost guide</a> and{' '}
        <a href="/blog/seo-cost-australia-2026" className={linkCls}>SEO cost guide for Australia</a>.
      </p>

      {/* Section: where FactoryJet fits */}
      <h2 className={h2Cls}>Where FactoryJet fits</h2>
      <p className={pCls}>
        We are one of many options, and for a single-location business with a healthy site, a good local specialist
        may be all you need. We do not publish SEO packages. We measure the gap between your site and the businesses
        on page one first: technical faults, missing pages, and the strength of the sites you need to overtake. Then
        FactoryJet quotes a fixed price per stage in writing, so you can stop after the audit and repair stage if you
        prefer to carry on yourself.
      </p>
      <p className={pCls}>
        Our focus is ecommerce stores, AI-ready websites and service businesses that want to be found in Google and in
        AI assistants. We design, build and fix the site, run the SEO, and support it after launch, and you own
        everything: the site, the content and the accounts. FactoryJet was founded in 2014 and has worked with more
        than 500 businesses, including B2B wholesaler Bombay Petals and direct-to-consumer brand Belle Maison.
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Start with our <a href="/uk/seo" className={linkCls}>SEO services in the UK</a>, see everything we do on{' '}
        <a href="/uk" className={linkCls}>FactoryJet UK</a>, or{' '}
        <a href="/contact" className={linkCls}>talk to the founder</a> about your site.
      </p>

      {/* Author box */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong className="text-gray-900">About the author.</strong> Bhavesh Barot is the Founder &amp; CEO of
          FactoryJet. He has spent more than a decade building commerce websites and search programs, and leads the
          team that builds and supports ecommerce stores, AI agents and SEO for UK, US and Australian businesses.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          Price sources fetched and read on 21 October 2026:{' '}
          <a href={SRC.gorilla} {...extLinkProps}>Gorilla Marketing</a>,{' '}
          <a href={SRC.localiq} {...extLinkProps}>LOCALiQ</a>,{' '}
          <a href={SRC.renhao} {...extLinkProps}>Ren Hao SEO</a>,{' '}
          <a href={SRC.dandy} {...extLinkProps}>Dandy Marketing</a>,{' '}
          <a href={SRC.muve} {...extLinkProps}>Muve Marketing</a>,{' '}
          <a href={SRC.itamar} {...extLinkProps}>Itamar Blauer</a>,{' '}
          <a href={SRC.expertsure} {...extLinkProps}>Expert Sure</a>,{' '}
          <a href={SRC.autoseo} {...extLinkProps}>Auto-SEO</a>; VAT from{' '}
          <a href={SRC.vatRates} {...extLinkProps}>GOV.UK</a>. Published prices change; confirm with each provider.
        </p>
      </div>

      {/* Further reading */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-10">
        <p className="text-lg font-bold text-gray-900 mb-3">Related UK guides and services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="/uk/seo" className="text-[#B23E13] hover:underline">SEO services in the UK</a>
          <a href="/uk/local-seo" className="text-[#B23E13] hover:underline">Local SEO in the UK</a>
          <a href="/uk/ecommerce-seo" className="text-[#B23E13] hover:underline">Ecommerce SEO for UK stores</a>
          <a href="/uk/ai-seo" className="text-[#B23E13] hover:underline">AI SEO and GEO in the UK</a>
          <a href="/uk/seo-audit" className="text-[#B23E13] hover:underline">SEO audit for UK businesses</a>
          <a href="/blog/best-seo-agencies-uk" className="text-[#B23E13] hover:underline">UK SEO agencies compared</a>
          <a href="/blog/seo-audit-cost-2026" className="text-[#B23E13] hover:underline">What an SEO audit costs</a>
          <a href="/blog/local-seo-uk-small-businesses-map-pack" className="text-[#B23E13] hover:underline">Local SEO and the Google map pack (UK)</a>
        </div>
      </div>
    </>
  ),
};
