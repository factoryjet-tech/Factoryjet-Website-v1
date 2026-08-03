import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/**
 * ⚠️ MEASUREMENT NOTE: read before judging this page's performance.
 *
 * Salesforce Commerce Cloud / Demandware / SFCC migration keywords returned
 * LITERALLY ZERO search volume in the 2026-08-03 DataForSEO pull
 * (dfs_replatform.py, 230 keywords across US + UK). Same for SAP Hybris and
 * NetSuite SuiteCommerce. These buyers do not arrive via Google search; they
 * arrive via RFP, systems integrators, and LLM recommendation.
 *
 * This page is therefore an LLM-VISIBILITY AND SALES-COLLATERAL asset.
 * Judge it on ChatGPT / Perplexity / Claude mention rate and on sales usage.
 * DO NOT judge it on organic sessions or keyword rankings. By design there is
 * nothing to rank for, and measuring it that way will wrongly read as failure.
 *
 * See docs/AI-SEO-RULEBOOK.md §9 and pipeline/research/ECOMMERCE-LEADGEN-PLAN.md.
 */

const PAGE_MODIFIED = '2026-08-03';

export const metadata: Metadata = {
  title: 'Salesforce Commerce Cloud to Shopify Plus Migration | SFCC Replatforming | FactoryJet',
  description:
    'Salesforce Commerce Cloud to Shopify Plus migration. We replatform SFCC and Demandware sites off SiteGenesis and SFRA, replacing cartridges, ISML templates, price books, the promotions engine, and OCAPI and SCAPI integrations, with complete URL mapping and staged multi-site cutover.',
  openGraph: {
    type: 'website', siteName: 'FactoryJet',
    title: 'Salesforce Commerce Cloud to Shopify Plus Migration | FactoryJet',
    description: 'SFCC and Demandware replatforming to Shopify Plus: cartridges, ISML, price books, promotions engine, OCAPI and SCAPI integrations.',
    url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet Salesforce Commerce Cloud to Shopify Plus migration' }],
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'SFCC to Shopify Plus Migration | FactoryJet', description: 'Salesforce Commerce Cloud replatforming to Shopify Plus.', images: ['https://factoryjet.com/og-default.png'] },
  alternates: { canonical: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const FAQ_CATEGORIES = [
  { key: 'basics', label: 'SFCC basics' },
  { key: 'arch', label: 'Architecture' },
  { key: 'data', label: 'Data & catalog' },
  { key: 'integrations', label: 'Integrations' },
  { key: 'process', label: 'Process & governance' },
];

const FAQ_ITEMS = [
  { category: 'basics', question: 'Why do Salesforce Commerce Cloud brands move to Shopify Plus?', answer: 'Three drivers dominate: total cost of ownership including licence and the specialist development capacity SFCC requires, release velocity when every change needs a cartridge deployment, and licence renewal forcing a genuine build-versus-buy review. The trade is deep enterprise configurability for a platform your team can operate.' },
  { category: 'basics', question: 'Is Shopify Plus really an enterprise alternative to SFCC?', answer: 'For a large share of SFCC brands, yes, and for some, no. Shopify Plus handles high-volume DTC, multi-market selling, and B2B well. Where SFCC still wins is extremely deep custom merchandising logic, very complex multi-brand catalog hierarchies, and organisations already committed to the wider Salesforce ecosystem.' },
  { category: 'basics', question: 'What is the difference between SFCC and Demandware?', answer: 'They are the same platform. Demandware was the original product name before Salesforce acquired it, and the term still appears in older documentation, job specs, and internal naming. If your team says Demandware and your invoices say Salesforce B2C Commerce, you are on one platform, not two.' },
  { category: 'basics', question: 'Should we stay on Salesforce Commerce Cloud?', answer: 'Sometimes, and we will say so. If your merchandising logic genuinely requires SFCC\'s depth, you run many brands and locales with divergent catalogs, or the wider Salesforce estate is central to operations, replatforming trades one set of constraints for another. The migration is worth it when the platform is the bottleneck.' },
  { category: 'arch', question: 'What happens to our cartridges?', answer: 'They do not transfer. Cartridges are SFCC-specific extension packages, so every piece of custom functionality is re-implemented as Shopify theme code, a Shopify app, Shopify Functions, or dropped. Cataloguing what each cartridge actually does, including ones nobody maintains, is where the real project scope emerges.' },
  { category: 'arch', question: 'Does it matter whether we are on SiteGenesis or SFRA?', answer: 'Yes, mainly for effort and URL structure. SFRA is the more modern reference architecture and tends to have cleaner separation, which makes auditing customisation easier. SiteGenesis implementations are typically older and more heavily modified, so the customisation inventory takes longer and usually surfaces more surprises.' },
  { category: 'arch', question: 'What replaces ISML templates?', answer: 'Shopify Liquid, or a headless front end where the storefront requirements justify it. ISML templating logic frequently encodes business rules that should live elsewhere, so this is an opportunity to move that logic into data and Functions rather than reproducing template complexity on a new platform.' },
  { category: 'arch', question: 'Can we go headless instead of using Liquid?', answer: 'Yes. Shopify Plus supports headless through the Storefront API and Hydrogen, which suits brands already running a decoupled front end on SFCC. It adds engineering ownership, so we scope it as a deliberate choice rather than a default. Many SFCC brands are better served by Liquid than they expect.' },
  { category: 'data', question: 'How do SFCC price books map to Shopify?', answer: 'Price books become a combination of Shopify markets, price lists, and B2B catalogs depending on how they are used. SFCC price book hierarchies with fallbacks have no exact equivalent, so the mapping is a modelling exercise rather than a data copy, and it is one of the most important decisions in the whole migration.' },
  { category: 'data', question: 'What about the SFCC promotions engine?', answer: 'This is usually the hardest single component. SFCC\'s promotions engine with campaigns, qualifiers, and complex stacking rules is more expressive than Shopify\'s native discounts. Complex promotions get rebuilt with Shopify Functions or a promotions app, and a frank inventory of which promotions actually run is essential before estimating.' },
  { category: 'data', question: 'Do content assets and slots migrate?', answer: 'Not directly. SFCC content assets and content slots become Shopify metaobjects, theme sections, or a headless CMS depending on how editorial teams work. Because slots are often used to drive merchandising rather than just content, the mapping needs merchandising input rather than being treated as a developer task.' },
  { category: 'data', question: 'Can you migrate multi-site and multi-locale catalogs?', answer: 'Yes, through Shopify Markets for locales and currencies, and either separate stores or a single store with market-specific catalogs for multi-brand estates. SFCC sites sharing a master catalog with site-specific assignments need a deliberate model, since Shopify approaches that differently.' },
  { category: 'data', question: 'What happens to customer and order data?', answer: 'Customers, addresses, and order history extract through OCAPI or SCAPI and import into Shopify. Passwords cannot migrate, as with any platform move, so customers reset at launch. For enterprise brands the customer communication around that reset needs planning with marketing well before cutover.' },
  { category: 'integrations', question: 'What replaces OCAPI and SCAPI integrations?', answer: 'Shopify\'s Admin API and Storefront API, plus webhooks and Flow for event-driven work. Every integration written against OCAPI or SCAPI is rebuilt, and enterprise SFCC estates typically carry many, including some running through middleware nobody has reviewed in years.' },
  { category: 'integrations', question: 'What about the SFCC job framework?', answer: 'Scheduled jobs for catalog imports, inventory feeds, and order exports have no direct Shopify equivalent and are rebuilt as scheduled tasks in middleware, an integration platform, or Shopify Flow depending on complexity. This is routinely underestimated because jobs are invisible from the storefront.' },
  { category: 'integrations', question: 'Can you keep our ERP, OMS, and PIM connected?', answer: 'Yes, and this is central rather than peripheral. SAP, Oracle, NetSuite, Manhattan, Akeneo and similar systems all need their integrations rebuilt against Shopify APIs. A migration is not finished when the storefront is live; it is finished when order, inventory, and product flows are verified end to end.' },
  { category: 'integrations', question: 'What about Salesforce Service Cloud or Marketing Cloud?', answer: 'Those can stay. Leaving B2C Commerce does not require leaving the wider Salesforce estate. Service Cloud and Marketing Cloud both integrate with Shopify, though the connection is rebuilt rather than inherited. Brands often keep the CRM and marketing layer while replacing only commerce.' },
  { category: 'process', question: 'Will we lose search rankings migrating from SFCC?', answer: 'Not with complete URL mapping, but SFCC estates are usually large and multi-locale, so the map is correspondingly large. SFCC URL structures with locale and site path segments differ from Shopify\'s, and hreflang has to be rebuilt across markets. We crawl every indexed URL per locale rather than sampling.' },
  { category: 'process', question: 'How long does an SFCC to Shopify Plus migration take?', answer: 'Longer than any other route we run, typically several months. Cartridge inventory, promotions rebuild, price book modelling, and integration count drive it. Anyone quoting an enterprise SFCC replatform in weeks has not looked at the customisation inventory.' },
  { category: 'process', question: 'Can we migrate one brand or region at a time?', answer: 'Usually yes, and for multi-site estates it is normally the right approach. A single market or lower-risk brand goes first, which proves the integration pattern and the redirect approach before the flagship follows. It does mean running two platforms concurrently, which needs planning around shared inventory.' },
  { category: 'process', question: 'What about our SFCC licence and contract timing?', answer: 'Licence renewal is frequently what triggers the review, and it sets a hard deadline. We plan backwards from renewal with buffer, because a migration compressed to hit a contract date is where the expensive mistakes happen. Starting the audit early costs little and preserves options.' },
  { category: 'process', question: 'How do you handle governance on a project this size?', answer: 'Phased milestones with sign-off gates, an explicit customisation inventory agreed before build, and integration acceptance tested against real orders rather than demo data. Enterprise migrations fail on scope discovery mid-project, so we front-load the discovery and put it in writing.' },
  { category: 'process', question: 'What do you need from us to start?', answer: 'Access to Business Manager, a cartridge and customisation inventory, a list of active promotions, your integration map including middleware, and a per-locale crawl of indexed URLs. Those five things determine the estimate, and assembling them is worthwhile even if you ultimately stay on SFCC.' },
];

const FAQ_SCHEMA = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ITEMS.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) };
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Salesforce Commerce Cloud to Shopify Plus migration',
  name: 'Salesforce Commerce Cloud and Demandware to Shopify Plus replatforming',
  description: 'Enterprise SFCC and Demandware replatforming to Shopify Plus, covering SiteGenesis and SFRA customisation inventory, cartridge replacement, ISML to Liquid or headless Hydrogen, price book and promotions engine modelling, content asset and slot migration, OCAPI and SCAPI integration rebuilds, job framework replacement, multi-site and multi-locale catalog mapping, and per-locale URL redirect mapping.',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
};
const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  '@id': 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus#webpage',
  url: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus',
  name: 'Salesforce Commerce Cloud to Shopify Plus Migration',
  description: 'SFCC and Demandware replatforming to Shopify Plus: cartridges, ISML, price books, promotions engine, and API integrations.',
  dateModified: PAGE_MODIFIED,
  author: { '@type': 'Person', name: 'Bhavesh Barot', url: 'https://www.linkedin.com/in/bhaveshbarot/', jobTitle: 'Founder, FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};
const ORG_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com',
  description: 'FactoryJet is an e-commerce development agency that builds and migrates commerce platforms for US brands.',
  sameAs: ['https://www.linkedin.com/company/factoryjet'],
};
const BREADCRUMB_SCHEMA = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
  { '@type': 'ListItem', position: 2, name: 'Replatforming', item: 'https://factoryjet.com/replatforming' },
  { '@type': 'ListItem', position: 3, name: 'Salesforce Commerce Cloud to Shopify Plus', item: 'https://factoryjet.com/replatforming/salesforce-commerce-cloud-to-shopify-plus' },
] };

const STATS = [
  { b: 'SiteGenesis & SFRA', s: 'both audited' },
  { b: 'Cartridges', s: 'inventoried, then replaced' },
  { b: 'Promotions', s: 'rebuilt with Functions' },
  { b: 'Phased', s: 'brand or region at a time' },
];
const HARD = [
  { t: 'The promotions engine', d: 'Usually the hardest single component. SFCC campaigns, qualifiers, and stacking rules are more expressive than native Shopify discounts. Complex promotions get rebuilt with Shopify Functions, and you need a frank inventory of which ones actually run.' },
  { t: 'Price book hierarchies', d: 'SFCC price books with fallbacks have no exact Shopify equivalent. They map onto markets, price lists, and B2B catalogs, which is a modelling exercise rather than a data copy and one of the most consequential decisions in the project.' },
  { t: 'Cartridge inventory', d: 'Every cartridge is SFCC-specific and none transfer. Cataloguing what each actually does, including unmaintained ones, is where the real scope appears. SiteGenesis estates usually take longer here than SFRA.' },
  { t: 'The job framework', d: 'Scheduled catalog imports, inventory feeds, and order exports are invisible from the storefront and routinely forgotten. Each is rebuilt in middleware, an integration platform, or Shopify Flow.' },
  { t: 'Content slots drive merchandising', d: 'SFCC slots often carry merchandising logic, not just content. Mapping them to metaobjects or theme sections needs merchandising input rather than being handed to developers as a content task.' },
  { t: 'Multi-locale URL and hreflang', d: 'Enterprise SFCC estates are large and multi-locale. URL maps have to be built per locale and hreflang rebuilt across markets, so sampling is not good enough.' },
];
const STEPS = [
  { n: '01', t: 'Customisation inventory', d: 'Cartridge-by-cartridge audit, active promotion list, price book model, integration map including middleware, and a per-locale crawl of indexed URLs.' },
  { n: '02', t: 'Model & decide', d: 'Price books to markets and catalogs, promotions to Functions, content slots to metaobjects, Liquid or headless. Agreed and written down before build.' },
  { n: '03', t: 'Build & integrate', d: 'Shopify Plus build, OCAPI and SCAPI integrations rebuilt against Admin and Storefront APIs, job framework replaced, tested against real orders.' },
  { n: '04', t: 'Phased cutover', d: 'One brand or region first to prove the pattern, per-locale redirect maps live, SFCC kept reachable so rollback stays a DNS change.' },
  { n: '05', t: 'Roll forward', d: 'Remaining markets migrated on the proven pattern, with Search Console coverage monitored per locale throughout.' },
];

const checkIcon = (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SFCCToShopifyPlusPage() {
  return (
    <>
      <script id="sfcc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="sfcc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script id="sfcc-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="sfcc-org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="sfcc-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">

        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(44px,6vh,84px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">Salesforce Commerce Cloud to Shopify Plus</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Enterprise replatforming, scoped before it is sold.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '48ch' }}>
                  We move Salesforce Commerce Cloud and Demandware estates to Shopify Plus. Cartridge inventory first,
                  then the promotions engine and price book modelling that actually decide the timeline, then integrations
                  rebuilt against Shopify APIs and a phased cutover by brand or region.
                </p>
                <HeroInlineForm source="us_sfcc_shopify_hero" region="us" submitLabel="Get a replatforming audit" />
              </div>
              <div className="pp-stage" role="img" aria-label="An SFCC estate migrating to Shopify Plus with cartridges, promotions and integrations rebuilt.">
                <div className="pp-store" aria-hidden="true">
                  <div className="bar"><i /><i /><i /></div>
                  <div className="body">
                    <div className="row"><span className="k">Cartridges</span><span className="v">inventoried</span></div>
                    <div className="row win"><span className="k">Promotions</span><span className="v">→ Functions</span></div>
                    <div className="row"><span className="k">Price books</span><span className="v">→ markets</span></div>
                    <div className="row"><span className="k">OCAPI / SCAPI</span><span className="v">rebuilt</span></div>
                  </div>
                </div>
                <span className="pp-node" style={{ top: '4%', left: '-4%' }} aria-hidden="true"><span className="d" />SiteGenesis &amp; SFRA</span>
                <span className="pp-node" style={{ bottom: '6%', right: '-6%', animationDelay: '.8s' }} aria-hidden="true"><span className="d" />Shopify Plus</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pp-sec tint" style={{ paddingTop: 'clamp(32px,4vh,52px)', paddingBottom: 'clamp(32px,4vh,52px)' }}>
          <div className="pp-wrap">
            <div className="pp-stats">
              {STATS.map((s) => (<div className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></div>))}
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the short answer'}</p>
            <h2 style={{ marginTop: '10px' }}>What does an SFCC to Shopify Plus migration involve?</h2>
            <div style={{ marginTop: '18px', display: 'grid', gap: '14px', maxWidth: '72ch' }} className="pp-lead">
              <p>
                A Salesforce Commerce Cloud replatform moves your catalog, customers, orders, content, integrations, and
                URLs onto Shopify Plus. Because SFCC is an enterprise platform with its own extension model, almost
                nothing transfers directly: cartridges have no equivalent, ISML templates become Liquid or a headless
                front end, price books become markets and price lists, and the promotions engine gets rebuilt with
                Shopify Functions.
              </p>
              <p>
                The work that decides the timeline is the customisation inventory. SFCC estates accumulate cartridges,
                scheduled jobs, and integrations over years, and a meaningful share are unmaintained or undocumented.
                Anyone quoting an enterprise SFCC replatform without that inventory is quoting a guess.
              </p>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// the hard parts'}</p>
            <h2 style={{ marginTop: '10px' }}>Six things that decide the timeline</h2>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {HARD.map((h) => (
                <article className="pp-card" key={h.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{h.t}</h3><p>{h.d}</p>
                </article>
              ))}
            </div>
            <p className="pp-lead" style={{ marginTop: '24px', maxWidth: '66ch' }}>
              And the counterpoint we will give you honestly: if your merchandising logic genuinely needs SFCC’s depth,
              you run many brands and locales with divergent catalogs, or the wider Salesforce estate is central to how
              you operate, replatforming trades one set of constraints for another rather than removing them.
            </p>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <div className="pp-card" style={{ padding: 'clamp(28px,4vw,44px)', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0 }}>Licence renewal driving the timeline?</h2>
              <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '62ch' }}>
                That is the usual trigger, and it sets a hard deadline. Migrations compressed to hit a contract date are
                where the expensive mistakes happen. Starting the customisation inventory early costs very little and
                preserves your options, including the option to stay.
              </p>
              <div style={{ marginTop: '20px' }}>
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// how it runs'}</p>
            <h2 style={{ marginTop: '10px' }}>Our five-stage enterprise process</h2>
            <div className="pp-bento" style={{ marginTop: '36px' }}>
              {STEPS.map((s) => (
                <article className="pp-card" key={s.n}>
                  <p className="pp-mlabel" style={{ marginBottom: '8px' }}>{s.n}</p>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{s.t}</h3><p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// related'}</p>
            <h2 style={{ marginTop: '10px' }}>Related work</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '68ch' }}>
              See{' '}
              <Link href="/replatforming" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>all replatforming services</Link>{' '}
              for the other routes we run, including{' '}
              <Link href="/replatforming/magento-to-shopify" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>Magento to Shopify</Link>.
              If your SFCC estate carries B2B selling, our{' '}
              <Link href="/b2b-ecommerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>B2B e-commerce</Link>{' '}
              build covers how contract pricing, net terms, and account hierarchies get rebuilt on Shopify Plus, and{' '}
              <Link href="/headless-commerce" style={{ color: 'var(--pp-orange-dark)', textDecoration: 'underline' }}>headless commerce</Link>{' '}
              covers the decoupled front-end option.
            </p>
          </div>
        </section>

        <FAQ
          eyebrow="SFCC REPLATFORMING FAQ"
          headline="Questions enterprise teams ask before replatforming"
          items={FAQ_ITEMS}
          categories={FAQ_CATEGORIES}
        />

        <section className="pp-sec tint" id="final-cta">
          <div className="pp-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <h2 style={{ marginTop: 0 }}>Scope your SFCC replatform</h2>
                <p className="pp-lead" style={{ marginTop: '14px', maxWidth: '52ch' }}>
                  Tell us whether you are on SiteGenesis or SFRA, roughly how many cartridges and locales, and when your
                  licence renews. We will run the customisation inventory and send a phased proposal before any build
                  work starts.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <ModalCTAButton label="Get a replatforming audit" region="us" btnVariant="secondary-light" />
                </div>
              </div>
              <div className="pp-card" style={{ padding: 'clamp(24px,3vw,34px)' }}>
                <ul style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Cartridge-by-cartridge inventory before any estimate',
                    'Active promotions listed, then rebuilt with Functions',
                    'Price book model agreed and written down up front',
                    'Per-locale URL maps and hreflang, not sampling',
                    'Phased by brand or region so the pattern is proven first',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.55, color: 'var(--pp-body)' }}>
                      <span style={{ marginTop: '3px', flex: 'none', display: 'inline-flex', height: '18px', width: '18px', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', background: 'rgba(240,90,40,0.1)', color: 'var(--pp-orange-dark)' }}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
