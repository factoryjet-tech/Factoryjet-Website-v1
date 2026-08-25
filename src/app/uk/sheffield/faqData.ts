// Shared FAQ source for Sheffield, imported by both SheffieldPage.tsx (the visible
// accordion) and layout.tsx (the FAQPage JSON-LD) so the two cannot drift apart.
// Plain data module, no "use client": safe for a Server Component (layout.tsx)
// to import without crossing a client/server boundary.
//
// House rules for editing this file:
//   - answer first, then the detail. No warm up sentences.
//   - 40 to 100 words per answer.
//   - no price figures of any kind. Describe the shape of an engagement in words.
//   - plain UK English. Explain any jargon the first time it appears.

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What does an SEO agency do?",
    a: "An SEO agency gets your business found in search results without paying for ads. The work has four parts: fixing the technical side of your site so search engines can read it, choosing the search terms your customers actually type, writing and structuring pages that answer those searches, and earning mentions and links from other websites. A good agency also reports what it changed, what that moved, and what is queued next.",
  },
  {
    q: "How much does SEO cost in the UK?",
    a: "It depends on how competitive your search terms are and how much repair your current site needs first. We quote in one of three shapes: a one off audit if you only want to know what is wrong, fixed price milestones when there is a defined body of work, or a monthly retainer when you want continuing content and outreach. You get the full figure in writing after a free discovery call, before any work starts.",
  },
  {
    q: "What are the best SEO agencies in the UK?",
    a: "There is no single best agency, so judge on evidence rather than on lists. Ask for three things: live client sites you can check yourself in Google, a written report showing what was changed and what happened afterwards, and a plain answer on who does the day to day work. Walk away from anyone promising a number one ranking, refusing to name their link sources, or requiring a long lock in. Those three tests filter out most of the market.",
  },
  {
    q: "How long does SEO take to work in Sheffield?",
    a: "Expect first movement at around three months and a meaningful change at six to nine. Technical fixes and Google Business Profile work can land faster, sometimes within weeks, because they remove problems rather than build reputation. Competitive Sheffield terms take longer because you are catching up with sites that have been earning links for years. We report every month so you can see the trend well before the rankings arrive.",
  },
  {
    q: "What is local SEO, and how is it different from normal SEO?",
    a: "Local SEO is the work that puts you in the map results and in searches that contain a place name. It leans on your Google Business Profile, on your name, address and phone number being identical everywhere they appear online, on reviews, and on pages that honestly describe the areas you cover. Normal SEO targets the standard list of blue links and can rank you anywhere. Most Sheffield service businesses need both, because customers use both.",
  },
  {
    q: "Will my business show up in the Google map pack for Sheffield?",
    a: "That depends on three things Google states publicly: relevance, distance and prominence. Relevance is how well your Business Profile matches the search. Distance is how far you are from the person searching. Prominence is how well known you are, which Google says is influenced by how many websites link to you and how many reviews you have. We can work on relevance and prominence. Distance is fixed by your address.",
  },
  {
    q: "How do you choose the keywords for a Sheffield business?",
    a: "We start from what you actually sell, then check real search demand for it rather than guessing. Every candidate term gets three tests: does anyone in Sheffield search it, does the wording show buying intent rather than curiosity, and can we realistically outrank the sites already sitting there. Terms that fail the third test become supporting articles instead of primary targets. You see the list and can veto any of it before a word is written.",
  },
  {
    q: "Do I need a new website to do SEO, or can you work with my current one?",
    a: "We can usually work with the site you already have. The audit tells us whether the platform is genuinely holding you back. WordPress, Shopify and Squarespace sites can all rank perfectly well, so we fix far more often than we rebuild. A rebuild only earns its place when the site is slow in a way the platform cannot fix, when the page structure blocks the content you need, or when you cannot edit anything without paying someone.",
  },
  {
    q: "How does site speed affect my Sheffield rankings?",
    a: "Speed is part of how Google judges page experience, and it decides whether visitors stay long enough to enquire. Google publishes three targets it calls Core Web Vitals: Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and a Cumulative Layout Shift score under 0.1. We build to those numbers and test every page before launch. Speed alone will not beat a stronger competitor, but being slow will hold you back.",
  },
  {
    q: "Do you buy backlinks or use link networks?",
    a: "No. Bought links and private blog networks break Google's spam policies and trade a short term rise for a long term risk to the whole site. We earn mentions instead: local press and business groups, supplier and partner pages, trade directories that real people actually use, and content worth citing. It is slower. It also does not evaporate the next time Google runs a spam update, which is the entire point.",
  },
  {
    q: "Can you help me rank in Rotherham, Barnsley and Chesterfield too?",
    a: "Yes, with one condition. Each town needs a genuine page about serving that town, not the Sheffield page with the name swapped. Google has spent years demoting thin duplicate location pages, and a batch of them can drag down the pages that were working. So we build them only where you really trade and can back it up with jobs, photographs and reviews from that area. Two honest town pages beat twenty copied ones.",
  },
  {
    q: "What reports do I get, and how often?",
    a: "You get a monthly report plus direct access to the data behind it. It covers rankings for your target terms, clicks and impressions from Google Search Console, calls and form fills from the site, everything we changed that month, and what is queued for the next one. We do not report impressions on their own, because impressions can climb while enquiries fall and that reads as progress when it is not.",
  },
  {
    q: "How do you measure whether the SEO is actually working?",
    a: "Enquiries first, rankings second. We track calls, form submissions and requests for directions, then work backwards to the searches that produced them. Rankings and Search Console clicks are the early indicators that tell us the trend is right before enquiries arrive. If rankings rise and enquiries do not, that is a content or conversion problem, and we will say so rather than show you a rising chart and call it a win.",
  },
  {
    q: "What happens if I stop the SEO work?",
    a: "Your rankings do not vanish, they drift. Technical fixes, page structure and published content stay in place and keep earning. What stops is new content, new mentions and the monthly maintenance that keeps you ahead of competitors who are still investing. Most sites hold their position for a few months and then slip as rivals publish. You keep everything we built, including the site code and the written handover.",
  },
  {
    q: "Do you get my business into ChatGPT and other AI answers?",
    a: "We optimise for it and we measure it, but nobody can promise it. AI answer engines quote pages they can read, understand and trust, so the work overlaps heavily with ordinary SEO: clear headings, a direct answer near the top of the page, structured data, and being mentioned on other websites. We check whether your business is named for your key questions and report exactly what we find, including when the answer is no.",
  },
  {
    q: "Do you work with businesses outside Sheffield city centre?",
    a: "Yes. We cover Sheffield and wider South Yorkshire, including Ecclesall Road, Kelham Island, Hillsborough, Crookes, Attercliffe, Meadowhall, Dore and Chapeltown, as well as Rotherham, Barnsley and Doncaster. Your position on a map matters less than your position in your customers' searches. What changes between areas is the wording people use and which rivals already rank there, so keyword and Business Profile work is set up per area rather than copied across.",
  },
  {
    q: "How do you deliver a website in 7 days?",
    a: "We built a production system for it. Our own tooling drafts the first pass of copy and layout, then our designers refine and customise from there. Your input is gathered in a 30 minute brief call on day one. By day three you are looking at a working prototype. Days four to six are your revisions and the final polish. Day seven is go live. Nothing is skipped. The waiting is what disappears.",
  },
  {
    q: "Is this a template or a custom website?",
    a: "Every FactoryJet site is custom built. We do not start from WordPress themes or Squarespace templates. Your site is coded in Next.js, which means pages are rendered before they reach the browser, so they load quickly and search engines can read them without waiting for scripts to run. The design is drawn for your business, so it will not look like the other sites in your sector.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. We handle the domain, the hosting, the SSL certificate, and the Google Analytics and Search Console setup, and we can write the copy if you would rather we did. After launch you get a short written guide and a 30 minute training session covering how to change text, swap images and add a page. If you would prefer never to touch it, we can handle updates for you instead.",
  },
  {
    q: "What is the difference between the Business and E-Commerce builds?",
    a: "Business is for service companies and trades that need enquiries: service pages, area pages, clear contact routes and lead capture. E-Commerce adds a full shop on Shopify or WooCommerce, with product pages, a payment gateway, delivery options and product structured data so items can appear in Google's shopping results. If you sell online you need the second one. If you quote jobs, the first one does the job.",
  },
  {
    q: "Can you add an AI chatbot to my website?",
    a: "Yes. The chatbot answers common questions, qualifies enquiries and captures contact details outside office hours, then passes the conversation to you by email. It is trained on your own pages rather than general knowledge, so it will say it does not know instead of inventing an answer. It earns its keep fastest for trades and service businesses that get evening and weekend enquiries nobody is awake to answer.",
  },
  {
    q: "Are there any contracts or monthly fees?",
    a: "No mandatory contract for a build. You pay once for the website. Hosting is a small ongoing cost you pay the provider directly, and we set that up for you. Ongoing SEO is a monthly retainer by nature, because the work itself is monthly, but it runs on a rolling basis and you can stop it with notice. Maintenance retainers are optional and are never a condition of the build.",
  },
  {
    q: "What happens if I need changes after launch?",
    a: "Every build includes 30 days of post launch support at no extra cost, covering fixes, small changes and questions. After that you have three routes: do it yourself using the guide and training we hand over, send us one off jobs quoted per task, or put a maintenance retainer in place for priority turnaround. Choosing the first route costs you nothing and we will still answer a quick question.",
  },
  {
    q: "Who actually does the work on my account?",
    a: "A named senior person, not a rotating pool of juniors. You get their email address and they join the monthly call. Drafting and data collection are assisted by our own tooling, which is why turnaround is quick, but a human reviews everything before it reaches your site. If you want to know who wrote a specific page or made a specific change, the monthly report tells you.",
  },
];
