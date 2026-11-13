import { useEffect, useRef } from 'react';
import { skillCategories } from '../data/skills';
import './Skills.css';

export default function Skills() {
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
    <section id="skills" className="skills" ref={sectionRef} aria-label="Skills">
      <div className="skills__inner">
        <div className="skills__header fade-in-up">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="skills__category fade-in-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="skills__category-title">{cat.category}</p>
              <ul className="skills__list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skills__pill">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
