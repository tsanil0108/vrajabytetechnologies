import '../styles/WhyProcess.css';

const REASONS = [
  { icon: '🎯', title: 'Modern UI/UX', desc: 'Pixel-perfect designs with premium animations and interactions.' },
  { icon: '⚡', title: 'Fast Performance', desc: 'Optimized code ensuring lightning-fast load times and smooth UX.' },
  { icon: '🔒', title: 'Secure Applications', desc: 'Industry best practices for security, auth, and data protection.' },
  { icon: '📈', title: 'Scalable Architecture', desc: 'Built to grow — microservices, cloud-ready, high availability.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at startup-friendly pricing without compromise.' },
  { icon: '🛠️', title: 'Maintenance & Support', desc: '24/7 support, bug fixes, and ongoing feature development.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why">
      <div className="container">
        <div className="why-content">
          {/* Left */}
          <div className="why-left">
            <div className="section-tag">✦ Why Choose Us</div>
            <h2 className="section-title">
              Built for<br />
              <span>Your Growth</span>
            </h2>

            {/* Team / office image */}
            <div className="why-image-wrap">
              <img
                className="why-image"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Our team at work"
                loading="lazy"
              />
            </div>

            <p className="section-subtitle">
              We don't just write code — we craft digital experiences that help
              your business stand out, scale up, and succeed.
            </p>

            <div className="why-highlight">
              <div className="why-highlight-icon">🏆</div>
              <div>
                <div className="why-highlight-text">50+ successful projects delivered</div>
                <div className="why-highlight-sub">
                  Across insurance, finance, food tech, e-commerce &amp; more
                </div>
              </div>
            </div>

            <div className="why-highlight" style={{ marginTop: 12 }}>
              <div className="why-highlight-icon">⭐</div>
              <div>
                <div className="why-highlight-text">100% client satisfaction rate</div>
                <div className="why-highlight-sub">
                  We don't stop until you're completely happy with the result
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="why-grid">
            {REASONS.map((r) => (
              <div className="why-card" key={r.title}>
                <span className="why-card-icon">{r.icon}</span>
                <div className="why-card-title">{r.title}</div>
                <div className="why-card-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}