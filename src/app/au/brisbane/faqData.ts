/**
 * FAQs for /au/brisbane.
 *
 * SOURCING RULE: every question below is a real People-Also-Ask question harvested from
 * Google AU (location_code 2036) on 2026-08-25, not an invented one. The pool lives at
 * pipeline/research/data/au-faq-pool-2026-08-25.json and was built from
 * dfs_priority_markets_winnability.py runs over 103 commercial terms plus 78 question
 * seeds. Questions marked [BNE] came back on a Brisbane-localised query.
 *
 * Job-seeker questions that Google returns alongside these ("what is a web design
 * salary", "is web design well paid") are deliberately excluded. They are the same
 * keyword and a completely different reader.
 *
 * This array is the ONLY copy of these questions. sections/FAQ.tsx renders it and
 * page.tsx maps it into FAQPage JSON-LD. Never hand-write a second copy.
 *
 * Answers are 40 to 100 words, answer-first, Australian spelling, no price figures.
 */

export interface Faq {
  q: string;
  a: string;
  /** Grouping for the FAQ sidebar. */
  topic: 'Websites' | 'Cost and scope' | 'SEO' | 'Google and local search' | 'Working with us';
}

export const FAQS: Faq[] = [
  // ---------- Cost and scope ----------
  {
    q: 'How much does it cost to design a website in Brisbane?', // [BNE]
    topic: 'Cost and scope',
    a: 'It depends on how many pages you need, whether the content already exists, and what the site has to connect to. A four page site for a trade business and a fifty page site with a booking system and a customer login are different pieces of work, and any figure quoted before someone has looked at yours is a guess. We review your current site, write a scope, and put a fixed price against it before you commit to anything.',
  },
  {
    q: 'How much does SEO cost in Brisbane?', // [BNE]
    topic: 'Cost and scope',
    a: 'SEO cost tracks the size of the problem, not the size of the city. A site with clean structure that needs content and local listings sorted is a smaller job than one where Google cannot crawl half the pages. We audit first and price the repair work as fixed milestones, then the ongoing content and link work separately, so you can see what you are paying for and stop either part.',
  },
  {
    q: 'Is it cheaper to build a website myself?',
    topic: 'Cost and scope',
    a: 'In cash, usually yes. In total cost, often no. A builder subscription is inexpensive, but the hours you spend on layout, copy and fixing the mobile view are hours not spent selling. The honest test is your hourly value. If a week of your time is worth more than the build, doing it yourself is the expensive option. If you are pre-revenue and time-rich, build it yourself and come back later.',
  },
  {
    q: 'Is there a monthly fee to have a website?',
    topic: 'Cost and scope',
    a: 'Yes, though it is usually small. You pay for the domain name each year and for hosting, either monthly or annually. If your site takes bookings or payments there is normally a platform or transaction fee on top. What you should not be paying is a monthly fee simply to keep pages online with an agency that holds the keys. You own our work outright.',
  },
  {
    q: 'How many pages should a good website have?',
    topic: 'Cost and scope',
    a: 'Enough to answer what buyers ask, and no more. Most Brisbane service businesses need a home page, one page per service they actually want enquiries for, an about page with real people on it, proof of past work, and a contact page. Adding pages nobody searches for does not help you rank. One strong page per service beats five thin ones on the same topic.',
  },

  // ---------- Websites ----------
  {
    q: 'How long does it typically take to build a website?',
    topic: 'Websites',
    a: 'A small business site is usually a few weeks from approved scope to launch. The build itself is rarely the slow part. Waiting on content, photography and sign-off is. If you have your copy, your logo and your images ready when we start, the timeline shortens considerably. We tell you at scope which items sit with you, because those are the ones that decide the date.',
  },
  {
    q: 'How do I increase my website speed?',
    topic: 'Websites',
    a: 'Start by measuring rather than guessing. Google publishes the pass marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow Australian small business sites fail on one thing, which is oversized images loading before anything else. Compressing images, serving them in a modern format, and removing plugins you no longer use fixes the majority of cases.',
  },
  {
    q: 'Why do websites run slowly?',
    topic: 'Websites',
    a: 'Usually because the page is asking the browser to download more than it needs. Common causes are photographs uploaded straight off a phone at full resolution, a page builder that ships code for features you are not using, a stack of tracking scripts, and hosting shared with too many other sites. Server distance matters less than people think for Australian traffic, but the other four are worth checking in that order.',
  },
  {
    q: 'How can I make my website mobile-friendly?',
    topic: 'Websites',
    a: 'Test it on a real phone first, not just a resized browser window. The things that break most often are text too small to read without zooming, buttons too close together to tap accurately, forms that push the submit button off screen, and images that force sideways scrolling. Fix those four and you have solved most of it. Google indexes the mobile version of your site, so the mobile view is the real one.',
  },
  {
    q: 'What are common website mistakes?',
    topic: 'Websites',
    a: 'The most expensive one is not saying what you do in the first screen. After that: no phone number where a phone buyer can see it, a contact form that asks for eight fields when three would do, stock photography that could belong to any business in Australia, service pages written in internal job titles rather than what customers type, and no proof that you have done the work before.',
  },
  {
    q: 'What is the 3 second rule in web design?',
    topic: 'Websites',
    a: 'It is the idea that a visitor decides whether to stay within about three seconds of the page appearing. Treat it as a useful habit rather than a law, because the exact number varies by study. The practical version is simpler: in the first screen, a reader should be able to tell what you sell, whether you cover their area, and how to contact you. If they cannot, the design has failed regardless of how it looks.',
  },
  {
    q: 'What is the best website builder for small businesses in Australia?',
    topic: 'Websites',
    a: 'There is no single best one, and anyone who names one without asking what you sell is guessing. If you need a simple brochure site and will maintain it yourself, a hosted builder is sensible. If you sell products, a dedicated commerce platform will serve you better. If you need custom logic, a booking system or an integration with software you already run, a builder will fight you and a built site will not.',
  },

  // ---------- SEO ----------
  {
    q: 'How long does SEO take to show results in 2026?',
    topic: 'SEO',
    a: 'Google itself says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging whether a change helped. In practice, technical repairs and Google Business Profile corrections can move things within weeks. Ranking for competitive Brisbane terms against agencies that have been building links for a decade is a matter of quarters. Anyone promising page one in thirty days is selling something.',
  },
  {
    q: 'Does SEO work for small businesses?',
    topic: 'SEO',
    a: 'It works well for small businesses with a clear service and a defined area, which describes most Brisbane trade and professional firms. Local search is the part where a small business can genuinely beat a larger competitor, because proximity and a well-kept Google Business Profile count for a lot. It works badly when the business is too broad to describe, or when nobody is actually searching for what is being sold.',
  },
  {
    q: 'How to tell if your SEO is working?',
    topic: 'SEO',
    a: 'Look at enquiries first, then at the search terms bringing people in, then at rankings. Search Console shows which queries you appear for and how often people click. If impressions are rising on terms that describe what you sell, the work is landing even before positions move much. Rankings on their own are the weakest signal, because a first position on a term nobody searches is worth nothing.',
  },
  {
    q: 'Should I hire an SEO agency or do it myself?',
    topic: 'SEO',
    a: 'Do the local basics yourself, because they are genuinely doable and nobody knows your business better. Claim and complete your Google Business Profile, get your name, address and phone number consistent everywhere, and ask happy customers for reviews. Hire out the parts that need tooling and time: technical audits, content at volume, and earning links from real Queensland sites. That split usually gets the best result for the money.',
  },
  {
    q: 'Is SEO still relevant in 2026?',
    topic: 'SEO',
    a: 'Yes, and in Australia more so than in the United States right now. When we measured Australian search results in August 2026, AI Overviews appeared on only a small share of web design and local SEO queries, while they dominate the equivalent American ones. That means an organic position on an Australian local term still earns the click rather than losing it to a summary above the results.',
  },
  {
    q: 'Can I do local SEO myself?',
    topic: 'SEO',
    a: 'Much of it, yes. The highest-value tasks need no technical skill: claim your Google Business Profile, choose the right primary category, set your service areas honestly, add real photographs, and answer reviews. Keep your business name, address and phone number identical across every directory you appear in. The parts that get harder are technical fixes and earning links, which is where outside help starts to pay for itself.',
  },
  {
    q: 'What is local SEO vs SEO?',
    topic: 'SEO',
    a: 'Local SEO is about being found by people near you, and it is judged largely on your Google Business Profile, your proximity to the searcher, and consistent business details across the web. General SEO is about ranking web pages for a topic regardless of location. A Brisbane plumber needs local SEO first. A software company selling nationally needs the general kind. Most businesses need some of both.',
  },
  {
    q: 'Why is Google not crawling my website?',
    topic: 'SEO',
    a: 'The usual causes, in the order worth checking: a robots.txt file blocking the pages, a noindex tag left over from a staging site, pages that only exist after a JavaScript load, no internal links pointing at the page, or a site so new that Google has not got to it yet. Search Console will tell you which one it is under the page indexing report, and that is the fastest place to look.',
  },

  // ---------- Google and local search ----------
  {
    q: 'How can I get my business to show up on Google Maps?',
    topic: 'Google and local search',
    a: 'Create a Google Business Profile, then verify it, which is the step most people stall on. Verification is usually by phone, email, video or postcard depending on your business type. Once verified, complete every field, pick the most specific primary category you can, and add real photographs. Maps ranking then depends heavily on proximity to the searcher, so a Brisbane CBD address and a Logan address will not rank identically for the same query.',
  },
  {
    q: 'Is a Google Business Profile free?',
    topic: 'Google and local search',
    a: 'Yes, completely. Creating, verifying and managing a Google Business Profile costs nothing, and there is no monthly charge for keeping it. If someone contacts you claiming your listing will be suspended unless you pay, it is a scam, and those calls are common in Australia. You may choose to pay for Google Ads separately, but that is a different product and it does not affect your free listing.',
  },
  {
    q: 'Why is my business not showing up on Google?',
    topic: 'Google and local search',
    a: 'Most often the profile is unverified, is a duplicate of an older listing, or has been suspended for a guideline breach such as a service-area business showing a home address. It can also be that you are checking from an address far from your business, since Maps results shift with the searcher location. Check the profile status first, then search for duplicates of your business name, then look at your categories.',
  },

  // ---------- Working with us ----------
  {
    q: 'How to choose a web design agency?',
    topic: 'Working with us',
    a: 'Ask three questions. Who does the actual work, and are they the people in the meeting. What happens if you leave, and do you keep the site, the domain and the accounts. And can they show you a site they built that is still fast today, not just a screenshot from launch day. An agency that answers all three plainly is usually a safer choice than one with a nicer portfolio.',
  },
  {
    q: 'What do SEO services actually do?',
    topic: 'Working with us',
    a: 'Three things, and good agencies sequence them in this order. They repair the technical faults that stop Google reading and indexing your site. They build pages that answer what buyers actually type, and connect those to a correct Google Business Profile. Then they earn mentions and links from real sites so Google treats you as credible. Anything that skips straight to the third step without the first two is spending your money on the slowest lever.',
  },
];
