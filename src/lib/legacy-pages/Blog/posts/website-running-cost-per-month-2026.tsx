import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'Does it cost money to keep a website running?',
    a: 'Yes, every month, whether or not anyone sends you an invoice for it. At minimum you are paying for a domain registration, hosting or a platform plan, and email. Most sites also pay for apps or licenses, backups, and payment processing. The one line people forget is the hours someone spends keeping the thing working. If nobody is being paid for those hours, they are not happening.',
  },
  {
    q: 'Is it costly to maintain a website?',
    a: 'Compared to almost any other line in a business, no. Compared to what people expect after a one-off build quote, yes, because they expected zero. The honest framing is that maintenance is not a cost you can decline. You either pay it monthly in small amounts or you pay it later as an emergency rebuild, and the second one is always the more expensive version.',
  },
  {
    q: 'How much does it cost to have someone manage my website?',
    a: 'It depends on how many moving parts the site has and how often the platform underneath it changes. A brochure site on a managed platform needs a few hours a month. A store with a dozen apps and a live checkout needs more, and needs someone who will notice a broken payment flow before a customer does. We scope it against the actual site rather than publishing a package price, because the two sites above are not the same job.',
  },
  {
    q: 'Is $1500 a good price for a website?',
    a: 'That is a build question, not a running-cost question, and it is the wrong first question. A cheap build with an expensive stack underneath it costs more over three years than a more expensive build that runs on almost nothing. Ask what it will cost to own before you compare build quotes. Our page on what a website costs covers the build side properly.',
  },
  {
    q: 'How much does hosting a website cost?',
    a: 'It is the widest range on the whole bill, from free tiers on modern static and edge hosts up to enterprise infrastructure. What decides your number is traffic, whether the site takes payments, and how much of the operations work you want the host to handle. Beware of the answers you find on this query: most of the pages ranking for it are published by companies that sell hosting.',
  },
  {
    q: 'Can I host my own website for free?',
    a: 'For a static brochure site with modest traffic, a reputable free tier from a modern host is genuinely workable, and the certificate is free too. Free hosting from an unknown provider is a different product: expect injected ads, no real backups, and no support when it goes down. If the site takes payments or generates leads, pay for hosting.',
  },
  {
    q: 'How much does Shopify cost per month?',
    a: 'Checked on shopify.com/pricing on 25 August 2026: Basic is $39 a month, or $29 billed yearly. Grow is $105, or $79 yearly. Advanced is $399, or $299 yearly. Plus starts at $2,300. Published online card rates start at 2.9% plus 30 cents on Basic, 2.7% on Grow, and 2.25% on Plus. Apps are separate and are usually the reason a real bill does not match those numbers.',
  },
  {
    q: 'Why is my Shopify bill higher than the plan price?',
    a: 'Because the plan is the floor, not the price. Apps bill separately. Add-ons bill separately: POS Pro is an extra $89 a month per location, and marketplace order sync is free up to 50 orders a month then charges 1%, capped at $99 a month. Card processing is deducted rather than invoiced, so it never looks like a bill even though it is usually the largest line.',
  },
  {
    q: 'When does upgrading a Shopify plan pay for itself?',
    a: 'You can calculate the exact crossover. Grow costs $66 a month more than Basic on monthly billing, and the published card rate drops by 0.2 percentage points. Divide $66 by 0.002 and the upgrade pays for itself at about $33,000 a month in card sales. On yearly billing the gap is $50, so the crossover falls to about $25,000. Run the same division for your own step up.',
  },
  {
    q: 'Do I have to pay for an SSL certificate?',
    a: 'Almost never. Let\'s Encrypt is a nonprofit certificate authority issuing free, automated TLS certificates, and essentially every credible host and platform uses it or an equivalent. If you are being billed a yearly fee for a standard certificate, ask what you are getting that your host does not already give away. Extended Validation certificates cost real money and very few small businesses need one.',
  },
  {
    q: 'Do domain names cost money every year?',
    a: 'Yes, every year, forever. Two things surprise people. First, the heavily discounted first-year offer renews at the standard rate, and the standard rate is the one you will pay for the rest of the site\'s life. Second, premium and specialty extensions renew higher than common ones. Turn on auto-renew and check the registration is in your business name, not an employee\'s or an agency\'s.',
  },
  {
    q: 'How much do WordPress plugins cost per year?',
    a: 'There is no single answer, because the number is set by how many things your site does that WordPress does not do natively. A typical small business site carries a handful of paid licenses across theme, page builder, forms, security, backups, SEO and caching. Pull your own card statement and add them up. Letting a license lapse means no updates, which is a security decision rather than a saving.',
  },
  {
    q: 'What happens if I do not maintain my website?',
    a: 'Nothing, for a while, which is exactly why people stop. Then plugins go out of date and become security holes, a form breaks silently, performance degrades, and the content stops matching the business. Several things fail at once, usually in the same month. Deferred maintenance behaves like a loan you did not know you took out, and it is repaid as an emergency rebuild.',
  },
  {
    q: 'Do transaction fees count as a website cost?',
    a: 'They should, and they almost never do, because they are deducted rather than invoiced. On a store doing $20,000 a month at the published Shopify Grow rate of 2.7%, processing is about $540 before the per-order 30 cents. The plan itself is $105. Processing is roughly five times the platform fee and nobody scrutinizes it, which is exactly why it is worth scrutinizing.',
  },
  {
    q: 'Is WordPress cheaper to run than Shopify?',
    a: 'On the sticker, often yes. In total cost of ownership, the gap is usually much smaller than it looks. WordPress moves cost out of a single plan fee and into hosting, licenses, security and maintenance hours. Shopify bundles hosting, PCI compliance and platform updates into the plan. One of those bills you visibly and one of them bills you in labor.',
  },
  {
    q: 'How much does a custom-built website cost to run?',
    a: 'Custom builds usually have the lowest platform bill and the highest labor bill. There are fewer licenses, and modern hosting for a static or edge-rendered site can be very cheap at small scale. In exchange you pay for the services the platform used to include, such as search, forms, image delivery and error monitoring, and you need developer availability. That trade is only worth it if the site does something templates genuinely cannot.',
  },
  {
    q: 'What are the hidden costs of running a website?',
    a: 'Renewal pricing after year one, business email seats, payment processing percentages, subscription creep from marketing experiments nobody canceled, platform version upgrades that arrive on a schedule you do not control, and the hours spent keeping content current. Renewal pricing and processing fees are the two that surprise people most, because neither of them looks like a decision at the time.',
  },
  {
    q: 'Can I reduce my monthly website costs?',
    a: 'Yes, in this order. Export a year of card statements and cancel every app and license nobody has opened. Drop any paid SSL if your host issues free certificates. Right-size hosting you over-bought for traffic that never arrived. Consolidate overlapping tools. Do not cut backups, security updates, uptime monitoring or domain auto-renew, because each has a failure mode that costs more than the saving.',
  },
  {
    q: 'How often should a website be updated?',
    a: 'Security and plugin updates monthly at minimum, applied on staging first if you have one. Content such as prices, team, services and case studies quarterly. A structural review annually. A site that has gone untouched for two years is not stable, it is accumulating a bill, and the bill usually arrives as a rebuild rather than as a repair.',
  },
  {
    q: 'Who should own my domain and hosting account?',
    a: 'Your business. In your business name, on your business payment method, with your business controlling the login and the recovery email. Agencies and contractors can hold delegated access. If your agency owns the registration or the hosting account, you are renting your website, and a relationship breakdown becomes an outage you cannot fix yourself.',
  },
  {
    q: 'Is it cheaper to rebuild or to keep maintaining an old website?',
    a: 'Compare a year of maintenance plus the revenue you lose to poor performance against the rebuild cost spread over the life you expect from the new site. Once an old site needs constant fixing, cannot be updated without breaking something else, or is slow enough to lose conversions, maintenance has quietly become the more expensive option.',
  },
  {
    q: 'Does a faster website actually save money?',
    a: 'It makes money rather than saving it. Faster pages convert better and abandon less, and moving from bargain shared hosting to competent managed hosting is one of the smallest recurring increases on the whole bill. On a site doing any meaningful revenue, hosting is the cheapest performance improvement available and the last one most businesses make.',
  },
  {
    q: 'What is the difference between what a website costs to build and what it costs to run?',
    a: 'The build is a one-time project cost, quoted up front, and it ends. The running cost is what leaves your account every month afterward, and it never ends. They are separate budgets and they trade against each other: a cheaper build often means a more expensive stack to run. Almost every quote covers the first one and stays quiet about the second.',
  },
];

export const post: BlogPost = {
  id: '429',
  slug: 'website-running-cost-per-month-2026',
  title: 'What a Business Website Actually Costs to Run Every Month',
  excerpt:
    'Everybody gets a quote for building the site. Almost nobody gets a quote for owning it. Here is every line that recurs after launch, what a Shopify store really pays at $20,000 a month, and the four costs that only appear in year two.',
  category: 'Maintenance & Security',
  author: 'Bhavesh Barot',
  date: 'Aug 25, 2026',
  readTime: '12 min read',
  imageUrl: '/blog-images/website-running-cost-per-month-2026.webp',
  imageAlt:
    'An empty office desk with a laptop showing a hosting billing dashboard, a stack of printed invoices and a calculator beside it',
  meta: {
    title: 'What a Website Costs to Run Per Month (2026)',
    description:
      'What a business website costs to run every month: the lines that recur, verified Shopify pricing, and the costs that only show up in year two.',
  },
  keyTakeaways: [
    'Build cost and running cost are two different budgets. This page is only about the second one, the money that leaves your account every month after the site is live.',
    'On a Shopify store doing $20,000 a month, card processing at the published Grow rate is roughly $540. The plan itself is $105. Processing is the bigger line by about five times.',
    'Almost nothing on a normal website bill is a fixed vendor price. Hosting, apps and licenses are decisions, so the only way to know your number is to list your own charges.',
    'Paid SSL is the easiest line to cancel. Let\'s Encrypt issues certificates free and automatically, and almost no small business needs an Extended Validation certificate.',
    'The largest recurring cost on most business sites is the hours someone spends keeping it working. If nobody is paid for those hours, the bill arrives later as a rebuild.',
  ],
  faqs,
  content: (
    <article>
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          A business website costs money every month whether or not anyone invoices you for it.
          The recurring lines are always the same: domain, hosting or a platform plan, business
          email, apps and licenses, backups and monitoring, payment processing if you sell, and
          maintenance hours. Only one of those has a published price you can look up, which is why
          nobody can give you a number without seeing your stack. What we can do is name every line,
          show you the one part that is exactly knowable, and tell you which line usually dominates.
          On most stores it is not hosting. It is payment processing.
        </p>
      </div>

      <p>
        Ask what a website costs and you will get a build quote. Ask what it costs to own and the
        room goes quiet. That gap is the whole subject of this page.
      </p>
      <p>
        This is not a build-cost guide. If you are trying to budget for making a site in the first
        place, read{' '}
        <a href="/blog/how-much-does-a-website-cost-small-business-usa-2026">
          how much a website costs a small business
        </a>{' '}
        or our <a href="/website-cost">website cost</a> page and come back. Everything below is
        about what leaves your bank account in month two and every month after it.
      </p>

      <h2 id="two-budgets">Build cost and running cost are two different budgets</h2>
      <p>
        They also trade against each other, which is the part nobody mentions during a sales
        conversation. A cheaper build very often means a more expensive stack underneath it: more
        paid plugins doing work a better build would have done natively, cheaper hosting that makes
        the site slow, and more hours of somebody untangling it later.
      </p>
      <p>
        So the useful question when you are comparing quotes is not "what does this cost." It is
        "what does this cost me in month thirteen." Almost no proposal answers that, and asking is
        one of the fastest ways to tell a good vendor from a cheap one.
      </p>

      <h2 id="who-google-quotes">Who Google is quoting for this today</h2>
      <p>
        Pulled live from Google US, logged out, on 25 August 2026, on the two queries people
        actually type here. An AI Overview fires on both.
      </p>
      <p>
        On <strong>"website hosting cost"</strong>, the AI Overview cites three sources, in this
        order: Forbes, Wix, Hostinger. The organic results underneath run Reddit at number one, then
        GoDaddy, Forbes, Wix, YouTube, PCMag, Hostinger and Namecheap.
      </p>
      <p>
        Read that list again. Four of those eight results are published by companies that sell
        hosting. Two more are publisher review sites that run affiliate programs. The single highest
        organic result is a Reddit thread, which is people asking strangers because they do not
        trust the vendor answers. That is a reasonable instinct.
      </p>
      <p>
        On <strong>"how much does it cost to maintain a website"</strong>, the AI Overview cites
        nine sources: GoDaddy, Network Solutions, Wix, CanSpace, Hostinger, Elementor, Krishang
        Technolab, WP Creative and Nexal IT Services. Organic runs Reddit first, then Network
        Solutions, GoDaddy, Wix, Rocket.net, Quora, Gravitate Design and Hostinger.
      </p>
      <p>
        There is one difference between those two queries worth noticing. The hosting query is owned
        end to end by hosts and review publishers. The maintenance query is not: four of the nine
        sources Google cites in its overview are agencies and plugin vendors, not platforms. Forums
        take the top organic slot on both. And <strong>factoryjet.com appears in none of it</strong>,
        on either query, which is the honest state of play on the day this was published.
      </p>

      <h2 id="every-line">Every line that recurs</h2>
      <p>
        Here is the full set. Not one of these is optional in the sense of not existing. Some are
        optional in the sense of being over-bought.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Recurring line</th>
              <th className="p-3 text-left border border-gray-700">What decides the size of it</th>
              <th className="p-3 text-left border border-gray-700">Safe to cancel?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Domain registration</td>
              <td className="p-3 border border-gray-200">
                The extension you chose, and whether you are still inside a first-year promo
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                No. Losing it takes the site and the email with it.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Hosting or platform plan</td>
              <td className="p-3 border border-gray-200">
                Traffic, whether the site takes payments, and how much operations work you want the
                host to do
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                No, but this is the line most often over-bought.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">SSL certificate</td>
              <td className="p-3 border border-gray-200">
                Usually nothing, because free automated certificates are standard
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                Yes, if you are being billed for a standard certificate.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Business email seats</td>
              <td className="p-3 border border-gray-200">
                How many people need an address at your domain
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                No, but audit the seats of people who left.
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Plugins, apps, themes, licenses</td>
              <td className="p-3 border border-gray-200">
                How many things your site does that the platform does not do natively
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                Partly. This is where an audit finds money.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Backups and monitoring</td>
              <td className="p-3 border border-gray-200">
                Whether your host&apos;s included backup is versioned, off-site and restorable
              </td>
              <td className="p-3 border border-gray-200 font-semibold">No. Never this one.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Payment processing</td>
              <td className="p-3 border border-gray-200">
                A percentage of revenue, so it grows with your success
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                No, but the rate moves with the plan you are on.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Maintenance hours</td>
              <td className="p-3 border border-gray-200">
                How many moving parts the site has and how fast the platform underneath it changes
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                No. Skipping it defers the cost, it does not remove it.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="domain">The domain is small and it is the one that takes companies offline</h3>
      <p>
        Two rules and they are both boring. Turn on auto-renew. Make sure the registration is in the
        company name, not a former employee&apos;s and not the agency that built the site. We have
        watched a business lose its domain and its email at the same time because a contractor&apos;s
        card expired and the renewal notices went to an inbox nobody read.
      </p>
      <p>
        The other thing to know is that the heavily discounted first-year offer renews at the
        standard rate. That standard rate is the price you will actually pay for the life of the
        business, and premium and specialty extensions renew higher than common ones.
      </p>

      <h3 id="hosting">Hosting is the most over-bought and the most under-bought line at once</h3>
      <p>
        It is also the widest range on the bill, running from genuinely free tiers on modern static
        and edge hosts up to enterprise infrastructure. What sets your number is traffic, whether
        the site takes payments, and how much of the operations work you are handing to the host.
      </p>
      <p>
        The mistake here is one-directional and completely predictable: a business spends three
        months building a site and then puts it on the cheapest shared plan it can find, and then
        wonders why it feels slow. Hosting is the cheapest performance improvement available to most
        small sites and the last one anybody makes. If you want a number on what your current speed
        is costing you in lost conversions, the{' '}
        <a href="/ecommerce-speed-calculator">ecommerce speed calculator</a> puts one on it, and{' '}
        <a href="/blog/core-web-vitals-optimization-service">Core Web Vitals in 2026</a> covers
        which metrics actually move.
      </p>

      <h3 id="ssl">SSL should be a zero on your bill</h3>
      <p>
        <a
          href="https://letsencrypt.org/"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s Encrypt
        </a>{' '}
        is a nonprofit certificate authority that issues free, automated TLS certificates, and
        checking their site on 25 August 2026 it describes itself exactly that way. Essentially
        every credible host and platform uses it or an equivalent. If a line item on your invoice
        says SSL and has a number next to it, ask what you are buying that your host does not
        already give away. Extended Validation certificates are real and do cost real money. Almost
        no small business needs one.
      </p>

      <h3 id="email">Business email is not the website, and it is always in the same budget</h3>
      <p>
        Google Workspace or Microsoft 365, priced per user per month. It gets forgotten in every
        website budget and then shows up on the card statement anyway. Five seats is a real
        recurring line, not a rounding error, and the seats of people who have left are one of the
        two or three things an audit reliably finds.
      </p>

      <h3 id="apps">Apps and licenses are the line that quietly grows</h3>
      <p>This is where budgets actually break, and it breaks differently on each platform.</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>WordPress:</strong> a premium theme, a page builder, and paid licenses for forms,
          security, backups, SEO and caching. Each renews annually. Letting one lapse means no
          updates, which is a security decision rather than a saving. If you are running this stack,{' '}
          <a href="/services/wordpress-development">WordPress development</a> is the page for what
          that maintenance actually involves.
        </li>
        <li>
          <strong>Shopify:</strong> the plan is the floor, not the price. Reviews, email,
          subscriptions, upsells, inventory sync and page builders all bill separately, and
          merchants routinely pay more in apps than they pay Shopify.
        </li>
        <li>
          <strong>Custom builds:</strong> fewer licenses, but you now pay for the services the
          platform used to include, such as search, forms, image delivery, error monitoring and
          analytics.
        </li>
      </ul>
      <p>
        There is no published figure for what your app stack costs, because your app stack is a set
        of decisions rather than a product. The only way to know is to export a year of card
        statements, list every recurring charge, and cancel what nobody has opened. Every business
        we audit has at least one of these. Most have several.
      </p>

      <h3 id="backups">A backup you have never restored is not a backup</h3>
      <p>
        Some hosts include real backups. Many include a single overwritten copy and call it a
        backup. What you want is off-site, versioned, restorable, and tested at least once so you
        know the restore works. Uptime monitoring is free at the basic tier and there is no excuse
        not to have it, because finding out from a customer is the expensive way. We put actual
        numbers on that in{' '}
        <a href="/blog/cost-of-website-downtime-calculator">the cost of website downtime</a>.
      </p>

      <h3 id="processing">Payment processing is a deduction, so nobody scrutinizes it</h3>
      <p>
        It is a percentage of revenue rather than a subscription, which means it never arrives as an
        invoice and never gets reviewed. On most stores it is the single largest recurring cost of
        running the website, larger than hosting, apps and licenses put together. The next section
        does that arithmetic properly.
      </p>

      <h3 id="maintenance">Maintenance is the real number and it is usually invisible</h3>
      <p>
        Updates, plugin conflicts, broken forms, content changes, security patching, speed
        regressions, and the annual "why is the contact form not sending." There are only three
        ways this gets handled: you do it, you pay someone to do it, or nobody does it.
      </p>
      <p>
        That third option is what most businesses actually choose, and it is the most expensive one.
        A site nobody updates accumulates outdated dependencies, a checkout that broke on one
        browser, and content that stopped matching the business two pivots ago. Then it gets
        replaced. The SEO version of that decay is worse than the security version and slower to
        notice, which we covered in{' '}
        <a href="/blog/importance-of-website-maintenance-seo">
          why website maintenance matters for SEO
        </a>
        .
      </p>

      <h2 id="shopify-verified">The one part of this we can price exactly</h2>
      <p>
        Almost every number in this category is a range somebody made up. Shopify is the exception,
        because it publishes plan pricing and card rates openly. These figures were checked on
        shopify.com/pricing on 25 August 2026 and are for the US.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Plan</th>
              <th className="p-3 text-left border border-gray-700">Billed monthly</th>
              <th className="p-3 text-left border border-gray-700">Billed yearly</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Basic</td>
              <td className="p-3 border border-gray-200">$39 per month</td>
              <td className="p-3 border border-gray-200">$29 per month</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Grow</td>
              <td className="p-3 border border-gray-200">$105 per month</td>
              <td className="p-3 border border-gray-200">$79 per month</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Advanced</td>
              <td className="p-3 border border-gray-200">$399 per month</td>
              <td className="p-3 border border-gray-200">$299 per month</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-semibold">Plus</td>
              <td className="p-3 border border-gray-200">From $2,300 per month</td>
              <td className="p-3 border border-gray-200">Negotiated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Published online card rates start at 2.9% plus 30 cents on Basic, 2.7% plus 30 cents on
        Grow, and 2.25% plus 30 cents on Plus. Two add-ons are worth knowing because they are the
        clearest proof that the plan is a floor: POS Pro is an extra $89 a month per location, and
        marketplace order sync is free up to 50 orders a month, then charges 1% capped at $99 a
        month.
      </p>
      <p>
        Prices on any third-party platform change, so treat 25 August 2026 as the date these were
        true and check the plan page before you budget from them. If you are pricing the build
        rather than the running cost,{' '}
        <a href="/blog/shopify-website-cost">what a Shopify website costs</a> is the separate
        conversation.
      </p>

      <h2 id="worked-example">A worked example: a store doing $20,000 a month</h2>
      <p>
        Take a small Shopify store on Grow, billed monthly, doing $20,000 a month in card sales
        through Shopify Payments. Every figure in the first two rows below is either published or
        arithmetic on a published figure. The rest genuinely cannot be priced without seeing the
        store.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border border-gray-700">Line</th>
              <th className="p-3 text-left border border-gray-700">Monthly</th>
              <th className="p-3 text-left border border-gray-700">Where the number comes from</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Shopify Grow plan</td>
              <td className="p-3 border border-gray-200 font-semibold">$105</td>
              <td className="p-3 border border-gray-200">
                Published on shopify.com/pricing, checked 25 Aug 2026
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">
                Card processing on $20,000 at 2.7%, before the per-order 30 cents
              </td>
              <td className="p-3 border border-gray-200 font-semibold">$540</td>
              <td className="p-3 border border-gray-200">
                Arithmetic on the published Grow rate
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Apps</td>
              <td className="p-3 border border-gray-200">Varies</td>
              <td className="p-3 border border-gray-200">
                Not a published figure. Depends entirely on your stack.
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Domain and business email</td>
              <td className="p-3 border border-gray-200">Varies</td>
              <td className="p-3 border border-gray-200">
                Set by your registrar, extension and seat count
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Maintenance and merchandising</td>
              <td className="p-3 border border-gray-200">Varies</td>
              <td className="p-3 border border-gray-200">
                Hours, either paid to someone or absorbed by you
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Look at what dominates. It is not Shopify. Processing is about five times the plan fee, and
        it is the only line on that table that grows automatically as the business succeeds. If you
        have never looked at your effective processing rate, that is the highest-value hour on this
        whole page.
      </p>

      <h2 id="crossover">When a plan upgrade actually pays for itself</h2>
      <p>
        This is the one calculation the category never does, and it is simple division. The per-order
        30 cents is the same on Basic and Grow, so it cancels out and you can ignore it.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Billed monthly:</strong> Grow costs $66 more than Basic ($105 against $39). The
          published rate drops 0.2 percentage points, from 2.9% to 2.7%. Divide $66 by 0.002 and the
          upgrade breaks even at about <strong>$33,000 a month</strong> in card sales.
        </li>
        <li>
          <strong>Billed yearly:</strong> the gap narrows to $50 ($79 against $29), so the crossover
          falls to about <strong>$25,000 a month</strong>.
        </li>
      </ul>
      <p>
        Run the same division on your own step up, using whatever the plan page says on the day you
        do it. Two caveats: this assumes Shopify Payments at the starting published rate, and your
        real rate can differ by card type and region. It is still a far better basis for the
        decision than a feature comparison.
      </p>

      <h2 id="year-two">The four costs that only appear in year two</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Renewal pricing.</strong> Hosting introductory rates end. Domains renew at the
          standard rate rather than the promo. Annual licenses renew at list or lose their launch
          discount. None of it is hidden, and almost nobody forecasts it, because year one was
          quoted and year two never was.
        </li>
        <li>
          <strong>Platform version upgrades.</strong> A major PHP release, a theme architecture
          change, a framework major version. Sometimes trivial, sometimes a project. It arrives on a
          schedule you do not control, which is the part that makes it a budget problem rather than
          a technical one.
        </li>
        <li>
          <strong>Subscription creep.</strong> Every marketing experiment adds a tool. Very few get
          canceled. This compounds silently, and the third-year total is always a surprise to the
          person who individually approved each small monthly charge.
        </li>
        <li>
          <strong>Content drift.</strong> Prices, team, services and case studies all go stale, and
          a stale site both converts worse and ranks worse. The fix is a few hours a month of
          somebody&apos;s attention, and it is the one line that never appears on any budget
          anywhere.
        </li>
      </ul>

      <h2 id="cut-or-keep">What you can cut, and what you cannot</h2>
      <p>
        <strong>Cut:</strong> paid SSL where your host issues free certificates, page builders you
        no longer use, duplicate SEO plugins doing the same job, apps nobody has opened in ninety
        days, email seats for people who left, and hosting you sized for traffic that never arrived.
      </p>
      <p>
        <strong>Do not cut:</strong> off-site backups, security updates, uptime monitoring, domain
        auto-renew, or the maintenance hours. Each of those has a failure mode that costs more than
        a full year of the thing you canceled.
      </p>
      <p>
        <strong>Worth spending more on:</strong> better hosting, because speed is conversion, and a
        real maintenance arrangement, because the alternative is a rebuild on somebody else&apos;s
        timetable.
      </p>

      <h2 id="two-questions">Two questions to ask before you sign anything</h2>
      <p>
        <strong>"What will this cost me in month thirteen?"</strong> Get the answer in writing.
        Introductory pricing is the most common surprise in this entire category and it is
        completely avoidable by asking once.
      </p>
      <p>
        <strong>"Who owns the domain, the hosting account and the code?"</strong> If the answer is
        your agency, you do not own your website, you rent it. Anyone reputable will put all three in
        your name without being asked, and will not treat the question as an insult.
      </p>

      <h2 id="this-week">What to do this week</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          Export twelve months of card statements and highlight every recurring charge attached to
          the website. Most people have never seen this list in one place.
        </li>
        <li>Cancel anything nobody has opened in ninety days. Start with apps, then email seats.</li>
        <li>
          Look up your effective payment processing rate and multiply it by last month&apos;s
          revenue. Compare that to your hosting bill.
        </li>
        <li>
          Confirm the domain and hosting account are registered to your business, and that
          auto-renew is on.
        </li>
        <li>Restore one backup somewhere safe, to prove the backup is real.</li>
      </ul>
      <p>
        If that exercise shows the site costs more to keep alive than it earns, that is not a
        maintenance problem and a bigger retainer will not fix it. A{' '}
        <a href="/services/website-redesign">website redesign</a> is the honest next conversation,
        and{' '}
        <a href="/blog/website-redesign-cost-us-small-business-2026">
          what a redesign costs a US small business
        </a>{' '}
        covers what changes that number. If you are still at the earlier question of what a site
        costs to make in the first place, <a href="/website-cost">website cost</a> is our page on
        it.
      </p>
    </article>
  ),
};
