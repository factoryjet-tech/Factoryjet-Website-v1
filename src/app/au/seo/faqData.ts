/**
 * FAQs for /au/seo, the Australian "AI Search & SEO" hub.
 *
 * SOURCING: People Also Ask questions from Google Australia, harvested 2026-08-25
 * (pipeline/research/data/au-faq-pool-2026-08-25.json) and re-harvested 2026-09-24
 * (pipeline/research/data/market-au-2026-09-24/analysis.json, paa_by_line.seo and .cost).
 * Career and salary questions are excluded on purpose.
 *
 * THE ONLY COPY of these questions. page.tsx renders FAQ_ITEMS in the visible FAQ and maps
 * the SAME array into FAQPage JSON-LD. Never hand-write a second list.
 *
 * No prices or currency anywhere: cost answers explain what drives the cost.
 */

export const FAQ_CATEGORIES = [
  { key: 'basics', label: 'SEO basics' },
  { key: 'choosing', label: 'Choosing an SEO agency' },
  { key: 'cost', label: 'Cost and contracts' },
  { key: 'local', label: 'Local SEO and Google Business Profile' },
  { key: 'technical', label: 'Technical, audit and ecommerce SEO' },
  { key: 'ai', label: 'AI and the future of search' },
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number]['key'];

export interface FaqItem {
  category: FaqCategory;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  // ==== SEO basics ====
  {
    category: 'basics',
    question: 'What does SEO mean?',
    answer:
      'Search engine optimisation. It is the work of making a website more likely to appear when someone searches for what that site offers. In practice it covers three separate things: making sure search engines can read the site, making sure the pages answer what people actually search for, and getting other websites to reference yours. Those three need different skills and pay back on very different timescales.',
  },
  {
    category: 'basics',
    question: 'What does an SEO agency do?',
    answer:
      'An SEO agency repairs the technical faults that stop search engines reading and indexing your pages, builds pages that answer what buyers type, sets up and maintains your Google Business Profile where local search matters, and earns mentions and links from real sites so Google treats you as credible. A good agency does those in that order, because that is the order that pays back fastest, and reports against enquiries rather than rankings alone.',
  },
  {
    category: 'basics',
    question: 'What are the four types of SEO?',
    answer:
      'They are usually split into technical, on-page, off-page and local. Technical is whether search engines can crawl and index the site. On-page is the content and structure of each page. Off-page is mostly links and mentions from elsewhere. Local is your Google Business Profile and the consistency of your business details. Most Australian small businesses get the largest early return from technical and local.',
  },
  {
    category: 'basics',
    question: 'What is the difference between SEO and technical SEO?',
    answer:
      'Technical SEO asks whether search engines can reach, read and index your pages at all. The broader discipline asks whether those pages deserve to rank once they can. Technical work is largely finite and one-off. Content and authority work is ongoing. Doing the second before the first is the most reliable way to waste money on search.',
  },
  {
    category: 'basics',
    question: 'What is the 80/20 rule in SEO?',
    answer:
      'It is the idea that a small share of the work produces most of the result. In practice, a handful of fixes usually matter far more than the rest: pages Google cannot index, a wrong or unverified Google Business Profile, one service page per service rather than none, and a few genuine links. A good SEO audit ranks problems by likely impact so you fix the 20 per cent first instead of working through a long list in order.',
  },
  {
    category: 'basics',
    question: 'How long does SEO take to show results?',
    answer:
      'Google says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging whether a change helped. In our Australian work, technical repairs and Google Business Profile corrections often move things within weeks. Competing for a capital city head term against agencies with a decade of links is a matter of quarters.',
  },
  {
    category: 'basics',
    question: 'Does SEO work for small businesses?',
    answer:
      'It works well when a small business has a clear service and a defined area. Local search is where a small business can genuinely outrank a larger competitor, because distance from the searcher and a well-kept listing carry real weight. It works poorly when the business is too broad to describe in a search term, or when nobody is searching for what is being sold.',
  },

  // ==== Choosing an SEO agency ====
  {
    category: 'choosing',
    question: 'Who is the best SEO agency in Australia?',
    answer:
      'There is no single best SEO agency in Australia, and any list that claims one is marketing. The right SEO company depends on your size, your industry and whether you need local, technical or ecommerce work. StudioHawk, Prosperity Media, SIXGUN, Impressive Digital, Dilate Digital and Digital Nomads HQ all appear often in Australian results and AI answers. We list them, and ourselves, further up this page. Talk to two or three and compare what they measure.',
  },
  {
    category: 'choosing',
    question: 'What is the difference between an SEO agency, an SEO company and an SEO consultant?',
    answer:
      'Agency and company mean the same thing in practice: a team that does the work for you. An SEO consultant is usually one experienced person who sets direction, audits and advises, while your own team or developer carries out the changes. A consultant suits a business that already has hands. An agency suits one that needs the work done. Ask either one who will actually touch your site.',
  },
  {
    category: 'choosing',
    question: 'How do I choose an SEO company in Australia?',
    answer:
      'Ask five questions. Which of my search terms have real Australian volume? Who holds page one now, and how many sites link to the weakest of them? What will you fix first, and why? Will everything stay in my name? What will you refuse to do? A good SEO company answers all five plainly. One that leads with guaranteed rankings or a fixed number of links per month is selling activity, not results.',
  },
  {
    category: 'choosing',
    question: 'Is an SEO agency worth it?',
    answer:
      'Only when real demand exists for what you sell and your site is not currently meeting it. We verify search volume against Google Ads data before recommending anything, and when the numbers do not support the work we say so. In Australia we have found whole service categories with almost no search volume. Building pages for those would have earned nothing, whoever built them.',
  },
  {
    category: 'choosing',
    question: 'Should I hire an SEO agency or do it myself?',
    answer:
      'A split usually works best. Do the local basics in-house, because you know the business and the tasks are straightforward. Bring in help for technical audits, content at volume and earning links. If you already have a marketer or a developer, an SEO consulting arrangement, where someone sets direction and your team carries it out, is often better value than a full agency engagement.',
  },
  {
    category: 'choosing',
    question: 'Do you guarantee first page rankings?',
    answer:
      'No, and you should be wary of anyone who does. Google publishes that some changes take hours and others take months, and nobody outside Google controls the result. What we do commit to is a written scope, a named list of search terms, a monthly report against enquiries and impressions, and fixes delivered on the dates we agree. Those are things we control.',
  },
  {
    category: 'choosing',
    question: 'Do you work with businesses in Sydney, Perth and the Gold Coast?',
    answer:
      'Yes. We work with businesses anywhere in Australia, remotely and in Australian business hours. We are also honest that the Sydney, Perth and Gold Coast head terms for SEO itself are held by agencies with far more links than we have, so we do not chase those terms for our own site. For your business, the question is how strong your own competitors are, and we measure that before we quote.',
  },

  // ==== Cost and contracts ====
  {
    category: 'cost',
    question: 'How much should I expect to pay for SEO?',
    answer:
      'It depends on the size of the problem, not on a standard package. The main drivers are how many technical faults the site has, how many pages need writing, how strong the businesses on page one are, how many locations you serve, and whether links need earning. A sound site that needs its Business Profile fixed and a few pages written is a small job. A site Google cannot crawl is a big one. We quote after measuring.',
  },
  {
    category: 'cost',
    question: 'How much does SEO cost in Australia?',
    answer:
      'Australian SEO pricing tracks competition and scope rather than the postcode. A local trade business in a regional town with a few weak competitors needs far less work than an ecommerce store competing nationally. Ask any SEO agency in Australia to price the diagnosis separately from the ongoing work, so you can find out what is actually wrong without committing to a year of anything.',
  },
  {
    category: 'cost',
    question: 'Does SEO cost more in Sydney or Melbourne than in Brisbane or Adelaide?',
    answer:
      'Often, because the competition is stronger, not because the work is different. When we measured Australian search results, the weakest business on page one for SEO terms in Sydney had far more linking websites than the weakest in Canberra or Melbourne consultant searches. More competition means more content and more link earning to close the gap. The city sets the size of the gap. The gap sets the cost.',
  },
  {
    category: 'cost',
    question: 'How much should SEO cost for a small business?',
    answer:
      'Less than most retainers assume, if the work is scoped to the actual fault. Many Australian small businesses need a one-off technical repair and a properly set up Google Business Profile, then very little for months. Being sold a large monthly retainer before anyone has diagnosed the problem is the most common way money gets wasted on search in this country.',
  },
  {
    category: 'cost',
    question: 'Should I sign a 12-month SEO contract?',
    answer:
      'Not before a diagnosis. Technical repair is finite work with an end date, so it should be priced as fixed milestones. Ongoing content and link work can reasonably run month to month once you have seen the first results. If an agency insists on a long lock-in before it has looked at your site, ask what happens if the first quarter shows nothing. We price repair and ongoing work separately.',
  },
  {
    category: 'cost',
    question: 'Is it worth paying for backlinks?',
    answer:
      'No. Google lists buying or selling links for ranking purposes as link spam in its spam policies. A bought link stops working the moment Google devalues the source, so you are renting a ranking rather than owning one. If the source is penalised instead of merely devalued, the damage lands on your site and the recovery takes months of work you also pay for. Earned references cost more effort up front and carry neither risk.',
  },

  // ==== Local SEO and Google Business Profile ====
  {
    category: 'local',
    question: 'What is local SEO vs SEO?',
    answer:
      'They are judged on different things. Google says local results are based mainly on relevance, distance and prominence, where prominence includes links and reviews. Ordinary results are ranked on the page itself and who links to it. A suburban clinic gets more from an hour on its Business Profile. A national supplier gets more from an hour on its service pages.',
  },
  {
    category: 'local',
    question: 'Is a Google Business Profile free?',
    answer:
      'Yes. Creating, verifying and keeping a Business Profile costs nothing. Google also states there is no way to request or pay for a better local ranking. So if someone calls claiming your listing will be suspended or ranked lower unless you pay, treat it as a scam. Google Ads is a separate paid product and buying it does not change your free listing.',
  },
  {
    category: 'local',
    question: 'How can I get my business to show up on Google Maps?',
    answer:
      'Create a Google Business Profile and verify it, which is the step most people stall on. Then complete every field, choose the most specific primary category available, add real photographs and reply to reviews. Ranking on Maps depends heavily on distance from the searcher, so your location does much of the work. Relevance and prominence, including reviews and links, decide the rest.',
  },
  {
    category: 'local',
    question: 'Can any business have a Google Business Profile?',
    answer:
      'Not every address qualifies. Google does not allow a profile for a virtual office, meaning a rented mailing address you do not operate from, and a co-working desk only qualifies if it is staffed and receives customers during business hours. Service-area businesses, such as a plumber working from home, should hide their address and show a service area instead. Breaking these rules usually ends in suspension.',
  },
  {
    category: 'local',
    question: 'Why is my business not showing up on Google?',
    answer:
      'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guidelines breach, commonly a service-area business showing an address it should have hidden. It can also be that you are searching from far away, since Maps results move with the searcher. Check the profile status, then look for duplicates, then check your categories.',
  },
  {
    category: 'local',
    question: 'Should I build a separate page for every suburb I serve?',
    answer:
      'No. Near-identical suburb pages stopped working years ago and now compete with each other. Build one strong page per real service, a clear service area on your Business Profile, and separate location pages only where you genuinely have a location or a meaningfully different offer. Google also suggests a service area of no more than about two hours of driving from your base for most businesses.',
  },

  // ==== Technical, audit and ecommerce SEO ====
  {
    category: 'technical',
    question: 'What does an SEO audit include?',
    answer:
      'A proper SEO audit checks whether Google can crawl and index every page that matters, page speed against the Core Web Vitals, site structure and internal links, duplicate pages and canonical tags, titles and headings, structured data, your Google Business Profile, and the links pointing at the site. The useful part is the ranking: which three problems cost you most, and what to fix first.',
  },
  {
    category: 'technical',
    question: 'How long does an SEO audit take?',
    answer:
      'For a typical small business site, a few days. A large ecommerce store with thousands of product and filter pages takes longer, because the crawl itself is bigger and duplicate pages need tracing. Our free review is a lighter version: a crawl, a Business Profile check and your Search Console data, returned as a written note on the three biggest problems.',
  },
  {
    category: 'technical',
    question: 'Why is Google not crawling my website?',
    answer:
      'Check in this order: a robots.txt rule blocking the pages, a noindex tag left over from a staging site, content that only appears once JavaScript runs, no internal links pointing at the page, or a site too new to have been reached yet. Search Console names the cause in its page indexing report, and that is the fastest place to start rather than guessing.',
  },
  {
    category: 'technical',
    question: 'Do Core Web Vitals affect SEO?',
    answer:
      'They are part of how Google assesses page experience. Google publishes the pass marks: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1. Speed alone will not lift a weak page above a strong one, but a slow site loses visitors before they read anything, which hurts enquiries whatever your ranking.',
  },
  {
    category: 'technical',
    question: 'What is ecommerce SEO?',
    answer:
      'Ecommerce SEO is search work for online stores. It focuses on category pages, which usually carry the most valuable search terms, product pages with unique descriptions, structured data for price and stock, and controlling the duplicate pages that filters and product variants create. For Australian stores it also means clear shipping and returns information that matches the Australian Consumer Law obligations you already have.',
  },
  {
    category: 'technical',
    question: 'Is Shopify good for SEO?',
    answer:
      'Shopify is a sound base for SEO: pages load quickly, sitemaps are automatic and titles are editable. The common problems are fixable: thin collection pages, duplicate product URLs reached through collections, apps that slow the store, and product descriptions copied from the supplier. Shopify SEO services mostly means fixing those, then writing collection pages for terms Australians actually search.',
  },

  // ==== AI and the future of search ====
  {
    category: 'ai',
    question: 'Is SEO still worth it in 2026?',
    answer:
      'Yes, particularly for local services in Australia. When we measured 24 Australian SEO search results in September 2026, an AI Overview appeared on only 2 of the 14 city searches, while a Google map pack appeared on most of them. National and informational searches showed AI Overviews far more often. So local rankings still earn the click, while national content needs to be written so AI summaries can cite it.',
  },
  {
    category: 'ai',
    question: 'Is SEO replaced by AI?',
    answer:
      'Not replaced, but the target is widening. Being found now means appearing in ordinary results, in Google AI Overviews, and in the answers ChatGPT, Gemini and Perplexity give. The work overlaps heavily: pages with clear structure, direct answers and verifiable facts do well in all three. Pages padded with adjectives do badly in all three. We cover the AI side on our AI SEO page.',
  },
  {
    category: 'ai',
    question: 'Can SEO be done by AI?',
    answer:
      'Parts of it. AI is genuinely useful for drafting, for finding patterns in crawl data and for summarising a competitor set. It is unreliable for the judgement calls: which terms are worth pursuing, whether a page deserves to exist, and whether a link is worth having. Sites that hand the whole job to a model tend to produce a lot of pages and very little traffic.',
  },
  {
    category: 'ai',
    question: 'What is an AI SEO agency?',
    answer:
      'An agency that works on getting a business named and cited in AI answers, such as ChatGPT, Perplexity and Google AI Overviews, as well as in classic results. It is sometimes called generative engine optimisation, or GEO. In Australia the demand is real but still small next to classic SEO: about a thousand monthly searches across AI SEO terms against tens of thousands for SEO. We do both, and the AI side has its own page.',
  },
];
