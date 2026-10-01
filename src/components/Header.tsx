import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const [scrolled, setScrolled] = useState(false);
  const tapeRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { pathname } = useLocation();

  // highlight the nav item for the section currently in view
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const sections = ["top", "work", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id === "top" ? null : e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      tapeRef.current?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link to="/" className="wordmark" aria-label="Anu Sirkas, home">
          Anu <em>Sirkas</em>
        </Link>
        <nav aria-label="Primary">
          <Link to="/#work" className={activeSection === "work" ? "is-active" : undefined}>Work</Link>
          <Link to="/#about" className={activeSection === "about" ? "is-active" : undefined}>About</Link>
          <Link to="/#contact" className={activeSection === "contact" ? "is-active" : undefined}>Contact</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
        </nav>
      </div>
      <div className="tape" ref={tapeRef} aria-hidden="true" />
    </header>
  );
}
