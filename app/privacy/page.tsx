import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy: Prestige Transportation',
  description: 'How Prestige Transportation Limited uses the details you send with a booking request.',
};

/* Plain privacy notice for the booking form. Prestige management should have it checked before launch. */
export default function Privacy() {
  return (
    <main id="top" className="legal">
      <section className="section legal__page" aria-labelledby="privacy-h">
        <div className="wrap">
          <p><a className="link" href="/">Back to Prestige Transportation</a></p>
          <h1 id="privacy-h">Privacy</h1>
          <div className="measure stack-4">
            <p>Prestige Transportation Limited runs prestigetransports.co.uk. This notice explains what we do with the details you send us.</p>
            <h2>What we collect</h2>
            <p>When you send a booking request we receive your name, email address, phone number, the date and time of the journey, the pick-up and the destination.</p>
            <h2>Why we use it</h2>
            <p>We use these details only to quote for, confirm and carry out your journey, and to contact you about it. We do not sell them or use them for advertising.</p>
            <h2>How long we keep it</h2>
            <p>We keep booking records for as long as we need them for the journey, our accounts and the law, then delete them.</p>
            <h2>Your rights</h2>
            <p>You can ask to see, correct or delete the details we hold about you by writing to <a className="link" href="mailto:info@prestigetransports.co.uk">info@prestigetransports.co.uk</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
