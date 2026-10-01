import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
        </nav>
      </div>
      <div className="tape" ref={tapeRef} aria-hidden="true" />
    </header>
  );
}
