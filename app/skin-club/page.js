import Link from 'next/link';
import { PageHero } from '@/components/Sections';
import SkinClubPlans from '@/components/SkinClubPlans';

export const metadata = { title: 'Skin Club' };

export default function SkinClub() {
  return (
    <>
      <PageHero eyebrow="Skin Club" title="Join Our Skin Club" img="/img/philosophy.jpg">
        <p>Professional skincare works best when it becomes part of a consistent routine — not just an occasional treatment.</p>
      </PageHero>
      <section className="section">
        <div className="container">
          <SkinClubPlans />
        </div>
      </section>
      <section className="section alt">
        <div className="container split">
          <div>
            <h2>Join Our Skin Club</h2>
            <p>The Jade Orchid Skin Club has been created for patients who want ongoing support, exclusive member benefits, priority access, and a more structured approach to long-term skin health and maintenance.</p>
            <p>Whether you are maintaining results, investing in skin rejuvenation, or simply wanting healthier-looking skin year-round, our memberships provide professional guidance, exclusive savings, and continued support throughout your skin journey.</p>
            <p><strong className="cadence">Invest in your skin consistently — and the results will follow.</strong></p>
            <div className="btns"><Link href="/contact/" className="btn btn-dark">Join Our Skin Club</Link></div>
          </div>
          <div>
            <h2>Benefits</h2>
            <ul className="benefit-list">
              {['Exclusive Member-Only Discounts', 'Priority Booking Access', 'Personalised Skincare Consultation', 'Member-Only Events and Workshops', 'Access to Premium Product Trials'].map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
