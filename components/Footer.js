import Link from 'next/link';
import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container foot-grid">
        <div>
          <img src="/img/old/Logo-removebg-preview-2-e1772796519966.png" alt="Jade Orchid Aesthetics" width="84" height="84" className="foot-logo" />
          <p className="foot-about">
            Clinically-led aesthetic treatments focused on skin health, regeneration, and natural-looking results through advanced skincare, regenerative aesthetics, and personalised treatment pathways.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/inside-jade-orchid/">Inside Jade Orchid</Link></li>
            <li><Link href="/our-treatment/">Our Treatment</Link></li>
            <li><Link href="/jade-orchid-training/">Jade Orchid Training</Link></li>
            <li><Link href="/skin-club/">Skin Club</Link></li>
            <li><Link href="/skin-health-journal/">Skin Health Journal</Link></li>
            <li><Link href="/testimonials/">Testimonials</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Opening Hours</h4>
          <ul className="hours">
            {SITE.hours.map(([d, t]) => (
              <li key={d}><strong>{d}</strong><span>{t}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <p>Clinically-led aesthetic treatments across: Leicester • Wolverhampton</p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><a href={`tel:${SITE.phoneIntl.replace(/\s/g, '')}`}>{SITE.phone}</a></p>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© 2026 Jade Orchid Aesthetics Ltd. All Rights Reserved. Powered By Pixel Perfekt Solutions</span>
        <span className="social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="X (Twitter)">𝕏</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="YouTube">▶</a>
        </span>
      </div>
    </footer>
  );
}
