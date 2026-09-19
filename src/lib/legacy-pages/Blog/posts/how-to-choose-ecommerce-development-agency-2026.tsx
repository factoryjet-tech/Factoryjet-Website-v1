import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

// FAQs are grounded in live Google "People Also Ask" data for "how to choose an
// ecommerce development agency" (see pipeline/research/CONTENT-GAP-COMPETITOR-REPORT-2026-09-19.md,
// item #4), plus reasonable adjacent buyer questions. The FAQPage schema is generated
// centrally by the blog route (src/app/blog/[slug]/page.tsx) FROM this exact array, so the
// visible FAQs and the structured data can never drift apart. Do not add a second, hand-written
// FAQPage script anywhere in this file.
const faqs: FAQItem[] = [
  {
    q: 'What questions should I ask an ecommerce agency before hiring them?',
    a: 'Ask who will actually work on your project and how senior they are, not just who is on the sales call. Ask to see two or three past projects and what specific technical problem each one solved. Ask what their discovery process looks like before they write a quote. Ask who owns the code, the design files, and your store data once the project ends. And ask what happens after launch: is there a support period, and what does it cover?',
  },
  {
    q: 'What are the red flags when picking an ecommerce development agency?',
    a: 'Watch for a quote handed to you with no discovery phase or questions about your business first. Watch for a portfolio of screenshots with no explanation of what was actually built or why. Watch for vague answers when you ask who owns the code after launch. Watch for no mention of a support plan after launch. And watch for an agency that cannot explain, in plain language, why they made a past technical decision on a real project.',
  },
  {
    q: 'Should I hire an agency, a freelancer, or build a team in-house?',
    a: 'A freelancer works well for one well-defined task on a tight timeline, but you depend on one person\'s availability and range of skills. An in-house team gives you full control but takes months to hire and is expensive to keep current across design, engineering, and platform updates. An agency gives you a working team (design, engineering, project management) without hiring each role yourself. Pick a freelancer for a single job, an agency when you need several skills coordinated, and in-house only once ecommerce is a full-time, ongoing part of your business.',
  },
  {
    q: 'How do I evaluate an agency\'s technical skill if I\'m not technical myself?',
    a: 'You do not need to read code to judge competence. Ask them to explain a past technical decision in plain words: why they chose one platform over another for a client, or how they solved a slow page-load problem. A competent team can explain the trade-off simply. A weak one either dodges the question or buries you in jargon to sound impressive. Also ask what happens when something breaks after launch. Their answer tells you whether they think about reliability or just about shipping.',
  },
  {
    q: 'What does a good discovery process look like?',
    a: 'A real discovery phase happens before a fixed quote, not after. It should include questions about your customers, your current sales process, your existing tools (payment processor, inventory system, email platform), and what "done" looks like for you. A good agency will sometimes tell you that a feature you asked for is not worth the cost yet. If an agency skips straight from a first call to a fixed price and a contract, that is a sign the scope was guessed, not researched.',
  },
  {
    q: 'How do I check an agency\'s references properly?',
    a: 'Do not settle for a written testimonial on the agency\'s own website, since those are chosen by the agency. Ask to speak directly with a past client, ideally one whose project is similar in size or complexity to yours. Ask that client specific questions: did the team communicate well when problems came up, did the final cost match the original quote, and would they hire the same agency again. A specific answer to a specific question tells you far more than a generic five-star review.',
  },
  {
    q: 'What is the difference between project-based, retainer, and staff augmentation?',
    a: 'A project-based engagement has a fixed scope and a fixed price for a defined piece of work, like a new storefront build. A retainer is an ongoing monthly arrangement where the agency keeps working on improvements, fixes, and new features over time. Staff augmentation means the agency\'s developers work inside your team, under your direction, usually billed by time rather than by project. Most ecommerce builds start project-based, then move to a retainer for ongoing maintenance and growth.',
  },
  {
    q: 'How long does it take to build an ecommerce website?',
    a: 'It depends heavily on scope. A store built on an existing platform theme with standard features can launch in a matter of weeks. A custom design with non-standard functionality, multiple product types, or integrations to an inventory or accounting system usually takes a few months. A fully custom or headless build (a storefront built from scratch and connected to a commerce engine through code, rather than a pre-made theme) takes longer still. Ask for a realistic timeline broken into milestones, not just a single end date.',
  },
  {
    q: 'Who owns the code and the website after the project is done?',
    a: 'You should. Before signing anything, get it in writing that you own the final code, the design files, your product and customer data, and the login credentials to every account involved (hosting, domain, platform, payment processor). An agency that is vague about this, or that builds the site in a way only they can access or edit later, has effectively locked you in. This is one of the clearest and easiest things to check before you sign.',
  },
  {
    q: 'What should I look for in an ecommerce agency\'s portfolio?',
    a: 'Do not judge a portfolio on how pretty the screenshots look. Click through to the actual live sites if they still exist. Ask about the technical problem behind each project: was it a slow site they had to speed up, a messy product catalog they had to organize, or a manual process they automated. A portfolio that only shows finished homepages, with no explanation of what was hard about the project, tells you the agency is good at presenting work, not necessarily good at solving problems.',
  },
  {
    q: 'Should an ecommerce agency handle SEO during a redesign or migration?',
    a: 'Yes, this should be part of the plan, not an afterthought. Moving to a new platform or redesigning a site can quietly break search rankings if old page addresses are not properly redirected to their new equivalents and page titles and descriptions are not carried over correctly. Ask directly how the agency plans to protect your existing search traffic during the switch, and ask them to walk you through their redirect plan before launch, not after you notice a drop in visitors.',
  },
  {
    q: 'Does the agency need to know accessibility rules like WCAG?',
    a: 'Yes. WCAG (Web Content Accessibility Guidelines) is the internationally recognized standard, published by the World Wide Web Consortium, for making websites usable by people with disabilities, such as visitors using screen readers or keyboard-only navigation. A competent ecommerce agency should build with these guidelines in mind by default, not treat them as an optional extra. Beyond being the right thing to do, an inaccessible checkout flow simply loses you customers and can create legal exposure in some regions.',
  },
  {
    q: 'How do I know if an ecommerce site will be secure for payments?',
    a: 'Any business that accepts card payments online falls under PCI DSS (Payment Card Industry Data Security Standard), an industry-wide framework that sets security requirements for anywhere card data is stored, processed, or transmitted. Ask the agency directly how they keep your store compliant: most modern setups keep you largely out of scope for the hardest requirements by using a trusted payment processor (like Stripe or a platform\'s built-in checkout) instead of handling raw card numbers on your own server.',
  },
  {
    q: 'What is scope creep and how do I avoid it?',
    a: 'Scope creep is when a project quietly grows past what was originally agreed, one small request at a time, without anyone adjusting the timeline or the price. It is one of the most common reasons ecommerce projects run late or over budget. You avoid it by getting a written, detailed scope before work starts, and by agreeing upfront on a simple process for handling new requests: they get written down, priced, and approved separately, instead of silently absorbed into the original plan.',
  },
  {
    q: 'Should I pick an agency that specializes in one platform or one that works across many?',
    a: 'Both can be right, depending on your situation. A platform specialist (for example, an agency that only builds on Shopify) often has deeper knowledge of that platform\'s specific quirks and limits. A platform-agnostic agency can recommend the right tool for your catalog and budget instead of forcing you onto the one platform they know. Ask any agency, regardless of specialization, to explain why a particular platform fits your specific business, not just why it is the one they prefer to build on.',
  },
  {
    q: 'How many people should be working on my project?',
    a: 'There is no single right number, but you should know the answer before you sign. A very small team (one or two people) can mean fast, personal communication, but also a single point of failure if someone is unavailable. A larger team spreads the risk but can add communication overhead and hand-off delays. Ask who specifically is assigned to your project, in what roles, and how much of their time is dedicated to you versus split across other clients.',
  },
  {
    q: 'What happens if I want to end the contract early?',
    a: 'Ask this before you sign, not after you want out. A fair contract should spell out what happens if either side wants to end the engagement early: what work is owed, what you have already paid for, and how quickly you get access to your code and assets. An agency that resists putting exit terms in writing, or that structures the contract so leaving is deliberately painful, is telling you something about how they expect the relationship to go.',
  },
  {
    q: 'Is the cheapest quote usually the best deal?',
    a: 'Not usually. A quote well below every other bid you received is a signal to ask more questions, not celebrate. It often means a shorter or skipped discovery phase, a less experienced team, corners cut on testing and security, or a plan to make up the difference later through change requests. That does not mean the most expensive option is automatically the best either. Compare quotes on what is actually included, not just the total number at the bottom.',
  },
  {
    q: 'Should I sign an NDA before sharing my business details?',
    a: 'It is reasonable to ask for one, and a professional agency should not object. An NDA (non-disclosure agreement) is a simple legal document where both sides agree to keep shared business information confidential. If you are discussing sensitive details like supplier pricing, unreleased products, or proprietary processes during the evaluation stage, an NDA protects you. Most established agencies will sign a standard one without pushback; heavy resistance to a straightforward request is itself worth noting.',
  },
  {
    q: 'What is a reasonable amount of post-launch support to expect?',
    a: 'At minimum, expect a defined period after launch (commonly 30 to 90 days) where the agency fixes bugs related to their own work at no extra cost. Beyond that window, ask what ongoing support options exist: a monthly retainer for updates and fixes, an hourly rate for occasional requests, or nothing at all, meaning you are on your own the day after launch. An agency with no answer to "what happens after launch" is planning to disappear once the invoice is paid.',
  },
  {
    q: 'How do I compare two agencies that quote very differently?',
    a: 'Line up what each quote actually includes before comparing totals. Does one include a discovery phase and the other does not? Does one include testing across devices and browsers, and the other assumes you will report bugs yourself after launch? Does the post-launch support period differ? Two quotes that look far apart are sometimes pricing very different amounts of work. Ask both agencies to break their quote into the same categories so you are comparing the same things.',
  },
  {
    q: 'Can a small business afford a good ecommerce agency?',
    a: 'Yes, though the scope needs to match the budget honestly. A capable agency will tell a small business what is realistic now versus what can wait: a clean, fast, well-built store on a standard platform theme is usually more valuable early on than an expensive custom build with features you do not yet need. Be wary of any agency that pushes a small business toward the most complex, most expensive solution before proving out simpler ground first.',
  },
  {
    q: 'What is a technical audit and should I ask for one before hiring?',
    a: 'A technical audit is a short, focused review of your current website (if you have one) covering speed, mobile usability, basic security, and search visibility. Asking a shortlisted agency for a brief audit, even a free or low-cost one, is a good way to see how they think and communicate before committing to a full project. Their audit should point out real, specific issues in plain language, not a generic list that could apply to any website.',
  },
  {
    q: 'Do I need a fully custom build, or is a platform theme enough?',
    a: 'Most businesses do not need a fully custom build, especially at launch. A well-implemented theme on an established platform (Shopify, WooCommerce, BigCommerce, or similar) covers the vast majority of standard ecommerce needs: product pages, checkout, basic customization, and app integrations. Custom or headless development (building a storefront from the ground up, connected to a commerce engine through code) makes sense when you have unusual requirements a theme cannot handle, or when page speed and design flexibility are directly tied to revenue at your scale.',
  },
  {
    q: 'How do I know if an agency actually understands my type of business?',
    a: 'Listen for whether they ask about your business model, not just your feature list. A DTC (direct-to-consumer) brand selling a handful of products has very different needs from a B2B (business-to-business) distributor managing thousands of SKUs and negotiated pricing for different customer accounts. An agency that understands your world will ask about your customers, your order volume, and your operational bottlenecks before proposing a solution. One that jumps straight to a platform recommendation without those questions is guessing.',
  },
];

export const post: BlogPost = {
  id: '450',
  slug: 'how-to-choose-ecommerce-development-agency-2026',
  title: 'How to Choose an Ecommerce Development Agency (2026 Guide)',
  excerpt:
    'A plain-language, vendor-neutral guide to picking an ecommerce development agency, for any business on any platform. The real evaluation framework: what to ask, how to read a portfolio, engagement models explained, and the red flags that predict a bad project.',
  category: 'E-Commerce Development',
  author: 'Bhavesh Barot',
  date: 'Sep 19, 2026',
  readTime: '15 min read',
  imageUrl: '/blog-images/how-to-choose-ecommerce-development-agency-2026.webp',
  imageAlt:
    'A business owner reviewing an ecommerce agency proposal and portfolio on a laptop before a hiring decision',
  meta: {
    title: 'How to Choose an Ecommerce Development Agency (2026 Guide)',
    description:
      'A vendor-neutral, plain-language guide to evaluating and hiring an ecommerce development agency: the real questions to ask, how to read a portfolio, engagement models, red flags, and 23 buyer FAQs.',
  },
  keyTakeaways: [
    'This guide is for any business (DTC, B2B, any platform) evaluating an ecommerce development agency, not a comparison of specific agencies. It is a framework you can run against anyone on your shortlist.',
    'Judge a portfolio on the technical problem solved, not the screenshots. Ask what was hard about each past project and how the agency solved it.',
    'A real discovery phase (structured questions about your business before a fixed quote) is the clearest sign of a serious agency. Skipping straight to a quote means the scope was guessed.',
    'Engagement models differ in shape, not just price: project-based for a defined build, a retainer for ongoing work, staff augmentation when you want developers working inside your own team.',
    'Red flags cluster around vagueness: vague scope, vague ownership of code and assets, vague post-launch support, and an inability to explain a past technical decision in plain language.',
    'This is a buyer\'s framework, not a sales pitch for any one company, though the same checklist works if you evaluate us against it too.',
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
                'https://factoryjet.com/blog/how-to-choose-ecommerce-development-agency-2026#webpage',
              url: 'https://factoryjet.com/blog/how-to-choose-ecommerce-development-agency-2026',
              name: 'How to Choose an Ecommerce Development Agency (2026 Guide)',
              description:
                'A vendor-neutral, plain-language guide to evaluating and hiring an ecommerce development agency: the real questions to ask, how to read a portfolio, engagement models, and red flags.',
              inLanguage: 'en-US',
              datePublished: '2026-09-19',
              dateModified: '2026-09-19',
              author: { '@type': 'Person', name: 'Bhavesh Barot' },
              publisher: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              primaryImageOfPage:
                'https://factoryjet.com/blog-images/how-to-choose-ecommerce-development-agency-2026.webp',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.answer-first'],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Ecommerce Development Services',
              name: 'FactoryJet Ecommerce Development',
              description:
                'Custom ecommerce development on Shopify, WooCommerce, BigCommerce, and headless Next.js Commerce for DTC and B2B businesses, with a structured discovery phase, fixed-price milestones, and full client ownership of code on launch.',
              provider: {
                '@type': 'Organization',
                '@id': 'https://factoryjet.com/#organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
              },
              areaServed: [
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Country', name: 'United Kingdom' },
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'India' },
              ],
              url: 'https://factoryjet.com/services/ecommerce-development',
            },
          ]),
        }}
      />

      {/* Answer-first block for AI Overviews / ChatGPT citation */}
      <div className="answer-first bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-8">
        <p className="font-semibold text-amber-900 mb-1">The short answer</p>
        <p className="text-amber-900">
          To choose an ecommerce development agency, run every candidate through four checks: do
          they run a real discovery phase before quoting a price, can they explain the technical
          problem behind their past work (not just show you screenshots), will they put code and
          asset ownership in writing, and do they have a clear plan for support after launch.
          Agencies that pass all four are worth a serious conversation. Agencies that dodge any one
          of them are a real risk, regardless of how polished the sales pitch is.
        </p>
      </div>

      <p className="mb-4 text-gray-800">
        Hiring an ecommerce development agency is confusing because almost every agency describes
        itself the same way: experienced, results-driven, a trusted partner. Those words tell you
        nothing. This guide is deliberately vendor-neutral. It does not rank specific companies or
        push one platform over another. It is a framework you can use on any shortlist, whether you
        sell direct to consumers, run a B2B (business-to-business) operation, or are not sure yet
        which platform fits your catalog. Every technical term is explained the first time it comes
        up, so you do not need a development background to use this.
      </p>
      <p className="mb-6 text-gray-800">
        Quick vocabulary, once, so the rest reads easily. <strong>Discovery phase</strong> means the
        structured research an agency does about your business before quoting a price.{' '}
        <strong>Headless commerce</strong> means a storefront built from scratch and connected to a
        commerce engine through code, instead of a pre-made theme. <strong>Scope creep</strong>{' '}
        means a project quietly growing past what was originally agreed. <strong>Staff augmentation</strong>{' '}
        means an agency&apos;s developers working inside your own team. That is the whole glossary.
        Now the framework.
      </p>

      <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-200">
        <h3 className="text-lg font-bold mb-3 text-gray-900">What this guide covers</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-800">
          <li><a href="#what-they-do" className="text-orange-600 underline">What an ecommerce development agency actually does</a></li>
          <li><a href="#questions-to-ask" className="text-orange-600 underline">Questions to ask before you hire</a></li>
          <li><a href="#read-portfolio" className="text-orange-600 underline">How to read a portfolio (not just the screenshots)</a></li>
          <li><a href="#technical-checklist" className="text-orange-600 underline">The technical checklist</a></li>
          <li><a href="#engagement-models" className="text-orange-600 underline">Engagement models, explained</a></li>
          <li><a href="#red-flags" className="text-orange-600 underline">Red flags that predict a bad project</a></li>
          <li><a href="#check-references" className="text-orange-600 underline">How to check references properly</a></li>
          <li><a href="#in-house-vs-agency" className="text-orange-600 underline">In-house vs. freelancer vs. agency</a></li>
          <li><a href="#build-shortlist" className="text-orange-600 underline">How to build your shortlist</a></li>
        </ol>
      </div>

      <h2 id="what-they-do" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        What an ecommerce development agency actually does
      </h2>
      <p className="mb-4 text-gray-800">
        Stripped of the marketing language, an ecommerce development agency plans, builds, and
        maintains the online store where you sell your products. That covers a range of work:
        choosing or configuring a platform, designing the storefront, building product pages and
        checkout, connecting payment processing, and setting up the behind-the-scenes systems that
        keep inventory, orders, and customer data flowing between your store and the rest of your
        business (an accounting tool, a shipping provider, an inventory system, or an ERP if you run
        one). A good agency treats these as connected problems. A weak one treats them as a list of
        line items to check off.
      </p>
      <p className="mb-4 text-gray-800">
        Where agencies genuinely differ is not usually the platform they prefer. It is how they
        handle the parts of the project that are hard to standardize: understanding your specific
        catalog and customers before proposing a solution, communicating clearly when something goes
        wrong mid-project, and being straightforward about what your budget actually buys. Those are
        the things this guide focuses on, because they are also the things a glossy portfolio page
        will never show you.
      </p>

      <h2 id="questions-to-ask" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Questions to ask before you hire
      </h2>
      <p className="mb-4 text-gray-800">
        Ask these out loud in a call and pay attention to how specifically they answer, not just
        what they say. A confident, detailed answer is a green light. A vague or rehearsed-sounding
        answer is worth a follow-up question before you move forward.
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
              <td className="p-3 border font-semibold text-gray-900">Who exactly will work on my project?</td>
              <td className="p-3 border text-gray-800">Names specific people and roles, tells you how much of their time is dedicated to you</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">What does your discovery process look like?</td>
              <td className="p-3 border text-gray-800">Describes specific steps and what they need from you before quoting a price</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Can you walk me through a past project and what was hard about it?</td>
              <td className="p-3 border text-gray-800">Names a real technical or business problem and how it was solved, not just the result</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Who owns the code and assets when we are done?</td>
              <td className="p-3 border text-gray-800">Confirms in plain terms that you own everything, and puts it in the contract</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">What happens if I want to end the engagement early?</td>
              <td className="p-3 border text-gray-800">Has a clear, written exit process, no resistance to discussing it</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">What support do I get after launch?</td>
              <td className="p-3 border text-gray-800">Names a specific support period and what it covers, and what comes after it</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-gray-800">
        According to Clutch, a widely used B2B review and research platform, common red flags at
        this stage include vague proposals that lack technical detail or milestones, evasive answers
        about the tools and frameworks they actually use, and limited or infrequent communication
        during the sales process itself (
        <a
          href="https://clutch.co/resources/how-to-choose-a-web-developer"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-600 underline"
        >
          Clutch, updated May 2026
        </a>
        ). If communication is already slow or vague before you have paid anything, it will not
        improve once you have signed a contract.
      </p>

      {/* Mid-page CTA */}
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl my-8">
        <p className="font-semibold text-gray-900 mb-2">
          Not sure what your project actually needs yet?
        </p>
        <p className="text-gray-800 mb-4">
          Before you run this framework on a shortlist, it helps to know what you are actually
          asking for. A short discovery call can clarify platform fit, rough scope, and what to
          prioritize first, with no obligation to hire anyone.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Talk through your project
          </a>
          <a
            href="/services/ecommerce-development"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-orange-100 transition-colors"
          >
            See how we approach ecommerce builds
          </a>
        </div>
      </div>

      <h2 id="read-portfolio" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How to read a portfolio (not just the screenshots)
      </h2>
      <p className="mb-4 text-gray-800">
        A portfolio full of attractive homepage screenshots tells you an agency can design a nice
        homepage. It does not tell you whether they can solve the problems that actually make
        ecommerce projects hard: a messy product catalog with thousands of variants, a checkout that
        was losing customers at a specific step, or an inventory system that needed to talk to three
        other tools in real time. Click through to the live sites if they still exist. Test the
        checkout flow yourself if you can. And ask directly: &quot;What was the hardest technical
        problem on this project, and how did you solve it?&quot;
      </p>
      <p className="mb-4 text-gray-800">
        Watch how they answer. A team that actually did the work will give you a specific, concrete
        story: what broke, what they tried, what worked. A team that is repackaging someone else&apos;s
        work, or exaggerating their role on a project, tends to answer in generalities. This single
        question does more to separate real capability from a well-designed sales deck than anything
        else in this guide.
      </p>
      <p className="mb-6 text-gray-800">
        Also check whether the portfolio matches your situation. An agency that has only ever built
        small DTC (direct-to-consumer) stores with a handful of products may not be the right fit for
        a B2B distributor managing negotiated pricing across hundreds of customer accounts, even if
        their design work looks great. Look for a past project that rhymes with your business, not
        just one that looks polished.
      </p>

      <h2 id="technical-checklist" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        The technical checklist
      </h2>
      <p className="mb-4 text-gray-800">
        You do not need to understand the code to check whether an agency takes these seriously. Ask
        about each one directly and see if the answer is specific.
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-800">
        <li>
          <strong>Payment security.</strong> Any business accepting card payments online falls under
          PCI DSS (Payment Card Industry Data Security Standard), an industry framework that sets
          security requirements for anywhere card data is stored, processed, or transmitted (
          <a
            href="https://www.pcisecuritystandards.org/standards/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-orange-600 underline"
          >
            PCI Security Standards Council
          </a>
          ). Ask how the agency keeps your store compliant. Most modern builds keep you largely out
          of the hardest requirements by routing payments through a trusted processor instead of
          handling raw card numbers on your own server.
        </li>
        <li>
          <strong>Accessibility.</strong> WCAG (Web Content Accessibility Guidelines), published by
          the World Wide Web Consortium, is the recognized international standard for making a
          website usable by people with disabilities, including visitors using screen readers or
          keyboard-only navigation (
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-orange-600 underline"
          >
            W3C Web Accessibility Initiative
          </a>
          ). A competent agency builds with this in mind from the start rather than bolting it on
          later, or not at all.
        </li>
        <li>
          <strong>Site speed.</strong> A slow store loses sales, especially on mobile. Ask how the
          agency approaches image optimization, page load time, and mobile performance, and ask to
          see a real example, not just a promise.
        </li>
        <li>
          <strong>SEO continuity during a migration.</strong> If you are moving platforms or
          redesigning an existing store, ask specifically how old page addresses will be redirected
          to their new equivalents. A skipped or sloppy redirect plan is one of the most common,
          and most avoidable, ways a migration quietly damages your existing search traffic.
        </li>
        <li>
          <strong>Integrations.</strong> If your store needs to connect to an inventory system, an
          accounting tool, a shipping provider, or an ERP (a system that manages core business
          operations like inventory, orders, and finance in one place), ask whether the agency has
          built that specific integration before, and what happens if the connection breaks after
          launch.
        </li>
      </ul>

      <h2 id="engagement-models" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Engagement models, explained
      </h2>
      <p className="mb-4 text-gray-800">
        Agencies structure how you pay for their time in a few standard ways. None is universally
        better; the right one depends on what stage your project is at.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Model</th>
              <th className="p-3 border text-left">How it works</th>
              <th className="p-3 border text-left">Good fit for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Project-based</td>
              <td className="p-3 border text-gray-800">A fixed scope and price for a defined piece of work, usually paid in milestones</td>
              <td className="p-3 border text-gray-800">A new store build or a defined redesign with a clear end point</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Retainer</td>
              <td className="p-3 border text-gray-800">An ongoing monthly arrangement covering improvements, fixes, and new features over time</td>
              <td className="p-3 border text-gray-800">Ongoing maintenance and growth after launch</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Staff augmentation</td>
              <td className="p-3 border text-gray-800">The agency&apos;s developers work inside your own team, under your direction, usually billed by time</td>
              <td className="p-3 border text-gray-800">Businesses that already have a technical lead and just need more hands</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        Most ecommerce projects start project-based for the initial build, then move to a retainer
        once the store is live and needs ongoing attention. Be cautious of an agency that insists on
        one model regardless of what you actually need. That usually says more about how they prefer
        to be paid than about what is right for your project.
      </p>

      <h2 id="red-flags" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Red flags that predict a bad project
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Red flag</th>
              <th className="p-3 border text-left">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">No discovery phase before the quote</td>
              <td className="p-3 border text-gray-800">A price with no research behind it is a guess, not a plan</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Vague scoping, no written detail</td>
              <td className="p-3 border text-gray-800">Vague scope is how scope creep and disputes start later</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Can&apos;t explain a past technical decision simply</td>
              <td className="p-3 border text-gray-800">Suggests they did not actually make the decision, or do not understand it</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">No plan for post-launch support</td>
              <td className="p-3 border text-gray-800">Bugs and issues after launch are normal; no plan means you are on your own</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Vague or evasive about code and asset ownership</td>
              <td className="p-3 border text-gray-800">You could end up locked out of your own website if you ever want to leave</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Pressure to sign quickly</td>
              <td className="p-3 border text-gray-800">Urgency tactics protect the agency&apos;s pipeline, not your decision</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        None of these on their own is automatically disqualifying; a young agency might genuinely
        have a thin portfolio yet still be sharp and honest. But two or more of these together, on
        the same agency, is a strong reason to keep looking.
      </p>

      <h2 id="check-references" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How to check references properly
      </h2>
      <p className="mb-4 text-gray-800">
        Do not stop at the testimonials on the agency&apos;s own site. Those were chosen by the
        agency. Ask for the direct contact of a past client whose project was similar in size or
        complexity to yours, and actually call them. Ask specific questions rather than open-ended
        ones: did the final cost match the original quote, how did the agency handle it when
        something went wrong mid-project, and would they hire the same team again for a second
        project. A specific, considered answer tells you far more than a generic &quot;great to work
        with&quot;. If an agency hesitates to connect you with a real past client, treat that
        hesitation as information.
      </p>

      <h2 id="in-house-vs-agency" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        In-house vs. freelancer vs. agency
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border text-left">Option</th>
              <th className="p-3 border text-left">Strength</th>
              <th className="p-3 border text-left">Trade-off</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">Freelancer</td>
              <td className="p-3 border text-gray-800">Fast, personal, good for one well-defined task</td>
              <td className="p-3 border text-gray-800">Depends on one person&apos;s time and range of skills</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border font-semibold text-gray-900">Agency</td>
              <td className="p-3 border text-gray-800">A coordinated team across design, engineering, and project management</td>
              <td className="p-3 border text-gray-800">Costs more than a single freelancer for the same hours</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-semibold text-gray-900">In-house team</td>
              <td className="p-3 border text-gray-800">Full control, deep and permanent knowledge of your business</td>
              <td className="p-3 border text-gray-800">Slow and expensive to hire, harder to keep current on every platform change</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6 text-gray-800">
        A simple rule of thumb: choose a freelancer for a single, contained job, an agency when you
        need several skills working together toward one launch, and an in-house team only once
        ecommerce development has become a genuinely ongoing, full-time part of your business.
      </p>

      <h2 id="build-shortlist" className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How to build your shortlist
      </h2>
      <p className="mb-4 text-gray-800">
        Put the whole framework together into a process you can actually run in a week or two.
        First, write down what you actually need in plain words: a new store, a migration, a
        redesign, or an integration, and roughly what &quot;done&quot; looks like. Second, gather
        four or five candidates from any source (search, referrals, a directory) and treat all of
        them as unverified at this stage. Third, run every candidate through the questions and red
        flags above on an initial call. Fourth, ask each survivor for one real reference in a
        similar situation to yours, and actually call them. Fifth, choose the agency that gave the
        clearest, most specific answers about your actual project, not the one with the flashiest
        pitch deck.
      </p>
      <p className="mb-6 text-gray-800">
        One last honest note. The clearest signal is not what an agency promises, it is how they
        behave before you have paid them anything. An agency that asks sharp questions about your
        business, shows you real proof, names the specific people who will do the work, and is
        straightforward about ownership and support without being pushed, has usually earned a
        serious conversation. An agency that talks mostly about itself and rushes you toward a
        signature has told you something too.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Where FactoryJet fits in this framework
      </h2>
      <p className="mb-6 text-gray-800">
        We built this guide as a genuinely neutral checklist, and it works the same way if you point
        it at us. We run a structured discovery call before quoting a fixed price. We can walk you
        through the specific technical problem behind our own past ecommerce builds, not just the
        finished result. Every project ships with full client ownership of the code, design files,
        and store data on launch day. And every build includes a defined support period after
        launch, with clear options for what comes next. If that is the standard you are already
        holding other agencies to, we would rather earn a place on your shortlist than ask you to
        take our word for it.
      </p>

      {/* End CTA */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-10 mb-4">
        <p className="font-semibold text-gray-900 mb-2">
          Run this framework on your own shortlist first
        </p>
        <p className="text-gray-800 mb-4">
          Use the questions, the technical checklist, and the red flags above on every agency you
          are considering, including us. If you want a second opinion on your scope or platform
          choice before you commit to anyone, we will walk through it with you directly, no
          pressure attached.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-block bg-[#B23E13] text-white px-5 py-2 rounded font-semibold hover:bg-[#9A3510] transition-colors"
          >
            Get a straight answer on your project
          </a>
          <a
            href="/services/ecommerce-development"
            className="inline-block border border-[#B23E13] text-[#B23E13] px-5 py-2 rounded font-semibold hover:bg-amber-100 transition-colors"
          >
            Explore our ecommerce development approach
          </a>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 p-5 rounded-2xl my-8">
        <p className="font-semibold text-orange-900 mb-2">
          Want a plain-language read on your specific project?
        </p>
        <p className="text-gray-800 mb-3">
          Bhavesh runs discovery calls himself. Book a 30-minute call and get a clear, honest read
          on scope, platform fit, and what to prioritize first. No jargon, no pressure.
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
