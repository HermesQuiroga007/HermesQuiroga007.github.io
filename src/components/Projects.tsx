import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
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
    <section id="projects" className="projects" ref={sectionRef} aria-label="Projects">
      <div className="projects__header fade-in-up">
        <span className="section-label">Work</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="fade-in-up"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <ProjectCard project={project} onOpen={setActiveProject} />
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
