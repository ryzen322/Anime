import { useInfiniteQuery } from "@tanstack/react-query";
import Layout from "./Layout";
import { getInfinite } from "../services/api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Collection = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["list"],
      queryFn: getInfinite,
      initialPageParam: 1,
      getNextPageParam: (_, allPages) => {
        return allPages.length + 1;
      },
    });

  const animeList = data?.pages.flatMap((item) => item).map((data) => data);

  useEffect(() => {
    if (inView) {
      console.log("fire");
    }
  }, [inView]);

  if (isLoading) {
    return <div className=" h-[15rem] w-full bg-stone-600"></div>;
  }

  return (
    <Layout>
      <section className=" w-full h-[72.3dvh] relative flex flex-col gap-1">
        <ul className=" grid grid-cols-3 gap-3 w-full overflow-y-scroll no-scrollbar h-full sm:grid-cols-4 md:grid-cols-5">
          {animeList?.map((item) => {
            return (
              <li
                key={item.id}
                className=" h-[175px] min-h-[175px] flex items-center bg-stone-500 rounded-md overflow-hidden relative cursor-pointer"
              >
                <img
                  src={`${item.image}`}
                  className=" w-full h-full object-cover absolute top-0 left-0"
                  alt=""
                />
                <div
                  className={`relative w-full h-full top-0 left-0 bottom-0  flex flex-col justify-end items-start bg-gradient-to-b from-[#101014]/10 to-[#16161b] p-2`}
                >
                  <h1 className=" text-stone-300 text-xs font-semibold">
                    {item.title.english}
                  </h1>
                  <div className=" flex items-start flex-wrap clear-start text-[11px] font-medium text-stone-400">
                    <p>Action</p>
                  </div>
                </div>
              </li>
            );
          })}
          <button
            ref={ref}
            className=" py-1 px-2 bg-stone-400 text-black"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "loading..." : "click"}
          </button>
        </ul>
      </section>
    </Layout>
  );
};

export default Collection;
