import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photograph credits: Prestige Transportation',
  description: 'Sources and licences of the photographs used on prestigetransports.co.uk.',
};

/* The list photos.mjs credits printed, plus the close's photograph. Update it when photographs are replaced. */
const credits: [string, string, string, string][] = [
  ['https://commons.wikimedia.org/wiki/File:Tower_Bridge_by_night_2013.JPG', 'Bert Seghers', 'CC0', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en'],
  ['https://commons.wikimedia.org/wiki/File:Interior_of_rear_seats_of_the_Mercedes-Benz_S_500_(W222).jpg', 'Борис Ульзибат', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0'],
  ['https://commons.wikimedia.org/wiki/File:Moscow,_Mercedes-Benz_S-class_black,_Apr_2026_01.jpg', 'Retired electrician', 'CC0', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en'],
  ['https://commons.wikimedia.org/wiki/File:Range_Rover_(L460)_Washington_DC_Metro_Area,_USA.jpg', 'OWS Photography', 'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0'],
  ['https://commons.wikimedia.org/wiki/File:2019_Mercedes-Benz_V-Class_(W447)_1X7A1743.jpg', 'Alexander-93', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0'],
  ['https://commons.wikimedia.org/wiki/File:Canary_Wharf_at_night,_from_Shadwell.jpg', 'Dave Pape', 'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/'],
  ['https://commons.wikimedia.org/wiki/File:Mercedes-Benz_%26_Maybach_Type_223_S-Class_(3).jpg', 'Damian B Oh', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0'],
];

export default function Credits() {
  return (
    <main id="top" className="legal">
      <section className="section legal__page credits-list" aria-labelledby="credits-h">
        <div className="wrap">
          <p><a className="link" href="/">Back to Prestige Transportation</a></p>
          <h1 id="credits-h">Photograph credits</h1>
          <ul className="stack-4">
            {credits.map(([page, by, lic, licUrl]) => (
              <li key={page}><a className="link" href={page}>{by}</a>, <a className="link" href={licUrl}>{lic}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
