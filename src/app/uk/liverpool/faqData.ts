// Single source of truth for the Liverpool FAQ.
//
// sections/FAQ.tsx renders this array on the page. page.tsx maps THIS SAME array
// into the FAQPage JSON-LD. Never write a second FAQ array anywhere: if the
// schema and the visible answers drift apart, that is a cloaking problem and it
// costs us trust with both Google and the AI answer engines.
//
// Plain data module, no "use client", so the Server Component page.tsx can
// import it without crossing a client boundary.

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'Where can I find SEO services in Liverpool?',
    a: 'You have three realistic options. Independent Liverpool agencies work out of the Baltic Triangle, the Royal Albert Dock and Old Hall Street, and most of them handle local search well. National agencies sell into Liverpool remotely and tend to suit larger budgets. Freelancers cover single tasks such as content or technical fixes. FactoryJet works remotely with Liverpool and Merseyside businesses, and you deal with the person doing the work.',
  },
  {
    q: 'Is an SEO agency worth it?',
    a: 'It is worth it when people already search for what you sell and you are not showing up. If nobody searches for your product, paid ads or direct sales will beat SEO. Google itself says an SEO can improve a site through content review, technical advice and keyword research, but warns that risks exist and that nobody can guarantee a number one ranking. Judge an agency on enquiries and calls, not on ranking screenshots.',
  },
  {
    q: 'How much does SEO cost in the UK?',
    a: 'UK SEO is usually sold in three shapes, and the shape matters more than the sticker. A one-off audit is a fixed piece of work that ends with a written list of fixes. A fixed-price project covers a defined build, such as a site migration or a set of new pages. A monthly retainer buys ongoing content, technical work and reporting. Cost is driven by how many pages you have, how competitive your terms are, and whether the work includes writing.',
  },
  {
    q: 'What does an SEO agency in Liverpool actually do each month?',
    a: 'Real monthly work is boring and specific: fixing pages that load slowly or break on phones, writing pages that answer the questions your buyers type, tidying your Google Business Profile, keeping your business name, address and phone number identical everywhere it appears online, and reporting on which pages earned calls. If a report only shows rankings and never shows enquiries, ask what changed on the site that month.',
  },
  {
    q: 'How long before SEO works for a Liverpool business?',
    a: 'Expect the first movement in weeks and the commercial payoff in months. Google says some changes can show within hours while others take several months, and it advises waiting a few weeks before judging a change. Local map results often move fastest because Google Business Profile updates are picked up quickly. Competitive city terms such as "seo agency liverpool" take longer because established sites already hold those positions.',
  },
  {
    q: 'Do you work with businesses outside Liverpool city centre?',
    a: 'Yes. We work across the Liverpool City Region, which covers Liverpool, Wirral, Sefton, Knowsley, St Helens and Halton. Search behaves differently across that area: a Wirral customer searching on a phone often sees a different set of businesses than someone standing in the city centre. We set your target area around where your customers actually are, not around a postcode you happen to rent an office in.',
  },
  {
    q: 'What is local SEO and how is it different from normal SEO?',
    a: 'Local SEO is the work that gets you into the map results and the "near me" answers. Normal SEO competes for the ordinary blue links, where your physical location matters less. Local SEO leans on your Google Business Profile, reviews, opening hours, service areas and consistent contact details. Most Liverpool service businesses need both: the map pack brings phone calls, and the ordinary results bring research traffic that converts later.',
  },
  {
    q: 'How does Google decide which Liverpool business ranks in the map pack?',
    a: 'Google names three factors in its own help documentation: relevance, distance and prominence. Relevance is how well your profile matches what someone searched. Distance is how far you are from the searcher or from the place they named. Prominence is how well known your business is, drawn from links, articles, directories and reviews. You cannot change distance, so relevance and prominence are where the work goes.',
  },
  {
    q: 'Do I need a Google Business Profile to rank in Liverpool?',
    a: 'Yes, if you want to appear in the map results or the local pack. Without a verified profile you can still rank in ordinary results, but you are invisible in the block of three businesses shown with a map, which is where a large share of local phone calls start. The profile needs a real category, accurate hours, service areas, photos and a steady flow of genuine reviews.',
  },
  {
    q: 'Will you rewrite my website or work with the one I have?',
    a: 'We work with what you have wherever that is sensible. Most Liverpool sites do not need rebuilding, they need the existing pages fixed: slow images, missing headings, thin service pages, no schema, and no page for half the services the business actually sells. We only recommend a rebuild when the platform itself blocks the fix, for example a theme that cannot produce a fast mobile page.',
  },
  {
    q: 'What is a technical SEO audit and do I need one first?',
    a: 'A technical audit checks the plumbing: whether Google can crawl and index your pages, how fast they load on a phone, whether headings run in order, whether your structured data matches what a visitor sees, and whether old URLs redirect properly. You need one first if traffic dropped without an obvious cause, if you migrated a site recently, or if pages are missing from Google entirely.',
  },
  {
    q: 'How do you measure whether SEO is working?',
    a: 'We track four things and put them in one place. First, enquiries: calls, forms and direct messages that arrived from search. Second, impressions and clicks in Google Search Console by page and by query. Third, position for the terms that actually carry buying intent, not vanity terms. Fourth, technical health: indexed page count, mobile speed and crawl errors. Enquiries are the number that decides whether the work continues.',
  },
  {
    q: 'Can you guarantee first place on Google for "seo agency liverpool"?',
    a: 'No, and you should walk away from anyone who does. Google states plainly that no one can guarantee a number one ranking, and it advises being wary of agencies that claim guaranteed rankings or a special relationship with Google. What can be committed to is the work itself: the pages written, the fixes shipped, the reporting delivered and the dates they land.',
  },
  {
    q: 'What is AI SEO, and does it replace normal SEO?',
    a: 'AI SEO is the work that gets your business quoted inside AI answers, in tools such as ChatGPT, Perplexity, Claude and Google AI Overviews. It does not replace normal SEO. The same foundations matter: clear pages, accurate facts, structured data and a crawlable site. What changes is the format. AI answers pull short, self contained passages, so pages that answer a question directly in the first sentence get quoted more often.',
  },
  {
    q: 'How do I get my Liverpool business mentioned in ChatGPT and Perplexity answers?',
    a: 'Write pages that answer real questions in plain language, put the answer in the first sentence, and back claims with sources a machine can check. Keep your business facts identical across your site, your Google Business Profile and any directory you appear in, because AI tools cross check. Make sure your robots file allows the retrieval crawlers. There is no submission form and no paid placement.',
  },
  {
    q: 'Do you build links, and is link building safe?',
    a: 'We earn mentions rather than buy them. Safe sources for a Liverpool business include the local chamber and trade bodies, supplier and partner pages, local press coverage, sponsorships, and genuine industry directories. Paid link networks and mass guest posting break Google\'s spam policies and can get a site demoted. If a proposal promises hundreds of links a month, that is the type of scheme Google explicitly warns against.',
  },
  {
    q: 'What happens if I stop SEO after six months?',
    a: 'The pages you published stay live and keep earning traffic, so you do not fall off a cliff. What stops is the compounding: no new pages, no new mentions, no technical maintenance. Competitors keep publishing, Google keeps updating, and your positions slowly slide over the following months. Sites with strong technical foundations and a decent body of content hold up far longer than thin sites.',
  },
  {
    q: 'Which Liverpool industries do you work with most?',
    a: 'Four clusters come up repeatedly. Port, freight and logistics operators around the docks and the Freeport zone. Professional services in the commercial district around Old Hall Street and Castle Street. Hospitality, venues and tourism around the waterfront, the Royal Albert Dock and Bramley Moore Dock. Creative, digital and life sciences firms in the Baltic Triangle and the Knowledge Quarter. Each one needs a different mix of local and national search.',
  },
  {
    q: 'Do you handle SEO for e-commerce stores as well as service businesses?',
    a: 'Yes, and the work looks different. A service business needs a strong page per service, a strong page per area, and a Google Business Profile that earns calls. An online store needs clean category pages, product pages that do not duplicate each other, correct product structured data, fast mobile pages and a search friendly way of handling filters. We do both, but we scope them separately.',
  },
  {
    q: 'What do I need to give you to get started?',
    a: 'Four things. Access to your website so we can make changes or hand fixes to your developer. Access to Google Search Console and your analytics so we work from real numbers. Access to your Google Business Profile. And a short list of the services you most want more enquiries for. Google advises giving an agency read access to Search Console first and holding back write access until you trust them.',
  },
  {
    q: 'Who owns the content and the reporting if we part ways?',
    a: 'You do. Pages, copy, images, schema and tracking configuration belong to your business and stay on your site. Analytics and Search Console properties stay in your Google account, with our access removed on request. Nothing sits behind a portal that switches off when the invoice stops. Ask any agency this question before you sign, because content held on an agency subdomain is a real and common trap.',
  },
  {
    q: 'How is your work different from a large national SEO agency?',
    a: 'Two practical differences. You talk to the person doing the work rather than an account manager relaying messages. And the scope is written down as specific deliverables with dates, rather than a monthly allocation of hours you cannot inspect. The trade off is honest: a large agency can throw more people at a very large site, and for a national enterprise rollout that can be the better choice.',
  },
  {
    q: 'Do you offer a one-off SEO audit instead of a monthly retainer?',
    a: 'Yes. A one-off audit suits businesses that have an in house marketer or a developer who can carry out fixes. You get a written list of problems ranked by impact, the exact pages affected, and what to change on each. There is no obligation to continue afterwards. Businesses without internal capacity usually get more from ongoing work, because an audit that nobody implements changes nothing.',
  },
  {
    q: 'How often will I hear from you?',
    a: 'Monthly reporting as standard, with a short written summary of what shipped, what moved and what is next. Anything urgent, such as a page dropping out of the index or a sudden traffic fall, is raised the day we see it rather than held for the report. You also get a shared document listing every change made to your site, with dates, so nothing is a mystery later.',
  },
  {
    q: 'What is schema markup and does my Liverpool business need it?',
    a: 'Schema markup is a block of code that tells search engines what your page is about in a format they read directly: your business type, address, opening hours, services, reviews and FAQ answers. Google publishes a LocalBusiness format specifically for this. It does not push you up the rankings on its own, but it makes you eligible for richer results and gives AI tools clean facts to quote.',
  },
  {
    q: 'My traffic dropped suddenly. Can you find out why?',
    a: 'Usually, yes. The common causes are all checkable: a Google core update, pages accidentally blocked from indexing, a site migration that lost its redirects, a manual action shown in Search Console, or a plugin or theme change that slowed the site badly. We start with Search Console history and the site itself, and tell you which of those it is before recommending any spend.',
  },
];
