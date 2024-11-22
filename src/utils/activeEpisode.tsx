import { Episodes } from "../types";

export function activeEpisode({
  episodes,
  activeEp,
}: {
  episodes: Episodes[] | undefined;
  activeEp: string | null;
}): string {
  if (Number(episodes?.length) < 0) {
    return "No Episode Availabe";
  }

  if (activeEp && Number(episodes?.length) !== 0) {
    const titleEpisode = episodes && episodes[0].id; // onepiece-episode-1
    const splitEpisode = titleEpisode?.split("-"); // ['onepiece', 'episode', '1']
    const convertString = splitEpisode?.slice(0, splitEpisode.length - 1); // slice remove the last element of the array
    const joinArryToSTring = [...(convertString as string[]), activeEp].join(
      "-"
    );

    return joinArryToSTring;
  } else {
    return "";
  }
}
