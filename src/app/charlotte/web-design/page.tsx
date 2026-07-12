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
import HeroInlineForm from '@/components/HeroInlineForm';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Web Design Charlotte NC | 7-Day Delivery | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Charlotte businesses in 7 days — Next.js, SEO, and GA4 included, with a codebase you own.',
  alternates: {
    canonical: 'https://factoryjet.com/charlotte/web-design',
    languages: webDesignPriorityCityAlternatesUS.charlotte,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Charlotte NC | 7-Day Delivery | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Charlotte businesses in 7 days — Next.js, SEO, and GA4 included, with a codebase you own.',
    url: 'https://factoryjet.com/charlotte/web-design/',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design — Charlotte, NC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Charlotte NC | 7-Day Delivery | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Charlotte businesses in 7 days — Next.js, SEO, and GA4 included, with a codebase you own.',
    images: ['https://factoryjet.com/og-default.png'],
  },
};


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Scope & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];

export default function CharlotteWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · CHARLOTTE"}
        headline={"Web Design in Charlotte That Converts Visitors Into Clients"}
        lead={"Charlotte is the second-largest banking center in the US — home to Bank of America's global HQ and one of the most competitive professional services markets on the East Coast. Buyers here expect digital experiences that match the caliber of the firms they work with. FactoryJet delivers a production-ready website in 7 days."}
        formSlot={<HeroInlineForm source="charlotte_web_design_hero" />}
        trustItems={["500+ businesses served", "7-day delivery", "AI SEO-ready websites"]}
        rightSlot={
          <div className="relative select-none py-6 pr-6">
            <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_24px_64px_-12px_rgba(15,15,18,0.22)]">
              <div className="flex items-center gap-3 border-b border-black/[0.07] bg-[#ECECED] px-4 py-3">
                <div className="flex shrink-0 gap-1.5">
                  <span className="block h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="block h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="block h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate rounded-md bg-white px-3 py-1.5 font-mono text-[11px] leading-none text-[#6B7280]">yourbusiness.com</div>
                </div>
              </div>
              <Image
                src="/images/us/charlotte/charlotte-site-mockup.webp"
                alt="Example of a modern, conversion-focused website FactoryJet builds for Charlotte businesses"
                width={1600}
                height={1000}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="absolute -top-3 right-3 rounded-full bg-[#B23E13] px-3 py-1.5 text-[11.5px] font-bold text-white shadow-[0_6px_18px_rgba(240,90,40,0.4)]">
              Live in 7 days · Charlotte, NC
            </div>
          </div>
        }
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Charlotte businesses trust."}
      />
      <CityContextSection
        eyebrow={"CHARLOTTE MARKET"}
        headline={"Why Your Charlotte Web Presence Can't Be an Afterthought"}
        leadParagraphs={[
          "Charlotte's city population hit roughly 900,000 in 2024, anchored inside a Charlotte-Concord-Gastonia MSA that generates over $220 billion in GDP. This is the second-largest banking center in the United States by assets — Bank of America's global headquarters, Truist Financial's HQ, and Wells Fargo's East Coast hub are all here. Duke Energy and NASCAR also call Charlotte home, and a fast-growing tech sector led by Red Ventures and LendingTree has added tens of thousands of high-income professionals to the metro over the past decade. The manufacturing corridor — Husqvarna, Daimler Trucks North America — adds a dense B2B supply chain, while Atrium Health (70,000+ employees) and Novant Health anchor one of the largest healthcare systems in the Southeast.",
          "Charlotte has been one of the fastest-growing metros in the Southeast for a decade straight. Professional buyers here are sophisticated — shaped by decades of banking culture — and they compare every vendor they consider against best-in-class financial brands. A slow, poorly structured website doesn't just lose rankings; it signals that your business isn't at the same level as the firms they trust. Your website is the first compliance review every prospect runs on you."
        ]}
        stats={[
          {"value":"900,000","label":"Charlotte City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/charlottecitynorthcarolina/PST045224"},
          {"value":"$220B+","label":"Charlotte-Concord-Gastonia MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP16740"},
          {"value":"#2","label":"Largest US Banking Center by Assets","sourceUrl":"https://www.charlotteregion.com/key-industries/financial-services"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Charlotte"}
        headline={"What 'Web Design' Actually Means for a Charlotte Business"}
        lead={"Charlotte's buyer base — shaped by decades of banking culture — has a higher bar for professionalism, clarity, and trust than most US cities. Your website is your first compliance review. It needs to signal credibility, clarity of service, and operational quality before anyone picks up the phone."}
        body={
          <>
            <p>For FinTech, financial services, and professional services firms — vendors and suppliers to Bank of America, Truist, and Wells Fargo's East Coast hub; law firms; accounting firms; insurance; and wealth management — your site needs clear service architecture, case studies, professional photography, and compliance-aware form design. Buyers at this level have seen thousands of vendor websites. A site that looks generic or loads slowly doesn't just underperform; it disqualifies you before the conversation starts.</p>
            <p>For healthcare and enterprise suppliers — Atrium Health and Novant Health vendors, Duke Energy supply chain partners, and Charlotte's manufacturing corridor — websites need robust capability documentation, certification display, and RFQ workflows that speak directly to procurement teams. Every FactoryJet project covers discovery, Figma prototyping, Next.js development, content, SEO, and a 30-day support window. You leave with a codebase you own, a design system you keep, and a site built to convert the buyers your business actually needs.</p>
          </>
        }
        rightSlot={<Image src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden={true} width={1200} height={800} className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Charlotte Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Charlotte has credible local agencies. Idea Kraft builds WordPress-based web design projects for Charlotte brands. Bowen offers full-service marketing plus web. Forge3 covers digital marketing and web. None of them publish delivery timelines.\n\nFactoryJet delivers the same scope — blog CMS, lead capture, GA4, Next.js — on a fixed, agreed scope, with a 7-day delivery guarantee and a codebase you own outright. No plugin maintenance. No retainer required. No surprise invoices after launch.\n\nWe don't win on price alone. We win because every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one."}
        pillars={[
          { title: 'AI-native',    body: 'Every site is built with an AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Clear scope on the first call. No discovery fees, no "it depends" quotes that arrive three weeks later. Fixed scope, agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Charlotte Website"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit your top three Charlotte competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we'll measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit, not retrofitted at launch. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Charlotte businesses look like after FactoryJet."}
        cards={[
          {
            "industry":"FinTech & Financial Services",
            "title":"Charlotte FinTech & Financial Services Client",
            "description":"Charlotte is the second-largest US banking center — home to Bank of America, Truist, and Wells Fargo's East Coast HQ. Vendors and suppliers to this ecosystem need sites that project professional credibility instantly. We build fast, schema-rich sites with clear service architecture and compliance-aware form design that earn trust before any conversation starts.",
            "imageSrc":"/images/us/charlotte/ecommerce/portfolio-1.webp",
            "stat1":"+40% conversions",
            "stat2":"< 1.5s load time"
          },
          {
            "industry":"Healthcare & Life Sciences",
            "title":"Charlotte Healthcare & Life Sciences Client",
            "description":"Atrium Health (70,000+ employees) and Novant Health anchor one of the Southeast's largest healthcare systems. Vendors, private practices, and life sciences firms serving this ecosystem need sites that build patient and partner trust fast — with HIPAA-aware form design, clear service navigation, and local SEO.",
            "imageSrc":"/images/us/charlotte/ecommerce/portfolio-2.webp",
            "stat1":"+40% conversions",
            "stat2":"< 1.5s load time"
          },
          {
            "industry":"Manufacturing & Industrial",
            "title":"Charlotte Manufacturing & Industrial Client",
            "description":"Charlotte's manufacturing corridor — Husqvarna, Daimler Trucks North America — creates a deep B2B supply chain. Suppliers need capability pages, certification display, and RFQ workflows that speak directly to procurement teams. We build B2B sites designed to win shortlists, not just look good.",
            "imageSrc":"/images/us/charlotte/ecommerce/portfolio-3.webp",
            "stat1":"+40% conversions",
            "stat2":"< 1.5s load time"
          }
        ]}
        ctaHref="/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Charlotte Web Agencies"}
        lead={"Charlotte agencies like Idea Kraft and Bowen do credible work — but neither publishes delivery timelines, and most build on WordPress. FactoryJet delivers in 7 days, builds in Next.js, and hands you a codebase you own. Here's how we compare."}
        columns={[{"label":"Typical Charlotte agency"},{"label":"FactoryJet","isFactoryJet":true},{"label":"What it means for you"}]}
        rows={[
          {"feature":"Delivery timeline","values":["Not published; multi-week WordPress builds","7-day delivery guarantee","You launch in a week, not a quarter."]},
          {"feature":"Tech stack & ownership","values":["WordPress; ongoing plugin upkeep","Next.js; codebase you own outright","Faster load times and no monthly plugin overhead."]},
          {"feature":"Process","values":["Discovery fees; open-ended timelines","Fixed, agreed scope up front","No surprise invoices after launch."]}
        ]}
      />
      <IndustriesGrid
        eyebrow={"CHARLOTTE × WEB DESIGN"}
        headline={"Web Design for Charlotte's Key Industries"}
        lead={"From Bank of America's global headquarters to NASCAR's racing corridor to Atrium Health's hospital network, Charlotte's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {
            "name":"FinTech & Financial Services",
            "description":"Charlotte is the second-largest US banking center. Vendors and suppliers to Bank of America, Truist, Wells Fargo's East Coast hub, and the broader financial ecosystem need sites that project instant credibility — clear service architecture, compliance-aware form design, and the kind of visual professionalism that earns a shortlist spot.",
            "example":"Suppliers, consultants, and fintech firms serving Bank of America, Truist, or Wells Fargo in the Charlotte metro."
          },
          {
            "name":"Healthcare & Life Sciences",
            "description":"Atrium Health (70,000+ employees) and Novant Health anchor one of the Southeast's largest healthcare networks. Vendors, private practices, and life sciences companies serving this ecosystem need sites that build patient and partner trust — HIPAA-aware form design, clear service navigation, and local SEO for clinic and practice visibility.",
            "example":"Private practices, healthcare vendors, and life sciences firms in the Charlotte and surrounding piedmont market."
          },
          {
            "name":"Manufacturing & Industrial",
            "description":"Charlotte's manufacturing corridor — anchored by Husqvarna and Daimler Trucks North America — creates a dense B2B supply chain. Suppliers need capability pages, certification display, and RFQ workflows that speak directly to procurement teams and win shortlists before a sales call happens.",
            "example":"Component suppliers and industrial service firms serving Charlotte's manufacturing corridor."
          },
          {
            "name":"Professional & Business Services",
            "description":"Law firms, accounting firms, insurance brokers, wealth managers, and consulting practices make up a substantial share of Charlotte's professional workforce. For these businesses, the website is the pitch deck — it either earns a meeting or loses one. We build lead-capture flows and authority-building content structures designed for B2B buyer cycles.",
            "example":"Legal, accounting, insurance, and consulting firms serving Charlotte's corporate and mid-market base."
          },
          {
            "name":"Technology & Innovation",
            "description":"Charlotte's growing tech sector — anchored by Red Ventures and LendingTree, supported by a wave of corporate relocations — is creating new demand for B2B SaaS and professional tech services sites. These buyers research deeply before engaging. We build fast, schema-rich sites that communicate technical credibility and rank for the specific queries your buyers use.",
            "example":"SaaS companies, digital agencies, and tech-enabled services firms operating in the Charlotte metro."
          }
        ]}
      />
      {/* Pricing tiers section removed 2026-06-22 — no pricing on service pages. */}
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline={"Rated 4.9/5 by clients from Charlotte and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Charlotte Businesses"}
        categories={FAQ_CATEGORIES}
        items={[{"question":"How much does a website cost for a small business in Charlotte?","answer":"Website cost depends on scope — the number of pages, whether you need a blog CMS or lead-capture flows, e-commerce, or custom AI features. We work to a fixed, agreed scope with no hidden discovery fees, and most projects ship in 7 days. The fastest way to get an exact figure for your project is a quick call with the founder.","category":"pricing"},{"question":"How long does it take to build a website?","answer":"A standard FactoryJet build runs 7 days from kickoff to launch. Discovery and strategy take Days 1–2, design and prototyping Days 3–4, development Days 5–6, and content, SEO, and launch happen on Days 6–7. We do not start the clock until your brand assets and content are in our shared workspace.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) usually rank within one to two weeks of launch. Service plus location queries like 'web design Charlotte' typically take three to six months for a new domain. The work that compresses this timeline — schema markup, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch.","category":"pricing"},{"question":"I work with financial services or fintech clients in Charlotte. Do you have experience building those sites?","answer":"Yes. Charlotte's financial services ecosystem is one of our most common client profiles. Vendors and suppliers to Bank of America, Truist, and Wells Fargo need sites that project instant professional credibility. We build clear service architecture, compliance-aware form design, and case study sections designed to earn shortlist spots before the first call.","category":"local"},{"question":"Can you build a website for a healthcare vendor serving Atrium Health or Novant Health?","answer":"Yes. We work with healthcare vendors, private practices, and life sciences firms serving Charlotte's large hospital networks. We handle HIPAA-aware contact form design, clear capability pages, and local SEO — important for vendors competing for procurement attention at Atrium (70,000+ employees) and Novant Health.","category":"local"},{"question":"We're a manufacturing or industrial company in the Charlotte corridor. Can your site help us win B2B deals?","answer":"Yes. Charlotte's manufacturing sector — Husqvarna, Daimler Trucks, and their supply chains — relies on supplier websites to pre-qualify vendors before RFQs are issued. We build B2B sites with clear capability documentation, certification display, and RFQ workflows that speak to procurement teams. A professional, fast-loading site with the right information architecture shortlists you before a sales call happens.","category":"platform"},{"question":"How does FactoryJet compare to Charlotte agencies like Idea Kraft or Bowen?","answer":"Idea Kraft and Bowen are established Charlotte agencies. Neither publishes delivery timelines. FactoryJet is upfront about scope and timeline, delivers in 7 days, and builds in Next.js rather than WordPress — which means faster load times and no ongoing plugin maintenance for your team. We deliver at a fixed, agreed scope for equivalent work.","category":"local"},{"question":"Do you handle ongoing website maintenance after launch?","answer":"Every project includes a 30-day post-launch support window covering bug fixes, copy tweaks, and training questions. Beyond that, we offer ongoing maintenance retainers for clients who want monthly performance audits, content updates, and priority turnaround. A lot of Charlotte businesses in SouthPark and Ballantyne use us for quarterly refreshes as their service lines grow.","category":"support"},{"question":"Who owns the code and design files after the project is done?","answer":"You do — 100%. We hand over the full Next.js codebase, the Figma design files, and all content assets on launch day. No licensing fees, no vendor lock-in. You can hand it to any developer you choose and they can pick it up from where we left off.","category":"support"},{"question":"My business serves the Charlotte Douglas airport corridor and logistics sector. Can you build a B2B site for that?","answer":"Yes. The Charlotte Douglas corridor is one of the busiest logistics and distribution hubs in the Southeast. We build B2B sites with capability documentation, fleet or service overviews, RFQ forms, and partner portal integrations designed for the logistics, freight, and distribution clients who operate in that corridor.","category":"platform"},{"question":"We're a restaurant or hospitality business in Uptown Charlotte or NoDa. What does a good site look like for us?","answer":"For restaurants and hospitality businesses, the site needs to load fast on mobile, surface your menu and reservation link immediately, and rank for local Charlotte searches. We build sites with OpenTable or Resy integrations, Google Maps schema, event calendar support, and high-quality food and interior photography sections. Uptown Charlotte and NoDa foot traffic is highly mobile-driven, so we optimize for sub-1.5-second mobile load times as a baseline.","category":"local"},{"question":"Can you add AI features like a chatbot or smart search to our Charlotte business website?","answer":"Yes. Our Custom builds include AI integrations — trained chatbots for lead qualification, AI-powered site search, and content recommendation engines. These are particularly useful for financial services and healthcare vendors in Charlotte who handle a high volume of inbound inquiries and want to triage them before a human picks up the phone.","category":"technical"},{"question":"How do you handle analytics and conversion tracking?","answer":"GA4 and Google Tag Manager are wired up on every project before launch. We configure event tracking for form submissions, CTA clicks, scroll depth, and any custom goals specific to your business. For Charlotte financial services and healthcare clients, we also set up conversion segments so you can separate high-value lead types from general traffic.","category":"technical"},{"question":"Is the site going to work well on mobile? Most of my Charlotte customers are on their phones.","answer":"Mobile-first is non-negotiable on every FactoryJet project. We design and build for mobile before desktop, enforce Core Web Vitals green scores at launch, and test across current iOS and Android browsers. Charlotte's demographic skews heavily toward mobile professionals — we aim for sub-1.5-second load times on a 4G connection as a baseline.","category":"technical"},{"question":"We're a retail business in SouthPark Mall or Ballantyne. Do you build e-commerce sites?","answer":"Yes. Our Custom tier covers Shopify builds, Next.js e-commerce with headless CMS, and hybrid sites that combine content marketing with a product catalog. For Charlotte retail clients, we also build local SEO structures that help you rank for neighborhood-level searches — SouthPark, Ballantyne, Steele Creek — not just city-wide.","category":"technical"},{"question":"Do you have experience with NASCAR, motorsports, or Charlotte Motor Speedway-related businesses?","answer":"Yes. Charlotte's motorsports ecosystem — anchored by Charlotte Motor Speedway and teams based out of Concord and Mooresville — creates demand for event-driven websites, team sponsor pages, merchandise e-commerce, and B2B supplier sites. We've built sites for motorsports-adjacent businesses that handle high-traffic event windows and sponsor visibility requirements.","category":"technical"},{"question":"We're based in Concord, Huntersville, or Lake Norman — not technically Charlotte. Can you still help?","answer":"Absolutely. We work with businesses across the entire Charlotte metro — Concord, Huntersville, Mooresville, Lake Norman, Fort Mill SC, and beyond. We build in local SEO for your specific sub-market so you rank in the neighborhoods and communities your customers are actually searching from, not just Charlotte city-wide.","category":"local"},{"question":"How does the design revision process work?","answer":"Starter tier includes two structured revision rounds; Growth includes three. Each round is a focused review session — we share the Figma prototype, you give consolidated feedback, and we turn it around within 24 hours. We don't do open-ended revision loops. Every change request is scoped and documented so there are no surprises on scope or timeline.","category":"support"},{"question":"Where is the site hosted and how does that affect performance for Charlotte visitors?","answer":"We deploy to Cloudflare Pages by default, which serves your site from edge nodes closest to your visitors. For Charlotte-area users, that means sub-100ms server response times under normal load. Cloudflare's global CDN also handles traffic spikes — useful for Charlotte businesses running event promotions or seasonal campaigns — without requiring you to manage server infrastructure.","category":"technical"},{"question":"Can you help a Fort Mill SC or Research Triangle-adjacent business that serves the Charlotte market?","answer":"Yes. We work with businesses on both sides of the NC/SC border who sell into the Charlotte metro. Fort Mill is one of the fastest-growing suburbs in the region, and Research Triangle proximity means many Charlotte-adjacent B2B firms serve both markets. We build geo-targeted content structures that let a single site rank in multiple metro areas simultaneously.","category":"local"},{"question":"What's the ROI on a professionally built website for a Charlotte business?","answer":"A professionally built FactoryJet site typically pays for itself with two to three additional qualified leads converted per month — often within 60 to 90 days of launch for Charlotte professional services firms. Charlotte's competitive market means the cost of a slow or unprofessional site isn't just missed rankings — it's prospects who bounced to a competitor before they ever called you.","category":"local"}]}
      />
      {/* Cross-link: Related Services in Charlotte */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
            Also in Charlotte
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/charlotte/ecommerce-development/"
              className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
            >
              Ecommerce Development →
            </Link>
          </div>
        </div>
      </section>
      <WebDesignCityLinksUS currentCity="charlotte" />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Charlotte Website?"}
        sub={"Charlotte's $220B+ economy is built on trust — and your website is the first trust signal every prospect sees. In a city where buyers compare you against firms that bank with Bank of America, a slow or amateur-looking site doesn't just underperform. It disqualifies you. Start today."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
      />
      <SchemaScript />
    </main>
      <ExitIntentLeadForm
        region="us"
        source="exit_intent_charlotte_web_design"
        heading="Claim your free website audit"
        subheading="Expert analysis of your SEO, speed and UX. Just your name and email."
        promo="Free website audit, no cost, no obligation"
      />
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
        "@id": "https://factoryjet.com/charlotte/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919699977699",
        "areaServed": "Charlotte"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/charlotte/web-design#service",
        "name": "Web Design Charlotte",
        "provider": {
          "@type": "Organization", "@id": "https://factoryjet.com/#organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Charlotte",
        "description": "FactoryJet builds fast, conversion-focused websites for Charlotte businesses in 7 days. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/charlotte/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Charlotte?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website cost depends on scope — the number of pages, whether you need a blog CMS or lead-capture flows, e-commerce, or custom AI features. We work to a fixed, agreed scope with no hidden discovery fees, and most projects ship in 7 days. The fastest way to get an exact figure for your project is a quick call with the founder."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard FactoryJet build runs 7 days from kickoff to launch. Discovery and strategy take Days 1–2, design and prototyping Days 3–4, development Days 5–6, and content, SEO, and launch happen on Days 6–7. We do not start the clock until your brand assets and content are in our shared workspace."
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
              "text": "Branded searches typically rank within one to two weeks of launch. Service plus location queries like 'web design Charlotte' take three to six months for a new domain. Schema markup, internal linking, content depth, and technical performance — all built into every FactoryJet project — compress that timeline."
            }
          },
          {
            "@type": "Question",
            "name": "I work with financial services or fintech clients in Charlotte. Do you have experience building those sites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Vendors and suppliers to Bank of America, Truist, and Wells Fargo need sites that project instant professional credibility. We build clear service architecture, compliance-aware form design, and case study sections designed to earn shortlist spots before the first call."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a website for a healthcare vendor serving Atrium Health or Novant Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with healthcare vendors, private practices, and life sciences firms serving Charlotte's large hospital networks. We handle HIPAA-aware contact form design, clear capability pages, and local SEO for vendors competing at Atrium (70,000+ employees) and Novant Health."
            }
          },
          {
            "@type": "Question",
            "name": "We're a manufacturing or industrial company in the Charlotte corridor. Can your site help us win B2B deals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build B2B sites with clear capability documentation, certification display, and RFQ workflows that speak to procurement teams. A professional, fast-loading site with the right information architecture shortlists you before a sales call happens."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Charlotte agencies like Idea Kraft or Bowen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither Idea Kraft nor Bowen publishes delivery timelines. FactoryJet is upfront about scope and timeline, delivers in 7 days, and builds in Next.js rather than WordPress — faster load times and no ongoing plugin maintenance. We deliver at a fixed, agreed scope for equivalent work."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle ongoing website maintenance after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes a 30-day post-launch support window covering bug fixes, copy tweaks, and training questions. Beyond that, we offer ongoing maintenance retainers for clients who want monthly performance audits, content updates, and priority turnaround. Many Charlotte businesses in SouthPark and Ballantyne use us for quarterly refreshes as their service lines grow."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code and design files after the project is done?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do — 100%. We hand over the full Next.js codebase, the Figma design files, and all content assets on launch day. No licensing fees, no vendor lock-in. You can hand it to any developer you choose and they can pick it up from where we left off."
            }
          },
          {
            "@type": "Question",
            "name": "My business serves the Charlotte Douglas airport corridor and logistics sector. Can you build a B2B site for that?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Charlotte Douglas corridor is one of the busiest logistics and distribution hubs in the Southeast. We build B2B sites with capability documentation, fleet or service overviews, RFQ forms, and partner portal integrations designed for logistics, freight, and distribution clients who operate in that corridor."
            }
          },
          {
            "@type": "Question",
            "name": "We're a restaurant or hospitality business in Uptown Charlotte or NoDa. What does a good site look like for us?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For restaurants and hospitality businesses, the site needs to load fast on mobile, surface your menu and reservation link immediately, and rank for local Charlotte searches. We build sites with OpenTable or Resy integrations, Google Maps schema, event calendar support, and high-quality photography sections. Uptown Charlotte and NoDa foot traffic is highly mobile-driven, so we optimize for sub-1.5-second mobile load times as a baseline."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add AI features like a chatbot or smart search to our Charlotte business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Custom builds include AI integrations — trained chatbots for lead qualification, AI-powered site search, and content recommendation engines. These are particularly useful for financial services and healthcare vendors in Charlotte who handle a high volume of inbound inquiries and want to triage them before a human picks up the phone."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle analytics and conversion tracking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GA4 and Google Tag Manager are wired up on every project before launch. We configure event tracking for form submissions, CTA clicks, scroll depth, and any custom goals specific to your business. For Charlotte financial services and healthcare clients, we also set up conversion segments so you can separate high-value lead types from general traffic."
            }
          },
          {
            "@type": "Question",
            "name": "Is the site going to work well on mobile? Most of my Charlotte customers are on their phones.",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile-first is non-negotiable on every FactoryJet project. We design and build for mobile before desktop, enforce Core Web Vitals green scores at launch, and test across current iOS and Android browsers. Charlotte's demographic skews heavily toward mobile professionals — we aim for sub-1.5-second load times on a 4G connection as a baseline."
            }
          },
          {
            "@type": "Question",
            "name": "We're a retail business in SouthPark Mall or Ballantyne. Do you build e-commerce sites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Custom tier covers Shopify builds, Next.js e-commerce with headless CMS, and hybrid sites that combine content marketing with a product catalog. For Charlotte retail clients, we also build local SEO structures that help you rank for neighborhood-level searches — SouthPark, Ballantyne, Steele Creek — not just city-wide."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have experience with NASCAR, motorsports, or Charlotte Motor Speedway-related businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Charlotte's motorsports ecosystem — anchored by Charlotte Motor Speedway and teams based out of Concord and Mooresville — creates demand for event-driven websites, team sponsor pages, merchandise e-commerce, and B2B supplier sites. We've built sites for motorsports-adjacent businesses that handle high-traffic event windows and sponsor visibility requirements."
            }
          },
          {
            "@type": "Question",
            "name": "We're based in Concord, Huntersville, or Lake Norman — not technically Charlotte. Can you still help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work with businesses across the entire Charlotte metro — Concord, Huntersville, Mooresville, Lake Norman, Fort Mill SC, and beyond. We build in local SEO for your specific sub-market so you rank in the neighborhoods and communities your customers are actually searching from, not just Charlotte city-wide."
            }
          },
          {
            "@type": "Question",
            "name": "How does the design revision process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter tier includes two structured revision rounds; Growth includes three. Each round is a focused review session — we share the Figma prototype, you give consolidated feedback, and we turn it around within 24 hours. We don't do open-ended revision loops. Every change request is scoped and documented so there are no surprises on scope or timeline."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the site hosted and how does that affect performance for Charlotte visitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages by default, which serves your site from edge nodes closest to your visitors. For Charlotte-area users, that means sub-100ms server response times under normal load. Cloudflare's global CDN also handles traffic spikes — useful for Charlotte businesses running event promotions or seasonal campaigns — without requiring you to manage server infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help a Fort Mill SC or Research Triangle-adjacent business that serves the Charlotte market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with businesses on both sides of the NC/SC border who sell into the Charlotte metro. Fort Mill is one of the fastest-growing suburbs in the region, and Research Triangle proximity means many Charlotte-adjacent B2B firms serve both markets. We build geo-targeted content structures that let a single site rank in multiple metro areas simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "What's the ROI on a professionally built website for a Charlotte business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A professionally built FactoryJet site typically pays for itself with two to three additional qualified leads converted per month — often within 60 to 90 days of launch for Charlotte professional services firms. Charlotte's competitive market means the cost of a slow or unprofessional site isn't just missed rankings — it's prospects who bounced to a competitor before they ever called you."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/charlotte/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 3, "name": "Charlotte", "item": "https://factoryjet.com/charlotte"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/charlotte/web-design"}
        ]
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How FactoryJet builds your Charlotte website in 7 days",
    "description": "Our proven 7-day process for delivering a professional, SEO-optimized website for Charlotte businesses.",
    "totalTime": "P7D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Day 1 — Discovery Call", "text": "We learn your business, goals, and competitive landscape in Charlotte. We define the sitemap, content strategy, and technical requirements." },
      { "@type": "HowToStep", "position": 2, "name": "Day 2 — Strategy & Structure", "text": "We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins." },
      { "@type": "HowToStep", "position": 3, "name": "Days 3–4 — Design", "text": "We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs." },
      { "@type": "HowToStep", "position": 4, "name": "Days 5–6 — Development & SEO", "text": "We build your site in Next.js or WordPress, optimize Core Web Vitals, add local SEO for Charlotte, structured data, and connect all integrations." },
      { "@type": "HowToStep", "position": 5, "name": "Day 7 — Launch", "text": "Your Charlotte website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support." }
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
          "name": "Web Design Charlotte NC | 7-Day Delivery | FactoryJet",
          "url": "https://factoryjet.com/charlotte/web-design/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
    </>
  );
}
