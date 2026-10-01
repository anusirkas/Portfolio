import { contact } from "../data/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="care-label" aria-label="Care label: Anu Sirkas, made in Tallinn">
          <span>Anu Sirkas</span>
          <span>Made in Tallinn</span>
          <span>100% curiosity</span>
          <span className="care-icons" aria-hidden="true">◯ △ ▢</span>
        </div>
        <span>© {new Date().getFullYear()} Anu Sirkas · Tallinn, Estonia</span>
        <span className="footer-links">
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
