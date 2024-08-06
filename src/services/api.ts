import { popularAnimeSchema, searchAnimeSchema } from "../types";
import { instance } from "./instance";

export const popularAnime = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  try {
    const { data }: { data: unknown } = await instance.get(
      "meta/anilist/popular",
      {
        params: { page: page, perPage: perPage },
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
