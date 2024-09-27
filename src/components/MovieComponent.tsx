import { useContext } from "react";
import Player from "./player";
import { ContextEpisode } from "./store/store";
import { nextStringEpisode } from "../utils/nextStringEpisode";
import { useQuery } from "@tanstack/react-query";
import { getStreaming } from "../services/api";

interface PlayerType {
  thumbnail?: string;
  resolution: number;
}

const MovieComponent = ({ resolution, thumbnail }: PlayerType) => {
  const { episode, changeEpisode } = useContext(ContextEpisode);

  const { data } = useQuery({
    queryKey: ["watch", episode],
    queryFn: async () => getStreaming(episode),
  });

  return (
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
  );
};

export default MovieComponent;
