import Article from "../components/Article";
import SectionCart from "../components/SectionCart";
import Subscription from "../components/Subscription";
import CardAnime from "../components/CardAnime";
import MostView from "../components/MostView";
import { OfferComponent } from "../components/OfferComponent";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <SectionCart />
      </div>
      <Article animeProps={{ page: 1, perPage: 6, routes: "Popular" }} />
      <Article animeProps={{ page: 2, perPage: 6, routes: "Trending" }} />

      <CardAnime />

      <MostView />
      <Subscription />
      <OfferComponent />
    </Layout>
  );
};

export default Home;
