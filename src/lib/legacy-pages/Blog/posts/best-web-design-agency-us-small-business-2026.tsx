import React from 'react';
import type { BlogPost } from '../data.types';

// Every figure below was read on the linked page on 22 Oct 2026.
const SRC = {
  webfxAbout: 'https://www.webfx.com/about/',
  webfxPricing: 'https://www.webfx.com/web-design/pricing/',
  webfxSmb: 'https://www.webfx.com/blog/web-design/how-much-does-it-cost-to-build-a-website-for-a-small-business/',
  thriveAbout: 'https://thriveagency.com/about-us/',
  thriveContact: 'https://thriveagency.com/contact-us/',
  newMedia: 'https://newmedia.com/about',
  thriveDesign: 'https://thrive.design/',
  thriveDesignPrice: 'https://thrive.design/price-guide/',
  ezMarketing: 'https://www.ezmarketing.com/',
  clutchPricing: 'https://clutch.co/web-designers/pricing',
  usablenet: 'https://blog.usablenet.com/ada-web-lawsuit-trends-2026',
  cdc: 'https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html',
  lcp: 'https://web.dev/articles/lcp',
  wcagContrast: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
  googleSeo: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
  portent: 'https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm',
  pagespeed: 'https://pagespeed.web.dev/',
} as const;

const extLinkProps = { target: '_blank', rel: 'noopener noreferrer', className: 'text-[#B23E13] underline' } as const;

export const post: BlogPost = {
  id: '104',
  slug: 'best-web-design-agency-us-small-business-2026',
  title: 'Best Web Design Agencies for US Small Businesses (2026)',
  excerpt:
    'Six US web design agencies a small business can shortlist in 2026, checked on each agency\'s own site on 22 October 2026: WebFX, Thrive Internet Marketing Agency, New Media, Thrive Design, EZMarketing and FactoryJet. Published prices where they exist, who each one suits, and the five checks to run before you sign.',
  category: 'Web Design & Strategy',
  author: 'Bhavesh Barot',
  date: 'May 13, 2026',
  dateModified: 'Oct 22, 2026',
  readTime: '15 min read',
  imageUrl: '/blog-images/best-web-design-agency-us-small-business-2026-hero.webp',
  meta: {
    title: 'Best Web Design Agencies for US Small Businesses (2026)',
    description: '6 US web design agencies for small businesses, checked on their own sites on 22 Oct 2026, with published prices, who each suits and 5 checks to run.',
  },
  keyTakeaways: [
    'Shortlist for 2026, checked on each agency\'s own site on 22 Oct 2026: WebFX, Thrive Internet Marketing Agency, New Media, Thrive Design, EZMarketing and FactoryJet.',
    'Only two of the six publish prices: WebFX web design starts at $8,000 a site, and Thrive Design\'s basic package is $7,500 delivered in 6 to 8 weeks.',
    'Market range: WebFX puts small business websites at $1,000 to $48,000, with small agencies at $6,000 to $12,000. Clutch lists US web designers at $100 to $149 an hour.',
    'Run the agency\'s live client sites through PageSpeed Insights yourself. Google\'s "good" Largest Contentful Paint is 2.5 seconds or less.',
    'Accessibility is a legal issue for small firms too: UsableNet counted more than 5,000 digital accessibility lawsuits in 2025, and 64% of the companies sued earn under $25 million a year.',
    'Walk away from any agency that guarantees a #1 Google ranking. Google\'s own guidance says no one can.',
    'FactoryJet: founded 2014, 500+ businesses served, 97% on-time delivery, 7-day delivery for sites of 5 pages or fewer, and a working demo before you sign.',
  ],
  faqs: [
    {
      q: 'What is the best web design agency for a US small business?',
      a: 'There is no single best one; there is a best fit for your budget and scope. From the six we checked on 22 Oct 2026, WebFX and New Media suit businesses that want a large full-service firm, Thrive Design suits buyers who want a published price, EZMarketing says it works with small business owners across the US, and FactoryJet suits sites of 5 pages or fewer that need 7-day delivery and a demo first.',
    },
    {
      q: 'Which web agency is best for small businesses in the USA on a tight budget?',
      a: 'Pick the agency whose smallest package matches your scope rather than the biggest name. Thrive Design publishes a $7,500 basic package, and WebFX starts web design at $8,000 a site. Below that, small studios and freelancers compete. FactoryJet quotes a fixed price in writing after a short scoping call, with 7-day delivery for sites of 5 pages or fewer. Ask each one for an itemized quote before comparing.',
    },
    {
      q: 'How much should a US small business pay a web design agency in 2026?',
      a: 'WebFX\'s small business guide puts websites at $1,000 to $48,000, with small agencies at $6,000 to $12,000 and large agencies up to $48,000. Its pricing page puts basic small business web design at $6,500 to $15,000. Clutch says most web design projects it reviews cost under $10,000. Page count, custom design, integrations and who writes the copy move your quote within those bands.',
    },
    {
      q: 'How much should I pay a website designer per hour?',
      a: 'Clutch\'s pricing data, updated 21 Sep 2026, lists US web designers at $100 to $149 an hour. Thrive Design publishes $165 an hour for WordPress support, sold only with its care plan. Hourly rates suit changes after launch. For the first build, ask for a fixed price with itemized pages and revision rounds so the total cannot drift.',
    },
    {
      q: 'Which web design firms are the most transparent about pricing?',
      a: 'The ones that print prices on their own site. Of the six we checked, Thrive Design publishes its packages, add-ons, care plan and hourly rate, and WebFX publishes a starting price of $8,000 a site plus market ranges. Thrive Internet Marketing Agency, New Media and EZMarketing quote after a consultation. Transparency also means an itemized statement of work, so ask for one either way.',
    },
    {
      q: 'Which agencies suit a startup with a moderate budget under $35,000?',
      a: 'Most small business agencies do, because $35,000 sits above the typical small agency band. WebFX puts small agencies at $6,000 to $12,000, and Thrive Design\'s custom "Authority Website" runs $15,000 to $35,000. Under $35,000 you can buy a custom marketing site with technical SEO and accessibility done properly. Ecommerce or membership features push the price up: Thrive Design starts its sales websites at $40,000.',
    },
    {
      q: 'What are the best done-for-you website design services for small businesses?',
      a: 'Done-for-you means the agency writes or edits copy, sources images, builds, launches and hands over. Check the package says so. Thrive Design\'s basic package includes five AI-assisted content pages but not photography, which it sells from $1,200. Full-service firms such as WebFX and New Media sell design with SEO and ads. FactoryJet builds and launches sites of 5 pages or fewer in 7 days.',
    },
    {
      q: 'Can one agency handle web design and management for a small business?',
      a: 'Yes, and most of the six do. Thrive Design sells a care plan at $127 a month covering hosting and maintenance. WebFX, Thrive Internet Marketing Agency and New Media sell design alongside SEO and marketing services. Before signing, ask what the plan covers: updates, backups with a tested restore, uptime monitoring and how fast someone responds when the site goes down.',
    },
    {
      q: 'How do I choose the right web design agency?',
      a: 'Start with proof, not portfolio. Ask for live client URLs and run each through PageSpeed Insights yourself. Then confirm four things in writing: a fixed price with itemized scope, two client references you can call, code and hosting ownership at handoff, and accessibility to WCAG 2.2 AA. Google\'s own hiring advice adds: ask how they measure success and in what timeframe.',
    },
    {
      q: 'What questions should I ask a web design agency before hiring them?',
      a: 'Ask for PageSpeed Insights links on three recent client sites, the framework or CMS they build on and why, whether the price is fixed with itemized scope, who owns the code and hosting at the end, whether WCAG 2.2 AA is included, what technical SEO is in the base price, the milestone dates, and two client references you can call this week. Vague answers on any of these are a warning.',
    },
    {
      q: 'What are the red flags that an agency will deliver a bad website?',
      a: 'Walk away from agencies that will not show live client URLs, quote without an itemized scope, promise first-page rankings, offer unlimited revisions without defining a revision, hold your hosting in their own account with no exit terms, or push for full payment up front. Google\'s guidance is plain: if someone guarantees first place in search results, find someone else.',
    },
    {
      q: 'How many days does it take to design a website?',
      a: 'It depends on scope and on how fast you supply content. Clutch says most web design projects it reviews last 7 months, which includes large builds. Thrive Design quotes 6 to 8 weeks for its basic package. FactoryJet delivers sites of 5 pages or fewer in 7 days. Arriving at kickoff with copy, logo files and photos ready is the biggest single thing you can do to shorten any timeline.',
    },
    {
      q: 'Should I hire a local web design agency near me or a remote agency?',
      a: 'Hire for proof and process, then decide whether in-person meetings are worth paying for. Website projects run well over video calls, shared files and a staging link. A local agency helps when you want workshops in your office or local photography. Either way, ask for references you can call, a contract you understand and a named person who answers your messages during your business hours.',
    },
    {
      q: 'Do small business web design agencies include SEO?',
      a: 'They should include technical SEO in the build: clean headings, title tags and meta descriptions, an XML sitemap, schema markup, image alt text and fast load times. Ongoing SEO is usually a separate monthly service. Thrive Design, for example, publishes monthly SEO at $2,500 to $3,500. If technical SEO is missing from the base quote, ask why before you sign.',
    },
    {
      q: 'Why does accessibility matter when choosing an agency?',
      a: 'Because lawsuits reach small firms. UsableNet counted more than 5,000 digital accessibility lawsuits in 2025, and 64% of the companies sued earn under $25 million a year. The CDC says more than 1 in 4 US adults have some type of disability. Ask the agency to scan a recent client site with WAVE or Axe and share the results, and to confirm WCAG 2.2 AA in the contract.',
    },
    {
      q: 'What Lighthouse or PageSpeed score should an agency\'s sites reach?',
      a: 'Look at Core Web Vitals first and the score second. Google\'s web.dev guidance treats a Largest Contentful Paint of 2.5 seconds or less at the 75th percentile as good. We suggest mobile Performance of 85 or higher and 90 or higher for Accessibility, Best Practices and SEO on live client sites. Run them yourself at pagespeed.web.dev rather than trusting screenshots.',
    },
    {
      q: 'What is the difference between a web design agency and a web developer?',
      a: 'An agency sells design, development, project management and support as one service. An independent developer sells coding time and may or may not cover design, copy or post-launch fixes. Agencies cost more per hour and carry less coordination risk. If you hire separate people, you become the project manager, so price your own time into the comparison.',
    },
    {
      q: 'Is a fixed price or hourly billing better for a website build?',
      a: 'Fixed price for the build, hourly for changes after launch. A fixed price only protects you when the scope is written down: page count, revision rounds, what counts as a revision versus new work, and who supplies copy and images. Hourly billing for a first build makes sense only when requirements are still unknown, such as a custom web application.',
    },
    {
      q: 'Is web design still in demand in 2026?',
      a: 'Yes, though the work has moved up. AI tools and builders absorbed much of the template-and-logo end. What small businesses still pay agencies for is speed on real phones, accessibility, conversion work and connecting the site to the tools they already run, such as booking, CRM and payments. Clutch still reviews thousands of web design projects and publishes pricing for them.',
    },
    {
      q: 'Will AI replace web designers?',
      a: 'Not for business websites, though it has taken over part of the job. AI drafts code, layouts and copy, which shortens build time. It does not decide what your business should say, test with your customers, or answer for a site that fails an accessibility review. Hire an agency that uses AI to move faster and still puts a person on the decisions.',
    },
    {
      q: 'Are web designers worth it for a small business?',
      a: 'A good one is, because a weak site costs you quietly. Portent\'s study of more than 100 million page views across 20 sites found B2B pages loading in 1 second converted 3 times better than pages loading in 5 seconds. A designer earns the fee on decisions like what goes above the fold, how the form works and how the page behaves on a slow phone.',
    },
    {
      q: 'Can I build a website for free instead of hiring an agency?',
      a: 'You can, on free tiers from builders such as Google Sites, Wix or WordPress.com. The trade-offs are a builder-branded address, limited SEO settings and no clean way to move the site later. That is fine for testing an idea. For a business asking customers for money or contact details, budget at least for your own domain and a paid plan.',
    },
    {
      q: 'Does FactoryJet build websites for US small businesses?',
      a: 'Yes. FactoryJet was founded in 2014, has served 500+ businesses and has a 97% on-time delivery record. Sites of 5 pages or fewer get 7-day delivery, and you can see a working demo before you sign. FactoryJet is a registered Shopify Partner for store builds. Pricing is fixed and quoted in writing after a short scoping call.',
    },
  ],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6">
        For a US small business in 2026, a sensible shortlist is WebFX, Thrive Internet Marketing Agency, New Media, Thrive Design, EZMarketing and FactoryJet. We read each agency&apos;s own site on 22 October 2026 and kept only what those pages say. Two of the six publish prices: <a href={SRC.webfxPricing} {...extLinkProps}>WebFX starts web design at $8,000 a site</a> and <a href={SRC.thriveDesignPrice} {...extLinkProps}>Thrive Design&apos;s basic package is $7,500</a>. The market band for small agencies is $6,000 to $12,000, <a href={SRC.webfxSmb} {...extLinkProps}>per WebFX&apos;s small business cost guide</a>. Below the shortlist are the five checks that separate a good agency from a good pitch.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>The Shortlist: Six US Agencies Checked on 22 Oct 2026</li>
          <li>Why Most Agency Selection Processes Fail Small Businesses</li>
          <li>The Five Non-Negotiable Criteria for 2026</li>
          <li>Performance Standards: The PageSpeed Test</li>
          <li>Accessibility: The Legal and Commercial Case for WCAG 2.2</li>
          <li>Pricing Models: Fixed vs. Hourly vs. Retainer</li>
          <li>The Reference Check</li>
          <li>Local vs. Remote: What Actually Matters</li>
          <li>Contract Terms That Protect Small Businesses</li>
          <li>The 10 Questions to Ask Every Agency</li>
          <li>Red Flags That Predict Expensive Mistakes</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Shortlist: Six US Agencies Checked on 22 Oct 2026</h2>
      <p className="mb-4">
        Each row comes from the agency&apos;s own pages, read on 22 October 2026. Where a page did not state something, the table says so rather than filling the gap. Note that Thrive Internet Marketing Agency (Texas) and Thrive Design (Washington) are separate companies.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Agency</th>
              <th className="p-3 border text-left">What its own site says</th>
              <th className="p-3 border text-left">Published price</th>
              <th className="p-3 border text-left">Best fit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3 font-semibold"><a href={SRC.webfxAbout} {...extLinkProps}>WebFX</a></td>
              <td className="border p-3">Timeline shows founding in 1996; &quot;750+&quot; staff; web design sold with SEO, PPC and content services</td>
              <td className="border p-3"><a href={SRC.webfxPricing} {...extLinkProps}>From $8,000 a site</a></td>
              <td className="border p-3">Businesses that want design and ongoing marketing from one large firm</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold"><a href={SRC.thriveAbout} {...extLinkProps}>Thrive Internet Marketing Agency</a></td>
              <td className="border p-3">Established 2005; <a href={SRC.thriveContact} {...extLinkProps}>headquartered in Arlington, TX</a>; &quot;more than 160 employees across 34 states&quot;; works with &quot;businesses of all sizes&quot;</td>
              <td className="border p-3">Not published; quotes on request</td>
              <td className="border p-3">Franchises and multi-location firms wanting web plus marketing</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold"><a href={SRC.newMedia} {...extLinkProps}>New Media</a></td>
              <td className="border p-3">Started in 1996 as &quot;a small team of Denver website designers&quot;; &quot;25+ locations across North America&quot;; &quot;1,000+ clients across 50+ industries&quot;</td>
              <td className="border p-3">Not published</td>
              <td className="border p-3">Growing firms that want a full-service team and in-person options</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold"><a href={SRC.thriveDesign} {...extLinkProps}>Thrive Design</a></td>
              <td className="border p-3">&quot;Seattle based&quot; WordPress studio (footer address in Edmonds, WA); footer reads 2002 to 2026; offers branding, SEO, hosting and maintenance</td>
              <td className="border p-3"><a href={SRC.thriveDesignPrice} {...extLinkProps}>$7,500 basic site (6 to 8 weeks); $15,000 to $35,000 custom; care plan $127 a month</a></td>
              <td className="border p-3">Buyers who want a printed price before the first call</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3 font-semibold"><a href={SRC.ezMarketing} {...extLinkProps}>EZMarketing</a></td>
              <td className="border p-3">Main office in Lancaster, PA; founded &quot;more than 25 years ago&quot;; says it works &quot;with small business owners across the U.S.&quot;</td>
              <td className="border p-3">Not published; free consultation</td>
              <td className="border p-3">Local service businesses that want lead-focused sites</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3 font-semibold"><a href="/services/web-design" className="text-[#B23E13] underline">FactoryJet</a></td>
              <td className="border p-3">Founded 2014; 500+ businesses served; 97% on-time delivery; registered Shopify Partner</td>
              <td className="border p-3">Fixed price in writing after a short scoping call</td>
              <td className="border p-3">Sites of 5 pages or fewer needing 7-day delivery, and buyers who want a working demo before signing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        For scale: <a href={SRC.clutchPricing} {...extLinkProps}>Clutch&apos;s web design pricing data</a>, updated 21 September 2026, puts the average reviewed project at $38,105, says most projects cost less than $10,000, and lists US web designers at $100 to $149 an hour. The average is pulled up by large builds, so read the &quot;most projects&quot; line as the small business reference point.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Most Agency Selection Processes Fail Small Businesses</h2>
      <p className="mb-4">
        The typical owner judges agencies on three things: how the portfolio looks, how likable the salesperson was, and whether the price fits a mental budget. None of these predicts outcomes well. A beautiful portfolio site can take six seconds to load on a phone. A likable salesperson may hand you to developers they never manage. And the mental budget usually anchors to the wrong reference point.
      </p>
      <p className="mb-4">
        The agencies that build the best-performing small business sites are often not the most polished in their own marketing. They are engineering-first teams with tidy workflows and a process that looks dull on a portfolio page and fast on a real phone. Finding them takes different signals than portfolio looks.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Five Non-Negotiable Criteria for 2026</h2>
      <p className="mb-4">
        Every agency you seriously consider should pass these five gates, however good the portfolio looks.
      </p>
      <p className="mb-4">
        <strong>1. Live client sites that pass PageSpeed Insights on mobile.</strong> Ask for three live URLs and run them yourself at <a href={SRC.pagespeed} {...extLinkProps}>pagespeed.web.dev</a>. A failing Core Web Vitals result on most of them is technical debt you would inherit.
      </p>
      <p className="mb-4">
        <strong>2. A fixed price with itemized scope.</strong> An agency that will not list every deliverable in writing before you sign plans to bill you for changes. &quot;Work outside the scope is billed at $X an hour&quot; is legitimate. &quot;We&apos;ll figure it out as we go&quot; is not.
      </p>
      <p className="mb-4">
        <strong>3. Named client references you can call.</strong> Not testimonials on their website and not case studies with first names only. Two or three clients from the past twelve months who will speak to you directly.
      </p>
      <p className="mb-4">
        <strong>4. WCAG 2.2 Level AA accessibility.</strong> <a href={SRC.usablenet} {...extLinkProps}>UsableNet counted more than 5,000 digital accessibility lawsuits in 2025</a>, and 64% of the companies sued earn under $25 million a year. An agency that ignores accessibility is creating legal exposure for you.
      </p>
      <p className="mb-4">
        <strong>5. Full code and hosting ownership at handoff.</strong> When you make the final payment you should hold the codebase, hosting credentials and CMS admin. Agencies that keep your site on accounts in their name, with no exit terms, are building lock-in.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Performance Standards: The PageSpeed Test</h2>
      <p className="mb-4">
        Google&apos;s PageSpeed Insights, powered by Lighthouse, scores Performance, Accessibility, Best Practices and SEO from 0 to 100, and reports Core Web Vitals from real Chrome users where enough data exists. The LCP threshold below is Google&apos;s; the score targets are the bar we suggest for a small business site.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Metric</th>
              <th className="p-3 border text-left">Minimum</th>
              <th className="p-3 border text-left">Target</th>
              <th className="p-3 border text-left">What it affects</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border p-3">Performance (mobile)</td>
              <td className="border p-3">85</td>
              <td className="border p-3">95+</td>
              <td className="border p-3">Load speed on real phones</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">Accessibility</td>
              <td className="border p-3">90</td>
              <td className="border p-3">100</td>
              <td className="border p-3">Automated WCAG checks (manual testing still needed)</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">Best Practices</td>
              <td className="border p-3">90</td>
              <td className="border p-3">100</td>
              <td className="border p-3">HTTPS, console errors, modern APIs</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border p-3">SEO</td>
              <td className="border p-3">90</td>
              <td className="border p-3">100</td>
              <td className="border p-3">Indexability, titles, crawlable links</td>
            </tr>
            <tr className="bg-white">
              <td className="border p-3">LCP (Largest Contentful Paint)</td>
              <td className="border p-3"><a href={SRC.lcp} {...extLinkProps}>2.5s or less (Google&apos;s &quot;good&quot;)</a></td>
              <td className="border p-3">under 1.8s</td>
              <td className="border p-3">Core Web Vitals, bounce rate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Slow pages lose sales. <a href={SRC.portent} {...extLinkProps}>Portent&apos;s 2022 study of more than 100 million page views across 20 sites</a> found B2B pages that loaded in 1 second converted 3 times better than pages that loaded in 5 seconds, and ecommerce pages 2.5 times better. An agency whose client sites load slowly is costing those clients sales every day.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility: The Legal and Commercial Case for WCAG 2.2</h2>
      <p className="mb-4">
        Accessibility is usually framed as compliance. It is also a sales issue. <a href={SRC.cdc} {...extLinkProps}>The CDC says more than 1 in 4 US adults have some type of disability</a>. Screen readers, keyboard navigation and high-contrast viewing are how a large share of your customers use the web.
      </p>
      <p className="mb-4">
        WCAG 2.2 Level AA in practice means descriptive alt text on images, every control reachable by keyboard, <a href={SRC.wcagContrast} {...extLinkProps}>a contrast ratio of at least 4.5:1 for body text</a> (3:1 for large text), labels on every form field, and nothing that flashes more than three times a second. Good agencies build this in from the first component.
      </p>
      <p className="mb-4">
        Ask each shortlisted agency to run Axe DevTools or WAVE on a recent client site and share the result. Teams that build accessibly will show few or no critical issues. Teams that do not will show a long list in a 30-second scan.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pricing Models: Fixed vs. Hourly vs. Retainer</h2>
      <p className="mb-4">
        <strong>Fixed-price project billing</strong> is the right model for a first build. The contract should state the number of pages, the number of design revision rounds, what counts as a revision versus new work, and whether you or the agency supply copy and images. A fixed price protects you only when the scope is written in that much detail.
      </p>
      <p className="mb-4">
        <strong>Hourly billing</strong> suits changes after launch. <a href={SRC.clutchPricing} {...extLinkProps}>Clutch lists US web designers at $100 to $149 an hour</a>; Thrive Design publishes $165 an hour for WordPress support. Avoid hourly billing for the first build unless the requirements are still unknown, as with a custom web application.
      </p>
      <p className="mb-4">
        <strong>Monthly plans</strong> suit ongoing maintenance, content updates and SEO. <a href={SRC.thriveDesignPrice} {...extLinkProps}>Thrive Design&apos;s care plan is $127 a month</a> for hosting and maintenance, and its monthly SEO runs $2,500 to $3,500. Whatever you buy, the plan should list what it delivers each month in writing.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">Want a fixed quote to compare against your shortlist?</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Send us your page count and launch date. FactoryJet quotes a fixed price in writing after a short scoping call, delivers sites of 5 pages or fewer in 7 days, and shows you a working demo before you sign.
        </p>
        <a href="/contact" className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors">Get a website quote &rarr;</a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Reference Check</h2>
      <p className="mb-4">
        &quot;Did you like working with them?&quot; tells you little about technical quality. Ask references these five questions instead:
      </p>
      <p className="mb-4">
        (1) Did the project finish on time and within the quoted budget? If not, why not? (2) Do you know your mobile PageSpeed result? (3) Have you had leads from search since launch? (4) How fast did the team respond to bugs after launch? (5) Would you hire them again for a bigger project?
      </p>
      <p className="mb-4">
        Question 5 is often the most revealing. &quot;Probably&quot; usually means fine but forgettable. &quot;We already have them on a support plan&quot; means the agency delivered something the client values.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Local vs. Remote: What Actually Matters</h2>
      <p className="mb-4">
        The case for a local agency rests on in-person workshops, local photography and the comfort of a nearby office. Those are real, and they carry a cost. For most website projects the work itself runs on video calls, shared files and a staging link, so the agency&apos;s address matters less than three things you can check.
      </p>
      <p className="mb-4">
        First, a named person who answers your messages during your business hours. Second, a contract you understand, with milestones and ownership terms. Third, references you can call. An agency that meets all three will serve you well wherever it sits; one that misses any of them will not be rescued by being down the road.
      </p>
      <p className="mb-4">➡ Learn more: <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">FactoryJet US web design services</a></p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contract Terms That Protect Small Businesses</h2>
      <p className="mb-4">
        Most small businesses lose money in the contract, not because they skip reading it, but because they do not know which clauses to insist on. These four do the most work:
      </p>
      <p className="mb-4">
        <strong>Code and IP ownership:</strong> &quot;Upon receipt of final payment, all source code, design files, database schemas and related intellectual property transfer in full to the client.&quot; Without this, you may not own your website.
      </p>
      <p className="mb-4">
        <strong>Defined revision process:</strong> &quot;The project includes two rounds of design feedback per page. A revision is a change within the agreed scope. New features or pages are change orders at $X.&quot; Without this, &quot;unlimited revisions&quot; becomes an argument.
      </p>
      <p className="mb-4">
        <strong>Milestone schedule:</strong> &quot;Design mockups by [date]. Development by [date]. Launch by [date].&quot; Tie the final payment to launch.
      </p>
      <p className="mb-4">
        <strong>Post-launch support:</strong> &quot;The agency fixes bugs arising from the build for 30 days after launch at no charge. Feature additions and content changes are billed at the standard rate.&quot; Know exactly when free support ends.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The 10 Questions to Ask Every Agency</h2>
      <p className="mb-4">Use this list on every call:</p>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Can you share PageSpeed Insights links for three recent client sites you built from scratch?</li>
        <li>What framework or CMS do you build on, and why?</li>
        <li>Is your price fixed with an itemized statement of work, or hourly?</li>
        <li>Who owns the code and hosting credentials when the project ends?</li>
        <li>Is WCAG 2.2 Level AA included in your standard build?</li>
        <li>Is technical SEO (schema markup, sitemap, meta tags) in the base price?</li>
        <li>What are the milestone dates in the contract?</li>
        <li>Who exactly will build my site, and can I speak to them before I sign?</li>
        <li>Can you give me two client references I can call this week?</li>
        <li>What happens if you miss the delivery date?</li>
      </ol>
      <p className="mb-4">
        An agency that answers all ten with specifics is a professional operation. Hesitation on live URLs, references or code ownership should end the conversation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Red Flags That Predict Expensive Mistakes</h2>
      <p className="mb-4">
        Walk away from agencies that: (1) cannot show live client sites, (2) guarantee first-page Google rankings (<a href={SRC.googleSeo} {...extLinkProps}>Google says plainly that no one can guarantee a #1 ranking</a>), (3) offer unlimited revisions without defining one, (4) will not give named references, (5) quote without a written scope, (6) host your site in their own account with no exit terms, (7) bundle &quot;free SEO&quot; without saying what it includes, (8) show portfolios of homepage screenshots with no live URLs, (9) cannot explain what they build on and why, or (10) want full payment up front.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-bold mb-2 text-blue-900">The 60-Minute Agency Vetting Checklist</h3>
        <p className="text-blue-800 mb-3">Before hiring any web design agency, confirm these five things:</p>
        <ul className="list-disc pl-5 space-y-1 text-blue-800">
          <li>A live client site you ran through PageSpeed Insights yourself on mobile</li>
          <li>A fixed-price contract with written itemized scope</li>
          <li>A named client reference you called</li>
          <li>WCAG 2.2 AA confirmed in writing</li>
          <li>A full code ownership clause in the contract</li>
        </ul>
        <p className="text-blue-800 mt-3">
          ➡ <a href="/services/web-design" className="underline">See FactoryJet web design</a> · <a href="/portfolio" className="underline">View our portfolio</a> · <a href="/contact" className="underline">Get a quote</a>
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-8">
        Sources checked 22 Oct 2026: agency sites for{' '}
        <a href={SRC.webfxAbout} {...extLinkProps}>WebFX</a>,{' '}
        <a href={SRC.thriveAbout} {...extLinkProps}>Thrive Internet Marketing Agency</a>,{' '}
        <a href={SRC.newMedia} {...extLinkProps}>New Media</a>,{' '}
        <a href={SRC.thriveDesign} {...extLinkProps}>Thrive Design</a> and{' '}
        <a href={SRC.ezMarketing} {...extLinkProps}>EZMarketing</a>; price data from{' '}
        <a href={SRC.webfxSmb} {...extLinkProps}>WebFX</a> and{' '}
        <a href={SRC.clutchPricing} {...extLinkProps}>Clutch</a>; lawsuits from{' '}
        <a href={SRC.usablenet} {...extLinkProps}>UsableNet</a>; disability share from{' '}
        <a href={SRC.cdc} {...extLinkProps}>CDC</a>; thresholds from{' '}
        <a href={SRC.lcp} {...extLinkProps}>web.dev</a> and{' '}
        <a href={SRC.wcagContrast} {...extLinkProps}>W3C</a>; ranking guidance from{' '}
        <a href={SRC.googleSeo} {...extLinkProps}>Google Search Central</a>; speed study from{' '}
        <a href={SRC.portent} {...extLinkProps}>Portent</a>. Agencies change prices and staff; confirm with each one.
      </p>
    </>
  ),
};
