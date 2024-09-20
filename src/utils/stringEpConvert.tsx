import { Episodes } from "../types";

const stringEpConvert = (
  episodeType: Episodes[]
): {
  activeEp: number;
  lastEpisode: string;
} => {
  const lastEpisode = episodeType[episodeType.length - 1].id;

  const activeEp = lastEpisode
    .split("-")
    .splice(lastEpisode.split("-").length - 1)
    .join();
  return {
    activeEp: Number(activeEp),
    lastEpisode: lastEpisode,
  };
};

export default stringEpConvert;
