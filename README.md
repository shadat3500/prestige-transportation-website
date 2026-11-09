# Prestige Transportation website

One-page website for **Prestige Transportation Limited** (prestigetransports.co.uk), built with **Next.js 16**
as a static export, in the brand colours: black `#090909`, gold `#D4AF37` and white `#FFFFFF`.
Headings use Source Serif 4 (a Georgia-style serif, used sparingly). Body text uses Libre Franklin (a neutral sans).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the finished static site to ./out
```

`./out` is the whole website: plain HTML, CSS, JS and images. Upload it to any static host
(Vercel, Netlify, Cloudflare Pages, Azure Static Web Apps, or GoDaddy hosting).

## Pages and sections

| Route | What it is |
| --- | --- |
| `/` | Hero (Tower Bridge at night) · Chauffeur services · The fleet (S-Class, Range Rover, V-Class) · Our standard (the brand promise, lit word by word on scroll) · Booking in 3 steps · Bookings and quotes (contact details and booking form) · Close and footer |
| `/privacy/` | Privacy notice for the booking form (have it checked before launch) |
| `/credits/` | Photograph credits (required by the photo licences) |

## Files

```
app/layout.tsx         <head>, fonts, brand colour tokens, design-kit scripts
app/page.tsx           the home page (all copy, phone numbers and email at the top)
app/privacy/page.tsx   privacy notice
app/credits/page.tsx   photograph credits
components/photos.ts   every photograph used, with its alt text
public/assets/         design kit (CSS/JS), site.css (page styles), img/ (photographs)
public/brand/          logo, favicon, Apple touch icon
brand/                 untouched masters: logo from the handover PDF, the holding-page image
preview/               screenshots of the finished page
```

## Before launch: what the client must supply or confirm

1. **Booking form delivery.** The form currently opens the visitor's email app, addressed to
   `bookings@prestigetransports.co.uk`. For a form that sends without leaving the page, set `data-endpoint` on the
   `<form>` in `app/page.tsx` to a company-owned form service, such as a Microsoft 365 / Power Automate HTTP flow
   or Formspree on a Prestige account. The form then shows "Your booking request is in." after a real send.
   **Never put mailbox passwords or Microsoft 365 credentials in the code** (handover sheet, section 5).
2. **Photographs to replace.** Every photograph is a licensed stand-in from Wikimedia Commons:

   | Slot | Stand-in now | Shoot instead |
   | --- | --- | --- |
   | Hero | Tower Bridge at night | Your car at night in London, or keep this one |
   | Services | Rear seats of an S-Class (a white car) | Your own S-Class rear cabin |
   | Fleet: S-Class | A black S-Class, side view | Your S-Class, side on, plain background |
   | Fleet: Range Rover | A black Range Rover, from above | Your Range Rover |
   | Fleet: V-Class | A black V-Class, front | Your 8-seat V-Class |
   | Booking steps | Canary Wharf at night | A chauffeur at a terminal or a door |
   | Closing band | Two black Mercedes saloons in a car park | Your fleet lined up |

   Replace the files in `public/assets/img/`, update `components/photos.ts`, and remove any credit that no longer
   applies from `app/credits/page.tsx`.
3. **Facts to confirm.** These are on the page but were not in the brief:
   - the airports served (Heathrow, Gatwick, Stansted, Luton, London City)
   - "across London and the South East"
   - the four services: airport transfers, corporate and executive travel, weddings and events, group travel
   - "8 seats" for the V-Class (taken from the holding-page artwork)
   - the booking steps (we reply with the vehicle and the price)
   - "each in black" for the fleet
4. **Logo file.** The logo used is the one in the handover PDF (316 × 249 px). Send the full-size logo as PNG or SVG
   and replace `public/brand/logo.png`; it will be sharper in the footer.
5. **Privacy notice.** Have `/privacy/` checked by whoever handles data protection.

## Going live on prestigetransports.co.uk (following the handover sheet)

- Keep the domain in Prestige's own GoDaddy account. **Do not change the nameservers or transfer the domain.**
- Connect the host with the **minimum A / AAAA / CNAME records** the host gives you (usually one A record for `@` and
  one CNAME for `www`). Send them to Prestige in writing: record type, host, value, TTL and reason.
- **Do not touch the MX, Autodiscover, SPF, DKIM or DMARC records**, or any Microsoft verification records.
  Save a screenshot of the current DNS zone first.
- Serve one canonical address (`https://www.prestigetransports.co.uk`, already set in `app/layout.tsx`) and redirect
  the bare domain to it, with HTTPS on both.
- After propagation, test both addresses, the certificate, the phone and email links, the form, and that Microsoft 365
  email still sends and receives.
- Create Search Console and analytics under a Prestige-owned account.

## Quality checks run (Taste Skill)

- Copy lint: 0 FAIL, 0 WARN.
- Layout check at 1440, 1024, 820, 768 and 390: no findings.
- Performance: 0 FAIL (LCP about 144 ms on the test machine, no layout shift, no broken requests).
- Finish gate: **OPEN, 5 left** after the three rounds. Five findings were waived on purpose: the real postcode and
  phone numbers, which the skill's checker treats as invented because it cannot see the brief. The five left open:
  - The booking section has no picture. The skill's own section rules allow a booking form without one.
  - Two spacing differences: the full-bleed hero next to the first section on desktop, and the booking section next
    to the footer on a phone.
  - The phone action bar briefly sitting over a footer link while you scroll.
  - The form button's colour easing in as it scrolls into view on a phone.
