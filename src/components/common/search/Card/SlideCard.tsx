import { useState } from "react";
import Image from "../Image";
import { FaPlus, FaPlay } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
const SlideCard = ({
  src,
  description,
}: {
  src: string;
  description: string;
}) => {
  const [toggleText, setToggleText] = useState(true);

  const text = description.split(" ").slice(0, 6);
  const textSTring = [...text].toString().replaceAll(",", " ");
  return (
    <li
      className="  min-w-full p-4 relative transition-all duration-300 flex items-center justify-center"
      id={"child"}
    >
      <div className=" h-[30rem] w-full rounded-md relative">
        <div className=" absolute w-full h-full right-0 left-0 bg-gradient-to-b from-black/10 to-black/65 z-20 p-4 rounded-md flex flex-col">
          <div className=" w-[2rem] h-[2rem] bg-black/85 ml-auto rounded-full border-[2px] flex items-center justify-center hover:bg-black">
            <FaPlus className=" text-white text-lg" />
          </div>
          <div className=" mt-auto text-white flex flex-col ">
            <h1 className=" text-xl font-bold">Attack on Titan</h1>
            <p className=" text-xs font-semibold text-stone-300">Rating: 84</p>
            <span className=" text-xs font-semibold text-stone-300">
              Adventure, Action, Drama
            </span>
            <div
              className={` relative ${
                toggleText
                  ? "h-[1rem] overflow-y-scroll flex gap-1"
                  : " min-h-[7rem] max-h-[5rem] flex flex-col overflow-y-scroll"
              } transition-all duration-200 ease-linear`}
            >
              <p
                className=" text-xs relative top-0 bottom-0"
                dangerouslySetInnerHTML={{
                  __html: toggleText ? `${textSTring}` : `${description} ...`,
                }}
                onClick={() => setToggleText(!toggleText)}
              />
              <p
                className=" text-stone-400 text-xs text-right cursor-pointer"
                onClick={() => setToggleText(!toggleText)}
              >
                {toggleText ? "more" : ""}
              </p>
            </div>
            <div className=" flex items-center gap-2 mt-1">
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center px-3 py-1 gap-1  rounded-sm ">
                <FaPlay className=" text-base" />
              </button>
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center px-3 py-1  rounded-sm ">
                <MdOutlinePlaylistAdd className=" text-base" />
              </button>
              <button className=" text-black bg-white/70  text-xs font-bold flex items-center justify-center px-3 py-1  rounded-sm ">
                <IoAlertCircle className=" text-base" />
              </button>
            </div>
          </div>
        </div>

        <Image
          className=" w-full h-full object-cover rounded-md scale-95"
          src={src}
        />
      </div>
    </li>
  );
};

export default SlideCard;
