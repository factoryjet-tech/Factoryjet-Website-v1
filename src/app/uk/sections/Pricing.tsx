"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// ── Pricing scope data (numberless — what's included / how we scope) ──────────
type Row = {
  service: string;
  included: string;
  drivers: string;
};

const ROWS: Row[] = [
  {
    service: "Business Website (Next.js 15)",
    included: "Design, build, copy support, on-page SEO, launch & training",
    drivers: "Page count, custom design depth, integrations",
  },
  {
    service: "E-Commerce Store (Shopify/WC)",
    included: "Store build, payment & shipping setup, product config, e-commerce SEO",
    drivers: "Catalogue size, theme customisation, integrations",
  },
  {
    service: "Custom AI Agent",
    included: "Scoping, build, CRM/tool integration, testing, handover docs",
    drivers: "Number of integrations, autonomy, workflow complexity",
  },
  {
    service: "Monthly SEO + AI SEO",
    included: "Technical SEO, content, authority building, AI-citation reporting",
    drivers: "Competition, target keywords, content volume",
  },
  {
    service: "AI SEO Only (GEO/AEO/AIO)",
    included: "Answer-first content, schema, llms.txt, share-of-AI-voice tracking",
    drivers: "Number of target engines and queries, content scope",
  },
  {
    service: "Website Maintenance",
    included: "Updates, backups, security, performance & uptime monitoring",
    drivers: "Support hours, response SLA, site complexity",
  },
];

// ── Section ──────────────────────────────────────────────────────────────────
export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal('uk', 'default');

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
              color: "#B23E13",
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
            Every project is fixed-price and scoped to your build. There are no
            hourly rates and no surprise invoices. The table below shows what is
            included in each service and the main factors that shape the scope,
            so you know exactly what you are paying for. We quote the full,
            written price up front after a free discovery call — before any work
            starts.
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
                className="grid grid-cols-[1.3fr_1.6fr_1.4fr]"
                style={{
                  backgroundColor: "#0A0F1C",
                  color: "#FFFFFF",
                }}
              >
                {["Service", "What's Included", "What Shapes the Scope"].map(
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
                        color: i === 0 ? "#FFFFFF" : "rgba(255,255,255,0.78)",
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
                    className="grid grid-cols-[1.3fr_1.6fr_1.4fr] items-center"
                    style={{
                      backgroundColor: zebra,
                      borderTop: "1px solid #E2E8F0",
                    }}
                  >
                    {/* Service — highlighted column */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#0A0F1C",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: 15.5,
                        lineHeight: 1.4,
                        backgroundColor: "rgba(0,82,204,0.04)",
                        borderLeft: "3px solid #F05A28",
                      }}
                    >
                      {row.service}
                    </div>
                    {/* What's included */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#374151",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.5,
                        borderLeft: "1px solid #E2E8F0",
                      }}
                    >
                      {row.included}
                    </div>
                    {/* Scope drivers */}
                    <div
                      className="px-6 py-6"
                      style={{
                        color: "#6b7280",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.5,
                        borderLeft: "1px solid #E2E8F0",
                      }}
                    >
                      {row.drivers}
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
            Quotes include VAT where applicable. Web design, e-commerce
            development, AI agents, and digital marketing services are all
            legitimate business expenses that can be deducted from your UK
            taxable profits, reducing the effective cost by 19–25% depending
            on whether you pay corporation tax (limited company) or income tax
            (sole trader). Every engagement starts with a free digital audit
            and a custom written proposal. No obligation. No high-pressure sales.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              trackCTAClick('get_your_free_digital_audit', 'pricing', 'primary');
              trackButtonClick('get_your_free_digital_audit', 'pricing');
              openModal();
            }}
            className="inline-flex items-center justify-center"
            style={{
              backgroundColor: "#B23E13",
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
              e.currentTarget.style.borderColor = "#F05A28";
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
            WhatsApp: 969 997 7699
          </a>
        </div>
      </div>
    </section>
  );
}
