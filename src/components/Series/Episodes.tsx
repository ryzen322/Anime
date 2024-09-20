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
  const { filter, episodesArray, pages, nextPages } = useEpisodes(episodes!);

  function strFunction(strEp: string): string {
    const str = strEp.split(" ").slice(1).join();
    return str;
  }

  return (
    <article
      className={` w-full flex flex-col gap-4 overflow-hidden  ${className}`}
    >
      <form className=" w-full px-1 overflow-hidden pb-2">
        <label className="block mb-2 text-lg font-medium text-white">
          Episodes
        </label>
        <select
          id="countries"
          className=" bg-neutral-800 w-full text-white text-sm font-semibold rounded-lg p-2.5 min-h-[2rem]"
          onChange={(e) => nextPages(Number(e.target.value))}
        >
          <option value="dog">{episode}</option>
          {episodesArray.map((item) => (
            <option
              key={item?.id}
              defaultValue={pages}
              value={item?.pageNext}
              className=" mt-1"
            >
              {item?.pagePrev} - {item?.pageNext}
            </option>
          ))}
        </select>
      </form>

      <ul className=" grid grid-cols-6 gap-1 content-center mt-2 md:mt-2 md:grid-cols-5">
        {filter[0]?.episodesAnime?.map((item) => (
          <li
            key={item.id}
            className={` rounded-md ${
              item.id === episode
                ? "bg-stone-400 text-black"
                : "bg-stone-700/85 text-stone-300"
            }  h-[3rem]  shadow-md cursor-pointer flex items-center justify-center flex-col flex-wrap  font-semibold `}
            onClick={() => changeEpisode(item.id)}
          >
            <h1 className=" text-sm">EP</h1>
            <p className=" text-xs">{strFunction(item.title)}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Episodes;
