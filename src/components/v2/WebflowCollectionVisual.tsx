/** One content collection and one template produce several consistent pages. */
export default function WebflowCollectionVisual() {
  return (
    <svg className="wf-collection-visual" viewBox="0 0 480 320" fill="none" role="img" aria-label="Content records combine with a single page template to create consistent pages in a CMS Collection">
      <rect width="480" height="320" rx="16" fill="#FFF8F5" />
      <g stroke="#E7DED6" strokeWidth="1.5">
        <path d="M32 80h416M32 160h416M32 240h416M80 32v256M160 32v256M240 32v256M320 32v256M400 32v256" strokeDasharray="2 8" />
      </g>
      <g stroke="#6E635A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="32" y="52" width="136" height="94" rx="8" fill="white" />
        <path d="M32 76h136m-90 0v70m48-70v70M32 100h136M32 123h136" stroke="#E7DED6" />
        <circle cx="48" cy="88" r="4" fill="#F05A28" stroke="none" /><circle cx="48" cy="112" r="4" fill="#D8CCC0" stroke="none" /><circle cx="48" cy="135" r="4" fill="#D8CCC0" stroke="none" />
        <path d="M89 89h26m-26 23h26m-26 23h26m20-46h20m-20 23h20m-20 23h20" />
        <rect x="52" y="184" width="96" height="98" rx="8" fill="white" />
        <path d="M52 202h96" stroke="#E7DED6" />
        <rect x="66" y="215" width="68" height="28" rx="3" fill="#FFF8F5" stroke="#F05A28" />
        <path d="M66 255h68M66 267h42" />
        <path d="M168 100h28q14 0 14 14v46m-62 73h48q14 0 14-14v-59h48" stroke="#F05A28" strokeWidth="2" />
        <path d="m250 155 8 5-8 5" stroke="#F05A28" strokeWidth="2" />
        <path d="M258 160h18q10 0 10-10V72h22m-50 88h50m-50 0h18q10 0 10 10v78h22" stroke="#F05A28" strokeWidth="2" />
        {[36, 124, 212].map((y, index) => (
          <g key={y}>
            <rect x="316" y={y} width="128" height="72" rx="7" fill="white" stroke={index === 0 ? '#F05A28' : '#D8CCC0'} />
            <path d={`M316 ${y + 15}h128`} stroke="#E7DED6" />
            <rect x="328" y={y + 26} width="42" height="32" rx="3" fill={index === 0 ? '#F05A28' : '#E7DED6'} stroke="none" />
            <path d={`M383 ${y + 28}h48m-48 11h36m-36 11h42`} />
          </g>
        ))}
      </g>
    </svg>
  );
}
