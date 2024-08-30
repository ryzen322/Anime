import {
  DetailSchema,
  popularAnimeSchema,
  searchAnimeSchema,
  trendingAnimeSchema,
} from "../types";
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

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("Try Again");
  }
};

export const getPrimiumAnime = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/trending`, {
      params: { page: 1, perPage: 4 },
    });
    const validatedAnime = popularAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("Try Again");
  }
};

export const getTrendingAnime = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/trending`, {
      params: { page: 1, perPage: 15 },
    });
    const validatedAnime = trendingAnimeSchema.safeParse(data);

    console.log(validatedAnime);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    throw new Error("Try Again");
  }
};

export const getDetailAnime = async (id: string | undefined) => {
  try {
    const { data } = await instance.get(`meta/anilist/info/${id}`);

    console.log(data);
    // const item = data.characters.map((data) => data.name);
    // console.log(item.map((val) => val.native));

    const validateDetail = DetailSchema.safeParse(data);

    console.log(validateDetail);

    if (!validateDetail.success) {
      throw new Error(`${validateDetail.error}`);
    }

    return validateDetail.data;
  } catch (error) {
    throw new Error("Try Again");
  }
};
