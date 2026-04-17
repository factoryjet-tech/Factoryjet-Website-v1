import Link from "next/link";

const CITIES = [
  "leeds",
  "manchester",
  "birmingham",
  "sheffield",
  "bristol",
  "edinburgh",
  "liverpool",
  "glasgow",
  "newcastle",
  "nottingham",
];

const SERVICES = [
  { name: "Web Design", slug: "web-design" },
  { name: "E-Commerce", slug: "ecommerce" },
  { name: "AI Agents", slug: "ai-agents" },
  { name: "AI SEO", slug: "ai-seo" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="FactoryJet footer"
      className="relative w-full"
      style={{ backgroundColor: "#0A0F1C", color: "#FFFFFF", maxWidth: "100vw" }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(56px, 7vw, 88px)",
          paddingBottom: "clamp(40px, 5vw, 56px)",
        }}
      >
        {/* Brand */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="font-clash"
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "clamp(20px, 2.2vw, 26px)",
                letterSpacing: "-0.01em",
              }}
            >
              FACTORYJET TECHNOLOGIES
            </p>
            <p
              className="mt-2"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              AI-Native Web Design • E-Commerce • AI Agents • AI SEO
            </p>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            UK • US • UAE • India
          </p>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-10"
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Services
            </p>
            <ul
              className="flex flex-col gap-3"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uk/${s.slug}`}
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                    }}
                    className="hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              UK Cities
            </p>
            <ul
              className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {CITIES.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/uk/${slug}`}
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      textTransform: "capitalize",
                    }}
                    className="hover:text-white"
                  >
                    {slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Contact
            </p>
            <ul
              className="flex flex-col gap-3"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              <li>
                <a
                  href="mailto:connect@factoryjet.com"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                  }}
                  className="hover:text-white"
                >
                  connect@factoryjet.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919699977699"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                  }}
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <button
                  type="button"
                  data-uk-open-lead-form
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  className="hover:text-white"
                >
                  Free Digital Audit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
            }}
          >
            © {year} FactoryJet Technologies. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
            }}
          >
            factoryjet.com
          </p>
        </div>
      </div>
    </footer>
  );
}
