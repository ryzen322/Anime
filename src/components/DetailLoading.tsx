import { ArticleLoading } from "./ArticleLoading";

export function DetailLoading() {
  return (
    <section className=" flex flex-col gap-2 w-full ">
      <div className="flex flex-col items-center gap-8 h-auto md:flex-row-reverse md:items-start">
        <ArticleLoading />
        <LoadingArticle />
      </div>
    </section>
  );
}

export function LoadingArticle() {
  return (
    <article className=" w-full flex flex-col gap-8 h-full ">
      <article className="  w-full bg-Loading rounded-md overflow-hidden cursor-pointer  aspect-video"></article>
      <div className=" w-full flex items-center justify-center gap-2">
        <div className=" bg-Loading h-[3rem] w-[4rem] rounded-sm"></div>
        <div className=" bg-Loading h-[3rem] w-[4rem] rounded-sm"></div>
        <div className=" bg-Loading h-[3rem] w-[4rem] rounded-sm"></div>
      </div>
      <div className=" flex flex-col gap-6 mt-4">
        <div className=" h-[1.5rem] w-full bg-Loading"></div>
        <div className=" h-[1.5rem] w-full bg-Loading"></div>
        <div className=" h-[1.5rem] w-full bg-Loading"></div>
      </div>
      <div className=" w-full grid grid-cols-2 h-[10rem] ">
        <div className=" flex flex-col h-full w-full justify-between border-r border-stone-500/50">
          <div className=" h-[1.5rem] w-[80%] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[50%] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[80%] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[75%] bg-Loading rounded-sm"></div>
        </div>
        <div className=" flex flex-col h-full w-full justify-evenly pl-4">
          <div className=" h-[1.5rem] w-[80%] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[75%] bg-Loading rounded-sm"></div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 ">
        <div className=" w-full h-[1.5rem] rounded-sm bg-Loading "></div>
        <div className=" w-full h-[1.5rem] rounded-sm bg-Loading "></div>
        <div className=" w-full h-[1.5rem] rounded-sm bg-Loading "></div>
      </div>
    </article>
  );
}
