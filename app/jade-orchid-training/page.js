import Link from 'next/link';
import { SectionHead } from '@/components/Sections';
import { SITE } from '@/lib/data';

export const metadata = { title: 'Jade Orchid Training', description: 'Clinician-led education, practical skills training and business mentoring for dental professionals, aesthetic clinicians and aspiring clinic owners.' };

const PROGS = [
  {
    slug: 'dental-cpd-emergency-training', t: 'Dental CPD & Emergency Training', img: '/img/train-dental.jpg',
    lead: 'Practical, hands-on training for dental teams that builds confidence and saves lives.',
    list: ['Basic Life Support (Dental & General)', 'Emergency First Aid at Work (EFAW)', 'Medical Emergencies in Dentistry', 'CPR & AED Training', 'Enhanced Hands-on Verifiable CPD', 'Bespoke Practice Training'],
  },
  {
    slug: 'regenerative-aesthetic-education', t: 'Regenerative & Aesthetic Education', img: '/img/train-regen.jpg',
    lead: 'Master advanced treatments and deliver natural, confident results.',
    list: ['PRP (Platelet Rich Plasma)', 'PRF (Platelet Rich Fibrin)', 'Polynucleotides', 'Skin Boosters', 'Biofillers', 'Consultation & Treatment Planning', 'Patient Assessment & Selection', 'Safe Clinical Practice & Complication Management'],
  },
  {
    slug: 'start-grow-your-clinic', t: 'Start & Grow Your Clinic', img: '/img/train-grow.jpg',
    lead: 'Practical mentoring to help you build, launch and scale a successful business.',
    list: ['Starting Your Clinic', 'Choosing Treatments & Devices', 'Product & Supplier Selection', 'Pricing & Profitability', 'Branding & Marketing', 'Social Media Strategy', 'Patient Journey Design', 'Clinical Documentation', 'Business Systems', 'Growth & Scaling', 'One-to-One Mentoring'],
  },
];

const WHY = [
  ['🎓', 'Real clinical experience', 'Taught by experienced clinicians who understand real practice.'],
  ['👥', 'Hands-on learning', 'Practical sessions with realistic scenarios.'],
  ['🏅', 'Verifiable CPD', "Enhanced CPD that's recognised and verifiable."],
  ['🤝', 'Ongoing support', "We're with you long after your training ends."],
];

const WHO = [['🦷', 'Dentists'], ['👤', 'Dental Nurses'], ['🦷', 'Therapists & Hygienists'], ['🩺', 'Doctors & Nurses'], ['✿', 'Aesthetic Practitioners'], ['🏢', 'Clinic Owners'], ['🚀', 'Start-ups & Individuals']];

export default function Training() {
  return (
    <>
      <section className="train-hero">
        <div className="container">
          <div className="inner">
            <p className="eyebrow">Jade Orchid Training</p>
            <h1>Learn with Confidence. <em>Grow with Purpose.</em></h1>
            <p>Clinician-led education, practical skills training and business mentoring for dental professionals, aesthetic clinicians and aspiring clinic owners.</p>
            <div className="badges">
              <span>Clinician-led<br />experts</span><span>Hands-on<br />practical BLS</span><span>Verifiable<br />CPD</span><span>Supporting<br />your growth</span>
            </div>
            <div className="btns">
              <a href="#programmes" className="btn btn-dark">Explore Our Training →</a>
              <Link href="/contact/" className="btn btn-line">Book a Training Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="programmes">
        <div className="container">
          <SectionHead eyebrow="Learn. Practise. Apply. Grow." title="Our Training Programmes" />
          <div className="progs">
            {PROGS.map((p) => (
              <article className="prog" key={p.t}>
                <img src={p.img} alt="" loading="lazy" />
                <div className="body">
                  <h3>{p.t}</h3>
                  <p>{p.lead}</p>
                  <ul>{p.list.map((x) => <li key={x}>{x}</li>)}</ul>
                  <Link href={`/jade-orchid-training/${p.slug}/`} className="link-arrow">Learn more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Dental CPD &amp; Emergency Training</p>
            <h2>Practical training designed by clinicians, for clinicians.</h2>
            <p>We believe confidence comes from practical experience — not simply completing an online course.</p>
            <p>Our hands-on training helps dental teams meet regulatory requirements whilst developing the knowledge and practical skills needed to respond confidently in real clinical situations.</p>
            <p>Although our expertise is rooted in dentistry, many of our emergency training programmes are also available to businesses, schools, organisations and individuals.</p>
            <p className="cadence">Helping teams stay compliant, prepared and confident.</p>
          </div>
          <div className="split-img"><img src="/img/train-dental.jpg" alt="Hands-on CPR training with a mannequin, AED and resuscitator" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container split rev">
          <div className="split-img"><img src="/img/train-laptop.jpg" alt="Laptop showing Jade Orchid Training on a desk with books and notes" /></div>
          <div>
            <p className="eyebrow">Regenerative &amp; Aesthetic Education</p>
            <h2>Learn the science. Master the technique.</h2>
            <p>Develop practical skills in today&apos;s most advanced regenerative and aesthetic treatments through clinician-led, hands-on education focused on patient safety and exceptional results.</p>
            <p className="cadence">Designed to help practitioners introduce advanced treatments with confidence.</p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container why">
          <div>
            <h2>Why Choose Jade Orchid Training?</h2>
            <p><strong>We don&apos;t just help you gain a certificate — we help you gain the confidence to use it.</strong></p>
            <p>Our training combines real clinical experience, practical skills and ongoing support so you can deliver exceptional care and build a successful future.</p>
            <p className="script">Learn. Practise. Apply. Grow.</p>
          </div>
          <div className="why-grid">
            {WHY.map(([ic, t, d]) => (
              <div key={t}><div className="ic" aria-hidden="true">{ic}</div><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead title="Who We Train" />
          <div className="who">
            {WHO.map(([ic, t]) => <div key={t}><span aria-hidden="true">{ic}</span>{t}</div>)}
          </div>
        </div>
      </section>

      <section className="invest">
        <div className="container invest-in">
          <div>
            <h2>Invest in your skills.<br />Invest in your future.</h2>
            <p>Whether you&apos;re meeting requirements, expanding your skills or building your clinic — we&apos;re here to help you succeed.</p>
            <div className="btns">
              <Link href="/contact/" className="btn btn-light">View Upcoming Courses</Link>
              <Link href="/contact/" className="btn btn-light">Book a Discovery Call</Link>
            </div>
            <p className="tel">📞 <a href={`tel:${SITE.phoneIntl.replace(/\s/g, '')}`}>{SITE.phoneIntl}</a></p>
          </div>
          <div className="trio">
            <div><strong>PRACTICAL</strong><span>Skills you can use immediately</span></div>
            <div><strong>PROFESSIONAL</strong><span>Training that builds confidence</span></div>
            <div><strong>PROGRESSIVE</strong><span>Develop your skills and your future</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
