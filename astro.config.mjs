// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://glimolab.com',
  output: 'static',

  // Internationalization — English (default, no prefix), Filipino, Indonesian
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fil', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx()],

  vite: {
    // @ts-ignore — minor vite type mismatch between @tailwindcss/vite and astro's internal vite
    plugins: [tailwindcss()],
  },
});
