import { DetailAnimeObj } from "../types";
import { Achievements } from "./Achievements";
import { ChannelSocial } from "./ChannelSocial";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import PlayerYt from "./PlayerYt";
import Recommendation from "./Recommendation";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const {
    description,
    recommendations,
    genres,
    studios,
    trailer,
    title,
    characters,
  } = props;

  return (
    <article className=" w-full flex flex-col gap-8 h-full md:w-[60%] lg:w-[70%]">
      <article className="  w-full rounded-md overflow-hidden cursor-pointer  aspect-video">
        <PlayerYt
          children=""
          src={trailer?.id}
          poster={trailer?.thumbnail}
          title={title?.english ? title.english : ""}
        />
      </article>
      <Recommendation recommend={recommendations} />
      <div className=" grid grid-cols-2">
        <DetailGenre title="Genre" list={genres} />
        <DetailGenre title="Studios" list={studios} />
      </div>
      <ChannelSocial />
      <Description description={description!} />
      <Achievements char={characters} />
    </article>
  );
};
