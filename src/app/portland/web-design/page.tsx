import type { Metadata } from 'next';
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
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns'
import Image from 'next/image'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Web Design Portland OR | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Portland businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
  alternates: {
    canonical: 'https://factoryjet.com/portland/web-design',
    languages: webDesignPriorityCityAlternatesUS.portland,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Portland OR | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Portland businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
    url: 'https://factoryjet.com/portland/web-design/',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design — Portland, OR',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Portland OR | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Portland businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
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

export default function PortlandWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_portland_web_design_hero" />}
        eyebrow={"WEB DESIGN · PORTLAND"}
        headline={"Web Design in Portland That Converts Visitors Into Clients"}
        lead={"Portland businesses operate at the intersection of sustainability, outdoor lifestyle, and Pacific Northwest tech — a buyer base that researches deeply, values authenticity, and will bounce from a slow site in seconds. FactoryJet delivers a production-ready website in 7 days, fixed-price. You own the code, the design files, and the results."}
        trustItems={["Fixed-price websites", "7-day delivery", "Next.js + GA4 included"]}
        extraCta={<WhatsAppCTA city="Portland" variant="light" />}
        rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Portland, OR" badgeLabel="Live in 7 days" />}
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
        rightSlot={<Image src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden={true} width={1200} height={800} className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Portland Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Portland has a strong local agency market. Gravitate Design is a Portland-based agency that publishes enterprise-level rates for full web projects. Thrive Internet Marketing Agency maintains a Portland office with its own published web project rates. Epicosity serves Pacific Northwest clients with branding and web bundled together.\n\nThe FactoryJet Growth tier delivers the same 10–15 page scope — blog CMS, lead capture, GA4, Next.js, and a recorded handover — at a fraction of the cost, fixed-price, with US project management. Our 7-day delivery guarantee means you are not waiting months for a site to launch while your competitors are already ranking. No WordPress plugin overhead. No retainer required. No proprietary platform that traps your content."}
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
          {"industry":"Outdoor & Lifestyle Brands","title":"Outdoor & Lifestyle Brand Client","description":"Portland is home to Nike, Adidas North America, and Columbia Sportswear — and a deep ecosystem of suppliers, DTC brands, and specialty outdoor retailers that operate in their wake. These businesses need brand-storytelling architecture, fast WebP image delivery, and e-commerce or wholesale inquiry flows that communicate at the same premium level as the category giants.","imageSrc":"/images/us/portland/ecommerce/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Food & Beverage","title":"Food & Beverage Client","description":"Portland's food and beverage scene is nationally recognized — craft brewing, organic food, and sustainability-driven brands all compete in a market where buyers read the label before they buy. We build content-rich sites that communicate sourcing, story, and values with the depth that earns trust before the first purchase.","imageSrc":"/images/us/portland/ecommerce/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Technology & SaaS","title":"Portland Technology & SaaS Client","description":"Portland's growing tech corridor includes Airbnb, Google, and Salesforce offices alongside Intel's 20,000-person Hillsboro campus. Tech companies and SaaS startups in this market need sites that communicate product depth and technical credibility to buyers who research before they talk to sales — fast, schema-rich, and built for longer B2B sales cycles.","imageSrc":"/images/us/portland/ecommerce/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Portland Agencies"}
        lead={"Portland's agency market is real. Gravitate Design and Thrive Internet Marketing Agency are both credible operations charging enterprise-level rates. FactoryJet delivers comparable scope at a fraction of the cost, fixed-price, with US project management — plus a 7-day delivery guarantee and a Next.js codebase instead of WordPress."}
        columns={[{"label":"Their pricing"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we cost less"}]}
        rows={[
          {"feature":"Gravitate Design","values":["Enterprise-level rates per published rate card","Fixed-price · 7-day delivery (Growth tier)","FactoryJet delivers in 7 days on Next.js at a fraction of the cost of Gravitate's published minimum."]},
          {"feature":"Thrive Internet Marketing","values":["Published agency rate card","Fixed-price · 7-day delivery (Growth tier)","FactoryJet includes Next.js, JSON-LD schema, GA4, and a recorded handover — Thrive's scope and stack are not publicly detailed."]},
        ]}
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
      <PricingTiers
        eyebrow={"HOW WE SCOPE"}
        headline={"What's Included for Portland Businesses"}
        lead={"Portland agency rates run enterprise-level. FactoryJet delivers the same quality at a fraction of the cost, fixed-price, with US project management — the same 10–15 page Growth scope with blog CMS, lead capture, GA4, and Next.js, delivered in 7 days, with code you own outright. Pricing is scoped to your build; the main drivers are page count, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. No retainer required."}
        tiers={[
          {"name":"Starter","priceRange":"Fixed-price","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local services who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"name":"Growth","priceRange":"Fixed-price","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for SMBs scaling online who need the site to actively generate qualified inquiries.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"name":"Custom","priceRange":"Fixed-price","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline={"Rated 4.9/5 by clients from Portland and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Portland Businesses"}
        categories={FAQ_CATEGORIES}
        items={[{"question":"How much does a website cost for a small business in Portland?","answer":"Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity. Most Portland small businesses choose the Starter tier for a clean five-page site, or Growth for a blog CMS and lead capture. Custom builds add e-commerce or AI features. Compared to local Portland agencies like Gravitate Design, FactoryJet delivers the same quality at a fraction of the cost. Every project is quoted up front after a free discovery call, so you know the full cost before work starts.","category":"pricing"},{"question":"How long does it take to build a website?","answer":"A standard FactoryJet build ships in 7 days from kickoff to launch. Discovery and design take the first two days, development runs days three through six, and content, SEO, and launch happen in the final day. We do not start the clock until your brand assets and content are in our shared workspace.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes discovery, Figma prototyping, Next.js development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Portland' take three to six months for a new domain, and longer for nationally competitive terms. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project from day one, not sold as a post-launch add-on.","category":"pricing"},{"question":"I sell outdoor or lifestyle products — do you have experience with brand-storytelling sites for that market?","answer":"Yes. Portland's outdoor and lifestyle sector — including suppliers to the Nike and Adidas ecosystems and DTC outdoor brands — is one of our most common client profiles. We build brand-storytelling architecture with fast WebP image delivery and wholesale or e-commerce inquiry flows that communicate at the premium level these buyers expect.","category":"platform"},{"question":"Can you help a sustainability brand or B-Corp communicate its values on its website?","answer":"Yes. Portland has one of the highest concentrations of B-Corp certified businesses in the US, and we understand how these buyers evaluate websites. We build content-depth structures that communicate sourcing, certifications, and values with the specificity that earns trust before the first purchase — not just a mission statement page.","category":"local"},{"question":"We're a tech startup in Portland's tech corridor — can you build a B2B SaaS site?","answer":"Yes. Portland's tech corridor includes Airbnb, Google, Salesforce, and Intel's 20,000-person Hillsboro campus. We build SaaS sites with clear product feature architecture, schema markup, and lead-capture flows designed for longer B2B sales cycles — buyers in this space research before they talk to sales, and the site needs to meet them where they are.","category":"platform"},{"question":"How does FactoryJet compare to Gravitate Design for Portland web projects?","answer":"Gravitate Design is a well-regarded Portland agency charging enterprise-level rates. The FactoryJet Growth tier delivers 10–15 pages, a blog CMS, GA4, lead capture, and a Next.js codebase at a fraction of the cost, fixed-price, with US project management and a 7-day delivery guarantee. No WordPress overhead. No retainer required. You own everything at handover.","category":"local"},{"question":"Do you build websites for craft breweries in Portland?","answer":"Yes, and it is a common request. Portland's craft brewing scene is nationally recognized — the city regularly ranks among the top beer destinations in the US. We build brewery sites with taproom location pages, rotating tap list displays, event calendars, and online merchandise or bottle shop sections. The content architecture is designed to earn trust with both local regulars and visiting beer tourists.","category":"local"},{"question":"We run a food cart pod in Portland — do we need a website?","answer":"A dedicated site does two things a Google Business listing cannot: it ranks for specific searches like 'best food cart Southeast Portland' and it gives you a direct channel to announce new hours, locations, or catering availability. A Starter build covers exactly this use case — a fast mobile site, a contact form, and structured data that feeds AI search results where a growing share of food discovery now happens.","category":"local"},{"question":"I have a restaurant or bar in the Pearl District — what does a good site actually need?","answer":"Pearl District buyers are high-intent and local. They want the menu, current hours, reservation or waitlist link, and a feel for the atmosphere — all loading in under two seconds on a phone. We build restaurant sites with accessible menus (not PDFs), OpenTable or Resy integration, and event promotion sections. Every build includes GA4 so you can see which pages drive actual reservations versus just traffic.","category":"local"},{"question":"Can you build an e-commerce site for an outdoor gear or apparel brand selling to Pacific Northwest customers?","answer":"Yes. Pacific Northwest outdoor buyers are experienced — they compare specs, read materials lists, and look for sustainability callouts before they add to cart. We build Shopify-integrated or custom Next.js storefronts with fast WebP product imagery, detailed size guides, sustainability badges, and performance-tuned checkout flows. Every storefront ships with GA4 e-commerce tracking so you can see exactly where buyers drop off.","category":"platform"},{"question":"We're a Willamette Valley winery selling direct-to-consumer — can FactoryJet build our site?","answer":"Yes. Willamette Valley DTC wine sites need wine club signup flows, vintage archive pages, tasting room reservation links, and Oregon compliance-aware age verification. We build these with CMS-editable vintage pages so your team can add new releases without a developer, plus structured data that helps AI assistants surface your wines in gift recommendation and wine tourism queries.","category":"local"},{"question":"Do you do website maintenance after launch?","answer":"Every project includes a 30-day post-launch support window for fixes, edits, and training questions at no extra charge. After that, we offer monthly maintenance plans that cover dependency updates, performance monitoring, and content edits. If you prefer to handle maintenance in-house, the handover session and codebase documentation make that straightforward — you own the code outright.","category":"support"},{"question":"Who owns the code and design files when the project is done?","answer":"You do. At handover you receive the full Next.js codebase in a GitHub repository you control, plus the Figma design files including all components and the design system. There is no platform lock-in and no ongoing license fee. You can hand the project to any developer in the future — the codebase is documented and uses standard Next.js conventions.","category":"support"},{"question":"Can you add AI features to a Portland business website?","answer":"Yes. Common AI features we add include semantic search over a product catalog, AI chat trained on your FAQ and service pages, and dynamic content recommendations. Every FactoryJet site already ships with JSON-LD schema optimized for AI crawlers (GPTBot, ClaudeBot, PerplexityBot) so your content surfaces correctly in AI-generated answers — even without a custom AI feature.","category":"technical"},{"question":"We're a supplier to Intel's Hillsboro campus — do you build B2B supplier sites?","answer":"Yes. B2B supplier sites for the Intel ecosystem and broader Hillsboro tech corridor need to communicate technical capability, certifications, and compliance information clearly — and quickly — to procurement teams who evaluate multiple vendors in a single session. We build supplier sites with structured capability matrices, downloadable spec sheets, and RFQ inquiry forms that route directly to your sales team.","category":"platform"},{"question":"How do you handle the revision process?","answer":"Starter projects include two revision rounds; Growth includes three. A revision round means you review a staged version of the site and submit consolidated feedback — we action it within 24 hours. We use a shared Figma comment board so nothing gets lost in email threads. Major scope changes requested after development begins are scoped separately, but design adjustments, copy tweaks, and color changes within the approved direction are covered.","category":"support"},{"question":"Where will my site be hosted and how fast will it be?","answer":"We deploy to Cloudflare Pages by default — a global CDN with edge nodes across North America that serves most Portland visitors from a node in the Pacific Northwest. A typical FactoryJet build achieves a Lighthouse performance score of 95–100 and Core Web Vitals in the green zone. If you have an existing hosting provider you prefer, we can deploy there instead at no additional cost.","category":"technical"},{"question":"Can you build a site that reflects Portland's sustainability culture without it feeling forced?","answer":"Yes, and this is something we think carefully about for Portland clients. Sustainability content that feels bolted-on — a green leaf icon and a vague 'we care about the planet' statement — actively harms credibility with Portland buyers who can spot it immediately. We build values sections that cite specific practices, certifications, and supply chain choices. The architecture matches what the content actually claims.","category":"pricing"},{"question":"We're based in Vancouver, WA but serve the Portland metro — does that affect anything?","answer":"Not at all. We serve Portland-metro businesses regardless of which side of the Columbia River you are on. For SEO, we target both Portland and Vancouver WA local queries where relevant, and your Google Business Profile location is factored into the local schema markup. Several of our Portland-area clients operate from Hillsboro, Beaverton, Lake Oswego, and Vancouver WA and rank well for Portland service queries.","category":"local"},{"question":"What kind of ROI can a Portland business expect from a new website?","answer":"This depends on your traffic, your current conversion rate, and your average deal value — so we are direct about it rather than citing generic percentages. The clearest ROI case is replacing a slow or outdated site that is actively losing leads: if even two additional qualified inquiries per month convert at your average deal value, a fixed-price Growth site typically pays for itself within the first quarter. We wire GA4 from day one so you can measure this precisely rather than guessing.","category":"local"},{"question":"Do you build websites for Alberta Arts District or Hawthorne businesses?","answer":"Yes. Neighborhood-specific businesses in Portland's Alberta Arts District, Hawthorne, Mississippi Avenue, and Division Street typically need sites that convey local character while still converting visitors from outside the neighborhood who discover them through search. We build with local schema markup, neighborhood-specific copy, and Google Maps embed that drives foot traffic alongside digital inquiries.","category":"local"}]}
      />
      {/* Cross-link: Related Services in Portland */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
            Also in Portland
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/portland/ecommerce-development/"
              className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
            >
              Ecommerce Development →
            </Link>
          </div>
        </div>
      </section>
      <WebDesignCityLinksUS currentCity="portland" />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Portland Website?"}
        sub={"Portland's $190B+ metro economy rewards businesses that show up with substance. In a city where buyers read your About page before they call, a slow or shallow website doesn't just underperform — it actively loses trust. Start today and have a sitemap ready within 72 hours."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        extraCta={<WhatsAppCTA city="Portland" variant="dark" />}
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
        "@id": "https://factoryjet.com/portland/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919699977699",
        "areaServed": "Portland"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/portland/web-design#service",
        "name": "Web Design Portland",
        "provider": {
          "@type": "Organization", "@id": "https://factoryjet.com/#organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Portland",
        "description": "FactoryJet builds fast, conversion-focused websites for Portland businesses. 7-day delivery, fixed-price. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/portland/web-design#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost for a small business in Portland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity. Most Portland small businesses choose the Starter tier for a clean five-page site, or Growth for a blog CMS and lead capture. Custom builds add e-commerce or AI features. Compared to local Portland agencies like Gravitate Design, FactoryJet delivers the same quality at a fraction of the cost. Every project is quoted up front after a free discovery call, so you know the full cost before work starts."
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
              "text": "Gravitate Design charges enterprise-level rates. The FactoryJet Growth tier delivers 10–15 pages, a blog CMS, GA4, lead capture, and a Next.js codebase at a fraction of the cost, fixed-price, with US project management and a 7-day delivery guarantee. No WordPress overhead. No retainer required."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites for craft breweries in Portland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and it is a common request. Portland's craft brewing scene is nationally recognized — the city regularly ranks among the top beer destinations in the US. We build brewery sites with taproom location pages, rotating tap list displays, event calendars, and online merchandise or bottle shop sections."
            }
          },
          {
            "@type": "Question",
            "name": "We run a food cart pod in Portland — do we need a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A dedicated site ranks for specific searches like 'best food cart Southeast Portland' and gives you a direct channel to announce new hours, locations, or catering availability. A Starter build covers exactly this use case — a fast mobile site, a contact form, and structured data that feeds AI search results."
            }
          },
          {
            "@type": "Question",
            "name": "I have a restaurant or bar in the Pearl District — what does a good site actually need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pearl District buyers want the menu, current hours, reservation or waitlist link, and a feel for the atmosphere — all loading in under two seconds on a phone. We build restaurant sites with accessible menus, OpenTable or Resy integration, and event promotion sections, all with GA4 tracking so you can see which pages drive actual reservations."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build an e-commerce site for an outdoor gear or apparel brand selling to Pacific Northwest customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Pacific Northwest outdoor buyers compare specs, read materials lists, and look for sustainability callouts before they add to cart. We build Shopify-integrated or custom Next.js storefronts with fast WebP product imagery, detailed size guides, sustainability badges, and performance-tuned checkout flows."
            }
          },
          {
            "@type": "Question",
            "name": "We're a Willamette Valley winery selling direct-to-consumer — can FactoryJet build our site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Willamette Valley DTC wine sites need wine club signup flows, vintage archive pages, tasting room reservation links, and Oregon compliance-aware age verification. We build these with CMS-editable vintage pages so your team can add new releases without a developer."
            }
          },
          {
            "@type": "Question",
            "name": "Do you do website maintenance after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every project includes a 30-day post-launch support window at no extra charge. After that, we offer monthly maintenance plans covering dependency updates, performance monitoring, and content edits. You own the code outright, so you can also handle maintenance in-house using any developer."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code and design files when the project is done?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do. At handover you receive the full Next.js codebase in a GitHub repository you control, plus the Figma design files including all components and the design system. There is no platform lock-in and no ongoing license fee."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add AI features to a Portland business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Common AI features include semantic search over a product catalog, AI chat trained on your FAQ and service pages, and dynamic content recommendations. Every FactoryJet site already ships with JSON-LD schema optimized for AI crawlers so your content surfaces correctly in AI-generated answers."
            }
          },
          {
            "@type": "Question",
            "name": "We're a supplier to Intel's Hillsboro campus — do you build B2B supplier sites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. B2B supplier sites for the Intel ecosystem and broader Hillsboro tech corridor need to communicate technical capability, certifications, and compliance information clearly to procurement teams. We build supplier sites with structured capability matrices, downloadable spec sheets, and RFQ inquiry forms."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the revision process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter projects include two revision rounds; Growth includes three. A revision round means you review a staged version of the site and submit consolidated feedback — we action it within 24 hours using a shared Figma comment board. Design adjustments, copy tweaks, and color changes within the approved direction are covered within the included rounds."
            }
          },
          {
            "@type": "Question",
            "name": "Where will my site be hosted and how fast will it be?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy to Cloudflare Pages by default — a global CDN that serves most Portland visitors from a Pacific Northwest edge node. A typical FactoryJet build achieves a Lighthouse performance score of 95–100 and Core Web Vitals in the green zone."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a site that reflects Portland's sustainability culture without it feeling forced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build values sections that cite specific practices, certifications, and supply chain choices — not generic green marketing. Portland buyers spot vague sustainability claims immediately, and a values section that lacks specificity actively harms credibility with the exact audience you are trying to reach."
            }
          },
          {
            "@type": "Question",
            "name": "We're based in Vancouver, WA but serve the Portland metro — does that affect anything?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not at all. We serve Portland-metro businesses regardless of which side of the Columbia River you are on. For SEO, we target both Portland and Vancouver WA local queries where relevant, and your location is factored into the local schema markup."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of ROI can a Portland business expect from a new website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The clearest ROI case is replacing a slow or outdated site that is actively losing leads. If two additional qualified inquiries per month convert at your average deal value, a fixed-price Growth site typically pays for itself within the first quarter. We wire GA4 from day one so you can measure this precisely."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites for Alberta Arts District or Hawthorne businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Neighborhood businesses in Portland's Alberta Arts District, Hawthorne, Mississippi Avenue, and Division Street need sites that convey local character while converting visitors from outside the neighborhood who discover them through search. We build with local schema markup, neighborhood-specific copy, and Google Maps embed that drives foot traffic alongside digital inquiries."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/portland/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 3, "name": "Portland", "item": "https://factoryjet.com/portland"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/portland/web-design"}
        ]
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How FactoryJet builds your Portland website in 7 days",
    "description": "Our proven 7-day process for delivering a professional, SEO-optimized website for Portland businesses.",
    "totalTime": "P7D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Day 1 — Discovery Call", "text": "We learn your business, goals, and competitive landscape in Portland. We define the sitemap, content strategy, and technical requirements." },
      { "@type": "HowToStep", "position": 2, "name": "Day 2 — Strategy & Structure", "text": "We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins." },
      { "@type": "HowToStep", "position": 3, "name": "Days 3–4 — Design", "text": "We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs." },
      { "@type": "HowToStep", "position": 4, "name": "Days 5–6 — Development & SEO", "text": "We build your site in Next.js or WordPress, optimize Core Web Vitals, add local SEO for Portland, structured data, and connect all integrations." },
      { "@type": "HowToStep", "position": 5, "name": "Day 7 — Launch", "text": "Your Portland website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support." }
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
          "name": "Web Design Portland OR | 7-Day Delivery, Fixed-Price | FactoryJet",
          "url": "https://factoryjet.com/portland/web-design/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
    </>
  );
}
