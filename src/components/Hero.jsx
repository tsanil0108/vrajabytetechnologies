import { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

import bg from '../assets/bg.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';

// ── Replace these with your own project images ──
const BG_IMAGES = [bg, bg1, bg2, bg3, bg4];

const TYPING_WORDS = [
  'Business Websites',
  'Billing Systems',
  'Web Applications',
  'Full Stack Solutions',
];

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${4 + Math.random() * 6}s`,
  size: `${1 + Math.random() * 2}px`,
}));

const SLIDE_DURATION = 5000;

function useTyping(words, speed = 90, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIdx];
    if (!deleting && charIdx < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setText(currentWord.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, speed);
    } else if (!deleting && charIdx === currentWord.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setText(currentWord.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % words.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTyping(TYPING_WORDS);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef(null);

  const goToNext = () => {
    if (sliding) return;
    setPrev(current);
    setSliding(true);
    setCurrent((c) => (c + 1) % BG_IMAGES.length);
    setTimeout(() => { setPrev(null); setSliding(false); }, 1000);
  };

  const goTo = (idx) => {
    if (sliding || idx === current) return;
    setPrev(current);
    setSliding(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setSliding(false); }, 1000);
  };

  useEffect(() => {
    timerRef.current = setInterval(goToNext, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [current, sliding]);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">

      {/* Background Slider */}
      <div className="hero-slider">
        {BG_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? ' slide-active' : ''}${i === prev ? ' slide-exit' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-slider-overlay" />
      </div>

      {/* Violet blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Particles */}
      <div className="hero-particles">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            ✦ Full Stack Software Company
          </div>

          <h1 className="hero-heading">
            Building{' '}
            <span className="hero-heading-gradient">Powerful Digital</span>{' '}
            Solutions for Modern Businesses
          </h1>

          <p className="hero-subheading">
            We create scalable websites, billing systems, dashboards, and modern
            web applications designed for business growth.
          </p>

          {/* Typing */}
          <div className="hero-typing-wrap">
            <span className="hero-typing-label">We build →</span>
            <div className="hero-typing-text">
              {typedText}
              <span className="cursor" />
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary" onClick={scrollToContact}>
              🚀 Start Your Project
            </a>
            <a href="#projects" className="btn-secondary" onClick={scrollToProjects}>
              View Projects ↓
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { val: '50+', label: 'Projects Delivered' },
              { val: '30+', label: 'Happy Clients' },
              { val: '3+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="hero-stat-value"><span>{s.val}</span></div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="slider-dots">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}