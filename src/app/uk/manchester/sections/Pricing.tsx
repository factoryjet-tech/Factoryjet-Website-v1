import { CheckCircle2 } from "lucide-react";
import UkAuditButton from "@/app/uk/sections/UkAuditButton";

const PRICING_ROWS = [
  {
    service: "Custom Website (5–8 pages)",
    included: "Custom design, build, on-page SEO, launch & training",
  },
  {
    service: "Premium Website (10–20 pages)",
    included: "Deeper content, advanced design, integrations",
  },
  {
    service: "E-Commerce (Shopify / WooCommerce)",
    included: "Store build, payments, shipping, product config, SEO",
  },
  {
    service: "Landing Page (single page)",
    included: "Conversion-focused design, copy support, fast build",
  },
  {
    service: "Monthly SEO Retainer",
    included: "Technical SEO, content, authority building, reporting",
  },
  {
    service: "AI Agent Development",
    included: "Scoping, build, tool integration, testing, handover docs",
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
  // 2026-09-26 (perf): the GSAP header/row/footer entrance was removed; this
  // section is a server component. The WhatsApp hover is Tailwind hover: classes
  // and the audit button is the shared UkAuditButton island.

  return (
    <section
      id="pricing"
      style={{ background: "#F8FAFC", padding: "128px 0 32px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div>
          <p
            className="font-semibold uppercase"
            style={{
              color: "#B23E13",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Scope, not day rates
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
            What each Manchester engagement includes
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
            Every project is fixed-price and scoped to your build. The drivers
            are page count, design depth and integrations. We quote in writing
            after a free call, so you know the full cost before work starts.
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

            <tbody>
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
        <div>

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

            <ul className="flex flex-wrap" style={{ gap: "12px 24px" }}>
              {INCLUDES.map((item) => (
                <li
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
                </li>
              ))}
            </ul>

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
            <UkAuditButton
              trackName="get_your_free_quote"
              location="manchester_pricing"
              className="px-8 py-4 rounded-lg text-white font-semibold text-center transition-all duration-200 hover:brightness-110"
              style={{ background: "#B23E13", fontSize: "15px" }}
            >
              Get Your Free Quote →
            </UkAuditButton>
            <a
              href="https://wa.me/919699977699"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200 border border-solid border-[#E5E7EB] text-[#374151] hover:border-[#B23E13] hover:text-[#B23E13]"
              style={{ fontSize: "15px" }}
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
