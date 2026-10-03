export type Link = { label: string; href: string };

export type CaseSection = {
  heading: string;
  body: string[];
  /** Optional "try it" links shown under the paragraphs. */
  actions?: { label: string; href: string; hint: string }[];
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
      "A Next.js and Postgres store where garment-technology knowledge becomes product features: digital product passports, a fit finder built on garment ease, technical flats and 3D fabric, with Stripe checkout and an admin.",
    year: "2025–26",
    role: "Product, design & full-stack development",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL (Neon)", "Drizzle ORM", "Stripe", "three.js", "Vitest", "Playwright", "GitHub Actions"],
    image: "/images/auro-shop.webp",
    imageAlt: "Auro shop grid with technical flat drawings of knitwear, a coat and a linen shirt",
    links: [
      { label: "Live demo", href: "https://auro-studio.vercel.app/" },
      { label: "Back office demo", href: "https://auro-studio.vercel.app/admin" },
      { label: "Source", href: "https://github.com/anusirkas/shopping-cart" },
    ],
    sections: [
      {
        heading: "Why it matters",
        body: [
          "Most fashion e-commerce treats clothes as pictures with a price. Auro treats them the way the industry makes them: as specified products with measurements, materials and a supply chain, and turns that knowledge into features shoppers can use.",
          "It's a complete, working store, not a mock-up: a real database, real (test-mode) payments, an admin, automated tests and continuous deployment. It shows how I work: product thinking from ten years in garment technology, combined with full-stack engineering.",
        ],
      },
      {
        heading: "Try it yourself",
        body: ["Everything is live and free to explore. Nothing you do can break it: demo changes reset every night."],
        actions: [
          { label: "Find your size", href: "https://auro-studio.vercel.app/product/pohja-coat", hint: "Open “Find my size” on a coat and enter your chest measurement." },
          { label: "Read a product passport", href: "https://auro-studio.vercel.app/passport/AU-007-COA", hint: "Materials, every factory in the chain, care, repair and footprint." },
          { label: "See the fabric in 3D", href: "https://auro-studio.vercel.app/product/vale-crew", hint: "Switch the product view to “3D fabric” and drag to rotate." },
          { label: "Run the back office", href: "https://auro-studio.vercel.app/admin", hint: "Press “Try the back office”, change stock, then check the product page." },
          { label: "Place a test order", href: "https://auro-studio.vercel.app/shop", hint: "Checkout with card 4242 4242 4242 4242, any future date and CVC." },
        ],
      },
      {
        heading: "Digital product passports",
        body: [
          "The EU is introducing digital product passports for textiles. Every Auro product already has one: fibre composition and origin, each stage of the supply chain, certifications, care, repair and end-of-life guidance, and an estimated footprint, linked by a QR code as it would be from a care label.",
        ],
      },
      {
        heading: "A fit finder built on garment ease",
        body: [
          "Size advice usually compares your measurements with a size chart. Garment technologists think in ease: how much bigger than the body a garment is designed to be. A relaxed sweater has around 18 cm of room at the chest, a slim one about 4.",
          "The fit finder compares your measurements with the finished garment and its intended ease, allows stretch knits to be smaller than the body while rigid fabrics can't, and explains its recommendation in plain language with a confidence level.",
        ],
      },
      {
        heading: "Drawn, not photographed",
        body: [
          "Products are shown as technical flats, the line drawings sent to factories: 15 silhouettes in SVG, recoloured for every colourway and textured by how the fabric is made. Beside each flat, a 3D swatch drapes from a rail with a yarn structure generated for its construction, from knit loops to twill diagonals.",
        ],
      },
      {
        heading: "Engineering",
        body: [
          "Next.js 16 and React 19 with TypeScript, PostgreSQL on Neon through Drizzle ORM, Stripe Checkout with a signed webhook, three.js for the fabric view, deployed on Vercel. 29 products and 352 SKUs with live stock.",
          "The server re-prices and re-checks every order instead of trusting the browser, and stock is decremented with a conditional update so the last item can't be sold twice. Filters live in the URL so every view is shareable. If the database is unreachable, browsing falls back to bundled data while checkout refuses to.",
          "22 unit tests and 15 end-to-end tests on desktop and mobile run with linting, type-checking and a production build on every push. The README on GitHub goes deeper into the architecture and trade-offs.",
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
    kicker: "Weekly reflection tool for junior builders",
    summary:
      "A deliberately narrow product: write about your week, get back where you grew, what's blocking you, and one practical next step.",
    year: "2026",
    role: "Product, design & development",
    stack: ["React", "TypeScript", "Vite", "Scoring engine"],
    image: "/images/growth-mirror.webp",
    imageAlt: "Growth Mirror weekly reflection form",
    links: [
      { label: "Live demo", href: "https://growth-mirror.vercel.app/" },
      { label: "Source", href: "https://github.com/anusirkas/growth-mirror" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "When you work full-time and learn on the side, progress becomes invisible. You can be busy every day and still feel like you're standing still. Career switchers and junior developers feel this most.",
        ],
      },
      {
        heading: "Product decisions",
        body: [
          "I intentionally left out dashboards, streaks, reminders and calendars — they add noise rather than clarity. The MVP validates a single loop: reflection in, clarity out.",
          "The user answers five prompts (what I worked on, learned, found difficult, avoided, want to improve). The app returns four things: progress spotted, biggest gap, next week's focus and one practical next step.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "The intelligence layer is mocked on purpose: weighted keyword scoring across all answers identifies the dominant pattern — focus, technical growth or confidence — rather than first-match rules. A live language-model version with saved history is the next iteration.",
        ],
      },
    ],
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
