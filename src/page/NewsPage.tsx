import NewsHeader from "../components/NewsHeader";

import NewsItem from "../components/NewsItem";

const NewsPage = () => {
  return (
    <main className=" container mx-auto mt-[4.5rem]">
      <NewsHeader />

      <section className=" flex flex-col gap-3 mb-4">
        <NewsItem />
      </section>
    </main>
  );
};

export default NewsPage;
