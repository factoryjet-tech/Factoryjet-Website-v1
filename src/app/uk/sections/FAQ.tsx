"use client";

// Stripe-style sidebar + CSS-only accordion FAQ.
//
// SEO rule: every answer is always present in the DOM. The collapsed state
// uses max-height/opacity transitions, NOT display:none or conditional
// rendering. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) read the HTML
// source and therefore see every answer regardless of visual state.
//
// The category filter DOES use conditional rendering, but the default active
// filter is "all", so the initial server-rendered HTML contains every Q&A.

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Types & data ───────────────────────────────────────────────────
// The Q&A content lives in ../faqData so this component and the FAQPage
// JSON-LD in ../schema.ts render from the exact same array. Counts below are
// derived from that array, never typed by hand.
import {
  UK_FAQS,
  UK_FAQ_CATEGORY_LABELS,
  ukFaqCount,
  type UkFaq,
  type UkFaqCategoryId,
} from "../faqData";

type CategoryId = "all" | UkFaqCategoryId;

type Category = { id: CategoryId; label: string; count: number | null };

const FAQS: UkFaq[] = UK_FAQS;

const TOTAL = FAQS.length;

const CATEGORIES: Category[] = [
  { id: "all", label: "All Questions", count: TOTAL },
  ...UK_FAQ_CATEGORY_LABELS.map((c) => ({
    id: c.id as CategoryId,
    label: c.label,
    count: ukFaqCount(c.id),
  })),
];

// Stable id derived from question text, used as the React key AND the
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

        /* Accordion: CSS-only transition. Answer is ALWAYS in the DOM, we
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
                  color: "#B23E13",
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
                {TOTAL} answers. Zero jargon.
              </p>

              {/* Desktop, vertical category list */}
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
                            color: isActive ? "#B23E13" : "#6b7280",
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
                                color: isActive ? "#B23E13" : "#9CA3AF",
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

              {/* Mobile, horizontal pill scroller */}
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
                        backgroundColor: isActive ? "#B23E13" : "#F1F5F9",
                        border: isActive
                          ? "1px solid #B23E13"
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

          {/* ── RIGHT, ACCORDION LIST ───────────────────────────────── */}
          <div ref={listRef}>
            {visible.map((item) => {
              const id = idFor(item.q);
              const isOpen = openSet.has(id);
              return (
                <article
                  // Key is the stable ID only, no filter prefix, so the same
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

                  {/* Answer, ALWAYS in the DOM. Collapsed via max-height/opacity. */}
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
