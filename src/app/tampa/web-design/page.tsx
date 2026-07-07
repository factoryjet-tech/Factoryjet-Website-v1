import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { webDesignPriorityCityAlternatesUS } from '@/data/hreflangMap';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
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
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import Image from 'next/image'
import Link from 'next/link'

// SiteHeader is a large client component (932 lines, mobile-menu + dropdown handlers).
// Mobile Lighthouse flags its JS as 99% unused on first paint because the interactive
// parts (slide-in menu, dropdowns) only activate on user interaction.
// ssr: true keeps the server-rendered HTML so CLS stays 0; the JS chunk is
// split and loads after the above-fold critical path.
const SiteHeader = dynamic(() => import('@/components/v2/SiteHeader'), {
  loading: () => <div style={{ height: 64 }} aria-hidden="true" />,
});


export const metadata: Metadata = {
  title: 'Web Design Tampa FL | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Tampa businesses — 7-day delivery, fixed-price. Next.js, SEO & GA4.',
  alternates: {
    canonical: 'https://factoryjet.com/tampa/web-design',
    languages: webDesignPriorityCityAlternatesUS.tampa,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Tampa FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Tampa businesses — 7-day delivery, fixed-price. Next.js, SEO & GA4.',
    url: 'https://factoryjet.com/tampa/web-design/',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design — Tampa, FL',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Tampa FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Tampa businesses — 7-day delivery, fixed-price. Next.js, SEO & GA4.',
    images: ['https://factoryjet.com/og-default.png'],
  },
};


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];
export default function TampaWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_tampa_web_design_hero" />}
        eyebrow={"WEB DESIGN · TAMPA"}
        headline={"Web Design in Tampa That Converts Visitors Into Clients"}
        lead={"Tampa Bay is one of Florida's fastest-growing business markets — healthcare, finance, defense contracting, and a booming tech scene all converging on the Gulf Coast. FactoryJet delivers a production-ready website in 7 days, fixed-price. You own the code, the design files, and the results."}
        trustItems={["Fixed-price websites", "7-day delivery", "Next.js + GA4 included"]}
        extraCta={<WhatsAppCTA city="Tampa" variant="light" />}
        rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Tampa, FL" badgeLabel="Live in 7 days" />}
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
        rightSlot={<Image src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden={true} width={1200} height={800} className="w-full rounded-2xl object-cover" priority />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Tampa Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Tampa has a solid bench of local web agencies. REQ operates nationally with a Tampa presence and focuses on digital marketing plus web. Bayshore Solutions is Tampa's most established web agency — known for WordPress and HubSpot builds — and charges premium agency rates. Digital Media Solutions is headquartered in Tampa and covers both digital marketing and web design.\n\nFactoryJet's Growth tier delivers 10–15 pages with blog CMS, lead capture, GA4, and Next.js — the same quality at a fraction of the cost, with a 7-day delivery guarantee and a codebase you own outright instead of a monthly-maintenance WordPress site. We don't win on price alone. We win because every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one. No lock-in. No proprietary platform. No surprise invoices after launch."}
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
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Tampa businesses look like after FactoryJet."}
        cards={[
          {"industry":"Healthcare & Life Sciences","title":"Healthcare & Life Sciences Client","description":"BayCare, Moffitt Cancer Center, and Tampa General anchor one of Florida's largest healthcare ecosystems. Vendors, suppliers, and practice groups serving these institutions need sites that project compliance, operational credibility, and patient trust. We build with HIPAA-aware form design, clear service scope, and case study evidence that passes procurement scrutiny.","imageSrc":"/images/us/tampa/ecommerce/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Finance & Professional Services","title":"Finance & Professional Services Client","description":"Tampa's Raymond James ecosystem, financial advisory firms, RIAs, and professional services companies compete for clients who compare advisors and vendors digitally before making any contact. We build authority-driven sites with lead-capture flows, credential displays, and content structures that earn the meeting.","imageSrc":"/images/us/tampa/ecommerce/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Defense & Government Contracting","title":"Defense & Government Contracting Client","description":"MacDill AFB — home to CENTCOM and SOCOM — generates a substantial defense contractor market in the Tampa Bay area. Contractors need capability statement pages, RFQ request workflows, and technical credibility signals that meet the bar set by DoD procurement teams. We build sites that work as digital qualification tools.","imageSrc":"/images/us/tampa/ecommerce/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs Tampa's Top Web Agencies"}
        lead={"Bayshore Solutions is Tampa's most established web agency and charges premium agency rates. Digital Media Solutions (Tampa HQ) offers web design alongside digital marketing. Both are credible options — but neither publishes a 7-day delivery commitment or builds in Next.js as standard.\n\nFactoryJet's Growth tier covers 10–15 pages, a blog CMS, lead capture, GA4, and a training session — the same quality at a fraction of the cost, with a faster timeline and a codebase that doesn't require monthly plugin maintenance."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Bayshore Solutions","values":["Premium agency rates","Fixed-price · Growth tier","FactoryJet delivers in 7 days on Next.js; Bayshore's timeline relies on WordPress and ongoing maintenance retainers."]},
          {"feature":"Digital Media Solutions","values":["Pricing undisclosed; Tampa-based digital marketing + web","Fixed-price · Growth tier","Next.js vs WordPress means faster load times and no ongoing plugin overhead. Fixed price, 7-day delivery."]},
        ]}
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
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Tampa Businesses"}
        lead={"Tampa agencies like Bayshore Solutions charge premium rates for web design. FactoryJet's Growth tier delivers 10–15 pages, CMS, SEO, and analytics — 7-day delivery, Next.js, code you own — the same quality at a fraction of the cost. Pricing is fixed-price and scoped to your build; the main drivers are page count, integrations, and design complexity, and every project is quoted up front after a free discovery call, so you know the full cost before work starts. No retainer required."}
        tiers={[
          {"priceRange":"Fixed-price","name":"Starter","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local Tampa businesses who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"priceRange":"Fixed-price","name":"Growth","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Tampa SMBs scaling online who need the site to actively generate qualified inquiries.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"priceRange":"Fixed-price","name":"Custom","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established Tampa businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline={"Rated 4.9/5 by clients from Tampa and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Tampa Businesses"}
        categories={FAQ_CATEGORIES}
        items={[
          {"category":"pricing","question":"How much does a website cost for a small business in Tampa?","answer":"Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity, and every project is quoted up front after a free discovery call, so you know the full cost before work starts. Most Tampa small businesses start with the Starter tier for a clean five-page site or Growth for a blog CMS and lead capture, with Custom builds for e-commerce or AI features. Tampa agencies like Bayshore Solutions charge premium rates for comparable scope — FactoryJet delivers the same quality at a fraction of the cost."},
          {"category":"pricing","question":"How long does it take to build a website?","answer":"A standard FactoryJet build runs 7 days from kickoff to launch. Discovery and design take Days 1–4, development runs Days 5–6, and content, SEO, and launch happen on Day 7. We do not start the clock until your brand assets and content are in our shared workspace."},
          {"category":"included","question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window."},
          {"category":"pricing","question":"How long until my new site ranks on Google?","answer":"Branded searches — your business name — usually rank within one to two weeks of launch. Service plus location queries like 'web design Tampa' typically take three to six months for a new domain. The work that compresses that timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on."},
          {"category":"local","question":"We're a vendor in the BayCare or Moffitt Cancer Center supply chain. Can you build healthcare vendor sites?","answer":"Yes. Healthcare vendor sites need to project compliance and operational credibility — HIPAA-aware contact forms, clear service scope, case study evidence, and professional photography. We've built sites for healthcare IT firms, medical device vendors, and practice groups serving major health systems. We understand what procurement teams are looking for before they pick up the phone."},
          {"category":"support","question":"We're a defense contractor supporting MacDill AFB. What does a contractor site need?","answer":"A MacDill AFB contractor site needs a clear capabilities page, past performance evidence, NAICS code visibility, and an RFQ or proposal request form that routes to the right team. We build these as standalone authority sites or as sections within a broader company site — depending on whether DoD contracting is your primary or secondary revenue line."},
          {"category":"local","question":"I'm a financial advisor or RIA in Tampa. What does my website need to convert prospects?","answer":"Financial advisor and RIA sites live or die on credibility signals: credentials displayed prominently, a clear investment philosophy, client testimonials that comply with SEC advertising rules, and a frictionless contact or consultation booking flow. We build these with SEO structured around the queries your prospects use — things like 'fee-only financial advisor Tampa' — and lead-capture forms that qualify before they convert."},
          {"category":"local","question":"How does FactoryJet compare to Bayshore Solutions or Digital Media Solutions?","answer":"Bayshore Solutions is Tampa's most established web agency with a strong WordPress and HubSpot track record — and charges premium agency rates. Digital Media Solutions offers web plus digital marketing from a Tampa HQ. FactoryJet's Growth tier delivers comparable or greater scope — 10–15 pages, CMS, SEO, analytics — in 7 days, in Next.js, at a fraction of the cost. No WordPress maintenance overhead. No retainer lock-in."},
          {"category":"support","question":"Do you handle website maintenance after launch?","answer":"Yes. Every project includes a 30-day post-launch support window at no extra cost. After that, we offer optional maintenance plans covering security updates, CMS upgrades, performance monitoring, and content edits. Because we build on Next.js — not WordPress — there are no plugin conflicts or monthly update emergencies to manage."},
          {"category":"support","question":"Do I own the code and design files after launch?","answer":"You own everything — the Next.js codebase, the Figma design system, all content, and all assets. We hand it all over on launch day with a recorded walkthrough. You can host it anywhere, hand it to another developer, or self-manage the CMS from day one. No lock-in, no proprietary platform, no hidden licensing."},
          {"category":"local","question":"Can you build a CENTCOM or SOCOM contractor capability site that meets DoD digital standards?","answer":"Yes. CENTCOM and SOCOM contractors in the MacDill AFB ecosystem need sites that function as digital prequalification tools — capability statements, past performance summaries, clearance level disclosures where appropriate, and clear contact workflows for contracting officers. We understand the procurement context and build accordingly, including schema markup that helps your site surface in relevant government procurement searches."},
          {"category":"local","question":"I run a restaurant or bar in Ybor City or South Howard Ave. Do I need more than a basic website?","answer":"Yes, and here's why: most guests in the Ybor City and South Howard Ave dining corridor make booking and walk-in decisions on mobile. Your site needs to load under two seconds on a phone, display your menu in a crawlable format (not a PDF), support OpenTable or Resy integrations, and include schema markup so Google pulls your hours and location correctly. We build this as standard — no add-on fees for mobile optimization or schema."},
          {"category":"technical","question":"We're a real estate firm in Tampa's fast-growing market. What should our website prioritize?","answer":"Tampa's real estate market — from Hyde Park and Channelside to the St. Pete corridor and Clearwater — moves fast, and buyers research heavily online before contacting an agent. Your site needs IDX integration or a custom property search, neighborhood landing pages targeting the searches your buyers use, and a lead-capture flow that routes inquiries to the right agent immediately. We can wire all of this into a Next.js site that outperforms typical WordPress IDX builds on speed and SEO."},
          {"category":"included","question":"Can you build an e-commerce site for a Tampa retail brand?","answer":"Yes. Tampa retail brands — whether you're selling locally in Hyde Park, Channelside, or online nationally — need a storefront that loads fast on mobile, handles inventory cleanly, and converts visitors without friction. We build on Next.js with Shopify headless or custom checkout depending on your volume and product catalog. Every build includes GA4, schema markup, and a CMS your team can manage without developer help."},
          {"category":"local","question":"We're in the cruise or maritime industry near Port Tampa Bay. What do we need?","answer":"Businesses serving Port Tampa Bay — cruise logistics, maritime supply, port services, passenger experience companies — often sell to institutional buyers and cruise line procurement teams. Your site needs to project operational scale, compliance credentials, and a clear scope of services. We build these with the same authority-driven content architecture we use for defense contractors: capability pages, case studies, and a contact workflow that routes to the right person."},
          {"category":"included","question":"Can you add AI features like chatbots or smart search to my site?","answer":"Yes. Our Custom tier includes AI integrations — on-site chat trained on your service catalog, semantic search for knowledge bases or product catalogs, and AI-assisted content personalization. For Tampa healthcare and professional services clients, we scope these carefully to avoid HIPAA or compliance edge cases. We'll tell you what's appropriate for your industry before we build anything."},
          {"category":"included","question":"How does the revision process work?","answer":"Starter tier includes two structured revision rounds; Growth includes three. Revisions happen in Figma before a line of code is written — so changes are fast and don't require rebuilding pages. We use a shared feedback doc so nothing gets lost in email threads. Scope changes that add new pages or features are quoted separately and agreed in writing before work starts."},
          {"category":"technical","question":"Where will my site be hosted, and how fast will it be?","answer":"We deploy to Cloudflare Pages by default — a global CDN with 200+ edge locations that puts your site within milliseconds of visitors anywhere in the US, including Tampa, St. Pete, Clearwater, and Sarasota. Target load times are under 1.5 seconds on mobile. We enforce Lighthouse performance budgets from the first commit and hand over the metrics on launch day."},
          {"category":"local","question":"Can you build a site for a professional services firm targeting Pinellas County or Sarasota clients?","answer":"Yes. Many Tampa-based professional services firms — law practices, accounting firms, consultants — serve clients across the broader Tampa Bay metro including Pinellas County, Clearwater, St. Pete, and the Sarasota corridor. We build city and neighborhood landing pages targeting each sub-market so your firm surfaces in local searches across the region, not just in Tampa proper."},
          {"category":"local","question":"I'm opening a hotel or short-term rental near Amalie Arena or Raymond James Stadium. What does my site need?","answer":"Guests booking near Amalie Arena (Lightning, concerts) or Raymond James Stadium (Buccaneers, events) are often event-driven — they search for availability around specific dates and want to book immediately. Your site needs a fast mobile booking flow, event-aware availability messaging, and schema markup that surfaces your property in Google's hotel and rental results. We build these with direct booking in mind, reducing your dependency on OTA commissions."},
          {"category":"included","question":"What analytics and reporting do I get after launch?","answer":"Every project ships with GA4 fully configured — events, conversion goals, and a dashboard view your team can read without a data analyst. We also connect Google Search Console and verify your sitemap. For Growth and Custom tiers, we include a GTM container so you can add pixels and tracking tags without touching the codebase. You own all analytics accounts; we don't intermediary your data."},
          {"category":"pricing","question":"Can a new website actually improve my ROI, or is it just a sunk cost?","answer":"A well-built site in Tampa's competitive market pays for itself when it converts visitors who would otherwise have gone to a competitor. The Starter tier typically recovers its cost with two or three new clients — in healthcare, finance, or professional services, often with a single engagement. We track conversions from day one and build with measurable outcomes in mind, not just aesthetics."},
        ]}
      />
      {/* Cross-link: Related Services in Tampa */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
            Also in Tampa
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tampa/ecommerce-development/"
              className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
            >
              Ecommerce Development →
            </Link>
          </div>
        </div>
      </section>
      <WebDesignCityLinksUS currentCity="tampa" />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Tampa Website?"}
        sub={"Tampa Bay's $178B+ economy spans healthcare, defense, finance, and hospitality — and every segment has buyers who will judge your website before they judge your pitch. Every week without a high-performing site is a week your competitors are earning the trust you should have. Start today."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        extraCta={<WhatsAppCTA city="Tampa" variant="dark" />}
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
        "@id": "https://factoryjet.com/tampa/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919699977699",
        "areaServed": "Tampa"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/tampa/web-design#service",
        "name": "Web Design Tampa",
        "provider": {
          "@type": "Organization", "@id": "https://factoryjet.com/#organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Tampa",
        "description": "FactoryJet builds fast, conversion-focused websites for Tampa businesses — 7-day delivery, fixed-price. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/tampa/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Tampa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity, and every project is quoted up front after a free discovery call, so you know the full cost before work starts. Most Tampa small businesses start with the Starter tier for a clean five-page site or Growth for a blog CMS and lead capture, with Custom builds for e-commerce or AI features. Tampa agencies like Bayshore Solutions charge premium rates for comparable scope — FactoryJet delivers the same quality at a fraction of the cost."
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
              "text": "Bayshore Solutions is Tampa's most established web agency with a strong WordPress and HubSpot track record — and charges premium agency rates. Digital Media Solutions offers web plus digital marketing from a Tampa HQ. FactoryJet's Growth tier delivers comparable or greater scope — 10–15 pages, CMS, SEO, analytics — in 7 days, in Next.js, at a fraction of the cost. No WordPress maintenance overhead. No retainer lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle website maintenance after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every project includes a 30-day post-launch support window at no extra cost. After that, we offer optional maintenance plans covering security updates, CMS upgrades, performance monitoring, and content edits. Because we build on Next.js — not WordPress — there are no plugin conflicts or monthly update emergencies to manage."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own the code and design files after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You own everything — the Next.js codebase, the Figma design system, all content, and all assets. We hand it all over on launch day with a recorded walkthrough. You can host it anywhere, hand it to another developer, or self-manage the CMS from day one. No lock-in, no proprietary platform, no hidden licensing."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a CENTCOM or SOCOM contractor capability site that meets DoD digital standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. CENTCOM and SOCOM contractors in the MacDill AFB ecosystem need sites that function as digital prequalification tools — capability statements, past performance summaries, clearance level disclosures where appropriate, and clear contact workflows for contracting officers. We understand the procurement context and build accordingly, including schema markup that helps your site surface in relevant government procurement searches."
            }
          },
          {
            "@type": "Question",
            "name": "I run a restaurant or bar in Ybor City or South Howard Ave. Do I need more than a basic website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and here's why: most guests in the Ybor City and South Howard Ave dining corridor make booking and walk-in decisions on mobile. Your site needs to load under two seconds on a phone, display your menu in a crawlable format (not a PDF), support OpenTable or Resy integrations, and include schema markup so Google pulls your hours and location correctly. We build this as standard — no add-on fees for mobile optimization or schema."
            }
          },
          {
            "@type": "Question",
            "name": "We're a real estate firm in Tampa's fast-growing market. What should our website prioritize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tampa's real estate market — from Hyde Park and Channelside to the St. Pete corridor and Clearwater — moves fast, and buyers research heavily online before contacting an agent. Your site needs IDX integration or a custom property search, neighborhood landing pages targeting the searches your buyers use, and a lead-capture flow that routes inquiries to the right agent immediately. We can wire all of this into a Next.js site that outperforms typical WordPress IDX builds on speed and SEO."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build an e-commerce site for a Tampa retail brand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Tampa retail brands — whether you're selling locally in Hyde Park, Channelside, or online nationally — need a storefront that loads fast on mobile, handles inventory cleanly, and converts visitors without friction. We build on Next.js with Shopify headless or custom checkout depending on your volume and product catalog. Every build includes GA4, schema markup, and a CMS your team can manage without developer help."
            }
          },
          {
            "@type": "Question",
            "name": "We're in the cruise or maritime industry near Port Tampa Bay. What do we need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses serving Port Tampa Bay — cruise logistics, maritime supply, port services, passenger experience companies — often sell to institutional buyers and cruise line procurement teams. Your site needs to project operational scale, compliance credentials, and a clear scope of services. We build these with the same authority-driven content architecture we use for defense contractors: capability pages, case studies, and a contact workflow that routes to the right person."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add AI features like chatbots or smart search to my site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Custom tier includes AI integrations — on-site chat trained on your service catalog, semantic search for knowledge bases or product catalogs, and AI-assisted content personalization. For Tampa healthcare and professional services clients, we scope these carefully to avoid HIPAA or compliance edge cases. We'll tell you what's appropriate for your industry before we build anything."
            }
          },
          {
            "@type": "Question",
            "name": "How does the revision process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter tier includes two structured revision rounds; Growth includes three. Revisions happen in Figma before a line of code is written — so changes are fast and don't require rebuilding pages. We use a shared feedback doc so nothing gets lost in email threads. Scope changes that add new pages or features are quoted separately and agreed in writing before work starts."
            }
          },
          {
            "@type": "Question",
            "name": "Where will my site be hosted, and how fast will it be?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages by default — a global CDN with 200+ edge locations that puts your site within milliseconds of visitors anywhere in the US, including Tampa, St. Pete, Clearwater, and Sarasota. Target load times are under 1.5 seconds on mobile. We enforce Lighthouse performance budgets from the first commit and hand over the metrics on launch day."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a site for a professional services firm targeting Pinellas County or Sarasota clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many Tampa-based professional services firms — law practices, accounting firms, consultants — serve clients across the broader Tampa Bay metro including Pinellas County, Clearwater, St. Pete, and the Sarasota corridor. We build city and neighborhood landing pages targeting each sub-market so your firm surfaces in local searches across the region, not just in Tampa proper."
            }
          },
          {
            "@type": "Question",
            "name": "I'm opening a hotel or short-term rental near Amalie Arena or Raymond James Stadium. What does my site need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Guests booking near Amalie Arena (Lightning, concerts) or Raymond James Stadium (Buccaneers, events) are often event-driven — they search for availability around specific dates and want to book immediately. Your site needs a fast mobile booking flow, event-aware availability messaging, and schema markup that surfaces your property in Google's hotel and rental results. We build these with direct booking in mind, reducing your dependency on OTA commissions."
            }
          },
          {
            "@type": "Question",
            "name": "What analytics and reporting do I get after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project ships with GA4 fully configured — events, conversion goals, and a dashboard view your team can read without a data analyst. We also connect Google Search Console and verify your sitemap. For Growth and Custom tiers, we include a GTM container so you can add pixels and tracking tags without touching the codebase. You own all analytics accounts; we don't intermediary your data."
            }
          },
          {
            "@type": "Question",
            "name": "Can a new website actually improve my ROI, or is it just a sunk cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A well-built site in Tampa's competitive market pays for itself when it converts visitors who would otherwise have gone to a competitor. The Starter tier typically recovers its cost with two or three new clients — in healthcare, finance, or professional services, often with a single engagement. We track conversions from day one and build with measurable outcomes in mind, not just aesthetics."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/tampa/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 3, "name": "Tampa", "item": "https://factoryjet.com/tampa"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/tampa/web-design"}
        ]
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How FactoryJet builds your Tampa website in 7 days",
    "description": "Our proven 7-day process for delivering a professional, SEO-optimized website for Tampa businesses.",
    "totalTime": "P7D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Day 1 — Discovery Call", "text": "We learn your business, goals, and competitive landscape in Tampa. We define the sitemap, content strategy, and technical requirements." },
      { "@type": "HowToStep", "position": 2, "name": "Day 2 — Strategy & Structure", "text": "We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins." },
      { "@type": "HowToStep", "position": 3, "name": "Days 3–4 — Design", "text": "We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs." },
      { "@type": "HowToStep", "position": 4, "name": "Days 5–6 — Development & SEO", "text": "We build your site in Next.js or WordPress, optimize Core Web Vitals, add local SEO for Tampa, structured data, and connect all integrations." },
      { "@type": "HowToStep", "position": 5, "name": "Day 7 — Launch", "text": "Your Tampa website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support." }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Web Design Tampa FL | 7-Day Delivery, Fixed-Price | FactoryJet",
          "url": "https://factoryjet.com/tampa/web-design/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
    </>
  );
}
