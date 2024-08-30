import { DetailAnimeObj } from "../types";
import { ArticleDetailCards } from "./ArticleDetailCards";

export const ArticleDetail = (props: DetailAnimeObj) => {
  return (
    <section className=" flex flex-col gap-2">
      <div className="flex flex-col items-center gap-2  md:flex-row-reverse">
        <ArticleDetailCards {...props} />
        <ArticleSubDetail />
      </div>
    </section>
  );
};

export const ArticleSubDetail = () => {
  return <article className=" w-full flex flex-col gap-2"></article>;
};
