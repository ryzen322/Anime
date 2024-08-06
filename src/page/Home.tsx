import SectionCart from "../components/SectionCart";

const Home = () => {
  return (
    <main className=" container mx-auto flex flex-col mt-3 px-4 ">
      <h1 className=" text-white mb-3 font-semibold text-2xl">
        Top New Release
      </h1>
      <SectionCart />
    </main>
  );
};

export default Home;
