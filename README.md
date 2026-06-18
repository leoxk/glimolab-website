# GlimoLab Website

AI-powered video production studio — official website built with Astro 5.x and Tailwind CSS 4.

## Tech Stack

- [Astro](https://astro.build) 5.x — Static site generator
- [Tailwind CSS](https://tailwindcss.com) 4.x — Utility-first CSS
- MDX — Rich content authoring
- i18n — English (default), Filipino, Bahasa Indonesia

## Local Development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Docker)

Build and run via Docker Compose:

```sh
# Build the image
docker compose build

# Start the container
docker compose up -d
```

The site is served on `http://localhost:3090` (bound to 127.0.0.1).

For reverse proxy setups (e.g., Caddy or Nginx on the host), proxy to `127.0.0.1:3090`.

### VPS Deployment

Target: ARM64 (aarch64) Linux. Both `node:22-alpine` and `nginx:alpine` support multi-architecture — no special configuration needed.

```sh
# On the VPS
git pull
docker compose build --no-cache
docker compose up -d
```

## Project Structure

```
src/
├── components/     # Header, Footer
├── content/        # MDX blog posts, portfolio, services
├── i18n/           # UI translations & helpers
├── layouts/        # BaseLayout (SEO, fonts, shell)
├── pages/          # Route pages
│   ├── index.astro
│   ├── pricing.astro
│   ├── contact.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
└── styles/         # Global CSS + design tokens
```
