import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Website Design Cost & Pricing | How Much Does a Website Cost? | FactoryJet',
  description:
    'Transparent website design pricing for US small businesses. 5-page site from $1,499. Shopify stores from $2,999. Fixed price, 7-day delivery, 60–70% below US agency rates. Get a free quote.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Website Design Cost & Pricing | FactoryJet',
    description:
      'How much does a website cost? FactoryJet transparent pricing: 5-page site $1,499, 15-page site $3,500, Shopify from $2,999. Fixed price. 7-day delivery.',
    url: 'https://factoryjet.com/us/pricing',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Website Design Pricing USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design Cost & Pricing | FactoryJet',
    description: 'Transparent website pricing for US businesses. 5-page site from $1,499. Fixed price, 7-day delivery.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/pricing' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional small business website costs between $1,499 and $7,500 depending on scope, at FactoryJet. A basic 5-page site — home, about, services, contact, and one landing page — starts at $1,499. A growth-focused 15-page site with blog, lead capture, and CRM integration runs $3,500. Custom web applications start at $7,500. US agencies typically charge $8,000–$35,000 for comparable work, so the savings are meaningful. The biggest driver of cost is page count, followed by custom functionality and integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is FactoryJet so much cheaper than a US web design agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's engineering team is India-based, with 25+ years of experience serving US clients. We do not have a downtown office, a team of account managers, or a sales department with commission structures. Those costs are exactly what US agencies pass through to clients — often doubling or tripling the actual development cost. You get the same quality, the same technology stack, and the same 7-day delivery guarantee, without subsidizing someone else's overhead.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a website design cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet website pricing includes custom design (no templates), development, mobile responsiveness, on-page SEO setup (meta titles, descriptions, schema markup), Google Analytics + Search Console setup, contact forms, basic speed optimization, and 30 days of post-launch support. E-commerce packages add product catalog setup, Shopify or WooCommerce configuration, payment gateway integration, and shipping/tax setup. Copywriting and photography are priced separately unless specified.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website',
      description: '5-page professional website in 7 days — design, dev, SEO, mobile-ready.',
      price: '1499',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Growth Website',
      description: '15-page site with blog, CRM integration, and advanced SEO structure.',
      price: '3500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'E-Commerce Store',
      description: 'Shopify or WooCommerce store with product catalog, payments, and shipping.',
      price: '2999',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Pricing', item: 'https://factoryjet.com/us/pricing' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Free Consultation & Quote',
    description:
      'Tell us what you need — or just describe your business. We scope the project, confirm page count, and send a fixed quote within 24 hours. No surprise change orders later.',
  },
  {
    number: '02',
    title: 'Design Review',
    description:
      'We build a full homepage design first. You review it, request changes, and approve before we write a single line of code. This is where we lock in your brand direction.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Approved design goes straight to development. We build on Next.js or Shopify, set up your CMS, and wire in any integrations — CRM, forms, booking tools, payments.',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'We apply your copy (or write it — ask us), set up meta titles, descriptions, schema markup, Google Search Console, and Analytics. Your site is findable from day one.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description:
      'Site goes live on your domain. You get a walkthrough recording, admin access, and 30 days of post-launch support. Most clients are live by day 7.',
  },
];

const faqCategories = [
  {
    category: 'Website Cost Basics',
    items: [
      {
        question: 'How much does a website cost for a small business?',
        answer:
          "A professional small business website from FactoryJet starts at $1,499 for a 5-page site and goes up to $7,500 for a 15-page site with advanced SEO, blog, and CRM integrations. US agencies typically charge $8,000–$35,000 for the same scope. The cost is driven by three things: page count, custom functionality (calculators, booking systems, member portals), and integrations (CRM, email, payments). We'll give you a fixed quote within 24 hours of your call — no estimate ranges, no billable hours.",
      },
      {
        question: 'What is included in the website price?',
        answer:
          'Every FactoryJet package includes: custom design (no templates), mobile responsiveness, on-page SEO setup (meta titles, descriptions, schema markup), Google Analytics + Search Console setup, contact forms, Core Web Vitals optimization, and 30 days of post-launch support. E-commerce packages add product catalog setup, Shopify or WooCommerce configuration, payment gateway integration, and shipping/tax setup. Copywriting and photography are not included unless specified — ask us for copywriting add-on pricing.',
      },
      {
        question: 'Why is FactoryJet cheaper than US web design agencies?',
        answer:
          "FactoryJet's engineering team is India-based, with 25+ years of experience serving US clients. US agencies charge $150–$250/hour because they're paying for downtown office leases, account managers, project managers, and a sales team — none of which make your website better. Our fixed packages give you the same tech stack (Next.js, Shopify, React), the same design quality, and the same SEO rigor at 60–70% lower cost. We've delivered 500+ sites to US businesses. The savings are structural, not a quality tradeoff.",
      },
      {
        question: 'Do you charge hourly or fixed price?',
        answer:
          "Fixed price — always. Every project starts with a scoped quote that covers everything in writing. We don't do time-and-materials billing, we don't send change orders for scope you already described, and we don't charge for revision rounds within the agreed scope. If you add net-new pages or features after the project starts, we quote those separately before touching them. No surprises.",
      },
    ],
  },
  {
    category: 'E-Commerce Cost',
    items: [
      {
        question: 'How much does a Shopify website cost?',
        answer:
          'A custom Shopify store from FactoryJet starts at $2,999. That covers custom theme development (no paid templates), up to 50 products configured, collections/navigation setup, Shopify Payments or Stripe integration, shipping rates, email notification setup, and mobile optimization. Shopify monthly fees ($39–$399/month) are paid directly to Shopify — that\'s separate from our build cost. Agencies in the US typically charge $12,000–$40,000 for comparable Shopify work. Our 7-day delivery guarantee applies to Shopify stores up to 50 products.',
      },
      {
        question: 'How much does a WooCommerce website cost?',
        answer:
          'WooCommerce development starts at $1,999 for a custom WordPress + WooCommerce site with up to 25 products. WooCommerce itself is free, but hosting costs $30–$100/month depending on traffic — we can recommend providers. Custom WooCommerce builds typically run $1,999–$6,000 at FactoryJet versus $10,000–$30,000 at US agencies. WooCommerce is better for content-heavy businesses that also sell; Shopify is better for pure e-commerce with higher product volume.',
      },
      {
        question: 'What e-commerce features are included in the E-Commerce package?',
        answer:
          'The $2,999 E-Commerce package includes: custom store design, product catalog setup (up to 50 SKUs), collections and navigation, payment gateway integration (Shopify Payments, Stripe, or PayPal), shipping rate configuration, tax setup, email receipts and order notifications, abandoned cart setup, and mobile optimization. Add-ons available: product photography optimization, subscription products, multi-currency, loyalty programs, and custom checkout flows.',
      },
      {
        question: 'Can you migrate my existing store to Shopify?',
        answer:
          'Yes — Shopify migrations are a common request. We migrate product data, customer records, order history, and SEO URLs from WooCommerce, BigCommerce, Magento, or custom platforms. Migration pricing depends on product count and data complexity. A typical WooCommerce to Shopify migration with up to 500 products runs $2,500–$4,000 and takes 7–14 days. We set up 301 redirects so you don\'t lose your existing search rankings.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    items: [
      {
        question: 'How long does it take to build a website?',
        answer:
          "FactoryJet delivers 5-page sites in 7 business days — that's our guarantee. A 15-page Growth site with blog and integrations typically takes 14–21 days. Custom web applications (booking systems, member portals, SaaS MVPs) run 4–12 weeks depending on feature complexity. Timeline starts from design approval, not from the day you sign. We send a design mockup within 48 hours of kickoff — your review and approval is the only variable we don't control.",
      },
      {
        question: 'What do I need to provide to get started?',
        answer:
          "To kick off your project, we need: your brand assets (logo, brand colors, any fonts), example websites you like the look of, your content (or tell us you want copywriting added on), and access to your domain registrar. That's it. We handle hosting setup, DNS, SSL certificates, and technical configuration. Most clients send a Google Drive folder with their logo and a few competitor URLs they like — that's enough to start the design phase.",
      },
      {
        question: 'What happens after the website launches?',
        answer:
          'Every project includes 30 days of post-launch support — bug fixes, content updates, and any issues that come up after go-live. After 30 days, you can sign up for a monthly maintenance plan (starting at $149/month) that covers plugin updates, security monitoring, uptime alerts, performance checks, and minor content changes. Or you can manage it yourself — we provide full admin access and a walkthrough recording.',
      },
      {
        question: 'Do you offer payment plans?',
        answer:
          "Yes. Projects under $3,000 are typically 50% upfront and 50% on delivery. Larger projects use a three-payment structure: 40% to start, 30% at design approval, and 30% on launch. We accept ACH bank transfers, credit cards, and wire transfers. We don't require annual contracts — each project is scoped and paid for independently. Ongoing maintenance plans are month-to-month.",
      },
    ],
  },
  {
    category: 'FactoryJet vs. Other Options',
    items: [
      {
        question: 'How does FactoryJet compare to Wix or Squarespace?',
        answer:
          "Wix and Squarespace cost $16–$49/month and let you build a site yourself — but you're building on a template, on their platform, locked to their infrastructure. FactoryJet builds custom sites on Next.js or WordPress that you own outright, with no monthly platform fee, no template constraints, and no performance ceiling. Wix/Squarespace sites often score 40–65 on Google's Lighthouse test. FactoryJet sites consistently hit 90+. If your business depends on search visibility, that difference shows up in rankings.",
      },
      {
        question: 'How is FactoryJet different from hiring a freelancer?',
        answer:
          "A freelancer gives you one person's availability, one person's skill set, and no backup if they go dark. FactoryJet is a team — designers, developers, SEO specialists, and QA — working under a project manager with a fixed deadline. You get a design review before development starts, a defined revision process, and 30-day post-launch support. Freelancers are great for small edits; for a full site build or redesign, you want a team with a process.",
      },
      {
        question: 'What is the difference between a website redesign and a new website?',
        answer:
          "A new website starts from scratch — new design, new structure, new content strategy. A redesign keeps your existing domain, URL structure, and typically most of your content, but replaces the visual design, improves page speed, and restructures your navigation and CTAs. Redesigns are usually 20–30% cheaper than new builds of the same scope because we're not starting from zero. We also handle 301 redirects and SEO migration to protect your existing search rankings.",
      },
      {
        question: 'Do you work with businesses outside the US?',
        answer:
          "FactoryJet is built for US SMBs — our pricing is in USD, our delivery timelines are in US business days, and our SEO work targets US search audiences. That said, we do take clients from Canada, the UK, and Australia. For US city pages, local SEO targeting, and US-market copywriting, we specialize in the American market. International clients welcome — just know our core expertise is the US.",
      },
    ],
  },
  {
    category: 'Ongoing Costs',
    items: [
      {
        question: 'What does website hosting cost after launch?',
        answer:
          "Hosting depends on the platform. For Next.js sites (our default for performance), we recommend Cloudflare Pages — it's free for most small business traffic levels. For WordPress sites, managed hosting runs $30–$80/month depending on traffic (Kinsta, WP Engine, or Cloudways). For Shopify, you pay Shopify directly — $39/month for Basic or $105/month for Shopify plan. We set up your hosting during the build, and the cost goes on your card directly so you own the relationship.",
      },
      {
        question: 'What is the ongoing website maintenance cost?',
        answer:
          "FactoryJet's maintenance plans start at $149/month and cover: WordPress/plugin updates, security monitoring, uptime monitoring, monthly speed checks, and up to 1 hour of content changes. The $299/month plan adds priority support, 3 hours of content updates, monthly performance reports, and broken link scanning. You can also do maintenance yourself — all our sites come with full admin access and a training walkthrough. There's no obligation to continue with us after launch.",
      },
      {
        question: 'Do I need to pay for an SSL certificate?',
        answer:
          "No. SSL certificates (the 'https://' padlock) are free and included in all modern hosting setups. We configure SSL during the build. If you're on Cloudflare Pages, SSL is automatic and free. If you're on managed WordPress hosting, SSL is included in your hosting plan. You will never pay FactoryJet separately for SSL.",
      },
      {
        question: 'What are the hidden costs of building a website?',
        answer:
          'The most common surprises after a website build: (1) Domain name renewal — $10–$20/year, paid to your registrar like GoDaddy or Namecheap. (2) Hosting — varies by platform as described above. (3) Premium plugins — if your site needs specific functionality (booking, memberships, advanced forms), some plugins cost $50–$200/year. (4) Copywriting — if you don\'t provide content, professional copywriting is $75–$150 per page. (5) Photography — custom photos significantly outperform stock, but they cost $500–$2,000 for a professional session. We itemize all of these before you sign.',
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        eyebrow="WEBSITE DESIGN COST — 2025"
        headline="How Much Does a Website Cost? Here's the Actual Number."
        subheadline="US agencies charge $8,000–$35,000 for a business website. FactoryJet builds the same quality site for $1,499–$7,500 — fixed price, 7-day delivery, no hidden fees."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See All Packages', href: '#pricing' }}
        trustSignals={[
          '500+ US businesses served',
          '7-day delivery guarantee',
          '60–70% below US agency rates',
        ]}
        rightSlot={
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-white/50 mb-4">
              2025 Price Comparison
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs font-fj-body mb-2">
              <span className="text-white/40">Service</span>
              <span className="text-fj-jet-blue font-semibold text-center">FactoryJet</span>
              <span className="text-white/40 text-center">US Agency</span>
            </div>
            {[
              ['5-Page Site', '$1,499', '$8K–$15K'],
              ['15-Page Site', '$3,500', '$15K–$35K'],
              ['Shopify Store', '$2,999', '$12K–$40K'],
              ['WordPress', '$1,999', '$10K–$30K'],
              ['Redesign', '$3,500', '$12K–$30K'],
              ['Web App MVP', '$7,500', '$30K–$80K'],
            ].map(([service, fj, us]) => (
              <div key={service} className="grid grid-cols-3 gap-2 py-2 border-t border-white/5 items-center">
                <span className="text-white/70 text-xs">{service}</span>
                <span className="text-green-400 font-semibold text-sm text-center">{fj}</span>
                <span className="text-white/40 text-xs text-center line-through">{us}</span>
              </div>
            ))}
            <p className="text-xs text-white/30 pt-2 font-fj-body">Fixed price. No hourly billing. No surprise invoices.</p>
          </div>
        }
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        stats={[
          { value: '500+', label: 'US Businesses Served', sublabel: 'SMBs, DTC brands, service firms' },
          { value: '60–70%', label: 'Below US Agency Rates', sublabel: 'Same quality. No overhead.' },
          { value: '7 Days', label: 'Delivery Guarantee', sublabel: 'Live site or full refund' },
        ]}
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHAT DRIVES WEBSITE COST"
        headline="Five factors determine what your website should actually cost"
        body={[
          "Most website pricing quotes feel like guesswork — 'it depends' is not an answer you can budget around. Here's what actually moves the number.",
          'Page count is the biggest lever. A 5-page site and a 20-page site are not five times more complex — but they are meaningfully different in design time, content work, and SEO structure. That\'s why our packages are scoped by page count.',
          'Custom functionality — booking systems, member portals, configurators, subscription billing — adds engineering time beyond the design cost. These are quoted separately and always fixed-price.',
          'Integrations (CRM, email platforms, payment gateways, booking tools) require configuration time. Shopify Payments takes 2 hours. A custom Salesforce sync takes 2 weeks. We scope these explicitly.',
        ]}
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-4">
              All Services — Starting Prices
            </p>
            {[
              { label: '5-Page Business Site', price: '$1,499', note: '7-day delivery' },
              { label: '15-Page Growth Site', price: '$3,500', note: 'Blog + CRM + SEO' },
              { label: 'Shopify / WooCommerce', price: '$2,999', note: 'Up to 50 products' },
              { label: 'WordPress Development', price: '$1,999', note: 'Custom theme, no builders' },
              { label: 'Website Redesign', price: '$3,500', note: '10+ pages, speed + SEO' },
              { label: 'Web Application MVP', price: '$7,500', note: 'Custom functionality' },
              { label: 'AI Automation', price: '$2,500', note: 'Single workflow' },
            ].map(({ label, price, note }) => (
              <div key={label} className="flex items-center justify-between py-2 border-t border-fj-charcoal/10 first:border-0">
                <div>
                  <p className="text-sm font-semibold font-fj-body text-fj-ink">{label}</p>
                  <p className="text-xs text-fj-ink/50 font-fj-body">{note}</p>
                </div>
                <span className="text-fj-jet-blue font-bold font-fj-display text-base">{price}</span>
              </div>
            ))}
            <a
              href="/contact"
              className="block mt-4 text-center text-sm font-semibold text-fj-jet-blue font-fj-body hover:underline"
            >
              Get a free quote →
            </a>
          </div>
        }
      />

      {/* ── 5. STRATEGIC DARK SECTION ── */}
      <StrategicDarkSection
        eyebrow="THE REAL REASON US AGENCIES COST SO MUCH"
        headline="You're not paying for a better website. You're paying for their office."
        body="The average US web design agency bills $150–$250 per hour. Of that, maybe $60–$80 goes to the developer actually building your site. The rest covers downtown rent, a project manager who sends you weekly update emails, an account executive who sold you the deal, and a business development team working on their next client. FactoryJet has none of that. Our team is India-based, our engineering is 25+ years experienced, and our fixed-price model means we win when you launch on time — not when the project drags."
        stats={[
          { value: '$150–250', label: 'US agency hourly rate', sub: 'vs. FactoryJet fixed price' },
          { value: '70%', label: 'of agency fees are overhead', sub: 'not engineering' },
          { value: '$0', label: 'FactoryJet overhead cost', sub: 'passed on to you' },
        ]}
      />

      {/* ── 6. INDUSTRIES / COST FACTORS ── */}
      <IndustriesGrid
        eyebrow="WHAT MOVES THE NUMBER"
        headline="Six factors that drive website design cost"
        items={[
          {
            title: 'Page Count',
            description: 'Each page needs a design, content, and SEO structure. A 5-page site is fundamentally different from a 20-page site — scope your needs accurately.',
            icon: '📄',
          },
          {
            title: 'Custom Functionality',
            description: 'Booking systems, member portals, configurators, and custom calculators require engineering beyond design. These are always quoted separately.',
            icon: '⚙️',
          },
          {
            title: 'E-Commerce Complexity',
            description: 'Product count, variant logic, subscription billing, and multi-currency add meaningful development time to e-commerce builds.',
            icon: '🛒',
          },
          {
            title: 'Integrations',
            description: 'CRM syncs, email platform connections, booking tools, and payment gateways each require configuration. Simple integrations take hours; complex ones take days.',
            icon: '🔗',
          },
          {
            title: 'Copywriting',
            description: 'Content that converts requires a professional writer. Add $75–$150 per page if you need copy — or provide your own.',
            icon: '✍️',
          },
          {
            title: 'Timeline',
            description: 'Rush projects under 5 days add 20% to the base price. Standard 7-day delivery is included at no premium in our packages.',
            icon: '⚡',
          },
        ]}
      />

      {/* ── 7. SERVICE JOURNEY ── */}
      <div id="process">
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Free Quote to Live Website — in 5 Steps"
          subheadline="Every FactoryJet project follows the same five-stage process. You know exactly where you are at every point."
          stages={journeyStages}
          cta={{ label: 'Start With a Free Consultation', href: '/contact' }}
        />
      </div>

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="SERVING US BUSINESSES"
        headline="Professional website design for US small businesses — from $1,499"
        body="FactoryJet works with small businesses across the United States. Whether you're a retail shop in Austin, a law firm in Miami, a DTC brand in Denver, or a service business in Charlotte — our process is built for US time zones, US audiences, and US search behavior."
        cities={[
          { name: 'Austin, TX', href: '/us/cities/austin' },
          { name: 'Miami, FL', href: '/us/cities/miami' },
          { name: 'Denver, CO', href: '/us/cities/denver' },
          { name: 'Nashville, TN', href: '/us/cities/nashville' },
          { name: 'Charlotte, NC', href: '/us/cities/charlotte' },
          { name: 'Portland, OR', href: '/us/cities/portland' },
          { name: 'Raleigh, NC', href: '/us/cities/raleigh' },
          { name: 'Tampa, FL', href: '/us/cities/tampa' },
        ]}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. US Agency vs. Freelancer vs. DIY Builder"
        columns={['FactoryJet', 'US Web Agency', 'Freelancer', 'Wix / Squarespace']}
        rows={[
          {
            feature: 'Starting Price',
            values: ['$1,499', '$8,000+', '$1,500–$5,000', '$16–$49/mo'],
          },
          {
            feature: 'Fixed-Price Guarantee',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="no" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="diy" kind="yes" />,
            ],
          },
          {
            feature: '7-Day Delivery',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="no" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="diy" kind="yes" />,
            ],
          },
          {
            feature: 'Custom Design (No Templates)',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Lighthouse 90+ Performance',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="partial" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'On-Page SEO Setup',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'You Own the Website',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="yes" kind="yes" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: '30-Day Post-Launch Support',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="partial" />,
              <CompareIcon key="fl" kind="no" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Dedicated Project Manager',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="yes" />,
              <CompareIcon key="fl" kind="no" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: '500+ US Clients Served',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="us" kind="partial" />,
              <CompareIcon key="fl" kind="no" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
        ]}
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="WEBSITE DESIGN PACKAGES"
          headline="Fixed-Price Website Packages — No Hourly Billing, No Surprises"
          tiers={[
            {
              name: 'Starter',
              price: '$1,499',
              description: 'Perfect for service businesses, consultants, and local shops that need a professional web presence fast.',
              features: [
                'Up to 5 pages',
                'Custom design — no templates',
                'Mobile-responsive',
                'On-page SEO setup',
                'Contact form + Google Maps',
                'Google Analytics + Search Console',
                'Core Web Vitals optimized',
                '7-day delivery',
                '30 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
            },
            {
              name: 'Growth',
              price: '$3,500',
              description: 'For growing businesses that need a full content strategy, blog, and lead generation infrastructure.',
              features: [
                'Up to 15 pages',
                'Blog / resource center setup',
                'CRM integration (HubSpot, Salesforce)',
                'Email marketing integration',
                'Lead capture forms + automations',
                'Schema markup for Google rich results',
                'Internal linking SEO structure',
                'Booking / scheduling integration',
                '14-day delivery',
                '30 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
              highlight: true,
              badge: 'Most Popular',
            },
            {
              name: 'E-Commerce',
              price: '$2,999',
              description: 'Shopify or WooCommerce store with everything you need to sell — custom design, products, payments, and shipping.',
              features: [
                'Shopify or WooCommerce',
                'Custom store design',
                'Up to 50 products configured',
                'Collections + navigation setup',
                'Payment gateway (Shopify / Stripe / PayPal)',
                'Shipping + tax configuration',
                'Email notifications setup',
                'Mobile-optimized checkout',
                '7-day delivery',
                '30 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
            },
          ]}
          footnote="All packages are fixed-price. Ask about web application development, AI automation, and monthly maintenance plans."
        />
      </div>

      {/* ── 11. INDUSTRIES OVERVIEW (Services Nav) ── */}
      <IndustriesGrid
        eyebrow="ALL SERVICES"
        headline="Every service we offer — with transparent pricing"
        items={[
          {
            title: 'Website Redesign',
            description: 'Modernize your existing site with faster load times, better SEO, and a design that converts. Starting at $3,500.',
            icon: '🔄',
            href: '/us/services/website-redesign',
          },
          {
            title: 'WordPress Development',
            description: 'Custom WordPress themes — no Elementor bloat, no performance ceiling. Starting at $1,999.',
            icon: '🔵',
            href: '/us/services/wordpress-development',
          },
          {
            title: 'Web Application Development',
            description: 'Custom web apps — booking systems, member portals, SaaS MVPs. Starting at $7,500.',
            icon: '💻',
            href: '/us/services/web-application-development',
          },
          {
            title: 'AI Automation',
            description: 'Connect your tools. Eliminate manual workflows. Save 20+ hours per week. Starting at $2,500.',
            icon: '🤖',
            href: '/us/services/ai-automation',
          },
          {
            title: 'Law Firm Website Design',
            description: 'Practice-area-specific landing pages built to rank and convert legal clients. Starting at $2,499.',
            icon: '⚖️',
            href: '/us/services/law-firm-website-design',
          },
          {
            title: 'Real Estate Website Design',
            description: 'IDX integration, neighborhood pages, and agent branding that drives listing inquiries. Starting at $2,499.',
            icon: '🏠',
            href: '/us/services/real-estate-website-design',
          },
        ]}
      />

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        eyebrow="CLIENT RESULTS"
        headline="What US business owners say about FactoryJet's pricing and quality"
        testimonials={[
          {
            quote: "I got quotes from three US agencies — the lowest was $14,500. FactoryJet came in at $3,500 for the same 15-page site. I was skeptical, but the final product was better than anything the agencies showed me in their portfolios.",
            author: 'Mark T.',
            role: 'Owner',
            company: 'Austin Landscaping Co.',
          },
          {
            quote: "The fixed price was the thing that sold me. No hourly billing, no scope creep invoices. I knew exactly what I was paying before I signed anything. Site went live on day 6.",
            author: 'Jennifer R.',
            role: 'Founder',
            company: 'Denver Wellness Studio',
          },
          {
            quote: "Our Shopify store was quoted at $18,000 by a local agency. FactoryJet built it for $4,200 — custom design, 80 products, everything. It's been running for 18 months without a single issue.",
            author: 'Carlos M.',
            role: 'Co-Founder',
            company: 'Miami DTC Brand',
          },
        ]}
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="PRICING FAQ"
        headline="Every question about website cost — answered honestly"
        categories={faqCategories}
      />

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        eyebrow="GET YOUR QUOTE"
        headline="Find out exactly what your website will cost — in 24 hours"
        subheadline="Tell us what you need. We'll send a fixed-price quote within one business day. No sales call required, no commitment to respond."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
        trustSignals={[
          'Fixed price — always',
          '7-day delivery guarantee',
          '500+ US businesses served',
        ]}
      />

      <SiteFooter />
    </>
  );
}
