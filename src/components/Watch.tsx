import Portal from "./modal/Portal";
import { MdClose } from "react-icons/md";

const Watch = (props: { closePortal: () => void }) => {
  return (
    <Portal togglePortal={props.closePortal}>
      <div
        className=" w-[95%] h-[85dvh] text-white z-50 rounded-md bg-Primary"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" aspect-video rounded-t-sm overflow-hidden relative ">
          <PlayerHeader />
        </div>
      </div>
    </Portal>
  );
};

export default Watch;

export function PlayerHeader() {
  return (
    <div className=" w-full h-full">
      <div className=" relative w-full h-full overflow-hidden  border border-black/20">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg"
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" absolute top-0 left-0 bottom-0 w-full h-full z-20 bg-gradient-to-b from-[#101014]/20 to-[#101014] flex flex-col">
        <div className="w-full p-2">
          <div className=" h-10 w-10 rounded-full bg-[#181818] ml-auto flex items-center justify-center cursor-pointer">
            <MdClose className=" text-3xl" />
          </div>
        </div>
        <div className=" mt-auto w-full"></div>
      </div>
    </div>
  );
}
