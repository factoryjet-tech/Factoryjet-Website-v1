import Link from "next/link";

/**
 * UK guides, grouped by the job the reader is hiring for.
 *
 * Added 2026-10-29. Before this the /uk hub linked 3 of about 34 UK posts, so
 * most UK guides and several UK service pages had no link from the one UK page
 * Google crawls often. Each group lists the guides first, then the UK service
 * pages that do the same job. Every slug below was checked against
 * src/lib/legacy-pages/Blog/posts/ and none is noindex.
 *
 * Static server component. No client JS. Styling mirrors ./AnswerFirst.tsx.
 */

type GuideLink = { href: string; label: string; blurb: string };

type GuideGroup = {
  id: string;
  heading: string;
  intro: string;
  guides: GuideLink[];
  services: GuideLink[];
};

const GROUPS: GuideGroup[] = [
  {
    id: "guides-store",
    heading: "Building or moving a store",
    intro:
      "For retailers and brands choosing a platform, an agency, or a budget for a new or rebuilt online shop.",
    guides: [
      {
        href: "/blog/ecommerce-development-uk-shopify-woocommerce-2026",
        label: "Ecommerce development in the UK: Shopify and WooCommerce",
        blurb: "How the two platforms differ on setup, hosting, fees and how much you can change.",
      },
      {
        href: "/blog/top-ecommerce-development-agencies-uk-2026",
        label: "Ecommerce agency UK: 10 development agencies compared",
        blurb: "Ten UK ecommerce agencies, what each one says it does, and the questions to ask before you sign.",
      },
      {
        href: "/blog/best-shopify-plus-agencies-uk-2026",
        label: "Best Shopify Plus agencies for UK brands",
        blurb: "15 Shopify Plus firms, grouped by the kind of buyer each one suits.",
      },
      {
        href: "/blog/ecommerce-website-cost-uk-2026",
        label: "Ecommerce website cost in the UK",
        blurb: "Published UK build ranges in pounds for Shopify, Shopify Plus, WooCommerce, Magento and BigCommerce.",
      },
      {
        href: "/blog/how-to-choose-headless-commerce-agency-2026",
        label: "How to choose a headless commerce agency",
        blurb: "When a headless build on Shopify or Magento is worth the extra cost, and how to test an agency on it.",
      },
      {
        href: "/blog/the-true-cost-of-shopify-plus-2026",
        label: "The true cost of Shopify Plus",
        blurb: "The plan fee, card fees and the line items that sit outside the headline price.",
      },
    ],
    services: [
      {
        href: "/uk/ecommerce-consultant",
        label: "Ecommerce consultant",
        blurb: "An audit of the store, platform, checkout and integrations, ranked by what to fix first.",
      },
      {
        href: "/uk/b2b-ecommerce",
        label: "B2B ecommerce",
        blurb: "Trade portals with customer prices, quick order, pay on account and ERP links.",
      },
      {
        href: "/uk/shopify-xero-integration",
        label: "Shopify and Xero integration",
        blurb: "Sales split by VAT rate, with refunds, fees and payouts posted the way your accountant wants.",
      },
      {
        href: "/uk/magento",
        label: "Magento agency",
        blurb: "Support, security patching, upgrades and Hyvä rebuilds for Magento and Adobe Commerce stores.",
      },
    ],
  },
  {
    id: "guides-ai",
    heading: "AI agents and automation",
    intro:
      "For businesses deciding whether to build an AI agent, who to hire for it, and what it should cost.",
    guides: [
      {
        href: "/blog/best-ai-agent-development-companies-uk-2026",
        label: "Best AI agent development companies in the UK",
        blurb: "15 UK firms that build AI agents and automations, compared side by side.",
      },
      {
        href: "/blog/best-ai-automation-agencies-uk-2026",
        label: "Best AI automation agencies in the UK",
        blurb: "Agencies that automate repeat work with AI, and how to tell a build team from a reseller.",
      },
      {
        href: "/blog/best-ai-consultancies-uk-2026",
        label: "Best AI consultancies in the UK",
        blurb: "Firms that assess where AI fits in a business before anything gets built.",
      },
      {
        href: "/blog/ai-cost-uk-2026",
        label: "AI cost in the UK",
        blurb: "Published UK ranges in pounds for AI agents, consultants, developers, chatbots and AI receptionists.",
      },
      {
        href: "/blog/how-to-build-an-ai-agent-uk-2026",
        label: "How to build an AI agent",
        blurb: "A step-by-step guide for UK businesses, and the point at which hiring help makes sense.",
      },
    ],
    services: [
      {
        href: "/uk/ai-agents",
        label: "AI agents",
        blurb: "Custom agents for support, sales, scheduling and operations, wired into the tools you already run.",
      },
      {
        href: "/uk/ai-customer-service",
        label: "AI customer service",
        blurb: "Agents that answer chat, email and WhatsApp from approved wording and hand complaints to a person.",
      },
    ],
  },
  {
    id: "guides-found",
    heading: "Getting found",
    intro:
      "For businesses picking an SEO agency or setting a search budget, on Google and in AI answers.",
    guides: [
      {
        href: "/blog/best-ecommerce-seo-agencies-uk-2026",
        label: "Best ecommerce SEO agencies in the UK",
        blurb: "Ten UK agencies that do SEO for online shops, checked one by one.",
      },
      {
        href: "/blog/best-b2b-seo-agencies-uk-2026",
        label: "Best B2B SEO agencies in the UK",
        blurb: "Eleven UK agencies that do search for firms selling to other businesses.",
      },
      {
        href: "/blog/seo-cost-uk-2026",
        label: "How much SEO costs in the UK",
        blurb: "2026 UK SEO prices by business type, from a local trade to a national retailer.",
      },
    ],
    services: [
      {
        href: "/uk/ecommerce-seo",
        label: "Ecommerce SEO",
        blurb: "Category, product and filter pages for Shopify, WooCommerce and Magento shops.",
      },
      {
        href: "/uk/london",
        label: "London",
        blurb: "Web, ecommerce, SEO and AI work for London businesses, borough by borough.",
      },
    ],
  },
];

function LinkList({ items }: { items: GuideLink[] }) {
  return (
    <ul className="mt-3 list-none space-y-3 p-0">
      {items.map((g) => (
        <li key={g.href}>
          <Link
            href={g.href}
            className="font-fj-body block text-[15px] font-semibold text-fj-ink underline-offset-4 hover:underline"
          >
            {g.label}
          </Link>
          <span className="font-fj-body block text-[13.5px] leading-snug text-fj-neutral-600">
            {g.blurb}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Guides() {
  return (
    <section
      id="uk-guides"
      aria-labelledby="uk-guides-heading"
      className="w-full border-y border-fj-neutral-200 bg-white"
      style={{ maxWidth: "100vw" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
            UK guides
          </p>
          <h2
            id="uk-guides-heading"
            className="font-fj-display mt-3 text-fj-ink"
            style={{
              fontWeight: 700,
              fontSize: "clamp(24px, 3.2vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            UK guides by the job you are hiring for
          </h2>
          <p className="font-fj-body mt-5 text-[17px] leading-relaxed text-fj-neutral-600">
            Fourteen guides written for UK buyers, in three groups. The
            comparison guides name real UK firms and the cost guides quote
            published UK prices in pounds. Under each group are the UK service
            pages for the same job, if you would rather talk to us than read.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {GROUPS.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="grid grid-cols-1 gap-8 border-t border-fj-neutral-200 pt-8 lg:grid-cols-12 lg:gap-14"
            >
              <div className="lg:col-span-7">
                <h3 className="font-fj-display text-xl font-bold text-fj-ink">
                  {group.heading}
                </h3>
                <p className="font-fj-body mt-2 text-[15px] leading-relaxed text-fj-neutral-600">
                  {group.intro}
                </p>
                <LinkList items={group.guides} />
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-6 md:p-7">
                  <p className="font-fj-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B23E13]">
                    UK service pages
                  </p>
                  <LinkList items={group.services} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
