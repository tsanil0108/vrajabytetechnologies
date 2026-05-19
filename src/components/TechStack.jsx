import '../styles/TechStack.css';

const TECH = [
  { name: 'React.js',    category: 'Frontend',         icon: '⚛️', bg: 'rgba(124, 58, 237, 0.15)' },
  { name: 'Spring Boot', category: 'Backend',          icon: '🍃', bg: 'rgba(0, 200, 120, 0.12)' },
  { name: 'Java',        category: 'Language',         icon: '☕', bg: 'rgba(255, 120, 0, 0.12)' },
  { name: 'PostgreSQL',  category: 'Database',         icon: '🐘', bg: 'rgba(50, 100, 200, 0.12)' },
  { name: 'Docker',      category: 'DevOps',           icon: '🐳', bg: 'rgba(0, 150, 255, 0.12)' },
  { name: 'GitHub',      category: 'Version Control',  icon: '🐙', bg: 'rgba(167, 139, 250, 0.10)' },
  { name: 'JavaScript',  category: 'Language',         icon: '🟨', bg: 'rgba(255, 220, 0, 0.10)' },
  { name: 'REST API',    category: 'Architecture',     icon: '🔌', bg: 'rgba(124, 58, 237, 0.12)' },
  { name: 'Tailwind CSS',category: 'Styling',          icon: '🎨', bg: 'rgba(0, 210, 255, 0.10)' },
  { name: 'MySQL',       category: 'Database',         icon: '🗄️', bg: 'rgba(0, 100, 200, 0.12)' },
  { name: 'Linux',       category: 'OS',               icon: '🐧', bg: 'rgba(255, 200, 0, 0.10)' },
  { name: 'Nginx',       category: 'Server',           icon: '🟢', bg: 'rgba(0, 200, 100, 0.10)' },
];

const ROW1 = [...TECH.slice(0, 6), ...TECH.slice(0, 6)];
const ROW2 = [...TECH.slice(6), ...TECH.slice(6)];

function TechPill({ tech }) {
  return (
    <div className="tech-pill">
      <div className="tech-pill-icon" style={{ background: tech.bg }}>
        {tech.icon}
      </div>
      <div>
        <div className="tech-pill-name">{tech.name}</div>
        <div className="tech-pill-category">{tech.category}</div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="techstack" id="tech">
      <div className="techstack-glow" />

      <div className="techstack-header">
        <div className="section-tag" style={{ display: 'inline-flex' }}>✦ Tech Stack</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginTop: 12 }}>
          Technologies We <span>Master</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '8px auto 0' }}>
          Industry-grade tools and frameworks to build powerful, scalable software solutions.
        </p>
      </div>

      {/* Tech workspace image */}
      <div className="techstack-banner" style={{ padding: '0 24px' }}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
          alt="Tech workspace"
          loading="lazy"
        />
      </div>

      {/* Animated ticker */}
      <div className="tech-slider-wrap">
        <div className="tech-track tech-track-row1">
          {ROW1.map((tech, i) => <TechPill tech={tech} key={`r1-${i}`} />)}
        </div>
        <div className="tech-track tech-track-row2">
          {ROW2.map((tech, i) => <TechPill tech={tech} key={`r2-${i}`} />)}
        </div>
      </div>
    </section>
  );
}