import React, { useState } from "react";
import { ContextEpisode, Player } from "./store";

const EpisodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ep, setEp] = useState("");
  const [isError, setIsError] = useState<null | string>(null);
  const [chooseStream, setChooseStream] = useState<Player>("youtube");

  const changeEpisode = (episodeString: string) => {
    changePlayer("anime");
    setEp(episodeString);
  };

  const changePlayer = (playerState: Player) => {
    setChooseStream(playerState);
  };

  const checkPlayerError = (message: string | null) => {
    setIsError(message);
  };

  return (
    <ContextEpisode.Provider
      value={{
        checkPlayerError,
        playerError: isError,
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
