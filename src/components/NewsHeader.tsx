import { useQuery } from "@tanstack/react-query";
import { getRadomAnime } from "../services/api";
import { FaRegBookmark } from "react-icons/fa6";
import NewsHeaderLoading from "./common/search/loadingComponents/NewsHeaderLoading";

const NewsHeader = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["random-anime"],
    queryFn: getRadomAnime,
  });

  if (isLoading) {
    return <NewsHeaderLoading />;
  }

  return (
    <section className=" w-full flex flex-col gap-3 px-4 mb-12 overflow-hidden">
      <div className=" flex flex-col gap-1 text-stone-200">
        <h1 className=" font-medium text-lg md:text-2xl">Top News</h1>
        <p className=" font-semibold text-base leading-6 md:text-xl md:font-normal">
          The hottest news and views from the world of Anime
        </p>
      </div>
      <div className=" flex flex-col md:flex-row gap-4">
        <div className=" h-[15rem] w-full rounded-md  overflow-hidden phoneX:h-[40rem] md:w-[22rem] md:min-w-[22rem]">
          <img
            className=" w-full h-full object-cover rounded-md phoneX:scale-95 md:scale-100"
            src={data?.image}
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-3 text-white md:justify-center ">
          <h1 className=" font-semibold text-lg leading-5">
            {data?.title?.english || data?.title?.native}
          </h1>
          <div className=" overflow-y-scroll no-scrollbar md:max-h-[17rem] ">
            <p
              className={` text-sm font-light `}
              dangerouslySetInnerHTML={{
                __html: `${data?.description} `,
              }}
            />
          </div>
          <div className=" w-full grid grid-cols-2 gap-8">
            <div className=" flex flex-col text-stone-400 font-medium text-xs">
              <p>Status: {data?.status}</p>
              <p>Rating: {data?.rating}</p>
              <p>Current Episode: {data?.currentEpisode}</p>
              <p>Current Popularity: {data?.popularity} views</p>
              <p>Total Episode: {data?.totalEpisodes}</p>
              <p>
                Total Genres:
                {data?.genres?.map((item) => {
                  return `${item} `;
                })}
              </p>
            </div>
            <div className=" flex flex-col text-stone-400 font-medium text-xs">
              <p>Adult: {data?.isAdult ? "R18+" : "PG"}</p>
              <p>Season: {data?.season}</p>
              <p>Status: {data?.status}</p>
              <p>License: {data?.isLicensed ? "Lisence" : "Pirated"}</p>
              <p>Type: {data?.type}</p>
            </div>
          </div>
          {data?.characters && data.characters.length === 0 ? (
            ""
          ) : (
            <div className=" flex flex-col gap-2">
              <h1 className=" font-semibold text-lg md:text-xl">Character</h1>
              <ul className=" w-full h-[7.5rem]  flex items-center gap-1 overflow-x-scroll no-scrollbar">
                {data?.characters?.map((item) => (
                  <li
                    key={item.id}
                    className=" min-w-[6rem] h-full rounded-md bg-stone-600 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className=" w-full h-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data?.recommendations && data.recommendations.length === 0 ? (
            ""
          ) : (
            <div className=" flex flex-col gap-2">
              <h1 className=" font-semibold text-lg md:text-xl">
                Recomendation
              </h1>
              <ul className=" w-full h-[7.5rem]  flex items-center gap-1 overflow-x-scroll no-scrollbar">
                {data?.recommendations?.map((item) => (
                  <li
                    key={item.id}
                    className=" min-w-[6rem] h-full rounded-md bg-stone-600 cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className=" w-full h-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className=" w-full  flex justify-between items-center md:mt-auto">
            <div className="h-[24px] flex items-center gap-2">
              <div className=" h-full w-[24px] bg-stone-500 rounded-sm"></div>
              <p className=" text-xs font-semibold">24 mins . 5 hours ago</p>
            </div>
            <button className=" h-[44px] w-[44px] bg-[#181a1b] rounded-sm flex items-center justify-center cursor-pointer">
              <FaRegBookmark className=" text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHeader;
