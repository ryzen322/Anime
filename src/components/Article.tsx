import { useQuery } from "@tanstack/react-query";
import { listAnime, queryAnimeType } from "../services/api";
import Card from "./common/search/Card/Card";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

import { LoadingCardUI } from "./common/search/loadingComponents/LoadingCardUI";

const Article = ({ animeProps }: { animeProps: listAnime }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animelist", animeProps],
    queryFn: async () => queryAnimeType(animeProps),
    refetchOnMount: false, // Avoid refetch on component remount
    refetchOnWindowFocus: false, // Avoid refetch on focus
    // cacheTime: 10 * 60 * 1000, // Keep cached data for 10 minutes
  });

  const loading = isLoading && <LoadingCardUI />;
  const loadingWithError = !isLoading && error && <LoadingCardUI />;
  const item = !isLoading && !error && <Card listAnime={data!} />;

  return (
    <article className=" w-full  mb-4 px-1 flex flex-col gap-3 mt-6">
      <div className=" flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
        <Link
          to={`/collection/${animeProps.routes}`}
          className=" text-white font-semibold text-2xl cursor-pointer"
        >
          {animeProps.routes} Anime
        </Link>
        <MdOutlineNavigateNext className=" text-white text-4xl font-bold" />
      </div>
      {loading}
      {loadingWithError}
      {item}
    </article>
  );
};

export default Article;
