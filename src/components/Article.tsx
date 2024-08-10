import Card from "./common/search/Card/Card";

const Article = () => {
  return (
    <article className=" w-full  mb-4 px-1 flex flex-col gap-3 mt-6">
      <h1 className=" text-white font-semibold text-2xl">Popular Anime</h1>
      <Card />
    </article>
  );
};

export default Article;
