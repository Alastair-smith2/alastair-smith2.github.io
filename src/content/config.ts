import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    og: z
      .array(
        z.object({
          title: z.string(),
          description: z.boolean().or(z.string()),
        })
      )
      .optional(),
  }),
});

export const collections = { posts };
