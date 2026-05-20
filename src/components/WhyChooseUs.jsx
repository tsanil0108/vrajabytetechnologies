import '../styles/Whyprocess.css';
import SectionSlider from './Sectionslider';

const SLIDER_IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
];

const REASONS = [
  { icon: '🎯', title: 'Modern UI/UX',         desc: 'Pixel-perfect designs with premium animations and interactions.'             },
  { icon: '⚡', title: 'Fast Performance',      desc: 'Optimized code ensuring lightning-fast load times and smooth UX.'          },
  { icon: '🔒', title: 'Secure Applications',   desc: 'Industry best practices for security, auth, and data protection.'          },
  { icon: '📈', title: 'Scalable Architecture', desc: 'Built to grow — microservices, cloud-ready, high availability.'            },
  { icon: '💰', title: 'Affordable Pricing',    desc: 'Premium quality at startup-friendly pricing without compromise.'           },
  { icon: '🛠️', title: 'Maintenance & Support', desc: '24/7 support, bug fixes, and ongoing feature development.'                },
];

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why">
      <SectionSlider images={SLIDER_IMAGES} interval={6000} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="why-content">
          {/* Left */}
          <div className="why-left">
            <div className="section-tag">✦ Why Choose Us</div>
            <h2 className="section-title">
              Built for<br />
              <span>Your Growth</span>
            </h2>

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
                <div className="why-highlight-sub">Across insurance, finance, food tech, e-commerce &amp; more</div>
              </div>
            </div>

            <div className="why-highlight" style={{ marginTop: 12 }}>
              <div className="why-highlight-icon">⭐</div>
              <div>
                <div className="why-highlight-text">100% client satisfaction rate</div>
                <div className="why-highlight-sub">We don't stop until you're completely happy with the result</div>
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