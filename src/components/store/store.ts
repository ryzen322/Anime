import { createContext } from "react";
import { ContextObject } from "../../types";

export type Player = "youtube" | "anime";

export const ContextEpisode = createContext<{
  episode: string;
  context?: ContextObject;
  changeEpisode: (episodeString: string) => void;
  loading: boolean;
  playerState: Player;
  changePlayer: (player: Player) => void;
}>({
  episode: "",
  changeEpisode: () => {},
  loading: true,
  playerState: "youtube",
  changePlayer: () => {},
});
