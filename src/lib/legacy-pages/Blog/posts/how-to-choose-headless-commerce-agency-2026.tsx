import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// FAQs are grounded in: (1) a live DataForSEO People Also Ask pull for "headless
// commerce agency" (2026-09-20), (2) cached PAA data already in
// pipeline/research/data/content-gap-2026-09-19.json for "headless shopify
// development" and "headless commerce development company", and (3) the buyer
// evaluation categories that repeat across AI answers to "how do I choose an
// agency for headless commerce": architecture depth, platform-specific
// experience, case studies, ownership, post-launch support, cost transparency.
// The FAQPage schema is generated centrally by the blog route
// (src/app/blog/[slug]/page.tsx) FROM this exact array, so the visible FAQs and
// the structured data can never drift apart. Do not add a second, hand-written
// FAQPage script anywhere in this file.
const faqs: FAQItem[] = [
  {
    q: 'What is headless commerce?',
    a: 'Headless commerce means splitting the part shoppers see (the storefront: pages, search, cart, checkout screens) from the backend that runs the business (the commerce engine: products, orders, inventory, payments). The two talk to each other through an API, a defined set of rules for one piece of software to request data from another, instead of being built as one bundled system. That split lets you change how the storefront looks and works without touching the backend, and vice versa.',
  },
  {
    q: 'What is the difference between headless commerce and a normal Shopify or Magento store?',
    a: 'A normal store uses the platform\'s own theme system: Shopify Liquid or a Magento/Adobe Commerce theme renders both the pages and the logic in one connected package, and you edit it inside that platform\'s rules. A headless store keeps Shopify or Adobe Commerce as the backend (orders, inventory, payments) but replaces the theme with a custom-built frontend, usually in a framework like Next.js, that pulls data through an API. You get more control over speed and design, at the cost of more moving parts to build and maintain.',
  },
  {
    q: 'What are the disadvantages of headless commerce?',
    a: 'The main disadvantages are cost, complexity, and time. You are paying for two systems to be built and kept in sync (frontend and backend) instead of one theme, so development takes longer and needs a broader set of skills. Marketing and merchandising teams that could edit a normal theme\'s pages or blocks themselves often lose that self-service ability unless the agency also sets up a headless CMS (a content system built to work API-first) for them. And every plugin or app in the platform\'s ecosystem has to be re-checked for whether it still works when the frontend is custom-built.',
  },
  {
    q: 'Is headless commerce worth it for a small or mid-size business?',
    a: 'Usually not at the very start. Headless commerce earns its cost when page speed and design flexibility are directly tied to revenue at real scale, when you have unusual requirements a theme genuinely cannot handle, or when you are running multiple storefronts (different brands, regions, or channels) off one backend. A well-built theme on Shopify or Adobe Commerce covers the large majority of standard needs. If you are not sure which side of that line you are on, that question is worth answering before you evaluate any agency at all.',
  },
  {
    q: 'What is Shopify Hydrogen?',
    a: 'Hydrogen is Shopify\'s own framework for building custom storefronts, built on React Router. Shopify\'s developer documentation describes it as providing "a set of components, functions, and utilities used for building custom storefronts." It is opinionated: it comes with Shopify-specific pieces already wired up, which can mean faster setup, but also means you are working inside Shopify\'s chosen patterns rather than a fully open structure.',
  },
  {
    q: 'What is the Shopify Storefront API?',
    a: 'The Storefront API is Shopify\'s framework-agnostic option: a GraphQL API (a query language that lets a frontend ask for exactly the data fields it needs) that exposes product, cart, and checkout data. According to Shopify\'s own developer docs, it lets you "build headless using the framework of your choice and Shopify\'s backend," meaning you are not required to use Hydrogen or React Router at all. An agency should be able to explain clearly which of these two paths, or both, they actually build on.',
  },
  {
    q: 'Do I have to use Hydrogen to build headless on Shopify?',
    a: 'No. Hydrogen is Shopify\'s own recommended path and comes with the most built-in support, but the Storefront API works with any frontend framework a developer chooses. Some agencies build custom Next.js storefronts directly against the Storefront API without using Hydrogen at all. Neither approach is automatically better; the right one depends on the agency\'s actual experience and what you need the storefront to do.',
  },
  {
    q: 'What is Adobe Commerce PWA Studio?',
    a: 'PWA Studio is Adobe\'s own toolkit for building a Progressive Web App (a website built to feel and perform like an app) storefront in front of Adobe Commerce or Magento Open Source. Adobe\'s documentation describes it as offering "the tools you need to develop a Progressive Web Application storefront for Adobe Commerce or Magento Open Source." It bundles build tooling, a set of React hooks and logic, and a starter component library, similar in spirit to what Hydrogen offers on the Shopify side.',
  },
  {
    q: 'What is the Adobe Commerce GraphQL API used for?',
    a: 'It is the API layer that makes a headless Adobe Commerce build possible at all. Adobe\'s own developer documentation states it provides "comprehensive GraphQL implementations that serve as the ideal foundation for building next-generation commerce experiences, including headless storefronts," letting a frontend request precise data instead of being locked into fixed REST responses. An agency building headless on Adobe Commerce should be using this API directly, whether or not they also use PWA Studio on top of it.',
  },
  {
    q: 'Is Magento the same as Adobe Commerce?',
    a: 'Magento was the original name of the platform. Adobe acquired it in 2018, and the paid, hosted version is now called Adobe Commerce, while Magento Open Source remains a free, self-hosted version of the core software. Most agencies and buyers still say "Magento" out of habit for both, so it is worth clarifying which one a candidate agency actually means and has real experience with, since the two differ in hosting, cost structure, and some available features.',
  },
  {
    q: 'Can Magento Open Source go headless, or only Adobe Commerce?',
    a: 'Both can. The GraphQL API that makes headless builds possible is part of the core Magento codebase, not an Adobe Commerce-only add-on, and PWA Studio explicitly supports "Adobe Commerce or Magento Open Source" per Adobe\'s own documentation. What differs is scale and support: Adobe Commerce adds enterprise features like a managed cloud environment and some commerce tools that Open Source does not include, which can matter more as a headless build grows in complexity.',
  },
  {
    q: 'What is composable commerce, and is it the same as headless?',
    a: 'They overlap but are not identical. Headless describes one specific split: frontend separated from backend. Composable commerce is broader, meaning you build your whole commerce stack from separate best-of-breed pieces (search, checkout, content, payments) connected through APIs, rather than one bundled platform doing everything. A headless Shopify or Adobe Commerce build is one common way to start down a composable path, but you can also add composable pieces (a separate search tool, a separate headless CMS) to a build that is not otherwise "headless" in the strict sense.',
  },
  {
    q: 'Why is evaluating a headless commerce agency different from evaluating a normal storefront agency?',
    a: 'With a themed storefront, most of the hard technical decisions are already made by the platform, so the agency\'s job is mostly design, configuration, and content. With headless, the agency is making architecture decisions from close to scratch: which parts of the API to call and when, how to cache data so pages stay fast, how content and product data flow together, and how checkout still connects back to the platform\'s own secure payment flow. A generic "have you built ecommerce sites before" question does not surface any of that. You need questions aimed specifically at how they make those architecture calls.',
  },
  {
    q: 'What does "architecture depth" mean when evaluating a headless agency, and how do I test for it?',
    a: 'It means whether the agency actually understands the full chain of decisions in a headless build, not just the finished result. Ask them to walk you through a real example: how they decided what gets rendered ahead of time versus fetched live, how they handle a product going out of stock in real time on a page that was built and cached earlier, and how search and filtering work when the storefront and the product data live in different systems. A team with real depth answers with specifics and trade-offs. A team without it describes the outcome ("it\'s fast") but not the mechanism.',
  },
  {
    q: 'Why does platform-specific experience matter more for headless than for a themed build?',
    a: 'A Shopify Storefront API and an Adobe Commerce GraphQL API are built differently, expose different data shapes, and have different quirks around caching, checkout handoff, and rate limits. General React or Next.js skill does not transfer that specific knowledge automatically. Ask directly: how many headless builds have you shipped on this exact platform, not "ecommerce" generally, and can you name the specific API version or SDK you used. A team that has only themed Shopify stores before is not the same as a team that has shipped headless Shopify builds.',
  },
  {
    q: 'How is Shopify headless experience different from Adobe Commerce (Magento) headless experience?',
    a: 'They are different enough that experience rarely transfers cleanly both ways. Shopify\'s Hydrogen and Storefront API assume Shopify\'s own checkout and hosting patterns and are relatively opinionated. Adobe Commerce\'s GraphQL API and PWA Studio sit on top of a more open, self-hosted or cloud-managed platform with a different data model and typically a more complex catalog structure (multi-store views, B2B pricing tiers). An agency strong in one is not automatically strong in the other. Ask for platform-specific proof for whichever one you are actually building on.',
  },
  {
    q: 'What should I ask about an agency\'s past headless case studies?',
    a: 'Ask what the storefront was actually built with (Hydrogen, a custom Next.js build against the Storefront API, PWA Studio, a custom build against Adobe Commerce GraphQL) and what specific problem the headless approach solved that a theme could not: a page speed target, a design requirement, running multiple brands off one backend, or something else concrete. Ask to see the live site if it still exists and check it yourself on mobile. A vague answer like "we made it fast and modern" without naming the actual technical approach is a sign the case study is being described secondhand.',
  },
  {
    q: 'Can I trust a headless commerce agency that shows only screenshots, not live sites?',
    a: 'Be cautious, not automatically dismissive. Storefronts do get retired or rebuilt by the client later, so a missing live link is not always a red flag on its own. But a strong agency should still be able to describe, in specific technical language, exactly what the architecture looked like and why it was built that way. If they can only describe the visual result and not the underlying decisions, that is a stronger warning sign than a dead link by itself.',
  },
  {
    q: 'Who owns the code in a headless build, and why does that matter more here than on a themed site?',
    a: 'You should, in every case, but it matters more for headless because there is genuinely more custom code to lose. A themed Shopify or Magento site can usually be handed to a new agency with reasonable effort, since it still lives inside the platform\'s own structure. A custom headless frontend is a standalone codebase; if you do not own it outright, with full access to the repository, you can be effectively locked into the agency that built it. Get it in writing, before signing anything, that you own the full frontend codebase, not just "the website."',
  },
  {
    q: 'What is vendor lock-in in a headless project, and how do I avoid it?',
    a: 'Vendor lock-in here means being stuck with one agency or one set of tools because switching would mean rebuilding significant parts of the system. It shows up as: code you don\'t have full access to, a headless CMS or search tool chosen with proprietary, hard-to-migrate data formats, or documentation that exists only in one developer\'s head. Avoid it by getting full code ownership in writing, asking what happens to your content and product data if you switch providers for the CMS or search layer, and requiring written technical documentation as a deliverable, not an afterthought.',
  },
  {
    q: 'What does post-launch support look like for a headless build, and how is it different from a normal store?',
    a: 'On a themed store, most post-launch issues are theme or app bugs the platform\'s ecosystem has usually seen before. On a headless build, the agency is supporting custom code with more places something can break: the frontend, the API layer connecting it to the backend, and any headless CMS or search tool in between. Ask specifically who is on call if the storefront goes down, how fast they respond, and whether ongoing support includes keeping the frontend framework and API integration updated as Shopify or Adobe Commerce ship new API versions over time.',
  },
  {
    q: 'Does a headless site need more maintenance than a themed site?',
    a: 'Generally yes, and any agency worth hiring should say so plainly rather than downplay it. A themed site gets platform updates, security patches, and app compatibility handled largely by the platform itself. A headless frontend is your own codebase, so its dependencies, its framework version, and its connection to the backend API all need active upkeep over time. Ask what an ongoing maintenance retainer actually covers for a headless build specifically, since it is usually a broader scope than maintaining a themed store.',
  },
  {
    q: 'What is a headless CMS, and do I need one for a headless commerce build?',
    a: 'A headless CMS (content management system) is a tool built to store and serve content, like blog posts, landing pages, or lookbooks, through an API, the same way a headless storefront pulls product data through an API. You need one if non-technical team members will be editing marketing content regularly after launch; without it, every content change may require a developer to edit code directly. If your content needs are simple, you may not need a separate headless CMS at all, and adding one anyway is unnecessary cost.',
  },
  {
    q: 'Why can\'t I get a fixed price for a headless project upfront?',
    a: 'You usually can, but only after a real discovery phase, the structured research an agency does about your business, your catalog, and your integrations before quoting a price. Headless projects have more architecture decisions to make than a themed build, so a price quoted before that research is a guess. Ask for a fixed-price milestone plan once discovery is done, broken into stages (architecture and API integration, frontend build, content and search setup, testing, launch) rather than one lump number with no visibility into what each piece costs.',
  },
  {
    q: 'What should a fixed-price milestone plan for a headless build actually include?',
    a: 'It should break the project into stages you can check progress against: a discovery and architecture phase, the API integration layer connecting frontend to backend, the frontend build itself, any headless CMS or search setup, testing across devices, and launch. Ask what happens if scope changes partway through, since headless projects can uncover unexpected integration complexity once developers get into the platform\'s real data. A written change-request process, agreed before work starts, protects both sides when that happens.',
  },
  {
    q: 'How long does a headless Shopify or Magento project usually take?',
    a: 'Longer than a themed build on the same platform, because more of the system is being built from scratch rather than configured. A themed store can sometimes launch in weeks; a genuine headless build, with a custom frontend, API integration, and often a headless CMS or search layer, more commonly runs several months depending on catalog complexity and how many integrations (inventory, ERP, personalization tools) are involved. Ask for a realistic, milestone-based timeline rather than a single end date, and ask what has historically caused delays on their past headless projects.',
  },
  {
    q: 'What team roles do I need for a headless project that a themed build does not require?',
    a: 'Beyond the usual designer and project manager, a headless build typically needs a developer comfortable with the specific frontend framework (commonly Next.js or Hydrogen) and with API integration work, someone who understands the platform\'s GraphQL API in depth (Shopify\'s Storefront API or Adobe Commerce\'s GraphQL API), and often someone managing the headless CMS or search tool if one is added. Ask an agency directly who fills each of these roles on your project and how much of their time is genuinely dedicated to you.',
  },
  {
    q: 'Does headless commerce automatically make my site faster?',
    a: 'No. It removes some common speed bottlenecks, like theme bloat and unnecessary third-party app scripts, but a poorly built headless frontend can be just as slow as a poorly built themed one. Speed comes from specific engineering choices: what gets rendered ahead of time versus fetched live, how images are optimized, and how much unnecessary code ships to the browser. Ask an agency to explain, in plain terms, exactly what makes their headless builds fast, not just to claim that "headless is faster" as a given.',
  },
  {
    q: 'Do I still use Shopify\'s or Magento\'s checkout in a headless build?',
    a: 'In most Shopify headless builds, yes: Shopify\'s own checkout is typically kept in place even when the rest of the storefront is custom, since it carries PCI DSS (Payment Card Industry Data Security Standard) compliance and integrates directly with Shop Pay and other native payment methods. On Adobe Commerce, checkout can be more fully customized as part of the headless frontend, but that adds real security and compliance responsibility. Ask any agency directly which checkout approach they use and why, since it affects both security and how "headless" the finished build actually is.',
  },
  {
    q: 'What is the biggest mistake businesses make when choosing a headless commerce agency?',
    a: 'Choosing based on general web development polish rather than platform-specific, architecture-specific proof. A team can build attractive, fast websites in general and still lack real experience with Shopify\'s or Adobe Commerce\'s specific APIs, checkout handoff, and data model quirks. The fix is simple: ask for the specific platform, the specific API, and a specific past project on that exact combination, and listen for concrete technical detail in the answer rather than confident but generic language about "modern, scalable architecture."',
  },
  {
    q: 'How do I know if my business actually needs headless commerce, or if a theme is enough?',
    a: 'Most businesses do not need headless at launch. A well-implemented theme on Shopify, Adobe Commerce, or a similar platform covers standard product pages, checkout, and app integrations for the large majority of stores. Headless earns its added cost and complexity when you have unusual requirements a theme cannot handle, when page speed is directly tied to revenue at meaningful scale, or when you are running several storefronts off one backend. If you are unsure which side of that line you are on, our general guide on choosing an ecommerce development agency covers that broader decision first.',
  },
  {
    q: 'Can an agency migrate an existing Shopify or Magento store to headless without downtime?',
    a: 'A competent agency should be able to plan a migration that keeps your existing store live and taking orders while the new headless frontend is built and tested separately, then switch over in a controlled cutover rather than an all-at-once rebuild. Ask specifically about their rollback plan if something goes wrong after the switch, and how they protect your existing search rankings during the move, since URLs and page structures commonly change in a platform or architecture migration if redirects are not planned carefully in advance.',
  },
];

export const post: BlogPost = {
  id: '451',
  slug: 'how-to-choose-headless-commerce-agency-2026',
  title: 'How to Choose an Agency for Headless Commerce on Shopify or Magento (2026)',
  excerpt:
    'A plain-language, platform-neutral guide to evaluating a headless commerce agency for Shopify or Adobe Commerce (Magento): the architecture questions to ask, how Hydrogen compares to the Storefront API, what PWA Studio and GraphQL mean on the Magento side, and the categories every real evaluation checklist should cover.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 20, 2026',
  readTime: '16 min read',
  imageUrl: '/blog-images/how-to-choose-headless-commerce-agency-2026.webp',
  imageAlt:
    'An abstract technical illustration of a storefront interface connected by a single line to a cluster of backend server blocks, representing headless commerce architecture',
  meta: {
    title: 'How to Choose an Agency for Headless Commerce (Shopify or Magento)',
    description:
      'A platform-neutral guide to evaluating a headless commerce agency for Shopify or Adobe Commerce: architecture depth, Hydrogen vs. the Storefront API, PWA Studio and GraphQL, ownership, support, and 29 buyer FAQs.',
  },
  keyTakeaways: [
    'Headless commerce splits the storefront shoppers see from the backend that runs orders and inventory, connected through an API. It is a real architecture decision, not a marketing term.',
    'Shopify offers two headless paths: Hydrogen (Shopify\'s own opinionated framework) and the framework-agnostic Storefront API. Adobe Commerce/Magento offers PWA Studio and a GraphQL API that works on both Adobe Commerce and Magento Open Source.',
    'Evaluating a headless agency needs sharper, platform-specific questions than evaluating a themed-store agency: general web development skill does not automatically transfer to Shopify\'s or Adobe Commerce\'s specific APIs.',
    'The six categories that matter: architecture depth, platform-specific experience, real case studies, code and data ownership, post-launch support built for a custom codebase, and a fixed-price milestone plan instead of a single guessed number.',
    'Headless does not automatically mean faster or better. It earns its cost only at real scale or with genuine custom requirements. If you are not sure headless is right for you at all, that is a separate, earlier question worth answering first.',
  ],
  faqs,
  content: (
    <>
      {/* Structured data: WebPage + Service. FAQPage and BreadcrumbList are emitted
          once, centrally, by the blog route (src/app/blog/[slug]/page.tsx) from
          post.faqs above, so a second hand-written FAQPage block does not belong here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id':
                'https://factoryjet.com/blog/how-to-choose-headless-commerce-agency-2026#webpage',
              url: 'https://factoryjet.com/blog/how-to-choose-headless-commerce-agency-2026',
              name: 'How to Choose an Agency for Headless Commerce on Shopify or Magento (2026)',
              description:
                'A platform-neutral guide to evaluating a headless commerce agency for Shopify or Adobe Commerce (Magento): architecture depth, Hydrogen vs. the Storefront API, PWA Studio and GraphQL, ownership, and support.',
              inLanguage: 'en-US',
              datePublished: '2026-09-20',
              dateModified: '2026-09-20',
              author: { '@type': 'Person', name: 'Bhavesh Barot' },
              publisher: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              primaryImageOfPage:
                'https://factoryjet.com/blog-images/how-to-choose-headless-commerce-agency-2026.webp',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.answer-first'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Headless Commerce Development Services',
              name: 'FactoryJet Headless Commerce Development',
              description:
                'Headless commerce architecture and development for Shopify (Hydrogen, Storefront API) and Adobe Commerce/Magento (GraphQL API, PWA Studio), with a structured discovery phase, fixed-price milestones, and full client ownership of the frontend codebase.',
              provider: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              areaServed: [{ '@type': 'Country', name: 'United States' }],
              url: 'https://factoryjet.com/services/headless-shopify-development',
            },
          ]),
        }}
      />

      {/* Answer-first block for AI Overviews / ChatGPT citation */}
      <div className="answer-first bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-900">
          To choose an agency for headless commerce on Shopify or Magento (Adobe Commerce), go
          beyond the general ecommerce-agency checklist and check six specific things: real
          architecture depth (can they explain how data flows, not just show a finished result),
          hands-on experience with the exact API you need (Shopify&apos;s Storefront API or Adobe
          Commerce&apos;s GraphQL API, not general web development), a real headless case study
          they can walk through in detail, written ownership of the full frontend codebase, a
          support plan built for custom code rather than a themed site, and a fixed-price
          milestone plan instead of one guessed number. An agency that is vague on any of these is
          a real risk on a headless project specifically, even if their general portfolio looks
          strong.
        </p>
      </div>

      <p className="mb-4 text-gray-800">
        If you have already decided you want a custom, headless storefront on Shopify or Adobe
        Commerce (the platform most people still call Magento), the hard part is not finding
        agencies. It is telling the ones with real headless experience apart from the ones who
        will describe any custom website as &quot;headless&quot; because the word sounds impressive. This
        guide is deliberately narrow and platform-neutral: it does not rank companies, and it
        assumes you already know roughly why you want headless. If you are not sure headless is
        the right call for your business yet, our{' '}
        <a href="/blog/how-to-choose-ecommerce-development-agency-2026" className="text-orange-600 underline">
          general guide to choosing an ecommerce development agency
        </a>{' '}
        covers that earlier decision, including when a standard theme is the better choice. This
        guide picks up from there and goes deep on the architecture-specific questions that
        general guide does not cover.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <h3 className="text-lg font-bold mb-3 text-gray-900">What this guide covers</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-800">
          <li><a href="#what-is-headless" className="text-orange-600 underline">What headless commerce actually means</a></li>
          <li><a href="#shopify-options" className="text-orange-600 underline">Shopify&apos;s headless options: Hydrogen and the Storefront API</a></li>
          <li><a href="#magento-options" className="text-orange-600 underline">Adobe Commerce/Magento&apos;s headless options: GraphQL and PWA Studio</a></li>
          <li><a href="#why-different" className="text-orange-600 underline">Why evaluating a headless agency is a different task</a></li>
          <li><a href="#architecture-depth" className="text-orange-600 underline">Architecture depth: the first thing to check</a></li>
          <li><a href="#platform-experience" className="text-orange-600 underline">Platform-specific experience, not general web skill</a></li>
          <li><a href="#case-studies" className="text-orange-600 underline">How to test a headless case study</a></li>
          <li><a href="#ownership" className="text-orange-600 underline">Ownership of code and data</a></li>
          <li><a href="#post-launch" className="text-orange-600 underline">Post-launch support for a custom codebase</a></li>
          <li><a href="#cost" className="text-orange-600 underline">Cost transparency without a guessed number</a></li>
          <li><a href="#red-flags" className="text-orange-600 underline">Red flags specific to headless projects</a></li>
        </ol>
      </div>

      <h2 id="what-is-headless" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What headless commerce actually means
      </h2>
      <p className="mb-4 text-gray-800">
        Quick vocabulary, once, so the rest of this reads easily.{' '}
        <strong>Headless commerce</strong> means splitting the storefront (the pages, search,
        cart, and checkout screens a shopper sees) from the commerce engine (the backend system
        that manages products, orders, inventory, and payments). The two sides communicate through
        an <strong>API</strong>, a defined set of rules that lets one piece of software request
        data from another. In a normal store, the platform bundles both sides together in one
        theme system. In a headless store, you keep the platform&apos;s backend but replace the
        theme with a custom-built frontend, usually in a framework like Next.js, that pulls data
        through that API instead.
      </p>
      <p className="mb-6 text-gray-800">
        The appeal is control. A custom frontend can be faster, look exactly how you want without
        fighting a theme&apos;s built-in structure, and can serve more than one storefront (a
        different brand, region, or channel) off a single backend. The cost is real too: you are
        now maintaining two connected systems instead of one, and you need developers who
        understand both the frontend framework and the platform&apos;s specific API, not just
        general ecommerce experience.
      </p>

      <h2 id="shopify-options" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Shopify&apos;s headless options: Hydrogen and the Storefront API
      </h2>
      <p className="mb-4 text-gray-800">
        Shopify gives developers two related paths into headless, and any agency you talk to
        should be able to explain both clearly and tell you which one they actually use.
      </p>
      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">Hydrogen</h3>
      <p className="mb-4 text-gray-800">
        Hydrogen is Shopify&apos;s own framework for building custom storefronts, built on React
        Router. Shopify&apos;s developer documentation describes it as providing{' '}
        <a
          href="https://shopify.dev/docs/storefronts/headless/getting-started/build-options"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          &quot;a set of components, functions, and utilities used for building custom
          storefronts&quot;
        </a>
        {' '}on React Router apps. It is opinionated, meaning Shopify-specific pieces (cart logic,
        checkout handoff, common storefront patterns) are already wired up for you, which can mean
        a faster start, at the cost of working inside Shopify&apos;s chosen structure rather than a
        fully open one.
      </p>
      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">The Storefront API</h3>
      <p className="mb-6 text-gray-800">
        The Storefront API is the framework-agnostic path. It is a GraphQL API, a query language
        that lets the frontend ask for exactly the data fields it needs instead of receiving a
        fixed response shape, exposing product, cart, and checkout data. Per Shopify&apos;s own
        documentation, it lets a developer{' '}
        <a
          href="https://shopify.dev/docs/storefronts/headless/getting-started/build-options"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          &quot;build headless using the framework of your choice and Shopify&apos;s backend&quot;
        </a>
        , meaning Hydrogen is not required at all. Some agencies build fully custom Next.js
        storefronts directly against the Storefront API. Neither approach is inherently better;
        what matters is whether the agency in front of you has real, specific experience with the
        one they are proposing.
      </p>

      <h2 id="magento-options" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Adobe Commerce/Magento&apos;s headless options: GraphQL and PWA Studio
      </h2>
      <p className="mb-4 text-gray-800">
        Magento was the platform&apos;s original name. Adobe acquired it in 2018; the paid, hosted
        version is now called Adobe Commerce, while Magento Open Source remains a free,
        self-hosted version of the core software. Most people, including most agencies, still say
        &quot;Magento&quot; for both out of habit, so it is worth clarifying which one a candidate
        actually means. The good news for headless buyers: the core technology for going headless
        is shared across both.
      </p>
      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">The GraphQL API</h3>
      <p className="mb-4 text-gray-800">
        Adobe Commerce&apos;s own developer documentation states its GraphQL implementations{' '}
        <a
          href="https://developer.adobe.com/commerce/webapi/graphql/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          &quot;serve as the ideal foundation for building next-generation commerce experiences,
          including headless storefronts&quot;
        </a>
        , letting a frontend request precise data instead of being locked into a fixed REST
        response. This GraphQL layer is part of the core Magento codebase, not an Adobe
        Commerce-only feature, so it is available on Magento Open Source too.
      </p>
      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">PWA Studio</h3>
      <p className="mb-6 text-gray-800">
        PWA Studio is Adobe&apos;s toolkit for building a Progressive Web App (a website built to
        feel and perform like an app) storefront on top of that GraphQL layer. Adobe&apos;s
        documentation describes it as offering{' '}
        <a
          href="https://developer.adobe.com/commerce/pwa-studio/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          &quot;the tools you need to develop a Progressive Web Application storefront for Adobe
          Commerce or Magento Open Source&quot;
        </a>
        , bundling build tooling, a set of React hooks and logic, and a starter component library.
        It plays a similar role to Hydrogen on the Shopify side: a faster, more opinionated
        starting point, sitting on top of an API that also supports a fully custom build.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl my-8">
        <p className="font-semibold text-gray-900 mb-2">
          Not sure which platform or path fits your catalog?
        </p>
        <p className="text-gray-800 mb-4">
          Before you run the rest of this checklist on a shortlist, it helps to know roughly what
          you are actually asking for. A short discovery call can clarify platform fit and rough
          architecture, with no obligation to hire anyone.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Talk through your architecture
          </a>
          <a
            href="/services/headless-shopify-development"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-orange-100 transition-colors"
          >
            See our headless Shopify approach
          </a>
        </div>
      </div>

      <h2 id="why-different" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Why evaluating a headless agency is a different task
      </h2>
      <p className="mb-6 text-gray-800">
        With a themed storefront, the platform has already made most of the hard technical
        decisions, so the agency&apos;s job is mostly design, configuration, and content. With
        headless, the agency is making architecture decisions from close to scratch: which parts of
        the API to call and when, how to cache data so pages stay fast without going stale, how
        product content and marketing content flow together, and how checkout still connects back
        to the platform&apos;s own secure payment flow. A generic question like &quot;have you
        built ecommerce sites before&quot; does not surface any of that. The rest of this guide is
        built around the sharper, architecture-specific questions that actually do.
      </p>

      <h2 id="architecture-depth" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Architecture depth: the first thing to check
      </h2>
      <p className="mb-4 text-gray-800">
        This is the single best filter in this whole guide. Ask a candidate agency to walk you
        through a real example, not a summary: how did they decide what gets built ahead of time
        (pre-rendered) versus fetched live when a shopper loads the page? How does a product going
        out of stock show up correctly on a page that was built and cached earlier? How do search
        and filtering work when the storefront and the product data technically live in two
        different systems?
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Question</th>
              <th className="p-3 border text-left">What a strong answer sounds like</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">How do you decide what renders ahead of time vs. live?</td>
              <td className="p-3 border text-gray-800">Names specific page types and the trade-off for each, not a one-size-fits-all answer</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">How does inventory stay accurate on cached pages?</td>
              <td className="p-3 border text-gray-800">Describes a real mechanism (webhooks, revalidation) rather than &quot;it just updates&quot;</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">How do content and product data work together?</td>
              <td className="p-3 border text-gray-800">Explains whether a headless CMS is involved and how the two systems are kept in sync</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">What happens to checkout in your architecture?</td>
              <td className="p-3 border text-gray-800">States plainly whether the platform&apos;s native checkout is kept or replaced, and why</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        A team with real depth answers with specifics and trade-offs. A team without it describes
        only the outcome, something like &quot;it&apos;s fast and modern,&quot; without ever
        naming the mechanism behind it.
      </p>

      <h2 id="platform-experience" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Platform-specific experience, not general web skill
      </h2>
      <p className="mb-4 text-gray-800">
        A Shopify Storefront API and an Adobe Commerce GraphQL API are built differently, expose
        different data shapes, and have different quirks around caching, checkout handoff, and
        rate limits. General React or Next.js skill, on its own, does not transfer that specific
        knowledge automatically. Ask directly how many headless builds an agency has shipped on{' '}
        <em>your</em> exact platform, not ecommerce in general, and ask them to name the specific
        API or SDK version they used.
      </p>
      <p className="mb-6 text-gray-800">
        This matters even more moving between platforms. Shopify&apos;s Hydrogen and Storefront
        API assume Shopify&apos;s own checkout and hosting patterns and are relatively opinionated.
        Adobe Commerce&apos;s GraphQL API and PWA Studio sit on top of a more open, self-hosted or
        cloud-managed platform with a typically more complex catalog structure, including
        multi-store views and B2B (business-to-business) pricing tiers. An agency strong in one is
        not automatically strong in the other. Ask for platform-specific proof for whichever one
        you are actually building on, not a portfolio that happens to include both.
      </p>

      <h2 id="case-studies" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How to test a headless case study
      </h2>
      <p className="mb-4 text-gray-800">
        Ask what the storefront was actually built with: Hydrogen, a custom Next.js build against
        the Storefront API, PWA Studio, or a custom build against Adobe Commerce&apos;s GraphQL
        API. Ask what specific problem the headless approach solved that a theme could not have:
        a concrete page speed target, a design requirement the platform&apos;s theme system could
        not support, running multiple brands off one backend, or something else specific to that
        client&apos;s business.
      </p>
      <p className="mb-6 text-gray-800">
        Ask to see the live site if it still exists, and check it yourself on a phone. A vague
        answer, something like &quot;we made it fast and modern,&quot; without naming the actual
        technical approach behind it, is a sign the case study is being described secondhand
        rather than by the people who actually built it. If the site no longer exists, that alone
        is not disqualifying, since storefronts do get rebuilt later by the client, but the team
        should still be able to describe the architecture in specific, technical language.
      </p>

      <h2 id="ownership" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Ownership of code and data
      </h2>
      <p className="mb-4 text-gray-800">
        You should own the code in every ecommerce engagement, but it matters more here because
        there is genuinely more custom code at stake. A themed Shopify or Adobe Commerce site can
        usually be handed to a new agency without much drama, since it still lives inside the
        platform&apos;s own structure. A custom headless frontend is a standalone codebase; if you
        do not own it outright, with full access to the repository, you can end up effectively
        locked into the agency that built it.
      </p>
      <p className="mb-4 text-gray-800">
        Get it in writing, before signing anything, that you own the complete frontend codebase,
        not just &quot;the website.&quot; This is also where{' '}
        <strong>vendor lock-in</strong> tends to appear on headless projects specifically: watch
        for a headless CMS or search tool chosen with proprietary, hard-to-migrate data formats, or
        technical documentation that exists only inside one developer&apos;s head instead of being
        handed over as a written deliverable.
      </p>
      <p className="mb-6 text-gray-800">
        A simple test: ask what would happen, concretely, if you wanted to move to a different
        agency six months after launch. A team confident in their own work will answer this
        directly. A team that gets evasive is telling you something about how the project is
        actually structured underneath the pitch.
      </p>

      <h2 id="post-launch" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Post-launch support for a custom codebase
      </h2>
      <p className="mb-4 text-gray-800">
        On a themed store, most post-launch issues are theme or app bugs the platform&apos;s
        ecosystem has usually already seen. On a headless build, the agency is supporting custom
        code across more moving parts: the frontend itself, the API layer connecting it to the
        backend, and any headless CMS or search tool sitting in between. Ask specifically who is on
        call if the storefront goes down, how fast they respond, and what a defined support window
        after launch actually covers.
      </p>
      <p className="mb-6 text-gray-800">
        Also ask about the longer term. Shopify and Adobe Commerce both ship new API versions over
        time, and a headless frontend needs someone actively keeping its framework and integration
        up to date. Ask what an ongoing maintenance retainer covers for a headless build
        specifically; it is almost always a broader scope than maintaining a themed store, and an
        agency that treats it the same way is underestimating the job.
      </p>

      <h2 id="cost" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Cost transparency without a guessed number
      </h2>
      <p className="mb-4 text-gray-800">
        You can absolutely get a fixed price on a headless project, but only after a real discovery
        phase, the structured research an agency does about your business, catalog, and
        integrations, happens first. Headless projects involve more architecture decisions than a
        themed build, so a price quoted before that research is a guess dressed up as a number.
      </p>
      <p className="mb-6 text-gray-800">
        Ask for a fixed-price milestone plan once discovery is complete, broken into stages you can
        check progress against: architecture and API integration, the frontend build itself,
        content and search setup if a headless CMS is involved, testing across devices, and launch.
        Just as important, ask what happens if scope changes partway through. Headless projects
        can uncover integration complexity once developers get into a platform&apos;s real data
        that nobody could have predicted from the outside. A written change-request process,
        agreed before work starts, protects both sides when that happens.
      </p>

      <h2 id="red-flags" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Red flags specific to headless projects
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Red flag</th>
              <th className="p-3 border text-left">Why it matters here specifically</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Calls any custom website &quot;headless&quot; loosely</td>
              <td className="p-3 border text-gray-800">Suggests they don&apos;t distinguish the architecture from general custom development</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Can&apos;t name the specific API or framework used</td>
              <td className="p-3 border text-gray-800">Real headless work always involves a specific, nameable technical stack</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">General ecommerce portfolio, no platform-specific headless proof</td>
              <td className="p-3 border text-gray-800">Storefront design skill does not equal API-level architecture experience</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Vague about who owns the frontend codebase</td>
              <td className="p-3 border text-gray-800">Custom headless code is easier to get locked into than a themed store</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">No mention of ongoing API version maintenance</td>
              <td className="p-3 border text-gray-800">A headless frontend needs active upkeep as the platform&apos;s API evolves</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        None of these alone is automatically disqualifying, since even a strong team might
        misspeak on a single question. But two or more of these together, on the same agency, is a
        real reason to keep looking, specifically for a headless project where the technical stakes
        are higher than a themed build.
      </p>
      <p className="mb-6 text-gray-800">
        One more general point worth remembering while you run this checklist: performance and
        checkout experience are not abstract concerns. Baymard Institute, an independent ecommerce
        UX research organization, has found in ongoing benchmarking of major ecommerce sites that
        roughly seven in ten shoppers abandon their cart, and that the large majority of sites they
        studied have a &quot;mediocre&quot; or worse checkout experience by their own usability
        criteria (
        <a
          href="https://baymard.com/checkout-usability"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          Baymard Institute, checkout usability research
        </a>
        ). Headless does not fix that automatically. It only gives a competent team more room to
        get architecture and checkout flow right, which is exactly why the team you choose matters
        more than the label &quot;headless&quot; itself.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Where FactoryJet fits in this framework
      </h2>
      <p className="mb-6 text-gray-800">
        This guide is meant to work the same way if you point it at us. Here is how we would
        actually run each step: we walk through real architecture decisions in detail, not just a
        finished result, because that is the fastest way for you to judge whether a team
        understands the mechanics of a headless build. We are upfront about which platform and API
        combination we have the deepest hands-on experience with rather than claiming
        equal strength everywhere. Every engagement ships with full client ownership of the
        frontend codebase on launch day. And a headless build gets a support plan sized for a
        custom codebase, not the lighter plan that fits a themed store. If you want a second
        opinion on your own architecture before committing to anyone, that conversation costs
        nothing.
      </p>

      {/* End CTA */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-10 mb-4">
        <p className="font-semibold text-gray-900 mb-2">
          Run this checklist on your own shortlist first
        </p>
        <p className="text-gray-800 mb-4">
          Use the architecture questions, the platform-specific checks, and the red flags above on
          every agency you are considering, including us. If you want a second opinion on your
          Shopify or Adobe Commerce architecture before you commit to anyone, we will walk through
          it with you directly, no pressure attached.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Get a straight answer on your architecture
          </a>
          <a
            href="/services/headless-shopify-development"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-amber-100 transition-colors"
          >
            Explore our headless Shopify approach
          </a>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl my-8">
        <p className="font-semibold text-orange-900 mb-2">
          Want a plain-language read on your specific architecture?
        </p>
        <p className="text-gray-800 mb-3">
          Bhavesh runs discovery calls himself. Book a 30-minute call and get a clear, honest read
          on whether headless is right for your catalog, and what to prioritize first. No jargon,
          no pressure.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Book a 30-min call
        </a>
      </div>
    </>
  ),
};

export default post;
