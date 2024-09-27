import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/api";
const fakeArray = Array.from({ length: 5 }, (_, index) => index + 1);

const NewsPage = () => {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  console.log(data);

  return (
    <main className=" container mx-auto mt-[4.5rem] ">
      <section className=" h-[82dvh] w-full flex flex-col ">
        <div className=" bg-stone-400 overflow-hidden w-full h-[12rem] relative">
          <img
            className=" w-full h-full object-cover relative"
            src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/173694-zkZHpXUKouoC.jpg"
            alt=""
          />
          <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full"></div>
        </div>
        <div className=" grid grid-cols-5 w-full h-[7rem] relative -top-[2.75rem] z-20 gap-1 px-2 phoneX:h-[9rem] sm:gap-2 sm:h-[11rem]">
          {fakeArray.map((_, index) => (
            <div
              key={index}
              className=" rounded-sm bg-stone-800 overflow-hidden relative cursor-pointer"
            >
              <img
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx173694-XcwGOMBxboOO.png"
                alt=""
                className=" w-full h-full object-cover relative"
              />
              {/* <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full" /> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
