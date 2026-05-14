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
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Web Design Raleigh | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Raleigh businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/raleigh/web-design',
    languages: webDesignPriorityCityAlternatesUS.raleigh,
  },
};

export default function RaleighWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · RALEIGH"}
        headline={"Web Design in Raleigh That Converts Visitors Into Clients"}
        lead={"Raleigh sits at the heart of Research Triangle Park — the most research-intensive region in the US, home to Cisco, Red Hat, IBM, and dozens of biotech firms. Buyers here are highly educated, deeply skeptical, and will read your website like a peer review. FactoryJet delivers a production-ready website in 7 days, starting at $1,999."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
        rightSlot={<HeroBrowserMockup />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Raleigh businesses trust."}
      />
      <CityContextSection
        eyebrow={"RALEIGH MARKET"}
        headline={"Why Your Raleigh Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Raleigh's population reached approximately 482,000 in 2024, anchoring a Raleigh-Cary MSA that generates over $90 billion in GDP. At the center of that economy sits Research Triangle Park — 7,000 acres with 300+ companies, 60,000+ workers, and a global roster that includes Cisco's largest East Coast campus, Red Hat (acquired by IBM for $34 billion), Lenovo North America HQ, Syneos Health, and Biogen. NC State, Duke, and UNC feed a research ecosystem that ranks the Triangle region in the top 5 US pharmaceutical clusters, according to PhRMA. Raleigh is also the fastest-growing tech talent pool in the Southeast. What this means for your website: every buyer in this market — whether they're evaluating a vendor for a pharma CRO or a SaaS tool for a university spinout — is accustomed to reading technical documentation, peer-reviewed studies, and detailed product pages. They will compare your website against the sites of the Fortune 500 companies they work with every day. If your site can't withstand that comparison, you're not getting the meeting."]}
        stats={[
          {"value":"482,000","label":"Raleigh City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/raleighcitynorthcarolina/PST045224"},
          {"value":"$90B+","label":"Raleigh-Cary MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP39580"},
          {"value":"300+","label":"Companies at Research Triangle Park","sourceUrl":"https://www.rtp.org/about/rtp-at-a-glance/"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Raleigh"}
        headline={"What 'Web Design' Actually Means for a Raleigh Business"}
        lead={"The Research Triangle buyer is skeptical by nature — these are scientists, engineers, and researchers who evaluate evidence before making decisions. Your website needs to present proof, not promises. Clear case studies, precise service descriptions, performance data, and JSON-LD schema that gets you into AI search results matter here more than anywhere."}
        body={<><p>Biotech, pharma, and life sciences vendors serving the RTP cluster — CROs and suppliers working alongside Biogen, Syneos Health, and the broader pharma ecosystem — need sites with technical credibility baked in. That means publication and study references where appropriate, regulatory context, clean professional design that signals GMP-level attention to detail, and content structured to answer procurement-level questions before the first call. A generic template site will not survive scrutiny from a sourcing manager at a top-5 pharma company.</p><p>Technology and SaaS companies in the Cisco and Red Hat ecosystem, NC State spinouts, and Triangle-area startups face a different challenge: communicating product depth to buyers who are technical themselves. These sites need product-depth pages, integration documentation, and demo or trial conversion flows tuned for a longer B2B sales cycle. Every FactoryJet project covers discovery, Figma prototyping, development, content, SEO, and a 30-day support window. You leave with a codebase you own, a design system you keep, JSON-LD schema for AI search visibility, GA4 wired from day one, and a recorded handover so your team can self-manage without calling a developer.</p></>}
        rightSlot={<img src="/images/us/raleigh/web-design/service-explanation.webp" alt="" aria-hidden="true" className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Raleigh Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Local Raleigh agencies include Forge3 (digital marketing and web, Raleigh-based), iFactory (web design and development, Raleigh), and national players like Lounge Lizard that actively serve the Triangle market. Forge3 and iFactory are credible firms — but neither publishes delivery timelines or builds in Next.js as standard. Triangle-area agencies typically run $5,000–$15,000 for a 10–15 page project.\n\nFactoryJet's Growth tier ($3,999) delivers the same scope — blog CMS, lead capture, GA4, Next.js — at 40–60% below the Triangle benchmark, with a 7-day delivery guarantee in writing and a codebase you own outright. No retainer, no plugin maintenance, no proprietary platform. We win because every project ships with JSON-LD schema for AI search crawlers (GPTBot, ClaudeBot, PerplexityBot), Lighthouse 100 performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one."}
        pillars={[
          { title: 'AI-native',    body: 'Every site ships with JSON-LD schema for AI search crawlers and is built with an AI-assisted workflow that compresses build time without compressing quality. We have run 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no "it depends" quotes that arrive three weeks later. Fixed price, agreed up front, in writing.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Raleigh Website in 7 Days"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit your top three competitors in the Triangle market, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we'll measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit, not retrofitted at launch. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Raleigh businesses look like after FactoryJet."}
        cards={[
          {"industry":"Biotech & Life Sciences","title":"Biotech & Life Sciences Client","description":"Serving the RTP pharma cluster — Biogen, Syneos Health, and ecosystem vendors — these sites require technical credibility, regulatory context, and precision design that signals GMP-level attention to detail. We structure content to answer procurement-level questions before the first call.","imageSrc":"/images/us/raleigh/web-design/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Technology & SaaS","title":"Technology & SaaS Client","description":"For Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area startups, we build product-depth pages, integration documentation, and demo or trial conversion flows tuned for technical buyers with long B2B sales cycles.","imageSrc":"/images/us/raleigh/web-design/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Professional Services","title":"Professional Services Client","description":"University spinouts, consulting firms, legal and finance practices serving RTP companies need sites that establish authority, capture leads, and route inquiries efficiently. We build lead-capture flows and authority-building content structures that turn visitors into booked calls.","imageSrc":"/images/us/raleigh/web-design/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Raleigh Web Agencies"}
        lead={"Triangle-area agencies are well-regarded, but pricing and timelines are rarely published. FactoryJet publishes everything upfront — and delivers in 7 days on a Next.js stack that outperforms WordPress on every metric that matters to your buyers."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Forge3","values":["$5,000–$15,000 (Triangle benchmark, timeline not published)","$3,999 (Growth tier)","FactoryJet delivers in 7 days on Next.js. Forge3's timeline and tech stack are not publicly stated."]},
          {"feature":"iFactory","values":["$5,000–$15,000 (Triangle benchmark, timeline not published)","$3,999 (Growth tier)","Next.js vs. WordPress means faster load times, no monthly plugin maintenance, and a codebase you own."]}
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Raleigh Businesses"}
        lead={"Triangle-area agencies typically charge $5,000–$15,000 for a comparable web project. FactoryJet Growth ($3,999) delivers the same scope — 7-day delivery, Next.js, code you own, no plugin maintenance. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"$1,999","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local services who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"$3,999","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Raleigh SMBs scaling online who need the site to actively generate qualified inquiries — especially for technical or B2B audiences.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"$7,500+","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established RTP-adjacent businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <IndustriesGrid
        eyebrow={"RALEIGH × WEB DESIGN"}
        headline={"Web Design for Raleigh's Key Industries"}
        lead={"From pharma CROs to university spinouts, Raleigh's economy spans industries with demanding, research-driven buyers. FactoryJet has built sites for each of them."}
        sectors={[
          {"name":"Biotech & Life Sciences","description":"The Triangle region ranks in the top 5 US pharma clusters. Vendors and CROs serving Biogen, Syneos Health, and the broader RTP pharma ecosystem need sites with technical credibility, regulatory context, and design that signals precision. We structure content to answer procurement-level questions before the first call.","example":"CROs, pharma vendors, and life sciences service firms serving the RTP cluster."},
          {"name":"Technology & SaaS","description":"Cisco's largest East Coast campus, Red Hat (now IBM), and Lenovo North America HQ anchor an enterprise tech ecosystem in RTP. Suppliers, integrators, and SaaS startups in this space need product-depth pages, integration documentation, and demo conversion flows for technical buyers.","example":"Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area SaaS startups."},
          {"name":"University Research & Spinouts","description":"NC State, Duke, and UNC collectively generate a pipeline of spinouts, commercialization offices, and research-adjacent businesses. These organizations need sites that bridge academic credibility with commercial clarity — translating research into buyer-facing value propositions.","example":"University spinouts, commercialization offices, and research-adjacent companies from the NC State / Duke / UNC ecosystem."},
          {"name":"Professional & Business Services","description":"Consulting, legal, finance, and marketing firms serving RTP companies make up a significant share of the Triangle economy. These businesses need websites that establish authority quickly, capture leads efficiently, and route inquiries to the right person — the site is the pitch deck.","example":"Consulting, legal, and finance firms supporting Raleigh's corporate and research base."},
          {"name":"Healthcare","description":"WakeMed, Duke Health, and UNC Health anchor one of the largest healthcare clusters in the Southeast. Private practices, healthcare vendors, and healthtech companies in the Triangle need sites with HIPAA-aware form design, clear service navigation, and local SEO tuned for high-intent patient or partner searches.","example":"Private practices, healthcare vendors, and healthtech companies serving WakeMed, Duke Health, and UNC Health."}
        ]}
      />
      <TestimonialsSection
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Raleigh and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Raleigh Businesses"}
        items={[
          {"question":"How much does a website cost for a small business in Raleigh?","answer":"Most Raleigh small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500. Triangle-area agency rates for the same scope typically run $5,000–$15,000 — two to three times higher."},
          {"question":"How long does it take to build a website?","answer":"FactoryJet delivers in 7 days from kickoff to launch. Discovery and strategy take the first two days, design and prototyping run days three and four, development happens on days five and six, content and SEO land on day six to seven, and we launch and hand over on day seven. We don't start the clock until your brand assets and content are in our shared workspace."},
          {"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We don't charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."},
          {"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Raleigh' take three to six months for a new domain, longer for competitive national terms. The work that compresses this timeline — schema markup, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch."},
          {"question":"We're a biotech or pharma vendor serving the RTP cluster — do you understand what our website needs?","answer":"Yes. Buyers in the pharma and life sciences space evaluate evidence before making decisions. That means your site needs technical credibility: precise service descriptions, publication or study references where appropriate, regulatory context, and design that signals GMP-level attention to detail. We structure content to answer procurement-level questions before the first sales call — because in this sector, the website is often the pre-qualification filter."},
          {"question":"We're a tech startup or SaaS company in the Triangle — can you build for a technical buyer audience?","answer":"Yes. We build product-depth pages, integration documentation, and demo or trial conversion flows tuned for technical buyers with longer B2B sales cycles. For Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area SaaS companies, this is our most common project profile."},
          {"question":"We're a university spinout or research-adjacent company — what does our website need?","answer":"University spinouts need to bridge academic credibility with commercial clarity. That means translating research into buyer-facing value propositions, structuring content around business outcomes rather than methodology, and using design that signals precision without being impenetrable to non-technical buyers. We've built sites for this profile before and know the balance required."},
          {"question":"How does FactoryJet compare to Raleigh agencies like Forge3 or iFactory?","answer":"Forge3 and iFactory are established Raleigh agencies with solid reputations. Neither publishes delivery timelines or pricing. FactoryJet publishes all three tiers upfront, delivers in 7 days in writing, and builds in Next.js rather than WordPress — which means faster load times, no monthly plugin maintenance costs, and a codebase your team can manage without a developer on retainer."}
        ]}
      />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Raleigh Website?"}
        sub={"Research Triangle Park companies set a high bar for everything — including the websites of the vendors and partners they work with. Every week without a credible, fast-loading website is a week your competitors are getting the meeting you should have gotten. Start today."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
      />
      <SchemaScript />
    </main>
      <SiteFooter />
    </>
  );
}

function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://factoryjet.com/us/raleigh/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Raleigh",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/raleigh/web-design#service",
        "name": "Web Design Raleigh",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Raleigh",
        "description": "FactoryJet builds fast, conversion-focused websites for Raleigh businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/raleigh/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Raleigh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Raleigh small businesses choose the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS and lead capture. Custom builds with e-commerce or AI features start at $7,500. Triangle-area agency rates for the same scope typically run $5,000–$15,000 — two to three times higher."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FactoryJet delivers in 7 days from kickoff to launch. Discovery and strategy take the first two days, design and prototyping run days three and four, development happens on days five and six, content and SEO land on day six to seven, and we launch and hand over on day seven. We don't start the clock until your brand assets and content are in our shared workspace."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in a web design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We don't charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."
            }
          },
          {
            "@type": "Question",
            "name": "How long until my new site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Raleigh' take three to six months for a new domain, longer for competitive national terms. The work that compresses this timeline — schema markup, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch."
            }
          },
          {
            "@type": "Question",
            "name": "We're a biotech or pharma vendor serving the RTP cluster — do you understand what our website needs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Buyers in the pharma and life sciences space evaluate evidence before making decisions. That means your site needs technical credibility: precise service descriptions, publication or study references where appropriate, regulatory context, and design that signals GMP-level attention to detail. We structure content to answer procurement-level questions before the first sales call — because in this sector, the website is often the pre-qualification filter."
            }
          },
          {
            "@type": "Question",
            "name": "We're a tech startup or SaaS company in the Triangle — can you build for a technical buyer audience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build product-depth pages, integration documentation, and demo or trial conversion flows tuned for technical buyers with longer B2B sales cycles. For Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area SaaS companies, this is our most common project profile."
            }
          },
          {
            "@type": "Question",
            "name": "We're a university spinout or research-adjacent company — what does our website need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "University spinouts need to bridge academic credibility with commercial clarity. That means translating research into buyer-facing value propositions, structuring content around business outcomes rather than methodology, and using design that signals precision without being impenetrable to non-technical buyers. We've built sites for this profile before and know the balance required."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Raleigh agencies like Forge3 or iFactory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Forge3 and iFactory are established Raleigh agencies with solid reputations. Neither publishes delivery timelines or pricing. FactoryJet publishes all three tiers upfront, delivers in 7 days in writing, and builds in Next.js rather than WordPress — which means faster load times, no monthly plugin maintenance costs, and a codebase your team can manage without a developer on retainer."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/raleigh/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com/us"},
          {"@type": "ListItem", "position": 3, "name": "Raleigh", "item": "https://factoryjet.com/us/raleigh"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/us/raleigh/web-design"}
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
