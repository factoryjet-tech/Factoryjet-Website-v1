#!/usr/bin/env node
/**
 * Section imagery for four industry AI-agent service pages (2026-10-05):
 *   /services/agriculture-equipment-ai-agents
 *   /services/automotive-ai-voice-agents
 *   /services/chemical-pharmaceutical-ai-agents
 *   /services/legal-ai-agents
 *
 * WHY: a rendered link audit found the agriculture and automotive pages sharing
 * five byte-identical files, and the chemical and legal pages sharing another
 * five. md5 plus a perceptual sweep traced eight of the ten to other pages'
 * folders (a Walmart warehouse shelf, a plumbing dispatch office, the commerce
 * meeting photos); the other two were a plumbing van and a contractor call
 * desk. One meeting photo was captioned as a personal injury intake on one page
 * and an FDA audit on the other. Every slot now gets its own picture of the
 * thing the section is about.
 *
 * MODEL: openai:gpt-image@2.5-flare, the current default after the bake-off in
 * scripts/runware-model-bakeoff.mjs (correct hands, no pseudo-text).
 *
 * SIZES: every frame on these pages is an aspect-ratio box with object-cover, so
 * the box sets the layout and the file only has to fill it. Section frames are
 * 16:9, so section files are cut at exactly 16:9 (1376x774) and nothing is
 * hidden by the browser. Hero frames are 16:9 on phones and 4:3 from 640 px up,
 * so hero files stay 3:2 at the size of the file they replace and the subject
 * sits in the middle of the frame. `fy` picks which 16:9 band of the 3:2 source
 * is kept (0 top, 0.5 centre, 1 bottom) so heads are not clipped.
 *
 * OG: each hero also gets a real 1200x630 JPEG for og:image / twitter:image.
 * The old og:image URLs ended in .jpg but held WebP bytes at 1012x676.
 *
 * PEOPLE: each scene states a different age, ethnicity, hair and clothing. Two
 * prompts that both say "woman in her thirties" return the same face.
 *
 * NO BRANDS, NO READABLE TEXT: left free, the model paints real tractor and car
 * badges and invents signage. Machines are generic and unbadged, labels are
 * blank, and there are no numerals, so nothing reads as a claimed result.
 *
 * SCREENS: "a few plain coloured rectangles" comes back as a 2x2 grid that
 * reads as a Windows logo once it is large in frame, and a tablet held up to
 * the lens faces away from the person reading it. Where a screen is prominent
 * the scene now names what is on it (a field map, a line trace) and where the
 * viewer stands, or turns the tablet's back to the camera.
 *
 * Usage:
 *   node scripts/generate-industry-agent-images.mjs                 all 24
 *   node scripts/generate-industry-agent-images.mjs <substr>        only where "folder/name" matches
 *   RAW_DIR=/some/dir node scripts/...                              keep the source PNGs there
 *   ONLY_MISSING=1 node scripts/...                                 skip files that already exist
 *   FROM_RAW=1 RAW_DIR=/some/dir node scripts/...                   recut from kept PNGs, no API call
 */
import { mkdir, writeFile, readFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const ENV_FILE = '.env.local'
if (existsSync(ENV_FILE)) {
  for (const line of (await readFile(ENV_FILE, 'utf8')).split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
const API_KEY = process.env.RUNWARE_API_KEY
if (!API_KEY && !process.env.FROM_RAW) { console.error('RUNWARE_API_KEY missing from .env.local'); process.exit(1) }

const MODEL = 'openai:gpt-image@2.5-flare'
const SRC_W = 1536
const SRC_H = 1024
const RAW_DIR = process.env.RAW_DIR || join(tmpdir(), 'industry-agent-images-raw')
const KEEP_RAW = Boolean(process.env.RAW_DIR)
const FROM_RAW = Boolean(process.env.FROM_RAW)

const STYLE =
  'Bright natural documentary photograph, soft even daylight, true-to-life colour, ' +
  'crisp focus across the whole frame with deep depth of field. ' +
  'The main subject sits in the middle of the frame with clear space above and below, ' +
  'nothing important near the top or bottom edge. ' +
  'Accurate natural skin tones, relaxed unposed expressions. ' +
  'Hands anatomically correct with exactly five natural fingers each. ' +
  'No readable text anywhere in the image: no signs, no logos, no brand names, no badges, ' +
  'no lettering on clothing, vehicles, machines, boxes, labels, papers or screens, and no numbers. ' +
  'Photorealistic, not an illustration.'

const SCREEN = 'the screen shows only a few large plain coloured rectangles and no writing'

const OG = 'og'

/** [folder, filename, width, height, fy, OG | null, scene]. Heroes are the four 3:2 entries flagged OG. */
const IMAGES = [
  // /services/agriculture-equipment-ai-agents
  ['agriculture', 'farm-equipment-dealership-service-bay', 1012, 676, 0.5, OG,
    `Inside a clean, bright farm equipment dealership service bay with a large generic silver-grey farm tractor that has no badges. A service manager, a white man in his late fifties with short grey hair and a plain navy work shirt, stands beside a technician, a Latina woman in her late twenties with a dark ponytail and plain grey coveralls, who holds a rugged tablet in both hands and reads it. The tablet is seen from behind, so only its plain black back faces the camera and its screen is not visible. An orange shop towel hangs from her pocket`],
  ['agriculture', 'farm-equipment-parts-counter', 1376, 774, 0.1, null,
    'A farm equipment parts counter. A parts clerk, a Black man in his forties with a short beard and a plain dark green polo shirt, stands behind the counter holding a new round tractor air filter in both hands. Behind him are tall steel shelves of plain brown cartons, coiled rubber drive belts hanging on wall hooks and hydraulic hoses. A desk phone sits on the counter beside an orange oil filter'],
  ['agriculture', 'tractor-field-fault-diagnosis-laptop', 1376, 774, 0.5, null,
    `At the edge of a green field, a field service technician, a white woman in her forties with short auburn hair, wearing a plain tan canvas jacket and work gloves tucked in her belt, crouches beside the front wheel of a large generic dark grey farm tractor with no badges. A rugged laptop rests on the tractor step, connected to the machine by a black diagnostic cable; ${SCREEN}. Open sky behind`],
  ['agriculture', 'agronomist-drone-crop-scouting', 1376, 774, 0.2, null,
    'Seen from behind and slightly to one side, over the right shoulder of an agronomist standing in a wide green soybean field under a clear sky: a South Asian man in his thirties with short black hair and glasses, wearing a plain light blue button shirt. He holds a tablet in both hands and we look down at its screen with him. The screen shows a simple aerial field map made of green, yellow and red patches with no writing. A small grey quadcopter drone hovers over the crop a few metres ahead of him'],
  ['agriculture', 'service-truck-combine-harvest-field', 1376, 774, 0.9, null,
    'A golden wheat stubble field at harvest in late afternoon light. A plain white field service truck with an open tool body and a small crane is parked beside a large generic grey combine harvester with no badges. A mechanic, a Native American man in his fifties with a long grey braid, wearing a plain charcoal work shirt and a plain cap, reaches into an open side panel of the combine with a wrench. An orange toolbox sits open on the ground'],
  ['agriculture', 'crop-input-tank-loading-ag-retail', 1376, 774, 0.75, null,
    'The yard of a farm supply depot on a bright day: a row of large white bulk liquid storage tanks and a plain white tender truck. An applicator, an East Asian woman in her thirties with her black hair in a bun, wearing safety glasses, long blue chemical-resistant gloves and a plain grey long-sleeve shirt, connects a thick hose to a valve on a white plastic tote tank with a blank label. An orange safety cone stands nearby'],

  // /services/automotive-ai-voice-agents
  ['automotive', 'dealership-service-drive-advisor', 1012, 676, 0.5, OG,
    `A bright, clean car dealership service drive lane with a glossy epoxy floor and large open garage doors. A service advisor, a Black woman in her thirties with shoulder-length natural curls, wearing a plain white polo shirt and a telephone headset, holds a tablet against her forearm with its plain dark back toward the camera, screen not visible, and talks with a customer, a white man in his sixties with white hair and a plain olive jacket, who stands beside a generic silver SUV with no badges and no number plate. An orange traffic cone marks the lane`],
  ['automotive', 'dealership-service-desk-scheduling', 1376, 774, 0.2, null,
    `A service advisor desk in a car dealership. An advisor, a Middle Eastern man in his forties with short dark hair and a trimmed beard, wearing a plain light grey shirt and a telephone headset, sits at the desk typing; the monitor shows a simple weekly calendar grid of plain coloured blocks with no writing. Through a large glass wall behind him a generic white sedan with no badges sits raised on a workshop lift. An orange coffee mug on the desk`],
  ['automotive', 'collision-repair-estimator-fender-damage', 1376, 774, 0, null,
    'A bright collision repair shop. An estimator, a white woman in her fifties with a blonde bob, wearing a plain navy zip jacket and safety glasses, holds a tablet up to photograph a crumpled front fender and cracked headlight on a generic dark blue sedan with no badges and no number plate. A spray booth and a car masked with paper stand in the background. An orange sanding block lies on a workbench'],
  ['automotive', 'auto-parts-counter-brake-rotor', 1376, 774, 0, null,
    'An auto parts store wholesale counter. A counter specialist, a Filipino man in his twenties with short black hair, wearing a plain black polo shirt, stands behind the counter holding a new bare steel brake rotor in both hands. Behind him are long aisles of steel shelving stacked with plain white and brown cartons, and a corded desk phone and a keyboard sit on the counter. One orange carton on the shelf'],
  ['automotive', 'fleet-cargo-vans-maintenance-yard', 1376, 774, 0.5, null,
    'A fleet maintenance yard on a clear morning with a row of six identical plain white cargo vans with no markings and no number plates. One van has its bonnet raised. A fleet maintenance manager, a Black man in his fifties with a shaved head and a grey goatee, wearing an orange high-visibility vest over a plain blue shirt, stands at the open bonnet holding a clipboard and looking into the engine bay'],
  ['automotive', 'diesel-truck-technician-engine-bay', 1376, 774, 0.9, null,
    `A heavy truck repair shop with a tall ceiling. A generic white semi truck tractor with no badges has its hood tilted fully forward, exposing a large diesel engine. A diesel technician, a Latino man in his thirties with short black hair and a moustache, wearing plain dark blue coveralls, stands on a step beside the engine with a rugged laptop balanced on the frame; ${SCREEN}. An orange creeper leans against the wall`],

  // /services/chemical-pharmaceutical-ai-agents
  ['chemical', 'pharma-quality-lab-batch-review', 1344, 896, 0.5, OG,
    `A wide shot, taken from a few steps back, of a bright pharmaceutical quality control laboratory with white benches and analytical instruments. Two colleagues in plain white lab coats and clear safety glasses sit side by side on lab stools at a bench workstation looking at one monitor, their heads in the middle of the frame with a wide band of empty wall and window above them: a Black woman in her forties with short cropped hair, and a white man in his thirties with red hair and a short beard. The monitor shows one thin dark line trace with several sharp narrow peaks on a plain white background, with no writing, no axis labels and no numbers. A rack of small clear sample vials stands beside the keyboard, one with an orange cap`],
  ['chemical', 'formulation-chemist-beaker-mixing', 1376, 774, 0.15, null,
    'A specialty chemicals formulation lab. A formulation chemist, an Indian woman in her fifties with grey-streaked hair tied back, wearing a plain white lab coat, clear safety glasses and blue nitrile gloves, lowers an overhead laboratory stirrer into a glass beaker of pale amber liquid on a white bench. Other glass beakers of clear and pale blue liquid, a digital balance and a fume hood are behind her. An orange wash bottle on the bench'],
  ['chemical', 'cleanroom-operator-batch-tablet', 1376, 774, 0, null,
    `A pharmaceutical manufacturing cleanroom with white walls and polished stainless steel mixing vessels. An operator in a full white cleanroom coverall with hood, face mask, clear goggles and white gloves, eyes visible, stands beside a stainless vessel holding a tablet computer in both gloved hands and reading it. The tablet is seen from behind, so only its plain grey back faces the camera and its screen is not visible. A stainless trolley with sealed white tubs stands behind`],
  ['chemical', 'quality-audit-binder-review', 1376, 774, 0.5, null,
    'A document control room at a manufacturing plant with shelves of plain white ring binders that have blank spines. Two people sit at a white table reviewing an open ring binder: an auditor, a white woman in her sixties with silver hair in a bun, wearing a plain charcoal blazer and reading glasses, points at a page with a pen, and a quality manager, a Hispanic man in his forties with wavy dark hair, wearing a plain white lab coat over a blue shirt, listens. One orange ring binder lies closed on the table'],
  ['chemical', 'chemical-warehouse-drum-receiving', 1376, 774, 0, null,
    'A clean chemical raw materials warehouse with high racking. A receiving clerk, a Black woman in her twenties with long braids tied back, wearing a white hard hat, clear safety glasses and an orange high-visibility vest over a plain grey shirt, points a handheld barcode scanner at a blue steel drum with a blank white label on a wooden pallet of four blue drums. White plastic tote tanks in steel cages stand in the background'],
  ['chemical', 'chemical-storage-cabinet-inventory-check', 1376, 774, 0, null,
    `A laboratory chemical store room. A compliance specialist, an East Asian man in his fifties with grey hair and glasses, wearing a plain white lab coat, stands at an open yellow steel safety storage cabinet filled with brown glass reagent bottles that have blank white labels. He holds a tablet in one hand and touches one bottle with the other; ${SCREEN}. An orange spill kit bag sits on the floor`],

  // /services/legal-ai-agents
  ['legal', 'law-firm-attorneys-contract-review', 1344, 896, 0.5, OG,
    'A bright modern law office with a wall of law books and a large window. Two attorneys sit side by side at a wooden desk reviewing a printed contract seen from a distance: a senior partner, a Black man in his sixties with grey hair and glasses, wearing a navy suit and a burgundy tie, holds a pen over the page, and an associate, a white woman in her thirties with long brown hair, wearing a grey blazer, has an open laptop in front of her. An orange highlighter lies on the desk'],
  ['legal', 'due-diligence-team-document-boxes', 1376, 774, 0.5, null,
    'A law firm conference room set up for a document review. Three lawyers work at a long table covered with stacks of manila folders, two open laptops and plain white cardboard file boxes with blank ends: an East Asian woman in her forties with a black bob, wearing a black blazer, an Indian man in his thirties with a short beard, wearing a white shirt with rolled sleeves, and a white man in his fifties with thinning grey hair, wearing a blue shirt and a loosened tie. One orange folder sits on top of a stack. Daylight from tall windows'],
  ['legal', 'personal-injury-client-intake-meeting', 1376, 774, 0.3, null,
    'A small, bright law firm meeting room. An intake specialist, a Latina woman in her forties with shoulder-length dark hair, wearing a plain teal blouse, sits at a round table writing on a yellow legal pad and listening. Across from her sits a client, a white man in his thirties with short sandy hair, wearing a plain grey sweatshirt, with his left forearm in a blue arm sling. A box of tissues and an orange folder on the table'],
  ['legal', 'commercial-lease-site-plan-review', 1376, 774, 0, null,
    'A law office with a window onto downtown office buildings. A real estate attorney, a Middle Eastern woman in her fifties with dark hair pulled back, wearing a plain cream blazer, stands at a table leaning over a large printed building floor plan, one hand flat on the plan and the other holding a thick bound document open. A rolled set of plans and an orange sticky note pad sit beside her'],
  ['legal', 'patent-attorney-prototype-drawings', 1376, 774, 0, null,
    'A patent attorney, a white man in his forties with curly dark hair and round glasses, wearing a plain olive sweater over a collared shirt, sits at a desk holding a small machined aluminium gear mechanism prototype in one hand and comparing it with large line-drawing sheets of mechanical parts spread across the desk, the drawings seen from a distance. A desk lamp, a magnifier and an orange pencil on the desk. Bookshelves behind'],
  ['legal', 'estate-planning-couple-attorney-signing', 1376, 774, 0.2, null,
    'A warm, sunlit private office. An older married couple sit together at a round wooden table: a Black woman in her seventies with short white hair, wearing a plain lilac cardigan, signs a document with a pen while her husband, a Black man in his seventies with a white moustache, wearing a plain tan sweater, looks on. Across the table an estate planning attorney, a white woman in her forties with red hair in a low ponytail, wearing a plain dark green dress, slides a second page toward them. An orange folder on the table'],
]

/** Largest crop of the 1536x1024 source at the target ratio; fy places it vertically. */
function cropBox(w, h, fy) {
  const ratio = w / h
  let cw = SRC_W, ch = Math.round(SRC_W / ratio)
  if (ch > SRC_H) { ch = SRC_H; cw = Math.round(SRC_H * ratio) }
  return [Math.floor((SRC_W - cw) / 2), Math.round((SRC_H - ch) * fy), cw, ch]
}

async function fetchRaw(scene, raw) {
  const body = [{
    taskType: 'imageInference',
    taskUUID: crypto.randomUUID(),
    positivePrompt: `${scene}. ${STYLE}`,
    model: MODEL,
    width: SRC_W,
    height: SRC_H,
    numberResults: 1,
    outputFormat: 'PNG',
    outputType: 'URL',
  }]
  const res = await fetch('https://api.runware.ai/v1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify(body),
  })
  const json = await res.json()
  if (json.errors?.length) throw new Error(json.errors[0]?.message?.slice(0, 200) ?? 'unknown')
  const url = json.data?.[0]?.imageURL
  if (!url) throw new Error('no imageURL')
  await writeFile(raw, Buffer.from(await (await fetch(url)).arrayBuffer()))
}

async function generate([folder, name, w, h, fy, og, scene]) {
  const raw = join(RAW_DIR, `${folder}--${name}.png`)
  if (FROM_RAW) { if (!existsSync(raw)) throw new Error(`no kept PNG at ${raw}`) }
  else await fetchRaw(scene, raw)
  const outDir = join('public', 'images', folder)
  await mkdir(outDir, { recursive: true })
  // cwebp out of process: sharp in-process has OOMed this machine before.
  execFileSync('cwebp', ['-quiet', '-q', '82', '-crop', ...cropBox(w, h, fy).map(String), '-resize', String(w), String(h), raw, '-o', join(outDir, `${name}.webp`)])
  if (og) {
    const [x, y, cw, ch] = cropBox(1200, 630, fy)
    execFileSync('magick', [raw, '-crop', `${cw}x${ch}+${x}+${y}`, '+repage', '-resize', '1200x630!', '-strip', '-interlace', 'JPEG', '-quality', '82', join(outDir, `${name}-og.jpg`)])
  }
  if (!KEEP_RAW) await rm(raw)
}

await mkdir(RAW_DIR, { recursive: true })
const filter = process.argv[2]
const queue = IMAGES
  .filter(([f, n]) => !filter || `${f}/${n}`.includes(filter))
  .filter(([f, n]) => !process.env.ONLY_MISSING || !existsSync(join('public', 'images', f, `${n}.webp`)))

console.log(FROM_RAW ? `Recutting ${queue.length} image(s) from ${RAW_DIR}...` : `Generating ${queue.length} image(s) with ${MODEL}...`)
const failed = []
let ok = 0
const CONCURRENCY = 4
for (let i = 0; i < queue.length; i += CONCURRENCY) {
  await Promise.all(queue.slice(i, i + CONCURRENCY).map(async (item) => {
    const label = `${item[0]}/${item[1]}`
    try { await generate(item); ok++; console.log(`  OK   ${label}`) }
    catch (e) { failed.push(label); console.log(`  FAIL ${label}: ${e.message}`) }
  }))
}
console.log(`\n${ok} generated, ${failed.length} failed.`)
if (failed.length) console.log('Failed: ' + failed.join(', '))
console.log('EVERY image must be visually reviewed for hand/face artifacts and pseudo-text before shipping.')
