import Link from "next/link";
import RecognitionStrip from "@/components/RecognitionStrip";

const SERVICE_LINKS = [
  { label: "Web Design Manchester", href: "/manchester" },
  { label: "E-Commerce Development", href: "/manchester" },
  { label: "SEO Agency Manchester", href: "/manchester" },
  { label: "AI Agent Development", href: "/manchester" },
  { label: "Website Redesign", href: "/manchester" },
  { label: "Web Design Sheffield", href: "/sheffield" },
];

const BOTTOM_LINKS = [
  { label: "Web Design Manchester", href: "/manchester" },
  { label: "Web Design Sheffield", href: "/sheffield" },
  { label: "AI-Native Agency", href: "/" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#111827", paddingTop: "64px", paddingBottom: "32px" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

        {/* ── Three-column grid ─────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          style={{ marginBottom: "48px" }}
        >
          {/* Brand + SEO paragraph */}
          <div>
            <p
              className="font-clash text-white"
              style={{ fontSize: "22px", marginBottom: "16px" }}
            >
              FactoryJet
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                maxWidth: "400px",
              }}
            >
              FactoryJet Technologies is an AI-native web design agency serving
              businesses across Manchester, Salford, Stockport, Trafford, and
              the wider Greater Manchester region. We specialise in custom web
              design, e-commerce development (Shopify, WooCommerce, headless
              commerce), AI agent development, and AI-powered SEO (GEO, AEO,
              AIO). Our Manchester web design services are built on Next.js 15,
              Tailwind CSS 4, and GSAP — delivering enterprise-grade websites
              at startup-friendly prices. Whether you&apos;re a tech startup in
              the Northern Quarter, a financial services firm in Spinningfields,
              a media company at MediaCityUK, or a manufacturer in Trafford
              Park, FactoryJet builds websites that convert visitors into
              clients.
            </p>
          </div>

          {/* Services links */}
          <div>
            <p
              className="font-semibold uppercase"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              Services
            </p>
            <ul className="flex flex-col" style={{ gap: "10px" }}>
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors duration-200"
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p
              className="font-semibold uppercase"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              Contact
            </p>
            <ul className="flex flex-col" style={{ gap: "10px" }}>
              {[
                { label: "Email", href: "mailto:connect@factoryjet.com", display: "connect@factoryjet.com" },
                { label: "WhatsApp", href: "https://wa.me/919699977699", display: "Message us on WhatsApp" },
              ].map(({ label, href, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <RecognitionStrip />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
            © 2026 FactoryJet Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center" style={{ gap: "4px" }}>
            {BOTTOM_LINKS.map(({ label, href }, i) => (
              <span key={label} className="flex items-center">
                <Link
                  href={href}
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.65)")
                  }
                >
                  {label}
                </Link>
                {i < BOTTOM_LINKS.length - 1 && (
                  <span
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      margin: "0 8px",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
