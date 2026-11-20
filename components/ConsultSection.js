'use client';
import { useState } from 'react';
import { SITE, LOCATIONS } from '@/lib/data';

// "Your Free Consultation" two-step form with the new-client offer.
// Submitting opens the visitor's email app (mailto). Swap for a form service (Formspree etc.) if wanted.
export default function ConsultSection() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [v, setV] = useState({ first: '', last: '', email: '', phone: '', clinic: '' });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  function next(e) {
    e.preventDefault();
    setStep(2);
  }

  function send(e) {
    e.preventDefault();
    const body = [
      'New client free consultation request (20% off new client offer)',
      '',
      `Name: ${v.first} ${v.last}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Preferred clinic: ${v.clinic || 'No preference'}`,
    ].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Free consultation request')}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  return (
    <section className="consult" id="free-consultation">
      <div className="container consult-in">
        <div className="consult-promo">
          <p className="eyebrow" style={{ color: '#e8cfa4' }}>New client</p>
          <p className="consult-off">20% <span>off</span></p>
          <h2>Your Free Consultation</h2>
          <p>Every journey begins with understanding. Tell us a little about you and we&apos;ll arrange a free consultation at the clinic that suits you.</p>
          <p className="consult-fine">New client promotion cannot be combined with other sales or promotions.</p>
        </div>

        <div className="consult-card">
          {done ? (
            <div className="consult-done" role="status">
              <h3>Thank you{v.first ? `, ${v.first}` : ''}.</h3>
              <p>Your email app should open with your request. If it doesn&apos;t, email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone}.</p>
            </div>
          ) : (
            <>
              <p className="consult-steps" aria-label={`Step ${step} of 2`}>
                <span className={step >= 1 ? 'on' : ''}>1</span><i /><span className={step >= 2 ? 'on' : ''}>2</span>
              </p>
              {step === 1 ? (
                <form onSubmit={next}>
                  <h3>Schedule your free consultation</h3>
                  <div className="field"><label htmlFor="c-first">First name</label><input id="c-first" required autoComplete="given-name" value={v.first} onChange={set('first')} /></div>
                  <div className="field"><label htmlFor="c-last">Last name</label><input id="c-last" required autoComplete="family-name" value={v.last} onChange={set('last')} /></div>
                  <button className="btn btn-dark" type="submit">Next →</button>
                </form>
              ) : (
                <form onSubmit={send}>
                  <h3>How can we reach you?</h3>
                  <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" required autoComplete="email" value={v.email} onChange={set('email')} /></div>
                  <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" required autoComplete="tel" value={v.phone} onChange={set('phone')} /></div>
                  <div className="field">
                    <label htmlFor="c-clinic">Location</label>
                    <select id="c-clinic" required value={v.clinic} onChange={set('clinic')}>
                      <option value="" disabled>Select location</option>
                      {LOCATIONS.map((l) => <option key={l.name} value={`${l.name}, ${l.lines.join(', ')}`}>{l.area} – {l.name}</option>)}
                    </select>
                  </div>
                  <div className="consult-btns">
                    <button className="btn btn-line" type="button" onClick={() => setStep(1)}>← Previous</button>
                    <button className="btn btn-dark" type="submit">Send</button>
                  </div>
                </form>
              )}
              <p className="consult-note">Results may vary per client. No treatment is promised to provide permanent results, and no guarantee is provided or implied.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
