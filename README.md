# Anu Sirkas — Portfolio

Personal portfolio of a full-stack engineer working on e-commerce, with a 10+ year background in fashion and textiles.

**Live:** https://portfolio-anu-sirkas-projects.vercel.app/

## Design

An editorial, fashion-magazine layout that borrows from my garment-technology past: the hero summary is styled as a **tech pack** (the spec sheet sent to a factory), and stitched dashed lines act as dividers throughout. Instrument Serif + Geist, a paper/ink palette with a madder-red accent, and a full dark mode.

## Stack

- React 19 + TypeScript, built with Vite
- React Router for case-study pages (`/work/:slug`)
- Plain CSS with design tokens, no UI framework
- Scroll reveals via `IntersectionObserver`, respecting `prefers-reduced-motion`
- Images served as optimised WebP
- Deployed on Vercel

## Structure

```
src/
  data/projects.ts    # all content: featured case studies, archive, timeline, toolbox
  components/         # Header, Footer, TechPack
  pages/              # Home, CaseStudy, NotFound
  styles.css          # tokens, layout, light/dark themes
```

Adding a project means adding an entry to `src/data/projects.ts`.

## Run locally

```bash
npm install
npm run dev
```
