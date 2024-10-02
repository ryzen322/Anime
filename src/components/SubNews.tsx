import { AnimeObj } from "../types";

const SubNews = ({ anime }: { anime: AnimeObj[] | undefined }) => {
  return (
    <div className=" flex flex-col relative -top-[3.75rem] z-20 gap-3">
      <h1 className=" text-white text-sm font-semibold text-center sm:text-lg "></h1>
      <ul className=" flex items-center justify-center h-[7rem] overflow-hidden gap-1 flex-wrap w-full phoneX:h-[10rem] sm:gap-2 md:gap-5 lg:h-[13rem] xl:gap-5 xl:h-[14.5rem] 2xl:h-[18rem]">
        {anime?.map((item) => (
          <li
            key={item.id}
            className=" h-full w-[19%] cursor-pointer bg-stone-500 rounded-md overflow-hidden last:hidden relative sm:w-[18%] md:last:block md:w-[15.5%] 2xl:w-[14%]"
          >
            <img
              src={item.image ? item.image : ""}
              alt=""
              className=" w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNews;
