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
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'


export const metadata: Metadata = {
  title: 'Web Design Denver CO | 7 Days from $1,500 | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Denver businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included.',
  alternates: {
    canonical: 'https://factoryjet.com/us/denver/web-design',
    languages: webDesignPriorityCityAlternatesUS.denver,
  },
};


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];

export default function DenverWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · DENVER"}
        headline={"Web Design in Denver That Converts Visitors Into Clients"}
        lead={"Denver businesses operate in one of America's fastest-growing metros — outdoor brands, aerospace suppliers, cannabis tech, and oil & gas companies all competing for digitally-savvy buyers. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        trustItems={["Websites from $1,999", "7-day delivery", "Next.js + GA4 included"]}
        rightSlot={<HeroBrowserMockup />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Denver businesses trust."}
      />
      <CityContextSection
        eyebrow={"DENVER MARKET"}
        headline={"Why Your Denver Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Denver's city population hit 749,000 in 2024, anchored by a Denver-Aurora-Lakewood MSA that generates $250B+ in GDP — making it one of the most productive metros in the Mountain West. Denver ranked #1 for fastest-growing large US city across the entire 2010–2020 census decade, and that growth brought serious economic depth: aerospace giants Lockheed Martin, Raytheon, and United Launch Alliance all maintain significant operations here; energy majors Chevron and Halliburton run Denver offices serving the Wattenberg and DJ Basin plays; and a thriving outdoor and lifestyle sector includes an REI flagship, dozens of DTC outdoor brands, and a snowsports industry worth billions annually. The technology corridor in LoDo counts Amazon, Google, and Twitter among its tenants. Denver's licensed cannabis industry generates $1.5B+ in annual sales — one of the most mature regulated markets in the country. Across all these sectors, the buyer is educated, mobile-first, and deeply skeptical of slow-loading or visually dated websites. A slow site doesn't just lose rankings — it loses the deal before the first email."]}
        stats={[
          {"value":"749,000","label":"Denver City Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/denvercountycitycolorado/PST045224"},
          {"value":"$250B+","label":"Denver-Aurora-Lakewood MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP19740"},
          {"value":"#1","label":"Fastest-growing large US city, 2010–2020 Census","sourceUrl":"https://www.census.gov/library/stories/2021/08/united-states-population-increased-7-3-percent-since-2010.html"}
        ]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Denver"}
        headline={"What 'Web Design' Actually Means for a Denver Business"}
        lead={"Denver's buyer is outdoor-lifestyle aware, tech-savvy, and ESG-conscious. Sites need to communicate authenticity and performance, not just look good. FactoryJet builds with Next.js for sub-second load times, schema for AI search visibility, and conversion flows tuned for Denver's mobile-heavy audience."}
        body={<><p>Outdoor, lifestyle, and DTC brands — Patagonia retailers, ski and snowboard brands, cycling companies, and Colorado-native consumer goods — need photo-heavy layouts with fast WebP delivery, e-commerce or booking integration, and brand storytelling that resonates with Colorado values. We structure these sites to showcase product quality and sustainability credentials without sacrificing speed or SEO.</p><p>Aerospace and energy B2B suppliers — firms serving Lockheed Martin, United Launch Alliance, Chevron's Denver operations, or Halliburton's regional office — need capability pages, RFQ forms, downloadable spec sheets, and technical credibility signals that speak directly to procurement teams. FactoryJet handles every stage: discovery, Figma prototyping, Next.js development, content, SEO, and a 30-day support window. You leave with a codebase you own, a design system you keep, and a site built to rank — not just to look good in a screenshot.</p></>}
        rightSlot={<img src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden="true" width={1200} height={800} className="w-full rounded-2xl object-cover" loading="lazy" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Denver Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Denver has a strong local agency ecosystem. Webolutions has been building WordPress and HubSpot sites for Colorado B2B brands for 20+ years — credible, experienced, no published timeline. Fruition, a Denver-based SEO and web design shop, openly publishes rates of $5,000–$20,000+ for comparable project scope. ThinAir Creative focuses on branding and web for Colorado companies but similarly does not state delivery windows publicly.\n\nFactoryJet's Growth tier ($3,999) covers 10–15 pages, a blog CMS, lead capture, GA4, and a recorded training session — 50–60% below the Denver agency benchmark — with a 7-day delivery guarantee in writing. Next.js versus WordPress means faster load times and zero plugin maintenance overhead, which matters for a business that can't afford a $200/month developer retainer to keep the site running.\n\nWe compete on three things: published pricing (no discovery call required to get a number), a 7-day delivery commitment you can hold us to, and a Next.js tech stack that outperforms WordPress on every Core Web Vitals metric. No lock-in. No proprietary platform. No surprise invoices after launch."}
        pillars={[
          { title: 'AI-native',    body: 'Every site is built with AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no \'it depends\' quotes that arrive three weeks later. Fixed price. Agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Denver Website"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit the top three Denver-area competitors in your market, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we'll measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written. Colorado brands get outdoor-inspired, clean layouts; B2B clients get authority-forward structures built to impress procurement teams. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with GSAP animations, headless CMS integration, contact and RFQ forms, and any third-party APIs you need. Performance budgets are enforced from the first commit — not retrofitted at launch — so your Denver audience gets sub-second load times on mobile and desktop. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot) — important for Denver businesses targeting buyers who search via AI-powered tools. — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. No lock-in — you own everything from day one. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Denver businesses look like after FactoryJet."}
        cards={[
          {"industry":"Outdoor & Lifestyle Brands","title":"Denver Outdoor & Lifestyle Client","description":"Colorado's outdoor market is one of the most competitive in the country — Patagonia retailers, ski and snowboard brands, cycling companies, and DTC outdoor goods all vying for buyers who research extensively before purchasing. We build photo-heavy, fast-loading sites with WebP delivery, e-commerce or booking integration, and brand storytelling that resonates with Colorado values and sustainability expectations.","imageSrc":"/images/us/denver/ecommerce/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Aerospace & Defense","title":"Denver Aerospace & Defense Client","description":"Suppliers to Lockheed Martin, Raytheon, and United Launch Alliance in the Denver metro need sites that communicate engineering credibility to procurement teams who research vendors before any RFQ is issued. We build capability pages, downloadable spec sheets, and RFQ forms designed for longer B2B sales cycles in regulated industries.","imageSrc":"/images/us/denver/ecommerce/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Cannabis & Regulated Industries","title":"Denver Cannabis & Regulated Industry Client","description":"Denver's $1.5B+ licensed cannabis sector operates under strict advertising and compliance rules — which means the website is often the primary sales and brand-building channel. We build compliance-aware sites with clear product category navigation, age-gate flows, and conversion-focused layouts that work within Colorado's regulatory framework.","imageSrc":"/images/us/denver/ecommerce/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"Why Denver Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Denver's web agency market is established. Fruition publishes rates of $5,000–$20,000+ for comparable scope. Webolutions has 20+ years of Colorado B2B experience but does not publish delivery timelines or pricing. FactoryJet's Growth tier ($3,999) delivers the same scope — 10–15 pages, CMS, SEO, analytics — 50–60% below the Denver benchmark, with a 7-day delivery commitment in writing and a Next.js codebase instead of WordPress."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Fruition (Denver)","values":["$5,000–$20,000+ per published rate card","$3,999 (Growth tier)","FactoryJet delivers in 7 days on Next.js; Fruition's timeline is not publicly stated for web design projects."]},
          {"feature":"Webolutions (Denver)","values":["Pricing undisclosed; WordPress/HubSpot builds for Colorado B2B brands","$3,999 (Growth tier)","Next.js vs WordPress means faster load times and no monthly plugin maintenance overhead for Denver clients."]}
        ]}
      />
      <IndustriesGrid
        eyebrow={"DENVER × WEB DESIGN"}
        headline={"Web Design for Denver's Key Industries"}
        lead={"From LoDo tech corridors to aerospace suppliers in Littleton, Denver's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {"name":"Outdoor & Lifestyle Brands","description":"Colorado's outdoor market is one of the most competitive in the US — Patagonia retailers, ski and snowboard brands, cycling companies, and DTC outdoor goods all competing for buyers who research extensively before purchasing. We build photo-heavy, fast-loading sites with WebP delivery, e-commerce or booking integration, and brand storytelling that resonates with Colorado's values and sustainability culture.","example":"DTC outdoor brands, ski/snowboard retailers, and cycling companies serving the Colorado market."},
          {"name":"Aerospace & Defense","description":"Lockheed Martin, Raytheon, and United Launch Alliance all maintain significant Denver-area operations. Suppliers and engineering service firms in this space need B2B sites that speak directly to procurement teams — clear capability pages, downloadable spec sheets, and RFQ forms that convert before the first phone call.","example":"Component suppliers and engineering firms serving Lockheed Martin, Raytheon, or United Launch Alliance in the Denver metro."},
          {"name":"Energy & Natural Resources","description":"Chevron and Halliburton both run Denver offices serving Colorado's DJ Basin and Wattenberg plays. Energy service firms, equipment suppliers, and environmental consultants in this sector need sites that project technical credibility and compliance awareness to procurement teams and regulatory stakeholders.","example":"Energy services firms, drilling suppliers, and environmental consultants supporting Chevron's and Halliburton's Denver operations."},
          {"name":"Technology & SaaS","description":"Amazon, Google, and Twitter maintain offices in Denver's LoDo tech corridor, anchoring a growing SaaS and tech startup ecosystem. Technology companies here need sites that communicate product depth and technical credibility to buyers who research thoroughly before any sales call — fast, schema-rich, with lead-capture flows built for longer B2B sales cycles.","example":"SaaS startups and tech vendors operating in Denver's LoDo corridor or serving the broader Colorado tech market."},
          {"name":"Cannabis & Regulated Industries","description":"Denver's licensed cannabis industry generates $1.5B+ in annual sales — one of the most mature regulated markets in the country. Operating under strict advertising and compliance rules, cannabis businesses rely on their website as the primary brand-building and sales channel. We build compliance-aware sites with clear product navigation, age-gate flows, and conversion-focused layouts within Colorado's regulatory framework.","example":"Licensed dispensaries, cannabis brands, and ancillary cannabis businesses operating in the Denver metro."}
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Denver Businesses"}
        lead={"Denver agency rates for a comparable web design project start at $5,000+ — Fruition openly publishes $5,000–$20,000+ for similar scope. FactoryJet's Growth tier ($3,999) delivers 10–15 pages, CMS, SEO, analytics — 7-day delivery, Next.js, code you own outright. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"$1,999","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for Denver sole traders, local services, and early-stage outdoor brands who need a credible online presence fast.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"$3,999","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Includes Colorado outdoor/lifestyle-ready image optimization and e-commerce or booking integration. Best for Denver SMBs scaling online who need the site to actively generate qualified inquiries.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","E-commerce or booking integration","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"$7,500+","description":"Custom Next.js build with e-commerce, AI features, API integrations, RFQ workflows, and priority support. Best for established Denver businesses — aerospace suppliers, cannabis operators, energy firms — with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API & RFQ connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <TestimonialsSection
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Denver and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Denver Businesses"}
        categories={FAQ_CATEGORIES}
        items={[{"question":"How much does a website cost for a small business in Denver?","answer":"Most Denver small businesses start with the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS, lead capture, and e-commerce or booking integration. Custom builds for aerospace suppliers, cannabis operators, or energy firms with complex RFQ or compliance requirements start at $7,500+. Denver agency rates for the same scope typically run $5,000–$20,000+ — FactoryJet delivers 50–60% below that benchmark.","category":"pricing"},{"question":"How does the 7-day delivery work?","answer":"Seven days from the moment your brand assets and approved content land in our shared workspace. Days 1–2 are discovery and strategy; Days 3–4 are design and Figma prototyping; Days 5–6 are development; Day 6–7 cover content, SEO, and pre-launch checks; Day 7+ is deployment to Cloudflare and GA4 handover. Simpler Starter projects can ship faster. We do not start the clock until your side is ready.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes discovery and strategy, Figma prototyping, Next.js development, content and SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my Denver site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Local service queries like 'web design Denver' or 'aerospace supplier Colorado' take three to six months for a new domain — and longer for nationally competitive terms. The work that compresses this timeline — schema, internal linking, content depth, Core Web Vitals — is built into every FactoryJet project from day one, not sold as an add-on.","category":"pricing"},{"question":"I run an outdoor or DTC brand in Colorado. Do you have experience with that kind of site?","answer":"Yes — outdoor and lifestyle brands are one of our most common Denver client profiles. We build photo-heavy layouts with fast WebP delivery, e-commerce or booking integration via Shopify or custom Next.js, and brand storytelling that resonates with Colorado buyers who care about product quality, sustainability credentials, and authenticity. We know how to make a product feel premium without sacrificing page speed.","category":"local"},{"question":"We're an aerospace or defense supplier serving Lockheed Martin or United Launch Alliance. Can you build a B2B site for that market?","answer":"Yes. Aerospace and defense suppliers need sites that speak to procurement teams — clear capability pages, downloadable spec sheets, RFQ forms that actually route correctly, and technical credibility signals on every page. We have built B2B sites for suppliers in regulated industries and understand the difference between a site that looks professional and one that moves a procurement shortlist.","category":"platform"},{"question":"Our business is in the cannabis industry. Can you build a compliant website?","answer":"Yes. Denver's cannabis sector operates under strict Colorado MED advertising rules, which means the website is often the most important marketing channel. We build compliance-aware sites with proper age-gate flows, clear product category navigation, no prohibited health claims, and conversion-focused layouts that work within the regulatory framework. We'll confirm the compliance requirements specific to your license type at discovery.","category":"local"},{"question":"How does FactoryJet compare to Webolutions or Fruition in Denver?","answer":"Webolutions and Fruition are established Denver agencies with strong local reputations. Fruition openly publishes rates of $5,000–$20,000+ for comparable scope; Webolutions does not publish pricing or delivery timelines. FactoryJet publishes all three tiers upfront, delivers in 7 days on a 7-day guarantee, and builds in Next.js rather than WordPress or HubSpot — which means faster Core Web Vitals and no ongoing plugin maintenance costs for your team.","category":"local"},{"question":"Who owns the code and design files after the project?","answer":"You do — completely. We hand over the full Next.js codebase, Figma design files, and any third-party credentials on launch day. There is no license fee, no proprietary platform lock-in, and no ongoing dependency on FactoryJet to keep the site running. Denver businesses that have moved from WordPress agencies often cite platform lock-in as the biggest hidden cost — we eliminate that entirely.","category":"support"},{"question":"What happens after the 30-day support window ends?","answer":"Most Denver clients handle routine content updates themselves through the CMS — it takes five minutes and no technical background. For ongoing development work, SEO retainers, or feature additions, we offer monthly arrangements at transparent hourly rates. You are never required to stay on retainer, and we are happy to hand off cleanly to your in-house developer or another agency if that's the right move for your business.","category":"platform"},{"question":"Can you build a site that works for both Denver locals and customers across the Boulder corridor and Colorado Springs?","answer":"Yes. Regional reach across the Front Range — from Fort Collins through Denver to Colorado Springs — is a common requirement for Colorado businesses. We build with proper local SEO structure, including city-specific landing pages and schema markup, so your site can rank for searches in multiple Colorado markets without cannibalizing itself. We'll map out the sitemap architecture in the discovery phase to cover your full service area.","category":"local"},{"question":"Do you build e-commerce sites for Denver brands selling physical products?","answer":"Yes. E-commerce is a significant part of our Denver work — particularly for outdoor gear, ski and snowboard brands, craft goods, and DTC Colorado consumer products. We integrate Shopify for product catalog management or build custom Next.js e-commerce with Stripe for brands that want full code ownership. Both options include mobile-optimized checkout flows, product image optimization, and GA4 e-commerce event tracking.","category":"platform"},{"question":"My business is near the Denver Tech Center. Can you handle enterprise-level requirements?","answer":"The Denver Tech Center's anchor tenants — DXC Technology, Dish Network, and Charles Schwab among them — have set a high bar for B2B digital credibility in the south metro. For enterprise-adjacent requirements like SSO integration, CRM connectivity, gated resource libraries, or multi-location site structures, we use the Custom tier ($7,500+) and scope the full requirements in discovery before quoting. No surprises after you've approved the budget.","category":"local"},{"question":"Will my site load fast for users in mountain towns or rural Colorado where connectivity is slower?","answer":"Yes, and it's something we build for explicitly. Next.js with static generation, aggressive image optimization via WebP and AVIF, and Cloudflare's global edge network means your site loads fast on a ski resort's spotty Wi-Fi in Breckenridge or on a 4G connection in Grand Junction. Core Web Vitals green scores on mobile are a non-negotiable baseline for every project — not an upsell.","category":"technical"},{"question":"Can you add AI-powered features like chat, search, or content recommendations to a Denver site?","answer":"Yes. AI feature integration is part of our Custom tier — conversational lead capture, semantic site search, personalized content recommendations, and AI-driven product finders are all buildable on the Next.js stack we use. For Denver B2B clients, AI-powered RFQ assistants and specification matching tools are particularly useful. We scope these in discovery so you know the cost and timeline before any development starts.","category":"technical"},{"question":"Do you set up analytics and conversion tracking, or is that extra?","answer":"GA4 with full event tracking is included in every tier — it is not an add-on. Google Tag Manager, goal configuration for form submissions and CTA clicks, and a 30-day GA4 data check are all standard. For Denver e-commerce clients, we wire up full GA4 e-commerce tracking including product views, add-to-cart, and purchase events. We also connect Google Search Console and submit your sitemap on launch day.","category":"technical"},{"question":"How many rounds of revisions do I get, and what counts as a revision?","answer":"Starter projects include two structured revision rounds; Growth and Custom projects include three. A revision round is a consolidated batch of feedback — we ask you to collect all comments in one document rather than sending changes piecemeal. This keeps the project on the 7-day schedule. Revisions within the 30-day post-launch support window for bug fixes or minor copy tweaks are included at no additional charge.","category":"support"},{"question":"I'm a government contractor in the Denver area. Can you build a site that meets federal contractor presentation standards?","answer":"Yes. Government contractors serving entities at Buckley Space Force Base, Peterson Space Force Base, or the broader Colorado defense community need sites that project technical credibility without flashy consumer-brand aesthetics. We build clean, fast, professionally structured capability sites with proper CAGE code and NAICS code presentation, downloadable past performance summaries, and RFQ flows appropriate for prime and sub-contractor contexts.","category":"local"},{"question":"We're a Denver startup. Is FactoryJet right for an early-stage company?","answer":"Yes — startups are a common client profile. Denver's startup scene, anchored by Galvanize in RiNo and a growing coworking ecosystem across LoDo and Cherry Creek, produces a lot of early-stage companies that need a credible web presence fast without burning runway on a $15,000 agency project. The Starter tier ($1,999) is built for exactly this situation: a production-ready site in 7 days that you can grow as the company scales.","category":"local"},{"question":"What does the site hosting setup look like after launch?","answer":"We deploy to Cloudflare Pages, which gives you a global CDN, automatic HTTPS, and zero downtime deployments at no additional cost. Your domain stays in your own registrar account — we never hold domains. The Next.js codebase deploys directly from your GitHub repository, so any developer can pick up where we left off without proprietary platform knowledge. Hosting costs for a typical Denver business site run $0–$20/month on this stack.","category":"technical"},{"question":"Can you help with SEO for Denver's craft beer or ski industry specifically?","answer":"Yes. Denver's craft beer scene — anchored by Great Divide, Breckenridge Brewery, and dozens of independent taprooms — and Colorado's ski industry are two verticals where local search intent is very specific and high-converting. We build location-specific SEO structures, schema markup for breweries (including taproom hours, events, and beer catalog), and content architecture for outdoor and ski brands targeting both local Denver buyers and national visitors planning Colorado trips.","category":"technical"},{"question":"How do I get started?","answer":"Click 'Start Your Project' anywhere on this page. We'll ask for your business type, project scope, and timeline — it takes about three minutes. From there, a brief discovery conversation (phone or Zoom, 20 minutes) locks the scope, and we issue a fixed-price proposal the same day. If you approve it, we start the 7-day clock within 24 hours of receiving your brand assets and content.","category":"local"}]}
      />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Denver Website?"}
        sub={"Denver's $250B+ metro economy attracts buyers from across the US — and the competition for their attention is relentless. Every week without a high-performing website is a week your competitors own the searches you should. Start today and have a sitemap ready within 72 hours."}
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
        "@id": "https://factoryjet.com/us/denver/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Denver",
        "priceRange": "$1,999–$7,500+"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/denver/web-design#service",
        "name": "Web Design Denver",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Denver",
        "description": "FactoryJet builds fast, conversion-focused websites for Denver businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/denver/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Denver?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Denver small businesses start with the Starter tier ($1,999) for a clean five-page site, or Growth ($3,999) for a blog CMS, lead capture, and e-commerce or booking integration. Custom builds for aerospace suppliers, cannabis operators, or energy firms with complex RFQ or compliance requirements start at $7,500+. Denver agency rates for the same scope typically run $5,000–$20,000+ — FactoryJet delivers 50–60% below that benchmark."
            }
          },
          {
            "@type": "Question",
            "name": "How does the 7-day delivery work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seven days from the moment your brand assets and approved content land in our shared workspace. Days 1–2 are discovery and strategy; Days 3–4 are design and Figma prototyping; Days 5–6 are development; Day 6–7 cover content, SEO, and pre-launch checks; Day 7+ is deployment to Cloudflare and GA4 handover. We do not start the clock until your side is ready."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in a web design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes discovery and strategy, Figma prototyping, Next.js development, content and SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session."
            }
          },
          {
            "@type": "Question",
            "name": "How long until my Denver site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches typically rank within one to two weeks of launch. Local service queries like 'web design Denver' take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, Core Web Vitals — is built into every FactoryJet project from day one."
            }
          },
          {
            "@type": "Question",
            "name": "I run an outdoor or DTC brand in Colorado. Do you have experience with that kind of site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — outdoor and lifestyle brands are one of our most common Denver client profiles. We build photo-heavy layouts with fast WebP delivery, e-commerce or booking integration via Shopify or custom Next.js, and brand storytelling that resonates with Colorado buyers who care about product quality, sustainability credentials, and authenticity."
            }
          },
          {
            "@type": "Question",
            "name": "We're an aerospace or defense supplier serving Lockheed Martin or United Launch Alliance. Can you build a B2B site for that market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Aerospace and defense suppliers need sites that speak to procurement teams — clear capability pages, downloadable spec sheets, RFQ forms that actually route correctly, and technical credibility signals on every page. We have built B2B sites for suppliers in regulated industries."
            }
          },
          {
            "@type": "Question",
            "name": "Our business is in the cannabis industry. Can you build a compliant website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Denver's cannabis sector operates under strict Colorado MED advertising rules. We build compliance-aware sites with proper age-gate flows, clear product category navigation, no prohibited health claims, and conversion-focused layouts that work within the regulatory framework."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Webolutions or Fruition in Denver?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fruition openly publishes rates of $5,000–$20,000+ for comparable scope; Webolutions does not publish pricing or delivery timelines. FactoryJet publishes all three tiers upfront, delivers in 7 days on a 7-day guarantee, and builds in Next.js rather than WordPress — which means faster Core Web Vitals and no ongoing plugin maintenance costs for your team."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code and design files after the project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do — completely. We hand over the full Next.js codebase, Figma design files, and any third-party credentials on launch day. There is no license fee, no proprietary platform lock-in, and no ongoing dependency on FactoryJet to keep the site running."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after the 30-day support window ends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Denver clients handle routine content updates themselves through the CMS. For ongoing development work, SEO retainers, or feature additions, we offer monthly arrangements at transparent hourly rates. You are never required to stay on retainer."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a site that works for both Denver locals and customers across the Boulder corridor and Colorado Springs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Regional reach across the Front Range — from Fort Collins through Denver to Colorado Springs — is a common requirement for Colorado businesses. We build with proper local SEO structure, including city-specific landing pages and schema markup, so your site can rank for searches in multiple Colorado markets without cannibalizing itself."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build e-commerce sites for Denver brands selling physical products?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. E-commerce is a significant part of our Denver work — particularly for outdoor gear, ski and snowboard brands, craft goods, and DTC Colorado consumer products. We integrate Shopify for product catalog management or build custom Next.js e-commerce with Stripe for brands that want full code ownership."
            }
          },
          {
            "@type": "Question",
            "name": "My business is near the Denver Tech Center. Can you handle enterprise-level requirements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For enterprise-adjacent requirements like SSO integration, CRM connectivity, gated resource libraries, or multi-location site structures, we use the Custom tier ($7,500+) and scope the full requirements in discovery before quoting. No surprises after you've approved the budget."
            }
          },
          {
            "@type": "Question",
            "name": "Will my site load fast for users in mountain towns or rural Colorado where connectivity is slower?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Next.js with static generation, aggressive image optimization via WebP and AVIF, and Cloudflare's global edge network means your site loads fast on a ski resort's spotty Wi-Fi in Breckenridge or on a 4G connection in Grand Junction. Core Web Vitals green scores on mobile are a non-negotiable baseline for every project."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add AI-powered features like chat, search, or content recommendations to a Denver site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AI feature integration is part of our Custom tier — conversational lead capture, semantic site search, personalized content recommendations, and AI-driven product finders are all buildable on the Next.js stack we use. We scope these in discovery so you know the cost and timeline before any development starts."
            }
          },
          {
            "@type": "Question",
            "name": "Do you set up analytics and conversion tracking, or is that extra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GA4 with full event tracking is included in every tier — it is not an add-on. Google Tag Manager, goal configuration for form submissions and CTA clicks, and a 30-day GA4 data check are all standard. We also connect Google Search Console and submit your sitemap on launch day."
            }
          },
          {
            "@type": "Question",
            "name": "How many rounds of revisions do I get, and what counts as a revision?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter projects include two structured revision rounds; Growth and Custom projects include three. A revision round is a consolidated batch of feedback. Revisions within the 30-day post-launch support window for bug fixes or minor copy tweaks are included at no additional charge."
            }
          },
          {
            "@type": "Question",
            "name": "I'm a government contractor in the Denver area. Can you build a site that meets federal contractor presentation standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Government contractors serving entities at Buckley Space Force Base or Peterson Space Force Base need sites that project technical credibility. We build clean, fast capability sites with proper CAGE code and NAICS code presentation, downloadable past performance summaries, and RFQ flows appropriate for prime and sub-contractor contexts."
            }
          },
          {
            "@type": "Question",
            "name": "We're a Denver startup. Is FactoryJet right for an early-stage company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — startups are a common client profile. Denver's startup scene, anchored by Galvanize in RiNo and a growing coworking ecosystem across LoDo and Cherry Creek, produces early-stage companies that need a credible web presence fast without burning runway. The Starter tier ($1,999) is built for exactly this situation: a production-ready site in 7 days that you can grow as the company scales."
            }
          },
          {
            "@type": "Question",
            "name": "What does the site hosting setup look like after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages, which gives you a global CDN, automatic HTTPS, and zero downtime deployments. Your domain stays in your own registrar account — we never hold domains. Hosting costs for a typical Denver business site run $0–$20/month on this stack."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with SEO for Denver's craft beer or ski industry specifically?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Denver's craft beer scene and Colorado's ski industry are two verticals where local search intent is very specific and high-converting. We build location-specific SEO structures, schema markup for breweries, and content architecture for outdoor and ski brands targeting both local Denver buyers and national visitors planning Colorado trips."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Click 'Start Your Project' anywhere on this page. We'll ask for your business type, project scope, and timeline — it takes about three minutes. A brief discovery conversation (20 minutes) locks the scope, and we issue a fixed-price proposal the same day. If you approve it, we start the 7-day clock within 24 hours of receiving your brand assets and content."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/denver/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com/us"},
          {"@type": "ListItem", "position": 3, "name": "Denver", "item": "https://factoryjet.com/us/denver"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/us/denver/web-design"}
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
