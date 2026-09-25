import Image from "next/image";
import { BarChart3, Zap, Globe, Code, Target, CheckCircle2 } from "lucide-react";


const SCHEMA_ITEMS = [
  "LocalBusiness Schema",
  "Service Schema",
  "FAQPage Schema",
  "BreadcrumbList",
  "HowTo Schema",
];

interface StandardCard {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

const STANDARD_CARDS: StandardCard[] = [
  {
    icon: Zap,
    title: "Next.js 15 Foundation",
    description:
      "Server-rendered React that loads in under 1.5 seconds. The framework Vercel and Notion use.",
    image: {
      src: "/images/manchester/mockup-responsive.webp",
      alt: "Responsive website design mockup showing desktop and mobile",
    },
  },
  {
    icon: Globe,
    title: "GSAP + Lenis Animation",
    description:
      "Restrained scroll motion and micro-interactions that signal quality without costing speed.",
    image: {
      src: "/images/manchester/mockup-ecommerce.webp",
      alt: "E-commerce storefront design mockup",
    },
  },
  {
    icon: Code,
    title: "Tailwind CSS 4 Styling",
    description:
      "Under 20KB of CSS per site, against the 200 to 500KB typical of theme builders.",
  },
  {
    icon: Target,
    title: "Conversion-Engineered Forms",
    description:
      "Multi-step forms with auto-advance. Our Sheffield page shipped SEO 100, Performance 92.",
    image: {
      src: "/images/manchester/mockup-dashboard.webp",
      alt: "Web analytics dashboard showing traffic growth",
    },
  },
];

export default function ServiceExplanation() {
  // 2026-09-26 (perf): server component. Removed: the GSAP header and featured
  // card fade-up on scroll, and the IntersectionObserver that hid every service
  // card (opacity 0) until it scrolled into view and then staggered them in.
  // Cards now paint in their final state. The card hover lift is CSS (see the
  // <style> below) with the same values the inline handlers used to set.

  return (
    <section
      id="service-explanation"
      style={{ background: "#F8FAFC", padding: "128px 0" }}
    >
      <style>{`
        .mcr-service-card {
          border: 1px solid #E5E7EB;
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }
        .mcr-service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 10px -2px rgba(0,0,0,0.05);
          border-color: #F05A28;
        }
      `}</style>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>

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
            What We Build
          </p>

          <h2
            className="font-clash"
            style={{
              fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
              lineHeight: 1.15,
              color: "#0a0f1c",
              maxWidth: "700px",
              marginBottom: "16px",
            }}
          >
            What we build for Manchester businesses
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#374151",
              maxWidth: "65ch",
              marginBottom: "48px",
              lineHeight: 1.7,
            }}
          >
            Every project starts by mapping the route from first visit to
            qualified enquiry, then building only what serves it.
          </p>
        </div>

        {/* ── Bento grid ───────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "20px" }}
        >

          {/* FEATURED CARD, spans 2 columns */}
          <div
            className="lg:col-span-2 rounded-xl"
            style={{
              background: "white",
              border: "1px solid #E5E7EB",
              padding: "32px",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-10">

              {/* 60%, text side */}
              <div style={{ flex: "0 0 60%" }}>
                <div
                  className="flex items-center justify-center rounded-full mb-5"
                  style={{ width: "48px", height: "48px", background: "#EEF2FF" }}
                  aria-hidden="true"
                >
                  <BarChart3 size={22} color="#F05A28" strokeWidth={2} />
                </div>

                <p
                  className="font-clash"
                  style={{ fontSize: "24px", color: "#0a0f1c", marginBottom: "12px", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Schema Stack for AI Visibility, GEO &amp; AEO Built In
                </p>

                <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.65 }}>
                  Every page ships with LocalBusiness, Service, FAQPage,
                  BreadcrumbList, and HowTo structured data. This is GEO and
                  AEO, when someone asks Claude or ChatGPT &ldquo;who does web
                  design in Manchester?&rdquo;, schema-rich pages are what get
                  cited.
                </p>
              </div>

              {/* 40%, checklist side */}
              <div
                className="flex flex-col justify-center"
                style={{ flex: "0 0 40%" }}
              >
                <ul className="flex flex-col" style={{ gap: "12px" }}>
                  {SCHEMA_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        style={{ color: "#10B981", flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      <span style={{ fontSize: "15px", color: "#374151" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* STANDARD CARDS, 2×2 grid inside the 2-col outer grid */}
          <ul
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 items-start"
            style={{ gap: "20px" }}
          >
            {STANDARD_CARDS.map(({ icon: Icon, title, description, image }) => (
              <li
                key={title}
                className="service-card mcr-service-card rounded-xl"
                style={{
                  background: "white",
                  padding: "24px",
                  cursor: "default",
                  alignSelf: "start",   // prevents grid from stretching this card to match taller neighbours
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: "44px", height: "44px", background: "#EEF2FF" }}
                  aria-hidden="true"
                >
                  <Icon size={20} color="#F05A28" strokeWidth={2} />
                </div>

                <h3
                  className="font-clash"
                  style={{
                    fontSize: "20px",
                    color: "#0a0f1c",
                    marginTop: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>

                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.6 }}>
                  {description}
                </p>

                {/* ── Mockup image (data-driven cards) ─────────────────── */}
                {image && (
                  <div className="mt-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={225}
                      className="w-full h-auto hover:scale-[1.03] transition-transform duration-300 block"
                    />
                  </div>
                )}

                {/* ── Tailwind CSS card: mockup added directly (no image in data) */}
                {title === "Tailwind CSS 4 Styling" && (
                  <div className="mt-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/manchester/mockup-responsive.webp"
                      alt="Responsive website design across desktop, tablet and mobile devices"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
