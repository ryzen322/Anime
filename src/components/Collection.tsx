import { useParams } from "react-router-dom";
import Layout from "./Layout";

const Collection = () => {
  const { title } = useParams();
  console.log(title);
  return (
    <Layout>
      <div className=" text-white">{title}</div>
    </Layout>
  );
};

export default Collection;
