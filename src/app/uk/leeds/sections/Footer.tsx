import Link from "next/link";

const SERVICE_LINKS = [
  { label: "Web Design Leeds", href: "/leeds" },
  { label: "E-Commerce Development Leeds", href: "/leeds" },
  { label: "AI Agent Development Leeds", href: "/leeds" },
  { label: "AI SEO Leeds (GEO/AEO)", href: "/leeds" },
  { label: "Shopify Development Leeds", href: "/leeds" },
  { label: "WordPress Development Leeds", href: "/leeds" },
];

const BOTTOM_LINKS = [
  { label: "Manchester", href: "/manchester" },
  { label: "Birmingham", href: "/birmingham" },
  { label: "Sheffield", href: "/sheffield" },
  { label: "Bristol", href: "/bristol" },
  { label: "Edinburgh", href: "/edinburgh" },
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
              FactoryJet Technologies is an AI-native web design agency serving businesses across Leeds, West Yorkshire, and the wider UK. We specialise in enterprise-grade website design and development using Next.js 15, Tailwind CSS 4, WordPress, and TypeScript — delivering Lighthouse 95+ performance scores at a fixed, published price. Our services include custom web design, e-commerce development (Shopify, WooCommerce), AI search optimisation (GEO/AEO), and AI agent development. We work with businesses across all Leeds postcodes — from the financial district around Park Row and the Northern Square Mile, to the tech hubs at Leeds Dock and Nexus, to retail and fashion businesses in the Victoria Quarter and Kirkgate Market.
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
