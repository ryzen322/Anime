import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  isYouTubeProvider,
  MediaErrorDetail,
  MediaErrorEvent,
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
import { useEffect, useRef } from "react";

const Player = (props: MediaPlayerProps) => {
  const { poster, title } = props;
  const player = useRef<MediaPlayerInstance>(null);
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }
  function onError(detail: MediaErrorDetail, nativeEvent: MediaErrorEvent) {
    console.log(detail);
    console.log(nativeEvent);
    console.log("hello");
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
      onProviderChange={onProviderChange}
      onEnded={(e) => {
        console.log(e);
      }}
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
