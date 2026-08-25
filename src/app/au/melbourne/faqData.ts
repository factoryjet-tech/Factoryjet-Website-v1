/**
 * FAQs for /au/melbourne.
 *
 * SOURCING RULE: every question is a real People-Also-Ask question harvested from Google
 * AU (location_code 2036) on 2026-08-25. Pool:
 * pipeline/research/data/au-faq-pool-2026-08-25.json. Questions marked [MEL] came back on
 * a Melbourne-localised query.
 *
 * WHY THIS SET DIFFERS FROM BRISBANE: the Melbourne PAA is dominated by vendor-selection
 * questions ("who is the best SEO agency in Melbourne", "what are some reputable SEO
 * agencies in Melbourne", "who are some SEO experts in Melbourne"), where Brisbane's is
 * dominated by cost questions. The pages answer the market they are actually in rather
 * than sharing one list, which is the difference between a city page and a doorway page.
 *
 * This array is the ONLY copy. sections/FAQ.tsx renders it, page.tsx maps it into FAQPage
 * JSON-LD. Never hand-write a second copy.
 */

export interface Faq {
  q: string;
  a: string;
  topic: 'Choosing someone' | 'Cost and scope' | 'Websites' | 'SEO' | 'Google and local search';
}

export const FAQS: Faq[] = [
  // ---------- Choosing someone (the dominant Melbourne intent) ----------
  {
    q: 'Who is the best SEO agency in Melbourne?', // [MEL]
    topic: 'Choosing someone',
    a: 'There is no single best one, and any agency that answers this question with its own name is telling you something about how it sells. Melbourne has strong specialists in different areas: some are excellent at technical repair, others at content, others at digital PR. The right question is which one is best for your situation, which depends on whether your problem is a site Google cannot read, a site nobody links to, or a site that ranks and does not convert.',
  },
  {
    q: 'Who is a reputable SEO consultant in Melbourne?', // [MEL]
    topic: 'Choosing someone',
    a: 'Judge on evidence rather than reputation. Ask to see a site they worked on, then check it yourself: run a speed test, search for the terms they say they won, and look at whether the pages read like they were written for a person. A reputable consultant will happily give you a client to call. Be wary of anyone who cannot name a single thing they refuse to do.',
  },
  {
    q: 'What are some reputable SEO agencies in Melbourne?', // [MEL]
    topic: 'Choosing someone',
    a: 'We will not publish a ranked list of our competitors, because any list we write is self-serving and you should not trust it. What we will say is how to build your own shortlist: search the terms you want to win and see who ranks, ask other business owners in your industry who they use, then put the same six questions to each of them. The answers separate people quickly.',
  },
  {
    q: 'Where can I find affordable SEO services in Melbourne?', // [MEL]
    topic: 'Choosing someone',
    a: 'Affordable and cheap are different things, and the difference matters. Cheap SEO usually means automated link building and mass-produced content, which can leave you worse off than doing nothing after a Google update. Affordable means a scope matched to your actual problem. If your site has a handful of technical faults and no local listing, that is genuinely inexpensive to fix and does not need a large retainer.',
  },
  {
    q: 'What are some good web design agencies in Melbourne?', // [MEL]
    topic: 'Choosing someone',
    a: 'Melbourne has a deep design market, and for pure brand and visual work there are studios here that do it better than we do. We are a better fit when the site has to perform: load fast, rank, integrate with software you already run, and keep working two years later. Look at what you actually need. If it is a beautiful brochure, hire a studio. If it is an asset that generates enquiries, ask harder engineering questions.',
  },
  {
    q: 'How to choose a web design agency?',
    topic: 'Choosing someone',
    a: 'Ask who does the work, what happens if you leave, and whether they can show you a site they built that is still fast today. Those three answers tell you most of what you need. The first uncovers whether the senior person in the meeting will still be involved. The second tells you whether you own your own business presence. The third separates people who build for launch day from people who build for the long term.',
  },
  {
    q: 'What does an SEO consultant do?',
    topic: 'Choosing someone',
    a: 'A consultant diagnoses and directs rather than doing everything themselves. They audit the site, work out which problems are costing you the most, put them in an order, and either fix them or brief whoever will. For a business with an in-house marketer or an existing developer, that is often better value than a full agency retainer, because you are buying judgement rather than hours.',
  },

  // ---------- Cost and scope ----------
  {
    q: 'How much does SEO cost in Melbourne?', // [MEL]
    topic: 'Cost and scope',
    a: 'It depends on the size of the problem rather than the size of the city. A site with clean structure that needs content and local listings sorted is a smaller job than one where Google cannot crawl half the pages. We audit first, then price repair work as fixed milestones and ongoing content and link work separately, so you can see what each part buys and stop either one.',
  },
  {
    q: 'How much does it cost to design a website in Melbourne?', // [MEL]
    topic: 'Cost and scope',
    a: 'It comes down to how many pages you need, whether the content already exists, and what the site has to connect to. A five page site for a consultancy and a site with a booking system and a customer login are different pieces of work. Any figure quoted before someone has looked at yours is a guess. We review, scope it in writing, and price that scope before you commit.',
  },
  {
    q: 'Is there a monthly fee to have a website?',
    topic: 'Cost and scope',
    a: 'Yes, though it is usually small. You pay annually for the domain and monthly or annually for hosting. If the site takes bookings or payments there is normally a platform or transaction fee too. What you should not be paying is a monthly fee purely to keep pages online with an agency that holds the keys. Our work is yours outright.',
  },
  {
    q: 'How many pages should a good website have?',
    topic: 'Cost and scope',
    a: 'Enough to answer what buyers ask and no more. Most Melbourne service businesses need a home page, one page per service they genuinely want enquiries for, an about page with real people on it, proof of past work, and a contact page. Extra pages on topics nobody searches do not help you rank. One strong page beats five thin ones covering the same ground.',
  },

  // ---------- Websites ----------
  {
    q: 'How long does it typically take to build a website?',
    topic: 'Websites',
    a: 'A small business site is usually a few weeks from approved scope to launch. The build is rarely the slow part. Waiting on content, photography and sign-off is. If your copy, logo and images are ready when we start, the timeline shortens a lot. We flag at scope which items sit with you, because those are the ones that move the date.',
  },
  {
    q: 'How do I increase my website speed?',
    topic: 'Websites',
    a: 'Measure before changing anything. Google publishes the marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow Australian small business sites fail on one thing, oversized images loading before anything else. Compressing them, serving a modern format and removing unused plugins fixes the majority of cases.',
  },
  {
    q: 'Why do websites run slowly?',
    topic: 'Websites',
    a: 'Because the page asks the browser to download more than it needs. The usual causes are photographs uploaded straight off a phone at full size, a page builder shipping code for features you do not use, a stack of tracking scripts, and hosting shared with too many other sites. Server location matters less than people assume for Australian traffic. The other four are worth checking first.',
  },
  {
    q: 'How can I make my website mobile-friendly?',
    topic: 'Websites',
    a: 'Test on a real phone, not a resized browser window. What breaks most often is text too small to read without zooming, buttons too close together to tap, forms that push submit off screen, and images forcing sideways scrolling. Fix those four and you have handled most of it. Google indexes the mobile version of your site, so the mobile view is the real one.',
  },
  {
    q: 'What are common website mistakes?',
    topic: 'Websites',
    a: 'The costliest is not saying what you do in the first screen. After that: no phone number visible to a phone buyer, a contact form asking eight questions when three would do, stock photography that could belong to any business in Australia, service pages written in internal job titles rather than customer language, and no evidence you have done the work before.',
  },
  {
    q: 'What is the best website builder for small businesses in Australia?',
    topic: 'Websites',
    a: 'There is no single best one, and anyone naming one without asking what you sell is guessing. For a simple brochure site you will maintain yourself, a hosted builder is sensible. For products, a dedicated commerce platform serves you better. If you need custom logic, bookings, or an integration with software you already run, a builder will fight you and a built site will not.',
  },

  // ---------- SEO ----------
  {
    q: 'How long does SEO take to show results in 2026?',
    topic: 'SEO',
    a: 'Google says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging a change. In practice, technical repairs and Google Business Profile corrections can move things within weeks. Competing for the main Melbourne terms against agencies with a decade of links is a matter of quarters. Anyone promising page one in a month is selling something.',
  },
  {
    q: 'How to tell if your SEO is working?',
    topic: 'SEO',
    a: 'Pick two numbers before the work starts and hold whoever does it to those. The best pair is enquiries attributed to organic search, and impressions on a named list of commercial terms. Both live in tools you own, Search Console and Analytics, not in an agency dashboard you lose access to. If a report leads with rankings and buries enquiries, ask why. Positions are the easiest number to make look good and the least connected to revenue.',
  },
  {
    q: 'Is an SEO agency worth it?',
    topic: 'SEO',
    a: 'It is worth it when there is real search demand for what you sell and your site is not currently meeting it. It is not worth it when nobody is searching, when your margins cannot support the wait, or when the actual problem is that the site does not convert the traffic it already gets. We check demand against Google Ads volume before recommending anything, and we have told Australian businesses not to bother when the numbers did not support it.',
  },
  {
    q: 'Should I hire an SEO agency or do it myself?',
    topic: 'SEO',
    a: 'Do the local basics yourself, because they are genuinely doable and you know your business best. Claim and complete your Google Business Profile, keep your name, address and phone number consistent, and ask happy customers for reviews. Hire out the work that needs tooling and time: technical audits, content at volume, and earning links from real Victorian sites. That split usually gets the most for the money.',
  },
  {
    q: 'Is SEO still relevant in 2026?',
    topic: 'SEO',
    a: 'Yes, and in Australia more so than in the United States at the moment. When we measured Australian search results in August 2026, AI Overviews appeared on only a small share of web design and local SEO queries, while they dominate the American equivalents. Ranking in the ordinary Melbourne results still earns the click rather than losing it to a summary sitting above them.',
  },
  {
    q: 'Why is Google not crawling my website?',
    topic: 'SEO',
    a: 'The usual causes, worth checking in this order: a robots.txt file blocking the pages, a noindex tag left over from a staging site, content that only exists after JavaScript runs, no internal links pointing at the page, or a site too new for Google to have reached. Search Console names the specific cause under its page indexing report, which is the fastest place to look.',
  },

  // ---------- Google and local search ----------
  {
    q: 'How can I get my business to show up on Google Maps?',
    topic: 'Google and local search',
    a: 'Create a Google Business Profile and verify it, which is where most people stall. Verification is by phone, email, video or postcard depending on your business type. Once verified, complete every field, choose the most specific primary category available, and add real photographs. Maps ranking leans heavily on how close the searcher is, so a CBD address and a Dandenong address will not rank the same for one query.',
  },
  {
    q: 'Is a Google Business Profile free?',
    topic: 'Google and local search',
    a: 'Completely. Creating, verifying and managing one costs nothing and there is no ongoing charge. If someone rings claiming your listing will be suspended unless you pay, it is a scam, and those calls are common in Australia. You may separately choose to pay for Google Ads, but that is a different product and it has no effect on your free listing.',
  },
  {
    q: 'Why is my business not showing up on Google?',
    topic: 'Google and local search',
    a: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guideline breach such as a service-area business displaying a home address. It can also be that you are searching from somewhere far from the business, since Maps results shift with searcher location. Check profile status first, then look for duplicate listings, then check your categories.',
  },
  {
    q: 'What is local SEO vs SEO?',
    topic: 'Google and local search',
    a: 'They are judged on different things. Local results are ranked mostly on your Google Business Profile, how close you are to whoever is searching, and whether your business details agree across the web. Ordinary results are ranked on the page itself and on who links to it. The practical difference is where your effort goes: a Richmond dentist gets more from an hour on the Business Profile than from an hour of content, and for a Melbourne software firm selling Australia-wide it is the other way around.',
  },
];
