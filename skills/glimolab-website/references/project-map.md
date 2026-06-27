# Project Map

## Key Files

- `astro.config.mjs`: Astro config, static output, i18n routing.
- `src/styles/global.css`: Tailwind 4 theme tokens and global utilities.
- `src/layouts/BaseLayout.astro`: HTML shell, SEO tags, Header/Footer, global reveal script.
- `src/components/Header.astro`: fixed navigation, language switcher, CTA, mobile menu.
- `src/components/Footer.astro`: footer links, social links, contact info.
- `src/i18n/ui.ts`: UI translation dictionary for `en`, `fil`, `id`.
- `src/i18n/utils.ts`: locale detection, localized paths, translation function.
- `src/content.config.ts`: Astro content collection schemas.

## Page Structure

- `src/pages/index.astro`: homepage sections.
- `src/pages/about.astro`: about/mission/team page.
- `src/pages/pricing.astro`: pricing cards, comparison, FAQ.
- `src/pages/contact.astro`: contact form and contact details.
- `src/pages/services/`: services landing and service detail pages.
- `src/pages/portfolio/`: portfolio listing and dynamic detail route.
- `src/pages/blog/`: blog listing and dynamic detail route.

## Content Collections

- `src/content/blog/`: blog MDX.
- `src/content/portfolio/`: portfolio MDX.
- `src/content/services/`: service content collection, currently available for future MDX entries.

When adding MDX, keep frontmatter aligned with `src/content.config.ts`.

## i18n Notes

- English routes are unprefixed.
- Filipino uses `/fil/...`.
- Indonesian uses `/id/...`.
- New navigation or CTA copy must be added to all locale dictionaries.

