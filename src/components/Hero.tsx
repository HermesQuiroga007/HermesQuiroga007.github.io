import profilePhoto from '../assets/profile/degree1.jpg';
import './Hero.css';

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__photo-wrap">
          <img
            src={profilePhoto}
            alt="José Hermes Quiroga Tabares"
            className="hero__photo"
            width={120}
            height={120}
          />
        </div>

        {/* titulo */}

        <h1 className="hero__title">
          José <span>Quiroga</span>
        </h1>

        <p className="hero__subtitle">
          Software Engineer · Full Stack Developer
        </p>

        <p className="hero__tagline">
          Building robust web &amp; mobile systems — from ERP extensions to real estate platforms.
        </p>

        <div className="hero__ctas">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#projects')}
            type="button"
          >
            View Projects
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#contact')}
            type="button"
          >
            Contact Me
          </button>
        </div>

        <div className="hero__socials" aria-label="Social links">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/josé-hermes-quiroga-tabares-b12094286"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11C15.18 12.11 15.74 12.67 15.74 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HermesQuiroga007"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:jose.quiroga163@gmail.com"
            className="hero__social-link"
            aria-label="Send email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="hero__scroll-indicator"
        aria-hidden="true"
        onClick={() => scrollTo('#about')}
        style={{ cursor: 'pointer' }}
      >
        <svg viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
