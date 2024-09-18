import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaPlayerProps,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const Player = (props: MediaPlayerProps) => {
  const { poster, title } = props;
  return (
    <MediaPlayer {...props} fullscreenOrientation="none">
      <MediaProvider>
        <Poster className="vds-poster" src={poster} alt={title} />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default Player;
