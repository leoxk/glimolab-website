---
name: glimolab-website
description: Maintain and update the leoxk/glimolab-website Astro site. Use when working on GlimoLab website code, content, branding, logos, i18n copy, Docker/Komodo deployment readiness, or visual QA for the GlimoLab marketing site.
---

# GlimoLab Website

## Overview

Use this skill to update the GlimoLab marketing site while preserving its Astro, Tailwind, i18n, branding, and Komodo deployment conventions.

The repository is a static Astro site served by nginx through Docker. Prefer small, scoped changes that keep existing component and content patterns intact.

## Quick Workflow

1. Inspect current files before editing:
   - `package.json`
   - `astro.config.mjs`
   - `src/layouts/BaseLayout.astro`
   - affected page/component/content files
2. Keep content and UI changes close to the existing structure:
   - Pages live in `src/pages/`
   - Shared layout lives in `src/layouts/`
   - Components live in `src/components/`
   - UI strings live in `src/i18n/ui.ts`
   - MDX content lives in `src/content/`
3. For visible brand or logo work, read `references/brand-assets.md`.
4. For architecture or routing questions, read `references/project-map.md`.
5. For deployment-sensitive changes, read `references/deployment.md`.
6. Validate with `npm run build` before considering the change complete.

## Project Conventions

- Framework: Astro 5, static output.
- Styling: Tailwind CSS 4 via `@tailwindcss/vite`.
- Theme: dark-first, tech-forward, blue/cyan GlimoLab palette.
- Locales: `en`, `fil`, `id`; English is default and unprefixed.
- Translation helper: use `useTranslations`, `getLangFromUrl`, and `localizePath` from `src/i18n/utils.ts`.
- Deployment: Docker multi-stage build to nginx; app listens through compose on `127.0.0.1:3090:80`.

## Editing Rules

- Preserve existing Astro component style and Tailwind utility usage.
- Add every new UI translation key to all three locale objects in `src/i18n/ui.ts`.
- Use `localizePath()` for internal links rendered from components.
- Keep page metadata in `BaseLayout` props when a page has custom title/description.
- Do not introduce a CMS, client framework, or runtime server unless explicitly requested.
- Do not hardcode production-only absolute links for internal pages.
- Avoid unrelated redesigns when the user asks for content, logo, or copy updates.

## Logo Updates

Use the provided bitmap logo assets from this skill when replacing old inline logo artwork or generating public assets:

- `assets/glimo-lab-logo-stacked.png`: stacked icon + wordmark.
- `assets/glimo-lab-logo-horizontal.png`: horizontal icon + wordmark.

When updating header/footer logos:

- Prefer a compact icon/wordmark treatment that remains legible on the dark header.
- If using the original white-background PNG directly, isolate it in a controlled container or generate a dark-safe derivative first.
- Update `public/favicon.svg` or `public/favicon.ico` only when the user asks for favicon work or the existing favicon is visibly inconsistent.
- Check mobile header width after logo changes; the nav must not crowd the language switcher or menu button.

## Validation

Run:

```bash
npm run build
```

For visual changes, also start the dev server and inspect at desktop and mobile widths. Confirm:

- Header and footer logo are crisp and not squeezed.
- Text does not overlap or wrap awkwardly.
- Locale-prefixed routes still work.
- Static build succeeds without content schema errors.

