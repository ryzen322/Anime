import { createContext } from "react";

export type Player = "youtube" | "anime";

export const ContextEpisode = createContext<{
  episode: string;

  changeEpisode: (episodeString: string) => void;

  playerState: Player;
  changePlayer: (player: Player) => void;
}>({
  episode: "",
  changeEpisode: () => {},

  playerState: "youtube",
  changePlayer: () => {},
});
