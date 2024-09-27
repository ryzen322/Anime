import React, { useState } from "react";
import { ContextEpisode, Player } from "./store";

const EpisodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ep, setEp] = useState("");
  const [chooseStream, setChooseStream] = useState<Player>("youtube");

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
        changeEpisode,
        playerState: chooseStream,
        changePlayer,
      }}
    >
      {children}
    </ContextEpisode.Provider>
  );
};

export default EpisodeProvider;
