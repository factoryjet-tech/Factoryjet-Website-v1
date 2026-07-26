import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

const SLUG = 'what-is-agentic-commerce';
const URL = `https://factoryjet.com/blog/${SLUG}`;

// Single source of truth for the FAQ block. The FAQPage schema below is derived
// from this array, so the two can never drift apart.
const FAQS: FAQItem[] = [
  {
    q: 'What is agentic commerce?',
    a: 'Agentic commerce is online shopping where an AI agent does the work on a shopper’s behalf. The shopper describes what they need, and the agent searches, compares options, picks one, and completes the purchase using payment credentials the shopper already approved. The buyer is still a person. The thing doing the clicking is software.',
  },
  {
    q: 'What is an example of agentic commerce?',
    a: 'The clearest live example is Instant Checkout in ChatGPT. Stripe and OpenAI launched it in September 2025, starting with US Etsy sellers and extending to Shopify merchants including Glossier, Vuori, Spanx and SKIMS. A shopper asks ChatGPT for a product, a Buy button appears in the conversation, and the order is placed without the shopper ever landing on the store.',
  },
  {
    q: 'Is agentic commerce the future?',
    a: 'It is one real future among several, and the honest answer is that it is early. The plumbing is being built quickly by Stripe, OpenAI, Google, Mastercard, Visa and Shopify, which is a strong signal. Adoption by ordinary shoppers is still small compared with normal ecommerce. Treat it as a channel worth preparing for now, not as a replacement for the storefront you already have.',
  },
  {
    q: 'What is the difference between ecommerce and agentic commerce?',
    a: 'In traditional ecommerce a human browses your site, reads your pages, and clicks Buy. In agentic commerce an AI agent reads your structured data, compares you against alternatives, and clicks Buy. The transaction is the same. The audience for your merchandising is not. One is designed to persuade a person, the other has to satisfy a machine that never sees your hero image.',
  },
  {
    q: 'What are the 4 types of e commerce?',
    a: 'The four standard categories are B2C (business selling to consumers), B2B (business selling to business), C2C (consumer selling to consumer through a marketplace) and C2B (an individual selling to a business, such as a freelancer or a stock photographer). Agentic commerce is not a fifth type. It is a new way of transacting that can sit on top of any of the four.',
  },
  {
    q: 'What are the risks of agentic commerce?',
    a: 'The main ones: an agent buying the wrong thing or at the wrong time, disputes over who is accountable when an agent gets it wrong, losing the customer relationship when the agent owns the conversation, specification-led comparison stripping away brand preference, fraud from agents impersonating shoppers, and data quality problems where a stale feed causes a sale you cannot fulfil. Most of these are being addressed by protocols like AP2 and by tokenized credentials, but none are fully solved.',
  },
  {
    q: 'What companies offer agentic commerce?',
    a: 'The current field includes OpenAI (Instant Checkout in ChatGPT), Stripe (the Agentic Commerce Protocol and Shared Payment Tokens), Google (the Agent Payments Protocol, AP2), Mastercard (Agent Pay and Agentic Tokens), Visa (Intelligent Commerce), Shopify, Salesforce (Agentforce Commerce), Amazon, Microsoft (Copilot shopping), Perplexity and BigCommerce. Some provide the buying surface, some provide the payment rails, and some provide the store side.',
  },
  {
    q: 'What is the Agentic Commerce Protocol?',
    a: 'The Agentic Commerce Protocol, or ACP, is an open standard co-developed by Stripe and OpenAI and released under the Apache 2.0 licence. It defines how an AI agent requests a checkout from a business and how payment credentials are passed securely using a token. The point is that a merchant implements it once and can then sell through any compatible agent instead of building a custom integration per assistant.',
  },
  {
    q: 'What is AP2 and how is it different from ACP?',
    a: 'AP2 is the Agent Payments Protocol, announced by Google in September 2025 with more than 60 partner organisations including PayPal, Mastercard, American Express, Adyen, Etsy and Salesforce. Where ACP focuses on the checkout handshake between an agent and a merchant, AP2 focuses on proving authority: it uses cryptographically signed Mandates so a merchant can verify that a shopper really did authorise this agent to make this purchase.',
  },
  {
    q: 'Who is the merchant of record in an agentic purchase?',
    a: 'Under the Agentic Commerce Protocol the business stays the merchant of record. Stripe is explicit about this: the merchant keeps control over which products can be sold, how they are presented, how transactions are processed and how orders are fulfilled. The agent introduces the buyer, it does not take over the sale.',
  },
  {
    q: 'How does an AI agent pay without seeing my card number?',
    a: 'Through tokenization. Stripe uses a Shared Payment Token that carries permission to charge without exposing the underlying card. Mastercard uses what it calls Agentic Tokens, which bind a credential to a specific agent and a specific consent policy. In both cases the agent handles a scoped token, never the raw card details.',
  },
  {
    q: 'Can an AI agent buy something without asking me first?',
    a: 'It can if you set it up that way, and that is exactly why the authorisation protocols exist. In AP2 a shopper signs an Intent Mandate up front with rules attached, for example conditions and limits, and the agent can only generate a purchase once those conditions are met. For most consumer flows today the agent still shows a confirmation step before charging anything.',
  },
  {
    q: 'Does agentic commerce replace SEO?',
    a: 'No, it changes what SEO has to feed. Classic ranking still matters because agents draw on the same web that search engines index. What gets added is structured, machine-readable product and policy data, plus being cited in the sources an AI assistant trusts. Think of it as SEO gaining a second reader who cannot see your design.',
  },
  {
    q: 'Will agentic commerce kill my product pages?',
    a: 'It will change their job, not delete them. Product pages become the canonical record that agents parse and that shoppers land on when they want to verify a recommendation. The pages that suffer are the thin ones with a title, three bullet points and no specifications, because there is nothing there for an agent to evaluate.',
  },
  {
    q: 'How do I make my store agent-ready?',
    a: 'Start with clean structured data on every product, complete and current specifications, an accurate product feed, plainly stated shipping and returns policies in text a machine can read, real-time inventory accuracy, and a checkout your payment provider can expose to agents. If you are on Stripe already, enabling agentic payments can be a very small change on the payments side. The data work is the bigger job.',
  },
  {
    q: 'What product data do AI agents actually need?',
    a: 'Identity fields first: GTIN or MPN, brand, exact model, variant. Then attributes a comparison needs: dimensions, materials, compatibility, capacity, care instructions, warranty length. Then commercial facts: availability, shipping timeframe, returns window. Ambiguity is what gets you skipped, because an agent cannot infer what a photograph implies.',
  },
  {
    q: 'What is a product feed and why does it suddenly matter?',
    a: 'A product feed is a structured file or API that lists your catalogue in a fixed format that machines can consume. It used to matter mainly for shopping ads and marketplaces. It matters far more now because it is often the only version of your catalogue an AI agent ever reads, so a stale or incomplete feed means you are simply absent from the comparison.',
  },
  {
    q: 'Can agents handle returns, refunds and support?',
    a: 'Increasingly yes on the buyer side, where an agent can raise the request on a shopper’s behalf. On the merchant side you still own the policy and the resolution. Practically this means your returns terms need to be published as clear text rather than buried in a PDF or an image, because that is what the agent will quote back to the customer.',
  },
  {
    q: 'Does agentic commerce work for B2B?',
    a: 'It fits B2B well, arguably better than consumer retail, because B2B buying is already spec-driven and repeat-heavy. Reordering consumables, matching part numbers, checking compatibility and comparing lead times are all tasks an agent does well. The blocker in B2B is usually data: contract terms, account-specific catalogues and approval workflows all have to be expressed in a way software can follow.',
  },
  {
    q: 'What happens to my brand if an agent picks the product?',
    a: 'Brand still matters, it just gets expressed differently. An agent weighs reviews, return rates, delivery reliability, warranty terms and how often trusted sources mention you. Emotional brand-building still shapes the reviews and the third-party coverage the agent reads. What stops working is a beautiful page that says nothing verifiable.',
  },
  {
    q: 'How do I track sales that came from an AI agent?',
    a: 'Watch three things. First, referral traffic from AI assistant domains in your analytics. Second, orders arriving through agentic checkout surfaces, which your payment provider can usually flag. Third, direct and branded search lift, because agents often recommend you and the shopper then arrives by typing your name. Attribution is genuinely messy right now and anyone claiming perfect measurement is overselling.',
  },
  {
    q: 'Is agentic commerce only for big brands?',
    a: 'No, and the early evidence points the other way. Instant Checkout launched with Etsy sellers, who are mostly very small businesses. The advantage goes to whoever has the cleanest, most complete data, and a focused catalogue is far easier to get right than a sprawling one.',
  },
  {
    q: 'Do AI agents see my paid ads?',
    a: 'Generally not in the way a human does. An agent working from a chat interface is not scrolling a results page full of ad units. That is the strategic point: media that used to buy attention on a search results page does not automatically buy presence inside an AI recommendation.',
  },
  {
    q: 'What is the difference between agentic commerce and conversational commerce?',
    a: 'Conversational commerce means shopping through a chat interface, usually with a human or a scripted bot helping. Agentic commerce means the software takes actions on its own: it can search, decide and transact. Chat is the interface in both. Autonomy is what makes it agentic.',
  },
  {
    q: 'What is the difference between agentic AI and agentic commerce?',
    a: 'Agentic AI is the general capability of software that plans and acts toward a goal. Agentic commerce is that capability applied to buying and selling. If you want the underlying concept first, our guide to what agentic AI is covers the foundations, and this piece stays on the commerce side.',
  },
  {
    q: 'Which AI assistants can actually complete a purchase today?',
    a: 'ChatGPT is the most developed through Instant Checkout. Perplexity has shopping flows with buy actions. Amazon runs agent-assisted buying inside its own app and site. Microsoft Copilot has been building merchant shopping experiences. Most other assistants still stop at recommending and handing the shopper a link.',
  },
  {
    q: 'Is agentic commerce safe for shoppers?',
    a: 'Safer than handing an agent your raw card details, which is precisely what the tokenized approaches are designed to avoid. The genuine open questions are accountability and consent: who is liable when an agent buys the wrong item, and how a merchant proves the shopper really authorised it. AP2 exists specifically to create a signed, non-repudiable record of that authorisation.',
  },
  {
    q: 'Does agentic commerce change how I write product descriptions?',
    a: 'Yes. Lead with facts an agent can parse: what it is, what it fits, what it is made of, what it includes, what it does not. Keep the persuasive copy, but put it after the specifics rather than instead of them. Vague marketing language is invisible to a machine doing a comparison.',
  },
  {
    q: 'Should I build my own shopping agent?',
    a: 'Most stores should not, at least not first. The higher-return work is making your existing catalogue readable by the agents shoppers already use. A custom agent makes sense when you have a genuinely complex configuration or specification problem where guided selection is a real part of the buying experience.',
  },
  {
    q: 'How long until agentic commerce matters for a small store?',
    a: 'The data work matters now because it takes months to do properly and it also improves classic search, marketplaces and ads in the meantime. The revenue from agentic channels will arrive unevenly by category. Categories with clear specifications and repeat purchases will feel it first.',
  },
  {
    q: 'Do I need to be on Shopify to sell through ChatGPT?',
    a: 'No. Shopify was an early large-scale route in, and Etsy sellers were first, but the Agentic Commerce Protocol is an open standard published under Apache 2.0 that any business or platform can implement. Your payment provider and your platform both matter for how much work it is, not for whether it is possible.',
  },
  {
    q: 'What is the single biggest mistake merchants are making right now?',
    a: 'Treating this as a marketing problem when it is a data problem. Teams write a blog post about agentic commerce while their feed still has missing attributes, wrong stock levels and a returns policy that only exists as an image. Fix the catalogue first, then talk about it.',
  },
  {
    q: 'Does FactoryJet build for agentic commerce?',
    a: 'Yes. We build and rework ecommerce stores so both people and agents can read them: structured product data, clean feeds, machine-readable policies, and checkout set up to work with agentic payment flows. Our agentic commerce page explains the approach, and Commerceflo is our AI operator for stores that want the ongoing work handled.',
  },
  {
    q: 'Where should I start if I only have time for one thing?',
    a: 'Audit your top selling products for complete, accurate structured data, then fix the gaps. It is unglamorous and it has the biggest payoff of anything available, because every downstream channel, agents included, reads the same underlying facts.',
  },
];

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': URL,
    name: 'What Is Agentic Commerce? A Plain-English Guide (2026)',
    description:
      'Agentic commerce is online shopping where an AI agent searches, compares and buys on a shopper’s behalf. Here is what it means, real examples, the companies building it, and how to make a store agent-ready.',
    url: URL,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', name: 'FactoryJet', url: 'https://factoryjet.com' },
    about: {
      '@type': 'DefinedTerm',
      name: 'Agentic commerce',
      description:
        'Online shopping in which an AI agent acts on a shopper’s behalf: it searches, compares options, selects a product and completes the purchase using payment credentials the shopper has already authorised.',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#answer-first', '#agentic-commerce-definition'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://factoryjet.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'What Is Agentic Commerce?', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://factoryjet.com/agentic-commerce#service',
    name: 'Agentic commerce readiness and ecommerce development',
    serviceType: 'Agentic commerce enablement',
    description:
      'FactoryJet prepares ecommerce stores for AI agents: structured product data, accurate feeds, machine-readable shipping and returns policies, and checkout configured for agentic payment flows.',
    provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'India' },
    ],
    url: 'https://factoryjet.com/agentic-commerce',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Companies building agentic commerce in 2026',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: 10,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'OpenAI', description: 'Instant Checkout in ChatGPT, the most developed consumer buying surface for agentic commerce.' },
      { '@type': 'ListItem', position: 2, name: 'Stripe', description: 'Co-author of the Agentic Commerce Protocol and provider of the Shared Payment Token used to pass credentials to agents.' },
      { '@type': 'ListItem', position: 3, name: 'Google', description: 'Agent Payments Protocol (AP2), an open standard for proving a shopper authorised an agent to buy.' },
      { '@type': 'ListItem', position: 4, name: 'Mastercard', description: 'Agent Pay and Agentic Tokens, extending card tokenization to purchases made by AI agents.' },
      { '@type': 'ListItem', position: 5, name: 'Visa', description: 'Intelligent Commerce, a programme for issuing agent-usable payment credentials with cardholder-set controls.' },
      { '@type': 'ListItem', position: 6, name: 'Shopify', description: 'Merchant platform whose catalogue and checkout feed agentic buying surfaces at scale.' },
      { '@type': 'ListItem', position: 7, name: 'Salesforce', description: 'Agentforce Commerce, agent capability built into enterprise commerce and service workflows.' },
      { '@type': 'ListItem', position: 8, name: 'Amazon', description: 'Agent-assisted shopping and buying inside its own storefront and app.' },
      { '@type': 'ListItem', position: 9, name: 'Microsoft', description: 'Copilot shopping experiences and merchant programmes for agent-led discovery.' },
      { '@type': 'ListItem', position: 10, name: 'Perplexity', description: 'Answer-engine shopping flows with buy actions attached to product recommendations.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export const post: BlogPost = {
  id: '350',
  slug: SLUG,
  title: 'What Is Agentic Commerce? A Plain-English Guide (2026)',
  excerpt:
    'Agentic commerce is online shopping where an AI agent searches, compares and buys on your behalf. Here is the plain definition, real examples that already work, the companies building it, the risks nobody has solved yet, and what it takes to make a store agent-ready.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jul 26, 2026',
  readTime: '13 min read',
  imageUrl: '/blog-images/what-is-agentic-ai.webp',
  imageAlt: 'A product team reviewing how AI agents discover, compare and buy from an online store',
  meta: {
    title: 'What Is Agentic Commerce? A Plain-English Guide (2026)',
    description:
      'Agentic commerce is online shopping where an AI agent searches, compares and buys for you. Plain definition, real examples, the companies building it, the risks, and how to make your store agent-ready.',
  },
  keyTakeaways: [
    'Agentic commerce is online shopping where an AI agent acts on the shopper’s behalf: it searches, compares, chooses and completes the purchase using credentials the shopper already approved.',
    'It is already live. Stripe and OpenAI launched Instant Checkout in ChatGPT in September 2025, starting with US Etsy sellers and extending to Shopify merchants.',
    'The rails are being standardised fast: Stripe and OpenAI published the Agentic Commerce Protocol under Apache 2.0, and Google published the Agent Payments Protocol (AP2) with more than 60 partners.',
    'The business stays the merchant of record. Agents introduce the buyer, they do not take over the sale, the branding or the fulfilment.',
    'The biggest shift is who reads your store. Agents cannot see your hero image, so complete structured product data beats beautiful design in the comparison step.',
    'Real risks remain: accountability when an agent gets it wrong, losing the customer relationship, and stale catalogue data causing sales you cannot fulfil.',
    'The move with the biggest payoff for most stores is unglamorous: fix product data, feeds and machine-readable policies before doing anything else.',
  ],
  faqs: FAQS,
  content: (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ANSWER-FIRST BLOCK */}
      <div id="answer-first" className="not-prose bg-fj-cream border-l-4 border-[#F05A28] rounded-2xl p-5 md:p-6 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B23E13] mb-2">The short answer</p>
        <p id="agentic-commerce-definition" className="text-lg md:text-xl text-gray-900 leading-relaxed font-semibold">
          Agentic commerce is online shopping where an AI agent does the work on your behalf. You tell an assistant like
          ChatGPT what you need, and it searches, compares the options, picks one and completes the purchase using
          payment credentials you already approved. The buyer is still a person. The thing doing the clicking is software.
        </p>
        <p className="text-gray-800 mt-3 leading-relaxed">
          It is not a hypothetical. Stripe and OpenAI turned it on for real shoppers in September 2025, and Google,
          Mastercard, Visa, Shopify and Salesforce have all shipped pieces of the plumbing since.
        </p>
      </div>

      <p className="mb-4">
        Most explanations of this term are written by companies selling the software, which is why they read like a
        brochure. Here is the version we give clients: agentic commerce moves the browsing, the comparing and often the
        buying from a human on your website to a piece of software acting for that human. Everything downstream of that
        one change is what makes it interesting, and occasionally uncomfortable, for anyone running a store.
      </p>
      <p className="mb-4">
        This guide stays on commerce. If you want the underlying concept first, read{' '}
        <a href="/blog/what-is-agentic-ai" className="text-[#B23E13] underline hover:text-[#F05A28]">what agentic AI is</a>{' '}
        and, if you keep tripping over the vocabulary,{' '}
        <a href="/blog/agentic-ai-vs-ai-agents" className="text-[#B23E13] underline hover:text-[#F05A28]">agentic AI versus AI agents</a>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What agentic commerce actually is, in plain terms</h2>
      <p className="mb-4">
        Break the phrase in half. Commerce is buying and selling. Agentic means software that can plan and take action
        toward a goal rather than just answer a question. Put them together and you get software that can be told
        &quot;find me a waterproof jacket that packs down into a carry-on, in navy, that ships before Friday&quot; and then go
        and do it, end to end.
      </p>
      <p className="mb-4">
        Three things separate it from what came before. First, <strong>autonomy</strong>: the agent decides which options
        are worth showing you rather than dumping a results page in front of you. Second, <strong>action</strong>: it can
        actually transact, not just recommend. Third, <strong>delegated authority</strong>: you gave it permission to
        spend on your behalf, within limits, in advance.
      </p>
      <p className="mb-4">
        A few things it is not. It is not a chatbot on your storefront answering size questions, that is conversational
        commerce. It is not a recommendation engine ranking products for a human to click. And it is not a shopping
        assistant that finds a product and then hands you a link, although that is the transitional stage most
        assistants are in right now. The moment the software completes the purchase is the moment it becomes agentic.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How an agentic purchase actually happens</h2>
      <p className="mb-4">
        There are four stages, and it is worth understanding each because your store touches all of them differently.
      </p>
      <p className="mb-4">
        <strong>1. Intent.</strong> The shopper describes a need in ordinary language, usually with constraints attached:
        a delivery deadline, a size, a compatibility requirement. Under Google&apos;s AP2 protocol this can be captured
        formally as an Intent Mandate, a cryptographically signed record of exactly what the shopper authorised.
      </p>
      <p className="mb-4">
        <strong>2. Discovery and comparison.</strong> The agent gathers candidates. This is where your store either
        exists or does not. The agent is reading structured product data, feeds, specifications, reviews and whatever
        trusted sources mention you. It is not reading your homepage animation or your lifestyle photography.
      </p>
      <p className="mb-4">
        <strong>3. Checkout.</strong> The agent requests a checkout from the merchant. Stripe and OpenAI&apos;s Agentic
        Commerce Protocol defines this handshake: the agent passes a secure token rather than raw card details, and the
        merchant confirms the order. Stripe states the principle bluntly, that customers should be able to securely buy
        where they discover while businesses sell through new channels without giving up trust, brand or control.
      </p>
      <p className="mb-4">
        <strong>4. Fulfilment and aftercare.</strong> The merchant fulfils, exactly as it would for any other order. If
        something goes wrong, the agent may raise the return on the shopper&apos;s behalf, quoting your published policy
        back at you. Which is a good reason for that policy to exist as clear text rather than a scanned PDF.
      </p>
      <p className="mb-4">
        The important detail, and the one that calms most merchants down: the business remains the merchant of record.
        You keep control over which products can be sold, how they are presented, how transactions are processed and how
        orders are fulfilled. The agent introduces the buyer. It does not take over your business.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Traditional ecommerce vs agentic commerce</h2>
      <p className="mb-4">
        The transaction looks identical from your order dashboard. Almost everything upstream of it is different.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">What changes</th>
              <th className="p-3 border text-left">Traditional ecommerce</th>
              <th className="p-3 border text-left">Agentic commerce</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border"><strong>Who browses</strong></td>
              <td className="p-3 border">A person, on your site</td>
              <td className="p-3 border">An AI agent, often without ever loading your site</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border"><strong>Where discovery happens</strong></td>
              <td className="p-3 border">Search results, ads, social, marketplaces</td>
              <td className="p-3 border">Inside a conversation with an assistant</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border"><strong>What wins the sale</strong></td>
              <td className="p-3 border">Design, copy, social proof, urgency</td>
              <td className="p-3 border">Specification match, availability, delivery reliability, review signal</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border"><strong>What the product page is for</strong></td>
              <td className="p-3 border">Persuading a human to click Buy</td>
              <td className="p-3 border">Being the canonical, parseable record of the facts</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border"><strong>How checkout runs</strong></td>
              <td className="p-3 border">Human enters card details on your checkout</td>
              <td className="p-3 border">Agent passes a scoped token via a protocol such as ACP</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border"><strong>Merchant of record</strong></td>
              <td className="p-3 border">You</td>
              <td className="p-3 border">Still you, under ACP</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border"><strong>What you optimise</strong></td>
              <td className="p-3 border">Conversion rate, page speed, funnel UX</td>
              <td className="p-3 border">Data completeness, feed accuracy, machine-readable policies</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border"><strong>Paid media role</strong></td>
              <td className="p-3 border">Buys attention on a results page</td>
              <td className="p-3 border">Largely bypassed inside the assistant</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border"><strong>Attribution</strong></td>
              <td className="p-3 border">Click paths and campaign tags</td>
              <td className="p-3 border">Assistant referrals, branded search lift, agentic checkout flags</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border"><strong>Failure mode</strong></td>
              <td className="p-3 border">Shopper abandons the cart</td>
              <td className="p-3 border">Agent never shortlists you because your data was incomplete</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        That last row is the one to sit with. In traditional ecommerce a weak product page still gets seen and can still
        convert someone who arrived motivated. In agentic commerce an incomplete product record does not lose the sale,
        it removes you from the comparison entirely, silently, with no bounce rate to warn you.
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl my-8 not-prose">
        <p className="font-semibold text-orange-900 mb-2">Wondering whether your store is readable by an agent?</p>
        <p className="text-orange-800 mb-3">
          Most stores fail on the boring stuff: missing attributes, stale feeds, policies trapped in images. Our agentic
          commerce field guide walks through what agent-ready actually means and where the gaps usually are.
        </p>
        <a
          href="/agentic-commerce"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Read the agentic commerce guide &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What is an example of agentic commerce?</h2>
      <p className="mb-4">
        The cleanest live example is Instant Checkout in ChatGPT. Stripe and OpenAI announced it on 29 September 2025.
        A shopper in the US asks ChatGPT for something, a supported product appears in the conversation with a Buy
        button, and the purchase completes inside the chat. It launched with US Etsy sellers and extended to Shopify
        merchants including Glossier, Vuori, Spanx and SKIMS. Payment runs through a Shared Payment Token so the
        assistant never touches the underlying card.
      </p>
      <p className="mb-4">
        A second example, less glamorous and probably more valuable: reordering. A facilities manager tells an assistant
        to restock the same filters as last quarter, matching the part number, from whichever supplier can deliver by
        the 15th. That is agentic commerce doing something a human genuinely does not want to do, and it is the shape
        most B2B adoption will take.
      </p>
      <p className="mb-4">
        A third: constrained gift buying. &quot;Something for a six year old who likes dinosaurs, arriving before
        Saturday, avoid anything with small parts.&quot; Multiple hard constraints, a deadline and a safety filter. That
        is a miserable job for a person with fifteen browser tabs and a natural job for an agent.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What companies offer agentic commerce?</h2>
      <p className="mb-4">
        It helps to sort them by which part of the chain they own. Some provide the surface where shoppers buy, some
        provide the payment rails, and some provide the merchant side.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>OpenAI.</strong> Instant Checkout in ChatGPT is currently the most developed consumer buying surface.
          It is where the phrase stopped being theoretical.
        </li>
        <li>
          <strong>Stripe.</strong> Co-author of the Agentic Commerce Protocol with OpenAI, published under the Apache
          2.0 licence, plus the Shared Payment Token that carries authority to charge without exposing card details.
          Merchants already on Stripe can enable agentic payments with a very small code change.
        </li>
        <li>
          <strong>Google.</strong> The Agent Payments Protocol, AP2, announced 17 September 2025 with more than 60
          partner organisations. It solves a different problem to ACP: proving that a shopper genuinely authorised this
          agent to make this purchase, using signed Intent and Cart Mandates.
        </li>
        <li>
          <strong>Mastercard.</strong> Agent Pay, its agentic payments programme, introduces Agentic Tokens that bind a
          tokenized card credential to a specific agent and a specific consent policy.
        </li>
        <li>
          <strong>Visa.</strong> Intelligent Commerce takes a comparable route, issuing credentials an agent can use
          inside limits the cardholder sets.
        </li>
        <li>
          <strong>Shopify.</strong> The largest single pool of agent-reachable merchants, which is why it was an early
          route into Instant Checkout at scale.
        </li>
        <li>
          <strong>Salesforce.</strong> Agentforce Commerce brings agent capability into enterprise commerce and service
          workflows, and Salesforce has publicly backed the Agentic Commerce Protocol.
        </li>
        <li>
          <strong>Amazon.</strong> Running its own agent-assisted shopping inside its own storefront, which is a
          deliberately different strategy: keep the agent, and the customer, inside the walls.
        </li>
        <li>
          <strong>Microsoft.</strong> Copilot shopping experiences and merchant programmes, positioned around agents
          that discover and act on behalf of both consumers and businesses.
        </li>
        <li>
          <strong>Perplexity.</strong> Shopping answers with buy actions attached, which fits its answer-engine model
          more naturally than it fits a traditional search results page.
        </li>
      </ol>
      <p className="mb-4">
        Notice how few of these are ecommerce platforms and how many are payment companies. That tells you where the
        hard problem was: not showing products to an agent, but letting an agent pay for them without anyone getting
        defrauded.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What are the 4 types of ecommerce, and where does agentic fit?</h2>
      <p className="mb-4">
        People ask this alongside agentic commerce, so it is worth settling. The four standard categories are B2C
        (business to consumer), B2B (business to business), C2C (consumer to consumer, usually via a marketplace) and
        C2B (an individual selling to a business, such as a freelancer or a stock photographer).
      </p>
      <p className="mb-4">
        Agentic commerce is not a fifth category. It is a transaction method that can sit on top of any of the four. A
        B2C shopper can use an agent. A B2B buyer can. A marketplace seller can be discovered by one. Anyone presenting
        it as a new type of ecommerce is confusing the channel with the counterparty.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What are the risks of agentic commerce?</h2>
      <p className="mb-4">
        Worth being straight about these, because the vendor material tends not to be.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Wrong purchases.</strong> An agent misreads a constraint and buys the wrong size, the wrong variant or
          at the wrong moment. Returns volume is the merchant&apos;s problem regardless of whose mistake it was.
        </li>
        <li>
          <strong>Accountability gaps.</strong> If a fraudulent or incorrect transaction happens, who carries it: the
          shopper, the agent provider, the payment network or the merchant? Google names this openly as one of the three
          problems AP2 exists to address, alongside authorisation and authenticity. It is being worked on, not solved.
        </li>
        <li>
          <strong>Losing the customer relationship.</strong> If the agent owns the conversation, you may never get the
          email address, the browsing signal or the chance to upsell. You get an order and a shipping label.
        </li>
        <li>
          <strong>Commoditisation.</strong> Agents compare on facts. If your differentiation is entirely emotional and
          none of it shows up in specifications, reviews or delivery performance, you will lose comparisons you used to
          win on presentation.
        </li>
        <li>
          <strong>Data quality turning into real losses.</strong> A stale feed that shows stock you do not have creates
          orders you must cancel. In traditional ecommerce that is an annoyance. In agentic commerce it damages the
          reliability signal agents use to rank you next time.
        </li>
        <li>
          <strong>Impersonation and fraud.</strong> An agent claiming an authority it does not have is a new attack
          surface. Tokenized credentials and signed mandates are the industry answer, which is exactly why they were
          built before mass adoption rather than after.
        </li>
        <li>
          <strong>Concentration risk.</strong> If a small number of assistants become the main discovery surface, being
          delisted or deprioritised by one of them is a serious commercial event with no appeals process you control.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Is agentic commerce the future?</h2>
      <p className="mb-4">
        Partly, and the honest position is somewhere between the hype and the shrug. The evidence for taking it
        seriously is that the infrastructure got built unusually fast and unusually cooperatively: two competing open
        protocols in the same month of 2025, the card networks shipping agent credentials, and the largest merchant
        platforms plugging in. Infrastructure that expensive does not get built for a fad.
      </p>
      <p className="mb-4">
        The evidence for calm is that shopper behaviour changes slowly. Most people still open a browser. Categories
        where touch, fit, taste or impulse dominate will resist delegation for a long time. And agent-driven buying
        currently represents a small share of total ecommerce.
      </p>
      <p className="mb-4">
        The useful framing: agentic commerce is an additional channel that rewards preparation and punishes neglect
        quietly. You do not need to bet the business on it. You do need your catalogue to be legible, because the work
        that makes you agent-ready is the same work that improves marketplace listings, shopping feeds and classic
        search. There is no wasted effort here.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to make your store agent-ready</h2>
      <p className="mb-4">
        In rough order of return. None of it is exciting, all of it compounds.
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>Complete your product identity fields.</strong> GTIN or MPN, brand, exact model, variant. Without
          these an agent cannot confidently match your product to the thing the shopper asked for.
        </li>
        <li>
          <strong>Fill in the attributes a comparison needs.</strong> Dimensions, weight, materials, compatibility,
          capacity, care, warranty length. If a human would need to ask, an agent will simply skip you.
        </li>
        <li>
          <strong>Publish Product and Offer structured data.</strong> Machine-readable markup on every product page,
          matching what your feed says. Contradictions between the two are worse than a gap.
        </li>
        <li>
          <strong>Keep the feed genuinely live.</strong> Availability and delivery timeframes need to be current, not
          nightly-ish. Accuracy is a ranking signal now, not just a customer service nicety.
        </li>
        <li>
          <strong>Write shipping and returns policies as plain text.</strong> Not an image, not a PDF, not hidden behind
          a tab that loads by script. The agent will quote it, so make sure it says what you mean.
        </li>
        <li>
          <strong>Restructure product copy facts-first.</strong> Specifics at the top, persuasion underneath. Keep the
          brand voice, just stop making a machine hunt for the material composition.
        </li>
        <li>
          <strong>Make reviews and returns performance visible.</strong> These are heavily weighted signals, and they
          are among the few places emotional brand equity still reaches an agent.
        </li>
        <li>
          <strong>Enable agentic payments with your provider.</strong> If you are on Stripe this is a small change. If
          you are elsewhere, ask your provider directly what their ACP or AP2 path looks like and when.
        </li>
        <li>
          <strong>Instrument the measurement.</strong> Tag assistant referrals, watch branded search, and ask your
          payment provider to flag orders arriving through agentic surfaces. Imperfect data beats none.
        </li>
        <li>
          <strong>Fix your top sellers first.</strong> Do not attempt the whole catalogue. Take the products that
          generate most of your revenue, get them genuinely complete, then work down.
        </li>
      </ol>
      <p className="mb-4">
        If your platform makes any of this painful, that is a signal about the platform rather than about agentic
        commerce. Our{' '}
        <a href="/services/ecommerce-development" className="text-[#B23E13] underline hover:text-[#F05A28]">ecommerce development</a>{' '}
        work increasingly starts with a data audit for exactly this reason, and{' '}
        <a href="/commerceflo" className="text-[#B23E13] underline hover:text-[#F05A28]">Commerceflo</a>{' '}
        is the AI operator we built to keep catalogue, feed and content accuracy from drifting once it is fixed.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The one-paragraph version</h2>
      <p className="mb-4">
        Agentic commerce is shopping where the software buys. The rails exist, the protocols are open, the card networks
        are on board, and the first real transactions have already happened. For a store owner it is not a strategy
        question yet, it is a hygiene question: can a machine read your catalogue accurately enough to recommend you.
        Most stores currently cannot. Fixing that is worth doing whether or not agents ever become your biggest channel.
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl my-8 not-prose">
        <p className="font-semibold text-orange-900 mb-2">Want to know where your store stands?</p>
        <p className="text-orange-800 mb-3">
          We will look at your product data, feed accuracy and policy markup and tell you plainly what an AI agent can
          and cannot read today. No obligation, and we will say so if there is nothing worth fixing.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Book a 30-minute call &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sources</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <a href="https://stripe.com/newsroom/news/stripe-openai-instant-checkout" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">
            Stripe, &quot;Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol codeveloped with OpenAI&quot; (29 September 2025)
          </a>
          : Instant Checkout launch, Etsy and Shopify merchants, Shared Payment Token.
        </li>
        <li>
          <a href="https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">
            Stripe, &quot;Developing an open standard for agentic commerce&quot; (29 September 2025)
          </a>
          : Apache 2.0 licence, delegated payments, and the merchant remaining the merchant of record.
        </li>
        <li>
          <a href="https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">
            Google Cloud, &quot;Announcing the Agent Payments Protocol (AP2)&quot; (17 September 2025)
          </a>
          : authorisation, authenticity and accountability; Intent and Cart Mandates; 60+ partner organisations.
        </li>
        <li>
          <a href="https://www.agenticcommerce.dev/" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">
            Agentic Commerce Protocol specification site
          </a>
          : the open standard itself, its scope and how merchants implement it.
        </li>
      </ul>

      <p className="mb-4">
        <em>
          Bhavesh Barot is the founder of FactoryJet. He runs every discovery call himself. If you want a straight
          answer on whether your catalogue is readable by AI agents, start with our{' '}
          <a href="/agentic-commerce" className="text-[#B23E13] underline hover:text-[#F05A28]">agentic commerce guide</a>{' '}
          or{' '}
          <a href="https://calendly.com/bhavesh-factoryjet/30min" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">book a 30-minute call</a>.
        </em>
      </p>
    </>
  ),
};
