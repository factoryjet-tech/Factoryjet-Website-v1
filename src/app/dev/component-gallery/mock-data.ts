/**
 * Mock copy fixtures for the M1 component gallery.
 *
 * One typed export per treatment, plus three ALT exports for the
 * sections that have alternates (city_context, service_explanation,
 * why_factoryjet). City varies across treatments — London, Sheffield,
 * Manchester — so the gallery feels like multiple cities, not one.
 *
 * Source URLs use real public-info publishers (ONS, gov.uk,
 * Companies House) for plausibility. Pricing claims about named
 * London agencies are deliberately omitted — only structural
 * differentiators are stated, no specific price assertions.
 */
import type { HeroSectionProps } from '@/components/programmatic/HeroSection';
import type { CityContextStatStripProps } from '@/components/programmatic/CityContextStatStrip';
import type { CityContextProseInlineProps } from '@/components/programmatic/CityContextProseInline';
import type { ServiceEditorialPullquoteProps } from '@/components/programmatic/ServiceEditorialPullquote';
import type { ServiceStepsHorizontalProps } from '@/components/programmatic/ServiceStepsHorizontal';
import type { WhyComparisonMatrixProps } from '@/components/programmatic/WhyComparisonMatrix';
import type { WhyCompactAdvantageListProps } from '@/components/programmatic/WhyCompactAdvantageList';
import type { ProcessVerticalTimelineProps } from '@/components/programmatic/ProcessVerticalTimeline';
import type { IndustriesGridIllustratedProps } from '@/components/programmatic/IndustriesGridIllustrated';
import type { PricingThreeTierProps } from '@/components/programmatic/PricingThreeTier';
import type { FAQEditorialColumnProps } from '@/components/programmatic/FAQEditorialColumn';
import type { FinalCTAAnchorProps } from '@/components/programmatic/FinalCTAAnchor';

/* ========================================================================
 * 1. asymmetric_split_with_mockup → <HeroSection>   (London)
 * ====================================================================== */

export const mockHero: HeroSectionProps = {
  eyebrow: 'WEB DESIGN · LONDON',
  headline: 'Web design that wins London business.',
  lead: "London businesses compete in one of the world's most demanding markets. A slow, generic website costs you clients before you even get a conversation. FactoryJet builds fast, conversion-focused websites in 31 days — with transparent pricing, a codebase you own, and SEO baked in from day one.",
  trustItems: ['31-day delivery', 'From £1,200', 'You own the code'],
  primaryCta: {
    label: 'Get a Free Quote',
    href: 'https://factoryjet.com/contact',
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: 'https://wa.me/919699977699',
  },
  serviceVariant: 'web-design',
  city: 'London',
};

/* ========================================================================
 * 2. stat_strip_3up_with_lead → <CityContextStatStrip>   (London)
 * ====================================================================== */

export const mockCityContextStatStrip: CityContextStatStripProps = {
  eyebrow: 'LONDON IN NUMBERS',
  headline: 'A market that rewards a serious digital presence.',
  leadParagraph:
    "London is the UK's commercial centre — a concentrated market of nine million people and roughly a third of national output. Search visibility and conversion design earn back their cost in weeks, not quarters.",
  stats: [
    {
      value: '9.0M',
      label: 'London population (mid-2022 estimate)',
      sourceUrl:
        'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates',
      sourceLabel: 'ons.gov.uk',
    },
    {
      value: '£526bn',
      label: 'London GVA (2022, current prices)',
      sourceUrl:
        'https://www.ons.gov.uk/economy/grossvalueaddedgva/bulletins/regionalgrossvalueaddedbalanceduk/2022',
      sourceLabel: 'ons.gov.uk',
    },
    {
      value: '1.1M',
      label: 'Active businesses registered in London',
      sourceUrl:
        'https://www.gov.uk/government/organisations/companies-house',
      sourceLabel: 'companieshouse.gov.uk',
    },
  ],
};

/* ========================================================================
 * 3. prose_with_inline_stats → <CityContextProseInline>   (Sheffield, ALT)
 * ====================================================================== */

export const mockCityContextProseInline: CityContextProseInlineProps = {
  eyebrow: 'SHEFFIELD, IN CONTEXT',
  headline: "A city that's quietly become the UK's manufacturing-tech corridor.",
  paragraphs: [
    "Sheffield is no longer the city that featured in your school history textbooks. The Advanced Manufacturing Research Centre with Boeing brought serious industrial R&D to the south of the city, and the AMRC ecosystem has anchored a generation of engineering startups around it.",
    "The two universities — Sheffield and Sheffield Hallam — graduate around 13,000 students every year between them. A meaningful slice of that cohort stays. The city now has a real software and product-design talent pool, priced well below London or Manchester rates.",
    "What's missing is digital presentation. Many capable Sheffield firms still run websites that under-sell what they actually do. A clean, fast, well-architected site is one of the cheapest competitive moves available, and it's where we focus.",
    "We build for Sheffield clients the same way we build for London clients — same stack, same delivery cadence, same code ownership at handover. The only thing that differs is the local proof we cite in the copy.",
  ],
  inlineStats: [
    {
      value: '~13,000',
      whatItMeans: 'graduates per year across the two universities',
      sourceUrl: 'https://www.hesa.ac.uk/data-and-analysis/students',
    },
    {
      value: '£11.6bn',
      whatItMeans: 'Sheffield GVA (2022, current prices)',
      sourceUrl:
        'https://www.ons.gov.uk/economy/grossvalueaddedgva/bulletins/regionalgrossvalueaddedbalanceduk/2022',
    },
    {
      value: '500+',
      whatItMeans: 'industrial partners in the AMRC ecosystem',
      sourceUrl: 'https://www.amrc.co.uk/',
    },
  ],
};

/* ========================================================================
 * 4. editorial_prose_with_pullquote_and_diagram → <ServiceEditorialPullquote>
 *    (London)
 * ====================================================================== */

export const mockServiceEditorial: ServiceEditorialPullquoteProps = {
  eyebrow: 'WHAT YOU GET',
  headline: 'A fast website, plus the system that keeps it fast.',
  sidebarCta: {
    label: 'See pricing',
    href: '#pricing',
  },
  introParagraph:
    "A web design project should produce two things: a site that converts the people who land on it, and a codebase your team can keep maintaining without us. Most agency engagements deliver the first and quietly fail at the second. We optimise for both — because the second is where a website earns its keep over years, not weeks.",
  pullquoteText:
    "We don't hand you a black box. We hand you Next.js, Tailwind, and a CMS your team can actually edit.",
  bodyParagraphs: [
    "Every site ships on a modern, statically-generated stack. Static export means no server to keep warm, no surprise hosting bills, and Lighthouse scores in the high nineties without us tuning anything exotic. Cloudflare Pages takes care of edge delivery and rollback. Your team needs neither devops experience nor a renewal contract.",
    "We instrument analytics, schema markup, and AI-search visibility from day one. The site is built to be discoverable not just by Google, but by Claude, Perplexity, and ChatGPT — increasingly the way decision-makers find vendors. That's not a separate add-on. It's the same build.",
  ],
  diagramNodes: [
    { label: 'Discovery', description: 'Brief + audit' },
    { label: 'Design', description: 'Figma + tokens' },
    { label: 'Build', description: 'Next.js + Tailwind' },
    { label: 'Launch', description: 'Cloudflare Pages' },
    { label: 'Iterate', description: 'CMS + analytics' },
  ],
};

/* ========================================================================
 * 5. service_steps_horizontal → <ServiceStepsHorizontal>   (Manchester, ALT)
 * ====================================================================== */

export const mockServiceStepsHorizontal: ServiceStepsHorizontalProps = {
  eyebrow: 'HOW IT WORKS',
  headline: 'Four steps from kickoff to live in Manchester.',
  lead: "We've stripped the agency engagement down to the steps that matter. No padded discovery phases, no committee design reviews, no surprise change-orders. Each step has a fixed deliverable, a named owner on our side, and a clear handover criterion.",
  steps: [
    {
      title: 'Discovery',
      description:
        'A 90-minute kickoff call to lock scope, audience, and proof points. You leave with a one-page brief and a fixed price.',
      lucideIconName: 'Search',
    },
    {
      title: 'Design',
      description:
        'Figma comps for the homepage and one inner page within seven days. Two rounds of revision included; most clients use one.',
      lucideIconName: 'PenTool',
    },
    {
      title: 'Build',
      description:
        'Next.js + Tailwind on Cloudflare Pages. Staging URL within ten days of design sign-off. Your CMS account ready to use.',
      lucideIconName: 'Hammer',
    },
    {
      title: 'Launch',
      description:
        'DNS cutover with you on the call. We monitor for 72 hours post-launch and hand over the keys with documentation your team can read.',
      lucideIconName: 'Rocket',
    },
  ],
};

/* ========================================================================
 * 6. comparison_matrix_with_advantage_tiles → <WhyComparisonMatrix>
 *    (London)
 * ====================================================================== */

export const mockWhyComparisonMatrix: WhyComparisonMatrixProps = {
  eyebrow: 'WHY FACTORYJET',
  headline: 'How we compare to the typical London digital agency.',
  lead: "Pricing varies enormously across London digital agencies, and most won't publish numbers. Here's how our delivery model differs structurally — independent of headline price.",
  // competitorColumnHeaders intentionally omitted — component default
  // is the generic "Local London agency". We never name real competitors
  // in published copy.
  comparisonRows: [
    {
      agencyName: 'Pricing transparency',
      theirOffering: 'Quote-on-request after a discovery call',
      ourOffering: 'Public price band published per service',
      ourAdvantage: 'No surprise',
    },
    {
      agencyName: 'Turnaround',
      theirOffering: '8–14 weeks typical',
      ourOffering: '31 days kickoff to launch',
      ourAdvantage: '~3× faster',
    },
    {
      agencyName: 'Tech stack',
      theirOffering: 'WordPress / bespoke CMS, often legacy',
      ourOffering: 'Next.js + Tailwind on Cloudflare Pages',
      ourAdvantage: '',
    },
    {
      agencyName: 'Code ownership',
      theirOffering: 'Hosted, locked into agency renewal',
      ourOffering: 'You own the GitHub repo at handover',
      ourAdvantage: 'No lock-in',
    },
    {
      agencyName: 'AI search visibility',
      theirOffering: 'Rarely scoped',
      ourOffering: 'Schema + crawler-friendly markup from day one',
      ourAdvantage: '',
    },
  ],
  advantageTiles: [
    {
      title: 'Fixed price, fixed scope',
      body: 'Every quote is a flat number. We absorb scope creep we cause; you absorb scope creep you cause. Both kinds get named on the call before they happen.',
      lucideIconName: 'Wallet',
    },
    {
      title: 'Production stack out of the box',
      body: "Next.js, Tailwind, Cloudflare Pages, GitHub. The same stack that runs Vercel, Stripe, and most of the modern web. No idiosyncratic CMS to learn, no agency-specific tooling.",
      lucideIconName: 'Code2',
    },
    {
      title: 'Delivery in days, not quarters',
      body: 'A typical engagement is 31 days kickoff to live. We can compress to 14 days for simpler scopes. Our calendar makes that possible because we run small concurrent engagements, not big ones.',
      lucideIconName: 'Zap',
    },
  ],
};

/* ========================================================================
 * 7. compact_advantage_list → <WhyCompactAdvantageList>   (Sheffield, ALT)
 * ====================================================================== */

export const mockWhyCompactAdvantageList: WhyCompactAdvantageListProps = {
  eyebrow: 'WHY FACTORYJET',
  headline: "Five things Sheffield clients tell us they didn't get elsewhere.",
  lead: "We mostly hear the same five things from Sheffield clients on the kickoff call. None of them is exotic. All of them are the kind of operational hygiene that's easy to skip if you're optimising for billable hours rather than client outcomes.",
  advantages: [
    {
      title: 'A price before the discovery call ends',
      body: 'You leave the first call with a number, a delivery date, and a written one-pager. No "we\'ll send a proposal next week" routine.',
    },
    {
      title: 'A staging URL within ten days',
      body: "Most agencies wait until the build is mostly done before showing you anything live. We ship a staging environment early and update it daily so you see progress, not slides.",
    },
    {
      title: 'A codebase your team can read',
      body: 'Standard Next.js, standard Tailwind, no bespoke abstractions. A junior developer can ship an edit on day one. We document the parts that aren\'t obvious.',
    },
    {
      title: 'AI search baked in',
      body: 'Schema markup, crawler-friendly HTML, and an answer-engine-ready content structure. Your site shows up when somebody asks Claude for a Sheffield supplier — not just when they Google one.',
    },
    {
      title: 'A handover that ends the engagement',
      body: "We don't run on retainers. The build ends, the code is yours, and we step out of the way. If you want help later, you call us — but you're not obligated to.",
    },
  ],
};

/* ========================================================================
 * 8. vertical_timeline_5step → <ProcessVerticalTimeline>   (London)
 * ====================================================================== */

export const mockProcessVerticalTimeline: ProcessVerticalTimelineProps = {
  eyebrow: 'OUR PROCESS',
  headline: '31 days, five named stages, one fixed price.',
  lead: "We've run this same five-stage process across every London engagement we've delivered. It compresses to two weeks for simpler scopes and never stretches past five for the standard one. The day ranges below are the version we quote.",
  steps: [
    {
      numeral: '01',
      dayRange: 'DAY 1–3',
      title: 'Discovery & brief',
      body: 'Kickoff call, audit of any existing site, and a one-page written brief. You sign the brief; we lock scope and price.',
    },
    {
      numeral: '02',
      dayRange: 'DAY 4–10',
      title: 'Design',
      body: 'Figma comps for the homepage and one inner page. Two rounds of revision. Sign-off triggers build.',
    },
    {
      numeral: '03',
      dayRange: 'DAY 11–22',
      title: 'Build',
      body: 'Next.js + Tailwind on a staging URL you can visit daily. Content uploaded, CMS configured, integrations wired.',
    },
    {
      numeral: '04',
      dayRange: 'DAY 23–28',
      title: 'QA & content polish',
      body: 'Cross-browser testing, accessibility audit, performance budget enforcement, final copy edits with you.',
    },
    {
      numeral: '05',
      dayRange: 'DAY 29–31',
      title: 'Launch & handover',
      body: 'DNS cutover with you on the call, 72-hour post-launch monitoring, and a written handover including repo access.',
    },
  ],
};

/* ========================================================================
 * 9. industries_grid_3x2_illustrated → <IndustriesGridIllustrated>
 *    (London)
 * ====================================================================== */

export const mockIndustriesGridIllustrated: IndustriesGridIllustratedProps = {
  eyebrow: 'WHO WE BUILD FOR',
  headline: 'Six London sectors where a faster, sharper site moves the needle most.',
  lead: "We don't pretend to be sector specialists. We are stack specialists. But these six categories of London business consistently see the largest commercial uplift from a serious web rebuild — usually because their existing site is the slowest part of an otherwise excellent operation.",
  sectors: [
    {
      slug: 'financial-services',
      name: 'Financial services',
      description:
        'Wealth managers, advisory firms, and FCA-regulated practices in the City and Mayfair. Trust signals and compliance copy carry more weight than visual flourish. We build calm, considered sites that survive due-diligence scrutiny.',
      linkText: 'See financial-services work',
      linkHref: '/uk/london/financial-services',
      illustrationPath: '',
    },
    {
      slug: 'hospitality',
      name: 'Hospitality',
      description:
        "Restaurants, hotels, members' clubs, and venue groups. The booking funnel is the product, the menu is the proof, and image quality is non-negotiable. We optimise for fast image delivery, table-booking integrations, and mobile-first browsing.",
      linkText: 'See hospitality work',
      linkHref: '/uk/london/hospitality',
      illustrationPath: '',
    },
    {
      slug: 'property',
      name: 'Property',
      description:
        'Estate agents, developers, and prop-tech operators across Greater London. Listing-heavy data, location-led SEO, and serious lead-capture flows are the work. We integrate with the major property feeds and keep page weights low even at thousands of listings.',
      linkText: 'See property work',
      linkHref: '/uk/london/property',
      illustrationPath: '',
    },
    {
      slug: 'legal',
      name: 'Legal',
      description:
        'Solicitors, chambers, and specialist boutiques across the City, Lincoln’s Inn, and the West End. Buyers research extensively before contact, and a site that signals seniority and case strength shortens the engagement cycle. We focus on credibility design and case-study architecture.',
      linkText: 'See legal work',
      linkHref: '/uk/london/legal',
      illustrationPath: '',
    },
    {
      slug: 'healthcare',
      name: 'Healthcare',
      description:
        'Private clinics, specialist practices, and concierge medicine across Harley Street and beyond. Booking flows, GDPR-clean form handling, and clear service descriptions matter more than hero animation. We optimise for credibility and conversion.',
      linkText: 'See healthcare work',
      linkHref: '/uk/london/healthcare',
      illustrationPath: '',
    },
    {
      slug: 'creative',
      name: 'Creative',
      description:
        'Studios, production houses, and design agencies that need a site doing justice to the work they ship. Heavy media, strong typography, and editorial structure. We collaborate closely with in-house design teams who already know what they want.',
      linkText: 'See creative work',
      linkHref: '/uk/london/creative',
      illustrationPath: '',
    },
  ],
};

/* ========================================================================
 * 10. pricing_3tier_anchor → <PricingThreeTier>   (London)
 * ====================================================================== */

export const mockPricingThreeTier: PricingThreeTierProps = {
  eyebrow: 'PRICING',
  headline: 'One fixed number per tier. No retainers, no surprise add-ons.',
  lead: "Most London digital agencies won't publish their pricing. We do. The bands below cover most of what we deliver. If your project sits cleanly in one tier, that's the price. If it straddles two, we'll quote a number between the bands on the discovery call.",
  tiers: [
    {
      name: 'Starter',
      priceRange: '£1,200–£2,500',
      description:
        'A landing page or compact 5-page site for early-stage businesses and side projects.',
      features: [
        'Up to 5 unique pages',
        'Mobile-responsive Next.js build',
        'Cloudflare Pages hosting (12 months)',
        'Contact form + analytics setup',
        'One round of post-launch revision',
      ],
      cta: { label: 'Start with Starter', href: '/contact?tier=starter' },
      popular: false,
    },
    {
      name: 'Standard',
      priceRange: '£3,500–£6,500',
      description:
        'Our default engagement: a full marketing site with CMS, integrations, and SEO from day one.',
      features: [
        'Up to 12 unique pages',
        'Headless CMS (your team can edit)',
        'Schema + AI-search markup',
        'Two integrations (CRM, scheduler, etc.)',
        'Two design revision rounds',
        'GitHub repo handover at launch',
      ],
      cta: { label: 'Start with Standard', href: '/contact?tier=standard' },
      popular: true,
    },
    {
      name: 'Pro',
      priceRange: '£8,000–£15,000',
      description:
        'For firms that need an editorial publishing surface, multilingual, or custom integrations.',
      features: [
        '20+ pages or programmatic templates',
        'Editorial CMS workflow setup',
        'Multilingual or multi-region support',
        'Up to four integrations',
        'Three design revision rounds',
        '90 days of post-launch support',
      ],
      cta: { label: 'Talk to us about Pro', href: '/contact?tier=pro' },
      popular: false,
    },
  ],
};

/* ========================================================================
 * 11. faq_static_editorial → <FAQEditorialColumn>   (London)
 * ====================================================================== */

export const mockFAQEditorialColumn: FAQEditorialColumnProps = {
  eyebrow: 'COMMON QUESTIONS',
  headline: "What London clients ask before they sign.",
  lead: "These are the eight questions that come up most often on first calls. If yours isn't here, message us — we'll add it.",
  faqs: [
    {
      question: 'How is your pricing fixed if every project is different?',
      answer:
        "Every tier covers a defined scope. If your project fits within a tier, that's the price. If it straddles two tiers, we'll quote a single number between the bands on the discovery call before any commitment. No hourly billing, no surprise change orders for work we caused ourselves.",
    },
    {
      question: 'Will my site really launch in 31 days?',
      answer:
        "It depends on you, not us. The 31-day clock assumes you respond to design rounds within 48 hours and that content is ready when we ask for it. If those slip, the launch slips by the same amount. We'll always tell you what's needed and when, in writing.",
    },
    {
      question: 'What happens if I want changes after launch?',
      answer:
        "Small edits are easy because the codebase is yours and the CMS is configured for your team. For larger changes, you can hire us back on a fixed-scope basis or take it to any other developer — the stack is industry-standard Next.js, not a proprietary system.",
    },
    {
      question: 'Do you do SEO, or just the build?',
      answer:
        "Technical SEO — schema, performance, crawlability, AI-search markup — is included in every build. Content SEO and link-building are not; those are ongoing disciplines that we'd rather not pretend to be a fit for. We can recommend specialist partners.",
    },
    {
      question: 'What about hosting and ongoing costs?',
      answer:
        "We deploy on Cloudflare Pages, which is free for the traffic profiles of most clients we work with. Domains and any premium integrations (a CRM, scheduling tool, etc.) are billed directly to you by those providers — never marked up by us.",
    },
    {
      question: 'Can you work with our existing brand and assets?',
      answer:
        "Yes. We're happy to build inside an existing brand system if you have one, and we'll flag where the brand is fighting the conversion goals so you can decide what to do about it. If you don't have a brand system, we don't pretend to be brand strategists — we'll work with what you have or recommend a partner.",
    },
    {
      question: 'What does "you own the code" actually mean?',
      answer:
        'At handover, we transfer the GitHub repository to your organisation. You get admin rights. The deployment configuration is documented, the CMS credentials are in your name, and the domain is registered to you (or stays with whoever already holds it). There is no licence, no token, and no piece of infrastructure that belongs to us.',
    },
    {
      question: 'Do you offer a discount for non-profits or early-stage startups?',
      answer:
        'Sometimes. We have a small annual budget for pro-bono and reduced-rate work. Ask. Worst case, we say no.',
    },
  ],
};

/* ========================================================================
 * 12. anchor_cta_glass → <FinalCTAAnchor>   (London)
 * ====================================================================== */

export const mockFinalCTAAnchor: FinalCTAAnchorProps = {
  headline: 'Ready to start?',
  lead: "A 30-minute discovery call ends with a written brief and a fixed price. No commitment, no follow-up sequence. If we're not the right fit, we'll say so on the call.",
  primaryCta: {
    label: 'Book a discovery call',
    href: 'https://factoryjet.com/contact',
  },
  whatsappCta: {
    label: 'Or message on WhatsApp',
    href: 'https://wa.me/919699977699',
  },
};
