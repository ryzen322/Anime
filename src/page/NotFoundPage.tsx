import Layout from "../components/Layout";

import RequestError from "../components/RequestError";

const NotFoundPage = () => {
  console.log("hello");
  return (
    <Layout>
      <RequestError />
    </Layout>
  );
};

export default NotFoundPage;
