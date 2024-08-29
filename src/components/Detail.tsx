import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getDetailAnime } from "../services/api";
import { ArticleDetail } from "./ArticleDetail";

const Detail = () => {
  const { id } = useParams();

  const data = useQuery({
    queryKey: ["detail-anime", id],
    queryFn: async () => getDetailAnime(id),
  });

  console.log(data);

  return (
    <Layout>
      <h1 className=" text-white font-bold text-2xl">
        RAWMEN: Food Figher Arena
      </h1>
      <ArticleDetail />
    </Layout>
  );
};

export default Detail;
