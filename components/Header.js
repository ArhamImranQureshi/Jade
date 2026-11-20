'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CATEGORIES, TREATMENTS } from '@/lib/data';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/inside-jade-orchid/', label: 'Inside Jade Orchid' },
  { href: '/our-treatment/', label: 'Our Treatment', dropdown: true },
  { href: '/jade-orchid-training/', label: 'Jade Orchid Training' },
  { href: '/skin-club/', label: 'Skin Club' },
  { href: '/skin-health-journal/', label: 'Skin Health Journal' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const path = usePathname() || '/';
  const close = () => { setOpen(false); setSub(false); };
  const active = (h) => (h === '/' ? path === '/' : path.startsWith(h));

  return (
    <header className="site-header">
      <a href="#content" className="skip">Skip to content</a>
      <div className="container header-in">
        <Link href="/" className="brand" onClick={close} aria-label="Jade Orchid Aesthetics, home">
          <img src="/img/old/Logo-removebg-preview-2-e1772796519966.png" alt="Jade Orchid Aesthetics" width="72" height="72" />
        </Link>

        <nav className={'nav' + (open ? ' open' : '')} aria-label="Main">
          {NAV.map((n) =>
            n.dropdown ? (
              <div key={n.href} className={'nav-item has-sub' + (sub ? ' sub-open' : '')}>
                <div className="nav-row">
                  <Link href={n.href} className={active(n.href) ? 'on' : ''} onClick={close}>{n.label}</Link>
                  <button className="sub-toggle" aria-label="Show treatments" aria-expanded={sub} onClick={() => setSub(!sub)}>▾</button>
                </div>
                <div className="mega">
                  {CATEGORIES.map((c) => (
                    <div key={c.slug} className="mega-col">
                      <Link href={`/our-treatment/#${c.slug}`} className="mega-title" onClick={close}>{c.title}</Link>
                      {TREATMENTS.filter((t) => t.cat === c.slug).map((t) => (
                        <Link key={t.slug} href={`/our-treatment/${t.slug}/`} onClick={close}>{t.title}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={n.href} className="nav-item">
                <Link href={n.href} className={active(n.href) ? 'on' : ''} onClick={close}>{n.label}</Link>
              </div>
            )
          )}
          <Link href="/contact/" className="btn btn-dark nav-cta" onClick={close}>Book Consultation</Link>
        </nav>

        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
