import { useContext } from "react";
import { DetailAnimeObj } from "../types";
import { Achievements } from "./Achievements";
import { ChannelSocial } from "./ChannelSocial";
import { Description } from "./Description";
import { DetailGenre } from "./DetailGenre";
import Recommendation from "./Recommendation";
import Player from "./player";
import Episodes from "./Series/Episodes";
import { ContextEpisode } from "./store/store";
import { activeEpisode } from "../utils/activeEpisode";
import { useUser } from "@clerk/clerk-react";
import MovieComponent from "./MovieComponent";

type Player = "youtube" | "anime";

export const ArticleSubDetail = (props: DetailAnimeObj) => {
  const { user } = useUser();

  const resolution = user ? 3 : 0;
  const { changeEpisode, playerState, changePlayer } =
    useContext(ContextEpisode);

  const {
    description,
    recommendations,
    genres,
    studios,
    trailer,
    title,
    characters,
    episodes,
    currentEpisode,
  } = props;

  const activeEp = activeEpisode({
    activeEp: currentEpisode ? currentEpisode + "" : episodes?.length + "",
    episodes,
  });

  return (
    <article className=" w-full flex flex-col gap-8 h-full md:min-w-[60%] lg:min-w-[70%]">
      <article className="  w-full rounded-md overflow-hidden cursor-pointer  aspect-video">
        {playerState === "youtube" ? (
          <Player
            children=""
            src={`youtube/${trailer?.id}`}
            title={title?.english ? title.english : ""}
            poster={`${
              trailer?.thumbnail
                ? trailer?.thumbnail
                : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Shonen-Jump-wrong-better-Cropped.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
            }`}
          />
        ) : (
          <MovieComponent
            resolution={resolution}
            thumbnail={trailer?.thumbnail}
          />
        )}
      </article>

      {playerState === "anime" && (
        <Episodes className="  md:hidden" episodes={episodes!} />
      )}

      {playerState === "youtube" && (
        <div className=" w-full rounded-sm relative flex flex-col items-center justify-end gap-1">
          <h1 className=" text-white font-semibold">
            Free to Watch to any Device
          </h1>
          <p className=" text-white/80 text-xs font-semibold">
            To improve this Webisite we accept donation via Gcash
          </p>
          <p className=" text-stone-400 text-xs font-semibold text-center">
            {activeEp}
          </p>
          <button
            className=" bg-white text-white flex items-center justify-center rounded-md h-[3rem] px-7 py-1 font-bold text-sm mt-2 cursor-pointer price"
            onClick={() => {
              changePlayer("anime");
              changeEpisode(activeEp);
              changeEpisode(activeEp);
            }}
          >
            Watch Now
          </button>
        </div>
      )}

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
