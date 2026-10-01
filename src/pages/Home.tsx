import { useState } from "react";
import { Link } from "react-router-dom";
import ArchiveList from "../components/ArchiveList";
import ImageModal from "../components/ImageModal";
import TechPack from "../components/TechPack";
import { archive, contact, featured, timeline, toolbox } from "../data/projects";

export default function Home() {
  const [portraitOpen, setPortraitOpen] = useState(false);

  return (
    <>
      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>Full-stack engineer · Tallinn</p>
          <h1 data-reveal>
            I build <em>e-commerce</em> with a garment technologist’s eye for detail.
          </h1>
          <p className="lede" data-reveal>
            I’m Anu Sirkas. I spent ten years making clothes and running a knitwear brand. Now I build the commerce
            platforms that sell them — currently as a software engineer at Lumav Commerce.
          </p>
          <div className="hero-actions" data-reveal>
            <Link to="/#work" className="btn btn-primary">See selected work</Link>
            <Link to="/#contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
        <div data-reveal>
          <TechPack />
        </div>
      </section>

      <div className="wrap" aria-hidden="true">
        <div className="knit-band" />
      </div>

      <section id="work" className="section wrap">
        <div className="section-head" data-reveal>
          <h2>Selected work</h2>
          <p>Commerce, product thinking and the fashion domain I come from.</p>
        </div>

        <ol className="work-list">
          {featured.map((p, i) => (
            <li key={p.slug} className="work-item" data-reveal>
              <Link to={`/work/${p.slug}`} className="work-media" aria-label={`${p.title} case study`}>
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </Link>
              <div className="work-body">
                <span className="work-index">{String(i + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{p.kicker}</p>
                <h3>
                  <Link to={`/work/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.summary}</p>
                <ul className="tags" aria-label="Stack">
                  {p.stack.slice(0, 5).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="work-links">
                  <Link to={`/work/${p.slug}`} className="arrow-link">Case study →</Link>
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section wrap" aria-labelledby="archive-title">
        <div className="section-head" data-reveal>
          <h2 id="archive-title">More projects</h2>
          <p>Smaller builds and experiments along the way.</p>
        </div>
        <div data-reveal>
          <ArchiveList items={archive} />
        </div>
      </section>

      <section id="about" className="section wrap about">
        <div className="section-head" data-reveal>
          <h2>From fashion to tech</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <button className="about-portrait" onClick={() => setPortraitOpen(true)} aria-label="Open illustration: from fashion to tech">
              <img src="/images/fashion-to-tech.webp" alt="" loading="lazy" />
              <span>From fashion to tech ↗</span>
            </button>
            <p>
              For over a decade I worked in fashion as a garment technologist, quality specialist and textile designer
              across Sweden, Thailand, Germany and the Netherlands — and then ran my own zero-waste knitwear brand with
              a WooCommerce store.
            </p>
            <p>
              That gave me an unusual view of commerce: I know where product data breaks, how supply chains shape a
              catalogue, and what makes a customer trust a product page. Today I build those systems as an engineer,
              working on large e-commerce platforms with Vue, Nuxt, React, Next.js, Node.js and MariaDB.
            </p>
            <p>
              What excites me most is <strong>fashion-tech</strong>: e-commerce, AI, 3D and sustainable fashion —
              the places where product data, user experience and the way clothes are made meet.
            </p>
          </div>
          <ol className="timeline" data-reveal>
            {timeline.map((t) => (
              <li key={t.what}>
                <span className="tl-when">{t.when}</span>
                <span className="tl-what">{t.what}</span>
                {t.detail && <span className="tl-detail">{t.detail}</span>}
              </li>
            ))}
          </ol>
        </div>

        <div className="toolbox" data-reveal>
          {toolbox.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap" aria-hidden="true">
        <div className="knit-band" />
      </div>

      <section id="contact" className="section wrap contact" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>
          Let’s build something <em>well‑made.</em>
        </h2>
        <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="contact-links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      {portraitOpen && (
        <ImageModal
          src="/images/fashion-to-tech.webp"
          alt="Illustration of Anu walking a mountain path from sewing tools and sketches towards a laptop with code"
          caption="The path from fashion to tech."
          onClose={() => setPortraitOpen(false)}
        />
      )}
    </>
  );
}
