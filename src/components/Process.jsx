import '../styles/WhyProcess.css';

const STEPS = [
  {
    icon: '💬',
    title: 'Requirement\nDiscussion',
    desc: 'Understand your goals, target audience, and technical needs.',
    number: '01',
  },
  {
    icon: '🎨',
    title: 'UI/UX\nDesign',
    desc: 'Wireframes, prototypes, and pixel-perfect Figma designs.',
    number: '02',
  },
  {
    icon: '💻',
    title: 'Development',
    desc: 'Clean, scalable code with modern frameworks and best practices.',
    number: '03',
  },
  {
    icon: '🧪',
    title: 'Testing',
    desc: 'Rigorous QA, performance, and cross-device compatibility testing.',
    number: '04',
  },
  {
    icon: '🚀',
    title: 'Deployment',
    desc: 'Seamless production launch with monitoring and post-deploy support.',
    number: '05',
  },
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
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

        {/* Process image banner */}
        <div className="process-banner">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80"
            alt="Development process"
            loading="lazy"
          />
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
                {step.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < step.title.split('\n').length - 1 && <br />}
                  </span>
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