import { useState } from 'react';
import '../styles/Contact.css';

const SERVICES = [
  'Business Website',
  'Portfolio Website',
  'Full Stack Development',
  'Billing System',
  'E-Commerce Store',
  'Admin Dashboard',
  'CRM System',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Info */}
          <div className="contact-info">
            <div className="section-tag">✦ Get In Touch</div>
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
                    <a href="mailto:vrajabytetechnologies@gmail.com">
                      vrajabytetechnologies@gmail.com
                    </a>
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

            {/* Socials */}
            <div className="contact-socials">
              {[
                { icon: '🐙', label: 'GitHub', href: '#' },
                { icon: '💼', label: 'LinkedIn', href: '#' },
                { icon: '🐦', label: 'Twitter', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  className="social-link"
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-card">
            <div className="form-title">Start Your Project</div>
            <div className="form-subtitle">
              Fill in your details and we'll reach out to discuss your project.
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Raj Sharma"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="raj@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Service Type *</label>
                <select
                  className="form-select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell us about your project — what you need, timeline, budget..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                🚀 Send Message
              </button>

              {submitted && (
                <div className="form-success">
                  ✓ Message sent! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}