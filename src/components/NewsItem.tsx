import { useQuery } from "@tanstack/react-query";
import { getGetAiringAnime } from "../services/api";
import NewsItems from "./NewsItems";
import { loadingItem } from "../utils";

const NewsItem = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Airing-Anime"],
    queryFn: getGetAiringAnime,
  });

  if (isLoading) {
    return <NewsItemLoading />;
  }

  const dublicate = data?.results?.filter((item) => item.id !== "180599");

  return (
    <div className="  w-full  flex flex-col gap-3 px-2 ">
      <h1 className=" text-white font-semibold text-[18px]">
        Top Chart: Movies
      </h1>
      <ul className=" grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5">
        {dublicate?.map((item) => (
          <NewsItems key={item.title.native} airing={item} />
        ))}
      </ul>
    </div>
  );
};

export default NewsItem;

const NewsItemLoading = () => {
  return (
    <ul className=" w-full  grid grid-cols-1 animate-pulse md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5">
      {loadingItem.map((item) => (
        <li
          key={item.id}
          className=" flex h-[14rem] justify-between items-center gap-2 p-2 border-t last:border-b  md:border-t-0 md:border-b"
        >
          <div className=" flex-1 h-full flex flex-col gap-2 flex-wrap">
            <div className=" w-[25%] h-[2rem] bg-stone-600 rounded-sm" />
            <div className=" w-[75%] h-[2rem] bg-stone-600 rounded-sm" />
            <div className=" w-[80%] h-[2rem] bg-stone-600 rounded-sm" />
            <div className=" w-[85%] h-[2rem] bg-stone-600 rounded-sm" />

            <div className=" w-full h-[2.25rem] flex justify-between  items-center mt-auto">
              <div className=" h-full w-[2rem] bg-stone-700 rounded-sm" />
              <div className=" h-full w-[2rem] bg-stone-700 rounded-sm" />
            </div>
          </div>
          <div className=" shrink-0 w-[9.5rem] h-full bg-stone-700 rounded-sm"></div>
        </li>
      ))}
    </ul>
  );
};
