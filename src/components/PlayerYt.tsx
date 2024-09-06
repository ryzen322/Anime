import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  isYouTubeProvider,
  MediaErrorDetail,
  MediaErrorEvent,
  MediaPlayer,
  MediaProvider,
  MediaProviderAdapter,
  Poster,
  type MediaPlayerProps,
} from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

const PlayerYt = ({ src, poster, title }: MediaPlayerProps) => {
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

  return (
    <MediaPlayer
      src={`youtube/${src}`}
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
      title={title}
      poster={poster}
      onProviderChange={onProviderChange}
      onError={onError}
      load="visible"
      posterLoad="visible"
    >
      <MediaProvider>
        <Poster className="vds-poster" src={poster} alt="" />
      </MediaProvider>
      <DefaultVideoLayout
        // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
};

export default PlayerYt;
