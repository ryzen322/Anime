import { useState } from "react";
import { DetailAnimeObj } from "../types";
import { ArticleDetailCards } from "./ArticleDetailCards";
import { ChannelSocial } from "./ChannelSocial";
import { DetailGenre } from "./DetailGenre";

export const ArticleDetail = (props: DetailAnimeObj) => {
  return (
    <section className=" flex flex-col gap-2">
      <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
        <ArticleDetailCards {...props} />
        <ArticleSubDetail {...props} />
      </div>
    </section>
  );
};

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const { description } = props;
  return (
    <article className=" w-full flex flex-col gap-8 h-full md:w-[60%]">
      <article className=" h-[211px] w-full bg-stone-500 rounded-md overflow-hidden cursor-pointer"></article>
      <div className=" flex flex-col gap-3">
        <h1 className=" text-white font-bold">Recommendation</h1>
        <ul className=" flex items-center gap-1 overflow-x-scroll no-scrollbar">
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
          <li className=" h-[50px] w-[88px] min-w-[88px] rounded-md bg-stone-600"></li>
        </ul>
      </div>
      <div className=" grid grid-cols-2">
        <DetailGenre
          title="Genre"
          list={["Action", "Drama", "Aventure", "Fantasy"]}
        />
        <DetailGenre title="Studios" list={["Coop", "Competitive"]} />
      </div>
      <ChannelSocial />
      <Description description={description!} />
    </article>
  );
};

export const Description = ({ description }: { description: string }) => {
  const [showmore, setShowmore] = useState(false);

  const descLength = description?.length > 853 ? true : false;

  return (
    <article
      className={`w-full ${
        showmore ? "h-auto pb-10" : "h-[25rem]"
      } flex flex-col gap-2 relative overflow-hidden`}
    >
      <p
        className=" text-stone-300 font-semibold text-sm relative"
        dangerouslySetInnerHTML={{
          __html: `${description} `,
        }}
      />
      {descLength && (
        <div
          className={`absolute w-full h-full top-0 left-0 bottom-0  flex flex-col justify-end items-start ${
            !showmore ? "bg-gradient-to-b from-[#101014]/10 to-[#101014]" : ""
          }`}
        >
          <button
            className=" text-blue-400 cursor-pointer font-semibold"
            onClick={() => setShowmore(!showmore)}
          >
            {showmore ? "show less" : "show more"}
          </button>
        </div>
      )}
    </article>
  );
};
