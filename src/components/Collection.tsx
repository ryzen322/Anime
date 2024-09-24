import { useInfiniteQuery } from "@tanstack/react-query";
import Layout from "./Layout";
import { getInfinite } from "../services/api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CollectionList } from "./CollectionList";
import { LoadingSpinner } from "./common/search/loadingComponents/LoadingSpinner";

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
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <div className=" h-[15rem] w-full bg-stone-600"></div>;
  }

  const x = animeList?.filter(
    (item, index) => item.releaseDate !== animeList[index].releaseDate
  );
  console.log(x);
  return (
    <Layout>
      <section className=" w-full h-[72.3dvh] relative flex flex-col gap-2 ">
        <div className=" w-full  bg-Primary  rounded-md flex justify-end items-center p-1">
          <form className="max-w-sm ">
            <select className=" bg-Primary text-stone-500 font-semibold text-sm border border-[#101014] active:border-[#101014] rounded-lg block w-full p-2">
              <option>Sort By</option>
              {animeList?.map((item) => (
                <option key={item.id} value={`${item.releaseDate}`}>
                  {item.releaseDate}
                </option>
              ))}
            </select>
          </form>
        </div>
        <ul className=" flex flex-wrap gap-2 w-full h-full justify-center overflow-y-scroll no-scrollbar relative">
          {animeList?.map((item) => {
            return (
              <CollectionList
                inneRef={ref}
                key={item.id}
                image={item.image}
                title={item.title.english}
              />
            );
          })}
          {isFetchingNextPage && <LoadingSpinner />}
        </ul>
      </section>
    </Layout>
  );
};

export default Collection;
