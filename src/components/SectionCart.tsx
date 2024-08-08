import { useQuery } from "@tanstack/react-query";
import { popularAnime } from "../services/api";
import SlideCardUl from "./common/search/Card/SlideCardUl";

const SectionCart = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["item"],
    queryFn: () => popularAnime({ page: 1, perPage: 6 }),
  });

  if (isLoading) {
    return "loading.....";
  }

  console.log(data);

  return (
    <section className=" flex flex-col w-full  p-3 rounded-md md:flex-row md:p-0 md:gap-2 md:mt-2">
      <SlideCardUl item={data!} />
    </section>
  );
};

export default SectionCart;
