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
  });

  console.log(error);

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

      {isLoading ? <LoadingCardUI /> : <Card listAnime={data!} />}
    </article>
  );
};

export default Article;
