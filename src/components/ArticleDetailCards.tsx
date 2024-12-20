import { DetailAnimeObj } from "../types";
import Image from "./common/search/Image";
import { SecondaryButton } from "./SecondaryButton";
import { useContext } from "react";
import Episodes from "./Series/Episodes";
import { ContextEpisode } from "./store/store";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { activeEpisode } from "@/utils/activeEpisode";

export const ArticleDetailCards = (props: DetailAnimeObj) => {
  const { playerState, checkPlayerError, changePlayer, changeEpisode } =
    useContext(ContextEpisode);
  const { user } = useUser();

  const navigate = useNavigate();

  const {
    image,
    isAdult,
    isLicensed,
    duration,
    rating,
    type,
    releaseDate,
    season,
    currentEpisode,
    episodes,
  } = props;

  const parental = isAdult ? "18plus" : "13+";
  const licensed = isLicensed ? "Licensed" : "Pirated";

  const activeEp = activeEpisode({
    activeEp: currentEpisode ? currentEpisode + "" : episodes?.length + "",
    episodes,
  });

  return (
    <article className=" flex flex-col h-full gap-4 w-full">
      {playerState === "anime" && (
        <Episodes className=" hidden md:block" episodes={episodes!} />
      )}
      <div className="flex flex-col items-center gap-1 ">
        <div className=" py-1 px-1 text-black  font-bold text-sm rounded-sm flex items-center justify-center cursor-pointer w-full">
          {!user ? (
            <button
              className=" price rounded-sm text-white p-3 w-full"
              onClick={() => {
                navigate("/sign-in");
                checkPlayerError(null);
              }}
            >
              Sign in To Watch HD
            </button>
          ) : (
            <div className="  font-bold flex flex-col justify-center  premium rounded-sm text-white p-3 w-full">
              <p>You are Watching</p>
              <p>Premium</p>
              <p>4K + HDR</p>
            </div>
          )}
        </div>
      </div>

      <article
        className=" h-[500px] w-full mb-auto rounded-md overflow-hidden relative cursor-pointer group md:h-[400px] lg:h-[500px]"
        onClick={() => {
          changePlayer("anime");
          changeEpisode(activeEp);
          changeEpisode(activeEp);
        }}
      >
        <Image
          src={`${image}`}
          className=" w-full h-full object-cover relative group-hover:scale-110 transition-all duration-200 ease-in"
        />
        <div className=" absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/10 to-black/65 flex items-center justify-center ">
          <div className=" w-16 h-16 rounded-full bg-black flex items-center justify-center pl-1 opacity-0 transition-all duration-200 ease-in group-hover:opacity-100">
            <FaPlay className=" text-3xl text-white" />
          </div>
        </div>
      </article>

      <article className=" w-full h-[119px] border border-stone-400/50 rounded-md p-4 flex items-center gap-4 hover:border-white">
        <div className=" h-full rounded-md flex items-center justify-center border border-stone-400/50 p-1 ">
          <h1 className=" text-white font-bold text-4xl">{parental}</h1>
        </div>
        <div className=" h-full w-full grid grid-rows-2 ">
          <div className=" border-b border-stone-400/60 w-full flex flex-col gap-1 ">
            <h1 className=" text-white font-bold text-xs">{parental}</h1>
            <p className=" text-stone-400 text-xs font-bold">
              Rating : {rating}
            </p>
          </div>
          <div className=" w-full flex flex-col justify-center">
            <p className=" text-stone-400 text-xs font-bold md:text-center md:leading-3">
              License: {licensed}
            </p>
            <p className=" text-stone-400 text-xs font-bold md:text-center md:leading-3">
              Duration: {duration} mins
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
      <ul className=" flex flex-col w-full">
        <li className=" h-[42px] w-full flex items-center justify-between border-b border-stone-400/50 phoneX:px-1">
          <p className=" text-stone-400 font-semibold">Current Episode</p>
          <h1 className=" text-white font-semibold">{currentEpisode}</h1>
        </li>
        <li className=" h-[42px] w-full flex items-center justify-between border-b border-stone-400/50 phoneX:px-1">
          <p className=" text-stone-400 font-semibold">Release Date</p>
          <h1 className=" text-white font-semibold">{releaseDate}</h1>
        </li>
        <li className=" h-[42px] w-full flex items-center justify-between border-b border-stone-400/50 phoneX:px-1">
          <p className=" text-stone-400 font-semibold">Platform</p>
          <h1 className=" text-white font-semibold">{type}</h1>
        </li>
        <li className=" h-[42px] w-full flex items-center justify-between border-b border-stone-400/50 phoneX:px-1">
          <p className=" text-stone-400 font-semibold">Season</p>
          <h1 className=" text-white font-semibold">{season}</h1>
        </li>
      </ul>
      <div className=" flex items-center gap-2 w-full">
        <SecondaryButton variants={"secondary"} size={"secondary"}>
          Share
        </SecondaryButton>
        <SecondaryButton variants={"secondary"} size={"secondary"}>
          Report
        </SecondaryButton>
      </div>
    </article>
  );
};
