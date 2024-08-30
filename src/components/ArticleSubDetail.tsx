import { DetailAnimeObj } from "../types";
import { ChannelSocial } from "./ChannelSocial";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import Recommendation from "./Recommendation";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const { description, recommendations, genres, studios } = props;
  return (
    <article className=" w-full flex flex-col gap-8 h-full md:w-[60%] lg:flex-1">
      <article className=" h-[211px] w-full bg-stone-500 rounded-md overflow-hidden cursor-pointer"></article>
      <Recommendation recommend={recommendations} />
      <div className=" grid grid-cols-2">
        <DetailGenre title="Genre" list={genres} />
        <DetailGenre title="Studios" list={studios} />
      </div>
      <ChannelSocial />
      <Description description={description!} />
    </article>
  );
};
