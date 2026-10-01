import { useRef, useState } from "react";
import type { ArchiveProject } from "../data/projects";

/* Rows stay text-only; on pointer devices a preview image follows the cursor. */
export default function ArchiveList({ items }: { items: ArchiveProject[] }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    previewRef.current?.style.setProperty("--x", `${e.clientX}px`);
    previewRef.current?.style.setProperty("--y", `${e.clientY}px`);
  };

  return (
    <div className="archive-wrap" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
      <ul className="archive">
        {items.map((a, i) => (
          <li key={a.title} onMouseEnter={() => setActive(i)}>
            <img className="archive-thumb" src={a.image} alt="" loading="lazy" />
            <span className="archive-year">{a.year}</span>
            <span className="archive-title">
              {a.title}
              <span className="archive-note">{a.note}</span>
            </span>
            <span className="archive-stack">{a.stack}</span>
            <span className="archive-links">
              {a.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <div ref={previewRef} className={`archive-preview${active !== null ? " is-active" : ""}`} aria-hidden="true">
        {items.map((a, i) => (
          <img key={a.title} src={a.image} alt="" className={i === active ? "is-current" : ""} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
