import { DetailAnimeObj } from "../types";
import { ArticleDetailCards } from "./ArticleDetailCards";
import { ArticleSubDetail } from "./ArticleSubDetail";

export const ArticleDetail = (props: DetailAnimeObj | undefined) => {
  return (
    <section className=" flex flex-col gap-2 w-full ">
      <div className="flex flex-col-reverse items-center gap-4 h-auto  sm:flex-col-reverse md:flex-row-reverse md:items-start xl:gap-10">
        <ArticleDetailCards {...props} />
        <ArticleSubDetail {...props} />
      </div>
    </section>
  );
};
