import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article
      className="project-card"
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      {/* Image */}
      <div className="project-card__image-wrap">
        {project.hasImages && project.coverImage ? (
          <>
            <img
              src={project.coverImage}
              alt={`${project.title} screenshot`}
              className="project-card__image"
            />
            <div className="project-card__overlay" aria-hidden="true">
              <span className="project-card__overlay-cta">
                View Project
                <svg viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </>
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <svg className="project-card__placeholder-icon" viewBox="0 0 24 24">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__badge">{project.company.split('·')[0].trim()}</span>
          <span className="project-card__role">{project.role}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">{project.shortDescription}</p>

        <div className="project-card__tags">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 5 && (
            <span className="tag">+{project.tags.length - 5}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <button
          className="project-card__btn"
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          type="button"
          aria-label={`Open ${project.title} details`}
        >
          View Project
          <svg viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </article>
  );
}
