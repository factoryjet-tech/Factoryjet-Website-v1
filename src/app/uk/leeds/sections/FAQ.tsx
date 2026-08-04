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
    q: "How much does web design cost in Leeds?",
    a: "Website costs in Leeds vary widely depending on complexity. Established local agencies price by overhead and project scope, while budget-focused shops run pay-monthly models that often lock you in. FactoryJet delivers enterprise-grade websites on Next.js 15 at a fixed, scoped price because our AI-augmented development process dramatically reduces production time without sacrificing quality. The main drivers are page count, custom design, e-commerce or AI features, and integrations. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Our websites consistently score 90+ on Google Lighthouse Performance, which most Leeds agencies cannot match.",
  },
  {
    q: "Do you have a physical office in Leeds?",
    a: "FactoryJet operates as a remote-first, AI-native agency serving Leeds businesses from our global delivery network. This is exactly how we keep pricing at a fixed, transparent quote, we do not pass the cost of Leeds city centre office space onto our clients. We are available via video call, WhatsApp, phone, and email throughout UK business hours, and we meet in person for larger engagements.",
  },
  {
    q: "Do I need a website for my small business in Leeds in 2026?",
    a: "Absolutely. 87% of UK small businesses already have a website, and 69% of those without one say they need one. For Leeds businesses, a professional website is essential for appearing in local Google searches, being cited by AI search tools like ChatGPT and Perplexity, and competing with the 42,000 other businesses in the city.",
  },
];

const TECHNOLOGY_FAQS = [
  {
    q: "What is generative engine optimisation and why does my Leeds business need it?",
    a: "Generative engine optimisation (GEO) is the practice of optimising your website and content to appear in AI-generated search results: Google AI Overviews, ChatGPT responses, Perplexity AI answers, and Claude citations. In the UK, 42% of Google searches now show AI-generated summaries, ChatGPT had 1.8 billion UK visits in 2025, and AI search traffic converts at 4.4 times the rate of traditional organic search. No other SEO agency in Leeds currently offers dedicated GEO and AEO services, making this a significant first-mover opportunity for Leeds businesses that act now.",
  },
  {
    q: "Are AI chatbots and AI agents GDPR compliant in the UK?",
    a: "All AI agents built by FactoryJet are designed for full GDPR compliance including data processing agreements, explicit consent mechanisms, data minimisation, and the right to erasure. For Leeds financial services firms, legal practices, and healthcare organisations, we implement additional safeguards including full audit trails and role-based access controls.",
  },
  {
    q: "Can you help my Leeds business get mentioned in ChatGPT and Perplexity?",
    a: "Yes, this is a core part of our AI SEO service. We optimise your content for LLM citation patterns, ensure AI crawlers can access your site through proper robots.txt and Cloudflare configuration, build entity-rich structured data, and implement schema markup that improves your AI visibility.",
  },
];

const SERVICES_FAQS = [
  {
    q: "Can you build a Shopify store for my Leeds retail business?",
    a: "Yes. FactoryJet is an experienced Shopify developer and Shopify agency serving Leeds retailers, fashion brands, and direct-to-consumer businesses. We build on Shopify, Shopify Plus, and WooCommerce, and we also offer headless e-commerce architectures. We handle Shopify migrations, build custom themes, and configure UK-specific payment gateways (Stripe, PayPal, Klarna) and shipping providers (Royal Mail, DPD).",
  },
  {
    q: "What is an AI agent and how can it help my Leeds business?",
    a: "An AI agent is an intelligent software system that can autonomously handle tasks your team currently does manually, answering customer enquiries, qualifying sales leads, processing documents, scheduling appointments, and more. For Leeds businesses, AI agents typically deliver ROI within three to six months by reducing staffing costs, improving 24/7 response times, and handling 60–80% of routine interactions.",
  },
  {
    q: "What industries does FactoryJet serve in Leeds?",
    a: "We serve businesses across every major Leeds industry including financial services and FinTech, legal and professional services, fashion and retail, healthcare and health-tech, digital and technology, education, manufacturing, hospitality, and more. Our work spans B2B and B2C businesses, from solo founders to companies with hundreds of employees.",
  },
];

const COMPARISONS_FAQS = [
  {
    q: "How long does FactoryJet take to build a website?",
    a: "Our typical turnaround is 2–4 weeks for business websites, 3–6 weeks for e-commerce stores, and 4–8 weeks for AI agent deployments. This is significantly faster than most Leeds web design agencies, which typically quote 6–12 weeks. Every project includes a staging link so you can review progress in real time.",
  },
  {
    q: "Is VAT charged on web design in the UK? Can I claim my website as a business expense?",
    a: "Yes to both. If the web design agency is VAT registered (annual turnover above £90,000), VAT at 20% is added to the invoice. Web design, hosting, SEO, and digital marketing costs are all legitimate business expenses claimable with HMRC against your corporation tax (19–25%) or income tax for sole traders. This can reduce the effective cost of your website by 19–25%.",
  },
  {
    q: "How does FactoryJet compare to agencies like Ascensor, Parallax, or Bolser in Leeds?",
    a: "Ascensor, Parallax, and Bolser are established Leeds agencies with solid track records. Where FactoryJet differs: Technology, we build on Next.js 15 instead of WordPress. AI capabilities, we offer AI agent development and GEO/AEO that no Leeds agency provides. Pricing, 50–60% lower costs for comparable or superior quality.",
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
            All 16 Q&As are static HTML: GPTBot, ClaudeBot, and
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
