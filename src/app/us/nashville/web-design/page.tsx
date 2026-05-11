import type { Metadata } from 'next';
import { webDesignPriorityCityAlternatesUS } from '@/data/hreflangMap';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';

export const metadata: Metadata = {
  title: 'Web Design Nashville | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Nashville businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/nashville/web-design',
    languages: webDesignPriorityCityAlternatesUS.nashville,
  },
};

export default function NashvilleWebDesignPage() {
  return (
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · NASHVILLE"}
        headline={"Web Design in Nashville That Converts Visitors Into Clients"}
        lead={"Nashville is no longer just Music City — it's a healthcare IT powerhouse, a booming hospitality market, and one of the Southeast's fastest-growing business destinations. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
        primaryCta={{ label: "Start Your Project", href: '/contact' }}
        trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
        rightSlot={<HeroBrowserMockup />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Nashville businesses trust."}
      />
      <CityContextSection
        eyebrow={"NASHVILLE MARKET"}
        headline={"Why Your Nashville Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Nashville-Davidson's city population hit approximately 700,000 in 2024, and the Nashville-Murfreesboro-Franklin MSA generates $130B+ in GDP — making it one of the most economically significant metros in the Southeast. Nashville has ranked among the fastest-growing mid-size US metros throughout the 2020s, driven by an extraordinary mix of industries. It is the undisputed #1 US city for healthcare IT: HCA Healthcare alone generates $60B in annual revenue and is headquartered here, alongside Vanderbilt University Medical Center and Change Healthcare. The music and entertainment economy contributes $10B+, while tourism draws 15M+ visitors annually. Amazon's Operations HQ brought 5,000 jobs, and corporate relocations from high-tax states continue to accelerate. New businesses arrive in Nashville every week — competing for the same buyers, the same Google rankings, and the same first impression. A slow, generic website isn't just a missed opportunity; it's ground you're ceding to every competitor who showed up with a better digital presence."]}
        stats={[
          {"value":"700,000","label":"Nashville City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/nashvilledavidsonbalancecoloratennessee/PST045224"},
          {"value":"$130B+","label":"Nashville-Murfreesboro-Franklin MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP34980"},
          {"value":"15M+","label":"Annual Visitors to Nashville","sourceUrl":"https://www.visitmusiccity.com/media/stats"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Nashville"}
        headline={"What 'Web Design' Actually Means for a Nashville Business"}
        lead={"Nashville's economy splits between global healthcare IT (where B2B buyers do deep research before any sales call) and hospitality/entertainment (where consumer trust is built in seconds on mobile). Both require very different web strategies — and FactoryJet builds for both."}
        body={<><p>For Healthcare IT and professional services firms — vendors in the HCA Healthcare ecosystem, Vanderbilt University Medical Center partners, and companies operating within the Change Healthcare supply chain — a website needs to demonstrate compliance awareness, technical depth, and case study evidence. Buyers in this space evaluate vendors long before they pick up the phone. We structure sites to answer those due-diligence questions clearly, with lead-capture forms that route to the right person immediately and content architecture that builds credibility at every scroll depth.</p><p>For hospitality, tourism, and entertainment businesses — Broadway venues, hotels, event companies, festival organizers, music-related businesses, and the service firms that support 15M+ annual visitors — sites need to convert mobile visitors arriving from Google Maps and social in seconds. That means fast booking flows, event calendar integrations, and mobile-first design built to perform on spotty venue Wi-Fi. Every FactoryJet project covers discovery, Figma prototyping, Next.js development, content, SEO, GA4 analytics, and a 30-day support window. You leave with a codebase you own, a design system you keep, and a site built to rank — not just to look good in a mockup.</p></>}
        rightSlot={<img src="/images/us/nashville/web-design/service-explanation.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Nashville Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Local Nashville agencies include Bullhorn Creative (branding + web, Nashville-based), Southern Web Group (digital + web), and Crackerbox (web design studio). None publish a 7-day delivery commitment. FactoryJet's Growth tier ($3,999) covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session — 50–60% below the Nashville agency benchmark for comparable scope. We build in Next.js, not WordPress, which means faster load times and no monthly plugin maintenance overhead for your team.\n\nWe don't win on price alone. Every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one. No lock-in. No proprietary platform. No surprise invoices after launch. And unlike most local agencies, we publish all three pricing tiers before you ever book a call."}
        pillars={[
          { title: 'AI-native',    body: 'Every site is built with an AI-assisted workflow that compresses build time without compressing quality. We have delivered 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no "it depends" quotes that take three weeks to arrive. Fixed price, agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Nashville Website in 7 Days"}
        stages={[
          {
            "number": "01",
            "title": "Discovery & Strategy",
            "description": "We map your ideal customer profile against Nashville's market dynamics — whether that's healthcare IT procurement cycles or hospitality conversion funnels. We audit your top three competitors and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do. — Days 1–2"
          },
          {
            "number": "02",
            "title": "Design & Prototyping",
            "description": "Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. For Nashville's hospitality and entertainment clients, we prioritize thumb-friendly mobile layouts. For healthcare IT clients, we focus on authority signals and structured content hierarchy. — Days 3–4"
          },
          {
            "number": "03",
            "title": "Development",
            "description": "We build in Next.js with GSAP animations, headless CMS integration, contact and booking forms, event calendar integrations where needed, and any third-party APIs your business relies on. Performance budgets are enforced from the first commit — not retrofitted after launch. — Days 5–6"
          },
          {
            "number": "04",
            "title": "Content & SEO",
            "description": "Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit your sitemap to Google Search Console and verify rendering for AI crawlers. Nashville-specific local SEO targeting is baked in, not sold as an add-on. — Days 6–7"
          },
          {
            "number": "05",
            "title": "Launch & Handover",
            "description": "We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions — so your team is fully self-sufficient from day one. — Day 7+"
          }
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Nashville businesses look like after FactoryJet."}
        cards={[
          {
            "industry": "Healthcare IT & Professional Services",
            "title": "Nashville Healthcare IT & Professional Services Client",
            "description": "Nashville's healthcare IT ecosystem — anchored by HCA Healthcare ($60B revenue), Vanderbilt University Medical Center, and Change Healthcare — demands websites that project compliance awareness, technical depth, and verifiable case study evidence. We build sites for vendors and professional services firms in this ecosystem that convert B2B researchers into booked discovery calls.",
            "imageSrc": "/images/us/nashville/web-design/portfolio-1.webp",
            "stat1": "+40% conversions",
            "stat2": "< 1.5s load time"
          },
          {
            "industry": "Hospitality & Entertainment",
            "title": "Nashville Hospitality & Entertainment Client",
            "description": "Nashville draws 15M+ visitors annually. Broadway venues, hotels, event companies, and hospitality brands need sites that convert mobile visitors from Google Maps and social in seconds — with fast booking flows, event calendars, and mobile-first design that performs even on spotty venue Wi-Fi. We build for that exact environment.",
            "imageSrc": "/images/us/nashville/web-design/portfolio-2.webp",
            "stat1": "+40% conversions",
            "stat2": "< 1.5s load time"
          },
          {
            "industry": "Music Industry & Creative Businesses",
            "title": "Nashville Music Industry & Creative Business Client",
            "description": "Nashville's music economy generates $10B+ annually, supporting record labels, recording studios, artist management firms, music licensing agencies, and creative businesses of every scale. These brands need websites that reflect creative credibility while driving real commercial outcomes — portfolio depth, booking inquiries, and licensing leads.",
            "imageSrc": "/images/us/nashville/web-design/portfolio-3.webp",
            "stat1": "+40% conversions",
            "stat2": "< 1.5s load time"
          }
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Nashville Web Agencies"}
        lead={"Nashville's local agency market includes credible names like Bullhorn Creative, Southern Web Group, and Crackerbox. None publish a 7-day delivery commitment or a public price list. FactoryJet Growth ($3,999) delivers 10–15 pages, blog CMS, lead capture, GA4, and Next.js — 50–60% below the Nashville agency benchmark for the same scope, with a guaranteed timeline and a codebase you own outright."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {
            "feature": "Bullhorn Creative",
            "values": [
              "Pricing undisclosed; branding-led web builds for Nashville brands",
              "$3,999 (Growth tier) — 7-day delivery",
              "FactoryJet delivers a fully coded Next.js site in 7 days with published pricing; Bullhorn's timeline and rates are not publicly stated."
            ]
          },
          {
            "feature": "Southern Web Group",
            "values": [
              "Pricing undisclosed; WordPress-based digital + web builds",
              "$3,999 (Growth tier) — 7-day delivery",
              "Next.js vs WordPress means faster load times and no monthly plugin overhead. FactoryJet publishes all pricing before the first call."
            ]
          }
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Nashville Businesses"}
        lead={"Nashville agency rates for comparable web projects run $5,000–$12,000. FactoryJet Growth ($3,999) delivers 10–15 pages, CMS, SEO, and analytics — with 7-day delivery, Next.js, and code you own outright. No retainer required. No proprietary platform. No surprise invoices."}
        tiers={[
          {
            "name": "Starter",
            "priceRange": "$1,999",
            "description": "A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local Nashville businesses who need a credible online presence quickly.",
            "features": [
              "5 pages, mobile-responsive",
              "Basic SEO & schema markup",
              "Contact form with email forwarding",
              "2 revision rounds",
              "30-day post-launch support"
            ],
            "cta": {"label": "Get a quote", "href": "/contact"}
          },
          {
            "name": "Growth",
            "priceRange": "$3,999",
            "description": "A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Nashville SMBs scaling online who need the site to actively generate qualified inquiries.",
            "features": [
              "10–15 pages with blog CMS",
              "Advanced SEO & GA4 tracking",
              "Lead capture & email automation",
              "3 revision rounds",
              "30-day support + training session"
            ],
            "cta": {"label": "Get a quote", "href": "/contact"},
            "popular": true
          },
          {
            "name": "Custom",
            "priceRange": "$7,500+",
            "description": "Custom Next.js build with e-commerce, booking systems, AI features, API integrations, and priority support. Best for established Nashville businesses with complex requirements and a real digital revenue line.",
            "features": [
              "Custom Next.js architecture",
              "E-commerce or booking integrations",
              "AI integrations (chat, search, content)",
              "Third-party API connections",
              "Priority support & quarterly reviews"
            ],
            "cta": {"label": "Get a quote", "href": "/contact"}
          }
        ] as const}
      />
      <IndustriesGrid
        eyebrow={"NASHVILLE × WEB DESIGN"}
        headline={"Web Design for Nashville's Key Industries"}
        lead={"From healthcare IT vendors to Broadway venue operators, Nashville's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {
            "name": "Healthcare IT & Life Sciences",
            "description": "Nashville is the #1 US city for healthcare IT. HCA Healthcare ($60B revenue), Vanderbilt University Medical Center, and Change Healthcare anchor an ecosystem of vendors, SaaS platforms, and professional services firms. Sites in this space need to demonstrate technical depth, compliance awareness, and case study credibility — and lead-capture flows that route to the right person fast.",
            "example": "Vendors, SaaS platforms, and consulting firms serving HCA Healthcare, Vanderbilt, or the Change Healthcare ecosystem."
          },
          {
            "name": "Hospitality & Tourism",
            "description": "Nashville draws 15M+ annual visitors — and every hotel, venue, tour operator, and experience brand is competing for that traffic. Sites need to convert mobile visitors from Google Maps and social in seconds, with fast booking flows, event calendars, and performance that holds up on spotty venue Wi-Fi.",
            "example": "Hotels, vacation rentals, tour operators, event venues, and hospitality brands serving Nashville's 15M+ annual visitors."
          },
          {
            "name": "Music & Entertainment",
            "description": "Nashville's music economy generates $10B+ annually, supporting record labels, recording studios, artist management firms, licensing agencies, and creative businesses of every scale. These brands need websites that project creative credibility while driving real commercial outcomes — portfolio depth, booking inquiries, and licensing leads.",
            "example": "Record labels, recording studios, artist management firms, music licensing agencies, and entertainment brands."
          },
          {
            "name": "Professional & Business Services",
            "description": "Nashville's corporate relocation wave — driven by companies leaving high-tax states — has created a fast-growing professional services market: law firms, consulting firms, financial advisors, staffing agencies, and marketing companies. For these businesses, the website is the first qualification filter. We build lead-capture flows and authority-building content structures that turn visitors into booked calls.",
            "example": "Law firms, consulting firms, financial advisors, and business services companies supporting Nashville's corporate relocation wave."
          },
          {
            "name": "Real Estate & Construction",
            "description": "Nashville's building boom is one of the most visible in the South. Developers, general contractors, real estate firms, and architecture practices are competing for buyers and project leads in a market where inventory moves fast. We build sites with project portfolio galleries, lead capture, and local SEO targeting Nashville's high-demand neighborhoods and submarkets.",
            "example": "Developers, general contractors, real estate agencies, and architecture firms operating in Nashville's booming construction market."
          }
        ]}
      />
      <TestimonialsSection
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Nashville and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Nashville Businesses"}
        items={[
          {
            "question": "How much does a website cost for a small business in Nashville?",
            "answer": "Most Nashville small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce, booking systems, or AI features start at $7,500. Local Nashville agency rates for equivalent scope typically run $5,000–$12,000 — often without a published timeline or a codebase you own."
          },
          {
            "question": "How long does it take to build a website?",
            "answer": "A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven. We do not start the clock until your brand assets and content are in our shared workspace."
          },
          {
            "question": "What's included in a web design project?",
            "answer": "Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."
          },
          {
            "question": "How long until my new site ranks on Google?",
            "answer": "Branded searches (your business name) usually rank within one to two weeks of launch. Service plus location queries like 'web design Nashville' typically take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch."
          },
          {
            "question": "We're a healthcare IT vendor in Nashville — can you build B2B websites for that sector?",
            "answer": "Yes. Healthcare IT is one of our most common client profiles in Nashville. We build sites that communicate technical depth and compliance awareness to buyers in the HCA Healthcare, Vanderbilt, and Change Healthcare ecosystems — who research thoroughly before any sales call. That means clear capability pages, case study structures, and lead-capture flows designed for longer B2B sales cycles."
          },
          {
            "question": "Can you build a website for a hospitality or event business in Nashville?",
            "answer": "Yes. Nashville's hospitality and event businesses need sites optimized for mobile visitors arriving from Google Maps and social — often making decisions in seconds. We build fast booking flows, event calendar integrations, and mobile-first designs that perform even on spotty venue Wi-Fi. Every project includes local SEO targeting Nashville's visitor-heavy neighborhoods and districts."
          },
          {
            "question": "I run a music industry business — labels, studios, artist management. Can you help?",
            "answer": "Yes. Nashville's music economy is one of our target verticals. We build sites for record labels, recording studios, artist management firms, and licensing agencies that balance creative credibility with commercial conversion — portfolio depth, inquiry forms, and streaming/social integrations where relevant."
          },
          {
            "question": "How does FactoryJet compare to Nashville agencies like Bullhorn Creative or Southern Web Group?",
            "answer": "Bullhorn Creative and Southern Web Group are established Nashville shops. Neither publishes pricing or a delivery timeline publicly. FactoryJet publishes all three tiers upfront, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — which means faster load times and no ongoing plugin maintenance costs for your team. You can compare our scope and price against any Nashville agency before you speak to us."
          }
        ]}
      />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Nashville Website?"}
        sub={"Nashville's $130B+ metro economy is growing faster than almost any city in America. New businesses arrive every week competing for the same buyers, the same Google rankings, and the same first impression. Every week without a high-performing website is ground you're giving up. Start today and have a sitemap ready within 72 hours."}
        primaryCta={{ label: "Start Your Project", href: '/contact' }}
      />
      <SchemaScript />
    </main>
  );
}

function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://factoryjet.com/us/nashville/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Nashville",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/nashville/web-design#service",
        "name": "Web Design Nashville",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Nashville",
        "description": "FactoryJet builds fast, conversion-focused websites for Nashville businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/nashville/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Nashville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Nashville small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce, booking systems, or AI features start at $7,500. Local Nashville agency rates for equivalent scope typically run $5,000–$12,000."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard FactoryJet build delivers in 7 days from kickoff to launch. We do not start the clock until your brand assets and content are in our shared workspace."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in a web design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session."
            }
          },
          {
            "@type": "Question",
            "name": "How long until my new site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches usually rank within one to two weeks of launch. Service plus location queries like 'web design Nashville' typically take three to six months for a new domain. The work that compresses this timeline is built into every FactoryJet project."
            }
          },
          {
            "@type": "Question",
            "name": "We're a healthcare IT vendor in Nashville — can you build B2B websites for that sector?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Healthcare IT is one of our most common client profiles in Nashville. We build sites that communicate technical depth and compliance awareness to buyers in the HCA Healthcare, Vanderbilt, and Change Healthcare ecosystems, with lead-capture flows designed for longer B2B sales cycles."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a website for a hospitality or event business in Nashville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build fast booking flows, event calendar integrations, and mobile-first designs optimized for Nashville's hospitality and event businesses — built to convert mobile visitors from Google Maps and social in seconds."
            }
          },
          {
            "@type": "Question",
            "name": "I run a music industry business in Nashville. Can you help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build sites for record labels, recording studios, artist management firms, and licensing agencies that balance creative credibility with commercial conversion — portfolio depth, inquiry forms, and streaming/social integrations where relevant."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Nashville agencies like Bullhorn Creative or Southern Web Group?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither publishes pricing or a delivery timeline publicly. FactoryJet publishes all three tiers upfront, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — which means faster load times and no ongoing plugin maintenance costs for your team."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/nashville/web-design#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://factoryjet.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "United States",
            "item": "https://factoryjet.com/us"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Nashville",
            "item": "https://factoryjet.com/us/nashville"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Web Design",
            "item": "https://factoryjet.com/us/nashville/web-design"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
