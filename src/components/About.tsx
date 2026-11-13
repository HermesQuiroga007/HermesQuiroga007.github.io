import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef} aria-label="About me">
      <div className="about__header fade-in-up">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about__grid">
        {/* Left column */}
        <div>
          <p className="about__summary fade-in-up">
            <strong>Full Stack Developer</strong> with 3+ years of professional experience building
            enterprise web and mobile systems. Specialized in{' '}
            <strong>.NET Core backends</strong> and <strong>React frontends</strong>, with hands-on
            expertise in <strong>Flutter</strong> for cross-platform mobile development. Passionate
            about clean architecture and solving complex business problems through software.
          </p>

          <p className="about__section-heading fade-in-up">Experience</p>
          <div className="about__timeline fade-in-up">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-title">Full Stack Developer</p>
                <p className="timeline-sub">APL — Bucaramanga, Colombia</p>
                <p className="timeline-date">Feb 2024 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-title">Web Developer</p>
                <p className="timeline-sub">Info Comunicaciones</p>
                <p className="timeline-date">Prior</p>
              </div>
            </div>
          </div>

          <p className="about__section-heading fade-in-up">Education</p>
          <div className="about__timeline fade-in-up">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-title">Systems Engineer</p>
                <p className="timeline-sub">Unidades Tecnológicas de Santander (UTS)</p>
                <p className="timeline-date">2022 – 2024</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-title">Technologist in Informatics Systems Development</p>
                <p className="timeline-sub">Unidades Tecnológicas de Santander (UTS)</p>
                <p className="timeline-date">2018 – 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="about__right">
          <div className="about__stats fade-in-up">
            <div className="about__stat">
              <div className="about__stat-number">3+</div>
              <div className="about__stat-label">Years Experience</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">10+</div>
              <div className="about__stat-label">Projects Built</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">5+</div>
              <div className="about__stat-label">Collaborations</div>
            </div>
          </div>

          <div className="about__card fade-in-up">
            <p className="about__card-title">Certification</p>
            <div className="about__cert">
              <div className="about__cert-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                </svg>
              </div>
              <div className="about__cert-info">
                <p className="about__cert-name">Oracle Java Foundations International Certificate</p>
                <p className="about__cert-issuer">Oracle — Apr 2021</p>
              </div>
            </div>
          </div>

          <div className="about__card fade-in-up">
            <p className="about__card-title">Languages</p>
            <div className="about__timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-title">Spanish</p>
                  <p className="timeline-sub">Native</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-title">English</p>
                  <p className="timeline-sub">B1 — Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
