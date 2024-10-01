import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/api";
import NewsHeader from "../components/NewsHeader";
const fakeArray = Array.from({ length: 6 }, (_, index) => index + 1);

const NewsPage = () => {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  data;

  return (
    <main className=" container mx-auto mt-[4.5rem] ">
      <section className=" h-[82dvh] w-full flex flex-col ">
        <NewsHeader />
        <div className=" flex flex-col relative -top-[3.75rem] z-20 gap-3 px-2">
          <h1 className=" text-white text-sm font-semibold sm:text-lg ">
            Special For You
          </h1>
          <ul className=" flex items-center justify-center h-[7rem] gap-1 flex-wrap w-full phoneX:h-[10rem] sm:gap-2 lg:h-[13rem] xl:gap-3 xl:h-[14.5rem] 2xl:h-[18rem]">
            {fakeArray.map((_, index) => (
              <li
                key={index}
                className=" h-full w-[19%] bg-stone-500 rounded-md overflow-hidden last:hidden relative sm:w-[18%] md:last:block md:w-[15.5%] 2xl:w-[14%]"
              >
                <img
                  src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
