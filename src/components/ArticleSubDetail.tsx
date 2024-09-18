import { useState } from "react";
import { DetailAnimeObj } from "../types";
import { Achievements } from "./Achievements";
import { ChannelSocial } from "./ChannelSocial";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import PlayerYt from "./PlayerYt";
import Recommendation from "./Recommendation";

type Player = "youtube" | "anime";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const [playerState, setPlayerState] = useState<Player>("youtube");

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
        {playerState === "youtube" ? (
          <PlayerYt
            children=""
            src={trailer?.id}
            poster={trailer?.thumbnail}
            title={title?.english ? title.english : ""}
          />
        ) : (
          ""
        )}
      </article>

      <div className=" w-full rounded-sm relative flex flex-col items-center justify-end gap-1">
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
        {/* <span className=" text-[11px] text-gray-500 font-semibold">
          Dont forget to subscribe
        </span> */}
      </div>

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
