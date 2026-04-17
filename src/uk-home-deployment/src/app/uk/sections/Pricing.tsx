"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Pricing table data (verbatim from content.md) ────────────────────────────
type SavingTone = "green" | "orange";

type Row = {
  service: string;
  ukAverage: string;
  factoryjet: string;
  saving: string;
  tone: SavingTone;
};

const ROWS: Row[] = [
  {
    service: "Business Website (Next.js 15)",
    ukAverage: "£5,000–£12,000",
    factoryjet: "£1,500–£8,000",
    saving: "50–70%",
    tone: "green",
  },
  {
    service: "E-Commerce Store (Shopify/WC)",
    ukAverage: "£10,000–£25,000",
    factoryjet: "£2,000–£10,000",
    saving: "50–80%",
    tone: "green",
  },
  {
    service: "Custom AI Agent",
    ukAverage: "Rarely available in UK",
    factoryjet: "From £3,000",
    saving: "Exclusive",
    tone: "orange",
  },
  {
    service: "Monthly SEO + AI SEO",
    ukAverage: "£1,500–£3,000/mo",
    factoryjet: "£500–£2,000/mo",
    saving: "30–65%",
    tone: "green",
  },
  {
    service: "AI SEO Only (GEO/AEO/AIO)",
    ukAverage: "Almost never offered",
    factoryjet: "From £500/mo",
    saving: "First-mover",
    tone: "orange",
  },
  {
    service: "Website Maintenance",
    ukAverage: "£200–£500/mo",
    factoryjet: "From £99/mo",
    saving: "50–80%",
    tone: "green",
  },
];

// ── Saving pill ──────────────────────────────────────────────────────────────
function SavingPill({ label, tone }: { label: string; tone: SavingTone }) {
  const styles =
    tone === "green"
      ? {
          backgroundColor: "rgba(16,185,129,0.1)",
          color: "#047857",
          border: "1px solid rgba(16,185,129,0.28)",
        }
      : {
          backgroundColor: "rgba(255,107,53,0.1)",
          color: "#C2410C",
          border: "1px solid rgba(255,107,53,0.32)",
        };

  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-1"
      style={{
        ...styles,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12.5,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const rows = tableRef.current?.querySelectorAll<HTMLElement>(
        "[data-pricing-row]"
      );
      if (!rows || !rows.length) return;

      gsap.fromTo(
        rows,
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

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

  return (
    <section
      ref={sectionRef}
      id="pricing"
      aria-label="UK pricing"
      className="relative w-full"
      style={{ backgroundColor: "#F8FAFC", maxWidth: "100vw" }}
    >
      {/* Mobile edge-fade hint for horizontal scroll */}
      <style>{`
        @media (max-width: 767px) {
          .fj-price-scroll {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
          }
          .fj-price-scroll::after {
            content: "";
            position: sticky;
            top: 0;
            right: 0;
            display: block;
            width: 48px;
            height: 100%;
            pointer-events: none;
          }
          .fj-price-fade {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 56px;
            pointer-events: none;
            background: linear-gradient(270deg, #F8FAFC 0%, rgba(248,250,252,0) 100%);
          }
        }
        @media (min-width: 768px) {
          .fj-price-fade { display: none; }
        }
      `}</style>

      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Heading block */}
        <div className="flex flex-col items-center text-center">
          <p
            style={{
              color: "#0052CC",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            UK Pricing
          </p>

          <h2
            className="font-clash mt-5"
            style={{
              color: "#0A0F1C",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            How Much Do FactoryJet’s Services Cost in the United Kingdom?
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />

          <p
            className="mt-8"
            style={{
              color: "#374151",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.1vw, 17px)",
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            Pricing transparency is a core principle. One of the most common
            searches we see is how much does a website cost UK — and the honest
            answer is that most UK businesses are overpaying dramatically. Here
            is how FactoryJet’s pricing compares to the UK agency market across
            all four of our services.
          </p>
        </div>

        {/* Premium table */}
        <div className="relative mt-14">
          <div className="fj-price-scroll relative">
            <div
              ref={tableRef}
              className="relative overflow-hidden"
              style={{
                minWidth: 760,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(15,23,42,0.06)",
              }}
            >
              {/* Header row */}
              <div
                className="grid grid-cols-[1.5fr_1fr_1fr_0.9fr]"
                style={{
                  backgroundColor: "#0A0F1C",
                  color: "#FFFFFF",
                }}
              >
                {["Service", "UK Agency Average", "FactoryJet Price", "Your Saving"].map(
                  (h, i) => (
                    <div
                      key={h}
                      className="px-6 py-5"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: 12.5,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: i === 2 ? "#FFFFFF" : "rgba(255,255,255,0.78)",
                        borderLeft:
                          i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {h}
                    </div>
                  )
                )}
              </div>

              {/* Body rows */}
              {ROWS.map((row, idx) => {
                const zebra = idx % 2 === 0 ? "#FFFFFF" : "#F8FAFC";
                return (
                  <div
                    key={row.service}
                    data-pricing-row
                    className="grid grid-cols-[1.5fr_1fr_1fr_0.9fr] items-center"
                    style={{
                      backgroundColor: zebra,
                      borderTop: "1px solid #E2E8F0",
                    }}
                  >
                    {/* Service */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#0A0F1C",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: 15.5,
                        lineHeight: 1.45,
                      }}
                    >
                      {row.service}
                    </div>
                    {/* UK average */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#6b7280",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.45,
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(107,114,128,0.4)",
                      }}
                    >
                      {row.ukAverage}
                    </div>
                    {/* FactoryJet — highlighted column */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#0052CC",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: 16,
                        lineHeight: 1.4,
                        backgroundColor: "rgba(0,82,204,0.04)",
                        borderLeft: "3px solid #0052CC",
                        borderRight: "1px solid #E2E8F0",
                      }}
                    >
                      {row.factoryjet}
                    </div>
                    {/* Saving pill */}
                    <div className="px-6 py-6">
                      <SavingPill label={row.saving} tone={row.tone} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div aria-hidden="true" className="fj-price-fade" />
        </div>

        {/* Tax / assurance paragraph */}
        <div className="mx-auto mt-12 text-center" style={{ maxWidth: 820 }}>
          <p
            style={{
              color: "#374151",
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(14px, 1vw, 16px)",
              lineHeight: 1.8,
            }}
          >
            All pricing includes VAT where applicable. Web design, e-commerce
            development, AI agents, and digital marketing services are all
            legitimate business expenses that can be deducted from your UK
            taxable profits — reducing the effective cost by 19–25% depending
            on whether you pay corporation tax (limited company) or income tax
            (sole trader). Every engagement starts with a free digital audit
            and custom proposal. No obligation. No high-pressure sales.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            data-uk-open-lead-form
            className="inline-flex items-center justify-center"
            style={{
              backgroundColor: "#0052CC",
              color: "#FFFFFF",
              padding: "16px 28px",
              borderRadius: 8,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.01em",
              boxShadow: "0 4px 12px rgba(0,82,204,0.25)",
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
              border: "none",
              cursor: "pointer",
              minHeight: 48,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,82,204,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,82,204,0.25)";
            }}
          >
            Get Your Free Digital Audit
          </button>
          <a
            href="https://wa.me/919699977699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#0A0F1C",
              padding: "15px 26px",
              borderRadius: 8,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 15,
              border: "1px solid #E2E8F0",
              transition: "border-color 0.2s ease-out, transform 0.2s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0052CC";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#10B981"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp: +44 (0) 9699 977 699
          </a>
        </div>
      </div>
    </section>
  );
}
