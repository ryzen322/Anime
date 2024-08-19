import Article from "../components/Article";
import SectionCart from "../components/SectionCart";

const Home = () => {
  return (
    <main
      className=" container mx-auto flex flex-col gap-8 px-4 mt-[6rem] "
      id="main"
    >
      <div>
        <SectionCart />
      </div>
      <Article typeList="Popular" />
      <Article typeList="Trending" />
    </main>
  );
};

export default Home;
