import React from 'react';
import type { BlogPost } from '../data.types';

// Re-aimed 2026-10-21 at "How much does a website cost in the UK in 2026?".
// Every price is a market figure from a named source, read on 2026-10-21:
//   - Whito, "How Much Does a Website Cost in the UK? Web Design Prices 2026"
//     (reviewed by Jacob Whitmore), https://whito.co.uk/research/website-design-costs-uk/
//     ("Last Updated on October 19, 2026"; "Data last verified: 19 October 2026").
//   - SpotDev, "Website Redesign Cost UK" (22 May 2026, figures ex VAT and indicative),
//     https://www.spotdev.co.uk/blog/website-redesign-cost-uk. SpotDev builds HubSpot sites.
//   - SpotDev, "What is the average cost of website design in the UK?",
//     https://www.spotdev.co.uk/blog/what-is-the-average-cost-of-website-design-in-the-uk
//     (header dated 4 Aug 2021, body says "Real 2026 price bands"; cited only for the
//     London brochure-site band, with the date mismatch stated in the copy).
// No FactoryJet price. The 10-page sums are our arithmetic on Whito's figures, labelled.
// Sibling posts own other questions: redesigns -> website-redesign-cost-uk-2026-complete-pricing-guide,
// online stores -> ecommerce-website-cost-uk-2026. Keep this post on new builds and owning costs.
const WHITO = 'https://whito.co.uk/research/website-design-costs-uk/';
const SPOTDEV_REDESIGN = 'https://www.spotdev.co.uk/blog/website-redesign-cost-uk';
const SPOTDEV_AVERAGE = 'https://www.spotdev.co.uk/blog/what-is-the-average-cost-of-website-design-in-the-uk';

const src = 'text-blue-600 underline hover:text-blue-800 transition-colors';

export const post: BlogPost = {
  id: '120',
  slug: "uk-web-design-agency-pricing-2026-smb-guide",
  title: "How Much Does a Website Cost in the UK in 2026?",
  excerpt: "Most UK businesses pay £3,000 to £6,000 for a professionally built website in 2026. A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency, and an online store £5,000 to £20,000 or more (Whito, updated 19 October 2026). Prices by project type, a 10-page worked example, and what a website costs to own each year.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "May 01, 2026",
  dateModified: "Oct 21, 2026",
  readTime: '9 min read',
  imageUrl: "/blog-images/uk-web-design-agency-pricing-2026-smb-guide-hero.webp",
  meta: {
    title: "How Much Does a Website Cost in the UK in 2026? Prices by Type",
    description: "Most UK businesses pay £3,000 to £6,000 for a website in 2026. Prices by project type, a 10-page example, freelancer vs agency rates, and yearly costs to own one.",
  },
  keyTakeaways: [
    "Most UK businesses pay £3,000 to £6,000 for a professionally built website (Whito, updated 19 October 2026).",
    "A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. Each extra page adds £150 to £400 (Whito).",
    "A 10-page agency site works out at about £3,750 to £7,000 on Whito's figures: the 5-page price plus five extra pages. That sum is ours.",
    "Custom business sites of 15 pages or more, with bookings, portals or integrations, cost £5,000 to £15,000. Online stores cost £5,000 to £20,000 or more (Whito).",
    "Owning a website costs about £500 to £2,000 or more a year, or £50 to £200 a month, for hosting, domain, SSL, licences, maintenance and content updates (Whito).",
    "Hourly rates: freelancers £40 to £70 (£35 to £55 outside London), agencies £60 to £150. Regional providers charge 20 to 30% less for the same work (Whito).",
    "Copywriting, photography and SEO set-up add 30 to 50% on top of a quote when nobody budgets for them (Whito).",
  ],
  faqs: [
    { q: "How much does a website cost in the UK in 2026?", a: "Most UK businesses pay £3,000 to £6,000 for a professionally built website, according to Whito's UK price guide, updated 19 October 2026. A 5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. A custom site of 15 pages or more costs £5,000 to £15,000, and an online store £5,000 to £20,000 or more. A website builder runs £10 to £50 a month instead." },
    { q: "How much does a small business website cost in the UK?", a: "For most small businesses it is a brochure site: a handful of pages saying what you do, where you work and how to get in touch. Whito puts a 5-page site at £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency in 2026. Add online booking, a client portal or a link to your CRM and you move into Whito's custom band of £5,000 to £15,000." },
    { q: "How much for a 10 page website?", a: "About £3,750 to £7,000 from an agency and £2,250 to £5,000 from a freelancer, on Whito's 2026 figures. Whito prices a 5-page site at £3,000 to £5,000 (agency) or £1,500 to £3,000 (freelancer) and each extra page at £150 to £400. Five extra pages add £750 to £2,000. The sums are ours, and copywriting at £50 to £150 a page is extra if you do not write the words yourself." },
    { q: "How much does it cost to own a website in the UK?", a: "About £500 to £2,000 or more a year, or £50 to £200 a month, on Whito's 2026 figures. That covers hosting (£50 to £300 a year), a domain (£10 to £30), an SSL certificate (£0 to £100), plugin and theme licences (£50 to £300), maintenance and updates (£300 to £1,200) and content updates (£0 to £500). Whito says to budget at least £500 a year." },
    { q: "How much does a website cost per month in the UK?", a: "A website builder such as Wix or Squarespace costs £10 to £50 a month, which Whito puts at up to about £600 a year. A site built by a freelancer or agency costs about £50 to £200 a month to keep running once it is live. SpotDev puts basic WordPress maintenance at around £75 to £150 a month. Check what a care plan includes before comparing two of them." },
    { q: "Is it cheaper to hire a freelancer or an agency for a website in the UK?", a: "A freelancer is usually cheaper. Whito puts a 5-page site at £1,500 to £3,000 from a freelancer against £3,000 to £5,000 from an agency, and hourly rates at £40 to £70 against £60 to £150. An agency gives you more than one person, so holidays and illness do not stop the project. For a small brochure site a good freelancer is often enough." },
    { q: "Why do London web design agencies charge more?", a: "Higher costs for staff and offices. Whito says London and the South East sit at the top of both the freelancer and agency ranges, and that regional providers charge 20 to 30% less for identical work. SpotDev's average cost page says some London agencies quote £6,000 to £20,000 or more for a small brochure site. Location does not change the code, so compare the scope line by line." },
    { q: "How much does an ecommerce website cost in the UK?", a: "Whito puts an online store at £5,000 to £20,000 or more in 2026. The spread comes from the platform, the number of products and how many systems the store has to talk to, such as stock, accounts and couriers. Our separate guide to ecommerce website cost in the UK breaks it down by Shopify, Shopify Plus, WooCommerce, Magento and BigCommerce." },
    { q: "What costs are not included in a web design quote?", a: "Words, pictures and search set-up are the usual gaps. Whito lists copywriting at £50 to £150 a page, photography at £200 to £800 and SEO set-up at £300 to £1,000, and says hidden costs add 30 to 50% to the quote. Hosting, the domain and ongoing updates are often outside the build price too. Ask for an itemised quote that splits one-off and yearly costs." },
    { q: "How much does a website redesign cost in the UK?", a: "Small redesigns start from around £10,000 on SpotDev's figures (22 May 2026), and its range for UK B2B redesigns is £10,000 to £80,000, with most between £15,000 and £60,000. A platform move with no redesign is around £8,000 to £18,000. SpotDev builds on HubSpot, so its figures sit at the B2B end. Our website redesign cost guide covers the rest." },
    { q: "How long does it take to build a website in the UK?", a: "It depends on pages and integrations. SpotDev gives 12 to 14 weeks for a standard B2B CMS build and 14 to 18 weeks for a complex one. Small brochure sites move much faster: FactoryJet offers 7-day delivery for sites of 5 pages or fewer. Most delays come from late copy and images, and from features added after the scope was agreed." },
    { q: "Are UK web design prices quoted with or without VAT?", a: "It varies, so ask. SpotDev says its figures are before VAT and indicative. The standard UK VAT rate is 20%, so a £5,000 quote before VAT is £6,000 to a business that is not VAT-registered. A VAT-registered business can usually reclaim it. Ask every supplier to state the basis in writing, and check with your accountant." },
  ],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6">
        Most UK businesses pay <strong>£3,000 to £6,000</strong> for a professionally built website in 2026. A
        5-page brochure site costs £1,500 to £3,000 from a freelancer and £3,000 to £5,000 from an agency. A custom
        site with bookings or integrations costs £5,000 to £15,000, and an online store £5,000 to £20,000 or more.
        These are <a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a>&apos;s UK
        figures, last updated on 19 October 2026, which we read on 21 October.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h2 className="text-lg font-bold mb-3">In this guide</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>Website cost in the UK by project type (2026)</li>
          <li>How much is a 10 page website?</li>
          <li>How much does it cost to own a website each year?</li>
          <li>Freelancer or agency: hourly rates and London prices</li>
          <li>Costs that are not in the quote</li>
          <li>How to read a web design quote</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Website cost in the UK by project type (2026)</h2>
      <p className="mb-4">
        The type of site sets the price more than anything else. A brochure site is a few pages that say what you
        do and how to reach you. A custom site adds things that need building, such as online booking, a client
        portal or a link to your CRM. An online store adds products, payments and delivery.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Project type</th>
              <th className="p-3 border text-left">What it usually covers</th>
              <th className="p-3 border text-left">UK price, 2026</th>
              <th className="p-3 border text-left">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Website builder (DIY)</td>
              <td className="border p-3">Wix or Squarespace style, you build it</td>
              <td className="border p-3">£10 to £50 a month, up to about £600 a year</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Brochure site, freelancer</td>
              <td className="border p-3">5 pages, contact form, mobile layout</td>
              <td className="border p-3">£1,500 to £3,000</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Brochure site, agency</td>
              <td className="border p-3">5 pages, design, build and launch</td>
              <td className="border p-3">£3,000 to £5,000</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Each extra page</td>
              <td className="border p-3">Added to a brochure site</td>
              <td className="border p-3">£150 to £400 a page</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Custom business site</td>
              <td className="border p-3">15 pages or more, bookings, portals, integrations</td>
              <td className="border p-3">£5,000 to £15,000</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Online store</td>
              <td className="border p-3">Products, payments, delivery</td>
              <td className="border p-3">£5,000 to £20,000 or more</td>
              <td className="border p-3"><a href={WHITO} className={src} target="_blank" rel="noopener noreferrer">Whito</a></td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">B2B redesign</td>
              <td className="border p-3">CRM, integrations, larger sites</td>
              <td className="border p-3">£10,000 to £80,000, most £15,000 to £60,000, before VAT</td>
              <td className="border p-3"><a href={SPOTDEV_REDESIGN} className={src} target="_blank" rel="noopener noreferrer">SpotDev</a>, 22 May 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Online stores have their own guide, because the platform changes the answer:{' '}
        <a href="/blog/ecommerce-website-cost-uk-2026" className={src}>ecommerce website cost in the UK</a>{' '}
        covers Shopify, Shopify Plus, WooCommerce, Magento and BigCommerce in pounds. If you already have a site and
        want it rebuilt, see our <a href="/blog/website-redesign-cost-uk-2026-complete-pricing-guide" className={src}>website redesign cost guide</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How much is a 10 page website?</h2>
      <p className="mb-4">
        Whito prices sites in 5-page blocks and adds a price per extra page, so a 10-page site is the 5-page price
        plus five extra pages. The sums below are ours, on Whito&apos;s 2026 figures.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Who builds it</th>
              <th className="p-3 border text-left">5-page site</th>
              <th className="p-3 border text-left">5 extra pages at £150 to £400</th>
              <th className="p-3 border text-left">10-page total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Freelancer</td>
              <td className="border p-3">£1,500 to £3,000</td>
              <td className="border p-3">£750 to £2,000</td>
              <td className="border p-3">£2,250 to £5,000</td>
            </tr>
            <tr>
              <td className="border p-3 font-semibold">Agency</td>
              <td className="border p-3">£3,000 to £5,000</td>
              <td className="border p-3">£750 to £2,000</td>
              <td className="border p-3">£3,750 to £7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Two things move a 10-page quote out of that band. If nobody on your side writes the words, Whito puts
        copywriting at £50 to £150 a page, so £500 to £1,500 for ten pages. And if a page needs something built,
        such as a booking form tied to your diary or a quote calculator, the site is in the custom band of £5,000 to
        £15,000.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How much does it cost to own a website in the UK each year?</h2>
      <p className="mb-4">
        The build is a one-off. Keeping the site live, secure and up to date is a yearly cost that many first quotes
        leave out. Whito&apos;s 2026 breakdown:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Cost</th>
              <th className="p-3 border text-left">A year</th>
              <th className="p-3 border text-left">A month</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-3">Hosting</td><td className="border p-3">£50 to £300</td><td className="border p-3">£4 to £25</td></tr>
            <tr><td className="border p-3">Domain</td><td className="border p-3">£10 to £30</td><td className="border p-3">£1 to £3</td></tr>
            <tr><td className="border p-3">SSL certificate</td><td className="border p-3">£0 to £100</td><td className="border p-3">£0 to £8</td></tr>
            <tr><td className="border p-3">Plugin and theme licences</td><td className="border p-3">£50 to £300</td><td className="border p-3">£4 to £25</td></tr>
            <tr><td className="border p-3">Maintenance and updates</td><td className="border p-3">£300 to £1,200</td><td className="border p-3">£25 to £100</td></tr>
            <tr><td className="border p-3">Content updates</td><td className="border p-3">£0 to £500</td><td className="border p-3">£0 to £40</td></tr>
            <tr className="bg-gray-50 font-semibold"><td className="border p-3">Total</td><td className="border p-3">£500 to £2,000 or more</td><td className="border p-3">£50 to £200</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Whito says to budget at least £500 a year, and its September 2026 survey of care plans found a median entry
        plan of £50 a month. <a href={SPOTDEV_REDESIGN} className={src} target="_blank" rel="noopener noreferrer">SpotDev</a>{' '}
        puts basic WordPress maintenance at around £75 to £150 a month. Before you compare two care plans, check what
        each one does when something breaks, and how many hours of changes it includes.
      </p>

      <div className="my-8 rounded-xl bg-[#0052CC] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
        <div>
          <p className="text-white font-semibold text-lg">Have a quote and not sure it is fair?</p>
          <p className="text-blue-100 text-sm mt-1">Send it over. We will tell you which lines look high, which are missing, and what we would build instead. No obligation.</p>
        </div>
        <a href="https://factoryjet.com/contact" className="shrink-0 bg-white text-[#0052CC] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
          Book a Free 30-Min Consultation →
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Freelancer or agency: hourly rates and London prices</h2>
      <p className="mb-4">
        Whito puts UK freelancers at £40 to £70 an hour, or £35 to £55 outside London, and agencies at £60 to £150
        an hour. London and the South East sit at the top of both ranges, and regional providers charge 20 to 30% less
        for identical work. SpotDev&apos;s{' '}
        <a href={SPOTDEV_AVERAGE} className={src} target="_blank" rel="noopener noreferrer">average cost page</a>,
        which describes 2026 price bands under a 2021 header date, says some London agencies quote £6,000 to £20,000
        or more for a small brochure site.
      </p>
      <p className="mb-4">
        A freelancer is the cheaper route and often the right one for a small brochure site. The risk is capacity:
        one person on holiday or ill stops the project, and support after launch depends on them. An agency costs
        more because you get several people, which matters most for sites with integrations or a launch date you
        cannot move. Whoever you pick, ask for a fixed price for each stage, so the hours stop being your risk.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Costs that are not in the quote</h2>
      <p className="mb-4">
        Whito says hidden costs add 30 to 50% to a quoted price when nobody budgets for them. The usual gaps:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Copywriting:</strong> £50 to £150 a page.</li>
        <li><strong>Photography:</strong> £200 to £800.</li>
        <li><strong>SEO set-up:</strong> £300 to £1,000, covering page titles, descriptions, redirects from any old site and a sitemap.</li>
        <li><strong>The yearly costs above:</strong> hosting, domain, licences and maintenance, which often sit outside the build price.</li>
        <li><strong>VAT:</strong> SpotDev states its figures are before VAT. At 20%, a £5,000 quote is £6,000 to a business that cannot reclaim it.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to read a web design quote</h2>
      <p className="mb-4">
        A fair quote splits one-off costs from yearly ones, names the pages and features it covers, and says how
        many rounds of changes are included. Be wary of &quot;unlimited revisions&quot; with no scope behind them,
        a quote with no hosting or maintenance line at all, and template screenshots shown as custom work.
      </p>
      <p className="mb-4">
        Then check the work. Open two or three live sites the supplier built and run them through Google&apos;s
        PageSpeed Insights on a phone setting. Ask one past client how the project went after launch, not just
        before it. And ask who owns the site, the domain and the hosting account when the contract ends. The answer
        should be you.
      </p>
      <p className="mb-6">
        FactoryJet builds websites for UK businesses and quotes a fixed price in writing after a short scoping call.
        See <a href="/uk/web-design" className={src}>web design in the UK</a>, or read{' '}
        <a href="/blog/how-to-choose-web-design-agency-uk-2026" className={src}>how to choose a web design agency</a>{' '}
        for the questions to ask before you sign.
      </p>

      <p className="mb-6 text-sm text-gray-500">
        Sources, read on 21 October 2026:{' '}
        <a href={WHITO} className="underline" target="_blank" rel="noopener noreferrer">Whito, How Much Does a Website Cost in the UK? Web Design Prices 2026 (updated 19 October 2026)</a>;{' '}
        <a href={SPOTDEV_REDESIGN} className="underline" target="_blank" rel="noopener noreferrer">SpotDev, Website Redesign Cost UK (22 May 2026)</a>;{' '}
        <a href={SPOTDEV_AVERAGE} className="underline" target="_blank" rel="noopener noreferrer">SpotDev, What is the average cost of website design in the UK?</a>.
        Both firms sell web design. The 10-page totals are our arithmetic on Whito&apos;s figures.
      </p>

      <div className="my-12 rounded-2xl bg-[#0052CC] p-8 sm:p-10 text-center not-prose">
        <h3 className="text-white text-2xl font-bold mb-3">Get a fixed price for your website</h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">Tell us the pages and features you need. We reply with a written, fixed quote. No obligation.</p>
        <a href="https://factoryjet.com/contact" className="inline-block bg-white text-[#0052CC] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Book a Free 30-Min Consultation →
        </a>
        <p className="text-blue-200 text-sm mt-6">500+ businesses served · 97% on-time delivery · founded 2014</p>
      </div>
    </>
  ),
};

export default post;
