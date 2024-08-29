import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getDetailAnime } from "../services/api";
import { ArticleDetail } from "./ArticleDetail";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["detail-anime", id],
    queryFn: async () => getDetailAnime(id),
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Layout>
      <h1 className=" text-white font-bold text-2xl">
        RAWMEN: Food Figher Arena
      </h1>
      <ArticleDetail {...data} />
    </Layout>
  );
};

export default Detail;
