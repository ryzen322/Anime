import React, { useState } from "react";
import { ContextEpisode } from "./store";
import { useQuery } from "@tanstack/react-query";
import { getStreaming } from "../../services/api";

const EpisodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ep, setEp] = useState("kimetsu-no-yaiba-episode-1");

  const { data } = useQuery({
    queryKey: ["watch", ep],
    queryFn: async () => getStreaming(ep),
  });

  const changeEpisode = (episodeString: string) => {
    console.log(episodeString);
    // setEp(episodeString);
    setEp;
  };

  return (
    <ContextEpisode.Provider
      value={{ episode: ep, context: data, changeEpisode }}
    >
      {children}
    </ContextEpisode.Provider>
  );
};

export default EpisodeProvider;
