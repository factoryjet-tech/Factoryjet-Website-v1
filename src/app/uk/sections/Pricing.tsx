import UkAuditButton from "./UkAuditButton";

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
// Server component. The row stagger-in on scroll was removed for performance
// (rows paint in their final state). Button hover states are plain CSS below;
// the audit button is the ./UkAuditButton island.
export default function Pricing() {
  return (
    <section
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
        /* Hover states, same values the buttons used to set from JS. */
        .uk-price-cta {
          box-shadow: 0 4px 12px rgba(0,82,204,0.25);
        }
        .uk-price-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0,82,204,0.32);
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
            written price up front after a free discovery call, before any work
            starts.
          </p>
        </div>

        {/* Premium table */}
        <div className="relative mt-14">
          <div className="fj-price-scroll relative">
            <div
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
                    {/* Service, highlighted column */}
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
          <UkAuditButton
            trackName="get_your_free_digital_audit"
            location="pricing"
            className="uk-price-cta inline-flex items-center justify-center"
            style={{
              backgroundColor: "#B23E13",
              color: "#FFFFFF",
              padding: "16px 28px",
              borderRadius: 8,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.01em",
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
              border: "none",
              cursor: "pointer",
              minHeight: 48,
            }}
          >
            Get Your Free Digital Audit
          </UkAuditButton>
        </div>
      </div>
    </section>
  );
}
