import { useQuery } from "@tanstack/react-query";
import { listAnime, queryAnimeType } from "../services/api";
import Card from "./common/search/Card/Card";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const Article = ({ typeList }: { typeList: listAnime }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["animelist", typeList],
    queryFn: async () => queryAnimeType(typeList),
  });

  return (
    <article className=" w-full  mb-4 px-1 flex flex-col gap-3 mt-6">
      <div className=" flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
        <Link to={"/"} className=" text-white font-semibold text-2xl">
          {typeList} Anime
        </Link>
        <MdOutlineNavigateNext className=" text-white text-4xl font-bold" />
      </div>

      {isLoading ? "loading" : <Card listAnime={data!} />}
    </article>
  );
};

export default Article;
