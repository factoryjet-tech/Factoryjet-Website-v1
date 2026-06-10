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
import WhatsAppCTA from '@/components/v2/WhatsAppCTA';
import WebDesignCityLinksUS from '@/components/v2/WebDesignCityLinksUS';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Web Design Miami FL | 7 Days from $1,500 | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Miami businesses — from $1,999. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
  alternates: {
    canonical: 'https://factoryjet.com/us/miami/web-design',
    languages: webDesignPriorityCityAlternatesUS.miami,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Miami FL | 7 Days from $1,500 | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Miami businesses — from $1,999. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
    url: 'https://factoryjet.com/us/miami/web-design/',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design — Miami, FL',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Miami FL | 7 Days from $1,500 | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Miami businesses — from $1,999. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
    images: ['https://factoryjet.com/logo.png'],
  },
};


const FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Local Expertise' },
  { key: 'support',   label: 'Support & Ownership' },
];

export default function MiamiWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        eyebrow={"WEB DESIGN · MIAMI"}
        headline={"Web Design in Miami That Converts Visitors Into Clients"}
        lead={"Miami businesses compete in one of the fastest-moving markets in the US — Latin American trade, global finance, and a booming tech scene all converging in one city. FactoryJet delivers a production-ready website in 7 days, starting at $1,999. You own the code, the design files, and the results."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        trustItems={["Websites from $1,999","7-day delivery","Next.js + GA4 included"]}
        extraCta={<WhatsAppCTA city="Miami" variant="light" />}
        rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Miami, FL" badgeLabel="Live in 7 days" />}
      />
      <LogoBar
        tagline="Trusted by 500+ businesses across the US, UK, and UAE"
      />
      <BigThreeTrustBlock
        eyebrow="BY THE NUMBERS"
        headline={"Results that Miami businesses trust."}
      />
      <CityContextSection
        eyebrow={"MIAMI MARKET"}
        headline={"Why Your Miami Web Presence Can't Be an Afterthought"}
        leadParagraphs={["Miami's metro economy is a genuine global crossroads. The Miami-Fort Lauderdale-West Palm Beach MSA generates $413B+ in GDP, anchored by 80+ international banks operating out of the Brickell financial corridor, a $20B+ annual tourism economy driven by South Beach and the cruise industry, and a luxury real estate market that competes with New York and London for international buyers. The Magic City Innovation District signals Miami's growing tech credibility, while Latin American HQs and trade relationships make the city the de facto US gateway to a market of 650 million consumers. Miami city proper holds 2.7M residents, with the broader metro at 6.2M+ as of 2024. In a market where your competition isn't just across town — it's across borders — a slow, unclear website doesn't just lose local rankings. It loses international deals to the firm whose site loaded first and answered the question in two languages."]}
        stats={[{"value":"6.2M+","label":"Miami-Fort Lauderdale-West Palm Beach Metro Population (2024)","sourceUrl":"https://www.census.gov/quickfacts/fact/table/miamidadecountyflorida/PST045224"},{"value":"$413B+","label":"Miami-Fort Lauderdale-West Palm Beach MSA GDP","sourceUrl":"https://fred.stlouisfed.org/series/NGMP33100"},{"value":"80+","label":"International Banks with Miami Operations","sourceUrl":"https://www.miamidade.gov/global/economy/trade-and-finance.page"}]}
      />
      <ServiceExplanation
        eyebrow={"WEB DESIGN · Miami"}
        headline={"What 'Web Design' Actually Means for a Miami Business"}
        lead={"Miami's bilingual market (English and Spanish), global finance clientele, and tourism-driven consumer base create web requirements you won't find in most agency playbooks. FactoryJet builds with multilingual-ready architecture from day one, fast load times for mobile users on the go, and lead capture flows tuned for international B2B buyers who evaluate you before they ever pick up the phone."}
        body={<><p>For FinTech and financial services companies along the Brickell corridor — international banks, wealth management firms, payment processors, and the consultancies that serve them — a website needs to project regulatory credibility fast. Buyers in this sector read service architecture pages before they read testimonials. We structure your site to communicate compliance credibility, clear capability scope, and trust signals (certifications, client logos, regulatory disclosures) in the first scroll.</p><p>For real estate and tourism businesses — the industries that collectively define Miami's global brand — your website is competing with international firms for buyers who may never visit your office before wiring a deposit. Miami's $20B+ tourism economy and booming luxury real estate market require sites that convert international visitors into leads: gallery-heavy layouts with fast image delivery, multilingual UX, and booking or inquiry flows that work on a phone in any time zone. Every FactoryJet project covers discovery, Figma prototyping, development, content, SEO, and a 30-day support window. You leave with a codebase you own, a design system you keep, and a site built to rank — not just to look good in a screenshot.</p></>}
        rightSlot={<Image src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden={true} width={1200} height={800} className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Miami Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Miami has strong local agencies — Refresh Agency handles digital marketing and web for Miami brands, The Duel operates out of Wynwood doing branding and web, and Absolute Web has built e-commerce and web design projects across South Florida for years. All credible. None publishes a 7-day delivery commitment or builds in Next.js as standard.\n\nFactoryJet's Growth tier ($3,999) covers 10–15 pages, a blog CMS, lead capture, multilingual-ready architecture, and GA4 analytics — at a fixed, published price for equivalent scope, with a faster timeline and a codebase that doesn't require monthly plugin fees.\n\nWe don't win on price alone. We win because every project ships with JSON-LD schema for AI search crawlers, performance budgets enforced from the first commit, multilingual-ready architecture for Miami's bilingual market, and a recorded handover so your team can self-manage from day one. No lock-in. No proprietary platform. No surprise invoices after launch."}
        pillars={[
          { title: 'AI-native',    body: 'Every site is built with AI-assisted workflow — compressing build time without compressing quality. We have run 500+ projects through this system.' },
          { title: 'Transparent',  body: 'Pricing on the first call. No discovery fees, no \'it depends\' quotes that arrive three weeks later. Fixed price. Agreed up front.' },
          { title: 'Guaranteed',   body: '7-day delivery guarantee. If we miss the deadline, you don\'t pay. We have delivered on time on 97% of all projects.' },
        ]}
      />
      <ServiceJourneyRow
        eyebrow={"OUR PROCESS"}
        headline={"How We Build Your Miami Website"}
        stages={[
          {"number":"01","title":"Discovery & Strategy","description":"We map your ideal customer profile, audit the top three competitors in your Miami market, and agree the sitemap and content plan — including multilingual scope if needed. You leave this phase knowing exactly what the site will do and how we will measure it. — Days 1–2"},
          {"number":"02","title":"Design & Prototyping","description":"Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written. Fast turnaround keeps the 7-day clock on track. — Days 3–4"},
          {"number":"03","title":"Development","description":"We build the site in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Multilingual-ready architecture is scaffolded from the first commit — not bolted on afterward. Performance budgets are enforced throughout. — Days 5–6"},
          {"number":"04","title":"Content & SEO","description":"Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot). Spanish metadata added where in scope. — Day 6–7"},
          {"number":"05","title":"Launch & Handover","description":"We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions. — Day 7+"}
        ]}
      />
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline={"What Miami businesses look like after FactoryJet."}
        cards={[
          {"industry":"FinTech & Financial Services","title":"Miami FinTech & Financial Services Client","description":"Brickell's financial corridor hosts 80+ international banks and a growing FinTech ecosystem. Companies here need sites that communicate regulatory credibility, clear service architecture, and trust signals to international buyers evaluating multiple firms simultaneously. We build fast, schema-rich sites that convert sophisticated financial clients.","imageSrc":"/images/us/miami/ecommerce/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Real Estate & Luxury Property","title":"Miami Real Estate & Luxury Property Client","description":"Miami's luxury real estate market competes globally for buyers who may never visit before making a decision. Sites need gallery-heavy layouts, fast image delivery for international connections, IDX integration, and inquiry flows that work across time zones. We build for the international buyer, not just the local one.","imageSrc":"/images/us/miami/ecommerce/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Tourism & Hospitality","title":"Miami Tourism & Hospitality Client","description":"Miami's $20B+ annual tourism economy runs on first impressions — and the first impression is always the website. South Beach hotels, restaurant groups, and cruise-adjacent businesses need mobile-first, visually compelling sites with booking conversion flows that capture visitors before they bounce to a competitor.","imageSrc":"/images/us/miami/ecommerce/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/us/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"Why Miami Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Miami has credible local agencies — Refresh Agency and Absolute Web both have track records. Neither publishes a 7-day delivery commitment or builds in Next.js as standard. FactoryJet's Growth tier ($3,999) delivers equivalent scope — 10–15 pages, CMS, multilingual-ready architecture, lead capture, GA4 — at a fixed, published price, with a codebase you own outright and no monthly plugin overhead."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Refresh Agency","values":["Pricing not publicly disclosed; Miami-based digital marketing + web agency","$3,999 (Growth tier)","FactoryJet delivers in 7 days on Next.js with multilingual-ready architecture; Refresh Agency timeline and stack are not publicly stated."]},
          {"feature":"Absolute Web","values":["E-commerce and web design projects typically $8,000–$20,000+ based on published case studies","$3,999 (Growth tier)","Next.js vs platform-dependent builds means faster load times, no monthly plugin overhead, and a codebase Miami clients own outright."]}
        ]}
      />
      <IndustriesGrid
        eyebrow={"MIAMI × WEB DESIGN"}
        headline={"Web Design for Miami's Key Industries"}
        lead={"From Brickell's finance corridor to the Art Basel crowd in Wynwood, Miami's economy spans industries with very different digital needs. FactoryJet has built sites for each of them."}
        sectors={[
          {"name":"FinTech & Financial Services","description":"Brickell City Centre hosts 80+ international banks and a growing FinTech ecosystem covering payments, wealth management, and cross-border finance. Companies here need sites that communicate regulatory credibility, clear service architecture, and trust signals to international buyers evaluating multiple firms simultaneously. We build fast, schema-rich sites that rank and convert.","example":"Wealth management firms, payment processors, and FinTech startups serving the Brickell corridor and Latin American clients."},
          {"name":"Real Estate & Luxury Property","description":"Miami's luxury real estate market competes globally — with international buyers from Latin America, Europe, and beyond making decisions remotely. Sites need gallery-heavy layouts, fast image delivery, IDX integration, and inquiry flows optimized for buyers in multiple time zones. We build for the international buyer, not just the local one.","example":"Luxury brokerages, property developers, and property management companies serving Miami-Dade and Broward counties."},
          {"name":"Tourism & Hospitality","description":"Miami's $20B+ annual tourism economy runs on first impressions — and the first impression is always the website. South Beach hotels, restaurant groups, cruise-adjacent businesses, and tour operators need mobile-first, visually compelling sites with booking conversion flows that capture visitors before they bounce to a competitor platform.","example":"Boutique hotels, restaurant groups, and tour operators serving South Beach, Brickell, and the Port of Miami."},
          {"name":"Healthcare & Life Sciences","description":"Jackson Health System employs 14,000+ staff and the University of Miami Health System anchors a broader healthcare cluster of 300+ biotech and life sciences companies across Miami-Dade. Sites in this sector need HIPAA-aware contact forms, clear service navigation for patients and partners, and local SEO that competes in a dense provider market.","example":"Private practices, life sciences vendors, and healthcare service firms across Miami-Dade and Broward counties."},
          {"name":"Professional & Business Services","description":"Latin American HQs, international consultancies, law firms, and accounting practices serving cross-border clients make up a significant slice of Miami's professional services economy. These businesses need authority-building content, bilingual capability signals, and lead capture flows designed for longer B2B sales cycles with international prospects.","example":"Law firms, consultancies, and accounting practices serving Latin American corporate clients from Miami offices."}
        ]}
      />
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"Transparent Pricing for Miami Businesses"}
        lead={"Miami agency rates for web design typically start at $8,000 and run to $20,000+ for projects with comparable scope. FactoryJet's Growth tier delivers 10–15 pages, a blog CMS, multilingual-ready architecture, SEO, and analytics for $3,999 — at a fixed, published price, with 7-day delivery and a Next.js codebase you own outright. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"$1,999","description":"5-page brochure site, fast mobile load, ranks for your name and core service. Best for local Miami businesses and sole traders.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"$3,999","description":"10–15 page site with blog CMS, lead-capture, multilingual-ready architecture, and analytics. Best for Miami SMBs scaling online.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Multilingual-ready architecture","Lead capture & email automation","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"$7,500+","description":"Custom Next.js with e-commerce, AI features, API integrations, and priority support. Best for complex Miami businesses with international requirements.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline={"4.9/5 across 150+ reviews from Miami and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Miami Businesses"}
        categories={FAQ_CATEGORIES}
        items={[{"question":"How much does a website cost for a small business in Miami?","answer":"Most Miami small businesses choose the Starter tier ($1,999) for a clean five-page site or Growth ($3,999) for a blog CMS, multilingual-ready architecture, and lead capture. Custom builds with e-commerce or AI features start at $7,500. Local Miami agency rates for comparable scope typically run $8,000–$20,000+.","category":"pricing"},{"question":"How long does it take to build a website?","answer":"A standard FactoryJet build completes in 7 days from kickoff to launch. Days 1–2 cover discovery and strategy, Days 3–4 cover design and prototyping, Days 5–6 cover development, and Day 7 covers content, SEO finalization, and launch. We do not start the clock until your brand assets and content are in our shared workspace.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my new Miami site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Miami' or 'FinTech website Miami' take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch.","category":"pricing"},{"question":"Do you build websites for FinTech and financial services companies in Brickell?","answer":"Yes. Miami's Brickell corridor is one of our most common client profiles. We build sites that communicate regulatory credibility and service architecture to international buyers who research before they talk to anyone. That means clear capability pages, trust signals (certifications, regulatory disclosures, client logos), and lead-capture flows designed for sophisticated B2B buyers.","category":"local"},{"question":"Can you build multilingual websites — English and Spanish?","answer":"Yes. Miami's bilingual market is a core design constraint, not an afterthought. FactoryJet's Growth tier includes multilingual-ready architecture from the first commit — meaning the codebase is structured to support Spanish content without a full rebuild later. We can also deliver fully translated Spanish pages if content is provided, and we build Spanish metadata for SEO.","category":"local"},{"question":"How does FactoryJet compare to Miami agencies like Refresh Agency or Absolute Web?","answer":"Refresh Agency and Absolute Web are credible Miami agencies with track records. Neither publishes a 7-day delivery commitment. Refresh Agency does not publish pricing. Absolute Web's e-commerce projects typically run $8,000–$20,000+. FactoryJet publishes all three tiers upfront, delivers in 7 days, and builds in Next.js — which means faster load times and no monthly plugin overhead for your team.","category":"local"},{"question":"We're a real estate company in Miami targeting international buyers. What do you build?","answer":"Gallery-heavy layouts, fast image delivery (WebP optimized for international connections), IDX integration capability, inquiry forms that work across time zones, and multilingual-ready architecture for buyers browsing in Spanish, Portuguese, or other languages. We also build schema markup that helps your listings appear in AI search results — increasingly important as international buyers research remotely before visiting.","category":"included"},{"question":"Do you handle website maintenance after launch?","answer":"Yes. Every project includes a 30-day post-launch support window covering bug fixes, content updates, and training questions at no extra cost. After that, we offer ongoing maintenance packages for businesses that want regular updates, performance monitoring, and priority turnaround on changes. Most Miami clients on retainer pay a flat monthly fee and never deal with a surprise invoice.","category":"support"},{"question":"Who owns the website code and design files after the project?","answer":"You do — fully. FactoryJet hands over the complete Next.js codebase, all Figma design files, and any CMS credentials at the end of every project. There is no proprietary platform, no lock-in, and no monthly fee tied to the build itself. You can host it anywhere, hand it to another developer, or manage it in-house.","category":"support"},{"question":"Can you build a website that works well for Spanish-speaking customers in Little Havana or Doral?","answer":"Absolutely. Miami's Spanish-speaking market — particularly in neighborhoods like Little Havana, Doral, and Hialeah — is too large to ignore. We build bilingual sites with proper hreflang tags, Spanish metadata, and content structures designed for both language audiences. If you provide Spanish copy, we implement it cleanly. If you need translation guidance, we can coordinate that as part of the project scope.","category":"local"},{"question":"Do you build e-commerce websites for Miami businesses?","answer":"Yes. Our Custom tier ($7,500+) covers full e-commerce builds — product catalogs, checkout flows, payment integrations, and inventory management. Miami's retail and DTC brands often need sites that handle both English and Spanish-speaking shoppers and process international orders. We build on Next.js with headless commerce architecture so you own the stack and aren't paying monthly platform fees that scale against your revenue.","category":"technical"},{"question":"We run a luxury brand in Coral Gables or Miami Beach. Can you design a site that matches our positioning?","answer":"Yes. Luxury brand sites require a different visual language — generous whitespace, high-resolution imagery with fast delivery, restrained typography, and conversion flows that feel premium rather than pushy. We have built luxury brand sites for the Coral Gables and Miami Beach markets and understand the balance between aesthetic ambition and measurable performance. The result looks like a $30,000 agency build because we build to the same visual standards, just without the overhead.","category":"local"},{"question":"What about international SEO? My clients come from Latin America and Europe.","answer":"International SEO is built into our Growth and Custom tiers. That includes hreflang tags for language and region targeting, Spanish-language metadata, schema markup that AI crawlers can parse in multiple languages, and page speed optimization for international connections that may not have US-level bandwidth. Miami businesses with Latin American client bases often see significant organic traffic gains from proper hreflang implementation alone.","category":"technical"},{"question":"My business gets a lot of tourist traffic in season. How do you design for mobile visitors who are already in Miami?","answer":"Mobile-first is our default — not a feature we charge extra for. Every site we build loads fast on 4G connections, renders cleanly on any screen size, and puts the most important actions (call, book, inquiry) within a single thumb tap. For tourism and hospitality businesses in South Beach or Wynwood, we also optimize for 'near me' search intent so visitors already in the area find you on Google Maps and your site simultaneously.","category":"technical"},{"question":"We're a restaurant group in Miami Beach or Wynwood. What should our website include?","answer":"At minimum: a fast-loading menu (ideally a PDF and an HTML version for SEO), a reservation or inquiry flow, high-quality food and venue photography with WebP delivery, and Google Maps integration. For groups with multiple locations — common in Miami Beach and Wynwood — we build multi-location architecture that ranks each venue independently. We also wire up GA4 so you can see which traffic source is driving reservations.","category":"local"},{"question":"Can you integrate IDX property search for a real estate site?","answer":"Yes. IDX integration is available in our Custom tier and connects your site to the MLS database so visitors can search live listings directly on your site rather than bouncing to Zillow or Realtor.com. For Miami's luxury and international buyer market, we pair IDX with multilingual UX and fast image delivery so the search experience works for international buyers browsing from Latin America or Europe.","category":"local"},{"question":"Do you add AI features like chatbots or smart search to websites?","answer":"Yes, on the Custom tier. We integrate AI chat (using APIs from OpenAI or Anthropic depending on fit), semantic search for product or content libraries, and AI-assisted lead qualification flows. For Miami businesses with high international inquiry volume — common in real estate, FinTech, and professional services — an AI-powered intake form that qualifies leads in English and Spanish before routing them to your team can meaningfully reduce response time and increase conversion rate.","category":"technical"},{"question":"How do I know my new site will actually be fast enough for international visitors?","answer":"We enforce Core Web Vitals green and Lighthouse performance scores above 90 on every build. Images are delivered as WebP via Cloudflare's global CDN, which has edge nodes in Miami and across Latin America. JavaScript is code-split and deferred where possible. We do not ship third-party scripts without a performance review. For international visitors connecting from São Paulo, Buenos Aires, or Madrid — common for Miami's business and tourism markets — these choices mean a site that loads in under two seconds rather than five.","category":"technical"},{"question":"How many revisions are included and how does the feedback process work?","answer":"Starter tier includes two structured revision rounds at the design stage before development begins. Growth and Custom tiers include three. Revisions happen in a shared Figma file with comments — not email threads — so feedback is tracked, actioned, and confirmed in one place. We do not make scope-expanding changes during revision rounds without a separate agreement, but minor adjustments to layout, copy, and color are covered.","category":"pricing"},{"question":"Where will my site be hosted, and what does that cost?","answer":"We deploy to Cloudflare Pages, which has a generous free tier that covers most FactoryJet sites indefinitely. Cloudflare's global CDN is particularly fast for Miami businesses with international audiences — edge nodes in Latin America mean faster load times for clients in Colombia, Brazil, or Argentina. If your project requires a managed database or server-side logic, we provision on Vercel or Railway and give you the credentials outright. Hosting costs are typically $0–$20/month depending on traffic volume.","category":"pricing"},{"question":"What kind of ROI can I expect from a new website?","answer":"The most direct ROI drivers are organic search traffic, lead form conversion rate, and time-to-response for inbound inquiries. Miami businesses in professional services and real estate typically see meaningful organic traffic gains within 90 days of a properly SEO-structured launch. E-commerce and hospitality sites often see conversion rate improvements within the first 30 days if the previous site had significant UX or speed issues. We wire GA4 from day one so you have a clear before/after picture — not anecdotes.","category":"local"},{"question":"Does FactoryJet work with businesses in Fort Lauderdale and the broader South Florida corridor?","answer":"Yes. We serve the full South Florida market — Miami-Dade, Broward, and Palm Beach counties. Fort Lauderdale businesses in marine, aviation, finance, and tourism are a common fit. The 7-day timeline and fixed pricing work the same regardless of your specific city, and we build with local SEO structures that target your actual service area — whether that's Fort Lauderdale, Aventura, or Coral Gables.","category":"local"}]}
      />
      {/* Cross-link: Related Services in Miami */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#F05A28] uppercase tracking-widest mb-4">
            Also in Miami
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/us/miami/ecommerce-development/"
              className="px-5 py-2 rounded-full border border-[#F05A28] text-[#F05A28] text-sm font-medium hover:bg-[#F05A28] hover:text-white transition-colors"
            >
              Ecommerce Development →
            </Link>
          </div>
        </div>
      </section>
      <WebDesignCityLinksUS currentCity="miami" />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Miami Website?"}
        sub={"Miami's $413B metro economy moves at international speed. Every week without a high-performing website is a week your competitors are capturing the searches — and the clients — you should own. Start today and have a sitemap ready within 72 hours."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        extraCta={<WhatsAppCTA city="Miami" variant="dark" />}
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
        "@id": "https://factoryjet.com/us/miami/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919103398557",
        "areaServed": "Miami",
        "priceRange": "$1,999–$7,500+",
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "150", "reviewCount": "150", "bestRating": "5", "worstRating": "1"}
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/us/miami/web-design#service",
        "name": "Web Design Miami",
        "provider": {
          "@type": "Organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Miami",
        "description": "FactoryJet builds fast, conversion-focused websites for Miami businesses — from $1,999. 7-day delivery. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/us/miami/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Miami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Miami small businesses choose the Starter tier ($1,999) for a clean five-page site or Growth ($3,999) for a blog CMS, multilingual-ready architecture, and lead capture. Custom builds with e-commerce or AI features start at $7,500. Local Miami agency rates for comparable scope typically run $8,000–$20,000+."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard FactoryJet build completes in 7 days from kickoff to launch. Days 1–2 cover discovery and strategy, Days 3–4 cover design and prototyping, Days 5–6 cover development, and Day 7 covers content, SEO finalization, and launch. We do not start the clock until your brand assets and content are in our shared workspace."
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
            "name": "How long until my new Miami site ranks on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Miami' or 'FinTech website Miami' take three to six months for a new domain. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites for FinTech and financial services companies in Brickell?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Miami's Brickell corridor is one of our most common client profiles. We build sites that communicate regulatory credibility and service architecture to international buyers who research before they talk to anyone. That means clear capability pages, trust signals (certifications, regulatory disclosures, client logos), and lead-capture flows designed for sophisticated B2B buyers."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build multilingual websites — English and Spanish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Miami's bilingual market is a core design constraint, not an afterthought. FactoryJet's Growth tier includes multilingual-ready architecture from the first commit — meaning the codebase is structured to support Spanish content without a full rebuild later. We can also deliver fully translated Spanish pages if content is provided, and we build Spanish metadata for SEO."
            }
          },
          {
            "@type": "Question",
            "name": "How does FactoryJet compare to Miami agencies like Refresh Agency or Absolute Web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Refresh Agency and Absolute Web are credible Miami agencies with track records. Neither publishes a 7-day delivery commitment. Refresh Agency does not publish pricing. Absolute Web's e-commerce projects typically run $8,000–$20,000+. FactoryJet publishes all three tiers upfront, delivers in 7 days, and builds in Next.js — which means faster load times and no monthly plugin overhead for your team."
            }
          },
          {
            "@type": "Question",
            "name": "We're a real estate company in Miami targeting international buyers. What do you build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gallery-heavy layouts, fast image delivery (WebP optimized for international connections), IDX integration capability, inquiry forms that work across time zones, and multilingual-ready architecture for buyers browsing in Spanish, Portuguese, or other languages. We also build schema markup that helps your listings appear in AI search results — increasingly important as international buyers research remotely before visiting."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle website maintenance after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every project includes a 30-day post-launch support window covering bug fixes, content updates, and training questions at no extra cost. After that, we offer ongoing maintenance packages for businesses that want regular updates, performance monitoring, and priority turnaround on changes. Most Miami clients on retainer pay a flat monthly fee and never deal with a surprise invoice."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the website code and design files after the project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do — fully. FactoryJet hands over the complete Next.js codebase, all Figma design files, and any CMS credentials at the end of every project. There is no proprietary platform, no lock-in, and no monthly fee tied to the build itself. You can host it anywhere, hand it to another developer, or manage it in-house."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a website that works well for Spanish-speaking customers in Little Havana or Doral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Miami's Spanish-speaking market — particularly in neighborhoods like Little Havana, Doral, and Hialeah — is too large to ignore. We build bilingual sites with proper hreflang tags, Spanish metadata, and content structures designed for both language audiences. If you provide Spanish copy, we implement it cleanly. If you need translation guidance, we can coordinate that as part of the project scope."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build e-commerce websites for Miami businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Custom tier ($7,500+) covers full e-commerce builds — product catalogs, checkout flows, payment integrations, and inventory management. Miami's retail and DTC brands often need sites that handle both English and Spanish-speaking shoppers and process international orders. We build on Next.js with headless commerce architecture so you own the stack and aren't paying monthly platform fees that scale against your revenue."
            }
          },
          {
            "@type": "Question",
            "name": "We run a luxury brand in Coral Gables or Miami Beach. Can you design a site that matches our positioning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Luxury brand sites require a different visual language — generous whitespace, high-resolution imagery with fast delivery, restrained typography, and conversion flows that feel premium rather than pushy. We have built luxury brand sites for the Coral Gables and Miami Beach markets and understand the balance between aesthetic ambition and measurable performance. The result looks like a $30,000 agency build because we build to the same visual standards, just without the overhead."
            }
          },
          {
            "@type": "Question",
            "name": "What about international SEO? My clients come from Latin America and Europe.",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "International SEO is built into our Growth and Custom tiers. That includes hreflang tags for language and region targeting, Spanish-language metadata, schema markup that AI crawlers can parse in multiple languages, and page speed optimization for international connections that may not have US-level bandwidth. Miami businesses with Latin American client bases often see significant organic traffic gains from proper hreflang implementation alone."
            }
          },
          {
            "@type": "Question",
            "name": "My business gets a lot of tourist traffic in season. How do you design for mobile visitors who are already in Miami?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile-first is our default — not a feature we charge extra for. Every site we build loads fast on 4G connections, renders cleanly on any screen size, and puts the most important actions (call, book, inquiry) within a single thumb tap. For tourism and hospitality businesses in South Beach or Wynwood, we also optimize for 'near me' search intent so visitors already in the area find you on Google Maps and your site simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "We're a restaurant group in Miami Beach or Wynwood. What should our website include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At minimum: a fast-loading menu (ideally a PDF and an HTML version for SEO), a reservation or inquiry flow, high-quality food and venue photography with WebP delivery, and Google Maps integration. For groups with multiple locations — common in Miami Beach and Wynwood — we build multi-location architecture that ranks each venue independently. We also wire up GA4 so you can see which traffic source is driving reservations."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate IDX property search for a real estate site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. IDX integration is available in our Custom tier and connects your site to the MLS database so visitors can search live listings directly on your site rather than bouncing to Zillow or Realtor.com. For Miami's luxury and international buyer market, we pair IDX with multilingual UX and fast image delivery so the search experience works for international buyers browsing from Latin America or Europe."
            }
          },
          {
            "@type": "Question",
            "name": "Do you add AI features like chatbots or smart search to websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, on the Custom tier. We integrate AI chat (using APIs from OpenAI or Anthropic depending on fit), semantic search for product or content libraries, and AI-assisted lead qualification flows. For Miami businesses with high international inquiry volume — common in real estate, FinTech, and professional services — an AI-powered intake form that qualifies leads in English and Spanish before routing them to your team can meaningfully reduce response time and increase conversion rate."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know my new site will actually be fast enough for international visitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We enforce Core Web Vitals green and Lighthouse performance scores above 90 on every build. Images are delivered as WebP via Cloudflare's global CDN, which has edge nodes in Miami and across Latin America. JavaScript is code-split and deferred where possible. We do not ship third-party scripts without a performance review. For international visitors connecting from São Paulo, Buenos Aires, or Madrid — common for Miami's business and tourism markets — these choices mean a site that loads in under two seconds rather than five."
            }
          },
          {
            "@type": "Question",
            "name": "How many revisions are included and how does the feedback process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter tier includes two structured revision rounds at the design stage before development begins. Growth and Custom tiers include three. Revisions happen in a shared Figma file with comments — not email threads — so feedback is tracked, actioned, and confirmed in one place. We do not make scope-expanding changes during revision rounds without a separate agreement, but minor adjustments to layout, copy, and color are covered."
            }
          },
          {
            "@type": "Question",
            "name": "Where will my site be hosted, and what does that cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages, which has a generous free tier that covers most FactoryJet sites indefinitely. Cloudflare's global CDN is particularly fast for Miami businesses with international audiences — edge nodes in Latin America mean faster load times for clients in Colombia, Brazil, or Argentina. If your project requires a managed database or server-side logic, we provision on Vercel or Railway and give you the credentials outright. Hosting costs are typically $0–$20/month depending on traffic volume."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of ROI can I expect from a new website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most direct ROI drivers are organic search traffic, lead form conversion rate, and time-to-response for inbound inquiries. Miami businesses in professional services and real estate typically see meaningful organic traffic gains within 90 days of a properly SEO-structured launch. E-commerce and hospitality sites often see conversion rate improvements within the first 30 days if the previous site had significant UX or speed issues. We wire GA4 from day one so you have a clear before/after picture — not anecdotes."
            }
          },
          {
            "@type": "Question",
            "name": "Does FactoryJet work with businesses in Fort Lauderdale and the broader South Florida corridor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We serve the full South Florida market — Miami-Dade, Broward, and Palm Beach counties. Fort Lauderdale businesses in marine, aviation, finance, and tourism are a common fit. The 7-day timeline and fixed pricing work the same regardless of your specific city, and we build with local SEO structures that target your actual service area — whether that's Fort Lauderdale, Aventura, or Coral Gables."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/us/miami/web-design#breadcrumbs",
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
            "name": "Miami",
            "item": "https://factoryjet.com/us/miami"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Web Design",
            "item": "https://factoryjet.com/us/miami/web-design"
          }
        ]
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How FactoryJet builds your Miami website in 7 days",
    "description": "Our proven 7-day process for delivering a professional, SEO-optimized website for Miami businesses.",
    "totalTime": "P7D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Day 1 — Discovery Call", "text": "We learn your business, goals, and competitive landscape in Miami. We define the sitemap, content strategy, and technical requirements." },
      { "@type": "HowToStep", "position": 2, "name": "Day 2 — Strategy & Structure", "text": "We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins." },
      { "@type": "HowToStep", "position": 3, "name": "Days 3–4 — Design", "text": "We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs." },
      { "@type": "HowToStep", "position": 4, "name": "Days 5–6 — Development & SEO", "text": "We build your site in Next.js or WordPress, optimize Core Web Vitals, add local SEO for Miami, structured data, and connect all integrations." },
      { "@type": "HowToStep", "position": 5, "name": "Day 7 — Launch", "text": "Your Miami website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support." }
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
          "name": "Web Design Miami FL | 7 Days from $1,500 | FactoryJet",
          "url": "https://factoryjet.com/us/miami/web-design/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
    </>
  );
}
