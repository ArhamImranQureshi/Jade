import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TRAINING } from '@/lib/content';
import { SITE } from '@/lib/data';
import { CtaBand } from '@/components/Sections';

export function generateStaticParams() {
  return TRAINING.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = TRAINING.find((x) => x.slug === slug);
  return t ? { title: t.title, description: t.lead } : {};
}

export default async function TrainingDetail({ params }) {
  const { slug } = await params;
  const idx = TRAINING.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const t = TRAINING[idx];
  const others = TRAINING.filter((x) => x.slug !== t.slug);

  return (
    <>
      <section className="d-hero">
        <div className="container d-hero-grid">
          <div className="d-hero-text">
            <p className="crumbs"><Link href="/jade-orchid-training/">Jade Orchid Training</Link> / {t.title}</p>
            <h1>{t.title}</h1>
            <p className="d-lead">{t.lead}</p>
            <div className="btns">
              <Link href="/contact/" className="btn btn-dark">Book a Training Consultation</Link>
              <a href={`tel:${SITE.phoneIntl.replace(/\s/g, '')}`} className="btn btn-line">Call {SITE.phoneIntl}</a>
            </div>
          </div>
          <div className="split-img tall d-hero-img"><img src={t.img} alt={t.title} /></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">About this training</p>
            {t.intro.map((p) => <p key={p} className="d-intro">{p}</p>)}
            <p className="cadence" style={{ marginTop: '1.4rem' }}>{t.closing}</p>
          </div>
          <aside className="side">
            <h3>Who it&apos;s for</h3>
            <ul>{t.who.map((w) => <li key={w}>{w}</li>)}</ul>
            <Link href="/contact/" className="btn btn-dark">Book a Discovery Call</Link>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="sec-head"><p className="eyebrow">What you&apos;ll cover</p><h2>Courses &amp; topics</h2></div>
          <ul className="topic-grid">
            {t.list.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="sec-head center"><p className="eyebrow">Explore more</p><h2>Other programmes</h2></div>
          <div className="t-grid two">
            {others.map((o) => (
              <article key={o.slug} className="t-card">
                <img src={o.img} alt="" loading="lazy" />
                <div className="body">
                  <h3>{o.title}</h3>
                  <p>{o.lead}</p>
                  <Link href={`/jade-orchid-training/${o.slug}/`} className="link-arrow">Learn more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Invest in your skills. Invest in your future." text="Whether you're meeting requirements, expanding your skills or building your clinic — we're here to help you succeed." label="Book a Discovery Call" />
    </>
  );
}
