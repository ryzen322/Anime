import { SecondaryButton } from "./SecondaryButton";

export const ArticleDetail = () => {
  return (
    <section className=" flex flex-col items-center gap-2">
      <ArticleDetailCards />
    </section>
  );
};

export const ArticleDetailCards = () => {
  return (
    <article className=" flex flex-col gap-4 items-center w-[375px]">
      <article className=" h-[212px] w-full bg-stone-500 rounded-md">
        {/* image Header */}
      </article>
      <article className=" w-full h-[119px] border border-stone-400/50 rounded-md p-4 flex items-center gap-4">
        <div className=" h-full rounded-md flex items-center justify-center border border-stone-400/50 p-1 ">
          <h1 className=" text-white font-bold text-4xl">18+</h1>
        </div>
        <div className=" h-full w-full grid grid-rows-2 ">
          <div className=" border-b border-stone-400/60 w-full flex flex-col gap-1">
            <h1 className=" text-white font-bold text-xs">7+</h1>
            <p className=" text-stone-400 text-xs font-bold">Mild Violence</p>
          </div>
          <div className=" w-full flex items-center justify-center">
            <p className=" text-stone-400 text-xs font-bold">
              In-Game Purchases (includes Random Items)
            </p>
          </div>
        </div>
      </article>

      <article className=" w-full h-[26px] flex items-center justify-center">
        <button className=" text-stone-200 bg-[#333337] px-2 font-semibold rounded-md">
          Base Game
        </button>
      </article>
      <article className=" w-full  flex items-center justify-center flex-col gap-4">
        <button className=" text-stone-200 px-2 font-bold rounded-md">
          Free
        </button>
        <p className=" text-stone-400 text-xs font-bold">
          May include in-app purchases
        </p>
      </article>
      <div className=" flex flex-col gap-2 w-full">
        <SecondaryButton>Get</SecondaryButton>
        <SecondaryButton variants={"secondary"}>Add To Cart</SecondaryButton>
        <SecondaryButton variants={"secondary"}>
          Add to Wishlist
        </SecondaryButton>
      </div>
    </article>
  );
};
