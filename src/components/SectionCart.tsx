import { useQuery } from "@tanstack/react-query";
import { popularAnime } from "../services/api";
import SlideCardUl from "./common/search/Card/SlideCardUl";

import { ScrollLoading } from "./common/search/loadingComponents/ScrollLoading";

const SectionCart = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["item"],
    queryFn: () => popularAnime(),
  });

  if (isLoading) {
    return <ScrollLoading />;
  }
  return (
    <>
      <h1 className=" text-white font-semibold text-2xl">Top New Release</h1>
      <section className=" flex flex-col w-full  p-3 rounded-md md:flex-row md:p-0 md:gap-2 md:mt-2 ">
        <SlideCardUl item={data!} />
      </section>
    </>
  );
};

export default SectionCart;
