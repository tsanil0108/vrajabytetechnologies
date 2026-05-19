import '../styles/Footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  { label: 'Business Websites', href: '#services' },
  { label: 'Full Stack Dev', href: '#services' },
  { label: 'Billing Systems', href: '#services' },
  { label: 'E-Commerce', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
];

const SOCIALS = [
  { icon: '🐙', label: 'GitHub', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
];

const handleNav = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* CTA Banner with image */}
        <div className="footer-banner">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
            alt="Office workspace"
            loading="lazy"
          />
          <div className="footer-banner-text">
            <h3>Ready to Build Something Amazing?</h3>
            <p>Let's turn your idea into a powerful digital product.</p>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleNav(e, '#home')}>
              <div className="footer-logo-icon">⚡</div>
              <span className="footer-logo-text">Vraja<span>Byte</span></span>
            </a>
            <p className="footer-brand-desc">
              We build modern, scalable digital products — from websites and dashboards
              to full-stack business applications. Your vision, our code.
            </p>
            <div className="footer-tagline">Build • Innovate • Grow</div>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="footer-social"
                   title={s.label} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              {QUICK_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={(e) => handleNav(e, l.href)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {SERVICE_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={(e) => handleNav(e, l.href)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="tel:+917304603314">📞 +91 7304603314</a>
              <a href="mailto:vrajabytetechnologies@gmail.com">
                📧 vrajabytetechnologies@gmail.com
              </a>
              <a href="#contact" onClick={(e) => handleNav(e, '#contact')}>
                🚀 Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} <span>VrajaByte Technologies</span>. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}