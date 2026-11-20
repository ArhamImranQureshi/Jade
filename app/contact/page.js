import { SectionHead, LocationCards } from '@/components/Sections';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <section className="section alt">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Keep in touch</p>
            <h1>Book your <em>consultation</em></h1>
            <p>Not sure where to start? Tell us about your skin and goals and we&apos;ll recommend the right first step.</p>
            <ul className="info-list">
              <li><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><strong>Phone</strong><a href={`tel:${SITE.phoneIntl.replace(/\s/g, '')}`}>{SITE.phone}</a></li>
              <li><strong>Opening hours</strong>{SITE.hours.map(([d, t]) => <span key={d} style={{ display: 'block' }}>{d}: {t}</span>)}</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Find us" title="Our Clinics" />
          <ContactMap />
          <div style={{ height: 56 }} />
          <LocationCards />
        </div>
      </section>
    </>
  );
}
