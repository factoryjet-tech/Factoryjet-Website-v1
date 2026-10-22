import React from 'react';
import type { BlogPost } from '../data.types';

// Every outside figure on this page was fetched and read on 22 Oct 2026.
const SRC = {
  census: 'https://www.census.gov/quickfacts/fact/table/miamicityflorida/PST045224',
  sbaMetro: 'https://advocacy.sba.gov/2025/10/28/advocacy-releases-2025-small-business-profiles-for-major-metropolitan-areas/',
  btr: 'https://www.mdctaxcollector.gov/services/local-business-tax-receipt',
  fictitious: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0800-0899/0865/Sections/0865.09.html',
  ada: 'https://www.ada.gov/resources/web-guidance/',
  hreflang: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
  vitals: 'https://web.dev/articles/vitals',
  noaa: 'https://www.nhc.noaa.gov/climo/',
  webfx: 'https://www.webfx.com/blog/web-design/how-much-does-it-cost-to-build-a-website-for-a-small-business/',
  absolute: 'https://absoluteweb.com/',
  lounge: 'https://www.loungelizard.com/',
  silk: 'https://www.digitalsilk.com/',
};

const ext = { target: '_blank', rel: 'noopener noreferrer', className: 'text-[#B23E13] underline' } as const;

export const post: BlogPost = {
  id: '146',
  slug: 'web-design-miami-fl-small-business-2026',
  title: 'Web Design in Miami, FL: A 2026 Guide for Small Businesses',
  excerpt:
    'A Miami small business website should be bilingual if your customers are, fast on a phone, accessible, and backed up before hurricane season. National market ranges run $1,000 to $48,000 (WebFX). This guide covers costs, Spanish and English builds, Miami-Dade paperwork and local SEO, with every figure linked to a source checked 22 Oct 2026.',
  category: 'Web Design & Strategy',
  author: 'Bhavesh Barot',
  date: 'May 23, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/web-design-miami-fl-small-business-2026-hero.webp',
  imageAlt: 'Small business owner in Miami reviewing a bilingual English and Spanish website on a laptop',
  meta: {
    title: 'Web Design Miami FL: 2026 Small Business Guide | FactoryJet',
    description:
      'Miami small business web design in 2026: market price ranges, bilingual English and Spanish sites, Miami-Dade tax receipts, ADA and local SEO, all sourced.',
  },
  keyTakeaways: [
    '77.2% of Miami residents aged 5 and over speak a language other than English at home (US Census QuickFacts, 2020-2024), so a Spanish version is a sales decision for most consumer-facing businesses.',
    'Small businesses supply 53.6% of jobs in the Miami-Fort Lauderdale-West Palm Beach metro against 45.9% nationally (SBA Office of Advocacy, Oct 2025).',
    'WebFX puts a small business website at $1,000 to $48,000, with small agencies at $6,000 to $12,000. We found no published survey of Miami-only prices we could verify.',
    'Google asks that each language version list itself and every other version in hreflang. Missing self-references is a common bilingual-site fault.',
    'Before launch: a Miami-Dade local business tax receipt (plus a city receipt inside a municipality) and, if you trade under a name other than your own, a $50 Florida fictitious name registration.',
    'Hurricane season runs June 1 to November 30 (NOAA). Keep off-site backups and a way to post closures on your site and Google Business Profile.',
    'FactoryJet delivers sites of 5 pages or fewer in 7 days, has served 500+ businesses since 2014 with 97% on-time delivery, and quotes a fixed price in writing after a short scoping call.',
  ],
  faqs: [
    {
      q: 'How much does web design cost in Miami?',
      a: 'There is no published survey of Miami-only web design prices that we could verify. The closest national benchmark, WebFX, puts a small business website at $1,000 to $48,000, with small agencies at $6,000 to $12,000 and large agencies up to $48,000. Miami studios set their own rates, and a bilingual site adds a second set of pages to write and check. Ask every bidder for an itemized quote listing pages, languages and revision rounds.',
    },
    {
      q: 'What should a web design service for a small business in Miami include?',
      a: 'At minimum: a mobile-first design, a clear service or menu page, click-to-call, a contact or booking form, LocalBusiness schema with your Miami address, Google Analytics, and a Google Business Profile that matches the site. If your customers speak Spanish, add a Spanish version with hreflang tags. Ask who writes the copy, who owns the domain and code at the end, and what happens if the site goes down.',
    },
    {
      q: 'Do Miami small businesses need a bilingual website?',
      a: 'Most consumer-facing ones do. US Census QuickFacts reports that 77.2% of Miami residents aged 5 and over speak a language other than English at home (2020-2024), and 71.5% of residents are Hispanic or Latino. A law firm, clinic, contractor or restaurant serving those households loses calls when the site is English only. A business-to-business firm selling outside Florida may not need one, so decide by who actually buys from you.',
    },
    {
      q: 'How should a bilingual English and Spanish website be set up for Google?',
      a: 'Give each language its own URL, such as /es/ for Spanish, and add hreflang tags. Google says each language version must list itself as well as all other language versions, and that hreflang can sit in the HTML, in HTTP headers or in the sitemap. Google also says it does not use hreflang or the lang attribute to detect a page language, so the Spanish page must actually be written in Spanish.',
    },
    {
      q: 'Is machine translation good enough for the Spanish version of my site?',
      a: 'Use it for a first draft only. Machine output often misses the terms Miami customers search with and reads stiffly on service and pricing pages, where trust matters most. Have a fluent Spanish speaker who knows your trade edit every page, then write Spanish page titles and meta descriptions from scratch rather than translating the English ones word for word.',
    },
    {
      q: 'Do I need a Miami-Dade local business tax receipt before my website goes live?',
      a: 'You need one to operate, and the site should not take orders before you do. The Miami-Dade Tax Collector requires a receipt for each place of business, and businesses inside a municipality need both a city receipt and a county receipt. Receipts run October 1 to September 30. Unrenewed receipts take a 10% penalty in October plus 5% a month, capped at 25% of the tax.',
    },
    {
      q: 'Do I have to register a fictitious name in Florida for my business website?',
      a: 'Yes, if you trade under any name other than your legal name. Florida Statute 865.09 says a person may not engage in business under a fictitious name without first registering it with the Division of Corporations, and the registration fee is $50. Do it before you buy the domain and print the name across your website, because a business that skips it cannot bring a lawsuit in Florida courts until it registers.',
    },
    {
      q: 'Does my Miami business website need to be ADA accessible?',
      a: 'Plan for it. The US Department of Justice web guidance, dated 18 March 2022, says Title III of the ADA covers businesses open to the public and that inaccessible website features can limit access for people with disabilities. In practice that means alt text on images, readable color contrast, labelled form fields, captions on video and a site you can use with a keyboard alone.',
    },
    {
      q: 'How should I prepare my website for hurricane season in Miami?',
      a: 'NOAA says the Atlantic hurricane season runs June 1 to November 30. Before June, confirm backups are stored off the main server and test a restore. Add a banner you can switch on to post closures or changed hours, and update your Google Business Profile hours at the same time. Keep login details for your domain, host and site in a place you can reach from a phone.',
    },
    {
      q: 'Who are the best web design agencies in Miami?',
      a: 'It depends on the job. Absolute Web, with a Miami address on NE 191st Street, presents itself as an ecommerce strategy and development agency working on Shopify, Adobe Commerce, Magento and BigCommerce. Lounge Lizard lists an office on Brickell Avenue and offices in eight other cities. Digital Silk lists a Miami, FL address. Compare any shortlist on live client sites, PageSpeed results and who owns the code at the end.',
    },
    {
      q: 'Is it safe to hire a web design agency outside Miami?',
      a: 'Yes, if you check the same things you would check locally: live client sites you can test at pagespeed.web.dev, a fixed-price contract, references you can call and a named person who answers during your business hours. FactoryJet works remotely with US clients and schedules calls in US business hours. You give up in-person meetings; you keep everything else that a written scope controls.',
    },
    {
      q: 'How long does it take to build a small business website in Miami?',
      a: 'It depends on page count and how ready your content is. FactoryJet delivers sites of 5 pages or fewer in 7 days. A store on a custom theme on a platform such as Shopify takes 3 to 5 weeks, and stores with subscriptions, B2B pricing or a migration take 5 to 8 weeks. A Spanish version adds writing and review time, so have both sets of copy ready at kickoff.',
    },
    {
      q: 'What makes an excellent website for a Miami small business?',
      a: 'A visitor on a phone can tell within a few seconds what you do, which neighborhoods you serve and how to reach you, in the language they prefer. The page loads fast on mobile data, the phone number is tappable, the address and hours match Google Business Profile, and the photos are your own. Reviews or named past work near the top help more than decoration does.',
    },
    {
      q: 'How can you tell if a website is good?',
      a: 'Measure it. Google says a good page has Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads. Run the URL through PageSpeed Insights, try it on your own phone, fill in the contact form and check the email arrives. Then ask three customers to find your prices.',
    },
    {
      q: 'What is the 3 second rule in website design?',
      a: 'It is a rule of thumb that a visitor should grasp what a page offers within about three seconds of landing on it. It is not a measured standard. The measured one is Google\'s Largest Contentful Paint target of 2.5 seconds. For a Miami business, the practical test is whether the first screen on a phone shows what you sell, where you are and a call button.',
    },
    {
      q: 'Do I need a Magento developer in Miami for my online store?',
      a: 'Only if you already run Magento or Adobe Commerce, or need its depth for large catalogs, several store views or complex B2B pricing. Absolute Web in Miami lists Magento and Adobe Commerce among its platforms, and FactoryJet also does Magento development remotely. Many smaller Miami retailers are better served by Shopify, which has lower upkeep. Pick the platform before you pick the developer.',
    },
    {
      q: 'What does a CRO agency do for a Miami business website?',
      a: 'Conversion rate optimization means changing a site so more visitors call, book or buy, then measuring the result. A CRO agency reviews analytics and session recordings, finds where people drop off, and tests changes such as a shorter form, a clearer offer or a Spanish call to action. Ask for test results from past clients, not screenshots. FactoryJet offers this as ecommerce CRO work.',
    },
    {
      q: 'Should a small Miami business use Wix or Squarespace instead of hiring a designer?',
      a: 'A website builder is fine for testing an idea or for a one-page site you will update yourself. It gets harder once you need a full Spanish version with hreflang, booking tied to your calendar, or schema for several locations. If you start on a builder, buy the domain in your own name so you can move later without losing it.',
    },
    {
      q: 'Is website design in Fort Lauderdale different from Miami?',
      a: 'The buyers overlap. The SBA Office of Advocacy treats Miami-Fort Lauderdale-West Palm Beach as one metro area, where small businesses supply 53.6% of jobs. The difference is in search: people look for services by city and neighborhood. If you really serve Broward County, give it its own page with real details, such as your service area and jobs done there, rather than a copy of the Miami page.',
    },
    {
      q: 'How do I rank in Google for Miami neighborhood searches?',
      a: 'Start with a complete Google Business Profile that matches the address and hours on your site. Add LocalBusiness schema. Then write pages only for neighborhoods you actually serve, such as Brickell, Doral, Coral Gables or Hialeah, and give each one something specific: jobs done there, parking or access notes, staff who cover it. Near-identical pages with the neighborhood name swapped tend to be treated as doorway pages.',
    },
    {
      q: 'Should my Miami restaurant or hotel website take bookings online?',
      a: 'Yes, if bookings are how you make money, because visitors planning a trip often book from a phone without calling. Use the booking tool your staff already runs, embed it so it loads fast on mobile, and show it in both languages if your guests use both. Test the full booking path on a phone before launch and after every update.',
    },
    {
      q: 'Which platform should a Miami small business use for its website?',
      a: 'Match the platform to the job. Shopify suits most retailers selling products online. WordPress suits businesses that publish often and want many plugins. A custom build in a framework such as Next.js suits service businesses that want very fast pages, bilingual routing and full control of the code. Ask any agency why it recommends a platform for you, and who maintains it after launch.',
    },
    {
      q: 'Why does a website matter so much for small businesses in Miami?',
      a: 'Small businesses carry more of the local economy than in most large US metros. The SBA Office of Advocacy reported in October 2025 that small businesses account for 53.6% of employment in the Miami-Fort Lauderdale-West Palm Beach metro, above the 45.9% national share. With 83.6% of Miami households on a broadband subscription (Census, 2020-2024), your website is where many of those customers check you first.',
    },
    {
      q: 'What should I prepare before a web design project starts?',
      a: 'Have your logo files, your own photos, the services or products and prices you are willing to publish, and copy in each language you need. Collect logins for your domain, current host and Google Business Profile. Have your local business tax receipt and fictitious name registration in hand. Projects that start with content ready finish on time; missing copy is the usual cause of delay.',
    },
    {
      q: 'Can FactoryJet build a bilingual website for my Miami business?',
      a: 'Yes. FactoryJet builds English and Spanish sites with separate language URLs, hreflang tags that list every version, and Spanish page titles written for how people search. We can show you working pages built on your own content before you sign a contract, then quote a fixed price in writing after a short scoping call. Sites of 5 pages or fewer are delivered in 7 days.',
    },
  ],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        A Miami small business website needs four things a generic US template skips: a real Spanish version if your
        customers speak Spanish, pages that load fast on a phone, accessibility for every visitor, and a backup plan for
        hurricane season. Market prices for a small business site run{' '}
        <a href={SRC.webfx} {...ext}>$1,000 to $48,000 according to WebFX</a>, with small agencies at $6,000 to
        $12,000. This guide covers what drives the cost in Miami, how to build a bilingual site Google understands, the
        Miami-Dade paperwork to finish before launch, and how to compare local agencies. Every outside figure below was
        checked on 22 October 2026.
      </p>

      <div className="bg-[#FAFAF7] p-6 rounded-xl mb-8 border border-[#E5E5DF]">
        <h2 className="text-lg font-bold mb-3 text-gray-900">In this guide</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-800">
          <li>Miami in numbers</li>
          <li>What web design costs in Miami</li>
          <li>Building a bilingual English and Spanish site</li>
          <li>Paperwork to finish before launch</li>
          <li>Speed and accessibility</li>
          <li>Hurricane season and your website</li>
          <li>Local SEO for Miami neighborhoods</li>
          <li>Miami agencies that rank, and how to compare them</li>
          <li>How FactoryJet works with Miami businesses</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Miami in numbers</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Four public figures shape a Miami website brief. The language one matters most.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Figure</th>
              <th className="p-3 border border-gray-700 text-left">Value</th>
              <th className="p-3 border border-gray-700 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className="border p-3">Population, Miami city, 1 July 2025</td>
              <td className="border p-3">489,812</td>
              <td className="border p-3"><a href={SRC.census} {...ext}>US Census QuickFacts</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3">Speak a language other than English at home (age 5+, 2020-2024)</td>
              <td className="border p-3">77.2%</td>
              <td className="border p-3"><a href={SRC.census} {...ext}>US Census QuickFacts</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Hispanic or Latino residents</td>
              <td className="border p-3">71.5%</td>
              <td className="border p-3"><a href={SRC.census} {...ext}>US Census QuickFacts</a></td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3">Households with a broadband subscription (2020-2024)</td>
              <td className="border p-3">83.6%</td>
              <td className="border p-3"><a href={SRC.census} {...ext}>US Census QuickFacts</a></td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Share of metro jobs at small businesses (Miami-Fort Lauderdale-West Palm Beach)</td>
              <td className="border p-3">53.6% (US: 45.9%)</td>
              <td className="border p-3"><a href={SRC.sbaMetro} {...ext}>SBA Office of Advocacy, Oct 2025</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What web design costs in Miami</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We looked for a published survey of Miami-only web design prices and found none we could verify, so treat any
        Miami-specific average you see quoted with care. The national benchmark from{' '}
        <a href={SRC.webfx} {...ext}>WebFX</a> is the most useful starting point: $1,000 to $48,000 for a small business
        website, $6,000 to $12,000 from a small agency, and up to $48,000 from a large one. These are market ranges, not
        our prices.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        In Miami, three things push a quote up or down. A Spanish version doubles the copy to write and review. Booking or
        ordering tools add integration work. Neighborhood pages only help when each has real content, so they add writing
        time too. Ask every agency to itemize pages, languages, integrations and revision rounds, so you compare like with
        like.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3 text-gray-900">Want a fixed price for your Miami site?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Tell us your page count, whether you need Spanish, and your launch date. FactoryJet quotes a fixed price in
          writing after a short scoping call, and sites of 5 pages or fewer are delivered in 7 days. See{' '}
          <a href="/miami/web-design" className="text-[#B23E13] underline">web design for Miami businesses</a>.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Get a website quote &rarr;</a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Building a bilingual English and Spanish site</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <a href={SRC.census} {...ext}>US Census QuickFacts</a> reports that 77.2% of Miami residents aged 5 and over
        speak a language other than English at home. For a clinic, contractor, law firm or restaurant, an English-only
        site turns away a large share of the people searching for it.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Google&apos;s <a href={SRC.hreflang} {...ext}>guide to localized versions</a> sets the rules. Give each language
        its own URL. Mark the versions with hreflang in the HTML, in HTTP headers or in the sitemap. Each language
        version must list itself as well as all the others, and we see that self-reference missed often. Google also
        says it does not use hreflang or the HTML lang attribute to detect a page&apos;s language, so the Spanish page has
        to be written in Spanish, not left half-translated.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Write Spanish page titles and meta descriptions from scratch. A word-for-word translation of an English title
        rarely matches what people type. Have a fluent speaker who knows your trade edit the service and pricing pages,
        because those are the pages where a stiff sentence costs a call.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Paperwork to finish before launch</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Two registrations affect what you can print on the site. The{' '}
        <a href={SRC.btr} {...ext}>Miami-Dade Tax Collector</a> requires a local business tax receipt for each place of
        business, and a business inside a municipality needs both a city receipt and a county receipt. The tax year runs
        October 1 to September 30. Late renewals take a 10% penalty in October and 5% more each month, capped at 25% of
        the tax.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        If you trade under a name other than your legal name,{' '}
        <a href={SRC.fictitious} {...ext}>Florida Statute 865.09</a> requires you to register it with the Division of
        Corporations first. The fee is $50. Register before you buy the domain and put the name across your site.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Speed and accessibility</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Google&apos;s <a href={SRC.vitals} {...ext}>Core Web Vitals</a> give the targets: Largest Contentful Paint within 2.5
        seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, at the
        75th percentile of page loads. Visitors searching on a phone between appointments will not wait for a heavy hero
        video. Compress your photos and test on a mid-range phone, not only on a laptop.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The Department of Justice <a href={SRC.ada} {...ext}>web accessibility guidance</a> (18 March 2022) says Title III
        of the ADA covers businesses open to the public and that inaccessible website features can limit access for
        people with disabilities. Build in alt text, readable contrast, labelled form fields and keyboard navigation from
        the start. Retrofitting costs more.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Hurricane season and your website</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        <a href={SRC.noaa} {...ext}>NOAA&apos;s National Hurricane Center</a> says the Atlantic hurricane season runs June 1
        to November 30. Your website is how customers learn whether you are open after a storm. Before June:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
        <li>Store backups away from the main server and test a restore once.</li>
        <li>Add a banner you can switch on from a phone to post closures or new hours.</li>
        <li>Update Google Business Profile hours at the same time as the site.</li>
        <li>Keep domain, hosting and site logins somewhere you can reach without your office computer.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Local SEO for Miami neighborhoods</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        People search Miami by neighborhood: Brickell, Wynwood, Coral Gables, Doral, Hialeah, Miami Beach. Start with a
        complete Google Business Profile whose address and hours match your site, and add LocalBusiness schema. Then
        write a page only for each neighborhood you really serve, with details a copy-paste page cannot have: jobs done
        there, parking notes, the staff member who covers it. Pages that swap only the neighborhood name read as doorway
        pages. Our <a href="/miami/seo" className="text-[#B23E13] underline">Miami SEO page</a> covers this in more
        depth.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Miami agencies that rank, and how to compare them</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        These three appear on page one of Google for Miami web design searches (DataForSEO, 22 Oct 2026). Details are
        from each agency&apos;s own site on the same day.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700 text-left">Agency</th>
              <th className="p-3 border border-gray-700 text-left">What its site says</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="bg-white">
              <td className="border p-3 font-semibold"><a href={SRC.absolute} {...ext}>Absolute Web</a></td>
              <td className="border p-3">Ecommerce strategy and development agency with an address on NE 191st St, Miami; works on Shopify, Adobe Commerce, Magento and BigCommerce.</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="border p-3 font-semibold"><a href={SRC.lounge} {...ext}>Lounge Lizard</a></td>
              <td className="border p-3">Office at 1221 Brickell Ave, Miami, among nine listed offices; web design, ecommerce, development, digital marketing and branding.</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold"><a href={SRC.silk} {...ext}>Digital Silk</a></td>
              <td className="border p-3">Lists a Miami, FL address alongside New York, Chicago and San Diego; custom web design, ecommerce, branding and SEO.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Whoever you shortlist, compare them on the same four checks: PageSpeed Insights scores for three live client
        sites, a sample of their Spanish pages if you need Spanish, a written scope with a fixed price, and a contract
        that gives you the domain and code at the end.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How FactoryJet works with Miami businesses</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        FactoryJet works remotely with US clients and schedules calls in US business hours. We have served 500+
        businesses since 2014 with 97% on-time delivery. Sites of 5 pages or fewer are delivered in 7 days. We build
        English and Spanish versions with hreflang that lists every page, and we can show you working pages on your own
        content before you sign. For stores, see{' '}
        <a href="/services/ecommerce-development" className="text-[#B23E13] underline">ecommerce development</a>,{' '}
        <a href="/services/magento-development" className="text-[#B23E13] underline">Magento development</a> and{' '}
        <a href="/services/ecommerce-cro-agency" className="text-[#B23E13] underline">ecommerce CRO</a>.
      </p>

      <div className="bg-[#FAFAF7] border border-[#E5E5DF] rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">Miami launch checklist</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Largest Contentful Paint under 2.5 seconds on a phone</li>
          <li>Spanish version with hreflang that lists itself and the English page</li>
          <li>Miami-Dade (and city) business tax receipt, fictitious name registered</li>
          <li>Alt text, contrast and labelled forms checked</li>
          <li>Off-site backups and a closure banner ready before June 1</li>
          <li>Tappable phone number and hours that match Google Business Profile</li>
        </ul>
      </div>

      <p className="text-xs text-gray-500 mt-8">
        Sources checked 22 Oct 2026:{' '}
        <a href={SRC.census} {...ext}>US Census QuickFacts, Miami city</a>,{' '}
        <a href={SRC.sbaMetro} {...ext}>SBA Office of Advocacy metro profiles release</a>,{' '}
        <a href={SRC.btr} {...ext}>Miami-Dade Tax Collector</a>,{' '}
        <a href={SRC.fictitious} {...ext}>Florida Statute 865.09</a>,{' '}
        <a href={SRC.ada} {...ext}>ADA.gov web guidance</a>,{' '}
        <a href={SRC.hreflang} {...ext}>Google Search Central on localized versions</a>,{' '}
        <a href={SRC.vitals} {...ext}>web.dev Core Web Vitals</a>,{' '}
        <a href={SRC.noaa} {...ext}>NOAA National Hurricane Center</a>,{' '}
        <a href={SRC.webfx} {...ext}>WebFX small business website cost</a>. Agency details from each agency&apos;s own
        site. Published figures change; confirm with each source.
      </p>
    </>
  ),
};
