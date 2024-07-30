import { popularAnimeSchema, popularAnimeType } from "../types";
import { instance } from "./instance";

export const popularAnime = async () => {
  try {
    const { data }: { data: popularAnimeType } = await instance.get(
      "meta/anilist/popular",
      {
        params: {
          page: 1,
          perPage: 20,
        },
      }
    );

    const validatedAnime = popularAnimeSchema.safeParse(data);

    console.log(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("error nigga");
  }
};
