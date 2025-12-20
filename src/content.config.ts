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
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    nearbyAttractions: z.array(z.object({
      name: z.string(),
      type: z.enum(['beach', 'restaurant', 'attraction', 'shopping', 'airport', 'landmark']),
      distance: z.string(),
      coordinates: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      description: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  properties,
};
