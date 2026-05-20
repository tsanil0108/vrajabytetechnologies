import '../styles/Whyprocess.css';
import SectionSlider from './Sectionslider';

const SLIDER_IMAGES = [
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&q=80',
];

const STEPS = [
  { icon: '💬', title: 'Requirement\nDiscussion', desc: 'Understand your goals, target audience, and technical needs.',               number: '01' },
  { icon: '🎨', title: 'UI/UX\nDesign',           desc: 'Wireframes, prototypes, and pixel-perfect Figma designs.',                   number: '02' },
  { icon: '💻', title: 'Development',              desc: 'Clean, scalable code with modern frameworks and best practices.',            number: '03' },
  { icon: '🧪', title: 'Testing',                  desc: 'Rigorous QA, performance, and cross-device compatibility testing.',          number: '04' },
  { icon: '🚀', title: 'Deployment',               desc: 'Seamless production launch with monitoring and post-deploy support.',        number: '05' },
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <SectionSlider images={SLIDER_IMAGES} interval={5500} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="process-header">
          <div className="section-tag">✦ Our Process</div>
          <h2 className="section-title">
            How We <span>Build</span>
          </h2>
          <p className="section-subtitle">
            A proven 5-step process that ensures on-time delivery, transparent
            communication, and exceptional results.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-progress" />
          {STEPS.map((step) => (
            <div className="timeline-step" key={step.number}>
              <div className="timeline-node">
                {step.icon}
                <div className="timeline-node-number">{step.number}</div>
              </div>
              <div className="timeline-title">
                {step.title.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </div>
              <div className="timeline-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}