import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/api";
import NewsHeader from "../components/NewsHeader";
import SubNews from "../components/SubNews";
import NewsItem from "../components/NewsItem";

const NewsPage = () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["news"],
  //   queryFn: getNews,
  // });

  // if (isLoading) {
  //   return <div className=" h-[10rem] w-full bg-stone-50"></div>;
  // }

  return (
    <main className=" container mx-auto mt-[4.5rem]">
      <NewsHeader />

      {/* <section className=" flex flex-col gap-3 mb-4">
        <NewsItem />
      </section> */}
    </main>
  );
};

export default NewsPage;
