import React from 'react';
import type { BlogPost } from '../data.types';

/*
 * Small business web design in Australia (2026). Built 2026-09-26, rewritten 2026-10-21, refreshed 2026-11-16.
 *
 * 16 NOV 2026 REFRESH, WHY: Search Console showed the post rising to position 5.5 to 7.5 for "small business web
 * design" (AU) between 27 Oct and 9 Nov, earning 0 clicks there, then sliding to 13.5 by 14 Nov. The AU page 1
 * (DataForSEO, 16 Nov) is mixed: agency service pages with a price in the title (Website Adelaide, SME Digital,
 * Localsearch "From $299/mo", Simple Pages, Launch North), how-to guides (ANZ, business.gov.au, Quikclicks,
 * In the Willow) and two listicles (this post, Creative Baguette). Google's AI Overview lists the pages a small
 * business site needs. This version adds what those pages cover and we did not: the pages a site needs, the four
 * ways to get one (incl. subscription websites), sourced timelines, a step list, a numbered question list, and
 * four more companies that rank on page 1 (Adelaide, Sydney, Perth, Australia-wide).
 *
 * The April 2026 version named invented agencies, prices and scores. Do not reintroduce any of that.
 *
 * COMPANY LIST: each company's own website was opened on 16 November 2026 and we list only what it says.
 * WolfIQ and 23 Digital block automated requests; their details come from Wayback Machine copies
 * (WolfIQ home and cost guide Apr 2026; 23 Digital home 15 Aug 2026).
 *
 * PRICE AND TIME RULE: every figure is a third-party Australian market figure, read on 16 November 2026:
 *   - Keen to Design, keentodesign.com.au/web-design-cost/ (dateModified 2026-04-12): small business site
 *     (5 to 8 pages) $3,500 to $7,000; DIY builder $0 to $300 plus $20 to $50/month; template + freelancer
 *     $400 to $1,500; custom WordPress by a freelancer $2,500 to $6,000; by an agency $5,000 to $20,000+;
 *     mid-range custom WordPress $7,000 to $15,000; ecommerce $8,000 to $25,000+; landing page $1,500 to $3,500;
 *     maintenance plans $100 to $500/month; a $5,000 site can cost $1,500 to $3,000 a year to run; senior Sydney
 *     developer $100 to $180/hour; "four to eight weeks from signed contract to launch" for a small business
 *     site, 3 to 6 months for complex ecommerce; 6 to 18 months from launch to meaningful organic traffic.
 *   - WolfIQ, wolfiq.com.au/how-much-does-a-website-cost-in-australia (Wayback 14 Apr 2026): DIY under $1,000
 *     plus about $50/month; brochure $3,000 to $7,000 plus $50 to $200/month; ecommerce $5,000 to $25,000 plus
 *     $250 to $500/month.
 *   - Localsearch, business.localsearch.com.au/websites: subscription websites "From $299 a month" including
 *     build, hosting, SSL, updates and support; "most sites go live four to six weeks" after the brief.
 *   - Netsearch, netsearch.com.au/web-design-perth/small-business-web-design/: "most small business websites
 *     take around 4 to 6 weeks once the scope is agreed".
 *   - Shopify AU pricing (shopify.com/au/pricing): A$56, A$149, A$575 a month paid monthly; 2% third-party
 *     transaction fee on Basic.
 *   - business.gov.au, /online-and-digital/business-website/set-up-a-business-website (steps) and
 *     /register-a-domain-name (most Australian businesses use .com.au).
 * None of these is a FactoryJet price. This page must never carry a FactoryJet price. The only FactoryJet
 * figure is the confirmed 7-day delivery for sites of 5 pages or fewer.
 *
 * FAQ schema: /blog/[slug]/page.tsx builds FAQPage JSON-LD by mapping post.faqs, the same array the page
 * renders. FAQs come from AU People Also Ask (DataForSEO, 16 Nov 2026). Do not add a second FAQ list anywhere.
 */

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const linkCls = 'text-[#B23E13] underline hover:text-[#8f310f]';
const th = 'p-3 border text-left';
const td = 'border p-3 align-top';

export const post: BlogPost = {
  id: '116',
  slug: "best-web-design-companies-small-business-australia",
  title: "Small Business Web Design in Australia: Costs, Timelines and 10 Companies Compared (2026)",
  excerpt: "Small business web design in Australia usually costs $3,000 to $7,000 for a professionally built 5 to 8 page site, takes 4 to 8 weeks from signed brief to launch, and costs about $50 to $200 a month to run (Keen to Design and WolfIQ, 2026). This guide covers the pages your site needs, the four ways to get one, ten Australian companies checked on their own websites, and the questions to ask before you sign.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "Sep 26, 2026",
  dateModified: "Nov 16, 2026",
  readTime: '15 min read',
  imageUrl: "/blog-images/best-web-design-companies-small-business-australia-hero.webp",
  meta: {
    // 16 Nov 2026: leads with the keyword and carries the cost answer, because page 1 titles that show a price get the clicks.
    title: "Small Business Web Design Australia: 2026 Costs + 10 Firms",
    description: "Compare 10 web design companies for Australian small businesses. See published costs, ownership checks and the questions to ask before you hire.",
  },
  keyTakeaways: [
    "A professionally built small business website in Australia costs about $3,500 to $7,000 for 5 to 8 pages (Keen to Design, April 2026) or $3,000 to $7,000 for a brochure site (WolfIQ, 2026). These are market ranges, not FactoryJet prices.",
    "Expect 4 to 8 weeks from signed brief to launch (Keen to Design). Perth agency Netsearch and Localsearch both quote 4 to 6 weeks. Late copy and photos cause most delays.",
    "Budget for running costs as well as the build: about $50 to $200 a month for a brochure site (WolfIQ), or $1,500 to $3,000 a year for a $5,000 site run properly (Keen to Design).",
    "There are four ways to get a site: a DIY builder, a freelancer, an agency, or a monthly subscription that bundles build and hosting. Each suits a different business.",
    "Most small business sites need the same seven things: a home page, one page per main service, an about page, proof, a contact page with click-to-call, an FAQ and a privacy policy.",
    "Before you sign, get live client sites, a named reference, a written scope with revision limits, and a clear answer on who owns the domain, code and hosting.",
  ],
  faqs: [
    { q: "How much does small business web design cost in Australia?", a: "A professionally built small business site of 5 to 8 pages costs about $3,500 to $7,000 (Keen to Design, April 2026), and WolfIQ's 2026 guide puts a brochure site at $3,000 to $7,000. A template set up by a freelancer runs $400 to $1,500, and an online store $8,000 to $25,000 or more (Keen to Design). These are Australian market ranges, not FactoryJet prices. Ask whether a quote includes GST before you compare." },
    { q: "How much would it cost to get a website designed?", a: "It depends on who builds it. Keen to Design puts a DIY builder at $0 to $300 plus $20 to $50 a month, a custom WordPress site from a freelancer at $2,500 to $6,000, and the same job from an agency at $5,000 to $20,000 or more (April 2026). Subscription providers charge monthly instead: Localsearch advertises websites from $299 a month including build, hosting and updates." },
    { q: "How do I start a website for my small business?", a: "Start with the goal: calls, bookings, quote requests or online sales. Then register a .com.au domain, choose hosting and a platform, plan your pages, write the copy and gather real photos, and only then pick a design. That is the order business.gov.au sets out. If you hire a designer, do the goal, the page list and the copy before the first meeting and the project will move twice as fast." },
    { q: "How long does it take to build a small business website in Australia?", a: "Keen to Design puts a professionally built small business site at four to eight weeks from signed contract to launch, and complex ecommerce at three to six months. Perth agency Netsearch and Localsearch both quote four to six weeks. FactoryJet delivers sites of five pages or fewer in seven days when the content is ready. Late copy, photos and approvals cause most delays." },
    { q: "Which web development company is the best in Australia?", a: "No single company is best for every small business, and many 'best of' lists are sorted by who paid to appear. Judge on four things: recent live work in your industry, a named reference you can phone, speed results from a site launched in the last year, and a written scope with revision limits. The ten companies in our table are a shortlist to test that way, not a ranking." },
    { q: "Should I hire a freelancer, an agency or use a website builder?", a: "Use a builder like Wix or Squarespace if you have more time than money and need a few simple pages. Hire a freelancer for a defined small site when you can manage the project yourself. Choose an agency when you need copy, SEO, integrations or a team that answers after launch. A subscription suits owners who want one monthly bill and are happy not to own the build outright." },
    { q: "What pages does a small business website need?", a: "Most need seven: a home page that says what you do and where, one page for each main service, an about page with real people, a proof page or section with reviews, a contact page with click-to-call and a map, an FAQ, and a privacy policy. Add a booking page or a shop only if customers buy that way. Ten good pages beat thirty thin ones." },
    { q: "How much can you charge a small business for a website?", a: "Published Australian ranges are the best guide: $3,000 to $7,000 for a brochure site (WolfIQ, 2026) and $3,500 to $7,000 for 5 to 8 pages in Sydney (Keen to Design, April 2026). Freelancers tend to sit lower, at $2,500 to $6,000 for custom WordPress, and agencies higher. What you can charge rises with what you include: copywriting, SEO setup, integrations and support after launch." },
    { q: "Should Australian small businesses use WordPress, Shopify or Wix?", a: "WordPress suits service businesses that publish content and want full control of search settings. Shopify suits businesses that sell products; its Australian plans are A$56, A$149 and A$575 a month on monthly billing, with a 2% fee on Basic if you use an outside payment gateway. Wix and Squarespace suit simple sites you run yourself, but Keen to Design warns both make moving away difficult." },
    { q: "Is Wix or GoDaddy better for a small business website?", a: "Both are DIY builders aimed at people who want to make a site themselves, so the better one is the one whose editor you find easier after a free trial. Check three things first: whether you can connect your own .com.au domain, whether you can export your content if you leave, and what the plan costs after the first-year discount ends. For a site that must rank locally, a builder is a starting point." },
    { q: "What is the downside of Wix?", a: "The main one is lock-in. Keen to Design notes that Squarespace and Wix make it difficult, and in some cases impossible, to move your site elsewhere, so a rebuild means starting again. You also rent the platform monthly, have less control over speed and code, and rely on built-in SEO settings. For a sole trader testing an idea that is often fine. For a growing business it can become a ceiling." },
    { q: "Do I need ongoing maintenance for my small business website?", a: "Yes. WordPress sites need core, theme and plugin updates, backups and security checks, or they become easy targets. Keen to Design puts Australian maintenance plans at $100 to $500 a month, and WolfIQ puts a brochure site's running costs at $50 to $200 a month including hosting. Shopify handles hosting and security for you, but apps and theme changes still need looking after." },
    { q: "Is there a monthly fee to have a website?", a: "Yes, some ongoing cost is unavoidable. You pay for the domain every year, hosting every month, and usually business email per user. Keen to Design puts domain renewal at $15 to $100 a year and hosting at $250 to $1,500 a year for a professionally maintained small business site. WordPress sites also need updates and security patching, while Shopify and Wix charge a platform subscription." },
    { q: "Are websites still relevant in 2026?", a: "Yes. Social profiles and marketplaces can change their rules or reach overnight, while your domain stays yours. Google Business Profile, AI assistants such as ChatGPT and review sites all point people to a website to check you are real, see prices or book. A site that loads fast, answers the common questions and makes it easy to call is still the one sales channel a small business fully controls." },
    { q: "Is owning a website profitable for a small business?", a: "Usually, if people can find it. A site earns its cost when it brings in enquiries you would not otherwise get, and for a trade or service business a handful of jobs can cover a $3,000 to $7,000 build. A site nobody finds earns nothing, which is why search setup matters more than looks. Keen to Design puts the wait for meaningful organic traffic at 6 to 18 months, so plan for that." },
    { q: "What are the disadvantages of having a website?", a: "There are five real ones: the upfront cost, the monthly running cost, the upkeep (updates, backups, security), the time to write and refresh content, and the wait before search traffic arrives. A neglected site can also hurt you, with old prices, broken forms or a security warning. Each is manageable with a maintenance plan and a yearly content review, but budget for them before you build." },
    { q: "Is web design still worth paying for in 2026?", a: "For most businesses that rely on enquiries, yes. AI tools and builders now make a basic page cheap, but they do not decide what your page should say, set up search properly, connect forms to your inbox or CRM, or fix things when they break. Paying a designer makes sense when the site has to rank and convert. If it only has to exist, a builder may be enough." },
    { q: "Is AI replacing web designers?", a: "It is replacing parts of the production work, not the judgement. AI tools generate layouts, draft copy and images in minutes, which has pushed down the price of a basic site. What has not been automated is deciding what a page needs to say, structuring a site so it ranks, wiring up integrations and fixing things when a plugin or payment gateway breaks. Designers now spend more time on strategy and build quality." },
    { q: "Can ChatGPT actually create a website?", a: "It can produce a working single page, and for a one-page site with a contact form that may be enough. It falls short on everything after the first draft: hosting and domain setup, business email, schema markup, image compression, analytics, a privacy policy that fits the Privacy Act 1988, forms that deliver, and someone to fix it in six months. Draft with it, then have a person handle the build and launch." },
    { q: "What are the five golden rules of a website?", a: "Load fast, say what you do within the first screen, make one action obvious, work properly on a phone, and give people a reason to trust you. The last rule is the one most Australian small business sites miss: real photos, a physical service area, an ABN, named people and genuine reviews. Animations, sliders and scroll effects are decoration on top of those five." },
    { q: "What questions should I ask a web designer before hiring?", a: "Ask for three live sites like yours and a reference you can phone. Ask who writes the copy and sets up SEO, how many revision rounds are included, what you must supply and by when, what it costs per month after launch, and who owns the domain, code and hosting accounts at the end. If you have an existing site, ask how they will keep your Google rankings with redirects." },
    { q: "Can a remote web design company serve Australian small businesses well?", a: "Yes, if they work in your business hours, know Australian rules and stay reachable after launch. Check that they handle the Privacy Act 1988 basics on forms, show prices the way the ACCC expects, and answer support requests the same day. FactoryJet works remotely with Australian clients in Australian business hours and hands over ownership of the code, domain and accounts. Ask any remote team for a reference." },
    { q: "How do I verify an agency's client claims?", a: "Ask for live website addresses, not screenshots, and a named contact at a business you can look up. Run those sites through Google's PageSpeed Insights yourself. Ask for project details: platform, page count, integrations and how long it took. Be cautious with agencies that offer only first names, logos without links, or results with no source." },
    { q: "Do I need a website if I have a Google Business Profile?", a: "A profile gets you into the map results, but it gives you one short description and no room to explain services, prices or answer common questions. A website gives Google and AI assistants more to read, lets you rank for each service separately and is yours if your profile is ever suspended. Link the two: put the website on the profile and the profile's reviews on the website." },
  ],
  content: (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <p className="text-lg font-bold mb-3">In this guide</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><a href="#at-a-glance" className={linkCls}>Small business web design at a glance</a></li>
          <li><a href="#pages" className={linkCls}>The 7 things every small business website needs</a></li>
          <li><a href="#four-ways" className={linkCls}>Four ways to get a small business website</a></li>
          <li><a href="#companies" className={linkCls}>10 small business web design companies in Australia</a></li>
          <li><a href="#cost" className={linkCls}>What small business web design costs in Australia</a></li>
          <li><a href="#timeline" className={linkCls}>How long it takes: 6 steps from brief to launch</a></li>
          <li><a href="#questions" className={linkCls}>12 questions to ask a web designer</a></li>
          <li><a href="#platform" className={linkCls}>WordPress, Shopify, Wix or custom</a></li>
          <li><a href="#red-flags" className={linkCls}>7 red flags in a quote</a></li>
          <li><a href="#sources" className={linkCls}>Sources</a></li>
        </ol>
      </div>

      <h2 id="at-a-glance" className="text-2xl font-bold mt-8 mb-4">Small business web design at a glance</h2>
      <p className="mb-4">If you only read one part, read this table. Every figure comes from a published Australian source, named in the right-hand column and read on 16 November 2026. None of them is a FactoryJet price.</p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <caption className="caption-bottom text-left text-xs text-gray-500 pt-2">Australian market figures. Check whether any quote includes GST before comparing.</caption>
          <thead className="bg-gray-100">
            <tr>
              <th className={th}>Question</th>
              <th className={th}>Typical answer</th>
              <th className={th}>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className={td}>Build cost, 5 to 8 page small business site</td><td className={td}>$3,500 to $7,000</td><td className={td}>Keen to Design, April 2026</td></tr>
            <tr><td className={td}>Build cost, brochure site</td><td className={td}>$3,000 to $7,000</td><td className={td}>WolfIQ, 2026 guide</td></tr>
            <tr><td className={td}>Build cost, online store</td><td className={td}>$5,000 to $25,000+</td><td className={td}>WolfIQ; Keen to Design gives $8,000 to $25,000+</td></tr>
            <tr><td className={td}>Monthly running cost, brochure site</td><td className={td}>$50 to $200</td><td className={td}>WolfIQ, 2026 guide</td></tr>
            <tr><td className={td}>Time from signed brief to launch</td><td className={td}>4 to 8 weeks</td><td className={td}>Keen to Design; Netsearch and Localsearch say 4 to 6</td></tr>
            <tr><td className={td}>Time until search traffic builds</td><td className={td}>6 to 18 months</td><td className={td}>Keen to Design</td></tr>
            <tr><td className={td}>Domain most Australian businesses use</td><td className={td}>.com.au</td><td className={td}>business.gov.au</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-orange-50 border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-8">
        <p className="font-semibold mb-2">Ready to hire, not just compare?</p>
        <p className="mb-0">
          See our <a href="/au/small-business-web-design" className={linkCls}>small business web design service for Australia</a>. It explains what we build, how 7-day delivery works for sites of up to 5 pages, and what you own at the end. Run the same checks on us that this guide suggests for everyone else.
        </p>
      </div>

      <h2 id="pages" className="text-2xl font-bold mt-8 mb-4">The 7 things every small business website needs</h2>
      <p className="mb-4">A plumber in Penrith, a physio in Fremantle and a bookkeeper in Hobart need almost the same site. The goal is the same: someone finds you, believes you, and calls. These seven parts do that job. Anything beyond them should earn its place.</p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>A home page that answers three questions in the first screen.</strong> What you do, where you do it, and how to contact you. "Emergency plumbing across Western Sydney, call 02 ..." beats a slogan.</li>
        <li><strong>One page for each main service.</strong> A single "Services" page cannot rank for "blocked drains" and "hot water repairs" at the same time. Separate pages can, and Google's AI Overview for this search lists a services page as essential.</li>
        <li><strong>An about page with real people.</strong> Names, faces and how long you have been trading. Stock photos of handshakes tell a visitor nothing.</li>
        <li><strong>Proof.</strong> Reviews, before-and-after photos, a short case study or the logos of local clients who agreed to be named. Put some on the home page, not only on a reviews page.</li>
        <li><strong>A contact page that works on a phone.</strong> Click-to-call, a short form that lands in an inbox someone checks, your service area, opening hours and a map.</li>
        <li><strong>An FAQ.</strong> Answer the questions you get on every call: price guidance, call-out areas, how long a job takes. These answers are also what AI assistants quote.</li>
        <li><strong>A privacy policy and your ABN.</strong> If your forms collect personal details, you need a privacy policy. An ABN in the footer is a small trust signal Australian buyers notice.</li>
      </ol>
      <p className="mb-4">Underneath all seven: the site has to load fast on a mid-range Android phone on mobile data, link to your Google Business Profile, and have Google Analytics and Search Console set up from day one. Trade businesses can see how this applies in our guide to <a href="/au/websites-for-tradies" className={linkCls}>websites for tradies</a>, and practices in <a href="/au/dental-website-design" className={linkCls}>dental website design</a>.</p>

      <h2 id="four-ways" className="text-2xl font-bold mt-8 mb-4">Four ways to get a small business website in Australia</h2>
      <p className="mb-4">Most owners start comparing website designers for small business before deciding whether they need one at all. Decide the route first. Search results for small business website design mix builders, freelancers, agencies and subscriptions, so it pays to know which one you are shopping for.</p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <caption className="caption-bottom text-left text-xs text-gray-500 pt-2">Costs from Keen to Design (April 2026), WolfIQ (2026) and Localsearch's own pricing page, read 16 November 2026.</caption>
          <thead className="bg-gray-100">
            <tr>
              <th className={th}>Route</th>
              <th className={th}>Typical cost</th>
              <th className={th}>Suits</th>
              <th className={th}>The catch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}><strong>DIY website builder</strong> (Wix, Squarespace, Shopify)</td>
              <td className={td}>$0 to $300 to set up, plus $20 to $50 a month (Keen to Design)</td>
              <td className={td}>Sole traders testing an idea on a tight budget</td>
              <td className={td}>Your time, generic design, weak local SEO, and moving away later can be hard</td>
            </tr>
            <tr>
              <td className={td}><strong>Freelance web designer</strong></td>
              <td className={td}>$400 to $1,500 for a template; $2,500 to $6,000 for custom WordPress (Keen to Design)</td>
              <td className={td}>A defined small site where you can manage the project</td>
              <td className={td}>One person's capacity: if they are busy or unwell, the job waits</td>
            </tr>
            <tr>
              <td className={td}><strong>Web design agency</strong></td>
              <td className={td}>$5,000 to $20,000+ for custom WordPress (Keen to Design); $3,000 to $7,000 for a brochure site (WolfIQ)</td>
              <td className={td}>Businesses that need copy, SEO, integrations and support after launch</td>
              <td className={td}>Higher price; quality varies widely, so check references</td>
            </tr>
            <tr>
              <td className={td}><strong>Website subscription</strong></td>
              <td className={td}>Localsearch advertises websites "from $299 a month" including build, hosting, updates and support</td>
              <td className={td}>Owners who want one monthly bill and no upfront cost</td>
              <td className={td}>Read the contract term and what happens to the site and domain if you stop paying</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">A simple rule: if the site has to bring in work from Google, a small business website builder usually costs more in lost enquiries than it saves. If it only has to exist so people can check you are real, a builder may be enough.</p>

      <h2 id="companies" className="text-2xl font-bold mt-8 mb-4">10 small business web design companies in Australia</h2>
      <p className="mb-4">These ten companies all offer small business website design in Australia, and between them they cover web design in Sydney, Melbourne, Brisbane, Adelaide, Perth, Newcastle and the Sunshine Coast. We opened each company's own website on 16 November 2026 and recorded only what it says: where it is based and what it builds. WolfIQ and 23 Digital block automated checks, so their details come from archived copies of their sites from April and August 2026. We have not scored them, because the right one depends on your city, budget, platform and how much help you want after launch. Treat this as a shortlist, then use the <a href="#questions" className={linkCls}>12 questions</a> below.</p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-300">
          <caption className="caption-bottom text-left text-xs text-gray-500 pt-2">From each company's own website, checked 16 November 2026. Listed in no particular order.</caption>
          <thead className="bg-gray-100">
            <tr>
              <th className={th}>Company</th>
              <th className={th}>Based in</th>
              <th className={th}>What it builds (its own description)</th>
              <th className={th}>Worth a look if</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}><a href="https://websiteadelaide.com/" className={linkCls} {...ext}>Website Adelaide</a></td>
              <td className={td}>Maslin Beach, SA (meetings by appointment)</td>
              <td className={td}>Websites for small businesses and sole traders, with copywriting and on-page SEO included</td>
              <td className={td}>You are in South Australia and want the words written for you</td>
            </tr>
            <tr>
              <td className={td}><a href="https://smedigital.com.au/" className={linkCls} {...ext}>SME Digital</a></td>
              <td className={td}>Sydney (George Street) and Brookvale, NSW</td>
              <td className={td}>Website design, maintenance and security, SEO, local SEO, copywriting; offers custom, done-for-you and DIY website options</td>
              <td className={td}>You want to choose between a custom build and a lighter package</td>
            </tr>
            <tr>
              <td className={td}><a href="https://www.netsearch.com.au/web-design-perth/small-business-web-design/" className={linkCls} {...ext}>Netsearch</a></td>
              <td className={td}>Perth, plus Bunbury and the South West</td>
              <td className={td}>Small business, WordPress, Shopify and ecommerce web design, SEO and Google Ads; quotes each project individually</td>
              <td className={td}>You are in Western Australia and want a 4 to 6 week build</td>
            </tr>
            <tr>
              <td className={td}><a href="https://business.localsearch.com.au/websites" className={linkCls} {...ext}>Localsearch</a></td>
              <td className={td}>Australia-wide; Australian owned since 1993 (its site)</td>
              <td className={td}>Websites on a monthly subscription that includes build, Australian hosting, updates and support, plus SEO, ads and listings</td>
              <td className={td}>You prefer one monthly fee to an upfront build cost</td>
            </tr>
            <tr>
              <td className={td}><a href="https://23digital.com.au/" className={linkCls} {...ext}>23 Digital</a></td>
              <td className={td}>Melbourne (St Kilda), Sydney (Baulkham Hills), Brisbane (Murarrie)</td>
              <td className={td}>Web design, ecommerce, SEO and paid media on WordPress, Shopify, WooCommerce, BigCommerce and more</td>
              <td className={td}>You want design and marketing from one team with offices on the east coast</td>
            </tr>
            <tr>
              <td className={td}><a href="https://www.wolfiq.com.au/" className={linkCls} {...ext}>WolfIQ</a></td>
              <td className={td}>Sydney; operating since 2014</td>
              <td className={td}>WordPress design and development, custom web apps, SEO, Google Ads, hosting and care plans</td>
              <td className={td}>You want WordPress with hosting and care in one place</td>
            </tr>
            <tr>
              <td className={td}><a href="https://keentodesign.com.au/" className={linkCls} {...ext}>Keen to Design</a></td>
              <td className={td}>Sydney (Pitt Street); operating since 2014</td>
              <td className={td}>WordPress web design, ecommerce, custom development, maintenance and care plans</td>
              <td className={td}>You want a custom WordPress site from a Sydney team</td>
            </tr>
            <tr>
              <td className={td}><a href="https://www.digitalnomadshq.com.au/" className={linkCls} {...ext}>Digital Nomads HQ</a></td>
              <td className={td}>Sunshine Coast (Mooloolaba), QLD</td>
              <td className={td}>Web design and development, SEO and AI SEO, Google Ads and social</td>
              <td className={td}>You want web design tied closely to search and ads</td>
            </tr>
            <tr>
              <td className={td}><a href="https://jezweb.com/" className={linkCls} {...ext}>Jezweb</a></td>
              <td className={td}>Newcastle, NSW; since 2002</td>
              <td className={td}>Websites built with AI help, custom apps, and hosting and care for the sites it builds; changes requested by email</td>
              <td className={td}>You want a long-running provider that also hosts and looks after the site</td>
            </tr>
            <tr className="bg-orange-50">
              <td className={td}><a href="/au" className={linkCls}>FactoryJet</a> (that is us)</td>
              <td className={td}>Works remotely with Australian clients in Australian business hours</td>
              <td className={td}>Web design and development, Shopify and WooCommerce, SEO and AI SEO, AI agents; support after launch</td>
              <td className={td}>You want a fixed written scope, 7-day delivery for sites of up to 5 pages, search and AI visibility built in, and full ownership of the code and accounts</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">For context on us: FactoryJet has delivered work for more than 500 businesses, including the Shopify store for DTF Virginia and the WooCommerce and Odoo integration for Sow Easy. You can see four real before-and-after homepages on our <a href="/services/website-redesign" className={linkCls}>website redesign page</a>.</p>

      <h2 id="cost" className="text-2xl font-bold mt-8 mb-4">What small business web design costs in Australia</h2>
      <p className="mb-4">These bands use ranges published by <a href="https://keentodesign.com.au/web-design-cost/" className={linkCls} {...ext}>Keen to Design</a> (updated April 2026) and <a href="https://www.wolfiq.com.au/how-much-does-a-website-cost-in-australia" className={linkCls} {...ext}>WolfIQ</a> (2026 guide). They are Australian market ranges, not FactoryJet prices, and neither source says whether its figures include GST.</p>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li><strong>$400 to $1,500: template set up by a freelancer.</strong> A handful of pages, a theme with your logo and colours, a contact form, little search setup. Most "affordable web design" packages advertised under $1,000 sit in this band. Fine for testing an idea, weak for competing in Google.</li>
        <li><strong>$3,000 to $7,000: professional small business site.</strong> Keen to Design's range for 5 to 8 pages is $3,500 to $7,000; WolfIQ's for a brochure site is $3,000 to $7,000. You should get a design made for your business, proper mobile work, analytics and core search setup.</li>
        <li><strong>$7,000 to $15,000: mid-range custom WordPress.</strong> More pages, structured data, a CRM or booking integration, conversion work and training (Keen to Design).</li>
        <li><strong>$5,000 to $25,000 and up: online store.</strong> WolfIQ gives $5,000 to $25,000; Keen to Design gives $8,000 to $25,000+. Product count, payments, shipping and links to Xero or MYOB move the price.</li>
        <li><strong>Running costs on top.</strong> WolfIQ puts a brochure site at $50 to $200 a month. Keen to Design says a $5,000 site can cost $1,500 to $3,000 a year to run properly, and puts maintenance plans at $100 to $500 a month.</li>
      </ul>
      <p className="mb-4">Hourly rates matter less than scope. Keen to Design puts a senior Sydney developer at $100 to $180 an hour, but for a defined small site you want a fixed price against a written scope, so you are not paying for internal revision rounds. For seven Australian price guides side by side, monthly costs and how GST applies, read our <a href="/blog/website-cost-australia-2026" className={linkCls}>website cost in Australia guide</a>.</p>

      <h2 id="timeline" className="text-2xl font-bold mt-8 mb-4">How long it takes: 6 steps from brief to launch</h2>
      <p className="mb-4">Keen to Design puts a professionally built small business site at four to eight weeks from signed contract to launch, and complex ecommerce at three to six months. Perth's Netsearch says most small business sites take around four to six weeks once scope is agreed, and Localsearch says most of its sites go live four to six weeks after the brief. The steps below follow the order business.gov.au recommends, with the work that usually sits in each one.</p>
      <ol className="list-decimal pl-6 space-y-3 mb-6">
        <li><strong>Set the goal.</strong> Calls, bookings, quote requests or sales. Pick one main action per page. (Before the project starts.)</li>
        <li><strong>Register the domain and choose the platform.</strong> business.gov.au notes most Australian businesses use .com.au. Register it in your own name, not the designer's.</li>
        <li><strong>Plan the pages and gather content.</strong> Copy, real photos, reviews, service areas. This is where most projects stall, so start it before you sign.</li>
        <li><strong>Design.</strong> Usually a home page and one inner page first, with two or three revision rounds written into the scope.</li>
        <li><strong>Build and test.</strong> Every page on a real phone, forms tested end to end, speed checked in PageSpeed Insights, analytics and Search Console connected.</li>
        <li><strong>Launch and look after it.</strong> Submit the sitemap, set up redirects from any old site, then keep updates and backups running every month.</li>
      </ol>
      <p className="mb-4">If your copy and photos are ready on day one, a small site can move much faster than the averages above. FactoryJet delivers sites of five pages or fewer in seven days when the content is ready. Search traffic takes longer: Keen to Design puts the wait for meaningful organic traffic at 6 to 18 months, which is why the SEO setup has to be in the first build. Our <a href="/au/small-business-seo" className={linkCls}>small business SEO</a> and <a href="/au/local-seo" className={linkCls}>local SEO</a> pages cover what happens after launch.</p>

      <div className="my-8 rounded-2xl border border-gray-200 bg-[#FAFAF7] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 not-prose">
        <div>
          <p className="text-gray-900 font-semibold text-lg">Want a written scope to compare against other quotes?</p>
          <p className="text-gray-700 text-sm mt-1">Tell us what the site needs to do. We reply with a fixed scope and price in writing after a short call.</p>
        </div>
        <a href="/contact" className="shrink-0 bg-[#B23E13] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#8f310f] transition-colors whitespace-nowrap">
          Get a written scope
        </a>
      </div>

      <h2 id="questions" className="text-2xl font-bold mt-8 mb-4">12 questions to ask a web designer before you sign</h2>
      <p className="mb-4">Ask every web designer for small business work on your shortlist the same twelve questions, in writing, and their web design packages become comparable. Vague answers tell you as much as the price does.</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Can you show me three live sites you built for businesses like mine?</li>
        <li>Can I phone one of those clients?</li>
        <li>Who writes the copy, and is it in the price?</li>
        <li>Who sets up SEO: page titles, structured data, sitemap, Search Console?</li>
        <li>How many revision rounds are included at each stage?</li>
        <li>What do you need from me, and by what date, to hit the launch date?</li>
        <li>Does the quote include GST?</li>
        <li>What will I pay every month after launch, and what does that cover?</li>
        <li>Who owns the domain, the code, the hosting account and the analytics?</li>
        <li>If I have a site now, how will you keep my Google rankings when we switch?</li>
        <li>What PageSpeed Insights score did your last launched site get on mobile?</li>
        <li>Who do I call when something breaks six months from now, and how fast do you reply?</li>
      </ol>
      <p className="mb-4">Question 9 matters most. A designer who registers your domain in their own name or keeps the hosting login has made you dependent on them, whether they mean to or not.</p>

      <h2 id="platform" className="text-2xl font-bold mt-8 mb-4">WordPress, Shopify, Wix or custom: which platform</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <caption className="caption-bottom text-left text-xs text-gray-500 pt-2">Shopify prices from shopify.com/au/pricing, monthly billing, checked 16 November 2026.</caption>
          <thead className="bg-gray-100">
            <tr>
              <th className={th}>Platform</th>
              <th className={th}>Best for</th>
              <th className={th}>Watch out for</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className={td}><strong>WordPress</strong></td><td className={td}>Service businesses that publish content and want full SEO control; many Australian developers can take it over later</td><td className={td}>Monthly updates, backups and security checks are your job or your designer's</td></tr>
            <tr><td className={td}><strong>Shopify</strong></td><td className={td}>Businesses selling products; payments, Afterpay, hosting and security handled for you</td><td className={td}>A$56, A$149 or A$575 a month plus apps; 2% fee on Basic with an outside payment gateway</td></tr>
            <tr><td className={td}><strong>WooCommerce</strong></td><td className={td}>Selling on a WordPress site without a platform fee</td><td className={td}>More maintenance and security work than Shopify</td></tr>
            <tr><td className={td}><strong>Wix or Squarespace</strong></td><td className={td}>Simple sites the owner runs alone</td><td className={td}>Keen to Design warns moving away can be difficult or impossible</td></tr>
            <tr><td className={td}><strong>Custom code</strong> (for example Next.js)</td><td className={td}>Portals, complex booking, anything platforms do badly</td><td className={td}>Higher upfront cost and you need someone to support the code</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">Pick the platform your team can run day to day, not the one your designer prefers. If you sell products, our <a href="/au/shopify-development" className={linkCls}>Shopify development</a> page explains how we set stores up for Australian payments and shipping.</p>

      <h2 id="red-flags" className="text-2xl font-bold mt-8 mb-4">7 red flags in a small business website quote</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>No live links.</strong> Screenshots and mock-ups prove nothing. Live sites let you test speed and mobile layout yourself.</li>
        <li><strong>No reference you can phone.</strong> Good designers are glad to connect you with past clients.</li>
        <li><strong>A lump-sum quote.</strong> It hides gaps such as copywriting, photos or payment setup that surface mid-project.</li>
        <li><strong>A price far below the ranges above.</strong> Something is missing, usually mobile work, search setup or security.</li>
        <li><strong>"Unlimited revisions."</strong> It sounds generous and usually means no sign-off points and a project that never ends.</li>
        <li><strong>Guaranteed first-page rankings.</strong> Keen to Design's guide says an agency promising first-page rankings within 30 days is making a promise it cannot keep.</li>
        <li><strong>A dodge on ownership.</strong> If "who owns the domain and code?" takes more than one sentence to answer, cross them off.</li>
      </ul>
      <p className="mb-4">Australian Consumer Law protects you against misleading conduct, but a clear written scope is cheaper than a dispute. Remote or local makes less difference than these seven checks. Whoever you choose, make sure they work in your business hours, handle the Privacy Act 1988 basics on your forms, and stay reachable after launch, because most website problems appear months later. Our <a href="/au/website-maintenance" className={linkCls}>website maintenance and support</a> page covers what that looks like in practice.</p>

      <h2 id="sources" className="text-2xl font-bold mt-8 mb-4">Sources</h2>
      <p className="mb-2">All read on 16 November 2026 unless noted.</p>
      <ul className="list-disc pl-6 space-y-1 mb-6 text-sm">
        <li><a href="https://keentodesign.com.au/web-design-cost/" className={linkCls} {...ext}>Keen to Design, How much does a website cost in Sydney and Australia</a> (updated 12 April 2026)</li>
        <li><a href="https://www.wolfiq.com.au/how-much-does-a-website-cost-in-australia" className={linkCls} {...ext}>WolfIQ, How much does a website cost in Australia</a> (2026 guide; read from the Wayback Machine copy of 14 April 2026)</li>
        <li><a href="https://business.localsearch.com.au/websites" className={linkCls} {...ext}>Localsearch, Web design for Australian businesses</a> (subscription pricing and timeline)</li>
        <li><a href="https://www.netsearch.com.au/web-design-perth/small-business-web-design/" className={linkCls} {...ext}>Netsearch, Small business web design Perth</a> (timeline)</li>
        <li><a href="https://business.gov.au/online-and-digital/business-website/set-up-a-business-website" className={linkCls} {...ext}>business.gov.au, Set up a business website</a> and <a href="https://business.gov.au/online-and-digital/business-website/register-a-domain-name" className={linkCls} {...ext}>Register a domain name</a></li>
        <li><a href="https://www.shopify.com/au/pricing" className={linkCls} {...ext}>Shopify Australia pricing</a></li>
      </ul>

      <div className="my-12 rounded-2xl bg-[#111111] p-8 sm:p-10 not-prose">
        <p className="text-white text-2xl font-bold mb-3">Get a small business website you own, built in 7 days</p>
        <p className="text-gray-200 mb-6 max-w-xl">For sites of up to 5 pages with content ready. Fixed scope in writing, search setup included, support after launch.</p>
        <a href="/au/small-business-web-design" className="inline-block bg-white text-[#111111] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors text-lg">
          See how it works
        </a>
        <p className="text-gray-300 text-sm mt-6">500+ businesses · 97% on-time delivery · Supported after launch</p>
      </div>
    </>
  ),
};

export default post;
