import type { CaseStudy, CaseStudyScreenshot } from '@/data/case-studies'

/** Server-rendered visual additions, deliberately limited to the September case studies. */
export const VISUAL_CASE_SLUGS = new Set([
  'rdb-travels-cab-booking-website',
  'shopholistico-shopify-store',
  'washington-law-group-accident-detection-agent',
])

export function CaseVisualIcon({ kind = 0 }: { kind?: number }) {
  const paths = [
    <g key="source"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></g>,
    <g key="check"><path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></g>,
    <g key="mail"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></g>,
    <g key="lock"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></g>,
    <g key="routes"><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h7a4 4 0 0 1 0 8h-4a3 3 0 0 0 0 6h7"/></g>,
    <g key="store"><path d="M4 9h16l-2-6H6L4 9Zm1 0v12h14V9M9 21v-7h6v7"/><path d="M4 9a3 3 0 0 0 5 2 4 4 0 0 0 6 0 3 3 0 0 0 5-2"/></g>,
  ]
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind % paths.length]}</svg>
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return <div className="csv-browser"><div className="csv-browser-bar" aria-hidden="true"><i/><i/><i/><span/><svg viewBox="0 0 16 16"><path d="M4 7V5a4 4 0 0 1 8 0v2M3 7h10v8H3z"/></svg></div>{children}</div>
}

export function CaseStudyHeroVisual({ cs }: { cs: CaseStudy }) {
  if (!cs.screenshots?.length) return null
  const desktop = cs.screenshots.find((s) => s.device !== 'mobile')
  const mobile = cs.screenshots.find((s) => s.device === 'mobile')
  if (!desktop) return null
  return (
    <a className="csv-hero-stage" href="#project-images" aria-label={`Inspect ${cs.client} desktop and mobile screenshots`}>
      <BrowserFrame>
        {/* Actual delivered website, never a generated mockup. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={desktop.src} alt={desktop.alt} width={1200} height={750} fetchPriority="high" decoding="async"/>
      </BrowserFrame>
      {mobile && <div className="csv-phone" aria-hidden="true">
        <span className="csv-phone-camera"/>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mobile.src} alt="" width={390} height={844} decoding="async"/>
      </div>}
      <span className="csv-inspect" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4"/></svg></span>
    </a>
  )
}

export function CaseStudyScreenshotGallery({ screenshots }: { screenshots: CaseStudyScreenshot[] }) {
  return <div id="project-images" className="csv-gallery">
    {screenshots.slice(0, 5).map((s) => {
      const mobile = s.device === 'mobile'
      return <figure key={s.src} className={`csv-gallery-figure${mobile ? ' csv-gallery-mobile' : ''}`}>
        <details className="csv-image-inspector">
          <summary aria-label={`Expand or collapse ${s.alt}`}>
            <div className={mobile ? 'csv-gallery-phone' : 'csv-browser'}>
              {!mobile && <div className="csv-browser-bar" aria-hidden="true"><i/><i/><i/><span/></div>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} width={mobile ? 390 : 1200} height={mobile ? 844 : 750} loading="lazy" decoding="async"/>
            </div>
            <span className="csv-inspect" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6M10 7v6"/></svg></span>
          </summary>
          <div className="csv-image-detail" tabIndex={0} role="region" aria-label={`Enlarged ${s.alt}`}>
            {/* Native disclosure: keyboard operable, full image without JavaScript. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt="" width={mobile ? 390 : 1200} height={mobile ? 844 : 750} loading="lazy" decoding="async"/>
          </div>
        </details>
        {s.caption && <figcaption>{s.caption}</figcaption>}
      </figure>
    })}
  </div>
}

/** The documented pipeline, illustrated without fabricated records or a product-console mockup. */
export function AccidentAgentWorkflow({ animated = false }: { animated?: boolean }) {
  return <div className="csv-agent-workflow" data-animated={animated || undefined} role="img" aria-label="Published news and police sources feed extraction and fixed qualification rules. Names are checked against article text. Unnamed crashes stay on a watchlist; named qualifying crashes are emailed and reviewed by the firm in its private console.">
    <svg className="csv-workflow-wide" viewBox="0 0 960 330" fill="none" aria-hidden="true">
      <g className="csv-flow-lines" stroke="#8A7668" strokeWidth="2"><path d="M152 99h108q24 0 24 24v42M152 165h132M152 231h108q24 0 24-24v-42M336 165h117M517 165h116M697 165h100"/><path d="M485 196v62h180v-62" strokeDasharray="5 7"/><path d="m432 158 7 7-7 7m180-14 7 7-7 7m165-14 7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></g>
      {[64,130,196].map((y) => <g key={y}><rect x="36" y={y} width="116" height="70" rx="12" fill="white" stroke="#E7DED6"/><rect x="53" y={y+17} width="25" height="35" rx="3" fill="#FFF8F5" stroke="#C94A1A"/><path d={`M87 ${y+22}h46M87 ${y+33}h35M87 ${y+44}h40`} stroke="#B9AEA5" strokeWidth="3" strokeLinecap="round"/></g>)}
      <g className="csv-flow-engine"><rect x="254" y="119" width="82" height="92" rx="16" fill="#FFF8F5" stroke="#C94A1A"/><path d="M276 142h38M276 155h27M276 168h38M276 181h18" stroke="#C94A1A" strokeWidth="3" strokeLinecap="round"/><circle cx="318" cy="187" r="4" fill="#F05A28"/></g>
      <g><rect x="453" y="127" width="64" height="76" rx="12" fill="white" stroke="#E7DED6"/><path d="m485 143 19 7v16c0 12-19 23-19 23s-19-11-19-23v-16l19-7Z" fill="#FFF8F5" stroke="#C94A1A"/><path d="m476 164 7 7 12-15" stroke="#C94A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g>
      <g><rect x="633" y="127" width="64" height="76" rx="12" fill="white" stroke="#E7DED6"/><rect x="645" y="148" width="40" height="30" rx="5" fill="#FFF8F5" stroke="#C94A1A"/><path d="m646 151 19 15 19-15" stroke="#C94A1A" strokeWidth="2"/></g>
      <g><rect x="797" y="103" width="125" height="108" rx="14" fill="white" stroke="#E7DED6"/><path d="M810 124h99" stroke="#E7DED6"/><circle cx="815" cy="115" r="2" fill="#F05A28"/><path d="M813 139h17M813 151h17M813 163h17M840 139h56M840 151h46M840 163h56M840 175h37" stroke="#B9AEA5" strokeWidth="3" strokeLinecap="round"/><path d="M859 211v17m-22 0h44" stroke="#C94A1A" strokeWidth="2"/></g>
      <g><circle cx="574" cy="258" r="21" fill="white" stroke="#E7DED6"/><path d="M574 245v13l9 5" stroke="#C94A1A" strokeWidth="2" strokeLinecap="round"/></g>
      <circle className="csv-flow-pulse" cx="378" cy="165" r="5" fill="#F05A28"/>
      <circle className="csv-flow-pulse csv-flow-pulse-delayed" cx="554" cy="165" r="5" fill="#F05A28"/>
    </svg>
    <svg className="csv-workflow-compact" viewBox="0 0 360 410" fill="none" aria-hidden="true">
      <g stroke="#8A7668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 87v17h200V87M180 87v34m-5-7 5 7 5-7M180 184v34m-5-7 5 7 5-7M180 282v31M180 313H86v19m94-19h94v19"/>
        <path d="M211 250h55q14 0 14 14v24q0 12-14 12h-36" strokeDasharray="4 5"/>
      </g>
      {[38,138,238].map((x)=><g key={x}><rect x={x} y="26" width="84" height="61" rx="10" fill="white" stroke="#E7DED6"/><rect x={x+12} y="40" width="18" height="29" rx="2" fill="#FFF8F5" stroke="#C94A1A"/><path d={`M${x+40} 43h30M${x+40} 54h23M${x+40} 65h27`} stroke="#8A7668" strokeWidth="2.2" strokeLinecap="round"/></g>)}
      <g><rect x="149" y="121" width="62" height="63" rx="12" fill="#FFF8F5" stroke="#C94A1A"/><path d="M163 137h33M163 148h24M163 159h33M163 170h17" stroke="#C94A1A" strokeWidth="2.5" strokeLinecap="round"/><circle cx="200" cy="173" r="3" fill="#F05A28"/></g>
      <g><rect x="149" y="218" width="62" height="64" rx="12" fill="white" stroke="#E7DED6"/><path d="m180 230 19 7v14c0 11-19 21-19 21s-19-10-19-21v-14l19-7Z" fill="#FFF8F5" stroke="#C94A1A"/><path d="m171 247 7 7 12-15" stroke="#C94A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g>
      <g><circle cx="268" cy="286" r="17" fill="white" stroke="#E7DED6"/><path d="M268 275v11l7 4" stroke="#C94A1A" strokeWidth="1.8" strokeLinecap="round"/></g>
      <g><rect x="55" y="332" width="62" height="58" rx="12" fill="white" stroke="#E7DED6"/><rect x="66" y="348" width="40" height="28" rx="4" fill="#FFF8F5" stroke="#C94A1A"/><path d="m67 351 19 14 19-14" stroke="#C94A1A" strokeWidth="1.8"/></g>
      <g><rect x="231" y="332" width="86" height="58" rx="10" fill="white" stroke="#E7DED6"/><path d="M241 345h65M242 357h14m8 0h33M242 367h14m8 0h25M274 390v9m-15 0h30" stroke="#8A7668" strokeWidth="1.8" strokeLinecap="round"/><circle cx="242" cy="340" r="1.7" fill="#F05A28"/></g>
      <circle className="csv-flow-pulse" cx="180" cy="104" r="4" fill="#F05A28"/><circle className="csv-flow-pulse csv-flow-pulse-delayed" cx="180" cy="202" r="4" fill="#F05A28"/>
    </svg>
  </div>
}
