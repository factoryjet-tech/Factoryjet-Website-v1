"use client";

// Stripe-style sidebar + CSS-only accordion FAQ.
//
// SEO rule: every answer is always present in the DOM. The collapsed state
// uses max-height/opacity transitions, NOT display:none or conditional
// rendering. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) read the HTML
// source and therefore see every answer regardless of visual state.
//
// The category filter DOES use conditional rendering, but the default active
// filter is "all", so the initial server-rendered HTML contains all 28 Q&As.

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Types & data ─────────────────────────────────────────────────────────────
type CategoryId =
  | "all"
  | "web-design"
  | "ecommerce"
  | "ai-agents"
  | "ai-seo"
  | "general";

type Category = { id: CategoryId; label: string; count: number | null };

const CATEGORIES: Category[] = [
  { id: "all", label: "All Questions", count: 28 },
  { id: "web-design", label: "Web Design & Development", count: 7 },
  { id: "ecommerce", label: "E-Commerce", count: 5 },
  { id: "ai-agents", label: "AI Agents", count: 5 },
  { id: "ai-seo", label: "AI SEO — GEO/AEO/AIO", count: 7 },
  { id: "general", label: "General", count: 4 },
];

type Faq = {
  cat: Exclude<CategoryId, "all">;
  q: string;
  a: string;
};

// All 28 Q&As — verbatim. Order preserved.
const FAQS: Faq[] = [
  {
    cat: "web-design",
    q: "How much does a website cost in the UK in 2026?",
    a: "UK website costs vary significantly. Basic template websites cost £500–£2,500. Standard business websites from agencies run £3,000–£12,000. Custom-built sites on modern frameworks range from £10,000–£50,000, and enterprise projects can exceed £100,000. FactoryJet delivers professional, custom-built websites on Next.js 15 starting from £1,500, with most projects falling in the £2,000–£8,000 range — 50–60% below the traditional agency average for comparable or superior quality. For UK business owners, remember that website design and development is a legitimate business expense for HMRC purposes, which can reduce the effective cost by 19–25% depending on your tax bracket.",
  },
  {
    cat: "web-design",
    q: "What is the best website design company in the UK?",
    a: "The best website design company depends on your specific needs and budget. Large agencies like Pentagram and Moving Brands serve enterprise clients at premium rates. Mid-market agencies charge £8,000–£25,000 per project. FactoryJet occupies a unique position as the UK’s AI-native web design agency — delivering enterprise-grade quality on the same technology stack as Stripe and Vercel (Next.js 15, Tailwind CSS 4) at 50–60% below traditional traditional agency rates. Every site we build scores 90+ on Google Lighthouse and is optimised for both Google and AI search engines from day one.",
  },
  {
    cat: "web-design",
    q: "How long does it take to build a website in the UK?",
    a: "Most UK web design agencies take 8–16 weeks for a standard business website. FactoryJet delivers in 3–6 weeks for most projects, and as fast as 2 weeks for smaller sites. Our faster turnaround comes from building on a component-based architecture with AI-augmented development workflows — not from cutting corners. Every build includes responsive design, SEO optimisation, AI search readiness, and full quality assurance.",
  },
  {
    cat: "web-design",
    q: "What is the difference between a web designer and a web developer?",
    a: "A web designer focuses on the visual appearance — layout, typography, colours, and user experience. A web developer writes the code that makes the design functional — handling databases, server logic, and interactive features. At FactoryJet, every project gets both: our AI-augmented process handles design and development together, so you get a site that looks stunning and performs flawlessly without hiring two separate teams.",
  },
  {
    cat: "web-design",
    q: "Is WordPress still good for business websites in 2026?",
    a: "WordPress powers roughly 43% of all websites globally and remains a viable option for many businesses. However, WordPress sites typically score 50–70 on Google Lighthouse performance, require constant security patching, and are not optimised for AI search engines. Modern frameworks like Next.js 15 deliver significantly faster load times (under 2 seconds vs 4–6 seconds for WordPress), better SEO scores (90+ Lighthouse vs 60–80), and built-in AI crawler compatibility. FactoryJet builds exclusively on Next.js for these reasons — the performance difference directly impacts your revenue. Sites loading in one second convert at three times the rate of sites taking five seconds.",
  },
  {
    cat: "web-design",
    q: "Can I claim web design as a business expense in the UK?",
    a: "Yes. Website design, development, hosting, domain registration, SEO, AI agent development, and ongoing digital marketing are all legitimate business expenses in the UK. For limited companies, these reduce your corporation tax liability at the current rate of 19–25%. For sole traders, they reduce your income tax. This means the effective cost of a £5,000 website project could be as low as £3,750–£4,050 after tax relief. AI agent development and ongoing SaaS-style costs are also fully deductible. Consult your accountant for advice specific to your situation.",
  },
  {
    cat: "web-design",
    q: "What is Next.js and why should my UK business use it?",
    a: "Next.js is a React-based framework used by Stripe, Vercel, TikTok, and Netflix for their websites. It delivers server-side rendering for instant load times, automatic code splitting for performance, built-in SEO optimisation, and static site generation for maximum speed. FactoryJet builds every UK client website on Next.js 15 — the latest version — paired with Tailwind CSS 4. The result is websites that load in under two seconds, score 90+ on Lighthouse, and are readable by both Google and AI search engines like ChatGPT and Perplexity.",
  },
  {
    cat: "ecommerce",
    q: "Shopify vs WooCommerce — which is better for UK businesses in 2026?",
    a: "Both are excellent platforms serving different needs. Shopify (5.8 million live sites globally) is better for businesses that want simplicity, reliability, and managed infrastructure — hosting, security, and payments work out of the box. UK Shopify plans start from £5–£344 per month with card processing at 1.5–2.2% plus 25p. WooCommerce (4.5 million live sites) is better for businesses needing deep customisation who are comfortable managing their own hosting. For most UK SMBs launching their first online store, we typically recommend Shopify for lower maintenance overhead. For businesses with complex product configurations, multiple integrations, or existing WordPress sites, WooCommerce offers more flexibility. We build on both and recommend based on your actual business needs, not our preferred platform.",
  },
  {
    cat: "ecommerce",
    q: "How much does an e-commerce website cost in the UK?",
    a: "UK e-commerce website costs range from £2,000 for a basic Shopify store to £50,000+ for enterprise custom builds. The average UK Shopify agency charges £8,000–£15,000 for a professional store. FactoryJet delivers Shopify and WooCommerce stores starting from £2,000, with most projects in the £3,000–£10,000 range — 50–80% below UK market rates. Every build includes UK payment gateway integration (Stripe, PayPal, Klarna, Apple Pay), Royal Mail and DPD shipping configuration, and e-commerce SEO.",
  },
  {
    cat: "ecommerce",
    q: "How do I start an online store in the UK?",
    a: "Starting an online store in the UK involves platform selection (Shopify or WooCommerce), store design and development, product catalogue setup, UK payment gateway integration (Stripe, PayPal, Klarna), shipping configuration (Royal Mail, DPD, Evri), and launch-ready e-commerce SEO. You will also need to register for VAT if your turnover exceeds £90,000 and comply with UK consumer rights regulations for online selling including 14-day cooling-off periods. FactoryJet provides end-to-end support from platform selection through post-launch optimisation, typically delivering a fully functional store in 3–6 weeks.",
  },
  {
    cat: "ecommerce",
    q: "What is headless commerce and is it right for my business?",
    a: "Headless commerce separates your storefront (what customers see) from your backend (inventory, payments, orders). This allows you to build a blazing-fast frontend using modern frameworks like Next.js while connecting to Shopify or WooCommerce for the commerce engine. It is ideal for businesses with high traffic, complex product catalogues, or multi-channel selling needs. For most UK SMBs, a standard Shopify or WooCommerce build is more cost-effective. FactoryJet recommends headless architecture only when the performance and flexibility benefits justify the additional investment.",
  },
  {
    cat: "ecommerce",
    q: "How long does it take to build an e-commerce store in the UK?",
    a: "With FactoryJet, a Shopify or WooCommerce store can be designed, built, and launched in 3–6 weeks. This includes custom theme development, product data migration if applicable, UK payment gateway integration, shipping configuration, and launch-ready e-commerce SEO. Most traditional agencies quote 8–16 weeks for the same scope. Our faster turnaround comes from building on a component-based architecture with AI-assisted development, not from cutting corners.",
  },
  {
    cat: "ai-agents",
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot follows pre-defined scripts and decision trees — if the user’s query does not match the script, the chatbot fails. An AI agent uses large language models to understand natural language, interpret context, reason about the best action, and take autonomous steps to achieve a goal. The industry term is agentic AI — named a Gartner Top 10 strategic technology trend, with related inquiries surging 1,445% from Q1 2024 to Q2 2025. AI agents can handle complex, multi-step tasks like qualifying sales leads, processing insurance claims, managing customer returns, and coordinating across multiple business systems. They improve over time, integrate with existing tools, and can manage 60–80% of routine business interactions.",
  },
  {
    cat: "ai-agents",
    q: "How much does it cost to build an AI agent in the UK?",
    a: "Costs vary significantly based on complexity. Simple FAQ chatbots using template platforms cost £0–£2,000 per month. Custom AI agents with natural language understanding, CRM integration, and autonomous decision-making typically cost £5,000–£60,000+ for development. Enterprise-grade multi-agent systems with complex integrations can exceed £100,000. FactoryJet’s custom AI agent development starts from £3,000 for a focused single-function agent, making professional AI accessible to UK SMBs. Most clients see ROI within three to six months through reduced staffing costs, 24/7 availability, and automated handling of routine interactions.",
  },
  {
    cat: "ai-agents",
    q: "What is agentic AI and why is everyone talking about it?",
    a: "Agentic AI refers to AI systems that can independently plan, reason, and take actions to achieve goals — going beyond simple question-and-answer interactions. Gartner named it a Top 10 strategic technology trend for 2026, predicting that 40% of enterprise applications will embed AI agents by year’s end. The global AI agents market hit $7.63 billion in 2025 and is projected to reach $10.91 billion in 2026 — a 43% year-over-year jump. In the UK, 54% of businesses are already using AI but only 28% have fully integrated it. FactoryJet builds agentic AI systems that bridge this gap, using Model Context Protocol and A2A protocol for seamless agent-to-agent communication.",
  },
  {
    cat: "ai-agents",
    q: "Can AI agents integrate with my existing business software?",
    a: "Yes. Modern AI agents connect with virtually any business system through APIs and integration protocols. FactoryJet builds agents that integrate with CRMs (HubSpot, Salesforce, Pipedrive), ERPs (SAP, ERPNext), email platforms (Gmail, Outlook), communication tools (Slack, Microsoft Teams, WhatsApp), e-commerce platforms (Shopify, WooCommerce), and custom databases. We use Model Context Protocol for seamless tool integration, ensuring your AI agent can read, write, and take actions across your entire software stack.",
  },
  {
    cat: "ai-agents",
    q: "Are AI agents GDPR compliant in the UK?",
    a: "All AI agents built by FactoryJet are designed for full GDPR compliance including data processing agreements, explicit consent mechanisms, data minimisation principles, right to erasure implementation, and complete audit trails. For UK financial services firms, legal practices, and healthcare organisations, we implement additional safeguards including role-based access controls and data residency requirements. We can deploy agents on UK-based infrastructure if data sovereignty is a concern.",
  },
  {
    cat: "ai-seo",
    q: "What is generative engine optimisation (GEO) and how is it different from traditional SEO?",
    a: "Generative engine optimisation is the practice of structuring your website content so that AI-powered search tools — Google AI Overviews, ChatGPT, Perplexity AI, Claude, and others — reference and cite your business in their responses. Traditional SEO focuses on ranking in Google’s organic results list. GEO focuses on being the source that AI systems draw from when answering user queries directly. The GEO market is valued at $848 million growing at 50.5% CAGR to a projected $19.8 billion by 2034. AI search traffic converts at 4.4 times the rate of traditional organic. FactoryJet is one of the few traditional agencies offering GEO as a dedicated service.",
  },
  {
    cat: "ai-seo",
    q: "What is answer engine optimisation (AEO)?",
    a: "Answer engine optimisation focuses on winning the direct-answer positions in search results — featured snippets, People Also Ask boxes, knowledge panels, and AI-generated summaries that now appear at the top of 42% of UK Google searches. AEO delivers the fastest results of any SEO discipline, often within 2–8 weeks, because it targets answer positions that already exist in search results rather than competing for traditional organic rankings. It complements traditional SEO and GEO by capturing different types of search intent.",
  },
  {
    cat: "ai-seo",
    q: "Is SEO dead because of AI?",
    a: "No. SEO is evolving, not dying. Google still processes billions of searches daily and organic traffic remains the highest-ROI marketing channel for most businesses. What has changed is that SEO now needs to encompass AI platforms alongside traditional Google rankings. Over 60% of Google searches end without a click, AI search traffic converts 4.4 times higher than traditional organic, and AI Overviews appear in 42% of UK searches. The smartest approach in 2026 is search everywhere optimisation — combining traditional SEO with GEO, AEO, and AIO to ensure your business is visible wherever your customers search.",
  },
  {
    cat: "ai-seo",
    q: "How do I get my UK business mentioned in ChatGPT?",
    a: "Getting mentioned in ChatGPT requires creating authoritative, entity-rich content that large language models recognise as trustworthy. You also need to ensure AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can access your site through proper robots.txt and Cloudflare configuration, implement structured data and schema markup, build brand authority through citations and mentions across authoritative web properties, and structure content in clear question-and-answer formats. ChatGPT currently accounts for 77% of all AI-driven website referral traffic, making it the single most important AI search platform for UK businesses.",
  },
  {
    cat: "ai-seo",
    q: "How much does SEO cost in the UK?",
    a: "UK SEO pricing varies widely. Freelance SEO consultants charge £300–£800 per month. Mid-range agencies charge £1,500–£3,000 per month. Enterprise SEO from large agencies runs £5,000–£15,000+ per month. FactoryJet’s monthly SEO retainer starts from £500 per month for traditional SEO combined with AI SEO (GEO/AEO/AIO). Our AI SEO-only service — covering generative engine optimisation, answer engine optimisation, and AI visibility — starts from £500 per month, a service that almost no other traditional agency offers at any price.",
  },
  {
    cat: "ai-seo",
    q: "What is llms.txt and do I need it?",
    a: "llms.txt is an emerging technical standard that helps AI systems understand your website’s content structure, similar to how robots.txt guides search engine crawlers. It provides large language models with a structured map of your most important content, making it easier for ChatGPT, Claude, Perplexity, and Google AI Overviews to cite your business accurately. While not yet universally adopted, implementing llms.txt is a low-effort, high-potential action that positions your website for AI search visibility. FactoryJet includes llms.txt implementation as part of our AI SEO service.",
  },
  {
    cat: "ai-seo",
    q: "What is share of AI voice and how do I measure it?",
    a: "Share of AI voice measures how frequently AI systems like ChatGPT, Claude, Perplexity, and Google AI Overviews reference and recommend your brand compared to competitors. It is the AI equivalent of share of voice in traditional marketing. FactoryJet tracks share of AI voice by systematically querying AI platforms with your target keywords and measuring how often your brand appears versus competitors. This gives you visibility into a channel that most UK businesses are completely blind to — and one that is growing at 527% year-over-year in referral traffic.",
  },
  {
    cat: "general",
    q: "How does FactoryJet deliver faster than a traditional agency?",
    a: "Three reasons — none of which mean cutting corners. First, our AI-augmented workflow removes the busywork that slows traditional agencies down: we use AI across design generation, code review, testing, and QA, so senior engineers spend their time on the work that actually matters. Second, we build on a component-based architecture, assembling high-quality sites in days instead of rebuilding from scratch every time. Third, our fixed-price, milestone-paid model means no account-manager layers or hourly billing inflating your invoice. The result: 7-day delivery, transparent fixed pricing, and every site scoring 90+ on Google Lighthouse — the same quality benchmark as agencies that take months and charge far more.",
  },
  {
    cat: "general",
    q: "Do you work with businesses outside major UK cities?",
    a: "Absolutely. While our city-specific pages focus on major cities — Leeds, Manchester, Birmingham, Sheffield, Bristol, Edinburgh, Liverpool, Glasgow, Newcastle, and Nottingham — we work with businesses across the entire United Kingdom. Whether you are in a market town, a suburban business park, or a rural area, our remote-first model means you get the same quality of service, the same AI-native capabilities, and the same competitive pricing. Our clients span every region of England, Scotland, Wales, and Northern Ireland.",
  },
  {
    cat: "general",
    q: "What industries does FactoryJet serve in the UK?",
    a: "We serve businesses across every major UK industry including financial services and FinTech, legal and professional services, fashion and retail, healthcare and health-tech, manufacturing, hospitality and tourism, education, technology and SaaS, construction and property, food and beverage, and creative industries. Our work spans B2B and B2C businesses, from solo founders and startups to companies with hundreds of employees. Each industry has specific digital requirements and we tailor our approach accordingly.",
  },
  {
    cat: "general",
    q: "How do I get started with FactoryJet?",
    a: "Start with a free digital audit. We analyse your current website, search visibility across Google and AI platforms, competitor positioning, and growth opportunities. The audit takes 48 hours to complete and includes specific, actionable recommendations. From there, we provide a custom proposal with transparent pricing, clear deliverables, and a realistic timeline. No obligation, no high-pressure sales. Contact us via WhatsApp at +91 96999 77699 or email connect@factoryjet.com to begin.",
  },
];

// Stable id derived from question text — used as the React key AND the
// accordion open-state key, so the open state survives filter changes.
const idFor = (q: string) =>
  q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

// ── Icon (inline "lucide"-style plus) ────────────────────────────────────────
function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        flex: "none",
        transform: open ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 300ms ease",
        color: open ? "#F05A28" : "#6b7280",
      }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<CategoryId>("all");

  // First FAQ open by default. Stored as a Set of stable IDs so multiple items
  // can be open at once, survives filter switches.
  const [openSet, setOpenSet] = useState<Set<string>>(
    () => new Set([idFor(FAQS[0].q)])
  );

  const toggle = (id: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visible =
    active === "all" ? FAQS : FAQS.filter((f) => f.cat === active);

  // Header stagger-in on scroll
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const headerEls = headerRef.current?.querySelectorAll<HTMLElement>(
        "[data-faq-head]"
      );
      if (headerEls && headerEls.length) {
        gsap.fromTo(
          headerEls,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards = listRef.current?.querySelectorAll<HTMLElement>(
        "[data-faq-card]"
      );
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 15, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) {
            t.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  // Re-stagger on filter change so the newly-visible cards feel intentional.
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const cards = listRef.current?.querySelectorAll<HTMLElement>(
        "[data-faq-card]"
      );
      if (!cards || !cards.length) return;

      gsap.fromTo(
        cards,
        { y: 10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.025,
        }
      );
    },
    { dependencies: [active], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-label="Frequently asked questions"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <style>{`
        .fj-cat-pills::-webkit-scrollbar { display: none; }
        .fj-cat-pills { -ms-overflow-style: none; scrollbar-width: none; }

        /* Accordion: CSS-only transition. Answer is ALWAYS in the DOM — we
           just collapse max-height and fade opacity. This is crucial for
           AI crawlers that read HTML source, not computed styles. */
        [data-acc-panel] {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 300ms ease, opacity 300ms ease;
        }
        [data-acc-panel][data-open="true"] {
          max-height: 1200px;
          opacity: 1;
          overflow: visible;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-acc-panel] { transition: none; }
        }
      `}</style>

      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">
          {/* ── LEFT SIDEBAR ─────────────────────────────────────────── */}
          <aside className="relative">
            <div ref={headerRef} className="lg:sticky lg:top-[120px]">
              <p
                data-faq-head
                style={{
                  color: "#F05A28",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Frequently Asked Questions
              </p>

              <h2
                data-faq-head
                className="font-clash mt-4"
                style={{
                  color: "#0F172A",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything UK Businesses Ask Us
              </h2>

              <p
                data-faq-head
                style={{
                  color: "#6b7280",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 8,
                }}
              >
                28 answers. Zero jargon.
              </p>

              {/* Desktop — vertical category list */}
              <nav
                aria-label="Filter FAQs by category"
                className="mt-8 hidden lg:block"
                data-faq-head
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {CATEGORIES.map((cat) => {
                    const isActive = active === cat.id;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => setActive(cat.id)}
                          aria-pressed={isActive}
                          className="flex w-full items-center justify-between text-left"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontWeight: isActive ? 600 : 500,
                            fontSize: 14,
                            color: isActive ? "#F05A28" : "#6b7280",
                            backgroundColor: isActive ? "#F0F7FF" : "transparent",
                            borderLeft: isActive
                              ? "3px solid #F05A28"
                              : "3px solid transparent",
                            borderBottom: "1px solid #E2E8F0",
                            paddingTop: 12,
                            paddingBottom: 12,
                            paddingLeft: isActive ? 16 : 19,
                            paddingRight: 14,
                            transition:
                              "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, font-weight 0.2s ease",
                          }}
                        >
                          <span>{cat.label}</span>
                          {cat.count != null && (
                            <span
                              style={{
                                color: isActive ? "#F05A28" : "#9CA3AF",
                                fontSize: 12,
                                fontWeight: 500,
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {cat.count}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile — horizontal pill scroller */}
              <div
                className="fj-cat-pills mt-6 flex gap-2 overflow-x-auto lg:hidden"
                role="group"
                aria-label="Filter FAQs by category"
                style={{ paddingBottom: 4 }}
              >
                {CATEGORIES.map((cat) => {
                  const isActive = active === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActive(cat.id)}
                      aria-pressed={isActive}
                      className="whitespace-nowrap rounded-full"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 500,
                        fontSize: 13,
                        padding: "10px 16px",
                        minHeight: 44,
                        color: isActive ? "#FFFFFF" : "#374151",
                        backgroundColor: isActive ? "#F05A28" : "#F1F5F9",
                        border: isActive
                          ? "1px solid #F05A28"
                          : "1px solid #E2E8F0",
                      }}
                    >
                      {cat.label}
                      {cat.count != null && (
                        <span
                          style={{
                            marginLeft: 8,
                            opacity: isActive ? 0.8 : 0.6,
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {cat.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ── RIGHT — ACCORDION LIST ───────────────────────────────── */}
          <div ref={listRef}>
            {visible.map((item) => {
              const id = idFor(item.q);
              const isOpen = openSet.has(id);
              return (
                <article
                  // Key is the stable ID only — no filter prefix — so the same
                  // DOM nodes are reused across filter changes and the native
                  // CSS accordion state doesn't flash.
                  key={id}
                  data-faq-card
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${id}`}
                    className="flex w-full items-center justify-between text-left"
                    style={{
                      cursor: "pointer",
                      paddingTop: 20,
                      paddingBottom: 20,
                      minHeight: 48,
                      borderBottom: "1px solid #E2E8F0",
                      gap: 24,
                      background: "transparent",
                    }}
                  >
                    <h3
                      itemProp="name"
                      style={{
                        color: "#0F172A",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "clamp(15px, 1.1vw, 17px)",
                        lineHeight: 1.45,
                        letterSpacing: "-0.005em",
                        margin: 0,
                      }}
                    >
                      {item.q}
                    </h3>
                    <PlusIcon open={isOpen} />
                  </button>

                  {/* Answer — ALWAYS in the DOM. Collapsed via max-height/opacity. */}
                  <div
                    id={`faq-panel-${id}`}
                    data-acc-panel
                    data-open={isOpen ? "true" : "false"}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <p
                      itemProp="text"
                      style={{
                        color: "#374151",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 1.05vw, 15px)",
                        lineHeight: 1.75,
                        paddingTop: 8,
                        paddingBottom: 20,
                        paddingRight: 44,
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
