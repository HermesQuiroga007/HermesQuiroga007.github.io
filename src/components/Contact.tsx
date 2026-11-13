import { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
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
    <section id="contact" className="contact" ref={sectionRef} aria-label="Contact">
      <div className="contact__inner">
        <div className="contact__header fade-in-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <p className="contact__tagline fade-in-up">
          Open to new opportunities and interesting projects.
        </p>

        <div className="contact__links fade-in-up">
          {/* Email */}
          <a href="mailto:jose.quiroga163@gmail.com" className="contact__link">
            <div className="contact__link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
            </div>
            <div>
              <p className="contact__link-label">Email</p>
              <p className="contact__link-value">jose.quiroga163@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/josé-hermes-quiroga-tabares-b12094286"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div className="contact__link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11C15.18 12.11 15.74 12.67 15.74 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </div>
            <div>
              <p className="contact__link-label">LinkedIn</p>
              <p className="contact__link-value">José Hermes Quiroga Tabares</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HermesQuiroga007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <div className="contact__link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </div>
            <div>
              <p className="contact__link-label">GitHub</p>
              <p className="contact__link-value">HermesQuiroga007</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+573118959388" className="contact__link">
            <div className="contact__link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
            </div>
            <div>
              <p className="contact__link-label">Phone</p>
              <p className="contact__link-value">+57 311 895 9388</p>
            </div>
          </a>
        </div>

        <div className="contact__cta fade-in-up">
          <a href="mailto:jose.quiroga163@gmail.com" className="btn-primary">
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
