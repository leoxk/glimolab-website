/**
 * GlimoLab Content Collections (Astro 5.x)
 *
 * Defines typed content schemas for portfolio, blog, and services.
 * Uses the glob loader API so each entry is a markdown/MDX file
 * inside the corresponding `src/content/<collection>` directory.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* --- Portfolio — showcase of client video work --- */
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

/* --- Blog — articles and insights --- */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('GlimoLab Team'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* --- Services — offerings catalog --- */
const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { portfolio, blog, services };
