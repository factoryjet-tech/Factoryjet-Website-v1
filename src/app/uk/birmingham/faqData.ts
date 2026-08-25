// Shared FAQ source for Birmingham. Imported by sections/FAQ.tsx (visible render plus
// microdata) and by page.tsx (FAQPage JSON-LD). Both read THIS array. Never hand-copy a
// second version of these questions next to a <script type="application/ld+json"> block:
// when the two drift, the schema describes a page that does not exist, which is a
// cloaking problem, not a formatting one.
//
// Plain data module, no "use client": safe for the Server Component page.tsx to import.
//
// House rule: no price figures. Engagement shape is described in words.
export const FAQS = [
  {
    q: "What does an SEO agency in Birmingham actually do?",
    a: "Three jobs. First, we fix the technical faults that stop Google reading your site properly, things like slow pages, broken links and missing page titles. Second, we build pages that answer what Birmingham buyers actually type in, and we make your Google Business Profile match. Third, we earn mentions and links from real West Midlands sites so Google treats you as a serious local option rather than a new name.",
  },
  {
    q: "How much does SEO cost in Birmingham?",
    a: "It depends on the shape of the work, not on a menu. Most Birmingham businesses start with a one-off audit, which is a fixed price for a fixed piece of work. If the audit finds a lot to repair, we quote fixed-price milestones so you pay per finished job. Ongoing content and link work runs as a monthly retainer. You get the number in writing before anything starts, and we do not charge for the first review.",
  },
  {
    q: "How long before I see results from SEO?",
    a: "Google itself says some changes take a few hours and others take several months, and that you should wait a few weeks before judging whether a change helped. In practice, technical fixes and Google Business Profile work often move local results inside about a month. Competitive Birmingham search terms usually take longer, often two to three quarters. Anyone promising page one in thirty days is guessing.",
  },
  {
    q: "Do I need a Birmingham SEO agency, or will any UK agency do?",
    a: "For local search, local knowledge matters more than a local postcode. What matters is whether the agency knows which Birmingham directories, chambers, trade bodies and news sites actually pass weight, how the map pack behaves across the city centre and the suburbs, and which nearby towns your customers really search from. We work remotely and meet in person when it helps. You are not paying for a city centre office.",
  },
  {
    q: "We come up when people search our own name, but nothing else. Why?",
    a: "That is the most common pattern we see. Ranking for your own name proves Google has indexed you, nothing more. Ranking for what people search before they know you exist, such as your service plus Birmingham, needs three things you probably do not have yet: a page that is clearly about that service, wording that matches how buyers phrase it, and enough outside signals that Google trusts you over the firms already there.",
  },
  {
    q: "What is local SEO and how is it different from normal SEO?",
    a: "Local SEO targets the map results and the nearby-me searches. It leans on your Google Business Profile, your address details being identical everywhere they appear online, reviews, and pages that genuinely serve one place. Normal SEO targets the ordinary blue links below, which are decided more by content depth and links. Most Birmingham service businesses need both, because the map pack and the blue links sit on the same screen.",
  },
  {
    q: "My Google listing shows the wrong address or the wrong opening hours. Can you fix that?",
    a: "Yes, and it should be the first thing done. We take ownership of the Business Profile if you have lost access, correct the name, address, phone number, category and hours, then chase down the wrong versions sitting in old directories. Mismatched details across the web are one of the quietest reasons a Birmingham business is missing from the map pack while a smaller rival sits in it.",
  },
  {
    q: "We work out of a co-working space in the city centre. Can we still have a Google listing?",
    a: "Only under strict conditions. Google's own guidelines say a business cannot list an office in a co-working space unless that office has clear signage, receives customers there during business hours, and is staffed during business hours by your own people. Plenty of Birmingham firms in shared buildings do not meet that bar. If you do not, we set you up as a service area business instead, which is legitimate and still ranks.",
  },
  {
    q: "Will you make us rank number one?",
    a: "No, and treat anyone who promises it with suspicion. Nobody controls Google's results. What we control is whether your site is technically sound, whether your pages answer the question better than the ones currently ranking, and whether real sites reference you. We tell you which terms look winnable given who is already there, and which ones would take years. Then you decide where the effort goes.",
  },
  {
    q: "How do you decide which search terms to go after for a Birmingham business?",
    a: "We check three things for every term: how many people search it, what it is worth if they convert, and how strong the sites currently ranking are. A term with big numbers is useless if the top ten are national brands with thousands of links. A quieter term you can actually win, like a specific service plus a Birmingham district, often brings more enquiries in the first year.",
  },
  {
    q: "We serve the whole West Midlands, not just Birmingham. Does that change things?",
    a: "It changes the page structure. One page cannot rank well for Birmingham, Solihull, Wolverhampton and Coventry at once, and forcing it usually means it ranks for none of them. We build one strong Birmingham page, then add genuinely different pages for the towns worth the effort, each with its own local detail. Thin copies of the same page with the town name swapped get filtered out.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Less than you think. Access to your website, your Google Analytics and Search Console accounts, and your Google Business Profile. A short call so we understand what a good enquiry looks like for you and what your sales team can actually handle. If you do not have Analytics or Search Console set up, we set them up. You do not need a brief, a strategy document or a content plan.",
  },
  {
    q: "Can you do SEO without rebuilding our website?",
    a: "In most cases yes. We work with WordPress, Shopify, Wix, Squarespace and custom builds. A rebuild is only worth raising when the platform itself blocks the work, for example when pages cannot have their own titles, when the site is not readable on a phone, or when it is so slow that no amount of content fixes it. We tell you plainly which of those apply before suggesting anything.",
  },
  {
    q: "Our website is slow. Does that hurt our ranking?",
    a: "It hurts your enquiries first and your ranking second. Google publishes the pass marks it uses: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Missing them is rarely the single reason you are not ranking, but a slow page loses people who arrived ready to buy, which is the more expensive problem.",
  },
  {
    q: "What is AI search and do I need to worry about it in Birmingham?",
    a: "AI search is when someone asks ChatGPT, Google's AI answers or Perplexity for a recommendation instead of scrolling a results page. They get a short answer naming a few businesses. Being named there is a different job from ranking: it rewards clear, factual, well structured pages that state what you do, where, and for whom. It is worth doing now because very few Birmingham firms have bothered.",
  },
  {
    q: "How do I know the SEO work is actually happening?",
    a: "You get a short monthly report that leads with enquiries, not rankings. It lists what was changed, what was published, what links were earned, and what moved in Search Console. Every claim links to something you can open yourself. If a month was quiet, the report says so. Long dashboards full of graphs that never mention a phone call are how agencies hide a lack of work.",
  },
  {
    q: "Do you write the content or do we?",
    a: "We write it, you correct it. Our writers can research your market, but they cannot know why your Birmingham customers actually chose you, or the objection your sales team hears every week. So we draft, you mark it up, we finish. For technical trades and regulated work, we usually ask for one short call with whoever knows the subject best. That call is worth more than a week of desk research.",
  },
  {
    q: "Are you going to buy links for us?",
    a: "No. Paid link networks are against Google's rules and the damage lands on your site, not on the agency that sold them. We earn mentions the slow way: local press and trade titles, genuine supplier and partner pages, Birmingham business groups and chambers, case studies your clients will happily host, and data worth quoting. It is slower than buying, and it does not evaporate at the next update.",
  },
  {
    q: "We tried an SEO company before and it did nothing. How is this different?",
    a: "Usually one of three things went wrong: the work was blog posts nobody searched for, the technical faults were never fixed, or the terms chosen were unwinnable from day one. So we start with the audit and show you which of the three it was, using your own Search Console data. If the honest answer is that your previous agency did fine and the market is simply hard, we say that too.",
  },
  {
    q: "Can you help a trade business, like a plumber or a builder in Birmingham?",
    a: "Yes, and trades are often the fastest wins because the searches are urgent and local. The work is usually less about writing and more about the map pack: a properly set up Business Profile, correct service areas across Birmingham and the surrounding boroughs, steady reviews, photographs of real jobs, and one solid page per service rather than one page listing everything you do.",
  },
  {
    q: "We are a manufacturer in the Black Country. Is SEO worth it for us?",
    a: "Often more than for consumer businesses, because one enquiry can be worth a year of a retailer's traffic. Industrial buyers search in specifications, not slogans, so the wins come from pages built around materials, tolerances, capabilities, certifications and lead times. Volumes look small on paper. What matters is that the handful of people searching are purchasing managers with a live requirement.",
  },
  {
    q: "Do we need a separate page for every Birmingham suburb?",
    a: "Almost never. Twenty near identical pages for Edgbaston, Harborne, Moseley and the rest usually get ignored by Google and confuse your own visitors. Build one strong Birmingham page. Add a suburb page only where there is genuinely different content to write, for example a different service mix, a real local case study, or a location you actually operate from.",
  },
  {
    q: "What happens if we stop the SEO work?",
    a: "Rankings do not vanish overnight, but they drift. Technical fixes and published pages stay working for you. What stops is the new content, the new links, and the maintenance that keeps pages matching what people search this year. Sites that pause typically hold position for a few months, then slip as competitors keep publishing. Pausing is a reasonable decision. Being surprised by the slide six months later is not.",
  },
  {
    q: "Who will actually be doing the work?",
    a: "The person who scopes your project is the person who runs it. There is no handover to a junior account manager after the sale, because there is no account management layer to hand over to. You get direct contact with the people making changes to your site. If we need a specialist, for example for a complicated migration, we tell you who they are and what they are doing.",
  },
  {
    q: "How do we get out if it is not working?",
    a: "Monthly work runs month to month after any agreed initial period, and you can stop with notice in writing. Whatever we built stays yours: the pages, the content, the technical fixes, and full admin access to every account. We do not hold your Google Business Profile, your Analytics, your Search Console or your website hostage. Ask any agency that question before you sign, not after.",
  },
  {
    q: "Do you work with our existing web developer or marketing person?",
    a: "Yes, and it is usually cheaper for you when we do. We can hand your developer a prioritised list of fixes with the reasoning attached, rather than touching the site ourselves. For in-house marketers we tend to take the technical and link work and leave the content to the person who already knows your customers. Say which parts you want to keep and we scope around them.",
  },
];
