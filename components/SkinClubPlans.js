import Link from 'next/link';
import { CLUB_PLANS } from '@/lib/data';

// Membership "packages" cards, shared by the home page and the Skin Club page.
export default function SkinClubPlans() {
  return (
    <div className="club-teaser">
      {CLUB_PLANS.map((p) => (
        <article key={p.name} className={'plan' + (p.feat ? ' feat' : '')}>
          {p.feat && <span className="plan-flag">Most complete</span>}
          <h3>{p.name}</h3>
          <p className="price">{p.price}</p>
          <p>{p.lead}</p>
          <ul>{p.list.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="small">{p.foot}</p>
          <Link href="/contact/" className="btn btn-dark">Join Membership</Link>
        </article>
      ))}
    </div>
  );
}
