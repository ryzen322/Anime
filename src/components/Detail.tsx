import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getDetailAnime } from "../services/api";

const Detail = () => {
  const { id } = useParams();

  const data = useQuery({
    queryKey: ["detail-anime", id],
    queryFn: async () => getDetailAnime(id),
  });
  console.log(data);

  return (
    <Layout>
      <section></section>
    </Layout>
  );
};

export default Detail;
