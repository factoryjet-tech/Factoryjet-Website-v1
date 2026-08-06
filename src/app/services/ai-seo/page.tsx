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
              FAQ block: 23 FAQs across 6 categories.
              Closing CTA: TalkToFounder (full + dark).
   Schema:    WebPage + BreadcrumbList + Service + FAQPage + ItemList + Organization JSON-LD.
              Every schema const declared below is rendered into a script tag. Do not add
              one without wiring it up, and do not emit the same schema twice.
   Hreflang:  aiSeoAlternates (bilingual cluster - see src/data/hreflangMap.ts).

   2026-08-06 deepening pass. Targets "ai seo agency" and "ai seo services", both KD 0-2,
   both sitting at position 8-14 on 20,300 impressions and 50 clicks in 90 days.
     - Answer-first block under the hero rewritten so "what is AI SEO" and "what does an
       AI SEO agency do" both resolve inside the first two sentences.
     - New AiSeoChanges section: 36 named-capability list items using real crawler,
       schema.org and tooling names. List density is the one rulebook rule the site
       measurably fails (73 li against a 110 benchmark).
     - Three ChatGPT answers corrected. They named GPTBot as the citation lever, but
       OpenAI documents GPTBot as training-only and OAI-SearchBot as the search gate.
     - FAQ consolidated 52 -> 23 to pay for the additions and pull the page back under
       the depth ceiling in docs/AI-SEO-RULEBOOK.md rule 8. Merges, not deletions,
       except for the DIY and tool-shopping questions, which are blog intent.
     - Duplicate webPageSchema script tag removed. Person author added.

   2026-08-06 verification pass (same day). The deepening pass left the page at roughly
   5,670 rendered words, over the hard 5,000 ceiling in rule 8. Fixed by trimming prose
   across sections rather than deleting any section: 2 competitor cards dropped from
   COMPETITORS (SEO.co and Yes Optimist, neither an AI-search competitor), 5 near-duplicate
   FAQs merged or removed, and roughly 400 words of padding cut from the journey, pillars,
   stats, comparison and GEO/AEO blocks. Projected rendered main ~4,890.
   Also corrected here:
     - "Most retainers run 18+ months voluntarily" removed from StatsRow. Unverifiable
       client-tenure claim, and the FAQ version of it had already been cut.
     - "Coalition Technologies ... somewhere near 2,800 referring domains" removed. Third
       party metric we never verified.
     - Case-study block no longer promises a specific quarter that has already arrived.
     - Pricing footnote said "Milestone-paid. No required retainers." on a page selling
       three retainers. Corrected to month-to-month.
     - One en dash in PILLARS removed (house rule is no em or en dashes in copy).
     - GEO/AEO h2 no longer exact-matches the head term of the sibling page at
       /services/generative-engine-optimization. That page owns it; this one links to it.
───────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI SEO Agency in the USA: AI SEO Services and AI Search Visibility',
  description:
    'AI SEO agency for US businesses. FactoryJet is the AI SEO company behind AI SEO services that get you cited by ChatGPT, Perplexity, Claude and Google AI Overviews, on one month-to-month retainer.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI SEO Agency in the USA: AI SEO Services and AI Search Visibility',
    description:
      'AI SEO agency for US businesses. FactoryJet is the AI SEO company behind AI SEO services that get you cited by ChatGPT, Perplexity, Claude and Google AI Overviews, on one month-to-month retainer.',
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
    title: 'AI SEO Agency in the USA: AI SEO Services and AI Search Visibility',
    description:
      'AI SEO agency for US businesses. AI SEO services on one retainer, built so ChatGPT, Perplexity, Claude and Google AI Overviews cite you by name.',
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
      'Traditional SEO chases keyword rankings. AI engines extract a structured answer and cite the most credible source. Keyword-rich content that is not structured for extraction does not get cited, even at position one.',
  },
  {
    title: 'Citations need schema, not just authority',
    body:
      'Google AI Overviews and Perplexity favour schema-rich answers with clear question and answer pairs. Old-school SEO buries the answer in long prose. Modern AI SEO surfaces it in FAQPage, HowTo and Article markup a machine can lift verbatim.',
  },
  {
    title: 'Multi-engine coverage is a different competence',
    body:
      'Each engine has its own retrieval mechanics. ChatGPT leans on web search, Perplexity ranks by source credibility, Claude blends training with live fetch. Optimising for one does not optimise for all.',
  },
];

const AI_SEO_JOURNEY: ReadonlyArray<ServiceJourneyStage> = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We map every AI citation you hold today, the gaps competitors fill, and the fixes that close them. Output: a GEO and AEO scorecard plus a 90-day roadmap.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'We restructure schema, FAQ blocks, HowTo snippets and content hierarchy so engines can extract answers verbatim. Structural surgery, not a content rewrite.',
  },
  {
    number: '03',
    title: 'Content',
    description:
      'Four to eight AI-citable articles a month, written to answer what your buyers ask AI assistants. Real authorship, real depth, no LLM boilerplate.',
  },
  {
    number: '04',
    title: 'Distribution',
    description:
      'Third-party citations from sources the engines already trust: publications, podcasts, expert directories, data partnerships. Citations beget citations.',
  },
  {
    number: '05',
    title: 'Measure',
    description:
      'Monthly: citation count per engine, Google rank changes, revenue attribution. Scope is adjusted monthly. No annual lock-in.',
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
   FAQ data - 23 buyer questions across 6 categories.

   Consolidated 2026-08-06 from 52, then trimmed again in the same-day verification pass.
   The old set had genuine overlap (four separate
   entries answered "GEO vs SEO", three answered "how do I show up in ChatGPT")
   and it pushed the page to roughly 7,000 rendered words, well past the depth
   ceiling in docs/AI-SEO-RULEBOOK.md rule 8. Near-duplicates were merged rather
   than deleted, and the DIY/tool-shopping questions were dropped because they are
   blog intent, not agency-buying intent.

   Two entries were added: the robots.txt crawler question and the LLM SEO
   question. Three ChatGPT answers were corrected: they told readers to unblock
   GPTBot, but OpenAI documents GPTBot as training-only and OAI-SearchBot as the
   crawler that actually gates ChatGPT search answers.

   FAQPage JSON-LD is generated by mapping over this array. There is no second
   hand-written copy anywhere in this file. Keep it that way.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  // ── A. What AI SEO is (5) ──────────────────────────────────────────────
  {
    category: 'what',
    question: 'What is AI SEO?',
    answer:
      'AI SEO is the practice of optimizing a website so AI engines cite it as a source when they answer a question. It overlaps with traditional SEO, you still need clean structure, fast pages and real authority, then adds three things on top: retrieval-crawler access, schema-rich answer formatting, and third-party citations the engines read as credibility.',
  },
  {
    category: 'what',
    question: 'What is the difference between GEO, AEO, LLM SEO and AI SEO?',
    answer:
      'Mostly the label. GEO, generative engine optimization, leans toward engines that write answers: ChatGPT, Perplexity, Claude and Gemini. AEO, answer engine optimization, leans toward direct answers including Google AI Overviews and featured snippets. LLM SEO and AI search optimization are the same job again. Buy the work, not the acronym. One retainer covers all of it.',
  },
  {
    category: 'what',
    question: 'How does AI SEO differ from traditional SEO, and do I lose my Google rankings?',
    answer:
      'Traditional SEO optimizes for position in a list of links. AI SEO optimizes for being quoted inside a generated answer. You do not trade one for the other. Most of the work that earns a citation, schema, structure, expert content and third-party mentions, also improves Google position, so every monthly report carries both numbers.',
  },
  {
    category: 'what',
    question: 'What does answer engine optimization do?',
    answer:
      'It makes one specific answer on your page liftable. An answer engine wants roughly 40 to 60 words that resolve the question, near the top of a clearly labelled section, backed by schema. AEO is the formatting half of AI SEO, and sold alone it fails, because it builds no authority.',
  },
  {
    category: 'what',
    question: 'How do I pick an AI SEO agency?',
    answer:
      'Three checks, and they filter fast. One: does the agency track citations across ChatGPT, Perplexity, Claude and Gemini, or only Google AI Overviews? Most track only Google. Two: does a senior practitioner run your account, or an account manager relaying to an unnamed team? Three: will they put a per-engine citation count in writing every month?',
  },

  // ── B. AI engines (5) ──────────────────────────────────────────────────
  {
    category: 'engines',
    question: 'Which AI engines do you optimize for?',
    answer:
      'All four major generative engines, ChatGPT, Perplexity, Claude and Gemini, plus Google AI Overviews. We track citation frequency in each one monthly. Most competitors focus on AI Overviews because it reuses their existing Google playbook. We treat ChatGPT and Perplexity as first-class targets, because that is where mid-market US buyers increasingly start their research.',
  },
  {
    category: 'engines',
    question: 'Which AI crawlers do I need to allow in robots.txt?',
    answer:
      'Name each one rather than relying on a wildcard. The retrieval crawlers that decide citation are OAI-SearchBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User and Googlebot. GPTBot and ClaudeBot are training crawlers, so blocking them is a rights decision rather than a visibility one. Google-Extended and Applebot-Extended control training and grounding separately. OpenAI says a robots.txt change takes roughly 24 hours to register.',
  },
  {
    category: 'engines',
    question: 'How do I rank in ChatGPT answers, and how does ChatGPT decide what to cite?',
    answer:
      'Four things, in order. Allow OAI-SearchBot, because OpenAI states that sites opted out of it will not be shown in ChatGPT search answers. Put a direct answer in the first 40 to 60 words under each heading so it can be lifted whole. Get into the ordinary web results ChatGPT searches behind the scenes. Then earn mentions on sites it already treats as reliable. Heavy client-side JavaScript hurts you more here than on Google.',
  },
  {
    category: 'engines',
    question: 'Is Perplexity worth optimizing for?',
    answer:
      'Yes, especially for B2B and research-heavy buying journeys. Perplexity shows its sources in every answer, which makes it the easiest engine to measure yourself against. People using it are usually deep in research and close to a decision, so cited traffic tends to convert better than typical blue-link traffic.',
  },
  {
    category: 'engines',
    question: 'How do I show up in Google AI Overviews, and why am I not getting one?',
    answer:
      'Two different problems. Showing up means answer-first formatting, schema, and enough authority that Google is comfortable quoting you. Seeing no Overview at all usually means Google judged the query too ambiguous, commercial or sensitive. Overviews also appear and vanish week to week, so judge it over a month, never a day.',
  },

  // ── C. Methodology (6) ─────────────────────────────────────────────────
  {
    category: 'method',
    question: 'What is included in the AI visibility audit?',
    answer:
      'Four parts. A GEO and AEO scan of how many citations you hold today across ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews. A competitive gap report showing where rivals get cited and you do not. A schema and crawl-access assessment listing what is missing or broken. And a 90-day roadmap in priority order, plus a strategy call with Bhavesh.',
  },
  {
    category: 'method',
    question: 'What schema do you add to my site?',
    answer:
      'At minimum: Organization with a sameAs list that genuinely resolves, WebPage with an honest dateModified, BreadcrumbList, Article with a named Person author, and FAQPage. HowTo where the topic is a real procedure. For stores, Product, Offer and AggregateRating. For services, Service. All in JSON-LD, all checked in Rich Results Test and the Schema Markup Validator before it deploys.',
  },
  {
    category: 'method',
    question: 'How do you produce AI-citable content?',
    answer:
      'Each article is briefed by a senior strategist, written by someone with verifiable expertise, edited for answer-extractability, and marked up with FAQPage, HowTo or Article schema. We do not ship LLM-generated boilerplate. Generic model output is exactly the thing that does not get quoted, and the engines are getting better at spotting it.',
  },
  {
    category: 'method',
    question: 'How do you acquire third-party citations, and do you do link building?',
    answer:
      'We pitch your named experts to industry publications, podcasts, expert directories and data partnerships that AI engines already crawl. It overlaps with link building, but the deliverable is a named mention and source attribution rather than anchor text. No bulk guest posts, no PBNs, nothing that trips Google spam policies.',
  },
  {
    category: 'method',
    question: 'What moves AI search visibility fastest?',
    answer:
      'Three levers, in this order. Unblock the retrieval crawlers. Add a clean answer block plus FAQPage schema to your top ten commercial pages. Get named on two or three third-party sites the engines already retrieve. That is weeks of work, not quarters. Everything after it is the slow compounding part, and there is no shortcut through that half.',
  },
  {
    category: 'method',
    question: 'Do you offer LLM SEO services, and is that the same as AI SEO?',
    answer:
      'Same work, different label. LLM SEO services means getting large language models to name your business in an answer, which is what our AI SEO services do. If a shop quotes AI SEO and LLM SEO as two separate line items, ask what sits in the second that is not already in the first. In our experience, nothing.',
  },

  // ── D. Measurement (2) ─────────────────────────────────────────────────
  {
    category: 'measure',
    question: 'How do you track AI citations?',
    answer:
      'We run scripted prompt sets across ChatGPT, Perplexity, Claude and Gemini for your target queries and log every citation we see. We also track Google AI Overview appearances and classic rank positions. The same prompt set runs on the same cadence, so month-to-month movement means something instead of reflecting a reworded question.',
  },
  {
    category: 'measure',
    question: 'What do I actually get in the monthly report?',
    answer:
      'Citation count per engine and query coverage against named competitors. Google rank changes, AI Overview appearances, impressions and clicks pulled from Search Console. Organic and AI-referral sessions with conversions where tracking is wired in. Each number ties back to a line on the 90-day roadmap, so you can see plan against actual.',
  },

  // ── E. Pricing & engagement (3) ────────────────────────────────────────
  {
    category: 'pricing',
    question: 'Why no annual contracts, and what happens if I cancel?',
    answer:
      'AI search shifts every quarter, so locking you into twelve months on a playbook that may need to change at month four is not how we want to work. You give one billing-cycle notice. We finish the current month, hand over all in-flight work, and transfer schema and content assets to your team. Everything we built is yours from day one.',
  },
  {
    category: 'pricing',
    question: 'Can I start with just the audit?',
    answer:
      'Yes. The AI visibility audit is a complete deliverable, and many clients use it as a one-time strategic input and implement the roadmap with their own team. If you continue into a retainer within 30 days, the audit fee is credited against your first month. Either way, you own all audit deliverables outright.',
  },
  {
    category: 'pricing',
    question: 'How is AI SEO priced in the US?',
    answer:
      'Almost nobody publishes a rate, and a rate without scope tells you nothing. What drives the number: how many pages need structural work, how competitive your money queries are, how many engines you want tracked, whether content is produced or only restructured, and whether citation work is in scope. All of that gets scoped on a call.',
  },

  // ── F. Agencies and scope (2) ──────────────────────────────────────────
  {
    category: 'compare',
    question: 'Why would I pick FactoryJet over a bigger AI SEO company?',
    answer:
      'Sometimes you should not, and it is fairer to say so. We have 53 referring domains. Established competitors on these results pages have thousands. If the safest logo on the invoice is your criterion, hire the incumbent. We win on delivery shape: the founder runs the account, you get per-engine citation counts instead of a rankings PDF, and terms are month to month.',
  },
  {
    category: 'compare',
    question: 'Is there a difference between generative engine optimization services and AI SEO services?',
    answer:
      'Not in practice. Generative engine optimization services describe the same work as AI SEO services, with a narrower emphasis on engines that write answers. If a generative engine optimization company quotes you one number for AI SEO and a second for GEO, ask what sits in the second line item that is not already in the first. Usually the honest answer is nothing.',
  },
];

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'what', label: 'What is AI SEO' },
  { key: 'engines', label: 'AI engines' },
  { key: 'method', label: 'Methodology' },
  { key: 'measure', label: 'Measurement' },
  { key: 'pricing', label: 'Pricing & engagement' },
  { key: 'compare', label: 'Agencies & tools' },
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
      'The widest footprint on this set of results, and the name that turned up most often. Full-service: SEO, paid, social and web under one roof.',
    proof:
      'Position 1 for agentur marketing (720/mo) and agences marketing digital (590/mo), German and French queries, plus 5 star google rated (320/mo).',
    difference:
      'Those rankings say broad multi-language marketing shop, not AI-search boutique. If you want one vendor for every channel, that is a rational pick. We only do search, and we report citations per engine.',
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
      'Appears on five of the AI SEO results pages we tracked, averaging position 11.4.',
    difference:
      'With WebFX you get an account team. With us you get the founder on the call. They have depth we do not, and we have directness they cannot offer at their size.',
  },
  {
    name: 'Spicy Margarita',
    domain: 'spicymargarita.co',
    url: 'https://www.spicymargarita.co/',
    strength:
      'The closest thing here to an AI-SEO native, and the only one in this set on page one for the exact term this page targets.',
    proof:
      'Position 3 for ai seo agency (1,000/mo), position 3 for ai powered seo services (70/mo), position 2 for seo briefs (70/mo).',
    difference:
      'They are ahead of us on this query today and we will not pretend otherwise. We differ on engine coverage breadth, and on shipping the site changes ourselves rather than handing over a brief.',
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
      'If AI crawlers cannot render your pages, hire the technical specialist. If nothing on your site is quotable once it is rendered, that is the half we do.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema (WebPage + BreadcrumbList + Service + FAQPage + Organization)
───────────────────────────────────────────────────────────────────────────── */

/**
 * PAGE_MODIFIED - the honest last-substantive-edit date. Update it only when the
 * page content actually changes, never on a routine build.
 */
const PAGE_MODIFIED = '2026-08-06';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-seo#webpage',
  dateModified: PAGE_MODIFIED,
  name: 'AI SEO Agency in the USA: AI SEO Services and AI Search Visibility',
  url: 'https://factoryjet.com/services/ai-seo',
  description:
    'AI SEO agency for US businesses. AI SEO services, generative engine optimization and answer engine optimization on one retainer, covering ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.',
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhaveshbarot/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  about: { '@id': 'https://factoryjet.com/#organization' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]'],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://factoryjet.com/#website',
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
              body: 'Cancel with one billing-cycle notice. You stay because the citation count is moving, not because a contract says you have to.',
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
            Start with an audit. Move into a retainer when you see momentum. No annual contracts, and full code and data ownership from day one.
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
          Month-to-month. Full code and data ownership from day one. No annual lock-in.
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
          Named AI-visibility case studies are still in progress.
        </h2>
        <p
          className="mt-5 mx-auto max-w-[640px] font-fj-body text-fj-neutral-600"
          style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          We would rather publish nothing than publish a number we cannot show the working for. Until the first write-ups are ready, ask Bhavesh for live references.
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
          AI SEO is the work of getting a website named and quoted inside AI-generated answers, in
          ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews. An AI SEO agency does four
          jobs for you: it opens crawler access so retrieval bots like OAI-SearchBot and
          Claude-SearchBot can read the site, it restructures pages so a clean short answer can be
          lifted out, it ships schema.org markup in JSON-LD that machines can parse, and it earns the
          third-party mentions those engines treat as proof you are credible. AI SEO services sit on
          the same foundation as regular SEO, then add the answer layer on top.
        </p>
        <ul className="mt-6 space-y-2.5" role="list">
          {[
            'Access: robots.txt rules that name every retrieval bot instead of leaving them to a wildcard',
            'Structure: question-shaped headings with a 40 to 60 word answer directly underneath',
            'Markup: Organization, WebPage, BreadcrumbList, FAQPage, HowTo and Article in JSON-LD',
            'Credibility: named third-party citations on sources the engines already retrieve',
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 font-fj-body"
              style={{ color: 'rgba(15,15,18,0.78)', fontSize: '0.9375rem', lineHeight: 1.55 }}
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
        <div className="mt-6 border-l-2 pl-5 py-1" style={{ borderLeftColor: '#F05A28' }}>
          <p
            className="fj-display font-semibold text-fj-ink"
            style={{ fontSize: '1.1875rem', lineHeight: 1.4, letterSpacing: '-0.02em' }}
          >
            In one line: regular SEO helps you rank in a list of blue links. AI SEO helps you get
            picked as the answer.
          </p>
          <p
            className="mt-3 font-fj-body"
            style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            The fastest way to compare AI SEO agencies is to ask each one for a per-engine citation
            count rather than a rankings screenshot.
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
      'Of Google searches where an AI summary appears, people click through to a website, against 15% when there is no summary. Links inside the summary get clicked 1% of the time.',
    sourceUrl:
      'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
    sourceLabel: 'Pew Research Center, 2025',
  },
  {
    value: '2 billion',
    label:
      'People a month use Google AI Overviews, the answer box above the blue links, up from 1.5 billion earlier in 2025.',
    sourceUrl:
      'https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/',
    sourceLabel: 'Google via TechCrunch, 2025',
  },
  {
    value: '~800M',
    label:
      'People use ChatGPT, with OpenAI saying close to 10% of the world uses its tools. More buyers start research inside an AI assistant every quarter.',
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
            Three data points on where US search is heading. Every figure links to its source.
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
        'Getting your brand named inside answers written by ChatGPT, Perplexity, Claude and Gemini. An agency that only ever shows you Google data is not doing this part.',
      items: [
        'Per-engine citation baseline, then monthly tracking',
        'Answer-first content architecture on commercial pages',
        'Entity work in Wikidata and the Knowledge Graph so a model knows what you are',
        'Retrieval access for OAI-SearchBot, Claude-SearchBot and PerplexityBot',
      ],
    },
    {
      title: 'Answer engine optimization (AEO)',
      body:
        'Getting your content into direct answers: Google AI Overviews, featured snippets, and the answer box above the links. Answer engine optimization lives or dies on whether a machine can lift a clean short answer out of your page.',
      items: [
        'FAQPage, HowTo and Article schema in JSON-LD',
        'Question-shaped headings on every money page',
        'AI Overview appearance tracking, reported monthly',
        'Featured snippet formatting on informational pages',
        'Schema validated in Rich Results Test before it ships',
      ],
    },
    {
      title: 'ChatGPT SEO and AI search optimization',
      body:
        'The practical version of both, aimed at where your buyers actually ask. SEO for ChatGPT is crawl access, plus extractability, plus being present in the web results it searches behind the scenes. Skip the third and you are selling half a method.',
      items: [
        'Prompt-set testing against your real buyer questions',
        'Web-result presence, which ChatGPT leans on heavily',
        'Bing Webmaster Tools and IndexNow wired up',
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
            GEO and AEO are the two halves of AI SEO, and we run both on one retainer.
          </h2>
          <p
            className="mt-4 max-w-[680px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Two acronyms, one workflow. Here is what each half covers, and why we refuse to bill
            them as separate products.
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
          One retainer, one scope, one invoice. If a shop quotes GEO on top of AI SEO, ask what is
          in the second line item that is not already in the first. For the GEO half on its own, our{' '}
          <Link
            href="/services/generative-engine-optimization"
            className="font-semibold underline"
            style={{ color: '#B23E13' }}
          >
            generative engine optimization services
          </Link>{' '}
          page covers it in detail.
        </p>
      </div>
    </section>
  );
}

/**
 * AI_SEO_CHANGES - the named-capability block (added 2026-08-06). Real crawler
 * names, real schema.org types, real tooling. Deliberately list-heavy: a list
 * item is a self-contained retrievable unit, and list density is the structural
 * signal we measured ourselves as being short on.
 *
 * Crawler roles below are taken from the vendors' own documentation, fetch-verified
 * 2026-08-06. Do not edit a bot's described role without re-reading the source:
 *   OpenAI     https://developers.openai.com/api/docs/bots
 *   Anthropic  https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
 */
const AI_SEO_CHANGES = [
  {
    title: 'Retrieval access in robots.txt',
    body:
      'The cheapest way to go invisible is to block the wrong bot by accident. Retrieval crawlers and training crawlers are different things.',
    items: [
      'OAI-SearchBot allowed, because that is the crawler gating ChatGPT search answers',
      'GPTBot decided on purpose, since OpenAI documents it as training only',
      'ChatGPT-User and OAI-AdsBot handled as their own separate cases',
      'Claude-SearchBot and Claude-User named outright, never left to a wildcard',
      'ClaudeBot treated as the training crawler Anthropic says it is',
      'PerplexityBot and Perplexity-User both listed by name',
      'Google-Extended and Applebot-Extended set to match your actual rights policy',
      'Bingbot access checked, since ChatGPT search leans on Bing-style web results',
      'Content-Signal line kept consistent with the allow and disallow rules above it',
    ],
  },
  {
    title: 'Structured data that matches the page',
    body:
      'Google requires markup to describe what a reader actually sees. Schema that contradicts the visible page is a trust problem, not a shortcut.',
    items: [
      'Organization with a sameAs list of profiles that genuinely resolve',
      'WebPage carrying an honest dateModified rather than a build timestamp',
      'Article with a real named author of type Person',
      'BreadcrumbList on every nested URL',
      'FAQPage generated from the same array the visible FAQ renders',
      'HowTo only where the topic is genuinely a procedure',
      'Service, Product, Offer and AggregateRating where they truthfully apply',
      'ItemList on comparison and roundup pages',
      'Every block checked in Rich Results Test and the Schema Markup Validator',
    ],
  },
  {
    title: 'Indexing, freshness and entity signals',
    body:
      'Getting quoted starts with getting fetched, then re-fetched. Most sites lose here quietly, through stale sitemaps and redirect chains nobody checks.',
    items: [
      'Sitemap index split by section, with no redirecting URLs listed inside it',
      'IndexNow pings so Bing and Yandex see a change the same day',
      'Search Console URL Inspection API used to confirm the rendered version',
      'Bing Webmaster Tools verified, because it feeds more than Bing',
      'Canonical tags plus hreflang with a real x-default, not a guessed one',
      'Redirects kept to a single 301 hop, never a two-hop chain',
      'Wikidata and Knowledge Graph entity work so a model knows who you are',
      'llms.txt published, with the honest note that no engine is known to read it',
      'Business name, address and profile data kept consistent across crawled sources',
    ],
  },
  {
    title: 'Rendering, speed and page hygiene',
    body:
      'AI crawlers are less forgiving than a browser. Anything that only exists after JavaScript runs is, to most of them, content you did not publish.',
    items: [
      'Load-bearing copy server-rendered into the initial HTML',
      'Nothing important appearing only after hydration',
      'Core Web Vitals held at INP under 200ms and CLS near zero',
      'LCP element identified, then made text or a preloaded image',
      'Answer blocks placed inside the first third of the page',
      'Exactly one h1, strict h1 to h2 to h3 descent, no skipped levels',
      'Tables and lists shipped as real markup instead of styled divs',
      'Alt text written for meaning rather than for keywords',
      'Accordion and tab content still present in the DOM when collapsed',
    ],
  },
];

/**
 * AiSeoChanges - capability-density section (added 2026-08-06). Cream background,
 * white cards, orange top cap: same card pattern as GeoAeoServices and AiSearchStats.
 */
function AiSeoChanges() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="max-w-[820px]">
          <p className="fj-eyebrow">WHAT ACTUALLY CHANGES</p>
          <h2
            className="fj-display font-semibold text-fj-ink mt-3"
            style={{
              fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            What an AI SEO agency changes on your site, named item by named item.
          </h2>
          <p
            className="mt-4 max-w-[720px] font-fj-body text-fj-neutral-600"
            style={{ fontSize: '1rem', lineHeight: 1.65 }}
          >
            Four groups of work, thirty-six specific changes. If an AI SEO company cannot hand you a
            list this specific, you are buying a report rather than an implementation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {AI_SEO_CHANGES.map((group) => (
            <div
              key={group.title}
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
                style={{ fontSize: '1.25rem', lineHeight: 1.25, letterSpacing: '-0.015em' }}
              >
                {group.title}
              </h3>
              <p
                className="mt-3 font-fj-body"
                style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
              >
                {group.body}
              </p>
              <ul className="mt-5 space-y-2.5" role="list">
                {group.items.map((item) => (
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
          className="mt-8 max-w-[820px] font-fj-body"
          style={{ color: 'rgba(15,15,18,0.72)', fontSize: '1rem', lineHeight: 1.65 }}
        >
          One honest caveat, because it cuts against how this service is usually sold. Google states
          in its own documentation that you do not need special AI files or special schema.org markup
          to appear in AI Overviews or AI Mode. The list above is not a secret ruleset, it is
          ordinary excellent SEO plus extractability.{' '}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
            style={{ color: '#B23E13' }}
          >
            Google Search Central, AI features and your website
          </a>
          .
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
            These five show up repeatedly on the US results pages for AI SEO terms. The positions
            and volumes below are real, pulled from DataForSEO on 26 July 2026. The ones that beat
            us are in here too.
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
            We have 53 referring domains, measured 3 August 2026. The established names on these
            results pages have far more. Authority is our binding constraint, which is why we
            compete on low-competition long-tail terms and on delivery model rather than brute
            domain strength. Our strongest US positions right now are tenth for local seo nashville
            and eighth for seo agency austin texas.
          </p>
          <p
            className="mt-4 max-w-[820px] font-fj-body"
            style={{ color: 'rgba(15,15,18,0.78)', fontSize: '1rem', lineHeight: 1.7 }}
          >
            That is the trade. A smaller shop, the founder on the account, reporting per engine
            rather than per dashboard, and none of the domain weight of a twenty-year-old incumbent.
            If the last one matters most, hire the incumbent.
          </p>
          <p
            className="mt-5 font-fj-body"
            style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}
          >
            Shortlisting rather than hiring? Our{' '}
            <Link
              href="/blog/best-ai-seo-agencies-usa"
              className="font-semibold underline"
              style={{ color: '#B23E13' }}
            >
              roundup of the best AI SEO agencies in the USA
            </Link>{' '}
            reviews ten shops including several above.
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
      {/* JSON-LD schemas. One block per schema, no duplicates. */}
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
          lead="A growing share of US search now happens inside AI assistants, and Google answers more queries with AI Overviews above the blue links. If your site is not engineered to be cited by those engines, you are losing traffic no traditional SEO audit will surface."
          body={
            <>
              <p
                className="mt-6 font-fj-body text-fj-neutral-600"
                style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
              >
                Our retainers cover both signals: AI-citation count per engine alongside Google rank changes, monthly, so you can see which source is moving.
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
                Most SEO agencies pick one. We treat both as one workflow, because the underlying work earns both kinds of traffic.
              </p>
            </div>
          }
        />

        {/* ─── 3a. GEO + AEO services detail ───────────────────────────────── */}
        <GeoAeoServices />

        {/* ─── 3a2. Named-capability detail (added 2026-08-06) ─────────────── */}
        <AiSeoChanges />

        {/* ─── 3b. Cited AI-search stats (additive GEO pass) ───────────────── */}
        <AiSearchStats />

        {/* ─── 4. Strategic dark - why old SEO misses AI ───────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY OLD SEO MISSES THE AI ERA"
          headline="Three reasons most SEO agencies are still optimizing for 2018."
          lead="What wins a Google ranking is not what wins a citation in ChatGPT, Perplexity, Claude or Google AI Overviews. Here is what most SEO agencies still miss."
          pillars={PILLARS}
        />

        {/* ─── 5. Service journey - 5-step AI SEO process ──────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR 5-STEP AI SEO PROCESS"
          headline="From audit to compounding citations, in 90 days."
          lead="The audit defines the roadmap. The roadmap drives the retainer. The retainer is measured monthly. No black boxes."
          stages={AI_SEO_JOURNEY}
          closingNote="Every step ships a deliverable. Every month you see what changed and what it cost."
        />

        {/* ─── 6. Comparison vs WebFX, Ignite, SEO Discovery ───────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet against three agencies you will actually meet on this search."
          lead="WebFX, Thrive Agency and Onely all appear on the US results pages for AI SEO terms, and they are good at different things. This table is about delivery shape."
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
                'Challenger: 53 referring domains',
                'Established incumbent',
                'Established incumbent',
                'Established specialist',
              ],
            },
          ]}
          footer="Based on publicly stated positioning and DataForSEO US SERP data pulled 2026-07-26. No rates are compared because none of these agencies publish them."
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

        {/* ─── 10. FAQ - 23 across 6 categories ────────────────────────────── */}
        <FAQ
          eyebrow="AI SEO FAQ"
          headline="Twenty-three questions, answered the way Bhavesh would on the discovery call."
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
