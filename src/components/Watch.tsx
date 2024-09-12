import Portal from "./modal/Portal";
import { PlayerHeader } from "./PlayerHeader";

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <section
        className=" w-[98%] h-dvh mt-14 text-white z-50 rounded-md bg-Primary md:w-[90%] lg:w-[80%] xl:w-[60%] xl:mt-10 2xl:w-[980px]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" aspect-video rounded-t-md overflow-hidden relative">
          <PlayerHeader />
        </div>
        <div className=" flex px-8 py-4">
          <article className=" flex flex-col w-[80%] ">
            <div className=" flex items-center gap-1">
              <p className=" text-stone-400 text-sm font-medium">
                {/* release Date */}
                2017
              </p>
              <p className=" text-stone-400 text-sm font-medium">
                {/* currentEpisode */}
                Episode 26
              </p>
              <p className=" text-stone-400 text-sm font-medium">
                {/* currentEpisode */}
                Available TV
              </p>
            </div>
            <div className=" flex items-center  gap-2">
              <p className=" text-white text-sm font-medium">16 +</p>
              <p className=" text-white text-sm font-medium">violence</p>
            </div>
            <div className=" flex flex-col">
              <p className=" text-white text-xs font-medium">Rating: 85</p>
              <p className=" text-white text-xs font-medium">Views: 757436</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <h1 className=" text-base font-semibold">Description</h1>
            </div>
          </article>
        </div>
      </section>
    </Portal>
  );
};

export default Watch;
