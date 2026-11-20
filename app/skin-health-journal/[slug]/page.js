import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/lib/content';
import { CtaBand } from '@/components/Sections';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.dek } : {};
}

export default async function Article({ params }) {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = ARTICLES.filter((x) => x.slug !== a.slug);

  return (
    <>
      <section className="art-hero" style={{ '--hero-img': `url(${a.img})` }}>
        <div className="container">
          <p className="crumbs"><Link href="/skin-health-journal/">Skin Health Journal</Link> / {a.cat}</p>
          <h1>{a.title}</h1>
          <p className="art-dek">{a.dek}</p>
          <p className="art-meta">{a.cat} · {a.read}</p>
        </div>
      </section>

      <article className="section">
        <div className="container art-body">
          {a.sections.map(([h, paras]) => (
            <section key={h}>
              <h2>{h}</h2>
              {paras.map((p) => <p key={p}>{p}</p>)}
            </section>
          ))}
          <p className="art-note">This article is general information and is not a substitute for a consultation. Treatments are recommended individually after an assessment.</p>
          <div className="btns"><Link href="/contact/" className="btn btn-dark">Book a consultation</Link><Link href="/our-treatment/" className="btn btn-line">Explore treatments</Link></div>
        </div>
      </article>

      <section className="section alt">
        <div className="container">
          <div className="sec-head center"><p className="eyebrow">Keep reading</p><h2>More from the journal</h2></div>
          <div className="journal two">
            {more.map((j) => (
              <Link key={j.slug} href={`/skin-health-journal/${j.slug}/`} className="j-card">
                <img src={j.img} alt="" loading="lazy" />
                <div className="j-body"><h3>{j.title}</h3><p>{j.dek}</p><span className="link-arrow">Read article →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
