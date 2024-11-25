import { useQuery } from "@tanstack/react-query";
import { listAnime, queryAnimeType } from "../services/api";
import SlideCardUl from "./common/search/Card/SlideCardUl";

import { ScrollLoading } from "./common/search/loadingComponents/ScrollLoading";

const SectionCart = ({ animeProps }: { animeProps: listAnime }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["animelist", animeProps],
    queryFn: async () => queryAnimeType(animeProps),
    refetchOnMount: false, // Avoid refetch on component remount
    refetchOnWindowFocus: false, // Avoid refetch on focus
    // cacheTime: 10 * 60 * 1000, // Keep cached data for 10 minutes
  });

  if (isLoading) {
    return <ScrollLoading />;
  }
  return (
    <>
      <h1 className=" text-white font-semibold text-2xl">Top New Release</h1>
      <section className=" flex flex-col w-full  p-3 rounded-md md:flex-row md:p-0 md:gap-2 md:mt-2 ">
        <SlideCardUl item={data?.results} />
      </section>
    </>
  );
};

export default SectionCart;
