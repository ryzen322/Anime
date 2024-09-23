export const nextStringEpisode = (episode: string): string => {
  const nextEp = episode.split("-");
  const nextSubEp = nextEp.slice(0, nextEp.length - 1);
  const [changeEpisodeEp] = nextEp.slice(nextEp.length - 1);
  const addnumber = Number(changeEpisodeEp) + 1;
  const nextChangeEp = [...nextSubEp, addnumber].join("-");
  return nextChangeEp;
};
