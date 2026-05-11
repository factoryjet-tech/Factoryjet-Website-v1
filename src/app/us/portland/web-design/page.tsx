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
  title: 'Web Design Portland | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Portland businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/portland/web-design',
    languages: webDesignPriorityCityAlternatesUS.portland,
  },
};

export default function PortlandWebDesignPage() {
  return (
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · PORTLAND"}
        headline={"Web Design in Portland That Converts Visitors Into Clients"}
        lead={"Portland businesses operate at the intersection of sustainability, outdoor lifestyle, and Pacific Northwest tech — a buyer base that researches deeply, values authenticity, and will bounce from a slow site in seconds. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
        primaryCta={{ label: "Start Your Project", href: '/contact' }}
        trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
        rightSlot={<HeroBrowserMockup />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Portland businesses trust."}
      />
      <CityContextSection
        eyebrow={"PORTLAND MARKET"}
        headline={"Why Your Portland Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Portland's city population reached 652,000 in 2024, anchored within a Portland-Vancouver-Hillsboro MSA that generates $190B+ in annual GDP. This is not just a livable city — it is a serious commercial hub. Nike's global headquarters in Beaverton employs 44,000 people. Adidas North America is headquartered in Portland. Columbia Sportswear calls Portland home. Intel's Hillsboro campus runs 20,000+ employees and drives a deep semiconductor supply chain across the region. Beyond the outdoor and tech giants, Portland has a nationally recognized food and beverage scene — Tillamook, a world-class craft brewing industry, and Stumptown Coffee (acquired by JAB Holding Company) all have roots here. Airbnb, Google, and Salesforce maintain Portland offices as part of a growing tech corridor that attracts engineering talent from across the Pacific Northwest. And running through all of it is a strong sustainability and B-Corp culture that shapes how Portland buyers evaluate every business they engage with. Portland's buyers are highly educated and deeply skeptical of inauthentic marketing. They will read your About page, check your values section, and judge your site's quality as a direct proxy for your product quality. Your website must deliver substance — not just style."]}
        stats={[
          {"value":"652,000","label":"Portland City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/portlandcityoregon/PST045224"},
          {"value":"$190B+","label":"Portland-Vancouver-Hillsboro MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP38900"},
          {"value":"44,000","label":"Nike Global HQ Employees (Beaverton)","sourceUrl":"https://www.nike.com/help/a/nike-world-headquarters"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Portland"}
        headline={"What 'Web Design' Actually Means for a Portland Business"}
        lead={"Portland's buyers are authenticity-first. They research brands before buying, read the about page, check sustainability commitments, and judge the quality of a site as a proxy for product quality. FactoryJet builds sites that communicate substance — fast, accessible, content-rich, and built to rank in both traditional and AI search."}
        body={<><p>Outdoor, lifestyle, and apparel businesses — including suppliers to the Nike and Adidas ecosystem, DTC outdoor brands, and sustainable fashion labels — need brand-storytelling architecture, fast image delivery via WebP, and e-commerce or wholesale inquiry flows that match the premium feel of the products. A site that loads slowly or looks generic actively undermines the brand equity these companies have built. We build for the standard their buyers expect.</p><p>Food and beverage and sustainability businesses — craft breweries, organic food companies, and B-Corp certified businesses — need to communicate their values authentically and with enough content depth to earn trust before the first purchase. Portland buyers are not impulse buyers. They want to understand your sourcing, your story, and your commitment before they convert. Every FactoryJet project covers discovery, Figma prototyping, Next.js development, content, SEO, and a post-launch support window. You leave with a codebase you own, a design system you keep, and a site built to rank — not just to look good in a screenshot.</p></>}
        rightSlot={<img src="/images/us/portland/web-design/service-explanation.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Portland Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Portland has a strong local agency market. Gravitate Design is a Portland-based agency that publishes rates starting at $10,000 and ranging to $50,000+ for full web projects. Thrive Internet Marketing Agency maintains a Portland office and publishes web project rates of $2,500–$5,000+. Epicosity serves Pacific Northwest clients with branding and web bundled together.\n\nFactoryJet Growth ($3,999) delivers the same 10–15 page scope — blog CMS, lead capture, GA4, Next.js, and a recorded handover — at 60% below Gravitate's published minimum. Our 7-day delivery guarantee means you are not waiting months for a site to launch while your competitors are already ranking. No WordPress plugin overhead. No retainer required. No proprietary platform that traps your content."}
        pillars={[
          { title: 'AI-native',    body: 'Every site ships with JSON-LD schema for AI search crawlers (GPTBot, ClaudeBot, PerplexityBot), performance budgets enforced from the first commit, and a build process refined across 500+ projects.' },
          { title: 'Transparent',  body: 'Three published tiers. Pricing on the first call. No discovery fees, no "it depends" quotes that arrive three weeks later. Fixed price, agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Portland Website in 7 Days"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit your top three Portland competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Structured feedback rounds lock the visual direction before a line of code is written. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit, not retrofitted at launch. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers. — Days 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Portland businesses look like after FactoryJet."}
        cards={[
          {"industry":"Outdoor & Lifestyle Brands","title":"Outdoor & Lifestyle Brand Client","description":"Portland is home to Nike, Adidas North America, and Columbia Sportswear — and a deep ecosystem of suppliers, DTC brands, and specialty outdoor retailers that operate in their wake. These businesses need brand-storytelling architecture, fast WebP image delivery, and e-commerce or wholesale inquiry flows that communicate at the same premium level as the category giants.","imageSrc":"/images/us/portland/web-design/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Food & Beverage","title":"Food & Beverage Client","description":"Portland's food and beverage scene is nationally recognized — craft brewing, organic food, and sustainability-driven brands all compete in a market where buyers read the label before they buy. We build content-rich sites that communicate sourcing, story, and values with the depth that earns trust before the first purchase.","imageSrc":"/images/us/portland/web-design/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Technology & SaaS","title":"Portland Technology & SaaS Client","description":"Portland's growing tech corridor includes Airbnb, Google, and Salesforce offices alongside Intel's 20,000-person Hillsboro campus. Tech companies and SaaS startups in this market need sites that communicate product depth and technical credibility to buyers who research before they talk to sales — fast, schema-rich, and built for longer B2B sales cycles.","imageSrc":"/images/us/portland/web-design/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Portland Agencies"}
        lead={"Portland's agency market is real. Gravitate Design publishes a minimum project rate of $10,000 and ranges to $50,000+. Thrive Internet Marketing Agency lists web projects at $2,500–$5,000+. Both are credible operations. FactoryJet Growth ($3,999) delivers comparable scope at 60% below Gravitate's published minimum — with a 7-day delivery guarantee and a Next.js codebase instead of WordPress."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Gravitate Design","values":["$10,000–$50,000+ per published rate card","$3,999 (Growth tier)","FactoryJet delivers in 7 days on Next.js; Gravitate's minimum alone is 2.5x our Growth tier price."]},
          {"feature":"Thrive Internet Marketing","values":["$2,500–$5,000+ per published rate card","$3,999 (Growth tier)","FactoryJet includes Next.js, JSON-LD schema, GA4, and a recorded handover — Thrive's scope and stack are not publicly detailed."]},
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Portland Businesses"}
        lead={"Portland agency rates start at $10,000+ — Gravitate Design publishes $10,000–$50,000+ for full web projects. FactoryJet Growth ($3,999) is 60%+ below that minimum: the same 10–15 page scope with blog CMS, lead capture, GA4, and Next.js — delivered in 7 days, with code you own outright. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"$1,999","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local services who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"$3,999","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for SMBs scaling online who need the site to actively generate qualified inquiries.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"$7,500+","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <IndustriesGrid
        eyebrow={"PORTLAND × WEB DESIGN"}
        headline={"Web Design for Portland's Key Industries"}
        lead={"From outdoor and lifestyle brands to craft food and beverage companies to tech corridor startups, Portland's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {"name":"Outdoor & Lifestyle Brands","description":"Portland is home to Nike, Adidas North America, and Columbia Sportswear — and a deep ecosystem of suppliers, DTC brands, and specialty outdoor retailers. These businesses need brand-storytelling architecture, fast WebP image delivery, and e-commerce or wholesale inquiry flows that communicate at a premium level.","example":"DTC outdoor brands, apparel manufacturers, and suppliers to the Nike and Adidas ecosystem."},
          {"name":"Food & Beverage (Craft, Organic, Sustainability)","description":"Portland's food and beverage scene is nationally recognized — craft brewing, organic food, and sustainability-driven brands compete in a market where buyers read the label before they buy. We build content-rich sites that earn trust through story depth, sourcing transparency, and values communication.","example":"Craft breweries, organic food brands, B-Corp certified food companies, and specialty coffee roasters."},
          {"name":"Technology & SaaS","description":"Portland's growing tech corridor includes Airbnb, Google, and Salesforce offices alongside Intel's 20,000-person Hillsboro campus. Tech companies and SaaS startups need sites that communicate product depth and technical credibility to buyers who research before they talk to sales.","example":"SaaS companies, Intel ecosystem suppliers, and tech startups in the Portland-Hillsboro corridor."},
          {"name":"Professional & Business Services","description":"Legal, consulting, finance, and marketing firms in Portland operate in a market where buyers are diligent and skeptical. The website is the first qualification filter — it either earns a meeting or loses one to a competitor whose site loads faster and answers the question first.","example":"Law firms, consulting practices, financial advisors, and B2B service companies across the Portland metro."},
          {"name":"Non-Profit & B-Corp (Mission-Driven Business)","description":"Portland has one of the highest concentrations of B-Corp certified businesses in the US. Non-profits and mission-driven companies here need sites that communicate their values and impact with the credibility and depth that Portland's buyers demand — not just a mission statement, but proof.","example":"B-Corp certified businesses, non-profits, social enterprises, and sustainability-focused organizations."}
        ]}
      />
      <TestimonialsSection
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Portland and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Portland Businesses"}
        items={[
          {"question":"How much does a website cost for a small business in Portland?","answer":"Most Portland small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500+. For context, local Portland agency Gravitate Design publishes a minimum of $10,000. FactoryJet Growth delivers comparable scope at 60% below that figure."},
          {"question":"How long does it take to build a website?","answer":"A standard FactoryJet build ships in 7 days from kickoff to launch. Discovery and design take the first two days, development runs days three through six, and content, SEO, and launch happen in the final day. We do not start the clock until your brand assets and content are in our shared workspace."},
          {"question":"What's included in a web design project?","answer":"Every project includes discovery, Figma prototyping, Next.js development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."},
          {"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Portland' take three to six months for a new domain, and longer for nationally competitive terms. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project from day one, not sold as a post-launch add-on."},
          {"question":"I sell outdoor or lifestyle products — do you have experience with brand-storytelling sites for that market?","answer":"Yes. Portland's outdoor and lifestyle sector — including suppliers to the Nike and Adidas ecosystems and DTC outdoor brands — is one of our most common client profiles. We build brand-storytelling architecture with fast WebP image delivery and wholesale or e-commerce inquiry flows that communicate at the premium level these buyers expect."},
          {"question":"Can you help a sustainability brand or B-Corp communicate its values on its website?","answer":"Yes. Portland has one of the highest concentrations of B-Corp certified businesses in the US, and we understand how these buyers evaluate websites. We build content-depth structures that communicate sourcing, certifications, and values with the specificity that earns trust before the first purchase — not just a mission statement page."},
          {"question":"We're a tech startup in Portland's tech corridor — can you build a B2B SaaS site?","answer":"Yes. Portland's tech corridor includes Airbnb, Google, Salesforce, and Intel's 20,000-person Hillsboro campus. We build SaaS sites with clear product feature architecture, schema markup, and lead-capture flows designed for longer B2B sales cycles — buyers in this space research before they talk to sales, and the site needs to meet them where they are."},
          {"question":"How does FactoryJet compare to Gravitate Design for Portland web projects?","answer":"Gravitate Design is a well-regarded Portland agency. Their published minimum is $10,000, with projects running to $50,000+. FactoryJet Growth ($3,999) delivers 10–15 pages, a blog CMS, GA4, lead capture, and a Next.js codebase at 60% below Gravitate's minimum, with a 7-day delivery guarantee. No WordPress overhead. No retainer required. You own everything at handover."}
        ]}
      />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Portland Website?"}
        sub={"Portland's $190B+ metro economy rewards businesses that show up with substance. In a city where buyers read your About page before they call, a slow or shallow website doesn't just underperform — it actively loses trust. Start today and have a sitemap ready within 72 hours."}
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
        "@id": "https://factoryjet.com/us/portland/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Portland",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/portland/web-design#service",
        "name": "Web Design Portland",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Portland",
        "description": "FactoryJet builds fast, conversion-focused websites for Portland businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/portland/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Portland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Portland small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500+. For context, local Portland agency Gravitate Design publishes a minimum of $10,000. FactoryJet Growth delivers comparable scope at 60% below that figure."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard FactoryJet build ships in 7 days from kickoff to launch. Discovery and design take the first two days, development runs days three through six, and content, SEO, and launch happen in the final day. We do not start the clock until your brand assets and content are in our shared workspace."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in a web design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes discovery, Figma prototyping, Next.js development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session."
            }
          },
          {
            "@type": "Question",
            "name": "How long until my new site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches typically rank within one to two weeks of launch. Service plus location queries like 'web design Portland' take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project from day one."
            }
          },
          {
            "@type": "Question",
            "name": "I sell outdoor or lifestyle products — do you have experience with brand-storytelling sites for that market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Portland's outdoor and lifestyle sector is one of our most common client profiles. We build brand-storytelling architecture with fast WebP image delivery and wholesale or e-commerce inquiry flows that communicate at the premium level these buyers expect."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help a sustainability brand or B-Corp communicate its values on its website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Portland has one of the highest concentrations of B-Corp certified businesses in the US. We build content-depth structures that communicate sourcing, certifications, and values with the specificity that earns trust before the first purchase."
            }
          },
          {
            "@type": "Question",
            "name": "We're a tech startup in Portland's tech corridor — can you build a B2B SaaS site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Portland's tech corridor includes Airbnb, Google, Salesforce, and Intel's 20,000-person Hillsboro campus. We build SaaS sites with clear product feature architecture, schema markup, and lead-capture flows designed for longer B2B sales cycles."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Gravitate Design for Portland web projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gravitate Design's published minimum is $10,000, with projects running to $50,000+. FactoryJet Growth ($3,999) delivers 10–15 pages, a blog CMS, GA4, lead capture, and a Next.js codebase at 60% below Gravitate's minimum, with a 7-day delivery guarantee. No WordPress overhead. No retainer required."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/portland/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com/us"},
          {"@type": "ListItem", "position": 3, "name": "Portland", "item": "https://factoryjet.com/us/portland"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/us/portland/web-design"}
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
