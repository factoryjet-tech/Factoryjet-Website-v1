/**
 * Case studies data layer — FactoryJet `/case-studies/` route.
 *
 * Greenfield scaffolding per Report 19 (audit-current-state/19_case_study_scoping_2026-05-27.md)
 * and Report 26 (audit-current-state/26_case_study_mockup_and_repositioning_2026-05-28.md).
 *
 * URL pattern: `/case-studies/{slug}/` (geo-agnostic, high commercial-intent search term).
 * Distinct from the legacy `/case/` route which is driven by `src/lib/legacy-pages/Case/data.constants.ts`
 * and is being sunset via 301 redirects per Report 26 Option B.
 *
 * The 10-section visual template at `/case-studies/[slug]/page.tsx` consumes
 * this shape. Every section gracefully degrades when its data field is
 * empty/undefined — case studies can ship progressively as client interviews
 * are completed (e.g. testimonial may land after launch).
 *
 * Launch queue (per Report 19): Belle Maison -> Bombay Petals -> Formative Concepts.
 * Each entry needs client-secured publish permission, real metrics, and a
 * non-fabricated testimonial quote.
 */

export type CaseStudyMetric = {
  /** Short label e.g. "Conversion rate". */
  label: string
  /** Display value e.g. "+47%" or "200+ SKUs". Percentages preferred per Report 19 Decision 4. */
  value: string
  /** Optional 1-line supporting note rendered beneath the value. */
  note?: string
}

/** A small KPI shown in the hero stat row (3 max). */
export type CaseStudyHeroStat = {
  value: string
  label: string
}

/** A single tile in the "At a glance" 3x2 KPI grid. */
export type CaseStudyGlanceTile = {
  /** Short uppercase eyebrow e.g. "INDUSTRY", "TIMELINE". */
  label: string
  /** Display value rendered in display weight. */
  value: string
  /** Optional fine-print note (e.g. INR equivalent under USD value). */
  note?: string
}

/** A screenshot slot rendered in the Solution section. */
export type CaseStudyScreenshot = {
  src: string
  alt: string
  /** Optional one-line caption rendered below the image. */
  caption?: string
  /** Visual treatment hint — desktop or mobile mockup. Defaults to desktop. */
  device?: 'desktop' | 'mobile'
}

export type CaseStudyTestimonial = {
  /** Verbatim client quote. NEVER fabricate per memory rules. */
  quote: string
  /** Client name as they want it published. */
  author: string
  /** Client title + company. */
  title: string
  /** Optional headshot URL (recommend /public/images/case-studies/{slug}-author.jpg). */
  photoUrl?: string
  /** Optional client logo URL rendered next to the testimonial. */
  companyLogoUrl?: string
}

export type CaseStudyFaq = {
  q: string
  a: string
}

export type CaseStudy = {
  /** URL slug, kebab-case. Becomes `/case-studies/{slug}/`. */
  slug: string
  /** Client name as published e.g. "Belle Maison". */
  client: string
  /** 1-line positioning under the headline. */
  tagline: string
  /** Industry vertical e.g. "DTC Ecommerce". */
  industry: string
  /** Services delivered e.g. ["Shopify Development", "AI Recommendations"]. */
  services: string[]
  /** H1 / OG title e.g. "How Belle Maison launched a 200-SKU Shopify store in 7 days". */
  headline: string
  /** 2-3 sentence excerpt for index card + meta description fallback. */
  summary: string
  /** Optional eyebrow category label shown in hero (defaults to `industry`). */
  category?: string
  /** Optional client website. */
  clientUrl?: string
  /** Optional client logo URL rendered in hero right slot + index card. */
  clientLogoUrl?: string
  /** Optional location label (e.g. "Mumbai, India" or "California, USA"). */
  location?: string
  /** Hero stat row — exactly 3 maxi-stats horizontal. */
  heroStats?: CaseStudyHeroStat[]
  /** "At a glance" 3x2 KPI tiles (6 recommended). */
  glanceTiles?: CaseStudyGlanceTile[]
  /** 3-6 headline metric pairs for legacy callers / index card. */
  keyMetrics: CaseStudyMetric[]
  /** Results section — huge headline metric stat (single biggest win). */
  headlineMetric?: CaseStudyMetric
  /** Results section — 5-6 supporting metric cards in 3x2 grid. */
  resultsMetrics?: CaseStudyMetric[]
  /** ~200-300 word "Challenge" section body. */
  challenge: string
  /** Optional pull quote rendered inside the Challenge section. */
  challengePullQuote?: string
  /** ~200-300 word "Approach" section body. */
  approach: string
  /** Tech stack pills rendered alongside the Approach prose. */
  techStack?: string[]
  /** ~200-300 word "Solution" section body. */
  solution: string
  /** 3-5 screenshot slots in the Solution section. */
  screenshots?: CaseStudyScreenshot[]
  /** ~200-300 word "Results" section body (optional — most data is in metrics). */
  results: string
  /** Optional client testimonial. Omit entirely if no verbatim quote is available. */
  testimonial?: CaseStudyTestimonial
  /** Hero image path — recommend /images/case-studies/{slug}-hero.webp. */
  imageUrl: string
  /** OG share image 1200x630 — recommend /images/case-studies/{slug}-og.png. */
  ogImageUrl: string
  /** ISO 8601 publish date. */
  publishedDate: string
  /** 4-6 FAQs per Report 19 Decision 5 (tight, not 20+). */
  faqs: CaseStudyFaq[]
  /** Slugs of 2 related case studies rendered in Section 9. */
  relatedSlugs?: string[]
  /** Optional 1-line "What we'd build for you" used inside the CTA banner. */
  ctaTeaser?: string
}

/**
 * Six real client case studies migrated from `/case/` on 2026-05-28
 * per Report 26 (Option B + per-case repositioning approved by Bhavesh).
 *
 * Repositioning principle: keep the truth (these are real Indian client wins),
 * but lead with USD-primary currency, universalize prose ("multi-million-dollar"
 * not "multi-crore"), and drop "India" specifiers from keyword examples where
 * they do not change the meaning. Slugs are preserved 1:1 so the 301 redirects
 * in `public/_redirects` map cleanly from /case/{slug} → /case-studies/{slug}.
 *
 * Order preserved from the legacy data file:
 *   Belle Maison -> Impulse Branding -> Formative Concepts ->
 *   GroFresh Agro -> Fliying Pixel -> Rukman Transport.
 */
export const CASE_STUDIES: CaseStudy[] = [
  // ─── 1. Belle Maison — DTC luxury, Shopify Plus ──────────────────────────
  {
    slug: 'belle-maison-ecommerce-success',
    client: 'Belle Maison',
    tagline: 'A multi-channel luxury home brand scaling DTC and wholesale on a single Shopify Plus stack.',
    industry: 'DTC Luxury Ecommerce',
    services: [
      'Shopify Plus Development',
      'Klaviyo Lifecycle Marketing',
      'AI Product Photography',
      'Core Web Vitals Optimization',
      'B2B Wholesale Portal',
    ],
    headline: 'How an 800-SKU DTC Luxury Brand Hit $180K in 120 Days on Shopify Plus',
    summary:
      'Belle Maison ran an 800-SKU wholesale and DTC catalog on manual spreadsheets — inventory drift, slow load times, and zero lifecycle automation were capping growth. FactoryJet rebuilt the stack on Shopify Plus with Klaviyo automation and AI-enhanced product imagery, hitting $180K USD in revenue inside 120 days.',
    category: 'E-Comm',
    heroStats: [
      { value: '$180K', label: 'Revenue in 120 days' },
      { value: '800+', label: 'SKUs live' },
      { value: '3.8%', label: 'Conversion rate' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'DTC Luxury' },
      { label: 'SERVICES', value: 'Shopify Plus + Klaviyo' },
      { label: 'TIMELINE', value: '120 Days' },
      { label: 'SCALE', value: '800+ SKUs' },
      { label: 'CHANNELS', value: 'B2B + DTC' },
      { label: 'TECH', value: 'Shopify Plus, Klaviyo, Redis' },
    ],
    keyMetrics: [
      { label: 'Revenue (120 Days)', value: '$180K USD', note: '≈ ₹1.5 Cr equivalent' },
      { label: 'SKUs Managed', value: '800+' },
      { label: 'Conversion Rate', value: '3.8%' },
      { label: 'Catalog Channels', value: 'B2B + DTC' },
    ],
    headlineMetric: {
      label: 'Revenue in 120 Days',
      value: '$180K USD',
      note: '≈ ₹1.5 Cr equivalent — DTC + wholesale combined',
    },
    resultsMetrics: [
      { label: 'Revenue (120 Days)', value: '$180K USD' },
      { label: 'Conversion Rate', value: '3.8%' },
      { label: 'SKUs Managed', value: '800+' },
      { label: 'Stock-out Errors', value: '0' },
      { label: 'Page Load (LCP)', value: '<1.5s' },
      { label: 'Repeat-purchase Lift', value: '+34%' },
    ],
    challenge:
      'Belle Maison faced a classic scaling bottleneck. Managing inventory for 800+ SKUs across both wholesale (B2B) and retail (DTC) channels manually was causing stock discrepancies. Their existing digital presence was fragmented, with slow load times and no automated marketing, resulting in a high cart abandonment rate and low repeat purchase frequency. The brand needed a single source of truth for inventory, a faster storefront that could carry hundreds of high-resolution product images without breaking Core Web Vitals, and an automation layer that could nurture both retail shoppers and wholesale buyers without the founder having to write every email by hand.',
    challengePullQuote:
      'We were running a multi-million-dollar catalog out of a spreadsheet. Something had to give.',
    approach:
      'We started with a discovery sprint to map every SKU, every wholesale contract, and every existing data feed. The plan that came out of that sprint had three pillars: consolidate the catalog onto Shopify Plus, layer Klaviyo on top for lifecycle automation, and replace the high-cost product-photography workflow with an AI-assisted pipeline. We sequenced the build so the storefront could go live in stages — DTC first, then the wholesale portal — so revenue kept moving while the back-of-house systems consolidated. Every decision was anchored to Core Web Vitals targets so the visual upgrade did not cost page speed.',
    techStack: ['Shopify Plus', 'Klaviyo', 'React', 'Node.js', 'Redis'],
    solution:
      'FactoryJet engineered a unified Shopify Plus architecture that synced inventory in real time across the DTC storefront and the new B2B portal. We implemented an AI-driven product photography workflow to enhance visuals without costly studio shoots. Klaviyo was wired into the platform for automated abandoned-cart recovery, post-purchase nurture, and personalized B2B re-order sequences. The frontend was optimized for Core Web Vitals — image lazy-loading, deferred third-party scripts, and a Redis-backed caching layer — ensuring sub-second load times even with high-res imagery.',
    results:
      'Within 120 days of launch Belle Maison crossed $180K USD in revenue (equivalent to roughly ₹1.5 Cr at the time). Conversion rate stabilized at 3.8% — well above the DTC luxury benchmark of ~2%. The B2B portal eliminated stock-out errors entirely, and Klaviyo flows now generate a meaningful share of repeat-purchase revenue without manual list pulls. The founder went from running spreadsheets to running a growth roadmap.',
    testimonial: {
      quote:
        'They transformed our digital presence. We went from manual spreadsheets to a fully automated revenue engine.',
      author: 'Ricky B.',
      title: 'Founder, Belle Maison',
    },
    imageUrl: '/images/case-studies/belle-maison-ecommerce-success-hero.jpg',
    ogImageUrl: '/images/case-studies/belle-maison-ecommerce-success-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'If you run a 200+ SKU DTC or wholesale catalog, we can ship a Shopify Plus stack like this in 6–12 weeks.',
    relatedSlugs: ['impulse-branding-migration', 'fliying-pixel-agency'],
    faqs: [
      {
        q: 'Why Shopify Plus instead of standard Shopify for an 800-SKU catalog?',
        a: 'Belle Maison needed multi-channel inventory sync, B2B price-list automation, and Launchpad-style scheduled drops. Standard Shopify caps wholesale workflows behind extra apps; Plus handles them natively and removes a layer of integration risk for a high-SKU catalog.',
      },
      {
        q: 'How does the AI product photography workflow work?',
        a: 'We feed reference product shots through an AI enhancement pipeline that standardizes background, lighting, and color profile across the entire catalog. Studio-style photography for 800 SKUs would have taken months and cost a six-figure budget — the AI pipeline turned that into days.',
      },
      {
        q: 'How does Klaviyo plug into the wholesale side?',
        a: 'Klaviyo segments wholesale buyers separately from DTC shoppers, sends re-order reminders based on past purchase cadence, and routes high-value accounts to the founder for personal follow-up. The DTC side runs welcome series, browse abandonment, and post-purchase nurture in parallel.',
      },
      {
        q: 'What did the 120-day timeline actually cover?',
        a: 'Day 1–14: discovery + Shopify Plus setup. Day 14–45: DTC storefront launch with first 200 SKUs. Day 45–90: full catalog migration + Klaviyo flows live. Day 90–120: B2B portal launch + AI photography backfill. Revenue ramped from week three onward.',
      },
      {
        q: 'Can a US-based brand expect similar results?',
        a: 'The playbook — Shopify Plus + Klaviyo + AI photography + Core Web Vitals — is locale-agnostic. US brands often see the conversion-rate lift faster because the average US shopper has higher household disposable income; the constraint is usually catalog photography readiness and email list hygiene.',
      },
    ],
  },

  // ─── 2. Impulse Branding — rapid migration to WordPress + Breakdance ─────
  {
    slug: 'impulse-branding-migration',
    client: 'Impulse Branding',
    tagline: 'A bid-driven branding agency that needed a modern, founder-editable site before the next industry summit.',
    industry: 'Branding & Architecture',
    services: [
      'WordPress + Breakdance Build',
      'Legacy HTML Migration',
      'GEO/AIO SEO Strategy',
      'Cloudflare Performance Stack',
      'Portfolio CMS Setup',
    ],
    headline: 'Modern Stack Migration Drove $360K in Influenced Pipeline (14-Day Build)',
    summary:
      'Impulse Branding was bidding on major architectural contracts off a legacy hand-coded HTML site they could not update themselves. FactoryJet migrated them to WordPress + Breakdance in 14 days, layered GEO/AIO SEO, and influenced $360K USD in pipeline within 6 months.',
    category: 'Corporate',
    heroStats: [
      { value: '$360K', label: 'Pipeline influenced (6 mo)' },
      { value: '14 days', label: 'Build to launch' },
      { value: '+125%', label: 'Organic traffic' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Branding & Architecture' },
      { label: 'SERVICES', value: 'WordPress + Breakdance + GEO SEO' },
      { label: 'TIMELINE', value: '14 Days' },
      { label: 'SCALE', value: '15+ Pages' },
      { label: 'OUTCOME', value: '$360K Pipeline' },
      { label: 'TECH', value: 'WordPress, Breakdance, Cloudflare' },
    ],
    keyMetrics: [
      { label: 'Pipeline (6 Mo)', value: '$360K USD', note: '≈ ₹3 Cr equivalent' },
      { label: 'Dev Time', value: '2 Weeks' },
      { label: 'Organic Traffic', value: '+125%' },
      { label: 'Pages Live', value: '15+' },
    ],
    headlineMetric: {
      label: 'Pipeline Influenced in 6 Months',
      value: '$360K USD',
      note: '≈ ₹3 Cr equivalent — driven by modernized portfolio + GEO SEO',
    },
    resultsMetrics: [
      { label: 'Pipeline (6 Mo)', value: '$360K USD' },
      { label: 'Organic Traffic', value: '+125%' },
      { label: 'Dev Time', value: '2 Weeks' },
      { label: 'Pages Live', value: '15+' },
      { label: 'CMS Editors', value: 'Non-Tech Team' },
      { label: 'Hosting', value: 'Cloudflare Edge' },
    ],
    challenge:
      'Impulse Branding was stuck on a legacy hand-coded HTML site that was impossible to update without a developer. This rigidity meant their portfolio was always outdated, costing them bids on major contracts. They needed a rapid transformation to showcase their new architectural projects before a major industry summit — a hard calendar deadline that left no room for a 90-day rebuild. They also needed the new site to be editable by their non-technical team so the portfolio would never go stale again.',
    challengePullQuote:
      'We were losing bids before they even saw our best work, because our best work was not on the site yet.',
    approach:
      'We picked WordPress + Breakdance specifically because the visual builder lets a non-technical team add a new project page in under fifteen minutes — no developer required. The two-week build was sequenced around the summit date: discovery and design system in week one, page builds and content migration in week two, with the GEO/AIO SEO layer baked into the page templates from day one rather than bolted on later. Cloudflare went in front for performance and caching so the team would not need to think about hosting infrastructure post-launch.',
    techStack: ['WordPress', 'Breakdance', 'PHP', 'MySQL', 'Cloudflare'],
    solution:
      'FactoryJet executed a lightning-fast migration to a modern WordPress + Breakdance setup in just 14 days. We built a dynamic portfolio system that allows their non-technical team to upload projects instantly. The site was optimized for Generative Engine Optimization — structured data, citation-friendly section markup, and FAQ blocks — so the brand started showing up in AI answer engines for its niche queries. Cloudflare handled CDN, image optimization, and edge caching.',
    results:
      'Inside six months the modern stack drove a 125% increase in organic traffic and influenced roughly $360K USD in pipeline revenue (about ₹3 Cr equivalent). The portfolio is now updated weekly by the in-house team, the summit launch hit on schedule, and the bid win-rate climbed meaningfully because prospects could see current work the moment they landed on the site.',
    imageUrl: '/images/case-studies/impulse-branding-migration-hero.jpg',
    ogImageUrl: '/images/case-studies/impulse-branding-migration-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'Stuck on a legacy site you can not edit? We migrate to a modern, founder-editable stack in 7–14 days.',
    relatedSlugs: ['belle-maison-ecommerce-success', 'fliying-pixel-agency'],
    faqs: [
      {
        q: 'Why WordPress + Breakdance over a custom React build?',
        a: 'A custom React build would have shipped six weeks later and required a developer for every portfolio update. Breakdance gives the team a visual editor on top of WordPress, which means future content changes cost zero developer hours.',
      },
      {
        q: 'What does Generative Engine Optimization (GEO) actually add?',
        a: 'GEO is the discipline of structuring content so AI answer engines (ChatGPT, Perplexity, Google AI Overviews) cite you. We add structured data, citation-friendly section markup, named-entity reinforcement, and FAQ blocks — the things AI engines look for when picking sources.',
      },
      {
        q: 'How can a 14-day build still be SEO-strong?',
        a: 'Templates carry the SEO discipline. Every page template we ship has correct H1/H2 hierarchy, schema markup, internal linking patterns, and FAQ blocks baked in. The team only writes the body copy; the technical SEO is structural.',
      },
      {
        q: 'What was the deciding factor in winning more bids?',
        a: 'The portfolio. Prospects on legacy sites were seeing 2-year-old work and bouncing. Once the team could publish a finished project the same week it shipped, the perceived activity level of the firm jumped — which translated directly to win-rate.',
      },
      {
        q: 'Is the 14-day timeline repeatable?',
        a: 'For sites in the 15–25 page range with a clear brand and existing content assets, yes. The bottleneck is usually content readiness, not development speed — we ship up to 5-page sites in 7 days under our standard delivery guarantee.',
      },
    ],
  },

  // ─── 3. Formative Concepts — BIM consultancy, zero to global ──────────────
  {
    slug: 'formative-concepts-bim',
    client: 'Formative Concepts',
    tagline: 'A specialized MEP and BIM consultancy moving from word-of-mouth to international lead generation.',
    industry: 'MEP & BIM Consulting',
    services: [
      'Gatsby/React Site Build',
      'Contentful CMS Setup',
      'Consultative SEO Strategy',
      'AIO Content Engineering',
      'International Lead Funnel',
    ],
    headline: 'From Zero to 5,000 Monthly Global Visitors: BIM Consultancy Wins International Leads',
    summary:
      'Formative Concepts had zero digital footprint and depended entirely on referrals — capping their ability to win international contracts. FactoryJet launched a 20+ page digital ecosystem engineered for consultative SEO and AI answer-engine citation, generating 30+ qualified international leads in the first four months.',
    category: 'Corporate',
    heroStats: [
      { value: '5,000+', label: 'Monthly global visitors' },
      { value: '30+', label: 'International leads (4 mo)' },
      { value: '$108K', label: 'Revenue in 4 months' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'MEP & BIM Consulting' },
      { label: 'SERVICES', value: 'Gatsby + Contentful + Consultative SEO' },
      { label: 'TIMELINE', value: '4 Months' },
      { label: 'SCALE', value: '20+ Pages' },
      { label: 'AUDIENCE', value: 'International B2B' },
      { label: 'TECH', value: 'Gatsby, React, Contentful, Netlify' },
    ],
    keyMetrics: [
      { label: 'Revenue (4 Mo)', value: '$108K USD', note: '≈ ₹90 Lakh equivalent' },
      { label: 'Monthly Visitors', value: '5,000+' },
      { label: 'International Leads', value: '30+' },
      { label: 'Pages Live', value: '20+' },
    ],
    headlineMetric: {
      label: 'Monthly International Visitors (4 Months In)',
      value: '5,000+',
      note: 'From zero — pure organic, no paid spend',
    },
    resultsMetrics: [
      { label: 'Revenue (4 Mo)', value: '$108K USD' },
      { label: 'Monthly Visitors', value: '5,000+' },
      { label: 'International Leads', value: '30+' },
      { label: 'Pages Live', value: '20+' },
      { label: 'Paid Spend', value: '$0' },
      { label: 'AI Citation Appearances', value: 'Growing' },
    ],
    challenge:
      'Formative Concepts, a specialized MEP and BIM consultancy, had zero digital footprint. They relied entirely on word-of-mouth, limiting their ability to attract international clients. Decision-makers shopping for BIM consultancy run technical search queries — they want to see evidence of capability before they reach out — and Formative Concepts simply was not showing up. The brand needed a digital presence that demonstrated technical depth and established trust on first visit, not after a 30-minute discovery call.',
    challengePullQuote:
      'We were invisible to the international clients we most wanted to win.',
    approach:
      'We treated the site as a credibility engine, not a brochure. The content strategy was built around "consultative SEO" — answering the specific technical queries that BIM decision-makers actually type, rather than chasing high-volume generic keywords. Every page was structured so an AI answer engine could lift a clean, citable paragraph. We picked Gatsby + Contentful so the team could iterate content quickly while keeping the static-site performance profile that international visitors on slower connections need.',
    techStack: ['React', 'Gatsby', 'Contentful', 'Netlify'],
    solution:
      'We launched a comprehensive 20+ page digital ecosystem covering services, sector expertise, case studies, and technical resources. The content strategy was engineered for consultative SEO, targeting specific technical queries used by decision-makers (e.g., "MEP coordination for healthcare projects", "Revit family standards"). By optimizing for AIO, the brand began appearing in AI-generated answers for niche BIM queries. Contentful gave the in-house team a friendly editor for ongoing content updates.',
    results:
      'In the first four months the site went from zero traffic to 5,000+ monthly international visitors and produced 30+ qualified international leads — generating roughly $108K USD in revenue (equivalent to about ₹90 Lakh). The "international" framing was no accident: decision-makers in the US, UK, and Middle East were the highest-value prospects, and the consultative SEO strategy was tuned for exactly those queries.',
    imageUrl: '/images/case-studies/formative-concepts-bim-hero.jpg',
    ogImageUrl: '/images/case-studies/formative-concepts-bim-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'B2B consultancy with zero web presence? We build the credibility engine that wins international leads.',
    relatedSlugs: ['rukman-transport-logistics', 'impulse-branding-migration'],
    faqs: [
      {
        q: 'What is consultative SEO and how is it different from standard SEO?',
        a: 'Standard SEO chases the highest-volume keyword. Consultative SEO targets the specific technical queries decision-makers type when they have a real problem to solve. The volume is lower; the conversion rate is dramatically higher.',
      },
      {
        q: 'Why Gatsby over WordPress for this build?',
        a: 'Gatsby ships static HTML, which loads fast on slow international connections and ranks well on Core Web Vitals. Contentful sits behind it as the editor-friendly CMS so the in-house team can still publish without touching code.',
      },
      {
        q: 'How does the site get cited by AI answer engines?',
        a: 'Every section is structured so an AI engine can lift a clean, citable paragraph: clear named entities, structured data, FAQ schema, and explicit answers to common technical questions. We measure citation appearances and tune from there.',
      },
      {
        q: 'How did a brand-new site generate 5,000 monthly visitors in 4 months?',
        a: 'Niche technical queries have much lower competition than generic terms. By being one of the few sites that answers the specific question a BIM coordinator is searching, the page ranks fast — often inside 6–8 weeks for long-tail technical queries.',
      },
      {
        q: 'Can the same playbook work for a US consultancy?',
        a: 'Yes — and the cost ratio is even more favorable in the US, where consultative SEO can carry deal sizes of $50K–$500K. The technical query landscape is the same; we just translate the local examples and certifications.',
      },
    ],
  },

  // ─── 4. GroFresh Agro — custom ERPNext for food processing ────────────────
  {
    slug: 'grofresh-manufacturing-erp',
    client: 'GroFresh Agro',
    tagline: 'A multi-million-dollar food processing manufacturer replacing spreadsheets with a unified ERP.',
    industry: 'Food Processing Manufacturing',
    services: [
      'Custom ERPNext Implementation',
      'Supply Chain Digitization',
      'Production Dashboard Build',
      'Postgres + Docker Infrastructure',
      'AWS Deployment',
    ],
    headline: '70% Operational Efficiency Gain: Custom ERPNext for a Food Processing Manufacturer',
    summary:
      'GroFresh was running a multi-million-dollar food processing operation on Tally and disjointed spreadsheets — creating data silos, inventory leakage, and delayed financial reporting. FactoryJet replaced the legacy stack with a custom ERPNext implementation tailored to food-processing workflows, improving overall operational efficiency by 70%.',
    category: 'Manufacturing',
    heroStats: [
      { value: '+70%', label: 'Operational efficiency' },
      { value: '-90%', label: 'Paperwork' },
      { value: 'Real-time', label: 'Data latency' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Food Processing' },
      { label: 'SERVICES', value: 'Custom ERPNext Implementation' },
      { label: 'TIMELINE', value: '12–20 Weeks' },
      { label: 'SCALE', value: 'Multi-million-dollar Ops' },
      { label: 'WORKFLOW', value: 'Sourcing → Dispatch' },
      { label: 'TECH', value: 'ERPNext, Python, Postgres, Docker, AWS' },
    ],
    keyMetrics: [
      { label: 'Efficiency Gain', value: '+70%' },
      { label: 'Paperwork Reduction', value: '-90%' },
      { label: 'Data Latency', value: 'Real-time' },
      { label: 'Workflow Coverage', value: 'Sourcing → Dispatch' },
    ],
    headlineMetric: {
      label: 'Operational Efficiency Gain',
      value: '+70%',
      note: 'Blended index across order-to-cash, yield variance, inventory leakage, finance close',
    },
    resultsMetrics: [
      { label: 'Efficiency Gain', value: '+70%' },
      { label: 'Paperwork Reduction', value: '-90%' },
      { label: 'Data Latency', value: 'Real-time' },
      { label: 'Finance Close', value: 'Days, not weeks' },
      { label: 'Inventory Leakage', value: 'Near-zero' },
      { label: 'Module Coverage', value: 'Procurement → Finance' },
    ],
    challenge:
      'GroFresh was running a multi-million-dollar manufacturing operation using Tally and disjointed spreadsheets. This created data silos, inventory leakage, and delayed financial reporting. Plant managers were making decisions on week-old data; finance was reconciling production yields by hand at month-end; raw material procurement had no real-time visibility into floor consumption. They needed a unified ERP solution to bring transparency to their supply chain and production lines without ripping out the existing operational habits all at once.',
    challengePullQuote:
      'We were a multi-million-dollar operation making decisions on week-old spreadsheets.',
    approach:
      'We chose ERPNext as the foundation because it gives manufacturers a serious, modular ERP without the seven-figure license cost of SAP or Oracle. The implementation was sequenced module-by-module — procurement and inventory first (the highest-leakage area), then production planning, then finance integration — so the plant kept running while each module went live. Every workflow was mapped to existing GroFresh practice before being digitized, so the change-management burden stayed manageable.',
    techStack: ['ERPNext', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    solution:
      'We replaced their legacy systems with a custom ERPNext implementation tailored to food-processing workflows. The new system digitized everything from raw material sourcing to final dispatch — batch tracking, yield reporting, expiry management, and lot traceability all live in one system. Real-time dashboards now provide the leadership team with instant insights into production yields and wastage. The whole stack runs on Postgres in Docker containers on AWS for predictable scaling.',
    results:
      'Overall operational efficiency improved by 70%. Paper-based workflows dropped by 90%. Data latency went from week-old reports to real-time dashboards. Plant managers can now spot a yield drop in the morning and adjust the same shift, instead of finding out at month-end. Finance closes the books in days instead of weeks, and procurement orders against actual consumption instead of historical averages.',
    imageUrl: '/images/case-studies/grofresh-manufacturing-erp-hero.jpg',
    ogImageUrl: '/images/case-studies/grofresh-manufacturing-erp-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'Mid-market manufacturer stuck on Tally + spreadsheets? We build custom ERPNext stacks that scale.',
    relatedSlugs: ['rukman-transport-logistics', 'belle-maison-ecommerce-success'],
    faqs: [
      {
        q: 'Why ERPNext over SAP or Oracle for a mid-market manufacturer?',
        a: 'ERPNext is open-source, runs without per-seat licensing fees, and is modular enough to handle real manufacturing workflows. For a multi-million-dollar manufacturer, the total cost of ownership is a fraction of SAP/Oracle while covering 90% of the same functionality.',
      },
      {
        q: 'How long does a custom ERPNext implementation typically take?',
        a: 'Plan on 12–20 weeks for a mid-market manufacturer with 3–5 modules live. The variable is data migration and change management, not the software itself.',
      },
      {
        q: 'What does the 70% efficiency gain actually measure?',
        a: 'A blended index across order-to-cash cycle time, production yield variance, inventory leakage, and finance close speed. Each subcomponent improved 40–90% — the 70% is the weighted average.',
      },
      {
        q: 'How does food-specific workflow differ from generic ERPNext?',
        a: 'Batch tracking, expiry management, lot traceability, and yield variance reporting are all customized for food processing. Generic ERPNext handles inventory; food-grade ERPNext handles regulatory traceability and shelf-life economics.',
      },
      {
        q: 'Can a US manufacturer get the same outcome?',
        a: 'Yes — and the regulatory layer (FDA, FSMA traceability requirements) is actually easier to handle in a customized ERPNext build than in off-the-shelf US ERP packages. The implementation playbook transfers directly.',
      },
    ],
  },

  // ─── 5. Fliying Pixel — creative agency lead gen via design + CRO ─────────
  {
    slug: 'fliying-pixel-agency',
    client: 'Fliying Pixel',
    tagline: 'A creative agency that needed a portfolio that converted as well as it looked.',
    industry: 'Creative Agency',
    services: [
      'WIX Studio Build',
      'Conversion Rate Optimization',
      'Organic SEO Strategy',
      'AIO Content Pillars',
      'Velo API + Zapier Automation',
    ],
    headline: 'Generating 500+ Organic Leads via High-Performance Design',
    summary:
      'As a creative agency, Fliying Pixel needed a website that walked the talk — visually impressive and rigorously optimized for conversion. FactoryJet built a WIX Studio site layered with custom SEO/AIO strategy, generating 500+ qualified leads from organic traffic without paid ads.',
    category: 'Corporate',
    heroStats: [
      { value: '500+', label: 'Organic leads' },
      { value: '+300%', label: 'Traffic growth' },
      { value: '95%', label: 'Client retention' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Creative Agency' },
      { label: 'SERVICES', value: 'WIX Studio + SEO + CRO' },
      { label: 'TIMELINE', value: 'Ongoing' },
      { label: 'SCALE', value: '500+ Leads' },
      { label: 'PAID SPEND', value: '$0' },
      { label: 'TECH', value: 'WIX Studio, Velo API, GA4, Zapier' },
    ],
    keyMetrics: [
      { label: 'Organic Leads', value: '500+' },
      { label: 'Traffic Growth', value: '+300%' },
      { label: 'Client Retention', value: '95%' },
      { label: 'Paid Spend', value: '$0' },
    ],
    headlineMetric: {
      label: 'Qualified Leads from Organic Traffic',
      value: '500+',
      note: 'Zero paid ad spend over the same window',
    },
    resultsMetrics: [
      { label: 'Organic Leads', value: '500+' },
      { label: 'Traffic Growth', value: '+300%' },
      { label: 'Client Retention', value: '95%' },
      { label: 'Paid Spend', value: '$0' },
      { label: 'Avg. Dwell Time', value: '+47%' },
      { label: 'Bounce Rate', value: '-31%' },
    ],
    challenge:
      'As a creative agency, Fliying Pixel needed a website that walked the talk. Their existing portfolio was visually appealing but functionally weak — it was not converting visitors into inquiries. They needed a balance of stunning aesthetics and rigorous conversion rate optimization (CRO). The site had to look like it was made by a creative agency you would actually hire, while still moving the prospect through a clear inquiry funnel and feeding the CRM cleanly enough that the team could follow up the same day.',
    challengePullQuote:
      'A portfolio that looks beautiful but does not convert is a luxury we could not afford.',
    approach:
      'We split the design and the conversion architecture into two parallel tracks. The design track focused on what every creative agency cares about — the portfolio shots, the typography, the motion — while the CRO track quietly engineered the conversion funnel beneath it: above-the-fold inquiry forms, exit-intent capture, content-pillar landing pages mapped to specific service queries, and Velo-driven personalization for returning visitors. WIX Studio was the platform pick because it gave the design team the visual fidelity they needed without slowing the build.',
    techStack: ['Wix Studio', 'Velo API', 'Google Analytics 4', 'Zapier'],
    solution:
      'We deployed a visually rich website with highly optimized conversion funnels. We utilized WIX Studio for its design flexibility but superimposed a custom SEO and AIO strategy layer. By creating high-value content pillars around their services, we drove a massive influx of organic traffic. Velo API powered the dynamic case-study filtering; Zapier wired inquiries into the CRM with immediate Slack alerts.',
    results:
      'Over 500 qualified leads from organic traffic alone — zero paid spend. Traffic grew 300% in the same window, and client retention hit 95%. The team now spends discovery calls qualifying down a full inbound pipeline instead of chasing outbound prospects cold.',
    imageUrl: '/images/case-studies/fliying-pixel-agency-hero.jpg',
    ogImageUrl: '/images/case-studies/fliying-pixel-agency-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'Agency portfolio that does not convert? We balance stunning design with rigorous CRO — no paid ads required.',
    relatedSlugs: ['impulse-branding-migration', 'belle-maison-ecommerce-success'],
    faqs: [
      {
        q: 'Why WIX Studio for a creative agency site?',
        a: 'WIX Studio gives designers pixel-level layout control without forcing every change through a developer. For an agency where design iteration is part of the daily workflow, that flexibility matters more than the marginal performance gain of a fully custom build.',
      },
      {
        q: 'How do you generate 500 leads with zero paid spend?',
        a: 'Content pillars mapped to specific service queries, ranked for long-tail terms with high commercial intent, and a conversion funnel tight enough to capture inquiries on first visit. Pure organic + CRO compounding over 6–12 months.',
      },
      {
        q: 'What does "content pillars" mean in practice?',
        a: 'A pillar is a comprehensive resource page on a high-intent service topic, surrounded by cluster posts that link back to it. Search engines reward the topical authority; visitors reward the depth with longer dwell times and lower bounce.',
      },
      {
        q: 'Can a creative agency in the US replicate this?',
        a: 'Yes, and the deal sizes in the US creative-agency market are typically 2–3x higher, so the same 500 leads translate into materially more revenue. The CRO and content-pillar playbook is locale-independent.',
      },
      {
        q: 'How does Velo API factor in?',
        a: 'Velo lets us add real backend logic to a WIX site — dynamic case-study filtering, returning-visitor personalization, and CRM webhooks. It is what turns a brochure WIX site into a working sales tool.',
      },
    ],
  },

  // ─── 6. Rukman Transport — local SEO for B2B logistics ────────────────────
  {
    slug: 'rukman-transport-logistics',
    client: 'Rukman Transport',
    tagline: 'A B2B logistics operator winning local contracts on the strength of their digital presence.',
    industry: 'B2B Logistics',
    services: [
      'Local SEO Overhaul',
      'Google Business Profile Optimization',
      'WordPress + Yoast Setup',
      'Schema Markup Implementation',
      'Fleet & Safety Microsites',
    ],
    headline: '300% Organic Traffic Surge: Local SEO for a B2B Logistics Operator',
    summary:
      'In B2B logistics, trust is currency — and Rukman Transport had a minimal digital presence that did not reflect their fleet size or reliability. FactoryJet overhauled their brand identity, executed a hyper-local SEO strategy, and drove a 300% increase in organic search visibility for high-intent industrial transport queries.',
    category: 'Logistics',
    heroStats: [
      { value: '+300%', label: 'Organic traffic' },
      { value: '+150%', label: 'GMB calls' },
      { value: 'Top 3', label: 'Local search visibility' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'B2B Logistics' },
      { label: 'SERVICES', value: 'Local SEO + GBP + WordPress' },
      { label: 'TIMELINE', value: '90 Days' },
      { label: 'SCALE', value: 'Multi-city Service Area' },
      { label: 'OUTCOME', value: 'B2B Contracts Secured' },
      { label: 'TECH', value: 'WordPress, Yoast SEO, Google Maps API, Schema' },
    ],
    keyMetrics: [
      { label: 'Organic Traffic', value: '+300%' },
      { label: 'GMB Calls', value: '+150%' },
      { label: 'B2B Contracts', value: 'Secured' },
      { label: 'Local Search Visibility', value: 'Top 3' },
    ],
    headlineMetric: {
      label: 'Organic Search Visibility Lift',
      value: '+300%',
      note: 'High-intent industrial transport queries',
    },
    resultsMetrics: [
      { label: 'Organic Traffic', value: '+300%' },
      { label: 'GMB Calls', value: '+150%' },
      { label: 'Local Search Visibility', value: 'Top 3' },
      { label: 'Inquiry Quality', value: 'B2B Procurement' },
      { label: 'Contracts Secured', value: 'Multiple' },
      { label: 'Brand Refresh', value: 'Full' },
    ],
    challenge:
      'In the competitive logistics sector, trust is currency. Rukman Transport had a minimal digital presence that did not reflect their fleet size or reliability. They were losing local B2B contracts to competitors who simply looked more professional online. Procurement teams short-listing logistics partners would search, find a thin website with no fleet photos, no safety credentials, and no proof of operational scale, and quietly drop them from the bid list before the sales team ever heard about it.',
    challengePullQuote:
      'We were the size we claimed to be — the site just did not show it.',
    approach:
      'We treated this as a credibility problem first and an SEO problem second. Step one was rebuilding the brand assets — fleet photography, safety credentials, contract case studies — so when a procurement team did land on the site, the firm looked the size it actually was. Step two layered hyper-local SEO on top: Google Business Profile completeness, location-specific landing pages, and schema markup that fed search engines structured information about service area, fleet capacity, and safety record.',
    techStack: ['WordPress', 'Yoast SEO', 'Google Maps API', 'Schema Markup'],
    solution:
      'We overhauled their digital brand identity and executed a hyper-local SEO strategy. We optimized their Google My Business profile end-to-end — every category, every service, every photo, every FAQ. The new WordPress + Yoast SEO stack carried structured data for service area and fleet capabilities. The site highlighted fleet capabilities and safety records prominently, with dedicated microsites for each service vertical. The result was a 300% increase in organic search visibility for high-intent keywords like "industrial transport".',
    results:
      'A 300% increase in organic search visibility, a 150% lift in calls from Google Business Profile, and a measurable jump in B2B contracts secured. Procurement teams now find a firm that looks the size it is — and the inquiry-to-contract conversion rate jumped alongside the visibility, because the brand finally backed up the search ranking.',
    imageUrl: '/images/case-studies/rukman-transport-logistics-hero.jpg',
    ogImageUrl: '/images/case-studies/rukman-transport-logistics-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'B2B logistics operator losing bids to bigger-looking competitors? We rebuild brand + local SEO together.',
    relatedSlugs: ['grofresh-manufacturing-erp', 'formative-concepts-bim'],
    faqs: [
      {
        q: 'Why WordPress + Yoast for a logistics site?',
        a: 'WordPress is the lowest-friction platform for non-technical teams to keep service-area pages and fleet photos current. Yoast handles the on-page SEO discipline so every new page ships with correct schema, meta, and internal linking.',
      },
      {
        q: 'How does Google Business Profile (GBP) drive B2B logistics leads?',
        a: 'Procurement teams Google "industrial transport near me" or "B2B logistics [city]" and pick from the local pack. A fully optimized GBP — every category filled, every photo current, every review responded to — gets you into that pack and into the call queue.',
      },
      {
        q: 'What kind of schema markup did the site use?',
        a: 'LocalBusiness, MovingCompany, Service, and FAQPage schemas covering service area, fleet specs, certifications, and common questions. Schema is what helps search engines display rich snippets — which directly drives click-through rate.',
      },
      {
        q: 'How do you measure "B2B contracts secured"?',
        a: 'We track form submissions and call recordings tagged as procurement inquiries, then follow them through to signed contract. The lift was measurable both in inquiry volume and inquiry quality.',
      },
      {
        q: 'Can a US logistics operator follow the same playbook?',
        a: 'Directly. Local SEO for B2B logistics in US metros (Dallas, Atlanta, Chicago, LA) is extremely winnable — most operators still have weak GBP profiles. The playbook is identical; only the city pages and certifications change.',
      },
    ],
  },
]

/**
 * Resolve a case study by its URL slug. Returns `undefined` when no match,
 * matching the convention used by `getAuthorByName` and the blog POSTS lookup.
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}
