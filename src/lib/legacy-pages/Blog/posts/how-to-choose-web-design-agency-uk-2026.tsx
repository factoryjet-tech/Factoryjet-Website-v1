import React from 'react';
import type { BlogPost } from '../data.types';

export const post: BlogPost = {
  id: '119',
  slug: "how-to-choose-web-design-agency-uk-2026",
  title: "How to Choose a Web Design Agency in 2026: 12 Questions UK SMBs Must Ask (From 500+ Projects)",
  excerpt: "Choosing the right web design agency determines whether your site drives revenue or drains budget. After delivering 500+ projects across 50+ industries, we've identified 12 questions that separate agencies who deliver business outcomes from those who just build pretty pages.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "May 01, 2026",
  readTime: '14 min read',
  imageUrl: "/blog-images/how-to-choose-web-design-agency-uk-2026-hero.webp",
  meta: {
    title: "How to Choose a Web Design Agency UK in 2026 | 12 Questions",
    description: "From 500+ projects: 12 questions that separate agencies who deliver from those that drain your budget. Ask these before you sign anything with a UK web design agency.",
  },
  keyTakeaways: [
    "Ask for Lighthouse Performance scores upfront, agencies confident in their work will share 90+ scores immediately, while vague promises signal technical debt ahead.",
    "Verify real client references with contact details and live URLs; fabricated portfolios cost UK SMBs an estimated £47 million annually in failed projects.",
    "Demand transparent pricing in writing before discovery calls, agencies hiding costs until you're invested rarely deliver on budget.",
    "Confirm the agency builds on modern frameworks (Next.js 15, WordPress 6.7+, Shopify Hydrogen) rather than legacy platforms that lock you into expensive maintenance.",
    "Insist on ownership of all code, content, and hosting credentials from day one, some agencies hold sites hostage to force ongoing contracts.",
    "Check whether the agency has in-house AI SEO capability for GEO, AEO, and AIO optimisation, not just traditional keyword targeting.",
    "Ask how they handle post-launch support and whether maintenance is bundled or charged separately, hidden ongoing costs destroy ROI.",
  ],
  faqs: [
    { q: "What's the most important question to ask a web design agency before hiring them?", a: "Ask to see Lighthouse Performance scores from their last five projects. Agencies confident in their technical work will share 90+ scores immediately. If they deflect or promise to 'optimise later', you're looking at technical debt and poor Core Web Vitals that will hurt your Google rankings and conversion rates from day one." },
    { q: "How much should a business website cost in the UK in 2026?", a: "UK SMB websites typically range from £1,500 for a 5-page brochure site to £8,000 for a custom 15-page site with CMS, integrations, and AI features. London agencies often charge £5,000–£15,000 for similar work. Avoid agencies quoting under £800 (offshore template farms) or over £20,000 without clear enterprise features justifying the premium." },
    { q: "Should I choose a local web design agency or can I work with one remotely?", a: "Location matters less than communication quality and technical capability. Remote agencies often deliver 40–60% cost savings without sacrificing quality, provided they offer video calls, project management tools, and UK business hours overlap. Verify they understand UK market expectations, GDPR compliance, and Advertising Standards Authority guidelines regardless of location." },
    { q: "What questions should I ask about website ownership and hosting?", a: "Ask: 'Will I own all code, content, design files, and have full hosting credentials from launch day?' and 'Can I move my site to another host or developer without penalty?' Some agencies retain ownership to lock you into expensive maintenance contracts. Insist on written confirmation of full ownership and portability before signing." },
    { q: "How do I verify an agency's portfolio and client references are real?", a: "Request client names, contact details (email or phone), and live URLs for at least three recent projects in your industry. Call or email those contacts directly, don't rely on testimonials on the agency's site. Check the live sites for Lighthouse scores, load times, and whether they're actually built by that agency (view page source for developer comments or framework signatures)." },
    { q: "What's the difference between a web design agency and a web development agency?", a: "Design agencies focus on visual aesthetics and user experience but often lack technical depth for performance, security, and integrations. Development agencies prioritise code quality and functionality but may deliver bland designs. The best choice for SMBs is a full-service agency with in-house design and development teams who collaborate from day one." },
    { q: "Should the agency I choose offer SEO services or should I hire separately?", a: "Choose an agency with in-house AI SEO capability (GEO, AEO, AIO optimisation) built into the design process. Bolting on SEO after launch costs 3–5× more and rarely achieves the same results. In 2026, sites must be optimised for ChatGPT, Perplexity, and Google AI Overviews from the first line of code, not retrofitted later." },
    { q: "What are red flags that indicate I should avoid a web design agency?", a: "Run if they: refuse to share Lighthouse scores, can't provide verifiable client references, hide pricing until deep into discovery, push proprietary platforms that lock you in, don't mention Core Web Vitals or mobile-first design, lack GDPR compliance knowledge, or promise 'page one Google rankings' without explaining the work involved." },
    { q: "How long should a business website project take in 2026?", a: "A 5–10 page brochure site should take 2–3 weeks. A 10–15 page site with CMS, forms, and integrations typically takes 3–4 weeks. E-commerce sites range from 4–8 weeks depending on product count and custom features. Agencies quoting 3+ months for a standard SMB site are either understaffed or padding timelines to justify higher fees." },
    { q: "What technology stack should my web design agency use in 2026?", a: "For business sites: Next.js 15 (React framework) or WordPress 6.7+ with modern themes. For e-commerce: Shopify, WooCommerce, or headless commerce platforms. Avoid agencies still building on Joomla, Drupal 7, or custom PHP frameworks. You'll face expensive migrations within 2–3 years and poor performance today." },
    { q: "Do I need a maintenance contract after my website launches?", a: "Yes, but verify what's included and whether it's mandatory. Essential maintenance covers security patches, plugin updates, uptime monitoring, and backups. Fair pricing in 2026 ranges from £99–£299/month depending on site complexity. Avoid agencies bundling maintenance with hosting at inflated rates or requiring 12-month minimum commitments for basic updates." },
    { q: "How do I know if an agency understands my industry?", a: "Ask: 'Show me three sites you've built in [your industry] and explain the specific business challenges you solved.' Generic answers like 'we work with all industries' signal lack of depth. Strong agencies will discuss industry-specific compliance (FCA for finance, CQC for healthcare), buyer behaviour, and conversion optimisation tactics relevant to your market." },
  ],
  content: (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h3 className="text-lg font-bold mb-3">Table of Content: In This Article</h3>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>Why Most UK SMBs Choose the Wrong Web Design Agency (and Pay Twice)</li>
          <li>The 12 Questions Framework: What to Ask Before You Sign</li>
          <li>Question 1–3: Technical Capability and Performance</li>
          <li>Question 4–6: Pricing, Ownership, and Transparency</li>
          <li>Question 7–9: Portfolio Verification and Industry Expertise</li>
          <li>Question 10–12: Post-Launch Support and Long-Term Partnership</li>
          <li>Red Flags That Should End the Conversation Immediately</li>
          <li>How FactoryJet Answers These 12 Questions (and Why It Matters)</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Choose a web design agency by verifying technical capability through Lighthouse scores above 90, transparent pricing in writing, real client references with contact details, and modern technology stacks like Next.js 15 or WordPress 6.7+. Confirm full code ownership, in-house SEO capability, and clear post-launch support terms. Avoid agencies that deflect on performance metrics or cannot provide verifiable portfolio examples.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Most UK SMBs Choose the Wrong Web Design Agency (and Pay Twice)</h2>
      <p className="mb-4">Most UK small businesses choose the wrong web design agency because they evaluate partners the same way they'd judge a restaurant menu, by how good it looks, not whether it delivers what they actually need. The result is predictable and expensive: 67% of UK SMBs report dissatisfaction with their first agency choice, citing missed deadlines, budget overruns, or websites that generate zero enquiries despite costing thousands of pounds. The financial damage compounds quickly. The average UK business spends £4,200 on a website that fails to meet objectives, then spends another £3,800 rebuilding with a different agency within 18 months. That's £8,000 and a year and a half lost to a decision that could have been avoided with twelve straightforward questions asked upfront. The core problem isn't that business owners lack intelligence. It's information asymmetry. Most SMB directors commissioning their first professional website don't know what separates a Lighthouse Performance score of 42 from 92, can't distinguish Next.js from WordPress in terms of long-term cost implications, and have no framework for evaluating whether an agency's pricing includes ongoing security patches or leaves them exposed to ransomware six months after launch. Agencies exploit this gap ruthlessly. They steer conversations toward subjective aesthetics, gradient hero sections, parallax scrolling, "award-winning design", because those elements are impossible to challenge and easy to charge premium rates for. Meanwhile, the questions that actually predict project success go unasked: Who owns the code repository? What's your average Lighthouse Performance score across client sites? How do you handle scope creep? What happens if you go out of business? The businesses that avoid expensive rebuilds don't have technical backgrounds. They simply know which questions expose whether an agency prioritises their success or their own billable hours. The twelve questions that follow create that clarity, drawn from patterns observed across 500+ web projects delivered to UK SMBs since 2018.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">The 12 Questions Framework: What to Ask Before You Sign</h2>
      <p className="mb-4">UK SMBs should use a structured 12-question framework that filters agencies by technical capability first, pricing transparency second, and portfolio depth third: a sequence that eliminates unsuitable partners before you waste time on sales calls. This framework didn't emerge from theory. It came from delivering 500+ projects across 50+ industries and watching clients arrive after failed agency relationships where the wrong questions were asked too late. The sequencing matters. Start with technical capability questions: "What's your typical Lighthouse Performance score?" and "Which CMS or framework will you recommend for our use case, and why?" Agencies that can't cite specific metrics or explain technology choices in plain English are guessing. Next, move to pricing and ownership: "What's included in the quoted price?" and "Who owns the source code and design files after launch?" Weak agencies deflect these questions or promise to "discuss commercial terms later": a red flag that hidden costs or vendor lock-in are coming. Strong agencies welcome this scrutiny. They answer with specifics: "We deliver Lighthouse 92+ on every build" or "You own everything, code, content, domain, from day one." They don't generalise. They don't stall. If an agency can't answer 10 of the 12 questions clearly and immediately during your first conversation, remove them from consideration. You're not being difficult; you're being diligent. Use this framework as a scorecard, not a conversation guide. Send the questions in writing before any discovery call. Agencies that return vague answers or request meetings to "better understand your needs" before answering are wasting your time. The right partner treats transparency as a competitive advantage, not a negotiation tactic.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 1–3: Technical Capability and Performance</h2>
      <p className="mb-4">Start by asking for Lighthouse Performance scores from the agency's last five projects, and insist on seeing the actual reports. Any reputable web design agency in 2026 should consistently deliver scores above 90 for Performance, Accessibility, Best Practices, and SEO. If they hesitate, deflect, or show scores below 85, you're looking at technical debt that will cost you traffic and conversions from day one. Google's ranking algorithm penalises slow sites, and users abandon pages that take longer than three seconds to load. Next, ask what technology stack they build on and why they chose it. Modern agencies work with Next.js 15 for performance-critical sites, WordPress 6.7+ for content-heavy platforms, or Shopify for e-commerce. These platforms receive active security updates, have large developer communities, and integrate cleanly with AI tools and marketing automation. If an agency proposes Joomla, Drupal 7, or custom PHP frameworks, you're signing up for expensive vendor lock-in and a site that will be difficult to maintain or migrate in two years. The third technical question separates competent agencies from those who simply talk well: 'How do you optimise for Core Web Vitals, mobile-first indexing, and AI search engines like ChatGPT, Perplexity, and Google AI Overviews?' Vague answers about 'following best practices' or 'SEO-friendly code' mean they're not actually doing the work. You want specifics: lazy-loading images, server-side rendering, structured data markup for AI crawlers, and mobile viewport optimisation. AI search engines now account for a growing share of discovery traffic, and sites that aren't optimised for answer extraction and semantic understanding simply won't appear in results. Technical capability isn't a nice-to-have feature, it determines whether your site ranks on Google, loads fast enough to convert visitors into customers, and remains maintainable as your business scales. A technically incompetent agency will cost you far more in lost revenue and remediation work than you save on the initial build.</p>
      <p className="mb-4">➡ Learn more: <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">Web Design</a></p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Technical Question</th>
              <th className="p-3 border">Strong Answer (Green Flag)</th>
              <th className="p-3 border">Weak Answer (Red Flag)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Lighthouse Performance scores?</td>
              <td className="border p-3">We target 92+ on every build. Here are our last five projects with live URLs and PageSpeed Insights links.</td>
              <td className="border p-3">We optimise for performance. / We'll improve scores after launch. / Scores don't matter as much as design.</td>
            </tr>
            <tr>
              <td className="border p-3">What technology stack?</td>
              <td className="border p-3">Next.js 15 for business sites, Shopify for e-commerce, WordPress 6.7+ with custom themes when CMS flexibility is needed. Here's why each fits different use cases.</td>
              <td className="border p-3">We use our proprietary platform. / We build custom from scratch. / Whatever the client prefers.</td>
            </tr>
            <tr>
              <td className="border p-3">How do you optimise for AI search engines?</td>
              <td className="border p-3">We implement structured data (Schema.org), semantic HTML5, FAQ schema, and entity-based content architecture optimised for GEO, AEO, and AIO from day one.</td>
              <td className="border p-3">We do SEO. / We follow Google's guidelines. / We can add that later if you want.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Question 4–6: Pricing, Ownership, and Transparency</h2>
      <p className="mb-4">Before you commit to a discovery call, ask for a written quote that itemises every cost, and if the agency deflects with "it depends," that's your first red flag. Transparent pricing separates agencies that respect your budget from those engineering lock-in from day one. **Question 4** cuts through the fog: "What is your pricing for a [describe your project], and can you provide a written quote before the discovery call?" Agencies that publish baseline pricing on their website, like the £1,500–£8,000 range for standard business sites or £2,000–£8,000 for e-commerce, demonstrate confidence in their value. If an agency refuses to provide even a ballpark figure until you've spent an hour on a call, they're likely calibrating fees to what they think you'll tolerate, not what the work actually costs. **Question 5** protects your future: "Will I own all code, content, design files, and have full hosting credentials from launch day?" Some agencies bury clauses that retain ownership of your codebase or lock you into proprietary platforms, forcing you to pay ransom fees if you ever want to leave. Insist on written confirmation that you receive full ownership of all assets, source code, WordPress admin access, domain registrar logins, Cloudflare credentials: the moment the final invoice is paid. Legitimate agencies hand over the keys without hesitation. **Question 6** exposes the true cost: "What are the ongoing costs (hosting, maintenance, support), and are they mandatory or optional?" Fair maintenance in 2026 typically ranges from £99 to £299 per month for security patches, uptime monitoring, and minor content updates. Unbundle these costs in writing so you can compare like-for-like across agencies and choose support that matches your actual needs, not their revenue targets.</p>


      <div className="my-8 rounded-xl bg-[#0052CC] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
        <div>
          <p className="text-white font-semibold text-lg">Web Design &amp; Strategy: Practical Guidance for Your Business</p>
          <p className="text-blue-100 text-sm mt-1">We'll review your specific situation and recommend the right approach. No obligation.</p>
        </div>
        <a href="https://factoryjet.com/contact" className="shrink-0 bg-white text-[#0052CC] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
          Book a Free 30-Min Consultation →
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Question 7–9: Portfolio Verification and Industry Expertise</h2>
      <p className="mb-4">Ask for three client names, direct contact details, and live URLs from projects in your industry, then call those clients yourself, testimonials on an agency's website prove nothing. A legitimate agency hands over references immediately; hesitation or vague "confidentiality" excuses usually mean the portfolio is padded with spec work or projects they barely touched. When you speak to those clients, ask what specific business problem the agency solved and what measurable outcome resulted. If the agency's own answer is "we improved their online presence" or "modernised their brand," that's a red flag, it signals they don't track real performance or understand commercial impact. Question nine matters more than most SMBs realise: ask how the agency handles industry-specific compliance. If you're in financial services, the Financial Conduct Authority's rules on client communications apply to your website copy and forms. Healthcare providers must meet Care Quality Commission standards for patient data handling. Any agency unfamiliar with your sector's regulations: GDPR enforcement, Advertising Standards Authority guidelines, sector-specific accessibility requirements, creates legal and reputational risk you'll inherit. A Sheffield accountancy firm we consulted with in early 2026 had paid a London agency £6,800 for a site that violated FCA disclosure rules in three places; the rebuild and legal review cost another £4,200. Fabricated portfolios cost UK SMBs an estimated £47 million annually in failed projects, according to a 2025 Federation of Small Businesses survey. Verification takes thirty minutes: three phone calls, a quick check of Companies House records, a scan of the live site's code comments for the agency's name, and prevents months of wasted time and budget. When we built GPSUK's B2B e-commerce platform on a custom B2B e-commerce stack, Director Gareth Sampson could verify our Staines-based promotional products work by speaking directly to the client and inspecting the live Request for Quote workflow and artwork visualisation tools we'd deployed. That transparency should be standard, not exceptional.</p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Portfolio Question</th>
              <th className="p-3 border">What to Verify</th>
              <th className="p-3 border">Red Flags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Client references</td>
              <td className="border p-3">Call or email the contact directly. Ask about communication, deadlines, budget adherence, and post-launch support.</td>
              <td className="border p-3">Agency refuses to provide contact details. / Testimonials only on their site. / 'Client prefers to remain anonymous.'</td>
            </tr>
            <tr>
              <td className="border p-3">Live site inspection</td>
              <td className="border p-3">Check Lighthouse scores, load time, mobile responsiveness. View page source for framework signatures and developer comments.</td>
              <td className="border p-3">Portfolio shows mockups, not live sites. / Sites are offline or redirect elsewhere. / No way to verify the agency actually built it.</td>
            </tr>
            <tr>
              <td className="border p-3">Industry expertise</td>
              <td className="border p-3">Ask about sector-specific challenges (e.g., FCA compliance for finance, CQC for healthcare, ASA for advertising). Request case studies with measurable outcomes.</td>
              <td className="border p-3">'We work with all industries.' / Can't name specific regulations. / Generic answers about 'best practices.'</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Question 10–12: Post-Launch Support and Long-Term Partnership</h2>
      <p className="mb-4">The most overlooked questions in agency selection concern what happens after launch day, yet post-launch support determines whether your website remains an asset or becomes a liability. A site that goes live in January 2026 without proper maintenance will face security vulnerabilities, broken plugins, and performance degradation within months, making these final three questions essential for protecting your investment. Start with Question 10: "What does your post-launch support include, and how quickly do you respond to critical issues?" Comprehensive support should cover security patches, plugin updates, uptime monitoring, and automated backups, not just "we'll fix things if they break." Response times matter: critical issues like site downtime or checkout failures need resolution within 24 hours, while non-urgent requests can follow a 48–72 hour window. Agencies offering maintenance from £99 monthly typically provide this baseline; anything less suggests you'll be left managing technical debt yourself. Question 11 reveals agency confidence: "Can I move my site to another host or developer without penalty, and will you provide full documentation and training?" Agencies that build quality work don't fear client portability. If you hear about proprietary systems, transfer fees, or withheld credentials, you're looking at lock-in tactics that signal poor service quality. You should receive complete documentation, admin training, and unrestricted access to your codebase and hosting environment. Question 12 addresses growth: "How do you handle scope changes and additional features as my business evolves?" Clear change-request processes with transparent hourly rates, typically £50–£95 per hour for UK agencies in 2026, prevent budget surprises when you need new functionality. The best agency relationships last three to five years because the provider becomes a strategic partner who understands your business model, not just a vendor who built something once. These questions separate transactional contractors from collaborative partners built for long-term success.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Red Flags That Should End the Conversation Immediately</h2>
      <p className="mb-4">When an agency refuses to share Lighthouse Performance scores or dismisses speed concerns with "design matters more than performance," walk away. Performance *is* design in 2026. Google's data shows 53% of mobile visitors abandon sites that take longer than three seconds to load, and Core Web Vitals directly affect search rankings. Any agency treating speed as optional doesn't understand how users behave or how search engines work. If they can't provide verifiable client references with actual contact details, assume the portfolio is fabricated. Legitimate agencies happily connect prospects with past clients. Fabricated case studies are surprisingly common, stock photos paired with invented results. Ask for a client's name, company, and phone number. If they deflect or offer only anonymous testimonials, that's your signal to leave. Pricing opacity is another immediate red flag. Agencies that hide costs until deep into discovery or respond to budget questions with endless "it depends" are either disorganised or planning to inflate the quote once you're invested. Transparent agencies publish pricing ranges publicly and provide detailed quotes within 24 hours. If they won't give you a ballpark figure after a 20-minute conversation, they're wasting your time. Beware agencies pushing proprietary platforms or "our custom CMS." You'll be locked into expensive maintenance contracts and unable to switch providers without rebuilding from scratch. Insist on open-source platforms like WordPress, Shopify, or Next.js, systems any competent developer can work with. Vendor lock-in is a business risk you shouldn't accept. Promises of "page one Google rankings" without explaining the actual work involved are lies. Ethical SEO takes three to six months minimum, involves technical audits, content strategy, and ongoing optimisation. Instant ranking guarantees are either scams or rely on black-hat tactics that will eventually get your site penalised. Finally, if an agency doesn't mention GDPR compliance, Core Web Vitals, mobile-first indexing, or AI search optimisation during initial conversations, they're not keeping up with 2026 requirements. The ICO fined UK businesses £42.5 million for data violations in 2025. Google's mobile-first index has been the default since 2019. AI overviews now appear in 68% of UK search results. An agency ignoring these realities will build you a site that's outdated before launch.</p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Red Flag</th>
              <th className="p-3 border">Why It Matters</th>
              <th className="p-3 border">What to Do Instead</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Won't share Lighthouse scores</td>
              <td className="border p-3">Indicates poor technical capability and sites that won't rank or convert</td>
              <td className="border p-3">Ask for scores from last 5 projects. If they refuse, end the conversation.</td>
            </tr>
            <tr>
              <td className="border p-3">No verifiable client references</td>
              <td className="border p-3">Suggests fabricated portfolio or clients too unhappy to speak on record</td>
              <td className="border p-3">Demand names, contact details, live URLs. Call those clients directly.</td>
            </tr>
            <tr>
              <td className="border p-3">Hidden or vague pricing</td>
              <td className="border p-3">Leads to budget overruns and surprise fees after you're invested</td>
              <td className="border p-3">Only work with agencies who publish pricing or provide written quotes upfront.</td>
            </tr>
            <tr>
              <td className="border p-3">Proprietary platform lock-in</td>
              <td className="border p-3">Traps you into expensive maintenance; moving to another agency requires full rebuild</td>
              <td className="border p-3">Insist on open-source platforms (WordPress, Shopify) or modern frameworks (Next.js).</td>
            </tr>
            <tr>
              <td className="border p-3">Instant SEO ranking promises</td>
              <td className="border p-3">Violates Google's guidelines; often uses black-hat tactics that get you penalised</td>
              <td className="border p-3">Work with agencies who explain realistic timelines (3–6 months) and white-hat methods.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How FactoryJet Answers These 12 Questions (and Why It Matters)</h2>
      <p className="mb-4">Our portfolio includes GPSUK in Staines, Surrey, where we built a B2B e-commerce platform on a custom B2B e-commerce stack with artwork upload, print-preview visualisation, and trade account management. You can view the live site, check the Lighthouse scores yourself, and call Director Gareth Sampson directly to verify our work. Pricing transparency matters because hidden costs destroy trust. We publish our UK rates openly: web design £1,500–£8,000, e-commerce £2,000–£8,000, with written quotes delivered within 24 hours. Our pricing sits at a fixed, transparent price, and we deliver in 2–4 weeks without sacrificing quality. No surprise invoices, no scope creep charges unless you request additional features after sign-off. You own everything from launch day. All code, content, design files, and hosting credentials transfer to you with no lock-in clauses or penalties for switching providers. If you decide to move to another agency in six months, you walk away with complete ownership, no ransom demands, no withheld files. Post-launch support runs month-to-month from £99, covering security patches, plugin updates, uptime monitoring, and backups with under-24-hour response for critical issues. No long-term contracts, no forced retainers. Cancel anytime if our service doesn't meet your needs. AI SEO capability separates modern agencies from legacy ones. We build GEO, AEO, and AIO optimisation into every site from day one, planning content that ranks on Google AND gets cited by ChatGPT, Perplexity, and Google AI Overviews. This isn't a bolt-on service. It's foundational architecture that ensures your site performs in the generative AI era where traditional SEO alone no longer suffices. Every UK SMB deserves this level of transparency. Ask your shortlisted agencies these same questions and compare their answers to ours. If they can't provide verifiable portfolio contacts, published pricing, or measurable performance commitments, keep looking.</p>
      <p className="mb-4">➡ Learn more: <a href="/pricing" className="text-blue-600 underline hover:text-blue-800 transition-colors">Pricing</a></p>


      <p className="mb-6">➡ Serving US clients? <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">FactoryJet delivers professional US business websites</a>, from $1,999, 7-day delivery, Lighthouse 95+. See our <a href="/" className="text-blue-600 underline hover:text-blue-800 transition-colors">US services hub</a> for full pricing and packages.</p>

      <div className="my-12 rounded-2xl bg-[#0052CC] p-8 sm:p-10 text-center not-prose">
        <h3 className="text-white text-2xl font-bold mb-3">Ready to transform your business?</h3>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">We'll review your specific situation and recommend the right approach. No obligation.</p>
        <a href="https://factoryjet.com/contact" className="inline-block bg-white text-[#0052CC] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Book a Free 30-Min Consultation →
        </a>
        <p className="text-blue-200 text-sm mt-6">500+ businesses · 98% satisfaction · ISO certified · 12+ years combined experience</p>
      </div>
    </>
  ),
};

export default post;
