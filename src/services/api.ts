import { popularAnimeSchema, searchAnimeSchema } from "../types";
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

export const searchAnime = async (search: string | undefined) => {
  try {
    const { data } = await instance.get(`meta/anilist/${search}`);
    console.log(data);
    data.results.map(() => {
      // console.log(item.title);
    });

    const validatedAnime = searchAnimeSchema.safeParse(data);
    console.log(validatedAnime);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data;
  } catch (error) {
    throw new Error("error nigga");
  }
};
