import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/api";
// const fakeArray = Array.from({ length: 5 }, (_, index) => index + 1);

const NewsPage = () => {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  console.log(data);

  return (
    <main className=" container mx-auto mt-[4.5rem] ">
      <section className=" h-[82dvh] w-full flex flex-col ">
        <div className=" bg-stone-400 overflow-hidden w-full h-[32rem] relative sm:rounded-t-md md:h-[25rem] md:rounded-none">
          <picture>
            <source
              media="(max-width: 768px)"
              className=" rounded-sm"
              srcSet="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              className=" w-full h-full object-cover relative rounded-sm"
              src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg"
              alt=""
            />
          </picture>
          <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full flex flex-col items-center justify-center gap-2 text-center phoneX:justify-end phoneX:pb-[6rem] md:items-start md:pl-6">
            <h1 className=" text-stone-300 text-2xl font-bold phoneX:text-4xl">
              Chainsaw Man
            </h1>
            <p className=" text-stone-300 font-medium text-sm max-w-[17rem] leading-4 phoneX:text-base phoneX:leading-[18px] phoneX:max-w-[19rem]">
              Denji has simple dream - to live a happy and paceful life,
              spending time with a girl
            </p>
            <div className=" flex items-center justify-center gap-2 h-[2.5rem]">
              <button className=" bg-white h-full text-sm font-bold px-3 rounded-md cursor-pointer">
                Learn More
              </button>
              <button className=" bg-[#292929] h-full text-sm font-bold px-3 rounded-md cursor-pointer text-white">
                To Watch
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" grid grid-cols-5 w-full h-[7rem] relative -top-[1.75rem] z-20 gap-2 px-2 phoneX:h-[9rem] sm:gap-2 sm:h-[11rem]">
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
              <div className=" absolute top-0 left-0 bg-gradient-to-b from-[#101014]/10 to-[#101014] z-20 h-full w-full" />
            </div>
          ))}
        </div> */}
      </section>
    </main>
  );
};

export default NewsPage;
