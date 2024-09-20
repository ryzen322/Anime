import { useMemo, useState } from "react";
import { z } from "zod";
import { episodes, Episodes } from "../types";
import stringEpConvert from "../utils/stringEpConvert";

const episodesList = z
  .object({
    id: z.number(),
    pagePrev: z.number(),
    pageNext: z.number(),
    episodesAnime: z.array(episodes).optional(),
  })
  .optional();

const EpisodesSchema = z.array(episodesList);
export type EpisodesArray = z.infer<typeof EpisodesSchema>;
// type EpisodeObject = z.infer<typeof episodesList>;

export const useEpisodes = (episodeType: Episodes[]) => {
  const { activeEp, lastEpisode } = stringEpConvert(episodeType);

  const [pages, setPages] = useState(activeEp);
  const animeNext = episodeType.length < 30 ? 1 : episodeType.length / 30 + 1;

  const array = Array.from({ length: animeNext }, (_, index) => {
    return {
      id: index + 1,
      pagePrev: index + 1 === 1 ? 0 : (index + 1) * 30 - 30,
      pageNext: (index + 1) * 30,
    };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const episodesArray: EpisodesArray = [];

  for (const arr of array) {
    const sliceEp = episodeType.slice(arr.pagePrev, arr.pageNext);
    const checkedLastEp = sliceEp.some((t) => t.id === lastEpisode);

    const episode = {
      episodesAnime: sliceEp,
      id: arr.id,
      pagePrev: arr.pagePrev + 1,
      pageNext:
        episodeType.length < 29
          ? episodeType.length
          : checkedLastEp
          ? episodeType.length
          : arr.pageNext,
    };

    episodesArray.push(episode);
  }

  const filter = useMemo(
    () => episodesArray?.filter((item) => item?.pageNext === pages),
    [episodesArray, pages]
  );

  function nextPages(pageNumber: number | undefined) {
    if (pageNumber) {
      setPages(pageNumber);
    }
  }

  return {
    pages,
    nextPages,
    filter,
    episodesArray,
  };
};
