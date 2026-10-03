import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { featured } from "../data/projects";
import NotFound from "./NotFound";

const DEFAULT_TITLE = "Anu Sirkas — Full-stack engineer, e-commerce & fashion-tech";

export default function CaseStudy() {
  const { slug } = useParams();
  const index = featured.findIndex((p) => p.slug === slug);
  const project = featured[index];
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    document.title = project ? `${project.title} — Anu Sirkas` : "Not found — Anu Sirkas";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [project]);

  useEffect(() => {
    if (open === null || !project?.gallery) return;
    const len = project.gallery.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % len));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + len) % len));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, project]);

  if (!project) return <NotFound />;
  const next = featured[(index + 1) % featured.length];

  return (
    <article className="case wrap">
      <Link to="/#work" className="back-link">← All work</Link>
      <header className="case-head" data-reveal>
        <p className="eyebrow">{project.kicker}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
      </header>

      <dl className="case-meta" data-reveal>
        <div><dt>Year</dt><dd>{project.year}</dd></div>
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>Stack</dt><dd>{project.stack.join(", ")}</dd></div>
        {project.status && <div><dt>Status</dt><dd>{project.status}</dd></div>}
      </dl>

      {project.links.length > 0 && (
        <div className="case-links" data-reveal>
          {project.links.map((l) => (
            <a key={l.href} className="btn btn-ghost" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      )}

      <figure className="case-hero" data-reveal>
        <img src={project.image} alt={project.imageAlt} />
      </figure>

      <div className="case-body">
        {project.sections.map((s) => (
          <section key={s.heading} data-reveal>
            <h2>{s.heading}</h2>
            <div>
              {s.body.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {project.gallery && (
        <section className="gallery" aria-label="Screenshots" data-reveal>
          <h2>Screens</h2>
          <div className={`gallery-grid${project.galleryShape === "landscape" ? " is-landscape" : ""}`}>
            {project.gallery.map((src, i) => (
              <button key={src} onClick={() => setOpen(i)} aria-label={`Open screenshot ${i + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      )}

      {open !== null && project.gallery && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={() => setOpen(null)}>
          <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">×</button>
          <div className="lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            <img src={project.gallery[open]} alt={`Screenshot ${open + 1} of ${project.gallery.length}`} />
          </div>
          <span className="lightbox-count">{open + 1} / {project.gallery.length} · ← → to browse</span>
        </div>
      )}

      <Link to={`/work/${next.slug}`} className="next-case">
        <span className="eyebrow">Next project</span>
        <span className="next-title">{next.title} →</span>
      </Link>
    </article>
  );
}
