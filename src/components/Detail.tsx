import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getDetailAnime } from "../services/api";
import { ArticleDetail } from "./ArticleDetail";
import { DetailLoading } from "./DetailLoading";
import RequestError from "./RequestError";
import { ContextEpisode } from "./store/store";
import { useContext } from "react";

const Detail = () => {
  const { id } = useParams();
  const { changePlayer, checkPlayerError } = useContext(ContextEpisode);

  const { data, isLoading, error } = useQuery({
    queryKey: ["detail-anime", id],
    queryFn: async () => {
      changePlayer("youtube");
      checkPlayerError(null);
      return getDetailAnime(id);
    },
  });

  if (!isLoading && error) {
    return (
      <Layout>
        <RequestError message={error.message} />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className=" text-white font-bold text-2xl">{data?.title?.english}</h1>

      {isLoading ? <DetailLoading /> : <ArticleDetail {...data!} />}
    </Layout>
  );
};

export default Detail;
