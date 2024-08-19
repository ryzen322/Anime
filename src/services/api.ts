import { popularAnimeSchema, searchAnimeSchema } from "../types";
import { instance } from "./instance";

export const popularAnime = async () => {
  try {
    const { data }: { data: unknown } = await instance.get(
      "meta/anilist/popular",
      {
        params: { page: 1, perPage: 6 },
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
    const { data } = await instance.get(`meta/anilist/${search}`, {
      params: {
        page: 1,
      },
    });

    data.results.map(() => {
      // console.log(item.title);
    });

    const validatedAnime = searchAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data;
  } catch (error) {
    throw new Error("We couldn't find the anime you like :-(");
  }
};

export type listAnime = "Trending" | "Popular";

export const queryAnimeType = async (animeTypeList: listAnime) => {
  try {
    const { data } = await instance.get(
      `meta/anilist/${animeTypeList.toLowerCase()}`,
      {
        params: { page: 1, perPage: 6 },
      }
    );
    const validatedAnime = popularAnimeSchema.safeParse(data);

    console.log(validatedAnime);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("Try Again");
  }
};
