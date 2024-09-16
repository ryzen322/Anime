import { useMemo, useState } from "react";
import { z } from "zod";
import { episodes, Episodes } from "../types";

const episodesList = z
  .object({
    id: z.number(),
    pagePrev: z.number(),
    pageNext: z.number(),
    episodesAnime: z.array(episodes).optional(),
  })
  .optional();

const EpisodesSchema = z.array(episodesList);
type EpisodesArray = z.infer<typeof EpisodesSchema>;
// type EpisodeObject = z.infer<typeof episodesList>;

export const useEpisodes = (episodeType: Episodes[]) => {
  const [episodeNum, setEpisodeNumb] = useState(1);

  const changeEpisode = (id: number): void => {
    setEpisodeNumb(id);
  };

  const episodeSlice =
    episodeType.length < 48 ? 1 : episodeType.length / 48 + 1;

  const array = Array.from({ length: episodeSlice }, (_, index) => {
    return {
      id: index + 1,
      pagePrev: index + 1 === 1 ? 0 : (index + 1) * 48 - 48,
      pageNext: (index + 1) * 48,
    };
  });

  const episodesArray: EpisodesArray = useMemo(() => [], []);

  for (const arr of array) {
    const episode = {
      episodesAnime: episodeType.slice(arr.pagePrev, arr.pageNext),
      id: arr.id,
      pagePrev: arr.pagePrev,
      pageNext: episodeType.length < 48 ? episodeType.length : arr.pageNext,
    };
    episodesArray.push(episode);
  }

  const filterEpisode = useMemo(() => {
    return episodesArray.filter((item) => item?.id === episodeNum);
  }, [episodeNum, episodesArray]);

  return {
    filterEpisode,
    changeEpisode,
    episodesArray,
  };
};
