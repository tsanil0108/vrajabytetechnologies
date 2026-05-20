// SectionSlider.jsx — smooth crossfade background slideshow
// Use: <SectionSlider images={[...]} interval={5000} />
import { useState, useEffect, useRef } from 'react';
import '../styles/SectionSlider.css';

export default function SectionSlider({ images = [], interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (images.length < 2) return;
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
    return () => clearInterval(timer.current);
  }, [images.length, interval]);

  return (
    <div className="section-slider" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={i}
          className={`section-slide${i === current ? ' ss-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="section-slide-overlay" />
    </div>
  );
}