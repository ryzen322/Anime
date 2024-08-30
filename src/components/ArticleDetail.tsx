import { DetailAnimeObj } from "../types";
import { ArticleDetailCards } from "./ArticleDetailCards";
import { ArticleSubDetail } from "./ArticleSubDetail";

export const ArticleDetail = (props: DetailAnimeObj) => {
  return (
    <section className=" flex flex-col gap-2 w-full">
      <div className="flex flex-col items-center gap-4 md:flex-row-reverse xl:gap-16">
        <ArticleDetailCards {...props} />
        <ArticleSubDetail {...props} />
      </div>
    </section>
  );
};
