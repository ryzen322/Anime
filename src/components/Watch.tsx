import { EpisodesArray } from "../hooks/useEpisdes";
import Portal from "./modal/Portal";
import { PlayerHeader } from "./PlayerHeader";

interface WatchType {
  closePortal: () => void;
  filteredEp: EpisodesArray;
  episodesItems: EpisodesArray;
  changeEpisodes: (id: number | undefined) => void;
}

const Watch = (props: WatchType) => {
  const { closePortal, filteredEp, episodesItems, changeEpisodes } = props;

  const filteredEpisodes = filteredEp[0];

  return (
    <Portal togglePortal={closePortal}>
      <section
        className=" w-[98%] h-dvh mt-14 text-white z-50 rounded-md bg-Primary flex flex-col gap-4 md:w-[90%] lg:w-[80%] xl:w-[60%] xl:mt-10 2xl:w-[980px]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" aspect-video rounded-t-md overflow-hidden relative">
          <PlayerHeader />
        </div>
        <div className=" flex flex-col px-6 gap-6">
          <div className=" w-full flex justify-between items-center">
            <h1 className=" font-semibold text-xl">Episodes</h1>
          </div>
          <div className=" w-full h-[3.5dvh] flex items-center gap-1 overflow-x-scroll no-scrollbar">
            {episodesItems.map((item) => (
              <div
                key={item?.id}
                className=" w-[20%] min-w-[20%] h-full rounded-sm bg-stone-700 flex  items-center justify-center md:min-w-[15%]"
                onClick={() => changeEpisodes(item?.id)}
              >
                {item?.pagePrev} - {item?.pageNext}
              </div>
            ))}
          </div>
          <div
            className={` w-full overflow-y-scroll no-scrollbar grid grid-cols-7 gap-1 md:grid-cols-10 lg:grid-cols-12`}
          >
            {filteredEpisodes?.episodesAnime?.map((item) => (
              <div
                key={item.id}
                className=" h-[3.5rem] bg-stone-500 rounded-sm cursor-pointer flex justify-center items-center"
              >
                <span className=" text-white text-xs">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Portal>
  );
};

export default Watch;
