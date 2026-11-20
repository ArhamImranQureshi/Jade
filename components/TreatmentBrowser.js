'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CATEGORIES, TREATMENTS } from '@/lib/data';

export default function TreatmentBrowser() {
  const [cat, setCat] = useState('all');

  useEffect(() => {
    const apply = () => {
      const h = window.location.hash.replace('#', '');
      if (CATEGORIES.some((c) => c.slug === h)) setCat(h);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const list = cat === 'all' ? TREATMENTS : TREATMENTS.filter((t) => t.cat === cat);
  const title = (slug) => CATEGORIES.find((c) => c.slug === slug)?.title;

  return (
    <>
      <h2 style={{ textAlign: 'center', fontSize: '1.4rem', letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: '1.4rem' }}>Explore our treatments</h2>
      <div className="cat-bar" role="tablist" aria-label="Treatment categories">
        <button className={'cat-btn' + (cat === 'all' ? '' : ' off')} onClick={() => setCat('all')}>All treatments</button>
        {CATEGORIES.map((c) => (
          <button key={c.slug} id={c.slug} className={'cat-btn' + (cat === c.slug ? '' : ' off')} onClick={() => setCat(c.slug)}>
            {c.slug === 'laser-hair-removal' ? 'Laser Hair Reduction' : c.title}
          </button>
        ))}
      </div>
      {cat !== 'all' && (() => {
        const c = CATEGORIES.find((x) => x.slug === cat);
        return (
          <p className="cat-info">
            <strong>{c.title}</strong>
            {c.desc}<br /><em>{c.services}</em>
          </p>
        );
      })()}
      <div className="t-grid">
        {list.map((t) => (
          <article key={t.slug} className="t-card">
            <img src={t.img} alt={t.title} loading="lazy" />
            <div className="body">
              <p className="cat">{title(t.cat)}</p>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <Link href={`/our-treatment/${t.slug}/`} className="link-arrow">Learn more →</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
