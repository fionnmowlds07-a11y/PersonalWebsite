import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    role: z.string(),
    tech: z.string(),
    highlight: z.string(),
    liveUrl: z.string().default(''),
    repoUrl: z.string().default(''),
  }),
});

export const collections = { projects };
