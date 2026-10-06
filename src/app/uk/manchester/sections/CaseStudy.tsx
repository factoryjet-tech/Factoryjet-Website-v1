import Image from "next/image";
import Link from "next/link";

// 2026-10-06: this section used to show an invented before/after (a
// "Spinningfields financial advisory firm", 38/100 Lighthouse, 6.2 seconds,
// two generated screenshots in a drag slider). It now shows real client
// sites. The three captured projects and their wording match the WORK block
// in components/v2/HomeSections.tsx. No metrics are asserted: do not add
// numbers here without a measured source.
const WORK = [
  {
    tag: "Business website · 75+ pages",
    client: "Impulse Branding",
    summary:
      "A large business website for a signage and fit-out company, with service, case study and insight pages built so search engines and AI answers can read them.",
    desktop: "/images/work/impulse-branding-desktop.webp",
    mobile: "/images/work/impulse-branding-mobile.webp",
    site: "https://www.impulsebranding.in",
    siteLabel: "impulsebranding.in",
    caseStudy: "/case-studies/impulse-branding-migration",
  },
  {
    tag: "Industrial website · SEO",
    client: "Yadav Entrance Automation",
    summary:
      "A website built from scratch for an entrance automation manufacturer, covering 16 product lines, with SEO and AI search work that continues after launch.",
    desktop: "/images/work/yadav-entrance-automation-desktop.webp",
    mobile: "/images/work/yadav-entrance-automation-mobile.webp",
    site: "https://yadaventranceautomation.com",
    siteLabel: "yadaventranceautomation.com",
    caseStudy: "/case-studies/yadav-entrance-automation-website-seo",
  },
  {
    tag: "Shopify · US store",
    client: "Shopholistico",
    summary:
      "A custom Shopify theme for a whole-food supplement brand selling across the US, with subscribe-and-save plans, bundles and two landing pages built for Meta ads.",
    desktop: "/images/work/shopholistico-desktop.webp",
    mobile: "/images/work/shopholistico-mobile.webp",
    site: "https://www.shopholistico.com",
    siteLabel: "shopholistico.com",
    caseStudy: "/case-studies/shopholistico-shopify-store",
  },
] as const;

const LINK_STYLE = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "44px",
  fontSize: "15px",
  fontWeight: 600,
  color: "#B23E13",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
} as const;

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      style={{ background: "#FAFAF7", padding: "128px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div style={{ maxWidth: "760px", marginBottom: "64px" }}>
          <p
            className="font-semibold uppercase"
            style={{
              color: "#B23E13",
              fontSize: "13px",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Real Client Work
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.2vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              marginBottom: "16px",
            }}
          >
            Three Sites We Built, Live Today
          </h2>

          <p style={{ fontSize: "17px", color: "#374151", lineHeight: 1.7 }}>
            Each one is shown on desktop and on a phone. None of these three
            clients is in Manchester. They are recent builds you can open and
            check for yourself.
          </p>
        </div>

        {/* ── Projects ─────────────────────────────────────────────────── */}
        <div className="flex flex-col" style={{ gap: "72px" }}>
          {WORK.map((item, i) => (
            <article
              key={item.client}
              className="grid grid-cols-1 lg:grid-cols-12 items-center"
              style={{ gap: "32px" }}
            >
              {/* Captures: desktop frame with the phone capture set into its corner */}
              <div
                className={`relative lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div
                  className="overflow-hidden rounded-xl"
                  style={{ border: "1px solid #E5E7EB", background: "#FFFFFF" }}
                >
                  <Image
                    src={item.desktop}
                    alt={`${item.client} website homepage on desktop`}
                    width={1200}
                    height={750}
                    sizes="(max-width: 1024px) 100vw, 660px"
                    className="block w-full h-auto"
                  />
                </div>
                <div
                  className="absolute overflow-hidden rounded-lg"
                  style={{
                    right: "16px",
                    bottom: "16px",
                    width: "19%",
                    border: "3px solid #FFFFFF",
                    boxShadow: "0 10px 30px rgba(10, 15, 28, 0.18)",
                    background: "#FFFFFF",
                  }}
                >
                  <Image
                    src={item.mobile}
                    alt={`${item.client} website homepage on a phone`}
                    width={390}
                    height={844}
                    sizes="140px"
                    className="block w-full h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-5">
                <p
                  className="font-semibold uppercase"
                  style={{
                    color: "#B23E13",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                  }}
                >
                  {item.tag}
                </p>
                <h3
                  className="font-clash"
                  style={{
                    fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 2rem)",
                    lineHeight: 1.2,
                    color: "#0a0f1c",
                    marginBottom: "12px",
                  }}
                >
                  {item.client}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#374151",
                    lineHeight: 1.7,
                    marginBottom: "12px",
                  }}
                >
                  {item.summary}
                </p>
                <div className="flex flex-wrap" style={{ columnGap: "28px" }}>
                  <Link href={item.caseStudy} style={LINK_STYLE}>
                    Read the {item.client} case study
                  </Link>
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={LINK_STYLE}
                  >
                    Visit {item.siteLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── UK clients ───────────────────────────────────────────────── */}
        <p
          style={{
            marginTop: "72px",
            paddingTop: "28px",
            borderTop: "1px solid #E5E7EB",
            maxWidth: "760px",
            fontSize: "16px",
            color: "#374151",
            lineHeight: 1.7,
          }}
        >
          In the UK we built a trade storefront for{" "}
          <Link href="/case-studies/gpsuk-promotional-products" style={{ color: "#B23E13", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px" }}>
            GPSUK
          </Link>
          , a promotional products supplier, and we are building a WooCommerce
          trade store connected to Odoo for{" "}
          <Link href="/case-studies/sow-easy-distributor-portal" style={{ color: "#B23E13", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "4px" }}>
            Sow Easy
          </Link>
          .
        </p>

      </div>
    </section>
  );
}
