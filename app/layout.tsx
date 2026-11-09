import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

/*
  Prestige Transportation Limited: website shell.
  The design kit (public/assets) is plain CSS and JS from the Taste Skill. Its stylesheets load in the head; its
  scripts load after React has hydrated (strategy "afterInteractive"), so they only ever touch a finished page.
  Brand guide: black #090909, gold #D4AF37, white #FFFFFF; serif headings used sparingly, a neutral sans for text.
*/

const SITE = 'https://www.prestigetransports.co.uk';
const TITLE = 'Prestige Transportation: chauffeur cars from Crayford, Kent';
const DESCRIPTION =
  'Executive chauffeur service in a Mercedes S-Class, Range Rover or 8-seat Mercedes V-Class, booked by phone, email or online from our office in Crayford.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  icons: { icon: '/brand/favicon.png', apple: '/brand/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    url: SITE,
    title: TITLE,
    description: 'Chauffeur cars for airports, business and events, from Crayford, Kent.',
    images: ['/share.jpg'],
  },
  twitter: { card: 'summary_large_image' },
  other: { 'site-kind': 'other', 'page-type': 'service' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#090909',
};

/* Palette and type exactly as start.mjs printed them for the client's own colours (start.mjs brand). */
const tokens = `
:root {
  --p-bg: #090909; --p-surface: #121212; --p-ink: #ffffff; --p-muted: #848484;
  --p-accent: #d4af37; --p-accent-ink: #090909; --p-action: #d4af37; --p-action-ink: #090909;
  --p-inv-bg: #ffffff; --p-inv-surface: #ebebeb; --p-inv-ink: #090909; --p-inv-muted: #5a5a5a;
  --p-inv-accent: #090909; --p-inv-accent-ink: #ffffff; --p-inv-action: #090909; --p-inv-action-ink: #ffffff;
  --font-display: "Source Serif 4", Georgia, serif;
  --font-text: "Libre Franklin", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.026em;
}`;

const kitCss = [
  '/assets/system.css',
  '/assets/ui/cards.css',
  '/assets/motion/motion.css',
  '/assets/layout/layout.css',
  '/assets/icons/icon.css',
  '/assets/site.css',
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" data-type="service" data-radius="soft" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..700&family=Libre+Franklin:wght@400..600&display=swap"
        />
        {kitCss.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: tokens }} />
        {/* the hero's entrance and the moments' guard, set before the first paint (motion.md, moments.md) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter','mo-js');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
        <link rel="modulepreload" href="/assets/moments/picture-develops/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script type="module" src="/assets/system.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/motion/motion.js" strategy="afterInteractive" />
        <Script type="module" src="/assets/layout/layout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
