import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getDetailAnime } from "../services/api";
import { ArticleDetail } from "./ArticleDetail";
import { DetailLoading } from "./DetailLoading";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["detail-anime", id],
    queryFn: async () => getDetailAnime(id),
  });

  console.log(data);

  return (
    <Layout>
      <h1 className=" text-white font-bold text-2xl">{data?.title?.english}</h1>

      {isLoading ? <DetailLoading /> : <ArticleDetail {...data} />}
    </Layout>
  );
};

export default Detail;
