export type Link = { label: string; href: string };

export type EntryLink = { label: string; href: string; hint: string };

export type CaseSection = {
  heading: string;
  body: string[];
  /** Optional bullet list, e.g. key decisions. */
  list?: string[];
};

export type FeaturedProject = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  links: Link[];
  status?: string;
  sections: CaseSection[];
  /** Two ways in: clicking around the live product, or reading the code. */
  entryPoints?: { tryIt: EntryLink[]; engineers: EntryLink[] };
  gallery?: string[];
  /** Screenshot tiles: tall page captures (portrait) or browser-sized shots (landscape). */
  galleryShape?: "portrait" | "landscape";
};

export type ArchiveProject = {
  title: string;
  year: string;
  stack: string;
  note: string;
  image: string;
  links: Link[];
};

export const featured: FeaturedProject[] = [
  {
    slug: "auro",
    title: "Auro",
    kicker: "Full-stack fashion-tech store",
    summary:
      "A working fashion store built with Next.js, TypeScript and Postgres, with test-mode Stripe payments, an admin and automated tests. What makes it different comes from my ten years in garment technology: sizes recommended from garment measurements, a product passport for every item and products drawn as technical flats.",
    year: "2025–26",
    role: "Product, design & full-stack development",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL (Neon)", "Drizzle ORM", "Stripe", "three.js", "Vitest", "Playwright", "GitHub Actions"],
    image: "/images/auro-shop.webp",
    imageAlt: "Auro shop grid with technical flat drawings of knitwear, a coat and a linen shirt",
    links: [
      { label: "Live demo", href: "https://auro-studio.vercel.app/" },
      { label: "Source", href: "https://github.com/anusirkas/shopping-cart" },
    ],
    entryPoints: {
      tryIt: [
        { label: "Find your size", href: "https://auro-studio.vercel.app/product/pohja-coat", hint: "“Find my size” on a coat" },
        { label: "Run the back office", href: "https://auro-studio.vercel.app/admin", hint: "Edit stock, see it on the product page" },
        { label: "See the fabric in 3D", href: "https://auro-studio.vercel.app/product/vale-crew", hint: "Switch to “3D fabric”, drag to rotate" },
        { label: "Place a test order", href: "https://auro-studio.vercel.app/shop", hint: "Card 4242 4242 4242 4242" },
      ],
      engineers: [
        { label: "Architecture", href: "https://github.com/anusirkas/shopping-cart#architecture", hint: "Request, payment and webhook flow" },
        { label: "Fit-finder algorithm", href: "https://github.com/anusirkas/shopping-cart/blob/main/src/lib/fit.ts", hint: "src/lib/fit.ts and its tests" },
        { label: "Stripe webhook", href: "https://github.com/anusirkas/shopping-cart/blob/main/src/app/api/stripe/webhook/route.ts", hint: "Idempotent, race-safe stock" },
        { label: "Trade-offs", href: "https://github.com/anusirkas/shopping-cart#trade-offs-and-known-limitations", hint: "What a production store would change" },
      ],
    },
    sections: [
      {
        heading: "Product passports",
        body: [
          "The EU is introducing digital product passports for textiles. Every product has one: fibre composition and origin, each stage of the supply chain, certifications, care, repair, end-of-life and an estimated footprint, with a QR code as it would appear on a care label.",
          "Modelled relationally in Postgres (passports, fibres, supply stages) and statically generated per product.",
        ],
      },
      {
        heading: "Fit finder",
        body: [
          "Garment technologists think in ease: how much bigger than the body a garment is designed to be, around 18 cm at the chest for a relaxed sweater and 4 for a slim one. The fit finder compares your measurements with each size's finished measurements and its intended ease, and explains the result with a confidence level.",
          "A pure, unit-tested scoring function: under-fit is penalised more than over-fit, and fabric stretch sets how far below zero ease a garment can go.",
        ],
      },
      {
        heading: "Technical flats and 3D fabric",
        body: [
          "Products are drawn as the line drawings sent to factories, recoloured per colourway, and a 3D swatch shows how the fabric is constructed.",
          "15 silhouettes as SVG paths with pattern fills per construction; the swatch is React Three Fiber with procedurally drawn yarn textures, loaded only when opened.",
        ],
      },
      {
        heading: "Key decisions",
        body: [],
        list: [
          "The server never trusts the bag: checkout re-prices every line from the database and re-checks stock before creating the Stripe session.",
          "Stock is decremented in the webhook with a conditional update, so the last item can't be sold twice, and repeated deliveries are ignored.",
          "Filter state lives in the URL, so every view is shareable, and facets are counted without their own filter so options don't disappear while you choose.",
          "If Neon is unreachable, browsing falls back to bundled data while checkout refuses to: availability for reading, correctness for money.",
          "The admin is open to visitors with a one-click demo session; a nightly cron resets stock to seed minus real sales, in a single SQL statement.",
          "Known trade-off: stock isn't reserved during checkout. A production store would hold it for the session or refund when the decrement fails.",
        ],
      },
      {
        heading: "Quality",
        body: [
          "22 unit tests (Vitest) and 15 end-to-end tests (Playwright, desktop and mobile) run with linting, type-checking and a production build on every push to GitHub Actions. Payments were verified end to end on the live site.",
        ],
      },
    ],
    gallery: [
      "/images/auro-home.webp",
      "/images/auro-shop.webp",
      "/images/auro-product-fit-finder.webp",
      "/images/auro-product-3d-fabric.webp",
      "/images/auro-passport.webp",
      "/images/auro-admin.webp",
      "/images/auro-stores.webp",
    ],
    galleryShape: "landscape",
  },
  {
    slug: "anusirkas-store",
    title: "anusirkas.ee",
    kicker: "My own WooCommerce store, 2021–2026",
    summary:
      "Five years of running a real online business for handmade zero-waste knitwear — design, product data, content, SEO, orders and maintenance.",
    year: "2021–26",
    role: "Founder, designer, store owner",
    stack: ["WooCommerce", "WordPress", "SEO", "Product data", "Photography"],
    image: "/images/shop-1.webp",
    imageAlt: "Product pages from the anusirkas.ee knitwear store",
    links: [],
    sections: [
      {
        heading: "Context",
        body: [
          "Before moving into engineering I ran my own zero-waste knitwear brand. The online store was its main sales channel, and I was responsible for every part of it.",
        ],
      },
      {
        heading: "What it involved",
        body: [
          "Designing and building the store, managing the product catalogue and variants, writing and photographing content, handling orders and customer communication, SEO, and keeping the site maintained and updated.",
        ],
      },
      {
        heading: "Why it matters for my engineering",
        body: [
          "It taught me what an e-commerce system looks like from the merchant's side: where product data breaks, what customers actually get stuck on, and which details move sales. I bring that perspective to the commerce platforms I build today.",
        ],
      },
    ],
    gallery: ["/images/shop-1.webp", "/images/shop-2.webp", "/images/shop-3.webp", "/images/shop-4.webp", "/images/shop-5.webp", "/images/shop-6.webp"],
  },
  {
    slug: "growth-mirror",
    title: "Growth Mirror",
    kicker: "AI reflection journal",
    summary:
      "A weekly journal for junior developers: answer five questions, and Gemini gives back where you grew, what's slowing you down and one concrete next step. Next week it asks if you took it, and the progress view shows your patterns over time. React, TypeScript and a Vercel Function, with a fallback that always answers.",
    year: "2026",
    role: "Product, design & full-stack development",
    stack: ["React", "TypeScript", "Vite", "Google Gemini", "Vercel Functions", "Vitest", "Playwright", "GitHub Actions"],
    image: "/images/growth-mirror-reflection.webp",
    imageAlt: "A week's answers on a journal page with the AI reflection beside it",
    links: [
      { label: "Live demo", href: "https://growth-mirror.vercel.app/" },
      { label: "Source", href: "https://github.com/anusirkas/growth-mirror" },
    ],
    entryPoints: {
      tryIt: [
        { label: "Reflect on a week", href: "https://growth-mirror.vercel.app/#/", hint: "“Fill in an example week”, then reflect" },
        { label: "See progress", href: "https://growth-mirror.vercel.app/#/progress", hint: "Follow-through rate and timeline" },
        { label: "Browse the journal", href: "https://growth-mirror.vercel.app/#/history", hint: "Eight example weeks" },
      ],
      engineers: [
        { label: "Architecture", href: "https://github.com/anusirkas/growth-mirror#architecture", hint: "Function, models and fallback" },
        { label: "AI design notes", href: "https://github.com/anusirkas/growth-mirror#designing-the-ai-part", hint: "Schema, validation, thinking budget" },
        { label: "Request handler", href: "https://github.com/anusirkas/growth-mirror/blob/master/server/reflect.ts", hint: "Timeout, rate limit, fallback" },
        { label: "Handler tests", href: "https://github.com/anusirkas/growth-mirror/blob/master/server/reflect.test.ts", hint: "Every branch, model injected" },
      ],
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "When you work full-time and learn on the side, progress becomes invisible: you're busy every day and still feel like you're standing still. Growth Mirror is deliberately narrow. No streaks or dashboards, just one loop: reflect, take one step, say whether you took it, reflect again.",
        ],
      },
      {
        heading: "A journal, not a form",
        body: [
          "The interface is a field-notes journal: ruled pages, a margin line, serif ink. The AI's reflection sits beside your page like notes from a mentor, ending with a single next step. Next week the app asks whether you did it, and the progress view leads with that follow-through rate, followed by your recurring patterns and a weekly timeline.",
          "The journal is stored only in the browser, so reflections never sit on a server.",
        ],
      },
      {
        heading: "Key decisions",
        body: [],
        list: [
          "The Gemini key stays in a Vercel Function; the browser only ever talks to /api/reflect.",
          "Replies use a JSON schema and are still validated server-side; off-schema output counts as a failure.",
          "It always answers: no key, rate limit, timeout, model error or bad output all fall back to rule-based scoring, and the UI says which happened.",
          "The free tier returns 503 at busy times, so a lighter model is tried before falling back.",
          "Gemini 3 spends tokens thinking before it answers; the first replies were cut off mid-JSON, so the thinking level is set low with room for the output.",
          "User answers are fenced as data in the prompt, and the page tells users their text goes to Google.",
        ],
      },
      {
        heading: "Quality",
        body: [
          "18 unit tests cover validation, parsing, the fallback and every branch of the request handler, with the model injected so tests never call Gemini. 18 Playwright tests run the app on desktop and mobile with the AI stubbed. CI runs both on every push.",
        ],
      },
    ],
    gallery: ["/images/growth-mirror-reflection.webp", "/images/growth-mirror-progress.webp", "/images/growth-mirror-journal.webp"],
    galleryShape: "landscape",
  },
  {
    slug: "wearable-art-database",
    title: "Wearable Art Archive",
    kicker: "Relational data model for wearable art",
    summary:
      "A PostgreSQL schema for documenting wearable art across its lifecycle — artists, materials, techniques, creation stages, commissions and ownership.",
    year: "2025–26",
    role: "Data modelling & back-end",
    stack: ["PostgreSQL", "SQL", "ER modelling", "Next.js", "TypeScript"],
    image: "/images/wearable-art-erd.webp",
    imageAlt: "Entity-relationship diagram of the wearable art database",
    links: [{ label: "Source", href: "https://github.com/anusirkas/wearable-art-app" }],
    status: "Database complete, application in progress",
    sections: [
      {
        heading: "The idea",
        body: [
          "Wearable art sits between fashion and art: unique, handmade pieces whose value depends on documenting how, by whom and from what they were made. Spreadsheets and generic shop software don't capture that.",
        ],
      },
      {
        heading: "What's done",
        body: [
          "An ER design and relational schema covering artworks, artists, materials and techniques, creation stages, transactions and commissions, exhibitions and media assets — plus SQL scripts for creation, sample data and exploratory queries. Started as a TalTech databases project.",
        ],
      },
      {
        heading: "Next",
        body: [
          "Building the application layer on top: ownership and transaction logic, and a UI for artists and collectors to browse and document pieces.",
        ],
      },
    ],
  },
];

export const archive: ArchiveProject[] = [
  {
    title: "Mini Message Board",
    image: "/images/message-board.webp",
    year: "2026",
    stack: "Node.js · Express · EJS · MongoDB",
    note: "Chat-style board with dark mode, emoji picker and persistent storage",
    links: [
      { label: "Demo", href: "https://mini-message-board-b2bg.onrender.com/" },
      { label: "Code", href: "https://github.com/anusirkas/mini-message-board" },
    ],
  },
  {
    title: "Quiz App",
    image: "/images/quiz.webp",
    year: "2026",
    stack: "React · TypeScript · Playwright",
    note: "Timed multiple-choice quiz with feedback, progress and E2E tests",
    links: [
      { label: "Demo", href: "https://viktoriin-nu.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/viktoriin" },
    ],
  },
  {
    title: "Weather App",
    image: "/images/weather-app.webp",
    year: "2025",
    stack: "Nuxt 3 · Vue 3 · OpenWeatherMap",
    note: "Geolocation and condition-aware UI",
    links: [
      { label: "Demo", href: "https://weather-app-flame-one.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/weather-app" },
    ],
  },
  {
    title: "Get Some Peace",
    image: "/images/getsomepeace.webp",
    year: "2025",
    stack: "Three.js · GSAP · GLTF",
    note: "3D animated landing page for a fictional house rental",
    links: [
      { label: "Demo", href: "https://getsomepeace.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/getsomepeace" },
    ],
  },
  {
    title: "Flight Seat App",
    image: "/images/flight.webp",
    year: "2025",
    stack: "React · Tailwind",
    note: "Flight selection and seat recommendation logic",
    links: [
      { label: "Demo", href: "https://flight-seat-app.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/flight-seat-app" },
    ],
  },
  {
    title: "Kombucha",
    image: "/images/kombucha.webp",
    year: "2025",
    stack: "Figma",
    note: "E-commerce prototype with wireframes and UI kit",
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/49sBruaZKoTAve9GXSCQG1/Kombucha?node-id=16-27&starting-point-node-id=16%3A153",
      },
    ],
  },
  {
    title: "Little Lemon",
    image: "/images/little-lemon.webp",
    year: "2025",
    stack: "React · Figma",
    note: "Restaurant site, Meta Front-End capstone",
    links: [
      { label: "Demo", href: "https://little-lemon-sigma-two.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/LittleLemon" },
    ],
  },
  {
    title: "NomadHub Sign-up",
    image: "/images/signup-form.webp",
    year: "2025",
    stack: "HTML · CSS",
    note: "Glassmorphism sign-up form",
    links: [
      { label: "Demo", href: "https://anusirkas.github.io/signup-form/" },
      { label: "Code", href: "https://github.com/anusirkas/signup-form" },
    ],
  },
  {
    title: "3D Space",
    image: "/images/3d-space.webp",
    year: "2025",
    stack: "Three.js · Vite",
    note: "First steps in WebGL",
    links: [
      { label: "Demo", href: "https://3d-space-beta.vercel.app/" },
      { label: "Code", href: "https://github.com/anusirkas/3D-space" },
    ],
  },
  {
    title: "Textile design portfolio",
    image: "/images/textile-portfolio.webp",
    year: "Before tech",
    stack: "Pattern, sketching, Adobe CC",
    note: "My work as a textile designer",
    links: [{ label: "View", href: "https://anusirkas.wixsite.com/portfolio" }],
  },
];

export const timeline = [
  { when: "Jun 2025 – now", what: "Software Engineer, Lumav Commerce", detail: "Large-scale e-commerce: 10k+ product catalogues, component systems, internal tools, API integrations." },
  { when: "Sep 2025 – Jan 2027", what: "TalTech — external studies", detail: "Web Technologies, Database Basics, Programming I (18 ECTS)." },
  { when: "Oct 2025 – Sep 2026", what: "Udemy", detail: "Node.js, JavaScript, Figma UI/UX Design Advanced." },
  { when: "Nov 2024 – Mar 2025", what: "Meta Front-End Developer", detail: "Professional certificate via Coursera / Cerebrum Hub." },
  { when: "2021 – 2026", what: "Founder, anusirkas.ee", detail: "Zero-waste knitwear brand and WooCommerce store." },
  { when: "10+ years", what: "Fashion & textiles", detail: "Garment technologist, quality specialist, textile designer — Sweden, Thailand, Germany, the Netherlands." },
  { when: "Education", what: "MA Textile Design · BA Garment Technology", detail: "" },
];

export const toolbox = [
  { group: "Front-end", items: ["TypeScript", "React", "Next.js", "Vue", "Nuxt", "HTML & CSS"] },
  { group: "Back-end & data", items: ["Node.js", "Express", "REST", "GraphQL", "MariaDB / MySQL", "PostgreSQL", "MongoDB", "PHP", "Python"] },
  { group: "Commerce", items: ["Magento", "WooCommerce", "GoERP", "Product data", "Catalogue UX"] },
  { group: "Tools & design", items: ["Git", "Jira", "Vercel", "Render", "Cursor", "Figma", "Adobe CC"] },
];

export const contact = {
  email: "anusirkas@gmail.com",
  linkedin: "https://www.linkedin.com/in/anu-sirkas/",
  github: "https://github.com/anusirkas",
};
