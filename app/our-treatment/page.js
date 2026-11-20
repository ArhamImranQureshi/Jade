import { PageHero } from '@/components/Sections';
import TreatmentBrowser from '@/components/TreatmentBrowser';
import Link from 'next/link';

export const metadata = { title: 'Our Treatments' };

export default function OurTreatment() {
  return (
    <>
      <PageHero eyebrow="Chosen with purpose. Not trends." title="Our Treatments" img="/img/treatments-hero.jpg"
        actions={<div className="btns"><a href="#explore" className="btn btn-light">Explore Treatments</a></div>}>
        <p><strong>Your skin is individual. Your treatment plan should be too.</strong></p>
        <p>At Jade Orchid Aesthetics, we don&apos;t begin with a treatment. We begin with you.</p>
        <p>We consider your skin, your concerns, your lifestyle and what you want to achieve before recommending a course of care.</p>
        <p>From advanced skin treatments and regenerative aesthetics to hair restoration, laser hair reduction, professional skincare and subtle aesthetic refinement, our approach brings together clinical expertise, carefully selected technologies and personalised care.</p>
        <p>Because the goal isn&apos;t simply to treat what you see today. It&apos;s to understand your skin, improve its quality and support results that last.</p>
      </PageHero>
      <section className="section" id="explore">
        <div className="container">
          <TreatmentBrowser />
          <div className="center-btn"><Link href="/contact/" className="btn btn-dark">Book a Consultation</Link></div>
        </div>
      </section>
    </>
  );
}
