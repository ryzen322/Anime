export function ArticleLoading() {
  return (
    <article className=" flex flex-col h-full gap-4 w-full md:w-[60%] xl:w-1/2">
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
        <button className=" text-stone-200 bg-Loading px-14 font-semibold rounded-md py-4 "></button>
      </article>
      <article className=" w-full h-[26px] flex items-center justify-center">
        <button className=" text-stone-200 bg-Loading px-10 font-semibold rounded-md py-4 "></button>
      </article>
      <div className=" flex flex-col gap-2">
        <div className=" w-full h-[4rem] bg-Loading rounded-md"></div>
        <div className=" w-full h-[4rem] bg-Loading rounded-md"></div>
        <div className=" w-full h-[4rem] bg-Loading rounded-md"></div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className=" flex items-center justify-between border-b border-stone-500/50 px-1 py-2">
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
        </div>
        <div className=" flex items-center justify-between border-b border-stone-500/50 px-1 py-2">
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
        </div>
        <div className=" flex items-center justify-between border-b border-stone-500/50 px-1 py-2">
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
          <div className=" h-[1.5rem] w-[6rem] bg-Loading rounded-sm"></div>
        </div>
      </div>
      <div className=" w-full bg-Loading h-[2rem] rounded-sm"></div>
      <div className=" w-full h-[2rem] grid grid-cols-2 gap-4">
        <div className=" bg-Loading rounded-sm"></div>
        <div className=" bg-Loading rounded-sm"></div>
      </div>
    </article>
  );
}
