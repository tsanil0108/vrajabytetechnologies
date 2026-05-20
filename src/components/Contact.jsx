import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import SectionSlider from './Sectionslider';

const SLIDER_IMAGES = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
];

const SERVICES = [
  'Business Website', 'Portfolio Website', 'Full Stack Development',
  'Billing System', 'E-Commerce Store', 'Admin Dashboard', 'CRM System', 'Other',
];

const EMAILJS_SERVICE_ID  = 'service_s157tkm';
const EMAILJS_TEMPLATE_ID = 'template_fw1i5at';
const EMAILJS_PUBLIC_KEY  = 'eOZoZTm93KEmnzfUx';

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, service: form.service, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => setError('Something went wrong. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section" id="contact">
      <SectionSlider images={SLIDER_IMAGES} interval={6500} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-grid">

          {/* Left Info */}
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Let's Build<br />
              <span>Something Great</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Have a project in mind? We'd love to hear about it. Drop us a message
              and we'll get back to you within 24 hours.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">
                    <a href="tel:+917304603314">+91 7304603314</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">
                    <a href="mailto:vrajabytetechnologies@gmail.com">vrajabytetechnologies@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">⏱️</div>
                <div>
                  <div className="contact-item-label">Response Time</div>
                  <div className="contact-item-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              {[
                { icon: '🐙', label: 'GitHub',    href: '#' },
                { icon: '💼', label: 'LinkedIn',  href: '#' },
                { icon: '🐦', label: 'Twitter',   href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
              ].map((s) => (
                <a key={s.label} className="social-link" href={s.href} title={s.label} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-card">
            <div className="form-title">Start Your Project</div>
            <div className="form-subtitle">Fill in your details and we'll reach out to discuss your project.</div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input className="form-input" type="text" name="name" placeholder="Raj Sharma"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" name="email" placeholder="raj@company.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Service Type *</label>
                <select className="form-select" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea className="form-textarea" name="message"
                  placeholder="Tell us about your project — what you need, timeline, budget..."
                  value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="form-success">Message sent! We'll get back to you within 24 hours.</div>
              )}
              {error && (
                <div style={{ color: 'red', marginTop: 12, fontSize: 14 }}>{error}</div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}