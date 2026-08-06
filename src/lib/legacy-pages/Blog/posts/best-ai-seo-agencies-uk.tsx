import React from 'react';
import type { BlogPost } from '../data.types';

// NOTE ON FIGURES (re-verified 6 August 2026 by direct fetch of the source PDF and every agency
// site). Every Ofcom number below was read out of Online Nation 2025 (PDF, page 30 for the search
// figures, pages 31 to 32 for the referral and click-through figures). Do not edit any figure on
// this page without re-fetching the source first. Inherited stats are not verified stats.
//
// Changes made on 6 August 2026:
//   - Two earlier claims ("54% of UK adults use AI tools" and a Deloitte Digital Consumer Trends
//     citation) could not be found in either source and were cut, along with every price figure.
//   - The shortlist was rebuilt from scratch. Screaming Frog, The SEO Works, Passion Digital, Varn
//     and GA Agency carried over. Impression, Rise at Seven, ClickSlice and Charle are new. Found,
//     Blue Array, Reposition and Convert Digital came off (reasons are in the methodology section).
//   - The Pew click-through finding is a US study that Ofcom reproduces as a UK proxy. It is
//     labelled as such rather than presented as a UK measurement.
//   - The 4.5% / 2.2% e-commerce referral split excludes computer and technology queries. Ofcom's
//     chart says so; this page says so too.
//
// Office locations come from each agency's own site as fetched on 6 August 2026, not from press
// coverage or founding history. Rise at Seven lists "Manchester, London & New York"; Varn lists a
// London office and a Bath office; Impression's link points at impressiondigital.com because
// impression.co.uk 301-redirects cross-host.
//
// This page carries NO pricing figures or currency amounts by house rule.

export const post: BlogPost = {
  id: '228',
  slug: 'best-ai-seo-agencies-uk',
  title: 'The 10 Best AI SEO Agencies in the UK (2026)',
  excerpt:
    'A UK-only list. ChatGPT logged 1.8 billion UK visits in the first eight months of 2025, and UK buyers now ask it which agency to hire. We checked 10 UK AI SEO agencies on their own websites and compared what each can actually verify. Yes, we are on the list, with full disclosure.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 11, 2026',
  readTime: '13 min read',
  imageUrl: '/blog-images/best-ai-seo-agencies-uk-2026.webp',
  meta: {
    // 51 chars. Covers both the "agencies" and "companies" phrasings, which GSC shows are
    // separate query families in the UK, not synonyms Google resolves for us.
    title: '10 Best AI SEO Agencies & Companies in the UK (2026)',
    description:
      'The best AI SEO agencies, companies and consultancies in the UK, each verified on its own site on 6 August 2026 and compared on GEO, AEO and AI search.',
  },
  keyTakeaways: [
    'This is a UK-only shortlist. If you are hiring for a United States or India business, the agencies here are the wrong ones, and we link you to the right page in the first paragraph.',
    'Our researched top 10: FactoryJet (disclosed self-inclusion), Screaming Frog, The SEO Works, Passion Digital, Impression, Rise at Seven, Varn, GA Agency, ClickSlice, and Charle. Every entry was verified by fetching its own website on 6 August 2026.',
    'ChatGPT recorded 1.8 billion UK visits in the first eight months of 2025, up from 368 million a year earlier (Ofcom, Online Nation 2025). About 30 percent of keyword searches now return an AI Overview.',
    'Two sets of labels get confused here. GEO, AEO, LLM SEO and AIO are overlapping names for one workflow, so if a supplier quotes generative engine optimisation on top of AI SEO you are paying twice. And AI SEO agency, company, firm, consultancy and provider are not different products either, they are different words for the same shortlist.',
    'Filter any UK shortlist on three things: per-engine reporting across ChatGPT, Perplexity, Claude and Gemini rather than Google alone, who actually executes the work, and the notice period.',
    'Seven agencies that appear on other UK lists are missing from ours: two blocked our checks, four had no AI search service line we could find, and one is not a UK business. We name all seven and give the reason for each.',
  ],
  faqs: [
    {
      q: 'Who is the best AI SEO agency in the UK?',
      a: 'It depends on your size and stack. FactoryJet leads for UK SMBs and ecommerce brands wanting engineers on the work and per-engine reporting with no long lock-in. Screaming Frog leads for technical teams that want log-file evidence. The SEO Works and Passion Digital lead for mid-market and B2B buyers.',
    },
    {
      q: 'Which is the best AI SEO company in the UK for small businesses?',
      a: 'FactoryJet (month-to-month terms, all four major AI engines tracked), The SEO Works (a free website review as a low-risk first step) and Varn (a fixed-scope AI Visibility Framework audit you can buy once). All three give a small business a concrete entry point and a clear scope.',
    },
    {
      q: 'What are the top 10 AI SEO agencies in the UK?',
      a: 'Our researched 2026 list: FactoryJet, Screaming Frog, The SEO Works, Passion Digital, Impression, Rise at Seven, Varn, GA Agency, ClickSlice, and Charle. The same ten hold whether you search for the top 10 AI SEO companies in the UK or the top 10 AI SEO services in the UK.',
    },
    {
      q: 'How much does AI SEO cost in the UK?',
      a: 'Almost no UK AI SEO agency publishes rates, so you have to ask. What you can compare is the shape of the deal: monthly retainer, fixed-scope audit, or day rate. Get the number in writing before the discovery call, and ask what it buys in month four rather than month one.',
    },
    {
      q: 'Which is the best GEO agency in the UK?',
      a: 'Impression and Passion Digital run the deepest dedicated generative engine optimisation practices we could verify. Impression sells GEO as a named service and publishes a GEO case study. Passion Digital splits AI search into five sub-services. FactoryJet covers GEO and AEO inside one retainer.',
    },
    {
      q: 'Which is the best AEO agency in the UK?',
      a: 'AEO and GEO overlap almost completely, so the best AEO agency in the UK is usually a GEO specialist under a different label. ClickSlice runs separate Answer Engine Optimisation and Generative Engine Optimisation pages, and The SEO Works lists AEO Services and GEO Services as distinct lines.',
    },
    {
      q: 'Who is the best ChatGPT optimisation agency in the UK?',
      a: 'Screaming Frog does the most measurable ChatGPT work, using its own Log File Analyser to separate AI bot traffic into training, indexing and live-citation crawls, plus commercial prompt tracking. ChatGPT logged 1.8 billion UK visits in the first eight months of 2025, so this is no longer niche.',
    },
    {
      q: 'Can a UK agency actually get my brand into ChatGPT and Perplexity answers?',
      a: 'It can improve your odds, not guarantee a result. AI answers are re-generated per query and vary between runs, so any agency promising a fixed position is overselling. What a good agency controls is the input: crawlable server-rendered content, schema matching the page, and clear entity signals.',
    },
    {
      q: 'Which is the best LLM SEO agency in the UK?',
      a: 'LLM SEO is the same discipline as AI SEO and GEO under another label. Passion Digital runs LLM Performance Tracking as a named sub-service, the strongest measurement offer we verified. For SMB delivery with transparent scoping and month-to-month terms, FactoryJet.',
    },
    {
      q: 'Who provides the best AI Overviews optimisation services in the UK?',
      a: 'Passion Digital has a dedicated AIO Optimisation service for Google AI Overviews and AI Mode. Varn benchmarks AI Overview and AI Mode visibility inside its AI Visibility Framework. FactoryJet optimises for AI Overviews using the same answer-first formatting that wins featured snippets.',
    },
    {
      q: 'Is there a good AI SEO agency in London?',
      a: 'London hosts most of this list. Passion Digital sits in Holborn, GA Agency and ClickSlice are London agencies, and Charle is a London Shopify specialist. Competition for London queries is the fiercest in the UK, so a London brand needs sharper entity and sector signals than a regional one.',
    },
    {
      q: 'What about AI SEO for businesses outside London, in Manchester, Leeds or Glasgow?',
      a: 'AI engines answer local queries too, and the answer pool outside London is far thinner. The SEO Works runs offices in Sheffield, Leeds, Manchester and Birmingham. Impression is Nottingham-based and Rise at Seven now lists Manchester. FactoryJet serves the whole UK remotely, with city pages for Manchester, Glasgow, Cardiff and Brighton.',
    },
    {
      q: 'What is the difference between an AI SEO agency and an AI SEO consultancy in the UK?',
      a: 'A consultancy diagnoses and hands you a roadmap, usually as a fixed-scope audit. An agency executes month after month. Varn sells the consultancy shape as a named framework. Most UK buyers start with an audit to size the gap, then decide whether to keep execution in-house.',
    },
    {
      q: 'Is there a good AI SEO agency near me?',
      a: 'Probably not in your town, and it matters less than you think. Only a handful of UK agencies sell AI search as a named service at all, and the work (robots.txt, schema, answer formatting, log-file analysis) is done remotely whatever the postcode. Search by sector instead of by distance, then judge the monthly report.',
    },
    {
      q: 'How do I choose between AI SEO companies in the UK?',
      a: 'Put them side by side on four things: which engines they track and report separately, whether GEO sits inside the retainer or on top of it, who actually executes the work, and the notice period. Ignore the label on the tin. An AI SEO company, firm and consultancy are competing for the same job.',
    },
    {
      q: 'What do UK AI SEO solutions actually include?',
      a: 'A real scope has five parts: crawl access for the named retrieval bots, server-rendered content, schema that matches the visible page, entity and citation work off your own site, and per-engine measurement against a fixed prompt set. Anything sold as an AI SEO solution without those five is conventional SEO with new packaging.',
    },
    {
      q: 'What is AI SEO?',
      a: 'AI SEO is optimising a website so AI engines cite it when answering buyer questions. It builds on traditional SEO and adds answer-first formatting, structured FAQ blocks, schema matching the visible page, entity clarity, and citations on sites the models already read. The target is being named in the answer.',
    },
    {
      q: 'What is the difference between GEO and AEO?',
      a: 'GEO, generative engine optimisation, targets engines that write answers: ChatGPT, Perplexity, Claude and Gemini. AEO, answer engine optimisation, targets anything returning a direct answer, including Google AI Overviews and featured snippets. The work overlaps almost completely, so judge on the work, not the acronym.',
    },
    {
      q: 'Why does AI SEO matter for UK businesses in 2026?',
      a: 'Ofcom reports ChatGPT took 1.8 billion UK visits in the first eight months of 2025, up from 368 million a year earlier, and that about 30 percent of keyword searches return an AI Overview. Pew Research found users who see an AI Overview are roughly half as likely to click a link.',
    },
    {
      q: 'How long does AI SEO take to show results in the UK?',
      a: 'Faster than classic SEO when the technical foundation is sound. Schema and answer-block changes can earn AI citations within four to eight weeks, because AI engines re-crawl and re-synthesise faster than Google re-ranks. A realistic UK benchmark is citation growth inside 90 days.',
    },
    {
      q: 'Should an ecommerce brand pick a different AI SEO agency?',
      a: 'Usually yes. Ecommerce AI search depends on product data, feeds and category structure as much as content. Charle runs Ecommerce AI SEO and Ecommerce GEO as named services for Shopify brands. FactoryJet works on ecommerce catalogues directly. A content-only agency struggles with product-level visibility.',
    },
  ],
  content: (
    <>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-800">
          For UK SMBs and ecommerce brands the pick is FactoryJet (our own list, methodology at
          the bottom). For technical teams wanting evidence rather than promises, Screaming Frog.
          For multi-region UK coverage with separate GEO and AEO lines, The SEO Works. For Shopify,
          Charle. For published generative engine optimisation proof, Impression.
        </p>
      </div>

      <p className="mb-4">
        <strong>This is a UK-only list.</strong> Every agency below serves UK businesses and was
        checked on its own website on 6 August 2026. Hiring for a business in the United States?
        This is the wrong page. Start at our{' '}
        <a href="/services/ai-seo" className="text-orange-600 underline">
          US AI SEO services page
        </a>{' '}
        or the{' '}
        <a href="/blog/best-ai-seo-agencies-usa" className="text-orange-600 underline">
          10 best AI SEO agencies in the USA
        </a>
        . Hiring in India? Use the{' '}
        <a href="/blog/best-ai-seo-agencies-india" className="text-orange-600 underline">
          India list
        </a>
        . Same discipline, completely different shortlist.
      </p>

      <p className="mb-4">
        Why UK buyers are asking now: ChatGPT recorded{' '}
        <strong>1.8 billion UK visits in the first eight months of 2025</strong>, up from 368
        million in the same period of 2024 (Ofcom, Online Nation 2025), and about{' '}
        <strong>30 percent of keyword searches now return an AI Overview</strong>. The businesses an
        AI engine names get the enquiry. Before you shortlist anyone, spend two minutes and{' '}
        <a href="/ai-visibility-checker" className="text-orange-600 underline">
          check whether ChatGPT, Perplexity and Google AI Overviews mention your business
        </a>
        .
      </p>
      <p className="mb-4">
        <strong>Disclosure, up front.</strong> FactoryJet appears at number one on its own list. So
        does nearly every UK agency ranking for this query. What we add is saying so, plus a
        methodology you can check and a named list of who we left off. For how we run this for UK
        clients, see our{' '}
        <a href="/uk/ai-seo" className="text-orange-600 underline">
          AI SEO agency UK service
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        The 10 best AI SEO agencies and companies in the UK: comparison table
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">#</th>
              <th className="p-3 border text-left">Agency</th>
              <th className="p-3 border text-left">Base</th>
              <th className="p-3 border text-left">AI search capability verified on their site</th>
              <th className="p-3 border text-left">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border">1</td>
              <td className="p-3 border font-semibold">FactoryJet (us)</td>
              <td className="p-3 border">Serving the UK remotely</td>
              <td className="p-3 border">GEO and AEO in one retainer; ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews tracked monthly</td>
              <td className="p-3 border">SMBs and ecommerce, no long lock-in</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">2</td>
              <td className="p-3 border font-semibold">Screaming Frog</td>
              <td className="p-3 border">Henley-on-Thames</td>
              <td className="p-3 border">AI Search Optimisation: AI bot log-file analysis, prompt tracking, AI A/B testing, sentiment analysis</td>
              <td className="p-3 border">Technical, evidence-led teams</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">3</td>
              <td className="p-3 border font-semibold">The SEO Works</td>
              <td className="p-3 border">Sheffield, London, Leeds, Manchester, Birmingham</td>
              <td className="p-3 border">Separate AI Search, GEO, AEO and AI SEO lines; publishes an Entitymap and an Info for AI and LLMs page</td>
              <td className="p-3 border">SMEs to mid-market, multi-region UK</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">4</td>
              <td className="p-3 border font-semibold">Passion Digital</td>
              <td className="p-3 border">Holborn, London</td>
              <td className="p-3 border">Five named AI Search sub-services: GEO, AIO Optimisation, Deep Research, LLM Performance Tracking, Entity Optimisation</td>
              <td className="p-3 border">B2B and professional services</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">5</td>
              <td className="p-3 border font-semibold">Impression</td>
              <td className="p-3 border">Nottingham</td>
              <td className="p-3 border">GEO as a named SEO service, with a published GEO case study and its own Alexis and Velocity tooling</td>
              <td className="p-3 border">B2B, SaaS, fintech, ecommerce</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">6</td>
              <td className="p-3 border font-semibold">Rise at Seven</td>
              <td className="p-3 border">Manchester and London</td>
              <td className="p-3 border">AI Visibility and GEO service line, plus a public category leaderboard and multi-channel search report</td>
              <td className="p-3 border">Consumer and content-led search</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">7</td>
              <td className="p-3 border font-semibold">Varn</td>
              <td className="p-3 border">Bath and London</td>
              <td className="p-3 border">Productised AI Visibility Framework in LITE and COMPLETE tiers, with schema and entity recommendations</td>
              <td className="p-3 border">Buyers who want a fixed-scope audit first</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">8</td>
              <td className="p-3 border font-semibold">GA Agency</td>
              <td className="p-3 border">London</td>
              <td className="p-3 border">GEO service page plus BuzzWatch AI brand visibility tracking; multilingual and international SEO</td>
              <td className="p-3 border">International, multilingual brands</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">9</td>
              <td className="p-3 border font-semibold">ClickSlice</td>
              <td className="p-3 border">Shoreditch, London</td>
              <td className="p-3 border">Separate AEO and GEO pages plus ChatGPT Ads; covers ChatGPT, Perplexity, Gemini, Claude, Copilot and Grok</td>
              <td className="p-3 border">London SMBs and ecommerce</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">10</td>
              <td className="p-3 border font-semibold">Charle</td>
              <td className="p-3 border">London and Manchester</td>
              <td className="p-3 border">Ecommerce AI SEO and Ecommerce GEO as named services, alongside Shopify Plus build and agentic commerce</td>
              <td className="p-3 border">Shopify and Shopify Plus brands</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        Almost none of them publish rates, so the comparison that helps is capability and
        reporting.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        AI SEO agency, company, firm or consultancy: what the UK labels mean
      </h2>
      <p className="mb-4">
        The words are mostly interchangeable, and the ten above answer all of them. What each label
        signals in practice:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>AI SEO agency.</strong> The common self-description. Implies ongoing delivery on a retainer, with a team rather than one person.</li>
        <li><strong>AI SEO company.</strong> Interchangeable with agency. Sometimes signals in-house tooling, like Screaming Frog&apos;s Log File Analyser or Impression&apos;s Alexis and Velocity, but there is no reliable rule.</li>
        <li><strong>AI SEO firm.</strong> An American import UK buyers type anyway. No distinct meaning here, and nobody on this list uses it about themselves.</li>
        <li><strong>AI SEO consultancy or consultant.</strong> This one does mean something: diagnosis and a roadmap as a fixed-scope audit, with execution left to you. Varn sells that shape openly.</li>
        <li><strong>AI SEO solutions or provider.</strong> Procurement language, common in tenders. Read it as a request for a written scope, not a different product.</li>
        <li><strong>GEO, AEO, LLM SEO, AIO, AI search optimisation.</strong> Service names, not organisation types. Overlapping slices of one workflow, which several agencies here sell as separate pages.</li>
        <li><strong>What no label tells you.</strong> Which engines get reported separately, who executes, and the notice period. Those three decide the outcome.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">What the UK numbers say about AI search in 2026</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>ChatGPT took <strong>1.8 billion UK visits</strong> in the first eight months of 2025, up from 368 million in the same period of 2024.</li>
        <li>ChatGPT had <strong>252 million UK web visits in August 2025</strong>, up 156 percent year on year, making it the second-largest search service in the UK.</li>
        <li>Google still handles roughly <strong>3 billion UK web searches a month</strong>, so AI search is additive rather than a replacement.</li>
        <li>Gemini grew 146 percent, Claude 138 percent and Perplexity 100 percent in UK traffic in the year to August 2025, from much smaller bases.</li>
        <li>About <strong>30 percent of keyword searches</strong> return an AI Overview, rising to as much as 34 percent of non-branded searches.</li>
        <li>YouGov research quoted by Ofcom found <strong>53 percent of UK people</strong> say they often see AI summaries.</li>
        <li>Ecommerce and shopping took <strong>4.5 percent of ChatGPT outgoing UK referrals</strong> in the year to August 2025, against 2.2 percent for Google. Note the scope: Ofcom&apos;s chart excludes computer and technology queries, which are the largest category for both.</li>
        <li>Users who see an AI Overview are <strong>almost half as likely to click through</strong>, and more likely to end the session entirely (26 percent against 16 percent). Six months after a first ChatGPT visit, their Google Search clicks fall 26 percent. Both are US studies that Ofcom reproduces as a UK proxy, so read them as direction, not magnitude.</li>
      </ul>
      <p className="mb-4">
        Source:{' '}
        <a
          href="https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/online-nation/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          Ofcom, Online Nation 2025
        </a>
        , page 30 for the search figures and pages 31 to 32 for referrals and click-through.
        Ofcom&apos;s underlying sources are Similarweb, YouGov and Pew Research.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        The 10 best AI SEO agencies and companies in the UK, reviewed
      </h2>

      <h3 className="text-xl font-bold mt-6 mb-3">
        1. FactoryJet: best for UK SMBs and ecommerce (disclosure: this is us)
      </h3>
      <p className="mb-4">
        Senior engineers, transparent scoping, no annual lock-in, per-engine reporting every month.
        Where competitors beat us: for a London boardroom presence and a large account team, Passion
        Digital or Impression fit better.{' '}
        <a href="/uk/ai-seo" className="text-orange-600 underline">See our AI SEO agency UK service</a>.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">2. Screaming Frog: best technical evidence</h3>
      <p className="mb-4">
        Yes, the SEO Spider company. Its{' '}
        <a
          href="https://www.screamingfrog.co.uk/ai-search-optimisation/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          AI Search Optimisation service
        </a>{' '}
        runs on its own Log File Analyser, so the AI bot analysis is evidence of what actually
        fetched your pages. Around that sit outreach to AI-cited pages, sentiment analysis, A/B
        testing on experiment pages, and high-buying-intent prompt tracking with GA4 AI referral
        data. Start here if you want experiments, not promises.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">3. The SEO Works: best multi-region UK coverage</h3>
      <p className="mb-4">
        Its{' '}
        <a
          href="https://www.seoworks.co.uk/services/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          services menu
        </a>{' '}
        lists AI Search, GEO Services, AEO Services and AI SEO as four distinct lines, and the site
        publishes an Entitymap and an Info for AI and LLMs page. That is the discipline practised in
        public rather than described. A free website review makes the first conversation low risk.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">4. Passion Digital: best productised AI menu</h3>
      <p className="mb-4">
        The most granular AI search menu in London:{' '}
        <a
          href="https://passion.digital/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          five separate sub-services
        </a>{' '}
        covering GEO, AIO Optimisation, Deep Research, LLM Performance Tracking and Entity
        Optimisation. Strongest when you want one piece of the work, not a whole retainer.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">5. Impression: best published GEO proof</h3>
      <p className="mb-4">
        <a
          href="https://www.impressiondigital.com/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          Generative Engine Optimisation
        </a>{' '}
        is sold as a named service under SEO. Its case study claims a GEO strategy securing more
        than 47,000 clicks in a year for Tensar, a B2B manufacturing client, and it runs two
        in-house tools, Alexis and Velocity. The named client makes it the most checkable
        proof-of-work here.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">6. Rise at Seven: best for content-led AI visibility</h3>
      <p className="mb-4">
        Search-first content marketing agency running{' '}
        <a
          href="https://riseatseven.com/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          AI Visibility and GEO
        </a>{' '}
        alongside digital PR and social search, plus a public category leaderboard. Best fit when
        what blocks your AI visibility is that nobody writes about you, which is more common than a
        technical gap.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">7. Varn: best fixed-scope audit</h3>
      <p className="mb-4">
        Varn sells a named{' '}
        <a
          href="https://varn.co.uk/services/ai-search-innovation/ai-visibility-framework/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          AI Visibility Framework
        </a>{' '}
        in two tiers. LITE is a snapshot audit with competitor benchmarking and no long-term
        commitment. COMPLETE adds LLM content analysis, a technical audit for AI readiness, schema
        and entity recommendations, and a prioritised roadmap.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">8. GA Agency: best for international brands</h3>
      <p className="mb-4">
        Its{' '}
        <a
          href="https://ga.agency/en/services/generative-engine-optimisation/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          GEO service
        </a>{' '}
        pairs multilingual work across 18 languages with BuzzWatch, its own AI brand visibility
        tracker, covering Google AI Overviews, Bing Copilot and Gemini as well as ChatGPT and
        Perplexity. The pick if your UK site is one market of several.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">9. ClickSlice: best London acronym specialist</h3>
      <p className="mb-4">
        Runs{' '}
        <a
          href="https://www.clickslice.co.uk/answer-engine-optimisation-aeo-services/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          Answer Engine Optimisation
        </a>{' '}
        and GEO as separate service pages, plus ChatGPT Ads, covering ChatGPT, Perplexity, Gemini,
        Claude, Copilot and Grok. It states on its own site that it was the first agency ChatGPT
        recommended for the best SEO agency in London. Treat that as self-reported: AI answers
        change between runs, so nobody can verify it afterwards, including us.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">10. Charle: best for Shopify and ecommerce</h3>
      <p className="mb-4">
        A{' '}
        <a
          href="https://www.charle.co.uk/"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener"
        >
          Shopify agency
        </a>{' '}
        with Ecommerce AI SEO and Ecommerce GEO as named services, next to Shopify Plus builds,
        agentic commerce and Klaviyo. Ecommerce AI visibility depends on product data and category
        structure as much as content, so a build-capable agency has a real advantage.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        AI SEO agencies in London: what is different about that market
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>The answer pool is crowded. An AI engine asked for a London agency has hundreds of credible candidates, so weak entity signals get filtered out first.</li>
        <li>Agency listicles dominate the citation set, so being named on third-party lists matters more in London than anywhere else in the UK.</li>
        <li>Local schema alone does not help. There is no map pack inside an AI answer, so a Google Business Profile is not the lever it is for a trades business.</li>
        <li>Sector language beats geography. &quot;Fintech AI search agency&quot; is a winnable answer; &quot;London agency&quot; usually is not.</li>
        <li>London brands often already rank well in Google, which makes AI Overview click loss more painful, not less.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        AI SEO companies outside London: where the UK ones actually are
      </h2>
      <p className="mb-4">
        Searching for an AI SEO agency near you? All ten cluster into seven places, so for most of
        the country the nearest one is not near at all.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Manchester:</strong> Rise at Seven, plus offices for The SEO Works, Impression and Charle. The densest cluster outside London.</li>
        <li><strong>Sheffield, Leeds and Birmingham:</strong> The SEO Works. No other agency here has a base in any of the three.</li>
        <li><strong>Nottingham:</strong> Impression&apos;s headquarters, and the only East Midlands entry.</li>
        <li><strong>Henley-on-Thames, Oxfordshire:</strong> Screaming Frog, the Thames Valley option for log-file work.</li>
        <li><strong>Bath and Wiltshire:</strong> Varn, the only South West entry, and the one selling an audit rather than a retainer.</li>
        <li><strong>Scotland and Wales:</strong> nobody here is headquartered in Glasgow, Edinburgh or Cardiff. Those businesses buy remotely.</li>
        <li><strong>North East England and Northern Ireland:</strong> no Newcastle or Belfast base either. The North East is the largest genuine gap in UK coverage.</li>
        <li><strong>Bristol, Liverpool, Southampton and the rest:</strong> served remotely. Local presence is not a service line any of the ten sell.</li>
        <li><strong>Why proximity is the wrong filter.</strong> The deliverables are robots.txt rules, schema, answer-first restructuring, log-file analysis and prompt tracking. None needs someone in your building, and a monthly report tells you more than a postcode.</li>
        <li><strong>Where we fit:</strong> FactoryJet serves the UK remotely, with city pages for{' '}
          <a href="/uk/manchester" className="text-orange-600 underline">Manchester</a>,{' '}
          <a href="/uk/glasgow" className="text-orange-600 underline">Glasgow</a>,{' '}
          <a href="/uk/cardiff" className="text-orange-600 underline">Cardiff</a> and{' '}
          <a href="/uk/brighton" className="text-orange-600 underline">Brighton</a>, and the AI
          search scope on one national page rather than repeated per city.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">What a UK AI SEO agency actually does</h2>
      <p className="mb-4">
        An agency that cannot describe the work in these terms is selling classic SEO with a new
        label.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Crawl access, rendering and structure</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Naming every retrieval bot explicitly in robots.txt: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended.</li>
        <li>Never letting a retrieval bot inherit from a wildcard rule. One wrong line removes you from a whole platform, silently.</li>
        <li>Server-rendering anything load-bearing, because AI crawlers do not run JavaScript, and keeping redirects to a single 301 or 308 hop.</li>
        <li>One H1 per page, strict H1 to H2 to H3 descent, and an answer-first block that answers the page question in 40 to 65 self-contained words.</li>
        <li>Lists over prose. A list item is a self-contained retrievable unit, which is why cited pages carry far more of them.</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 mb-3">Schema, entities and measurement</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>FAQPage JSON-LD generated from the same array the page renders, never hand-written twice. Schema that disagrees with the visible page is a trust problem.</li>
        <li>Organization schema with sameAs pointing at real profiles, BreadcrumbList on nested pages, Person schema for a named author, and an honest dateModified.</li>
        <li>Entity clarity: consistent naming, a Knowledge Graph or Wikidata presence where warranted, and disambiguation from similarly named companies.</li>
        <li>A fixed prompt set per client, tracked per engine, baselined before any work starts.</li>
        <li>GA4 referral segmentation for chatgpt.com, perplexity.ai, claude.ai and gemini.google.com, plus server log analysis to confirm retrieval bots are fetching the pages you changed.</li>
      </ul>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8">
        <p className="font-semibold text-orange-900 mb-2">
          Before you talk to any agency on this list
        </p>
        <p className="text-orange-800 mb-3">
          Get your own baseline first. Two minutes, and it changes every conversation afterwards.
        </p>
        <a
          href="/ai-visibility-checker"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Check your AI visibility free
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        How UK AI SEO agencies charge, and how to compare quotes
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Monthly retainer.</strong> The default. Ask what is in month one versus month six, because front-loaded audits flatter the first invoice.</li>
        <li><strong>Fixed-scope audit.</strong> Varn sells this shape openly. Good for sizing the gap before committing.</li>
        <li><strong>Day rate.</strong> Screaming Frog works this way. Suits experiment-led programmes where scope cannot be fixed up front.</li>
        <li><strong>Bundled into SEO.</strong> Several UK agencies fold GEO into normal SEO. That is the honest structure, because it is one workflow.</li>
        <li><strong>Sold as a separate line.</strong> If GEO is quoted on top of AI SEO, ask what work exists in one and not the other. Usually the answer is none.</li>
        <li><strong>Notice period.</strong> The most underrated term in the contract. AI search changes quarterly, so short notice is worth more than a small discount.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Twelve questions to ask a UK AI SEO agency before you sign
      </h2>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Can I see a sample monthly report with citation counts broken out per engine?</li>
        <li>Which engines do you track, and which do you not track?</li>
        <li>Who writes the schema, and will they talk to my developers directly?</li>
        <li>How do you take a baseline before the work starts?</li>
        <li>What is your prompt set, and how did you choose it?</li>
        <li>Do you check my robots.txt against the current bot names, and how often?</li>
        <li>What happens if my site is client-rendered?</li>
        <li>Is GEO included in the retainer or billed on top?</li>
        <li>Who executes: the person in this room, or a team I have not met?</li>
        <li>What is the notice period, and what do I keep if I leave?</li>
        <li>What have you changed in your own approach in the last six months?</li>
        <li>What would make you tell me not to buy this?</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Red flags in a UK AI SEO pitch</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>A guaranteed position in ChatGPT or Perplexity. Answers are re-generated per query, so nobody can guarantee one.</li>
        <li>A proprietary &quot;AI ranking factor&quot; nobody else knows about.{' '}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features"
            className="text-orange-600 underline"
            target="_blank"
            rel="noopener"
          >
            Google&apos;s own documentation
          </a>{' '}
          says there are no additional requirements or special optimisations for AI Overviews and AI Mode.</li>
        <li>Reporting that shows only keyword positions behind an AI-themed cover page.</li>
        <li>Selling llms.txt as a technical necessity. The same Google page says you do not need new machine-readable or AI text files, and there is no evidence it is a citation lever.</li>
        <li>Charging separately for GEO, AEO and AI SEO when the deliverables are identical.</li>
        <li>Case study numbers with no client, no date and no way to check them.</li>
        <li>Automated link building or directory blasts sold as AI citation building. That is a link scheme, and the risk lands on your domain.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Methodology, and what we excluded</h2>
      <p className="mb-4">
        We verified every agency by fetching its own website on 6 August 2026 and reading the
        service pages, capabilities and office details. Nothing here comes from a directory, a review
        aggregator or another listicle. FactoryJet&apos;s position is disclosed self-placement. No
        agency paid to appear. Agencies on other UK lists but not on ours:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Blue Array</strong> and <strong>Distinctly</strong>: their sites blocked automated verification on 6 August 2026, so we could not confirm any claim first hand. Not a judgement on either agency, just a rule applied evenly.</li>
        <li><strong>Found</strong>: on 6 August 2026 the sitemap at wearefound.com listed a single landing page, so we could not verify a live AI SEO service line.</li>
        <li><strong>Convert Digital</strong>: no AI SEO or GEO service page found on convert-digital.co.uk on 6 August 2026.</li>
        <li><strong>Reposition</strong>: no AI search, GEO or AEO line in its services menu on 6 August 2026.</li>
        <li><strong>HikeMyTraffic</strong>: ranks for UK queries but is based in Noida, India, so it fails the UK-only rule. It appears on our India list instead.</li>
        <li><strong>Builtvisible</strong>: no longer operating independently, and no current dedicated AI SEO service page.</li>
      </ul>
      <p className="mb-4">
        Sources: Ofcom Online Nation 2025 (pages 30 to 32); agency service pages fetched 6 August
        2026. If we cannot open the source, the number does not go on the page. Related reading:{' '}
        <a href="/blog/is-geo-replacing-seo-2026" className="text-orange-600 underline">
          is GEO replacing SEO
        </a>
        ,{' '}
        <a href="/blog/best-geo-ai-visibility-tools-2026" className="text-orange-600 underline">
          the best GEO and AI visibility tools
        </a>
        , and our{' '}
        <a href="/uk/seo-audit" className="text-orange-600 underline">
          UK SEO and AI visibility audit
        </a>
        .
      </p>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg my-8">
        <p className="font-semibold text-orange-900 mb-2">
          Want to know where your business stands in AI search today?
        </p>
        <p className="text-orange-800 mb-3">
          Bhavesh runs every discovery call himself. Start with a 30-minute call or a full AI
          visibility audit.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Book a 30-min call
        </a>
      </div>
    </>
  ),
};
