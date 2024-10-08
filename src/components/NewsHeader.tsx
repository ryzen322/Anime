import { useQuery } from "@tanstack/react-query";
import { getRadomAnime } from "../services/api";
import { FaRegBookmark } from "react-icons/fa6";

const NewsHeader = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["random-anime"],
    queryFn: getRadomAnime,
  });

  if (isLoading) {
    return <div className="h-[10rem] w-full bg-stone-600 rounded-md" />;
  }

  return (
    <section className=" w-full flex flex-col gap-3 px-4 mb-12 ">
      <div className=" flex flex-col gap-1 text-stone-200">
        <h1 className=" font-semibold text-lg md:text-xl">Top News</h1>
        <p className=" font-light text-sm md:text-md md:font-normal">
          The hottest news and views from the world of football
        </p>
      </div>
      <div className=" flex flex-col md:flex-row gap-4">
        <div className=" h-[31rem] w-full rounded-md bg-stone-600 overflow-hidden md:w-[22rem] md:min-w-[22rem]">
          <img
            className=" w-full h-full object-cover"
            src={data?.image}
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-4 text-white md:justify-center">
          <h1 className=" font-semibold text-lg leading-5">
            {data?.title?.english || data?.title?.native}
          </h1>
          <p
            className={` text-sm font-light hidden md:block`}
            dangerouslySetInnerHTML={{
              __html: `${data?.description} `,
            }}
          />
          <div className=" flex flex-col text-stone-300 font-normal text-xs">
            <p>Status: {data?.status}</p>
            <p>Rating: {data?.rating}</p>
            <p>Current Episode: {data?.currentEpisode}</p>
            <p>Current Popularity: {data?.popularity}</p>
          </div>
          <div className=" w-full  flex justify-between items-center">
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
