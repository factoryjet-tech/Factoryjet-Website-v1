import React from 'react';
import type { BlogPost } from '../data.types';

// NOTE ON FIGURES (refreshed 21 October 2026). Every £ figure on this page is a market range
// read first-hand from one of two sources, fetched on 21 October 2026:
//   - Whito, "How Much Does a Website Cost in the UK? Web Design Prices 2026" (Jacob Whitmore),
//     https://whito.co.uk/research/website-design-costs-uk/ ("Last Updated on October 19, 2026").
//   - SpotDev, "Website Redesign Cost UK: What a Rebuild Actually Costs in 2026" (22 May 2026),
//     https://www.spotdev.co.uk/blog/website-redesign-cost-uk. SpotDev builds HubSpot sites, so
//     its ranges sit at the B2B end of the market; the page says so.
// The earlier version carried unsourced ranges (£1,500 to £8,000 and others), an unverified
// GPSUK price and order-value lift, conversion-lift percentages, and a FactoryJet price
// comparison. All were cut. FactoryJet's own prices never appear here (house rule): we quote a
// fixed price in writing after a short scoping call. Do not add a figure without fetching it.

const WHITO = 'https://whito.co.uk/research/website-design-costs-uk/';
const SPOTDEV = 'https://www.spotdev.co.uk/blog/website-redesign-cost-uk';

export const post: BlogPost = {
  id: '110',
  slug: "website-redesign-cost-uk-2026-complete-pricing-guide",
  title: "Website Redesign Cost UK 2026: Complete Pricing Guide for SMBs (5-200 Employees)",
  excerpt: "Most UK businesses pay £3,000 to £6,000 for a professionally built website, and B2B redesigns run £10,000 to £80,000, according to two 2026 UK price guides we checked. This guide sets out the sourced ranges by project size, the hidden costs, and how to read a quote.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "Apr 26, 2026",
  dateModified: "Oct 21, 2026",
  readTime: '11 min read',
  imageUrl: "/blog-images/website-redesign-cost-uk-2026-complete-pricing-guide-hero.webp",
  meta: {
    title: "Website Redesign Cost UK 2026: Full Pricing Guide for SMBs",
    description: "UK website redesign costs in 2026 from two sourced price guides: £1,500 to £5,000 for a 5-page brochure site, £5,000 to £20,000+ for ecommerce, £10,000 to £80,000 for B2B.",
  },
  keyTakeaways: [
    "Most UK businesses pay £3,000 to £6,000 for a professionally built website (Whito, updated October 2026).",
    "A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency (Whito).",
    "Ecommerce sites run £5,000 to £20,000 or more (Whito). B2B redesigns run £10,000 to £80,000, with most landing between £15,000 and £60,000 (SpotDev, a HubSpot developer, May 2026).",
    "Copywriting, photography and SEO setup add 30 to 50% on top of a quoted price when nobody budgets for them (Whito).",
    "Hourly rates: freelancers £40 to £70, agencies £60 to £150 (Whito). Ask for a fixed price per phase so the hours stop being your risk.",
    "A platform move with no redesign costs £8,000 to £18,000 on SpotDev's figures. If the site only looks dated but passes Core Web Vitals, a visual refresh may be enough.",
  ],
  faqs: [
    { q: "What is the average cost to redesign a website in the UK in 2026?", a: "Most UK businesses pay £3,000 to £6,000 for a professionally built website, according to Whito's 2026 UK price guide. A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. Ecommerce sites run £5,000 to £20,000 or more. B2B redesigns with CRM and integration work cost more: SpotDev puts them at £10,000 to £80,000. FactoryJet quotes a fixed price in writing after a short scoping call." },
    { q: "How long does a typical SMB website redesign take in 2026?", a: "It depends on page count and integrations. SpotDev gives 12 to 14 weeks for a standard B2B CMS build and 14 to 18 weeks for a complex one. Small brochure sites move much faster: FactoryJet offers 7-day delivery for sites of 5 pages or fewer. Most delays come from late content and from features added after the scope was signed." },
    { q: "Should I choose WordPress, Shopify, or Next.js for my redesign?", a: "WordPress suits content-heavy sites where non-technical staff edit pages, such as law firms and consultancies. Shopify suits product catalogues with a standard checkout. Next.js suits custom portals and B2B tools where speed and custom logic matter. GPSUK, a UK promotional products supplier, runs a Commerceflo trade storefront because it needed account pricing and quote-to-order workflows. Match the platform to who will edit the site and what it has to do." },
    { q: "What hidden costs should I budget for in a website redesign?", a: "Whito found copywriting, photography and SEO add 30 to 50% to a quoted price when they are left out. Its line items: copy £50 to £150 a page, photography £200 to £800, SEO setup £300 to £1,000, domain £10 to £30 a year, SSL £0 to £100 a year, hosting £50 to £300 a year, and premium plugins or themes £50 to £300. Ask for a quote that lists every one." },
    { q: "How do I know if my current website needs a redesign or just updates?", a: "Run Google's PageSpeed Insights on your key pages. If they fail Core Web Vitals (LCP over 2.5 seconds, INP over 200 milliseconds, CLS over 0.1), break on mobile, or cannot be edited without a developer, a rebuild is usually cheaper over time. If the site passes and only the look is dated, a visual refresh of the theme and images costs less than a full rebuild." },
    { q: "Can I redesign my website in phases to spread the cost?", a: "Yes. A common order is the homepage and contact pages first, then service pages and the blog, then ecommerce or a customer portal. Whito puts each extra page at £150 to £400, which helps you price later phases. Phasing lowers the first invoice but stretches the total timeline. Get the price of every phase fixed in writing before phase one starts." },
    { q: "What ROI should I expect from a website redesign?", a: "There is no honest average, because it depends on your traffic and what the old site was losing. Work it out for your own numbers: monthly enquiries or orders, conversion rate and average order value before launch, then the same at 30, 90 and 180 days after. If the redesign costs £5,000 and adds £1,000 a month in gross profit, it pays back in five months." },
    { q: "How do agency and freelancer rates compare for website redesigns?", a: "Whito puts UK freelancer rates at £40 to £70 an hour (£35 to £55 outside the big cities) and agency rates at £60 to £150 an hour. The same 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. Whoever you hire, ask for a fixed price per phase, live client sites you can test, and two references." },
    { q: "What should I include in a website redesign brief?", a: "List the current site URL, two or three sites you like, must-have features such as booking or product filters, brand guidelines, who the site is for, and how you will measure it (leads a month, average order value). Add a sitemap of every page you keep, plus access to Google Analytics and Search Console. A tight brief gets you quotes you can compare line by line." },
    { q: "Do I need to hire a separate SEO agency after redesigning my website?", a: "Not for the technical basics, if your web team includes them: redirects from old URLs, schema markup, an XML sitemap, titles, alt text and Search Console setup. Whito puts SEO setup at £300 to £1,000 when it is bought separately. Ongoing work such as content and links is a separate monthly service. If a redesign proposal never mentions redirects, budget for them, or rankings can drop at launch." },
  ],
  content: (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h2 className="text-lg font-bold mb-3">Table of Content: In This Article</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>UK Website Redesign Cost Breakdown by Project Size (2026)</li>
          <li>Platform Comparison: WordPress vs Shopify vs Next.js Redesigns</li>
          <li>Freelancer vs Agency Rates: Real Price Differences</li>
          <li>Hidden Costs and Budget Padding: What Quotes Don't Tell You</li>
          <li>ROI Timeline: When Does a Redesign Pay for Itself?</li>
          <li>Fixed-Price vs Hourly Billing: Which Protects SMBs Better?</li>
          <li>Real Client Example: GPSUK's B2B Trade Storefront</li>
          <li>How to Choose the Right Agency for Your UK SMB Redesign</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Most UK businesses pay £3,000 to £6,000 for a professionally built website, according to{' '}
        <a href={WHITO} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Whito&apos;s 2026 UK price guide</a>{' '}
        (updated 19 October 2026). A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. B2B redesigns cost far more: £10,000 to £80,000 on{' '}
        <a href={SPOTDEV} className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">SpotDev&apos;s May 2026 figures</a>. Every £ figure below comes from one of those two pages, read on 21 October 2026.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">UK Website Redesign Cost Breakdown by Project Size (2026)</h2>
      <p className="mb-4">Size of business matters less than size of the job. A 10-person firm with a quoting portal pays more than a 150-person firm that needs ten clean pages. So the table below sorts by project, not headcount. The small end comes from Whito, which surveys UK freelancers and agencies. The large end comes from SpotDev, a UK HubSpot developer, so treat its numbers as the B2B top of the market. SpotDev quotes all figures ex VAT. Two lines from the sources are worth keeping in mind. Each extra page adds £150 to £400 (Whito). And a straight platform move with no redesign costs £8,000 to £18,000 (SpotDev), which is why a migration is rarely the cheap option it looks like.</p>
      <p className="mb-4">➡ Learn more: <a href="/uk/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">UK Web Design</a></p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Project</th>
              <th className="p-3 border">Typical Scope</th>
              <th className="p-3 border">Who Builds It</th>
              <th className="p-3 border">Market Range</th>
              <th className="p-3 border">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Brochure site</td>
              <td className="border p-3">5 pages</td>
              <td className="border p-3">Freelancer</td>
              <td className="border p-3">£1,500–£3,000</td>
              <td className="border p-3">Whito</td>
            </tr>
            <tr>
              <td className="border p-3">Brochure site</td>
              <td className="border p-3">5 pages</td>
              <td className="border p-3">Agency</td>
              <td className="border p-3">£3,000–£5,000</td>
              <td className="border p-3">Whito</td>
            </tr>
            <tr>
              <td className="border p-3">Ecommerce site</td>
              <td className="border p-3">Product catalogue and checkout</td>
              <td className="border p-3">Agency</td>
              <td className="border p-3">£5,000–£20,000+</td>
              <td className="border p-3">Whito</td>
            </tr>
            <tr>
              <td className="border p-3">B2B redesign</td>
              <td className="border p-3">CMS build with CRM and integrations</td>
              <td className="border p-3">Agency</td>
              <td className="border p-3">£10,000–£80,000</td>
              <td className="border p-3">SpotDev</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Platform Comparison: WordPress vs Shopify vs Next.js Redesigns</h2>
      <p className="mb-4">Neither source prices platforms against each other, so this section gives no platform price. What it can tell you is what pushes each platform&apos;s quote up. WordPress is quickest for content sites because plugins cover forms, SEO and blogs. Costs climb when a site relies on dozens of plugins, since each one needs updates and can break the others. Shopify suits stores selling to consumers: hosting, payments and checkout come with the plan, so the redesign money goes on the theme and the apps. Next.js costs more to start because more is built by hand, and pays back when a business needs custom logic, member areas or very fast pages. A custom B2B platform sits at the top. It earns its price only when buyers need account pricing, quotes and payment terms that off-the-shelf plans cannot handle. Whatever the platform, moving to it from Wix, Squarespace or an old WordPress site means mapping every old URL to a new one with a 301 redirect, or your rankings drop at launch.</p>
      <p className="mb-4">➡ Learn more: <a href="/uk/ecommerce-development" className="text-blue-600 underline hover:text-blue-800 transition-colors">UK Ecommerce Development</a></p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Platform</th>
              <th className="p-3 border">Best For</th>
              <th className="p-3 border">What Pushes the Quote Up</th>
              <th className="p-3 border">Ongoing Cost to Ask About</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">WordPress</td>
              <td className="border p-3">Content sites, blogs, small stores</td>
              <td className="border p-3">Custom theme work, plugin count</td>
              <td className="border p-3">Hosting, plugin licences, updates</td>
            </tr>
            <tr>
              <td className="border p-3">Shopify</td>
              <td className="border p-3">Product catalogues, consumer brands</td>
              <td className="border p-3">Custom theme, app setup, data migration</td>
              <td className="border p-3">Plan fee, app subscriptions</td>
            </tr>
            <tr>
              <td className="border p-3">Next.js</td>
              <td className="border p-3">Custom portals, member sites, B2B</td>
              <td className="border p-3">Custom features built by hand</td>
              <td className="border p-3">Hosting, developer time for changes</td>
            </tr>
            <tr>
              <td className="border p-3">Custom B2B platform</td>
              <td className="border p-3">Trade accounts, quotes, payment terms</td>
              <td className="border p-3">ERP and CRM integrations</td>
              <td className="border p-3">Platform licence, integration upkeep</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Freelancer vs Agency Rates: Real Price Differences</h2>
      <p className="mb-4">Whito puts UK freelancer rates at £40 to £70 an hour, or £35 to £55 outside the big cities, and agency rates at £60 to £150 an hour. On a 5-page brochure site that gap shows up as £1,500 to £3,000 from a freelancer against £3,000 to £5,000 from an agency. The agency premium buys a team: a designer, a developer and someone who answers the phone when the freelancer is ill. The freelancer saving is real when the job is small and the brief is clear. Rates tell you less than they seem to, because a fast team at a higher rate can cost less in total than a slow one at a lower rate. Compare fixed totals for the same written scope, not hourly rates. FactoryJet works remotely with UK clients, holds calls in UK business hours, and quotes a fixed price in writing after a short scoping call.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Hidden Costs and Budget Padding: What Quotes Don't Tell You</h2>
      <p className="mb-4">Whito found that copywriting, photography and SEO add 30 to 50% on top of a quoted price when they are not budgeted at the start. On a £4,000 agency quote, that is £1,200 to £2,000 more. The fix is cheap: ask for every line below to be listed in the quote, even when the answer is &quot;you supply it&quot;. Two costs do not show up in any price guide but cost the most when skipped. The first is redirects: every old URL needs a 301 to its new address, or Google drops the pages that ranked. The second is training, so your team can edit pages without paying for a support ticket each time.</p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Hidden Cost</th>
              <th className="p-3 border">Typical Range (Whito)</th>
              <th className="p-3 border">When It Applies</th>
              <th className="p-3 border">How to Avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Copywriting</td>
              <td className="border p-3">£50–£150 per page</td>
              <td className="border p-3">Existing copy is outdated or off-brand</td>
              <td className="border p-3">Provide final text before design starts</td>
            </tr>
            <tr>
              <td className="border p-3">Photography</td>
              <td className="border p-3">£200–£800</td>
              <td className="border p-3">No usable photos of your team or products</td>
              <td className="border p-3">Agree the shot list in the quote</td>
            </tr>
            <tr>
              <td className="border p-3">SEO setup</td>
              <td className="border p-3">£300–£1,000</td>
              <td className="border p-3">Agency does not include technical SEO</td>
              <td className="border p-3">Ask for redirects and schema in writing</td>
            </tr>
            <tr>
              <td className="border p-3">Domain and SSL</td>
              <td className="border p-3">£10–£30 and £0–£100 a year</td>
              <td className="border p-3">Changing registrar or host</td>
              <td className="border p-3">Keep the domain in your own name</td>
            </tr>
            <tr>
              <td className="border p-3">Hosting and maintenance</td>
              <td className="border p-3">£500–£2,000 a year</td>
              <td className="border p-3">Every live site</td>
              <td className="border p-3">Get the monthly fee and what it covers in writing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8 rounded-xl bg-[#0052CC] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
        <div>
          <p className="text-white font-semibold text-lg">Web Design &amp; Strategy: Practical Guidance for Your Business</p>
          <p className="text-blue-100 text-sm mt-1">We'll review your specific situation and recommend the right approach. No obligation.</p>
        </div>
        <a href="https://factoryjet.com/contact" className="shrink-0 bg-white text-[#0052CC] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
          Book a Free 30-Min Consultation →
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">ROI Timeline: When Does a Redesign Pay for Itself?</h2>
      <p className="mb-4">No public source gives a UK payback average we would stand behind, so work it out on your own numbers. Write down four figures before launch: monthly visits, enquiries or orders, conversion rate, and average order value. Check them again at 30, 90 and 180 days. Payback is the redesign cost divided by the extra gross profit per month. A £5,000 redesign that adds £1,000 a month in gross profit pays back in five months. The same site adding £250 a month takes twenty. Speed fixes show up first, because Google&apos;s Core Web Vitals thresholds (LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1) affect both rankings and how many visitors stay. Organic traffic moves more slowly, usually over months, and only if the redirects were done right.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Fixed-Price vs Hourly Billing: Which Protects SMBs Better?</h2>
      <p className="mb-4">A fixed price moves the risk of overruns to the agency. You know the total before you sign, which makes approval simple. The catch is that anything outside the written scope costs extra, so the scope has to be precise. Hourly billing suits work that will change as you go, but at £60 to £150 an hour for an agency (Whito), a 40-hour estimate that becomes 60 hours adds £1,200 to £3,000. Milestone payments split the risk: a deposit for discovery, a payment at design approval, and the final payment after launch and testing. Every contract should carry a signed scope listing pages, integrations, design rounds and training, plus who owns the code and the domain at the end. FactoryJet works to fixed prices per phase and includes post-launch defect cover in the build price.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Real Client Example: GPSUK's B2B Trade Storefront</h2>
      <p className="mb-4">GPSUK supplies promotional products to business customers in the UK. Its buyers reorder branded stock and often need a quote before they order. Director Gareth Sampson needed trade accounts, Net 30/60/90 payment terms, artwork upload with a print preview, and request-for-quote workflows, none of which a standard store plan handles well. GPSUK now runs a Commerceflo trade storefront where trade customers log in to a catalogue priced for their account and turn quotes into orders. The lesson for budgeting: B2B features such as account pricing and quotes are what move a project from the brochure range into SpotDev&apos;s £10,000 to £80,000 band, so price them as separate lines.</p>
      <p className="mb-4">➡ Learn more: <a href="/portfolio" className="text-blue-600 underline hover:text-blue-800 transition-colors">Portfolio</a></p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to Choose the Right Agency for Your UK SMB Redesign</h2>
      <p className="mb-4">Ask for live URLs of three to five recent sites, not screenshots, and run them through PageSpeed Insights yourself. Phone two clients from the past year and ask whether the site launched on time and whether support answered after launch. Ask for the quote with every line from the hidden-costs table filled in. Ask who owns the code, the domain and the hosting account at the end. Walk away from vague promises like &quot;fast loading&quot; with no numbers behind them. If you are planning the project rather than pricing it, our guide to <a href="/blog/website-redesign-small-business-uk-2026-ai-powered" className="text-blue-600 underline hover:text-blue-800 transition-colors">website redesign for UK small businesses</a> covers the process step by step.</p>

      <p className="mb-6">➡ Serving US clients? <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">FactoryJet delivers professional US business websites</a> with 7-day delivery for sites of 5 pages or fewer and Lighthouse 95+. See our <a href="/" className="text-blue-600 underline hover:text-blue-800 transition-colors">US services hub</a> for services and scoping.</p>

      <div className="my-12 rounded-2xl bg-[#0052CC] p-8 sm:p-10 text-center not-prose">
        <h3 className="text-white text-2xl font-bold mb-3">Ready to transform your business?</h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">We'll review your specific situation and recommend the right approach. No obligation.</p>
        <a href="https://factoryjet.com/contact" className="inline-block bg-white text-[#0052CC] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Book a Free 30-Min Consultation →
        </a>
        <p className="text-blue-200 text-sm mt-6">500+ businesses · 97% on-time delivery · 12+ years combined experience</p>
      </div>
    </>
  ),
};

export default post;
