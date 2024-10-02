import NewsItems from "./NewsItems";

const NewsItem = () => {
  return (
    <div className=" h-[12rem] w-full  flex flex-col gap-1 px-1">
      <h1 className=" text-white font-semibold text-sm">Most Popular</h1>
      <ul className=" h-full flex items-center overflow-x-scroll no-scrollbar gap-1">
        <NewsItems />
      </ul>
    </div>
  );
};

export default NewsItem;
