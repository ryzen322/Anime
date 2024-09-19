import { useContext } from "react";
import { ContextEpisode } from "../store/store";
import { Episodes as EpisodeType } from "../../types";
import { useEpisodes } from "../../hooks/useEpisdes";

const Episodes = ({
  className,
  episodes,
}: {
  className: string;
  episodes: EpisodeType[];
}) => {
  const { changeEpisode, episode } = useContext(ContextEpisode);
  const { filter } = useEpisodes(episodes!);

  function strFunction(strEp: string): string {
    const str = strEp.split(" ").slice(1).join();
    return str;
  }

  return (
    <div className={` w-full flex flex-col gap-4 ${className}`}>
      <ul className=" flex flex-wrap items-center gap-1 justify-center">
        {filter[0]?.episodesAnime?.map((item) => (
          <li
            key={item.id}
            className={` rounded-md ${
              item.id === episode
                ? "bg-stone-400 text-black"
                : "bg-stone-700/85 text-stone-300"
            }  h-[3rem] w-[3rem] shadow-md cursor-pointer flex items-center justify-center flex-col flex-wrap  font-semibold `}
            onClick={() => changeEpisode(item.id)}
          >
            <h1 className=" text-sm">EP</h1>
            <p className=" text-xs">{strFunction(item.title)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Episodes;
