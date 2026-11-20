'use client';
import { useEffect, useRef } from 'react';

// Background hero video: muted, looping, plays only while visible, and respects "reduce motion".
export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause(); // shows the poster frame instead
      return;
    }

    const play = () => v.play().catch(() => {});
    play();
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? play() : v.pause()), { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/img/hero-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
