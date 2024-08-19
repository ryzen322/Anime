import Article from "../components/Article";
import SectionCart from "../components/SectionCart";
import Subscription from "../components/Subscription";
import CardAnime from "../components/CardAnime";

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

      <Subscription />
      <CardAnime />
    </main>
  );
};

export default Home;
