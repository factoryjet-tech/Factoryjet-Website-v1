import React from 'react';
import type { BlogPost } from '../data.types';

// Market price sources, each fetched and read on 22 Oct 2026.
const SRC = {
  webfxSmb: 'https://www.webfx.com/blog/web-design/how-much-does-it-cost-to-build-a-website-for-a-small-business/',
  webfxMaint: 'https://www.webfx.com/web-development/pricing/website-maintenance/',
  webfxRedesign: 'https://www.webfx.com/web-design/pricing/redesign/',
  webfxWp: 'https://www.webfx.com/web-design/pricing/wordpress-cost/',
  clutch: 'https://clutch.co/web-designers/pricing',
  shopify: 'https://www.shopify.com/blog/ecommerce-website-cost',
  bigcommerce: 'https://www.bigcommerce.com/articles/ecommerce/ecommerce-cost/',
  godaddy: 'https://www.godaddy.com/resources/skills/how-much-does-a-website-cost',
  wix: 'https://www.wix.com/plans',
};

const ext = { target: '_blank', rel: 'noopener noreferrer', className: 'text-[#B23E13] underline' } as const;

export const post: BlogPost = {
  id: '102',
  slug: 'website-cost-small-business-usa-2026',
  title: 'Small Business Website Cost in the USA (2026 Guide)',
  excerpt:
    'A US small business website costs $1,000 to $48,000 according to WebFX, and small agencies charge $6,000 to $12,000. This guide sets out the market ranges for DIY builders, freelancers, agencies, ecommerce and upkeep, each from a named source checked on 22 Oct 2026.',
  category: 'Web Design & Strategy',
  author: 'Bhavesh Barot',
  date: 'May 13, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '14 min read',
  imageUrl: '/blog-images/website-cost-small-business-usa-2026-hero.webp',
  meta: {
    title: 'Small Business Website Cost USA 2026: Market Ranges',
    description:
      'A US small business website costs $1,000 to $48,000 (WebFX); small agencies charge $6,000 to $12,000. DIY, freelancer, agency and upkeep ranges, sourced.',
  },
  keyTakeaways: [
    'WebFX puts a small business website at $1,000 to $48,000, with small agencies at $6,000 to $12,000 and large agencies up to $48,000.',
    'Clutch says most web design projects it reviewed cost under $10,000, and US firms bill $100 to $149 an hour (updated 21 Sep 2026).',
    'A WordPress freelancer runs $500 to $5,000 and a WordPress agency $3,000 to $100,000, per WebFX.',
    'Upkeep for a small business site runs $35 to $100 a month and $125 to $500 for a larger SMB site, per WebFX.',
    'Shopify lists Basic at $29, Grow at $79 and Advanced at $299 a month, billed yearly.',
    'Get every quote itemized: page count, copy, images, revision rounds, hosting and what happens after launch.',
    'FactoryJet offers 7-day delivery for sites of 5 pages or fewer and quotes a fixed price in writing after a short scoping call.',
  ],
  faqs: [
    {
      q: 'How much does a website cost for a small business in the USA in 2026?',
      a: 'WebFX puts a small business website at $1,000 to $48,000, with small agencies at $6,000 to $12,000 and large agencies up to $48,000. Clutch says most projects it reviewed came in under $10,000. A DIY builder costs a monthly plan fee instead, such as Wix Core at $29.77 a month billed yearly. Ecommerce sits higher: BigCommerce puts a small store at $1,000 to $5,000 and a custom mid-sized store at $5,000 to $25,000.',
    },
    {
      q: 'Is $1,500 a good price for a website?',
      a: 'For a small brochure site from a freelancer, yes. $1,500 sits inside the $500 to $5,000 band WebFX gives for a WordPress freelancer, and well under the $6,000 to $12,000 WebFX gives for a small agency. At that price expect a ready-made theme, a handful of pages and your own copy and photos. Ask in writing who hosts it, how many revision rounds you get and who fixes it after launch.',
    },
    {
      q: 'How much does a 5 page website cost?',
      a: 'A 5 page site usually lands at the low end of every published range. GoDaddy lists a small business site from a web designer at $640 and up, a WordPress freelancer runs $500 to $5,000 per WebFX, and small agencies charge $6,000 to $12,000 for a full build. Custom design, written copy and integrations move it up. FactoryJet offers 7-day delivery for sites of 5 pages or fewer, with a fixed price quoted after scoping.',
    },
    {
      q: 'What does Clutch say web design costs in 2026?',
      a: 'Clutch\'s web design pricing page, updated 21 September 2026, says agencies typically charge $2,000 to $100,000 and that most projects reviewed on Clutch cost less than $10,000. It lists an average project cost of $38,105 and a US hourly rate of $100 to $149. The average is pulled up by large projects, so the under-$10,000 figure is the better guide for a small business site.',
    },
    {
      q: 'What is the average cost of a website?',
      a: 'There are two published averages and they disagree because they measure different buyers. WebFX gives a small business range of $1,000 to $48,000. Clutch gives an average web design project of $38,105, but also says most projects it reviewed cost under $10,000. For a small business, budget against the WebFX small agency band of $6,000 to $12,000 and treat anything far above it as custom work.',
    },
    {
      q: 'What should a small business website package include?',
      a: 'A package worth paying for names the page count, custom or theme-based design, mobile layout, contact forms, basic on-page SEO (titles, descriptions, an XML sitemap, schema markup), analytics setup, and a set number of revision rounds. It should also say who writes the copy, who supplies images, where the site is hosted, who owns the code and domain, and what support you get after launch. Anything missing from the list is a likely change request later.',
    },
    {
      q: 'Why are some web design agencies much cheaper than others?',
      a: 'Price gaps come from process and scope more than talent. An agency with a repeatable build process and a fixed page count spends fewer hours per site than a boutique doing fully custom design. Template builds are faster still. Clutch lists US agency rates at $100 to $149 an hour, so hours drive most of the gap. A cheap quote is fine when the scope is written down. It is a risk when it is not.',
    },
    {
      q: 'Do I have to pay monthly fees after my website is built?',
      a: 'Yes. Hosting and a domain are unavoidable. WebFX lists hosting at $10 to $200 a month and a domain at $10 to $130 a year. Most sites also need updates and fixes: WebFX puts upkeep for a small business site at $35 to $100 a month and for a larger SMB site at $125 to $500. A store on Shopify adds its plan fee, from $29 a month billed yearly. Ask for the monthly total before you sign.',
    },
    {
      q: 'What does website maintenance cost per month?',
      a: 'WebFX\'s maintenance pricing guide lists $35 to $100 a month for a small business website, $125 to $500 for a larger SMB site, $1,500 to $2,500 for an ecommerce site and $2,000 to $5,000 for a custom ecommerce site. The spread reflects how much moves: a static brochure site needs little, while a WordPress or WooCommerce site needs core, theme and plugin updates plus security patches on a regular cycle.',
    },
    {
      q: 'How much does it cost to host a website for one year?',
      a: 'WebFX lists shared hosting at $2 to $15 a month, which is roughly $24 to $180 a year, and enough for most small brochure sites. Cloud hosting runs $10 to $200 a month and a dedicated server $80 to $500 or more. GoDaddy lists web hosting at $5.99 to $300+ a month. Add a domain at $10 to $130 a year per WebFX. Pick the platform first, because it decides which hosting you need.',
    },
    {
      q: 'How long does it take to build a small business website?',
      a: 'Most of the time goes into decisions and content, not code. A small brochure site can launch in days once copy, logo and photos are ready, while a store with integrations takes weeks. FactoryJet offers 7-day delivery for sites of 5 pages or fewer. The most common delay is waiting on content and feedback, so have your copy, images and logo ready before the build starts.',
    },
    {
      q: 'Should I use Wix or hire a web design agency?',
      a: 'Use Wix if your budget is small, you are testing an idea and you have time to build and edit it yourself. Wix lists Light at $17.77 and Core at $29.77 a month, billed yearly. Hire an agency if you need to rank in Google for commercial searches, sell online at volume, connect to other systems, or if your own hours are worth more than the fee. Many businesses start on a builder and move later.',
    },
    {
      q: 'What hidden costs should I watch for when hiring a web design agency?',
      a: 'The usual extras are copywriting, stock photos, logo work, premium themes and paid plugins. WebFX lists WordPress themes at $0 to $200 and plugins at $0 to $1,000. Also check for open-ended revision clauses, hosting billed through the agency at a markup, and an SEO retainer pitched before launch. Ask for one all-in quote that names hosting for year one and a fixed number of revision rounds.',
    },
    {
      q: 'How much does an ecommerce website cost for a small business in the USA?',
      a: 'BigCommerce puts a small store on a ready-made theme at $1,000 to $5,000, a store with custom design and integrations at $5,000 to $25,000, and mid-market or enterprise builds at $25,000 to $250,000+. Shopify\'s own guide puts custom development at $2,000 to $20,000 or more. On top come platform fees: Shopify Basic is $29 a month, Grow $79 and Advanced $299, all billed yearly.',
    },
    {
      q: 'How much does a Shopify store cost per month?',
      a: 'Shopify\'s ecommerce cost guide, updated 3 September 2026, lists Basic at $29 a month, Grow at $79 and Advanced at $299, all paid yearly. Shopify Plus is $2,300 a month on a three-year term. Paid apps, a premium theme (Shopify lists prebuilt themes at $0 to $500) and payment processing fees come on top, so total the apps you plan to use before you compare plans.',
    },
    {
      q: 'How much does it cost to redesign a website?',
      a: 'WebFX\'s redesign pricing page puts a website redesign at $3,000 to $75,000, with freelancers at $3,000 to $10,000 and agencies at $5,000 to $75,000. A restyle that keeps the content and page structure sits at the low end. A redesign that changes what the site does, adds a store or moves platforms costs about the same as a new build. Say which one you want when you ask for quotes.',
    },
    {
      q: 'What is the difference between a website redesign and a new website build?',
      a: 'A new build starts from scratch: structure, design, content and technical stack. A redesign keeps some of the existing content and structure and updates the design and speed. A new build costs more but leaves old technical problems behind. If the current site is slow on phones, hard to edit, or built on a platform you want to leave, a new build is usually the better use of money.',
    },
    {
      q: 'What is a fair price to pay for a website?',
      a: 'A fair price is one that buys the scope you need with the terms written down. A fair quote names the page count, who writes the copy, who supplies images, how many revision rounds you get, where the site is hosted and what happens after launch. Compare it against the published bands: $6,000 to $12,000 for a small agency per WebFX, and under $10,000 for most projects on Clutch.',
    },
    {
      q: 'How much should I pay someone to build a website for me?',
      a: 'Clutch lists US web design firms at $100 to $149 an hour. A WordPress freelancer quotes $500 to $5,000 for a project and an agency $3,000 to $100,000, per WebFX. For a small business site, a project price beats an hourly rate because it caps your spend. Ask for the price in writing with the scope attached. FactoryJet quotes a fixed price in writing after a short scoping call.',
    },
    {
      q: 'How much should I pay someone to manage my website?',
      a: 'WebFX puts management of a small business site at $35 to $100 a month and a larger SMB site at $125 to $500. Price it against what the plan covers: updates and security patches, backups with a tested restore, uptime monitoring, small content edits and a stated response time when the site goes down. If a plan does not say how fast someone responds to an outage, it is not a management plan.',
    },
    {
      q: 'Is it worth making a website for a small business?',
      a: 'For most businesses, yes, because it is the one channel you own outright. Social accounts and marketplaces can change their rules or suspend you without warning. Your site is also what Google and AI assistants read when someone asks who offers your service nearby. A small site on a builder plan starts at a few hundred dollars a year, so the real decision is how much to build, not whether.',
    },
    {
      q: 'Can ChatGPT actually create a website?',
      a: 'It can write working code for a simple page, and it helps with first drafts and specific fixes. It does not decide what the page is for, check that it is accessible, test how fast it loads on a mid-range phone, or fix it in six months. Use it as a fast assistant for content and small edits. For a site that has to bring in leads, someone still has to own the result.',
    },
    {
      q: 'Can I build my own website for free?',
      a: 'Yes, on a builder\'s free tier, and it is a sensible way to test an idea. The limits show up quickly: the builder\'s branding on your pages, a subdomain instead of your own name, and little room to move the site later. Paid builder plans remove those limits; GoDaddy lists its builder at $9.99 to $20.99+ a month. Free is fine for validating. It is a weak base for a growing business.',
    },
    {
      q: 'How do I compare website quotes from different agencies?',
      a: 'Put every quote in one table with the same rows: page count, custom or theme design, copywriting, images, SEO setup, integrations, revision rounds, hosting for year one, post-launch support, timeline and code ownership. Any blank row is a cost you will pay later. Check two or three live sites each agency built on Google PageSpeed Insights, and ask who you will talk to during the build.',
    },
  ],
  content: (
    <>
      <div className="bg-[#FAFAF7] p-6 rounded-xl mb-8 border border-[#E5E5DF]">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-[#B23E13]">
          <li>Small business website cost in 2026: the published ranges</li>
          <li>Tier 1: DIY website builders</li>
          <li>Tier 2: Freelancers</li>
          <li>Tier 3: Full-service agencies</li>
          <li>Tier 4: Fixed-scope agencies</li>
          <li>What a 5-page small business site should include</li>
          <li>Ecommerce website costs: Shopify, WooCommerce and custom</li>
          <li>Monthly costs after launch</li>
          <li>Redesign costs</li>
          <li>How to compare quotes line by line</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        A small business website in the USA costs $1,000 to $48,000, according to{' '}
        <a href={SRC.webfxSmb} {...ext}>WebFX&apos;s small business website cost guide</a>, and small agencies charge
        $6,000 to $12,000 of that. <a href={SRC.clutch} {...ext}>Clutch</a> says most web design projects it reviewed
        cost under $10,000. A DIY builder swaps the build fee for a monthly plan, and a store costs more than a
        brochure site. Every figure below comes from a named source we fetched and read on 22 October 2026.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Small business website cost in 2026: the published ranges</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        &quot;Website&quot; covers a three-page service brochure and a 200-product store with custom checkout, so no
        single number helps. The table groups the published ranges by who does the work. Compare total cost over
        three years, including upkeep, before you compare build prices.
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Who builds it</th>
              <th className="p-3 border border-gray-700 text-left">Upfront cost</th>
              <th className="p-3 border border-gray-700 text-left">Ongoing cost</th>
              <th className="p-3 border border-gray-700 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className="border p-3 font-semibold">DIY builder (Wix, GoDaddy)</td>
              <td className="border p-3">$0 plus your time</td>
              <td className="border p-3">$9.99 to $20.99+ a month (GoDaddy); Wix Core $29.77 a month, billed yearly</td>
              <td className="border p-3"><a href={SRC.godaddy} {...ext}>GoDaddy</a>, <a href={SRC.wix} {...ext}>Wix</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3 font-semibold">Freelancer (WordPress)</td>
              <td className="border p-3">$500 to $5,000</td>
              <td className="border p-3">$35 to $100 a month upkeep (small business site)</td>
              <td className="border p-3"><a href={SRC.webfxWp} {...ext}>WebFX WordPress</a>, <a href={SRC.webfxMaint} {...ext}>WebFX upkeep</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Small agency</td>
              <td className="border p-3">$6,000 to $12,000</td>
              <td className="border p-3">$125 to $500 a month upkeep (SMB site)</td>
              <td className="border p-3"><a href={SRC.webfxSmb} {...ext}>WebFX</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3 font-semibold">Large agency</td>
              <td className="border p-3">Up to $48,000</td>
              <td className="border p-3">Quoted per contract</td>
              <td className="border p-3"><a href={SRC.webfxSmb} {...ext}>WebFX</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Fixed-scope agency</td>
              <td className="border p-3">Fixed price after scoping</td>
              <td className="border p-3">Stated in the quote</td>
              <td className="border p-3">Ask for it in writing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#FAFAF7] border border-[#E5E5DF] p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3 text-gray-900">Not sure which tier fits you?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Three answers usually settle it: how many pages you need, how much upkeep you want to handle yourself, and
          when you need to launch. Send us those and we will tell you which option makes sense, then send a written
          quote before any work starts. To see what a build includes, read about our{' '}
          <a href="/services/web-design" className="text-[#B23E13] underline">web design services</a>.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Get a website quote &rarr;</a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tier 1: DIY website builders</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <a href={SRC.wix} {...ext}>Wix&apos;s plans page</a> lists Light at $17.77, Core at $29.77, Business at
        $39.77 and Business Elite at $159.77 a month, billed yearly (shown in USD for reference; Wix says prices vary by
        location). <a href={SRC.godaddy} {...ext}>GoDaddy</a> lists its website builder at $9.99 to $20.99+ a month,
        or $120 to $300+ a year. The cash cost is low. The real cost is your time, spent learning the tool, writing the
        pages and keeping them current.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Builders suit a new business testing an idea, a sole trader who needs a contact page, or anyone with more time
        than budget. They get harder to live with when you want custom page structures, detailed schema markup, fast
        load times on cheap phones, or a move to another platform later.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tier 2: Freelancers</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        A WordPress freelancer costs $500 to $5,000, according to{' '}
        <a href={SRC.webfxWp} {...ext}>WebFX&apos;s WordPress cost guide</a>. GoDaddy&apos;s FAQ gives a similar
        $500 to $5,000 for a one-page site. The spread reflects skill: a theme set up by a junior developer and a
        custom build by a ten-year specialist are different products at the same job title.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The main risks are availability and handover. One person can get sick, get busy or move on. Before you hire,
        run two or three of their live sites through Google PageSpeed Insights on mobile, ask who hosts the site and
        holds the logins, and agree in writing that you own the domain and the code. Keep the upfront payment to half
        or less.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tier 3: Full-service agencies</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        WebFX puts small agencies at $6,000 to $12,000 and large agencies up to $48,000.{' '}
        <a href={SRC.clutch} {...ext}>Clutch&apos;s web design pricing page</a>, updated 21 September 2026, says
        agencies typically charge $2,000 to $100,000, that most projects reviewed on Clutch cost less than $10,000,
        and that US firms bill $100 to $149 an hour. Clutch also lists an average project of $38,105, which large
        builds pull upward.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The agency fee buys a team: a project manager, a designer, a developer and someone who checks the work. It
        also buys a contract and a company to hold to it. Ask who will do the design and build, who your contact is,
        and how changes are priced once the scope is signed.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tier 4: Fixed-scope agencies</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Some agencies sell a defined build at a fixed price: a set page count, a set process and a set launch date.
        No published survey tracks this tier separately, so judge it by the written scope rather than a market
        average. The trade is less open-ended custom design for a known price and a known date.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        FactoryJet works this way. Sites of 5 pages or fewer have 7-day delivery, you own the code, and we quote a
        fixed price in writing after a short scoping call. FactoryJet was founded in 2014, has served 500+ businesses,
        keeps a 97% on-time delivery record and schedules calls in US business hours.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What a 5-page small business site should include</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Whatever the price, a quote for a small business site should name each of these. A missing line is a cost
        that comes back later as a change request.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>The pages: usually Home, About, Services, Contact and one more (a blog, a location page or a key service).</li>
        <li>Custom design or a named theme, and how many design revision rounds you get.</li>
        <li>Mobile layout, tested on a real phone.</li>
        <li>Who writes the copy and who supplies the photos.</li>
        <li>On-page SEO: page titles, meta descriptions, headings, an XML sitemap and schema markup.</li>
        <li>Contact forms that land in your inbox or CRM, plus analytics set up and tested.</li>
        <li>Hosting for year one, domain ownership in your name, and who holds the logins.</li>
        <li>Support after launch: how long, what it covers and how fast someone responds.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ecommerce website costs: Shopify, WooCommerce and custom</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <a href={SRC.bigcommerce} {...ext}>BigCommerce&apos;s ecommerce cost guide</a> puts a small store on a
        ready-made theme at $1,000 to $5,000 and a store with custom design and integrations at $5,000 to $25,000.{' '}
        <a href={SRC.shopify} {...ext}>Shopify&apos;s own cost guide</a>, updated 3 September 2026, puts custom
        development at $2,000 to $20,000 or more. For a deeper Shopify breakdown, see our{' '}
        <a href="/blog/shopify-development-cost-2026" className="text-[#B23E13] underline">Shopify development cost guide</a>.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Store type</th>
              <th className="p-3 border border-gray-700 text-left">Build cost</th>
              <th className="p-3 border border-gray-700 text-left">Platform fee</th>
              <th className="p-3 border border-gray-700 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className="border p-3 font-semibold">Small store, ready-made theme</td>
              <td className="border p-3">$1,000 to $5,000</td>
              <td className="border p-3">Shopify Basic $29 a month, billed yearly</td>
              <td className="border p-3"><a href={SRC.bigcommerce} {...ext}>BigCommerce</a>, <a href={SRC.shopify} {...ext}>Shopify</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3 font-semibold">Custom design and integrations</td>
              <td className="border p-3">$5,000 to $25,000</td>
              <td className="border p-3">Shopify Grow $79 or Advanced $299 a month, billed yearly</td>
              <td className="border p-3"><a href={SRC.bigcommerce} {...ext}>BigCommerce</a>, <a href={SRC.shopify} {...ext}>Shopify</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold">WooCommerce / WordPress agency build</td>
              <td className="border p-3">$3,000 to $100,000</td>
              <td className="border p-3">Hosting, plugins $0 to $1,000</td>
              <td className="border p-3"><a href={SRC.webfxWp} {...ext}>WebFX</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3 font-semibold">Mid-market or enterprise</td>
              <td className="border p-3">$25,000 to $250,000+</td>
              <td className="border p-3">Shopify Plus $2,300 a month, three-year term</td>
              <td className="border p-3"><a href={SRC.bigcommerce} {...ext}>BigCommerce</a>, <a href={SRC.shopify} {...ext}>Shopify</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Monthly costs after launch</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The build is a one-off. Hosting, the domain and upkeep are permanent.{' '}
        <a href={SRC.webfxMaint} {...ext}>WebFX&apos;s maintenance pricing guide</a> breaks the monthly figure down
        by site type:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Site type</th>
              <th className="p-3 border border-gray-700 text-left">Monthly upkeep (WebFX)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white"><td className="border p-3 font-semibold">Small business website</td><td className="border p-3">$35 to $100</td></tr>
            <tr className="bg-[#FAFAF7]"><td className="border p-3 font-semibold">Larger SMB website</td><td className="border p-3">$125 to $500</td></tr>
            <tr className="bg-white"><td className="border p-3 font-semibold">Ecommerce website</td><td className="border p-3">$1,500 to $2,500</td></tr>
            <tr className="bg-[#FAFAF7]"><td className="border p-3 font-semibold">Custom ecommerce website</td><td className="border p-3">$2,000 to $5,000</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The same guide lists a domain at $10 to $130 a year, shared hosting at $2 to $15 a month and cloud hosting at
        $10 to $200 a month. A static marketing site sits at the bottom of these bands. A WordPress or WooCommerce site
        needs core, theme and plugin updates plus security patches, which is why it sits higher.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Redesign costs</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <a href={SRC.webfxRedesign} {...ext}>WebFX&apos;s redesign pricing page</a> puts a redesign at $3,000 to
        $75,000, with freelancers at $3,000 to $10,000 and agencies at $5,000 to $75,000. A restyle that keeps your
        pages and content sits at the bottom. A redesign that adds a store, changes platform or rebuilds the page
        structure prices like a new build. Our{' '}
        <a href="/blog/website-redesign-cost-us-small-business-2026" className="text-[#B23E13] underline">website redesign cost guide</a>{' '}
        covers that decision in more detail.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How to compare quotes line by line</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Two quotes for &quot;a 5-page website&quot; can describe different jobs. Put them side by side with the same
        rows and the gaps show.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>Page count and which pages.</li>
        <li>Custom design or a named theme, and the number of revision rounds.</li>
        <li>Copywriting and images: included, extra, or yours to supply.</li>
        <li>SEO setup: titles, descriptions, sitemap, schema markup, redirects from any old site.</li>
        <li>Integrations: forms, booking, CRM, payments.</li>
        <li>Hosting for year one and who owns the domain and code.</li>
        <li>Support after launch, with a response time.</li>
        <li>Timeline, with the dates you must hand over content.</li>
      </ol>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Then check two or three live sites each provider built on Google PageSpeed Insights, on mobile. Any agency that
        will not itemize its quote or show live work is asking you to take the price on trust.
      </p>

      <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-8">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-[#B23E13] text-white text-xs font-bold uppercase rounded-full tracking-wider mb-3">
            7-day delivery for sites of 5 pages or fewer
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
            Get a fixed-price scope for your website build
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            500+ businesses served, 97% on-time delivery, founded 2014. Book a 30-minute scoping call with founder
            Bhavesh Barot and get a fixed price in writing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/bhavesh-factoryjet/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#B23E13] hover:bg-[#9A3510] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Book 30-Min Scoping Call
            </a>
            <a
              href="/services/web-design"
              className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg transition-colors hover:bg-gray-100"
            >
              See web design services
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAF7] border border-[#E5E5DF] rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">The bottom line</h3>
        <p className="text-gray-700 leading-relaxed">
          Budget against the published bands: $500 to $5,000 for a freelancer, $6,000 to $12,000 for a small agency,
          and more for custom work or a store. Add upkeep of $35 to $100 a month for a small site. Whatever you pay,
          get the scope in writing before work starts. For a wider calculator, see our{' '}
          <a href="/website-cost" className="text-[#B23E13] underline">website cost page</a>.
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-6 leading-relaxed">
        Sources checked 22 Oct 2026:{' '}
        <a href={SRC.webfxSmb} {...ext}>WebFX small business website cost</a>,{' '}
        <a href={SRC.webfxMaint} {...ext}>WebFX website maintenance pricing</a>,{' '}
        <a href={SRC.webfxRedesign} {...ext}>WebFX redesign pricing</a>,{' '}
        <a href={SRC.webfxWp} {...ext}>WebFX WordPress cost</a>,{' '}
        <a href={SRC.clutch} {...ext}>Clutch web design pricing</a>,{' '}
        <a href={SRC.shopify} {...ext}>Shopify ecommerce website cost</a>,{' '}
        <a href={SRC.bigcommerce} {...ext}>BigCommerce ecommerce cost</a>,{' '}
        <a href={SRC.godaddy} {...ext}>GoDaddy website cost</a>,{' '}
        <a href={SRC.wix} {...ext}>Wix plans</a>. Published prices change; confirm with each provider.
      </p>
    </>
  ),
};
