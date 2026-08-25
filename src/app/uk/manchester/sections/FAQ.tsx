/*
 * FAQ, Pouch-style editorial layout
 * Pure server component: no "use client", no GSAP, no useState.
 * All 24 Q&As are fully visible in static HTML at all times.
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot) parse every word
 * without executing JavaScript.
 *
 * ALL_FAQS at the bottom of this file is the single source the FAQPage JSON-LD
 * in layout.tsx maps over. Never hand-write a second copy of these questions
 * next to a script tag: schema that disagrees with the visible page is a
 * cloaking problem, not a formatting one.
 *
 * The four questions in SEO_FAQS marked "PAA" are copied verbatim from the live
 * People Also Ask box for "seo agency manchester", harvested 2026-08-25. Leave
 * the wording alone: matching the real query is the entire point.
 */

const CATEGORIES = [
  { label: "General Questions", href: "#faq-general" },
  { label: "SEO in Manchester", href: "#faq-seo" },
  { label: "Technology & Performance", href: "#faq-technology" },
  { label: "Services & Capabilities", href: "#faq-services" },
  { label: "Comparisons & Strategy", href: "#faq-comparisons" },
];

const SEO_FAQS = [
  {
    // PAA, verbatim
    q: "How much does SEO cost in the UK?",
    a: "It depends on the shape of the work, not the postcode. UK SEO is sold three ways: a one-off audit, a fixed-price project such as a technical clean-up, or a monthly retainer covering ongoing content and link earning. The drivers are how many pages need rewriting, how competitive your terms are, and how fast someone in-house can approve copy.",
  },
  {
    // PAA, verbatim
    q: "Is an SEO agency worth it?",
    a: "It is worth it when one new customer pays for several months of work, and it is not worth it when you need leads inside a fortnight. Search moves slowly, so SEO compounds rather than switching on. Work out what an average customer is worth over a year. If one job would cover a quarter, the maths holds.",
  },
  {
    // PAA, verbatim
    q: "What is the 80/20 rule in SEO?",
    a: "It is the observation that roughly 20% of the work drives roughly 80% of the results. That 20% is nearly always the same short list: fix what stops search engines reading the site, make pages fast on a mid-range phone, build one strong page per thing you sell, and earn a few genuine mentions. We do that first, deliberately.",
  },
  {
    // PAA, verbatim
    q: "How much should I pay for SEO services?",
    a: "Pay enough to cover real senior time, and no more. Cheap SEO is usually a junior running a template checklist, which produces reports rather than rankings. Ask how many hours a month you are buying and who does them. Then ask what you lose if you leave. We quote a fixed scope in writing after a call.",
  },
  {
    q: "How long does SEO take to work in Manchester?",
    a: "Expect early movement in about three months and real commercial results in six to nine. Technical and speed fixes land fastest, because search engines just recrawl and re-rank. New pages for competitive Manchester terms take longer: they have to earn trust before they hold. Map pack results often move sooner, if your Google Business Profile has been neglected.",
  },
  {
    q: "What does an SEO agency in Manchester actually do each month?",
    a: "Four things, repeated. Check the site for new technical faults and fix them. Write or rewrite pages aimed at terms real buyers type. Tidy the local listings so your name, address and phone match everywhere. Earn mentions from sites that matter in your trade. The monthly report exists to show which of the four moved.",
  },
  {
    q: "Can I do SEO myself instead of hiring an agency?",
    a: "Yes, and for a small local business that is often the right call. Claim and complete your Google Business Profile, ask happy customers for reviews, give every service its own page, and get the site loading fast on mobile. That covers most of it. Bring in an agency once the obvious fixes run out.",
  },
  {
    q: "How do I check an SEO agency is any good before signing?",
    a: "Ask for three things. A live page they built and the terms it ranks for, so you can check it yourself. The name of the person doing the work, not the one selling it. Written confirmation that you keep the site, content, analytics and links if you leave. Hesitation on the third tells you plenty.",
  },
];

const GENERAL_FAQS = [
  {
    q: "How much does web design cost in Manchester?",
    a: "Manchester web design costs vary hugely, from budget template shops to bespoke studios. Ours is fixed-price and scoped to your build: the drivers are page count, whether you need e-commerce or custom functionality, and how much content has to be written. Every project is quoted in writing after a free call, so you know the full cost before work starts.",
  },
  {
    q: "What is the best web design agency in Manchester?",
    a: 'Manchester has over 1,000 web design agencies, with MadeByShape, Pixel Kicks, Soap Media, and Supremo among the most established. The "best" depends on your needs: if you want template WordPress, many local agencies will serve you. If you want AI-native, performance-engineered websites built on Next.js 15 with guaranteed SEO scores and AI search visibility, FactoryJet is purpose-built for that, at a fraction of the typical Manchester cost.',
  },
  {
    q: "How long does it take to build a website in Manchester?",
    a: "Most Manchester agencies quote 6–12 weeks for a custom website. FactoryJet delivers in 2–4 weeks because we design in code (not Figma-to-handoff) and use a component-based architecture that eliminates rebuild cycles. Complex e-commerce builds may take 4–6 weeks.",
  },
  {
    q: "Do I need a Manchester-based web designer?",
    a: "No. What you need is a web design team that understands Manchester's market, competitive landscape, and customer behaviour, and delivers a website that performs on every technical metric. FactoryJet serves Manchester businesses remotely with UK-hours availability, direct engineer access, and deep local market research baked into every project.",
  },
];

const TECHNOLOGY_FAQS = [
  {
    q: "What technology should my Manchester website use?",
    a: "In 2026, the highest-performing websites use React-based frameworks like Next.js 15. WordPress still powers many Manchester business websites, but it is increasingly outperformed on Core Web Vitals, mobile speed, and AI search visibility. FactoryJet builds exclusively on Next.js 15 with Tailwind CSS 4: the same stack used by Vercel, Notion, and TikTok.",
  },
  {
    q: "Will my website rank on Google in Manchester?",
    a: "Every FactoryJet website ships with a Lighthouse SEO score of 100, full schema markup (LocalBusiness, Service, FAQPage, BreadcrumbList, HowTo), server-side rendering for instant crawlability, and AI search visibility built in. We guarantee the technical foundation that gives you the best possible chance.",
  },
  {
    q: "What is AI search visibility and why does it matter?",
    a: "AI search visibility means your website can be found and cited by AI systems like ChatGPT, Perplexity, Google AI Overviews, and Claude. Most WordPress sites are invisible to AI crawlers because they rely on JavaScript rendering. FactoryJet builds AI visibility into every page from day one.",
  },
  {
    q: "What is included in a FactoryJet website?",
    a: "Every project includes custom design, Next.js 15 build, Tailwind CSS 4 styling, full schema markup, Google Search Console setup, GSAP animations, mobile-first responsive design, Core Web Vitals optimisation, 90-day post-launch support, and conversion-engineered forms. No hidden fees, no Phase 2 upsells.",
  },
];

const SERVICES_FAQS = [
  {
    q: "Do you build e-commerce websites for Manchester businesses?",
    a: "Yes. We build on Shopify, WooCommerce, and custom headless e-commerce platforms. Manchester's retail and e-commerce sector is growing rapidly. We build stores that convert, not just display products.",
  },
  {
    q: "Can you redesign my existing Manchester website?",
    a: "Absolutely. Most of our Manchester clients come to us with outdated WordPress sites that score 30–50 on Lighthouse and have zero AI visibility. We rebuild from the ground up on Next.js 15, migrating your content while dramatically improving performance, design, and search visibility.",
  },
  {
    q: "Do you offer SEO services for Manchester businesses?",
    a: "Yes, but not traditional SEO. We specialise in AI-powered SEO (GEO, AEO, AIO), which optimises your website for both Google and AI search systems including schema markup, structured data, server-side rendering, and expanded visible content.",
  },
  {
    q: "What industries do you serve in Manchester?",
    a: "We serve tech and SaaS companies, financial and professional services firms, creative and media agencies, e-commerce and retail businesses, manufacturing and engineering companies, and health and life sciences organisations across Greater Manchester.",
  },
];

const COMPARISONS_FAQS = [
  {
    q: "How does FactoryJet compare to a Manchester website design company that uses WordPress?",
    a: "Most build on WordPress with a premium theme and no performance work, and the result often scores 40 to 60 on Lighthouse. We build on Next.js 15, so every site ships with Lighthouse 90+, full schema, server-side rendering and AI search visibility. Scope is fixed and quoted in writing after a free call.",
  },
  {
    q: "What makes a digital agency different from a traditional web development company?",
    a: "A digital agency like FactoryJet combines web design, development, SEO strategy, conversion architecture, and AI visibility into a single integrated service. We build digital assets engineered to generate leads, rank in search, and get cited by AI systems.",
  },
  {
    q: "Should I hire an SEO agency separately from my web development company?",
    a: "No. Hiring separately means paying twice, once for a website not built for search, and again for an agency retrofitting SEO onto a poor foundation. FactoryJet bakes search engine optimisation into every website from the architecture level.",
  },
  {
    q: "Can FactoryJet help Manchester businesses appear in AI search results?",
    a: "Yes, this is one of our core differentiators. We optimise for both Google and AI-powered search through Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO). Every website includes the structured data and schema markup that AI systems need to cite your business.",
  },
];

/** The one array. The visible list and the FAQPage JSON-LD both read from it. */
export const ALL_FAQS = [
  ...GENERAL_FAQS,
  ...SEO_FAQS,
  ...TECHNOLOGY_FAQS,
  ...SERVICES_FAQS,
  ...COMPARISONS_FAQS,
];

function QAList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      {items.map(({ q, a }) => (
        <div key={q} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{q}</h3>
          <p className="text-base text-gray-600 leading-relaxed">{a}</p>
        </div>
      ))}
    </>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top header ─────────────────────────────────────────────────── */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
          Have a question? Find answers here
        </p>
        <h2 className="font-clash text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        {/* ── 2-column layout ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── LEFT: sticky category nav ──────────────────────────────── */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <nav aria-label="FAQ categories">
                {CATEGORIES.map((cat, i) => (
                  <a
                    key={cat.href}
                    href={cat.href}
                    className={[
                      "block py-3 border-b border-gray-200 text-base transition-colors hover:text-[#F05A28]",
                      i === 0
                        ? "border-l-2 border-[#F05A28] pl-3 text-[#B23E13] font-semibold"
                        : "pl-3 text-gray-600",
                    ].join(" ")}
                  >
                    {cat.label}
                  </a>
                ))}
              </nav>

              <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                Don&apos;t see your question?{" "}
                <a
                  href="mailto:connect@factoryjet.com"
                  className="text-[#B23E13] underline underline-offset-2"
                >
                  Reach out
                </a>{" "}
                and we&apos;ll get back to you shortly.
              </p>
            </div>
          </aside>

          {/* ── RIGHT: grouped Q&A ─────────────────────────────────────── */}
          {/*
            Content is NEVER hidden behind accordions or JS toggles.
            All 24 Q&As are static HTML: GPTBot, ClaudeBot, and
            PerplexityBot parse every word without executing JavaScript.
          */}
          <div className="lg:col-span-9">

            {/* Category 1 */}
            <h2
              id="faq-general"
              className="text-2xl font-bold text-gray-900 mb-8 mt-0"
            >
              General Questions
            </h2>
            <QAList items={GENERAL_FAQS} />

            {/* Category 2 */}
            <h2
              id="faq-seo"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              SEO in Manchester
            </h2>
            <QAList items={SEO_FAQS} />

            {/* Category 3 */}
            <h2
              id="faq-technology"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              Technology &amp; Performance
            </h2>
            <QAList items={TECHNOLOGY_FAQS} />

            {/* Category 4 */}
            <h2
              id="faq-services"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              Services &amp; Capabilities
            </h2>
            <QAList items={SERVICES_FAQS} />

            {/* Category 5 */}
            <h2
              id="faq-comparisons"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              Comparisons &amp; Strategy
            </h2>
            <QAList items={COMPARISONS_FAQS} />

          </div>
        </div>

      </div>
    </section>
  );
}
