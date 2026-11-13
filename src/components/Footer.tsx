import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {year} <span>José Hermes Quiroga Tabares</span>. All rights reserved.
        </p>
        <ul className="footer__links">
          <li>
            <a href="mailto:jose.quiroga163@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/josé-hermes-quiroga-tabares-b12094286"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/HermesQuiroga007"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
