// Offline answers for next/font/google.
//
// next.config.mjs points NEXT_FONT_GOOGLE_MOCKED_RESPONSES at this file for the
// webpack production build. Next's font loader then takes each stylesheet and
// font file from this folder and does not call fonts.googleapis.com.
// Refresh the folder with `node scripts/vendor-google-fonts.mjs`.
const fs = require('node:fs')
const path = require('node:path')

const { sheets } = require('./sheets.json')

module.exports = Object.fromEntries(
  Object.entries(sheets).map(([url, file]) => [
    url,
    // The loader reads a font from disk only when its URL is an absolute path.
    fs.readFileSync(path.join(__dirname, file), 'utf8').replaceAll('url(./', `url(${__dirname}/`),
  ]),
)
