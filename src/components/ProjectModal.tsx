import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import type { Project } from '../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus trap
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const content = (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal" ref={modalRef}>
        {/* Close */}
        <div className="modal__close">
          <button
            ref={closeRef}
            className="modal__close-btn"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <svg viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Gallery */}
        <div className="modal__gallery">
          <div className="modal__main-image-wrap">
            {project.hasImages && project.images.length > 0 ? (
              <img
                src={project.images[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="modal__main-image"
              />
            ) : (
              <div className="modal__main-placeholder">
                <span className="modal__placeholder-text">Internal Project — No Screenshots Available</span>
              </div>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="modal__thumbnails" role="list" aria-label="Image gallery thumbnails">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  className={`modal__thumb${i === activeImage ? ' active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View screenshot ${i + 1}`}
                  aria-pressed={i === activeImage}
                  type="button"
                  role="listitem"
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="modal__content">
          <div className="modal__header">
            <p className="modal__company">{project.company}</p>
            <h2 className="modal__title">{project.title}</h2>
            <p className="modal__role">Role: {project.role}</p>
          </div>

          <div className="modal__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="modal__section">
            <p className="modal__section-title">The Problem</p>
            <p className="modal__text">{project.problem}</p>
          </div>

          <div className="modal__section">
            <p className="modal__section-title">The Solution</p>
            <p className="modal__text">{project.solution}</p>
          </div>

          {project.keyDecisions.length > 0 && (
            <div className="modal__section">
              <p className="modal__section-title">Key Technical Decisions</p>
              <ul className="modal__decisions">
                {project.keyDecisions.map((decision, i) => (
                  <li key={i} className="modal__decision">{decision}</li>
                ))}
              </ul>
            </div>
          )}

          {project.modules.length > 0 && (
            <div className="modal__section">
              <p className="modal__section-title">Modules</p>
              <ul className="modal__modules">
                {project.modules.map((mod, i) => (
                  <li key={i} className="modal__module">{mod}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}
