import { useContext } from "react";
import Player from "./player";
import { ContextEpisode } from "./store/store";
import { nextStringEpisode } from "../utils/nextStringEpisode";
import { useQuery } from "@tanstack/react-query";
import { getStreaming } from "../services/api";
import { Link } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";

interface PlayerType {
  thumbnail?: string;
  resolution: number;
}

const MovieComponent = ({ resolution, thumbnail }: PlayerType) => {
  const { episode, changeEpisode, playerError } = useContext(ContextEpisode);

  const { data } = useQuery({
    queryKey: ["watch", episode],
    queryFn: async () => getStreaming(episode),
  });

  return (
    <div className=" w-full h-full">
      {!playerError ? (
        <Player
          children=""
          src={data?.sources[resolution].url}
          title={`${episode}`}
          autoPlay
          onEnd={() => {
            changeEpisode(nextStringEpisode(episode));
          }}
          poster={`${
            thumbnail
              ? thumbnail
              : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Shonen-Jump-wrong-better-Cropped.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
          }`}
        />
      ) : (
        <div className=" w-full h-full p-1">
          <div className=" flex flex-col items-center justify-center text-white font-semibold  w-full h-full ">
            <MdOutlineErrorOutline
              className=" text-white text-4xl lg:text-8xl
      "
            />
            <h1 className=" text-lg font-bold lg:text-2xl">We're apologize</h1>
            <h1 className=" text-lg font-bold  lg:text-2xl">Video Not Found</h1>
            <p className=" mt-3 text-xs text-center lg:text-lg">
              {playerError}
            </p>
            <p className=" text-sm font-semibold flex items-center gap-1 mt-1 ">
              <span className=" text-stone-400">View Our</span>
              <span className=" underline text-blue-400 text-xs">
                Privacy Policy
              </span>
            </p>
            <div className=" flex flex-col items-center gap-2 w-full mt-3 ">
              <Link
                to={"/"}
                className=" bg-[#212125] py-2  rounded-md text-stone-400  cursor-pointer px-2 text-sm"
              >
                Back To home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieComponent;
