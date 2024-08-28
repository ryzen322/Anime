import Article from "../components/Article";
import SectionCart from "../components/SectionCart";
import Subscription from "../components/Subscription";
import CardAnime from "../components/CardAnime";
import MostView from "../components/MostView";
import { OfferComponent } from "../components/OfferComponent";

const Home = () => {
  return (
    <main
      className=" container mx-auto flex flex-col gap-8 px-4 mt-[6rem] mb-[3rem]"
      id="main"
    >
      <div>
        <SectionCart />
      </div>
      <Article typeList="Popular" />
      <Article typeList="Trending" />

      <CardAnime />
      <MostView />
      <Subscription />
      <OfferComponent />
    </main>
  );
};

export default Home;
