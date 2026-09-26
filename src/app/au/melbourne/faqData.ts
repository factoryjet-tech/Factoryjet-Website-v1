/**
 * FAQs for /au/melbourne.
 *
 * SOURCING RULE: the questions are People-Also-Ask questions harvested from Google AU
 * (location_code 2036): the original set on 2026-08-25 (pool:
 * pipeline/research/data/au-faq-pool-2026-08-25.json) plus the web design PAA returned on
 * the Melbourne SERPs fetched 2026-09-24 (pipeline/research/data/market-au-2026-09-24/
 * serps.json: "melbourne web designer", "web design company melbourne", "web design agency
 * melbourne", "website design melbourne cost").
 *
 * Job-seeker questions ("how much does a web designer make", "is 40 too old to become a
 * web developer") are deliberately excluded: same keyword, different reader.
 *
 * This array is the ONLY copy. page.tsx renders it AND maps it into FAQPage JSON-LD.
 * Never hand-write a second copy.
 */

export const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a Melbourne web designer' },
  { key: 'cost', label: 'Cost, scope & timing' },
  { key: 'websites', label: 'Website design & build' },
  { key: 'seo', label: 'SEO consulting' },
  { key: 'local', label: 'Google Maps & local search' },
] as const;

export const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ---------- Choosing ----------
  { category: 'choosing', question: 'What are some good web design agencies in Melbourne?',
    answer: 'Melbourne has a deep design market, and for pure brand and visual work there are studios here that do it better than we do. We are a better fit when the site has to perform: load fast, rank, connect to software you already run, and keep working two years later. If you need a beautiful brochure, hire a studio. If you need an asset that brings in enquiries, ask harder engineering questions.' },
  { category: 'choosing', question: 'Who are the best website designers in Australia?',
    answer: 'There is no single best, and any list written by an agency tends to put that agency first. Directories such as Clutch and DesignRush collect reviews, which helps, but the better test is evidence you can check yourself: a live site they built two years ago that is still fast, a named person who will do your work, and a plain answer about who owns the domain and the code when the job ends.' },
  { category: 'choosing', question: 'How to choose a web design agency?',
    answer: 'Ask who does the work, what happens if you leave, and whether they can show you a site they built that is still fast today. The first answer tells you whether the senior person in the meeting stays involved. The second tells you whether you own your own business presence. The third separates people who build for launch day from people who build for the long term.' },
  { category: 'choosing', question: 'How do I find a great website designer in Melbourne?',
    answer: 'Start with sites you admire in your own industry and scroll to the footer, where many credit the builder. Then search the terms you want to win and note who ranks, since that is a live demonstration. Shortlist three, send each the same short brief, and compare how they answer the six questions on this page. How someone scopes your job says more than their portfolio.' },
  { category: 'choosing', question: 'Who is the best SEO agency in Melbourne?',
    answer: 'There is no single best one, and any agency that answers this question with its own name is telling you how it sells. Melbourne has strong specialists: some excel at technical repair, others at content, others at digital PR. The better question is which one fits your problem: a site Google cannot read, a site nobody links to, or a site that ranks and does not convert.' },
  { category: 'choosing', question: 'Who is a reputable SEO consultant in Melbourne?',
    answer: 'Judge on evidence rather than reputation. Ask to see a site they worked on, then check it yourself: run a speed test, search for the terms they say they won, and see whether the pages read like they were written for a person. A reputable consultant will happily give you a client to call. Be wary of anyone who cannot name a single thing they refuse to do.' },
  { category: 'choosing', question: 'What are some reputable SEO agencies in Melbourne?',
    answer: 'We will not publish a ranked list of our competitors, because any list we write is self-serving. Build your own shortlist instead: search the terms you want to win and see who ranks, ask other business owners in your industry who they use, then put the same six questions to each of them. Three honest conversations separate people quickly, and they work on us too.' },
  { category: 'choosing', question: 'What does an SEO consultant do?',
    answer: 'A consultant diagnoses and directs rather than doing everything themselves. They audit the site, work out which problems cost you the most, put them in order, and either fix them or brief whoever will. For a business with an in-house marketer or an existing developer, that is often better value than a full agency retainer, because you are buying judgement rather than hours.' },
  { category: 'choosing', question: 'Do I need a web designer who is based in Melbourne?',
    answer: 'Not for the work itself. Design, build and SEO all run well over video calls, shared designs and written plans, and we keep calls inside Melbourne business hours. What does need local knowledge is the content: your suburbs, your customers and how they search. We gather that in the first workshop. If weekly face-to-face meetings matter to you, a local studio with an office is the better choice.' },

  // ---------- Cost ----------
  { category: 'cost', question: 'How much does it cost to design a website in Melbourne?',
    answer: 'It comes down to how many pages you need, whether the content already exists, and what the site has to connect to. A five page site for a consultancy and a site with bookings and a customer login are different jobs. Any figure quoted before someone has looked at yours is a guess. We review, scope it in writing, and give you a fixed price for that scope before you commit. Our website cost guide lists published Australian market ranges.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How much should I pay a web designer?',
    answer: 'Pay for the outcome you need, not a page count. The things that move the price are custom design versus a template, who writes the content, integrations such as bookings or a CRM, ecommerce, and whether support after launch is included. Compare quotes on the same written scope, and check what is excluded. A lower quote that leaves out content, hosting setup or ownership often costs more by the end.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026 guide)' }] },
  { category: 'cost', question: 'How much does SEO cost in Melbourne?',
    answer: 'It depends on the size of the problem rather than the size of the city. A site with clean structure that needs content and local listings sorted is a smaller job than one where Google cannot crawl half the pages. We audit first, then price repair work as fixed milestones and ongoing content and link work separately, so you can see what each part buys and stop either one. Our SEO cost guide breaks published Australian ranges down by city.',
    links: [{ href: '/blog/seo-cost-australia-2026#seo-cost-by-city', label: 'SEO cost by city' }] },
  { category: 'cost', question: 'Where can I find SEO services in Melbourne on a small budget?',
    answer: 'Low-cost and cheap are different things. Cheap SEO usually means automated link building and mass-produced content, which can leave you worse off after a Google update. A small budget works best on a scope matched to your real problem. If your site has a handful of technical faults and no local listing, that is a modest fix and does not need a large monthly retainer.',
    links: [{ href: '/blog/seo-cost-australia-2026#local-seo-cost', label: 'Local SEO cost in Australia' }] },
  { category: 'cost', question: 'Is there a monthly fee to have a website?',
    answer: 'Yes, though it is usually small. You pay yearly for the domain and monthly or yearly for hosting. If the site takes bookings or payments there is normally a platform or transaction fee too. What you should not pay is a monthly fee purely to keep pages online with an agency that holds the keys. Everything we build is yours outright.',
    links: [{ href: '/blog/website-cost-australia-2026#monthly', label: 'Monthly website running costs' }, { href: '/au/website-maintenance', label: 'Website maintenance plans' }] },
  { category: 'cost', question: 'How long does it typically take to build a website?',
    answer: 'Websites of up to five pages qualify for our 7-day delivery, counted from an approved scope with content ready. Larger sites, ecommerce stores and builds with bookings or integrations take longer, and you get the date in writing at scope. The build is rarely the slow part. Waiting on copy, photos and sign-off is, so we flag early which items sit with you.' },
  { category: 'cost', question: 'How many pages should a good website have?',
    answer: 'Enough to answer what buyers ask and no more. Most Melbourne service businesses need a home page, one page per service they genuinely want enquiries for, an about page with real people on it, proof of past work, and a contact page. Extra pages on topics nobody searches do not help you rank. One strong page beats five thin ones covering the same ground.' },

  // ---------- Websites ----------
  { category: 'websites', question: 'Is web design still in demand in 2026?',
    answer: 'Yes. Melbourne alone records thousands of searches a month for web design, website design and web designers, and AI tools have changed how sites are built more than whether businesses need one. What has shifted is the bar: buyers now expect a fast mobile site, clear answers on the page, and content that AI assistants and Google can quote. Template sites that say little are the ones losing out.' },
  { category: 'websites', question: 'What are the 7 C’s of a website?',
    answer: 'It is a framework for judging a site: context (layout and look), content, community, customisation, communication, connection (links to other sites) and commerce. It is a useful checklist rather than a law. For a Melbourne service business the practical version is simpler: say what you do in the first screen, prove it, make contact easy on a phone, and load fast.' },
  { category: 'websites', question: 'How do I increase my website speed?',
    answer: 'Measure before changing anything. Google publishes the marks it uses: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Most slow Australian small business sites fail on one thing, oversized images loading first. Compressing them, serving a modern format and removing unused plugins fixes the majority of cases.' },
  { category: 'websites', question: 'Why do websites run slowly?',
    answer: 'Because the page asks the browser to download more than it needs. The usual causes are photos uploaded straight off a phone at full size, a page builder shipping code for features you do not use, a stack of tracking scripts, and hosting shared with too many other sites. Server location matters less than people assume for Australian traffic. The other four are worth checking first.' },
  { category: 'websites', question: 'How can I make my website mobile-friendly?',
    answer: 'Test on a real phone, not a resized browser window. What breaks most often is text too small to read without zooming, buttons too close together to tap, forms that push the submit button off screen, and images forcing sideways scrolling. Fix those four and you have handled most of it. Google indexes the mobile version of your site, so the mobile view is the real one.' },
  { category: 'websites', question: 'What are common website mistakes?',
    answer: 'The costliest is not saying what you do in the first screen. After that: no clear way to contact you from a phone, a form asking eight questions when three would do, stock photos that could belong to any business in Australia, service pages written in internal job titles rather than customer language, and no evidence you have done the work before.' },
  { category: 'websites', question: 'What is the best website builder for small businesses in Australia?',
    answer: 'There is no single best one, and anyone naming one without asking what you sell is guessing. For a simple brochure site you will maintain yourself, a hosted builder is sensible. For products, a dedicated commerce platform such as Shopify serves you better. If you need custom logic, bookings or an integration with software you already run, a builder will fight you and a built site will not.' },
  { category: 'websites', question: 'Can you build an ecommerce website for a Melbourne business?',
    answer: 'Yes. Ecommerce website design is one of the larger Melbourne searches outside core web design, and it is a big part of our work. We build on Shopify and other platforms, connect stock, shipping and accounting tools such as Xero, and set up GST correctly. See our ecommerce development and Shopify development pages for Australian businesses for how those projects run.' },

  // ---------- SEO ----------
  { category: 'seo', question: 'How long does SEO take to show results in 2026?',
    answer: 'Google says some changes might take effect in a few hours while others could take several months, and advises waiting a few weeks before judging a change. In practice, technical repairs and Google Business Profile corrections can move things within weeks. Competing for the main Melbourne terms against agencies with a decade of links is a matter of quarters. Anyone promising page one in a month is selling something.' },
  { category: 'seo', question: 'How to tell if your SEO is working?',
    answer: 'Pick two numbers before the work starts and hold whoever does it to those. The best pair is enquiries from organic search, and impressions on a named list of commercial terms. Both live in tools you own, Search Console and Analytics, not in an agency dashboard you lose access to. If a report leads with rankings and buries enquiries, ask why.' },
  { category: 'seo', question: 'Is an SEO agency worth it?',
    answer: 'It is worth it when there is real search demand for what you sell and your site is not meeting it. It is not worth it when nobody is searching, when your margins cannot support the wait, or when the real problem is that the site does not convert the traffic it already gets. We check demand against Google Ads volume before recommending anything.' },
  { category: 'seo', question: 'Should I hire an SEO agency or do it myself?',
    answer: 'Do the local basics yourself, because they are genuinely doable and you know your business best. Claim and complete your Google Business Profile, keep your name, address and phone number consistent, and ask happy customers for reviews. Hire out the work that needs tooling and time: technical audits, content at volume, and earning links from real Victorian sites.' },
  { category: 'seo', question: 'Is SEO still relevant in 2026?',
    answer: 'Yes, and for Melbourne web design searches more than most. When we checked Google Australia on 24 September 2026, there was no AI Overview on "web design company melbourne", "web design agency melbourne" or "melbourne web designer". The ordinary results and the Maps pack still earn the click there. Cost questions were different: those did show an AI Overview.' },
  { category: 'seo', question: 'Why is Google not crawling my website?',
    answer: 'The usual causes, in the order worth checking: a robots.txt file blocking the pages, a noindex tag left over from a staging site, content that only exists after JavaScript runs, no internal links pointing at the page, or a site too new for Google to have reached. Search Console names the cause in its page indexing report, which is the fastest place to look.' },

  // ---------- Local ----------
  { category: 'local', question: 'How can I get my business to show up on Google Maps?',
    answer: 'Create a Google Business Profile and verify it, which is where most people stall. Verification is by phone, email, video or postcard depending on your business type. Once verified, complete every field, choose the most specific primary category, and add real photos. Maps ranking leans heavily on how close the searcher is, so a CBD address and a Dandenong address will not rank the same for one query.' },
  { category: 'local', question: 'Is a Google Business Profile free?',
    answer: 'Completely. Creating, verifying and managing one costs nothing and there is no ongoing charge. If someone rings claiming your listing will be suspended unless you pay, it is a scam, and those calls are common in Australia. You may separately choose to pay for Google Ads, but that is a different product and it has no effect on your free listing.' },
  { category: 'local', question: 'Why is my business not showing up on Google?',
    answer: 'Most often the profile is unverified, duplicates an older listing, or has been suspended for a guideline breach such as a service-area business showing a home address. It can also be that you are searching from far away, since Maps results shift with the searcher’s location. Check the profile status first, then look for duplicate listings, then check your categories.' },
  { category: 'local', question: 'What is local SEO vs SEO?',
    answer: 'They are judged on different things. Local results rank mostly on your Google Business Profile, how close you are to the searcher, and whether your business details agree across the web. Ordinary results rank on the page itself and who links to it. A Richmond dentist gets more from an hour on the Business Profile than an hour of content. A Melbourne software firm selling nationally is the other way around.' },
];
