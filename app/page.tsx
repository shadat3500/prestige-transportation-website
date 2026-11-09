import type { CSSProperties } from 'react';
import { photos, type Photo } from '@/components/photos';

/*
  type: service (a chauffeur firm: people are hired) · site-kind other
  deal: hero photo (data-calm left), nav nav-centre, close close-photo, footer footer-dark, rhythm dark-band
        (one .ground-inverse section: the fleet, on white, the page's strongest pictures), buttons solid,
        mark arc (replaced by the client's own logo), palette: the client's own colours through start.mjs brand,
        type source-serif (Source Serif 4 / Libre Franklin: the brand guide's Georgia-style serif and neutral sans)
  moments: word-highlight in #standard (the brand's own promise, read word by word),
           picture-develops in #how (the city at night, beside the three booking steps)
  Every photograph is a licensed stand-in (Wikimedia Commons) until the client's own fleet photographs arrive:
  see README.md, "Photographs to replace".
*/

const PHONE_1 = '01322 280 280';
const PHONE_1_HREF = 'tel:+441322280280';
const PHONE_2 = '01322 940 980';
const PHONE_2_HREF = 'tel:+441322940980';
const EMAIL = 'bookings@prestigetransports.co.uk';
const MAIN_ACTION = 'Book a chauffeur';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

function Img({ p, className, eager, sizes }: { p: Photo; className?: string; eager?: boolean; sizes?: string }) {
  return (
    <img
      className={className}
      src={p.src}
      srcSet={p.srcSet}
      sizes={sizes ?? '(max-width: 1023px) 100vw, 50vw'}
      width={p.width}
      height={p.height}
      alt={p.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      data-source="stand-in"
      data-subject={p.subject}
      style={p.pos ? ({ '--ly-pos': p.pos, '--pos': p.pos } as Vars) : undefined}
    />
  );
}

function Logo({ footer }: { footer?: boolean }) {
  return (
    <a className={footer ? 'nav__logo footer__logo' : 'nav__logo'} href="#top" aria-label="Prestige Transportation, back to top">
      <img src="/brand/logo.png" width={316} height={249} alt="Prestige Transportation" loading={footer ? 'lazy' : undefined} />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Skip to content</a>
          <Logo />
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item"><a className="nav__link" href="#services">Services</a></div>
            <div className="nav__item"><a className="nav__link" href="#fleet">Fleet</a></div>
            <div className="nav__item"><a className="nav__link" href="#standard">Standard</a></div>
            <div className="nav__item"><a className="nav__link" href="#how">Booking</a></div>
          </nav>
          <div className="nav__actions">
            <a className="nav__link nav__phone" href={PHONE_1_HREF}>{PHONE_1}</a>
            <a className="btn btn--primary" href="#book">{MAIN_ACTION}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO: photo (dealt), the words in a solid box on the photograph's calm left side */}
        <section className="hero hero--photo" data-enter="" data-calm="right" aria-labelledby="hero-h">
          <picture className="hero__bg">
            <source media="(max-width: 639px)" srcSet={photos.heroPhone} />
            <Img p={photos.hero} eager sizes="100vw" />
          </picture>
          <div className="wrap"><div className="hero-text">
            <div className="hero__text">
              <h1 id="hero-h">Chauffeur cars from Crayford, Kent</h1>
              <p className="hero__lead">
                Executive travel in a Mercedes S-Class, a Range Rover or an 8-seat Mercedes V-Class, for airport
                transfers, business and events.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#book">{MAIN_ACTION}<Arrow /></a>
                <a className="btn btn--secondary" href="#fleet">See the fleet</a>
              </div>
            </div>
          </div></div>
        </section>

        {/* SERVICES: services-list, the list beside one photograph of the rear cabin */}
        <section className="section" id="services" style={{ '--hm': 2 } as Vars} aria-labelledby="services-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <div className="section-head">
                <h2 id="services-h">Chauffeur services</h2>
                <p>Every journey is booked ahead, with the vehicle chosen for the trip and a chauffeur who meets you there.</p>
              </div>
              <ul className="rows">
                <li><span className="rows__name">Airport transfers</span><p>Heathrow, Gatwick, Stansted, Luton and London City, to the terminal or from arrivals.</p></li>
                <li><span className="rows__name">Corporate and executive travel</span><p>Meetings, roadshows and client collections across London and the South East.</p></li>
                <li><span className="rows__name">Weddings and events</span><p>A black S-Class or Range Rover for the ceremony, the venue and the evening.</p></li>
                <li><span className="rows__name">Group travel</span><p>The 8-seat Mercedes V-Class for teams, families and extra luggage.</p></li>
              </ul>
              <p className="services__link"><a className="link" href="#how">See how booking works</a></p>
            </div>
            <div className="frame frame--photo span-6 start-7 services__photo">
              <Img p={photos.cabin} className="frame__img" sizes="(max-width: 639px) 160vw, (max-width: 1023px) 80vw, 50vw" />
            </div>
          </div>
        </section>

        {/* FLEET: the dealt dark-band (on this black page the inverse ground is white): three open tiles */}
        <section className="section ground-inverse" id="fleet" style={{ '--hm': 2 } as Vars} aria-labelledby="fleet-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="fleet-h">The fleet. <span className="muted">A saloon, an SUV and an 8-seat people carrier.</span></h2>
            </div>
            <div className="grid fleet">
              <a className="tile span-4" href="#book">
                <div className="tile__media"><Img p={photos.sclass} sizes="(max-width: 1023px) 100vw, 33vw" /></div>
                <div className="tile__head"><h3>Mercedes-Benz S-Class</h3></div>
                <p className="tile__facts">Executive saloon</p>
                <p>For airport runs, business travel and the drive home after a late meeting.</p>
              </a>
              <a className="tile span-4" href="#book">
                <div className="tile__media"><Img p={photos.rangerover} sizes="(max-width: 1023px) 100vw, 33vw" /></div>
                <div className="tile__head"><h3>Range Rover</h3></div>
                <p className="tile__facts">Luxury SUV</p>
                <p>For weddings, country venues and journeys with more bags than a saloon takes.</p>
              </a>
              <a className="tile span-4" href="#book">
                <div className="tile__media"><Img p={photos.vclass} sizes="(max-width: 1023px) 100vw, 33vw" /></div>
                <div className="tile__head"><h3>Mercedes-Benz V-Class</h3></div>
                <p className="tile__facts">8 seats</p>
                <p>For groups, families and teams travelling together to the airport or an event.</p>
              </a>
            </div>
          </div>
        </section>

        {/* STANDARD: the dealt word-highlight moment, the brand's own five promises in one statement */}
        <section className="section statement" id="standard" data-moment="word-highlight" aria-label="Our standard">
          <div className="wrap">
            <p className="t-label">Our standard</p>
            <p className="mo-wh__text">
              Executive travel, a luxury experience, a chauffeur who is punctual and reliable, safe and professional:
              that is the service on every journey, <strong>driven by excellence</strong> and defined by trust.
            </p>
          </div>
        </section>

        {/* HOW: three booking steps beside one photograph that develops as it arrives (picture-develops) */}
        <section className="section" id="how" aria-labelledby="how-h">
          <div className="wrap grid grid--top">
            <div className="span-6">
              <div className="section-head">
                <h2 id="how-h">Booking in 3 steps</h2>
                <p>Online, by email or by phone.</p>
              </div>
              <ol className="rows steps-list">
                <li><span className="rows__name"><span className="step-num">1</span>Send the journey</span><p>Pick-up, destination, date, time and passengers.</p></li>
                <li><span className="rows__name"><span className="step-num">2</span>Get the confirmation</span><p>We reply with the vehicle and the price.</p></li>
                <li><span className="rows__name"><span className="step-num">3</span>Meet your chauffeur</span><p>At the door, the terminal or the venue, on time.</p></li>
              </ol>
            </div>
            <figure className="develop span-6 start-7" data-moment="picture-develops">
              <Img p={photos.city} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 120vw, 75vw" />
            </figure>
          </div>
        </section>

        {/* BOOK: booking-form, the office and the phones on the left, the form on --g-alt on the right */}
        <section className="section" id="book" style={{ '--hm': 2 } as Vars} aria-labelledby="book-h">
          <div className="wrap grid grid--top">
            <div className="span-5 book__text">
              <div className="section-head">
                <h2 id="book-h">Bookings and quotes</h2>
                <p>Send the journey and we reply with the vehicle and the price. For a journey today, call us.</p>
              </div>
              <dl className="contact-list">
                <div><dt>Bookings</dt><dd><a className="link" href={PHONE_1_HREF}>{PHONE_1}</a></dd></div>
                <div><dt>Office</dt><dd><a className="link" href={PHONE_2_HREF}>{PHONE_2}</a></dd></div>
                <div><dt>Email</dt><dd><a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
                <div><dt>Our new office</dt><dd><address>Suite 4, Howbury Technology Centre<br />Texcel Business Park, Thames Road<br />Crayford, DA1 4RQ</address></dd></div>
              </dl>
            </div>
            {/* The form sends to the company's bookings mailbox. Set data-endpoint to the company's own form
                service (for example a Microsoft 365 / Power Automate flow) to send without opening the visitor's
                mail app; never put mailbox passwords in this code. */}
            <form
              className="form span-6 start-7 book__form"
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
              data-endpoint=""
              data-sent="Your booking request is in. We reply with the vehicle and the price."
              noValidate
            >
              <div className="field"><label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
                <p className="field__error" id="f-name-err" hidden>Write the name the booking is under.</p></div>
              <div className="field"><label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
                <p className="field__error" id="f-email-err" hidden>Write an email address with an @, like name@company.co.uk.</p></div>
              <div className="field"><label htmlFor="f-phone">Phone</label>
                <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required aria-describedby="f-phone-err" />
                <p className="field__error" id="f-phone-err" hidden>Write a phone number the chauffeur can reach you on.</p></div>
              <div className="field"><label htmlFor="f-date">Date and time</label>
                <input id="f-date" name="date" type="text" autoComplete="off" required aria-describedby="f-date-err" />
                <p className="field__error" id="f-date-err" hidden>Write the day and the pick-up time.</p></div>
              <div className="field"><label htmlFor="f-from">Pick-up</label>
                <input id="f-from" name="pickup" type="text" autoComplete="off" required aria-describedby="f-from-err" />
                <p className="field__error" id="f-from-err" hidden>Write the pick-up address or the airport and flight.</p></div>
              <div className="field"><label htmlFor="f-to">Destination</label>
                <input id="f-to" name="destination" type="text" autoComplete="off" required aria-describedby="f-to-err" />
                <p className="field__error" id="f-to-err" hidden>Write where the journey ends.</p></div>
              <div className="btn-row"><button className="btn btn--primary" type="submit">{MAIN_ACTION}</button></div>
              <p className="form__status" role="status" data-form-status=""></p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER.CLOSING: close-photo (row 1) and footer-dark (row 2) */}
      <footer className="footer closing footer--dark" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--photo">
            <div className="section-head--split">
              <div>
                <h2 id="close-h">Book your next journey</h2>
                <p className="t-lead">Call {PHONE_1}, or send the journey online.</p>
              </div>
              <a className="btn btn--primary" href="#book">{MAIN_ACTION}<Arrow /></a>
            </div>
            <div className="close__media"><Img p={photos.close} sizes="(max-width: 639px) 200vw, 100vw" /></div>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <Logo footer />
                <p className="footer__lede">Chauffeur cars for airports, business and events, from Crayford, Kent.</p>
              </div>
              <div className="span-2 footer__col"><h3>Services</h3><ul>
                <li><a href="#services">Airports</a></li>
                <li><a href="#services">Corporate</a></li>
                <li><a href="#services">Weddings</a></li>
              </ul></div>
              <div className="span-2 footer__col"><h3>Company</h3><ul>
                <li><a href="#fleet">Fleet</a></li>
                <li><a href="#standard">Our standard</a></li>
                <li><a href="#how">Booking</a></li>
              </ul></div>
              <div className="span-2 footer__col"><h3>Call</h3><ul>
                <li><a href={PHONE_1_HREF}>{PHONE_1}</a></li>
                <li><a href={PHONE_2_HREF}>{PHONE_2}</a></li>
              </ul></div>
              <div className="span-2 footer__col"><h3>Office</h3><ul>
                <li><a href={`mailto:${EMAIL}`}>Email bookings</a></li>
                <li>Thames Road</li>
                <li>Crayford, DA1 4RQ</li>
              </ul></div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Prestige Transportation Limited &nbsp; <a href="/privacy/">Privacy</a></span>
              <a className="credits" href="/credits/">Photographs via Wikimedia Commons</a>
            </div>
          </div>
        </div>
      </footer>

      <nav className="actionbar" aria-label="Quick actions">
        <a className="btn btn--secondary" href={PHONE_1_HREF}>Call us</a>
        <a className="btn btn--primary" href="#book">{MAIN_ACTION}</a>
      </nav>
    </>
  );
}
