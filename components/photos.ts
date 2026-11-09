/*
  Every photograph on the page. All are licensed stand-ins from Wikimedia Commons (credits at /credits/) until
  Prestige supplies its own photographs of its own vehicles: replace the files in public/assets/img and the
  entries below (see README.md, "Photographs to replace").
*/

export type Photo = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  subject: string;
  pos?: string;
};

const img = (id: string, sizes: [string, number][], width: number, height: number) => ({
  src: `/assets/img/photo-${id}${sizes[sizes.length - 1][0]}.webp`,
  srcSet: sizes.map(([suffix, w]) => `/assets/img/photo-${id}${suffix}.webp ${w}w`).join(', '),
  width,
  height,
});

export const photos = {
  hero: {
    ...img('f33268093', [['-500', 500], ['-960', 960], ['-1280', 1280], ['', 1920]], 1920, 1275),
    alt: 'Tower Bridge lit up at night under a deep blue sky, the Shard behind it',
    subject: 'London at night',
    pos: '50% 40%',
  },
  heroPhone: '/assets/img/photo-f33268093-780x975.webp',
  cabin: {
    ...img('f26465715', [['-500', 500], ['-960', 960], ['', 1280]], 1280, 960),
    alt: 'The rear seats of a Mercedes-Benz S-Class in dark leather, with a screen in the seat back',
    subject: 'S-Class rear cabin',
    pos: '62% 50%',
  },
  sclass: {
    ...img('f187755729', [['-500', 500], ['-960', 960]], 960, 640),
    alt: 'A black Mercedes-Benz S-Class saloon from the side',
    subject: 'Mercedes-Benz S-Class',
  },
  rangerover: {
    ...img('f157027846', [['-500', 500], ['-960', 960]], 960, 768),
    alt: 'A black Range Rover on a pedestrian crossing, seen from above',
    subject: 'Range Rover',
  },
  vclass: {
    ...img('f143439236', [['-500', 500], ['-960', 960], ['', 1280]], 1280, 958),
    alt: 'A black Mercedes-Benz V-Class people carrier from the front',
    subject: 'Mercedes-Benz V-Class',
  },
  city: {
    ...img('f2503151', [['-500', 500], ['-960', 960], ['', 1280]], 1280, 805),
    alt: 'Canary Wharf lit up at night across the Thames',
    subject: 'London at night',
  },
  close: {
    ...img('f169070424', [['-500', 500], ['-960', 960], ['', 1280]], 1280, 960),
    alt: 'Two black Mercedes-Benz saloons parked side by side in an underground car park',
    subject: 'Mercedes-Benz S-Class pair',
    pos: '50% 62%',
  },
} satisfies Record<string, Photo | string>;
