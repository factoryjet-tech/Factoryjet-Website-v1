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
  title: 'Web Design Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
  description: 'FactoryJet builds fast, conversion-focused websites for Raleigh businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
  alternates: {
    canonical: 'https://factoryjet.com/raleigh/web-design',
    languages: webDesignPriorityCityAlternatesUS.raleigh,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Raleigh businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
    url: 'https://factoryjet.com/raleigh/web-design/',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design — Raleigh, NC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    description: 'FactoryJet builds fast, conversion-focused websites for Raleigh businesses. 7-day delivery, fixed-price and milestone-paid. Next.js, SEO & GA4.',
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

const RALEIGH_FAQ_ITEMS = [{"question":"How much does a website cost for a small business in Raleigh?","answer":"Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity. Most Raleigh small businesses choose the Starter tier for a clean five-page site, or Growth for a blog CMS and lead capture. Custom builds with e-commerce or AI features are scoped on top. Every project is quoted up front after a free discovery call, so you know the full cost before work starts.","category":"pricing"},{"question":"How long does it take to build a website?","answer":"FactoryJet delivers in 7 days from kickoff to launch. Discovery and strategy take the first two days, design and prototyping run days three and four, development happens on days five and six, content and SEO land on day six to seven, and we launch and hand over on day seven. We don't start the clock until your brand assets and content are in our shared workspace.","category":"pricing"},{"question":"What's included in a web design project?","answer":"Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up from day one, and a recorded handover session. We don't charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.","category":"included"},{"question":"How long until my new site ranks on Google?","answer":"Branded searches (your business name) typically rank within one to two weeks of launch. Service plus location queries like 'web design Raleigh' take three to six months for a new domain, longer for competitive national terms. The work that compresses this timeline — schema markup, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch.","category":"pricing"},{"question":"We're a biotech or pharma vendor serving the RTP cluster — do you understand what our website needs?","answer":"Yes. Buyers in the pharma and life sciences space evaluate evidence before making decisions. That means your site needs technical credibility: precise service descriptions, publication or study references where appropriate, regulatory context, and design that signals GMP-level attention to detail. We structure content to answer procurement-level questions before the first sales call — because in this sector, the website is often the pre-qualification filter.","category":"local"},{"question":"We're a tech startup or SaaS company in the Triangle — can you build for a technical buyer audience?","answer":"Yes. We build product-depth pages, integration documentation, and demo or trial conversion flows tuned for technical buyers with longer B2B sales cycles. For Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area SaaS companies, this is our most common project profile.","category":"local"},{"question":"We're a university spinout or research-adjacent company — what does our website need?","answer":"University spinouts need to bridge academic credibility with commercial clarity. That means translating research into buyer-facing value propositions, structuring content around business outcomes rather than methodology, and using design that signals precision without being impenetrable to non-technical buyers. We've built sites for this profile before and know the balance required.","category":"local"},{"question":"How does FactoryJet compare to Raleigh agencies like Forge3 or iFactory?","answer":"Forge3 and iFactory are established Raleigh agencies with solid reputations. Neither commits to delivery timelines or fixed pricing in writing. FactoryJet gives you a clear, fixed-price quote up front after a free discovery call, delivers in 7 days in writing, and builds in Next.js rather than WordPress — which means faster load times, no monthly plugin maintenance costs, and a codebase your team can manage without a developer on retainer.","category":"local"},{"question":"Do you handle website maintenance after launch?","answer":"Yes. Every project includes a 30-day post-launch support window covering bug fixes, content updates, and CMS training questions. After that, you can manage the site yourself — the recorded handover session and CMS are designed for non-developers. We also offer ongoing maintenance retainers for Raleigh businesses that want a dedicated team handling updates, performance monitoring, and security patches.","category":"support"},{"question":"Who owns the code and design after the project is done?","answer":"You own everything — the Next.js codebase, the Figma design system, all copy and imagery we produce. There's no vendor lock-in, no proprietary platform, and no monthly license fee to keep your site running. You can take the code to any developer or host it anywhere. Most Raleigh clients keep it on Cloudflare Pages because the performance and edge caching are hard to beat.","category":"support"},{"question":"We're serving federal government or research institutions in the Triangle — what do we need on our site?","answer":"Government and research institution vendors in the Triangle face strict procurement requirements — sites need to communicate compliance credentials, past performance, and NAICS codes clearly. We structure service pages around the questions a contracting officer asks, not the questions a consumer asks. If you're pursuing SBIR grants or federal contracts through NC State's Office of Technology Commercialization, that positioning needs to be explicit and findable.","category":"local"},{"question":"Can you build a website for a restaurant or food business in the Raleigh area?","answer":"Yes. Raleigh's food scene — from Hillsborough Street and Five Points to downtown Raleigh's restaurant renaissance — is competitive. A restaurant site needs fast mobile load times (most diners search on phone, walking), online reservation integration, menu pages that render beautifully, and local SEO tuned for 'near me' searches. We also wire up Google Business Profile schema so your hours and menu data appear directly in search results.","category":"local"},{"question":"I'm a real estate professional in Cary, Apex, or Holly Springs — can you build a site that generates leads?","answer":"Absolutely. The Raleigh metro suburbs — Cary, Apex, Holly Springs, Morrisville — are among the fastest-growing residential markets in the Southeast. A real estate site for this market needs IDX integration or a curated listing approach, hyper-local neighborhood pages optimized for searches like 'homes for sale in Apex NC,' and a lead capture flow that routes inquiries directly to your CRM. We build all of this into the Growth and Custom tiers.","category":"local"},{"question":"Do you build e-commerce sites for Triangle-area retail businesses?","answer":"Yes. Whether you're a boutique in Five Points, a specialty retailer near NC State's campus, or a DTC brand shipping out of the Triangle, we build Shopify storefronts and custom Next.js e-commerce sites. We handle product setup, payment integration, shipping configuration, and SEO for category and product pages. The Custom tier is where most e-commerce projects land.","category":"technical"},{"question":"Can you add AI features like a chatbot or AI search to our site?","answer":"Yes. The Custom tier includes AI integrations — chatbots trained on your service documentation, AI-powered site search, content recommendation engines, and lead qualification flows. For SaaS companies in the Cisco and Red Hat ecosystem or NC State spinouts building AI products, we can also build product demo experiences and interactive feature showcases. These are production features, not proof-of-concept prototypes.","category":"technical"},{"question":"What analytics will I actually be able to see after launch?","answer":"Every project ships with GA4 wired up and a GTM container configured. You get event tracking for contact form submissions, CTA clicks, scroll depth, and any conversion goal specific to your business. For Raleigh B2B businesses with longer sales cycles, we also set up attribution reporting so you can see which channels — organic search, LinkedIn, referral — are driving your most qualified inquiries. We walk through the dashboard in the recorded handover session.","category":"technical"},{"question":"How do you handle the design process — will I have input?","answer":"Yes, and it's structured so feedback is efficient rather than open-ended. After discovery, we deliver Figma wireframes covering every page. You review and comment in Figma, we incorporate feedback, and a second round locks the direction. We don't start writing code until the design is approved. This prevents the expensive mid-build changes that inflate timelines at agencies that skip structured prototyping.","category":"local"},{"question":"How many revision rounds are included?","answer":"Starter includes two revision rounds, Growth includes three. Revisions happen at the Figma stage — before development — where changes are fast and free. Structural changes after development begins are scoped and quoted separately, but in practice this rarely happens because the prototyping phase catches everything. We've run this process on 500+ projects and the two-round structure works.","category":"support"},{"question":"Where will the site be hosted and who handles that?","answer":"We deploy to Cloudflare Pages by default — it's free at the usage levels most SMBs need, delivers sub-100ms response times globally, and has zero cold-start latency because Next.js pages are served from the edge. We handle the initial setup, domain configuration, and SSL. After handover, Cloudflare's dashboard is straightforward enough that your team can manage it without a developer.","category":"technical"},{"question":"What's the ROI on a new website for a Raleigh B2B business?","answer":"For a B2B company serving RTP companies, a single new client won from organic search often pays for the site multiple times over. We've seen Raleigh consulting and professional services firms convert one additional enterprise inquiry per month from a properly structured site — at average deal sizes of $20,000–$100,000, the math is straightforward. We build sites to generate measurable pipeline, not just look good in a portfolio.","category":"platform"},{"question":"Can you build a site for a healthcare practice or healthtech company in the Triangle?","answer":"Yes. Healthcare sites in the Triangle — whether a private practice, a vendor to WakeMed or Duke Health, or a healthtech startup — need HIPAA-aware contact form design (no PHI in unencrypted fields), clear service navigation, and local SEO tuned for high-intent patient or partner searches. We don't use contact form tools that store sensitive data on third-party servers. For healthtech companies raising Series A or pursuing hospital partnerships, we also build investor-facing and partnership sections alongside the marketing site.","category":"local"},{"question":"We're a professional services firm targeting SAS Institute, Biogen, or other major RTP employers — how do you position a site for enterprise B2B?","answer":"Enterprise B2B sites targeting RTP's anchor companies need to pass a procurement-level credibility check before a sourcing manager will forward your site to their team. That means clear case studies with named outcomes (not just logos), precise service descriptions that match how buyers scope work, social proof from recognizable organizations, and a site that loads in under two seconds on any device. We build the positioning strategy, content architecture, and technical foundation as a single integrated project — not three separate engagements.","category":"platform"}];

export default function RaleighWebDesignPage() {
  return (
    <>
      <SiteHeader />
    <main className="bg-fj-cream">
      <Hero
        formSlot={<HeroInlineForm region="us" source="us_raleigh_web_design_hero" />}
        eyebrow={"WEB DESIGN · RALEIGH"}
        headline={"Web Design in Raleigh That Converts Visitors Into Clients"}
        lead={"Raleigh sits at the heart of Research Triangle Park — the most research-intensive region in the US, home to Cisco, Red Hat, IBM, and dozens of biotech firms. Buyers here are highly educated, deeply skeptical, and will read your website like a peer review. FactoryJet delivers a production-ready website in 7 days, fixed-price."}
        trustItems={["Fixed-price websites", "7-day delivery", "Next.js + GA4 included"]}
        extraCta={<WhatsAppCTA city="Raleigh" variant="light" />}
        rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="Raleigh, NC" badgeLabel="Live in 7 days" />}
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
        rightSlot={<Image src="/images/us/services/service-web-design-process.webp" alt="" aria-hidden={true} width={1200} height={800} className="w-full rounded-2xl object-cover" />}
      />
      <StrategicDarkSection
        eyebrow="WHY FACTORYJET"
        headline={"Why Raleigh Businesses Choose FactoryJet Over Local Agencies"}
        lead={"Local Raleigh agencies include Forge3 (digital marketing and web, Raleigh-based), iFactory (web design and development, Raleigh), and national players like Lounge Lizard that actively serve the Triangle market. Forge3 and iFactory are credible firms — but neither publishes delivery timelines or builds in Next.js as standard. Triangle-area agencies charge enterprise-level rates for a 10–15 page project.\n\nFactoryJet's Growth tier delivers the same scope — blog CMS, lead capture, GA4, Next.js — at a fixed, transparent quote, with a 7-day delivery guarantee in writing and a codebase you own outright. No retainer, no plugin maintenance, no proprietary platform. We win because every project ships with JSON-LD schema for AI search crawlers (GPTBot, ClaudeBot, PerplexityBot), Lighthouse 100 performance budgets enforced from the first commit, and a recorded handover so your team can self-manage from day one."}
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
          {"industry":"Biotech & Life Sciences","title":"Biotech & Life Sciences Client","description":"Serving the RTP pharma cluster — Biogen, Syneos Health, and ecosystem vendors — these sites require technical credibility, regulatory context, and precision design that signals GMP-level attention to detail. We structure content to answer procurement-level questions before the first call.","imageSrc":"/images/us/raleigh/ecommerce/portfolio-1.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Technology & SaaS","title":"Technology & SaaS Client","description":"For Cisco and Red Hat ecosystem suppliers, NC State spinouts, and Triangle-area startups, we build product-depth pages, integration documentation, and demo or trial conversion flows tuned for technical buyers with long B2B sales cycles.","imageSrc":"/images/us/raleigh/ecommerce/portfolio-2.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"},
          {"industry":"Professional Services","title":"Professional Services Client","description":"University spinouts, consulting firms, legal and finance practices serving RTP companies need sites that establish authority, capture leads, and route inquiries efficiently. We build lead-capture flows and authority-building content structures that turn visitors into booked calls.","imageSrc":"/images/us/raleigh/ecommerce/portfolio-3.webp","stat1":"+40% conversions","stat2":"< 1.5s load time"}
        ]}
        ctaHref="/portfolio"
        ctaLabel="View full portfolio"
      />
      <ComparisonTable
        eyebrow={"WHY FACTORYJET"}
        headline={"FactoryJet vs. Raleigh Web Agencies"}
        lead={"Triangle-area agencies are well-regarded, but pricing and timelines are rarely published. FactoryJet gives you a fixed price and timeline up front — and delivers in 7 days on a Next.js stack that outperforms WordPress on every metric that matters to your buyers."}
        columns={[{"label":"Their approach"},{"label":"FactoryJet","isFactoryJet":true},{"label":"Why we win"}]}
        rows={[
          {"feature":"Forge3","values":["Timeline not published","Fixed-price (Growth tier)","FactoryJet delivers in 7 days on Next.js. Forge3's timeline and tech stack are not publicly stated."]},
          {"feature":"iFactory","values":["Timeline not published","Fixed-price (Growth tier)","Next.js vs. WordPress means faster load times, no monthly plugin maintenance, and a codebase you own."]}
        ]}
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
      <PricingTiers
        eyebrow={"TRANSPARENT PRICING"}
        headline={"What's Included for Raleigh Businesses"}
        lead={"Pricing is fixed-price and scoped to your build — the main drivers are page count, integrations, and design complexity. Every project is quoted up front after a free discovery call, so you know the full cost before work starts. Every tier ships with 7-day delivery, Next.js, code you own, and no plugin maintenance. No retainer required."}
        tiers={[
          {"priceRange":"Fixed-price","name":"Starter","description":"A 5-page brochure site that loads fast on mobile and ranks for your name and core service. Best for sole traders and local services who need a credible online presence quickly.","features":["5 pages, mobile-responsive","Basic SEO & schema markup","Contact form with email forwarding","2 revision rounds","30-day post-launch support"],"cta":{"label":"Get a quote","href":"/contact"}},
          {"priceRange":"Fixed-price","name":"Growth","description":"A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one. Best for Raleigh SMBs scaling online who need the site to actively generate qualified inquiries — especially for technical or B2B audiences.","features":["10–15 pages with blog CMS","Advanced SEO & GA4 tracking","Lead capture & email automation","3 revision rounds","30-day support + training session"],"cta":{"label":"Get a quote","href":"/contact"},"popular":true},
          {"priceRange":"Fixed-price","name":"Custom","description":"Custom Next.js build with e-commerce, AI features, API integrations, and priority support. Best for established RTP-adjacent businesses with complex requirements and a real digital revenue line.","features":["Custom Next.js architecture","E-commerce or membership features","AI integrations (chat, search, content)","Third-party API connections","Priority support & quarterly reviews"],"cta":{"label":"Get a quote","href":"/contact"}}
        ] as const}
      />
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline={"Rated 4.9/5 by clients from Raleigh and beyond."}
      />
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline={"Common Questions from Raleigh Businesses"}
        categories={FAQ_CATEGORIES}
        items={RALEIGH_FAQ_ITEMS}
      />
      {/* Cross-link: Related Services in Raleigh */}
      <section className="py-10 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#B23E13] uppercase tracking-widest mb-4">
            Also in Raleigh
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/raleigh/ecommerce-development/"
              className="px-5 py-2 rounded-full border border-[#B23E13] text-[#B23E13] text-sm font-medium hover:bg-[#B23E13] hover:text-white transition-colors"
            >
              Ecommerce Development →
            </Link>
          </div>
        </div>
      </section>
      <WebDesignCityLinksUS currentCity="raleigh" />
      <FinalCTA
        variant="dark"
        eyebrow={"READY TO START"}
        headline={"Ready to Build Your Raleigh Website?"}
        sub={"Research Triangle Park companies set a high bar for everything — including the websites of the vendors and partners they work with. Every week without a credible, fast-loading website is a week your competitors are getting the meeting you should have gotten. Start today."}
        primaryCta={{ label: "Start Your Project", modal: true, region: 'us' }}
        extraCta={<WhatsAppCTA city="Raleigh" variant="dark" />}
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
        "@id": "https://factoryjet.com/raleigh/web-design#business",
        "name": "FactoryJet Technologies",
        "url": "https://factoryjet.com",
        "telephone": "+919699977699",
        "areaServed": "Raleigh"
      },
      {
        "@type": "Service",
        "@id": "https://factoryjet.com/raleigh/web-design#service",
        "name": "Web Design Raleigh",
        "provider": {
          "@type": "Organization", "@id": "https://factoryjet.com/#organization",
          "name": "FactoryJet Technologies"
        },
        "areaServed": "Raleigh",
        "description": "FactoryJet builds fast, conversion-focused websites for Raleigh businesses. 7-day delivery, fixed-price. Next.js, SEO, and GA4 included."
      },
      {
        "@type": "FAQPage",
        "@id": "https://factoryjet.com/raleigh/web-design#faq",
        "mainEntity": RALEIGH_FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://factoryjet.com/raleigh/web-design#breadcrumbs",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 2, "name": "United States", "item": "https://factoryjet.com"},
          {"@type": "ListItem", "position": 3, "name": "Raleigh", "item": "https://factoryjet.com/raleigh"},
          {"@type": "ListItem", "position": 4, "name": "Web Design", "item": "https://factoryjet.com/raleigh/web-design"}
        ]
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How FactoryJet builds your Raleigh website in 7 days",
    "description": "Our proven 7-day process for delivering a professional, SEO-optimized website for Raleigh businesses.",
    "totalTime": "P7D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Day 1 — Discovery Call", "text": "We learn your business, goals, and competitive landscape in Raleigh. We define the sitemap, content strategy, and technical requirements." },
      { "@type": "HowToStep", "position": 2, "name": "Day 2 — Strategy & Structure", "text": "We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins." },
      { "@type": "HowToStep", "position": 3, "name": "Days 3–4 — Design", "text": "We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs." },
      { "@type": "HowToStep", "position": 4, "name": "Days 5–6 — Development & SEO", "text": "We build your site in Next.js or WordPress, optimize Core Web Vitals, add local SEO for Raleigh, structured data, and connect all integrations." },
      { "@type": "HowToStep", "position": 5, "name": "Day 7 — Launch", "text": "Your Raleigh website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support." }
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
          "name": "Web Design Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet",
          "url": "https://factoryjet.com/raleigh/web-design/",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".faq-answer", "[data-speakable]"]
          }
        }) }}
      />
    </>
  );
}
