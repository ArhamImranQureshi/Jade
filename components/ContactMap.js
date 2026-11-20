'use client';
import { useState } from 'react';
import { LOCATIONS } from '@/lib/data';

// Clinic picker with an embedded Google Map for each location.
export default function ContactMap() {
  const [i, setI] = useState(0);
  const l = LOCATIONS[i];
  const q = encodeURIComponent(`${l.name}, ${l.lines.join(', ')}`);

  return (
    <div>
      <div className="map-tabs" role="tablist" aria-label="Choose a clinic">
        {LOCATIONS.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={n === i} className={'cat-btn' + (n === i ? '' : ' off')} onClick={() => setI(n)}>
            {x.area} – {x.name}
          </button>
        ))}
      </div>
      <div className="map-frame">
        <iframe
          key={q}
          title={`Map: ${l.name}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="map-addr">
        <strong>{l.name}</strong> — {l.lines.join(', ')} ·{' '}
        <a className="link-arrow" href={l.map} target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>
      </p>
    </div>
  );
}
