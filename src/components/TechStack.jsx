import '../styles/Techstack.css';
import SectionSlider from './Sectionslider';

const SLIDER_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
  'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1600&q=80',
];

const TECH = [
  { name: 'React.js',     category: 'Frontend',         icon: '⚛️', bg: 'rgba(124, 58, 237, 0.15)' },
  { name: 'Spring Boot',  category: 'Backend',          icon: '🍃', bg: 'rgba(0, 200, 120, 0.12)'  },
  { name: 'Node.js',      category: 'Backend',          icon: '🟩', bg: 'rgba(34, 197, 94, 0.12)'  },
  { name: 'PHP',          category: 'Backend',          icon: '🐘', bg: 'rgba(79, 93, 149, 0.12)'  },
  { name: 'Java',         category: 'Language',         icon: '☕', bg: 'rgba(255, 120, 0, 0.12)'  },
  { name: 'JavaScript',   category: 'Language',         icon: '🟨', bg: 'rgba(255, 220, 0, 0.10)'  },
  { name: 'TypeScript',   category: 'Language',         icon: '🔷', bg: 'rgba(37, 99, 235, 0.10)'  },
  { name: 'Python',       category: 'Language',         icon: '🐍', bg: 'rgba(53, 114, 165, 0.12)' },
  { name: 'PostgreSQL',   category: 'Database',         icon: '🐘', bg: 'rgba(50, 100, 200, 0.12)' },
  { name: 'MySQL',        category: 'Database',         icon: '🗄️', bg: 'rgba(0, 100, 200, 0.12)'  },
  { name: 'MongoDB',      category: 'Database',         icon: '🍃', bg: 'rgba(34, 197, 94, 0.10)'  },
  { name: 'Docker',       category: 'DevOps',           icon: '🐳', bg: 'rgba(0, 150, 255, 0.12)'  },
  { name: 'GitHub',       category: 'Version Control',  icon: '🐙', bg: 'rgba(167, 139, 250, 0.10)'},
  { name: 'Git',          category: 'Version Control',  icon: '🔧', bg: 'rgba(255, 90, 0, 0.10)'   },
  { name: 'REST API',     category: 'Architecture',     icon: '🔌', bg: 'rgba(124, 58, 237, 0.12)' },
  { name: 'Tailwind CSS', category: 'Styling',          icon: '🎨', bg: 'rgba(0, 210, 255, 0.10)'  },
  { name: 'Bootstrap',    category: 'Styling',          icon: '🅱️', bg: 'rgba(139, 92, 246, 0.10)' },
  { name: 'Linux',        category: 'OS',               icon: '🐧', bg: 'rgba(255, 200, 0, 0.10)'  },
  { name: 'Nginx',        category: 'Server',           icon: '🟢', bg: 'rgba(0, 200, 100, 0.10)'  },
  { name: 'Firebase',     category: 'Cloud',            icon: '🔥', bg: 'rgba(255, 170, 0, 0.10)'  },
  { name: 'AWS',          category: 'Cloud',            icon: '☁️', bg: 'rgba(255, 153, 0, 0.10)'  },
];

const ROW1 = [...TECH.slice(0, 11), ...TECH.slice(0, 11)];
const ROW2 = [...TECH.slice(11), ...TECH.slice(11)];

function TechPill({ tech }) {
  return (
    <div className="tech-pill">
      <div className="tech-pill-icon" style={{ background: tech.bg }}>{tech.icon}</div>
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
      <SectionSlider images={SLIDER_IMAGES} interval={5500} />
      <div className="techstack-glow" />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="techstack-header">
          <div className="section-tag" style={{ display: 'inline-flex' }}>✦ Tech Stack</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: 12 }}>
            Technologies We <span>Master</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '8px auto 0' }}>
            Industry-grade tools and frameworks to build powerful, scalable software solutions.
          </p>
        </div>

        <div className="tech-slider-wrap">
          <div className="tech-track tech-track-row1">
            {ROW1.map((tech, i) => <TechPill tech={tech} key={`r1-${i}`} />)}
          </div>
          <div className="tech-track tech-track-row2">
            {ROW2.map((tech, i) => <TechPill tech={tech} key={`r2-${i}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}