#!/usr/bin/env node

/**
 * social-publish.mjs
 * 
 * Multi-channel social media publishing client connecting to the self-hosted
 * Postiz engine on https://post.factoryjet.com.
 * 
 * Usage:
 *   node scripts/social-publish.mjs --status
 *   node scripts/social-publish.mjs --content="Your thought leadership post content here"
 *   node scripts/social-publish.mjs --file=posts/my-post.md
 *   node scripts/social-publish.mjs --content="Announcing our new AI agents" --schedule="2026-08-22T14:00:00Z"
 */

import fs from 'fs';
import path from 'path';

// Auto-load .env if needed
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...vals] = trimmed.split('=');
      if (key && vals.length > 0 && !process.env[key.trim()]) {
        process.env[key.trim()] = vals.join('=').trim();
      }
    }
  }
}
loadEnv();

const POSTIZ_BASE_URL = process.env.POSTIZ_URL || 'https://post.factoryjet.com';
const POSTIZ_API_KEY = process.env.POSTIZ_API_KEY || '8a06467c6521371c4cc3c6c2e1e31969b2d35b4e8dfc12b41005ddbd665cd029';

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (const arg of args) {
    if (arg.startsWith('--')) {
      const [key, ...valParts] = arg.slice(2).split('=');
      params[key] = valParts.join('=') || true;
    }
  }
  return params;
}

async function callMcpTool(name, args = {}) {
  const res = await fetch(`${POSTIZ_BASE_URL}/api/mcp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${POSTIZ_API_KEY}`,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: { name, arguments: args },
      id: Date.now(),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`MCP request failed (${res.status}): ${err}`);
  }

  const json = await res.json();
  if (json.error) {
    throw new Error(`MCP RPC Error: ${json.error.message || JSON.stringify(json.error)}`);
  }
  return json.result;
}

async function listIntegrations() {
  try {
    const result = await callMcpTool('integrationList', {});
    const items = result.structuredContent?.output || [];
    return items;
  } catch (err) {
    console.error(`⚠️ Could not retrieve connected channels: ${err.message}`);
    return [];
  }
}

async function checkStatus() {
  console.log(`📡 Connecting to self-hosted Postiz instance at ${POSTIZ_BASE_URL}...`);
  try {
    const healthRes = await fetch(`${POSTIZ_BASE_URL}/auth`);
    if (healthRes.ok) {
      console.log(`✅ Postiz engine is healthy and reachable (Status: ${healthRes.status} OK)\n`);
    }

    console.log(`🔑 Connected Social Media Integrations:`);
    const integrations = await listIntegrations();
    if (integrations.length === 0) {
      console.log(`   (No integrations connected yet. Open ${POSTIZ_BASE_URL} to connect channels.)\n`);
    } else {
      integrations.forEach((item, idx) => {
        console.log(`   ${idx + 1}. [${item.platform.toUpperCase()}] ${item.name} (ID: ${item.id})`);
      });
      console.log('');
    }
  } catch (err) {
    console.error(`❌ Connection failed: ${err.message}`);
  }
}

async function publishPost(content, options = {}) {
  console.log(`\n🚀 Fetching connected channels from Postiz...`);
  const integrations = await listIntegrations();

  if (integrations.length === 0) {
    console.error(`❌ No connected social channels found. Please connect your accounts on ${POSTIZ_BASE_URL}`);
    return;
  }

  const targetIntegrations = integrations;
  console.log(`📢 Publishing to ${targetIntegrations.length} channel(s):`);
  targetIntegrations.forEach(i => console.log(`   - ${i.name} (${i.platform})`));

  // Convert content lines to HTML paragraphs for rich rendering
  const formattedHtml = content
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br/>')}</p>`)
    .join('');

  const nowIso = new Date().toISOString();
  const scheduleType = options.schedule ? 'schedule' : 'now';
  const postDate = options.schedule || nowIso;

  const socialPost = targetIntegrations.map(integration => ({
    integrationId: integration.id,
    isPremium: false,
    date: postDate,
    shortLink: false,
    type: scheduleType,
    postsAndComments: [
      {
        content: formattedHtml,
        attachments: options.attachments || [],
      }
    ],
    settings: [],
  }));

  console.log(`\n📡 Dispatching post via Postiz MCP Engine...`);
  try {
    const result = await callMcpTool('integrationSchedulePostTool', { socialPost });
    console.log(`✅ Post successfully submitted to Postiz!`);
    console.log(`Result:`, JSON.stringify(result.structuredContent || result.content, null, 2));
  } catch (err) {
    console.error(`❌ Publishing failed: ${err.message}`);
  }
}

async function main() {
  const params = parseArgs();

  if (params.status || Object.keys(params).length === 0) {
    await checkStatus();
    return;
  }

  let content = params.content || '';
  if (params.file) {
    const filePath = path.resolve(process.cwd(), params.file);
    if (fs.existsSync(filePath)) {
      content = fs.readFileSync(filePath, 'utf8');
    } else {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }
  }

  if (!content) {
    console.error('Please specify content with --content="text" or --file="path/to/post.md"');
    process.exit(1);
  }

  await publishPost(content, {
    schedule: params.schedule,
    attachments: params.image ? [params.image] : [],
  });
}

main().catch(console.error);
