import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap notfound">
      <p className="eyebrow">404</p>
      <h1>
        This page has <em>come unstitched.</em>
      </h1>
      <Link to="/" className="btn btn-primary">Back home</Link>
    </section>
  );
}
