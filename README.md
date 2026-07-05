# Cosmos Group Corporate Website

The official corporate homepage for **Cosmos Group**, a leading conglomerate in Bangladesh. Built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (`motion/react`)
- **Icons:** Lucide React

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables (optional)

If your app uses the Gemini API, create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

> For local development without AI features, this step can be skipped.

### 3. Run the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

Vite is configured to listen on `0.0.0.0:3000`, so it is also accessible from other devices on the same network.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on `http://localhost:3000` |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking (`tsc --noEmit`) |

---

## Project Structure

```
├── public/              # Static assets (logos, images, etc.)
│   ├── images/          # Company card backgrounds & gallery images
│   └── logos/           # Company logos served at runtime
├── src/
│   ├── components/      # React components (pages, sections, shared)
│   ├── App.tsx          # Main app with page routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind imports
├── .env.example         # Example environment variables
├── index.html           # HTML entry point
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## Adding a New Company Card

1. Add the company logo to `public/logos/`.
2. Add a background image to `public/images/`.
3. Create a new page component in `src/components/`.
4. Register the route in `src/App.tsx`.
5. Add the card data to `src/components/BusinessUnits.tsx`.
6. Add the company to the dropdown in `src/components/Navbar.tsx`.

---

## Deployment

After running `npm run build`, the static files in `dist/` can be deployed to any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, or a traditional web server).

---

## License

Proprietary — Cosmos Group.
