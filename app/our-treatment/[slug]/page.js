import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TREATMENTS, CATEGORIES } from '@/lib/data';
import { GLANCE, JOURNEY } from '@/lib/glance';
import { CtaBand } from '@/components/Sections';

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = TREATMENTS.find((x) => x.slug === slug);
  return t ? { title: t.title, description: t.desc } : {};
}

const STAT_LABELS = [['time', 'Treatment time'], ['downtime', 'Downtime'], ['results', 'Results seen'], ['lasts', 'Results last']];

export default async function Detail({ params }) {
  const { slug } = await params;
  const idx = TREATMENTS.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const t = TREATMENTS[idx];
  const cat = CATEGORIES.find((c) => c.slug === t.cat);
  const related = TREATMENTS.filter((x) => x.slug !== t.slug)
    .sort((a, b) => (b.cat === t.cat) - (a.cat === t.cat))
    .slice(0, 3);
  const next = TREATMENTS[(idx + 1) % TREATMENTS.length];

  return (
    <>
      <section className="d-hero">
        <div className="container d-hero-grid">
          <div className="d-hero-text">
            <p className="crumbs"><Link href="/our-treatment/">Our Treatments</Link> / <Link href={`/our-treatment/#${cat.slug}`}>{cat.title}</Link></p>
            <h1>{t.title}</h1>
            <p className="d-lead">{t.desc}</p>
            <div className="btns">
              <Link href="/contact/" className="btn btn-dark">Book a consultation</Link>
              <a href="#whats-included" className="btn btn-line">What&apos;s included</a>
            </div>
            <p className="d-tag">Created by science. Perfected by you.</p>
          </div>
          <div className="split-img tall d-hero-img"><img src={t.img} alt={t.title} /></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">About this treatment</p>
            {t.intro.map((p) => <p key={p} className="d-intro">{p}</p>)}
            <ul className="chips" aria-label="Includes">
              {t.topics.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <aside className="side">
            <h3>Benefits</h3>
            <ul>{t.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
            <Link href="/contact/" className="btn btn-dark">Book a consultation</Link>
          </aside>
        </div>
      </section>

      <section className="section alt" id="whats-included">
        <div className="container">
          <div className="sec-head"><p className="eyebrow">What&apos;s included</p><h2>Choose your treatment</h2></div>
          <div className="svc-list">
            {t.items.map((i) => {
              const g = GLANCE[i.name];
              return (
                <article className="svc" key={i.name}>
                  <div className="svc-main">
                    <h3>{i.name}</h3>
                    <p>{i.desc}</p>
                    {i.price && <p className="svc-price">{i.price}</p>}
                  </div>
                  {g && (
                    <dl className="glance">
                      {STAT_LABELS.map(([k, label]) => (
                        <div key={k}><dt>{label}</dt><dd>{g[k]}</dd></div>
                      ))}
                    </dl>
                  )}
                  <Link href="/contact/" className="btn btn-line svc-btn">Book</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head center"><p className="eyebrow">Your Jade Orchid journey</p><h2>Courses of care, not cosmetic moments.</h2></div>
          <ol className="journey wide">
            {JOURNEY.map(([a, b]) => <li key={a}><strong>{a}</strong><span>{b}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="sec-head center"><p className="eyebrow">Explore more</p><h2>You may also like</h2></div>
          <div className="t-grid">
            {related.map((r) => (
              <article key={r.slug} className="t-card">
                <img src={r.img} alt={r.title} loading="lazy" />
                <div className="body">
                  <p className="cat">{CATEGORIES.find((c) => c.slug === r.cat)?.title}</p>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <Link href={`/our-treatment/${r.slug}/`} className="link-arrow">Learn more →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center-btn"><Link href={`/our-treatment/${next.slug}/`} className="link-arrow">Next: {next.title} →</Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
