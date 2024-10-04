import { useQuery } from "@tanstack/react-query";
import NewsItems from "./NewsItems";
import { getGetAiringAnime } from "../services/api";

const NewsItem = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Airing-Anime"],
    queryFn: getGetAiringAnime,
  });

  return (
    <div className=" h-[12rem] w-full  flex flex-col gap-1 px-1">
      <h1 className=" text-white font-semibold text-sm">Most Popular</h1>
      <ul className=" h-full flex items-center overflow-x-scroll no-scrollbar gap-1">
        <NewsItems />
        {/* {data.results.map((_, index) => (
          <NewsItems key={index} />
        ))} */}
      </ul>
    </div>
  );
};

export default NewsItem;
