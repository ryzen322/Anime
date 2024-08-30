import { DetailAnimeObj } from "../types";
import { ChannelSocial } from "./ChannelSocial";
import Image from "./common/search/Image";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import Recommendation from "./Recommendation";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const { description, recommendations, genres, studios, trailer } = props;
  return (
    <article className=" w-full flex flex-col gap-8 h-full md:w-[60%] lg:flex-1">
      <article className="  w-full bg-stone-500 rounded-md overflow-hidden cursor-pointer  aspect-video">
        <Image
          src={trailer?.thumbnail}
          className=" h-full w-full object-cover"
        />
      </article>
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
