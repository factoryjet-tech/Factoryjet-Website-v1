#!/usr/bin/env node
/**
 * strip-image-metadata.mjs — remove provenance/metadata blocks from shipped images.
 *
 * WHY: images we publish should carry no EXIF, no XMP, no C2PA and no
 * "CreatorTool: Canva"-style authoring tags. None of it renders, all of it
 * ships to every visitor, and some of it leaks how the asset was produced.
 *
 * Pure chunk/segment surgery — pixel data is copied byte-for-byte, so this
 * cannot alter how an image looks. Anything it does not understand is skipped
 * rather than guessed at.
 *
 *   node scripts/strip-image-metadata.mjs            # report only
 *   node scripts/strip-image-metadata.mjs --write    # rewrite in place
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { join, extname } from 'node:path'

const WRITE = process.argv.includes('--write')
const ROOT = 'public'

// PNG ancillary chunks that only ever carry metadata.
// iCCP is deliberately NOT here: it is the colour profile, not metadata.
// Dropping it shifts how the image renders.
const PNG_DROP = new Set(['tEXt', 'iTXt', 'zTXt', 'eXIf', 'caBX'])

function stripPng(buf) {
  const SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  if (!buf.subarray(0, 8).equals(SIG)) return null
  const out = [buf.subarray(0, 8)]
  let p = 8, dropped = []
  while (p + 8 <= buf.length) {
    const len = buf.readUInt32BE(p)
    const type = buf.toString('ascii', p + 4, p + 8)
    const end = p + 12 + len
    if (end > buf.length) break              // truncated tail: stop, keep rest verbatim
    if (PNG_DROP.has(type)) dropped.push(type)
    else out.push(buf.subarray(p, end))
    p = end
    if (type === 'IEND') break
  }
  if (p < buf.length) out.push(buf.subarray(p))
  return dropped.length ? { buf: Buffer.concat(out), dropped } : null
}

// JPEG APPn segments carrying metadata. APP0/JFIF is structural — keep it.
// APP1 EXIF/XMP, APP12, APP13 Photoshop IRB, and COM comments.
// APP0 (JFIF), APP2 (ICC profile) and APP14 (Adobe colour transform) are kept:
// all three are structural, and dropping them can shift colour.
const JPEG_DROP = new Set([0xe1, 0xec, 0xed, 0xfe])

function stripJpeg(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null
  const out = [buf.subarray(0, 2)]
  let p = 2, dropped = []
  while (p + 4 <= buf.length) {
    if (buf[p] !== 0xff) break
    const marker = buf[p + 1]
    if (marker === 0xda) { out.push(buf.subarray(p)); p = buf.length; break }  // SOS: rest is entropy data
    const len = buf.readUInt16BE(p + 2)
    const end = p + 2 + len
    if (end > buf.length) break
    if (JPEG_DROP.has(marker)) dropped.push(marker === 0xfe ? 'COM' : 'APP' + (marker - 0xe0))
    else out.push(buf.subarray(p, end))
    p = end
  }
  if (p < buf.length) out.push(buf.subarray(p))
  return dropped.length ? { buf: Buffer.concat(out), dropped } : null
}

async function walk(dir, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, acc)
    else acc.push(p)
  }
  return acc
}

const files = (await walk(ROOT)).filter(f => ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()))
let changed = 0, saved = 0
for (const f of files) {
  const buf = readFileSync(f)
  const ext = extname(f).toLowerCase()
  const r = ext === '.png' ? stripPng(buf) : stripJpeg(buf)
  if (!r) continue
  changed++
  saved += buf.length - r.buf.length
  console.log(`${WRITE ? 'strip' : 'would strip'}  ${f}  [${r.dropped.join(',')}]  -${buf.length - r.buf.length}B`)
  if (WRITE) writeFileSync(f, r.buf)
}
console.log(`\n${files.length} images scanned, ${changed} carry metadata, ${(saved / 1024).toFixed(1)}KB ${WRITE ? 'removed' : 'removable'}`)
if (!WRITE && changed) console.log('re-run with --write to apply')
