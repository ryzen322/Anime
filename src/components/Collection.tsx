import { useInfiniteQuery } from "@tanstack/react-query";
import Layout from "./Layout";
import { getInfinite } from "../services/api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CollectionList } from "./CollectionList";
import { LoadingSpinner } from "./common/search/loadingComponents/LoadingSpinner";
import { CollectionUL } from "./CollectionUL";
import CollectionLoading from "./common/search/loadingComponents/CollectionLoading";

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
    return <CollectionLoading />;
  }

  return (
    <Layout>
      <section className=" w-full h-[72.3dvh] relative flex flex-col gap-2 phoneX:h-[74.3dvh]">
        <h1 className=" text-white font-semibold text-2xl">Trending</h1>
        <div className=" flex flex-col overflow-hidden">
          <CollectionUL>
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
          </CollectionUL>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
