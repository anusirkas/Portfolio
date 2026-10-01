import { useState } from "react";

/* Dev-only helper for choosing the site palette. Not rendered in production builds. */
const palettes = [
  { id: "cobalt", label: "Cobalt", swatch: "#2438e8" },
  { id: "oxblood", label: "Oxblood", swatch: "#6e1423" },
  { id: "emerald", label: "Emerald", swatch: "#0f7a4a" },
];

export default function PaletteSwitcher() {
  const [current, setCurrent] = useState(document.documentElement.dataset.palette ?? "cobalt");

  const pick = (id: string) => {
    document.documentElement.dataset.palette = id;
    setCurrent(id);
  };

  return (
    <div className="palette-switcher" role="group" aria-label="Palette preview">
      <span>Palette</span>
      {palettes.map((p) => (
        <button
          key={p.id}
          onClick={() => pick(p.id)}
          aria-pressed={current === p.id}
          title={p.label}
          style={{ background: p.swatch }}
        >
          <span className="sr-only">{p.label}</span>
        </button>
      ))}
      <em>{palettes.find((p) => p.id === current)?.label}</em>
    </div>
  );
}
