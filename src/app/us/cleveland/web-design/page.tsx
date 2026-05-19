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
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Web Design Cleveland | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Cleveland businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/cleveland/web-design',
    languages: webDesignPriorityCityAlternatesUS.cleveland,
  },
};


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];

export default function ClevelandWebDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-fj-cream">
        <Hero
          eyebrow={"WEB DESIGN · CLEVELAND"}
          headline={"Web Design in Cleveland That Turns Visitors Into Paying Clients"}
          lead={"Cleveland is one of America's most underestimated business cities — a global healthcare hub, a 200-year-old manufacturing powerhouse, and a fast-growing professional services market. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
          primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
          trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
          rightSlot={<HeroBrowserMockup />}
        />
        <LogoBar
          tagline="Trusted by 500+ businesses across the US, UK, and UAE"
        />
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline={"Results that Cleveland businesses trust."}
        />
        <CityContextSection
          eyebrow={"CLEVELAND MARKET"}
          headline={"Why Your Cleveland Web Presence Can't Be an Afterthought"}
          leadParagraphs={["Cleveland's city population sits at approximately 383,000, but the Greater Cleveland MSA reaches 2M+ residents and generates $135B+ in GDP — making it one of the Midwest's most significant economic anchors. Cleveland punches far above its population weight. Cleveland Clinic is ranked the world's #2 hospital system and a global pioneer of open-heart surgery, anchoring an entire ecosystem of healthcare vendors, biomedical suppliers, and professional services firms that depend on strong digital credibility to win contracts. University Hospitals, Medical Mutual, and a growing biomedical corridor in University Circle add further depth to this healthcare economy. On the corporate side, Sherwin-Williams, Parker Hannifin, Eaton, KeyBank, Progressive Insurance, and Rockwell Automation all have their headquarters in or around Cleveland — creating an enormous B2B supplier market where a weak website costs you real contracts. Meanwhile, MidTown and University Circle are emerging as legitimate tech corridors, Ohio City and Tremont are seeing significant real estate and hospitality investment, and Cleveland's sports culture — the Browns, Guardians, and Cavaliers — supports an entire ecosystem of sports-adjacent businesses. New businesses are arriving in Cleveland every week, competing for the same buyers, the same Google rankings, and the same first impression online."]}
          stats={[
            {"value":"383,000","label":"Cleveland City Population","sourceUrl":"https://www.census.gov/quickfacts/fact/table/clevelandcityohio/PST045224"},
            {"value":"$135B+","label":"Greater Cleveland MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP17460"},
            {"value":"#2","label":"Cleveland Clinic World Hospital Ranking","sourceUrl":"https://health.usnews.com/health-care/best-hospitals/articles/best-hospitals-honor-roll-and-overview"}
          ]}
        />
        <ServiceExplanation
          eyebrow={"WEB DESIGN · Cleveland"}
          headline={"What 'Web Design' Actually Means for a Cleveland Business"}
          lead={"Cleveland's economy splits between two dominant categories: B2B-heavy sectors (healthcare, manufacturing, financial services) where buyers research extensively before any call, and consumer-facing businesses (hospitality, retail, restaurants near West Side Market and East 4th Street) where trust is built in seconds on mobile. Both require different web strategies — and FactoryJet builds for both."}
          body={<><p>For healthcare vendors, Cleveland Clinic ecosystem suppliers, University Hospitals partners, and professional services firms — a website needs to demonstrate compliance awareness, technical depth, and verifiable case study evidence. Procurement teams at institutions like Cleveland Clinic evaluate vendors long before picking up the phone. We structure sites to answer those due-diligence questions clearly, with lead-capture forms that route to the right person immediately and content architecture that builds credibility at every scroll depth.</p><p>For manufacturers, Parker Hannifin and Eaton ecosystem suppliers, and B2B industrial firms — sites need to communicate engineering credibility, certifications, production capabilities, and industry-specific case studies. These are not brochure sites; they are qualification tools used by procurement managers across the supply chain. For consumer-facing businesses near Ohio City, Tremont, Detroit Shoreway, and downtown Cleveland — restaurants, retailers, hospitality brands, and service businesses — sites need to convert mobile visitors from Google Maps and social in seconds, with fast booking flows and mobile-first performance. Every FactoryJet project covers discovery, Figma prototyping, Next.js development, content, SEO, GA4 analytics, and a 30-day support window. You leave with a codebase you own, a design system you keep, and a site built to rank — not just look good in a mockup.</p></>}
          rightSlot={<img src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
        />
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline={"Why Cleveland Businesses Choose FactoryJet Over Local Agencies"}
          lead={"Cleveland's local agency market includes Agency Creative (full-service digital, no published pricing), Tiller Digital (a WordPress-heavy established shop), and even accounting firms like Skoda Minotti that have moved into web services. None publish a 7-day delivery commitment. FactoryJet's Growth tier ($3,999) covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session — 50–60% below the Cleveland agency benchmark for comparable scope. We build in Next.js, not WordPress, which means faster load times and no monthly plugin maintenance overhead for your team.\n\nWe don't win on price alone. Every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one. No lock-in. No proprietary platform. No surprise invoices after launch. And unlike most Cleveland agencies, we publish all three pricing tiers before you ever book a call."}
          pillars={[
            { title: 'AI-native', body: 'Every site is built with an AI-assisted workflow that compresses build time without compressing quality. We have delivered 500+ projects through this system.' },
            { title: 'Transparent', body: 'Pricing on the first call. No discovery fees, no "it depends" quotes that take three weeks to arrive. Fixed price, agreed up front.' },
            { title: 'Guaranteed', body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
          ]}
        />
        <ServiceJourneyRow
          eyebrow={"OUR PROCESS"}
          headline={"How We Build Your Cleveland Website in 7 Days"}
          stages={[
            {
              "number": "01",
              "title": "Discovery & Strategy",
              "description": "We map your ideal customer profile against Cleveland's market dynamics — whether that's healthcare procurement cycles, industrial B2B sales funnels, or hospitality conversion flows near West Side Market. We audit your top three competitors and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do. — Days 1–2"
            },
            {
              "number": "02",
              "title": "Design & Prototyping",
              "description": "Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. For Cleveland's manufacturing and healthcare clients, we prioritize authority signals and structured content hierarchy. For consumer-facing businesses, we focus on thumb-friendly mobile layouts and fast conversion paths. — Days 3–4"
            },
            {
              "number": "03",
              "title": "Development",
              "description": "We build in Next.js with GSAP animations, headless CMS integration, contact and inquiry forms, and any third-party APIs your business relies on. Performance budgets are enforced from the first commit — not retrofitted after launch. — Days 5–6"
            },
            {
              "number": "04",
              "title": "Content & SEO",
              "description": "Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit your sitemap to Google Search Console and verify rendering for AI crawlers. Cleveland-specific local SEO targeting is baked in, not sold as an add-on. — Days 6–7"
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
          headline={"What Cleveland businesses look like after FactoryJet."}
          cards={[
            {
              "industry": "Healthcare & Medical",
              "title": "Cleveland Healthcare & Medical Client",
              "description": "Cleveland's healthcare ecosystem — anchored by Cleveland Clinic (#2 hospital in the world), University Hospitals, and Medical Mutual — demands websites that project compliance awareness, clinical credibility, and technical depth. We build sites for vendors, suppliers, and professional services firms in this ecosystem that convert B2B researchers into booked discovery calls.",
              "imageSrc": "/images/us/cleveland/web-design/portfolio-1.webp",
              "stat1": "+40% conversions",
              "stat2": "< 1.5s load time"
            },
            {
              "industry": "Manufacturing & Industrial",
              "title": "Cleveland Manufacturing & Industrial Client",
              "description": "Cleveland is one of America's great manufacturing cities. Parker Hannifin, Eaton, Rockwell Automation, and the broader aerospace and industrial equipment supply chain need websites that communicate engineering capability, certifications, and case study evidence to procurement teams. We build sites that qualify suppliers — not just describe them.",
              "imageSrc": "/images/us/cleveland/web-design/portfolio-2.webp",
              "stat1": "+40% conversions",
              "stat2": "< 1.5s load time"
            },
            {
              "industry": "Professional & Financial Services",
              "title": "Cleveland Professional & Financial Services Client",
              "description": "KeyBank, Progressive Insurance, and Sherwin-Williams anchor Cleveland's professional services ecosystem — supporting law firms, consulting firms, financial advisors, insurance brokers, and specialty service businesses. These clients need sites that function as the first qualification filter for sophisticated B2B buyers, with authority-building content and lead capture that routes inquiries to the right person fast.",
              "imageSrc": "/images/us/cleveland/web-design/portfolio-3.webp",
              "stat1": "+40% conversions",
              "stat2": "< 1.5s load time"
            }
          ]}
          ctaHref="/us/portfolio"
          ctaLabel="View full portfolio"
        />
        <ComparisonTable
          eyebrow={"WHY FACTORYJET"}
          headline={"FactoryJet vs. Cleveland Web Agencies"}
          lead={"Cleveland's local agency market includes Agency Creative, Tiller Digital, and even accounting firms like Skoda Minotti that offer web services. None publish a 7-day delivery commitment or a complete public price list. FactoryJet Growth ($3,999) delivers 10–15 pages, blog CMS, lead capture, GA4, and Next.js — 50–60% below the Cleveland agency benchmark for the same scope, with a guaranteed timeline and a codebase you own outright."}
          columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
          rows={[
            {
              "feature": "Agency Creative",
              "values": [
                "Pricing undisclosed; full-service digital for Cleveland brands",
                "$3,999 (Growth tier) — 7-day delivery",
                "FactoryJet delivers a fully coded Next.js site in 7 days with published pricing; Agency Creative's timeline and rates are not publicly stated."
              ]
            },
            {
              "feature": "Tiller Digital",
              "values": [
                "Pricing undisclosed; WordPress-heavy established Cleveland shop",
                "$3,999 (Growth tier) — 7-day delivery",
                "Next.js vs WordPress means faster load times and no monthly plugin overhead. FactoryJet publishes all pricing before the first call."
              ]
            },
            {
              "feature": "Skoda Minotti (web services)",
              "values": [
                "Accounting firm offering web services; no published web pricing",
                "$3,999 (Growth tier) — 7-day delivery",
                "FactoryJet is a dedicated web design and development team — web is the entire focus, not a side service attached to an accounting practice."
              ]
            }
          ]}
        />
        <IndustriesGrid
          eyebrow={"CLEVELAND × WEB DESIGN"}
          headline={"Web Design for Cleveland's Key Industries"}
          lead={"From healthcare vendors in the Cleveland Clinic ecosystem to manufacturing suppliers for Parker Hannifin and Eaton, Cleveland's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
          sectors={[
            {
              "name": "Healthcare & Biomedical",
              "description": "Cleveland Clinic is ranked #2 in the world and pioneered open-heart surgery. University Hospitals, Medical Mutual, and a growing biomedical corridor in University Circle support an enormous vendor ecosystem. Sites in this space need to demonstrate compliance awareness, clinical credibility, and technical depth — with lead-capture flows designed for longer institutional procurement cycles.",
              "example": "Vendors, suppliers, and professional services firms serving Cleveland Clinic, University Hospitals, or the Greater Cleveland biomedical corridor."
            },
            {
              "name": "Manufacturing & Industrial",
              "description": "Parker Hannifin, Eaton, and Rockwell Automation are headquartered in or near Cleveland, anchoring one of America's most significant industrial supply chains. Aerospace, industrial equipment, polymer, and specialty manufacturing businesses need sites that communicate engineering capability, certifications, and production capacity to procurement teams — not marketing copy written for consumers.",
              "example": "Aerospace, industrial equipment, polymer, and specialty manufacturing firms supplying Parker Hannifin, Eaton, and the broader Cleveland industrial ecosystem."
            },
            {
              "name": "Financial & Insurance Services",
              "description": "KeyBank and Progressive Insurance are major Cleveland-headquartered financial institutions, supporting a wide ecosystem of financial advisors, insurance brokers, law firms, and specialty consultants. For these businesses, the website is the first qualification filter for sophisticated clients — requiring authority-building content and conversion flows that route inquiries immediately.",
              "example": "Financial advisors, insurance brokers, law firms, and consulting firms serving the KeyBank and Progressive Insurance ecosystem."
            },
            {
              "name": "Professional Services",
              "description": "Sherwin-Williams headquarters its global operations in Cleveland, and a wave of corporate activity across Ohio City and downtown has fueled growth in legal, consulting, staffing, and marketing services firms. These businesses need websites that communicate expertise clearly, build trust with corporate buyers, and generate qualified inbound leads consistently.",
              "example": "Law firms, consulting firms, staffing agencies, and marketing companies serving Cleveland's corporate and professional services market."
            },
            {
              "name": "Technology & Startups",
              "description": "MidTown and University Circle are emerging as Cleveland's legitimate tech corridors, supported by institutions like Case Western Reserve University and a growing number of venture-backed startups. Tech companies need sites that project credibility quickly, communicate product differentiation clearly, and generate inbound leads or user signups at launch.",
              "example": "SaaS startups, tech consultancies, and venture-backed companies scaling from Cleveland's MidTown and University Circle tech corridors."
            },
            {
              "name": "Real Estate & Hospitality",
              "description": "Ohio City, Tremont, and Detroit Shoreway are experiencing significant real estate and hospitality investment, while Cleveland's broader restaurant and entertainment scene continues to grow around West Side Market, East 4th Street, and the Rock & Roll Hall of Fame district. These businesses need mobile-first sites that convert visitors from Google Maps in seconds — with fast booking flows and local SEO that targets Cleveland's neighborhood-level searches.",
              "example": "Real estate developers, hospitality brands, restaurants, and entertainment businesses operating in Ohio City, Tremont, Detroit Shoreway, and downtown Cleveland."
            }
          ]}
        />
        <PricingTiers
          eyebrow={"TRANSPARENT PRICING"}
          headline={"Transparent Pricing for Cleveland Businesses"}
          lead={"Cleveland agency rates for comparable web projects run $5,000–$15,000. FactoryJet Growth ($3,999) delivers 10–15 pages, CMS, SEO, and analytics — with 7-day delivery, Next.js, and code you own outright. No retainer required. No proprietary platform. No surprise invoices."}
          tiers={[
            {
              "name": "Starter",
              "priceRange": "$1,999",
              "description": "A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local Cleveland businesses who need a credible online presence quickly.",
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
              "description": "A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Cleveland SMBs scaling online who need the site to actively generate qualified inquiries.",
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
              "description": "Custom Next.js build with e-commerce, booking systems, AI features, API integrations, and priority support. Best for established Cleveland businesses with complex requirements and a real digital revenue line.",
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
        <TestimonialsSection
          eyebrow="WHAT CLIENTS SAY"
          headline={"4.9/5 across 150+ reviews from Cleveland and beyond."}
        />
        <FAQ
          eyebrow="COMMON QUESTIONS"
          headline={"Common Questions from Cleveland Businesses"}
          categories={FAQ_CATEGORIES}
        items={[{"question":"How much does a website cost for a small business in Cleveland?","answer":"Most Cleveland small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce, booking systems, or AI features start at $7,500. Local Cleveland agency rates for equivalent scope typically run $5,000–$15,000 — often without a published timeline or a codebase you own.","category":"pricing"},{"question":"How long does it take to build a website?","answer":"A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and design take the first two days, development runs through days five and six, and content, SEO, and launch happen on day seven. We do not start the clock until your brand assets and content are in our shared workspace.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) usually rank within one to two weeks of launch. Service plus location queries like 'web design Cleveland' typically take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch.","category":"pricing"},{"question":"We're a vendor or supplier in the Cleveland Clinic ecosystem — can you build HIPAA-aware B2B websites for healthcare?","answer":"Yes. Healthcare is one of our most common client profiles in Cleveland. Cleveland Clinic is the world's #2 hospital, and the vendors, suppliers, and professional services firms in its ecosystem need sites that communicate technical depth, compliance awareness, and verifiable case study evidence to institutional procurement buyers. We build sites structured for those longer B2B due-diligence cycles — with lead-capture flows designed to route inquiries to the right person fast.","category":"platform"},{"question":"We supply Parker Hannifin, Eaton, or other Cleveland manufacturers — what does a manufacturing B2B website need?","answer":"Manufacturing B2B sites need to communicate engineering credibility, production certifications (ISO, AS9100, etc.), capabilities, and case studies to procurement managers who evaluate multiple suppliers simultaneously. We build sites structured around your capabilities and certifications — not generic marketing copy — with downloadable spec sheets, inquiry forms, and content architecture that answers procurement questions before the RFQ stage.","category":"platform"},{"question":"I run a law firm in Cleveland — what do I need from a website?","answer":"Law firm sites in Cleveland need clear practice area pages, attorney bios with credentials, case result summaries (where permitted by Ohio bar rules), and a lead-capture flow that routes inquiries to the right attorney by practice area. We also handle local SEO targeting Cleveland's legal search queries — which are highly competitive and highly valuable. Schema markup for law firms is included in every project.","category":"local"},{"question":"I own a restaurant or bar near West Side Market or East 4th Street — what does a good website need?","answer":"For Cleveland's food and beverage scene, the essentials are: a fast-loading mobile menu, a reservation or waitlist integration (OpenTable, Resy, or custom flow), event calendar support for live entertainment nights, and Google Maps / Apple Maps schema so you show up correctly in local search. We also build private dining or buyout inquiry forms, which drive significant additional revenue for venues that don't surface them properly.","category":"local"},{"question":"I'm in real estate or development in Ohio City, Tremont, or Detroit Shoreway — what do I need from a site?","answer":"Cleveland's real estate boom in Ohio City, Tremont, and Detroit Shoreway has created a highly competitive online market. Real estate and development sites need project portfolio galleries, neighborhood-specific landing pages, lead-capture forms that route inquiries immediately, and local SEO targeting Cleveland's high-demand submarkets. For developers, a project pipeline page with renderings and status updates can significantly reduce inbound inquiry load on your team.","category":"local"},{"question":"We're in financial services — KeyBank or Progressive Insurance ecosystem vendors. What does our website need?","answer":"Financial services and insurance ecosystem firms need sites that project credibility to sophisticated corporate buyers — with clear service pages, team credentials, case study structures, and compliance-aware messaging. We also build lead-capture flows optimized for longer B2B sales cycles, where the goal is a booked call rather than an immediate transaction. GA4 is wired up from day one so you know which pages are converting.","category":"local"},{"question":"We're a tech startup based in University Circle or MidTown Cleveland. What do we need from a launch website?","answer":"Tech startup sites need to communicate product differentiation quickly, build credibility with investors and early customers, and generate either inbound leads or user signups. We build with Next.js for maximum performance, include structured data for AI search crawlers, and design conversion flows around your specific acquisition goal — whether that's a demo request, a waitlist signup, or a direct trial conversion.","category":"local"},{"question":"How does FactoryJet compare to Cleveland agencies like Agency Creative or Tiller Digital?","answer":"Agency Creative and Tiller Digital are established Cleveland shops. Neither publishes pricing or a delivery timeline publicly. FactoryJet publishes all three tiers upfront, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — which means faster load times and no ongoing plugin maintenance costs for your team. You can compare our scope and price against any Cleveland agency before you speak to us.","category":"local"},{"question":"What about Skoda Minotti — they offer web services as part of accounting?","answer":"Skoda Minotti is a respected Cleveland accounting and advisory firm. Web services are a side offering for them. FactoryJet is a dedicated web design and development team — web is our entire focus, not something bolted onto another service line. That focus means faster delivery, deeper technical expertise, and a support structure built specifically for web projects.","category":"local"},{"question":"Do I own the website after it's built, or am I locked into a platform?","answer":"You own everything — the Next.js codebase, the Figma design files, and the hosting configuration. There is no proprietary CMS lock-in, no mandatory retainer, and no monthly platform fee. You can take the code to any developer or hosting provider at any time. Most clients choose to stay with us for ongoing work, but that's always their call.","category":"platform"},{"question":"What tech stack do you build on, and why does it matter for my Cleveland business?","answer":"We build on Next.js deployed to Cloudflare Pages, with a headless CMS for content editing. Next.js produces static pages that load significantly faster than WordPress — typically under 1.5 seconds on mobile — which directly affects Google rankings and visitor bounce rates. For Cleveland businesses competing on local search in high-value sectors like healthcare and manufacturing, that performance gap over a WordPress competitor is a real and measurable advantage.","category":"local"},{"question":"Can you add e-commerce to a Cleveland business website?","answer":"Yes. Whether you need a simple product catalog with Stripe checkout, a full Shopify integration, or a custom e-commerce build, we handle it at the Custom tier ($7,500+). Cleveland retail businesses — particularly in Ohio City, Tremont, and the broader Greater Cleveland area — frequently need both a physical store presence and an online sales channel in one site. We architect that so it doesn't feel bolted on.","category":"technical"},{"question":"Can you build a Shopify store for a Cleveland retail or DTC brand?","answer":"Yes. Shopify builds for Cleveland retail and DTC brands are part of our standard service offering. We handle theme customization, product migration, payment setup, shipping configuration, and local SEO for Shopify stores. For brands that need both a Shopify storefront and a content-heavy marketing site, we build both and connect them cleanly.","category":"platform"},{"question":"What AI features can you add to a Cleveland business website?","answer":"Common AI integrations include site-search powered by vector embeddings, AI chat assistants trained on your services and FAQs, and AI-assisted content tools for blog or product descriptions. These are typically part of Custom tier projects. For Cleveland's healthcare IT vendors and manufacturing B2B firms, AI-assisted knowledge bases and spec-search tools are particularly strong fits for complex technical products.","category":"technical"},{"question":"How does my site perform on mobile? Cleveland visitors search on their phones constantly.","answer":"Mobile-first is the default, not an afterthought. Every FactoryJet build targets Lighthouse 100/100 and green Core Web Vitals on mobile. Whether your customers are searching on their phones outside West Side Market, at a sports venue before a Guardians game, or comparing suppliers on a tablet in a manufacturing facility, mobile performance is non-negotiable and tested before launch.","category":"technical"},{"question":"How does Cleveland local SEO work and what do you include?","answer":"Every FactoryJet project includes on-page SEO foundations: proper heading structure, meta tags, XML sitemap, JSON-LD schema with local business markup, image optimization, and Core Web Vitals performance. For Cleveland-specific local SEO, we target your primary service area — including neighborhood-level landing pages for Ohio City, Tremont, University Circle, Detroit Shoreway, and the broader MSA suburbs if relevant to your business.","category":"included"},{"question":"Can you be flexible on the 7-day timeline if we need more time for approvals?","answer":"The 7-day clock starts when we have everything we need from you — brand assets, copy inputs, and stakeholder approvals. If your internal process requires longer review cycles, we can agree a phased schedule upfront. The guarantee still applies to the development phase we control. We flag this in the kickoff so there are no surprises.","category":"pricing"},{"question":"What does your design process actually look like from the client's side?","answer":"After a kickoff call, you'll receive a Figma prototype for review — typically within 48 hours. You review it, leave comments directly in Figma, and we revise. Most clients go through two rounds of design review before development starts. You always see what you're getting before a line of code is written. Nothing ships that you haven't approved.","category":"local"},{"question":"What is GA4 and do I actually need it?","answer":"GA4 is Google's current analytics platform — it replaced Universal Analytics in 2023 and tracks who visits your site, which pages they read, and whether they fill out your contact form. Every FactoryJet project includes GA4 wired up before launch, with the key conversion events already configured. You get a plain-English walkthrough in the handover session so you know what you're looking at without needing to be a data analyst.","category":"technical"},{"question":"What hosting does FactoryJet use and is it included?","answer":"We deploy to Cloudflare Pages, which provides enterprise-grade CDN performance at no monthly cost for most projects. Cloudflare's global edge network means your Cleveland site loads fast whether your visitor is in Ohio City, Columbus, Chicago, or anywhere else in the US. Hosting setup, DNS configuration, and SSL are included in every project — there is no separate hosting invoice at launch.","category":"technical"}]}
        />
        <FinalCTA
          variant="dark"
          eyebrow={"READY TO START"}
          headline={"Ready to Build Your Cleveland Website?"}
          sub={"Cleveland's $135B+ metro economy is growing on the strength of world-class healthcare, deep manufacturing roots, and a fast-expanding professional services market. New businesses arrive every week competing for the same buyers, the same Google rankings, and the same first impression. Every week without a high-performing website is ground you're giving up. Start today and have a sitemap ready within 72 hours."}
          primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        />
        <SchemaScript />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}

function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://factoryjet.com/us/cleveland/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Cleveland",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/cleveland/web-design#service",
        "name": "Web Design Cleveland",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Cleveland",
        "description": "FactoryJet builds fast, conversion-focused websites for Cleveland businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/cleveland/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Cleveland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Cleveland small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce, booking systems, or AI features start at $7,500. Local Cleveland agency rates for equivalent scope typically run $5,000–$15,000."
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
              "text": "Branded searches usually rank within one to two weeks of launch. Service plus location queries like 'web design Cleveland' typically take three to six months for a new domain. The work that compresses this timeline is built into every FactoryJet project."
            }
          },
          {
            "@type": "Question",
            "name": "We're a vendor in the Cleveland Clinic ecosystem — can you build HIPAA-aware B2B websites for healthcare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Healthcare is one of our most common client profiles in Cleveland. We build sites structured for longer B2B due-diligence cycles — with lead-capture flows designed to route inquiries to the right person fast, and content that communicates compliance awareness and technical depth to institutional procurement buyers."
            }
          },
          {
            "@type": "Question",
            "name": "We supply Parker Hannifin, Eaton, or other Cleveland manufacturers — what does a manufacturing B2B website need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Manufacturing B2B sites need to communicate engineering credibility, production certifications, capabilities, and case studies to procurement managers. We build sites structured around your capabilities and certifications — with downloadable spec sheets, inquiry forms, and content architecture that answers procurement questions before the RFQ stage."
            }
          },
          {
            "@type": "Question",
            "name": "I run a law firm in Cleveland — what do I need from a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Law firm sites in Cleveland need clear practice area pages, attorney bios with credentials, case result summaries where permitted, and a lead-capture flow that routes inquiries to the right attorney by practice area. We handle local SEO targeting Cleveland's legal search queries and include schema markup for law firms in every project."
            }
          },
          {
            "@type": "Question",
            "name": "I own a restaurant near West Side Market or East 4th Street — what does a good website need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Cleveland's food and beverage scene, the essentials are: a fast-loading mobile menu, a reservation integration, event calendar support, and Google Maps schema so you show up correctly in local search. We also build private dining inquiry forms, which drive significant additional revenue for venues that don't surface them properly."
            }
          },
          {
            "@type": "Question",
            "name": "I'm in real estate in Ohio City, Tremont, or Detroit Shoreway — what do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Real estate and development sites need project portfolio galleries, neighborhood-specific landing pages, lead-capture forms that route inquiries immediately, and local SEO targeting Cleveland's high-demand submarkets. For developers, a project pipeline page with renderings and status updates can significantly reduce inbound inquiry load."
            }
          },
          {
            "@type": "Question",
            "name": "We're in financial services in the KeyBank or Progressive Insurance ecosystem. What does our website need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial services and insurance ecosystem firms need sites that project credibility to sophisticated corporate buyers — with clear service pages, team credentials, case study structures, and compliance-aware messaging. We build lead-capture flows optimized for longer B2B sales cycles, where the goal is a booked call rather than an immediate transaction."
            }
          },
          {
            "@type": "Question",
            "name": "We're a tech startup in University Circle or MidTown Cleveland. What do we need from a launch website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tech startup sites need to communicate product differentiation quickly, build credibility with investors and early customers, and generate inbound leads or user signups. We build with Next.js for maximum performance and design conversion flows around your specific acquisition goal — demo request, waitlist signup, or direct trial conversion."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Cleveland agencies like Agency Creative or Tiller Digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agency Creative and Tiller Digital are established Cleveland shops. Neither publishes pricing or a delivery timeline publicly. FactoryJet publishes all three tiers upfront, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — which means faster load times and no ongoing plugin maintenance costs for your team."
            }
          },
          {
            "@type": "Question",
            "name": "What about Skoda Minotti — they offer web services as part of accounting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Skoda Minotti is a respected Cleveland accounting firm. Web services are a side offering for them. FactoryJet is a dedicated web design and development team — web is our entire focus, not something bolted onto another service line. That focus means faster delivery and deeper technical expertise."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own the website after it's built, or am I locked into a platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You own everything — the Next.js codebase, the Figma design files, and the hosting configuration. There is no proprietary CMS lock-in, no mandatory retainer, and no monthly platform fee. You can take the code to any developer or hosting provider at any time."
            }
          },
          {
            "@type": "Question",
            "name": "What tech stack do you build on, and why does it matter for my Cleveland business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build on Next.js deployed to Cloudflare Pages, with a headless CMS for content editing. Next.js produces static pages that load significantly faster than WordPress — typically under 1.5 seconds on mobile — which directly affects Google rankings and visitor bounce rates."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add e-commerce to a Cleveland business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Whether you need a simple product catalog with Stripe checkout, a full Shopify integration, or a custom e-commerce build, we handle it at the Custom tier ($7,500+). Cleveland retail businesses frequently need both a physical store presence and an online sales channel — we architect that so it doesn't feel bolted on."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a Shopify store for a Cleveland retail or DTC brand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Shopify builds for Cleveland retail and DTC brands are part of our standard service offering. We handle theme customization, product migration, payment setup, shipping configuration, and local SEO for Shopify stores."
            }
          },
          {
            "@type": "Question",
            "name": "What AI features can you add to a Cleveland business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common AI integrations include site-search powered by vector embeddings, AI chat assistants trained on your services and FAQs, and AI-assisted content tools for blog or product descriptions. For Cleveland's healthcare IT vendors and manufacturing B2B firms, AI-assisted knowledge bases and spec-search tools are particularly strong fits."
            }
          },
          {
            "@type": "Question",
            "name": "How does my site perform on mobile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile-first is the default, not an afterthought. Every FactoryJet build targets Lighthouse 100/100 and green Core Web Vitals on mobile. Whether your customers are searching outside West Side Market, at a Guardians game, or comparing suppliers on a tablet in a manufacturing facility, mobile performance is non-negotiable and tested before launch."
            }
          },
          {
            "@type": "Question",
            "name": "How does Cleveland local SEO work and what do you include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes proper heading structure, meta tags, XML sitemap, JSON-LD schema with local business markup, image optimization, and Core Web Vitals performance. For Cleveland-specific local SEO, we target your primary service area — including neighborhood-level landing pages for Ohio City, Tremont, University Circle, and Detroit Shoreway if relevant."
            }
          },
          {
            "@type": "Question",
            "name": "Can you be flexible on the 7-day timeline if we need more time for approvals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 7-day clock starts when we have everything we need from you — brand assets, copy inputs, and stakeholder approvals. If your internal process requires longer review cycles, we can agree a phased schedule upfront. The guarantee still applies to the development phase we control."
            }
          },
          {
            "@type": "Question",
            "name": "What does your design process actually look like from the client's side?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After a kickoff call, you'll receive a Figma prototype for review — typically within 48 hours. You review it, leave comments directly in Figma, and we revise. Most clients go through two rounds of design review before development starts. Nothing ships that you haven't approved."
            }
          },
          {
            "@type": "Question",
            "name": "What is GA4 and do I actually need it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GA4 is Google's current analytics platform — it tracks who visits your site, which pages they read, and whether they fill out your contact form. Every FactoryJet project includes GA4 wired up before launch, with the key conversion events already configured. You get a plain-English walkthrough in the handover session so you know what you're looking at without needing to be a data analyst."
            }
          },
          {
            "@type": "Question",
            "name": "What hosting does FactoryJet use and is it included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages, which provides enterprise-grade CDN performance at no monthly cost for most projects. Cloudflare's global edge network means your Cleveland site loads fast whether your visitor is in Ohio City, Columbus, Chicago, or anywhere else in the US. Hosting setup, DNS configuration, and SSL are included in every project."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/cleveland/web-design#breadcrumbs",
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
            "name": "Cleveland",
            "item": "https://factoryjet.com/us/cleveland"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Web Design",
            "item": "https://factoryjet.com/us/cleveland/web-design"
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
