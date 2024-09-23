import React, { useState } from "react";
import { ContextEpisode, Player } from "./store";
import { useQuery } from "@tanstack/react-query";
import { getStreaming } from "../../services/api";

const EpisodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ep, setEp] = useState("");
  const [chooseStream, setChooseStream] = useState<Player>("youtube");

  const { data, isLoading } = useQuery({
    queryKey: ["watch", ep],
    queryFn: async () => getStreaming(ep),
  });

  const changeEpisode = (episodeString: string) => {
    console.log(episodeString);
    setEp(episodeString);
  };

  const changePlayer = (playerState: Player) => {
    setChooseStream(playerState);
  };

  return (
    <ContextEpisode.Provider
      value={{
        episode: ep,
        context: data,
        changeEpisode,
        loading: isLoading,
        playerState: chooseStream,
        changePlayer,
      }}
    >
      {children}
    </ContextEpisode.Provider>
  );
};

export default EpisodeProvider;
