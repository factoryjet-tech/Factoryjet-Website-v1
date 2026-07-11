import type { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, Mail, Search, MousePointerClick, ShoppingBag, Bot, Check } from 'lucide-react';

import { usServiceAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HeroInlineForm from '@/components/HeroInlineForm';
import ComparisonTable from '@/components/v2/ComparisonTable';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import JsonLd from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import './ecommerce-growth-agency.css';

const URL = 'https://factoryjet.com/services/ecommerce-growth-agency';

/* ── SEO / Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Ecommerce Growth Agency for US Brands | FactoryJet',
  description:
    'FactoryJet is a full-funnel ecommerce growth agency for US brands: paid ads, email and SMS, ecommerce SEO, CRO, and AI automation, run by one senior in-house team. Get a free growth audit.',
  keywords: [
    'ecommerce growth agency',
    'ecommerce agency',
    'ecommerce marketing agency',
    'ecommerce advertising agency',
    'ecommerce ppc agency',
    'ecommerce seo agency',
    'ecommerce email marketing',
    'ecommerce marketing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Ecommerce Growth Agency for US Brands | FactoryJet',
    description:
      'Full-funnel ecommerce growth for US brands: ads, email, SEO, CRO, and AI, under one senior in-house team. Free growth audit.',
    url: URL,
    images: [
      { url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Ecommerce Growth Agency' },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Growth Agency for US Brands | FactoryJet',
    description:
      'Full-funnel ecommerce growth: ads, email, SEO, CRO, and AI, one senior in-house team. Free growth audit.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: URL,
    languages: usServiceAlternates['ecommerce-growth-agency'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── FAQ data (drives both the on-page accordion and the FAQPage schema) ──── */
const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'The basics' },
  { key: 'services', label: 'Services & channels' },
  { key: 'working', label: 'Working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  { category: 'basics', question: 'What does an ecommerce growth agency do?', answer: 'It runs every channel that drives store revenue as one system: paid ads, email and SMS, SEO, conversion optimization, and AI automation. Rather than managing separate specialists, you get one accountable team that ties spend to revenue and reports on profit.' },
  { category: 'basics', question: 'What is ecommerce marketing?', answer: 'Ecommerce marketing is how an online store attracts visitors and turns them into repeat buyers. It spans paid ads, email and SMS, SEO, social, and conversion optimization. The goal is not traffic for its own sake, it is profitable, repeatable revenue from the channels that pay back.' },
  { category: 'basics', question: 'How do you grow an ecommerce business?', answer: 'You grow revenue on three fronts at once: get more of the right traffic (ads and SEO), convert more of it (CRO and store speed), and keep more customers buying (email, SMS, loyalty). We audit which lever is weakest for you and fix that first for the fastest return.' },
  { category: 'basics', question: 'Which channels do you manage?', answer: 'Paid ads (Google, Meta, marketplaces), email and SMS, ecommerce SEO, conversion rate optimization, and AI search. We also set up and manage marketplace selling on Amazon, Walmart, and TikTok Shop when they fit your brand.' },
  { category: 'basics', question: 'What makes FactoryJet different from a single-channel agency?', answer: 'Single-channel agencies optimize their slice while your overall revenue can still stall. We own the full funnel and the store itself, so ads, email, SEO, CRO, and site changes move together. One team, one number to grow.' },

  { category: 'services', question: 'Do you offer ecommerce PPC and advertising management?', answer: 'Yes. We run paid search, paid social, and marketplace ads as a full ecommerce advertising service, managed to blended ROAS and contribution margin. You get transparent reporting on what each dollar returns, not just impressions and clicks.' },
  { category: 'services', question: 'Do you do ecommerce email marketing?', answer: 'Yes. Email and SMS are usually the fastest profit lever for an existing store. We build welcome, abandoned-cart, post-purchase, and win-back flows in Klaviyo or Shopify Email, then run campaigns that lift repeat revenue.' },
  { category: 'services', question: 'Can you help with ecommerce SEO too?', answer: 'Yes, ecommerce SEO is one of our core services. We optimize category, product, and collection pages so buyers find you in Google, and we optimize for AI search so you get surfaced in ChatGPT and Google AI Overviews.' },
  { category: 'services', question: 'What are the best AI tools for ecommerce?', answer: 'The most useful today are AI for product content and merchandising, AI-driven email and ad creative, AI support agents, and AI search optimization. We help you pick the few that fit your stack and build custom AI agents where an off-the-shelf tool falls short.' },
  { category: 'services', question: 'Do you build or redesign the store as well?', answer: 'Yes. When the store itself is the bottleneck we handle builds, redesigns, and replatforming on Shopify and Magento, including headless commerce. Growth marketing and development under one roof means fixes ship without vendor hand-offs.' },
  { category: 'services', question: 'Do you sell on Amazon, Walmart, or TikTok Shop?', answer: 'Yes. We set up and manage marketplace selling on Amazon, Walmart Marketplace, and TikTok Shop as additional revenue channels, coordinated with your site so product pricing, inventory, and brand stay consistent.' },
  { category: 'services', question: 'Can you use AI to automate our marketing and operations?', answer: 'Yes. We build AI agents that handle customer support, product data, reporting, and repetitive ops, so your team spends time on growth instead of admin. This is a core focus, not a bolt-on.' },
  { category: 'services', question: 'What is B2B ecommerce and do you support it?', answer: 'B2B ecommerce is selling to other businesses online, with features like account-based pricing, quotes, and bulk ordering. Yes, we build and grow B2B stores on platforms like Shopify Plus and BigCommerce B2B, alongside your direct-to-consumer channels.' },

  { category: 'working', question: 'How much does an ecommerce agency cost?', answer: 'It depends on the channels you need and the stage of your store. Rather than a fixed package, we scope the work to your goals and share a clear quote, so you only invest in what will actually move revenue. Ask for a free audit and we will size it with you.' },
  { category: 'working', question: 'How long until I see results?', answer: 'Quick wins from email flows and paid-ad fixes often land in the first 30 to 60 days. SEO and CRO compound over three to six months. We prioritize the fastest-payback work first so early momentum funds the longer plays.' },
  { category: 'working', question: 'Do I have to sign a long contract?', answer: 'No. We work on short, rolling terms and earn the renewal each month with results. If a longer commitment makes sense for a big build, we scope it clearly up front so there are no surprises.' },
  { category: 'working', question: 'Who will actually work on my account?', answer: 'FactoryJet’s senior in-house team. The specialists in your kickoff are the ones doing the work, not a sales pod handing you to offshore juniors. That is a deliberate choice and a big part of why clients stay.' },
  { category: 'working', question: 'What size businesses do you work with?', answer: 'Mostly US small and mid-market ecommerce brands, from stores doing their first serious growth push to established brands scaling past seven and eight figures. We scope the engagement to your stage rather than forcing one package on everyone.' },
  { category: 'working', question: 'How do you report on performance?', answer: 'You get a live dashboard tied to revenue and contribution margin, plus a plain-language monthly review of what we did, what it returned, and what is next. No vanity metrics dressed up as progress.' },
  { category: 'working', question: 'How do we get started?', answer: 'Request the free growth audit with your store URL and email. We come back with findings and a suggested 90-day plan, then you decide if you want us to run it. No pressure, no long sales cycle.' },
];

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Growth Agency',
  serviceType: 'Ecommerce marketing and growth',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: URL,
  description:
    'FactoryJet is a full-funnel ecommerce growth agency for US brands, running paid ads, email and SMS, ecommerce SEO, conversion rate optimization, store development, and AI automation as one accountable in-house team.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ecommerce growth services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce PPC and advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce email and SMS marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversion rate optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce store build and redesign' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI search and AI automation for ecommerce' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ── Small building blocks ───────────────────────────────────────────────── */
const CHANNELS = [
  { Icon: Megaphone, title: 'Ecommerce PPC & advertising', body: 'Google, Meta, and marketplace ads managed to blended ROAS and profit, not vanity clicks. A full ecommerce advertising service, in-house.', link: '/services/ecommerce-seo', label: 'How we run paid ads', span: 'w3' },
  { Icon: Mail, title: 'Email & SMS retention', body: 'Ecommerce email marketing flows and campaigns in Klaviyo and Shopify Email that turn one-time buyers into repeat revenue.', link: '/contact', label: 'Retention playbook', span: 'w3' },
  { Icon: Search, title: 'Ecommerce SEO', body: 'Rank category and product pages for buyers, and compound long after ad spend stops.', link: '/services/ecommerce-seo', label: 'Ecommerce SEO', span: 'cell' },
  { Icon: MousePointerClick, title: 'CRO & landing pages', body: 'Turn more of the traffic you already pay for into orders with testing and checkout fixes.', link: '/contact', label: 'Conversion work', span: 'cell' },
  { Icon: ShoppingBag, title: 'Store build & redesign', body: 'Shopify and Magento builds, replatforming, and headless commerce.', link: '/services/ecommerce-development', label: 'Ecommerce development', span: 'cell' },
];

const LEVERS = [
  { b: 'Acquisition that pays back', p: 'Paid social and search tuned to contribution margin, so scaling spend does not quietly kill your profit.' },
  { b: 'Retention and lifetime value', p: 'Email, SMS, and loyalty flows that make the second and third order cheaper than the first.' },
  { b: 'Organic and AI search', p: 'Ecommerce SEO plus answer-engine optimization so buyers find you in Google and in ChatGPT.' },
  { b: 'Conversion rate optimization', p: 'Structured testing on product, cart, and checkout to lift revenue without spending a dollar more.' },
  { b: 'Marketplace expansion', p: 'Amazon, Walmart, and TikTok Shop set up and managed as extra revenue channels, not distractions.' },
  { b: 'AI automation', p: 'Agents that handle support, product data, and reporting so your team spends time on growth, not admin.' },
];

const CHECKS = [
  { b: 'Reports on profit, not clicks', p: 'Ask how they define success. If the answer is impressions or ROAS alone, keep looking.' },
  { b: 'Owns more than one channel', p: 'Single-channel shops optimize their slice while your overall revenue stalls.' },
  { b: 'Senior people on your account', p: 'Confirm who actually does the work, not just who shows up to sell you.' },
  { b: 'Transparent, scoped engagements', p: 'No mystery retainers. You should know what you get and what happens next.' },
  { b: 'Real ecommerce experience', p: 'Platform knowledge of Shopify, Magento, and checkout matters more than generic marketing.' },
  { b: 'No long lock-in', p: 'Good agencies earn the renewal every month. Be cautious of year-long contracts up front.' },
];

const STEPS = [
  { n: 'Step 01', h: 'Audit', p: 'We analyze your store, ads, email, and analytics and show exactly where revenue leaks.' },
  { n: 'Step 02', h: 'Plan', p: 'A prioritized 90-day growth plan, ranked by revenue impact and effort. Yours to keep.' },
  { n: 'Step 03', h: 'Build', p: 'We launch campaigns, flows, tests, and fixes fast, with clear owners and deadlines.' },
  { n: 'Step 04', h: 'Scale', p: 'Weekly iteration and profit-based reporting. We double down on what works, cut what does not.' },
];

const yes = <span style={{ color: '#177a48', fontWeight: 700 }}>Yes</span>;
const no = (t: string) => <span style={{ color: '#b23e13', opacity: 0.6 }}>{t}</span>;
const partial = (t: string) => <span style={{ color: '#9a6b07' }}>{t}</span>;

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function EcommerceGrowthAgencyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} id="service-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Services', url: 'https://factoryjet.com/services' },
          { name: 'Ecommerce Growth Agency', url: URL },
        ]}
      />

      <SiteHeader locale="us" />

      <main className="ega">
        {/* HERO */}
        <section className="ega-hero">
          <div className="ega-wrap ega-hero-grid">
            <div>
              <span className="ega-pill"><span className="d" /> Ecommerce Growth Agency · United States</span>
              <h1 className="ega-h1 disp">The ecommerce growth agency that turns your store into a <span className="u">revenue engine</span></h1>
              <p className="ega-lead">One team for the whole funnel: paid ads, email and SMS, ecommerce SEO, CRO, and AI automation. Built on 12 years and 500+ commerce builds.</p>
              <HeroInlineForm region="us" source="us_services_ecommerce_growth_hero" submitLabel="Get my free audit" />
              <div className="ega-trust">
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 500+ stores served</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> 12 years in commerce</span>
                <span className="tk"><Check size={15} strokeWidth={2.4} /> In-house senior team</span>
              </div>
            </div>
            <div className="ega-hero-visual">
              <div className="ega-hero-photo">
                <img src="/images/us/services/ecommerce-growth-agency/hero-fulfillment.jpg" alt="Ecommerce business owner preparing an online order for shipping" width={506} height={760} loading="eager" fetchPriority="high" decoding="async" />
              </div>
              {/* Illustrative outcome metric, qualitative visual only (not a specific client claim) */}
              <div className="ega-metric">
                <span aria-hidden="true">
                  <svg width="48" height="26" viewBox="0 0 48 26" fill="none"><polyline points="2,22 11,18 19,20 27,12 35,14 46,3" stroke="#F05A28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="46" cy="3" r="2.6" fill="#F05A28" /></svg>
                </span>
                <div>
                  <span className="hm-lab">Conversions</span>
                  <b className="hm-val">+18%<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#177a48" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg></b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANSWER-FIRST */}
        <section className="ega-answer">
          <div className="ega-wrap in">
            <div className="q disp"><span className="ql">Quick answer</span>What does an ecommerce growth agency do?</div>
            <div className="a"><p><b>An ecommerce growth agency runs every channel that drives store revenue as one system:</b> paid ads, email and SMS, SEO, conversion rate optimization, and increasingly AI automation. Instead of hiring separate specialists, you get one accountable team that ties spend to revenue, tests continuously, and reports on profit. FactoryJet does this across Shopify, Magento, BigCommerce, and WooCommerce for US brands.</p></div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section className="ega-logobar">
          <div className="ega-wrap">
            <div className="t">Building and growing stores on the platforms you already use</div>
            <div className="ega-logos"><span>Shopify</span><span>Shopify Plus</span><span>Magento</span><span>BigCommerce</span><span>WooCommerce</span></div>
          </div>
        </section>

        {/* BENTO CHANNELS */}
        <section className="ega-sec">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">What we run</span><h2 className="disp">Full-funnel ecommerce marketing, under one roof</h2><p>Most agencies do one thing. Growth needs all of them working together. Every channel is a service we run in-house, and each links to how we deliver it.</p></div>
            <div className="ega-bento">
              {CHANNELS.map(({ Icon, title, body, link, label, span }) => (
                <Link key={title} href={link} className={`ega-crystal ega-bcard ${span}`}>
                  <div className="ic"><Icon size={22} strokeWidth={2} /></div>
                  <h3 className="disp">{title}</h3>
                  <p>{body}</p>
                  <span className="lk">{label} →</span>
                </Link>
              ))}
              <div className="ega-crystal ega-bcard w6">
                <div>
                  <div className="ic"><Bot size={22} strokeWidth={2} /></div>
                  <h3 className="disp">AI search & AI automation</h3>
                  <p>Get cited in ChatGPT and Google AI Overviews, and build AI agents that automate support, merchandising, and reporting. We do this now, so you win the channels your competitors have not figured out.</p>
                </div>
                <div className="mini"><span>AI SEO</span><span>Answer engines</span><span>AI agents</span><span>Automation</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* LISTICLE 1 */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">The playbook</span><h2 className="disp">The 6 growth levers we pull for ecommerce brands</h2></div>
            <div className="ega-list">
              {LEVERS.map((l) => (
                <div key={l.b} className="ega-crystal ega-li"><span className="num" /><div><b>{l.b}</b><p>{l.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK */}
        <section className="ega-dark">
          <div className="ega-wrap ega-sec">
            <div className="ega-sh"><span className="ega-eyebrow">Why FactoryJet</span><h2 className="disp">Built to grow revenue, not to bill you for activity</h2><p>Three reasons brands move their growth to us and stay.</p></div>
            <div className="ega-pillars">
              <div className="ega-pillar"><div className="k">One team</div><h3 className="disp">Full funnel, not one channel</h3><p>Ads, email, SEO, CRO, and store fixes handled by people who talk to each other daily. No finger-pointing between three vendors.</p></div>
              <div className="ega-pillar"><div className="k">Senior</div><h3 className="disp">In-house, not offshored juniors</h3><p>The people in your kickoff are the people doing the work. A senior in-house team that has shipped 500+ commerce projects.</p></div>
              <div className="ega-pillar"><div className="k">AI-native</div><h3 className="disp">Ahead on AI commerce</h3><p>We build AI agents and optimize for AI search now, so you win the channels your competitors have not figured out yet.</p></div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="ega-sec">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">How it works</span><h2 className="disp">From free audit to compounding growth in four steps</h2></div>
            <div className="ega-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="ega-step"><div className="n">{s.n}</div><h3 className="disp">{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTICLE 2 */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <div className="ega-sh"><span className="ega-eyebrow">Before you hire anyone</span><h2 className="disp">6 things to look for in an ecommerce agency</h2><p>Use this as a checklist, whether you talk to us or anyone else.</p></div>
            <div className="ega-list">
              {CHECKS.map((c) => (
                <div key={c.b} className="ega-crystal ega-li"><span className="num" /><div><b>{c.b}</b><p>{c.p}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON (reused v2 component) */}
        <section className="ega-sec pt0">
          <div className="ega-wrap">
            <ComparisonTable
              eyebrow="COMPARE"
              headline="FactoryJet vs a single-channel agency vs a freelancer vs in-house"
              columns={[
                { label: 'FactoryJet', isFactoryJet: true },
                { label: 'Single-channel agency' },
                { label: 'Freelancer' },
                { label: 'In-house hire' },
              ]}
              rows={[
                { feature: 'Full-funnel (ads, email, SEO, CRO)', values: [yes, no('One channel'), no('One skill'), partial('Depends on hire')] },
                { feature: 'Senior in-house team', values: [yes, partial('Often juniors'), yes, yes] },
                { feature: 'Store build + growth together', values: [yes, no('No'), no('No'), no('Rarely')] },
                { feature: 'AI search + AI automation', values: [yes, no('No'), no('No'), partial('Maybe')] },
                { feature: 'Time to ramp', values: [yes, partial('Weeks'), partial('Weeks'), no('2-3 months')] },
                { feature: 'Profit-based reporting', values: [yes, partial('Channel metrics'), no('Limited'), yes] },
              ]}
            />
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="ega-sec pt0">
          <div className="ega-wrap ega-eeat-grid">
            <div className="ega-crystal ega-eeat">
              <div><img className="ega-avatar" src="/bhavesh_image.jpg" alt="Bhavesh Barot, Founder of FactoryJet" width={76} height={76} loading="lazy" decoding="async" /></div>
              <div>
                <div className="role">Led by the founder</div>
                <h3 className="disp">Bhavesh Barot, Founder of FactoryJet</h3>
                <p>Twelve years building and scaling commerce for 500+ businesses. Every engagement is run by FactoryJet&rsquo;s senior in-house team, not handed to subcontractors. You talk to the people doing the work.</p>
                <div className="ega-reco"><span>Recognized on</span> <b>Clutch</b> <b>GoodFirms</b> <b>DesignRush</b> <b>SoftwareSuggest</b></div>
              </div>
            </div>
            <div className="ega-teamframe">
              <img src="/images/us/services/service-team.webp" alt="The FactoryJet team at work" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* FAQ (reused v2 component, white background) */}
        <FAQ
          bgClassName="bg-white"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Ecommerce growth agency FAQs"
          lead="The questions US ecommerce founders actually ask us. Straight answers."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* FINAL CTA */}
        <section className="ega-sec pt0" id="final-cta">
          <div className="ega-wrap">
            <div className="ega-finalcta">
              <span className="ega-eyebrow">Get started</span>
              <h2 className="disp">See where your store is leaving revenue on the table</h2>
              <p>Send us your store URL and get a free, no-obligation growth audit from FactoryJet&rsquo;s senior team.</p>
              <Link href="/contact" className="ega-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F05A28', color: '#fff', fontWeight: 600, fontSize: 16, padding: '15px 30px', borderRadius: 999, boxShadow: '0 4px 20px rgba(240,90,40,.34)' }}>Get my free growth audit</Link>
              <div className="obj">No long contracts. Keep the audit either way.</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
