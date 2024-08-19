import Article from "../components/Article";
import SectionCart from "../components/SectionCart";

const Home = () => {
  return (
    <main
      className=" container mx-auto flex flex-col px-4 mt-[4.6rem] "
      id="main"
    >
      <h1 className=" text-white font-semibold text-2xl">Top New Release</h1>
      <SectionCart />
      <Article typeList="Popular" />
      <Article typeList="Trending" />
    </main>
  );
};

export default Home;
