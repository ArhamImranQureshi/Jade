'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// Elements that fade/slide up as they enter the viewport.
// Keep this list in sync with the `.js-motion` rule in globals.css.
const REVEAL = [
  '.consult-promo > :not(h2)', '.consult-card', '.club-more', '.svc', '.sec-head', '.tile', '.review', '.concern', '.t-grid', '.loc', '.j-card', '.plan', '.item',
  '.prog', '.feature', '.steps > div', '.why-grid > div', '.who > div', '.side',
  '.chips', '.cadence', '.journey', '.video-embed', '.cta-band .container > *',
  '.hero-woman img', '.hero-in > :not(h1)', '.page-hero-in > :not(h1)', '.train-hero .inner > :not(h1)',
].join(',');

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Motion() {
  const pathname = usePathname();

  // Smooth scrolling + auto-hiding header (once)
  useEffect(() => {
    window.__motionReady = true;
    if (reduced()) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      anchors: { offset: -90 },
    });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const header = document.querySelector('.site-header');
    lenis.on('scroll', ({ scroll, direction }) => {
      if (!header) return;
      const menuOpen = document.querySelector('.nav.open');
      header.classList.toggle('is-scrolled', scroll > 20);
      header.classList.toggle('is-hidden', !menuOpen && scroll > 240 && direction === 1);
    });

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Per-page animations (re-run on every route change)
  useEffect(() => {
    if (reduced()) return;
    let ctx;
    let splits = [];
    const cleanups = [];
    let cancelled = false;

    const setup = () => {
      if (cancelled) return;
      window.__lenis?.scrollTo(0, { immediate: true });

      ctx = gsap.context(() => {
        // 1. Headlines: line-by-line mask reveal
        document.querySelectorAll('main h1, main h2').forEach((el) => {
          let words;
          try {
            const s = new SplitType(el, { types: 'lines,words', tagName: 'span' });
            splits.push(s);
            words = s.words;
          } catch (e) { words = null; }
          if (!words || !words.length) { el.classList.add('is-in'); return; }
          gsap.set(words, { yPercent: 115 });
          el.classList.add('is-in');
          ScrollTrigger.create({
            trigger: el, start: 'top 92%', once: true,
            onEnter: () => gsap.to(words, { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: 0.07 }),
          });
        });

        // 2. Everything else: staggered fade-up
        ScrollTrigger.batch(REVEAL, {
          start: 'top 91%', once: true,
          onEnter: (els) => gsap.fromTo(els,
            { opacity: 0, y: 44 },
            {
              opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.1, overwrite: true,
              onComplete: () => els.forEach((e) => { e.classList.add('is-in'); gsap.set(e, { clearProps: 'opacity,transform' }); }),
            }),
        });

        // 3. Hero: slow zoom + drift as you scroll
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
          gsap.fromTo(heroBg, { scale: 1.02, yPercent: 0 }, {
            scale: 1.18, yPercent: 9, ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          });
        }

        // 3b. Hero portrait drifts up slightly faster than the background (depth)
        const woman = document.querySelector('.hero-woman');
        if (woman) {
          gsap.fromTo(woman, { yPercent: 0 }, {
            yPercent: -7, ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          });
        }

        // 4. Inner page heroes: background parallax
        document.querySelectorAll('.page-hero:not(.light), .train-hero').forEach((h) => {
          gsap.fromTo(h, { backgroundPositionY: '35%' }, {
            backgroundPositionY: '65%', ease: 'none',
            scrollTrigger: { trigger: h, start: 'top top', end: 'bottom top', scrub: true },
          });
        });

        // 5. Split-section images: frame opens up (clip-path) while the photo zooms out, tied to scroll
        document.querySelectorAll('.split-img').forEach((box) => {
          gsap.fromTo(box, { clipPath: 'inset(16% 12% 16% 12% round 6px)' }, {
            clipPath: 'inset(0% 0% 0% 0% round 4px)', ease: 'none',
            scrollTrigger: { trigger: box, start: 'top 95%', end: 'top 30%', scrub: true },
          });
          const img = box.querySelector('img');
          if (img) gsap.fromTo(img, { scale: 1.25 }, {
            scale: 1, ease: 'none',
            scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom 35%', scrub: true },
          });
        });

        // 6. Statement text: words light up one by one as you scroll
        document.querySelectorAll('[data-scrub]').forEach((el) => {
          const s = new SplitType(el, { types: 'words', tagName: 'span' });
          splits.push(s);
          gsap.fromTo(s.words, { opacity: 0.14 }, {
            opacity: 1, stagger: 0.12, ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 48%', scrub: true },
          });
        });

        // 7. Treatment tiles: photo drifts inside its frame (depth)
        document.querySelectorAll('.tile-bg').forEach((bg) => {
          gsap.fromTo(bg, { yPercent: -7 }, {
            yPercent: 7, ease: 'none',
            scrollTrigger: { trigger: bg.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });

        // 8. Marquees run on GSAP and speed up / reverse with your scroll velocity
        const marquees = [...document.querySelectorAll('.marquee')].map((m) => ({
          tracks: m.querySelectorAll('.marquee-track'),
          dur: m.classList.contains('big') ? 46 : 32, // seconds per loop at normal speed
          pct: 0,
        }));
        let dir = 1;
        const speed = { v: 1 };
        const wrap = gsap.utils.wrap(-100, 0);
        const run = (time, delta) => {
          marquees.forEach((m) => {
            m.pct = wrap(m.pct - (100 / m.dur) * (delta / 1000) * speed.v);
            gsap.set(m.tracks, { xPercent: m.pct });
          });
        };
        gsap.ticker.add(run);
        const off = window.__lenis?.on('scroll', (l) => {
          const v = Number.isFinite(l.velocity) ? l.velocity : 0;
          if (Math.abs(v) > 0.05) dir = v < 0 ? -1 : 1;
          const ts = dir * (1 + Math.min(Math.abs(v) * 0.45, 7));
          gsap.to(speed, { v: ts, duration: 0.5, overwrite: true });
        });
        cleanups.push(() => { off && off(); gsap.ticker.remove(run); });

        // 9. Horizontal scroll (reviews), desktop only.
        // Uses CSS `position: sticky` (see .hscroll-pin) instead of ScrollTrigger's pin, because pin wraps the
        // section in an extra element, which makes React fail to remove it when you navigate to another page.
        const mm = gsap.matchMedia();
        mm.add('(min-width: 900px)', () => {
          const undo = [];
          document.querySelectorAll('.hscroll').forEach((sec) => {
            const view = sec.querySelector('.hscroll-view');
            const track = sec.querySelector('.hscroll-track');
            if (!view || !track) return;
            const dist = () => Math.max(0, track.scrollWidth - view.clientWidth);
            const size = () => { sec.style.height = dist() + window.innerHeight + 120 + 'px'; };
            size();
            ScrollTrigger.addEventListener('refreshInit', size);
            gsap.to(track, {
              x: () => -dist(), ease: 'none',
              scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true },
            });
            undo.push(() => { ScrollTrigger.removeEventListener('refreshInit', size); sec.style.height = ''; });
          });
          return () => undo.forEach((fn) => fn());
        });
        cleanups.push(() => mm.revert());
      });

      // Layout shifts as images/fonts load
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh, { once: true });
      setTimeout(refresh, 600);
    };

    const loaderActive = document.documentElement.classList.contains('js-loader') && !window.__loaderDone;
    if (loaderActive) window.addEventListener('loader:done', setup, { once: true });
    else setup();

    return () => {
      cancelled = true;
      window.removeEventListener('loader:done', setup);
      cleanups.forEach((fn) => fn());
      ctx && ctx.revert();
      splits.forEach((s) => s.revert());
      splits = [];
      document.querySelectorAll('.is-in').forEach((e) => e.classList.remove('is-in'));
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
