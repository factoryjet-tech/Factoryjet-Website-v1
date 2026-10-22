import React from 'react';
import type { BlogPost } from '../data.types';

// Every outside figure below was fetched and read on 22 Oct 2026.
const SRC = {
  census: 'https://www.census.gov/quickfacts/fact/table/austincitytexas/PST045224',
  sba: 'https://advocacy.sba.gov/wp-content/uploads/2025/06/Texas_2025-State-Profile.pdf',
  sosForm503: 'https://www.sos.state.tx.us/corp/forms/503_boc.pdf',
  comptroller: 'https://comptroller.texas.gov/taxes/publications/94-127.php',
  ada: 'https://www.ada.gov/resources/web-guidance/',
  webfx: 'https://www.webfx.com/blog/web-design/how-much-does-it-cost-to-build-a-website-for-a-small-business/',
  vitals: 'https://web.dev/articles/vitals',
  gbpRanking: 'https://support.google.com/business/answer/7091',
  pagespeed: 'https://pagespeed.web.dev/',
  glide: 'https://www.glidedesign.com/',
  monkeeBoy: 'https://www.monkee-boy.com/',
  pallas: 'https://www.pallasweb.com/',
  lostHighway: 'https://www.losthighwaymedia.com/',
};

const ext = { target: '_blank', rel: 'noopener noreferrer', className: 'text-[#B23E13] underline' } as const;
const thCls = 'p-3 border border-gray-700 text-left';
const tdCls = 'border p-3 align-top';

export const post: BlogPost = {
  id: '145',
  slug: 'web-design-austin-tx-small-business-guide-2026',
  title: 'Web Design in Austin TX: A Small Business Guide for 2026',
  excerpt:
    'Most Austin small business websites fall inside the $1,000 to $48,000 band WebFX publishes for US small business sites, with small agencies at $6,000 to $12,000. This guide covers what drives the price, the Texas rules that touch a new site (assumed names, sales tax on web services, ADA), local SEO for Austin, and how to vet any studio.',
  category: 'Web Design & Strategy',
  author: 'Bhavesh Barot',
  date: 'May 23, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/web-design-austin-tx-small-business-guide-2026-hero.webp',
  imageAlt: 'A bike shop owner at his counter reviews his new small business website on a laptop, with bikes on the walls and daylight from the front windows',
  meta: {
    title: 'Austin Web Design for Small Business: 2026 Cost Guide',
    description:
      'What Austin small business websites cost in 2026, Texas rules that touch a new site (assumed names, sales tax, ADA), local SEO, and how to vet a studio.',
  },
  keyTakeaways: [
    'WebFX puts a US small business website at $1,000 to $48,000 on average, with small agencies at $6,000 to $12,000. Austin quotes sit inside that band; scope moves the number more than the zip code does.',
    'Austin passed one million residents: 1,002,632 on 1 July 2025, per the Census Bureau, up 4.6% on the 2020 base. More people means more local competitors in every search result.',
    'Texas has 3.5 million small businesses, 99.8% of all firms in the state, per the SBA Office of Advocacy 2025 profile.',
    'The Texas Comptroller lists "creating web (home) page and providing server space" as a taxable data processing service. Ask whether your quote includes sales tax.',
    'A business open to the public is covered by ADA Title III, and the Justice Department says that reaches websites. Budget for accessibility in the build, not after a complaint.',
    'Google ranks local results mainly on relevance, distance and prominence. A fast site with clean LocalBusiness schema supports the first and third; your address decides the second.',
    'FactoryJet offers 7-day delivery for sites of 5 pages or fewer and quotes a fixed price in writing after a short scoping call.',
  ],
  faqs: [
    {
      q: 'How much does web design cost for a small business in Austin, TX?',
      a: 'Most Austin small business sites land between a few thousand dollars and the low tens of thousands. WebFX, which publishes US pricing, puts small business websites at $1,000 to $48,000 on average and small agencies at $6,000 to $12,000. Page count, custom design, copywriting, booking or ecommerce features, and integrations move a quote more than the studio\'s address does. Ask every bidder for an itemized scope so the numbers compare.',
    },
    {
      q: 'How much does it cost to have someone design a website for me?',
      a: 'It depends on who builds it and how much they build. WebFX lists hosting plus a small DIY builder at $10 to $200 a month, small agencies at $6,000 to $12,000 for a build, and large agencies up to $48,000. Freelancers usually sit between DIY and a small agency. The written scope matters more than the headline figure: page count, who writes the copy, revision rounds and what happens after launch.',
    },
    {
      q: 'Who is the best web design company in Austin TX for a small business?',
      a: 'There is no single best one. The right studio is the one whose recent sites match yours in size and goal, that shows mobile PageSpeed results on live client sites, and that quotes a fixed, itemized scope. Firms ranking for Austin web design searches include GLIDE, Monkee-Boy, Pallasart Web Design and Lost Highway Media. Shortlist three, run their client sites through PageSpeed Insights, and call one reference for each.',
    },
    {
      q: 'Do I need an Austin-based agency, or can a remote team build my site?',
      a: 'A remote team can build it. Search engines rank your site on its content, speed and local signals, not on where the developer sits. What you need is a team that answers during your business hours, shares a written scope, and knows Austin local SEO. A local studio makes sense if you want in-person workshops. Ask any provider, local or remote, how fast they respond when the site breaks.',
    },
    {
      q: 'How long does it take to build a small business website in Austin?',
      a: 'A five-page brochure site can go live in one to two weeks when copy, logo and photos are ready at kickoff. Larger sites with custom design, booking, or a product catalog usually take four to twelve weeks. Content is the most common delay, not code. FactoryJet offers 7-day delivery for sites of 5 pages or fewer, measured from the day it receives your content.',
    },
    {
      q: 'Is web design still worth it in 2026 for an Austin small business?',
      a: 'Yes. A website is the one channel you own, and it is what Google and AI assistants read when someone asks who does your kind of work in Austin. Social profiles and directories can change their rules overnight. The question is how much site you need: a five-page service site is enough for many trades, while a store or clinic with online booking needs more.',
    },
    {
      q: 'Is AI replacing web designers?',
      a: 'AI tools now write first-draft code, copy and layouts quickly, and they cut the time a simple page takes. They do not decide what your page should say to an Austin buyer, test it on a mid-range phone, check it against accessibility rules, or fix it when a form stops sending leads. Good designers use AI to move faster. Treat any provider who sells raw AI output as a finished site with caution.',
    },
    {
      q: 'Can I get a free website for my Austin business?',
      a: 'Free builder tiers exist, and they are fine for testing an idea. The catch is usually a builder subdomain instead of your own name, the builder\'s branding on every page, and limited control over speed and schema. For a business that wants to rank in Austin searches, pay for your own domain and hosting from day one so the site can grow without a rebuild.',
    },
    {
      q: 'What is the 3-second rule in website design?',
      a: 'It is a rule of thumb: a visitor should understand who you are, what you do and what to do next within about three seconds of the page appearing. In practice that means a plain headline naming your service and Austin, one clear button, and a page that loads fast on mobile. Google\'s own Core Web Vitals target is to show the main content within 2.5 seconds.',
    },
    {
      q: 'Does my Austin LLC need to file an assumed name for its website brand?',
      a: 'If your website and marketing use a name that differs from your entity\'s legal name, Texas expects an assumed name certificate. For LLCs, corporations and other registered entities this is Form 503 with the Texas Secretary of State, which lists a $25 filing fee and a default term of 10 years. Register the name before you buy the domain and print it on the site.',
    },
    {
      q: 'Is website design taxable in Texas?',
      a: 'Often, yes. Texas Comptroller Publication 94-127 lists "creating web (home) page and providing server space" among taxable data processing services. How a specific invoice is taxed depends on what it bundles and how charges are itemized, so ask your designer whether Texas sales tax is included in the quote, and confirm unusual cases with the Comptroller or your accountant before you sign.',
    },
    {
      q: 'Does the ADA apply to my small business website in Austin?',
      a: 'If your business is open to the public, likely yes. The Justice Department\'s web guidance says ADA Title III covers businesses open to the public and that its requirements reach goods and services offered on the web. It points to the Web Content Accessibility Guidelines (WCAG) as helpful technical guidance. Ask your designer which WCAG level they build to and how they test it.',
    },
    {
      q: 'What should an Austin small business website include?',
      a: 'At minimum: a homepage that names your service and service area, one page per main service, an About page with real photos, a contact page with a form and click-to-call, and reviews. Add LocalBusiness schema with your exact name, address and phone, a Google Business Profile link, and a privacy policy. A service area page for Round Rock or Cedar Park only helps if its content is written for that city.',
    },
    {
      q: 'How do I rank my Austin business website on Google Maps and local results?',
      a: 'Google says local results are mainly based on relevance, distance and prominence. You control relevance with a complete Google Business Profile and service pages that match what people search. Prominence grows with reviews, links and mentions on other Austin sites. Distance depends on the searcher. Keep your name, address and phone identical on your site, your profile and every directory listing.',
    },
    {
      q: 'Which website platform is best for an Austin small business?',
      a: 'WordPress suits content-heavy service businesses that publish often. Shopify suits anyone selling products online. A custom Next.js build suits businesses that need top speed or unusual features. Wix and Squarespace are quick for simple sites and limit how far you can tune speed and structured data. Choose the platform after you list the features you need, not before.',
    },
    {
      q: 'How do I check whether an Austin web designer builds fast sites?',
      a: 'Ask for three live client sites, then run each one through Google\'s free PageSpeed Insights tool yourself on the mobile setting. Look at the Core Web Vitals: Google\'s good thresholds are Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less. A designer who cannot share live examples is a risk.',
    },
    {
      q: 'What questions should I ask an Austin web design agency before hiring?',
      a: 'Ask who owns the code, domain and hosting accounts after launch. Ask for a fixed, itemized scope with page count and revision rounds. Ask whether copywriting, stock photos and on-page SEO are included or extra. Ask how they handle accessibility and Texas sales tax on the invoice. Ask what support looks like in month two. Clear written answers to all five are a good sign.',
    },
    {
      q: 'Should my Austin website be in Spanish as well as English?',
      a: 'Consider it if your customers need it. Census Bureau data for 2020 to 2024 shows 30.3% of Austin residents age 5 and over speak a language other than English at home. For trades, clinics, legal and retail businesses serving those households, a Spanish version of your key service pages can widen your reach. Use real translation and proper hreflang tags, not a widget that machine-translates on the fly.',
    },
    {
      q: 'How much does a website cost per month after it launches?',
      a: 'Plan for hosting, your domain, and someone to keep the site updated. WebFX lists hosting plans at $10 to $200 a month, with shared hosting for small sites around $10 to $20, and domain renewals at $10 to $60 or more a year. WordPress sites also need plugin and security updates. Ask any Austin studio what is included after launch and what costs extra.',
    },
    {
      q: 'How big is the small business market in Texas?',
      a: 'Large. The SBA Office of Advocacy 2025 profile counts 3.5 million small businesses in Texas, 99.8% of all businesses in the state, employing 5.1 million people, or 44.4% of Texas employees. Between March 2023 and March 2024, small businesses accounted for 80,833 establishment openings in Texas. Every one of them is a potential competitor for the same local searches.',
    },
    {
      q: 'Can I redesign my existing Austin website instead of starting over?',
      a: 'Yes, if the structure and content still work and only the look and speed lag. A redesign keeps your URLs and the rankings attached to them. Start over when the site is built on a platform that cannot meet Core Web Vitals or accessibility needs, or when your services have changed so much that the old pages no longer fit. Keep a redirect map either way.',
    },
    {
      q: 'Can FactoryJet build a website for my Austin small business?',
      a: 'Yes. FactoryJet has served 500+ businesses since 2014 with 97% on-time delivery. We work remotely with Austin clients and schedule calls in Central Time business hours. Sites of 5 pages or fewer have 7-day delivery once content is ready, with LocalBusiness schema, Core Web Vitals checks and accessibility testing in scope. We quote a fixed price in writing after a short scoping call.',
    },
  ],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        An Austin small business website usually costs somewhere inside the band WebFX publishes for US small business
        sites: <a href={SRC.webfx} {...ext}>$1,000 to $48,000 on average, with small agencies at $6,000 to $12,000</a>.
        Where you land depends on page count, custom design, copywriting and features like booking or a product catalog.
        This guide covers those price drivers, the three Texas rules that touch a new website, local SEO for Austin, and
        how to vet any studio before you sign.
      </p>

      <div className="bg-[#FAFAF7] p-6 rounded-xl mb-8 border border-[#E5E5DF]">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li>Austin by the numbers</li>
          <li>What web design costs in Austin in 2026</li>
          <li>Three Texas rules that touch a new website</li>
          <li>What Austin small business sites need</li>
          <li>Local SEO essentials for Austin</li>
          <li>Austin web design firms that rank, and how to vet any of them</li>
          <li>What FactoryJet offers Austin businesses</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Austin by the numbers</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Austin crossed one million residents. The <a href={SRC.census} {...ext}>Census Bureau QuickFacts</a> estimate
        for 1 July 2025 is 1,002,632, up 4.6% on the April 2020 base of 958,151. The same table shows 98.0% of
        households own a computer and 93.8% have a broadband subscription (2020 to 2024 survey). Your buyers are online.
        So are your competitors.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Statewide, the <a href={SRC.sba} {...ext}>SBA Office of Advocacy 2025 Texas profile</a> counts 3.5 million small
        businesses, 99.8% of all Texas firms, employing 5.1 million people. Between March 2023 and March 2024 small
        businesses opened 80,833 Texas establishments. Many of them will want the same local search results you do.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Measure</th>
              <th className={thCls}>Figure</th>
              <th className={thCls}>Source (read 22 Oct 2026)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className={tdCls}>Austin population, 1 July 2025</td>
              <td className={tdCls}>1,002,632</td>
              <td className={tdCls}><a href={SRC.census} {...ext}>Census QuickFacts</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className={tdCls}>Median household income, 2020 to 2024</td>
              <td className={tdCls}>$93,658</td>
              <td className={tdCls}><a href={SRC.census} {...ext}>Census QuickFacts</a></td>
            </tr>
            <tr className="bg-white">
              <td className={tdCls}>Residents 5+ speaking a language other than English at home</td>
              <td className={tdCls}>30.3%</td>
              <td className={tdCls}><a href={SRC.census} {...ext}>Census QuickFacts</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className={tdCls}>Texas small businesses</td>
              <td className={tdCls}>3.5 million (99.8% of firms)</td>
              <td className={tdCls}><a href={SRC.sba} {...ext}>SBA Advocacy 2025</a></td>
            </tr>
            <tr className="bg-white">
              <td className={tdCls}>Texas small business employees</td>
              <td className={tdCls}>5.1 million (44.4% of employees)</td>
              <td className={tdCls}><a href={SRC.sba} {...ext}>SBA Advocacy 2025</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What web design costs in Austin in 2026</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        No public body tracks Austin web design prices, so use a national benchmark and adjust for scope. WebFX&apos;s
        small business pricing guide gives these bands:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Option</th>
              <th className={thCls}>Published market range</th>
              <th className={thCls}>Best fit</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className={tdCls}>Hosting plus a DIY builder</td>
              <td className={tdCls}>$10 to $200 a month</td>
              <td className={tdCls}>Testing an idea, very small budgets</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className={tdCls}>Small agency build</td>
              <td className={tdCls}>$6,000 to $12,000</td>
              <td className={tdCls}>Most service businesses with 5 to 15 pages</td>
            </tr>
            <tr className="bg-white">
              <td className={tdCls}>Large agency build</td>
              <td className={tdCls}>Up to $48,000</td>
              <td className={tdCls}>Complex sites, many integrations, brand work</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">
          Market ranges, not FactoryJet prices. Source: <a href={SRC.webfx} {...ext}>WebFX</a>, read 22 Oct 2026.
        </p>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Four things move an Austin quote most: the number of unique page templates, whether the studio writes your copy,
        features such as online booking, payments or a catalog, and integrations with your CRM or scheduling tool.
        Two quotes for &ldquo;a five-page site&rdquo; can differ by thousands of dollars because one includes copywriting
        and photography and the other does not. Line them up item by item before comparing totals.
      </p>

      <div className="bg-white border border-gray-200 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">Want a written scope for your Austin site?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Tell us how many pages you need, what the site must do, and when you want to launch. We reply with a fixed price
          in writing after a short scoping call. Sites of 5 pages or fewer have 7-day delivery.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Get a website quote</a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Three Texas rules that touch a new website</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <strong>1. Assumed names.</strong> If your website brand differs from your entity&apos;s legal name, file an
        assumed name. For LLCs and corporations that is{' '}
        <a href={SRC.sosForm503} {...ext}>Texas Secretary of State Form 503</a> (revised 09/26), which lists a $25
        filing fee and a default 10-year term. Do it before you print the name on your site, invoices and Google
        Business Profile.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <strong>2. Sales tax on web services.</strong>{' '}
        <a href={SRC.comptroller} {...ext}>Texas Comptroller Publication 94-127</a> lists &ldquo;creating web (home)
        page and providing server space&rdquo; as a taxable data processing service. How a bundled invoice is taxed
        depends on how it is itemized. Ask every bidder whether sales tax is in the quote, so the totals compare.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <strong>3. Accessibility.</strong> The <a href={SRC.ada} {...ext}>Justice Department&apos;s ADA web guidance</a>{' '}
        says Title III covers businesses open to the public and that its requirements reach services offered on the
        web. It names WCAG as helpful technical guidance. Building to WCAG from the start costs far less than retrofitting
        a live site.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What Austin small business sites need</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A plumber in Pflugerville and a dental clinic on South Lamar look nothing alike. Under the design, their sites need
        the same things: a headline that names the service and the area, one page per service, click-to-call and a short
        form above the fold on mobile, real reviews, and a page that loads fast on a mid-range phone.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Speed has a published target. Google&apos;s <a href={SRC.vitals} {...ext}>Core Web Vitals</a> call a page good
        when Largest Contentful Paint happens within 2.5 seconds, Interaction to Next Paint is 200 milliseconds or less,
        and Cumulative Layout Shift is 0.1 or less, measured at the 75th percentile of visits. Check any site against these
        with <a href={SRC.pagespeed} {...ext}>PageSpeed Insights</a>.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        What most Austin small businesses can skip: heavy animation, autoplay video headers, and a six-week discovery phase
        for a five-page site. Each adds cost and usually slows the page.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Local SEO essentials for Austin</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Google says <a href={SRC.gbpRanking} {...ext}>local results are mainly based on relevance, distance and
        prominence</a>. Your website feeds two of those three.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>LocalBusiness JSON-LD schema</strong> with your exact business name, Austin address, phone, hours and service area.</li>
        <li><strong>A complete Google Business Profile</strong> with the right primary category, real photos and a steady flow of reviews you reply to.</li>
        <li><strong>Service area pages</strong> for Round Rock, Cedar Park, Georgetown or Pflugerville only when you can write content specific to each.</li>
        <li><strong>Consistent name, address and phone</strong> on your site, your profile, Yelp, the BBB and Austin directories.</li>
        <li><strong>A Spanish version of key pages</strong> if your customers need it: 30.3% of Austin residents age 5 and over speak a language other than English at home, per <a href={SRC.census} {...ext}>Census QuickFacts</a>.</li>
      </ul>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Want this done for you? See <a href="/austin/seo" className="text-[#B23E13] underline">SEO for Austin businesses</a>{' '}
        or, if you sell products, <a href="/austin/ecommerce-development" className="text-[#B23E13] underline">ecommerce development in Austin</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Austin web design firms that rank, and how to vet any of them</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        These firms ranked on page one of Google for &ldquo;web design austin tx&rdquo; in a US search we ran on 22 Oct
        2026. Each description comes from the firm&apos;s own website, read the same day. We have not worked with or
        audited any of them.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className={thCls}>Firm</th>
              <th className={thCls}>What its own site says</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className={tdCls}><a href={SRC.glide} {...ext}>GLIDE</a></td>
              <td className={tdCls}>Web design and digital marketing agency; claims 22 years of design work; names WordPress expertise and lists SEO, AI search and website maintenance.</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className={tdCls}><a href={SRC.monkeeBoy} {...ext}>Monkee-Boy</a></td>
              <td className={tdCls}>Austin address on Jollyville Rd; focuses on enterprise-grade WordPress sites, web accessibility and WordPress security and support.</td>
            </tr>
            <tr className="bg-white">
              <td className={tdCls}><a href={SRC.pallas} {...ext}>Pallasart Web Design</a></td>
              <td className={tdCls}>Austin address on Laurel Lane; custom designs with no pre-made templates; copyright line dates from 1996; small business, WordPress and shopping cart sites.</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className={tdCls}><a href={SRC.lostHighway} {...ext}>Lost Highway Media</a></td>
              <td className={tdCls}>Texas web design and SEO firm with city pages across the state; also offers hosting, photography and video.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">None of the four publishes prices on its homepage. Whoever you shortlist, use the same five checks:</p>
      <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-700">
        <li>Run three of their live client sites through PageSpeed Insights on mobile.</li>
        <li>Get a fixed, itemized scope with page count, copy, images and revision rounds named.</li>
        <li>Confirm you own the domain, hosting account and code after launch.</li>
        <li>Ask how they test accessibility and which WCAG level they build to.</li>
        <li>Ask whether Texas sales tax is included, and what support costs after launch.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What FactoryJet offers Austin businesses</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        FactoryJet has served 500+ businesses since 2014, with 97% on-time delivery. We work remotely with Austin
        clients and schedule calls in Central Time business hours. Sites of 5 pages or fewer have 7-day delivery once
        your content is ready. Every build includes LocalBusiness schema, Core Web Vitals checks, accessibility testing
        and full ownership of the code, and we quote a fixed price in writing after a short scoping call.
      </p>
      <p className="mb-8 text-gray-700 leading-relaxed">
        See <a href="/austin/web-design" className="text-[#B23E13] underline">web design for Austin businesses</a>, our{' '}
        <a href="/services/web-design" className="text-[#B23E13] underline">web design services</a>, the national{' '}
        <a href="/blog/website-cost-small-business-usa-2026" className="text-[#B23E13] underline">small business website cost guide</a>, or{' '}
        <a href="/contact" className="text-[#B23E13] underline">ask for a quote</a>.
      </p>

      <div className="bg-[#FAFAF7] border border-[#E5E5DF] rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">Austin website launch checklist</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Assumed name filed if your brand differs from your legal name</li>
          <li>Mobile Core Web Vitals in the good range on PageSpeed Insights</li>
          <li>LocalBusiness schema with your exact Austin name, address and phone</li>
          <li>Google Business Profile complete and linked</li>
          <li>Click-to-call and a short form visible on mobile without scrolling</li>
          <li>Accessibility checked against WCAG before launch</li>
        </ul>
      </div>

      <p className="text-xs text-gray-500 mt-8">
        Sources checked 22 Oct 2026: <a href={SRC.census} {...ext}>US Census Bureau QuickFacts, Austin city</a>,{' '}
        <a href={SRC.sba} {...ext}>SBA Office of Advocacy, 2025 Texas Small Business Profile</a>,{' '}
        <a href={SRC.sosForm503} {...ext}>Texas Secretary of State Form 503</a>,{' '}
        <a href={SRC.comptroller} {...ext}>Texas Comptroller Publication 94-127</a>,{' '}
        <a href={SRC.ada} {...ext}>ADA.gov web guidance</a>, <a href={SRC.webfx} {...ext}>WebFX</a>,{' '}
        <a href={SRC.vitals} {...ext}>web.dev Core Web Vitals</a>, <a href={SRC.gbpRanking} {...ext}>Google Business Profile Help</a>.
        Published prices and rules change; confirm with each source before you rely on them.
      </p>
    </>
  ),
};
