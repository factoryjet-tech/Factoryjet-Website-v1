/**
 * FAQs for /au/seo.
 *
 * SOURCING: real People-Also-Ask questions harvested from Google AU on 2026-08-25, pool
 * at pipeline/research/data/au-faq-pool-2026-08-25.json.
 *
 * This is the national hub, so it takes the broad "what is it, does it work, what does it
 * cost, is AI killing it" questions, and leaves the city-specific ones to the city pages.
 * Answers here are written to be useful on their own, since a hub page is the one most
 * likely to be quoted by an assistant.
 *
 * The ONLY copy of these questions. sections/FAQ.tsx renders it, page.tsx maps it into
 * FAQPage JSON-LD.
 */

export interface Faq {
  q: string;
  a: string;
  topic: 'The basics' | 'Does it work' | 'Cost' | 'AI and search' | 'Doing it yourself' | 'Google Business Profile';
}

export const FAQS: Faq[] = [
  // ---------- The basics ----------
  {
    q: 'What does SEO mean?',
    topic: 'The basics',
    a: 'Search engine optimisation. It is the work of making a website more likely to appear when someone searches for what that site offers. In practice it covers three separate things: making sure search engines can read the site, making sure the pages answer what people actually search for, and getting other websites to reference yours. Those three need different skills and pay back on very different timescales.',
  },
  {
    q: 'What do SEO services actually do?',
    topic: 'The basics',
    a: 'Repair the technical faults that stop search engines reading and indexing your pages. Build pages that answer what buyers type, and connect them to a correct Google Business Profile where local search matters. Then earn mentions and links from real sites so Google treats you as credible. Good agencies do those in that order because that is the order that pays back fastest.',
  },
  {
    q: 'What are the four types of SEO?',
    topic: 'The basics',
    a: 'They are usually split into technical, on-page, off-page and local. Technical is whether search engines can crawl and index the site. On-page is the content and structure of each page. Off-page is mostly links and mentions from elsewhere. Local is your Google Business Profile and the consistency of your business details. Most Australian small businesses get the largest early return from technical and local.',
  },
  {
    q: 'What is the difference between SEO and technical SEO?',
    topic: 'The basics',
    a: 'Technical SEO asks whether search engines can reach, read and index your pages at all. The broader discipline asks whether those pages deserve to rank once they can. Technical work is largely finite and one-off. Content and authority work is ongoing. Doing the second before the first is the most reliable way to waste money on search.',
  },
  {
    q: 'What is local SEO vs SEO?',
    topic: 'The basics',
    a: 'They are judged on different things. Local results are ranked largely on your Google Business Profile, how close you are to the searcher, and whether your business details agree across the web. Ordinary results are ranked on the page itself and who links to it. A suburban clinic gets more from an hour on its Business Profile. A national supplier gets more from an hour on its service pages.',
  },

  // ---------- Does it work ----------
  {
    q: 'Does SEO work for small businesses?',
    topic: 'Does it work',
    a: 'It works well when a small business has a clear service and a defined area. Local search is where a small business can genuinely outrank a larger competitor, because proximity to the searcher and a well-kept listing carry real weight. It works poorly when the business is too broad to describe in a search term, or when nobody is searching for what is being sold.',
  },
  {
    q: 'How long does SEO take to show results in 2026?',
    topic: 'Does it work',
    a: 'Google says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging whether a change helped. In our Australian work, technical repairs and Google Business Profile corrections often move things within weeks. Competing for a capital city head term against agencies with a decade of links is a matter of quarters.',
  },
  {
    q: 'How to tell if your SEO is working?',
    topic: 'Does it work',
    a: 'Agree two numbers before the work starts: enquiries attributed to organic search, and impressions on a named list of commercial terms. Both live in Search Console and Analytics, which you own and keep. If a monthly report leads with rankings and buries enquiries, ask why. Positions are the easiest number to make look good and the least connected to revenue.',
  },
  {
    q: 'Is an SEO agency worth it?',
    topic: 'Does it work',
    a: 'Only when real demand exists for what you sell and your site is not currently meeting it. We verify volume against Google Ads data before recommending anything, and when the numbers do not support the work we say so. In Australia specifically, we found several service categories with almost no search volume at all, and building pages for those would have earned nothing.',
  },
  {
    q: 'Is SEO still relevant in 2026?',
    topic: 'Does it work',
    a: 'In Australia, more so than in the United States right now. When we measured Australian search results in August 2026, AI Overviews appeared on only around 13% of web design queries and 20% of local SEO queries. On the equivalent American searches they appear on most. That means an Australian organic position still earns the click rather than losing it to a summary above the results.',
  },

  // ---------- Cost ----------
  {
    q: 'How much does SEO cost in Australia?',
    topic: 'Cost',
    a: 'It tracks the size of the problem rather than a standard package. A site with sound structure that needs its local listing corrected and a few pages written is a small job. A site search engines cannot crawl properly is a much bigger one. Ask any agency to price the diagnosis separately from the ongoing work, so you can find out what is actually wrong without committing to a year of anything.',
  },
  {
    q: 'How much should SEO cost for a small business?',
    topic: 'Cost',
    a: 'Less than most retainers assume, if the work is scoped to the actual fault. Many Australian small businesses need a one-off technical repair and a properly set up Google Business Profile, then very little for months. Being sold a large monthly retainer before anyone has diagnosed the problem is the most common way money gets wasted on search in this country.',
  },
  {
    q: 'Is it worth paying for backlinks?',
    topic: 'Cost',
    a: 'No, and the reason is arithmetic rather than principle. A bought link stops working the moment Google devalues the source, which it does continuously, so you are renting a ranking rather than owning one. If the source is penalised instead of merely devalued, the damage lands on your site and the recovery takes months of work you also pay for. Earned references cost more up front and do not carry either risk.',
  },

  // ---------- AI and search ----------
  {
    q: 'Is SEO dead now with AI?',
    topic: 'AI and search',
    a: 'No, though it is changing and the change is uneven by country and by topic. In Australia we measured AI Overviews appearing on around a third of commercial terms overall, but almost never on web design and local service searches, and almost always on searches containing the word AI. So the answer depends entirely on what you sell. For most Australian local service businesses, ordinary search is still where the clicks are.',
  },
  {
    q: 'Can SEO be done by AI?',
    topic: 'AI and search',
    a: 'Parts of it. AI is genuinely useful for drafting, for finding patterns in crawl data, and for summarising a competitor set. It is unreliable for the judgement calls: which terms are worth pursuing, whether a page deserves to exist, and whether a link is worth having. Sites that hand the whole job to a model tend to produce a lot of pages and very little traffic.',
  },
  {
    q: 'Is SEO replaced by AI?',
    topic: 'AI and search',
    a: 'Not replaced, but the target is widening. Being found now means appearing in ordinary results, in AI summaries, and in the answers assistants give. The good news is that the work overlaps heavily: pages with clear structure, direct answers and verifiable facts do well in all three. Pages padded with adjectives do badly in all three.',
  },
  {
    q: 'What is an AI SEO agency?',
    topic: 'AI and search',
    a: 'Usually an agency positioning itself around optimising for AI assistants and AI summaries rather than only for classic search results. Worth knowing before you search for one in Australia: we measured every localised version of that term here in August 2026 and found essentially no search volume. Australians looking for this work search for SEO. The label is largely an agency-facing one at the moment.',
  },

  // ---------- Doing it yourself ----------
  {
    q: 'Can I do my own SEO for my business?',
    topic: 'Doing it yourself',
    a: 'Yes, and you should do part of it regardless. Claiming and completing your Google Business Profile, keeping your business details consistent, and asking customers for reviews are the highest-value tasks available and none needs technical skill. What gets hard is technical diagnosis and earning links, where tooling and time start to matter more than effort.',
  },
  {
    q: 'Can a beginner do SEO?',
    topic: 'Doing it yourself',
    a: 'A beginner can do local SEO competently within a few weeks of reading. Google publishes a starter guide that covers the fundamentals honestly and without selling anything. Where beginners typically go wrong is buying links, publishing large volumes of thin pages, or chasing search terms with no real volume behind them. Those three mistakes account for most self-inflicted damage.',
  },
  {
    q: 'Should I hire an SEO agency or do it myself?',
    topic: 'Doing it yourself',
    a: 'A split usually works best. Do the local basics in-house, because you know the business and the tasks are straightforward. Bring in help for technical audits, content at volume, and earning links. If you have a marketer or a developer already, an advisory arrangement where someone sets direction and your team executes is often better value than a full retainer.',
  },
  {
    q: 'Why is Google not crawling my website?',
    topic: 'Doing it yourself',
    a: 'Check in this order: a robots.txt rule blocking the pages, a noindex tag left over from a staging site, content that only appears once JavaScript runs, no internal links pointing at the page, or a site too new to have been reached yet. Search Console names the specific cause in its page indexing report, and that is the fastest place to start rather than guessing.',
  },

  // ---------- Google Business Profile ----------
  {
    q: 'Is a Google Business Profile free?',
    topic: 'Google Business Profile',
    a: 'Entirely. Creating, verifying and maintaining one costs nothing and there is no ongoing charge. If someone calls claiming your listing will be suspended unless you pay, it is a scam, and these calls are common in Australia. Google Ads is a separate paid product, and buying it has no effect on your free listing in either direction.',
  },
  {
    q: 'How can I get my business to show up on Google Maps?',
    topic: 'Google Business Profile',
    a: 'Create a Google Business Profile and verify it, which is the step most people stall on. Verification is by phone, email, video or postcard depending on the business type. Then complete every field, choose the most specific primary category available, and add real photographs. Ranking on Maps depends heavily on how close you are to the searcher, so location does a lot of the work.',
  },
  {
    q: 'Can anyone make a Google Business Profile?',
    topic: 'Google Business Profile',
    a: 'Only a business that makes in-person contact with customers, either at a location it controls or by travelling to them. A business operating entirely online with no face-to-face contact does not qualify under Google guidelines. Setting one up anyway usually ends in a suspension, and suspensions are considerably harder to reverse than they are to avoid.',
  },
  {
    q: 'Why is my business not showing up on Google?',
    topic: 'Google Business Profile',
    a: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guidelines breach, commonly a service-area business displaying an address it should have hidden. It can also be that you are searching from far away, since Maps results move with the searcher. Check the profile status, then look for duplicates, then check your categories.',
  },
];
