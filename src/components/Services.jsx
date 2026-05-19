import { useEffect, useRef } from 'react';
import '../styles/Services.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Business Websites',
    desc: 'Professional, conversion-focused business websites that represent your brand and drive growth.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  },
  {
    icon: '🎨',
    title: 'Portfolio Websites',
    desc: 'Stunning portfolio sites that showcase your work with premium animations and modern design.',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    desc: 'End-to-end web application development using React, Spring Boot, and modern tech stacks.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    icon: '⚡',
    title: 'Modern Web Applications',
    desc: 'Scalable, high-performance web apps built with latest technologies and best practices.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    icon: '📊',
    title: 'Billing Systems',
    desc: 'Complete billing and invoicing software tailored for your business with automated workflows.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'Feature-rich online stores with secure payment gateways, inventory management, and analytics.',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80',
  },
  {
    icon: '📱',
    title: 'Responsive UI/UX Design',
    desc: 'Beautiful, mobile-first interfaces that deliver exceptional user experiences across all devices.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-card').forEach((card, i) => {
              card.style.animationDelay = `${i * 0.08}s`;
              card.classList.add('animate-fade-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="section-tag">✦ Our Services</div>
          <h2 className="section-title">
            Everything You Need to<br />
            <span>Build &amp; Scale</span>
          </h2>
          <p className="section-subtitle">
            From concept to deployment — we deliver premium digital products that
            help businesses grow, automate, and succeed.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, idx) => (
            <div className="service-card" key={svc.title}>
              {/* Image Banner */}
              <div className="service-img-wrap">
                <img
                  className="service-img"
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="service-body">
                <div className="service-number">{String(idx + 1).padStart(2, '0')}</div>
                <div className="service-icon-wrap">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <div className="service-arrow">Explore Service →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}