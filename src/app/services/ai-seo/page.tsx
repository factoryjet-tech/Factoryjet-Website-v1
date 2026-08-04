import type { Metadata } from 'next';
import Link from 'next/link';

import { aiSeoAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import TalkToFounder from '@/components/v2/TalkToFounder';
import AiVisibilityCtaBand from '@/components/ai-visibility/AiVisibilityCtaBand';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/ai-seo - PR #2 Framework B+ launch (2026-05-25)

   Hero copy: V2 "ROI on Organic Traffic" variant.
   Pricing:   AI visibility audit + 3 monthly retainer tiers (Growth, Scale, Enterprise), scoped per engagement.
   Build:     Custom 4-card pricing grid inline (PricingTiers is 3-tuple-strict).
              Custom 3-stat row inline (BigThreeTrustBlock content is hardcoded).
              IndustriesGrid is self-contained (no props), generic enough to reuse.
              FAQ block: 27 FAQs across 5 categories.
              Closing CTA: TalkToFounder (full + dark).
   Schema:    WebPage + BreadcrumbList + Service + FAQPage + Organization JSON-LD.
   Hreflang:  aiSeoAlternates (bilingual cluster - see src/data/hreflangMap.ts).
───────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI SEO Agency in the USA: AI SEO Services, GEO + AEO',
  description:
    'AI SEO agency for US businesses. FactoryJet is the AI SEO company behind AI SEO services, generative engine optimization and answer engine optimization, all on one month-to-month retainer.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI SEO Agency in the USA: AI SEO Services, GEO + AEO',
    description:
      'AI SEO agency for US businesses. FactoryJet is the AI SEO company behind AI SEO services, generative engine optimization and answer engine optimization, all on one month-to-month retainer.',
    url: 'https://factoryjet.com/services/ai-seo',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet AI SEO services (GEO and AEO) for US businesses',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agency in the USA: AI SEO Services, GEO + AEO',
    description:
      'AI SEO agency for US businesses. AI SEO services, generative engine optimization and answer engine optimization on one retainer. Get cited by ChatGPT, Perplexity and Google AI Overviews.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-seo',
    languages: aiSeoAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data - pillars, journey stages, comparison rows, pricing tiers
───────────────────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    title: 'Blue-link optimization ignores the answer layer',
    body:
      'Traditional SEO chases keyword rankings on the search results page. AI engines extract structured answers and cite the most credible source. If your content is keyword-rich but not structured for direct extraction, AI engines will not cite you, even if you rank #1 on Google.',
  },
  {
    title: 'Citations need schema, not just authority',
    body:
      'Google AI Overviews and Perplexity prioritize schema-rich answers with clear question–answer pairs. Old-school SEO buries answers in long-form prose; modern AI SEO surfaces them in FAQPage, HowTo, and Article schemas that machines can extract verbatim.',
  },
  {
    title: 'Multi-engine coverage is a different competence',
    body:
      'Each AI engine has its own retrieval mechanics. ChatGPT indexes via web search; Perplexity ranks by source credibility; Claude blends curated training with live fetch. Optimizing for one does not optimize for all, and most SEO agencies only optimize for Google.',
  },
];

const AI_SEO_JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We map every AI citation you have today, the gaps competitors fill, and the schema / content fixes that close them. Output: a GEO/AEO scorecard plus a 90-day roadmap.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'We restructure your site\'s schema, FAQ blocks, HowTo snippets, and content hierarchy so AI engines can extract answers verbatim. No content rewrite, just structural surgery.',
  },
  {
    number: '03',
    title: 'Content',
    description:
      'We produce 4–8 AI-citable articles per month, written to answer the queries your buyers ask AI assistants. Real authorship signals. Real expert depth. Not LLM-spammed boilerplate.',
  },
  {
    number: '04',
    title: 'Distribution',
    description:
      'We acquire third-party citations from sources AI engines trust: industry publications, podcasts, expert directories, structured data partnerships. Citations beget citations.',
  },
  {
    number: '05',
    title: 'Measure',
    description:
      'Monthly: AI-citation count per engine, Google rank changes, revenue attribution. You see what is moving and what is not. We adjust scope monthly. No annual lock-in.',
  },
];

const PRICING_TIERS = [
  {
    name: 'AI Visibility Audit',
    price: 'One-time audit',
    cadence: 'fixed scope',
    description: 'Find every AI citation gap on your site and across competitors before you commit to a retainer.',
    features: [
      'GEO + AEO citation audit (ChatGPT, Perplexity, Claude, Gemini, Google AIO)',
      '90-day visibility roadmap',
      'Competitive citation gap report',
      '1 strategy call with the founder',
    ],
    ctaLabel: 'Book the audit',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: false,
  },
  {
    name: 'Growth Retainer',
    price: 'Monthly retainer',
    cadence: 'scoped to your site',
    description: 'Engineered for SMBs. Audit deliverables, monthly content, and structural improvements that compound.',
    features: [
      'All AI Visibility Audit deliverables',
      '4 AI-citable articles produced monthly',
      'Schema + site structure improvements',
      'Monthly AI-citation tracking + Google rank report',
    ],
    ctaLabel: 'Start Growth',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: false,
  },
  {
    name: 'Scale Retainer',
    price: 'Monthly retainer',
    cadence: 'higher cadence',
    description: 'Mid-market scope. Higher cadence, multi-engine optimization, bi-weekly business reviews.',
    features: [
      'Everything in Growth + 8 articles monthly',
      'Third-party citation acquisition program',
      'Multi-engine optimization (ChatGPT + Perplexity + Claude + Gemini + Google AIO)',
      'Bi-weekly QBR with the founder',
    ],
    ctaLabel: 'Start Scale',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: true,
    isContact: false,
  },
  {
    name: 'Enterprise Retainer',
    price: 'Talk to the Founder',
    cadence: '',
    description: 'Custom scope. Multi-domain. Dedicated engineer + senior strategist. Annual contracts available on request.',
    features: [
      'Custom scope, defined per engagement',
      'Multi-domain or multi-brand coverage',
      'Dedicated senior engineer + strategist',
      'Quarterly executive review',
    ],
    ctaLabel: 'Talk to the Founder',
    ctaHref: 'https://calendly.com/bhavesh-factoryjet/30min',
    popular: false,
    isContact: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data - 21 across 5 categories
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'what', label: 'What is AI SEO' },
  { key: 'engines', label: 'AI engines' },
  { key: 'method', label: 'Methodology' },
  { key: 'measure', label: 'Measurement' },
  { key: 'pricing', label: 'Pricing & engagement' },
  { key: 'compare', label: 'Agencies & tools' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── A. What is AI SEO (5) ──────────────────────────────────────────────
  {
    category: 'what',
    question: 'What is AI SEO?',
    answer:
      'AI SEO is the practice of optimizing a website so that AI engines (ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews) cite it as a source when answering user questions. It overlaps with traditional SEO (you still need clean structure, fast load times, and authority signals) but adds new requirements: schema-rich answer formatting, structured FAQ and HowTo blocks, and third-party citation acquisition that AI engines treat as credibility signals.',
  },
  {
    category: 'what',
    question: 'GEO vs AEO: what is the difference?',
    answer:
      'GEO stands for generative engine optimization, which means optimizing for AI engines that generate answers (ChatGPT, Perplexity, Claude, Gemini). AEO stands for answer engine optimization, which means optimizing for any engine that returns a direct answer instead of a list of links, including Google AI Overviews and traditional featured snippets. In practice the two overlap heavily, and our retainers cover both. Most agencies pick one buzzword; the underlying work is largely the same.',
  },
  {
    category: 'what',
    question: 'Why does AI SEO matter in 2026?',
    answer:
      'A meaningful and growing share of US search traffic in 2026 happens inside AI assistants rather than starting on Google. Even searches that do start on Google increasingly end with an AI Overview answer above the blue links. If your site is not engineered to be cited by the AI layer, you lose traffic that no traditional SEO audit will surface, and that traffic gap compounds month over month as more search shifts away from blue links.',
  },
  {
    category: 'what',
    question: 'How does AI SEO differ from traditional SEO?',
    answer:
      'Traditional SEO optimizes for ranking position in Google\'s blue-link results. AI SEO optimizes for citation inside AI-generated answers. The mechanics differ: AI engines extract structured answers, weight source credibility heavily, and treat third-party citations as authority signals. Keyword density and backlink volume, the staples of old-school SEO, matter less. Schema, structured Q&A, and verifiable expertise matter more.',
  },
  {
    category: 'what',
    question: 'Do I need to give up on Google rankings?',
    answer:
      'No. Google rankings still drive a large share of organic traffic and revenue, especially for transactional queries. AI SEO is additive: most of the work that earns AI citations (schema, structure, expert content, third-party citations) also improves Google rankings. Every retainer reports both AI-citation metrics and Google rank changes so you see both signals moving.',
  },

  // ── B. AI engines (4) ──────────────────────────────────────────────────
  {
    category: 'engines',
    question: 'Which AI engines do you optimize for?',
    answer:
      'All four major generative engines (ChatGPT, Perplexity, Claude, and Gemini) plus Google AI Overviews. We track citation frequency in each engine monthly. Most competitors focus on Google AI Overviews because it overlaps with their existing SEO playbook; we treat ChatGPT and Perplexity as first-class targets because that is where younger and mid-market US buyers increasingly start their research.',
  },
  {
    category: 'engines',
    question: 'How does ChatGPT decide what to cite?',
    answer:
      'ChatGPT primarily uses Bing-style web search for live information, augmented by its training data for general knowledge. To be cited, a page needs to (a) be crawlable by GPTBot, (b) have clear question–answer structure or schema, (c) appear in the top web-search results for the query, and (d) carry credibility signals like authorship, freshness, and third-party citations. We optimize for all four.',
  },
  {
    category: 'engines',
    question: 'Is Perplexity worth optimizing for?',
    answer:
      'Yes, especially for B2B and research-heavy buyer journeys. Perplexity emphasizes source citation prominently in every answer and skews toward credibility-weighted ranking. A well-cited page on Perplexity drives high-intent referral traffic at conversion rates often above Google blue-link traffic. Mid-market buyers in tech, finance, and professional services are particularly active there.',
  },
  {
    category: 'engines',
    question: 'What about Google AI Overviews?',
    answer:
      'Google AI Overviews matter because they sit above the blue links and increasingly absorb the click that would have gone to position 1 through 3. We optimize for AI Overview inclusion the same way we optimize for traditional featured snippets, using clear answer formatting, schema markup and authority signals, and we report AI Overview appearances monthly alongside traditional rank tracking.',
  },

  // ── C. Methodology (5) ─────────────────────────────────────────────────
  {
    category: 'method',
    question: 'What is included in the AI visibility audit?',
    answer:
      'The audit covers: (1) a full GEO/AEO scan, meaning how many citations your site has across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews today, (2) a competitive citation gap report showing which competitors are being cited where you are not, (3) a schema and structural assessment listing what is missing or broken, and (4) a 90-day roadmap with prioritized fixes. Deliverable: a written report plus a strategy call with Bhavesh.',
  },
  {
    category: 'method',
    question: 'How do you produce AI-citable content?',
    answer:
      'Each article is briefed by a senior strategist, written by a subject-matter expert with verifiable credentials, edited for clarity and answer-extractability, and structured with the schema AI engines extract verbatim (FAQPage, HowTo, Article). We do not use LLM-generated boilerplate. AI engines actively demote LLM-spammed content; expert-authored, structurally clean content is the only durable path.',
  },
  {
    category: 'method',
    question: 'What schema do you add to my site?',
    answer:
      'At minimum: Organization, WebPage, BreadcrumbList, Article, FAQPage, and HowTo where applicable. For e-commerce sites we add Product, AggregateRating, and Offer. For service businesses we add Service and AggregateRating. Schema is implemented in JSON-LD (the format Google and Perplexity prefer) and validated against schema.org and the Google Rich Results Test before deployment.',
  },
  {
    category: 'method',
    question: 'How do you acquire third-party citations?',
    answer:
      'We pitch your subject-matter experts as named sources to industry publications, podcasts, expert directories, and structured data partnerships that AI engines crawl. This is not link building in the old sense. We are after named citations and source attribution, not anchor-text backlinks. Citations from credible third parties compound the credibility signal that AI engines weight heavily.',
  },
  {
    category: 'method',
    question: 'Do you do link building?',
    answer:
      'We do citation acquisition, which overlaps with link building but is not the same. The deliverable is named third-party mentions of your experts and products, in publications, podcasts and directories, that AI engines treat as credibility signals. We do not do bulk guest-post placements, PBN links, or any tactic that violates Google\'s spam guidelines. Quality over volume, every time.',
  },

  // ── D. Measurement (3) ─────────────────────────────────────────────────
  {
    category: 'measure',
    question: 'How do you track AI citations?',
    answer:
      'We run scripted prompts across ChatGPT, Perplexity, Claude, and Gemini for your target queries and log every citation we see. We also track Google AI Overview appearances and traditional rank positions. Results go into a monthly report you can read in five minutes: citation count per engine, query coverage, and changes vs the prior month.',
  },
  {
    category: 'measure',
    question: 'What metrics do I get monthly?',
    answer:
      'Three categories: (1) AI citation metrics, meaning count per engine, query coverage and share of voice against competitors, (2) Google metrics, meaning rank changes, AI Overview appearances, impressions and clicks, and (3) business attribution, meaning organic sessions, AI-referral sessions, conversions, and revenue where tracking is wired in. Every metric ties back to the 90-day roadmap so you see progress against plan.',
  },
  {
    category: 'measure',
    question: 'What does success look like in 90 days?',
    answer:
      'A typical 90-day Growth retainer outcome: 30–60% increase in AI citation count across the four major engines, 10–20 new Google AI Overview appearances on target queries, schema deployed across 80%+ of relevant pages, and 4–12 net-new AI-citable articles shipped. The audit roadmap is sequenced so the highest-impact fixes ship in the first 30 days.',
  },

  // ── E. Pricing & engagement (4) ────────────────────────────────────────
  {
    category: 'pricing',
    question: 'Why no annual contracts?',
    answer:
      'AI search is evolving every quarter. Locking clients into 12-month contracts on a playbook that may need to change at month 4 is not how we want to work. Month-to-month forces us to keep proving value. If we are not moving citations, you should be able to leave. Most of our retainers run 18+ months voluntarily, and that is the bar we set for ourselves.',
  },
  {
    category: 'pricing',
    question: 'What if my needs grow mid-retainer?',
    answer:
      'You can move tiers anytime with one billing-period notice. Most clients start on Growth, see citation momentum at month 3 or 4, and step up to Scale. A few skip to Scale or Enterprise after the audit reveals a larger gap than expected. Tier changes never trigger setup fees or onboarding charges, because the underlying engagement is continuous.',
  },
  {
    category: 'pricing',
    question: 'Can I start with just the audit?',
    answer:
      'Yes. The AI visibility audit is a complete deliverable. Many clients use it as a one-time strategic input, implement the roadmap with their own team, and return for retainer support later. If you do continue into a retainer within 30 days, the audit fee is credited against your first month. Either way, you own all audit deliverables outright.',
  },
  {
    category: 'pricing',
    question: 'What happens if I cancel?',
    answer:
      'You give one billing-cycle notice. We finish the current month, hand over all in-flight work, transfer schema and content assets to your team, and provide a wind-down briefing. Everything we built is yours from day one: no IP transfer fees, no withholding of credentials. The relationship ends cleanly so the door stays open for re-engagement later.',
  },

  // ── F. Choosing an agency (6) - money-query coverage, added 2026-06-11 ──
  {
    category: 'what',
    question: 'How do I pick an AI SEO agency?',
    answer:
      'Three checks, and they filter fast. One: does the agency track citations across ChatGPT, Perplexity, Claude and Gemini, or only Google AI Overviews? Most track only Google. Two: does a senior practitioner run your account, or an account manager relaying to an unnamed team? Three: will they put a per-engine citation count in writing every month? Any AI SEO company that answers all three cleanly is worth a call, including us. If you want a ranked shortlist instead of a hire, our roundup of the best AI SEO agencies in the USA compares ten shops openly.',
  },
  {
    category: 'what',
    question: 'Do I need an AEO agency, a GEO agency, or both?',
    answer:
      'Both, from one team. AEO (answer engine optimization) and GEO (generative engine optimization) describe overlapping work, so a generative engine optimization agency and an answer engine optimization agency are usually doing the same job under different labels. FactoryJet covers both on one retainer: schema and answer-block architecture on the AEO side, citation acquisition and content engineered for generative engines on the GEO side. If a shop sells you one acronym without the other, you are buying half the workflow and paying full price for it.',
  },
  {
    category: 'what',
    question: 'Which AI SEO agencies actually show up for these searches?',
    answer:
      'On the US results pages for AI SEO terms, the recurring names are Thrive Agency, Searchbloom, WebFX, Spicy Margarita, Onely, SEO.co and Yes Optimist. They are not interchangeable. Onely holds position 1 for technical seo service (1,900 searches a month). Searchbloom holds position 1 for search marketing agency (1,000 a month). Spicy Margarita sits around position 3 for ai seo agency itself. We compare all of them, and say where they beat us, in the comparison section on this page and in our full listicle of the best AI SEO agencies in the USA.',
  },
  {
    category: 'engines',
    question: 'Who can help my business show up in ChatGPT results?',
    answer:
      'An AI SEO agency that treats ChatGPT as a first-class target, not a Google add-on. The workflow: make your site crawlable by GPTBot, structure answers so they can be extracted verbatim, win placement in the web results ChatGPT searches behind the scenes, and build the third-party citations it treats as credibility signals. That is what FactoryJet retainers do, and the same four steps work for Perplexity, Claude and Gemini. The test for any ChatGPT optimization agency is simple: ask for a per-engine citation count before and after. Ours starts with the AI visibility audit.',
  },
  {
    category: 'method',
    question: 'Is there an agency that does SEO for AI Overviews?',
    answer:
      'Yes. FactoryJet optimizes for Google AI Overviews on every retainer. Whether you call it AI Overviews optimization, LLM SEO or AI search optimization, the mechanics are the same: answer-first formatting, schema markup, and authority signals that earn inclusion above the blue links. The standard to hold any agency to is that Overview appearances get reported monthly alongside classic rank tracking. That is the line between a practitioner and a dashboard reseller.',
  },
  {
    category: 'pricing',
    question: 'How is AI SEO priced in the US?',
    answer:
      'Almost nobody in this market publishes a rate, and a rate without scope tells you nothing anyway. What actually drives the number: how many pages need structural work, how competitive your money queries are, how many AI engines you want tracked, whether content gets produced or only restructured, and whether third-party citation work is in scope. FactoryJet scopes all of that on a free call before anything starts, so you see the plan before you commit. Generative engine optimization sits inside that same scope. It is not a second invoice.',
  },

  /* ── G. Search behaviour and definitions (10) ────────────────────────────
     Questions below are real People Also Ask entries pulled from live US
     SERPs on 2026-07-26. Answers written from scratch. */
  {
    category: 'what',
    question: 'What does SEO mean in AI?',
    answer:
      'Same discipline, different surface. SEO is the work of making a site easy to find and easy to trust. In AI search that surface is the answer an assistant writes, not a list of ten blue links. So the goal moves from ranking to being one of the sources the model quotes by name. The plumbing is familiar: crawlability, structure, credibility. What comes out the other end is different.',
  },
  {
    category: 'what',
    question: 'What does answer engine optimization do?',
    answer:
      'It makes a specific answer on your page liftable. An answer engine wants roughly 40 to 60 words that resolve the question cleanly, sitting near the top of a clearly labelled section, backed by schema that tells the machine what it is reading. AEO is the formatting and markup half of AI SEO. It does not build authority on its own, which is why it fails when it is sold alone.',
  },
  {
    category: 'what',
    question: 'What is AI SEO called now?',
    answer:
      'Depends who is selling it. You will see AI SEO, GEO (generative engine optimization), AEO (answer engine optimization), LLM SEO, AI search optimization and a few worse ones. They describe roughly the same job. GEO leans toward ChatGPT and Perplexity, AEO leans toward direct answers including Google AI Overviews, and the rest are labels. Buy the work, not the acronym.',
  },
  {
    category: 'what',
    question: 'Is SEO dying out, or is it just evolving?',
    answer:
      'The easy version is dying. Pew found people click a normal result 8% of the time when Google shows an AI summary, against 15% when it does not. That is a real hit and it lands hardest on thin pages built to catch a search and nothing else. What survives is content an AI can quote and a brand it is comfortable naming. Fewer clicks, higher stakes per click, and the work moves upstream into structure and credibility.',
  },
  {
    category: 'what',
    question: 'Is GEO replacing SEO?',
    answer:
      'No. GEO sits on top of SEO, it does not replace it. AI engines still lean on the open web to decide what is credible, so a slow, uncrawlable site with no authority will not be rescued by GEO tactics. Anyone telling you to stop doing SEO and only do GEO is selling a rebrand of the same retainer.',
  },
  {
    category: 'what',
    question: 'What is the difference between SEO and GEO?',
    answer:
      'SEO is about placement in a list. GEO is about being quoted inside a written answer. In SEO you fight for a position. In GEO there is no position, only whether the model picked you as a source and named you. That changes what you optimise: short direct answers near the top of each section, clean schema, and third-party mentions the engine has already seen elsewhere.',
  },
  {
    category: 'what',
    question: 'What are the 4 types of SEO?',
    answer:
      'Technical (can engines crawl and render your site), on-page (titles, headings, content, schema), off-page (links, mentions, reputation), and local (maps, Google Business Profile, city pages). AI SEO is not a fifth type. It is a new requirement threaded through all four, which is why bolting it on as a separate product rarely works.',
  },
  {
    category: 'what',
    question: 'What is an example of AEO?',
    answer:
      'Take a question your buyers actually ask, put it in as a heading, answer it in the first two sentences underneath in plain words, then mark it up with FAQPage schema. That is AEO in one move. This page does it: the block directly under the hero answers what is AI SEO in one paragraph before any selling starts.',
  },
  {
    category: 'what',
    question: 'Is AEO better than SEO?',
    answer:
      'It is not a choice. AEO makes your content extractable. SEO makes it findable and credible in the first place. Do AEO on a site nobody trusts and nothing happens. Do SEO without AEO and you rank while somebody else gets quoted. We run them as one workflow because splitting them is a billing decision, not a technical one.',
  },
  {
    category: 'what',
    question: 'What is the new version of SEO?',
    answer:
      'There is no new version, there is a new reader. The rules of credibility did not change. What changed is that the reader is often a model compressing your page into three sentences for a human. Your content has to survive that compression and still come out with your name attached.',
  },

  /* ── H. Engine mechanics (4) ─────────────────────────────────────────── */
  {
    category: 'engines',
    question: 'How do I rank in ChatGPT answers?',
    answer:
      'Four things, in order. Let GPTBot crawl you, and go check your robots.txt right now because plenty of sites block it by accident. Put a direct answer in the first 40 to 60 words under each heading so it can be lifted whole. Get into the regular web results ChatGPT searches behind the scenes, which means ordinary SEO still applies. Then earn mentions on sites the model already treats as reliable. Heavy client-side JavaScript hurts you more here than it does on Google.',
  },
  {
    category: 'engines',
    question: 'How do I increase my brand visibility in ChatGPT?',
    answer:
      'Start by measuring it, because most businesses never have. Run your twenty highest-intent buyer questions through ChatGPT and write down whether you get named at all. Then fix the two levers that move fastest: extractable answer formatting on your commercial pages, and third-party mentions on sources the engine already retrieves. Our free AI visibility checker does the measuring part for you.',
  },
  {
    category: 'engines',
    question: 'How do I show up in Google AI Overviews, and why am I not getting one?',
    answer:
      'Two different problems. Showing up means answer-first formatting, schema, and enough authority that Google is comfortable quoting you. Not seeing an Overview at all usually means Google decided the query is too ambiguous, too commercial, or too sensitive, since health and finance queries get held back deliberately. Overviews also appear and vanish on the same query week to week, so judge it over a month, never over a day.',
  },
  {
    category: 'engines',
    question: 'Is Perplexity good at citing sources, and is it better than ChatGPT?',
    answer:
      'Perplexity cites more visibly than any other assistant, which makes it the easiest engine to measure yourself against. Better than ChatGPT is the wrong frame. Perplexity is a research tool, ChatGPT is a general assistant with far more users. For B2B and considered purchases, Perplexity punches above its size because the people using it are already deep in research mode and close to a decision.',
  },

  /* ── I. Doing the work (4) ───────────────────────────────────────────── */
  {
    category: 'method',
    question: 'Can I use AI to do my own SEO?',
    answer:
      'Use it where being wrong is cheap: clustering keywords, drafting outlines, spotting gaps in your own coverage, writing schema, summarising competitor pages. Do not use it to write the finished article. Engines are getting better at spotting generic model output, and generic output is exactly what does not get quoted. Rough rule: AI for research and structure, humans for claims and judgment.',
  },
  {
    category: 'method',
    question: 'How do I optimise content for AI search without losing my voice?',
    answer:
      'Front-load, do not flatten. Answer the question in the first two sentences under the heading, then say the interesting thing you actually wanted to say. The direct answer is what gets extracted. The rest is what makes someone book a call after they land. Where people go wrong is turning every page into a bland FAQ dump, which gets you quoted and immediately forgotten.',
  },
  {
    category: 'method',
    question: 'What moves AI search visibility fastest?',
    answer:
      'Three levers, in this order. Unblock the AI crawlers. Add a clean answer block plus FAQPage schema to your top ten commercial pages. Get named on two or three third-party sites the engines already retrieve. That is weeks of work, not quarters. Everything after it is the slow compounding part, and there is no shortcut through that half.',
  },
  {
    category: 'method',
    question: 'How do I learn AI SEO as a beginner?',
    answer:
      'Pick one real site, ideally your own, and try to get one page quoted. Read the official search engine documentation before anyone else, learn to read Search Console, then learn schema, because schema is the piece that carries over cleanly from classic SEO into AI search. Skip anything promising a secret method. There is not one, there is only whether a machine can read your page and whether anyone credible has vouched for you.',
  },

  /* ── J. Agencies, tools and scope (6) ────────────────────────────────── */
  {
    category: 'compare',
    question: 'How do the main US AI SEO agencies compare?',
    answer:
      'They are strong at different things, and the keyword data shows it. Onely holds position 1 for technical seo service (1,900 searches a month) and technical seo agency (720), so it is the pick when your blocker is rendering and crawlability. Searchbloom holds position 1 for search marketing agency (1,000 a month) and works revenue-first. Spicy Margarita sits around position 3 for ai seo agency itself, making it the closest AI-native competitor on this page. Thrive Agency has the broadest footprint of anyone here, including top spots on German and French marketing queries. WebFX brings enterprise scale. Match the shape of the shop to the shape of your problem.',
  },
  {
    category: 'compare',
    question: 'Why would I pick FactoryJet over a bigger AI SEO company?',
    answer:
      'Sometimes you should not, and it is fairer to say that out loud. We have 44 referring domains. Established competitors on these same results pages have thousands. If your buying criterion is the safest logo on the invoice, hire the incumbent. Where we win is delivery shape: the founder runs your account, you get per-engine citation counts instead of a rankings PDF, and terms are month to month. Our own strongest US positions today are tenth for local seo nashville and eighth for seo agency austin texas. We would rather show you that than invent a case study.',
  },
  {
    category: 'compare',
    question: 'What is the best software for answer engine optimization?',
    answer:
      'There is no settled winner yet, and anyone declaring one is usually affiliate-linking. The category splits three ways: AI visibility trackers that check whether you get mentioned, classic SEO suites bolting on AI modules, and schema and content tooling. What matters more than the brand is whether the tool prompts the engines the way your buyers actually phrase things. A tracker running generic head terms will hand you comforting nonsense.',
  },
  {
    category: 'compare',
    question: 'What is the best free AI tool for SEO?',
    answer:
      'For research and drafting, the free tiers of the major assistants are genuinely useful and you do not need to pay for that part. For measurement, free tooling is thin, which is why we built a free AI visibility checker on this site. Free tools are good for finding the problem. Fixing it is where the work is.',
  },
  {
    category: 'compare',
    question: 'Is there a difference between generative engine optimization services and AI SEO services?',
    answer:
      'Not in practice. Generative engine optimization services describe the same work as AI SEO services with a narrower emphasis on engines that write answers. If a generative engine optimization company quotes you one number for AI SEO and a second for GEO, ask what is in the second line item that is not already in the first. In our experience the honest answer is nothing.',
  },
  {
    category: 'compare',
    question: 'Should I hire an AI SEO agency or do it in-house?',
    answer:
      'Mixed usually wins. Schema, FAQ formatting and answer-first restructuring are learnable and worth owning internally, because they touch every page you will ever publish. Multi-engine citation tracking, entity work and third-party citation acquisition are harder and slower to build from zero. Most teams that get this right start with an outside audit, keep execution split, and hire the agency for the parts that need tooling they will not build themselves.',
  },

  /* ── K. Scope and cost drivers (1) ───────────────────────────────────── */
  {
    category: 'pricing',
    question: 'How much should I pay for search engine optimization?',
    answer:
      'We will not quote a number without scope, because a number without scope is a trap. The things that actually drive it: how many pages need structural work, how competitive your money queries are, how many AI engines you want tracked, whether content is produced or only restructured, and whether third-party citation work is included. A ten-page local service site and a 5,000-product store are not the same job. Get the scope in writing, then compare quotes on scope rather than on headline rate.',
  },
];

/**
 * COMPETITORS - real agencies that appear on the US SERPs for this cluster.
 * Every page-1 keyword and volume below comes from DataForSEO, US location,
 * pulled 2026-07-26. Named openly, described fairly, including where they
 * beat us. Drives both the visible section and the ItemList schema.
 */
const COMPETITORS = [
  {
    name: 'Thrive Agency',
    domain: 'thriveagency.com',
    url: 'https://thriveagency.com/',
    strength:
      'The widest footprint of anyone on this set of results, and it appears more often than any other name we tracked. Full-service: SEO, paid, social and web under one roof.',
    proof:
      'Position 1 for agentur marketing (720/mo) and agences marketing digital (590/mo), German and French queries, plus 5 star google rated (320/mo).',
    difference:
      'Those rankings tell you Thrive is a broad multi-language marketing shop, not an AI-search boutique. If you want one vendor for every channel, that is a rational pick. We only do search, and we report citations per AI engine instead of a blended marketing dashboard.',
  },
  {
    name: 'Searchbloom',
    domain: 'searchbloom.com',
    url: 'https://www.searchbloom.com/',
    strength:
      'Owns the generic head terms for search marketing outright, and frames every conversation around revenue rather than rankings.',
    proof:
      'Position 1 for search marketing agency (1,000/mo), search engine marketing firm (210/mo) and search engine marketing firms (210/mo).',
    difference:
      'Searchbloom sells search marketing broadly, paid and organic together. We are narrower on purpose: organic and AI answer visibility only, with per-engine citation counts as the headline number.',
  },
  {
    name: 'WebFX',
    domain: 'webfx.com',
    url: 'https://www.webfx.com/',
    strength:
      'Scale. A large in-house team, its own reporting platform, and the depth to run enterprise programmes alongside paid media and CRO.',
    proof:
      'Appears on five of the AI SEO results pages we tracked, averaging position 11.4. Its keyword footprint is far too broad to summarise in one line.',
    difference:
      'With WebFX you get an account team. With us you get the founder on the call and senior engineers doing the work. That is a real trade: they have depth we do not, and we have directness they cannot offer at their size.',
  },
  {
    name: 'Spicy Margarita',
    domain: 'spicymargarita.co',
    url: 'https://www.spicymargarita.co/',
    strength:
      'The closest thing here to an AI-SEO native, and the only competitor in this set ranking on page one for the exact term this page targets.',
    proof:
      'Position 3 for ai seo agency (1,000/mo), position 3 for ai powered seo services (70/mo), position 2 for seo briefs (70/mo).',
    difference:
      'They are ahead of us on this query today and we are not going to pretend otherwise. Where we differ is engine coverage breadth, and the fact that we ship the site changes ourselves rather than handing over a brief for someone else to implement.',
  },
  {
    name: 'Onely',
    domain: 'onely.com',
    url: 'https://www.onely.com/',
    strength:
      'The deepest technical practice on this list. Crawling, rendering, JavaScript, log files: the unglamorous foundations AI crawlers actually depend on.',
    proof:
      'Position 1 for technical seo service (1,900/mo), technical seo agency (720/mo) and its own brand term (480/mo).',
    difference:
      'If your blocker is that AI crawlers cannot render your pages, hire the technical specialist. If your blocker is that nothing on your site is quotable once it is rendered, that is the half we do.',
  },
  {
    name: 'SEO.co',
    domain: 'seo.co',
    url: 'https://seo.co/',
    strength:
      'City and state level SEO at volume, plus a genuine link-earning practice rather than a bulk placement operation.',
    proof:
      'Position 1 for durham seo (260/mo), arkansas seo companies (210/mo) and earned links (110/mo).',
    difference:
      'Their strength is geographic coverage across a lot of markets. Ours is the answer layer. Of everyone on this list, we overlap with them least.',
  },
  {
    name: 'Yes Optimist',
    domain: 'yesoptimist.com',
    url: 'https://www.yesoptimist.com/',
    strength:
      'B2B SaaS content done properly, with a focused service list instead of a sprawling one.',
    proof:
      'Position 3 for seo saas (590/mo) and seo agency for b2b (90/mo), position 1 for its own brand (140/mo).',
    difference:
      'If you are a SaaS company buying content-led growth, they belong on your shortlist. We only beat them if AI citation tracking and technical schema work matter more to you than editorial volume.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (WebPage + BreadcrumbList + Service + FAQPage + Organization)
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  dateModified: '2026-08-04',
  name: 'AI SEO Agency in the USA: AI SEO Services, GEO + AEO',
  url: 'https://factoryjet.com/services/ai-seo',
  description:
    'AI SEO agency for US businesses. AI SEO services, generative engine optimization and answer engine optimization on one retainer, covering ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.',
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]'],
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://factoryjet.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://factoryjet.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI SEO',
      item: 'https://factoryjet.com/services/ai-seo',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI SEO Services (GEO + AEO)',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI SEO services, generative engine optimization services, answer engine optimization services',
  alternateName: ['AI SEO agency', 'AI SEO company', 'generative engine optimization agency', 'answer engine optimization agency'],
  description:
    'Senior-engineer-led AI SEO retainers that get your site cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews. Audit + monthly retainer model. Month-to-month, no annual contracts.',
  offers: [
    {
      '@type': 'Offer',
      name: 'AI Visibility Audit',
      description: 'GEO/AEO citation audit plus 90-day visibility roadmap. One-time engagement.',
    },
    {
      '@type': 'Offer',
      name: 'Growth Retainer',
      description: 'Monthly AI SEO retainer for SMBs. Audit deliverables, 4 articles/month, schema + structure improvements, monthly tracking.',
    },
    {
      '@type': 'Offer',
      name: 'Scale Retainer',
      description: 'Monthly AI SEO retainer for mid-market. Multi-engine optimization, 8 articles/month, third-party citation acquisition, bi-weekly QBR.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Retainer',
      description: 'Custom scope, multi-domain, dedicated engineer plus strategist. Scoped on application.',
    },
  ],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const competitorListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'US AI SEO agencies compared',
  description:
    'Agencies that appear on US search results for AI SEO, generative engine optimization and answer engine optimization queries, with their real page-one keywords.',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: COMPETITORS.length,
  itemListElement: COMPETITORS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Organization',
      name: c.name,
      url: c.url,
      description: c.strength,
    },
  })),
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components - custom blocks that do not warrant their own files
───────────────────────────────────────────────────────────────────────────── */

/**
 * StatsRow - custom 3-stat block (replaces BigThreeTrustBlock which has hardcoded
 * homepage content not suitable for this page). Cream bg + orange top/bottom
 * borders matches the BigThreeTrustBlock visual rhythm.
 */
function StatsRow() {
  return (
    <section
      className="py-10 md:py-14"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              value: '4',
              suffix: 'AI engines',
              label: 'covered, monthly',
              body: 'ChatGPT, Perplexity, Claude and Gemini, plus Google AI Overviews on every report.',
            },
            {
              value: '0',
              suffix: 'annual contracts',
              label: 'month-to-month, always',
              body: 'Cancel with one billing-cycle notice. Most retainers run 18+ months voluntarily, because proof comes from continued momentum, not from contract teeth.',
            },
            {
              value: '90-day',
              suffix: 'payback target',
              label: 'on every retainer',
              body: 'We engineer retainers to pay for themselves within the first quarter, or we keep working.',
            },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="flex items-baseline gap-2">
                <p
                  className="fj-display font-bold"
                  style={{
                    color: '#F05A28',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-fj-body font-semibold"
                  style={{
                    color: '#0F0F12',
                    fontSize: '1.0625rem',
                    letterSpacing: '0.005em',
                  }}
                >
                  {stat.suffix}
                </p>
              </div>
              <p
                className="mt-1 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.65)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
              <p
                className="mt-4 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.72)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * AiSeoPricingGrid - custom 4-card pricing block (PricingTiers component is
 * 3-tuple-strict). Matches v2 card patterns: white cards with orange top cap,
 * popular card on charcoal bg, Enterprise card surfaces TalkToFounder-style CTA.
 */
function AiSeoPricingGrid() {
  return (
    <section
      id="pricing"
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.068) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">AI SEO SERVICES &amp; SCOPE</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            AI SEO services, scoped up front. Talk to the founder for enterprise work.
          </h2>
          <p
            className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Start with an audit. Move into a retainer when you see momentum. Step up to enterprise when scope demands it. No annual contracts, and full code and data ownership from day one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const isContact = tier.isContact;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  isPopular ? 'lg:-mt-3' : ''
                }`}
                style={{
                  backgroundColor: isPopular ? '#0F0F12' : '#FFFFFF',
                  border: isPopular ? 'none' : '1px solid rgba(15,15,18,0.10)',
                  boxShadow: isPopular
                    ? '0 12px 48px rgba(240,90,40,0.25), 0 4px 16px rgba(15,15,18,0.20)'
                    : '0 1px 3px rgba(15,15,18,0.04)',
                }}
              >
                {/* Orange top cap */}
                <div
                  style={{
                    height: '3px',
                    backgroundColor: '#F05A28',
                  }}
                  aria-hidden="true"
                />

                {/* Popular ribbon */}
                {isPopular && (
                  <div
                    className="absolute"
                    style={{
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: '#B23E13',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div className="flex-1 flex flex-col p-7">
                  <p
                    className="font-fj-body font-semibold"
                    style={{
                      color: isPopular ? '#FAFAF7' : '#0F0F12',
                      fontSize: '0.9375rem',
                      letterSpacing: '0.005em',
                    }}
                  >
                    {tier.name}
                  </p>

                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <p
                      className="fj-display font-bold"
                      style={{
                        color: '#F05A28',
                        fontSize: isContact ? '1.5rem' : '2rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {tier.price}
                    </p>
                    {tier.cadence && (
                      <p
                        className="font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.70)' : 'rgba(15,15,18,0.55)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {tier.cadence}
                      </p>
                    )}
                  </div>

                  <p
                    className="mt-4 font-fj-body"
                    style={{
                      color: isPopular ? 'rgba(250,250,247,0.80)' : 'rgba(15,15,18,0.70)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.55,
                    }}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-fj-body"
                        style={{
                          color: isPopular ? 'rgba(250,250,247,0.85)' : 'rgba(15,15,18,0.80)',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        >
                          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="#FFFFFF"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Link
                      href={tier.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-fj-body text-sm font-semibold transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        background: isPopular ? '#B23E13' : 'transparent',
                        color: isPopular ? '#FFFFFF' : '#B23E13',
                        border: isPopular ? 'none' : '1.5px solid #B23E13',
                        outlineColor: '#F05A28',
                        boxShadow: isPopular
                          ? '0 4px 16px rgba(178,62,19,0.30)'
                          : 'none',
                      }}
                    >
                      {tier.ctaLabel}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="mt-10 text-center font-fj-body"
          style={{
            color: 'rgba(15,15,18,0.55)',
            fontSize: '0.8125rem',
            letterSpacing: '0.04em',
            fontWeight: 500,
          }}
        >
          Milestone-paid. Full code ownership from day one. No required retainers.
        </p>
      </div>
    </section>
  );
}

/**
 * CaseStudyPlaceholder - placeholder block for the testimonial slot. Real
 * client case studies land in PR #3 (Belle Maison, GroFresh Agro, Impulse
 * Branding, RDB Travels, Shevvaa). For PR #2 we ship a transparent placeholder
 * that does not pretend to have testimonials it does not have.
 */
function CaseStudyPlaceholder() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[860px] px-6 md:px-8 text-center">
        <p className="fj-eyebrow">CASE STUDIES</p>
        <h2
          className="fj-display font-semibold text-fj-ink mt-3"
          style={{
            fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          Real client AI-visibility case studies land Q3 2026.
        </h2>
        <p
          className="mt-5 mx-auto max-w-[640px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          We are shipping the first five named case studies (Belle Maison, GroFresh Agro, Impulse Branding, RDB Travels and Shevvaa) alongside hard before and after metrics. In the meantime, talk to Bhavesh for live references and walk-throughs of work in flight.
        </p>
        <div className="mt-8">
          <Link
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-fj-body text-sm font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: '#B23E13',
              boxShadow: '0 4px 16px rgba(178,62,19,0.25)',
              outlineColor: '#F05A28',
            }}
          >
            Ask Bhavesh for references
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * AiSeoExplained - answer-first definitional block (added 2026-07-25, additive GEO pass).
 * Sits directly after the hero so AI engines can lift a clean, plain-language definition
 * of AI SEO. Mirrors the sibling service pages' "EXPLAINED" answer-first pattern.
 */
function AiSeoExplained() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-[860px] px-6 md:px-8">
        <p className="fj-eyebrow">AI SEO EXPLAINED</p>
        <h2
          className="fj-display font-semibold text-fj-ink mt-3"
          style={{
            fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          What is AI SEO, and what does an AI SEO agency actually do?
        </h2>
        <p
          className="mt-5 font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          data-speakable
        >
          AI SEO is the work of getting your website named and quoted by AI answer tools like
          ChatGPT, Perplexity, Claude, Gemini, and Google&apos;s AI Overviews. An AI SEO agency does
          that work for you: it structures your pages so a clean answer can be lifted out, adds
          schema code machines can read, and earns the third-party mentions those engines treat as
          proof you are credible. AI SEO services sit on the same foundation as regular SEO, clean
          site structure and real authority, then add the answer layer on top. FactoryJet is an AI
          SEO company built around exactly that split, and the fastest way to compare AI SEO agencies
          is to ask each one for a per-engine citation count rather than a rankings screenshot.
        </p>
        <div className="mt-6 border-l-2 pl-5 py-1" style={{ borderLeftColor: '#F05A28' }}>
          <p
            className="fj-display font-semibold text-fj-ink"
            style={{ fontSize: '1.1875rem', lineHeight: 1.4, letterSpacing: '-0.02em' }}
          >
            In one line: regular SEO helps you rank in a list of blue links. AI SEO helps you get
            picked as the answer.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * AI_SEARCH_STATS - cited AI-search data points (added 2026-07-25, additive GEO pass).
 * Every figure links to a real, resolving source that was opened and verified.
 */
const AI_SEARCH_STATS = [
  {
    value: '8%',
    label:
      'Share of Google searches where people click through to a website when an AI summary appears, against 15% when there is no AI summary. Links inside the summary itself get clicked just 1% of the time.',
    sourceUrl:
      'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
    sourceLabel: 'Pew Research Center, 2025',
  },
  {
    value: '2 billion',
    label:
      'People a month now use Google AI Overviews, the AI answer box that sits above the blue links, up from 1.5 billion earlier in 2025.',
    sourceUrl:
      'https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/',
    sourceLabel: 'Google via TechCrunch, 2025',
  },
  {
    value: '~800M',
    label:
      'People use OpenAI ChatGPT, with the company saying close to 10% of the world now uses its tools. More buyers start their research inside an AI assistant every quarter.',
    sourceUrl:
      'https://fortune.com/2025/04/14/sam-altman-openai-user-base-doubled-few-weeks-10-of-world-uses-system/',
    sourceLabel: 'Fortune / OpenAI, 2025',
  },
];

/**
 * AiSearchStats - cited-stats band (added 2026-07-25, additive GEO pass).
 * Backs the "growing share of US search happens inside AI" claim with resolving sources.
 * Large orange numerals; small #B23E13 source links (contrast >= 4.5:1 on white).
 */
function AiSearchStats() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[760px]">
          <p className="fj-eyebrow">THE NUMBERS</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            The AI answer layer is already too big to ignore.
          </h2>
          <p
            className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Three data points on where US search is heading. Every figure links to the original source.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AI_SEARCH_STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border p-7"
              style={{
                borderColor: 'rgba(15,15,18,0.10)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
                borderTop: '3px solid #F05A28',
              }}
            >
              <p
                className="fj-display font-bold"
                style={{
                  color: '#F05A28',
                  fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {s.value}
              </p>
              <p
                className="mt-4 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.55 }}
              >
                {s.label}
              </p>
              <a
                href={s.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-fj-mono font-semibold"
                style={{ fontSize: '11px', letterSpacing: '0.04em', color: '#B23E13' }}
              >
                <svg width="10" height="10" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {s.sourceLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/**
 * GeoAeoServices - covers generative engine optimization services and answer
 * engine optimization services as genuine content rather than a keyword dump.
 * Added 2026-07-26 to close the GEO/AEO gap flagged in the keyword brief.
 */
function GeoAeoServices() {
  const COLUMNS = [
    {
      title: 'Generative engine optimization (GEO)',
      body:
        'Getting your brand named inside answers written by ChatGPT, Perplexity, Claude and Gemini. A generative engine optimization agency that only ever shows you Google data is not doing this part of the job.',
      items: [
        'Per-engine citation baseline, then monthly tracking',
        'Answer-first content architecture on commercial pages',
        'Entity work so a model knows what your business actually is',
        'Crawl access for GPTBot, ClaudeBot and PerplexityBot',
      ],
    },
    {
      title: 'Answer engine optimization (AEO)',
      body:
        'Getting your content into direct answers: Google AI Overviews, featured snippets, and the answer box any engine puts above its links. Answer engine optimization services live or die on whether a machine can lift a clean short answer out of your page.',
      items: [
        'FAQPage, HowTo and Article schema in JSON-LD',
        'Question-shaped headings on every money page',
        'AI Overview appearance tracking, reported monthly',
        'Featured snippet formatting on informational pages',
      ],
    },
    {
      title: 'ChatGPT SEO and AI search optimization',
      body:
        'The practical version of both, aimed at where your buyers actually ask. SEO for ChatGPT is mostly crawl access, plus extractability, plus being present in the web results it searches behind the scenes. AI driven SEO services that skip the third one are selling half a method.',
      items: [
        'Prompt-set testing against your real buyer questions',
        'Web-result presence, which ChatGPT leans on heavily',
        'Perplexity source-credibility work',
        'Gemini and Google AI Overview coverage',
      ],
    },
  ];

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[820px]">
          <p className="fj-eyebrow">GEO + AEO</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            Generative engine optimization services and answer engine optimization services, on one
            retainer.
          </h2>
          <p
            className="mt-4 max-w-[680px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Two acronyms, one workflow. Here is what each half actually covers, and why we refuse to
            bill them as separate products.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border p-7"
              style={{
                borderColor: 'rgba(15,15,18,0.10)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
                borderTop: '3px solid #F05A28',
              }}
            >
              <h3
                className="fj-display font-semibold text-fj-ink"
                style={{ fontSize: '1.1875rem', lineHeight: 1.3, letterSpacing: '-0.015em' }}
              >
                {col.title}
              </h3>
              <p
                className="mt-3 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                {col.body}
              </p>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-fj-body"
                    style={{ color: 'rgba(15,15,18,0.78)', fontSize: '0.875rem', lineHeight: 1.5 }}
                  >
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: '#B23E13' }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="mt-8 max-w-[760px] font-fj-body"
          style={{ color: 'rgba(15,15,18,0.72)', fontSize: '1rem', lineHeight: 1.65 }}
        >
          One retainer, one scope, one invoice. If a generative engine optimization company quotes
          GEO on top of AI SEO, ask what sits in the second line item that is not already in the
          first. Usually the answer is nothing.
        </p>
      </div>
    </section>
  );
}

/**
 * CompetitorField - names the real agencies on these SERPs, cites their
 * real page-1 keywords, and states plainly where FactoryJet is behind.
 * Added 2026-07-26.
 */
function CompetitorField() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#FAFAF7',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[820px]">
          <p className="fj-eyebrow">THE FIELD</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            US AI SEO agencies compared: where each one is strong, and where we differ.
          </h2>
          <p
            className="mt-4 max-w-[720px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            These seven show up repeatedly on the US results pages for AI SEO terms. The keyword
            positions and volumes below are real, pulled from DataForSEO on 26 July 2026. We have
            included the ones that beat us, because a comparison that only flatters the author is
            not a comparison.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COMPETITORS.map((c) => (
            <div
              key={c.domain}
              className="rounded-2xl border p-7"
              style={{
                borderColor: 'rgba(15,15,18,0.10)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
              }}
            >
              <h3
                className="fj-display font-semibold text-fj-ink"
                style={{ fontSize: '1.25rem', lineHeight: 1.25, letterSpacing: '-0.015em' }}
              >
                {c.name}
              </h3>
              <p
                className="mt-1 font-fj-mono font-semibold"
                style={{ fontSize: '11px', letterSpacing: '0.04em', color: '#B23E13' }}
              >
                {c.domain}
              </p>
              <p
                className="mt-4 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.78)', fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                {c.strength}
              </p>
              <p
                className="mt-3 border-l-2 pl-4 font-fj-body"
                style={{
                  borderLeftColor: '#F05A28',
                  color: 'rgba(15,15,18,0.72)',
                  fontSize: '0.875rem',
                  lineHeight: 1.55,
                }}
              >
                <span className="font-semibold">Page one today: </span>
                {c.proof}
              </p>
              <p
                className="mt-3 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                {c.difference}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl border p-7 md:p-9"
          style={{
            borderColor: 'rgba(240,90,40,0.30)',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
          }}
        >
          <h3
            className="fj-display font-semibold text-fj-ink"
            style={{ fontSize: '1.375rem', lineHeight: 1.25, letterSpacing: '-0.02em' }}
          >
            Where FactoryJet sits as an AI SEO company, honestly.
          </h3>
          <p
            className="mt-4 max-w-[820px] font-fj-body"
            style={{ color: 'rgba(15,15,18,0.78)', fontSize: '1rem', lineHeight: 1.7 }}
          >
            We have 44 referring domains. Coalition Technologies, which also turns up on these
            results pages, has somewhere near 2,800. Authority is our binding constraint, and it is
            the reason we compete on low-competition long-tail terms and on delivery model rather
            than on brute domain strength. Our strongest US positions right now are tenth for local
            seo nashville and eighth for seo agency austin texas. Those come from the same dataset
            that produced the cards above.
          </p>
          <p
            className="mt-4 max-w-[820px] font-fj-body"
            style={{ color: 'rgba(15,15,18,0.78)', fontSize: '1rem', lineHeight: 1.7 }}
          >
            That is the trade. You get a smaller shop where the founder runs the account and the
            reporting is per engine rather than per dashboard. You do not get the domain weight of a
            twenty-year-old incumbent. If the second thing matters more to you, hire the incumbent,
            and go in knowing what you bought.
          </p>
          <p
            className="mt-5 font-fj-body"
            style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Want a ranked shortlist instead of a hire? Our{' '}
            <Link
              href="/blog/best-ai-seo-agencies-usa"
              className="font-semibold underline"
              style={{ color: '#B23E13' }}
            >
              roundup of the best AI SEO agencies in the USA
            </Link>{' '}
            reviews ten shops including several above. That page is for shortlisting. This one is
            for hiring.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page render
───────────────────────────────────────────────────────────────────────────── */

export default function AiSeoServicePage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-seo-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-seo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="ai-seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="ai-seo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-seo-competitor-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(competitorListSchema) }}
      />
      <script
        id="ai-seo-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />
      <main>

        {/* ─── 1. Hero ─────────────────────────────────────────────────────── */}
        <Hero
          formSlot={<HeroInlineForm region="us" source="us_services_ai_seo_hero" />}
          eyebrow="AI SEO AGENCY (USA)"
          headline={
            <>
              AI SEO agency for US businesses. <br className="hidden md:block" />
              Rank in Google. Get cited by ChatGPT.
            </>
          }
          lead="Our AI SEO services cover both signals on one retainer: classic Google rankings, plus citations inside ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews. Monthly reports you can read in five minutes."
          secondaryCta={{
            label: 'See pricing',
            href: '#pricing',
          }}
          trustItems={[
            'Senior engineers, not SDRs',
            'Month-to-month, no annual lock-in',
            'Code & data ownership from day one',
          ]}
        />

        {/* ─── 1b. AI SEO explained - answer-first definitional block (additive GEO pass) ─── */}
        <AiSeoExplained />

        {/* ─── 2. Stats row (custom, replaces BigThreeTrustBlock) ──────────── */}
        <StatsRow />

        {/* ─── 3. Service explanation - the SEO → AI SEO shift ─────────────── */}
        <ServiceExplanation
          eyebrow="THE AI SEARCH SHIFT"
          headline="Google rankings still matter. But they are not the whole story anymore."
          lead="A meaningful and growing share of US search traffic now happens inside AI assistants (ChatGPT, Perplexity, Claude, Gemini), and Google itself increasingly answers queries with AI Overviews above the blue links. If your site is not engineered to be cited by these engines, you are losing traffic that no traditional SEO audit will surface."
          body={
            <>
              <p
                className="mt-6 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
              >
                The mechanics that win in Google rankings are not the same mechanics that win citations in ChatGPT or Perplexity. AI engines extract structured answers, weight source credibility, and treat third-party citations as authority signals. Keyword density and backlink volume, the old playbook, matter less. Schema, structured Q&amp;A, and verifiable expertise matter more.
              </p>
              <p
                className="mt-4 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
              >
                Our retainers cover both signals. You get monthly reporting on AI-citation count per engine alongside traditional Google rank changes, so you can see which traffic source is moving and decide where to lean in.
              </p>
            </>
          }
          rightSlot={
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: 'rgba(15,15,18,0.10)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,15,18,0.04)',
              }}
            >
              <p
                className="font-fj-mono font-bold uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#B23E13' }}
              >
                Our approach
              </p>
              <p
                className="mt-4 fj-display font-bold"
                style={{
                  color: '#0F0F12',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Both signals, every month.
              </p>
              <p
                className="mt-3 font-fj-body font-semibold"
                style={{ color: '#0F0F12', fontSize: '1rem' }}
              >
                Google rankings AND AI citations on the same retainer.
              </p>
              <p
                className="mt-3 font-fj-body"
                style={{
                  color: 'rgba(15,15,18,0.65)',
                  fontSize: '0.875rem',
                  lineHeight: 1.55,
                }}
              >
                Most SEO agencies pick one. We treat both as a single integrated workflow because the underlying work (schema, structure, expert content, third-party citations) earns both kinds of traffic.
              </p>
            </div>
          }
        />

        {/* ─── 3a. GEO + AEO services detail ───────────────────────────────── */}
        <GeoAeoServices />

        {/* ─── 3b. Cited AI-search stats (additive GEO pass) ───────────────── */}
        <AiSearchStats />

        {/* ─── 4. Strategic dark - why old SEO misses AI ───────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY OLD SEO MISSES THE AI ERA"
          headline="Three reasons most SEO agencies are still optimizing for 2018."
          lead="The mechanics that win in Google rankings are not the same mechanics that win citations in ChatGPT, Perplexity, Claude, or Google AI Overviews. Here is what most SEO agencies are still missing."
          pillars={PILLARS}
        />

        {/* ─── 5. Service journey - 5-step AI SEO process ──────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR 5-STEP AI SEO PROCESS"
          headline="From audit to compounding citations, in 90 days."
          lead="Every engagement follows the same five-step process. The audit defines the roadmap. The roadmap drives the retainer. The retainer is measured monthly. No black boxes."
          stages={AI_SEO_JOURNEY}
          closingNote="Every step ships a deliverable. Every month you see what changed and what it cost."
        />

        {/* ─── 6. Comparison vs WebFX, Ignite, SEO Discovery ───────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet against three agencies you will actually meet on this search."
          lead="WebFX, Thrive Agency and Onely all appear on the US results pages for AI SEO terms. They are good at genuinely different things. This table is about delivery shape, not about who is better."
          columns={[
            { label: 'FactoryJet', isFactoryJet: true },
            { label: 'WebFX' },
            { label: 'Thrive Agency' },
            { label: 'Onely' },
          ]}
          rows={[
            {
              feature: 'Core strength',
              values: [
                'Answer-layer visibility across four AI engines',
                'Enterprise scale and in-house platform',
                'Full-service marketing across several languages',
                'Technical SEO, rendering and crawl depth',
              ],
            },
            {
              feature: 'AI engines reported monthly',
              values: [
                'ChatGPT + Perplexity + Claude + Gemini + Google AIO',
                'Google AIO focus',
                'Google AIO focus',
                'Technical foundations rather than per-engine counts',
              ],
            },
            {
              feature: 'Who runs your account',
              values: [
                'The founder plus senior engineers',
                'Account team',
                'Account team',
                'Technical specialists',
              ],
            },
            {
              feature: 'Code & data ownership Day 1',
              values: [
                <CompareIcon key="fj-data" kind="yes" />,
                <CompareIcon key="webfx-data" kind="partial" />,
                <CompareIcon key="thrive-data" kind="partial" />,
                <CompareIcon key="onely-data" kind="partial" />,
              ],
            },
            {
              feature: 'Contract terms',
              values: [
                'Month to month',
                'Longer terms common',
                'Promotes no long-term contracts',
                'Project and retainer',
              ],
            },
            {
              feature: 'Authority footprint',
              values: [
                'Challenger: 44 referring domains',
                'Established incumbent',
                'Established incumbent',
                'Established specialist',
              ],
            },
          ]}
          footer="Delivery-model comparison based on publicly stated positioning and on DataForSEO US SERP data pulled 2026-07-26. No pricing is compared because none of these agencies publish rates."
        />

        {/* ─── 6b. Named competitor field (real page-1 keywords) ───────── */}
        <CompetitorField />

        {/* ─── 7. Pricing - custom 4-card grid ─────────────────────────────── */}
        <AiSeoPricingGrid />

        {/* ─── 8. Industries served (DARK) ─────────────────────────────────── */}
        <IndustriesGrid />

        {/* ─── 9. Case study placeholder (light buffer between dark sections) */}
        <CaseStudyPlaceholder />

        {/* ─── 9b. Free AI Visibility Checker - lead magnet funnel ───────── */}
        <AiVisibilityCtaBand />

        {/* ─── 10. FAQ - 21 across 5 categories ────────────────────────────── */}
        <FAQ
          eyebrow="AI SEO FAQ"
          headline="Fifty-two questions, answered the way Bhavesh would on the discovery call."
          lead="If your question is not below, send a written brief. Answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 11. Closing CTA - TalkToFounder full dark ───────────────────── */}
        <TalkToFounder
          variant="full"
          theme="dark"
          eyebrow="FOUNDER ACCESS"
        />

      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
