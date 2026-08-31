import React from 'react';
import type { BlogPost } from '../data.types';

const faqs = [
  {
    q: 'What are Google AI Overviews?',
    a: 'Google AI Overviews (formerly Search Generative Experience, or SGE) are AI-generated answer summaries that appear at the top of Google search results pages. They synthesize information from multiple web pages and answer queries directly, displaying cited source chips for authoritative pages.',
  },
  {
    q: 'When did Google AI Overviews launch?',
    a: 'Google launched AI Overviews broadly in the United States in May 2024. By 2026, they appear across over 100 countries and span local, informational, and commercial search queries.',
  },
  {
    q: 'Do Google AI Overviews hurt my website traffic?',
    a: 'They reduce zero-click informational traffic, but pages cited as sources inside an AI Overview gain high-trust brand exposure and qualified click-throughs. The goal is to be cited as an authoritative source.',
  },
  {
    q: 'How does Google choose which websites appear in AI Overviews?',
    a: 'Google primarily sources AI Overview content from pages that rank in the top 10 organic results. It evaluates answer-first structure, Core Web Vitals performance, structured JSON-LD schema, and E-E-A-T signals.',
  },
  {
    q: 'Can a small business show up in Google AI Overviews?',
    a: 'Yes. Small businesses appear in AI Overviews regularly for local queries, niche industry questions, and long-tail informational searches by structuring content with answer-first headers and comprehensive FAQs.',
  },
  {
    q: 'What content format does Google AI Overviews prefer?',
    a: 'Numbered lists and step-by-step how-to content appear in AI Overviews most frequently (roughly 47% of sampled responses), followed by definition paragraphs and FAQ sections. Short, direct paragraphs answering one specific question perform best.',
  },
  {
    q: 'Does schema markup help with Google AI Overviews?',
    a: 'FAQPage schema, Article schema, and BreadcrumbList schema make your content structure machine-readable. Structured data consistently correlates with higher AI Overview citation rates.',
  },
  {
    q: 'What is an answer-first H2 heading?',
    a: "An answer-first H2 is a section heading that frames a customer question, followed immediately by a direct one- or two-sentence answer in the first paragraph. For example: H2 'How long does a website redesign take?' followed by 'A standard 5-page small business website takes 7 to 14 days from brief to launch.'",
  },
  {
    q: 'How important is Google Business Profile for AI Overviews?',
    a: 'Extremely important for local queries. Google uses GBP categories, reviews, services, and Q&A as primary data feeds for AI Overviews on city-specific and commercial searches.',
  },
  {
    q: 'Do I need to rank #1 to appear in AI Overviews?',
    a: 'No. AI Overview sources are pulled from positions 1 through 9. Pages in positions 4 through 8 are frequently cited if they offer superior structure, direct answers, and clean data tables.',
  },
  {
    q: 'How long does it take to start appearing in Google AI Overviews?',
    a: 'After publishing optimized content, Googlebot crawls and indexes the page within 1 to 4 weeks, with AI Overview citation stabilizing over 4 to 12 weeks.',
  },
  {
    q: 'What is topical authority and why does it matter for AIO?',
    a: 'Topical authority means Google recognizes your site as a comprehensive source on a subject. Interlinked content clusters of 8 to 12 articles outperform isolated blog posts.',
  },
  {
    q: 'Should I use bullet points or numbered lists for AIO optimization?',
    a: 'Numbered lists for sequential steps and bullet points for feature comparisons. Avoid nesting lists more than one level deep.',
  },
  {
    q: 'Does page speed affect Google AI Overviews?',
    a: 'Yes. Pages that fail Core Web Vitals (Largest Contentful Paint over 2.5s) are consistently de-prioritized in AI-generated answers.',
  },
  {
    q: 'What is E-E-A-T and how does it relate to AI Overviews?',
    a: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Clear author bios, publication dates, outbound citations, and third-party press mentions establish these signals.',
  },
  {
    q: 'Do third-party mentions matter for AIO?',
    a: 'Yes. External mentions on trade publications, local news, and review platforms validate your brand entity for AI inclusion.',
  },
  {
    q: 'Can I track whether my site appears in Google AI Overviews?',
    a: 'You can test target queries directly in search results or utilize our free AI Visibility Checker at factoryjet.com/ai-visibility-checker.',
  },
  {
    q: 'What queries trigger Google AI Overviews most often?',
    a: "Informational queries ('how to', 'what is', 'how much does X cost') and comparative service searches trigger AI Overviews at the highest rates.",
  },
  {
    q: 'Is Google AI Overviews the same as featured snippets?',
    a: 'No. Featured snippets extract a single block from one URL, whereas AI Overviews synthesize multi-source answers and cite multiple domain chips.',
  },
  {
    q: 'What should small businesses avoid when optimizing for AI Overviews?',
    a: 'Avoid unreviewed AI copy, thin articles under 600 words, keyword stuffing, content hidden behind paywalls, and slow mobile load times.',
  },
  {
    q: 'Does FactoryJet help with AIO optimization?',
    a: 'Yes. FactoryJet builds websites with built-in JSON-LD schema, answer-first content architecture, and Core Web Vitals optimization to win citations in Google AI Overviews.',
  },
  {
    q: 'How is GEO different from AIO optimization?',
    a: 'GEO (Generative Engine Optimization) encompasses visibility across all AI engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews). AIO optimization is the Google-specific subset of GEO.',
  },
];

export const post: BlogPost = {
  id: '220',
  slug: 'how-to-show-up-in-google-ai-overviews-small-business',
  title: 'How to Show Up in Google AI Overviews: A Small Business Checklist',
  excerpt:
    "Google AI Overviews now answer queries before users ever scroll to your site. Here is the exact checklist small businesses need to get cited, no expensive agency required.",
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  readTime: '10 min read',
  imageUrl: '/blog-images/how-to-show-up-in-google-ai-overviews-small-business.webp',
  meta: {
    title: 'How to Show Up in Google AI Overviews: Small Business Checklist (2026)',
    description:
      'Google AI Overviews are changing how customers find businesses. This 12-step checklist shows small business owners exactly what to do to get cited in AIO results.',
  },
  keyTakeaways: [
    'Google AI Overviews (AIO) appear across high-intent US searches and synthesize answers from pages ranked in the top 10.',
    'Numbered lists, how-to formats, and FAQ sections are the content types most frequently extracted into AI Overviews.',
    'Answer-first H2 headings (framed as a question and answered in sentence one) are the single highest-leverage on-page optimization.',
    'FAQPage schema and structured JSON-LD format your content so AI crawlers can extract definitions cleanly.',
    'Third-party mentions (local press, directories, industry roundups) provide the entity validation Google requires for citations.',
    'Core Web Vitals must be green: fast pages with LCP under 2.5s dominate AI answer selections.',
  ],
  faqs,
  content: (
    <article>
      {/* Quick Answer Box */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-2">
          Quick Answer
        </p>
        <p className="text-gray-800 font-medium leading-relaxed">
          To show up in Google AI Overviews, publish content in numbered list or how-to formats, write answer-first H2 headings, implement FAQPage and Article schema, keep paragraphs under 75 words, and build topical clusters. Local businesses must also maintain a verified Google Business Profile.
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-6 text-gray-800">
        Google AI Overviews now answer user queries directly at the top of the search engine results page. When potential customers search for your services, they see an AI summary before they ever see traditional organic blue links.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The businesses that appear inside the AI Overview as cited sources capture immediate authority and qualified referrals. This checklist breaks down the 12 steps required to earn those citation slots.
      </p>

      {/* Data Table */}
      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Which Content Formats Appear in AI Overviews Most Often</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-3 text-left border border-gray-700">Content Format</th>
              <th className="p-3 text-center border border-gray-700">AIO Appearance Rate</th>
              <th className="p-3 text-left border border-gray-700">Best Matched Query Type</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Numbered list / how-to steps</td>
              <td className="p-3 border border-gray-200 text-center font-bold text-[#F05A28]">~47%</td>
              <td className="p-3 border border-gray-200">Process and how-to queries</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="p-3 border border-gray-200 font-semibold">Definition / explainer paragraph</td>
              <td className="p-3 border border-gray-200 text-center font-bold text-[#F05A28]">~38%</td>
              <td className="p-3 border border-gray-200">Concept and definition queries</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Comparison table or matrix</td>
              <td className="p-3 border border-gray-200 text-center font-bold text-[#F05A28]">~29%</td>
              <td className="p-3 border border-gray-200">Platform comparison and pricing queries</td>
            </tr>
            <tr className="bg-[#FAFAF7]">
              <td className="p-3 border border-gray-200 font-semibold">FAQ section</td>
              <td className="p-3 border border-gray-200 text-center font-bold text-[#F05A28]">~24%</td>
              <td className="p-3 border border-gray-200">Long-tail question queries</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200 font-semibold">Statistical data with source citation</td>
              <td className="p-3 border border-gray-200 text-center font-bold text-[#F05A28]">~14%</td>
              <td className="p-3 border border-gray-200">Research and cost benchmark queries</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 12-Step Checklist */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">The 12-Step Checklist to Get Cited in Google AI Overviews</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Target Question-Based Long-Tail Queries</h3>
          <p className="leading-relaxed">
            Target specific questions your customers ask before purchasing: "how much does custom Shopify development cost in 2026" rather than broad terms like "Shopify agency."
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">2. Write Answer-First H2 Headings</h3>
          <p className="leading-relaxed">
            Format your section header as a direct question, and answer it factually in the first sentence. For example: <em>"How Much Does a Small Business Website Cost?"</em> followed by <em>"A custom 5-page small business website costs $1,999 to $4,000 from FactoryJet."</em>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Keep Paragraphs Under 75 Words</h3>
          <p className="leading-relaxed">
            Google's AI models extract self-contained text passages. Keep paragraphs focused on a single concept, spanning 2 to 4 sentences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">4. Use Numbered Lists and Data Tables</h3>
          <p className="leading-relaxed">
            Whenever detailing a workflow or pricing breakdown, use numbered steps and HTML tables. These formats have the highest extraction probability.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">5. Implement FAQPage and Article Schema</h3>
          <p className="leading-relaxed">
            Deploy structured JSON-LD schemas so search engine parsers can ingest questions and answers without ambiguity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">6. Maintain an Active Google Business Profile</h3>
          <p className="leading-relaxed">
            Ensure your GBP profile is 100% complete with accurate primary categories, service menus, photos, and regular customer reviews.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">7. Build Interlinked Topic Clusters</h3>
          <p className="leading-relaxed">
            Publish clusters of 8 to 12 articles covering related sub-topics, all cross-linked to a primary service pillar page.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">8. Include Verified Author Bios (E-E-A-T)</h3>
          <p className="leading-relaxed">
            Every published page should carry a named author bio detailing domain experience, track record, and verified credentials.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">9. Cite Authoritative External Sources</h3>
          <p className="leading-relaxed">
            Link out to credible industry benchmarks, research papers, or platform documentation to support all quantitative claims.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">10. Secure Third-Party Press Mentions</h3>
          <p className="leading-relaxed">
            Acquire brand mentions on regional news portals, business journals, and trade directories to reinforce entity authority.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">11. Keep Content Actively Updated</h3>
          <p className="leading-relaxed">
            Regularly refresh pricing figures, tools, and technical data with visible "Last Updated" timestamps.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">12. Ensure Core Web Vitals Are 95+</h3>
          <p className="leading-relaxed">
            Slow pages with mobile LCP above 2.5 seconds are filtered out of AI answer generation. Maintain sub-second load speeds.
          </p>
        </div>
      </div>

      {/* High-Converting CTA Box */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6 md:p-8 my-10 shadow-lg">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-[#F05A28] text-white text-xs font-bold uppercase rounded-full tracking-wider mb-3">
            Google AI Search Optimization
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
            Want a Website Engineered to Win Google AI Overviews?
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Every site FactoryJet delivers includes Article + FAQPage schema, answer-first content architecture, and guaranteed Lighthouse 95+ performance. Book a 30-minute consultation with founder Bhavesh Barot.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/bhavesh-factoryjet/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Book 30-Min Strategy Call
            </a>
            <a
              href="/ai-visibility-checker"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Check AI Visibility Score
            </a>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="flex items-start gap-4 border-t border-gray-200 pt-6 mt-6">
        <div>
          <p className="font-semibold text-gray-900">Bhavesh Barot</p>
          <p className="text-sm text-gray-600">
            Founder of FactoryJet. 500+ websites and e-commerce stores delivered, 12+ years in technical SEO and web development. Specializes in building high-performance websites engineered for AI-driven search.
          </p>
        </div>
      </div>
    </article>
  ),
};
