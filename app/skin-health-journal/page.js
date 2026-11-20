import Link from 'next/link';
import { PageHero, JournalCards, SectionHead } from '@/components/Sections';

export const metadata = { title: 'Skin Health Journal' };

export default function Journal() {
  return (
    <>
      <PageHero eyebrow="Skin Health Journal" title="Explore Insights" className="light" img="/img/journal-1.jpg">
        <p>Clinically-led guidance on skin, treatments and everyday skin health.</p>
      </PageHero>
      <section className="section">
        <div className="container">
          <JournalCards />
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHead title="Your skin journey starts here" sub="Personalised care. Evidence-based treatments. Real results, built gradually." />
          <div className="center-btn" style={{ marginTop: 0 }}><Link href="/contact/" className="btn btn-dark">Book a Consultation</Link></div>
        </div>
      </section>
    </>
  );
}
