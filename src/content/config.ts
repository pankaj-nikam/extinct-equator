import { z, defineCollection } from "astro:content";

const bookCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pages: z.number(),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      thumbnail: image().refine((img) => img.format === "jpg", {
        message: "Thumbnail must be a JPG file.",
      }),
    }),
});

export const collections = {
  books: bookCollection,
  articles: articlesCollection,
};
