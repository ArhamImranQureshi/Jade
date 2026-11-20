'use client';
import { useState } from 'react';
import { SITE } from '@/lib/data';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [`Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, `Email: ${f.get('email')}`, `Preferred clinic: ${f.get('clinic')}`, '', f.get('message')].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Consultation enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit}>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="field">
        <label htmlFor="clinic">Preferred clinic</label>
        <select id="clinic" name="clinic" defaultValue="">
          <option value="">No preference</option>
          <option>Leicester – Whitehouse Dental Surgery</option>
          <option>Leicester – Bright Smiles Dental Practice</option>
          <option>Wolverhampton – AK Clinics</option>
        </select>
      </div>
      <div className="field"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" /></div>
      <button className="btn btn-dark" type="submit">Book Consultation</button>
      {sent && <p role="status" style={{ marginTop: 14, color: 'var(--muted)' }}>Your email app should open with your message. If it doesn&apos;t, email us at {SITE.email}.</p>}
    </form>
  );
}
