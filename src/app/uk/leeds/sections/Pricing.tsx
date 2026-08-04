"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";


const PRICING_ROWS = [
  {
    service: "Business Website (Next.js 15)",
    included: "Custom design, build, on-page SEO, launch & training",
  },
  {
    service: "E-Commerce Store (Shopify/WooCommerce)",
    included: "Store build, payments, shipping, product config, SEO",
  },
  {
    service: "Monthly SEO Retainer",
    included: "Technical SEO, content, authority building, reporting",
  },
  {
    service: "AI Agent Development",
    included: "Scoping, build, tool integration, testing, handover docs",
  },
  {
    service: "AI SEO (GEO / AEO / AIO)",
    included: "Answer-first content, schema, per-engine citation tracking",
  },
  {
    service: "Annual Website Maintenance",
    included: "Updates, backups, security, performance monitoring",
  },
  {
    service: "Pay Monthly Website",
    included: "Spread the cost of your build over flexible monthly payments",
  },
];

const INCLUDES = [
  "Next.js 15 build",
  "Lighthouse 90+ guaranteed",
  "Full schema stack",
  "90-day post-launch support",
  "Mobile-first responsive",
  "GSAP animations",
  "Core Web Vitals",
  "Google Search Console setup",
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal('uk', 'default');

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.from(headerRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      if (tableRef.current) {
        gsap.from(tableRef.current.querySelectorAll("tr"), {
          y: 10,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      gsap.from(footerRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{ background: "#F8FAFC", padding: "128px 0 32px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef}>
          <p
            className="font-semibold uppercase"
            style={{
              color: "#B23E13",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Transparent Pricing
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "750px",
              marginBottom: "16px",
            }}
          >
            How Much Does Web Design, E-Commerce &amp; AI Development Cost in Leeds?
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.7,
              maxWidth: "65ch",
              marginBottom: "48px",
            }}
          >
            Every project is fixed-price and scoped to your build. The main
            drivers are page count, design depth, integrations, and catalogue
            size for stores. Here is what each service includes. We quote the
            full written price up front after a free discovery call, so you know
            the complete cost before any work starts.
          </p>
        </div>

        {/* ── Pricing table ─────────────────────────────────────────────── */}
        <div
          className="overflow-x-auto rounded-xl"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <table
            className="w-full"
            style={{ borderCollapse: "collapse", minWidth: "560px" }}
          >
            <thead>
              <tr>
                {/* Service, highlighted */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#B23E13",
                    padding: "14px 20px",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "white",
                    fontWeight: 700,
                    width: "38%",
                    borderBottom: "1px solid #0047b3",
                  }}
                >
                  Service
                </th>
                {/* What's Included */}
                <th
                  className="text-left uppercase"
                  style={{
                    background: "#F8FAFC",
                    padding: "14px 20px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    color: "#4B5563",
                    fontWeight: 600,
                    width: "62%",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  What&rsquo;s Included
                </th>
              </tr>
            </thead>

            <tbody ref={tableRef}>
              {PRICING_ROWS.map(({ service, included }, i) => (
                <tr
                  key={service}
                  style={{ background: i % 2 === 0 ? "white" : "#FAFBFC" }}
                >
                  {/* Service, highlighted */}
                  <td
                    style={{
                      padding: "14px 20px",
                      borderBottom: "1px solid #dbeafe",
                      background: i % 2 === 0 ? "#F5F8FF" : "#EEF4FF",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#B23E13",
                        fontWeight: 600,
                      }}
                    >
                      {service}
                    </span>
                  </td>
                  {/* What's Included */}
                  <td
                    style={{
                      padding: "14px 20px",
                      fontSize: "14px",
                      color: "#374151",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {included}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Footer: includes box + CTA ───────────────────────────────── */}
        <div ref={footerRef}>

          {/* What's included */}
          <div
            className="rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "24px",
              marginTop: "32px",
              marginBottom: "40px",
            }}
          >
            <p
              className="font-semibold uppercase"
              style={{
                color: "#B23E13",
                fontSize: "12px",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              Every Project Includes
            </p>

            <div className="flex flex-wrap" style={{ gap: "12px 24px" }}>
              {INCLUDES.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2"
                  style={{ fontSize: "14px", color: "#374151" }}
                >
                  <CheckCircle2
                    size={15}
                    style={{ color: "#10B981", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>

            <p
              className="font-medium"
              style={{
                fontSize: "13px",
                color: "#6B7280",
                marginTop: "16px",
              }}
            >
              No hidden fees. No &ldquo;Phase 2&rdquo; upsells. No monthly
              hosting lock-in.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                trackCTAClick('get_your_free_quote', 'leeds_pricing', 'primary');
                trackButtonClick('get_your_free_quote', 'leeds_pricing');
                openModal();
              }}
              className="px-8 py-4 rounded-lg text-white font-semibold text-center transition-all duration-200 hover:brightness-110"
              style={{ background: "#B23E13", fontSize: "15px" }}
            >
              Get Your Free Quote →
            </button>
            <a
              href="https://wa.me/919699977699"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200"
              style={{
                border: "1px solid #E5E7EB",
                color: "#374151",
                fontSize: "15px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F05A28";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F05A28";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
              }}
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
