import { useQuery } from "@tanstack/react-query";
import { listAnime, queryAnimeType } from "../services/api";
import Card from "./common/search/Card/Card";

const Article = ({ typeList }: { typeList: listAnime }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["animelist", typeList],
    queryFn: async () => queryAnimeType(typeList),
  });

  return (
    <article className=" w-full  mb-4 px-1 flex flex-col gap-3 mt-6">
      <h1 className=" text-white font-semibold text-2xl">{typeList} Anime</h1>

      {isLoading ? "loading" : <Card listAnime={data!} />}
    </article>
  );
};

export default Article;
