import { contact } from "../data/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
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
