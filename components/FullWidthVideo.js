'use client';
import { useEffect, useRef } from 'react';

// Edge-to-edge looping video. Muted autoplay, pauses off-screen, still frame for "reduce motion".
export default function FullWidthVideo({ src, poster }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.pause(); return; }
    const play = () => v.play().catch(() => {});
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? play() : v.pause()), { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="fullvideo">
      <video ref={ref} autoPlay muted loop playsInline preload="metadata" poster={poster} aria-hidden="true" tabIndex={-1}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
