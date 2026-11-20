import Link from 'next/link';
import { SectionHead, LocationCards, ConcernGrid } from '@/components/Sections';
import ScrollStory from '@/components/ScrollStory';

export const metadata = { title: 'Inside Jade Orchid' };

const FEATURES = [
  ['👤', 'Personalised care', 'Tailored treatment plans designed around your skin and your goals.'],
  ['✿', 'Advanced treatments', 'Evidence-based solutions focused on skin health and rejuvenation.'],
  ['✔', 'Clinician-led', 'Care delivered by experienced healthcare professionals.'],
  ['♡', 'Long-term skin health', 'We focus on healthier skin today and for the future.'],
  ['↗', 'Support at every step', 'Ongoing advice, skincare guidance and a team who care.'],
];

export default function Inside() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Inside Jade Orchid</p>
            <h1>Created by science. <em>Perfected by you.</em></h1>
            <p>Jade Orchid Aesthetics was founded on the belief that healthy, confident skin is not created through quick fixes, trends, or over-treatment — but through <strong>clinical knowledge</strong>, <strong>personalised care</strong>, and treatments delivered at the right time for your skin.</p>
            <p>Across our clinics in Leicester and Wolverhampton, our medically-led team provides structured treatment pathways designed to support long-term skin health, <strong>skin rejuvenation</strong>, and natural-looking results.</p>
            <p>We combine <strong>advanced aesthetic treatments</strong>, <strong>evidence-based skincare</strong>, and <strong>clinically guided treatment planning</strong> to help patients improve skin quality, confidence, and overall skin wellness over time.</p>
            <div className="btns">
              <Link href="/our-treatment/" className="btn btn-dark">View Treatments →</Link>
              <Link href="/contact/" className="btn btn-line">Book Consultation →</Link>
            </div>
          </div>
          <div className="split-img"><img src="/img/inside-hero.jpg" alt="Jade Orchid Aesthetics: Evidence. Experience. Excellence." /></div>
        </div>
      </section>

      <div className="features">
        {FEATURES.map(([ic, t, d]) => (
          <div className="feature" key={t}>
            <div className="ic" aria-hidden="true">{ic}</div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <section className="section alt" id="clinics">
        <div className="container">
          <SectionHead eyebrow="Our Clinics" title="Three locations. One philosophy." sub="Delivering exceptional aesthetic care across the Midlands and beyond." />
          <LocationCards />
          <div className="marquee big" aria-label="Skin, Science, Care, Confidence">
            {[0, 1].map((n) => (
              <ul className="marquee-track" key={n} aria-hidden={n === 1 ? 'true' : undefined}>
                <li>Skin</li><li>Science</li><li>Care</li><li>Confidence</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="philosophy">
        <div className="container split">
          <div className="split-img tall"><img src="/img/journey.jpg" alt="Five stones labelled Assessment, Strategy, Treatment, Skincare and Maintenance" /></div>
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2>Healthy, confident skin is built gradually — not rushed.</h2>
            <p>Rather than chasing trends or focusing on one-off cosmetic procedures, we take a long-term approach to skin health. Skin is living and constantly evolving, influenced by age, hormones, nutrition, lifestyle, environment and the way it is cared for.</p>
            <p>That is why we look beyond a single treatment.</p>
            <p>We consider the factors influencing your skin from the inside out, while supporting it externally through professional skincare, clinically guided treatments and regenerative approaches where appropriate.</p>
            <p>Our aim is not simply to treat what we see today, but to understand your skin, strengthen it and create a strategy that can evolve with you.</p>
            <p className="eyebrow" style={{ marginTop: '1.6rem' }}>Your Jade Orchid Journey</p>
            <ol className="journey">
              {['Assessment', 'Strategy', 'Treatment', 'Skincare', 'Maintenance'].map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p>Every stage has a purpose. We assess before we treat, build a strategy around your individual skin, and review and refine that strategy as your skin changes.</p>
            <p className="cadence">Courses of care, not cosmetic moments.<br />Progression, not impulse.<br />Refinement, not reinvention.</p>
            <p>Because lasting skin confidence is rarely created in a single appointment. It develops through knowledge, consistency, clinical guidance and care that evolves with you.</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="clinicians">
        <div className="container split rev">
          <div className="split-img tall"><img src="/img/clinician.jpg" alt="Lead clinician at Jade Orchid Aesthetics" /></div>
          <div>
            <p className="eyebrow">Our Clinicians</p>
            <h2>Led by experienced clinicians.</h2>
            <p>Jade Orchid Aesthetics is led by experienced clinicians who combine advanced training with a shared commitment to thoughtful, evidence-based aesthetic care. Rather than working as isolated practitioners, our clinicians collaborate across all partnership locations to maintain consistent standards, structured treatment pathways, and patient-centred care.</p>
            <h3 className="who-h">Rubina Khan</h3>
            <p className="role">Founder, Jade Orchid Aesthetics | Advanced Aesthetics Clinician (Leicester)</p>
            <p>As founder of Jade Orchid Aesthetics in Leicester, Rubina leads the clinical framework across the partnership’s locations. Advanced-trained in aesthetics and grounded in extensive clinical experience, she develops the structured treatment pathways that guide patient care. Her work focuses on regenerative strategies, facial balance, and progressive treatment planning — delivering results that evolve naturally over time rather than appearing overnight.</p>
            <h3 className="who-h">Amrit Kaur</h3>
            <p className="role">Founder, AK Clinics | Advanced Aesthetics Clinician (Wolverhampton)</p>
            <p>Founder of AK Clinics in Wolverhampton, Amrit works in active clinical partnership across all locations. Advanced-trained and detail-focused, she strengthens the group’s commitment to staged treatment courses and consistent clinical standards. Her approach combines anatomical precision with a practical understanding of patients’ daily lives, particularly for professionals and mothers seeking subtle, high-quality outcomes without overcorrection.</p>
            <h3 className="who-h">Ravi Moraji</h3>
            <p className="role">Clinical Practitioner | Injectables &amp; Facial Anatomy (Maxillofacial Background)</p>
            <p>With a background in dentistry and experience within maxillofacial departments, Ravi brings advanced expertise in facial anatomy to injectable and filler treatments. His clinical precision and safety-focused approach ensure that every injectable procedure is anatomically informed, proportionate, and positioned within a wider treatment strategy.</p>
          </div>
        </div>
      </section>

      <section className="section" id="our-clinic">
        <div className="container split">
          <div>
            <p className="eyebrow">Reset. Rejuvenate. Restore.</p>
            <h2>Our Clinic. <em>Your Space.</em></h2>
            <p><strong>Every journey begins with understanding.</strong></p>
            <p>Relax in a calm, welcoming consultation space where advanced skin analysis, clinical expertise and genuine conversation come together.</p>
            <p>Using the OPATRA DOME Skin Analysis System, we look beyond the surface to better understand your skin. Together, we create a personalised plan shaped around your concerns, lifestyle and long-term skin goals.</p>
          </div>
          <div className="split-img"><img src="/img/clinic.jpg" alt="A clinician reviewing an OPATRA DOME skin analysis with a client" /></div>
        </div>
      </section>

      <ScrollStory />

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Find your starting point" title="What would you like to improve?" sub="Find the right starting point for your skin, hair or aesthetic goals." />
          <ConcernGrid />
          <div className="center-btn"><Link href="/our-treatment/" className="btn btn-dark">Explore all treatments →</Link></div>
        </div>
      </section>
    </>
  );
}
