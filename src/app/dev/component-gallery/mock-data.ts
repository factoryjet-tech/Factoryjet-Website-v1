/**
 * Mock copy fixtures for the M1.5 component gallery v2.
 *
 * One typed export per v2 treatment, in canonical order. Mostly
 * London-centric copy. Two extra exports surface the "permission
 * gating" behavior of the testimonials component.
 *
 * Source URLs use real public-info publishers (ONS, gov.uk,
 * Companies House) for plausibility. No specific pricing claims
 * about named London agencies — only structural delivery-model
 * differentiators.
 */
import type { HeroSectionProps } from '@/components/programmatic/HeroSection';
import type { ProofStripLogosAndStatsProps } from '@/components/programmatic/ProofStripLogosAndStats';
import type { CityContextStatStripProps } from '@/components/programmatic/CityContextStatStrip';
import type { StakesVsRewardsSplitProps } from '@/components/programmatic/StakesVsRewardsSplit';
import type { ServiceWithDeliverableMockupProps } from '@/components/programmatic/ServiceEditorialPullquote';
import type { WhyComparisonMatrixV2Props } from '@/components/programmatic/WhyComparisonMatrix';
import type { ProcessVisualTimelineProps } from '@/components/programmatic/ProcessVisualTimeline';
import type { IndustriesGridV2Props } from '@/components/programmatic/IndustriesGridIllustrated';
import type { PricingThreeTierProps } from '@/components/programmatic/PricingThreeTier';
import type { TestimonialsNamedWithMetricsProps } from '@/components/programmatic/TestimonialsNamedWithMetrics';
import type { FAQEditorialColumnV2Props } from '@/components/programmatic/FAQEditorialColumn';
import type { FinalCTAAnchorV2Props } from '@/components/programmatic/FinalCTAAnchor';

/* ========================================================================
 * 1. asymmetric_split_with_mockup → <HeroSection>   (London)
 *    5 mockups across all five service variants.
 * ====================================================================== */

export const mockHero: HeroSectionProps = {
  eyebrow: 'WEB DESIGN · LONDON',
  headline: 'Web design that *wins* London business.',
  lead: "London businesses compete in one of the world's most demanding markets. A slow, generic website costs you clients before you even get a conversation. FactoryJet builds fast, conversion-focused websites in 31 days — with transparent pricing, a codebase you own, and SEO baked in from day one.",
  trustItems: ['31-day delivery', 'From £1,200', 'You own the code'],
  primaryCta: {
    label: 'Get a Free Quote',
    href: 'https://factoryjet.com/contact',
  },
  secondaryCta: {
    label: 'WhatsApp Us',
    href: 'https://wa.me/919103398557',
  },
  cityName: 'London',
  mockups: [
    {
      serviceVariant: 'web-design',
      businessName: 'Hartwell & Co.',
      businessTagline: 'Wealth management, considered.',
      url: 'hartwell-co.com',
      rotation: -1.5,
      mockSiteData: {
        subhead: 'Mayfair · Est. 1987',
        ctaLabel: 'Book an introduction',
        navItems: ['About', 'Services', 'Insights', 'Contact'],
        statStrip: [
          { value: '£840m', label: 'AUM' },
          { value: '38yrs', label: 'heritage' },
        ],
      },
    },
    {
      serviceVariant: 'ecommerce',
      businessName: 'Field Notes',
      businessTagline: 'Larder essentials, slow-made.',
      url: 'fieldnotes.shop',
      rotation: 1.5,
      mockSiteData: {
        subhead: 'New season',
        ctaLabel: 'Shop the range',
        navItems: ['Shop', 'Pantry', 'Recipes', 'Stockists'],
        statStrip: [{ value: '4.9★', label: 'reviews' }],
      },
    },
    {
      serviceVariant: 'ai-websites',
      businessName: 'Northway Legal',
      businessTagline: 'A faster route to counsel.',
      url: 'northway.legal',
      rotation: -1,
      mockSiteData: {
        subhead: 'AI-assisted intake · 24/7',
        ctaLabel: 'Start your enquiry',
        navItems: ['Services', 'Team', 'Insights'],
        statStrip: [{ value: '< 4hr', label: 'response' }],
      },
    },
    {
      serviceVariant: 'seo',
      businessName: 'Camden Dental',
      businessTagline: "Camden's quietest dentist.",
      url: 'camdendental.co.uk',
      rotation: 1,
      mockSiteData: {
        subhead: 'NW1 · Open Saturdays',
        ctaLabel: 'Book online',
        navItems: ['Treatments', 'Pricing', 'Team', 'Visit'],
        statStrip: [{ value: '4.8★', label: 'Google' }],
      },
    },
    {
      serviceVariant: 'ai-agents',
      businessName: 'Linden Lettings',
      businessTagline: 'Your agent never sleeps.',
      url: 'linden.london',
      rotation: -2,
      mockSiteData: {
        subhead: 'Greater London · 12 branches',
        ctaLabel: 'Chat to Linden',
        navItems: ['Buy', 'Rent', 'Sell', 'Manage'],
        statStrip: [{ value: '24/7', label: 'concierge' }],
      },
    },
  ],
};

/* ========================================================================
 * 2. proof_strip_logos_and_stats → <ProofStripLogosAndStats>   (London)
 *    8 placeholder logos all `pending` so logo row suppresses;
 *    4 real stats render.
 * ====================================================================== */

export const mockProofStrip: ProofStripLogosAndStatsProps = {
  eyebrow: 'TRUSTED BY LONDON FIRMS',
  headline: 'Production sites for businesses across the City and Greater London.',
  clientLogos: [
    { name: 'Client A', logoSvgPath: '/clients/client-a.svg', altText: 'Client A logo', displayPermission: 'pending' },
    { name: 'Client B', logoSvgPath: '/clients/client-b.svg', altText: 'Client B logo', displayPermission: 'pending' },
    { name: 'Client C', logoSvgPath: '/clients/client-c.svg', altText: 'Client C logo', displayPermission: 'pending' },
    { name: 'Client D', logoSvgPath: '/clients/client-d.svg', altText: 'Client D logo', displayPermission: 'pending' },
    { name: 'Client E', logoSvgPath: '/clients/client-e.svg', altText: 'Client E logo', displayPermission: 'pending' },
    { name: 'Client F', logoSvgPath: '/clients/client-f.svg', altText: 'Client F logo', displayPermission: 'pending' },
    { name: 'Client G', logoSvgPath: '/clients/client-g.svg', altText: 'Client G logo', displayPermission: 'pending' },
    { name: 'Client H', logoSvgPath: '/clients/client-h.svg', altText: 'Client H logo', displayPermission: 'pending' },
  ],
  stats: [
    { value: '31', label: 'days kickoff to launch', sourceLabel: 'avg' },
    { value: '£1.2k+', label: 'starting build price', sourceLabel: 'public' },
    { value: '95+', label: 'Lighthouse score', sourceLabel: 'every build' },
    { value: '0', label: 'long-term contracts', sourceLabel: 'ever' },
  ],
};

/* ========================================================================
 * 3. city_context_v2 → <CityContextStatStrip>   (London)
 *    Same 3-stat London treatment from M1.
 * ====================================================================== */

export const mockCityContext: CityContextStatStripProps = {
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
      sourceUrl: 'https://www.gov.uk/government/organisations/companies-house',
      sourceLabel: 'companieshouse.gov.uk',
    },
  ],
};

/* ========================================================================
 * 4. stakes_vs_rewards_split → <StakesVsRewardsSplit>
 * ====================================================================== */

export const mockStakesVsRewards: StakesVsRewardsSplitProps = {
  eyebrow: 'WHAT YOUR WEBSITE IS DOING RIGHT NOW',
  stakesHeadline: 'A slow, dated site quietly costs you.',
  stakes: [
    'Buyers leave before the first scroll.',
    'AI search engines skip your content.',
    'Each redesign starts from scratch — again.',
  ],
  rewardsHeadline: 'A modern site compounds in your favour.',
  rewards: [
    'Sub-second loads keep buyers reading.',
    'Schema + clean markup gets you cited.',
    'A real codebase that survives team change.',
  ],
};

/* ========================================================================
 * 5. service_with_deliverable_mockup → <ServiceEditorialPullquote>   (London)
 *    cms_dashboard variant.
 * ====================================================================== */

export const mockServiceDeliverable: ServiceWithDeliverableMockupProps = {
  eyebrow: 'WHAT YOU GET',
  headline: 'A fast website, plus the system that keeps it fast.',
  sidebarCta: { label: 'See pricing', href: '#pricing_3tier_v2' },
  introParagraphs: [
    "A web design project should produce two things: a site that converts the people who land on it, and a codebase your team can keep maintaining without us. Most agency engagements deliver the first and quietly fail at the second. We optimise for both — the second is where a website earns its keep over years, not weeks.",
    "Every site ships on a modern, statically-generated stack. Static export means no server to keep warm, no surprise hosting bills, and Lighthouse scores in the high nineties without us tuning anything exotic. Cloudflare Pages takes care of edge delivery and rollback. Your team needs neither devops experience nor a renewal contract.",
  ],
  pullquoteText:
    "We don't hand you a black box. We hand you Next.js, Tailwind, and a CMS your team can actually edit.",
  closingParagraph:
    "We instrument analytics, schema markup, and AI-search visibility from day one. The site is built to be discoverable not just by Google, but by Claude, Perplexity, and ChatGPT — increasingly the way decision-makers find vendors. That's not a separate add-on. It's the same build.",
  deliverableType: 'cms_dashboard',
  deliverableData: {
    siteName: 'Hartwell & Co.',
    navItems: ['Pages', 'Blog', 'Insights', 'Settings'],
    recentEdits: [
      { title: 'Wealth management — overview', status: 'Published', updatedAt: '2h ago' },
      { title: 'Family office FAQ', status: 'Draft', updatedAt: '1d ago' },
      { title: 'Spring 2026 outlook', status: 'Published', updatedAt: '3d ago' },
      { title: 'Contact page', status: 'Published', updatedAt: '1w ago' },
    ],
  },
};

/* ========================================================================
 * 6. why_comparison_matrix_v2 → <WhyComparisonMatrix>   (London)
 *    3 case study tiles with placeholder client names + 1 generic
 *    competitor column in the matrix.
 * ====================================================================== */

export const mockWhyComparison: WhyComparisonMatrixV2Props = {
  eyebrow: 'WHY FACTORYJET',
  headline: 'How we compare to the typical London digital agency.',
  lead: "Pricing varies enormously across London digital agencies, and most won't publish numbers. Here's how our delivery model differs structurally — independent of headline price.",
  // Three case study tiles. Logos use empty path so the component
  // falls back to text rendering of the client name. Real client logos
  // ship in M2 once Bhavesh has populated clients.json.
  caseStudyTiles: [
    {
      clientLogoPath: '',
      clientName: 'City advisory firm',
      industryTag: 'FINANCIAL SERVICES',
      outcomeStatement:
        'Rebuilt site lifted qualified intake-form submissions by 47% in Q1.',
      storyHref: '/work/city-advisory',
    },
    {
      clientLogoPath: '',
      clientName: 'Mayfair clinic',
      industryTag: 'HEALTHCARE',
      outcomeStatement:
        'Faster booking flow cut average enquiry-to-appointment time from 6 days to 2.',
      storyHref: '/work/mayfair-clinic',
    },
    {
      clientLogoPath: '',
      clientName: 'East London studio',
      industryTag: 'CREATIVE',
      outcomeStatement:
        'New site doubled inbound brief requests within 8 weeks of launch.',
      storyHref: '/work/east-london-studio',
    },
  ],
  // competitorColumnHeaders intentionally omitted — defaults to 'Local London agency'.
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
 * 7. process_v2_visual_timeline → <ProcessVisualTimeline>   (London)
 * ====================================================================== */

export const mockProcess: ProcessVisualTimelineProps = {
  eyebrow: 'OUR PROCESS',
  headline: '31 days, five named stages, one fixed price.',
  lead: "We've run this same five-stage process across every London engagement we've delivered. It compresses to two weeks for simpler scopes and never stretches past five for the standard one. The day ranges below are the version we quote.",
  steps: [
    {
      numeral: '01',
      dayRange: 'DAY 1–3',
      title: 'Discovery & brief',
      body: 'Kickoff call, audit of any existing site, and a one-page written brief. You sign the brief; we lock scope and price.',
      lucideIconName: 'Search',
    },
    {
      numeral: '02',
      dayRange: 'DAY 4–10',
      title: 'Design',
      body: 'Figma comps for the homepage and one inner page. Two rounds of revision. Sign-off triggers build.',
      lucideIconName: 'PenTool',
    },
    {
      numeral: '03',
      dayRange: 'DAY 11–22',
      title: 'Build',
      body: 'Next.js + Tailwind on a staging URL you can visit daily. Content uploaded, CMS configured, integrations wired.',
      lucideIconName: 'Hammer',
    },
    {
      numeral: '04',
      dayRange: 'DAY 23–28',
      title: 'QA & content polish',
      body: 'Cross-browser testing, accessibility audit, performance budget enforcement, final copy edits with you.',
      lucideIconName: 'Rocket',
    },
    {
      numeral: '05',
      dayRange: 'DAY 29–31',
      title: 'Launch & handover',
      body: 'DNS cutover with you on the call, 72-hour post-launch monitoring, and a written handover including repo access.',
      lucideIconName: 'RefreshCw',
    },
  ],
};

/* ========================================================================
 * 8. industries_v2_buyer_persona_grid → <IndustriesGridIllustrated>   (London)
 *    6 sectors with photoUrl: '' (placeholder mode — Pexels in M3).
 * ====================================================================== */

export const mockIndustries: IndustriesGridV2Props = {
  eyebrow: 'WHO WE BUILD FOR',
  headline: 'Six London sectors where a faster, sharper site moves the needle most.',
  lead: "We don't pretend to be sector specialists. We are stack specialists. But these six categories of London business consistently see the largest commercial uplift from a serious web rebuild — usually because their existing site is the slowest part of an otherwise excellent operation.",
  sectors: [
    {
      slug: 'financial-services',
      name: 'Financial services',
      description:
        'Wealth managers, advisory firms, and FCA-regulated practices in the City and Mayfair. Trust signals and compliance copy carry more weight than visual flourish. We build calm, considered sites that survive due-diligence scrutiny.',
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Financial services buyer persona — illustration pending',
      linkText: 'See financial-services work',
      linkHref: '/uk/london/financial-services',
    },
    {
      slug: 'hospitality',
      name: 'Hospitality',
      description:
        "Restaurants, hotels, members' clubs, and venue groups. The booking funnel is the product, the menu is the proof, and image quality is non-negotiable. We optimise for fast image delivery, table-booking integrations, and mobile-first browsing.",
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Hospitality buyer persona — illustration pending',
      linkText: 'See hospitality work',
      linkHref: '/uk/london/hospitality',
    },
    {
      slug: 'property',
      name: 'Property',
      description:
        'Estate agents, developers, and prop-tech operators across Greater London. Listing-heavy data, location-led SEO, and serious lead-capture flows are the work. We integrate with the major property feeds and keep page weights low even at thousands of listings.',
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Property buyer persona — illustration pending',
      linkText: 'See property work',
      linkHref: '/uk/london/property',
    },
    {
      slug: 'legal',
      name: 'Legal',
      description:
        'Solicitors, chambers, and specialist boutiques across the City, Lincoln’s Inn, and the West End. Buyers research extensively before contact, and a site that signals seniority and case strength shortens the engagement cycle. We focus on credibility design and case-study architecture.',
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Legal buyer persona — illustration pending',
      linkText: 'See legal work',
      linkHref: '/uk/london/legal',
    },
    {
      slug: 'healthcare',
      name: 'Healthcare',
      description:
        'Private clinics, specialist practices, and concierge medicine across Harley Street and beyond. Booking flows, GDPR-clean form handling, and clear service descriptions matter more than hero animation. We optimise for credibility and conversion.',
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Healthcare buyer persona — illustration pending',
      linkText: 'See healthcare work',
      linkHref: '/uk/london/healthcare',
    },
    {
      slug: 'creative',
      name: 'Creative',
      description:
        'Studios, production houses, and design agencies that need a site doing justice to the work they ship. Heavy media, strong typography, and editorial structure. We collaborate closely with in-house design teams who already know what they want.',
      photoUrl: '',
      photoCredit: '',
      photoAlt: 'Creative buyer persona — illustration pending',
      linkText: 'See creative work',
      linkHref: '/uk/london/creative',
    },
  ],
};

/* ========================================================================
 * 9. pricing_3tier_v2 → <PricingThreeTier>   (London)
 *    Same as M1.
 * ====================================================================== */

export const mockPricing: PricingThreeTierProps = {
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
 * 10. testimonials_v2_named_with_metrics → <TestimonialsNamedWithMetrics>
 *
 *    Two exports for visual review:
 *      mockTestimonials         — all `pending`, component renders nothing
 *      mockTestimonialsGranted  — all `granted`, component renders cards
 *    Gallery shows BOTH so the reviewer sees both states.
 * ====================================================================== */

const TESTIMONIAL_SHARED_HEADER = {
  eyebrow: 'CLIENT WORDS',
  headline: 'Quoted from London clients on what changed for them.',
} as const;

export const mockTestimonials: TestimonialsNamedWithMetricsProps = {
  ...TESTIMONIAL_SHARED_HEADER,
  testimonials: [
    {
      headshotPath: '',
      name: 'Anna Reeve',
      role: 'Managing Partner',
      company: 'City advisory firm',
      quote:
        "FactoryJet rebuilt our site in 28 days and intake-form submissions went up **47% in the first quarter**. We didn't have to learn a new CMS — our existing team kept publishing.",
      permissionStatus: 'pending',
    },
    {
      headshotPath: '',
      name: 'Dr. Owen Hartlee',
      role: 'Founder',
      company: 'Mayfair clinic',
      quote:
        'The booking flow they shipped cut our average enquiry-to-appointment time from **6 days to 2**. The whole project came in under £6k and ran for exactly 31 days.',
      permissionStatus: 'pending',
    },
    {
      headshotPath: '',
      name: 'Mira Patel',
      role: 'Studio Director',
      company: 'East London creative studio',
      quote:
        'Inbound brief requests **doubled within 8 weeks** of launch. The whole site is in our GitHub now — our internal dev can ship updates without us calling FactoryJet back.',
      permissionStatus: 'pending',
    },
  ],
};

export const mockTestimonialsGranted: TestimonialsNamedWithMetricsProps = {
  ...TESTIMONIAL_SHARED_HEADER,
  testimonials: mockTestimonials.testimonials.map((t) => ({
    ...t,
    permissionStatus: 'granted' as const,
  })),
};

/* ========================================================================
 * 11. faq_v2_static_editorial → <FAQEditorialColumn>   (London)
 *    Same Q-A pairs as M1 + anchor IDs.
 * ====================================================================== */

export const mockFAQ: FAQEditorialColumnV2Props = {
  eyebrow: 'COMMON QUESTIONS',
  headline: 'What London clients ask before they sign.',
  lead: "These are the eight questions that come up most often on first calls. If yours isn't here, message us — we'll add it.",
  faqs: [
    {
      anchorId: 'faq-pricing',
      question: 'How is your pricing fixed if every project is different?',
      answer:
        "Every tier covers a defined scope. If your project fits within a tier, that's the price. If it straddles two tiers, we'll quote a single number between the bands on the discovery call before any commitment. No hourly billing, no surprise change orders for work we caused ourselves.",
    },
    {
      anchorId: 'faq-timeline',
      question: 'Will my site really launch in 31 days?',
      answer:
        "It depends on you, not us. The 31-day clock assumes you respond to design rounds within 48 hours and that content is ready when we ask for it. If those slip, the launch slips by the same amount. We'll always tell you what's needed and when, in writing.",
    },
    {
      anchorId: 'faq-post-launch-changes',
      question: 'What happens if I want changes after launch?',
      answer:
        "Small edits are easy because the codebase is yours and the CMS is configured for your team. For larger changes, you can hire us back on a fixed-scope basis or take it to any other developer — the stack is industry-standard Next.js, not a proprietary system.",
    },
    {
      anchorId: 'faq-seo-scope',
      question: 'Do you do SEO, or just the build?',
      answer:
        "Technical SEO — schema, performance, crawlability, AI-search markup — is included in every build. Content SEO and link-building are not; those are ongoing disciplines that we'd rather not pretend to be a fit for. We can recommend specialist partners.",
    },
    {
      anchorId: 'faq-hosting-costs',
      question: 'What about hosting and ongoing costs?',
      answer:
        "We deploy on Cloudflare Pages, which is free for the traffic profiles of most clients we work with. Domains and any premium integrations (a CRM, scheduling tool, etc.) are billed directly to you by those providers — never marked up by us.",
    },
    {
      anchorId: 'faq-existing-brand',
      question: 'Can you work with our existing brand and assets?',
      answer:
        "Yes. We're happy to build inside an existing brand system if you have one, and we'll flag where the brand is fighting the conversion goals so you can decide what to do about it. If you don't have a brand system, we don't pretend to be brand strategists — we'll work with what you have or recommend a partner.",
    },
    {
      anchorId: 'faq-code-ownership',
      question: 'What does "you own the code" actually mean?',
      answer:
        'At handover, we transfer the GitHub repository to your organisation. You get admin rights. The deployment configuration is documented, the CMS credentials are in your name, and the domain is registered to you (or stays with whoever already holds it). There is no licence, no token, and no piece of infrastructure that belongs to us.',
    },
    {
      anchorId: 'faq-discounts',
      question: 'Do you offer a discount for non-profits or early-stage startups?',
      answer:
        'Sometimes. We have a small annual budget for pro-bono and reduced-rate work. Ask. Worst case, we say no.',
    },
  ],
};

/* ========================================================================
 * 12. final_cta_v2_full_bleed → <FinalCTAAnchor>   (London)
 *    Same as M1, no atmospheric image yet (M3 wires it).
 * ====================================================================== */

export const mockFinalCTA: FinalCTAAnchorV2Props = {
  headline: 'Ready to start?',
  lead: "A 30-minute discovery call ends with a written brief and a fixed price. No commitment, no follow-up sequence. If we're not the right fit, we'll say so on the call.",
  primaryCta: {
    label: 'Book a discovery call',
    href: 'https://factoryjet.com/contact',
  },
  whatsappCta: {
    label: 'Or message on WhatsApp',
    href: 'https://wa.me/919103398557',
  },
  // atmosphericImagePath intentionally omitted — M3 generates these.
};
