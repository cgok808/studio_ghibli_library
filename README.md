# Studio Ghibli Library

A small React app showcasing Studio Ghibli movies with filtering, pricing, and cart functionality.

---

## Table of Contents
- **Project:** Short description and goals
- **Tech Stack:** Dependencies and tooling
- **Prerequisites:** System requirements
- **Install:** Setup and local development
- **Available Scripts:** NPM scripts and purpose
- **Project Structure:** Key files and folders
- **Components:** Overview of UI components
- **Data:** Source and format of movie data
- **Styling & Assets:** Tailwind / PostCSS / assets
- **Linting:** How to run linters
- **Routing:** How navigation is organized
- **Build & Deploy:** Production build instructions
- **Contributing:** How to help
- **Credits & License:** Attributions

---

## Project

This repository is a small storefront-like React application that lists Studio Ghibli movies, lets users explore details, and add items to a cart. It's intentionally minimal and suitable as a learning/demo project for React + Vite + Tailwind.

Goals:
- Demonstrate a component-based UI and simple state for cart and filtering.
- Show example usage of `react-router-dom` for navigation and routes.

## Tech Stack

- React 19
- Vite (dev server + build)
- Tailwind CSS + PostCSS for styling
- ESLint for linting
- `react-router-dom` for client routing
- `lucide-react` for icons

Referenced devDependencies and scripts are defined in `package.json`.

## Prerequisites

- Node.js (recommended 18+)
- npm (bundled with Node) or yarn

## Install

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Available Scripts

Scripts from `package.json`:

- **`dev`**: Starts the Vite development server.
- **`build`**: Produces an optimized production build via Vite.
- **`preview`**: Serves the production build locally.
- **`lint`**: Runs ESLint against the project.

Run them with `npm run <script>`.

## Project Structure

Top-level files and key folders:

- **`index.html`** — App entry HTML.
- **`src/`** — Main source folder.
  - `main.jsx` — App bootstrap and ReactDOM render.
  - `App.jsx` — Root app component and route outlet.
  - `data.js` — Movie dataset used by the app.
  - `assets/` — Static media used by components.
  - `components/` — Reusable UI components.
    - `Nav.jsx`, `Landing.jsx`, `Featured.jsx`, `Explore.jsx`, `Discounted.jsx`, `Footer.jsx` etc.
  - `components/ui/` — Smaller UI primitives like `Movie.jsx`, `Price.jsx`, `Rating.jsx`, `BestMovies.jsx`.
  - `pages/` — Route pages: `Home.jsx`, `Movies.jsx`, `MovieInfo.jsx`, `Cart.jsx`.

Explore these files to understand how state and props flow through the app.

## Components Overview

- **Navigation (`Nav.jsx`)** — Top navigation and links.
- **Landing (`Landing.jsx`)** — Hero / landing view.
- **Featured / Explore / Discounted** — Sections used on home for showcasing movies.
- **Movie card (`components/ui/Movie.jsx`)** — Displays a single movie's image, title, and controls.
- **Cart page (`pages/Cart.jsx`)** — Shows items added to cart and totals.

Each component is intentionally small; look in `src/components/` and `src/components/ui/` to see props and state patterns.

## Data

Movie data is loaded from `src/data.js`. It's a simple JS export used directly by pages and components.

## Styling & Assets

- Tailwind CSS is configured via `tailwind.config.js` and used throughout `src/index.css` / `src/App.css`.
- PostCSS is present for autoprefixing and any PostCSS plugins configured in `postcss.config.js`.

## Linting

ESLint is configured; run the linter with:

```bash
npm run lint
```

Fix issues manually or integrate with your editor for on-save linting.

## Routing

Routing is handled by `react-router-dom`. Look at `src/App.jsx` and `src/pages/` for route definitions and page components.

## Build & Deploy

1. Create a production build:

```bash
npm run build
```

2. Preview locally:

```bash
npm run preview
```

For deployment, serve the contents of the `dist/` folder on any static host (Netlify, Vercel, GitHub Pages with adapter, static S3 bucket, etc.).

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo.
2. Create a feature branch.
3. Run `npm install` and `npm run dev` locally.
4. Open a PR describing the change.

Please run the linter and ensure the app runs locally before submitting changes.

## Credits & License

- Icons: `lucide-react`
- Data: the included dataset in `src/data.js` (no external API required)

No license file is provided in this repository. Add a `LICENSE` file to declare usage terms.

---

If you'd like, I can also:

- Add a `LICENSE` (MIT) file.
- Add badges (build, license, dependencies) to this `README.md`.
- Expand component documentation with code examples and prop tables.

Enjoy exploring the project!
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
