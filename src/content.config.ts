/**
 * GlimoLab Content Collections (Astro 5.x)
 *
 * Defines typed content schemas for portfolio.
 * Uses the glob loader API so each entry is a markdown/MDX file
 * inside the corresponding `src/content/<collection>` directory.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* --- Portfolio — concept showcases and selected video work --- */
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    thumbnail: z.string().optional(),
    videoUrl: z.string().optional(),
    client: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    results: z
      .object({
        views: z.string().optional(),
        conversion: z.string().optional(),
        cost_saving: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { portfolio };
