import { DetailAnimeObj } from "../types";
import { ArticleDetailCards } from "./ArticleDetailCards";
import { ArticleSubDetail } from "./ArticleSubDetail";

export const ArticleDetail = (props: DetailAnimeObj | undefined) => {
  return (
    <section className=" flex flex-col w-full gap-6">
      <div className="flex flex-col-reverse items-center gap-12 h-auto  md:flex-row-reverse md:items-start xl:gap-10">
        <ArticleDetailCards {...props} />
        <ArticleSubDetail {...props} />
      </div>
    </section>
  );
};
