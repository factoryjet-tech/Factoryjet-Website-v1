import React from 'react';
import type { BlogPost } from '../data.types';

// UK page plan 2026-10-21 (docs/reports/2026-10-21-uk-page-plan.md), refresh 6.
// Rewritten 21 Oct 2026. The earlier version carried figures that had no findable source
// ("64% of UK job seekers start in ChatGPT", a "BrightEdge 2026" 3.2x CTR, "68% of UK recruitment
// searches show an AI Overview", 22% voice share, 2.8x applications, £8 vs £45 cost per lead, a
// Staines client with 340% ROI, "98% satisfaction") plus FactoryJet's own monthly price. All were cut.
//
// SERP evidence: Google UK (location_code 2826, en, desktop), DataForSEO live advanced SERP with
// async AI Overview, run 21 Oct 2026, 11 queries, $0.033. Raw file kept in the session scratchpad;
// summary in the side-session note uk-refreshes-4-5-6-8-handover.md.
// Keyword volume: "recruitment agency seo" 210 UK searches a month, DataForSEO Google keyword data
// pulled 24 Sep 2026 (pipeline/research/data/market-uk-2026-09-24/).
// Every other number links to the page it was read from, fetched 21 Oct 2026.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx) FROM
// the faqs array below. Do not add a second, hand-written FAQPage script.

const SRC = {
  gorilla: 'https://blog.gorilla.marketing/how-much-does-seo-cost/',
  ofcom: 'https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025',
  jobPosting: 'https://developers.google.com/search/docs/appearance/structured-data/job-posting',
  aiFeatures: 'https://developers.google.com/search/docs/appearance/ai-features',
  spam: 'https://developers.google.com/search/docs/essentials/spam-policies',
  transferFees: 'https://www.gov.uk/employment-agencies-and-businesses/fees-to-hiring-companies-transfer-fees',
  rec: 'https://www.rec.uk.com/our-view/news/press-releases/recruitment-sector-contributes-more-40-pounds-billion-year-uk-economy-despite-tough-job-market',
} as const;

const a = 'text-orange-600 underline';

export const post: BlogPost = {
  id: '118',
  slug: "seo-recruitment-agencies-uk-2026",
  title: "SEO for Recruitment Agencies (UK)",
  excerpt: "What Google UK actually showed for recruitment searches on 21 October 2026: which queries trigger an AI Overview, which sites it cited, and the pages a UK recruitment agency needs to be one of them.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "Apr 30, 2026",
  dateModified: "Oct 21, 2026",
  readTime: '10 min read',
  imageUrl: "/blog-images/seo-recruitment-agencies-uk-2026-hero.webp",
  meta: {
    title: "SEO for Recruitment Agencies (UK): 2026 Guide",
    description: "SEO for UK recruitment agencies, with real Google AI Overview examples from 21 October 2026, JobPosting rules from Google, and the pages that win client enquiries.",
  },
  keyTakeaways: [
    "On 21 October 2026 we ran 6 recruitment searches on Google UK. Employer questions about fees triggered an AI Overview; \"[sector] recruitment agency [city]\" searches showed a map pack instead.",
    "The fee overview cited agencycentral.co.uk, inspireresourcing.co.uk and gov.uk. A plain fee page on your own site is the most direct way into that answer.",
    "Job boards own most job-title searches. Your SEO wins on the client side: sector, city and fee pages written for hiring managers.",
    "The REC counted 31,345 UK recruitment businesses in 2025, while permanent placements fell 33.5 percent in 2024. More firms are chasing fewer client briefs.",
    "Google requires five JobPosting properties for its job search experience, asks agencies to name an anonymous client \"confidential\", and warns that leaving expired roles up may draw a manual action.",
    "Google's spam policy names city pages that funnel to one page as doorway abuse. Build a location page only where you place people and can say something specific.",
  ],
  faqs: [
    { q: "What is SEO for recruitment agencies?", a: "It is the work of getting a recruitment agency found when employers look for a recruiter and when candidates look for roles. In the UK the client side matters most, because job boards hold most job-title searches. That means sector and city pages for hiring managers, a clear fee page, JobPosting markup on live roles, and a Google Business Profile for each office." },
    { q: "How much does SEO cost for a UK recruitment agency?", a: "UK small and local businesses typically pay £500 to £1,500 a month for local SEO, and £1,500 to £3,000 for steady growth with regular content and links, according to Gorilla Marketing's 2026 bands. A multi-office agency competing in London sits higher. FactoryJet quotes a fixed price in writing after a short scoping call, so ask for the scope behind any figure." },
    { q: "Which keywords should a recruitment agency target?", a: "Start with the searches hiring managers type: \"[sector] recruitment agency [city]\", \"recruitment agency fees uk\" and \"how much do recruitment agencies charge\". On 21 October 2026 the city searches on Google UK showed a map pack and the fee searches showed an AI Overview, so they need different pages. Check your own Search Console queries before buying any keyword list." },
    { q: "Do recruitment agency websites need JobPosting schema?", a: "Yes, if you want live roles to appear in Google's job search experience. Google's JobPosting documentation lists five required properties: title, description, date posted, hiring organisation and job location. For an anonymous client, Google asks agencies to use \"confidential\" as the organisation name, and it warns that expired roles left up may draw a manual action. Google publishes no ranking lift for schema, so treat any percentage you see quoted as marketing." },
    { q: "Do Google AI Overviews show up for recruitment searches?", a: "For some. On 21 October 2026, \"how much do recruitment agencies charge uk\", \"recruitment agency fees uk\", \"best recruitment agencies uk\" and \"seo for recruitment agencies\" all showed an AI Overview on Google UK. \"IT recruitment agency London\" and \"recruitment agency seo\" did not; they showed a map pack and ordinary results." },
    { q: "How do I get my recruitment agency into Google AI Overviews?", a: "Google says there are no extra requirements beyond normal SEO, so the page has to rank and answer the question plainly. The fee overview we saw on 21 October 2026 cited two UK fee guides and a GOV.UK page. Publish your own fee page with real percentages, the rebate period and when a transfer fee applies, and keep it current." },
    { q: "Should a recruitment agency build a page for every town?", a: "No. Google's spam policies list pages targeted at specific regions or cities that funnel users to one page as doorway abuse, and many pages generated mainly to manipulate rankings as scaled content abuse. Build a city page where you have an office, placements or a consultant who knows that market, and fill it with roles, clients and salary detail only you have." },
    { q: "Can a small recruitment agency compete with Hays, Reed and Michael Page?", a: "Not on \"best recruitment agencies uk\": on 21 October 2026 the AI Overview for that search named Hays, Reed and Michael Page and cited their own sites. A small agency competes on narrower searches, such as a sector in a city, where the map pack and a specific service page decide who gets the call." },
    { q: "Should a recruitment agency use SEO or Google Ads?", a: "Ads buy clicks today; SEO builds pages that keep earning. Most agencies run both: ads for urgent roles and competitive city terms, SEO for fee, sector and city pages that hiring managers return to. Track enquiries by source in GA4 so you can compare cost per client enquiry rather than cost per click." },
    { q: "How long does recruitment agency SEO take?", a: "Technical fixes, Business Profile work and JobPosting markup can show within weeks, because Google re-crawls job pages often. Ranking new sector and city pages usually takes a few months, longer in London. Nobody can promise a date for an AI Overview mention, because Google picks sources per query." },
    { q: "How do I measure AI search visibility for a recruitment agency?", a: "Search Console counts clicks and impressions from AI Overviews and AI Mode inside the normal Web report, with no separate filter, according to Google. So also run your top client questions in Google, ChatGPT and Perplexity each month and note who is named. Our free AI visibility checker does a first pass." },
  ],
  content: (
    <>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-800">
          SEO for a UK recruitment agency means winning the employer side of search. Publish a fee page,
          one page per sector you recruit for, city pages only where you place people, JobPosting
          markup on every live role, and a Google Business Profile per office. On 21 October 2026 Google UK
          answered fee questions with an AI Overview and city searches with a map pack, so both need work.
        </p>
      </div>

      <p className="mb-4">
        UK searches for &quot;recruitment agency seo&quot; reached 210 a month by September 2026 (DataForSEO
        Google keyword data, pulled 24 September 2026). Agencies are asking how to rank because their
        clients increasingly read an AI answer first: Ofcom found about 30 percent of UK keyword searches
        return an AI Overview (
        <a href={SRC.ofcom} className={a} target="_blank" rel="noopener">Ofcom, Online Nation 2025</a>).
        This guide shows what those answers looked like for recruitment on the day we checked.
      </p>
      <p className="mb-4">
        The competition is large. The REC counted 31,345 UK recruitment businesses in 2025, and agencies
        made 536,400 permanent placements in 2024, down 33.5 percent from 806,400 the year before (
        <a href={SRC.rec} className={a} target="_blank" rel="noopener">REC, 8 December 2025</a>). Fewer
        placements spread across the same number of firms is why client enquiries from search now matter
        more to most agencies.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Google UK showed for recruitment searches on 21 October 2026</h2>
      <p className="mb-4">
        We ran six recruitment searches through DataForSEO&apos;s live Google results for the United Kingdom
        (desktop, English) and recorded whether an AI Overview appeared and which sites it cited.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Search</th>
              <th className="p-3 border text-left">AI Overview?</th>
              <th className="p-3 border text-left">Sites the overview cited</th>
              <th className="p-3 border text-left">Top organic result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white"><td className="p-3 border">how much do recruitment agencies charge uk</td><td className="p-3 border">Yes</td><td className="p-3 border">agencycentral.co.uk, inspireresourcing.co.uk, gov.uk</td><td className="p-3 border">A LinkedIn post from a Lincolnshire agency</td></tr>
            <tr className="bg-gray-50"><td className="p-3 border">recruitment agency fees uk</td><td className="p-3 border">Yes</td><td className="p-3 border">agencycentral.co.uk, inspireresourcing.co.uk, gov.uk</td><td className="p-3 border">inspireresourcing.co.uk fee guide</td></tr>
            <tr className="bg-white"><td className="p-3 border">best recruitment agencies uk</td><td className="p-3 border">Yes, plus map pack</td><td className="p-3 border">hays.co.uk, michaelpage.co.uk, reed.com</td><td className="p-3 border">prospects.ac.uk advice page</td></tr>
            <tr className="bg-gray-50"><td className="p-3 border">it recruitment agency london</td><td className="p-3 border">No, map pack</td><td className="p-3 border">None</td><td className="p-3 border">search.co.uk London office page</td></tr>
            <tr className="bg-white"><td className="p-3 border">seo for recruitment agencies</td><td className="p-3 border">Yes</td><td className="p-3 border">goup.co.uk, reddit.com, limivex.co.uk</td><td className="p-3 border">goup.co.uk recruitment SEO page</td></tr>
            <tr className="bg-gray-50"><td className="p-3 border">recruitment agency seo</td><td className="p-3 border">No, map pack</td><td className="p-3 border">None</td><td className="p-3 border">spheredigitalrecruitment.com</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">What the six results tell a recruitment agency:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Fee questions go to an AI Overview.</strong> Google answered both fee searches in writing, with contingency fees of 15 to 20 percent for standard roles and 25 to 35 percent for retained search, and cited two agency fee guides plus GOV.UK. Those are the overview&apos;s figures, not ours, but they show which page type gets quoted.</li>
        <li><strong>City searches go to the map pack.</strong> &quot;IT recruitment agency London&quot; showed no AI Overview. Office pages and Google Business Profiles decided the top of that page.</li>
        <li><strong>&quot;Best&quot; searches go to the big brands.</strong> The overview named Hays, Reed and Michael Page and cited their own websites. A small agency is better spending effort on narrower sector and city searches.</li>
        <li><strong>One result changes between runs.</strong> AI Overviews are generated per search and can differ by day and device, so treat this table as a dated snapshot.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Write the fee page the AI Overview wants to quote</h2>
      <p className="mb-4">
        Hiring managers ask what a recruiter costs before they ask who to call. A fee page that states your
        model in the first two lines is the page most likely to be lifted into that answer. Include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Your fee as a percentage of first-year salary for permanent roles, by seniority if it varies.</li>
        <li>Retained, exclusive and contingency terms, and what each one includes.</li>
        <li>Your rebate or free-replacement period if a hire leaves early.</li>
        <li>When a temp-to-perm transfer fee applies. GOV.UK sets the rules: a transfer fee only applies if the hirer is offered an extension instead, and the permanent job starts within 8 weeks of the end of the assignment or 14 weeks from its start, whichever is later (<a href={SRC.transferFees} className={a} target="_blank" rel="noopener">GOV.UK, transfer fees</a>).</li>
        <li>A short FAQ answering the exact questions clients ask your consultants.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sector and city pages for hiring managers, not doorway pages</h2>
      <p className="mb-4">
        Job boards hold most job-title searches, so the searches a recruitment agency can win are employer
        searches such as &quot;construction recruitment agency Leeds&quot;. Build one page per sector you
        recruit for, then a city page only where you have an office, placements or a consultant in
        that market. Google&apos;s spam policies name city or region pages that funnel users to one page as
        doorway abuse, and mass-generated pages made mainly to rank as scaled content abuse (
        <a href={SRC.spam} className={a} target="_blank" rel="noopener">Google spam policies</a>, updated
        28 August 2026). Twenty-five near-identical town pages written by an AI tool is exactly that pattern.
      </p>
      <p className="mb-4">What makes a sector or city page worth ranking:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Live roles in that sector and city, pulled from your job feed.</li>
        <li>Salary ranges you have placed at, with the month you placed them.</li>
        <li>Named clients or anonymised placements, with permission.</li>
        <li>The consultant who covers it, with a photo and a direct line.</li>
        <li>Time to shortlist and time to hire from your own records.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">JobPosting structured data: what Google requires</h2>
      <p className="mb-4">
        JobPosting markup is what makes a live role eligible for Google&apos;s job search experience.
        Google&apos;s{' '}
        <a href={SRC.jobPosting} className={a} target="_blank" rel="noopener">JobPosting documentation</a>{' '}
        lists the required properties: <code>datePosted</code>, <code>description</code>,{' '}
        <code>hiringOrganization</code>, <code>jobLocation</code> and <code>title</code>, plus{' '}
        <code>applicantLocationRequirements</code> and <code>jobLocationType</code> for fully remote roles.
        Salary (<code>baseSalary</code>), <code>employmentType</code> and <code>validThrough</code> are
        recommended. Three rules matter most to agencies. When you post for an anonymous client, Google
        asks you to set the hiring organisation name to &quot;confidential&quot;. Leaving expired roles
        up &quot;may result in a manual action&quot;. And Google recommends its Indexing API rather than
        sitemaps for job pages. Mark up one role per page and keep the visible description identical to
        the structured data.
      </p>
      <p className="mb-4">
        Add Organization markup on your home page and LocalBusiness markup on each office page, so the name,
        address and phone number match your Google Business Profile exactly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Google Business Profile for every office</h2>
      <p className="mb-4">
        Two of our six searches showed a map pack. For &quot;[sector] recruitment agency [city]&quot;
        searches that pack is the first thing a hiring manager sees. Claim a profile for each staffed
        office, choose &quot;Employment agency&quot; as the primary category, add the sectors you cover as
        services, and ask clients and placed candidates for reviews after each placement. Keep the name,
        address and phone number identical across the profile, your website and directories such as the REC
        member directory.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Technical checks for a recruitment website</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Job pages render in the server HTML, not only through a JavaScript job widget. AI crawlers and many tools read the raw HTML.</li>
        <li>Google&apos;s Indexing API for job pages, which Google recommends over sitemaps, plus an XML sitemap with accurate <code>lastmod</code> dates for everything else.</li>
        <li>Expired roles return a 404 or 410, or redirect to the sector page. Do not leave closed roles live with JobPosting markup.</li>
        <li>If you syndicate roles to Indeed, Reed or Totaljobs, the version on your own site carries the full description.</li>
        <li>Core Web Vitals in the good range: LCP under 2.5 seconds, INP under 200 milliseconds and CLS under 0.1, Google&apos;s published thresholds.</li>
        <li>robots.txt allows the AI retrieval crawlers you want quoting you, such as OAI-SearchBot, PerplexityBot and Claude-SearchBot, by name.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to measure recruitment SEO in 2026</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Client enquiries from organic search</strong>, tracked as a GA4 key event, separate from candidate applications.</li>
        <li><strong>Search Console clicks</strong> on fee, sector and city pages. Google counts AI Overview and AI Mode traffic inside the normal Web report, with no separate filter (<a href={SRC.aiFeatures} className={a} target="_blank" rel="noopener">Google, AI features</a>).</li>
        <li><strong>Map pack position</strong> for your top sector and city searches, checked from the city itself.</li>
        <li><strong>AI answer mentions:</strong> run the ten questions your clients ask in Google, ChatGPT and Perplexity each month and log who is named.</li>
      </ul>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8">
        <p className="font-semibold text-orange-900 mb-2">See what AI answers say about your agency</p>
        <p className="text-orange-800 mb-3">
          Run your agency name and your main sector through ChatGPT, Perplexity and Google AI Overviews in two
          minutes, free.
        </p>
        <a href="/ai-visibility-checker" className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors">
          Check your AI visibility
        </a>
      </div>

      <p className="mb-4">
        Related reading: what UK SEO costs by business type in our{' '}
        <a href="/blog/seo-cost-uk-2026" className={a}>UK SEO cost guide</a>, how we run{' '}
        <a href="/uk/ai-seo" className={a}>AI SEO, GEO and AEO for UK businesses</a>, our{' '}
        <a href="/uk/local-seo" className={a}>UK local SEO service</a> for map pack work, and the{' '}
        <a href="/uk/seo-audit" className={a}>UK SEO and AI visibility audit</a>.
      </p>

      <p className="text-sm text-gray-600 mb-6">
        FactoryJet: 500+ businesses served · 97% on-time delivery · founded 2014.
      </p>
    </>
  ),
};

export default post;
