import { z } from "zod";

export const titleObjectSchema = z.object({
  english: z.string(),
  native: z.string(),
  romaji: z.string(),
  userPreferred: z.string(),
});
export const trailerObjectSchema = z.object({
  id: z.string().optional(),
  site: z.string().optional(),
  thumbnail: z.string().optional(),
  thumbnailHash: z.string(),
});
export const genresObjectSchema = z.string().array();

export const animeObjectSchema = z.object({
  color: z.string().nullable(),
  cover: z.string().nullable(),
  coverHash: z.string(),
  description: z.string(),
  duration: z.number(),
  id: z.string(),
  image: z.string(),
  imageHash: z.string(),
  malId: z.number(),
  rating: z.number(),
  releaseDate: z.number(),
  status: z.string(),
  totalEpisodes: z.number(),
  type: z.string(),
  genres: genresObjectSchema,
  trailer: trailerObjectSchema,
  title: titleObjectSchema,
});

export const popularAnimeSchema = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  results: z.array(animeObjectSchema),
});

export type popularAnimeType = z.infer<typeof popularAnimeSchema>;
