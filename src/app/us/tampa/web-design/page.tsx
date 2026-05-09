import type { Metadata } from 'next';
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
  title: 'Web Design Tampa | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Tampa businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/tampa/web-design',
  },
};

export default function TampaWebDesignPage() {
  return (
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · TAMPA"}
        headline={"Web Design in Tampa That Converts Visitors Into Clients"}
        lead={"Tampa Bay is one of Florida's fastest-growing business markets — healthcare, finance, defense contracting, and a booming tech scene all converging on the Gulf Coast. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
        primaryCta={{ label: "Start Your Project", href: '/contact' }}
        trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
        rightSlot={<HeroBrowserMockup />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Tampa businesses trust."}
      />
      <CityContextSection
        eyebrow={"TAMPA MARKET"}
        headline={"Why Your Tampa Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Tampa city population hit 403,000 in 2024, and the Tampa-St. Petersburg-Clearwater MSA generates $178B+ in GDP — one of the most economically diverse metros on the Gulf Coast. Healthcare alone is a dominant force: BayCare Health System employs 30,000+ people across the region, Moffitt Cancer Center holds its NCI designation as a leader in oncology research, and Tampa General Hospital anchors the downtown medical district. Raymond James Financial and AmeriLife are headquartered here, making Tampa a legitimate financial services hub. MacDill Air Force Base — home to CENTCOM and SOCOM — employs 15,000+ personnel and generates a substantial defense contractor market. The tech scene is accelerating, with ConnectWise and WillowTree calling Tampa home, joined by companies relocating from New York and the Bay Area. Hospitality and tourism round out the economy, with Busch Gardens, Hard Rock Hotel, and the Port of Tampa driving year-round visitor spending. Tampa is growing fast — and competition for established clients is intensifying across every sector."]}
        stats={[
          {"value":"403,000","label":"Tampa City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/tampacityflorida/PST045224"},
          {"value":"$178B+","label":"Tampa-St. Petersburg-Clearwater MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP45300"},
          {"value":"30,000+","label":"BayCare Health System Employees (Tampa Bay)","sourceUrl":"https://baycare.org/about-baycare/"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Tampa"}
        headline={"What 'Web Design' Actually Means for a Tampa Business"}
        lead={"Tampa's buyer mix is unusually diverse — defense contractors reading RFQ-eligible vendor sites, healthcare procurement teams vetting suppliers against BayCare and Moffitt standards, financial clients comparing RIAs and advisors, and hospitality guests making split-second mobile booking decisions. Each segment requires a different web strategy. FactoryJet builds for all of them."}
        body={<><p>Healthcare and life sciences vendors serving BayCare, Moffitt, Tampa General, and their supply chains need sites that project compliance and operational credibility — with clear service scope and case study evidence front and center. HIPAA-aware forms, professional photography, and clean navigation are non-negotiable. Procurement teams in this sector vet vendors digitally before any meeting is scheduled, and a weak web presence is often an automatic disqualification.</p><p>Finance, defense, and professional services firms — Raymond James ecosystem vendors, MacDill AFB defense contractors, legal and consulting firms — need authority-building content structures, RFQ or proposal request workflows, and technical credibility signals that meet the bar set by sophisticated institutional buyers. FactoryJet handles the full scope: strategy, design, development, content, SEO, and a codebase you own outright. No WordPress lock-in. No monthly plugin invoices.</p></>}
        rightSlot={<img src="/images/us/tampa/web-design/service-explanation.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Tampa Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Tampa has a solid bench of local web agencies. REQ operates nationally with a Tampa presence and focuses on digital marketing plus web. Bayshore Solutions is Tampa's most established web agency — known for WordPress and HubSpot builds — and publishes rates from $5,000. Digital Media Solutions is headquartered in Tampa and covers both digital marketing and web design.\n\nFactoryJet Growth ($3,999) delivers 10–15 pages with blog CMS, lead capture, GA4, and Next.js — at or below Bayshore's entry price, with a 7-day delivery guarantee and a codebase you own outright instead of a monthly-maintenance WordPress site. We don't win on price alone. We win because every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one. No lock-in. No proprietary platform. No surprise invoices after launch."}
        pillars={[
          { title: 'AI-native',    body: 'Every site is built with AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no \'it depends\' quotes that arrive three weeks later. Fixed price. Agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Tampa Website"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit the top three competitors in your Tampa market, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit, not retrofitted at launch. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimised WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Tampa businesses look like after FactoryJet."}
        cards={[
          {"industry":"Healthcare & Life Sciences","title":"Healthcare & Life Sciences Client","description":"BayCare, Moffitt Cancer Center, and Tampa General anchor one of Florida's largest healthcare ecosystems. Vendors, suppliers, and practice groups serving these institutions need sites that project compliance, operational credibility, and patient trust. We build with HIPAA-aware form design, clear service scope, and case study evidence that passes procurement scrutiny.","imageSrc":"/images/us/tampa/web-design/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Finance & Professional Services","title":"Finance & Professional Services Client","description":"Tampa's Raymond James ecosystem, financial advisory firms, RIAs, and professional services companies compete for clients who compare advisors and vendors digitally before making any contact. We build authority-driven sites with lead-capture flows, credential displays, and content structures that earn the meeting.","imageSrc":"/images/us/tampa/web-design/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Defense & Government Contracting","title":"Defense & Government Contracting Client","description":"MacDill AFB — home to CENTCOM and SOCOM — generates a substantial defense contractor market in the Tampa Bay area. Contractors need capability statement pages, RFQ request workflows, and technical credibility signals that meet the bar set by DoD procurement teams. We build sites that work as digital qualification tools.","imageSrc":"/images/us/tampa/web-design/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs Tampa's Top Web Agencies"}
        lead={"Bayshore Solutions is Tampa's most established web agency and publishes rates starting from $5,000. Digital Media Solutions (Tampa HQ) offers web design alongside digital marketing. Both are credible options — but neither publishes a 7-day delivery commitment or builds in Next.js as standard.\n\nFactoryJet Growth ($3,999) covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session. That's at or below Bayshore's entry price, with a faster timeline and a codebase that doesn't require monthly plugin maintenance."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Bayshore Solutions","values":["From $5,000 per published rate card","$3,999 (Growth tier)","FactoryJet delivers in 7 days on Next.js; Bayshore's timeline relies on WordPress and ongoing maintenance retainers."]},
          {"feature":"Digital Media Solutions","values":["Pricing undisclosed; Tampa-based digital marketing + web","$3,999 (Growth tier)","Next.js vs WordPress means faster load times and no ongoing plugin overhead. Fixed price, 7-day delivery."]},
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Tampa Businesses"}
        lead={"Tampa agencies like Bayshore Solutions start from $5,000 for web design. FactoryJet Growth ($3,999) delivers 10–15 pages, CMS, SEO, analytics — 7-day delivery, Next.js, code you own — at or below Bayshore's entry price. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"$1,999","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local Tampa businesses who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"$3,999","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Tampa SMBs scaling online who need the site to actively generate qualified inquiries.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"$7,500+","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established Tampa businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <IndustriesGrid
        eyebrow={"TAMPA × WEB DESIGN"}
        headline={"Web Design for Tampa's Key Industries"}
        lead={"From BayCare vendor teams to MacDill defense contractors, Tampa's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {"name":"Healthcare & Life Sciences","description":"BayCare Health System (30,000+ employees), Moffitt Cancer Center (NCI-designated), and Tampa General Hospital anchor one of Florida's largest healthcare ecosystems. Vendors, suppliers, healthcare IT firms, and practice groups serving these institutions need sites that project compliance, patient trust, and clear service scope. HIPAA-aware forms, professional photography, and clean navigation are table stakes.","example":"Vendors and practice groups serving BayCare, Moffitt, or Tampa General supply chains."},
          {"name":"Finance & Professional Services","description":"Raymond James Financial is headquartered in Tampa, joined by Synovus and AmeriLife. Financial advisors, RIAs, insurance professionals, and business services firms compete for clients who vet vendors digitally. We build authority-driven sites with lead-capture flows, credential displays, and compliance-conscious content structures.","example":"RIAs, financial advisory firms, and professional services vendors in the Tampa Bay market."},
          {"name":"Defense & Government Contracting","description":"MacDill AFB — home to CENTCOM and SOCOM — employs 15,000+ personnel and generates a large defense contractor ecosystem in the Tampa Bay area. Contractors need capability statement pages, RFQ request workflows, and technical credibility signals that satisfy DoD procurement teams.","example":"Defense contractors and government vendors supporting MacDill AFB operations."},
          {"name":"Technology & SaaS","description":"Tampa's tech scene is growing fast — ConnectWise, WillowTree, and a wave of companies relocating from New York and the Bay Area are building a real tech cluster on the Gulf Coast. SaaS companies and tech vendors need sites that communicate product depth, technical credibility, and conversion-optimized trial or demo flows.","example":"SaaS companies and tech vendors building in Tampa's emerging tech corridor."},
          {"name":"Hospitality & Tourism","description":"Busch Gardens, Hard Rock Hotel, and the Port of Tampa drive year-round visitor spending across the region. Hospitality businesses need mobile-first designs, fast booking flows, and SEO-optimized local content that captures guests making split-second decisions on their phones.","example":"Hotels, tour operators, and hospitality businesses serving the Tampa Bay tourism market."},
        ]}
      />
      <TestimonialsSection
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Tampa and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Tampa Businesses"}
        items={[
          {"question":"How much does a website cost for a small business in Tampa?","answer":"Most Tampa small businesses start with Starter ($1,999) for a clean five-page site or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500+. Tampa agencies like Bayshore Solutions publish rates from $5,000 for comparable scope — FactoryJet's Growth tier delivers the same output at or below that entry point."},
          {"question":"How long does it take to build a website?","answer":"A standard FactoryJet build runs 7 days from kickoff to launch. Discovery and design take Days 1–4, development runs Days 5–6, and content, SEO, and launch happen on Day 7. We do not start the clock until your brand assets and content are in our shared workspace."},
          {"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."},
          {"question":"How long until my new site ranks on Google?","answer":"Branded searches — your business name — usually rank within one to two weeks of launch. Service plus location queries like 'web design Tampa' typically take three to six months for a new domain. The work that compresses that timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on."},
          {"question":"We're a vendor in the BayCare or Moffitt Cancer Center supply chain. Can you build healthcare vendor sites?","answer":"Yes. Healthcare vendor sites need to project compliance and operational credibility — HIPAA-aware contact forms, clear service scope, case study evidence, and professional photography. We've built sites for healthcare IT firms, medical device vendors, and practice groups serving major health systems. We understand what procurement teams are looking for before they pick up the phone."},
          {"question":"We're a defense contractor supporting MacDill AFB. What does a contractor site need?","answer":"A MacDill AFB contractor site needs a clear capabilities page, past performance evidence, NAICS code visibility, and an RFQ or proposal request form that routes to the right team. We build these as standalone authority sites or as sections within a broader company site — depending on whether DoD contracting is your primary or secondary revenue line."},
          {"question":"I'm a financial advisor or RIA in Tampa. What does my website need to convert prospects?","answer":"Financial advisor and RIA sites live or die on credibility signals: credentials displayed prominently, a clear investment philosophy, client testimonials that comply with SEC advertising rules, and a frictionless contact or consultation booking flow. We build these with SEO structured around the queries your prospects use — things like 'fee-only financial advisor Tampa' — and lead-capture forms that qualify before they convert."},
          {"question":"How does FactoryJet compare to Bayshore Solutions or Digital Media Solutions?","answer":"Bayshore Solutions is Tampa's most established web agency with a strong WordPress and HubSpot track record — and publishes rates from $5,000. Digital Media Solutions offers web plus digital marketing from a Tampa HQ. FactoryJet Growth ($3,999) delivers comparable or greater scope — 10–15 pages, CMS, SEO, analytics — in 7 days, in Next.js, at or below Bayshore's entry price. No WordPress maintenance overhead. No retainer lock-in."},
        ]}
      />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Tampa Website?"}
        sub={"Tampa Bay's $178B+ economy spans healthcare, defense, finance, and hospitality — and every segment has buyers who will judge your website before they judge your pitch. Every week without a high-performing site is a week your competitors are earning the trust you should have. Start today."}
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
        "@id": "https://factoryjet.com/us/tampa/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Tampa",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/tampa/web-design#service",
        "name": "Web Design Tampa",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Tampa",
        "description": "FactoryJet builds fast, conversion-focused websites for Tampa businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/tampa/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Tampa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Tampa small businesses start with Starter ($1,999) for a clean five-page site or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500+. Tampa agencies like Bayshore Solutions publish rates from $5,000 for comparable scope — FactoryJet's Growth tier delivers the same output at or below that entry point."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard FactoryJet build runs 7 days from kickoff to launch. Discovery and design take Days 1–4, development runs Days 5–6, and content, SEO, and launch happen on Day 7. We do not start the clock until your brand assets and content are in our shared workspace."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in a web design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."
            }
          },
          {
            "@type": "Question",
            "name": "How long until my new site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches — your business name — usually rank within one to two weeks of launch. Service plus location queries like 'web design Tampa' typically take three to six months for a new domain. The work that compresses that timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on."
            }
          },
          {
            "@type": "Question",
            "name": "We're a vendor in the BayCare or Moffitt Cancer Center supply chain. Can you build healthcare vendor sites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Healthcare vendor sites need to project compliance and operational credibility — HIPAA-aware contact forms, clear service scope, case study evidence, and professional photography. We've built sites for healthcare IT firms, medical device vendors, and practice groups serving major health systems."
            }
          },
          {
            "@type": "Question",
            "name": "We're a defense contractor supporting MacDill AFB. What does a contractor site need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A MacDill AFB contractor site needs a clear capabilities page, past performance evidence, NAICS code visibility, and an RFQ or proposal request form that routes to the right team. We build these as standalone authority sites or as sections within a broader company site."
            }
          },
          {
            "@type": "Question",
            "name": "I'm a financial advisor or RIA in Tampa. What does my website need to convert prospects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Financial advisor and RIA sites live or die on credibility signals: credentials displayed prominently, a clear investment philosophy, client testimonials that comply with SEC advertising rules, and a frictionless contact or consultation booking flow. We build these with SEO structured around the queries your prospects use — things like 'fee-only financial advisor Tampa'."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Bayshore Solutions or Digital Media Solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bayshore Solutions is Tampa's most established web agency with a strong WordPress and HubSpot track record — and publishes rates from $5,000. Digital Media Solutions offers web plus digital marketing from a Tampa HQ. FactoryJet Growth ($3,999) delivers comparable or greater scope — 10–15 pages, CMS, SEO, analytics — in 7 days, in Next.js, at or below Bayshore's entry price. No WordPress maintenance overhead. No retainer lock-in."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/tampa/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com/us"},
          {"@type": "ListItem", "position": 3, "name": "Tampa", "item": "https://factoryjet.com/us/tampa"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/us/tampa/web-design"}
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
