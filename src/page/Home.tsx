import Article from "../components/Article";
import SectionCart from "../components/SectionCart";

const Home = () => {
  return (
    <main className=" container mx-auto flex flex-col px-4 mt-[4.5rem]">
      <h1 className=" text-white font-semibold text-2xl">Top New Release</h1>
      <SectionCart />

      <Article />
    </main>
  );
};

export default Home;
