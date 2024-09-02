export function DetailLoading() {
  return (
    <section className=" flex flex-col gap-2 w-full ">
      <div className="flex flex-col items-center gap-4 h-auto  sm:flex-col-reverse md:flex-row-reverse md:items-start xl:gap-16">
        <ArticleLoading />
      </div>
    </section>
  );
}

export function ArticleLoading() {
  return (
    <article className=" flex flex-col h-full gap-4 w-full">
      <article className=" h-[500px] w-full mb-auto rounded-md overflow-hidden md:h-[400px] bg-Loading animate-pulse"></article>
      <article className=" w-full h-[119px] border border-stone-400/50 rounded-md p-4 flex items-center gap-4 hover:border-white">
        <div className=" h-full rounded-md flex items-center justify-center  p-1 w-20 bg-Loading shrink-0"></div>
        <div className=" w-full h-full flex flex-col">
          <div className=" h-[60%] grid grid-rows-2 gap-1 py-1 ">
            <div className=" bg-Loading rounded-sm"></div>
            <div className=" bg-Loading rounded-sm"></div>
          </div>
          <div className=" h-[1px] bg-stone-400/50"></div>
          <div className=" flex-1 flex items-center justify-center py-1">
            <div className=" h-full bg-Loading flex-1  rounded-sm"></div>
          </div>
        </div>
      </article>
      <article className=" w-full h-[26px] flex items-center justify-center">
        <button className=" text-stone-200 bg-Loading px-2 font-semibold rounded-md py-2"></button>
      </article>
    </article>
  );
}
