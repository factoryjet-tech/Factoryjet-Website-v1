/**
 * "What is actually included" section for the UK country hub.
 *
 * Two jobs:
 *  1. Give the page real structured content: deliverables per service line, the
 *     shape of an engagement, what is excluded, the process, and the pre-launch
 *     checklist. Lists, not padding, and no price figures anywhere.
 *  2. Carry the page's external citations. Every source below was fetched and
 *     confirmed on 2026-08-25, and the sentence next to each link is the claim
 *     the source actually makes.
 *
 * Static server component. No client JS.
 */

type Group = { title: string; note: string; items: string[] };

const GROUPS: Group[] = [
  {
    title: "A website build",
    note: "Fixed-price milestones, typically design, build, then launch.",
    items: [
      "Discovery call and a written scope you sign off before any code is written",
      "Design of every page template, reviewed with you before build starts",
      "Build in Next.js and Tailwind, hand-coded, no page-builder plugins",
      "Copy support: we edit what you have, or write from your notes and interviews",
      "On-page SEO: titles, meta descriptions, headings, internal links, image alt text",
      "Structured data (the code that tells search engines what a page is about)",
      "Accessibility pass against WCAG 2.2 AA, the international standard for usable-by-everyone websites, keyboard and screen-reader tested",
      "Speed pass until the build clears 90+ on Lighthouse, Google’s own page-quality test, on mobile",
      "Analytics and conversion tracking wired up and checked with a test lead",
      "Launch, DNS cutover, and a recorded walkthrough so your team can edit it",
    ],
  },
  {
    title: "An online shop build",
    note: "Shopify, Shopify Plus, WooCommerce or headless, chosen after discovery.",
    items: [
      "Platform recommendation with the trade-offs written down, not just a preference",
      "Theme build or headless storefront, matched to your catalogue size",
      "Product, collection and variant structure set up so it can be crawled",
      "UK payment setup: card, Apple Pay, Google Pay, PayPal, Klarna where relevant",
      "UK shipping and fulfilment rules: Royal Mail, DPD, Evri, click and collect",
      "VAT configuration, invoicing, and the consumer-rights pages UK selling needs",
      "Migration of products, customers and orders from your existing store",
      "Redirect map from old URLs so you do not lose the rankings you already have",
      "Checkout and speed testing on real mobile devices before launch",
      "Handover docs for adding products, running promotions and pulling reports",
    ],
  },
  {
    title: "An AI agent build",
    note: "Scoped per workflow. One agent, one clearly defined job.",
    items: [
      "Workflow mapping: what the agent does, what it must never do, who it escalates to",
      "Data and tool access review before anything is connected",
      "Build and prompt engineering, versioned in git like any other code",
      "Integration with the systems you already run: CRM, helpdesk, email, Slack",
      "Guardrails and refusal behaviour, tested against deliberately awkward inputs",
      "UK GDPR review: what is stored, where it is stored, and for how long",
      "Human handover path, so a person can take over a conversation mid-flow",
      "Evaluation set of real questions, scored before and after every change",
      "Logging and a dashboard so you can see what it answered and what it missed",
      "Handover docs and a written runbook for the person who will own it",
    ],
  },
  {
    title: "Search work: SEO and AI SEO",
    note: "One-off audit, or a monthly retainer if you want it worked continuously.",
    items: [
      "Technical crawl and a prioritised fix list, worst-first, with effort estimates",
      "Keyword and intent mapping against pages you already have, before new ones",
      "Content briefs written for a specific question, not for a word count",
      "Internal linking pass so new pages are not orphaned on the day they ship",
      "Structured data that matches what the page visibly says, checked both ways",
      "An llms.txt file, a plain summary of the site written for AI tools, plus robots rules so AI crawlers are not blocked",
      "Answer-first formatting: the direct answer near the top of every page",
      "Google Business Profile and local listings work where the business is local",
      "Rank tracking on Google plus visibility checks in ChatGPT, Perplexity and Gemini",
      "Monthly report in plain English: what moved, what did not, what happens next",
    ],
  },
];

const ENGAGEMENT: string[] = [
  "Fixed-price milestones for a build, so the total is agreed before work starts.",
  "A one-off audit when you want the fix list but plan to do the work in-house.",
  "A monthly retainer for search, content and AI visibility, cancellable with notice.",
  "A small, capped block of hours for maintenance, updates and security patching.",
];

const NOT_INCLUDED: string[] = [
  "Paid ad spend. If we run ads, the media budget is paid to the platform by you, not to us.",
  "Third-party licences: Shopify, apps, premium plugins, and AI model usage are billed by the vendor.",
  "Stock photography and video shoots, unless we agree them in the scope up front.",
  "Buying links or paying for placements. We will not do it, on any budget.",
  "Guaranteed rankings or guaranteed AI citations. Nobody can honestly promise either.",
];

const PROCESS: string[] = [
  "Free audit: we look at your current site and search visibility, and send you what we find.",
  "Discovery call: 45 minutes on the business, the goal, and the constraints.",
  "Written scope: deliverables, milestones, timeline and assumptions, in one document.",
  "Design or plan review: you see and sign off the direction before build starts.",
  "Build in weekly increments, with a staging link you can open at any point.",
  "Quality assurance: accessibility, speed, cross-browser, mobile, and forms tested end to end.",
  "Launch, then a two-week watch period where we fix anything that surfaces.",
  "Handover: recorded walkthrough, written docs, and the credentials in your name.",
];

const PRELAUNCH: string[] = [
  "Every page has one H1, and heading levels descend without skipping.",
  "Titles and meta descriptions are unique across the whole site.",
  "Canonical tags and hreflang point where they should, with an x-default set.",
  "Structured data validates and matches the visible content on the page.",
  "robots.txt allows Googlebot and the AI retrieval crawlers by name.",
  "XML sitemap is generated, submitted, and free of redirected or 404 URLs.",
  "Redirects are single hop and use 301, never a chain of two or more.",
  "Forms submit, send a notification, and fire the conversion event once, not twice.",
  "Images are sized, compressed, and carry alt text that describes the image.",
  "Lighthouse mobile scores 90+ across performance, accessibility, best practices and SEO.",
];

const SOURCES: Array<{ stat: string; claim: string; source: string; url: string }> = [
  {
    stat: "29.4%",
    claim:
      "of UK retail sales happened online in June 2026, up from 28.9% in May and the highest share since April 2021.",
    source: "ONS, Retail sales, Great Britain: June 2026",
    url: "https://www.ons.gov.uk/businessindustryandtrade/retailindustry/bulletins/retailsales/june2026",
  },
  {
    stat: "30%",
    claim:
      "of searches now show an AI overview, and ChatGPT took 1.8 billion UK visits in the first eight months of 2025, up from 368 million in the same period of 2024.",
    source: "Ofcom, Online Nation 2025",
    url: "https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025",
  },
  {
    stat: "3,000+",
    claim:
      "AI companies operate in the UK, turning over more than £10 billion a year and employing more than 60,000 people in AI roles.",
    source: "DSIT, Artificial Intelligence sector study 2023",
    url: "https://www.gov.uk/government/publications/artificial-intelligence-sector-study-2023/artificial-intelligence-sector-study-2023",
  },
  {
    stat: "No shortcut",
    claim:
      "Google states there are no additional requirements to appear in AI Overviews or AI Mode, and no special optimisations. The same SEO fundamentals apply, which is why we do not sell a separate AI ranking trick.",
    source: "Google Search Central, AI features and your website",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
  },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="font-fj-body mt-3 list-none space-y-2 p-0 text-[15px] leading-relaxed text-fj-neutral-600">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full"
            style={{ backgroundColor: "#F05A28" }}
          />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Deliverables() {
  return (
    <section
      id="whats-included"
      aria-labelledby="whats-included-heading"
      className="w-full bg-fj-cream"
      style={{ maxWidth: "100vw" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 md:py-24">
        {/* Header, left aligned */}
        <div className="max-w-3xl">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
            What you actually get
          </p>
          <h2
            id="whats-included-heading"
            className="font-fj-display mt-3 text-fj-ink"
            style={{
              fontWeight: 700,
              fontSize: "clamp(24px, 3.2vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Every UK engagement, written out line by line
          </h2>
          <p className="font-fj-body mt-4 text-[17px] leading-relaxed text-fj-neutral-600">
            Agencies get vague at exactly the point a buyer needs detail. Here is
            the full list of what lands in each of our four service lines, how we
            shape the commercial side, what we deliberately leave out, and the
            checklist every UK site clears before it goes live.
          </p>
        </div>

        {/* Four deliverable groups, 2 x 2 on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8"
            >
              <h3 className="font-fj-display text-xl font-bold text-fj-ink">
                {g.title}
              </h3>
              <p className="font-fj-mono mt-2 text-[12.5px] uppercase tracking-wide text-fj-neutral-400">
                {g.note}
              </p>
              <List items={g.items} />
            </div>
          ))}
        </div>

        {/* Engagement shape + exclusions, 7/5 split */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink">
              How we shape the commercial side
            </h3>
            <p className="font-fj-body mt-2 text-[15px] leading-relaxed text-fj-neutral-600">
              We do not publish a rate card, because the same brief costs
              different amounts depending on catalogue size, integrations and how
              much content already exists. What we do publish is the shape:
            </p>
            <List items={ENGAGEMENT} />
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink">
              What is not included
            </h3>
            <p className="font-fj-body mt-2 text-[15px] leading-relaxed text-fj-neutral-600">
              Written down so nobody finds out at invoice time.
            </p>
            <List items={NOT_INCLUDED} />
          </div>
        </div>

        {/* Process + pre-launch checklist, 5/7 split (mirrored) */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink">
              How a UK project runs, step by step
            </h3>
            <ol className="font-fj-body mt-3 list-none space-y-3 p-0 text-[15px] leading-relaxed text-fj-neutral-600">
              {PROCESS.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="font-fj-mono mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-fj-neutral-200 bg-white text-[12px] font-semibold text-[#B23E13]"
                  >
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-fj-display text-xl font-bold text-fj-ink">
              The pre-launch checklist we run on every UK site
            </h3>
            <p className="font-fj-body mt-2 text-[15px] leading-relaxed text-fj-neutral-600">
              Nothing goes live until all ten pass. Ask any agency for their
              version of this list.
            </p>
            <List items={PRELAUNCH} />
          </div>
        </div>

        {/* Sourced facts */}
        <div className="mt-14 rounded-2xl border border-fj-neutral-200 bg-white p-6 md:p-8">
          <h3 className="font-fj-display text-xl font-bold text-fj-ink">
            The UK numbers we plan against
          </h3>
          <p className="font-fj-body mt-2 max-w-3xl text-[15px] leading-relaxed text-fj-neutral-600">
            Every figure below links to the original source. All four were
            checked on 25 August 2026. If a source updates and the number moves,
            we change the number here.
          </p>
          <ul className="mt-5 list-none space-y-5 p-0">
            {SOURCES.map((s) => (
              <li
                key={s.url}
                className="border-t border-fj-neutral-200 pt-5 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    className="font-fj-display text-2xl font-bold"
                    style={{ color: "#B23E13" }}
                  >
                    {s.stat}
                  </span>
                  <span className="font-fj-body max-w-3xl text-[15px] leading-relaxed text-fj-neutral-600">
                    {s.claim}
                  </span>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-fj-mono mt-1.5 inline-block text-[12px] text-fj-neutral-400 underline underline-offset-4 hover:text-fj-ink"
                >
                  Source: {s.source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
