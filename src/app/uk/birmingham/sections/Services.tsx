"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Service = {
  id: string;
  number: string;
  name: string;
  heading: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string[];
  imageSide: "left" | "right";
  keywords: string;
};

const SERVICES: Service[] = [
  {
    id: "web-design",
    number: "01",
    name: "Web Design",
    heading: "From Webflow to Next.js 15: Designed to Convert Birmingham Buyers",
    image: "/images/uk/birmingham/service-web-design-birmingham.webp",
    imageAlt: "Modern website design for Birmingham businesses",
    imageSide: "right",
    body: [
      "Birmingham businesses don't need a pretty portfolio piece. They need a website that converts a Google searcher into a qualified lead before your competitor's page loads. We build in Next.js 15, React 19, WordPress, Webflow, and Framer, whichever platform your team can manage, whichever stack your budget supports.",
      "Unlike agencies at the Mailbox or in the Jewellery Quarter, our development process begins with conversion architecture, not visual mood boards. We map the buyer journey for your specific industry, whether you're a professional services firm in Colmore Business District, a manufacturer in Erdington, or a property developer in the Jewellery Quarter, before we write a single line of code.",
      "We're one of the only agencies deploying Next.js 15 with AI-assisted content personalisation for Birmingham businesses. WordPress, Webflow, Framer, and Next.js developer expertise in one team, no outsourcing, no handoffs. Every build ships with a Lighthouse SEO score of 100 guaranteed.",
    ],
    keywords:
      "web design Birmingham Next.js developer Birmingham Webflow developer Birmingham Framer developer Birmingham AI web design Birmingham",
  },
  {
    id: "ecommerce",
    number: "02",
    name: "E-Commerce",
    heading: "Shopify Plus, Headless Commerce & B2B Ecommerce Built for Birmingham Brands",
    image: "/images/uk/birmingham/service-ecommerce-birmingham.webp",
    imageAlt: "E-commerce development for Birmingham businesses",
    imageSide: "left",
    body: [
      "Eastside Co in Digbeth has built 500+ Shopify stores from their Birmingham base. They've proved the demand is here. What they haven't cracked is headless commerce and the B2B ecommerce niche that Birmingham's manufacturing sector urgently needs.",
      "We deliver Shopify Plus agency-level builds at non-Plus prices. Headless commerce on Next.js with a Shopify or WooCommerce backend. B2B ecommerce with customer portals, trade pricing, and ERP integrations. Full custom builds for brands that have outgrown what magic42 or SwiftSync can offer at a fraction of the agency markup.",
      "Our Birmingham e-commerce clients see average basket values 23% higher within 90 days of replatforming, because conversion rate optimisation is baked into every build, not sold as a monthly upsell. The Jewellery Quarter's 700 businesses need B2B and B2C in a single headless architecture, that's our specialism.",
    ],
    keywords:
      "Shopify Plus agency Birmingham B2B ecommerce Birmingham headless commerce Birmingham WooCommerce Birmingham Jewellery Quarter ecommerce",
  },
  {
    id: "ai-agents",
    number: "03",
    name: "AI Agents",
    heading: "The AI Agents Birmingham's Professional Services Firms Are Actually Deploying",
    image: "/images/uk/birmingham/service-ai-agents-birmingham.webp",
    imageAlt:
      "AI agent development for Birmingham legal and financial services firms",
    imageSide: "right",
    featured: true,
    body: [
      "Birmingham's legal community: Gowling WLG, Pinsent Masons, the city's 200+ law firm ecosystem, handles thousands of enquiries, contracts, and document reviews every week. AI agents can automate 60–70% of that intake workflow. Most firms haven't moved yet because the agencies pitching to them don't understand the legal context.",
      "We build agentic AI systems, multi-step autonomous workflows that intake leads, qualify them against your criteria, trigger CRM entries, draft response emails, and escalate edge cases to a human. Not a chatbot. An agent that works a 24-hour shift without a salary.",
      "No dominant AI agent development agency exists in Birmingham yet. The Bot Factory offers lightweight automation. Opace Digital is soft-positioning. FactoryJet builds production-grade multi-agent systems using Claude, GPT-4o, and open-source LLMs. Use cases specific to Birmingham: legal intake automation · financial services client onboarding · manufacturing RFQ processing · property developer lead qualification · Jewellery Quarter wholesale order management.",
    ],
    keywords:
      "AI agent development Birmingham agentic AI Birmingham AI automation Birmingham AI chatbot Birmingham AI for legal Birmingham AI for manufacturing Birmingham",
  },
  {
    id: "ai-seo",
    number: "04",
    name: "AI SEO",
    heading: "While Birmingham Agencies Chase Old Rankings, Your Buyers Are Asking AI",
    image: "/images/uk/birmingham/service-ai-seo-birmingham.webp",
    imageAlt: "AI SEO and GEO services for Birmingham businesses",
    imageSide: "left",
    body: [
      "Search is fragmenting. A Birmingham CFO looking for an audit firm types into ChatGPT. A procurement manager sourcing a manufacturer asks Perplexity. A law firm partner researching a legal tech supplier queries Google's AI Overview. Traditional SEO optimises for the ten blue links. AI SEO, generative engine optimisation (GEO) and answer engine optimisation (AEO), optimises for the AI answer.",
      "Accentuate Agency is the only Birmingham-based agency currently positioning on GEO. M3.agency, Opace, and Chameleon Web Services are all operating on pre-AI SEO playbooks. FactoryJet builds entity-based content architectures with structured schema, llms.txt implementation, and explicit AI crawler whitelisting: the full technical stack that gets your content cited by ChatGPT, Perplexity, and Google AI Overviews.",
      "For Birmingham businesses targeting London-based clients, AI SEO is not optional. It's where the attention already is.",
    ],
    keywords:
      "AI SEO agency Birmingham AI SEO Birmingham generative engine optimisation Birmingham answer engine optimisation Birmingham GEO Birmingham",
  },
];

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
          style={{ maxWidth: 540, position: "relative" }}
        >
          <div
            className="flex items-center gap-3"
            style={{
              color: service.featured ? "#FF6B35" : "#93C5FD",
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
                backgroundColor: service.featured ? "#FF6B35" : "#93C5FD",
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
              position: "relative",
            }}
          >
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <span
              aria-hidden="true"
              style={{ fontSize: 0, position: "absolute", overflow: "hidden" }}
            >
              {service.keywords}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

      mm.add("(min-width: 1024px)", () => {
        if (!pinRef.current || !trackRef.current) return;

        const panels =
          trackRef.current.querySelectorAll<HTMLElement>("[data-panel]");
        const panelCount = panels.length;
        if (!panelCount) return;

        const xTarget = -((panelCount - 1) / panelCount) * 100;

        const dwellUnits = 1;
        const totalUnits = panelCount + dwellUnits;
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
              const mapped = Math.min(1, self.progress / moveFraction);
              const idx = Math.min(
                panelCount - 1,
                Math.max(0, Math.round(mapped * (panelCount - 1)))
              );
              const dots =
                dotsRef.current?.querySelectorAll<HTMLSpanElement>(
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
        tl.to(trackRef.current, {
          xPercent: xTarget,
          ease: "none",
          duration: panelCount,
        });
        tl.to({}, { duration: dwellUnits });

        const tween = tl;

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

      mm.add("(max-width: 1023px)", () => {
        // Plain vertical layout via CSS.
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
      aria-label="Our services for Birmingham businesses"
      className="relative w-full"
      style={{ maxWidth: "100vw" }}
    >
      {/* Header */}
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
              color: "#FF6B35",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            What We Build in Birmingham
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
            Four Services. One AI-Native Agency. Built for Birmingham&rsquo;s
            Second City Ambition.
          </h2>

          <span
            aria-hidden="true"
            className="mt-6 block"
            style={{ width: 48, height: 2, backgroundColor: "#FF6B35" }}
          />
        </div>
      </div>

      {/* Pinned horizontal scroll container */}
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0A0F1C" }}
      >
        <div
          ref={trackRef}
          className="flex w-full flex-col lg:w-[400vw] lg:flex-row lg:flex-nowrap"
          style={{ willChange: "transform" }}
        >
          {SERVICES.map((s) => (
            <Panel key={s.id} service={s} />
          ))}
        </div>

        {/* Progress dots + active service name */}
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
