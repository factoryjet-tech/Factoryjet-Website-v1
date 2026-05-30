"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Service data ─────────────────────────────────────────────────────────────
type Service = {
  id: string;
  number: string;
  name: string;
  heading: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  // Paragraphs of content — rendered verbatim from content.md.
  body: string[];
  // "text | image" vs "image | text" — alternating rhythm.
  imageSide: "left" | "right";
};

const SERVICES: Service[] = [
  {
    id: "web-design",
    number: "01",
    name: "Web Design",
    heading: "Web Design & Development for UK Businesses",
    image: "/images/uk/service-web-design.webp",
    imageAlt:
      "Modern website displayed on floating laptop with blue glassmorphism interface",
    imageSide: "right",
    body: [
      "The average UK web design agency still builds on WordPress, charges £5,000–£12,000 for a business website, takes 8–12 weeks to deliver, and hands over a site that scores 60–80 on Google Lighthouse. FactoryJet builds every website on Next.js 15 and Tailwind CSS 4 — the same technology stack behind Stripe, Vercel, and Linear — delivering sites that score 90+ on Lighthouse, load in under two seconds, and cost 50–60% less than the traditional agency average.",
      "We work with businesses across the entire United Kingdom, from London startups to Leeds financial firms to Edinburgh tech companies to Bristol aerospace innovators. Whether you need a bespoke website design for a professional services firm, a custom website development project with React and headless CMS architecture, a JAMstack development build for maximum performance, or an affordable web design package for a growing small business, our web development agency delivers at a quality and speed that traditional traditional agencies simply cannot match.",
      "Every website we build is mobile-responsive, SEO-optimised from day one, and structured for AI search visibility — meaning your site is built not just for Google rankings, but for ChatGPT citations, Perplexity references, and Google AI Overview mentions. We also specialise in industry-vertical web design, with experience building high-converting sites for law firms, restaurants, healthcare organisations, real estate businesses, and professional services.",
      "How much does a website cost in the UK? Most agencies charge £5,000–£12,000 for a standard site and £10,000–£25,000 for custom builds. FactoryJet starts at £1,500 for small business websites and £5,000–£8,000 for complex custom builds. Our pricing is possible because our AI-augmented development workflow eliminates the inefficiencies that inflate traditional agency costs. And for UK business owners, web design is a legitimate business expense claimable against your corporation tax or income tax with HMRC — reducing the effective cost by 19–25%.",
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    name: "E-Commerce",
    heading: "E-Commerce Development for UK Retailers & Brands",
    image: "/images/uk/service-ecommerce.webp",
    imageAlt:
      "Mobile phone with floating e-commerce product cards",
    imageSide: "left",
    body: [
      "With the UK e-commerce market exceeding £265 billion and 28% of all retail sales happening online, having a professionally built online store is the single most important investment a UK retail or direct-to-consumer brand can make. FactoryJet is the Shopify development agency UK businesses choose when they need stores that convert, not just look good.",
      "We specialise in Shopify, Shopify Plus, WooCommerce, and headless commerce development. Our builds include UK-specific payment gateway integration (Stripe, PayPal, Klarna, Apple Pay), Royal Mail and DPD shipping configuration, and full e-commerce SEO so your products rank in both Google and AI search results. For UK businesses asking the Shopify vs WooCommerce question: Shopify (5.8 million live sites globally) offers simplicity, reliability, and managed infrastructure out of the box. WooCommerce (4.5 million live sites) provides deep, open-source customisation on WordPress. We build on both and will recommend what genuinely fits your business model — not what earns us the highest margin.",
      "Shopify pricing in the UK starts from £5–£344 per month for the platform itself, with card processing fees of 1.5–2.2% plus 25p. Our development costs start at £2,000, compared to £8,000–£15,000 from typical UK Shopify agencies. Whether you need a new store, a WooCommerce to Shopify migration, a custom Shopify theme, a B2B e-commerce portal, or a headless commerce architecture for maximum speed, we deliver at pricing that makes traditional traditional agencies reconsider their fee structures.",
      "For business owners wondering how to start an online store in the UK, we provide end-to-end support: platform selection, store design and development, product catalogue setup, payment and shipping configuration, and launch-ready e-commerce SEO — all within 3–6 weeks.",
    ],
  },
  {
    id: "ai-agents",
    number: "03",
    name: "AI Agents",
    heading: "AI Agent Development for UK Businesses",
    image: "/images/uk/service-ai-agents.webp",
    imageAlt:
      "Glowing neural network of crystal orbs representing AI agents",
    imageSide: "right",
    featured: true,
    body: [
      "The UK's £80.8 billion AI sector is growing faster than any other European market. The global AI agents market hit $7.63 billion in 2025 and is projected to grow 43% year-over-year to $10.91 billion in 2026. Gartner predicts 40% of enterprise applications will embed AI agents by year's end and named 'agentic AI' a Top 10 strategic technology trend — with inquiries about multi-agent systems surging 1,445% from Q1 2024 to Q2 2025. In the UK, 54% of businesses are already using AI, yet only 28% have fully integrated it and 87% describe their adoption as partial. The gap between AI interest and AI implementation is where FactoryJet operates.",
      "We are the AI development agency UK businesses hire to build custom AI agents that actually solve business problems — not generic chatbot widgets with a corporate logo. Our AI agent development company builds intelligent systems that handle customer service enquiries 24/7, qualify sales leads, process documents, automate HR workflows, and manage operational intelligence. Every agent uses the latest advances in agentic AI architecture, multi-agent systems, and AI agent orchestration powered by Model Context Protocol (MCP) integration and the A2A protocol for agent-to-agent communication. This is what the industry calls 'context engineering' — the successor to prompt engineering — and it is what separates real AI agent builders from companies that rebrand basic chatbot templates.",
      "For UK businesses, the barrier to AI adoption has traditionally been cost and complexity. The top barriers cited by UK SMBs are lack of expertise (35%), high costs (30%), and uncertain ROI (25%). We are eliminating all three. Our AI automation services start from £3,000 for a focused single-function agent, with enterprise AI solutions priced based on scope. Our AI integration services connect agents with your existing CRM, ERP, email, and communication tools. And most clients see full ROI within three to six months.",
      "Whether you need an AI chatbot for business to handle customer service at scale, an AI-powered customer service chatbot that understands natural language, a custom AI agent for e-commerce that manages returns and product recommendations, or a complete enterprise AI solution that automates across departments — FactoryJet is the AI consulting and development partner that takes you from concept to deployed agent faster than any alternative in the UK market.",
    ],
  },
  {
    id: "ai-seo",
    number: "04",
    name: "AI SEO",
    heading:
      "AI SEO for UK Businesses — GEO, AEO, AIO & Traditional SEO Combined",
    image: "/images/uk/service-ai-seo.webp",
    imageAlt:
      "Two glass panels showing Google search and AI chat interfaces",
    imageSide: "left",
    body: [
      "The SEO industry is experiencing its most radical transformation in two decades. Over 60% of Google searches now end without a click. Google AI Overviews reach 2 billion monthly users and appear in 42% of UK searches. ChatGPT processes 2.5 billion prompts daily with 910 million weekly active users and accounts for 77% of all AI-driven website referral traffic. Perplexity AI handles 780 million monthly queries, up 240% since August 2024. The GEO market alone is valued at $848 million and projected to reach $19.8 billion by 2034 at a 50.5% compound annual growth rate. Gartner projects that brands will lose 25% of their web traffic to AI chatbots by the end of 2026.",
      "If your current SEO agency is only optimising for Google's traditional organic results, you are invisible to a growing majority of potential customers. FactoryJet is the AI SEO agency UK businesses choose when they want to be found everywhere their customers search.",
      "Our approach combines four complementary disciplines into what we call search everywhere optimisation. Traditional SEO delivers rankings and organic traffic through technical optimisation, content strategy, and authority building. Generative engine optimisation (GEO) ensures your content appears in AI-generated summaries across ChatGPT, Perplexity, and Google AI Overviews. Answer engine optimisation (AEO) wins featured snippets, knowledge panels, and People Also Ask boxes — delivering the fastest results of any discipline, often within 2–8 weeks. And AI optimisation (AIO) gets your brand cited by large language models through entity-rich, authoritative content that LLMs prefer to reference.",
      "We also implement the technical foundations that most UK SEO agencies ignore entirely. We configure your robots.txt and Cloudflare settings to ensure GPTBot, ClaudeBot, and PerplexityBot can crawl your site (most UK websites block them by default). We structure content as citation-ready material optimised for LLM referencing patterns. We implement llms.txt — the emerging technical standard for AI readability. We build entity-based SEO architecture that establishes your business as the authoritative source in your category. And we track your share of AI voice alongside traditional search metrics, giving you visibility into how AI systems reference and recommend your brand compared to competitors.",
      "For UK businesses wondering how to rank in ChatGPT, how to optimise for Perplexity AI, or how to get mentioned in Google AI Overviews — these are exactly the questions our AI SEO services answer. We also help businesses understand whether SEO is dead because of AI (it is not — it is evolving), and we provide AI visibility audits that assess your current presence across all AI search platforms.",
    ],
  },
];

// ── Single panel ─────────────────────────────────────────────────────────────
function Panel({ service }: { service: Service }) {
  const imageFirst = service.imageSide === "left";

  return (
    <div
      data-panel
      data-panel-id={service.id}
      className="relative flex w-full shrink-0 flex-col items-stretch overflow-hidden lg:h-screen lg:w-screen lg:flex-row lg:items-center"
    >
      {/* Image side */}
      <div
        className={[
          "relative flex items-center justify-center px-6 py-10 sm:px-10 lg:h-full lg:w-[45%] lg:px-14",
          imageFirst ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <div
          data-panel-image
          className="relative w-full rounded-xl aspect-[4/3]"
          style={{
            maxWidth: 560,
            // Matches the 800×600 source aspect ratio so generated images
            // fill the frame without being cropped to an odd portrait shape.
            aspectRatio: "4 / 3",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: service.featured
              ? "0 0 0 2px rgba(255,107,53,0.55), 0 30px 80px -20px rgba(255,107,53,0.35), 0 20px 60px -20px rgba(0,82,204,0.25)"
              : "0 30px 80px -20px rgba(0,82,204,0.15), 0 10px 40px -10px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          {service.featured && (
            <span
              className="absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{
                backgroundColor: "#FF6B35",
                color: "#0A0F1C",
                letterSpacing: "0.12em",
                fontFamily: "var(--font-sans)",
              }}
            >
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Text side */}
      <div
        className={[
          "relative flex min-w-0 flex-col justify-center px-6 py-12 sm:px-10 lg:h-full lg:w-[55%] lg:px-14 lg:py-20 lg:pr-16",
          imageFirst ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div
          className="min-w-0 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto lg:pr-8"
          style={{ maxWidth: 540 }}
        >
          <div
            className="flex items-center gap-3"
            style={{
              color: service.featured ? "#FF6B35" : "#F05A28",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>{service.number}</span>
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{
                backgroundColor: service.featured ? "#FF6B35" : "#F05A28",
              }}
            />
            <span>{service.name}</span>
          </div>

          <h3
            className="font-clash mt-5 text-white"
            style={{
              fontWeight: 700,
              fontSize: "clamp(20px, 2.5vw, 32px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {service.heading}
          </h3>

          <div
            className="mt-6 space-y-5"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.05vw, 15.5px)",
              lineHeight: 1.75,
            }}
          >
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const activeNameRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const mm = gsap.matchMedia();

      // ── Desktop / large screens: pinned horizontal scroll ──────────────
      mm.add("(min-width: 1024px)", () => {
        if (!pinRef.current || !trackRef.current) return;

        const panels =
          trackRef.current.querySelectorAll<HTMLElement>("[data-panel]");
        const panelCount = panels.length;
        if (!panelCount) return;

        // xPercent from 0 to -((n-1)/n * 100) slides the track left by
        // (n-1) viewports — i.e. 4 panels require the track to shift by 3
        // viewport widths (75% of its own width since the track is 400% wide).
        const xTarget = -((panelCount - 1) / panelCount) * 100;

        // The scroll distance is (panelCount + 1) viewports: one per panel
        // PLUS one extra trailing viewport that holds on panel 4 so the user
        // has time to read it before the section unpins. Implemented as a
        // timeline with a trailing no-op tween — the scrub maps linearly to
        // tl.progress, so the last 1/(n+1) of scroll is "dwell time" with
        // the track parked at its final xPercent.
        const dwellUnits = 1;
        const totalUnits = panelCount + dwellUnits;
        // Fraction of scroll progress that corresponds to horizontal movement.
        const moveFraction = panelCount / totalUnits;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: `+=${totalUnits * 100}%`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Map raw scroll progress onto the panelCount range. During the
              // dwell tail (progress > moveFraction), the expression saturates
              // at the final panel index so the Jet Orange dot and active
              // name stay locked on the last service while the user finishes
              // reading it.
              const mapped = Math.min(1, self.progress / moveFraction);
              const idx = Math.min(
                panelCount - 1,
                Math.max(0, Math.round(mapped * (panelCount - 1)))
              );
              // Progress dots
              const dots = dotsRef.current?.querySelectorAll<HTMLSpanElement>(
                "[data-dot]"
              );
              dots?.forEach((d, i) => {
                d.dataset.active = i === idx ? "true" : "false";
                d.style.backgroundColor =
                  i === idx ? "#FF6B35" : "rgba(255,255,255,0.25)";
                d.style.transform = i === idx ? "scale(1.25)" : "scale(1)";
              });
              if (activeNameRef.current) {
                activeNameRef.current.textContent = SERVICES[idx].name;
              }
            },
          },
        });
        // Horizontal slide over `panelCount` time units.
        tl.to(trackRef.current, {
          xPercent: xTarget,
          ease: "none",
          duration: panelCount,
        });
        // Trailing dwell — a no-op tween that just consumes timeline time so
        // the ScrollTrigger has extra scroll distance while the track is
        // already parked on panel 4.
        tl.to({}, { duration: dwellUnits });

        // Back-compat alias — the image scale trigger below uses this name.
        const tween = tl;

        // Image scale 0.9 → 1 as each panel enters the viewport horizontally.
        if (!prefersReduced) {
          panels.forEach((panel) => {
            const img = panel.querySelector<HTMLElement>("[data-panel-image]");
            if (!img) return;
            gsap.fromTo(
              img,
              { scale: 0.9, autoAlpha: 0.6 },
              {
                scale: 1,
                autoAlpha: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tween,
                  start: "left 80%",
                  end: "left 40%",
                  scrub: true,
                },
              }
            );
          });
        }
      });

      // ── Mobile: no pin. Panels stack and scroll vertically as normal. ─
      mm.add("(max-width: 1023px)", () => {
        // Nothing to animate — plain vertical layout via CSS.
      });

      return () => {
        mm.revert();
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
      id="services"
      aria-label="Our services for UK businesses"
      className="relative w-full"
      style={{ maxWidth: "100vw" }}
    >
      {/* ── Header (off-white, before the pin) ─────────────────────────── */}
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div
          className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center sm:px-8"
          style={{
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(64px, 8vw, 96px)",
          }}
        >
          <p
            style={{
              color: "#F05A28",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Our Services for UK Businesses
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
            Four Core Services. One AI-Native Agency. Built for British
            Business.
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />

          <p
            className="mt-6"
            style={{
              color: "#374151",
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 720,
            }}
          >
            Web design, e-commerce, AI agents and AI SEO — delivered by one
            AI-native team, priced 50–60% below the traditional agency average, and
            built on the same stack as Stripe, Vercel and Linear.
          </p>
        </div>
      </div>

      {/* ── Pinned horizontal scroll container (dark) ──────────────────── */}
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0A0F1C" }}
      >
        {/*
          Desktop (lg+): track is flex-row, 400vw wide (4 panels × 100vw each),
          GSAP translates it horizontally while the pin container is pinned.
          Mobile: track collapses to flex-col, full width, normal scroll.
        */}
        <div
          ref={trackRef}
          className="flex w-full flex-col lg:w-[400vw] lg:flex-row lg:flex-nowrap"
          style={{ willChange: "transform" }}
        >
          {SERVICES.map((s) => (
            <Panel key={s.id} service={s} />
          ))}
        </div>

        {/* Progress dots + active service name — desktop only */}
        <div
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-5 lg:flex"
          aria-hidden="true"
        >
          <div ref={dotsRef} className="flex items-center gap-2.5">
            {SERVICES.map((s, i) => (
              <span
                key={s.id}
                data-dot
                data-active={i === 0 ? "true" : "false"}
                className="block h-2 w-2 rounded-full transition-transform duration-300"
                style={{
                  backgroundColor:
                    i === 0 ? "#FF6B35" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
          <span
            className="inline-block h-4 w-px"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          />
          <span
            ref={activeNameRef}
            className="text-[12px] uppercase tracking-[0.18em]"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
            }}
          >
            {SERVICES[0].name}
          </span>
        </div>
      </div>
    </section>
  );
}
