"use client";

// Liverpool FAQ — all 12 answers statically expanded at all times.
// No accordion toggle, no useState for open/close.
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot) see every answer in HTML source.
// Category filter only hides cards visually via conditional render; default is "all"
// so the initial server HTML contains all 12 Q&As.

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Types & data ─────────────────────────────────────────────────────────────
type CategoryId = "all" | "web-design" | "ecommerce" | "ai-agents" | "ai-seo";

type Category = { id: CategoryId; label: string; count: number | null };

const CATEGORIES: Category[] = [
  { id: "all",       label: "All Questions",        count: 12 },
  { id: "web-design",label: "Web Design",           count: 5  },
  { id: "ecommerce", label: "E-Commerce",           count: 1  },
  { id: "ai-agents", label: "AI Agents & Automation", count: 3 },
  { id: "ai-seo",    label: "AI SEO",               count: 3  },
];

type Faq = {
  cat: Exclude<CategoryId, "all">;
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    cat: "web-design",
    q: "How much does web design cost in Liverpool?",
    a: "Web design in Liverpool typically costs £3,500–£8,000 for a brochure website with an established local agency. E-commerce projects range from £6,000–£20,000 depending on complexity. FactoryJet builds comparable-quality sites at 50–60% below those rates — typically £1,500–£3,200 for brochure sites and £2,800–£9,000 for e-commerce — because we operate AI-natively without Liverpool office overhead.",
  },
  {
    cat: "web-design",
    q: "What is the best web design agency in Liverpool?",
    a: "Liverpool has several strong web agencies: Pixus (15+ years, Shopify Partner), Webrevolve (1,000+ projects), and Velstar (Shopify Platinum Partner) are the most established. For AI-native web design, AI SEO, and AI agent development, FactoryJet is currently the only Liverpool-focused agency operating at this capability level, at prices 50–60% below local rates.",
  },
  {
    cat: "ai-agents",
    q: "Is there an AI web design agency in Liverpool?",
    a: "As of 2026, there is no dominant AI-native web design agency with a Liverpool focus. FactoryJet is purpose-built for this positioning — we use AI throughout our design, build, and SEO workflow, and we're the only agency actively targeting AI web design Liverpool, AI SEO Liverpool, and AI agent development Liverpool as primary service areas.",
  },
  {
    cat: "ai-seo",
    q: "What is AI SEO and why does it matter for Liverpool businesses?",
    a: "AI SEO (also called Generative Engine Optimisation or GEO) is the practice of optimising your content to appear in AI-powered search answers — inside ChatGPT, Perplexity, Claude, and Google's AI Overviews. With the GEO market growing at 50.5% CAGR toward £19.8bn by 2034, Liverpool businesses that build AI visibility now will compound that advantage against competitors who are still focused on traditional blue-link SEO.",
  },
  {
    cat: "ai-agents",
    q: "Can FactoryJet build AI agents for Liverpool logistics or port businesses?",
    a: "Yes. We specialise in AI agent development for logistics, supply chain, and port operations. For Liverpool businesses connected to Peel Ports, JLR Halewood, or NHS supply chains, we build custom agentic AI workflows — including document processing, route optimisation, supplier communication automation, and multi-agent systems that integrate with your existing TMS and ERP infrastructure.",
  },
  {
    cat: "ecommerce",
    q: "Does FactoryJet build Shopify Plus stores for Liverpool businesses?",
    a: "Yes. We build Shopify Plus stores at 50–60% below the Liverpool market rate. Velstar is Liverpool's best-known Shopify Platinum Partner and an excellent agency — their pricing reflects their premium positioning. FactoryJet delivers equivalent technical capability — headless Shopify, custom checkout, Shopify Flow automation, third-party integrations — at a significantly lower price point for Liverpool brands.",
  },
  {
    cat: "web-design",
    q: "How long does a website project take with FactoryJet?",
    a: "A standard brochure website takes 3–4 weeks from briefing to launch. An e-commerce store takes 6–10 weeks depending on product catalogue size and custom functionality. AI agent projects typically run 8–14 weeks for the first production-ready deployment. All timelines are agreed upfront and tracked in writing — no surprise delays.",
  },
  {
    cat: "web-design",
    q: "Do you serve businesses in the Baltic Triangle or Liverpool Knowledge Quarter?",
    a: "Absolutely. The Baltic Triangle is one of Liverpool's most digitally active districts — home to creative studios, tech startups, and digital agencies. The Knowledge Quarter houses the city's life sciences, university, and research institutions. We serve both clusters with tailored web design, AI SEO, and AI agent builds. Remote-first working means Liverpool location is irrelevant to delivery quality.",
  },
  {
    cat: "ai-seo",
    q: "What makes FactoryJet different from Quirky Digital or Six Digital?",
    a: "Quirky Digital and Six Digital are solid traditional SEO agencies — well-reviewed, experienced, and effective at Google rankings. The difference is AI SEO. Neither currently offers generative engine optimisation (GEO), answer engine optimisation (AEO), or AI-native content architecture. FactoryJet's AI SEO clients rank in both Google's traditional results and AI-powered answers. For Liverpool businesses targeting the next five years, that compound visibility is the critical differentiator.",
  },
  {
    cat: "web-design",
    q: "Does FactoryJet work with Liverpool hospitality, tourism, or events businesses?",
    a: "Yes. Liverpool's hospitality and events sector is substantial — from Albert Dock restaurants and Baltic Triangle bars to major venues around the new Everton stadium at Bramley-Moore Dock. We build hospitality websites with online booking integration, AI chatbots for reservation queries, and AI SEO strategies targeting Liverpool tourism keywords. The stadium opening in August 2025 represents a significant commercial footfall opportunity for businesses that rank for related search terms.",
  },
  {
    cat: "ai-seo",
    q: "Can you help Liverpool businesses get found in ChatGPT and Perplexity searches?",
    a: "Yes — that's our AI SEO service. We structure your website content, schema markup, and entity architecture so that AI models cite your business when users ask relevant questions. For example, if a user asks Perplexity 'best AI agency Liverpool' or ChatGPT 'Shopify developer Liverpool,' FactoryJet clients are architectured to appear in those answers. This requires a fundamentally different content strategy than traditional SEO — and currently no other Liverpool agency offers it.",
  },
  {
    cat: "ai-agents",
    q: "What is the LCR Freeport and how does it affect digital investment in Liverpool?",
    a: "The Liverpool City Region Freeport offers tax incentives, streamlined customs, and enhanced capital allowances for businesses operating within its zone. This is accelerating investment in Merseyside — particularly in manufacturing, logistics, and supply chain infrastructure. Companies benefiting from Freeport investment typically need digital infrastructure upgrades simultaneously: updated websites, ERP integrations, supplier portals, and AI agent workflows. FactoryJet serves this intersection of physical and digital investment.",
  },
];

// ── Section ──────────────────────────────────────────────────────────────────
export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<CategoryId>("all");

  const visible =
    active === "all" ? FAQS : FAQS.filter((f) => f.cat === active);

  // Header stagger-in on scroll
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const headerEls =
        headerRef.current?.querySelectorAll<HTMLElement>("[data-faq-head]");
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

      const cards =
        listRef.current?.querySelectorAll<HTMLElement>("[data-faq-card]");
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

  // Re-stagger on filter change
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const cards =
        listRef.current?.querySelectorAll<HTMLElement>("[data-faq-card]");
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
      aria-label="Frequently asked questions — Liverpool web design"
      className="relative w-full"
      style={{ backgroundColor: "#0A0F1C", maxWidth: "100vw" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <style>{`
        .liv-cat-pills::-webkit-scrollbar { display: none; }
        .liv-cat-pills { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">
          {/* LEFT SIDEBAR */}
          <aside className="relative">
            <div ref={headerRef} className="lg:sticky lg:top-[120px]">
              <p
                data-faq-head
                style={{
                  color: "#FF6B35",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Liverpool Web Design FAQ
              </p>

              <h2
                data-faq-head
                className="font-clash mt-4"
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything Liverpool Businesses Ask Us
              </h2>

              <p
                data-faq-head
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 8,
                }}
              >
                12 answers. Zero jargon.
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
                            color: isActive ? "#93C5FD" : "rgba(255,255,255,0.55)",
                            backgroundColor: isActive
                              ? "rgba(147,197,253,0.08)"
                              : "transparent",
                            borderLeft: isActive
                              ? "3px solid #93C5FD"
                              : "3px solid rgba(255,255,255,0.1)",
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            paddingTop: 12,
                            paddingBottom: 12,
                            paddingLeft: isActive ? 16 : 19,
                            paddingRight: 14,
                            transition:
                              "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                          }}
                        >
                          <span>{cat.label}</span>
                          {cat.count != null && (
                            <span
                              style={{
                                color: isActive
                                  ? "#93C5FD"
                                  : "rgba(255,255,255,0.3)",
                                fontSize: 12,
                                fontWeight: 500,
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
                className="liv-cat-pills mt-6 flex gap-2 overflow-x-auto lg:hidden"
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
                        color: isActive ? "#0A0F1C" : "rgba(255,255,255,0.7)",
                        backgroundColor: isActive
                          ? "#93C5FD"
                          : "rgba(255,255,255,0.06)",
                        border: isActive
                          ? "1px solid #93C5FD"
                          : "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {cat.label}
                      {cat.count != null && (
                        <span
                          style={{
                            marginLeft: 8,
                            opacity: isActive ? 0.8 : 0.5,
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

          {/* RIGHT — STATIC EXPANDED CARDS */}
          <div ref={listRef} className="flex flex-col gap-4">
            {visible.map((item, i) => {
              const globalIndex = FAQS.indexOf(item);
              return (
                <div
                  key={item.q}
                  data-faq-card
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="group relative"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    padding: "28px 28px 28px 24px",
                  }}
                >
                  {/* Number badge */}
                  <div className="flex items-start gap-5">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm"
                      style={{
                        width: 40,
                        height: 40,
                        minWidth: 40,
                        backgroundColor: "rgba(147,197,253,0.12)",
                        border: "1px solid rgba(147,197,253,0.3)",
                        color: "#93C5FD",
                        fontFamily: "var(--font-sans)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3
                        itemProp="name"
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                          fontSize: "clamp(15px, 1.1vw, 17px)",
                          lineHeight: 1.4,
                          letterSpacing: "-0.005em",
                          margin: 0,
                        }}
                      >
                        {item.q}
                      </h3>

                      {/* Answer — always visible, never hidden */}
                      <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          itemProp="text"
                          style={{
                            color: "rgba(255,255,255,0.65)",
                            fontFamily: "var(--font-sans)",
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.05vw, 15px)",
                            lineHeight: 1.75,
                            marginTop: 12,
                            marginBottom: 0,
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
