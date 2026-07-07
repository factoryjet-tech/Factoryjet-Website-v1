import React from 'react';
import type { BlogPost } from '../data.types';

export const post: BlogPost = {
  id: '223',
  slug: 'seo-audit-cost-2026',
  title: 'How Much Does an SEO Audit Cost in 2026? (Real Pricing Breakdown)',
  excerpt:
    'SEO audit prices range from $0 to $30,000+ depending on who does it and what they actually check. This breakdown shows what each tier covers, what to ask for, and when a free audit is enough.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Jun 7, 2026',
  readTime: '10 min read',
  imageUrl: '/blog-images/seo-audit-cost-2026.webp',
  meta: {
    title: 'How Much Does an SEO Audit Cost in 2026? Real Pricing Breakdown',
    description:
      'SEO audit costs range from free to $30,000+ in 2026. This guide breaks down what each price tier actually covers, what questions to ask, and what a small business really needs.',
  },
  keyTakeaways: [
    'SEO audit costs in 2026 range from $0 (automated tools) to $30,000+ (enterprise technical audits by specialized agencies).',
    'For most small businesses with under 500 pages, a professional audit in the $500–$2,500 range covers everything actionable.',
    'Free automated audits (Semrush, Ahrefs, Screaming Frog free tier) are useful for surface-level technical checks but miss content quality, competitive gaps, and strategic priorities.',
    'The most important thing to ask for in any paid audit: a prioritized action list, not just a list of issues. A 200-item crawl report with no priority ranking is not an audit, it is a data dump.',
    'In 2026, a complete SEO audit should cover traditional technical SEO AND AI search readiness, schema markup, content structure for AI Overviews, and GEO signals.',
    'One-time audits are useful for diagnosis; ongoing SEO monitoring produces more long-term value. Use the audit to establish a baseline, then implement systematically.',
  ],
  faqs: [
    {
      q: 'How much does an SEO audit cost?',
      a: 'SEO audit costs in 2026 range from $0 for automated tool-based checks to $30,000+ for large enterprise technical audits. For small businesses with under 500 pages, professional audits typically fall in the $500–$2,500 range. Mid-market sites (500–5,000 pages) typically pay $2,500–$8,000. Enterprise audits covering 10,000+ pages run $10,000–$30,000+.',
    },
    {
      q: 'What is included in an SEO audit?',
      a: 'A complete SEO audit covers: technical SEO (crawlability, indexation, site speed, Core Web Vitals, mobile usability), on-page SEO (title tags, meta descriptions, heading structure, content quality), content analysis (thin pages, duplicate content, topical coverage gaps), backlink profile review, competitive gap analysis, and a prioritized action list with estimated impact.',
    },
    {
      q: 'Is a free SEO audit worth anything?',
      a: 'Free automated audits from tools like Semrush, Ahrefs, or Screaming Frog are useful for identifying surface-level technical issues: broken links, missing meta descriptions, slow page speed, duplicate title tags. They do not cover content strategy, competitive gaps, schema quality, or AI search readiness, and they do not prioritize findings by business impact. Use them as a starting point, not a complete diagnosis.',
    },
    {
      q: 'How long does an SEO audit take?',
      a: 'A thorough manual audit for a small business site (under 100 pages) typically takes 8–20 hours of professional time. Mid-market sites take 20–60 hours. Enterprise audits can take 100+ hours across multiple specialists. Automated-only audits can be generated in minutes but provide significantly less actionable insight.',
    },
    {
      q: 'What questions should I ask before paying for an SEO audit?',
      a: 'Ask: What will the deliverable look like, a prioritized action list or a raw crawl report? Will it include competitive gap analysis? Does it cover Core Web Vitals and mobile performance? Will it include schema and AI Overview readiness? How are findings prioritized by business impact? Who specifically will conduct the audit, a senior SEO or a junior analyst with a tool?',
    },
    {
      q: 'What is the difference between a technical SEO audit and a full SEO audit?',
      a: 'A technical SEO audit focuses specifically on crawlability, indexation, site speed, structured data, and site architecture, the infrastructure layer. A full SEO audit adds content analysis, backlink review, competitive gap analysis, and keyword opportunity mapping. Most small businesses need a full audit, not just a technical one.',
    },
    {
      q: 'How often should I get an SEO audit?',
      a: 'For most small businesses, a comprehensive audit every 12–18 months is sufficient if you have ongoing SEO monitoring in place. After a major site redesign or migration, an immediate post-launch audit is essential. After a Google algorithm update that caused a traffic drop, a targeted content and technical audit helps diagnose the cause.',
    },
    {
      q: 'What is a crawl audit?',
      a: "A crawl audit uses tools like Screaming Frog, Sitebulb, or DeepCrawl to systematically visit every URL on your site and check for technical issues: broken links, redirect chains, duplicate content, missing tags, slow pages, and crawl errors. It is the most common starting point for any SEO audit but should not be confused with a complete SEO audit.",
    },
    {
      q: 'Do I need an SEO audit if my site is new?',
      a: 'Yes, ideally before launch. A pre-launch SEO audit catches structural issues (URL patterns, internal linking, missing schema, thin pages) before they are indexed and harder to change. Post-launch audits on new sites in the first 60 days also catch indexation issues that slow down the ranking timeline.',
    },
    {
      q: 'What is a content audit in SEO?',
      a: 'A content audit evaluates every page on your site for SEO quality: thin content, duplicate content, keyword cannibalization (multiple pages competing for the same query), missing schema, poor internal linking, and pages that generate impressions but no clicks. It often reveals consolidation opportunities, merging weak pages into stronger ones, that produce significant ranking improvements.',
    },
    {
      q: 'What is a backlink audit?',
      a: 'A backlink audit reviews all external sites linking to yours, identifies toxic or low-quality links that could harm rankings, and assesses the overall quality and diversity of your link profile. Most small businesses have clean link profiles and do not need extensive backlink audits; they are most valuable after a penalty investigation or aggressive link-building campaign.',
    },
    {
      q: 'Does an SEO audit include keyword research?',
      a: 'Not always, it depends on the scope. A technical-only audit does not include keyword research. A full SEO audit should include at minimum a competitive gap analysis showing which keywords competitors rank for that you do not. Comprehensive keyword research is usually scoped as a separate deliverable.',
    },
    {
      q: 'What tools are used in an SEO audit?',
      a: 'Professional SEO audits commonly use: Screaming Frog or Sitebulb (crawl analysis), Ahrefs or Semrush (backlink and keyword analysis), Google Search Console (indexation and performance data), Google PageSpeed Insights or Lighthouse (Core Web Vitals), and Schema Markup Validator (structured data verification). No single tool covers everything, professional audits combine multiple data sources.',
    },
    {
      q: 'Can I do my own SEO audit?',
      a: "Yes, to a degree. Google Search Console provides coverage, indexation, Core Web Vitals, and manual action data for free. Screaming Frog's free tier crawls up to 500 URLs. Google's PageSpeed Insights checks Core Web Vitals. Together these cover the most critical technical issues. Content and competitive analysis require either paid tools or professional expertise.",
    },
    {
      q: 'What is included in a local SEO audit?',
      a: 'A local SEO audit covers: Google Business Profile completeness and accuracy, NAP (Name, Address, Phone) consistency across citations, local keyword rankings for city + service queries, Map Pack ranking position, local schema markup (LocalBusiness), review quantity and recency, and competitive analysis against other local providers in the Map Pack.',
    },
    {
      q: 'How do I know if an SEO audit is good quality?',
      a: 'A high-quality audit delivers: findings prioritized by business impact (not just alphabetically), competitive context for each issue (not just "this page is slow" but "your top three competitors load in 1.2s and you load in 4.1s"), clear action items with estimated effort, and a roadmap, not just a problem list. If the audit does not tell you what to fix first and why, it has not done its job.',
    },
    {
      q: 'What is an AI search readiness audit?',
      a: 'An AI search readiness audit evaluates how well your site is positioned to appear in AI-generated answers. Google AI Overviews, ChatGPT Search, Perplexity citations. It covers: schema markup coverage, content structure for AI extraction, E-E-A-T signals, author bylines, FAQ coverage, and citation-worthiness of factual claims. This is a newer audit component most agencies added in 2024–2025.',
    },
    {
      q: 'Should a small business pay for an SEO audit?',
      a: "For most small businesses, a professional audit in the $500–$1,500 range is worth the investment if you are planning any SEO activity over the next 12 months. It prevents wasting money fixing the wrong things. The caveat: only pay for an audit if you have the budget and capacity to act on the findings. An audit that sits in a Google Drive folder is a sunk cost.",
    },
    {
      q: 'What happens after an SEO audit?',
      a: 'After receiving an audit, prioritize findings by impact-to-effort ratio: fix critical technical issues (broken pages, indexation blocks, Core Web Vitals failures) first, then on-page optimizations, then content gaps, then link building. Most small businesses can implement high-priority audit findings in 4–8 weeks. Results typically become visible in Google Search Console within 6–10 weeks of implementation.',
    },
    {
      q: 'What is the ROI of an SEO audit?',
      a: "An SEO audit's ROI depends entirely on what you do with it. Audits that surface and fix critical indexation issues often produce measurable ranking improvements within 60 days. Content audits that consolidate thin pages regularly produce 20–40% traffic increases on the consolidated pages. The audit itself has no ROI, the implementation does.",
    },
    {
      q: 'Does FactoryJet offer SEO audits?',
      a: "Yes. Every FactoryJet website project includes a pre-launch SEO audit covering technical structure, schema, Core Web Vitals, and content architecture. For existing sites, we offer standalone SEO audits with prioritized action lists, not crawl data dumps. Book a free 30-minute call to discuss what your site needs.",
    },
  ],
  content: (
    <article>
      {/* ── SCHEMA ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How Much Does an SEO Audit Cost in 2026? (Real Pricing Breakdown)',
              description:
                'SEO audit costs range from $0 to $30,000+ in 2026. This breakdown covers what each price tier delivers, what to ask before paying, and what a small business actually needs.',
              author: {
                '@type': 'Person',
                name: 'Bhavesh Barot',
                url: 'https://factoryjet.com/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'FactoryJet',
                url: 'https://factoryjet.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://factoryjet.com/logo.png',
                },
              },
              datePublished: '2026-06-07',
              dateModified: '2026-06-07',
              image: 'https://factoryjet.com/blog-images/seo-audit-cost-2026.webp',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://factoryjet.com/blog/seo-audit-cost-2026',
              },
            },
            {
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
                  name: 'Blog',
                  item: 'https://factoryjet.com/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'SEO Audit Cost 2026',
                  item: 'https://factoryjet.com/blog/seo-audit-cost-2026',
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much does an SEO audit cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SEO audit costs range from $0 for automated checks to $30,000+ for enterprise audits. Small businesses with under 500 pages typically pay $500–$2,500 for a professional audit.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is included in an SEO audit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A complete audit covers technical SEO, on-page optimization, content analysis, backlink review, competitive gap analysis, and a prioritized action list with estimated impact per finding.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is a free SEO audit worth anything?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Free automated audits are useful for surface-level technical issues. They do not cover content strategy, competitive gaps, or AI search readiness. Use them as a starting point only.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How often should I get an SEO audit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'For most small businesses, a comprehensive audit every 12–18 months is sufficient with ongoing monitoring in place. Always audit after a major redesign or after a Google update that caused a traffic drop.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should a small business pay for an SEO audit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, if you plan any SEO activity over the next 12 months. A $500–$1,500 audit prevents wasting budget on the wrong priorities. Only pay if you have capacity to act on the findings.',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* ── QUICK ANSWER ───────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7f0 0%, #fff3e8 100%)',
          border: '1.5px solid #FF6B0030',
          borderRadius: '12px',
          padding: '24px 28px',
          marginBottom: '40px',
        }}
      >
        <p
          style={{
            fontWeight: 700,
            color: '#FF6B00',
            marginBottom: '8px',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Quick Answer
        </p>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: '1.65', color: '#1a1a1a' }}>
          An SEO audit costs <strong>$500–$2,500</strong> for most small businesses in 2026.
          Free automated audits exist but miss content gaps, competitive analysis, and AI search
          readiness. The most important thing to demand from any paid audit:{' '}
          <strong>a prioritized action list</strong>, not a raw list of 200 issues with no
          direction.
        </p>
      </div>

      {/* ── INTRO ───────────────────────────────────────────────────────── */}
      <p>
        "How much does an SEO audit cost?" is one of those questions where the answer range, free
        to $30,000, is so wide it tells you almost nothing. A $99 automated report and a $15,000
        enterprise audit are both called SEO audits, but they share almost nothing in terms of
        what they actually examine and what you can do with the output.
      </p>
      <p>
        This guide breaks down what each price tier actually delivers, what separates a useful
        audit from an expensive data dump, and what a small business with a real website and real
        SEO goals actually needs in 2026.
      </p>

      {/* ── DATA TABLE ─────────────────────────────────────────────────── */}
      <h2>SEO Audit Pricing Tiers in 2026</h2>
      <p>
        The table below summarizes what each price tier typically covers, based on pricing
        observed across US SEO agencies, freelancers, and tools in 2025–2026 (Clutch.co Agency
        Pricing Survey 2025; Ahrefs Freelancer Rate Study 2024).
      </p>
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          <thead>
            <tr style={{ background: '#FF6B00', color: '#fff' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 0' }}>
                Tier
              </th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>Price Range</th>
              <th style={{ padding: '12px 16px', textAlign: 'center' }}>Who It's For</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', borderRadius: '0 8px 0 0' }}>
                What's Covered
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Free / Automated',
                '$0',
                'DIY / quick check',
                'Crawl errors, broken links, missing tags, basic speed',
              ],
              [
                'Freelancer / Starter',
                '$250–$750',
                'Sites under 50 pages',
                'Technical + on-page; limited competitive context',
              ],
              [
                'Professional',
                '$750–$2,500',
                'SMBs, 50–500 pages',
                'Full technical + content + backlinks + competitive gap + prioritized roadmap',
              ],
              [
                'Agency Mid-Market',
                '$2,500–$8,000',
                '500–5,000 pages',
                'Above + keyword mapping, content audit, AI search readiness, implementation support',
              ],
              [
                'Enterprise',
                '$10,000–$30,000+',
                '10,000+ pages, e-commerce',
                'Full crawl engineering, log file analysis, JS rendering audit, international SEO',
              ],
            ].map(([tier, price, who, covers], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fff' : '#fff8f4', verticalAlign: 'top' }}
              >
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                    fontWeight: 600,
                  }}
                >
                  {tier}
                </td>
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                    textAlign: 'center',
                    color: '#FF6B00',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {price}
                </td>
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                    textAlign: 'center',
                  }}
                >
                  {who}
                </td>
                <td
                  style={{
                    padding: '11px 16px',
                    borderBottom: '1px solid #f0ede9',
                  }}
                >
                  {covers}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
          Source: Clutch.co Agency Pricing Survey (2025); Ahrefs Freelancer Rate Study (2024).
          Ranges reflect US market pricing. Prices vary significantly by agency reputation,
          deliverable depth, and site complexity.
        </p>
      </div>

      {/* ── FREE AUDITS ─────────────────────────────────────────────────── */}
      <h2>Free SEO Audits: What They Actually Cover</h2>
      <p>
        Free automated audits from Semrush, Ahrefs, Screaming Frog (free tier, up to 500 URLs),
        and Google Search Console are genuinely useful starting points. They reliably catch:
        broken internal links, missing or duplicate title tags and meta descriptions, pages
        returning 4xx errors, redirect chains longer than two hops, images missing alt text, and
        basic page speed issues.
      </p>
      <p>
        What they do not cover: content quality assessment, keyword cannibalization (multiple
        pages competing for the same query), competitive gap analysis, backlink toxicity, schema
        markup quality, AI search readiness, or, critically, any prioritization of findings by
        business impact. A free automated audit of a 200-page site routinely returns 150–400
        "issues," most of which have negligible effect on rankings.
      </p>
      <p>
        Use free audits as a diagnostic triage, not a complete picture. They are excellent at
        finding what is technically broken; they have no ability to tell you whether your content
        strategy is aligned with how your customers actually search.
      </p>

      {/* ── PROFESSIONAL TIER ───────────────────────────────────────────── */}
      <h2>What a Professional SEO Audit ($750–$2,500) Should Deliver</h2>
      <p>
        This is the tier most small businesses need. A professional audit at this price point,
        done properly, should cover:
      </p>
      <ul>
        <li>
          <strong>Technical audit:</strong> Full crawl with Screaming Frog or Sitebulb,
          Core Web Vitals assessment (mobile and desktop), indexation review via Google Search
          Console, canonical tag verification, hreflang review (if multilingual), and JavaScript
          rendering check for SPAs.
        </li>
        <li>
          <strong>On-page audit:</strong> Title tag and meta description coverage and
          uniqueness, heading structure (H1/H2 hierarchy), internal linking gaps, and image
          optimization.
        </li>
        <li>
          <strong>Content audit:</strong> Thin page identification (under 300 words with no
          structured data), keyword cannibalization mapping, and content freshness assessment.
        </li>
        <li>
          <strong>Backlink review:</strong> Link profile quality distribution, toxic link
          identification, anchor text diversity.
        </li>
        <li>
          <strong>Competitive gap analysis:</strong> Which queries your top three competitors
          rank for that you do not, the highest-value output for most small businesses.
        </li>
        <li>
          <strong>Schema audit:</strong> Which pages have schema, which are missing it, and
          whether existing schema is valid (checked against Google's Rich Results Test).
        </li>
        <li>
          <strong>AI search readiness:</strong>{' '}
          <a href="/blog/how-to-show-up-in-google-ai-overviews-small-business">
            Content structure for AI Overviews
          </a>
          , FAQPage schema coverage, and authorship signal presence.
        </li>
        <li>
          <strong>Prioritized action list:</strong> Findings ranked by estimated impact and
          effort, not alphabetically or by crawl order. This is the deliverable, everything else
          is supporting data.
        </li>
      </ul>

      {/* ── RED FLAGS ───────────────────────────────────────────────────── */}
      <h2>Red Flags in Any SEO Audit Proposal</h2>
      <p>
        Before paying for an SEO audit, these signals indicate you will receive a data dump rather
        than a diagnosis:
      </p>
      <ul>
        <li>
          <strong>No mention of prioritization.</strong> If the deliverable is described as "a
          comprehensive report" with no mention of prioritization or a roadmap, you will get a
          spreadsheet of issues with no direction on what to fix first.
        </li>
        <li>
          <strong>No mention of competitive analysis.</strong> An audit that only looks at your
          site in isolation, without benchmarking against competitors, cannot tell you which
          issues are actually holding you back versus which are industry-standard.
        </li>
        <li>
          <strong>Turnaround under 48 hours for a site over 100 pages.</strong> A meaningful
          professional audit of a 200-page site takes 10–20 hours of work. A "same-day audit"
          is an automated report with a cover page.
        </li>
        <li>
          <strong>No mention of who specifically conducts the audit.</strong> Ask whether it
          is a senior SEO practitioner or a junior analyst running tool exports. The quality
          difference is significant.
        </li>
        <li>
          <strong>Guaranteed ranking improvements from the audit.</strong> An audit is a
          diagnosis, it has no direct impact on rankings. Rankings improve from implementing
          the findings. Any guarantee tied to the audit itself is misleading.
        </li>
      </ul>

      {/* ── WHAT TO DO AFTER ────────────────────────────────────────────── */}
      <h2>What to Do After You Receive an SEO Audit</h2>
      <p>
        The audit is the starting line, not the finish. After receiving your findings, work through
        them in this order:
      </p>
      <ul>
        <li>
          <strong>Week 1–2:</strong> Fix critical technical blockers, pages returning 4xx errors,
          canonical misconfigurations, Core Web Vitals failures, and indexation blocks. These are
          the issues preventing Google from properly crawling and evaluating your site.
        </li>
        <li>
          <strong>Week 3–4:</strong> On-page optimizations on your top 20 highest-traffic or
          highest-potential pages. Title tags, heading structure, internal links, and schema
          additions. Existing pages with rankings in positions 11–30 respond fastest to these
          changes.
        </li>
        <li>
          <strong>Month 2:</strong> Content gap work, either creating new pages for identified
          keyword opportunities or consolidating thin pages into stronger assets.
        </li>
        <li>
          <strong>Month 3 onward:</strong> Link building and content production based on the
          competitive gap findings.
        </li>
      </ul>
      <p>
        Use Google Search Console to track progress. Impressions and average position for targeted
        pages should begin improving within 4–8 weeks of implementing high-priority technical and
        on-page fixes. For a full view of{' '}
        <a href="/blog/how-long-does-seo-take-2026-month-by-month-timeline">
          how long the full timeline looks
        </a>
        , expect meaningful traffic results in 3–6 months.
      </p>
      <p>
        For context on the{' '}
        <a href="/blog/seo-cost-small-business-2026">
          full cost of SEO beyond the audit
        </a>
        , including monthly retainers and one-time project pricing, that breakdown covers what
        each engagement model typically costs in 2026.
      </p>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          borderRadius: '16px',
          padding: '48px 40px',
          marginTop: '56px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#FF6B00',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          FactoryJet · Free Site Audit on Your Call
        </p>
        <h3
          style={{
            color: '#fff',
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          Want to know exactly what is holding your site back?
        </h3>
        <p
          style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '32px', lineHeight: 1.65 }}
        >
          Bring your site to a 30-minute call. We will walk through your top technical issues,
          content gaps, and AI search readiness live, and give you a prioritized action list,
          not a 200-row spreadsheet.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#FF6B00',
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            padding: '14px 36px',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          Book a Free Audit Call
        </a>
        <p style={{ color: '#475569', fontSize: '13px', marginTop: '16px' }}>
          No automated report. A real conversation about your specific site.
        </p>
      </div>

      {/* ── AUTHOR ──────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          marginTop: '56px',
          padding: '28px',
          background: '#f9fafb',
          borderRadius: '12px',
          border: '1px solid #f0ede9',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B00, #FFB347)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '20px',
          }}
        >
          B
        </div>
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: '16px',
              marginBottom: '4px',
              color: '#1a1a1a',
            }}
          >
            Bhavesh Barot
          </p>
          <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            Founder of FactoryJet. Returns on your time, 500+ websites delivered, 12+ years in
            web development and e-commerce. Obsessed with measurable results, not vanity metrics.
          </p>
        </div>
      </div>
    </article>
  ),
};

/*
AI IMAGE PROMPT. Blog #7 (unique concept: "the open toolbox"):
A clean overhead flat-lay on a warm white background. Center: a matte orange clipboard with a
clean white checklist paper on it, casting a soft shadow. Around the clipboard, neatly arranged
tools of analysis: a small magnifying glass, a tiny bar chart printout, a mini ruler, a small
compass. All objects are matte with minimal gloss, in a palette of white, soft gray, and orange
accents. The arrangement is orderly and deliberate, like a professional desk setup. Soft studio
lighting from top-left, no text or labels anywhere. Ultra-sharp product photography style, 16:9.
*/
