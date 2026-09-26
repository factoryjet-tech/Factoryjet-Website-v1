/**
 * FAQs for /au/brisbane.
 *
 * SOURCING RULE: the questions are People-Also-Ask questions harvested from Google AU
 * (location_code 2036): the original set on 2026-08-25 (pool:
 * pipeline/research/data/au-faq-pool-2026-08-25.json) plus the PAA returned on the
 * Brisbane SERPs fetched 2026-09-24 (pipeline/research/data/market-au-2026-09-24/:
 * "web design company brisbane", "brisbane web designer", "brisbane web design agency",
 * "brisbane seo agency", "seo expert brisbane", "seo services brisbane").
 *
 * Job-seeker questions ("what is a web design salary", "is web design well paid") are
 * deliberately excluded. Same keyword, completely different reader.
 *
 * This array is the ONLY copy. page.tsx renders it AND maps it into FAQPage JSON-LD.
 * Never hand-write a second copy. Answers are answer-first, Australian spelling, no prices.
 */

export const FAQ_CATEGORIES = [
  { key: 'cost', label: 'Cost, scope & timing' },
  { key: 'choosing', label: 'Choosing a Brisbane web designer' },
  { key: 'websites', label: 'Website design & build' },
  { key: 'seo', label: 'SEO in Brisbane' },
  { key: 'local', label: 'Google Maps & local search' },
] as const;

export const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ---------- Cost ----------
  { category: 'cost', question: 'How much does it cost to design a website in Brisbane?',
    answer: 'It depends on how many pages you need, whether the content already exists, and what the site has to connect to. A four page site for a trade business and a fifty page site with bookings and a customer login are different jobs, and any figure quoted before someone has looked at yours is a guess. We review your current site, write a scope, and put a fixed price against it before you commit. Our website cost guide lists published Australian market ranges.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How much should I pay a website designer?',
    answer: 'Pay for the outcome you need, not a page count. The things that move the price are custom design versus a template, who writes the content, integrations such as bookings or a CRM, ecommerce, and whether support after launch is included. Compare quotes on the same written scope and check what is left out. A lower quote that excludes content, hosting setup or ownership often costs more by the end.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How much does SEO cost in Brisbane?',
    answer: 'SEO cost tracks the size of the problem, not the size of the city. A site with clean structure that needs content and local listings sorted is a smaller job than one where Google cannot crawl half the pages. We audit first and price the repair work as fixed milestones, then the ongoing content and link work separately, so you can see what you are paying for and stop either part. Our SEO cost guide breaks published Australian ranges down by city.',
    links: [{ href: '/blog/seo-cost-australia-2026#seo-cost-by-city', label: 'SEO cost by city' }] },
  { category: 'cost', question: 'Is it cheaper to build a website myself?',
    answer: 'In cash, usually yes. In total cost, often no. A builder subscription is inexpensive, but the hours you spend on layout, copy and fixing the mobile view are hours not spent selling. The honest test is the value of your time. If a week of it is worth more than the build, doing it yourself is the expensive option. If you are pre-revenue and time-rich, build it yourself and come back later.' },
  { category: 'cost', question: 'Is there a monthly fee to have a website?',
    answer: 'Yes, though it is usually small. You pay for the domain name each year and for hosting monthly or yearly. If your site takes bookings or payments there is normally a platform or transaction fee on top. What you should not pay is a monthly fee simply to keep pages online with an agency that holds the keys. You own our work outright.',
    links: [{ href: '/blog/website-cost-australia-2026#monthly', label: 'Monthly website running costs' }, { href: '/au/website-maintenance', label: 'Website maintenance plans' }] },
  { category: 'cost', question: 'How long does it typically take to build a website?',
    answer: 'Websites of up to five pages qualify for our 7-day delivery, counted from an approved scope with content ready. Larger sites, ecommerce stores and builds with bookings or integrations take longer, and you get the date at scope. The build itself is rarely the slow part. Waiting on copy, photos and sign-off is, so we tell you early which items sit with you.' },
  { category: 'cost', question: 'How many pages should a good website have?',
    answer: 'Enough to answer what buyers ask, and no more. Most Brisbane service businesses need a home page, one page per service they want enquiries for, an about page with real people on it, proof of past work, and a contact page. Adding pages nobody searches for does not help you rank. One strong page per service beats five thin ones on the same topic.' },

  // ---------- Choosing ----------
  { category: 'choosing', question: 'What are the best web design agencies in Brisbane?',
    answer: 'There is no single best, and any agency that publishes a list tends to put itself first. The better test is evidence you can check: a site they built two years ago that is still fast, the name of the person who will build yours, and a plain answer about who owns the domain and code at the end. Search the terms you want to win and see who ranks, then ask the six questions on this page.' },
  { category: 'choosing', question: 'How to choose a web design agency?',
    answer: 'Ask three questions. Who does the actual work, and are they the people in the meeting. What happens if you leave, and do you keep the site, the domain and the accounts. And can they show you a site they built that is still fast today, not a screenshot from launch day. An agency that answers all three plainly is usually a safer choice than one with a nicer portfolio.' },
  { category: 'choosing', question: 'Who are some expert SEO agencies in Brisbane?',
    answer: 'Several established agencies hold page one for Brisbane SEO searches, and a few smaller specialists do well on the consultant and expert terms. We will not rank competitors, because a list we write is self-serving. Look at who ranks for the terms you care about, since that is a live demonstration, then ask each one how they chose keywords and what they refuse to do.' },
  { category: 'choosing', question: 'Do I need a web designer based in Brisbane?',
    answer: 'Not for the work itself. Design, build and SEO run well over video calls, shared designs and written plans, and we keep calls inside Queensland business hours. Note Queensland does not observe daylight saving, so from October to April Brisbane is an hour behind Sydney and Melbourne. What needs local knowledge is the content: your suburbs, your customers and how they search. We gather that in the first workshop.' },
  { category: 'choosing', question: 'What do SEO services actually do?',
    answer: 'Three things, and good agencies do them in this order. They repair the technical faults that stop Google reading your site. They build pages that answer what buyers actually type and connect those to a correct Google Business Profile. Then they earn mentions and links from real sites so Google treats you as credible. Anything that skips to the third step spends your money on the slowest lever.' },

  // ---------- Websites ----------
  { category: 'websites', question: 'Is web design still in demand in 2026?',
    answer: 'Yes. Brisbane records thousands of searches a month for web design, website design and web designers, and AI tools have changed how sites are built more than whether businesses need one. What has changed is the bar: a fast mobile site, clear answers on the page, and content that Google and AI assistants can quote. Template sites that say very little are the ones losing out.' },
  { category: 'websites', question: 'What are the 7 C’s of a website?',
    answer: 'It is a framework for judging a site: context (layout and look), content, community, customisation, communication, connection (links to other sites) and commerce. It is a useful checklist rather than a rule. For a Brisbane service business the practical version is simpler: say what you do in the first screen, prove it, make contact easy on a phone, and load fast.' },
  { category: 'websites', question: 'How do I increase my website speed?',
    answer: 'Start by measuring rather than guessing. Google publishes the pass marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow Australian small business sites fail on one thing, oversized images loading first. Compressing images, serving a modern format, and removing plugins you no longer use fixes most cases.' },
  { category: 'websites', question: 'Why do websites run slowly?',
    answer: 'Usually because the page asks the browser to download more than it needs. Common causes are photos uploaded straight off a phone at full resolution, a page builder that ships code for features you are not using, a stack of tracking scripts, and hosting shared with too many other sites. Server distance matters less than people think for Australian traffic. The other four are worth checking first.' },
  { category: 'websites', question: 'How can I make my website mobile-friendly?',
    answer: 'Test it on a real phone first, not a resized browser window. The things that break most often are text too small to read without zooming, buttons too close together to tap, forms that push the submit button off screen, and images that force sideways scrolling. Fix those four and you have solved most of it. Google indexes the mobile version of your site, so the mobile view is the real one.' },
  { category: 'websites', question: 'What are common website mistakes?',
    answer: 'The most expensive one is not saying what you do in the first screen. After that: no clear way to contact you from a phone, a form that asks for eight fields when three would do, stock photos that could belong to any business in Australia, service pages written in internal job titles rather than what customers type, and no proof that you have done the work before.' },
  { category: 'websites', question: 'What is the 3 second rule in web design?',
    answer: 'It is the idea that a visitor decides whether to stay within about three seconds of the page appearing. Treat it as a habit rather than a law, because the exact number varies by study. The practical version: in the first screen a reader should be able to tell what you sell, whether you cover their area, and how to contact you. If they cannot, the design has failed however it looks.' },
  { category: 'websites', question: 'What is the best website builder for small businesses in Australia?',
    answer: 'There is no single best one, and anyone who names one without asking what you sell is guessing. If you need a simple brochure site you will maintain yourself, a hosted builder is sensible. If you sell products, a commerce platform such as Shopify will serve you better. If you need custom logic, bookings or an integration with software you already run, a builder will fight you and a built site will not.' },
  { category: 'websites', question: 'Can you build an ecommerce website for a Brisbane business?',
    answer: 'Yes. Ecommerce website design is a steady Brisbane search, and online stores and B2B ordering are a big part of our work. We build on Shopify and other platforms, connect stock, shipping and accounting tools such as Xero, and set up GST correctly. See our ecommerce development and Shopify development pages for Australian businesses for how those projects run.' },

  // ---------- SEO ----------
  { category: 'seo', question: 'How long does SEO take to show results in 2026?',
    answer: 'Google itself says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging whether a change helped. In practice, technical repairs and Google Business Profile fixes can move things within weeks. Ranking for competitive Brisbane terms against agencies that have built links for a decade takes quarters. Anyone promising page one in thirty days is selling something.' },
  { category: 'seo', question: 'Does SEO work for small businesses?',
    answer: 'It works well for small businesses with a clear service and a defined area, which describes most Brisbane trade and professional firms. Local search is where a small business can genuinely beat a larger competitor, because proximity and a well-kept Google Business Profile count for a lot. It works badly when the business is too broad to describe, or when nobody is searching for what is being sold.' },
  { category: 'seo', question: 'Is it worth paying for SEO services?',
    answer: 'It is worth it when people are searching for what you sell and your site is not being shown to them. It is not worth it when there is no real search demand, when you cannot wait a few quarters, or when the site already gets traffic that does not convert. We check demand against Google Ads volume before recommending anything, and we will tell you if the numbers do not support it.' },
  { category: 'seo', question: 'How to tell if your SEO is working?',
    answer: 'Look at enquiries first, then at the search terms bringing people in, then at rankings. Search Console shows which queries you appear for and how often people click. If impressions are rising on terms that describe what you sell, the work is landing even before positions move much. Rankings on their own are the weakest signal, because first place on a term nobody searches is worth nothing.' },
  { category: 'seo', question: 'Should I hire an SEO agency or do it myself?',
    answer: 'Do the local basics yourself, because they are genuinely doable and nobody knows your business better. Claim and complete your Google Business Profile, keep your name, address and phone number consistent everywhere, and ask happy customers for reviews. Hire out the parts that need tooling and time: technical audits, content at volume, and earning links from real Queensland sites.' },
  { category: 'seo', question: 'Is SEO still relevant in 2026?',
    answer: 'Yes, and for Brisbane web design searches more than most. When we checked Google Australia on 24 September 2026, there was no AI Overview on "web design company brisbane", "brisbane web designer" or "brisbane web design agency". The ordinary results and the Maps pack still earn the click there. Price-led searches were different: "cheap website design brisbane" did show an AI Overview.' },
  { category: 'seo', question: 'Is SEO replaced by AI?',
    answer: 'No, but it has widened. Google still sends most clicks through ordinary results and the Maps pack on Brisbane service searches. Alongside that, ChatGPT, Perplexity and Google’s AI answers now recommend businesses, and they lean on the same things: clear pages that answer questions, consistent business details, and mentions on other sites. Good SEO work now serves both. See our AI SEO service for the AI side.' },
  { category: 'seo', question: 'Can I do local SEO myself?',
    answer: 'Much of it, yes. The highest-value tasks need no technical skill: claim your Google Business Profile, choose the right primary category, set your service areas honestly, add real photos, and answer reviews. Keep your business name, address and phone number identical across every directory you appear in. The harder parts are technical fixes and earning links, which is where outside help starts to pay for itself.' },
  { category: 'seo', question: 'What is local SEO vs SEO?',
    answer: 'Local SEO is about being found by people near you, and it is judged largely on your Google Business Profile, your distance from the searcher, and consistent business details across the web. General SEO is about ranking pages for a topic regardless of location. A Brisbane plumber needs local SEO first. A software company selling nationally needs the general kind. Most businesses need some of both.' },
  { category: 'seo', question: 'Why is Google not crawling my website?',
    answer: 'The usual causes, in the order worth checking: a robots.txt file blocking the pages, a noindex tag left over from a staging site, pages that only exist after JavaScript loads, no internal links pointing at the page, or a site so new that Google has not reached it. Search Console tells you which one it is in the page indexing report, and that is the fastest place to look.' },

  // ---------- Local ----------
  { category: 'local', question: 'How can I get my business to show up on Google Maps?',
    answer: 'Create a Google Business Profile, then verify it, which is the step most people stall on. Verification is usually by phone, email, video or postcard depending on your business type. Once verified, complete every field, pick the most specific primary category, and add real photos. Maps ranking depends heavily on distance from the searcher, so a Brisbane CBD address and a Logan address will not rank the same for one query.' },
  { category: 'local', question: 'Is a Google Business Profile free?',
    answer: 'Yes, completely. Creating, verifying and managing a Google Business Profile costs nothing, and there is no monthly charge. If someone contacts you claiming your listing will be suspended unless you pay, it is a scam, and those calls are common in Australia. You may choose to pay for Google Ads separately, but that is a different product and it does not affect your free listing.' },
  { category: 'local', question: 'Why is my business not showing up on Google?',
    answer: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guideline breach such as a service-area business showing a home address. It can also be that you are checking from far away, since Maps results shift with the searcher’s location. Check the profile status first, then search for duplicates of your business name, then look at your categories.' },
];
