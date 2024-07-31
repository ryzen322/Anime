import { popularAnimeSchema } from "../types";
import { instance } from "./instance";

export const popularAnime = async () => {
  try {
    const { data }: { data: unknown } = await instance.get(
      "meta/anilist/popular",
      {
        params: { page: 2, perPage: 20 },
      }
    );

    const validatedAnime = popularAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("error nigga");
  }
};
