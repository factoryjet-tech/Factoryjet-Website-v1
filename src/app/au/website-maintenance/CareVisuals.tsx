/* Explanatory release diagram, with no invented performance or security scores. */
export function StagingRelease() {
  return <svg className="care-release" viewBox="0 0 760 280" role="img" aria-label="A private staging website is checked before its update moves to the live website; an off-site backup remains available" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="24" y="28" width="260" height="176" rx="8" fill="white"/><path d="M24 58h260" stroke="#E7DED6"/><circle cx="40" cy="44" r="2" fill="currentColor"/><circle cx="51" cy="44" r="2" fill="currentColor"/>
    <rect x="44" y="77" width="95" height="62" rx="3" fill="#E7DED6" stroke="none"/><path d="M155 83h104M155 98h88M155 119h57M44 159h99M44 177h145" stroke="#B9ABA1"/>
    <path d="M306 118h134m-12-12 12 12-12 12" stroke="#B23E13"/>
    <circle cx="372" cy="118" r="28" fill="#FFF8F5" stroke="#F05A28"/><path d="m359 117 10 10 17-20" stroke="#B23E13"/>
    <rect x="470" y="28" width="260" height="176" rx="8" fill="white"/><path d="M470 58h260" stroke="#E7DED6"/><circle cx="486" cy="44" r="2" fill="currentColor"/><circle cx="497" cy="44" r="2" fill="currentColor"/>
    <rect x="490" y="77" width="95" height="62" rx="3" fill="#F05A28" stroke="none"/><path d="M601 83h104M601 98h88M601 119h57M490 159h99M490 177h145" stroke="#B9ABA1"/>
    <path d="M155 206v36h175M430 242h170v-36" stroke="#B9ABA1"/><rect x="330" y="218" width="100" height="48" rx="7" fill="white"/><path d="M351 232h58M351 243h58M351 254h42" stroke="#B23E13"/>
  </svg>;
}
export function CarePath({ index }: { index: number }) {
  return <svg className="care-path" viewBox="0 0 300 90" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="20" y="12" width="75" height="64" rx="4" fill="white"/><path d="M20 27h75M32 40h34M32 51h50M32 62h29" stroke="#B9ABA1"/><path d="M113 44h63m-8-8 8 8-8 8" stroke="#B23E13"/>{index === 0 || index === 3 ? <><path d="M200 25h68v39h-68zM200 25l34 21 34-21"/><circle cx="265" cy="62" r="10" fill="#FFF8F5"/><path d="m260 62 4 4 6-8" stroke="#B23E13"/></> : index === 1 || index === 4 ? <><rect x="203" y="17" width="66" height="56" rx="4" fill="#FFF8F5"/><path d="M203 33h66M219 12v12M251 12v12M216 47h10M238 47h10M216 60h10"/></> : <><path d="M204 22h9l9 35h36l9-25h-49"/><circle cx="227" cy="69" r="4"/><circle cx="252" cy="69" r="4"/><path d="m235 40 7 7 14-17" stroke="#B23E13"/></>}</svg>;
}
