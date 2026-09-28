import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// Target query: "ecommerce replatforming without losing seo" (AI Overview fires, weakest
// page-one site has 9 referring domains; see pipeline/research/data/content-gap-2026-09-19.json).
// FAQs are real buyer questions from Google People Also Ask and the 2026-09-17 AI buyer sweep
// (question E17), plus adjacent store-owner questions.
//
// The FAQPage schema is generated centrally by the blog route (src/app/blog/[slug]/page.tsx)
// FROM this exact array, so the visible FAQs and the structured data can never drift apart.
// Do not add a second, hand-written FAQPage script anywhere in this file.
//
// External facts are fetch-verified (2026-09-28):
// - Google Search Central, site moves with URL changes: permanent 301/308 redirects, map old to
//   new URLs, keep redirects "at least 1 year", ranking fluctuation "a few weeks or more".
// - Google Search Central, redirects: permanent redirects signal the target should be canonical,
//   temporary (302/307) do not.
// - Shopify Help Center, URL redirects: redirects only work from broken (404) URLs, CSV import,
//   100,000 redirect limit (20,000,000 on Plus).
// No FactoryJet prices. Timelines match src/app/services/ecommerce-development (confirmed).
const faqs: FAQItem[] = [
  {
    q: 'Will I lose SEO if I change ecommerce platforms?',
    a: "Not if the move is planned. Rankings drop after a replatform for a handful of fixable reasons: old URLs stop working, product text and page titles do not come across, or the new site blocks Google by mistake. If every old URL gets a permanent 301 redirect to its closest new page, and your content and titles move with it, most stores see only a short wobble while Google recrawls. Google itself says to expect some fluctuation for a few weeks or more.",
  },
  {
    q: 'How do you redesign or replatform a website without losing SEO?',
    a: "Do four things in order. First, record every URL that gets traffic or links today, using your sitemap, Search Console and analytics. Second, map each old URL to one matching new URL and set up permanent 301 redirects. Third, carry over product text, page titles, meta descriptions, headings and structured data. Fourth, test everything on a staging copy before launch, then submit the new sitemap in Search Console on launch day and watch the reports for the next 90 days.",
  },
  {
    q: 'How long does it take for SEO to recover after a platform migration?',
    a: "Google says a medium-sized site can take a few weeks or more before it shows the new URLs instead of the old ones, and rankings can move around during that time. A clean migration usually settles inside that window. If traffic is still falling after two or three months, something is broken, most often missing redirects, a leftover noindex tag, or product pages that lost their text. That is a problem to diagnose, not wait out.",
  },
  {
    q: 'What is a 301 redirect, and why does it matter in a migration?',
    a: "A 301 redirect is a permanent forwarding rule. When someone, or Google, visits an old page address, the server sends them straight to the new one and says the move is permanent. Google treats that as a signal that the new page should take the old page's place in search results. Without it, the old address just shows a Page Not Found error and the ranking it earned is lost.",
  },
  {
    q: 'Should I use a 301 or a 302 redirect when I change platforms?',
    a: "Use a 301 (or a 308, which is also permanent). Google's documentation says permanent redirects tell its indexing system that the new page should become the main version. A 302 or 307 is temporary, so Google keeps showing the old address in results. Many migration tools and plugins default to a 302, so check the redirect type before launch, not after you notice rankings sliding.",
  },
  {
    q: 'How long should I keep my old redirects after a migration?',
    a: "Keep them as long as you can. Google's own guidance is at least one year, so it has time to transfer all the signals from old URLs to new ones. In practice there is little reason to ever remove them. Old links on other websites, bookmarks and email campaigns keep sending people to the old addresses for years, and every one of those visits would otherwise land on an error page.",
  },
  {
    q: 'Can I just redirect all my old pages to the homepage?',
    a: "No. Google treats a mass redirect to the homepage much like a missing page, so the ranking each product or category page earned does not carry across. It also frustrates shoppers who clicked a link expecting a specific product. Redirect each old URL to the closest matching new page: product to product, category to category, blog post to blog post. Only send a URL to a broader page when the exact item truly no longer exists.",
  },
  {
    q: 'Do my product URLs have to change when I move to Shopify?',
    a: "Usually, yes. Shopify puts every product under /products/ and every category under /collections/, and you cannot change those prefixes. So a WooCommerce address like /product/blue-mug/ or a Magento address ending in .html will become something like /products/blue-mug. That is fine as long as each old address gets a 301 redirect to its new one. Keep the handle (the last part of the URL) the same where you can, so the mapping stays simple.",
  },
  {
    q: 'How do redirects work on Shopify?',
    a: "Shopify has a built-in URL redirect tool under Content, then Menus, then View URL redirects. You can add them one at a time or import a CSV file of old and new addresses. According to Shopify, a redirect only fires when the old URL is broken (it shows a 404), and stores can hold up to 100,000 redirects, or 20,000,000 on Shopify Plus. Most small and mid-size catalogs fit comfortably inside that limit.",
  },
  {
    q: 'What is the most common SEO mistake in an ecommerce migration?',
    a: "Launching with a staging block still switched on. While a new store is being built, teams often add a noindex tag or a robots.txt rule so Google does not index the unfinished site. If nobody removes it at launch, Google is told to drop the whole store from search. It is a one-line fix, but it can wipe out traffic within days. Check it first thing on launch day.",
  },
  {
    q: 'Will my product reviews move to the new platform?',
    a: "They can, but it is not automatic. Reviews usually live in a separate app or plugin, so they need their own export and import. This matters for SEO because reviews add real text to product pages and can power the star ratings shown in Google results through structured data. Ask your migration team which review app you will use on the new platform and how the old reviews get attached to the right products.",
  },
  {
    q: 'What is structured data, and do I need to rebuild it after migrating?',
    a: "Structured data is a small block of code that tells search engines exactly what a page is: a product, its price, its stock level, its reviews. It is what makes rich results like prices and star ratings possible. Every platform and theme generates it differently, so check it on the new store before launch using Google's Rich Results Test. Missing product structured data is a quiet reason for losing visibility after a move.",
  },
  {
    q: 'Do I need to update my XML sitemap after replatforming?',
    a: "Yes. An XML sitemap is a file that lists the pages you want search engines to find. Your new platform will generate a new one at a new address. On launch day, submit it in Google Search Console and remove the old one, because Google's guidance is that it will use the new sitemap going forward. Then use the Page indexing report to watch old URLs drop out and new ones get indexed.",
  },
  {
    q: 'Can I migrate customer accounts and passwords to a new platform?',
    a: "You can move customer records such as names, emails, addresses and order history. Passwords are a different story. Platforms store them in scrambled form that usually cannot be carried to another system, so customers typically get an email inviting them to activate their account on the new store. Plan that email carefully. It is not an SEO issue, but a confusing one causes support tickets and lost repeat orders in the first weeks.",
  },
  {
    q: 'Should I redesign and replatform at the same time?',
    a: "It is common and often sensible, since you are rebuilding every template anyway. The risk is that too many things change at once, so if traffic drops you cannot tell whether the cause was the URLs, the content, or the new design. If you do both together, keep the page text, titles and headings as close to the old site as possible for launch, then improve them in stages once rankings have settled.",
  },
  {
    q: 'Does moving to a headless storefront hurt SEO?',
    a: "It can if the storefront relies on the browser to build every page with JavaScript. A headless storefront is one where the shop front is custom code, often Next.js, connected to a commerce engine like Shopify behind the scenes. Built well, with pages rendered on the server, it can be very fast and search friendly. Built badly, Google may see near-empty pages. Ask how pages are rendered before you sign off on the architecture.",
  },
  {
    q: 'What should be in a URL redirect map?',
    a: "At minimum, two columns: the old URL and the new URL it should point to. A good map also notes the page type (product, category, content, blog), how much traffic and how many backlinks the old page has, and whether the match is exact or a fallback. Build it from a full crawl of the old site plus your Search Console and analytics exports, so pages that only exist in old links are not missed.",
  },
  {
    q: 'How do I find all the URLs on my current store?',
    a: "Use three sources and combine them. Your current XML sitemap lists the pages the platform knows about. A crawler tool finds pages linked from inside your site. Search Console and your analytics show the pages that actually get visits and impressions, including old ones that still receive traffic from other websites. Google recommends using sitemaps, server logs and analytics together, because each one misses something the others catch.",
  },
  {
    q: 'What does an ecommerce migration cost?',
    a: "The price depends on the amount of data and the amount of change, not on how the site looks. The main drivers are how many URLs need mapping, how many products, variants, customers and orders move across, which apps and integrations need replacing (reviews, subscriptions, ERP, shipping), whether the design is rebuilt, and whether you run several languages or currencies. Get a quote after a short discovery, not before it, because each of these can change the scope a lot.",
  },
  {
    q: 'How long does an ecommerce replatforming project take?',
    a: "For the builds we run, a platform store with a custom theme takes 3 to 5 weeks. An advanced store with subscriptions, B2B pricing or a larger migration takes 5 to 8 weeks. A headless storefront or custom platform runs 8 to 14 weeks. The migration itself is part of that timeline. What stretches it most is catalog size, the number of integrations, and how clean the old data is.",
  },
  {
    q: 'When is the best time of year to replatform an online store?',
    a: "After your busiest season, never right before it. For most US retailers that means avoiding a launch between October and the end of the holiday rush, because any short dip in rankings or checkout issue costs the most then. Early in the year or late spring gives you time to settle before peak. Work back from your target date: if the project takes 5 to 8 weeks, start planning well ahead of it.",
  },
  {
    q: 'Should I keep my old platform running after launch?',
    a: "Keep read-only access to the old store for a while, even after the domain points to the new one. You will want to check an old page's text, look up an order, or confirm what a URL used to show when something goes missing. Just make sure the old store is not also publicly live on another address, where Google could index it as a duplicate copy of your site.",
  },
  {
    q: 'How do I know if my migration went wrong?',
    a: "Watch four signals in the first weeks: a rise in 404 errors in Search Console, a drop in indexed pages, organic clicks falling well below the same weeks before launch, and landing pages from analytics that now show errors. Crawl your old URL list and confirm every one returns a single 301 to a working page. Most problems show up in the first two weeks, which is why the monitoring plan matters as much as the launch.",
  },
  {
    q: 'What questions should I ask an agency about migration SEO?',
    a: "Ask to see their redirect map template. Ask how they find URLs that are not in the sitemap. Ask how they test redirects before launch and whether every redirect is a single hop. Ask who removes the staging noindex and who submits the new sitemap. And ask what happens after launch: who watches Search Console, for how long, and who fixes problems. An agency that goes quiet after go-live is the biggest migration risk of all.",
  },
];

export const post: BlogPost = {
  id: '745',
  slug: 'ecommerce-replatforming-without-losing-seo-2026',
  title: 'How to Replatform Your Ecommerce Store Without Losing SEO (2026)',
  excerpt:
    'Moving from WooCommerce, Magento, BigCommerce, Wix or Squarespace to Shopify, or to a headless storefront? Here is the plain-language plan for keeping your Google rankings: the redirect map, what to carry over, launch-day checks, and the 90 days after.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 28, 2026',
  readTime: '16 min read',
  imageUrl: '/images/replatforming/replatforming-team-review.webp',
  imageAlt:
    'A store owner at her desk reviewing her ecommerce site on two monitors while planning a platform migration',
  meta: {
    title: 'Ecommerce Replatforming Without Losing SEO: 2026 Guide',
    description:
      'How to move your online store to a new platform without losing Google rankings: 301 redirect maps, Shopify URL rules, content carry-over, launch-day checklist, cost drivers and 24 buyer FAQs.',
  },
  keyTakeaways: [
    'Rankings drop after a replatform for fixable reasons: broken old URLs, missing product text and titles, lost structured data, or a staging noindex left on at launch.',
    'Every old URL that gets traffic or links needs a permanent 301 redirect to its closest new page. Google recommends keeping those redirects for at least a year.',
    'Moving to Shopify almost always changes URLs, because products live under /products/ and categories under /collections/. That is fine if the redirect map is complete.',
    'Shopify redirects only fire from broken URLs and are capped at 100,000 per store (20,000,000 on Plus), so plan the map before you import it.',
    'Expect some ranking movement for a few weeks. A drop that is still falling after two or three months means something is broken, not that you need to wait.',
    'Cost and time are driven by URL count, data volume, integrations and design scope. Our builds run 3 to 5, 5 to 8, or 8 to 14 weeks depending on complexity.',
  ],
  faqs,
  content: (
    <>
      {/* Structured data: WebPage + Service. FAQPage and BreadcrumbList are emitted
          once, centrally, by the blog route (src/app/blog/[slug]/page.tsx) from
          post.faqs above, so a second hand-written FAQPage block does not belong here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id':
                'https://factoryjet.com/blog/ecommerce-replatforming-without-losing-seo-2026#webpage',
              url: 'https://factoryjet.com/blog/ecommerce-replatforming-without-losing-seo-2026',
              name: 'How to Replatform Your Ecommerce Store Without Losing SEO (2026)',
              description:
                'How to move an online store to a new platform without losing Google rankings: 301 redirect maps, Shopify URL rules, content carry-over, launch-day checks and post-launch monitoring.',
              inLanguage: 'en-US',
              datePublished: '2026-09-28',
              dateModified: '2026-09-28',
              author: { '@type': 'Person', name: 'Bhavesh Barot' },
              publisher: { '@id': 'https://factoryjet.com/#organization' },
              primaryImageOfPage:
                'https://factoryjet.com/images/replatforming/replatforming-team-review.webp',
              about: [
                { '@type': 'Thing', name: 'Ecommerce replatforming' },
                { '@type': 'Thing', name: 'Website migration SEO' },
                { '@type': 'Thing', name: '301 redirect' },
              ],
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.answer-first'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Ecommerce Replatforming and Migration',
              name: 'FactoryJet Ecommerce Migration',
              description:
                'Ecommerce platform migrations to Shopify, Shopify Plus, BigCommerce and headless Next.js storefronts, including URL redirect mapping, product, customer and order data migration, SEO carry-over and post-launch support.',
              provider: { '@id': 'https://factoryjet.com/#organization' },
              areaServed: [
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Country', name: 'United Kingdom' },
              ],
              url: 'https://factoryjet.com/services/shopify-migration-agency',
            },
          ]),
        }}
      />

      {/* Answer-first block for AI Overviews / ChatGPT citation */}
      <div className="answer-first bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-900">
          You keep your SEO through a platform move by doing four things. List every URL that gets
          traffic or links today. Point each one to its closest new page with a permanent 301
          redirect. Carry over the product text, page titles, meta descriptions and structured data.
          Then test on staging, submit the new sitemap in Google Search Console on launch day, and
          watch the reports for 90 days. Do that, and most stores see only a short wobble while
          Google recrawls. Skip any one of them, and you can lose rankings that took years to earn.
        </p>
      </div>

      <p className="mb-4 text-gray-800">
        Most store owners do not replatform for fun. You move because WooCommerce plugins keep
        breaking, Magento upgrades cost too much, Wix or Squarespace cannot handle your catalog, or
        you have outgrown a basic Shopify theme and want a faster headless storefront. The new
        platform is usually the easy part. The part that keeps owners awake is the question every
        one of them asks us on the first call: will I lose my Google traffic?
      </p>
      <p className="mb-4 text-gray-800">
        The honest answer is that a migration puts your rankings at risk, and a planned migration
        keeps almost all of that risk under control. This guide is the plan. It is written for US
        store owners moving to Shopify, Shopify Plus, BigCommerce or a headless Next.js storefront,
        but the same steps apply to any platform change.
      </p>
      <p className="mb-6 text-gray-800">
        Quick vocabulary, once. <strong>Replatforming</strong> means moving your store from one
        ecommerce system to another. A <strong>301 redirect</strong> is a permanent forwarding rule
        that sends visitors and Google from an old page address to a new one.{' '}
        <strong>Staging</strong> is a private copy of the new store used for testing before launch.{' '}
        <strong>Structured data</strong> is code that tells search engines a page is a product, with
        a price, stock level and reviews. <strong>Search Console</strong> is Google&apos;s free
        dashboard for how your site shows up in search. That is the whole glossary.
      </p>

      <figure className="mb-8">
        <img
          src="/images/replatforming/replatforming-team-review.webp"
          alt="A store owner reviewing her current online store on two monitors before a platform migration"
          width={1280}
          height={800}
          loading="lazy"
          className="w-full h-auto rounded-2xl"
        />
        <figcaption className="text-sm text-gray-700 mt-2">
          The work that protects your rankings happens before launch day, not after it.
        </figcaption>
      </figure>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <h3 className="text-lg font-bold mb-3 text-gray-900">What this guide covers</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-800">
          <li><a href="#why-rankings-drop" className="text-[#B23E13] underline">Why rankings drop after a replatform</a></li>
          <li><a href="#what-changes" className="text-[#B23E13] underline">What changes when you move from each platform</a></li>
          <li><a href="#seven-phase-plan" className="text-[#B23E13] underline">The seven-phase migration plan</a></li>
          <li><a href="#shopify-rules" className="text-[#B23E13] underline">Shopify redirect rules you need to know</a></li>
          <li><a href="#launch-checklist" className="text-[#B23E13] underline">12 things to check on launch day</a></li>
          <li><a href="#first-90-days" className="text-[#B23E13] underline">The first 90 days after launch</a></li>
          <li><a href="#cost-drivers" className="text-[#B23E13] underline">What drives the cost and timeline</a></li>
          <li><a href="#ask-your-agency" className="text-[#B23E13] underline">What to ask a migration agency</a></li>
        </ol>
      </div>

      <h2 id="why-rankings-drop" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Why rankings drop after a replatform
      </h2>
      <p className="mb-4 text-gray-800">
        Google does not punish you for changing platforms. It ranks pages, and a migration changes
        the pages. When traffic falls after a move, it almost always comes down to one of these six
        causes. Each one is preventable.
      </p>
      <ol className="list-decimal pl-5 space-y-3 mb-6 text-gray-800">
        <li>
          <strong>Old URLs stop working.</strong> Your product and category pages earned rankings
          and backlinks at their old addresses. If those addresses show a 404 error after launch,
          that value is gone. This is the single biggest cause of post-migration traffic loss.
        </li>
        <li>
          <strong>Redirects are the wrong type or go to the wrong place.</strong> A temporary 302
          instead of a permanent 301, a chain of several redirects in a row, or thousands of pages
          all pointed at the homepage. Each one leaks ranking value.
        </li>
        <li>
          <strong>Content does not come across.</strong> Product descriptions get shortened in the
          import, category intro text is dropped, the blog is left behind, or reviews stay in the
          old plugin. Less text on a page means less for Google to rank.
        </li>
        <li>
          <strong>Titles, meta descriptions and headings reset.</strong> Many imports bring over
          product names but not the custom page titles and descriptions you wrote for search. The
          new platform fills in defaults, and click-through from Google falls.
        </li>
        <li>
          <strong>Technical signals break.</strong> Missing product structured data, wrong canonical
          tags (the tag that tells Google which version of a page is the main one), a slower theme,
          or a headless storefront that builds pages only in the browser.
        </li>
        <li>
          <strong>The staging block is left on.</strong> A noindex tag or robots.txt rule meant to
          hide the unfinished site is still there at launch, telling Google to drop the whole store.
        </li>
      </ol>

      <h2 id="what-changes" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What changes when you move from each platform
      </h2>
      <p className="mb-4 text-gray-800">
        Every platform has its own URL pattern. When the pattern changes, every product and category
        URL changes with it, which is why the redirect map matters so much. Here is what typically
        changes on the most common US moves.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Move</th>
              <th className="p-3 border text-left">What usually changes</th>
              <th className="p-3 border text-left">Biggest SEO risk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">WooCommerce to Shopify</td>
              <td className="p-3 border text-gray-800">/product/ becomes /products/, /product-category/ becomes /collections/, blog moves under /blogs/</td>
              <td className="p-3 border text-gray-800">Blog posts and custom pages left out of the redirect map</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Magento (Adobe Commerce) to Shopify Plus</td>
              <td className="p-3 border text-gray-800">.html endings removed, nested category paths flattened, layered-navigation filter URLs disappear</td>
              <td className="p-3 border text-gray-800">Very large URL counts, including filter pages that were indexed</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">BigCommerce to Shopify</td>
              <td className="p-3 border text-gray-800">Products that sat at the root of the domain move under /products/, category paths change</td>
              <td className="p-3 border text-gray-800">Custom page titles and descriptions not exported</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Wix or Squarespace to Shopify</td>
              <td className="p-3 border text-gray-800">Almost every URL changes, including product and page paths</td>
              <td className="p-3 border text-gray-800">No clean export of URLs, so pages get missed</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Shopify theme to headless Next.js</td>
              <td className="p-3 border text-gray-800">URLs can stay the same, but how pages are built and served changes completely</td>
              <td className="p-3 border text-gray-800">Pages rendered only in the browser, lost structured data</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        If your move is one of these, we have written platform-specific pages for{' '}
        <a href="/replatforming/woocommerce-to-shopify" className="text-[#B23E13] underline">WooCommerce to Shopify</a>,{' '}
        <a href="/replatforming/magento-to-shopify" className="text-[#B23E13] underline">Magento to Shopify</a>,{' '}
        <a href="/replatforming/bigcommerce-to-shopify-plus" className="text-[#B23E13] underline">BigCommerce to Shopify Plus</a>,{' '}
        <a href="/replatforming/wix-to-shopify" className="text-[#B23E13] underline">Wix to Shopify</a> and{' '}
        <a href="/replatforming/squarespace-to-shopify" className="text-[#B23E13] underline">Squarespace to Shopify</a>.
        Magento stores should also read our{' '}
        <a href="/blog/magento-to-shopify-plus-migration-checklist-2026" className="text-[#B23E13] underline">Magento to Shopify Plus migration checklist</a>.
      </p>

      <h2 id="seven-phase-plan" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The seven-phase migration plan
      </h2>
      <p className="mb-4 text-gray-800">
        This is the order we run migrations in. The first four phases happen before anyone touches
        your domain settings, and that is on purpose. Almost every SEO problem after launch traces
        back to something skipped here.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 1: Benchmark what you have</h3>
      <p className="mb-4 text-gray-800">
        Before anything changes, record where you stand. Export the last 12 months of pages and
        search queries from Search Console, your top landing pages from analytics, and your current
        rankings for the terms that bring in sales. Save it. After launch, this is the only way to
        tell a normal wobble from a real drop, and to see exactly which pages lost traffic.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 2: Find every URL</h3>
      <p className="mb-4 text-gray-800">
        Google recommends building your list of old URLs from sitemaps, server logs and analytics
        together (
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] underline"
        >
          Google Search Central, site moves with URL changes
        </a>
        ). Add a full crawl of your current store and the list of pages that other websites link to.
        Each source catches pages the others miss: old product pages that still get visits from
        Pinterest, a discontinued collection with a strong backlink, a landing page from a past
        campaign.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 3: Build the redirect map</h3>
      <p className="mb-4 text-gray-800">
        The redirect map is a spreadsheet with one row per old URL and the single new URL it should
        point to. Match like with like: product to product, category to collection, blog post to
        blog post. If a product is gone for good, point it to the closest category, not the
        homepage. Mark which rows carry the most traffic and backlinks, so those get tested first.
        This spreadsheet is the most valuable document in the whole project.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 4: Carry over content and metadata</h3>
      <p className="mb-4 text-gray-800">
        Move the full product descriptions, category intro text, blog posts, image alt text, custom
        page titles and meta descriptions. Bring reviews across through the new review app, so the
        text and star ratings stay on the right products. Check that the new theme outputs product
        structured data (name, price, availability, reviews) and correct canonical tags. If you are
        also redesigning, keep the words close to the old site at launch and improve them later.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 5: Test on staging</h3>
      <p className="mb-4 text-gray-800">
        Import the redirects on the staging store and test them with a crawler. Every old URL should
        return one permanent 301 and land on a working page. No chains of two or three redirects, no
        loops, no 302s. Google explains that permanent redirects tell it the new page should become
        the main version, while temporary 302 and 307 redirects do not (
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] underline"
        >
          Google Search Central, redirects and Google Search
        </a>
        ). Also run the key product and collection pages through Google&apos;s Rich Results Test
        and a speed test.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 6: Launch day</h3>
      <p className="mb-4 text-gray-800">
        Point the domain, remove the staging noindex, confirm robots.txt allows crawling, switch on
        the redirects, and submit the new XML sitemap in Search Console. Then spot-check your top 50
        old URLs by hand. The full list is in the launch-day checklist below.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Phase 7: Monitor for 90 days</h3>
      <p className="mb-6 text-gray-800">
        Watch Search Console, analytics and the 404 report daily for the first two weeks, then
        weekly. Fix broken redirects the day you find them. Google says a medium-sized site can take
        a few weeks or more to settle, so the job is not done at launch. This is where many agencies
        step away, and it is where most preventable losses happen.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl my-8">
        <p className="font-semibold text-gray-900 mb-2">
          Planning a move and worried about your rankings?
        </p>
        <p className="text-gray-800 mb-4">
          Send us your current platform, where you want to go, and roughly how many products you
          sell. We will tell you what your migration involves, where the SEO risk sits for your
          store, and a realistic timeline, before you commit to anything.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/services/shopify-migration-agency"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Plan your store migration
          </a>
          <a
            href="/services/ecommerce-development"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-orange-100 transition-colors"
          >
            See our ecommerce development work
          </a>
        </div>
      </div>

      <h2 id="shopify-rules" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Shopify redirect rules you need to know
      </h2>
      <p className="mb-4 text-gray-800">
        Most US replatforming projects land on Shopify or Shopify Plus, and Shopify handles
        redirects in its own way. Three rules, straight from Shopify&apos;s help center (
        <a
          href="https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] underline"
        >
          Shopify Help Center, URL redirects
        </a>
        ), shape how your redirect map gets built:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-800">
        <li>
          <strong>Redirects only fire from broken URLs.</strong> A redirect works only when the old
          address shows a 404 on the new store. You cannot redirect away from a page that still
          exists, so old URLs that happen to match a live Shopify page need a different fix.
        </li>
        <li>
          <strong>There is a cap.</strong> Stores can hold up to 100,000 URL redirects, or
          20,000,000 on Shopify Plus. That is plenty for most catalogs, but a Magento store with
          years of indexed filter URLs can get close, which is one reason to redirect filter pages by
          pattern and priority rather than one by one.
        </li>
        <li>
          <strong>Some paths are fixed.</strong> Products always live under /products/ and
          collections under /collections/. Your old URL structure cannot be copied exactly, so the
          goal is a clean one-to-one map, not identical addresses.
        </li>
      </ul>
      <p className="mb-6 text-gray-800">
        Redirects can be added one at a time or imported as a CSV file of old and new paths. Build
        the CSV from your redirect map, import it on staging first, and test it before launch.
      </p>

      <h2 id="launch-checklist" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        12 things to check on launch day
      </h2>
      <p className="mb-4 text-gray-800">
        Print this. Tick each one off before you announce the new store.
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-800">
        <li>The staging noindex tag is removed from every template.</li>
        <li>robots.txt allows crawling of products, collections and blog pages.</li>
        <li>All redirects are imported and live on the production store.</li>
        <li>Your top 50 old URLs by traffic each return a single 301 to the right page.</li>
        <li>No redirect chains or loops (old URL to new URL in one step).</li>
        <li>Canonical tags point to the live domain, not the staging address.</li>
        <li>Product structured data passes Google&apos;s Rich Results Test.</li>
        <li>Page titles and meta descriptions on top pages match what you approved.</li>
        <li>The new XML sitemap is submitted in Search Console and the old one removed.</li>
        <li>Analytics and conversion tracking fire on product, cart and checkout pages.</li>
        <li>A test order goes through checkout, payment and the confirmation email.</li>
        <li>The customer account invite email is ready, if accounts moved across.</li>
      </ol>

      <h2 id="first-90-days" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The first 90 days after launch
      </h2>
      <p className="mb-4 text-gray-800">
        Some movement is normal. Google says to expect ranking fluctuations while it recrawls and
        reindexes the site, and to keep redirects in place for at least a year so it can move all
        the signals from old URLs to new ones. What matters is the direction of travel.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">When</th>
              <th className="p-3 border text-left">What to check</th>
              <th className="p-3 border text-left">What it tells you</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Days 1 to 14</td>
              <td className="p-3 border text-gray-800">404 errors, redirect coverage, top landing pages, checkout conversion</td>
              <td className="p-3 border text-gray-800">Whether anything was missed in the map</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Weeks 3 to 6</td>
              <td className="p-3 border text-gray-800">Page indexing report: old URLs dropping out, new URLs indexed</td>
              <td className="p-3 border text-gray-800">Whether Google is picking up the move</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Weeks 6 to 12</td>
              <td className="p-3 border text-gray-800">Organic clicks and rankings against your Phase 1 benchmark</td>
              <td className="p-3 border text-gray-800">Whether traffic has settled or needs fixing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        If clicks are still sliding after two or three months, do not wait it out. Pull the list of
        pages that lost the most traffic against your benchmark, and check each one for a missing
        redirect, a noindex tag, thin text or a changed title. The cause is almost always on that
        list. Our <a href="/services/ecommerce-seo" className="text-[#B23E13] underline">ecommerce SEO</a>{' '}
        team runs exactly this review for stores that migrated with another provider.
      </p>

      <h2 id="cost-drivers" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What drives the cost and timeline of a migration
      </h2>
      <p className="mb-4 text-gray-800">
        A migration is priced on data and change, not on how the new site looks. Two stores with the
        same design can be very different projects. These are the things that move the scope:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Cost driver</th>
              <th className="p-3 border text-left">Why it adds work</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Number of URLs to map</td>
              <td className="p-3 border text-gray-800">Every product, variant, category, filter and blog URL needs a matched destination and a test</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Data volume and quality</td>
              <td className="p-3 border text-gray-800">Products, variants, customers and order history all move; messy old data takes cleaning first</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Apps and integrations</td>
              <td className="p-3 border text-gray-800">Reviews, subscriptions, loyalty, shipping, ERP or inventory systems each need a replacement and a data move</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">B2B features</td>
              <td className="p-3 border text-gray-800">Customer-specific pricing, net terms and wholesale accounts have to be rebuilt, not just copied</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Design scope</td>
              <td className="p-3 border text-gray-800">Moving onto a customized theme is quicker than a full redesign or a headless storefront</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Languages, currencies and markets</td>
              <td className="p-3 border text-gray-800">Each market adds URLs, hreflang tags (the tags that tell Google which country a page is for) and testing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-800">
        On timing, here is what our builds take. A platform store with a custom theme takes 3 to 5
        weeks. An advanced store with subscriptions, B2B pricing or a larger migration takes 5 to 8
        weeks. A headless Next.js storefront or custom platform runs 8 to 14 weeks. The migration
        and SEO work sit inside those timelines, not on top of them.
      </p>
      <p className="mb-6 text-gray-800">
        We do not publish a fixed migration price, because the drivers above change the scope too
        much for one number to be honest. We quote after a short discovery call. If you want to
        understand the wider cost picture first, read our guides to{' '}
        <a href="/blog/ecommerce-website-cost-2026" className="text-[#B23E13] underline">ecommerce website cost</a>{' '}
        and{' '}
        <a href="/blog/shopify-development-cost-2026" className="text-[#B23E13] underline">Shopify development cost</a>.
      </p>

      <h2 id="ask-your-agency" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What to ask a migration agency before you hire them
      </h2>
      <p className="mb-4 text-gray-800">
        Plenty of agencies can build a new store. Fewer can move an old one without losing its
        traffic. These questions separate the two quickly.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Ask this</th>
              <th className="p-3 border text-left">A strong answer sounds like</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Can I see your redirect map template?</td>
              <td className="p-3 border text-gray-800">They show you a real spreadsheet with old URL, new URL, page type and priority</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">How do you find URLs that are not in the sitemap?</td>
              <td className="p-3 border text-gray-800">Crawl, Search Console, analytics and backlink data combined</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">How do you test redirects before launch?</td>
              <td className="p-3 border text-gray-800">A full crawl of old URLs on staging, checking for single-hop 301s</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">What happens to reviews, blog posts and customer accounts?</td>
              <td className="p-3 border text-gray-800">A named plan for each, not &quot;we will sort it out&quot;</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Who watches Search Console after launch, and for how long?</td>
              <td className="p-3 border text-gray-800">A named person and a defined monitoring period, with fixes included</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        For the wider hiring checklist, see our guide on{' '}
        <a href="/blog/how-to-choose-ecommerce-development-agency-2026" className="text-[#B23E13] underline">how to choose an ecommerce development agency</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How we run migrations at FactoryJet
      </h2>
      <p className="mb-6 text-gray-800">
        We are a registered Shopify Partner and we design, build and support stores on Shopify,
        Shopify Plus, BigCommerce, WooCommerce and headless Next.js. On a migration, we build the
        redirect map before we touch your domain, carry over your content and structured data, test
        every redirect on staging, and handle launch day with you. Then we stay on after launch to
        watch Search Console and fix what comes up, because the weeks after go-live are when a
        migration either holds its rankings or loses them. You own the store, the code and the data
        from day one. See the full scope on our{' '}
        <a href="/replatforming" className="text-[#B23E13] underline">replatforming and migration</a>{' '}
        page.
      </p>

      {/* End CTA */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-10 mb-4">
        <p className="font-semibold text-gray-900 mb-2">
          Get a straight read on your migration
        </p>
        <p className="text-gray-800 mb-4">
          Tell us what you sell, which platform you are on, and where you want to go. We will map
          out the SEO risk for your store and the steps to protect it, in plain language.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Talk to us about your migration
          </a>
          <a
            href="/services/shopify-migration-agency"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-amber-100 transition-colors"
          >
            See our migration service
          </a>
        </div>
      </div>
    </>
  ),
};

export default post;
