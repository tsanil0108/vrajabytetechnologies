import '../styles/Projects.css';

const PROJECTS = [
  {
    category: 'Insurance',
    title: 'Insurance Management System',
    desc: 'Policy management, claims tracking, client portal with automated notifications.',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    color: '#7c3aed',
    accentColor: 'rgba(124, 58, 237, 0.30)',
  },
  {
    category: 'Finance',
    title: 'Billing Software',
    desc: 'Invoice generation, payment tracking, GST reports, and automated reminders.',
    tech: ['React', 'Java', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
    color: '#a78bfa',
    accentColor: 'rgba(167, 139, 250, 0.30)',
  },
  {
    category: 'Food & Beverage',
    title: 'Restaurant Management',
    desc: 'POS system, kitchen display, table management, and sales analytics dashboard.',
    tech: ['React', 'Spring Boot', 'Docker'],
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    color: '#c4b5fd',
    accentColor: 'rgba(196, 181, 253, 0.30)',
  },
  {
    category: 'E-Commerce',
    title: 'E-Commerce Store',
    desc: 'Full-featured online store with cart, Razorpay integration, and admin panel.',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80',
    color: '#7c3aed',
    accentColor: 'rgba(124, 58, 237, 0.30)',
  },
  {
    category: 'Analytics',
    title: 'Admin Dashboard',
    desc: 'Real-time analytics, user management, role permissions, and data visualizations.',
    tech: ['React', 'Java', 'Chart.js'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    color: '#a78bfa',
    accentColor: 'rgba(167, 139, 250, 0.30)',
  },
  {
    category: 'Business',
    title: 'CRM System',
    desc: 'Lead pipeline, customer tracking, email integration, and sales performance reports.',
    tech: ['React', 'Spring Boot', 'Docker'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    color: '#c4b5fd',
    accentColor: 'rgba(196, 181, 253, 0.30)',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <div className="section-tag">✦ What We Build</div>
            <h2 className="section-title">
              Modern Software<br />
              <span>Solutions</span>
            </h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: 340, textAlign: 'right', fontSize: 15 }}>
            Real products we've shipped — functional, scalable, and built to last.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.title}>
              {/* Preview with real image */}
              <div className="project-preview">
                <img
                  className="project-preview-img"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button className="project-demo-btn">🔗 View Demo</button>
                </div>
              </div>

              {/* Info */}
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="tech-badges">
                  {project.tech.map((t) => (
                    <span className="tech-badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}