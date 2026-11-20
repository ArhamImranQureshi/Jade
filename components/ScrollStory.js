'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { t: 'Listen', d: 'We take time to understand you.', img: '/img/clinic.jpg', alt: 'A clinician and client talking through skin concerns' },
  { t: 'See', d: 'Advanced skin analysis helps us look beyond the surface.', img: '/img/clinic2.jpg', alt: 'A client having her skin analysed with the OPATRA DOME' },
  { t: 'Plan', d: 'A personalised strategy designed around your skin.', img: '/img/reception.jpg', alt: 'A treatment plan on a reception desk with white orchids' },
  { t: 'Transform', d: 'Supporting healthier, more confident skin through clinically guided care.', img: '/img/t-micro.jpg', alt: 'A client receiving a SkinPen facial' },
];

// Pinned scroll-story: the section sticks to the screen while the steps change as you scroll.
// On small screens / reduced motion it falls back to a normal stacked layout (CSS only).
export default function ScrollStory() {
  const root = useRef(null);
  const bar = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const i = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length));
          setActive(i);
          if (bar.current) bar.current.style.transform = `scaleY(${Math.max(0.04, self.progress)})`;
        },
      });
      return () => st.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="story" ref={root} id="our-clinic-story" aria-label="Understanding before treatment">
      <div className="story-pin">
        <div className="container story-grid">
          <div className="story-text">
            <p className="eyebrow">Understanding before treatment.</p>
            <ol className="story-steps">
              {STEPS.map((s, i) => (
                <li key={s.t} className={i === active ? 'is-active' : ''} onMouseEnter={() => {}}>
                  <span className="story-n">0{i + 1}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="story-media" aria-hidden="false">
            <span className="story-bar"><span ref={bar} /></span>
            {STEPS.map((s, i) => (
              <img key={s.img} src={s.img} alt={s.alt} className={i === active ? 'is-active' : ''} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
