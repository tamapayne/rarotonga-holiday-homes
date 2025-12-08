import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const properties = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/properties' }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    type: z.string(),
    capacity: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    price: z.number(),
    priceNote: z.string().optional(),
    featured: z.boolean().default(false),
    featuredImage: z.string(),
    images: z.array(z.string()),
    amenities: z.array(z.string()),
    highlights: z.array(z.string()).optional(),
    host: z.object({
      name: z.string(),
      experience: z.string().optional(),
      responseRate: z.string().optional(),
    }).optional(),
    houseRules: z.array(z.string()).optional(),
    checkIn: z.string().optional(),
    safety: z.array(z.string()).optional(),
  }),
});

export const collections = {
  properties,
};
