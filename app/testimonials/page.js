import { SectionHead, TestimonialCards, CtaBand } from '@/components/Sections';

export const metadata = { title: 'Testimonials' };

export default function Testimonials() {
  return (
    <>
      <section className="section alt" style={{ paddingBottom: 50 }}>
        <div className="container">
          <SectionHead as="h1" eyebrow="Testimonials" title="What Our Clients Say" sub="Real experiences. Real journeys. Real results." />
          <div className="prose" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginInline: 'auto' }}>At Jade Orchid Aesthetics, we believe healthy skin is built through personalised care, evidence-based treatments and realistic expectations.</p>
            <p style={{ marginInline: 'auto' }}>Every skin journey is different, and we are proud to support our clients through each stage of their treatment, whether they are seeking rejuvenation, skin confidence, wellbeing support or specialist cancer care therapies.</p>
            <p style={{ marginInline: 'auto' }}>The comments below reflect the experiences of clients who have trusted us with their skin health and wellbeing.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container"><TestimonialCards /></div>
      </section>
      <CtaBand label="BOOK A CONSULTATION" />
    </>
  );
}
