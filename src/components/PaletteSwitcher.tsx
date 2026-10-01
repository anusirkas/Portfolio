import { useState } from "react";

/* Dev-only helper for choosing the site palette. Not rendered in production builds. */
const palettes = [
  { id: "plum", label: "Plum", swatch: "#6b1d3c" },
  { id: "raspberry", label: "Raspberry", swatch: "#b8245c" },
  { id: "tomato", label: "Tomato", swatch: "#c8311f" },
  { id: "marigold", label: "Marigold", swatch: "#ffc83d" },
];

export default function PaletteSwitcher() {
  const [current, setCurrent] = useState(document.documentElement.dataset.palette ?? "plum");

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
