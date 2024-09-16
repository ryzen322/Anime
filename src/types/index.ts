import { z } from "zod";

export const titleObjectSchema = z.object({
  english: z.string().nullable(),
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

//   const { image, title, status } = props;

export const animeTrendingObject = z.object({
  id: z.string(),
  image: z.string(),
  status: z.string(),
  title: titleObjectSchema,
});

export const trendingAnimeSchema = z.object({
  currentPage: z.number(),
  hasNextPage: z.boolean(),
  results: z.array(animeTrendingObject),
});

export const searchObjectSchema = z.object({
  id: z.string(),
  color: z.string().nullable(),
  cover: z.string().nullable(),
  coverHash: z.string(),
  currentEpisodeCount: z.number().nullable(),
  description: z.string().nullable(),
  genres: genresObjectSchema.nullable(),
  image: z.string(),
  imageHash: z.string(),
  malId: z.number(),
  popularity: z.number(),
  rating: z.number().nullable(),
  releaseDate: z.number().nullable(),
  status: z.string(),
  title: titleObjectSchema,
  totalEpisodes: z.number().nullable(),
  type: z.string().nullable(),
});

export const searchAnimeSchema = z.object({
  results: z.array(searchObjectSchema).nonempty(),
});

export const PremiumAnimeObject = z.object({
  episodeId: z.string(),
  episodeNumber: z.number(),
  episodeTitle: z.string(),
  id: z.string(),
  image: z.string(),
  imageHash: z.string(),
  malId: z.optional(z.string()),
  title: titleObjectSchema.omit({ userPreferred: true }),
  type: z.string(),
});

export const PremiumAnimeSchema = z.object({
  currentPage: z.string(),
  results: z.array(PremiumAnimeObject).nonempty(),
});

export const Artwork = z.object({
  img: z.string().nullable(),
  proivderId: z.string().nullish(),
  type: z.string(),
});
export const Name = z.object({
  first: z.string(),
  full: z.string(),
  last: z.string().nullable(),
  native: z.string().optional().nullable(),
  userPreferred: z.string(),
});
export const VoiceActors = z.object({
  id: z.number(),
  image: z.string(),
  imageHash: z.string(),
  language: z.string(),
  name: Name,
});
export const Characters = z.object({
  id: z.number(),
  image: z.string(),
  imageHash: z.string(),
  role: z.string(),
  name: Name,
  voiceActors: z.array(VoiceActors),
});

export const Recommendation = z.object({
  id: z.number(),
  cover: z.string(),
  coverHash: z.string(),
  episodes: z.number().nullable(),
  image: z.string(),
  imageHash: z.string(),
  malId: z.number(),
  rating: z.number(),
  status: z.string(),
  type: z.string(),
  title: titleObjectSchema,
});

export const trailer = z.object({
  id: z.string(),
  site: z.string(),
  thumbnail: z.string(),
  thumbnailHash: z.string(),
});

export const episodes = z.object({
  id: z.string(),
  image: z.string(),
  title: z.string(),
});

export const DetailSchema = z.object({
  artwork: z.array(Artwork).optional(),
  characters: z.array(Characters).optional(),
  color: z.string().optional(),
  countryOfOrigin: z.string().optional(),
  cover: z.string().optional(),
  coverHash: z.string().optional(),
  currentEpisode: z.number().optional(),
  description: z.string().optional(),
  duration: z.number().optional(),
  id: z.string().optional(),
  image: z.string().optional(),
  imageHash: z.string().optional(),
  isAdult: z.boolean().optional(),
  isLicensed: z.boolean().optional(),
  malId: z.number().optional(),
  popularity: z.number().optional(),
  rating: z.number().optional(),
  releaseDate: z.number().optional(),
  season: z.string().optional(),
  subOrDub: z.string().optional(),
  totalEpisodes: z.number().optional(),
  type: z.string().optional(),
  genres: z.array(z.string()).optional(),
  studios: z.array(z.string()).optional(),
  recommendations: z.array(Recommendation).optional(),
  trailer: trailer.optional(),
  title: titleObjectSchema.omit({ userPreferred: true }).optional(),
  episodes: z.array(episodes).optional(),
});

export type Episodes = z.infer<typeof episodes>;
export type CharacterObj = z.infer<typeof Characters>;
export type Recommendations = z.infer<typeof Recommendation>;
export type TrendingAnimeObj = z.infer<typeof animeTrendingObject>;
export type DetailAnimeObj = z.infer<typeof DetailSchema>;
export type PremiumAccObject = z.infer<typeof PremiumAnimeObject>;
export type AnimeObj = z.infer<typeof animeObjectSchema>;
export type Genres = z.infer<typeof genresObjectSchema>;
export type SearchAnime = z.infer<typeof searchAnimeSchema>;
export type popularAnimeType = z.infer<typeof popularAnimeSchema>;
