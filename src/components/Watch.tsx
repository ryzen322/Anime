import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import { getStreaming } from "../services/api";

const Watch = () => {
  const { id } = useParams();

  console.log(id);

  const { data } = useQuery({
    queryKey: ["watch", id],
    queryFn: async () => getStreaming(id),
  });

  console.log(data);

  return (
    <Layout>
      <div className=""></div>
    </Layout>
  );
};

export default Watch;
