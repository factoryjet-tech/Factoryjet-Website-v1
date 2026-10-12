#!/usr/bin/env node
/**
 * Refreshes vendor/google-fonts: the offline copy of everything
 * next/font/google would otherwise download from Google during `next build`.
 *
 * Why it exists: Google sometimes answers the stylesheet request with font
 * URLs that have no file extension, and Next's font loader crashes on them
 * (vercel/next.js#99114). next.config.mjs points the loader at this folder
 * instead, so the production build does not call Google at all.
 *
 * Run it after changing a family, weight or `display` value in any
 * next/font/google call, then commit vendor/google-fonts:
 *
 *   node scripts/vendor-google-fonts.mjs
 *
 * If a call changes and this is not re-run, the build stops with
 * "Missing mocked response for URL: ...".
 */
import fs from 'node:fs'
import https from 'node:https'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = path.join(root, 'vendor/google-fonts')

// Mirror of the next/font/google calls in the source. Only the options that
// shape the stylesheet URL matter here (family, weight, display).
const CALLS = {
  // src/app/layout.tsx
  Plus_Jakarta_Sans: { subsets: ['latin'], display: 'optional', weight: ['400', '500', '600', '700', '800'] },
  Inter: { subsets: ['latin'], display: 'optional', weight: ['400', '500', '600', '700'] },
  Geist_Mono: { subsets: ['latin'], display: 'swap' },
  // src/app/uk/sections/TechStack.tsx
  JetBrains_Mono: { subsets: ['latin'], display: 'swap', weight: ['400', '500'] },
}

// Next builds the stylesheet URL with these modules; using them keeps the
// keys in sheets.json equal to what the loader will ask for.
const google = 'next/dist/compiled/@next/font/dist/google'
const { validateGoogleFontFunctionCall } = require(`${google}/validate-google-font-function-call`)
const { getFontAxes } = require(`${google}/get-font-axes`)
const { getGoogleFontsUrl } = require(`${google}/get-google-fonts-url`)

// Same User-Agent Next sends, so Google returns the same woff2 files.
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
const FONT_EXT = /\.(woff|woff2|eot|ttf|otf)$/
const MAX_TRIES = 10

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': UA } }, (res) => {
        const chunks = []
        res.on('data', (c) => chunks.push(c))
        res.on('end', () =>
          res.statusCode === 200 ? resolve(Buffer.concat(chunks)) : reject(new Error(`${url} -> HTTP ${res.statusCode}`)),
        )
      })
      .on('error', reject)
  })
}

// Ask again until every font URL in the stylesheet ends in a font extension.
async function getCleanStylesheet(url, family) {
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    const css = (await get(url)).toString('utf8')
    const urls = [...css.matchAll(/src: url\((.+?)\)/g)].map((m) => m[1])
    if (urls.length > 0 && urls.every((u) => FONT_EXT.test(u))) return { css, attempt }
  }
  throw new Error(`${family}: no stylesheet with normal font URLs after ${MAX_TRIES} tries`)
}

fs.mkdirSync(out, { recursive: true })
for (const f of fs.readdirSync(out)) {
  if (/\.(woff2|css)$/.test(f)) fs.rmSync(path.join(out, f))
}

const manifest = { fetched: new Date().toISOString().slice(0, 10), sheets: {}, sources: {} }
let bytes = 0

for (const [fn, options] of Object.entries(CALLS)) {
  const v = validateGoogleFontFunctionCall(fn, options)
  const url = getGoogleFontsUrl(v.fontFamily, getFontAxes(v.fontFamily, v.weights, v.styles, v.selectedVariableAxes), v.display)
  const slug = v.fontFamily.toLowerCase().replace(/ /g, '-')
  const { css, attempt } = await getCleanStylesheet(url, v.fontFamily)

  // Google puts the subset name in a comment above each @font-face block.
  const names = new Map()
  let subset = ''
  const lines = []
  for (const line of css.split('\n')) {
    subset = /\/\* (.+?) \*\//.exec(line)?.[1] ?? subset
    const fontUrl = /src: url\((.+?)\)/.exec(line)?.[1]
    if (!fontUrl) {
      lines.push(line)
      continue
    }
    if (!names.has(fontUrl)) {
      const name = `${slug}-${subset}.woff2`
      if ([...names.values()].includes(name)) throw new Error(`${v.fontFamily}: two different files for subset ${subset}`)
      const file = await get(fontUrl)
      if (file.subarray(0, 4).toString('latin1') !== 'wOF2') throw new Error(`${fontUrl} is not a woff2 file`)
      fs.writeFileSync(path.join(out, name), file)
      names.set(fontUrl, name)
      manifest.sources[name] = fontUrl
      bytes += file.length
    }
    // responses.cjs turns "./" into this folder's absolute path at build time.
    lines.push(line.replace(fontUrl, `./${names.get(fontUrl)}`))
  }

  fs.writeFileSync(path.join(out, `${slug}.css`), lines.join('\n'))
  manifest.sheets[url] = `${slug}.css`
  console.log(`${v.fontFamily}: ${names.size} font files (stylesheet attempt ${attempt})`)
}

fs.writeFileSync(path.join(out, 'sheets.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(`vendor/google-fonts: ${Object.keys(manifest.sources).length} font files, ${bytes} bytes`)
console.log('Delete .next before the next local build so webpack does not reuse cached font CSS.')
