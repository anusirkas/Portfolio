const rows: [string, string][] = [
  ["Style", "Full-stack engineer"],
  ["Collection", "Web apps · commerce · data"],
  ["Shell", "TypeScript · Vue · Nuxt · React · Next.js"],
  ["Lining", "Node.js · SQL · REST / GraphQL"],
  ["Trims", "Figma · product data · catalogue UX"],
  ["Origin", "10+ yrs garment technology & textile design"],
  ["Made in", "Tallinn, Estonia"],
];

export default function TechPack() {
  return (
    <aside className="techpack" aria-label="Profile summary, styled as a garment tech pack">
      <div className="techpack-head">
        <span>Tech pack</span>
        <span>No. AS-2026</span>
      </div>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="techpack-foot">
        <span className="swatch" aria-hidden="true" />
        <span>Care: handle with curiosity. Iterate often.</span>
      </div>
    </aside>
  );
}
