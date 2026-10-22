import React from 'react';
import type { BlogPost } from '../data.types';

// Every Google statement below was fetched and read on 22 Oct 2026.
const SRC = {
  aiFeatures: 'https://developers.google.com/search/docs/appearance/ai-features',
  aiGuide: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
  helpful: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  cwv: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
  crawlers: 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers',
  gbpRanking: 'https://support.google.com/business/answer/7091',
  aioHelp: 'https://support.google.com/websearch/answer/14901683',
  launch: 'https://blog.google/products/search/generative-ai-google-search-may-2024/',
  geoPaper: 'https://arxiv.org/abs/2311.09735',
};

const ext = { target: '_blank', rel: 'noopener noreferrer', className: 'text-[#B23E13] underline' } as const;

const faqs = [
  {
    q: 'How do we get our firm featured in Google AI Overviews?',
    a: "Get the page indexed and eligible for a normal Google snippet, then make it the most useful answer to the exact question buyers ask. Google's AI features guide says there are no additional requirements and no special optimizations needed for AI Overviews. In practice that means a clear direct answer near the top, facts only your firm can give (your process, your local detail, your own numbers), and a crawlable page with nothing blocking the snippet.",
  },
  {
    q: 'What does a small business need to do to show up in AI-generated answers?',
    a: "Four things cover most of it. Make sure Google can crawl and index your pages. Write pages that answer real customer questions in plain words, with the answer first. Keep your Google Business Profile complete and verified, because Google's own guidance says Business Profiles can help your services show in AI responses. Then earn mentions on other real sites, since prominence is one of the three local ranking factors Google names.",
  },
  {
    q: 'What are Google AI Overviews?',
    a: "Google describes an AI Overview as an AI-generated snapshot with key information and links to dig deeper. It sits at the top of some search results and pulls from several web pages at once. Google shows one only when its systems decide generative AI will be especially helpful for that search, so many queries never get one.",
  },
  {
    q: 'When did Google AI Overviews launch?',
    a: "Google announced on 14 May 2024 that AI Overviews would begin rolling out to everyone in the US, with more countries coming soon. Its Search Help page now lists supported countries and territories across the Americas, Asia-Pacific, Europe, the Middle East and Africa, plus a long list of languages. Check that page for the current list rather than relying on a count quoted in a blog post.",
  },
  {
    q: 'Do I need special schema markup or an llms.txt file for AI Overviews?',
    a: "No. Google's AI features guide says you do not need new machine-readable files, AI text files or markup, and that there is no special schema.org structured data to add. Its AI optimization guide adds that Google Search does not use llms.txt. Structured data is still worth having for rich results, as long as it matches the text visible on the page.",
  },
  {
    q: 'Why am I not getting an AI Overview for my search?',
    a: "Because Google decides per query. Its Search Help page says AI Overviews appear when Google's systems determine generative AI can be especially helpful. Short navigational searches, brand names and many local searches often show regular results instead. If you run the search and see no overview, there is nothing to be cited in for that query yet. Test the longer question your customers actually type.",
  },
  {
    q: 'Why is my business not showing in Google AI Overviews?',
    a: "Start with the basics Google lists. Is the page indexed? Is it eligible for a snippet, or does a nosnippet or max-snippet setting block it? Does the page answer the question better than the pages already cited? For local searches, check that your Business Profile is verified and complete. Google also says indexing and serving are never guaranteed, so treat this as a ranking problem, not a switch.",
  },
  {
    q: 'Can a small business show up in Google AI Overviews?',
    a: "Yes. The eligibility rule is the same for a one-person firm and a national brand: indexed and snippet-eligible. Small firms usually win on narrow questions a big site never answers well, such as a cost question for one service in one city, or a how-to that only someone doing the work every week can explain. Specific first-hand detail is what Google's AI optimization guide calls non-commodity content.",
  },
  {
    q: 'How does Google choose which websites appear in AI Overviews?',
    a: "Google has not published a formula. Its AI features guide says AI Overviews and AI Mode may use query fan-out, issuing several related searches across subtopics and sources to build one answer. So a page can be cited for a sub-question it answers well even if it does not rank first for the main search. The same core ranking systems and helpful content guidance apply.",
  },
  {
    q: 'Do I need to rank number one to appear in AI Overviews?',
    a: "No ranking position is published as a requirement. Because of query fan-out, Google may pull a source that answers one slice of the question. What Google does state is that a page must be indexed and eligible to show with a snippet. Ranking well for the related sub-questions your buyers ask gives you more chances than chasing one head term.",
  },
  {
    q: 'How do I track my brand in Google AI Overviews?',
    a: "Use Search Console first. Google's AI features guide says traffic from AI features is counted in the Performance report under the Web search type, and its AI optimization guide points to a Generative AI performance report in Search Console. Then keep a list of 20 to 30 buyer questions and run them by hand each month, noting whether an overview appears and which sites it cites.",
  },
  {
    q: 'Are AI Overviews checkers and trackers worth using?',
    a: "They save time once you track more than a handful of queries, but treat their numbers as samples. Overviews change by location, device and day, so a tool that checks once from one city can miss what your customers see. Use a checker to spot trends across a fixed question list, and confirm anything important with Search Console data and a manual search.",
  },
  {
    q: 'Can I see AI Overview data in Google Search Console?',
    a: "Yes, in part. Google says clicks and impressions from AI features are included in the Performance report under the Web search type, so they are mixed in with normal results. Google's AI optimization guide also names a Generative AI performance report for content shown in generative AI features on Search and Discover. Look for it in your property's Performance section.",
  },
  {
    q: 'How do AI Overviews work for local businesses?',
    a: "For local searches Google can include information about local businesses in its AI responses, and its AI optimization guide names Google Business Profiles as one way to make your services visible there. Google's local ranking help lists three factors: relevance, distance and prominence. You control relevance (categories, services, description) and part of prominence (reviews, replies, mentions). Distance you cannot change.",
  },
  {
    q: 'How do I get my small business on Google?',
    a: "Create and verify a free Google Business Profile, then fill in every field: address or service area, hours, primary category, services, photos and attributes. Google's help page says complete information and verification make a listing more likely to appear. Add a website with one clear page per service, and ask happy customers for reviews. Reply to every review, since Google says helpful replies help a business stand out.",
  },
  {
    q: 'How do I get Shopify product pages into Google AI Overviews?',
    a: "Treat it as two jobs. First, product data: Google's AI optimization guide says products in Merchant Center can be visible in AI responses, so connect your store's feed and keep prices and stock accurate. Second, the page: write a real description that answers buyer questions (sizing, materials, who it suits, shipping), keep Product structured data matching the visible price, and make sure the theme does not hide text from crawlers.",
  },
  {
    q: 'How do I get AI Mode to show up on Google?',
    a: "AI Mode is a search option you choose; Google's Search Help page says you can move from an AI Overview into a deeper conversation in AI Mode by selecting Show more and typing a follow-up. For a business, the rules for being cited are the same as for AI Overviews: Google's AI features guide applies one set of eligibility rules to both features.",
  },
  {
    q: 'Do Google AI Overviews hurt my website traffic?',
    a: "They can cut clicks on simple informational searches where the overview answers the question in full. Google's own position, in its AI features guide, is that clicks from pages shown in AI features are higher quality, meaning visitors tend to spend more time on the site. That is Google's claim about its product; measure your own pages in Search Console before deciding.",
  },
  {
    q: 'Does page speed affect Google AI Overviews?',
    a: "Google has not said AI Overviews use separate speed rules. It does say good Core Web Vitals align with what its core ranking systems reward, and it sets the good thresholds at LCP within 2.5 seconds, INP under 200 milliseconds and CLS under 0.1. A fast page will not earn a citation on its own, but a slow one makes every other effort harder.",
  },
  {
    q: 'What is E-E-A-T and how does it relate to AI Overviews?',
    a: "E-E-A-T stands for experience, expertise, authoritativeness and trust. It comes from Google's helpful content guidance, which says of the four, trust is most important. For a small business that means a named author who does the work, dates on the page, sources linked for every number, and clear contact details. The same guidance covers AI features, since Google applies its normal systems there.",
  },
  {
    q: 'Can I stop Google from using my content in AI Overviews?',
    a: "Yes, with the same controls that limit snippets. Google's AI features guide points to nosnippet, data-nosnippet, max-snippet and noindex. Blocking Google-Extended does not do it: Google's crawler documentation says Google-Extended controls use in Gemini training and grounding, and does not affect inclusion in Google Search. Remember that limiting snippets also limits how your page appears in normal results.",
  },
  {
    q: 'Is an AI Overview the same as a featured snippet?',
    a: "No. A featured snippet quotes one block from one page. An AI Overview is a generated summary that can draw on several pages and link to each, and Google says it may run several related searches to build it. Both reward a page that answers the question directly, so the same writing habits help with each.",
  },
  {
    q: 'Does AI-written content get into AI Overviews?',
    a: "Google does not ban it, but its helpful content guidance judges content by whether it is made for people rather than to manipulate rankings, and suggests explaining how content was created where readers might wonder. Mass-produced pages that repeat what every other site says are what Google's AI optimization guide calls commodity content. A person with real experience should write or check every page.",
  },
  {
    q: 'How is GEO different from optimizing for AI Overviews?',
    a: "GEO, generative engine optimization, is the broader idea of being cited by any AI answer engine: ChatGPT, Perplexity, Gemini and Google. The term comes from a KDD 2024 research paper by Aggarwal and colleagues, which reported that its methods could boost visibility in generative engine responses by up to 40% in their tests. Google AI Overviews is one engine inside that, with its own published rules.",
  },
];

export const post: BlogPost = {
  id: '220',
  slug: 'how-to-show-up-in-google-ai-overviews-small-business',
  title: 'How to Show Up in Google AI Overviews: Small Business Guide',
  excerpt:
    "Google says there are no extra requirements for AI Overviews: an indexed page that can show a snippet is eligible. Here is what that means for a small business, with every point linked to Google's own documentation.",
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '11 min read',
  imageUrl: '/blog-images/how-to-show-up-in-google-ai-overviews-small-business.webp',
  meta: {
    title: 'Show Up in Google AI Overviews: Small Business Guide 2026',
    description:
      "Google says AI Overviews need no special schema or llms.txt. A 10-step small business checklist built on Google's own guides, checked 22 Oct 2026.",
  },
  keyTakeaways: [
    "Google's AI features guide says there are no additional requirements for AI Overviews: the page must be indexed and eligible to show with a snippet.",
    'No special schema, AI text file or llms.txt is needed; Google says Search does not use llms.txt.',
    'Google may build one overview from several related searches (query fan-out), so a page can be cited for a sub-question it answers best.',
    "For local businesses, Google names Business Profiles as a way to appear in AI responses; local ranking runs on relevance, distance and prominence.",
    'Track results in Search Console: AI feature traffic sits in the Performance report under the Web search type.',
    "First-hand, specific content beats generic tips. Google's own example of commodity content is \"7 Tips for First-Time Homebuyers\".",
  ],
  faqs,
  content: (
    <article>
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">Quick answer</p>
        <p className="text-gray-800 font-medium leading-relaxed">
          To show up in Google AI Overviews, get your page indexed and eligible for a normal snippet, then make it the
          clearest first-hand answer to the question your customers type. Google&apos;s{' '}
          <a href={SRC.aiFeatures} {...ext}>AI features guide</a> says there are no additional requirements, no special
          schema and no AI text files needed. Local businesses should also keep a verified, complete Google Business
          Profile.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        Most advice on AI Overviews sells a trick: a special markup, an llms.txt file, a magic paragraph length. Google
        has written down that none of that is required. Its{' '}
        <a href={SRC.aiGuide} {...ext}>AI optimization guide</a>, last updated 10 July 2026, says Google Search does not
        use llms.txt, and that creating one will neither help nor hurt. What Google does ask for is ordinary: a crawlable
        page, a snippet it is allowed to show, and content that is helpful and specific.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        This guide sticks to what Google has published. Each step links to the Google page it comes from, and every
        source was read on 22 October 2026. The questions in the FAQ are ones real searchers typed before Google showed
        them this page between July and October 2026.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What Google says AI Overviews need</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-3 text-left border border-gray-700">Claim you will hear</th>
              <th className="p-3 text-left border border-gray-700">What Google says</th>
              <th className="p-3 text-left border border-gray-700">Source</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">You need special AI markup</td>
              <td className="p-3 border border-gray-200">No special schema.org structured data is needed</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiFeatures} {...ext}>AI features guide</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="p-3 border border-gray-200 font-semibold">Add an llms.txt file</td>
              <td className="p-3 border border-gray-200">Google Search does not use llms.txt</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiGuide} {...ext}>AI optimization guide</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Block Google-Extended to stay out</td>
              <td className="p-3 border border-gray-200">Google-Extended does not affect inclusion in Google Search</td>
              <td className="p-3 border border-gray-200"><a href={SRC.crawlers} {...ext}>Google crawler docs</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="p-3 border border-gray-200 font-semibold">There is a separate AI index</td>
              <td className="p-3 border border-gray-200">Indexed and eligible for a snippet; no extra technical requirements</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiFeatures} {...ext}>AI features guide</a></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">You cannot measure it</td>
              <td className="p-3 border border-gray-200">AI feature traffic is in the Search Console Performance report, Web search type</td>
              <td className="p-3 border border-gray-200"><a href={SRC.aiFeatures} {...ext}>AI features guide</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">The 10-step checklist, each step tied to a Google page</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Confirm the page is indexed and snippet-eligible</h3>
          <p className="leading-relaxed">
            Run the URL through Search Console&apos;s URL Inspection tool. Then check the page source for{' '}
            <code>nosnippet</code>, <code>max-snippet</code> or <code>noindex</code>. Google&apos;s{' '}
            <a href={SRC.aiFeatures} {...ext}>AI features guide</a> names these as the controls that limit what appears,
            so one stray tag can take a page out of contention.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">2. Target the long question, not the short term</h3>
          <p className="leading-relaxed">
            Google says AI Overviews appear only when its systems judge generative AI to be especially helpful (<a href={SRC.aioHelp} {...ext}>Search Help</a>). Short searches like a brand name rarely trigger one. Longer
            questions do: &quot;how much does a 5-page website cost for a dental practice&quot; rather than &quot;web
            design&quot;. Search each target question yourself and note whether an overview appears.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Put the answer in the first sentence</h3>
          <p className="leading-relaxed">
            Frame a heading as the customer&apos;s question and answer it straight away. For example: heading
            &quot;How long does a small business website take?&quot;, first line &quot;A 5-page site takes about a week
            once copy and photos are ready.&quot; Then explain. This is a writing habit, not a Google rule, but it gives
            any summary a clean sentence to quote.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">4. Cover the sub-questions</h3>
          <p className="leading-relaxed">
            Google&apos;s <a href={SRC.aiFeatures} {...ext}>AI features guide</a> says AI Overviews and AI Mode may use
            query fan-out: several related searches across subtopics. A buyer asking about cost also wants timeline,
            what is included and what goes wrong. A page that answers each in its own short section has more chances to
            be the source for one of them.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">5. Write what only you know</h3>
          <p className="leading-relaxed">
            Google&apos;s <a href={SRC.aiGuide} {...ext}>AI optimization guide</a> contrasts commodity content (&quot;7
            Tips for First-Time Homebuyers&quot;) with first-hand content (&quot;Why We Waived the Inspection &amp;
            Saved Money&quot;). Your version is the job you did last week, the question a customer asked on the phone,
            the number from your own records. Generic tips are already on a thousand other sites.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">6. Use structured data, and keep it truthful</h3>
          <p className="leading-relaxed">
            Article, FAQPage, Product and LocalBusiness markup still help with rich results. Google is clear that no
            special schema is needed for AI features, and that structured data should match the visible text on the page
            (<a href={SRC.aiFeatures} {...ext}>AI features guide</a>). Markup that says something the page does not is a
            trust problem.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">7. Complete and verify your Google Business Profile</h3>
          <p className="leading-relaxed">
            Google&apos;s <a href={SRC.aiGuide} {...ext}>AI optimization guide</a> says Business Profiles can help your
            services show in AI responses. Its <a href={SRC.gbpRanking} {...ext}>local ranking help page</a> names
            relevance, distance and prominence as the factors, and says complete, verified listings with current hours
            are more likely to appear. Reply to reviews; Google says helpful replies help a business stand out.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">8. Show who wrote it and why to trust it</h3>
          <p className="leading-relaxed">
            Google&apos;s <a href={SRC.helpful} {...ext}>helpful content guidance</a> asks you to judge pages by who
            made them, how and why, and says that of the E-E-A-T qualities, trust is most important. Name the author,
            date the page, link the source for every number, and say how the content was made if a reader might wonder.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">9. Pass Core Web Vitals</h3>
          <p className="leading-relaxed">
            Google&apos;s <a href={SRC.cwv} {...ext}>Core Web Vitals page</a> sets the good thresholds at LCP within 2.5
            seconds, INP under 200 milliseconds and CLS under 0.1, and says good scores align with what its core ranking
            systems reward. Speed will not win a citation alone. A slow mobile page drags down everything else.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">10. Measure in Search Console, then by hand</h3>
          <p className="leading-relaxed">
            AI feature clicks and impressions are counted in the Performance report under the Web search type, per
            Google&apos;s <a href={SRC.aiFeatures} {...ext}>AI features guide</a>. Add a monthly manual check: keep 20 to
            30 buyer questions in a sheet, search each one, and record whether an overview appears and which sites it
            links. Our free <a href="/ai-visibility-checker" className="text-[#B23E13] underline">AI Visibility
            Checker</a> runs a quick version of that test.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">What the research says about generative engines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The term GEO comes from a KDD 2024 paper, <a href={SRC.geoPaper} {...ext}>GEO: Generative Engine
        Optimization</a>, by Pranjal Aggarwal and five co-authors. The abstract reports that GEO methods can boost visibility in
        generative engine responses by up to 40%. That was a research benchmark, not Google&apos;s ranking system, so treat it as a
        reason to cite your sources rather than a promised lift.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Google announced on 14 May 2024 that AI Overviews would roll out to everyone in the US (<a href={SRC.launch} {...ext}>Google blog</a>). The rules for being included have stayed close to the rules for
        ranking in Search at all. That is good news for a small business: the work that earns a citation is the same
        work that earns a click.
      </p>

      <div className="bg-[#FAFAF7] border border-[#E5E5DF] rounded-2xl p-6 md:p-8 my-10">
        <p className="text-sm font-semibold text-[#B23E13] uppercase tracking-wide mb-2">AI search for small businesses</p>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Want pages built to be quoted by AI search?</h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          FactoryJet builds sites with answer-first pages, structured data that matches the page, and Core Web Vitals
          in the green. 500+ businesses served, 97% on-time delivery, founded 2014. Book a 30-minute call with founder
          Bhavesh Barot, or read about our <a href="/services/ai-seo" className="text-[#B23E13] underline">AI SEO
          service</a>.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#B23E13] hover:bg-[#9A3510] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Book a 30-minute call
          </a>
          <a
            href="/ai-visibility-checker"
            className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Check your AI visibility
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 border-t border-gray-200 pt-6 mt-6">
        <div>
          <p className="font-semibold text-gray-900">Bhavesh Barot</p>
          <p className="text-sm text-gray-600">
            Founder of FactoryJet. Builds websites, stores and search programs for small and mid-sized businesses.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Sources checked 22 Oct 2026: <a href={SRC.aiFeatures} {...ext}>Google AI features and your website</a>,{' '}
            <a href={SRC.aiGuide} {...ext}>Google AI optimization guide</a>,{' '}
            <a href={SRC.helpful} {...ext}>Google helpful content guidance</a>,{' '}
            <a href={SRC.cwv} {...ext}>Google Core Web Vitals</a>,{' '}
            <a href={SRC.crawlers} {...ext}>Google common crawlers</a>,{' '}
            <a href={SRC.gbpRanking} {...ext}>Google Business Profile local ranking</a>,{' '}
            <a href={SRC.aioHelp} {...ext}>Google Search Help: AI Overviews</a>,{' '}
            <a href={SRC.launch} {...ext}>Google blog, 14 May 2024</a>,{' '}
            <a href={SRC.geoPaper} {...ext}>Aggarwal et al., KDD 2024</a>.
          </p>
        </div>
      </div>
    </article>
  ),
};
