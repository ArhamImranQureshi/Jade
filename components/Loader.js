'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Short first-visit loader (home page, once per browser tab session).
export default function Loader() {
  const root = useRef(null);
  const num = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains('js-loader')) return;

    const counter = { v: 0 };
    const done = () => {
      try { sessionStorage.setItem('jo-visited', '1'); } catch (e) {}
      window.__loaderDone = true;
      html.classList.remove('js-loader');
      window.dispatchEvent(new Event('loader:done'));
    };

    const tl = gsap.timeline({ onComplete: done });
    tl.fromTo('.loader-logo', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .to(counter, { v: 100, duration: 1.9, ease: 'power2.inOut', onUpdate: () => { if (num.current) num.current.textContent = Math.round(counter.v); } }, 0)
      .to(bar.current, { scaleX: 1, duration: 1.9, ease: 'power2.inOut' }, 0)
      .to('.loader-inner', { opacity: 0, y: -12, duration: 0.45, ease: 'power2.in' }, '>0.1')
      .to(root.current, { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, '>-0.1');

    return () => tl.kill();
  }, []);

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader-inner">
        <img className="loader-logo" src="/img/old/Logo-removebg-preview-2-e1772796519966.png" alt="" width="96" height="96" />
        <span className="loader-num"><span ref={num}>0</span>%</span>
      </div>
      <div className="loader-bar"><span ref={bar} /></div>
    </div>
  );
}
