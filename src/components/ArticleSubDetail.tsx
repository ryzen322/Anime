import { useContext, useState } from "react";
import { DetailAnimeObj } from "../types";
import { Achievements } from "./Achievements";
import { ChannelSocial } from "./ChannelSocial";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import Recommendation from "./Recommendation";
import Player from "./player";
import Episodes from "./Series/Episodes";
import { ContextEpisode } from "./store/store";

type Player = "youtube" | "anime";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const { episode, context } = useContext(ContextEpisode);
  const [playerState, setPlayerState] = useState<Player>("anime");

  const {
    description,
    recommendations,
    genres,
    studios,
    trailer,
    title,
    characters,
  } = props;

  console.log(episode);

  return (
    <article className=" w-full flex flex-col gap-8 h-full md:w-[60%] lg:w-[70%]">
      <article className="  w-full rounded-md overflow-hidden cursor-pointer  aspect-video">
        {playerState === "youtube" ? (
          <Player
            children=""
            src={`youtube/${trailer?.id}`}
            title={title?.english ? title.english : ""}
            poster={trailer?.thumbnail}
          />
        ) : (
          <Player
            children=""
            src={context?.sources[3].url}
            title="kimetsu-no-yaiba-episode-1"
            poster={`${
              trailer?.thumbnail
                ? trailer?.thumbnail
                : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Shonen-Jump-wrong-better-Cropped.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
            }`}
          />
        )}
      </article>

      <Episodes className="" />

      {/* <div className=" w-full rounded-sm relative flex flex-col items-center justify-end gap-1">
        <h1 className=" text-white font-semibold">
          Free to Watch to any Device
        </h1>
        <p className=" text-white/80 text-xs font-semibold">
          To improve this Webisite we accept donation via Gcash
        </p>
        <button
          className=" bg-white text-black flex items-center justify-center rounded-md px-7 py-1 font-bold text-sm mt-2 cursor-pointer"
          onClick={() => setPlayerState("anime")}
        >
          Watch Now
        </button>
      </div> */}

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

export function Watch() {
  return <div className=" h-full w-full bg-stone-500"></div>;
}
