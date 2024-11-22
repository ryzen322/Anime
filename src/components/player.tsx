import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  isYouTubeProvider,
  MediaErrorDetail,
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  MediaProviderAdapter,
  Poster,
  type MediaPlayerProps,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { useContext, useEffect, useRef } from "react";
import { ContextEpisode } from "./store/store";

interface MediaType extends MediaPlayerProps {
  playerError?: (param: string) => void;
}

const Player = (props: MediaType) => {
  const { poster, title } = props;
  const { checkPlayerError } = useContext(ContextEpisode);

  const player = useRef<MediaPlayerInstance>(null);
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }
  function onError(detail: MediaErrorDetail) {
    checkPlayerError(detail.message);
  }

  useEffect(() => {
    player.current!.startLoading();

    player.current!.startLoadingPoster();
  }, []);

  return (
    <MediaPlayer
      {...props}
      fullscreenOrientation="landscape"
      viewType="video"
      logLevel="warn"
      onError={onError}
      load="visible"
      posterLoad="visible"
      crossOrigin
      playsInline
      crossorigin={true}
      playsinline={true}
      onProviderChange={onProviderChange}
      ref={player}
    >
      <MediaProvider>
        <Poster className="vds-poster" src={poster} alt={title} />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default Player;
