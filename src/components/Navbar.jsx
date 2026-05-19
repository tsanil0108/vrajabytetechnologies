import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/Logoo.png";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (e, href) => {
    e.preventDefault();

    setMobileOpen(false);
    setActiveLink(href);

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* LOGO */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleNav(e, '#home')}
          >
            <div className="nav-logo-icon">
              <img src={logo} alt="VrajaByte Logo" />
            </div>

            <h2 className="nav-logo-text">
              Vraja<span>Byte</span>
            </h2>
          </a>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={activeLink === item.href ? 'active' : ''}
                  onClick={(e) => handleNav(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <div className="nav-cta">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => handleNav(e, '#contact')}
            >
              Start Project →
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`nav-mobile ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {/* CLOSE BUTTON */}
        <button
          className="nav-mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* MOBILE LOGO */}
        <div className="nav-mobile-logo">
          <div className="nav-logo-icon">
            <img src={logo} alt="VrajaByte Logo" />
          </div>

          <h2 className="nav-logo-text">
            Vraja<span>Byte</span>
          </h2>
        </div>

        {/* MOBILE LINKS */}
        <nav className="nav-mobile-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeLink === item.href ? 'active' : ''}
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE CTA */}
        <a
          href="#contact"
          className="btn-primary nav-mobile-cta"
          onClick={(e) => handleNav(e, '#contact')}
        >
          Start Project →
        </a>
      </div>

      {/* OVERLAY */}
      <div
        className={`nav-overlay ${mobileOpen ? 'show' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}