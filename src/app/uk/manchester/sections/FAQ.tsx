/*
 * FAQ — Pouch-style editorial layout
 * Pure server component: no "use client", no GSAP, no useState.
 * All 16 Q&As are fully visible in static HTML at all times —
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot) parse every word
 * without executing JavaScript.
 */

const CATEGORIES = [
  { label: "General Questions", href: "#faq-general" },
  { label: "Technology & Performance", href: "#faq-technology" },
  { label: "Services & Capabilities", href: "#faq-services" },
  { label: "Comparisons & Strategy", href: "#faq-comparisons" },
];

const GENERAL_FAQS = [
  {
    q: "How much does web design cost in Manchester?",
    a: "Manchester web design costs vary enormously depending on the agency and scope, from budget template shops to premium bespoke studios. FactoryJet's pricing is fixed-price and scoped to your build — the main drivers are the number of pages, e-commerce or custom functionality, and content needs. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Lighthouse 90+ performance and a full schema stack are included as standard.",
  },
  {
    q: "What is the best web design agency in Manchester?",
    a: 'Manchester has over 1,000 web design agencies, with MadeByShape, Pixel Kicks, Soap Media, and Supremo among the most established. The "best" depends on your needs: if you want template WordPress, many local agencies will serve you. If you want AI-native, performance-engineered websites built on Next.js 15 with guaranteed SEO scores and AI search visibility, FactoryJet is purpose-built for that — at a fraction of the typical Manchester cost.',
  },
  {
    q: "How long does it take to build a website in Manchester?",
    a: "Most Manchester agencies quote 6–12 weeks for a custom website. FactoryJet delivers in 2–4 weeks because we design in code (not Figma-to-handoff) and use a component-based architecture that eliminates rebuild cycles. Complex e-commerce builds may take 4–6 weeks.",
  },
  {
    q: "Do I need a Manchester-based web designer?",
    a: "No. What you need is a web design team that understands Manchester's market, competitive landscape, and customer behaviour — and delivers a website that performs on every technical metric. FactoryJet serves Manchester businesses remotely with UK-hours availability, direct engineer access, and deep local market research baked into every project.",
  },
];

const TECHNOLOGY_FAQS = [
  {
    q: "What technology should my Manchester website use?",
    a: "In 2026, the highest-performing websites use React-based frameworks like Next.js 15. WordPress still powers many Manchester business websites, but it is increasingly outperformed on Core Web Vitals, mobile speed, and AI search visibility. FactoryJet builds exclusively on Next.js 15 with Tailwind CSS 4 — the same stack used by Vercel, Notion, and TikTok.",
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
    a: "Yes — but not traditional SEO. We specialise in AI-powered SEO (GEO, AEO, AIO), which optimises your website for both Google and AI search systems including schema markup, structured data, server-side rendering, and expanded visible content.",
  },
  {
    q: "What industries do you serve in Manchester?",
    a: "We serve tech and SaaS companies, financial and professional services firms, creative and media agencies, e-commerce and retail businesses, manufacturing and engineering companies, and health and life sciences organisations across Greater Manchester.",
  },
];

const COMPARISONS_FAQS = [
  {
    q: "How does FactoryJet compare to a Manchester website design company that uses WordPress?",
    a: "Most Manchester website design companies build on WordPress with premium themes and no performance engineering, charging premium fees for websites that score 40–60 on Lighthouse. FactoryJet builds on Next.js 15 — every site ships with Lighthouse 90+ performance, full schema markup, server-side rendering, and AI search visibility, typically at a meaningfully lower cost. Our pricing is fixed-price and scoped to your build, quoted up front after a free discovery call.",
  },
  {
    q: "What makes a digital agency different from a traditional web development company?",
    a: "A digital agency like FactoryJet combines web design, development, SEO strategy, conversion architecture, and AI visibility into a single integrated service. We build digital assets engineered to generate leads, rank in search, and get cited by AI systems.",
  },
  {
    q: "Should I hire an SEO agency separately from my web development company?",
    a: "No. Hiring separately means paying twice — once for a website not built for search, and again for an agency retrofitting SEO onto a poor foundation. FactoryJet bakes search engine optimisation into every website from the architecture level.",
  },
  {
    q: "Can FactoryJet help Manchester businesses appear in AI search results?",
    a: "Yes — this is one of our core differentiators. We optimise for both Google and AI-powered search through Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO). Every website includes the structured data and schema markup that AI systems need to cite your business.",
  },
];

export const ALL_FAQS = [...GENERAL_FAQS, ...TECHNOLOGY_FAQS, ...SERVICES_FAQS, ...COMPARISONS_FAQS];

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
            All 16 Q&As are static HTML — GPTBot, ClaudeBot, and
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
              id="faq-technology"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              Technology &amp; Performance
            </h2>
            <QAList items={TECHNOLOGY_FAQS} />

            {/* Category 3 */}
            <h2
              id="faq-services"
              className="text-2xl font-bold text-gray-900 mb-8 mt-16"
            >
              Services &amp; Capabilities
            </h2>
            <QAList items={SERVICES_FAQS} />

            {/* Category 4 */}
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
