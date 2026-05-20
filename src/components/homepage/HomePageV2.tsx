import Hero from '@/components/v2/Hero';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServicesGrid from '@/components/v2/ServicesGrid';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HomePricingTabs from '@/components/homepage/HomePricingTabs';
import type { FAQCategory } from '@/components/v2/FAQ';

/* ─── FAQ Categories ─────────────────────────────────────────────────── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'general',   label: 'General' },
  { key: 'web',       label: 'Web Design' },
  { key: 'ecommerce', label: 'Ecommerce' },
  { key: 'aiseo',     label: 'AI SEO' },
  { key: 'process',   label: 'Process & Support' },
];

/* ─── FAQ Items ──────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    question: 'What exactly does FactoryJet do?',
    answer:
      'FactoryJet builds high-performance websites, Shopify and custom e-commerce stores, and AI SEO campaigns for growing businesses — primarily in India, the US, and the UK. We combine fast delivery (7-day guarantee on starter sites), a Next.js tech stack, and AI-native SEO to help businesses generate more leads and revenue online.',
    category: 'general',
  },
  {
    question: 'How is FactoryJet different from a typical web agency?',
    answer:
      'Three things: published pricing (no discovery call required to get a number), a 7-day delivery guarantee on Starter sites, and a Next.js tech stack that outperforms WordPress on speed and SEO. We also ship every project with JSON-LD schema configured for AI search crawlers — something most agencies charge extra for, or skip entirely.',
    category: 'general',
  },
  {
    question: 'Do you work with small businesses or only large companies?',
    answer:
      'Primarily small and medium businesses — sole traders, D2C brands, B2B service firms, retail chains, and professional practices. Our pricing starts at ₹29,999 for a 5-page website, so we are accessible to early-stage businesses while also having the capacity for complex multi-platform builds.',
    category: 'general',
  },
  {
    question: 'Where is FactoryJet based, and do you work internationally?',
    answer:
      'Our team is based in India. We work with clients across India, the US, and the UK. Time zone overlap with US clients is typically early morning IST; UK clients have strong overlap. All project communication is async-first via a shared workspace, with video calls at key milestones.',
    category: 'general',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Web design starts at ₹29,999 for a 5-page Starter site and goes up to ₹1,19,999 for a fully custom Next.js build. E-commerce stores start at ₹59,999 for a D2C Shopify store. All pricing is published on this page — you do not need to book a call to see a number. The final quote may vary slightly based on scope once we review your brief.',
    category: 'web',
  },
  {
    question: 'How fast can you build my website?',
    answer:
      'Starter sites (5 pages) ship in 7 days — that is our delivery guarantee. Growth projects (10–15 pages with CMS and lead capture) typically run 2–3 weeks. Scale builds with custom integrations are scoped individually. The clock starts from the day your brand assets and content are in our shared workspace.',
    category: 'web',
  },
  {
    question: 'What is included in a website project?',
    answer:
      'Every project includes strategy, design, development, SEO setup, and a 30-day post-launch support window. You receive a Figma design system, a Next.js codebase, JSON-LD schema for AI search visibility, GA4 analytics wired up, and a recorded handover session. Staging environments, routine bug fixes, and copy edits during the support window are all part of the project.',
    category: 'web',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'Next.js (App Router) for the frontend, deployed to Cloudflare Pages for global edge performance. CMS options include Sanity, Contentful, and headless WordPress depending on your team\'s preference. All builds target Lighthouse 100/100 on Performance, Accessibility, Best Practices, and SEO.',
    category: 'web',
  },
  {
    question: 'What Lighthouse score will my site achieve?',
    answer:
      'We target 100/100 on all four Lighthouse categories for every project. Scores are verified in a staging environment before launch and documented in the handover report. If a score drops below 95 in any category within the 30-day support window, we resolve it as part of the project.',
    category: 'web',
  },
  {
    question: 'Which e-commerce platforms do you build on?',
    answer:
      'Shopify (D2C and B2B), WooCommerce, and custom headless Next.js commerce. We also build on Magento for enterprise, and integrate with omnichannel platforms like Commerceflo for brands selling on Amazon, Flipkart, Meesho, Zepto, and Blinkit simultaneously.',
    category: 'ecommerce',
  },
  {
    question: 'Can you build a B2B wholesale store for Indian buyers?',
    answer:
      'Yes. Our Shop Pro tier is specifically designed for B2B and wholesale — wholesale buyer accounts with approval workflows, tiered pricing (retail vs. dealer vs. distributor), bulk ordering, GST-compliant invoicing, and trade-only product visibility. We have built B2B stores for clients in artificial plants, home décor, and industrial supplies.',
    category: 'ecommerce',
  },
  {
    question: 'Do you support Indian payment gateways?',
    answer:
      'Yes — Razorpay, PayU, Cashfree, PhonePe, UPI, and Cash on Delivery are all supported. We also configure EMI options and buy-now-pay-later integrations where applicable. GST invoicing is automated at checkout.',
    category: 'ecommerce',
  },
  {
    question: 'Can you integrate WhatsApp Commerce?',
    answer:
      'Yes. WhatsApp Commerce integration — via the WhatsApp Business API — allows customers to browse products, place orders, and receive order updates directly within WhatsApp. This is particularly effective for D2C brands in India where WhatsApp drives a significant share of repeat purchases.',
    category: 'ecommerce',
  },
  {
    question: 'What is AI SEO and how is it different from regular SEO?',
    answer:
      'Traditional SEO optimises your site to rank on Google\'s blue links. AI SEO does that, plus it optimises for Google AI Overviews, ChatGPT, Perplexity, Gemini, and other AI-generated answer surfaces. This involves JSON-LD schema, entity-based content, AI crawler access (GPTBot, ClaudeBot, PerplexityBot), and content structured to be cited as a trusted source in AI answers.',
    category: 'aiseo',
  },
  {
    question: 'How long does AI SEO take to show results?',
    answer:
      'Branded searches typically appear within 1–2 weeks of launch. Service-plus-location queries take 3–6 months for a newer domain. AI Overview citations and ChatGPT brand mentions typically appear within 2–4 months of consistent content publication and schema implementation. We set realistic timelines on the first call based on your current domain authority and competitive landscape.',
    category: 'aiseo',
  },
  {
    question: 'Is there a minimum contract term for AI SEO?',
    answer:
      'No minimum contract. All AI SEO retainers run month-to-month. We ask for 30 days notice to cancel so we can complete any work in progress and hand over all assets cleanly. Most clients stay beyond 12 months because the compounding traffic and AI citation growth makes the retainer increasingly valuable over time.',
    category: 'aiseo',
  },
  {
    question: 'What does the onboarding process look like?',
    answer:
      'We start with a 30-minute discovery call to map your goals, audience, and current site performance. Within 48 hours you get a project brief, sitemap, and timeline. We set up a shared workspace (Notion or Figma, your preference) where all assets, feedback, and sign-offs live. You approve the design before a single line of code is written.',
    category: 'process',
  },
  {
    question: 'How many revision rounds are included?',
    answer:
      'Starter includes two structured revision rounds. Growth includes three. Scale projects are scoped individually and typically include more flexibility. Each revision round is done in Figma with a shared comment thread — no back-and-forth emails. Development does not begin until you have signed off on the final design.',
    category: 'process',
  },
  {
    question: 'What happens after the site launches?',
    answer:
      'Every project includes a 30-day post-launch support window for bug fixes, training questions, and minor copy edits. After that, you can move to a maintenance plan (content updates, dependency upgrades, performance monitoring) or self-manage — your team has the codebase and can take it to any developer.',
    category: 'process',
  },
  {
    question: 'What do I need to provide to get started?',
    answer:
      'Brand assets (logo, colours, fonts), any existing content you want to carry forward, and access to your current domain registrar. We handle everything else — copywriting brief, imagery sourcing, dev environment, hosting setup, and analytics configuration. The more context you give us on your customers and competitors, the sharper the first design round will be.',
    category: 'process',
  },
  {
    question: 'Do you offer ongoing website maintenance?',
    answer:
      'Yes. After the included 30-day support window, we offer monthly maintenance plans covering content updates, plugin and dependency upgrades, uptime monitoring, and performance checks. Plans are available for all project tiers and are quoted separately based on your expected change volume.',
    category: 'process',
  },
  {
    question: 'How will I rank on Google after launch?',
    answer:
      'Every FactoryJet project ships with technical SEO foundations built in — JSON-LD schema, Core Web Vitals green, hreflang where applicable, sitemap submission to Google Search Console, and AI crawler access. This gives you a strong starting position. Ongoing ranking improvement — especially for competitive service keywords — requires the AI SEO retainer or a content plan, which we can scope on your first call.',
    category: 'process',
  },
] as const;

/* ─── Portfolio Cards ────────────────────────────────────────────────── */
const PORTFOLIO_CARDS = [
  {
    industry: 'Decorative Lighting — D2C Ecommerce',
    title: 'Belle Maison — Decorative LED Lighting Store',
    description:
      'Full Shopify D2C store for a Mumbai-based decorative LED lighting brand — chandeliers, pendant lights, wall sconces, and smart home lighting. 200+ SKUs, AI product recommendations, and WhatsApp Commerce integrated. 7-day delivery from brief to launch.',
    imageSrc: '/images/portfolio/belle-maison.webp',
    stat1: '200+ SKUs live',
    stat2: '7-day delivery',
  },
  {
    industry: 'Home Décor — B2B Wholesale Ecommerce',
    title: 'Bombay Petals — B2B Wholesale Platform',
    description:
      'Shopify B2B ecommerce platform for a wholesale artificial plants and home décor supplier. Dealer and distributor accounts with tiered pricing, bulk ordering, GST-automated invoicing, and trade-only product visibility. Built for scale.',
    imageSrc: '/images/ecommerce/mumbai/portfolio-bombay-petals.webp',
    stat1: 'B2B tiered pricing',
    stat2: 'GST auto-invoicing',
  },
  {
    industry: 'Professional Services — Web Design',
    title: 'Formative Concepts — MEP & BIM Consulting',
    description:
      'Professional website for a leading MEP and BIM drafting consultancy that works with the world\'s largest construction companies. Designed to project credibility and technical authority to enterprise procurement teams across global markets.',
    imageSrc: '/images/portfolio/bombay-petals.webp',
    stat1: 'Enterprise B2B',
    stat2: 'Global reach',
  },
] as const;

/* ─── Strategic Dark Section Pillars ─────────────────────────────────── */
const WHY_FJ_PILLARS = [
  {
    icon: '⚡',
    title: '7-Day Delivery Guarantee',
    body: 'Starter sites go live in 7 days — not 6 weeks. We reverse-engineer your deadline, not pad a timeline to justify a retainer. Every milestone is in the project brief before we start.',
  },
  {
    icon: '₹',
    title: '60–70% Below Market Rate',
    body: 'Indian market rates for comparable Next.js work from a US or UK agency run 2–3× higher. FactoryJet delivers the same tech stack, the same design quality, and the same performance benchmarks — at a fraction of the price.',
  },
  {
    icon: '🤖',
    title: 'AI-Native by Default',
    body: 'Every site we build is configured for Google AI Overviews, ChatGPT, Perplexity, and Gemini from day one — not as an add-on. JSON-LD schema, AI crawler access, and entity-rich content are standard on every project.',
  },
];

/* ─── Journey Stages ─────────────────────────────────────────────────── */
const JOURNEY_STAGES = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'A 30-minute call. We map your goals, audience, and competitive landscape. You leave with a sitemap and a timeline — before any money changes hands.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Figma wireframes become a complete mobile-first design system. Two structured feedback rounds in a shared comment thread. Development does not start until you sign off.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Next.js engineering against your stack. Performance budgets enforced from commit one. Daily progress visible in the shared workspace — no black-box weeks.',
  },
  {
    number: '04',
    title: 'SEO & Content',
    description:
      'Optimised WebP images, meta tags, JSON-LD schema, sitemap submission, and AI crawler configuration land in this phase. Your site is Google-ready and AI-ready on launch day.',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'Deployed to Cloudflare Pages with GA4 and GTM wired up. A recorded handover session walks your team through the CMS. 30-day post-launch support included.',
  },
];

/* ─── Page Component ─────────────────────────────────────────────────── */
export default function HomePageV2() {
  return (
    <>
      {/* 1 — Hero (cream, light — India v2) */}
      <Hero
        announcementPill={{
          text: 'New: AI SEO now includes Google AI Overviews',
          href: '#aiseo',
        }}
        eyebrow="INDIA'S FASTEST WEB STUDIO"
        headline={
          <>
            Websites &amp; E-Commerce
            <br className="hidden lg:block" />
            {' '}for India&apos;s Growing Brands.
          </>
        }
        lead="7-day delivery on Starter sites. Lighthouse 100/100. AI SEO built in from day one. 500+ businesses launched across India, the US, and the UK."
        primaryCta={{ label: 'Start Your Project', modal: true, region: 'in' }}
        secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
        trustItems={['500+ businesses', '7-day delivery', 'Lighthouse 100/100', '60–70% vs agencies']}
        rightSlot={<HeroBrowserMockup mockupUrl="yourbusiness.com" badgeCity="New York, NY" badgeLabel="Live in 7 days" />}
      />

      {/* 2 — Logo bar (light) */}
      <LogoBar tagline="Trusted by 500+ businesses across India, the US, and the UK" />

      {/* 3 — Big Three Trust Block (cream) */}
      <BigThreeTrustBlock
        eyebrow="WHY FACTORYJET"
        illustrations={{
          businesses: '/images/trust/businesses.webp',
          delivery:   '/images/trust/delivery.webp',
          savings:    '/images/trust/savings.webp',
        }}
      />

      {/* 4 — Services Grid (white) */}
      <ServicesGrid />

      {/* 5 — Why FactoryJet (DARK) */}
      <StrategicDarkSection
        eyebrow="THE FACTORYJET DIFFERENCE"
        headline="Why 500+ businesses choose FactoryJet"
        lead="Speed, price, and AI-native tech — not a trade-off, all three at once."
        pillars={WHY_FJ_PILLARS}
      />

      {/* 6 — How We Work (white — buffer after dark) */}
      <ServiceJourneyRow
        eyebrow="HOW WE WORK"
        headline="From brief to live site — our 5-step delivery engine"
        stages={JOURNEY_STAGES}
      />

      {/* 7 — Portfolio (cream) */}
      <PortfolioShowcase
        eyebrow="RECENT WORK"
        headline="What our clients look like after FactoryJet."
        cards={[...PORTFOLIO_CARDS]}
        ctaHref="/portfolio"
        ctaLabel="View full portfolio"
      />

      {/* 8 — Pricing — 3 tabs (cream — buffer before dark) */}
      <HomePricingTabs />

      {/* 9 — Testimonials (DARK) */}
      <TestimonialsSection
        region="us"
        eyebrow="WHAT CLIENTS SAY"
        headline="4.9/5 across 150+ reviews from India, US & UK."
      />

      {/* 10 — FAQ (light — buffer before final dark) */}
      <FAQ
        eyebrow="COMMON QUESTIONS"
        headline="Everything you need to know before starting your project"
        categories={FAQ_CATEGORIES}
        items={FAQ_ITEMS}
      />

      {/* 11 — Final CTA (DARK) */}
      <FinalCTA
        variant="dark"
        eyebrow="READY TO START"
        headline="Your website should be working as hard as you are."
        sub="500+ businesses have launched on FactoryJet. Starter sites go live in 7 days. Growth projects in 2–3 weeks. Tell us what you need — we will have a sitemap ready within 72 hours."
        primaryCta={{ label: 'Start Your Project', modal: true, region: 'in' }}
        secondaryCta={{ label: 'WhatsApp Us', href: 'https://wa.me/919699977699' }}
        objectionHandler="No long-term contracts. No hidden charges. Cancel AI SEO anytime with 30 days notice."
      />
    </>
  );
}
