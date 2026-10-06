// Real photographs of each city (Unsplash License). Credits: public/images/uk/cities/IMAGE-CREDITS.txt.
// Each alt names what the photo shows.
export const CITY_PHOTO_ALT: Record<string, string> = {
  leeds: 'Leeds Town Hall and its domed clock tower seen from street level',
  manchester: 'The Albert Memorial and the clock tower of Manchester Town Hall in Albert Square',
  birmingham: 'Narrowboats moored in Gas Street Basin in Birmingham with The Cube behind the brick wharf buildings',
  sheffield: 'The Goodwin Fountain in the Peace Gardens in front of Sheffield Town Hall',
  bristol: 'The Clifton Suspension Bridge spanning the Avon Gorge at low tide',
  edinburgh: 'Edinburgh Castle on Castle Rock seen from below',
  liverpool: 'The Royal Liver Building, Cunard Building and Port of Liverpool Building at the Pier Head',
  glasgow: 'The Gothic tower of the University of Glasgow main building',
  newcastle: 'The Tyne Bridge seen from the Newcastle Quayside with the Swing Bridge behind',
  nottingham: 'Nottingham Council House and its dome at the head of Old Market Square',
};

export function cityPhotoSrc(slug: string): string {
  return `/images/uk/cities/${slug}.webp`;
}
