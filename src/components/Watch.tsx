import Portal from "./modal/Portal";
import { PlayerHeader } from "./PlayerHeader";

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <div
        className=" w-[98%] h-dvh mt-14 text-white z-50 rounded-md bg-Primary md:w-[90%] lg:w-[80%] xl:w-[60%] xl:mt-10 2xl:w-[980px]"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" aspect-video rounded-t-md overflow-hidden relative">
          <PlayerHeader />
        </div>
        <div className=" flex flex-col w-full"></div>
      </div>
    </Portal>
  );
};

export default Watch;
