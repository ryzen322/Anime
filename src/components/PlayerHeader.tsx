import { AiOutlineLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdClose } from "react-icons/md";

export function PlayerHeader(props: { closeModal: () => void }) {
  return (
    <div className=" w-full h-full rounded-md">
      <div className=" relative w-full h-full overflow-hidden  border border-black/20 rounded-t-md">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg"
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" absolute top-0 left-0 bottom-0 w-full h-full z-20 bg-gradient-to-b from-[#101014]/20 to-[#101014] flex flex-col">
        <div className="w-full p-2">
          <div
            className=" h-10 w-10 rounded-full bg-[#181818] ml-auto flex items-center justify-center cursor-pointer"
            onClick={() => props.closeModal()}
          >
            <MdClose className=" text-3xl text-stone-300" />
          </div>
        </div>
        <div className=" mt-auto w-full flex flex-col py-8 px-8 gap-4">
          <h1 className=" text-2xl font-semibold md:text-4xl">One Piece</h1>
          <div className=" flex items-center gap-2">
            <div className="  flex items-center gap-3">
              <button className=" bg-stone-200 text-black font-bold px-4 rounded-md py-1 cursor-pointer text-base flex items-center gap-2 md:text-xl md:py-2 md:px-6">
                <span>
                  <FaPlay />
                </span>
                Play
              </button>
              <button className=" flex items-center justify-center h-8 w-8 border-2 border-stone-400 rounded-full bg-Primary/20 hover:border-white transition-all duration-200 ease-in-out md:h-12 md:w-12">
                <IoMdAdd className=" text-xl md:text-3xl" />
              </button>
              <button className=" flex items-center justify-center h-8 w-8 border-2 border-stone-400 rounded-full bg-Primary/20 hover:border-white transition-all duration-200 ease-in-out md:h-12 md:w-12">
                <AiOutlineLike className=" text-lg md:text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
