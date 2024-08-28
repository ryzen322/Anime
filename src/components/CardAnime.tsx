import { Link } from "react-router-dom";
import CardsAnime from "./CardsAnime";
import { useQuery } from "@tanstack/react-query";
import { getPrimiumAnime } from "../services/api";
import { dummyData } from "../api/dummyApi";
import CardsAnimeLoading from "./common/search/loadingComponents/CardsAnimeLoading";

const CardAnime = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["premium-anime"],
    queryFn: getPrimiumAnime,
  });

  const loading = dummyData(4).map((item) => (
    <CardsAnimeLoading key={item.id} className="bg-[#333333] animate-pulse">
      <div className=""></div>
    </CardsAnimeLoading>
  ));

  return (
    <section className=" flex flex-col bg-[#202024] rounded-md">
      <div className=" w-full h-[5rem] flex items-center justify-between gap-2 p-2 rounded-md">
        <div className=" flex-1  h-full rounded-md flex items-center justify-center cursor-pointer">
          <p className=" text-white text-lg font-semibold">Premium Account</p>
        </div>
        <div className=" flex-1 h-full rounded-md flex items-center justify-center">
          <Link
            to={""}
            className=" text-stone-300 font-semibold text-base border py-2 px-3 rounded-md hover:bg-stone-500/50 cursor-pointer"
          >
            View More
          </Link>
        </div>
      </div>
      <ul className=" grid grid-cols-2  py-2 px-2 rounded-md gap-2 mb-5 md:gap-4 lg:grid-cols-4">
        {isLoading
          ? loading
          : data?.results.map((item) => <CardsAnime key={item.id} {...item} />)}
      </ul>
    </section>
  );
};

export default CardAnime;
