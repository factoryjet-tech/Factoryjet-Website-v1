import React from 'react';
import type { BlogPost } from '../data.types';

// Every source below was fetched and read on 22 Oct 2026.
const SRC = {
  ahrefs: 'https://ahrefs.com/blog/seo-pricing/',
  ahrefsRank: 'https://ahrefs.com/blog/how-long-does-it-take-to-rank/',
  webfx: 'https://www.webfx.com/seo/pricing/',
  webfxAudit: 'https://www.webfx.com/seo/pricing/how-much-does-seo-audit-cost/',
  webfxGeo: 'https://www.webfx.com/blog/ai/generative-engine-optimization-cost/',
  backlinko: 'https://backlinko.com/seo-pricing',
  clutch: 'https://clutch.co/seo-firms/pricing',
  bls: 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm',
  googleSeo: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  googleSpam: 'https://developers.google.com/search/docs/essentials/spam-policies',
  googleAi: 'https://developers.google.com/search/docs/appearance/ai-features',
};

const ext = { target: '_blank', rel: 'noopener noreferrer', className: 'text-orange-600 hover:underline font-medium' };

const faqs = [
    {
      q: 'How much does SEO cost per month for a small business?',
      a: 'Most US small businesses pay $1,500 to $3,500 a month, the band WebFX gives for small businesses on its 2026 pricing page. Ahrefs polled 439 SEO providers and found an average of $2,917 a month, and $1,557 for local SEO. Backlinko surveyed 300+ SEO professionals and found $1,001 to $2,500 the most common monthly band. Single-city service firms usually sit near the low end.',
    },
    {
      q: 'How much should a small business budget for SEO in 2026?',
      a: 'Start from the published bands and adjust for competition. WebFX puts startups and micro businesses at $500 to $1,500 a month and small businesses at $1,500 to $3,500. If you sell in one city with few rivals, the lower band can work. If you compete regionally, or in law, healthcare or ecommerce, budget for the upper band and plan to keep it running for at least a year before judging results.',
    },
    {
      q: 'What can I get from an SEO company charging $300 to $500 a month?',
      a: 'Expect a narrow scope: Google Business Profile upkeep, a few on-page fixes and a monthly report. That price sits below the $500 floor of the smallest band WebFX publishes, and well below the $1,557 local SEO average in Ahrefs’ provider poll. Ask for a written list of monthly tasks. If link earning and new content are missing, the plan maintains what you have and will rarely lift rankings.',
    },
    {
      q: 'Is $500 a month SEO worth it for a small business?',
      a: 'It can be, if your market is small and the scope is honest. $500 is the bottom of the startup band on WebFX’s pricing page. Ahrefs found that SEOs with two years or less in business average about $1,541 a month, so a $500 retainer usually means limited hours or a newer provider. It suits one location in a quiet niche. It rarely moves rankings in a crowded one.',
    },
    {
      q: 'How much does an SEO specialist cost per hour?',
      a: 'Ahrefs puts the average hourly SEO rate at $111, from its poll of 439 providers. WebFX lists $75 to $200 an hour. On Clutch, most SEO agencies charge $100 to $149 an hour, and that is also the band its location table shows for the United States. Backlinko found $50 to $100 the most common tier worldwide, with senior consultants at $101 to $150.',
    },
    {
      q: 'What does an in-house SEO specialist cost compared with an agency?',
      a: 'The closest federal benchmark is the Bureau of Labor Statistics figure for market research analysts, with a median wage of $78,760 in May 2025. Add benefits and paid tools on top. An agency retainer in the WebFX small business band, $1,500 to $3,500 a month, comes to $18,000 to $42,000 a year and covers several skills, though with less of your time and brand knowledge.',
    },
    {
      q: 'What does boutique SEO agency pricing look like?',
      a: 'Smaller agencies cluster around the middle of the market. Backlinko’s survey found $1,001 to $2,500 a month the most common retainer band, and Clutch reports most SEO agencies at $100 to $149 an hour. Clutch also says agencies typically charge $2,000 to $20,000 a month, with an average monthly cost of about $3,199. Ask a boutique who does the work and how many clients each person carries.',
    },
    {
      q: 'Do SEO companies charge per keyword?',
      a: 'A few do, but it is uncommon and none of the six pricing studies we read uses it as a model. WebFX cites Ahrefs data that 78.2% of SEOs charge monthly retainers for some or all of their services, with hourly and project fees covering the rest. Per-keyword deals reward vanity terms with no buyers behind them. Ask for pricing tied to scope and reporting instead.',
    },
    {
      q: 'How much does a one-time SEO audit cost?',
      a: 'WebFX says most SEO audits cost $101 to $750, and in its survey of 250 US businesses the most common band was $501 to $750, at 22.41% of respondents. Full audits of very large sites can reach $12,001 to $15,000. For a small business site, pay for a manual review that lists each fix with a priority, not an automated tool export.',
    },
    {
      q: 'How much does local SEO cost?',
      a: 'Ahrefs found local SEO averages $1,557 a month across the 439 providers it polled. Single-location businesses in quieter markets often pay less, and multi-location or high-value niches pay more. A local plan should cover your Google Business Profile, consistent listings across directories, location pages and a review routine. Ask the provider to name the searches they expect you to rank for.',
    },
    {
      q: 'Why is SEO so expensive?',
      a: 'Because it is skilled labor billed over many months. Ahrefs’ average hourly rate is $111, and a retainer pays for research, writing, technical fixes and earning links from other sites. Results also take time to arrive. Ahrefs’ 2023 crawl found only 1.74% of 1 million new pages reached Google’s top 10 within a year, so most programs need a long runway.',
    },
    {
      q: 'Is SEO worth it for small businesses?',
      a: 'Usually, if buyers search for what you sell and one customer is worth more than a few months of fees. Search keeps sending visitors after the work is done, unlike ads, which stop when you stop paying. It is a poor fit if you need leads this month, or if almost nobody searches for your service. Check your demand in Google Search Console or a keyword tool before signing.',
    },
    {
      q: 'How long does SEO take to show results?',
      a: 'Plan in months, not weeks. Ahrefs found that 72.9% of pages in Google’s top 10 are more than three years old, and the average number one page is five years old. Technical fixes can show up within weeks of Google recrawling your site. New content in a competitive niche often takes most of a year. Google’s own advice is to ask any SEO what results to expect and in what timeframe.',
    },
    {
      q: 'Can I do my own SEO for my business?',
      a: 'Yes, the basics are free and well documented. Google Search Console, Google Business Profile and Google’s SEO Starter Guide cover setup, titles, page structure and local listings. Where most owners stall is time and link earning: producing useful content every month and getting other sites to reference it. Doing the basics yourself also makes you a sharper buyer if you hire help later.',
    },
    {
      q: 'Can ChatGPT do SEO?',
      a: 'It can draft outlines, title tags, meta descriptions and FAQ answers quickly, and it can explain a technical issue. It cannot see your Search Console data, check what actually ranks today, or earn links for you. Google’s spam policies target content made mainly to manipulate rankings, so publishing large volumes of unedited AI text is a risk. Treat it as a drafting assistant with a human editor.',
    },
    {
      q: 'Is SEO dead now that AI answers searches?',
      a: 'No. Google says the best practices for SEO remain relevant for AI features such as AI Overviews and AI Mode, and that there are no additional requirements to appear in them. What has changed is that clear, sourced answers near the top of a page matter more than before.',
    },
    {
      q: 'What is the 80/20 rule for SEO?',
      a: 'It is the idea that a small share of pages and fixes produce most of the results. For a small business, that usually means your homepage, your top service pages and your Google Business Profile. Fix crawl errors, titles and page speed on those first, then add content for the questions buyers ask most. Leave long lists of minor tweaks until the core pages perform.',
    },
    {
      q: 'What is included in a typical small business SEO retainer?',
      a: 'A full retainer should list keyword research and tracking, on-page work on existing pages, technical monitoring for speed, crawling and indexing, new or refreshed content, local listings if you serve an area, link earning, and a monthly report with rankings, traffic and leads. If a proposal gives one price with no task list, ask for the list before you compare it with anyone else.',
    },
    {
      q: 'Freelancer, agency or in-house: which is cheaper for SEO?',
      a: 'A freelancer is usually cheapest per hour; Backlinko found $50 to $100 the most common tier. Agencies cost more, with Clutch reporting $100 to $149 an hour for most firms, but give you several specialists and cover when someone is away. In-house staff cost a salary near the $78,760 BLS median plus tools. Pick based on how many skills you need running at once.',
    },
    {
      q: 'How much does GEO or AI SEO cost in 2026?',
      a: 'WebFX’s October 2026 guide puts generative engine optimization at $1,500 to $5,000 a month for small businesses and $5,000 to $25,000+ for mid-sized ones, with hourly consulting at $50 to $300. Much of the work overlaps with good SEO, since Google says no special optimization is needed for AI Overviews. Ask what a separate AI fee buys beyond your existing retainer.',
    },
    {
      q: 'What are the red flags that an SEO agency is not worth the money?',
      a: 'Walk away from anyone who guarantees a number one ranking; Google says no one can. Other warning signs: a quote sent before anyone looked at your site, reports that list activity but no rankings or leads, and offers to buy links or use private blog networks. Google’s spam policies list buying or selling links for ranking purposes as link spam, which can cost you rankings.',
    },
    {
      q: 'What questions should I ask an SEO agency before hiring them?',
      a: 'Google suggests asking for examples of previous work and what results to expect in what timeframe, and how success is measured. Add your own: who does the work each month, how many clients each person handles, how links are earned, and what happens to your content and accounts if you leave. A good agency answers all of these in writing without hedging.',
    },
    {
      q: 'Should a small business sign a long-term SEO contract?',
      a: 'Start short. A three-month first scope with clear deliverables lets you judge the working relationship before you commit, then move to month-to-month with 30 days’ notice. Some agencies ask for a six-month minimum because SEO is slow, which is reasonable if the monthly tasks are written down. Be wary of a 12-month lock-in from a provider you have never worked with.',
    },
    {
      q: 'Does FactoryJet offer SEO services for US small businesses?',
      a: 'Yes. FactoryJet runs SEO and AI search programs for US small businesses covering technical fixes, on-page work, content, link earning and structured data for AI answers. FactoryJet quotes a fixed price in writing after a short scoping call, so the monthly scope is agreed before work starts. We have served 500+ businesses since 2014 with 97% on-time delivery. You can book a 30-minute call from our contact page.',
    },
  ];

export const post: BlogPost = {
  id: '217',
  slug: 'seo-cost-small-business-2026',
  title: 'How Much Does SEO Cost for a Small Business in 2026?',
  excerpt:
    'Most US small businesses pay $1,500 to $3,500 a month for SEO (WebFX), and Ahrefs’ poll of 439 providers puts the average at $2,917. Monthly, hourly, audit, local and AI SEO prices from six pricing studies, checked 22 Oct 2026.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/seo-cost-small-business-2026.webp',
  meta: {
    title: 'SEO Cost for Small Business 2026: Monthly Prices Compared',
    description:
      'Small business SEO costs $1,500 to $3,500 a month (WebFX); Ahrefs puts the average at $2,917. Hourly, audit, local and AI SEO prices, checked 22 Oct 2026.',
  },
  keyTakeaways: [
    'WebFX puts small business SEO at $1,500 to $3,500 a month and startups at $500 to $1,500.',
    'Ahrefs polled 439 SEO providers: $2,917 a month on average, $1,557 for local SEO, $111 an hour.',
    'Backlinko’s survey of 300+ SEO professionals found $1,001 to $2,500 the most common monthly retainer.',
    'Most SEO audits cost $101 to $750, per WebFX’s survey of 250 US businesses.',
    'Google says no one can guarantee a number one ranking, and that no special optimization is needed for AI Overviews beyond good SEO.',
    'FactoryJet quotes a fixed price in writing after a short scoping call.',
  ],
  faqs,
  content: (
    <>
      {/* Article, BreadcrumbList and FAQPage schema are emitted once by the blog route (src/app/blog/[slug]/page.tsx) from the faqs array above. */}
      {/* Quick Answer Box */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-gray-800 font-medium">
          Most US small businesses pay <strong>$1,500 to $3,500 a month</strong> for SEO, the small business band on{' '}
          <a href={SRC.webfx} {...ext}>WebFX&apos;s 2026 pricing page</a>.{' '}
          <a href={SRC.ahrefs} {...ext}>Ahrefs polled 439 SEO providers</a> and found an average of $2,917 a month, and $1,557
          for local SEO. Hourly rates average $111. Most one-time audits cost $101 to $750.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
        <ol className="list-decimal pl-5 space-y-1 text-blue-700 text-sm">
          <li><a href="#seo-pricing-table">What the pricing studies say, side by side</a></li>
          <li><a href="#what-each-tier-buys">What each budget band buys</a></li>
          <li><a href="#pricing-models">Retainer, project or hourly</a></li>
          <li><a href="#freelancer-vs-agency">Freelancer, agency or in-house</a></li>
          <li><a href="#geo-ai-seo">AI search and GEO in an SEO budget</a></li>
          <li><a href="#red-flags">Red flags at any price</a></li>
          <li><a href="#roi">How to check SEO pays for your business</a></li>
          <li><a href="#faqs">Frequently asked questions</a></li>
        </ol>
      </div>

      <p>
        Search &ldquo;how much does SEO cost&rdquo; and the answers run from a few hundred dollars to tens of thousands a month.
        The spread is real. It tracks business size, competition and who does the work. This guide puts six published pricing
        studies next to each other, so you can see where they agree and what each budget actually pays for.
      </p>
      <p>
        We read every source below on 22 October 2026. Most come from agencies or tool makers with their own services to sell,
        so treat them as market signals, not neutral audits. Where a figure could not be traced to a page we read, we cut it.
      </p>

      {/* Section 1: Pricing Table */}
      <h2 id="seo-pricing-table" className="text-2xl font-bold mt-10 mb-4">What the pricing studies say, side by side</h2>
      <p>
        The six sources measure different things. Ahrefs and Backlinko surveyed SEO providers. WebFX publishes bands by business
        size. Clutch reports what agencies listed on its directory charge.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Source</th>
              <th className="p-3 text-left border border-gray-700">What it measured</th>
              <th className="p-3 text-left border border-gray-700">Monthly figure</th>
              <th className="p-3 text-left border border-gray-700">Hourly figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.ahrefs} {...ext}>Ahrefs</a> (updated Aug 2024)</td>
              <td className="p-3 border border-gray-200">Poll of 439 SEO providers</td>
              <td className="p-3 border border-gray-200">$2,917 average; local SEO $1,557</td>
              <td className="p-3 border border-gray-200">$111 average</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.webfx} {...ext}>WebFX</a> (2026)</td>
              <td className="p-3 border border-gray-200">Bands by business size</td>
              <td className="p-3 border border-gray-200">Startup $500 to $1,500; small business $1,500 to $3,500; mid-sized $1,500 to $10,000</td>
              <td className="p-3 border border-gray-200">$75 to $200</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.backlinko} {...ext}>Backlinko</a> (updated Dec 2025)</td>
              <td className="p-3 border border-gray-200">Survey of 300+ SEO professionals</td>
              <td className="p-3 border border-gray-200">$1,001 to $2,500 most common</td>
              <td className="p-3 border border-gray-200">$50 to $100 most common; senior $101 to $150</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.clutch} {...ext}>Clutch</a> (updated Sep 2026)</td>
              <td className="p-3 border border-gray-200">Agencies on its directory</td>
              <td className="p-3 border border-gray-200">$2,000 to $20,000 typical; about $3,199 average</td>
              <td className="p-3 border border-gray-200">$100 to $149 for most agencies</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.webfxAudit} {...ext}>WebFX audit survey</a></td>
              <td className="p-3 border border-gray-200">250 US businesses, one-time audits</td>
              <td className="p-3 border border-gray-200">$101 to $750 per audit; $501 to $750 most common (22.41%)</td>
              <td className="p-3 border border-gray-200">n/a</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold"><a href={SRC.webfxGeo} {...ext}>WebFX GEO guide</a> (Oct 2026)</td>
              <td className="p-3 border border-gray-200">AI search optimization</td>
              <td className="p-3 border border-gray-200">Small business $1,500 to $5,000; mid-sized $5,000 to $25,000+</td>
              <td className="p-3 border border-gray-200">$50 to $300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        All six pages fetched and read 22 Oct 2026. Ahrefs&apos; survey is from 2024; the others carry 2025 or 2026 dates.
      </p>
      <p>
        The studies agree more than the headline spread suggests. All four monthly figures for a typical retainer land between
        $1,000 and $3,500: Backlinko&apos;s common band, WebFX&apos;s small business band, Ahrefs&apos; $2,917 and Clutch&apos;s $3,199
        average. Clutch&apos;s typical agency range still stretches to $20,000, which is where competitive industries sit.
      </p>
      <p className="text-sm text-gray-700 mb-6">
        Want to know how long each budget takes to show results? Read our{' '}
        <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline" className="text-orange-600 hover:underline font-medium">month-by-month SEO timeline for 2026</a>.
        Before starting a retainer, consider whether you need a professional review first: see{' '}
        <a href="/blog/seo-audit-cost-2026" className="text-orange-600 hover:underline font-medium">how much an SEO audit costs in 2026</a>.
      </p>

      {/* Section 2 */}
      <h2 id="what-each-tier-buys" className="text-2xl font-bold mt-10 mb-4">What each budget band buys</h2>
      <p>
        Price bands describe hours, and hours decide scope. The descriptions below are what a fair provider can fit into each
        band. They are not outcome promises; no honest provider makes those.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Monthly budget</th>
              <th className="p-3 text-left border border-gray-700">Where it sits in the studies</th>
              <th className="p-3 text-left border border-gray-700">Who it suits</th>
              <th className="p-3 text-left border border-gray-700">Typical scope</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Under $500</td>
              <td className="p-3 border border-gray-200">Below every band WebFX publishes</td>
              <td className="p-3 border border-gray-200">One location, very few competitors</td>
              <td className="p-3 border border-gray-200">Google Business Profile upkeep, a few fixes, a report. Little or no content or link earning</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">$500 to $1,500</td>
              <td className="p-3 border border-gray-200">WebFX startup band; near Ahrefs&apos; $1,557 local average at the top</td>
              <td className="p-3 border border-gray-200">Local service businesses</td>
              <td className="p-3 border border-gray-200">Local listings, on-page work on core pages, some new content, light outreach</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">$1,500 to $3,500</td>
              <td className="p-3 border border-gray-200">WebFX small business band; covers Backlinko&apos;s most common band and Ahrefs&apos; $2,917 average</td>
              <td className="p-3 border border-gray-200">Growing firms with regional competition</td>
              <td className="p-3 border border-gray-200">Technical monitoring, regular content, active link earning, rank and lead tracking</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">$3,500 and up</td>
              <td className="p-3 border border-gray-200">WebFX mid-sized and large bands; Clutch&apos;s $3,199 agency average</td>
              <td className="p-3 border border-gray-200">Law, healthcare, finance, large ecommerce catalogs, multi-location</td>
              <td className="p-3 border border-gray-200">A team: strategist, writers, technical lead and digital PR for editorial links</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">$500 to $1,500 a month: local essentials</h3>
      <p>
        This band covers the work most local businesses need and few have done properly: a clean Google Business Profile with
        the right categories and a review routine, consistent name, address and phone details across directories, and fixes to
        the homepage and top service pages. It rarely includes meaningful link earning or steady content. For a dentist in a quiet
        suburb that is often enough. For &ldquo;personal injury lawyer&rdquo; in a big metro it is not.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">$1,500 to $3,500 a month: the full small business program</h3>
      <p>
        Here a provider can run every part of SEO at once: keyword strategy, technical monitoring, on-page work, regular content and
        links that are actually earned rather than pitched. WebFX&apos;s small business band and Ahrefs&apos; $2,917 average both sit
        here. The gap between the low and high end of this band is mostly how much content gets published and how many links get earned.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">$3,500 and up: competitive industries</h3>
      <p>
        In legal, healthcare, home services, finance or large-catalog ecommerce, rivals have years of content and links. You need a
        team, not a generalist, and editorial mentions in real publications rather than directory listings. Clutch&apos;s typical agency
        range of $2,000 to $20,000 a month shows how far this band stretches.
      </p>

      {/* Section 3 */}
      <h2 id="pricing-models" className="text-2xl font-bold mt-10 mb-4">Retainer, project or hourly</h2>
      <p>
        How you pay changes your risk. <a href={SRC.webfx} {...ext}>WebFX</a> cites Ahrefs data that 78.2% of SEOs charge monthly
        retainers for some or all of their services, so most quotes you receive will be retainers.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Monthly retainer</h3>
      <p>
        A fixed monthly fee for a written scope. It fits ongoing SEO, because rankings are built over many months and lost if the
        work stops. Insist on a monthly task list so you can tell what each payment bought.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Project fees</h3>
      <p>
        For defined jobs with an end: an audit, a site migration, recovery from a penalty, a one-off content push. WebFX lists project
        work at $500 to $5,000, and Backlinko found $1,000 to $5,000 the most common project band. Projects solve a known problem. They
        do not replace a retainer if you want to keep climbing.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Hourly consulting</h3>
      <p>
        Ahrefs&apos; average is $111 an hour; <a href={SRC.clutch} {...ext}>Clutch</a> puts most agencies at $100 to $149. Hourly suits a
        second opinion on your current agency, training an in-house person, or diagnosing a sudden traffic drop. It rarely suits ongoing
        execution, because nobody owns the results.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3">Not sure which model fits your business?</h3>
        <p className="mb-4">It depends on how competitive your market is and how much you can do in house. FactoryJet quotes a fixed price in writing after a short scoping call, with the monthly scope agreed before anything starts.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Get a written SEO quote &rarr;</a>
          <a href="/services/ai-seo" className="inline-block bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">See SEO services</a>
        </div>
      </div>

      <h2 id="freelancer-vs-agency" className="text-2xl font-bold mt-10 mb-4">Freelancer, agency or in-house</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Model</th>
              <th className="p-3 text-left border border-gray-700">Published cost</th>
              <th className="p-3 text-left border border-gray-700">Strengths</th>
              <th className="p-3 text-left border border-gray-700">Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Freelancer</td>
              <td className="p-3 border border-gray-200">$50 to $100 an hour most common (<a href={SRC.backlinko} {...ext}>Backlinko</a>)</td>
              <td className="p-3 border border-gray-200">Flexible, often specialized, low overhead</td>
              <td className="p-3 border border-gray-200">One person: no cover for illness or overload, narrower skills</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Agency</td>
              <td className="p-3 border border-gray-200">$100 to $149 an hour for most; $2,000 to $20,000 a month (<a href={SRC.clutch} {...ext}>Clutch</a>)</td>
              <td className="p-3 border border-gray-200">Several specialists, set process, someone accountable</td>
              <td className="p-3 border border-gray-200">Junior staff may do the work at the lower price points</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">In-house hire</td>
              <td className="p-3 border border-gray-200">$78,760 median wage for market research analysts, May 2025 (<a href={SRC.bls} {...ext}>BLS</a>), plus benefits and tools</td>
              <td className="p-3 border border-gray-200">Knows the brand, always available</td>
              <td className="p-3 border border-gray-200">One person rarely covers technical, content and links equally well</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Do it yourself</td>
              <td className="p-3 border border-gray-200">Free Google tools; paid tools optional</td>
              <td className="p-3 border border-gray-200">No fees, full control</td>
              <td className="p-3 border border-gray-200">Your time, and link earning is hard to do alone</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The choice is less about cost than risk. A strong freelancer beats a weak agency at the same budget. An agency wins when you need
        technical, content and link work running at the same time, which describes most programs that last.
      </p>

      {/* Section 5 */}
      <h2 id="geo-ai-seo" className="text-2xl font-bold mt-10 mb-4">AI search and GEO in an SEO budget</h2>
      <p>
        Google AI Overviews, AI Mode, ChatGPT search, Perplexity and Gemini now answer many questions before anyone clicks.{' '}
        <a href={SRC.googleAi} {...ext}>Google&apos;s guidance on AI features</a> says the best practices for SEO remain relevant for them,
        and that there are no additional requirements or special optimizations needed to appear.
      </p>
      <p>
        That matters for your budget. <a href={SRC.webfxGeo} {...ext}>WebFX&apos;s October 2026 guide</a> prices standalone generative
        engine optimization at $1,500 to $5,000 a month for small businesses. Before you add a line like that, ask what it covers that
        your SEO retainer does not. The useful parts are specific: answer-first pages with cited sources, structured data such as FAQPage
        and Article schema, named entities, mentions of your business on other trusted sites, and tracking of whether AI answers name you.
        Read more in our guide to <a href="/blog/geo-cost-small-business-2026" className="text-orange-600 hover:underline font-medium">what GEO costs a small business</a>.
      </p>
      <p>
        FactoryJet builds that structure into SEO work rather than selling it as a separate product, because the overlap is large.
      </p>

      {/* Section 6 */}
      <h2 id="red-flags" className="text-2xl font-bold mt-10 mb-4">Red flags at any price</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>They guarantee a number one ranking.</strong> <a href={SRC.googleSeo} {...ext}>Google&apos;s own hiring guide</a> says no one can guarantee a #1 ranking on Google, and tells you to find someone else if an SEO promises it.</li>
        <li><strong>They quote before looking at your site.</strong> A price without a review of your technical state, current rankings and rivals is a guess.</li>
        <li><strong>Reports show activity, not outcomes.</strong> &ldquo;Published four posts, submitted 20 listings&rdquo; with no rankings, traffic or leads measures effort only.</li>
        <li><strong>They sell links or private blog networks.</strong> <a href={SRC.googleSpam} {...ext}>Google&apos;s spam policies</a> list buying or selling links for ranking purposes as link spam.</li>
        <li><strong>They cannot show relevant past work.</strong> Google suggests asking any SEO for examples of previous work and success stories before hiring.</li>
      </ul>

      {/* Section 7 */}
      <h2 id="roi" className="text-2xl font-bold mt-10 mb-4">How to check SEO pays for your business</h2>
      <p>
        Run this check with your own numbers before you hire anyone. It takes five minutes.
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li><strong>What is a new customer worth?</strong> Use lifetime value, not the first sale.</li>
        <li><strong>What share of inbound leads become customers?</strong> Your CRM or sales log has this.</li>
        <li><strong>How many customers would cover a year of fees?</strong> Divide twelve months of the quoted retainer by customer value. Then divide that by your close rate to get the leads you need.</li>
        <li><strong>Is that many leads realistic?</strong> Open Google Search Console and look at how many people already search for your service and click through. If the leads you need are far beyond that demand, SEO alone will not pay back, whatever you spend.</li>
      </ol>
      <p>
        A good agency walks you through this sum before quoting. If one skips it, ask for it. The answer shows whether SEO makes sense
        and whether the agency understands how you make money.
      </p>

      {/* CTA Box */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-[#F05A28] text-white text-xs font-bold uppercase rounded-full tracking-wider mb-3">
            SEO and AI visibility
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
            Find the SEO budget that fits your market
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            FactoryJet runs technical SEO and AI search programs for small businesses, and quotes a fixed price in writing after a short
            scoping call. Book 30 minutes with founder Bhavesh Barot.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/bhavesh-factoryjet/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Book 30-Min Strategy Call
            </a>
            <a
              href="/ai-visibility-checker"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Check AI Search Visibility
            </a>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="flex items-start gap-4 border-t pt-6 mt-6">
        <div>
          <p className="font-semibold text-gray-900">Bhavesh Barot</p>
          <p className="text-sm text-gray-600">
            Founder, FactoryJet. Bhavesh has led web design, ecommerce and SEO work for 500+ businesses since founding FactoryJet in 2014.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Sources checked 22 Oct 2026:{' '}
            <a href={SRC.ahrefs} {...ext}>Ahrefs SEO pricing</a>,{' '}
            <a href={SRC.ahrefsRank} {...ext}>Ahrefs ranking time study</a>,{' '}
            <a href={SRC.webfx} {...ext}>WebFX SEO pricing</a>,{' '}
            <a href={SRC.webfxAudit} {...ext}>WebFX audit pricing</a>,{' '}
            <a href={SRC.webfxGeo} {...ext}>WebFX GEO cost</a>,{' '}
            <a href={SRC.backlinko} {...ext}>Backlinko SEO pricing</a>,{' '}
            <a href={SRC.clutch} {...ext}>Clutch SEO pricing</a>,{' '}
            <a href={SRC.bls} {...ext}>BLS Occupational Outlook</a>,{' '}
            <a href={SRC.googleSeo} {...ext}>Google: Do you need an SEO?</a>,{' '}
            <a href={SRC.googleSpam} {...ext}>Google spam policies</a>,{' '}
            <a href={SRC.googleAi} {...ext}>Google AI features</a>. Published prices change; confirm with each provider.
          </p>
        </div>
      </div>
    </>
  ),
};

/*
 * AI IMAGE GENERATION PROMPT (Midjourney / DALL-E / Ideogram):
 *
 * "A clean editorial-style illustration showing a US small business owner at a modern desk
 * reviewing an SEO analytics dashboard on a laptop screen. The screen displays line charts showing
 * organic traffic growth, a keyword rankings table, and monthly cost breakdown figures.
 * Color palette: deep orange accents, white background, charcoal typography.
 * Style: professional, B2B SaaS product illustration, flat with subtle shadows.
 * No faces shown clearly. 16:9 aspect ratio. No text overlays."
 *
 * Save as: /public/blog-images/seo-cost-small-business-2026.webp (1200×630px)
 */
