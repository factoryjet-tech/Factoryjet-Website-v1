"use client";

// Birmingham FAQ — fully static, zero accordion/filter logic.
// All 12 answers permanently visible in the DOM.
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot) see every answer in HTML source.

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const FAQS = [
  {
    q: "How much does web design cost in Birmingham?",
    a: "Most Birmingham agencies price by studio overhead and project complexity, so quotes vary widely from one studio to the next. Factors that push prices up include bespoke functionality, complex integrations, and the agency's studio overhead — agencies in the Jewellery Quarter, Brindleyplace, or the Mailbox area typically carry higher costs than remote-first agencies. At FactoryJet, pricing is fixed and scoped to your build — the main drivers are page count, design depth, integrations, and catalogue size for e-commerce. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. We provide itemised quotes within 24 hours, free of charge, with no discovery phase required.",
  },
  {
    q: "What's the best web design agency in Birmingham for manufacturers and industrial businesses?",
    a: "Most Birmingham web agencies build beautiful consumer-facing sites but lack fluency in manufacturing buyer journeys — long sales cycles, technical specifications, ISO accreditations, and the need to rank for industry-specific terms like 'precision engineering Birmingham' or 'CNC machining West Midlands'. FactoryJet specialises in web design for manufacturers in Birmingham, including B2B e-commerce portals with trade pricing, product catalogues, and ERP integration. Our clients in the Erdington, Tyseley, and Smethwick manufacturing corridors see 40–60% improvements in qualified lead volume within six months of replatforming.",
  },
  {
    q: "Can I get a Next.js or Framer developer in Birmingham?",
    a: "Yes — FactoryJet's primary development stack is Next.js 15 with React 19, Tailwind CSS 4, and GSAP for animations. We also build in Framer for marketing sites and Webflow for client-managed sites. The majority of Birmingham web agencies build in WordPress or Squarespace. If you specifically need a Next.js developer Birmingham or a Framer developer Birmingham, FactoryJet is one of the few agencies in the region delivering these at a non-agency-inflated rate. Our builds consistently achieve Lighthouse scores of 90–100 across Performance, Accessibility, and SEO.",
  },
  {
    q: "What is AI SEO and does my Birmingham business need it in 2026?",
    a: "AI SEO is the practice of optimising your content to be cited, recommended, and surfaced by AI-powered search engines — including Google AI Overviews, ChatGPT Search, Perplexity, and Claude. Traditional SEO gets you ranked in the ten blue links. AI SEO gets your business named when a potential client asks an AI assistant for a recommendation. For Birmingham professional services firms, manufacturers, and B2B businesses, this shift is already happening. FactoryJet builds AI SEO strategies using entity-based content architecture, FAQPage and HowTo schema, llms.txt implementation, and explicit AI crawler whitelisting — ensuring GPTBot, ClaudeBot, and PerplexityBot can index and cite your site.",
  },
  {
    q: "What is generative engine optimisation (GEO) and how does it work for Birmingham businesses?",
    a: "Generative engine optimisation (GEO) is the technical process of structuring your website's content, schema markup, and crawlability so that AI language models prefer to cite your business when generating answers. For a Birmingham solicitor, this means appearing in ChatGPT's answer when someone asks 'best employment lawyer Birmingham'. For a Jewellery Quarter retailer, it means being cited in Perplexity's gift guide. GEO is growing at 50.5% CAGR globally — the Birmingham businesses that invest in it now will own AI-generated referrals before their competitors realise they exist. FactoryJet is one of the only agencies in the West Midlands currently executing full GEO implementations with answer engine optimisation (AEO) as a core deliverable.",
  },
  {
    q: "What's the difference between FactoryJet and agencies like KIJO, Opace, or ALT Agency in Birmingham?",
    a: "KIJO, Opace, ALT Agency, and Republic Marketing are all established Birmingham agencies with strong track records in their niches. The key differences with FactoryJet are: (1) Technology stack — we build in Next.js 15, the same framework used by global SaaS companies, while most Birmingham agencies default to WordPress or Squarespace. (2) AI capability — we build multi-agent AI systems and AI SEO architectures; no Birmingham agency currently offers this at production grade. (3) Pricing — our remote-first model means lower overhead, directly reflected in fixed quotes scoped to your build. (4) Speed — our builds take 3–6 weeks versus the 8–16 weeks standard for Birmingham studio agencies.",
  },
  {
    q: "Do you build Shopify Plus stores for Birmingham businesses?",
    a: "Yes. FactoryJet builds Shopify Plus stores, standard Shopify stores, and headless commerce architectures using Shopify as the backend with a custom Next.js storefront. Birmingham has a strong wholesale and retail manufacturing base — particularly in the Jewellery Quarter (700+ jewellery businesses) and the city's growing fashion district — that benefits enormously from headless Shopify setups. Eastside Co in Digbeth are the most prominent Birmingham-based Shopify agency with 500+ stores globally; FactoryJet's differentiation is headless commerce capability, B2B trade portals, and AI-powered product recommendations at non-Plus agency rates.",
  },
  {
    q: "What is agentic AI and how can Birmingham law firms or financial services businesses use it?",
    a: "Agentic AI refers to AI systems that take multi-step autonomous actions — not just answering questions, but completing workflows. For a Birmingham law firm, this means an AI agent that receives an online enquiry, extracts the matter type, checks it against your practice areas, drafts a conflict-of-interest check, creates a CRM entry in your case management system, and sends a personalised acknowledgment email — all without human intervention. For financial services businesses near HSBC UK's Brindleyplace headquarters or in the emerging Deutsche Bank tech hub, AI agents handle client onboarding, document verification workflows, and compliance reporting. FactoryJet builds these systems using Claude (Anthropic), GPT-4o, and open-source LLMs, with full integration into your existing CRM and practice management software.",
  },
  {
    q: "I'm based in the Jewellery Quarter — do you understand the wholesale and B2C dynamics of this market?",
    a: "Yes. The Jewellery Quarter's 700+ jewellery businesses face a specific challenge: they sell both wholesale (to retailers, galleries, and jewellers globally) and direct-to-consumer (online and via the Quarter's workshops and boutiques). This requires a website that handles B2B trade logins with custom pricing tiers alongside a public D2C storefront — exactly the headless commerce architecture we specialise in. We understand the SEO dynamics of bespoke and handcrafted jewellery, the role of craft story-telling in conversion, and the need for high-resolution product photography guidance.",
  },
  {
    q: "Can you handle SEO for a manufacturer based in Solihull, Coventry, or the wider West Midlands?",
    a: "Yes — FactoryJet's Birmingham SEO service covers the full West Midlands Combined Authority area, including Solihull, Coventry, Wolverhampton, Dudley, Walsall, and Sandwell. We understand the manufacturing and logistics cluster dynamics of the region, including JLR's Solihull facility, the Coventry aerospace supply chain, and the Black Country's precision engineering ecosystem. Our SEO and AI SEO strategies are built around the specific search behaviour of industrial buyers — including technical long-tail keywords, schema for products and services, and GBP optimisation for local pack rankings across the West Midlands.",
  },
  {
    q: "What is headless commerce and is it right for my Birmingham B2B business?",
    a: "Headless commerce separates the front-end (what your customers see) from the back-end commerce platform (Shopify, WooCommerce, or custom). The front end is built in Next.js for speed, full design control, and seamless API integrations — while the back end handles orders, inventory, and payments. For Birmingham B2B businesses — particularly in manufacturing, wholesale, and professional supplies — headless commerce enables trade portals with customer-specific pricing, account-based checkout flows, integration with ERP systems like SAP or Sage, and Lighthouse Performance scores above 90. It costs more upfront than a standard Shopify theme, but pays back in conversion rate and operational efficiency within 12–18 months.",
  },
  {
    q: "How quickly can you build a website for my Birmingham business?",
    a: "A standard 5-page business website takes 3–4 weeks from brief to launch. A Shopify e-commerce store takes 4–6 weeks. A custom Next.js build with bespoke functionality takes 6–10 weeks. AI agent deployments take 4–8 weeks depending on integration complexity. These timelines assume you have your brand assets (logo, colours, photography) ready. We offer express 2-week delivery for simple business sites for a small surcharge. For context, Birmingham studio agencies typically quote 8–14 weeks for equivalent projects. Every site ships with a Lighthouse SEO score of 100 guaranteed.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const headerEls =
        headerRef.current?.querySelectorAll<HTMLElement>("[data-faq-head]");
      if (headerEls && headerEls.length) {
        gsap.fromTo(
          headerEls,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards =
        listRef.current?.querySelectorAll<HTMLElement>("[data-faq-card]");
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 15, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      return () => {
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
      id="faq"
      aria-label="Frequently asked questions — Birmingham web design"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", maxWidth: "100vw" }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Two-column layout: header left, cards right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">

          {/* Left — section header, sticky on desktop */}
          <aside>
            <div ref={headerRef} className="lg:sticky lg:top-[120px]">
              <p
                data-faq-head
                style={{
                  color: "#B23E13",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Birmingham Web Design FAQ
              </p>

              <h2
                data-faq-head
                className="font-clash mt-4"
                style={{
                  color: "#0A0F1C",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Everything Birmingham Businesses Ask Us
              </h2>

              <p
                data-faq-head
                style={{
                  color: "#6b7280",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 10,
                }}
              >
                12 answers. Zero jargon.
              </p>
            </div>
          </aside>

          {/* Right — all 12 cards, permanently expanded */}
          <div ref={listRef} className="flex flex-col gap-4">
            {FAQS.map((item, i) => (
              <div
                key={item.q}
                data-faq-card
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "24px",
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Numbered badge */}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      backgroundColor: "rgba(0,82,204,0.08)",
                      border: "1px solid rgba(0,82,204,0.2)",
                      color: "#B23E13",
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      itemProp="name"
                      style={{
                        color: "#0A0F1C",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "clamp(15px, 1.1vw, 17px)",
                        lineHeight: 1.4,
                        letterSpacing: "-0.005em",
                        margin: 0,
                      }}
                    >
                      {item.q}
                    </h3>

                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        itemProp="text"
                        style={{
                          color: "#4b5563",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 400,
                          fontSize: "clamp(14px, 1.05vw, 15px)",
                          lineHeight: 1.75,
                          marginTop: 10,
                          marginBottom: 0,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
