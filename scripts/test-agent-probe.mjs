/**
 * Standalone test for the AI-agent Accept-header probe in functions/_middleware.js.
 * No framework — run with:  node scripts/test-agent-probe.mjs  (exit 1 on any failure).
 *
 * Same approach as test-geo-redirect.mjs: exercise the PURE classifier without the
 * Cloudflare runtime (which cannot be run locally — see the OOM hazard note in repo memory).
 *
 * What actually matters here is the precedence rule: an UNKNOWN user-agent asking for
 * markdown must still be recorded, because that is the observation the probe exists to
 * catch. A UA allowlist alone would silently discard it.
 */
import { classifyAgentRequest, AI_AGENT_UA } from '../functions/_middleware.js'

const CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
const GOOGLEBOT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
const GPTBOT = 'Mozilla/5.0 (compatible; GPTBot/1.1; +https://openai.com/gptbot)'
const OAI_SEARCH = 'Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)'
const PERPLEXITY = 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)'
const CLAUDE_SEARCH = 'Mozilla/5.0 (compatible; Claude-SearchBot/1.0; +claudebot@anthropic.com)'

const HTML_ACCEPT = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
const MD_ACCEPT = 'text/markdown,text/html;q=0.9,*/*;q=0.8'

let failures = 0
function expect(name, actual, expected) {
  const ok = actual === expected
  if (!ok) {
    failures++
    console.error(`  ✗ ${name}\n      expected: ${JSON.stringify(expected)}\n      actual:   ${JSON.stringify(actual)}`)
  } else {
    console.log(`  ✓ ${name}`)
  }
}

console.log('AI-agent Accept probe — cases:')

// --- Known AI agents, ordinary Accept header ---
expect('GPTBot + html accept → ai-agent',
  classifyAgentRequest({ userAgent: GPTBOT, accept: HTML_ACCEPT }), 'ai-agent')
expect('OAI-SearchBot + html accept → ai-agent',
  classifyAgentRequest({ userAgent: OAI_SEARCH, accept: HTML_ACCEPT }), 'ai-agent')
expect('PerplexityBot + html accept → ai-agent',
  classifyAgentRequest({ userAgent: PERPLEXITY, accept: HTML_ACCEPT }), 'ai-agent')
expect('Claude-SearchBot + html accept → ai-agent',
  classifyAgentRequest({ userAgent: CLAUDE_SEARCH, accept: HTML_ACCEPT }), 'ai-agent')

// --- Not AI agents: must stay out of the dataset or they bury the signal ---
expect('Chrome + html accept → null',
  classifyAgentRequest({ userAgent: CHROME, accept: HTML_ACCEPT }), null)
expect('Googlebot is a search crawler, not an AI agent → null',
  classifyAgentRequest({ userAgent: GOOGLEBOT, accept: HTML_ACCEPT }), null)

// --- THE point of the probe: markdown wins regardless of who is asking ---
expect('UNKNOWN agent asking for markdown → markdown-requested',
  classifyAgentRequest({ userAgent: 'SomeNewAgent/0.1', accept: MD_ACCEPT }), 'markdown-requested')
expect('plain browser UA asking for markdown → markdown-requested',
  classifyAgentRequest({ userAgent: CHROME, accept: MD_ACCEPT }), 'markdown-requested')
expect('known agent asking for markdown → markdown-requested (not ai-agent)',
  classifyAgentRequest({ userAgent: GPTBOT, accept: MD_ACCEPT }), 'markdown-requested')
expect('markdown detected even with no UA at all',
  classifyAgentRequest({ userAgent: '', accept: 'text/markdown' }), 'markdown-requested')

// --- Robustness: the probe runs on every request, so it must not throw on junk ---
expect('empty everything → null', classifyAgentRequest({ userAgent: '', accept: '' }), null)
expect('undefined fields → null', classifyAgentRequest({}), null)
expect('case-insensitive UA match', classifyAgentRequest({ userAgent: 'PERPLEXITYBOT/1.0', accept: '' }), 'ai-agent')
expect('case-insensitive markdown match',
  classifyAgentRequest({ userAgent: CHROME, accept: 'TEXT/MARKDOWN' }), 'markdown-requested')

// --- Guard against a substring collision inside the UA list itself ---
expect('ChatGPT-User does not false-match the gptbot signature (it matches chatgpt-user)',
  classifyAgentRequest({ userAgent: 'Mozilla/5.0 (compatible; ChatGPT-User/1.0)', accept: '' }), 'ai-agent')
expect('AI_AGENT_UA is all lowercase (matching lowercases the UA)',
  AI_AGENT_UA.every((s) => s === s.toLowerCase()), true)

console.log(failures === 0 ? `\nAll checks passed.` : `\n${failures} check(s) FAILED.`)
process.exit(failures === 0 ? 0 : 1)
