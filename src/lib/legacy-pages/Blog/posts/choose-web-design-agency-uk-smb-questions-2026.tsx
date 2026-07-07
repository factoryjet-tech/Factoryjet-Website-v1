import React from 'react';
import type { BlogPost } from '../data.types';

export const post: BlogPost = {
  id: '103',
  slug: "choose-web-design-agency-uk-smb-questions-2026",
  title: "How to Choose a Web Design Agency in 2026: 12 Questions Every UK SMB Must Ask",
  excerpt: "Choosing the right web design agency determines whether your website becomes a revenue driver or a costly mistake. Ask these 12 questions to separate capable agencies from those who overpromise and underdeliver.",
  category: "Web Design & Strategy",
  author: 'Bhavesh Barot',
  date: "Apr 24, 2026",
  readTime: '14 min read',
  imageUrl: "/blog-images/choose-web-design-agency-uk-smb-questions-2026-hero.webp",
  meta: {
    title: "12 Questions UK SMBs Must Ask a Web Design Agency in 2026",
    description: "Don't hire a web design agency until you've asked these 12 questions. Covers performance standards, fixed pricing, red flags, and when local vs offshore makes sense.",
  },
  keyTakeaways: [
    "Request Lighthouse performance scores upfront — agencies confident in their work will show 90+ scores across Performance, Accessibility, SEO, and Best Practices.",
    "UK agencies charge £3,000–£15,000 for SMB websites; offshore teams deliver comparable quality at £1,500–£8,000 with 2–4 week timelines.",
    "Ask for named client references in your industry with verifiable contact details — vague portfolio claims without contacts signal inexperience.",
    "Clarify ownership of code, design files, and domain credentials in writing before signing — some agencies retain control to force ongoing contracts.",
    "Confirm the agency's approach to Core Web Vitals, mobile-first indexing, and structured data — these directly impact Google rankings in 2026.",
    "Verify post-launch support terms: response times, bug-fix windows, and monthly maintenance costs to avoid surprise bills after go-live.",
  ],
  faqs: [
    { q: "What should I expect to pay for a business website in the UK in 2026?", a: "UK web design agencies typically charge £3,000–£15,000 for SMB websites, depending on complexity and features. Offshore agencies with UK-focused teams deliver comparable quality at £1,500–£8,000, often at a fixed, transparent price. E-commerce sites range £2,000–£8,000 offshore vs £5,000–£25,000 locally. Always request itemised quotes covering design, development, content migration, and first-year hosting." },
    { q: "How long does it take to build a professional business website?", a: "Most SMB websites take 4–12 weeks from kickoff to launch. Agencies using modern frameworks like Next.js or headless WordPress can deliver in 2–4 weeks. Delays usually stem from client content approval, not technical work. Ask for a project timeline with milestone dates and clarify what happens if you miss a content deadline." },
    { q: "What is a Lighthouse score and why does it matter?", a: "Lighthouse is Google's open-source tool measuring website performance, accessibility, SEO, and best practices on a 0–100 scale. Scores below 90 indicate slow load times, poor mobile experience, or SEO issues that hurt rankings. Request Lighthouse reports for the agency's recent projects — confident agencies will show 92+ scores across all categories." },
    { q: "Should I choose a local UK agency or an offshore team?", a: "Both can deliver quality work. Local agencies offer face-to-face meetings and same-timezone communication but charge premium rates. Offshore agencies with UK clients (like those serving Sheffield, Staines, or London SMBs) provide comparable quality at 50–60% lower cost, often with faster delivery. Evaluate based on portfolio, client references, and communication responsiveness, not location alone." },
    { q: "What questions should I ask about post-launch support?", a: "Ask: What's included in the first 30 days post-launch? What are your bug-fix response times? Do you offer monthly maintenance plans, and what do they cover? What happens if the site breaks after the warranty period? Clarify costs for updates, security patches, and emergency fixes. Typical UK maintenance plans run £99–£300 per month." },
    { q: "How do I verify an agency's client references?", a: "Request at least three named clients in your industry with contact details (name, role, company, email or phone). Contact them directly and ask: Did the project finish on time and budget? How did the agency handle problems? Would you hire them again? Agencies with real experience will provide verifiable contacts without hesitation." },
    { q: "What ownership rights should I have after the website launches?", a: "You should own all custom code, design files, content, domain registration, and hosting credentials. Request written confirmation before signing. Some agencies retain ownership to lock you into ongoing contracts. If they refuse to transfer full ownership, walk away — it's a major red flag." },
    { q: "What's the difference between WordPress, Shopify, and custom-coded websites?", a: "WordPress suits content-heavy sites and blogs, with thousands of plugins but potential security and performance issues. Shopify works for e-commerce with built-in payments and inventory but charges transaction fees. Custom-coded sites (Next.js, React) offer the fastest performance and full control but require developer maintenance. Choose based on your technical comfort and budget." },
    { q: "How important is mobile performance for my business website?", a: "Critical. Google uses mobile-first indexing, meaning it ranks your site based on mobile performance. Over 60% of UK web traffic comes from mobile devices. Your site must load in under 3 seconds on 4G, pass Google's Mobile-Friendly Test, and deliver smooth touch interactions. Request mobile Lighthouse scores separately from desktop." },
    { q: "What are Core Web Vitals and how do they affect my rankings?", a: "Core Web Vitals are Google's speed and user-experience metrics: Largest Contentful Paint (loading speed), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). Poor scores hurt rankings and conversions. Ask agencies how they optimise for these metrics — answers should include image compression, lazy loading, and server-side rendering." },
    { q: "Should my website include structured data markup?", a: "Yes. Structured data (schema.org markup) helps Google understand your content and display rich results like star ratings, FAQs, and business details in search. It's essential for local businesses, e-commerce, and service providers. Ask if the agency implements JSON-LD structured data for your business type and validates it with Google's Rich Results Test." },
    { q: "What red flags should I watch for when evaluating agencies?", a: "Run if they: refuse to show Lighthouse scores, can't provide named client references, won't transfer ownership post-launch, quote suspiciously low prices without explaining trade-offs, promise first-page Google rankings, or pressure you to sign without a detailed scope. Trust agencies who ask detailed questions about your business goals before quoting." },
  ],
  content: (
    <>
      <div className="bg-gray-50 p-6 rounded-lg mb-8 border">
        <h3 className="text-lg font-bold mb-3">Table of Content: In This Article</h3>
        <ul className="list-disc pl-5 space-y-1 text-blue-700">
          <li>Why Most SMBs Choose the Wrong Agency (And Pay for It Later)</li>
          <li>Question 1: What Are Your Recent Lighthouse Performance Scores?</li>
          <li>Question 2: Can You Provide Three Named Client References in My Industry?</li>
          <li>Question 3: What's Your Typical Project Timeline and What Causes Delays?</li>
          <li>Question 4: How Do You Handle Core Web Vitals and Mobile-First Indexing?</li>
          <li>Question 5: What Ownership Rights Do I Have Post-Launch?</li>
          <li>Question 6: What's Included in Your Post-Launch Support?</li>
          <li>Question 7: How Do You Approach Structured Data and SEO Foundations?</li>
          <li>Local vs Offshore: The Real Cost and Quality Trade-Offs</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Choose a web design agency by requesting Lighthouse performance scores above 90, verifying named client references with contact details, and confirming full ownership of code and credentials. Compare itemized quotes and delivery timelines—UK agencies typically charge £3,000–£15,000 with 6–8 week turnarounds, while offshore teams deliver comparable quality at £1,500–£8,000 in 2–4 weeks.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Most SMBs Choose the Wrong Agency (And Pay for It Later)</h2>
      <p className="mb-4">Most UK SMBs choose web design agencies based on the lowest quote, then discover months later that their £800 bargain site scores 34 on Lighthouse Performance and loads in seven seconds on mobile. That slow load time doesn't just frustrate visitors—Google's Core Web Vitals update penalises it directly in search rankings, and research from Portent shows conversion rates drop 4.42% for every additional second of load time between 0–5 seconds. The second common mistake is accepting portfolio screenshots at face value without asking for verifiable client contacts. Agencies that refuse to connect you with past clients often lack the experience to deliver what they promise, or they've left those clients with unresolved technical debt. When GPSUK needed a B2B e-commerce platform with artwork upload and print-preview visualisation, Director Gareth Sampson required proof of similar builds before signing—not just mockups. The third trap is failing to clarify who owns the website files, domain, and hosting after launch. Many SMBs discover too late that their agency retained ownership, forcing them into expensive monthly retainers just to make basic content updates. Always confirm in writing that you receive full access to source code, CMS credentials, and domain registrar accounts on day one. Equally critical: define post-launch support terms upfront. Vague "ongoing maintenance" clauses often exclude security patches, plugin updates, or emergency fixes unless you pay separately. Ask for a written Service Level Agreement that specifies response times, included updates, and hourly rates for additional work before you sign the contract.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 1: What Are Your Recent Lighthouse Performance Scores?</h2>
      <p className="mb-4">Evaluating an agency's technical quality before hiring them starts with one concrete metric: their recent Lighthouse performance scores. Lighthouse is Google's open-source auditing tool that measures four critical dimensions—Performance, Accessibility, SEO, and Best Practices—on a 0–100 scale. These scores reveal whether an agency builds fast, accessible, search-friendly websites or delivers slow, poorly optimised code that damages your rankings and user experience. Ask any prospective agency to share Lighthouse reports from their three most recent client projects. Agencies confident in their technical craft will produce scores of 90 or above across all four categories without hesitation. These numbers aren't vanity metrics—they directly correlate with page load speed, mobile usability, and how well Google can crawl and index your site. A Performance score of 95 means your pages load in under two seconds on 4G connections. An Accessibility score of 92 confirms screen readers work properly and your site meets WCAG 2.1 standards. Scores below 85 in any category signal red flags. Poor Performance scores mean visitors abandon your site before it loads. Low Accessibility scores exclude disabled users and expose you to legal risk under the Equality Act 2010. Weak SEO scores indicate missing meta tags, broken structured data, or crawl errors that suppress your rankings. Best Practices scores below 90 often reveal outdated JavaScript libraries, insecure third-party scripts, or browser console errors that degrade user trust. If an agency deflects this question, claims "scores don't matter," or can't produce recent reports, walk away. Technical quality isn't negotiable in 2026. Every FactoryJet build maintains Lighthouse scores of 92 or higher across all categories because we architect sites for speed, accessibility, and search visibility from day one. Request the reports, verify the URLs, and compare agencies on measurable technical standards—not promises.</p>
      <p className="mb-4">➡ Learn more: <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">Web Design</a></p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Lighthouse Category</th>
              <th className="p-3 border">Minimum Acceptable Score</th>
              <th className="p-3 border">What It Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Performance</td>
              <td className="border p-3">90+</td>
              <td className="border p-3">Load speed, Time to Interactive, Largest Contentful Paint</td>
            </tr>
            <tr>
              <td className="border p-3">Accessibility</td>
              <td className="border p-3">90+</td>
              <td className="border p-3">Screen reader support, colour contrast, keyboard navigation</td>
            </tr>
            <tr>
              <td className="border p-3">SEO</td>
              <td className="border p-3">92+</td>
              <td className="border p-3">Meta tags, mobile-friendliness, structured data, crawlability</td>
            </tr>
            <tr>
              <td className="border p-3">Best Practices</td>
              <td className="border p-3">90+</td>
              <td className="border p-3">HTTPS, console errors, image aspect ratios, deprecated APIs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Question 2: Can You Provide Three Named Client References in My Industry?</h2>
      <p className="mb-4">The fastest way to verify real experience is to ask for three named client references—complete with contact details—and then actually ring them. A logo grid on an agency's homepage tells you nothing about delivery quality, communication, or whether projects finished on time and on budget. You need the client's name, their role, the company, and a phone number or email you can use to ask direct questions. When you contact these references, focus on three areas: Did the agency meet agreed timelines, or did the project drag on for months? How did they handle problems when requirements changed or technical issues surfaced? And the most revealing question: Would you hire them again for your next project? Evasive answers or long pauses tell you everything you need to know. Legitimate agencies provide verifiable contacts without hesitation. If an agency claims confidentiality agreements prevent them from sharing any client details, or offers only first names and vague testimonials, that's a red flag. Real businesses—especially in sectors like logistics, professional services, or retail—understand that references are standard practice in procurement. An agency serving 500+ businesses across the UK should have no trouble connecting you with three clients in your industry who are willing to speak candidly about their experience. Before you commit to a £3,000 build or a six-month SEO retainer, spend thirty minutes on the phone with someone who's already been through the process. Ask about responsiveness during the project, quality of the final deliverable, and whether post-launch support actually materialised. The agencies that deliver consistently have clients who are happy to vouch for them. The ones that don't will find reasons why references aren't available.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 3: What's Your Typical Project Timeline and What Causes Delays?</h2>
      <p className="mb-4">Most SMB websites take between four and twelve weeks from kickoff to launch, though modern frameworks like Next.js 15 now enable delivery in two to four weeks for standard builds when content and approvals move quickly. The timeline depends less on technical complexity than on how efficiently both parties communicate and make decisions. The single biggest cause of delay isn't coding or design—it's waiting for client content approval. You might assume the agency controls the schedule, but in reality, projects stall when businesses take three weeks to approve homepage copy or can't provide product images on time. Before signing anything, clarify exactly what you're responsible for providing and when. Ask the agency to map out milestone dates: wireframe approval by week one, content submission by week two, design sign-off by week three. Understanding your role prevents the frustrating scenario where you're paying monthly retainers while the project sits idle. Equally important: ask what happens if you miss a content deadline. Professional agencies build buffer time into schedules, but some will pause billing or push your launch date back if materials arrive late. Others charge rush fees to reprioritise your project. Get this in writing. A transparent timeline with clear handoff points protects both parties and keeps momentum strong. If an agency promises a five-page brochure site in under two weeks, verify they're not cutting corners on accessibility testing, mobile optimisation, or SEO fundamentals. Speed matters, but not at the expense of a Lighthouse score below 90 or a site that fails basic WCAG standards. The best agencies balance efficiency with quality—they've simply eliminated the bloat that stretches timelines unnecessarily.</p>


      <div className="my-8 rounded-xl bg-[#0052CC] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
        <div>
          <p className="text-white font-semibold text-lg">Web Design &amp; Strategy: Practical Guidance for Your Business</p>
          <p className="text-blue-100 text-sm mt-1">We'll review your specific situation and recommend the right approach. No obligation.</p>
        </div>
        <a href="https://factoryjet.com/contact" className="shrink-0 bg-white text-[#0052CC] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
          Book a Free 30-Min Consultation →
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Question 4: How Do You Handle Core Web Vitals and Mobile-First Indexing?</h2>
      <p className="mb-4">A competent web design agency should articulate exactly how they optimise for Core Web Vitals—Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift—because Google uses these metrics to rank your site and determine whether users stay or bounce. If an agency can't explain how they achieve LCP under 2.5 seconds or keep CLS below 0.1, they're building sites that will struggle in search results and frustrate mobile visitors. Google's mobile-first indexing means your rankings depend entirely on how your site performs on a smartphone, not a desktop monitor. An agency worth hiring will default to mobile-first design from the first wireframe, testing every layout on actual devices and using Chrome's Lighthouse tool to validate performance before launch. Ask them to show you a recent Lighthouse report—scores below 90 for performance or SEO suggest technical debt you'll inherit. The mechanics matter. Your agency should describe their approach to image compression (WebP format, responsive srcsets), lazy loading for off-screen content, server-side rendering to deliver faster initial page loads, and CDN usage to serve assets from geographically distributed servers. These aren't optional extras—they're baseline requirements for any site competing in UK search results in 2026. If the agency talks vaguely about "optimisation" without naming specific techniques, or dismisses Core Web Vitals as a passing trend, walk away. Google's Page Experience update made these factors permanent ranking signals. Sheffield businesses competing locally and London e-commerce brands selling nationally both need agencies who treat technical performance as non-negotiable, not an afterthought addressed when clients complain about slow load times.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 5: What Ownership Rights Do I Have Post-Launch?</h2>
      <p className="mb-4">When your website goes live, you should own everything: the custom code, design files, content, domain registration, and hosting credentials. Full stop. This isn't a courtesy — it's your business asset, and any agency that suggests otherwise is building a dependency trap, not a partnership. Some web design agencies deliberately retain ownership of core assets to lock you into perpetual contracts. You'll discover this when you want to migrate hosts, rebrand, or switch providers — suddenly you're told the code is "proprietary" or the design files are "agency IP." Get transfer terms in writing before you sign anything. A legitimate contract specifies that all deliverables become your property upon final payment, with no strings attached. If an agency refuses full ownership transfer, walk away. This is a major red flag that signals either predatory business practices or technical incompetence. At FactoryJet, every client receives complete access to their Next.js repositories, WordPress admin credentials, Shopify store ownership, domain registrar logins, and hosting dashboards the moment the project closes. We've migrated dozens of UK businesses out of hostage situations where previous agencies held their Google Search Console access, SSL certificates, or even their own brand photography ransom. Check your contract for phrases like "licensed use" or "agency retains source files." These clauses mean you're renting, not owning. Your website is a capital asset that should appear on your balance sheet, not theirs. Demand unconditional transfer of all intellectual property, and if the agency hesitates, that hesitation tells you everything you need to know about their long-term intentions.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 6: What's Included in Your Post-Launch Support?</h2>
      <p className="mb-4">A website going live is the beginning of the relationship, not the end. Before you sign, ask exactly what happens in the first 30 days: most reputable agencies include bug fixes, minor content tweaks, and at least one training session so your team can manage day-to-day updates without calling for help every time you need to change an opening hour. Response times matter when something breaks. Ask whether urgent issues—a checkout failure, a broken contact form, a security alert—get same-day attention or sit in a queue for 72 hours. Some agencies tier support: critical fixes within four hours, cosmetic tweaks within two business days. Get those commitments in writing, and clarify what counts as "urgent" versus billable change requests. Beyond the initial warranty window, most UK agencies offer monthly maintenance plans between £99 and £300. These typically cover plugin updates, security patches, weekly backups, uptime monitoring, and a small bank of hours for minor edits—swapping a hero image, adding a new service page, tweaking a call-to-action. Cheaper plans may exclude content changes entirely; premium tiers often include monthly performance reports and quarterly strategy calls. Ask what happens if you skip the maintenance plan. WordPress sites running outdated plugins become security liabilities; Shopify stores miss feature updates that competitors adopt. Some agencies will refuse ad-hoc support requests if you've lapsed on maintenance, leaving you scrambling when Google Search Console flags a mobile usability error the day before a product launch. Finally, confirm who owns the login credentials and source files. If the relationship sours, you should be able to export your site and move to another provider without paying a ransom for access to your own content.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Question 7: How Do You Approach Structured Data and SEO Foundations?</h2>
      <p className="mb-4">Every website build should include structured data markup from day one, not bolted on later as an afterthought. Schema.org markup tells search engines exactly what your content represents—whether that's a local business address, product pricing, customer reviews, or service areas—so Google can display rich results like star ratings, FAQ panels, and knowledge cards directly in search listings. For UK SMBs competing in local markets, this technical foundation is non-negotiable. A Sheffield plumbing firm with proper LocalBusiness schema can appear with click-to-call buttons, opening hours, and review stars before a searcher even visits the site. An e-commerce store selling outdoor gear benefits from Product schema that surfaces price, availability, and ratings in Google Shopping results. Service providers gain visibility through FAQ and HowTo markup that answers common questions right in the search snippet. Ask any prospective agency whether they implement JSON-LD structured data as standard practice and how they validate it. The answer should reference Google's Rich Results Test and Schema Markup Validator, not vague promises about "SEO-friendly code." Agencies that skip this step leave money on the table—your competitors with properly marked-up sites capture clicks you never see. Beyond structured data, confirm the agency builds semantic HTML, optimises title tags and meta descriptions for each page, implements canonical URLs to prevent duplicate content issues, and ensures mobile-first indexing compatibility. These aren't extras; they're the baseline for any site launched after 2024. A build that scores 92+ on Lighthouse SEO audits—covering crawlability, indexability, and structured data—sets you up to compete, not catch up.</p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Local vs Offshore: The Real Cost and Quality Trade-Offs</h2>
      <p className="mb-4">Should you hire a local UK agency or an offshore team? The honest answer depends less on geography than on three measurable factors: portfolio quality, verified client outcomes, and communication responsiveness. UK agencies typically charge £3,000–£15,000 for SMB websites, while offshore teams deliver comparable builds at £1,500–£8,000—a 50–60% cost difference that doesn't automatically signal lower quality. The pricing gap exists because offshore agencies operate in markets with lower overheads, not because they cut corners on design or performance. Teams serving UK clients in Sheffield, Staines, and London routinely deliver Next.js sites scoring Lighthouse 92+ within 2–4 weeks, matching or exceeding the technical benchmarks of local agencies. The critical distinction isn't where the team sits, but whether they understand UK business requirements, GDPR compliance, and accessibility standards under the Equality Act 2010. Evaluate any agency—local or offshore—using the same criteria. Request a portfolio of live UK client sites and test them yourself: run Lighthouse audits, check mobile responsiveness, verify page load times under throttled connections. Ask for named references you can contact directly, not anonymous testimonials. Schedule a discovery call and assess whether they ask probing questions about your business goals or immediately pitch a templated solution. Communication responsiveness matters more than time zones. An offshore team responding within two hours during UK business days outperforms a local agency that takes three days to return calls. Confirm they offer real-time collaboration tools—Slack, WhatsApp, or scheduled video calls—not just email chains that stretch projects across months. The location decision should follow capability assessment, not precede it. If an offshore agency demonstrates proven UK client work, transparent pricing, and fast communication, the cost savings fund better hosting, ongoing SEO, or additional features that a pricier local build would exclude. Geography becomes irrelevant when outcomes and accountability remain constant.</p>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">Factor</th>
              <th className="p-3 border">Local UK Agency</th>
              <th className="p-3 border">Offshore (UK-Focused)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">SMB Website Cost</td>
              <td className="border p-3">£3,000–£15,000</td>
              <td className="border p-3">£1,500–£8,000</td>
            </tr>
            <tr>
              <td className="border p-3">E-Commerce Cost</td>
              <td className="border p-3">£5,000–£25,000</td>
              <td className="border p-3">£2,000–£8,000</td>
            </tr>
            <tr>
              <td className="border p-3">Typical Timeline</td>
              <td className="border p-3">6–12 weeks</td>
              <td className="border p-3">2–4 weeks</td>
            </tr>
            <tr>
              <td className="border p-3">Communication</td>
              <td className="border p-3">Same timezone, face-to-face</td>
              <td className="border p-3">Async-friendly, video calls</td>
            </tr>
            <tr>
              <td className="border p-3">Maintenance Plans</td>
              <td className="border p-3">£150–£500/month</td>
              <td className="border p-3">£99–£300/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">➡ Serving US clients? <a href="/services/web-design" className="text-blue-600 underline hover:text-blue-800 transition-colors">FactoryJet delivers professional US business websites</a> — from $1,999, 7-day delivery, Lighthouse 100/100. See our <a href="/" className="text-blue-600 underline hover:text-blue-800 transition-colors">US services hub</a> for full pricing and packages.</p>

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
