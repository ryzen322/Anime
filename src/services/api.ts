import {
  AiringAnimeSchema,
  DetailSchema,
  ErrorSchema,
  popularAnimeSchema,
  searchAnimeSchema,
  StreamingSchema,
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
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
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
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export interface listAnime {
  routes: "Trending" | "Popular";
  page: number;
  perPage: number;
}

export const queryAnimeType = async (animeTypeList: listAnime) => {
  try {
    const { data } = await instance.get(
      `meta/anilist/${animeTypeList.routes.toLowerCase()}`,
      {
        params: { page: animeTypeList.page, perPage: animeTypeList.perPage },
      }
    );

    const validatedAnime = popularAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
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
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export const getTrendingAnime = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/trending`, {
      params: { page: 1, perPage: 15 },
    });
    const validatedAnime = trendingAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }
    return validatedAnime.data;
  } catch (error) {
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export const getDetailAnime = async (id: string | undefined) => {
  try {
    const { data } = await instance.get(`meta/anilist/info/${id}`);

    const validateDetail = DetailSchema.safeParse(data);

    if (!validateDetail.success) {
      throw new Error(`${validateDetail.error}`);
    }

    return validateDetail.data;
  } catch (error) {
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export const getStreaming = async (mailId: string) => {
  try {
    const { data } = await instance.get(`meta/anilist/watch/${mailId}`);

    const validate = StreamingSchema.safeParse(data);

    if (!validate.success) {
      throw new Error(`${validate.error}`);
    }

    return validate.data;
  } catch (error) {
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export const getInfinite = async ({ pageParam }: { pageParam: number }) => {
  try {
    const { data } = await instance.get(`meta/anilist/trending`, {
      params: { page: pageParam, perPage: 20 },
    });

    const validatedAnime = trendingAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data.results;
  } catch (error) {
    const { data } = ErrorSchema.safeParse(error);

    throw new Error(`${data?.message} code:${data?.code}`);
  }
};

export const getNews = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/trending`, {
      params: { page: 1 },
    });

    const validatedAnime = popularAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data;
  } catch (error) {
    throw new Error("error");
  }
};

export const getRadomAnime = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/random-anime`);

    const validatedAnime = DetailSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data;
  } catch (error) {
    throw new Error("error");
  }
};

export const getGetAiringAnime = async () => {
  try {
    const { data } = await instance.get(`meta/anilist/airing-schedule`, {
      params: { page: 1 },
    });

    const validatedAnime = AiringAnimeSchema.safeParse(data);

    if (!validatedAnime.success) {
      throw new Error(`${validatedAnime.error}`);
    }

    return validatedAnime.data;
  } catch (error) {
    throw new Error("error");
  }
};
