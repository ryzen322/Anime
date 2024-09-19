import { createContext } from "react";
import { ContextObject } from "../../types";

export const ContextEpisode = createContext<{
  episode: string;
  context?: ContextObject;
  changeEpisode: (episodeString: string) => void;
  loading: boolean;
}>({
  episode: "",
  changeEpisode: () => {},
  loading: true,
});
